---
title: Equilibration in the Beale cut-point method
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, applied-pdes, numerical-analysis, interpolation, surface-pdes]
as_of: 2026-07-09
---
Equilibration is the extension map that reconstructs all secondary cut-point values from the independent primary unknowns, allowing overlapping Cartesian graph charts to behave like one surface discretization.

Up: [[BealeSurfaceSolver research (MOC)]] · Background: [[Beale cut-point method for surface PDEs]]

## The local interpolation rule

Let $s$ be a secondary cut point, $p$ its associated primary point, and $q^-$ and $q^+$ the neighboring cut points in the relevant chart direction. If the offset of $s$ from $p$ in grid units is $\theta$, with $|\theta|\le 1/2$, quadratic interpolation imposes

$$
u(s)
=\tfrac12(-\theta+\theta^2)u(q^-)
+(1-\theta^2)u(p)
+\tfrac12(\theta+\theta^2)u(q^+).
$$

The rule is exact on quadratic data along that grid line. It is also exact on constants because the three coefficients sum to one. The complication is that $q^-$ or $q^+$ can themselves be secondary. Reconstruction is therefore not a sequence of independent interpolations; the secondary values are mutually coupled.

## The global extension operator

Collect primary and secondary values into vectors $u_p$ and $u_s$. The interpolation equations have the block form

$$
u_s=\Pi_{sp}u_p+\Pi_{ss}u_s,
$$

so

$$
u_s=(I-\Pi_{ss})^{-1}\Pi_{sp}u_p.
$$

This defines the equilibration or primary-to-all extension map $E_h$. Each row of $\Pi_{ss}$ has absolute row sum at most $1/2$, making $I-\Pi_{ss}$ strictly diagonally dominant in the ideal construction. That gives existence and uniqueness for the extension even when secondary dependencies form cycles.

The Julia implementation analyzes those dependencies as strongly connected components. Acyclic components can be resolved in dependency order; small cyclic components are solved as local linear systems. The resulting sparse map can be cached and reused when assembling a surface operator or advancing many fields.

## Why it is geometry-generic

Once the cut points and their chart topology have been built, equilibration does not need to evaluate $\phi$. It depends on offsets and neighbor relationships, not on whether the underlying surface is a sphere, ellipsoid, torus, or another admissible level set. Geometry enters later through metric weights and tangent projections.

That separation is structurally valuable:

$$
\text{primary data}
\xrightarrow{E_h}
\text{all cut-point data}
\xrightarrow{L_h}
\text{local chart operator values}.
$$

The reduced operator is essentially the primary restriction of $L_hE_h$. A new PDE can reuse the same extension machinery if its spatial terms can be expressed through the existing chart operators.

## The price of mixed signs

The quadratic coefficients are not all nonnegative. For one sign of $\theta$, one of the two outer weights is negative. Consequently, even if the unreduced differential stencil has a favorable sign pattern, its composition with $E_h$ need not be monotone. This is why the method does not automatically inherit an M-matrix, a discrete maximum principle, or positivity preservation.

The repository records a practical manifestation in reaction–diffusion work: sharp Gray–Scott interfaces could overshoot below the physical range, feeding an unstable reaction term. A clamp or a monotone alternative was required in that research path. That is evidence about a particular implementation and regime, not a proof that every equilibrated implicit solve is unstable.

Robustness fallbacks create another tradeoff. When a distorted surface and coarse grid leave a missing half-stencil, the current implementation can drop the unavailable contribution while preserving constants rather than crashing. This broadens the executable geometry range, but it changes the local approximation and therefore belongs in convergence and sensitivity tests.

## What should be verified whenever equilibration changes

- Constants extend exactly.
- The primary values remain unchanged.
- Cyclic secondary components solve reproducibly.
- The extension is bounded as resolution and geometry change.
- A manufactured smooth field retains the expected convergence order after extension.
- Sparse assembled and matrix-free operators agree to the intended tolerance.
- Positivity-sensitive PDEs are tested independently rather than inferred from diffusion accuracy.

## Source trail

Synthesized from `research/phase1_foundation/10_foundation_beale_method.md`, `src/core/equilibration.jl`, `src/core/topology.jl`, and the implementation-campaign discussion of the no-M-matrix limitation.

## Open questions

- Is there a modified interpolation with useful monotonicity that preserves geometry generality and at least second-order accuracy?
- Can the extension norm be bounded uniformly over a quantitative class of surfaces and grids?
- How much accuracy is lost by the incomplete-stencil fallback, and can that loss be localized a priori?
- Would a variational interpretation of equilibration make energy estimates easier than a pointwise interpretation?
