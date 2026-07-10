---
title: Primitive equations of the atmosphere
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, atmosphere, geophysical-fluid-dynamics, numerical-weather-prediction]
---

The atmospheric primitive equations are the rotating, stratified fluid equations obtained when a shallow atmosphere is treated as hydrostatic: vertical momentum becomes a diagnostic pressure–weight balance, while horizontal momentum, mass, and thermodynamics remain prognostic and coupled.

Up: [[Applied PDEs]]

Related: [[Navier-Stokes equations]] · [[Conservation laws and entropy conditions]] · [[Finite-volume methods for conservation laws]] · [[Data assimilation as an inverse problem]]

## What the equation set is for

Weather and climate involve a thin fluid shell on a rotating sphere. Its horizontal extent is planetary or synoptic—roughly hundreds to tens of thousands of kilometres—whereas the dynamically active troposphere is only about ten kilometres deep. On these large horizontal scales, vertical acceleration is usually small compared with gravity and the vertical pressure-gradient force. Replacing the vertical momentum equation by hydrostatic balance filters vertically propagating acoustic motion and yields the **hydrostatic primitive equations**.

“Primitive” does not mean unphysical or elementary. It distinguishes this system from more reduced models such as the [[Quasi-geostrophic equations]] or [[Shallow-water equations]]. Primitive equations retain three-dimensional horizontal wind, vertical motion inferred through mass continuity, evolving temperature, moisture tracers, and a pressure field constrained by hydrostatics. They have therefore been central to global [[Numerical weather prediction]] and atmospheric general circulation models, although modern forecast systems may instead integrate nonhydrostatic equations when convection and kilometre-scale flow matter.

Two qualifications prevent a common conceptual mistake:

1. **Modeling fact:** hydrostatic balance is an approximation justified by scale separation and regime, not an exact atmospheric law at every scale.
2. **Mathematical fact:** particular viscous primitive-equation initial-boundary-value problems possess global strong solutions. This does not by itself establish well-posedness for every moist, forced, discretized operational model.

## Notation, domain, and data

Begin in a local Cartesian tangent-plane domain

$$
\Omega=M\times(0,H),\qquad M\subset\mathbb{R}^2,
$$

with horizontal position $x_h=(x,y)$, geometric height $z$, and time $t$. The velocity is $\mathbf{u}=(\mathbf{v},w)$, where $\mathbf{v}=(u,v)$ is horizontal and $w$ is vertical. Let $\rho$ be density, $p$ pressure, $T$ temperature, $\theta$ potential temperature, $\Phi=gz$ geopotential, $g$ gravitational acceleration, and $\boldsymbol{\Omega}$ Earth's rotation vector. On an $f$-plane, $f=2\Omega\sin\varphi_0$ is constant and $\mathbf{k}\times\mathbf{v}=(-v,u)$. On a sphere, $f=2\Omega\sin\varphi$ varies with latitude and the horizontal differential operators carry metric terms.

The dry ideal-gas constants are $R_d$ and $c_p$, with $\kappa=R_d/c_p$. Moisture variables $q_i$ may represent water-vapour, cloud-liquid, or ice mass fractions. Subgrid momentum and heat tendencies are denoted $\mathbf{F}_v$ and $Q$; these can include diffusion, surface drag, convection, radiation, and phase-change effects.

An initial-value problem specifies compatible $\mathbf{v}_0$, $T_0$ or $\theta_0$, moisture $q_{i,0}$, and surface pressure $p_{s,0}$. A simplified bounded-domain mathematical problem often uses periodic lateral boundaries, impermeability $w=0$ at $z=0,H$, and either stress-free $\partial_z\mathbf{v}=0$ or no-slip $\mathbf{v}=0$ boundary data, together with insulating $\partial_zT=0$ or prescribed heat flux. Operational atmosphere models instead use topography at the lower boundary, parameterized surface fluxes, and a model top with a damping layer. Boundary choices are part of the model and are indispensable to any theorem or numerical claim.

## From rotating compressible flow to hydrostatic balance

In a rotating frame, a convenient starting point is the compressible Euler or Navier–Stokes system:

$$
\rho\frac{D\mathbf{u}}{Dt}+2\rho\boldsymbol{\Omega}\times\mathbf{u}
=-\nabla p-\rho\nabla\Phi+\nabla\cdot\boldsymbol{\tau},
$$

$$
\partial_t\rho+\nabla\cdot(\rho\mathbf{u})=0,
$$

supplemented by an energy or thermodynamic equation, an equation of state, and tracer equations. Here

$$
\frac{D}{Dt}=\partial_t+\mathbf{v}\cdot\nabla_h+w\partial_z.
$$

Let $L$ and $H$ be characteristic horizontal and vertical lengths, $U$ and $W$ characteristic velocities, and $\varepsilon=H/L\ll1$ the aspect ratio. Continuity suggests $W/U\sim H/L=\varepsilon$ for large-scale flow. If the advective time scale is $L/U$, horizontal acceleration scales as $U^2/L$, whereas vertical acceleration scales as

$$
\frac{UW}{L}\sim\varepsilon\frac{U^2}{L}.
$$

The leading vertical forces, $\partial_zp$ and $\rho g$, are much larger and nearly cancel. More formally, nondimensionalizing the vertical momentum equation produces a small coefficient proportional to an aspect-ratio/Froude-number combination in front of vertical material acceleration. In the distinguished large-scale, stably stratified regime that coefficient tends to zero, leaving

$$
\boxed{\partial_zp=-\rho g.}
$$

This is hydrostatic balance. It diagnoses how pressure changes vertically rather than evolving $w$ through vertical momentum. The horizontal equations retain acceleration because horizontal pressure gradients, Coriolis acceleration, and advection are comparable on synoptic scales:

$$
\boxed{
\frac{D\mathbf{v}}{Dt}+f\mathbf{k}\times\mathbf{v}
=-\frac{1}{\rho}\nabla_hp+\mathbf{F}_v.
}
$$

The traditional approximation has also discarded the small components of planetary rotation that couple most directly to vertical velocity. The shallow-atmosphere approximation treats the radius as effectively constant across the atmospheric depth. These are additional modeling assumptions; they do not follow solely from $\partial_zp=-\rho g$.

Hydrostatic balance is reliable for large-scale, slowly varying flow. It becomes questionable for deep convection, mountain waves, density currents, and other motions whose horizontal scale approaches the atmospheric depth or whose vertical acceleration is appreciable. A useful operational rule is that nonhydrostatic effects become increasingly important below roughly 10 km horizontal scale, but this is a regime guide rather than a sharp mathematical boundary.

## Height-coordinate primitive equations

For a dry ideal gas, $p=\rho R_dT$. A compact height-coordinate system is

$$
\frac{D\mathbf{v}}{Dt}+f\mathbf{k}\times\mathbf{v}
=-\frac{1}{\rho}\nabla_hp+\mathbf{F}_v,
$$

$$
\partial_zp=-\rho g,
$$

$$
\partial_t\rho+\nabla_h\cdot(\rho\mathbf{v})+\partial_z(\rho w)=0,
$$

$$
\frac{D\theta}{Dt}=\frac{\theta}{c_pT}Q,
\qquad
\theta=T\left(\frac{p_0}{p}\right)^\kappa,
$$

$$
\rho\frac{Dq_i}{Dt}=\rho S_i-\nabla\cdot\mathbf{J}_i.
$$

$p_0$ is a reference pressure, $S_i$ contains phase changes or chemistry, and $\mathbf{J}_i$ is a subgrid tracer flux. For dry adiabatic inviscid motion, $Q=0$ and potential temperature is materially conserved: $D\theta/Dt=0$. In a moist model, latent heating enters $Q$, the equation of state uses virtual temperature or a mixture formulation, and total-water/energy bookkeeping must be consistent across microphysics and dynamics.

Unlike the full compressible system, this set has no prognostic equation for vertical momentum. Given horizontal convergence and boundary data, mass continuity diagnoses $w$. Given $T$ and a reference or surface pressure, hydrostatic balance diagnoses the vertical pressure or geopotential structure. This diagnostic–prognostic coupling is the defining PDE structure.

## Pressure coordinates

Because hydrostatic pressure decreases monotonically with height away from exceptional situations, one may use $p$ itself as the vertical coordinate. Define pressure velocity

$$
\omega=\frac{Dp}{Dt}
$$

and take $\nabla_p$ on constant-pressure surfaces. Hydrostatic balance and the ideal-gas law imply

$$
\boxed{\frac{\partial\Phi}{\partial p}=-\alpha=-\frac{1}{\rho}=-\frac{R_dT}{p}},
$$

or $\partial_{\ln p}\Phi=-R_dT$. Integrating gives the hypsometric relation: the geopotential thickness between two pressure surfaces is controlled by their layer-mean temperature.

The dry pressure-coordinate primitive equations become

$$
\frac{D_p\mathbf{v}}{Dt}+f\mathbf{k}\times\mathbf{v}
=-\nabla_p\Phi+\mathbf{F}_v,
$$

$$
\nabla_p\cdot\mathbf{v}+\partial_p\omega=0,
$$

$$
\frac{D_pT}{Dt}-\frac{\kappa T}{p}\omega=\frac{Q}{c_p},
$$

where

$$
\frac{D_p}{Dt}=\partial_t+\mathbf{v}\cdot\nabla_p+\omega\partial_p.
$$

The term $-(\kappa T/p)\omega$ represents adiabatic compression or expansion. The continuity equation has no explicit density, a major analytical and numerical convenience. Integrating it from model top $p_t$ to surface pressure $p_s(x,y,t)$ relates column-integrated horizontal divergence to surface-pressure tendency. Thus $p_s$ is normally prognostic rather than prescribed.

Pure pressure surfaces intersect mountains, so global models often use terrain-following sigma coordinates $\sigma=p/p_s$ or hybrid coordinates

$$
p(\eta)=A(\eta)p_0+B(\eta)p_s,
$$

which follow terrain near the ground and approach pressure levels aloft. This removes coordinate intersections but introduces metric terms and can amplify pressure-gradient errors over steep topography. A vertical coordinate is therefore a numerical design choice with physical consequences, not cosmetic notation.

## Balances and conservation

### Geostrophic and hydrostatic balance

When the Rossby number $Ro=U/(fL)$ is small, leading horizontal momentum is geostrophic:

$$
f\mathbf{k}\times\mathbf{v}_g=-\nabla_p\Phi.
$$

Combining this with hydrostatics connects horizontal temperature gradients to vertical shear—the thermal-wind relation. It explains why meridional temperature contrasts support vertically sheared midlatitude jets. Ageostrophic motion, though smaller, is essential: it permits convergence, vertical motion, frontogenesis, and evolution of the balanced state.

### Mass, tracers, and energy

In a closed inviscid domain, flux-form continuity conserves total mass. A passive tracer conserves its mass only if its transport is written consistently with the same mass flux. This is why a scheme that advects wind, dry air, and water using incompatible fluxes can generate artificial sources even if every individual update appears stable.

For adiabatic, inviscid primitive equations with suitable closed boundaries, one can formulate conservation of total energy—the sum of horizontal kinetic, internal, and gravitational potential energy. Hydrostatic elimination of vertical kinetic energy is consistent with the asymptotic model; it is not permission to ignore exchanges between internal, potential, and horizontal kinetic reservoirs. Rotation does no work because $\mathbf{v}\cdot(f\mathbf{k}\times\mathbf{v})=0$. Pressure work and thermodynamics exchange energy between reservoirs. Real models include radiation, surface fluxes, drag, diffusion, and moist phase changes, so the physically relevant demand is a correct budget including those sources and sinks.

Potential vorticity supplies another structural invariant for inviscid adiabatic flow. Ertel potential vorticity is materially conserved under the appropriate assumptions, linking rotation and stratification. Friction and diabatic heating create or destroy it. Preserving these balances exactly or approximately motivates [[Structure-preserving numerical methods]].

## Mathematical PDE structure

The primitive equations are anisotropic: horizontal and vertical derivatives play different roles, and pressure and vertical velocity are diagnostic. In the commonly analyzed incompressible/Boussinesq viscous version, horizontal velocity and temperature evolve through anisotropic advection–diffusion equations, hydrostatic pressure is constrained vertically, and incompressibility recovers vertical velocity from horizontal divergence. The vertical integral constraint on horizontal divergence replaces an independent vertical momentum equation.

A central mathematical result is Cao and Titi's 2007 proof of global existence and uniqueness of strong solutions for the three-dimensional viscous primitive equations under their specified domain, regularity, forcing, and boundary hypotheses. The result is striking because global regularity remains unresolved for general three-dimensional incompressible [[Navier-Stokes equations]]. Hydrostatic structure supplies estimates unavailable in the unrestricted 3D system.

This theorem is a **mathematical fact about that viscous PDE problem**. Moist compressible physics, parameterized convection, rough topography, vanishing or partial diffusion, and discrete algorithms each require separate analysis. Conversely, an operational model's empirical success is numerical evidence for the full modeling system, not a proof of its continuum well-posedness.

## Numerical implications

Hydrostatic primitive equations remove vertically propagating sound waves, permitting longer time steps than a fully compressible explicit solver at the same grid spacing. They do not remove all stiffness. Fast external gravity waves, rotation, strong vertical stratification, and a thin-grid aspect ratio still constrain algorithms. Semi-implicit treatment of fast waves and semi-Lagrangian advection have therefore been influential, while finite-volume and spectral-element dynamical cores emphasize conservation and scalability.

Several discretization problems recur:

- **Balance preservation.** Small meteorological tendencies arise as residuals between large pressure-gradient and Coriolis or gravity terms. Discretizations should avoid turning a resting hydrostatic or geostrophic state into spurious motion.
- **Vertical staggering.** Carefully placed pressure, temperature, and velocity variables suppress computational modes and make discrete hydrostatic and continuity relations compatible.
- **Topographic pressure gradients.** Terrain-following coordinates can subtract large nearly equal terms; truncation error then drives false winds over mountains.
- **Tracer consistency.** Positive, monotone moisture transport must use mass-consistent fluxes. Otherwise water and dry mass budgets drift.
- **Spherical geometry.** Latitude–longitude grids crowd near the poles. Cubed-sphere, icosahedral, or spectral-element meshes improve parallel scaling but create panel edges or irregular-grid operators requiring careful mimetic design.
- **Subgrid closure.** Hydrostatic dynamics cannot resolve cloud microphysics, turbulence, or radiation. Parameterizations feed tendencies into the resolved equations and often dominate systematic forecast and climate biases.

Verification should separate equation, implementation, and physics errors. Idealized baroclinic-wave, balanced-flow, mountain-wave, tracer-transport, and conservation tests probe a dynamical core before full moist physics is added. Grid refinement alone is insufficient if a parameterization changes with resolution or if no trusted reference solution exists; this connects to [[Consistency stability and convergence]] and [[Method of manufactured solutions]].

## Weather and climate use—and limits

In numerical weather prediction, an analyzed initial state supplies wind, temperature, moisture, and surface pressure; [[Data assimilation as an inverse problem]] reconciles observations with model dynamics and uncertainty. The primitive-equation core advances the resolved atmosphere, while parameterizations provide radiative, turbulent, convective, cloud, and surface tendencies. Forecast skill therefore measures the coupled data-assimilation–dynamics–physics system.

Climate models integrate closely related equations for decades to centuries and couple them to ocean, land, sea ice, and biogeochemistry. Their aim is not a deterministic forecast of a particular storm a century ahead but statistics, forced responses, feedbacks, and variability. Conservation errors that seem tiny over a ten-day forecast can accumulate into climate drift, making closed budgets and equilibrated coupling especially important.

The hydrostatic approximation is most defensible for global and synoptic circulation. As horizontal mesh spacing approaches convection-permitting scales, nonhydrostatic vertical acceleration must be retained. Yet switching equation sets does not automatically make a model more accurate: unresolved turbulence and clouds, observations, coupling, and numerical error remain. The correct hierarchy is regime-dependent—primitive equations for large-scale balanced flow, nonhydrostatic compressible or sound-proof systems where vertical acceleration matters, and reduced equations when a narrower phenomenon justifies further asymptotics.

## Sources

- [Cao and Titi, “Global well-posedness of the three-dimensional viscous primitive equations of large scale ocean and atmosphere dynamics,” *Annals of Mathematics* 166 (2007), 245–267](https://annals.math.princeton.edu/2007/166-1/p07) — primary theorem and exact hypotheses for the viscous mathematical system.
- [NCAR/UCAR, “The equations governing atmospheric flow”](https://www.cgd.ucar.edu/staff/islas/teaching/2_Equations.pdf) — authoritative derivation of hydrostatics, pressure coordinates, continuity, thermodynamics, and the hypsometric relation.
- [NCAR Community Earth System Model, *Community Atmosphere Model releases and documentation*](https://www.cesm.ucar.edu/models/cam/releases) — official release documentation for CAM 5.x and CAM 6, including user guides and scientific descriptions of hydrostatic-model configurations.
- [ECMWF, “Atmospheric dynamics”](https://www.ecmwf.int/en/research/modelling-and-prediction/atmospheric-dynamics) — operational authority on hydrostatic/nonhydrostatic regimes and forecast-model dynamical cores.
- [ECMWF, *Overview of the Numerics of the ECMWF Atmospheric Forecast Model*](https://www.ecmwf.int/sites/default/files/elibrary/2004/10021-overview-numerics-ecmwf-atmospheric-forecast-model.pdf) — authoritative documentation of hydrostatic primitive-equation numerics, vertical coordinates, and semi-implicit/semi-Lagrangian choices.
- [NOAA GFDL, “FV3: Finite-Volume Cubed-Sphere Dynamical Core”](https://www.gfdl.noaa.gov/fv3/) — primary description of a modern hydrostatic/nonhydrostatic finite-volume core used across weather and climate systems.
- [UCAR MetEd, *Introduction to Tropical Meteorology*, chapter 9](https://www.meted.ucar.edu/tropical/textbook_2nd_edition/print_9.htm) — operational teaching reference for primitive equations, hydrostatic balance, and hybrid vertical coordinates.

## Open questions

- Which hydrostatic-limit theorem most closely matches a rotating, compressible, stratified atmosphere with realistic thermodynamics?
- How should discrete energy and potential-vorticity conservation be traded against monotonicity, positivity, and computational throughput in global dynamical cores?
- At what effective resolution should a coupled weather or climate model switch from hydrostatic to nonhydrostatic dynamics when its moist parameterizations remain scale dependent?
- Which benchmark suite best separates topographic coordinate error, tracer inconsistency, and parameterization error in a modern cubed-sphere model?
