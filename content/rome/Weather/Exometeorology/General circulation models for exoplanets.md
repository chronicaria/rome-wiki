---
title: General circulation models for exoplanets
created: 2026-07-10
source: llm
status: seed
tags: [weather, exometeorology, exoplanets, atmospheric-dynamics, modeling]
---

An exoplanet general circulation model is a controlled numerical experiment that couples resolved fluid motion on a rotating sphere to approximate radiation, turbulence, convection, clouds, chemistry, and surface exchange; its output is a conditional prediction, not a direct portrait of an observed atmosphere.

Up: [[Exometeorology research frontier 2026]]

## What a GCM actually does

A general circulation model, or GCM, advances a three-dimensional atmospheric state through time. At minimum that state contains winds, pressure or density, and temperature; comprehensive models may also carry water, condensate, chemical species, aerosols, and tracers. The model divides the atmosphere into finite cells or basis functions and asks how conservation laws move mass, momentum, and energy among them. It then supplies mathematical closures for every influential process too small, fast, complicated, or poorly known to resolve explicitly.

That last sentence is essential. A GCM is not simply “the equations of fluid dynamics on a computer.” Its **dynamical core** solves a chosen approximation to those equations. Its **physics package** computes radiative heating, convection, turbulent mixing, clouds, chemistry, and exchanges at boundaries. A coupling scheme makes those pieces interact. An exoplanet simulation further needs assumed planetary parameters, initial and boundary conditions, numerical dissipation, and a definition of what counts as equilibrium.

For Earth, millions of local observations constrain many of those choices. For an exoplanet, even radius, gravity, rotation state, atmospheric mass, composition, and surface properties may be uncertain. A GCM therefore maps assumptions to consequences:

$$
\{\text{planet, atmosphere, closures, numerics}\}
\longrightarrow
\{T,\mathbf{u},q_i,\text{clouds}\}(\lambda,\phi,z,t)
\longrightarrow
\text{synthetic observables}.
$$

This makes GCMs indispensable for interpreting [[Exoplanet phase curves]], [[Transmission spectroscopy]], and [[Emission spectroscopy and secondary eclipses]], while also placing hard limits on what those interpretations can establish.

## The equation set

### A compressible starting point

The most general common starting point is a rotating, compressible fluid. In schematic flux form, mass conservation is

$$
\frac{\partial \rho}{\partial t}+\nabla\cdot(\rho\mathbf{u})=0,
$$

and momentum conservation is

$$
\frac{D\mathbf{u}}{Dt}+2\boldsymbol{\Omega}\times\mathbf{u}
=-\frac{1}{\rho}\nabla p-\nabla\Phi+\mathbf{F}_{\rm phys}+\mathbf{F}_{\rm num}.
$$

Here $\rho$ is density, $\mathbf{u}$ velocity, $p$ pressure, $\boldsymbol{\Omega}$ planetary rotation, and $\Phi$ gravitational potential. The material derivative $D/Dt=\partial/\partial t+\mathbf{u}\cdot\nabla$ follows an air parcel. $\mathbf{F}_{\rm phys}$ represents unresolved stresses or drag; $\mathbf{F}_{\rm num}$ reminds us that filters and diffusion inserted for stability also influence momentum.

One may evolve internal energy, total energy, temperature, entropy, or potential temperature. A temperature-form equation is schematically

$$
c_p\frac{DT}{Dt}-\frac{1}{\rho}\frac{Dp}{Dt}
=Q_{\rm rad}+Q_{\rm latent}+Q_{\rm turb}+Q_{\rm chem},
$$

with an equation of state such as $p=\rho R T$ closing thermodynamics for an ideal gas. Tracer species obey conservative transport equations,

$$
\frac{\partial(\rho q_i)}{\partial t}+\nabla\cdot(\rho q_i\mathbf{u})
=S_i-\nabla\cdot\mathbf{J}_i,
$$

where $q_i$ is a mixing ratio, $S_i$ chemical or phase-change production, and $\mathbf{J}_i$ unresolved diffusive flux. Conservation of a tracer in code is not automatic: the advection algorithm, positivity treatment, and chemistry coupling all matter.

### Primitive versus deep nonhydrostatic equations

Many hot-Jupiter and terrestrial exoplanet GCMs use the **primitive equations**. These assume a geometrically shallow atmosphere, neglect some metric terms, and replace vertical momentum with hydrostatic balance,

$$
\frac{\partial p}{\partial z}=-\rho g.
$$

Hydrostatic balance does not mean there is no vertical motion. It means vertical pressure-gradient and gravitational accelerations nearly cancel at the resolved scale, allowing vertical velocity to be diagnosed through mass continuity while horizontal winds evolve prognostically. For a thin, stably stratified atmosphere whose horizontal scales greatly exceed its depth, this is efficient and often accurate.

The approximation becomes less secure when atmospheric thickness is not small relative to planetary radius, vertical accelerations are dynamically important, or wind and sound speeds approach regimes unlike terrestrial meteorology. THOR and newer dynamical cores can instead solve deep, nonhydrostatic Euler equations. THOR comparisons found negligible hydrostatic/nonhydrostatic differences in an Earth benchmark but pronounced differences for a hot-Jupiter case. That does not prove every hot-Jupiter primitive-equation result is wrong; it establishes equation-set choice as a testable structural uncertainty.

## Closures: where much of the climate enters

The resolved equations contain fluxes generated below grid scale. Averaging nonlinear equations produces unknown correlations such as turbulent momentum and heat fluxes. A **closure** relates those unknowns to resolved variables. Parameterization is therefore not optional. Choosing no explicit scheme merely leaves numerical mixing as an implicit one.

### Radiation and stellar forcing

The simplest thermal forcing relaxes temperature toward a prescribed radiative-equilibrium field:

$$
\left(\frac{\partial T}{\partial t}\right)_{\rm rad}
=-\frac{T-T_{\rm eq}(\lambda,\phi,p,t)}{\tau_{\rm rad}(p)}.
$$

This Newtonian cooling isolates dynamics and makes clean parameter sweeps possible. It cannot predict a spectrum because opacity and radiation are not calculated. Double-gray schemes separate incoming shortwave and outgoing longwave radiation with mean opacities. Multiband or correlated-$k$ schemes resolve wavelength-dependent gas absorption more realistically but require composition, opacity databases, scattering assumptions, and much more computation.

For a synchronously rotating planet on a circular orbit, the imposed stellar pattern is fixed in longitude, approximately proportional to $\max(0,\cos\zeta)$, where $\zeta$ is stellar zenith angle. Eccentricity, obliquity, nonsynchronous rotation, and stellar spectral shape make forcing time-dependent. M-dwarf light is redder than sunlight, changing where water vapor, clouds, ice, and the surface absorb energy. Thus equal bolometric flux does not guarantee equal climate.

Radiation and motion couple both ways: opacity determines heating, heating drives pressure gradients, winds transport absorbers and condensates, and their redistribution changes opacity. See [[Radiative and advective timescales in exoplanet atmospheres]] and [[Day-night heat redistribution]].

### Convection, turbulence, and drag

A grid hundreds of kilometres wide cannot resolve convective plumes. Dry convective adjustment instantaneously or rapidly restores an unstable column toward an adiabat while conserving column energy. Mass-flux schemes represent ensembles of rising and sinking plumes. Moist schemes must decide when condensate forms, rains out, re-evaporates, or freezes. These choices strongly affect vertical heat transport and cloud location.

Boundary-layer closures use resolved shear and stability to estimate turbulent fluxes. Near a solid or ocean surface, bulk aerodynamic formulas commonly give sensible heat, latent heat, and momentum fluxes from differences between the lowest atmospheric level and surface. Gas giants lack a solid lower surface in the modeled weather layer, so models often apply deep drag, a basal flux, or an impermeable pressure boundary. Magnetic drag in ultra-hot atmospheres is sometimes represented as Rayleigh damping, $\partial\mathbf{u}/\partial t=-\mathbf{u}/\tau_{\rm drag}$, although real magnetohydrodynamic forces need not be local, linear, or isotropic.

At the model top, sponge layers damp vertically propagating waves before they reflect. At small resolved scales, hyperdiffusion or filters suppress grid-scale noise and the enstrophy cascade. Their coefficients are rarely derived from first principles. They may alter jet speed, angular momentum, hotspot offset, and variability—the very outputs being interpreted physically.

### Clouds and chemistry

Cloud closures range from instant condensation at saturation to prognostic microphysics with nucleation, growth, sedimentation, evaporation, and multiple particle sizes. Radiative effects depend on cloud fraction, vertical overlap, particle shape and size, and wavelength. Cloud transport then links microphysics to circulation, as discussed in [[Cloud formation and transport beyond Earth]].

Chemistry may be fixed at equilibrium, relaxed toward equilibrium on a prescribed timescale, or integrated as a kinetic network. Tracers can be quenched when transport outruns chemical conversion; photochemistry adds stellar ultraviolet forcing. A retrieved molecular abundance therefore need not equal the equilibrium abundance at the observed pressure. See [[Disequilibrium chemistry as a tracer of circulation]].

## Boundaries and initial conditions

Boundaries are physical hypotheses disguised as implementation details.

At the top, models usually impose no mass flux and specify stellar input plus thermal radiation to space. But the chosen pressure lid can exclude an escaping thermosphere or place a reflecting boundary near an observable photosphere. A sponge reduces reflections while also removing momentum. At the bottom, a terrestrial model may couple atmosphere to a slab ocean, dynamic ocean, land, sea ice, soil moisture, or a prescribed surface temperature. Slab-ocean depth sets thermal inertia; zero horizontal ocean heat transport is itself a strong assumption. Topography and land distribution organize stationary waves, rainfall, and cold traps.

Gas-giant models often terminate at tens to hundreds of bars, below the directly emitting atmosphere but far above the planetary interior. The basal entropy or heat flux, drag, and pressure determine how the modeled weather layer exchanges energy and angular momentum with the unmodeled deep planet. A “free-slip, impermeable” lower boundary is computationally clear but not a faithful physical interface if jets penetrate deeply.

Initial winds may be zero, temperatures may begin from one-dimensional radiative-convective equilibrium, and tracers may start uniform. Nonlinear systems can retain memory or occupy multiple statistically steady regimes. A credible study repeats runs from contrasting initial states, integrates for the slowest relevant thermal or oceanic timescale, and checks global energy, mass, and angular-momentum budgets—not merely whether maps stop changing visibly.

## Numerics are part of the model

No global atmosphere is solved continuously. Latitude–longitude grids converge at the poles and constrain explicit time steps. Cube-sphere and icosahedral grids are more uniform but introduce panel edges or grid imprinting. Spectral methods represent smooth global fields efficiently but require transforms and filtering. Finite-volume methods emphasize local conservation; finite-difference and finite-element methods make different compromises among conservation, dispersion, and computational cost.

Vertical coordinates may follow pressure, height, terrain, entropy, or hybrids. Pressure coordinates simplify hydrostatic atmospheres but struggle where surfaces intersect coordinate levels. Deep atmospheres require care with varying gravity and spherical geometry. Transport schemes should conserve mass, avoid negative tracer concentrations, and limit artificial diffusion, objectives that can conflict.

Fast acoustic and gravity waves impose a Courant–Friedrichs–Lewy time-step limit. Models use semi-implicit, split-explicit, semi-Lagrangian, or horizontally explicit–vertically implicit schemes to advance longer climate timescales affordably. Resolution convergence is not simply “more cells give truth.” Refining the grid changes which eddies are resolved and may require retuning closures and dissipation. The meaningful test is whether scientifically relevant diagnostics converge across a documented sequence while conserved budgets improve.

## A hierarchy, not a single best model

The most reliable understanding comes from a ladder of models:

1. Scaling arguments compare wave, rotational, radiative, drag, and advective timescales.
2. One-dimensional radiative-convective and photochemical columns isolate vertical physics.
3. Shallow-water models expose wave adjustment and jet formation.
4. Dry dynamical-core tests use prescribed Newtonian cooling and drag.
5. Intermediate GCMs add gray radiation, convective adjustment, and simple surfaces.
6. Comprehensive GCMs add nongray radiation, moist physics, clouds, chemistry, oceans, or magnetism.
7. Synthetic spectra and light curves pass three-dimensional states through an observation operator.

This hierarchy separates mechanism from detail. If a hotspot displacement appears in shallow-water theory, dry GCMs, and nongray simulations, confidence in the wave-driven mechanism rises. If it appears only after one cloud scheme is enabled, it is a conditional cloud prediction. Isca was built explicitly around this philosophy of constructing models at varying complexity. Complexity can improve realism, but it also multiplies uncertain parameters and can conceal compensating errors.

## Verification, validation, and intercomparison

**Verification** asks whether the code solves its stated equations. Tests include analytic waves, solid-body rotation, tracer advection, mass and energy conservation, and reproduction of standard circulation benchmarks. Heng, Menou, and Phillipps adapted Held–Suarez-style tests to tidally locked Earths and hot Jupiters. Spectral and finite-difference cores agreed reasonably for several shallow cases but less well for a deep HD 209458b setup; changing horizontal dissipation improved agreement. Their estimated discrepancies reached roughly 10% in temperature and several tens of percent in velocity. This is numerical uncertainty before uncertain clouds or chemistry are added.

**Validation** asks whether the model represents nature. Earth-derived components can be tested against Earth, but successful terrestrial tuning does not validate extrapolation to a 2,000 K, synchronously rotating giant. Solar-system planets offer intermediate tests. For exoplanets, validation is usually at the observable level: compute spectra, phase curves, eclipse maps, or Doppler shifts from the simulated atmosphere and compare them with data. This tests the combined GCM and observation operator, not each internal field uniquely.

**Intercomparison** gives multiple codes identical planetary parameters and diagnostics. The THAI project compared ExoCAM, LMD-Generic, ROCKE-3D, and the Unified Model for TRAPPIST-1e. Dry cases exposed differences in circulation regime and upper-atmosphere damping. Moist aquaplanet cases agreed that the climates remained temperate yet differed in global mean surface temperature by 14 K for a nitrogen case and 24 K for a carbon-dioxide case; cloud amounts diverged substantially. Synthetic transmission spectra carried estimated GCM cloud uncertainty of about 35–40%. Agreement among models identifies robustness, while disagreement locates closure or numerics sensitivity. It does not constitute an ensemble probability distribution because the models share ancestry, assumptions, and missing physics.

Useful validation therefore combines benchmark tests, resolution studies, conserved-budget audits, parameter perturbations, independent dynamical cores, and observable comparisons. A single beautiful temperature map is almost no validation at all.

## What can and cannot be inferred

GCMs can answer conditional questions well: given a rotation rate, atmospheric mass, opacity structure, drag law, and cloud prescription, which circulation regimes are dynamically plausible? Which observables distinguish them? They can identify mechanisms such as equatorial wave adjustment behind [[Equatorial superrotation]], or test whether an eastward hotspot and muted nightside flux are jointly compatible with a chosen atmosphere. They also make covariance visible: temperature, wind, chemistry, and clouds cannot be varied independently when dynamics couples them.

They usually cannot determine a unique atmosphere from sparse data. A phase-curve amplitude can change with radiative time, pressure level, composition, clouds, drag, rotation, or internal heat. A hotspot offset is affected by wave propagation, advection, radiative damping, and sometimes cloud opacity. Transmission spectra weight a slant terminator whose morning and evening limbs may differ; a global-mean GCM diagnostic is not the observation. These are manifestations of [[Atmospheric retrieval degeneracies]] and the inverse problem in [[From light curves to atmospheric maps]].

Inference should therefore marginalize over uncertain planet properties and model structures, not only tune a few continuous parameters inside one code. Emulator grids can connect GCMs to Bayesian retrieval, but an emulator inherits the training model's closures and cannot represent physics absent from that model. Formal posterior precision is misleading when structural uncertainty dominates.

The strongest claims are comparative and observable: model family A predicts a phase-dependent spectral feature absent in family B; a measured wind sign rejects a proposed drag regime; all tested models retain nightside condensate under a stated range of pressures. Claims about exact local wind speeds, cloud particle sizes, or surface habitability deserve much wider uncertainty than deterministic maps suggest.

## Why it matters

GCMs are the bridge between planetary physics and disk-integrated photons. They turn conservation laws into testable patterns and reveal how radiation, rotation, waves, chemistry, and clouds conspire to produce [[What counts as weather on an exoplanet]]. Without them, spectra risk being interpreted as isolated columns; with them, there is a danger of mistaking a detailed conditional simulation for an observation. The scientific value lies in disciplined comparison: across model hierarchy, numerical methods, closures, and data.

## Place in the map

This note is the modeling-method hub for [[Exometeorology research frontier 2026|exometeorology]]. It supplies the machinery behind [[Atmospheric circulation on tidally locked planets]], [[Day-night heat redistribution]], and [[Equatorial superrotation]], and it connects forward models to [[Exoplanet phase curves]], [[Transmission spectroscopy]], [[Emission spectroscopy and secondary eclipses]], and [[High-resolution Doppler spectroscopy of exoplanet winds]]. Its central caution—model output is conditional on equations, closures, boundaries, and numerics—should accompany every claimed atmospheric map.

## Sources

- Heng, Menou, and Phillipps, “Atmospheric circulation of tidally locked exoplanets: a suite of benchmark tests for dynamical solvers” (2011): https://arxiv.org/abs/1010.1257
- Heng, Frierson, and Phillipps, “Atmospheric circulation of tidally locked exoplanets. II. Dual-band radiative transfer and convective adjustment” (2011): https://arxiv.org/abs/1105.4065
- Showman et al., “Atmospheric circulation of hot Jupiters: coupled radiative-dynamical general circulation model simulations of HD 189733b and HD 209458b” (2009): https://authors.library.caltech.edu/records/95mgg-24t04
- Mendonça et al., “THOR: A New and Flexible Global Circulation Model to Explore Planetary Atmospheres” (2016): https://arxiv.org/abs/1607.05535
- Deitrick et al., “THOR 2.0: Major Improvements to the Open-Source General Circulation Model” (2020): https://arxiv.org/abs/1911.13158
- Vallis et al., “Isca, v1.0: a framework for the global modelling of the atmospheres of Earth and other planets at varying levels of complexity” (2018): https://gmd.copernicus.org/articles/11/843/2018/
- Fauchez et al., “TRAPPIST-1 Habitable Atmosphere Intercomparison (THAI): motivations and protocol version 1.0” (2020): https://gmd.copernicus.org/articles/13/707/2020/
- Sergeev et al., “The TRAPPIST-1 Habitable Atmosphere Intercomparison (THAI). Part II: Moist Cases—The Two Waterworlds” (2022): https://arxiv.org/abs/2109.11459
- Fauchez et al., “The TRAPPIST-1 Habitable Atmosphere Intercomparison (THAI). Part III: Simulated Observables” (2022): https://arxiv.org/abs/2109.11460
- Kopparla et al., “General Circulation Model Errors Are Variable across Exoclimate Parameter Spaces” (2021): https://doi.org/10.3847/1538-4357/ac2d27
- Christie et al., “Simulations of idealised 3D atmospheric flows on terrestrial planets using LFRic-Atmosphere” (2023): https://gmd.copernicus.org/articles/16/5601/2023/

## Open questions

- Which observable combinations most cleanly separate dynamical-core error from cloud and radiative-transfer uncertainty?
- When do deep, nonhydrostatic equations materially change predicted spectra rather than only unobserved flow details?
- How should numerical dissipation scale across rotation, stratification, and resolution without case-by-case tuning?
- Can intercomparison ensembles be weighted or calibrated without pretending that related models are independent samples?
- What minimum hierarchy of surface, ocean, cloud, and chemistry treatments is required before a habitability claim is informative?
- How can retrievals marginalize over structural uncertainty from alternative GCMs at tractable computational cost?
