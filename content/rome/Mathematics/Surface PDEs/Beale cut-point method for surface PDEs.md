---
title: Beale cut-point method for surface PDEs
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, applied-pdes, surface-pdes, numerical-analysis, level-sets]
as_of: 2026-07-09
---
The Beale cut-point method solves PDEs directly on an implicitly defined closed surface by intersecting it with a Cartesian grid and doing finite differences in overlapping graph charts.

Up: [[BealeSurfaceSolver research (MOC)]]

## The geometric object

Let a smooth closed surface be the zero set

$$
\Gamma = \{x\in\mathbb R^3:\phi(x)=0\},
$$

with $\phi\in C^2$ and $\lVert\nabla\phi\rVert\ge c_0>0$ near $\Gamma$. The nonvanishing-gradient condition makes the implicit-function theorem available everywhere: locally, at least one coordinate can be solved as a graph over the other two.

A Cartesian grid of spacing $h$ is laid across a box containing $\Gamma$. Each grid edge whose endpoints have opposite signs of $\phi$ contains a surface crossing. A safeguarded one-dimensional root solve locates that crossing; the resulting points are the method's **cut points**. Unlike a fitted triangulation, their connectivity is inherited from the ambient grid.

## Three overlapping chart families

Every admissible cut point is assigned to a chart according to the coordinate direction in which the surface is best resolved:

- $\Gamma_1$: $x=x(y,z)$;
- $\Gamma_2$: $y=y(z,x)$;
- $\Gamma_3$: $z=z(x,y)$.

If $n=\nabla\phi/\lVert\nabla\phi\rVert$ is the unit normal, a point is retained in chart $\Gamma_\nu$ when $|n_\nu|\ge\eta$, with $\eta<1/\sqrt 3$ and a repository default of $0.45$. The threshold avoids chart directions in which the surface is nearly vertical. For sufficiently small $h$, it also gives a quasi-uniform set of points and bounds the graph metric.

This is the first important abstraction: a local stencil is an ordinary planar finite-difference stencil in whichever chart resolves the surface well. A sphere, ellipsoid, torus, Cassini-type surface, or custom smooth level set changes $\phi$, not the stencil logic.

## Primary and secondary cut points

Several grid edges associated with the same nearby grid node can cross the surface. Only the closest cut point in each bucket is designated **primary** and receives an independent unknown. The others are **secondary**. Their values are reconstructed from primary values through [[Equilibration in the Beale cut-point method]].

This division prevents the discretization from carrying multiple nearly coincident degrees of freedom. It also creates the method's central analytic difficulty: the reduced operator is the composition of a local finite-difference operator with a global extension from primary to all cut points.

## Differential operators

In a graph chart, the surface metric $g_{ij}$ converts ordinary chart derivatives into intrinsic operators. The Laplace–Beltrami operator is

$$
\Delta_\Gamma u
=\frac{1}{\sqrt g}\partial_i\!\left(\sqrt g\,g^{ij}\partial_j u\right).
$$

The repository implements a nine-point divergence-form stencil that is geometry-generic and a sphere-specific nondivergence form used for comparison. The divergence form supports diffusion and supplies the elliptic backbone for reaction–diffusion, energy-balance climate, surface modes, potential-vorticity inversion, and other experiments.

Time integrators depend on equation type. The package has forward Euler, Crank–Nicolson, and BDF2 diffusion paths; GMRES supports implicit solves. The historical shallow-water path uses MacCormack predictor–corrector plus artificial viscosity, while research implementations explore semi-Lagrangian and structure-preserving alternatives. See [[Forced-damped shallow-water equations on a level-set surface]].

## Why the method is attractive

The surface can change without remeshing. Geometry is supplied by evaluating $\phi$ and $\nabla\phi$ at cut points, while topology and local finite differences reuse the Cartesian grid. That makes shape a numerical parameter, which is unusually useful when the scientific question is how a PDE response changes as a sphere becomes oblate, triaxial, nonconvex, or time dependent.

The cost scales with surface area rather than ambient volume once the cut points have been built. Repository benchmarks report cut-point counts and per-step cost growing approximately like $N^2$ as the nominal resolution $N$ doubles, which is the expected surface scaling.

## The method's honest envelope

The method is designed for smooth closed level-set surfaces, not arbitrary point clouds, corners, shocks, or multiscale roughness. Its observed errors are often second order, but the underlying Beale analysis does not provide a general convergence theorem for the fully reduced operator. Equilibration uses mixed-sign interpolation, so standard maximum-principle, summation-by-parts, and M-matrix arguments do not transfer automatically.

Strong curvature can also exhaust the admissible stencil supply on a coarse grid. In the repository's ellipsoid tests, some $N=40$ restricted-stencil constructions fail while $N\ge80$ succeeds or the broader `include_all_cuts` fallback runs. That fallback improves robustness but weakens the clean admissibility story. Extreme non-spherical geometry therefore requires a resolution study rather than an assumption that a successful sphere run transfers unchanged.

## Source trail

Synthesized from `docs/algorithm.md`, `research/phase1_foundation/10_foundation_beale_method.md`, `src/core/`, and `src/operators/` in the local BealeSurfaceSolver repository. The underlying published method is J. Thomas Beale's 2020 planar-Cartesian-grid method for closed surfaces; this note describes Andrew's repository's interpretation and extension of it.

## Open questions

- Can the equilibration-reduced operator be placed in a framework that proves convergence without requiring a discrete maximum principle?
- Which geometry-dependent condition best predicts the resolution at which admissible stencils become reliable?
- Can a higher-order interpolation retain the stability bound that makes quadratic equilibration tractable?
- Which surface PDE classes benefit most from cut points compared with closest-point, trace finite-element, RBF, or surface finite-element methods?
