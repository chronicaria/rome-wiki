---
title: Forced-damped shallow-water equations on a level-set surface
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, shallow-water, geophysical-fluid-dynamics, surface-pdes, exometeorology]
as_of: 2026-07-09
---
The generalized BealeSurfaceSolver weather model evolves a thin fluid layer on any admissible level-set surface, with geometry-aware fluxes, local Coriolis force, radiative relaxation, and Rayleigh drag.

Up: [[BealeSurfaceSolver research (MOC)]] · Geometry: [[Level-set geometry for surface conservation laws]]

## The model

Let $\Phi=gh$ be layer geopotential and $v$ the tangential velocity. A useful forced-damped shallow-water model is

$$
\partial_t v+(v\cdot\nabla_\Gamma)v
+f_\Gamma n\times v
=-\nabla_\Gamma\Phi-\frac{v}{\tau_{\mathrm{drag}}},
$$

$$
\partial_t\Phi+\nabla_\Gamma\cdot(\Phi v)
=\frac{\Phi_{\mathrm{eq}}-\Phi}{\tau_{\mathrm{rad}}}.
$$

Here

$$
f_\Gamma=2\Omega\cdot n,
\qquad
\Phi_{\mathrm{eq}}(x)
=\bar\Phi+\Delta\Phi_{\mathrm{eq}}
\max(0,n(x)\cdot\hat s),
$$

where $\hat s$ points toward the star. The right-hand side relaxes the layer toward a hotter dayside and a cooler nightside; Rayleigh drag removes momentum. These are deliberately idealized closures for a single active layer, not a three-dimensional atmospheric model.

The package evolves momentum $q=\Phi v$ in conservation form. In a local graph chart, both mass and momentum fluxes are multiplied by the metric factor $\sqrt g$, differenced, and divided by $\sqrt g$. Normals, tangent projections, $\sqrt g$, and $f_\Gamma$ come from $\nabla\phi$. The same equations therefore run on spheres, oblate or triaxial ellipsoids, and other smooth closed level sets without deriving a new coordinate system for each surface.

## What is in the package today

`src/pdes/general_swe.jl` implements the geometry-general forced-damped equations with a MacCormack predictor-corrector core and Beale-style artificial viscosity. Its parameter object exposes the substellar direction, mean and day-night equilibrium geopotential, radiative and drag timescales, and viscosity coefficient. Taking infinite forcing timescales and a sphere recovers the unforced Williamson-test setting.

The time step is conceptually:

1. equilibrate the current primary fields to all cut points;
2. evaluate forward-difference fluxes and pointwise sources;
3. take the predictor step and reproject momentum tangentially;
4. evaluate backward-difference fluxes for the corrector;
5. add artificial viscosity, equilibrate, and reproject again.

This path is simple and is regression-tested against the original sphere calculation. Its weakness is that the artificial-viscosity coefficient is a numerical modeling choice that can blur a small geometry signal.

## The research-grade semi-Lagrangian alternative

The repository also contains standalone research implementations of a viscosity-free semi-Lagrangian transport core. A departure point is traced backward along the velocity, projected back to $\Gamma$, and the old field is interpolated there. A global Appendix-B quadrature rescaling fixes total mass. Repository notes report second-order manufactured-solution behavior over practical resolution ranges and machine-level relative mass drift for the tested transport problems.

That alternative is scientifically important because it removes the tunable viscosity parameter. It is not equivalent to saying every semi-Lagrangian weather run is unconditionally stable: the centered gravity-wave part still has a checkerboard mode, and strongly triaxial Jacobi-figure experiments have diverged. The semi-Lagrangian weather engine largely remains research infrastructure rather than the single canonical package entry point.

## Verification anchors

The generic MacCormack path reproduces the specialized Williamson-2 sphere errors closely: the repository reports $L_2(\Phi)=1.115\times10^{-2}$ at $N=80$ and $2.991\times10^{-3}$ at $N=160$, versus Beale table values $1.13\times10^{-2}$ and $3.03\times10^{-3}$. The generic-versus-specialized difference shrinks with refinement.

Manufactured-solution studies of the geometry-general flux report approximately second-order convergence on sphere, oblate, and strongly triaxial surfaces. A sharp $\max(0,n\cdot\hat s)$ terminator can reduce observed order because the equilibrium field is only continuous; resolving a smooth transition restores the expected order in the recorded experiments.

The forced model also reproduces the intended qualitative hot-Jupiter controls: shorter radiative time produces a larger day-night contrast, and the flow develops an eastward equatorial jet and Matsuno-Gill-like gyres. These are validation targets for model behavior, not evidence that the nondimensional parameter set represents a particular planet.

## Closure and interpretation limits

The packaged model uses a naive relaxation closure: when heating adds layer mass, the corresponding active-layer momentum-exchange correction is omitted. It is a one-layer barotropic or 1.5-layer approximation; vertical shear, real radiative transfer, cloud feedback, and three-dimensional primitive-equation dynamics are outside it.

This matters for scientific claims. The program's careful WASP-43b work found that a deformed single surface produces only a small geometry-induced latitudinal displacement under imposed symmetry breaking, with the converged sign differing from an early qualitative expectation. The actual planet's weak deformation makes the effect negligible, and richer models do not cleanly generate the observed $-13.4^\circ$ latitude. The appropriate result is a bounded null, not a claim that shape explains the observation.

## Source trail

Synthesized from `src/pdes/general_swe.jl`, `research/phase1_foundation/15_prototype_general_swe_results.md`, `docs/exometeorology.md`, and the Phase-2/Phase-5 result summaries. See [[Verification ladder for BealeSurfaceSolver]] before reusing any reported number.

## Open questions

- Can the active-layer momentum source be added while retaining a clean energy and mass budget?
- Which semi-implicit or filtered wave step stabilizes extreme triaxial figures without reintroducing an arbitrary dissipation signal?
- Can the semi-Lagrangian core be promoted into the package with a verification suite that covers geometry, conservation, and forcing together?
- What is the minimal vertical model capable of addressing observations that the single surface provably cannot explain?
