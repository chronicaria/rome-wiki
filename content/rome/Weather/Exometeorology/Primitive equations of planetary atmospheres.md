---
title: Primitive equations of planetary atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, atmospheric-dynamics, planetary-atmospheres, fluid-dynamics, pdes]
---
The primitive equations are a conservation-law model for large-scale, stratified atmospheric flow: powerful when vertical force balance is nearly hydrostatic and the weather layer is geometrically shallow, but not a universal replacement for the compressible rotating equations.

Up: [[Exometeorology research frontier 2026]]

## What the name means

“Primitive” does not mean elementary or exact. In geophysical fluid dynamics it names a coupled set of partial differential equations for horizontal momentum, mass continuity, thermodynamic energy, hydrostatic balance, and an equation of state. Tracer equations for composition, condensate, or chemistry are then added. The system sits between two levels of a model hierarchy: it retains three-dimensional, rotating, stratified weather, unlike a one-layer [[Shallow-water models of tidally locked atmospheres|shallow-water model]], but filters or simplifies some motion represented by the fully compressible rotating Euler or Navier–Stokes equations.

That placement matters in exometeorology. A circulation pattern in a primitive-equation simulation is **simulated evidence** conditional on the equation set, forcing, closures, boundaries, and numerics. It is not a directly measured wind map. Phase curves and spectra measure disk-integrated radiation; comparing them with synthetic observables from a model can support an interpretation, but [[Atmospheric retrieval degeneracies]] and model inadequacy remain part of the inference.

## Start from rotating compressible flow

In a frame rotating with angular velocity $\boldsymbol{\Omega}$, an inviscid atmosphere with velocity $\mathbf{u}$ obeys schematically

$$
\frac{D\mathbf{u}}{Dt}+2\boldsymbol{\Omega}\times\mathbf{u}
=-\frac{1}{\rho}\nabla p-\nabla\Phi+\mathbf{F},
$$

where $D/Dt$ follows the moving gas, $p$ is pressure, $\rho$ density, $\Phi$ gravitational plus any retained centrifugal potential, and $\mathbf{F}$ represents subgrid drag or other parameterized forces per unit mass. Mass conservation is

$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf{u})=0.
$$

For an ideal gas, $p=\rho R T$. A convenient dry thermodynamic equation is

$$
c_p\frac{DT}{Dt}-\frac{1}{\rho}\frac{Dp}{Dt}=q,
$$

with heating rate $q$ per unit mass. Equivalent potential-temperature or entropy forms are often preferable because adiabatic motion then conserves the prognostic variable. Radiation, latent heating, chemical energy, conduction, and numerical dissipation alter the right-hand side according to the model.

These equations alone do not close a practical atmosphere calculation. A model must specify an equation of state; radiative, chemical, and cloud processes; unresolved mixing and dissipation; top and bottom conditions; initial conditions; and a numerical method. [[General circulation models for exoplanets]] differ at each of these layers even when they share the label “primitive equations.”

## Hydrostatic balance is an ordering, not zero vertical motion

For weather whose horizontal scale $L$ greatly exceeds its vertical scale $H$, vertical acceleration is often small compared with the pressure-gradient and gravitational terms. The leading vertical momentum balance becomes

$$
\frac{\partial p}{\partial z}=-\rho g.
$$

This is hydrostatic balance. It does not set vertical velocity $w$ to zero. Air can rise and sink, advect heat and tracers, cross pressure surfaces under heating, and participate in overturning circulation. What is filtered is vertical acceleration as an independent leading-order balance, including freely propagating vertically acoustic motion and some nonhydrostatic buoyant dynamics.

A scale argument shows why the approximation often works. Let the aspect ratio be $\epsilon=H/L\ll1$. Continuity generally makes $W/U$ of order $H/L$ for large-scale flow. The vertical material acceleration is then smaller than the horizontal acceleration by powers of $\epsilon$, while vertical pressure gradients remain large enough to support the atmosphere against gravity. Hydrostatic balance is therefore a controlled asymptotic statement for a regime, not a claim that gravity and pressure cancel exactly at every resolved scale.

The approximation can fail where vertical and horizontal scales are comparable or vertical acceleration is dynamically central: convection, shocks, breaking gravity waves, plume dynamics, flows over sharp topography, escape regions, and some very deep or strongly forced atmospheres. A hydrostatic global model can parameterize unresolved convection, but it cannot thereby resolve the convective eddies themselves.

## Pressure coordinates expose the large-scale structure

Many primitive-equation models use pressure $p$ rather than height as the vertical coordinate. Hydrostatic balance connects them, and the vertical velocity becomes $\omega=Dp/Dt$. Horizontal momentum on a pressure surface can be written schematically as

$$
\frac{D\mathbf{v}}{Dt}+f\mathbf{k}\times\mathbf{v}+\mathcal{M}
=-\nabla_p\Phi+\mathbf{F}_h,
$$

where $\mathbf{v}$ is horizontal velocity, $f=2\Omega\sin\phi$, $\nabla_p$ differentiates along a pressure surface, and $\mathcal{M}$ denotes spherical metric terms. Hydrostatic balance becomes

$$
\frac{\partial\Phi}{\partial p}=-\alpha=-\frac{1}{\rho},
$$

and continuity is

$$
\nabla_p\cdot\mathbf{v}+\frac{\partial\omega}{\partial p}=0.
$$

For dry potential temperature $\theta=T(p_0/p)^\kappa$, with $\kappa=R/c_p$,

$$
\frac{D\theta}{Dt}=\frac{\theta}{c_pT}q.
$$

The vertical boundary condition on an impermeable material surface follows from the coordinate geometry; at a fixed pressure model top, a common idealization is $\omega=0$. Real exoplanets rarely offer a literal rigid lower surface at the modeled pressure. On gas giants, a chosen bottom pressure truncates a much deeper fluid and can exchange angular momentum and heat with it only through imposed boundary rules. That makes the lower boundary a physical hypothesis, not bookkeeping.

Pressure coordinates are natural because telescope contribution functions and atmospheric opacity are often discussed by pressure. Yet a pressure surface is not a material surface under diabatic heating, and pressure coordinates become awkward near topography or vanishing pressure. Sigma, hybrid pressure, height, mass, or isentropic coordinates redistribute numerical strengths and weaknesses without changing the need to state the governing approximations.

## Three approximations often bundled together

The familiar hydrostatic primitive equations commonly combine three distinguishable reductions.

### Hydrostatic approximation

Vertical acceleration is neglected relative to vertical pressure support and gravity. The relevant comparison involves vertical acceleration and stratification, not merely whether the atmosphere contains vertical motion.

### Shallow-atmosphere approximation

The modeled depth is treated as small compared with planetary radius, $H/R_p\ll1$. Radius is replaced by a representative $R_p$ in metric factors, gravity is often treated as radial and sometimes constant over the modeled layer, and curvature terms that depend on vertical position are simplified. This is excellent for Earth's weather layer. It needs explicit checking for low-gravity planets, highly extended hot atmospheres, or models spanning many scale heights.

The pressure scale height

$$
H_p=\frac{RT}{g}
$$

offers a first diagnostic. The geometric thickness between pressures $p_1$ and $p_2$ in an isothermal ideal gas is approximately $H_p\ln(p_1/p_2)$. A single small $H_p/R_p$ does not guarantee that a domain covering many orders of pressure is shallow.

### Traditional approximation

The full Coriolis acceleration contains components involving both the vertical and horizontal projections of planetary rotation. Traditional primitive equations retain the familiar vertical-rotation contribution to horizontal motion, producing $f=2\Omega\sin\phi$, while neglecting terms coupling vertical velocity and the horizontal component of $\boldsymbol{\Omega}$. This is consistent with a particular shallow, strongly stratified ordering; it is not licensed merely by writing the equations in spherical coordinates.

White, Hoskins, Roulstone, and Staniforth showed that shallow, deep, hydrostatic, quasi-hydrostatic, and nonhydrostatic models must be derived as consistent packages if they are to retain appropriate conservation properties. Dropping isolated metric or Coriolis terms without respecting that package can create an equation set with no consistent underlying approximation.

## When exoplanets stress the assumptions

Exoplanets occupy parameter regimes for which Earth-derived intuition must be tested rather than copied.

**Geometric depth.** Hot, low-gravity atmospheres can have large scale heights, and a simulation extending from millibars to hundreds of bars spans many scale heights. The observable photosphere may still be locally shallow even when the computational domain is not. “Primitive equations are valid at the photosphere” and “a shallow global domain is adequate” are therefore different claims.

**Long integration and deep reservoirs.** Mayne and collaborators compared shallow primitive-like and more complete deep, nonhydrostatic equation sets in the Unified Model for hot-Jupiter configurations. Their large-scale time means could be relatively insensitive in one shallow test, but the deep HD 209458 b case evolved slowly and allowed additional exchange of momentum between upper and lower layers. Their result does not prove that complete equations always change observables; it demonstrates that equation choice, boundary placement, and equilibration time can interact.

**Rapid rotation.** Traditional-approximation errors depend on scale, stratification, latitude, and the relationship of vertical velocity to horizontal flow. Fast rotation alone is not a universal failure criterion, but it can elevate neglected Coriolis couplings. Oblate, rapidly rotating brown dwarfs add non-spherical geometry and spatially varying effective gravity, connecting this issue to [[One gradient two physics in oblate brown-dwarf weather]].

**Strong forcing and shocks.** Ultra-hot atmospheres may approach transonic flow. Hydrostatic models can represent horizontally compressible motions in some formulations, but shocks, vertically propagating acoustic waves, and strongly nonhydrostatic layers demand care. Artificial filters and drag used for numerical stability can also determine where kinetic energy and angular momentum go.

**Rocky-planet surfaces.** A solid surface introduces topography, boundary-layer turbulence, moisture or condensable exchange, and friction. Hydrostatic large-scale dynamics can remain appropriate while the surface and convection require parameterization. A primitive-equation label says little about whether those closures are credible under an unfamiliar atmospheric mass or composition.

## Conservation and numerical realization

Continuous equations can conserve mass, energy, angular momentum, and tracers under ideal boundary conditions, yet a discretization may not conserve all of them exactly. Grid geometry, vertical staggering, time stepping, filters, hyperdiffusion, sponge layers, and polar treatment affect resolved jets and waves. A simulation should therefore document budgets, convergence with resolution, sensitivity to dissipation, and spin-up of deep layers.

Hydrostatic balance also imposes a numerical constraint: the pressure-gradient calculation must remain compatible with the vertical coordinate and geopotential representation. Small imbalance between large pressure and gravity terms can generate spurious vertical or horizontal motion. Terrain-following coordinates on rocky planets and extended domains on giants pose different versions of this problem.

Benchmark tests help separate dynamical-core behavior from radiative or chemical complexity. Idealized resting states, balanced jets, baroclinic waves, forced day–night flows, and conservation tests each probe different failure modes. Agreement on a broad equatorial jet is weaker validation than agreement on phase, amplitude, budgets, resolution convergence, and sensitivity across a shared test suite.

## From equations to observable claims

The primitive equations predict fields such as temperature, velocity, pressure, and tracers. Telescopes do not read those arrays. A radiative-transfer calculation converts a model state into wavelength- and viewing-dependent intensity, after which geometry and instrument response produce a synthetic light curve or spectrum. Comparison should occur in observable space wherever possible.

The evidence ladder is therefore:

1. **Measured:** fluxes, spectra, transit depths, phase curves, or line profiles with calibration uncertainty.
2. **Retrieved:** temperature, abundance, cloud, or low-order map parameters inferred under a likelihood and priors.
3. **Simulated:** primitive-equation circulation under declared equations, closures, forcing, boundaries, and numerics.
4. **Interpreted:** a physical explanation supported by comparison among measurements, retrievals, and simulations.
5. **Forecast:** a predicted discriminating observable for a future instrument or epoch.

A model wind speed is not “measured” because its synthetic phase curve resembles the data. Multiple combinations of opacity, clouds, chemistry, drag, and circulation can yield similar radiation. Conversely, imperfect primitive equations can still make useful regime predictions if those predictions are shown to survive reasonable changes in equation set and implementation.

## A practical adequacy checklist

Before accepting a primitive-equation calculation, ask:

- Is the relevant aspect ratio $H/L$ small enough for hydrostatic scaling, and are unresolved nonhydrostatic processes parameterized rather than silently absent?
- Is the full modeled thickness small relative to radius, not merely one pressure scale height?
- Are traditional Coriolis and shallow metric approximations justified for the rotation, stratification, latitude, and vertical motion?
- Does the lower boundary represent a surface, an interior, or an arbitrary truncation, and what fluxes cross it?
- Are radiative, cloud, chemistry, and friction closures appropriate to the claimed observable?
- Are mass, energy, angular momentum, and tracer budgets reported, and is the result robust to resolution and dissipation?
- Has the model equilibrated at the depths relevant to the conclusion?
- Were synthetic observables compared with data while preserving retrieval and stellar-systematic uncertainty?

No single “valid/invalid” stamp answers these questions. Adequacy is claim-specific. A hydrostatic shallow model may capture planetary wave adjustment and [[Equatorial superrotation]] while being unsuitable for lightning-scale convection, atmospheric escape, or deep angular-momentum exchange.

## Why it matters

Primitive equations are the bridge between atmospheric PDEs and most large-scale circulation stories in exometeorology. Understanding their derivation prevents two opposite mistakes: treating a GCM as a literal weather camera, or dismissing every approximation because a planet is unfamiliar. The useful stance is conditional—identify the balances that make the reduction accurate, test the neglected terms, and compare robust synthetic observables rather than privileged internal fields.

They connect [[Atmospheric circulation on tidally locked planets]], [[Day-night heat redistribution]], [[Equatorial superrotation]], and [[Radiative and advective timescales in exoplanet atmospheres]] to the modeling hierarchy. They also define the baseline against which deep-atmosphere, nonhydrostatic, magnetohydrodynamic, and cloud-coupled models earn their added complexity.

## Sources

- White, A. A., Hoskins, B. J., Roulstone, I., and Staniforth, A. (2005), “Consistent approximate models of the global atmosphere: shallow, deep, hydrostatic, quasi-hydrostatic and non-hydrostatic.” Primary derivation and conservation analysis. [Quarterly Journal of the Royal Meteorological Society](https://doi.org/10.1256/qj.04.49).
- Mayne, N. J. et al. (2014), “The Unified Model, a fully-compressible, non-hydrostatic, deep atmosphere global circulation model, applied to hot Jupiters.” Primary comparison of equation-set approximations and boundary/deep-evolution effects. [Astronomy & Astrophysics](https://doi.org/10.1051/0004-6361/201322174).
- Heng, K., Menou, K., and Phillipps, P. J. (2011), “Atmospheric circulation of tidally locked exoplanets: a suite of benchmark tests for dynamical solvers.” Primary exoplanet benchmark paper stating the primitive-equation approximations. [Monthly Notices of the Royal Astronomical Society](https://doi.org/10.1111/j.1365-2966.2011.18315.x).
- Showman, A. P., Tan, X., and Parmentier, V. (2020), “Atmospheric Dynamics of Hot Giant Planets and Brown Dwarfs.” Authoritative review of relevant regimes and model hierarchy. [Space Science Reviews](https://doi.org/10.1007/s11214-020-00758-8).
- Staniforth, A. (2023), “Reviewing and clarifying the derivation of the hydrostatic primitive equations.” Modern derivation of the hydrostatic, shallow, and traditional approximation bundle. [Quarterly Journal of the Royal Meteorological Society](https://doi.org/10.1002/qj.4542).

## Open questions

- Across which observed hot-Jupiter and brown-dwarf regimes do deep, nontraditional, or nonhydrostatic terms change synthetic spectra or phase curves beyond present measurement errors?
- Which benchmark suite best tests conservation and long deep-layer equilibration across exoplanet dynamical cores?
- How should model uncertainty from equation-set choice be propagated alongside opacity, chemistry, cloud, and retrieval uncertainty?
- Can reduced equations be selected adaptively by regime without introducing inconsistent interfaces or conservation errors?
