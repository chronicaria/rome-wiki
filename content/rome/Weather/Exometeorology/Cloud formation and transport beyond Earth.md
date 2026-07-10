---
title: Cloud formation and transport beyond Earth
created: 2026-07-10
source: llm
status: seed
tags: [weather, exometeorology, clouds, aerosols, atmospheric-dynamics]
---

Clouds beyond Earth emerge from a competition among thermodynamics, particle microphysics, radiation, and atmospheric transport; spectra constrain the resulting opacity, but usually do not identify a unique condensate cycle.

Up: [[Exometeorology research frontier 2026]]

Related: [[Atmospheric circulation on tidally locked planets]] · [[Atmospheric retrieval degeneracies]] · [[Day-night heat redistribution]] · [[WASP-94A b morning-evening cloud asymmetry]]

## What an extraterrestrial cloud is

A cloud is a population of condensed particles suspended in an atmosphere. The particles may be liquid droplets, crystalline or amorphous solids, or aggregates. Water is only one possibility. Depending on temperature, pressure, and elemental inventory, plausible condensates include ammonia and water ice on cold giant planets; salts and sulfides on cooler substellar objects; silicates, iron, and refractory oxides in brown dwarfs and hot giant planets; and photochemically produced organic or sulfur-bearing hazes. A **condensation cloud** forms when a vapor becomes thermodynamically able to enter a condensed phase. A **haze** is usually reserved for particles produced through photochemical or other chemical pathways rather than direct equilibrium condensation, although both are aerosols and can become observationally hard to distinguish.

Equilibrium chemistry answers a limited question: which phase minimizes free energy for a specified bulk composition, temperature, and pressure? It can locate a condensation curve and estimate which elements would be removed from the gas. It does not determine whether particles nucleate, how quickly they grow, their size distribution, whether they are mixed upward, or where they evaporate. Those are kinetic and dynamical questions. Consequently, drawing a temperature–pressure profile across a condensation curve identifies a *possible cloud base*, not an observed cloud deck.

The local saturation ratio is

$$
S = \frac{p_v}{p_{\rm sat}(T)},
$$

where $p_v$ is the vapor's partial pressure and $p_{\rm sat}$ is its saturation vapor pressure. Condensation is thermodynamically favored when $S>1$. But a supersaturated gas may persist if creating the first stable particles carries a large nucleation barrier. Heterogeneous nucleation on pre-existing seeds can be much easier than homogeneous nucleation from vapor alone. This makes the supply and composition of condensation nuclei central even when they contribute little final mass. The microphysical calculations used by Gao and collaborators, for example, predict silicates to be especially effective aerosols in part because of their elemental abundance and comparatively favorable nucleation behavior; this is a model-based population explanation, not a direct mineral identification in every hot-Jupiter spectrum ([Gao et al. 2020](https://doi.org/10.1038/s41550-020-1114-3)).

## The particle life cycle

Once stable seeds exist, vapor deposits onto them or droplets grow by condensation. Particles may collide and coalesce, aggregate, evaporate, be chemically transformed, or fragment. Each pathway changes particle number and size. This matters because a fixed condensate mass divided among many small particles produces a different opacity, scattering phase function, and settling speed than the same mass in a few large particles.

The cloud base is often near the level at which a rising parcel first becomes saturated. Above it, continued cooling can drive growth while vapor depletion limits further condensation. Yet the vertical profile is not generally an equilibrium column. Condensation removes gas locally; falling particles carry elements downward; evaporation releases them elsewhere. A sequence of condensates can therefore “rain out” elements before cooler species expected from complete local equilibrium can form. Deep elemental abundance, cloud particle composition, and observable gas abundance need not match.

Gravitational settling competes with upward mixing. For a small spherical particle in a continuum, low-Reynolds-number regime, the Stokes settling speed scales approximately as

$$
v_{\rm fall}\sim\frac{2(\rho_p-\rho_g) g r^2}{9\eta},
$$

where $r$, $\rho_p$, and $\rho_g$ are particle radius, particle density, and gas density, $g$ is gravity, and $\eta$ is gas viscosity. Slip corrections or free-molecular drag replace this expression when the mean free path is not small relative to the particle. The robust lesson is that larger or denser particles generally settle faster, while stronger turbulence can keep particles aloft.

Ackerman and Marley compressed this competition into a one-dimensional steady balance between turbulent mixing and sedimentation. Their sedimentation-efficiency parameter, usually written $f_{\rm sed}$, allows high values to represent efficient rainout and vertically compact clouds, while low values yield smaller particles and more extended opacity ([Ackerman and Marley 2001](https://doi.org/10.1086/321540)). This influential model is a parameterization, not a universal microphysical law. Its value lies in making a consequential uncertainty explicit. A retrieved $f_{\rm sed}$ is therefore the preferred behavior *inside that model family*, not a direct measurement of a particle's fall speed.

A useful set of competing clocks is

$$
\tau_{\rm mix}\sim\frac{H^2}{K_{zz}},\qquad
\tau_{\rm set}\sim\frac{H}{v_{\rm fall}},\qquad
\tau_{\rm adv}\sim\frac{L}{U},
$$

where $H$ is a vertical scale, $K_{zz}$ an eddy-diffusion coefficient, $L$ a horizontal length, and $U$ a wind speed. Condensation, evaporation, nucleation, and coagulation bring additional timescales. If growth is fast compared with advection, particles can closely follow local saturation. If air crosses a thermal boundary before particles equilibrate, clouds may survive temporarily in an undersaturated region or remain absent in a supersaturated one. If settling beats vertical resupply, the visible atmosphere clears even though a deeper cloud exists.

These estimates are diagnostic rather than self-sufficient predictions. $K_{zz}$ is commonly a parameter or a quantity inferred from a circulation model; one value cannot represent all altitudes, tracers, or resolved motions. $U$ may be borrowed from the simulation whose cloud behavior is supposedly being predicted. Particle size itself responds to the same mixing and growth processes. A credible transport argument evaluates the clocks at consistent pressures and temperatures and says which inputs were prescribed, simulated, or inferred.

## Horizontal transport creates cloud geography

On a synchronously rotating planet, parcels can move between a permanently irradiated dayside and a cooler nightside. A condensable vapor may remain gaseous on the dayside, cross a limb, nucleate or grow on the nightside, settle, and evaporate after returning to warmer regions. The morning terminator samples air emerging from the nightside; the evening terminator samples air that has crossed the dayside. This creates a physical route to asymmetric limb clouds even when the planet's bulk composition is uniform. [[WASP-94A b morning-evening cloud asymmetry]] is an observationally motivated case, but the measured ingress–egress spectral difference and the proposed condensation–evaporation cycle remain separate claims.

Vertical and horizontal cold traps can also deplete an upper atmosphere. In a vertical cold trap, a condensable crosses a cool layer, rains out, and is not mixed back upward efficiently. In a day–night cold trap, material condenses on the nightside and settles before winds return it to the dayside. Three-dimensional tracer calculations for HD 209458 b found that vigorous vertical mixing could keep small particles aloft while larger particles were more readily depleted, illustrating that a thermal cold region alone does not guarantee permanent removal ([Parmentier, Showman, and Lian 2013](https://doi.org/10.1051/0004-6361/201321132)). The conclusion is conditional on the simulated circulation and prescribed particle behavior.

Brown dwarfs lack stellar day–night forcing but provide a nearby laboratory for the same competition. Rapid rotation, convection, jets, and waves can organize patchy temperature and cloud-thickness patterns. Rotational brightness modulation directly establishes changing disk-integrated flux with viewing longitude. Its wavelength dependence can support vertically structured cloud and temperature heterogeneity. It does not uniquely recover particle composition or a literal two-dimensional cloud map; [[From light curves to atmospheric maps]] explains the null space between a light curve and atmospheric geography.

## Clouds are radiatively active

Clouds do not merely trace circulation. They scatter and absorb stellar radiation, absorb and emit thermal radiation, and thereby change the temperature field that created them. Particle optical behavior depends on the complex refractive index, size relative to wavelength, shape, porosity, and vertical distribution. Very small particles tend toward a strongly wavelength-dependent scattering regime; particles much larger than the wavelength often produce greyer extinction. Real size distributions blur this simple division.

An optically thick reflective dayside cloud can raise the Bond albedo and reduce absorbed energy. A thermal-absorbing cloud can heat a layer or move the effective emission level upward. On a hot-Jupiter nightside, an opaque cloud may hide warm deep gas so that the observed brightness temperature is cold even when dynamical heat transport below it is substantial. Thus cloud opacity can enlarge a thermal phase-curve amplitude without proportionally enlarging the true gas-temperature contrast. The JWST/MIRI phase curve of WASP-43 b measured phase-resolved spectra and low nightside brightness; models containing nightside clouds and disequilibrium chemistry best accounted for key properties of the data ([Bell et al. 2024](https://doi.org/10.1038/s41550-024-02230-x)). The data did not photograph a mineral deck, and cloud-top pressure remained model-dependent.

Radiative feedback makes post-processing dangerous. A common workflow first simulates a clear atmosphere and then paints equilibrium clouds wherever its temperature crosses a condensation curve. This is useful for surveying possibilities, as in predictions of hot-Jupiter cloud-composition transitions and phase offsets ([Parmentier et al. 2016](https://doi.org/10.3847/0004-637X/828/1/22)). But if cloud opacity changes heating enough to modify winds and temperatures, the original clear circulation is no longer dynamically consistent with the imposed cloud. Coupled cloud–radiation–dynamics models address this loop, though they introduce uncertain microphysics and greater computational cost.

Latent heating provides another feedback. Condensation releases energy and evaporation absorbs it. For terrestrial water clouds this can drive convection and storms. For mineral clouds in a hydrogen-dominated hot Jupiter, latent energy is often less important to the global budget than radiative opacity, although that ordering depends on condensate abundance and regime. The importance of a cloud is therefore not proportional only to its mass: a small aerosol burden can dominate observed spectra, while a larger deep cloud may be radiatively hidden.

## Four evidence layers

Claims about remote clouds become clearer when they are kept in four layers.

### Observed

The telescope measures calibrated fluxes, transit depths, eclipse spectra, polarization, or time variability with instrument and stellar uncertainties. Muted molecular bands, optical slopes, low brightness temperatures, phase offsets, and rotational modulation are cloud-sensitive observables. None is a cloud substance by itself. A flat transmission spectrum can also reflect high mean molecular weight, stellar contamination, a small scale height, missing opacity, or limited precision. A shifted optical phase maximum can mix reflected light and thermal emission.

### Retrieved

A retrieval fits those data with a parameterized radiative-transfer model. Cloud descriptions may use a grey deck pressure, power-law haze, patchy covering fraction, particle radius, condensate abundance, or a microphysical model. The posterior constrains these parameters conditional on the temperature profile, gas opacities, reference radius, priors, geometry, and instrument model. Cloud-top pressure is often an effective optical boundary, not necessarily a sharply bounded physical layer. Composition is stronger when multiple characteristic spectral features are resolved and alternatives are compared, but even then particle shape and mixed composition matter. See [[Atmospheric retrieval degeneracies]].

### Simulated

A cloud model predicts particle populations from equilibrium rules, parameterized sedimentation, bin microphysics, kinetic chemistry, or coupled general circulation. Its outputs can include condensate mass, particle size, opacity, and spatial distribution. The prediction inherits assumed elemental abundances, nucleation seeds and surface energies, $K_{zz}$ or resolved flow, boundary conditions, particle morphology, and radiative feedback. Gao and Powell's microphysical nightside study, for instance, predicted optically thick silicate-dominated decks for a modeled range of hot Jupiters; it is a physically motivated population forecast, not a universal observational detection ([Gao and Powell 2021](https://doi.org/10.3847/2041-8213/ac139f)).

### Interpreted

Interpretation connects a retrieved opacity or measured variability to a story: nightside condensation, morning-cloud evaporation, vertical lofting, patchy holes, rainout, or a photochemical haze. A strong interpretation predicts more than the data used to formulate it—for example, wavelength-dependent limb asymmetry, mid-infrared solid-state features, correlated phase-curve changes, or a relation between gravity and cloud extent. Competing mechanisms should be named and tested with new spectral or temporal leverage.

This ladder prevents two common category errors: treating a condensate allowed by equilibrium as identified in a spectrum, and treating an effective retrieved cloud parameter as a directly measured microphysical property.

## How to reason from a spectrum to a cloud cycle

A defensible analysis starts with the actual observable and its covariance, then asks whether clouds are required relative to credible cloud-free, stellar-contamination, and composition alternatives. Next it tests more than one cloud parameterization. Only after establishing opacity evidence should it ask which condensates are thermodynamically permitted at the pressures contributing to the spectrum.

The next step is kinetic: are seed formation and growth fast enough, and are the necessary elements still available after deeper rainout? Transport then asks whether the inferred particle sizes can remain aloft, cross the terminator, or survive evaporation. Finally, a three-dimensional model tests whether the proposed cloud distribution and its radiative feedback reproduce several observables simultaneously—not only one muted band, but perhaps the thermal phase amplitude, optical offset, emission spectrum, and ingress–egress difference.

Agreement does not erase degeneracy. Several condensates can be nearly grey over a narrow wavelength range; mixtures can hide diagnostic resonances; a free particle-size distribution can compensate for composition; and different temperature structures can move the same cloud to different pressures. The most durable claim may therefore be “aerosol opacity is favored above a stated pressure range,” while mineral identity or transport pathway remains an interpretation.

## Why it matters

Clouds control what depths remote observations can see. They bias molecular abundances, reference radii, temperature profiles, energy budgets, and apparent heat redistribution. They also encode atmospheric motion because formation, advection, settling, and evaporation compete on finite clocks. This double role—as an observational screen and a dynamical tracer—makes cloud physics indispensable to [[Transmission spectroscopy]], [[Exoplanet phase curves]], and comparative climate.

The central discipline is to resist turning opacity into scenery. Remote measurements can robustly show spectral suppression, brightness asymmetry, or time variability. Retrievals can favor an aerosol layer. Microphysics can identify viable particle cycles. Circulation models can show where transport would carry them. The scientific picture becomes strongest when these independent steps converge and each retains its uncertainty.

## Sources

- [Ackerman, A. S., and Marley, M. S. (2001), “Precipitating Condensation Clouds in Substellar Atmospheres,” *The Astrophysical Journal*](https://doi.org/10.1086/321540) — primary one-dimensional mixing–sedimentation cloud model and $f_{\rm sed}$ framework.
- [Parmentier, V., Showman, A. P., and Lian, Y. (2013), “3D mixing in hot Jupiters atmospheres. I. Application to the day/night cold trap in HD 209458b,” *Astronomy & Astrophysics*](https://doi.org/10.1051/0004-6361/201321132) — primary three-dimensional tracer study of mixing, settling, and cold trapping.
- [Parmentier, V. et al. (2016), “Transitions in the Cloud Composition of Hot Jupiters,” *The Astrophysical Journal*](https://doi.org/10.3847/0004-637X/828/1/22) — primary GCM post-processing study linking condensation sequences to spectra and optical phase curves.
- [Gao, P. et al. (2020), “Aerosol composition of hot giant exoplanets dominated by silicates and hydrocarbon hazes,” *Nature Astronomy*](https://doi.org/10.1038/s41550-020-1114-3) — primary population-scale aerosol microphysics and transmission-spectrum comparison.
- [Gao, P., and Powell, D. (2021), “A Universal Cloud Composition on the Nightsides of Hot Jupiters,” *The Astrophysical Journal Letters* 918, L7](https://doi.org/10.3847/2041-8213/ac139f) — primary microphysical prediction for hot-Jupiter nightside clouds.
- [Bell, T. J. et al. (2024), “Nightside clouds and disequilibrium chemistry on the hot Jupiter WASP-43b,” *Nature Astronomy*](https://doi.org/10.1038/s41550-024-02230-x) — primary JWST/MIRI phase-resolved observations, retrievals, and model comparison.
- [Gao, P. et al. (2021), “Aerosols in Exoplanet Atmospheres,” *Journal of Geophysical Research: Planets*](https://doi.org/10.1029/2020JE006655) — authoritative review of condensate and haze formation, microphysics, observations, and modeling limitations.

## Open questions

- Which combinations of mid-infrared solid-state features, scattering slopes, and phase-resolved spectra can identify condensate composition without a particle-size prior dominating the result?
- How accurately can nucleation rates and surface energies be measured or calculated for silicates, metals, salts, and sulfides under exoplanet conditions?
- When does cloud radiative feedback reorganize the circulation enough that clear-atmosphere post-processing fails qualitatively?
- Can repeated spectral phase curves distinguish evolving particle microphysics from temperature waves or changing viewing geometry?
- How should three-dimensional retrievals represent morning–evening and day–night cloud differences without becoming non-identifiable?
