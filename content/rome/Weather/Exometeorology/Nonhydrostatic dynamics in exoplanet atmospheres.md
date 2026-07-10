---
title: Nonhydrostatic dynamics in exoplanet atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, atmospheric-dynamics, exoplanets, fluid-dynamics, numerical-modeling]
---
Nonhydrostatic models retain vertical acceleration and, usually, full compressibility and deep spherical geometry, making them essential for resolved convection, waves, shocks, and extended atmospheres—but their extra physics changes an exoplanet prediction only when the neglected terms survive numerical and observational uncertainty.

Up: [[Exometeorology research frontier 2026]]

## The question is a force balance, not a model label

Most large-scale exoplanet circulation calculations begin from one of two equation families. Hydrostatic [[Primitive equations of planetary atmospheres|primitive equations]] diagnose the vertical pressure structure by balancing pressure gradient against gravity. Nonhydrostatic cores instead predict vertical momentum. This distinction is often bundled with others: a nonhydrostatic model may also retain acoustic waves, radial variation in gravity and spherical metric terms, the full Coriolis acceleration, and density changes caused by compression. “Nonhydrostatic” therefore does not identify one unique system, and a fair comparison must state every approximation that differs.

For a compressible atmosphere in a rotating frame, the momentum equation is schematically

$$
\frac{D\mathbf{u}}{Dt}+2\boldsymbol{\Omega}\times\mathbf{u}
=-\frac{1}{\rho}\nabla p-\nabla\Phi+\mathbf{F},
$$

with velocity $\mathbf{u}$, density $\rho$, pressure $p$, gravitational potential $\Phi$, and physical or numerical forcing $\mathbf{F}$. Its radial component contains

$$
\frac{Dw}{Dt}=-\frac{1}{\rho}\frac{\partial p}{\partial r}-g+\mathcal{C}_r+F_r,
$$

where $w$ is radial velocity and $\mathcal{C}_r$ collects retained curvature and Coriolis terms. The hydrostatic reduction replaces this prognostic equation with $\partial p/\partial r=-\rho g$. It does **not** prohibit rising or sinking; hydrostatic models obtain vertical velocity from mass continuity. What they remove is vertical acceleration as an independently evolving balance.

Mass conservation remains

$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf{u})=0,
$$

and an energy or potential-temperature equation closes the dry dynamics with an equation of state such as $p=\rho R T$. A fully compressible system supports acoustic, buoyancy, rotational, and advective motions. Particular “sound-proof” nonhydrostatic systems, such as anelastic or pseudo-incompressible equations, retain buoyant vertical acceleration while filtering acoustic waves. Thus nonhydrostatic and fully compressible are related but not synonymous.

## When hydrostatic ordering becomes weak

Hydrostatic balance is an asymptotic approximation. For a flow with horizontal scale $L$, vertical scale $H$, horizontal speed $U$, and vertical speed $W$, continuity commonly gives $W/U\sim H/L$. If the aspect ratio $\epsilon=H/L$ is small, radial acceleration is usually much smaller than pressure support and gravity. Planetary jets spanning thousands of kilometres can remain hydrostatic even while transporting heat vertically.

A complementary measure compares a motion's horizontal scale with an appropriate vertical or buoyancy scale. Deep convection, compact vortices, breaking gravity waves, and plumes can have vertical and horizontal scales close enough that $Dw/Dt$ matters. Strong local heating shortens buoyancy timescales; rapid flow increases inertial acceleration. The approximation should therefore be tested on the phenomenon and scale being claimed, not certified once for an entire planet.

Several exoplanet regimes elevate the neglected terms:

- **Resolved convection.** Buoyant parcels accelerate until pressure perturbations, entrainment, drag, and mixing alter them. A hydrostatic GCM can parameterize their aggregate heating and tracer transport, but it cannot resolve their vertical momentum.
- **Gravity-wave propagation and breaking.** Hydrostatic equations represent long, low-frequency internal gravity waves, but short vertical wavelengths and high intrinsic frequencies become nonhydrostatic. Their breaking can deposit momentum far from their source.
- **Shocks and transonic flow.** Strongly irradiated hot atmospheres can generate fast day-to-night winds. Capturing compressible shocks and their entropy production requires a suitable compressible solver and shock treatment; simply retaining $Dw/Dt$ is insufficient.
- **Extended atmospheres.** Low gravity and high temperature increase the pressure scale height $H_p=RT/g$. A domain spanning many scale heights may no longer be geometrically shallow relative to radius, so varying gravity and deep metric terms matter alongside nonhydrostatic acceleration.
- **Surface and topographic flow.** On rocky worlds, steep relief, density currents, and boundary-layer convection produce local nonhydrostatic motion even if the planetary circulation is hydrostatic at synoptic scales.
- **Upper-atmosphere escape.** Near a sonic transition, outflow is fundamentally compressible and nonhydrostatic. A weather GCM with a closed top cannot infer hydrodynamic escape merely because its interior core is nonhydrostatic.

These cases do not imply that a full equation set always changes disk-integrated observables. A photosphere may remain shallow and stably stratified while nonhydrostatic dynamics occurs beneath it or above it. Conversely, small-scale processes can matter indirectly by changing clouds, chemical quenching, or momentum transport.

Scale separation can also coexist within one calculation. A planetary jet may obey hydrostatic balance while embedded convection does not, and a long gravity wave may be hydrostatic while its breaking region is not. Uniformly solving a nonhydrostatic system avoids an equation interface, but it does not guarantee that either feature is resolved. Grid spacing, vertical domain, and subgrid closures still decide which part of that multiscale flow the model can represent.

## What a global nonhydrostatic core must solve

Retaining more modes makes the numerical problem harder. Acoustic waves travel near the sound speed $c_s$, often much faster than weather evolves. An explicit time step is then constrained by a Courant condition roughly $\Delta t<C\Delta x/c_s$. Global circulation integrations lasting thousands of planetary days cannot economically follow every acoustic oscillation at the smallest grid spacing.

Modern cores use several strategies. Horizontally explicit–vertically implicit schemes treat fast vertical acoustic modes implicitly while preserving explicit horizontal transport. Semi-implicit or split-explicit methods separate fast and slow tendencies. Sound-proof equations filter acoustics analytically. Each choice changes cost, dispersion, damping, and conservation. A model described as “fully compressible” may still intentionally damp acoustic modes numerically; this is different from removing them from the governing equations but can have a similar practical effect at resolved scales.

Grid architecture also matters. THOR uses an icosahedral grid to avoid the converging meridians of a latitude–longitude mesh and solves deep nonhydrostatic Euler equations. The Met Office Unified Model's ENDGame core uses a different grid, discretization, and semi-implicit formulation. Their shared equation category does not make their solutions interchangeable. Filters, divergence damping, hyperdiffusion, vertical staggering, flux reconstruction, top sponges, and lower-boundary conditions can dominate differences nominally attributed to “nonhydrostatic physics.”

Conservation provides a critical audit. In an inviscid closed system the discretization should account for mass, axial angular momentum, and an appropriate total-energy budget. Any filter or sponge that removes kinetic energy should say where that energy goes. A deep gas-giant domain contains enormous mass at high pressure, so tiny numerical velocities or torques near the bottom can control the total angular-momentum reservoir. Apparent equilibration at the photosphere does not prove equilibrium below.

## What comparisons have established

Mayne and collaborators adapted ENDGame to hot-Jupiter configurations using a fully compressible, nonhydrostatic, deep-atmosphere framework. Their 2014 study separated a shallow idealized test from a deeper HD 209458 b setup. The shallow case provided evidence that relaxing approximations need not radically alter every large-scale circulation pattern. The deep case exposed slow adjustment and sensitivity associated with the massive lower atmosphere. This is simulated evidence about those configurations, not a general measurement of nonhydrostatic importance.

Mendonça and collaborators introduced THOR as an independently developed global nonhydrostatic exoplanet core; Deitrick and collaborators later documented THOR 2.0 and benchmarked its revised numerics. These works establish that deep compressible global models can reproduce standard atmospheric tests and run in exoplanet regimes. Benchmark success verifies implementation against specified problems; it does not validate radiative, cloud, or chemical closures on an observed planet.

Noti and Lee used THOR with non-grey radiative transfer to compare a nonhydrostatic deep equation set (NHD) with a quasi-hydrostatic set (QHD) across a hot-Jupiter parameter grid. They reported larger divergence at lower gravity, faster rotation, and higher irradiation temperature, including differing circulation states. Because the comparison was performed within one modeling framework, it narrows—but does not eliminate—confounding from code architecture. The result is a conditional sensitivity map, not proof that NHD is closer to nature in every divergent case.

Equation-set comparison remains entangled with resolution and dissipation. If a newly retained wave lies near the grid scale, its effect may be numerical rather than converged. If two runs use different stable time steps or filters, differences cannot automatically be assigned to vertical acceleration. A persuasive experiment holds radiation, boundaries, resolution, initialization, and dissipation as nearly fixed as possible; reports conservation and convergence; and repeats enough cases to distinguish transient adjustment from a robust climate state.

## Equations, model output, and observables are different things

The equations define allowable dynamics. A numerical model produces conditional fields under a discretization and set of closures. A telescope measures radiation. Keeping these layers separate prevents an easy category error.

**Equation-level prediction:** retaining radial momentum permits vertically accelerating modes, acoustic propagation, compressible shocks, and deep geometric couplings absent from a hydrostatic shallow model.

**Model-level result:** a particular NHD simulation may produce a different jet width, temperature map, wave spectrum, cloud distribution, or vertical-mixing rate. That result is conditional on forcing, opacities, drag, resolution, boundaries, and numerical damping.

**Observable-level claim:** radiative transfer maps the simulated temperature and composition to emergent intensity; viewing geometry then produces a spectrum, phase curve, eclipse light curve, or Doppler line profile. Only after this forward calculation can one ask whether equation choice changes data-space predictions beyond measurement and astrophysical uncertainties.

Potential diagnostics include the phase and amplitude of [[Exoplanet phase curves]], wavelength-dependent hotspot offsets, emission spectra, time-variable cloud signatures, and high-resolution line shifts. Vertical dynamics can also alter disequilibrium abundances through mixing, linking to [[Vertical mixing and chemical quenching]]. Yet each diagnostic is degenerate: radiative timescale, opacity, metallicity, magnetic drag, clouds, and deep boundary entropy can imitate a circulation change. A better test compares matched models in observable space and identifies combinations of wavelengths, epochs, or spectral lines for which their predictions separate.

Direct detection of an acoustic wave is unlikely in unresolved current data. The most plausible route is indirect: nonhydrostatic motion changes the temperature–composition–cloud state enough to affect radiation. For rocky planets, resolved convection may modify cloud altitude and dayside albedo. For hot giants, deep geometry or wave transport may change the equatorial jet and thus the thermal phase curve. These are hypotheses to test, not observations already secured.

## A verification ladder for nonhydrostatic claims

A nonhydrostatic exoplanet calculation earns confidence in stages:

1. **Equation audit:** list hydrostatic, shallow-atmosphere, traditional-Coriolis, compressibility, gravity, and thermodynamic assumptions separately.
2. **Unit and wave tests:** reproduce hydrostatic resting columns, acoustic and gravity-wave dispersion, solid-body rotation, balanced flow, and tracer advection at known convergence rates.
3. **Budget tests:** track mass, energy, and axial angular momentum, including explicit accounting for filters, sponges, and boundaries.
4. **Resolution tests:** show that the claimed structures persist as horizontal and vertical spacing, time step, and diffusion vary.
5. **Matched equation experiment:** alter the equation set while holding physics and numerical choices fixed enough to isolate the cause.
6. **Intermodel comparison:** repeat with an independently designed core where feasible, as emphasized by [[Benchmarking exoplanet general circulation models]].
7. **Observable forward model:** calculate spectra or light curves with common opacities and instrument treatment.
8. **Discrimination test:** compare the NHD–hydrostatic difference with observational errors and with uncertainty from clouds, chemistry, stellar contamination, and planetary parameters.

This ladder can yield a useful negative result. If internal vertical velocities differ but synthetic observables do not at attainable precision, the hydrostatic approximation may be adequate for that observing question. If differences exceed errors only after an unconstrained cloud model is selected, the evidence is not yet equation-specific.

## Why it matters

Nonhydrostatic dynamics is the next rung above primitive equations in the exoplanet model hierarchy, but added completeness is not automatically added truth. It becomes scientifically valuable when it resolves a force balance needed by the question, survives numerical verification, and produces an observable consequence robust to uncertain atmospheric physics.

For theory, these models connect global jets to convection, short gravity waves, shocks, and deep reservoirs without prescribing hydrostatic balance. For interpretation, matched comparisons quantify a structural uncertainty that retrievals rarely include. For observing strategy, they can identify wavelengths and targets—especially low-gravity, rapidly rotating, or intensely irradiated planets—where equation-set choice is most likely to matter.

The central discipline is claim-specific adequacy. Use a hydrostatic model when large-scale stratified balance controls the target observable and demonstrate that neglected acceleration is small. Use a nonhydrostatic model when vertical acceleration, compressibility, or deep geometry is integral, then verify that the added modes are physical rather than grid-scale noise. In both cases, report simulated fields as simulations and radiation as the observable bridge.

## Sources

- Mayne, N. J. et al. (2014), “The Unified Model, a fully-compressible, non-hydrostatic, deep atmosphere global circulation model, applied to hot Jupiters.” Primary ENDGame application and shallow/deep hot-Jupiter experiments. [Astronomy & Astrophysics](https://doi.org/10.1051/0004-6361/201322174).
- Mendonça, J. M. et al. (2016), “THOR: A New and Flexible Global Circulation Model to Explore Planetary Atmospheres.” Primary THOR dynamical-core description and benchmarks. [The Astrophysical Journal](https://doi.org/10.3847/0004-637X/829/2/115).
- Deitrick, R. et al. (2020), “The Planetary General Circulation Model THOR 2.0: Description and Validation.” Primary revised-core description and validation suite. [The Astrophysical Journal Supplement Series](https://doi.org/10.3847/1538-4365/ab930e).
- Noti, P. A. and Lee, E. K. H. (2023), “Examining NHD versus QHD in the GCM THOR with non-grey radiative transfer for the hot Jupiter regime.” Primary within-core equation-set comparison across planetary parameters. [Monthly Notices of the Royal Astronomical Society](https://doi.org/10.1093/mnras/stad1942).
- White, A. A., Hoskins, B. J., Roulstone, I., and Staniforth, A. (2005), “Consistent approximate models of the global atmosphere: shallow, deep, hydrostatic, quasi-hydrostatic and non-hydrostatic.” Primary analysis of consistent equation families and conservation. [Quarterly Journal of the Royal Meteorological Society](https://doi.org/10.1256/qj.04.49).
- Showman, A. P., Tan, X., and Parmentier, V. (2020), “Atmospheric Dynamics of Hot Giant Planets and Brown Dwarfs.” Authoritative review of dynamical regimes and modeling hierarchy. [Space Science Reviews](https://doi.org/10.1007/s11214-020-00758-8).

## Open questions

- At what gravity, irradiation, rotation, and modeled thickness do matched hydrostatic and nonhydrostatic simulations first diverge in *observable space* beyond JWST-era uncertainties?
- Can global nonhydrostatic cores converge on vertical momentum and wave-flux spectra at resolutions affordable for long climate integrations?
- How should equation-set uncertainty be incorporated into atmospheric retrievals without treating a small collection of related GCMs as a statistical ensemble?
- Which cloud and chemistry responses amplify otherwise hidden nonhydrostatic differences, and which merely introduce new degeneracies?
- What lower-boundary and equilibration protocol best prevents a massive deep atmosphere from imposing spurious angular-momentum trends on the observable weather layer?
