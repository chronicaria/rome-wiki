---
title: Numerical artifacts and false atmospheric variability
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-dynamics, numerical-modeling, variability]
---

Numerical artifacts are changes produced by a model's grid, time step, stabilization, boundaries, initialization, or sampling rather than by the stated atmospheric equations; distinguishing them from real simulated weather requires controlled perturbations and closed budgets, not visual plausibility.

Up: [[Benchmarking exoplanet general circulation models]]

Related: [[General circulation models for exoplanets]] · [[Primitive equations of planetary atmospheres]] · [[Time-series mapping of brown-dwarf weather]] · [[Exoplanet phase curves]] · [[Atmospheric predictability limit]]

## Three meanings of variability

“The atmosphere varies” can describe three different things, and an exometeorology paper should say which one it means.

**Observed variability** is a change in calibrated flux, spectrum, line position, or polarization measured at the telescope. Its alternatives include photon noise, stellar variability, detector systematics, and reduction choices. A numerical model does not turn such a change into weather by resemblance.

**Physical model variability** is a time-dependent solution of the stated equations and parameterizations. Examples include propagating waves, moving vortices, cloud cycles, baroclinic instability, or transitions between circulation regimes. It is **simulated**, even if it survives extensive testing, until observations discriminate it.

**Numerical variability** arises because a finite algorithm does not exactly solve the continuous problem. It includes unstable grid-scale modes, oscillations caused by split physics, reflections from artificial boundaries, slowly accumulating conservation error, sensitivity to arbitrary filters, and aliasing introduced when output is sampled. Such variability may be deterministic and repeatable. Random-looking behavior is not therefore evidence that it is turbulent or physical.

There is also an important middle category: **numerically selected physical behavior**. The continuous or well-resolved system may admit several real regimes, while discretization, round-off, initialization, or subgrid closure selects which regime an integration reaches. The realized flow solves something close to the intended equations, yet its probability or transition timing need not be trustworthy. This category is especially important for nonlinear atmospheres with jets, shocks, moist or cloud feedbacks, and long deep reservoirs.

## Why discretization can invent weather

A dynamical core replaces differential operators with algebraic updates on a grid or basis. If $q$ is an atmospheric field, a discrete update can be written schematically as

$$
q^{n+1}=q^n+\Delta t\,\mathcal{L}_h(q^n)+\Delta t\,\mathcal{P}_h(q^n)+\mathcal{F}_h(q^n),
$$

where $\mathcal{L}_h$ approximates resolved dynamics, $\mathcal{P}_h$ represents physical parameterizations, and $\mathcal{F}_h$ contains filters or numerical stabilization. Grid scale $h$ and time step $\Delta t$ are part of the experiment. The difference between $\mathcal{L}_h$ and the intended continuous operator is truncation error; it can act like diffusion, dispersion, a false force, or a source of conserved quantities.

**Numerical diffusion** damps gradients and wave amplitudes. It can erase small vortices, broaden jets, reduce cloud contrasts, and suppress genuine variability. **Numerical dispersion** gives different wavelengths incorrect phase speeds. It can create ringing near sharp fronts, shift wave interference, or make an atmospheric feature appear to accelerate and decelerate. A method can be stable while being too diffusive or dispersive for the scientific diagnostic of interest.

The grid itself can imprint structure. Latitude–longitude grids crowd meridians near the poles and often require filtering; cubed-sphere grids have panel edges and corners; icosahedral grids contain a small number of non-hexagonal cells; spectral transforms can suffer aliasing when nonlinear products generate unresolved wavenumbers. Preferred directions, polygonal patterns aligned with mesh geometry, disturbances locked to cube corners, or power concentrated near truncation are warning signs. None is automatically fatal, but each demands a rotated-grid, alternative-grid, or resolution test.

Time integration supplies another route. Explicit schemes must respect a Courant–Friedrichs–Lewy constraint: information should not cross too many cells per step. In one dimension a representative Courant number is

$$
C=\frac{(|u|+c)\Delta t}{\Delta x},
$$

where $u$ is flow speed, $c$ is the fastest retained wave speed, and $\Delta x$ is cell width. Stability limits depend on the actual multidimensional scheme. A run below its formal limit can still have biased phases or amplitudes. Semi-implicit and semi-Lagrangian methods permit longer steps but can damp fast waves or alter balances. If radiation, chemistry, clouds, convection, and dynamics are advanced sequentially, operator splitting can create oscillations when their adjustment times approach $\Delta t$. Halving the time step while keeping the physical setup fixed is therefore a scientific test, not merely a performance option.

## Stabilization can become the circulation

Resolved atmospheric flow transfers energy and enstrophy across scales. A finite model cannot follow that cascade below its grid. Energy arriving near the smallest represented scale may accumulate and destabilize the solution, so models add diffusion, hyperdiffusion, divergence damping, filters, flux limiters, or sponge layers. These devices are not interchangeable.

An idealized $2m$-order hyperdiffusion tendency has the form

$$
\left.\frac{\partial q}{\partial t}\right|_{\rm hyp}
=(-1)^{m+1}\nu_{2m}\nabla^{2m}q.
$$

For a Fourier mode with total wavenumber $k$, the damping rate scales as $\nu_{2m}k^{2m}$. Higher order can concentrate damping nearer the truncation scale, but it does not make the coefficient physical. Changing resolution without specifying whether the coefficient, grid-scale damping time, or some resolved-scale damping is held fixed changes the effective closure.

Heng, Menou, and Phillipps emphasized that horizontal mixing and hyperviscosity in exoplanet circulation models are pragmatic representations of an unresolved cascade, with no observation-based calibration available for extrasolar atmospheres. Their dynamical-core benchmarks showed that changing dissipation could materially alter hot-Jupiter solutions. Skinner and Cho later studied a widely used, strongly forced hot-Jupiter setup to very high spectral resolution. They found that low-resolution flows could fail to converge and that variability, vortices, spectra, and jets depend on both resolution and dissipation; a smooth low-resolution field is not necessarily the converged solution.

Hammond and Abbot isolated an even more direct failure. In THOR simulations of HD 189733 b, horizontal hyperdiffusion acted on the zonal-mean equatorial jet itself. Across their tested configurations, changing resolution and diffusion order reduced this artificial drag; in the worst comparisons the predicted jet speed shifted by thousands of metres per second. The qualitative eastward jet survived while its quantitative speed did not. This is exactly why “the same pattern appears” is weaker than convergence.

Overdamping can suppress true weather, but underdamping is not automatically more realistic. A spectral pile-up near the grid scale, checkerboard mode, grid-scale vorticity noise, or unbounded kinetic-energy growth can masquerade as vigorous variability. The useful target is a resolved range between forcing and dissipation, accompanied by spectra and budgets showing where stabilization acts. A stable animation is not enough.

Sponge layers illustrate a different risk. They damp waves near a model top to prevent reflection, but a sponge that overlaps the scientifically active region can remove vertical momentum or heat transport. A rigid lower boundary can reflect waves or truncate a deep angular-momentum reservoir. Rayleigh drag used for stability can be mistaken for physical magnetic or turbulent drag. Every artificial tendency should therefore appear explicitly in momentum, energy, and tracer budgets.

## Conservation errors and slow false climates

The continuous equations may conserve mass, axial angular momentum, dry total energy, and tracer mass under specified boundary conditions. A discretization may conserve some exactly, some approximately, and some not at all. In a forced model the budget is not supposed to be constant, but it should close:

$$
\frac{dE}{dt}=P_{\rm rad}+P_{\rm boundary}+P_{\rm drag}+P_{\rm numerical}+R_E,
$$

where the $P$ terms are diagnosed powers and $R_E$ is an unexplained residual. Reporting a small relative drift alone is inadequate. A small global residual can hide large, compensating regional errors, and a tiny fractional leak integrated over thousands of days can alter a deep atmosphere.

Angular momentum is especially diagnostic for [[Equatorial superrotation]]. Stellar heating supplies energy but not an external axial torque. An equatorial jet must be maintained by resolved eddy and mean transports, exchange with a surface or deep atmosphere, specified drag, or magnetic torque. If the diagnosed transports do not balance its acceleration, the residual may be a numerical torque. Hammond and Abbot's calculation showed the value of diagnosing the stabilization tendency rather than treating the jet as a visual outcome.

Tracer conservation matters for chemistry and clouds. Advection schemes may overshoot, producing negative abundances, or clip negative values afterward, silently creating mass. Non-conservative interpolation between dynamics, radiation, chemistry, and observable grids can manufacture or erase horizontal composition contrasts. A cloud light curve can therefore vary because condensate is physically transported, because a microphysics solver oscillates, or because clipping and remapping alter tracer mass. Separate inventories and source–sink budgets are mandatory.

## Spin-up, chaos, and false stationarity

An atmosphere initialized from rest is not immediately a climate. Fast photospheric temperatures may adjust in days while jets, deep entropy, angular momentum, or condensable reservoirs evolve for hundreds or thousands of simulated days. A trend observed during this adjustment is **spin-up**, not stationary weather. Conversely, a quiet short interval does not prove equilibrium.

Useful equilibration diagnostics include time series of globally integrated energy and angular momentum, top- and bottom-of-atmosphere fluxes, deep temperature, jet speed and width, kinetic-energy spectra, and tracer inventories. Averages should cover multiple decorrelation times after trends become smaller than the claimed variability. Deep layers need their own criteria; equilibrium at the infrared photosphere cannot be asserted for the entire modeled column.

Chaotic divergence is different from numerical non-convergence. Two well-resolved integrations perturbed at round-off level can develop different instantaneous vortices while sampling the same statistical climate. Point-by-point agreement is then the wrong test. Compare distributions, means, variances, spectra, autocorrelation times, regime occupancy, and synthetic observables using ensembles long enough to estimate sampling uncertainty.

By contrast, if those statistics change systematically with grid, time step, filter, diffusion coefficient, or coordinate choice, the scientific result is numerically sensitive. A robust qualitative regime—say, an eastward equatorial jet in every run—does not imply quantitative convergence of jet speed, variability amplitude, or hotspot offset. If regime transitions are rare, an apparently different climate may instead reflect insufficient ensemble size or averaging time. Resolution studies and initial-condition ensembles answer distinct questions and should not substitute for each other.

## Output can manufacture or hide variability

Even a sound integration can be misread after it is saved. Sampling a signal at cadence $\Delta t_s$ cannot uniquely represent frequencies above the Nyquist frequency $f_N=1/(2\Delta t_s)$. Faster waves can alias to slower apparent periods. Regular sampling commensurate with rotation or orbital periods can create beat patterns or repeatedly capture the same phase. Short output windows broaden spectral peaks and make red noise look periodic.

Bending, Lewis, and Kolb demonstrated this issue in idealized extrasolar gas-giant benchmarks: daily sampling hid high-frequency variability visible at finer cadence, while snapshot plots were poor intercomparison diagnostics because wave phase depends on initial evolution. They recommended high-frequency records, time filtering, means, and standard deviations. Their exact suggested cadence belongs to their setup; the general rule is to resolve the fastest process relevant to the claim and retain enough raw cadence to test aliasing.

Post-processing also changes the object being analyzed. Temporal averaging suppresses high-frequency variance. Interpolation to pressure levels can smear vertically moving features. Disk integration cancels opposing spatial anomalies, while nonlinear radiative transfer means a spectrum from an averaged atmospheric column is not generally the average of spectra from evolving columns. Clouds can amplify this nonlinearity. The decisive quantity for observational relevance is therefore a time series of synthetic observables computed at adequate cadence, not merely variability in a gridpoint temperature.

Numerical flow variability need not produce measurable flux variability. High-resolution hot-Jupiter calculations by Fromang and collaborators produced stronger small-scale flow variability at higher resolution, yet their post-processed dayside infrared flux did not become noticeably more variable. That is a simulated result under their cloud-free assumptions, not a universal rule. It shows why the chain “vorticity varies → observed brightness must vary” is invalid without a forward radiative calculation.

## A falsification ladder

No single check certifies variability as physical. A strong analysis attacks it with changes that should affect numerical errors but not the intended atmosphere.

1. **Repeat exactly.** Confirm that seeds, compilation, parallel reductions, and restart procedures do not unexpectedly alter deterministic diagnostics. Bitwise identity is useful for debugging but is neither necessary nor sufficient for scientific reproducibility.
2. **Refine space and time separately.** Increase horizontal and vertical resolution; then shorten the dynamics and physics time steps independently. Report which quantities converge and at what rate or uncertainty.
3. **Vary stabilization.** Change diffusion coefficient and order, filter, divergence damping, sponge depth, and flux limiter within stable ranges. Diagnose their explicit momentum, energy, and tracer tendencies.
4. **Change numerical representation.** Where feasible, rotate the mesh, change grid family, or compare an independently implemented dynamical core. Features fixed to a computational coordinate system are suspect.
5. **Close budgets.** Track mass, energy, angular momentum, and each important tracer, globally and regionally. Explain residuals and trends rather than normalizing them away.
6. **Test initial conditions and ensembles.** Perturb balanced initial states and integrate long enough to distinguish chaotic trajectory divergence, multiple physical regimes, and continuing spin-up.
7. **Inspect spectra and structure functions.** Look for pile-up, a dissipation cliff, checkerboard power, grid anisotropy, and whether the claimed feature lies comfortably above the effective resolution.
8. **Resample the output.** Recompute periods and amplitudes with different cadences, windows, tapers, and detrending choices. Check aliases against rotation, orbit, time step, output cadence, and restart interval.
9. **Forward-model observables.** Apply radiative transfer, viewing geometry, disk integration, instrument cadence, and noise. Keep simulated grid variability separate from forecast detectability.
10. **Compare against limiting cases.** Use analytic waves, tracer transport, balanced states, manufactured solutions, and simplified forcing. A complex run cannot excuse failure on a problem with a known answer.

The appropriate conclusion can be graded. “Present in one simulation” is a weak existence result. “Persists across numerical perturbations” supports numerical robustness. “Has converged statistics and closed budgets” supports a solution of the stated model. “Produces a repeated synthetic signal distinguishable with a stated instrument” is a forecast. Only calibrated data can establish measured variability, and only an inference that controls astrophysical and instrumental alternatives can attribute it to atmospheric weather.

## Why it matters

Exoplanet and brown-dwarf atmospheres are often known through unresolved light. A GCM supplies the spatial and temporal structure that observations cannot directly see, making it tempting to label every moving simulated vortex, oscillating jet, or changing cloud deck as predicted weather. Yet the same model also contains arbitrary choices—grid, filter, time step, top sponge, bottom drag, remapping, and output cadence—that can set the amplitude or period of those changes.

False variability can waste observing time by predicting signals that disappear under convergence tests. False steadiness is equally damaging: excessive diffusion may erase real waves or cloud evolution and cause an observing program to choose inadequate cadence. Numerical drag can change winds and hotspot offsets that are later compared with phase curves or Doppler spectra. Tracer leakage can create spurious chemical patchiness. Slow energy drift can be mistaken for climate evolution.

The remedy is not to demand one perfect model. It is to make numerical uncertainty part of the physical claim. State what was measured, what was simulated, what changed under numerical perturbations, which budgets closed, and what survives transformation into observable space. A variability prediction becomes scientifically useful when the numerical alternatives have been made harder to believe than the atmospheric mechanism.

## Sources

- Heng, K., Menou, K., and Phillipps, P. J. (2011), “Atmospheric circulation of tidally locked exoplanets: a suite of benchmark tests for dynamical solvers.” Primary exoplanet dynamical-core comparison and discussion of resolution-dependent dissipation: https://doi.org/10.1111/j.1365-2966.2011.18315.x
- Bending, V. L., Lewis, S. R., and Kolb, U. (2013), “Benchmark experiments with global climate models applicable to extrasolar gas giant planets in the shallow atmosphere approximation.” Primary tests of resolution, spin-up, spectra, snapshot interpretation, and output cadence: https://doi.org/10.1093/mnras/sts229
- Mayne, N. J. et al. (2014), “Using the UM dynamical cores to reproduce idealised 3-D flows.” Primary evaluation of equation sets and dynamical cores for planetary regimes: https://gmd.copernicus.org/articles/7/3059/2014/
- Skinner, J. W. and Cho, J. Y-K. (2021), “Numerical convergence of hot-Jupiter atmospheric flow solutions.” Primary high-resolution convergence study of a standard strongly forced setup: https://doi.org/10.1093/mnras/stab971
- Hammond, M. and Abbot, D. S. (2022), “Numerical dissipation strongly affects the equatorial jet speed in simulations of hot Jupiter atmospheres.” Primary momentum-budget demonstration of large-scale hyperdiffusive drag: https://doi.org/10.1093/mnras/stac050
- Fromang, S., Leconte, J., and Heng, K. (2020), “Hot Jupiter atmospheric flows at high resolution.” Primary comparison of flow resolution, simulated variability, and post-processed infrared flux: https://doi.org/10.1093/mnras/staa343
- Lauritzen, P. H. et al. (2011), “A standard test case suite for two-dimensional linear transport on the sphere.” Primary transport tests for convergence, conservation, filament preservation, and numerical mixing: https://gmd.copernicus.org/articles/5/887/2012/
- Jablonowski, C. and Williamson, D. L. (2011), “The pros and cons of diffusion, filters and fixers in atmospheric general circulation models.” Authoritative numerical-methods chapter on stabilization effects and diagnostics: https://doi.org/10.1007/978-3-642-11640-7_13

## Open questions

- Which variability diagnostics in hot-Jupiter and brown-dwarf models have demonstrated statistical convergence rather than only persistence of a qualitative regime?
- How should exoplanet intercomparisons standardize numerical-tendency and angular-momentum budgets across spectral, finite-volume, finite-difference, and finite-element cores?
- When a physically plausible regime transition is triggered by grid-scale perturbations, what ensemble design can estimate its probability independently of the numerical scheme?
- Which synthetic observables are most sensitive to numerical dissipation: broadband phase offsets, phase-resolved spectra, Doppler line shapes, eclipse maps, or cloud-driven rotational light curves?
- Can scale-aware subgrid closures replace tunable hyperdiffusion across the extreme Mach number, stratification, irradiation, and rotation regimes of exoplanet atmospheres?
