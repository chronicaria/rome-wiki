---
title: Level-set geometry for surface conservation laws
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, differential-geometry, conservation-laws, level-sets, surface-pdes]
as_of: 2026-07-09
---
For a surface written as $\phi=0$, its normal, chart area factor, conservative divergence, and Coriolis parameter can all be computed from the first derivative $\nabla\phi$.

Up: [[BealeSurfaceSolver research (MOC)]] · Background: [[Beale cut-point method for surface PDEs]]

## A graph chart from an implicit surface

Consider the chart in which the surface is locally $z=z(x,y)$. Differentiating

$$
\phi(x,y,z(x,y))=0
$$

gives

$$
z_x=-\frac{\phi_x}{\phi_z},\qquad
z_y=-\frac{\phi_y}{\phi_z}.
$$

The tangent basis is $X_1=(1,0,z_x)$ and $X_2=(0,1,z_y)$. Its metric determinant is

$$
g=1+z_x^2+z_y^2.
$$

Substitution produces the useful identity

$$
\sqrt g
=\frac{\lVert\nabla\phi\rVert}{|\phi_z|}.
$$

In the other two charts, the denominator is the component of $\nabla\phi$ along the locally hidden coordinate. Thus the general expression is

$$
\sqrt g=\frac{\lVert\nabla\phi\rVert}{|\phi_\nu|}.
$$

No Hessian of $\phi$ is required. The admissibility condition $|n_\nu|\ge\eta$ implies $\sqrt g\le1/\eta$, so the same chart filter that avoids vertical graphs also bounds the area factor.

## Conservative surface divergence

If a tangential vector field has contravariant chart components $v^1,v^2$, then

$$
\nabla_\Gamma\cdot v
=\frac{1}{\sqrt g}\partial_i(\sqrt g\,v^i).
$$

The repository's preferred geometry-general route is therefore to multiply each flux component by $\sqrt g$, difference the weighted flux on the Cartesian chart, and divide by $\sqrt g$. For a conserved scalar $q$,

$$
\partial_t q
+\frac{1}{\sqrt g}\left[
\partial_1(\sqrt g F^1)
+\partial_2(\sqrt g F^2)
\right]
=S.
$$

This is more than a convenient formula. It places the geometry inside the flux in the same way that a curvilinear-grid Jacobian enters a finite-volume conservation law. A spatially varying area factor can redirect or concentrate transport even when the forcing parameters are unchanged.

An equivalent expanded expression is

$$
\nabla_\Gamma\cdot v
=\partial_1v^1+\partial_2v^2
+(\partial_1\log\sqrt g)v^1
+(\partial_2\log\sqrt g)v^2.
$$

The last two terms are the connection contribution. In the research program they motivate the phrase [[Geometry as forcing in planetary surface PDEs]]: a changing metric alters a conservation law even without adding an external body force.

## Normal, tangent projection, and Coriolis

The outward unit normal is

$$
n=\frac{\nabla\phi}{\lVert\nabla\phi\rVert}.
$$

Any ambient vector $a$ can be projected into the tangent plane by

$$
P_\Gamma a=a-(a\cdot n)n.
$$

Writing velocities as three-component Cartesian vectors and reprojecting them avoids carrying separate Christoffel-symbol formulas in each chart. For a rotating body with angular-velocity vector $\Omega$, the local Coriolis parameter is

$$
f_\Gamma(x)=2\Omega\cdot n(x).
$$

On a unit sphere rotating around the $z$ axis, $n=x$ and this reduces to $2\Omega z=2\Omega\sin\vartheta$, the usual spherical expression.

## The sphere is an algebraic regression test

For

$$
\phi=x^2+y^2+z^2-1,
$$

one has $\lVert\nabla\phi\rVert=2$ and $\phi_z=2z$, so $\sqrt g=1/|z|$ in the $z$ chart. Then

$$
\partial_x\log\sqrt g=\frac{x}{z^2},\qquad
\partial_y\log\sqrt g=\frac{y}{z^2},
$$

which reproduces the sphere-specific geometric terms in Beale's shallow-water equations. This exact reduction is a strong design test: the general code path should recover the specialized sphere path up to discretization-level differences, not merely show qualitative similarity.

## A caveat about the level-set representation

The zero set is unchanged if $\phi$ is replaced by a nonzero scalar multiple or another function with the same zero set, while $\lVert\nabla\phi\rVert$ generally changes. Pure geometry must therefore depend on representation-invariant combinations such as the normalized normal and the ratio $\lVert\nabla\phi\rVert/|\phi_\nu|$.

The oblate brown-dwarf program deliberately uses an effective-potential level set in a second, physical role: there $\lVert\nabla\phi\rVert$ is interpreted as effective gravity. That interpretation is justified only because $\phi$ has physical normalization, not merely because it defines the correct surface. See [[One gradient two physics in oblate brown-dwarf weather]].

## Source trail

Synthesized from `research/phase1_foundation/12_foundation_geometry_generalization.md`, `src/core/metrics.jl`, `src/pdes/general_swe.jl`, and the mathematical layer of `docs/exometeorology.md`.

## Open questions

- Can a discrete geometric-conservation law be stated and proved for time-dependent level sets rebuilt from cut points?
- Which flux differencing choice best balances conservation, second-order accuracy, and robustness at chart seams?
- How should physical potentials be normalized so that $\lVert\nabla\phi\rVert$ has an unambiguous interpretation across models?
- Can the metric weights and tangent projections be combined into a structure-preserving discretization for fully nonlinear conservation laws?
