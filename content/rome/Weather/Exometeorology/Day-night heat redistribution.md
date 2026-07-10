---
title: Day-night heat redistribution
created: 2026-07-09
source: llm
status: seed
tags: [weather, exoplanets, atmospheres, circulation, phase-curves]
---
Day–night heat redistribution is the conversion of asymmetric stellar heating into atmospheric energy transport, but observations usually constrain wavelength-dependent brightness contrasts rather than the transported energy itself.

Up: [[Exometeorology research frontier 2026]]

## The question behind the shorthand

A synchronously rotating planet presents nearly the same hemisphere to its star. Absorbed stellar power is therefore concentrated on the dayside, while the nightside receives energy only through the atmosphere, ocean, interior, surface, or departures from exact synchronous rotation. “Heat redistribution” asks how those systems move and store energy before it escapes to space. It is not identical to the day–night difference in a map at one pressure, and still less to the amplitude of a light curve in one observing band.

The cleanest bookkeeping begins at the top of the atmosphere. In a statistically steady climate, global absorbed stellar power plus any internal luminosity equals global emitted thermal power. Locally, however, the column energy budget may be written schematically as

$$
\frac{\partial E}{\partial t}+\nabla_h\!\cdot\mathbf{F}_{\rm dyn}
=F_{\star,\rm abs}+F_{\rm int}-F_{\rm OLR},
$$

where $E$ is vertically integrated column energy, $\mathbf{F}_{\rm dyn}$ is horizontal transport by atmospheric or oceanic motion, and $F_{\rm OLR}$ is outgoing longwave radiation. This is a conservation statement, not a retrieval formula. A phase curve samples the disk-integrated specific intensity emerging from wavelength-dependent photospheres; it does not measure $\mathbf{F}_{\rm dyn}$ directly.

Three evidence levels should therefore remain separate:

1. **Measured:** a calibrated star–planet flux as a function of orbital phase and wavelength, with transits, eclipses, stellar variability, and instrument systematics jointly modeled.
2. **Retrieved:** brightness temperatures, spectra, low-order longitudinal brightness components, or temperature–pressure structures conditional on a radiative-transfer model and priors.
3. **Interpreted or simulated:** advective energy fluxes, winds, wave adjustment, drag, cloud feedback, and a “redistribution efficiency” inferred by comparing retrievals with energy-balance models or general circulation models.

This ladder links the topic to [[Exoplanet phase curves]], [[From light curves to atmospheric maps]], and [[Atmospheric retrieval degeneracies]]. Collapsing the three levels produces the common but unsafe statement that a large thermal phase amplitude *measures* inefficient circulation.

## What observations actually constrain

For a transiting planet on a nearly circular orbit, secondary eclipse isolates the dayside planet/star flux ratio, while the orbital minimum near transit constrains the visible nightside flux if stellar and instrumental terms are controlled. The phase of maximum flux locates a broad disk-integrated brightness maximum relative to the substellar longitude. A pre-eclipse maximum is consistent with eastward-displaced hot emission; it is not a direct wind-speed measurement.

At wavelength $\lambda$, a brightness temperature $T_b(\lambda)$ is defined by the temperature a blackbody would need to reproduce the measured intensity in that channel. A real atmosphere is not a blackbody, so different wavelengths sample different contribution functions, pressures, opacities, and molecular bands. The reported day–night contrast

$$
\Delta T_b(\lambda)=T_{b,{\rm day}}(\lambda)-T_{b,{\rm night}}(\lambda)
$$

is consequently a contrast between emitting layers, not necessarily the physical temperature contrast on one isobar. Spectral phase curves are especially valuable because coherent wavelength structure can distinguish a vertically varying thermal contrast from a grey brightness suppression, but the inversion remains conditional.

Classic Spitzer measurements established the method. HD 189733 b showed finite 8-micron nightside emission and a flux maximum before eclipse; this was retrieved as a longitudinal brightness pattern with an eastward offset and interpreted through circulation models. Population analyses later combined eclipse and phase information to estimate Bond albedo and redistribution, finding considerable diversity rather than one universal hot-Jupiter response. Those estimates are energy-balance inferences: reflected light, uncertain spectral coverage, and conversion from band-limited brightness to bolometric flux enter the result.

JWST now supplies phase-resolved spectra rather than only broad photometric points. MIRI observations of WASP-43 b measured 5–10.5-micron spectra through a full orbit. Bell and collaborators reported mean brightness temperatures of $1524\pm35$ K on the dayside and $863\pm23$ K on the nightside, water absorption at all phases, and a phase-curve shape best matched by models containing optically thick nightside clouds. These are strong constraints on the emitting atmosphere. The claim that clouds become optically thick at pressures greater than roughly 100 mbar is a model comparison, not a directly observed cloud-top pressure; the paper also reports residual discrepancies among data and predictive models.

Several observational combinations improve the energy-budget inference:

- Broad wavelength coverage better approximates bolometric dayside and nightside emission.
- Spectral resolution locates molecular bands and continuum windows with different pressure sensitivity.
- Eclipse depth anchors dayside flux, while a complete orbit constrains the nightside and phase offset.
- Repeated visits test whether a static map is adequate.
- Reflected-light constraints limit Bond albedo, which otherwise trades against thermal redistribution.
- High-resolution Doppler spectra can test circulation interpretations through line shifts and broadening, although they too use spatial and chemical models.

Even with all of these, a scalar efficiency is a lossy summary. It can be useful for comparing a population under one convention, but efficiencies defined from temperature ratios, emitted powers, or energy-balance parameters are not interchangeable. Every quoted value should state its definition and whether it is band-limited or bolometric.

## Why photospheres and clouds mimic transport

The most important degeneracy is vertical. The infrared photosphere is not a material surface; it is the pressure range from which photons at a given wavelength have a substantial probability of escaping. Raising opacity moves that contribution function upward, usually into lower-pressure air. Because radiative relaxation tends to be shorter aloft and the vertical temperature profile is not fixed, two wavelengths can show different phase amplitudes even under the same circulation.

Clouds intensify this problem. A nightside condensate deck can place the effective photosphere at a colder altitude and suppress emerging flux without making the entire nightside column equivalently cold. The measured brightness contrast then increases although the dynamical transport below the cloud may be unchanged. Conversely, an optically thick dayside cloud can reduce thermal emission or add reflected light, depending on wavelength, and thereby imitate a smaller thermal contrast. Patchiness changes both the phase-curve shape and the spectrum because disk-integrated flux weights clear and cloudy columns nonlinearly.

Gas opacity produces an analogous effect. Higher metallicity generally changes molecular opacity, mean molecular weight, photospheric pressure, and radiative time; it is not a one-parameter dimmer. Disequilibrium chemistry changes which bands see which layers. On ultra-hot Jupiters, H$^-$ continuum opacity and molecular dissociation alter both the spectrum and the energy reservoir. A retrieved cold nightside at one wavelength can therefore mean a genuinely cold isobar, a high cold cloud top, a gas-opacity window closing, or some combination.

Brightness temperature also obscures horizontal structure. The Planck function is nonlinear, so a mixture of hot and cold regions does not emit like their area-weighted mean temperature. A small hot region can dominate a short-wavelength channel. Disk integration then convolves the brightness field with visibility, erasing most spatial modes. A low-order longitudinal map is informative, but its amplitude is not a unique hemispheric energy inventory.

Robust analyses propagate these degeneracies rather than selecting one preferred circulation picture at the outset. Useful comparisons include clear and cloudy forward models, multiple metallicities, free and equilibrium chemistry, alternative temperature parameterizations, wavelength-dependent contribution functions, and independent instrument reductions. A model that matches a broadband amplitude but fails the phase-resolved spectra has not explained redistribution.

## Dynamical theory

The elementary intuition compares a radiative relaxation time with a transport time. If an air parcel radiates away a thermal perturbation much faster than motion carries it across the planet, the dayside stays hot and the nightside cold. If motion acts first, the contrast decreases. This motivates

$$
\tau_{\rm adv}\sim \frac{L}{U},
$$

with horizontal scale $L$ and wind speed $U$, and the approximate photospheric radiative time

$$
\tau_{\rm rad}\sim\frac{p c_p}{g\,4\sigma T^3}.
$$

Here $p$ is pressure, $c_p$ specific heat, $g$ gravity, and $\sigma$ the Stefan–Boltzmann constant. The second expression assumes a small thermal perturbation, a grey optically modest cooling layer, and no latent or chemical heat capacity; numerical factors and optical-depth corrections vary. These clocks are diagnostic estimates, not a closed theory, as emphasized in [[Radiative and advective timescales in exoplanet atmospheres]]. In particular, $U$ is itself an outcome of the forcing, waves, rotation, and drag, so prescribing it to predict the contrast can be circular.

Analytic work by Perez-Becker and Showman and by Komacek and Showman reframed the adjustment in terms of large-scale waves. Day–night heating excites equatorial Kelvin and Rossby responses. Their pressure gradients accelerate flow and redistribute mass and entropy; radiative damping and frictional drag weaken the adjustment. In a steady scaling theory, the fractional temperature contrast depends not only on $\tau_{\rm rad}/\tau_{\rm adv}$ but on wave propagation, rotation, stratification, forcing amplitude, and drag. Short radiative times or strong drag preserve a large contrast. Efficient wave adjustment reduces it.

Those standing planetary-scale waves also transport angular momentum toward the equator and can maintain eastward equatorial superrotation. Advection by the jet shifts a photospheric hot region east of the substellar point, creating a pre-eclipse thermal maximum. But hotspot offset and redistribution efficiency are related, not synonymous. Drag can reduce the offset; spatially varying clouds can shift the observed brightness peak; vertical wind shear can make different bands peak at different phases; and magnetic effects can produce time dependence. A planet may have a modest phase offset yet a nonzero nightside energy flux.

Temperature trends across hot Jupiters broadly follow the radiative argument: hotter, more strongly irradiated photospheres cool faster because of the $T^{-3}$ scaling and often show larger day–night brightness contrasts. Gravity, rotation, metallicity, and drag create scatter. The comparison must also recognize that the photospheric pressure changes across the population, so the apparent temperature trend does not hold all other variables fixed.

For cooler synchronously rotating terrestrial planets, the same conservation law applies but the controlling reservoirs broaden. A sufficiently massive atmosphere can redistribute heat through overturning circulation and waves; oceans, surface heat capacity, latent heating, and greenhouse opacity matter. A very large airless-rock phase contrast can support the absence of substantial heat transport, but surface thermal inertia, albedo, roughness, subsurface conduction, orbital eccentricity, and nonsynchronous rotation must be tested. A nondetection of nightside flux in a band is an upper limit on emergent radiation, not proof that the physical surface reaches zero temperature.

## Additional carriers and alternative explanations

Sensible-heat advection is not the only carrier. On ultra-hot Jupiters, dayside molecular hydrogen can dissociate, absorbing energy without an equally large temperature rise. Winds carry atomic hydrogen toward cooler regions, where recombination releases that energy. Bell and Cowan showed that this chemical cycle can enhance effective heat transport and reduce the day–night contrast relative to a model that neglects dissociation. Ionization and recombination can play related roles at still higher temperatures, while magnetic coupling may exert drag or induce circulation changes. The strength and geometry of magnetic effects depend on ionization, conductivity, field structure, and depth and are not directly fixed by a phase amplitude.

Latent heat can matter wherever a condensible species cycles between hemispheres. Clouds are then both a tracer and an active component: condensation releases latent heat, particles transport material, and cloud radiative feedback changes heating rates. Most hot-Jupiter mineral clouds have far less latent-energy leverage than hydrogen dissociation, but their opacity can dominate the observed contrast.

Several alternatives can reproduce a high-amplitude or shifted curve without the simplest “weak winds” explanation:

- **Nightside clouds** hide warm deeper layers and raise the emitting level.
- **High atmospheric metallicity** changes opacity and radiative relaxation and can alter circulation.
- **Frictional or magnetic drag** damps winds and wave adjustment.
- **Deep-atmosphere coupling** changes the entropy and momentum supplied to observable pressures.
- **Eccentric or nonsynchronous forcing** makes the thermal pattern time-dependent rather than fixed in longitude.
- **Surface or magma-ocean transport** matters for rocky worlds and can coexist with a thin atmosphere.
- **Reflected light, ellipsoidal variation, and Doppler beaming** contaminate optical orbital harmonics unless jointly separated.
- **Stellar variability and detector ramps** can bias the amplitude or phase, especially when their timescales resemble the orbit.

The alternatives are not mutually exclusive. WASP-43 b illustrates the point: a large brightness contrast can coexist with winds, disequilibrium chemistry, and cloud-mediated photospheric changes. The scientifically defensible result is a posterior over coupled atmospheric explanations, not a binary verdict of “efficient” or “inefficient.”

## A disciplined inference workflow

A useful redistribution analysis can be audited through six steps. First, report the measured phase-resolved flux ratios and the instrument/systematics model. Second, retrieve brightness temperatures or spectra without calling them physical isobaric temperatures. Third, calculate contribution functions and test how they move under alternative opacity and cloud assumptions. Fourth, estimate bolometric emitted power with explicit extrapolation uncertainty rather than treating one band as the whole spectrum. Fifth, compare the retrieved observables—not merely a scalar amplitude—with radiative–dynamical and general circulation models. Sixth, label wind speeds, drag, circulation patterns, and energy fluxes as model-dependent interpretations.

Energy conservation supplies a strong cross-check. A proposed Bond albedo, dayside emission, nightside emission, and internal flux must close the global budget within uncertainties. Yet closure does not establish the route of transport: different vertical structures and circulation regimes can export the same net power. Spectral shape, phase offset, pressure dependence, and repeatability provide the additional discrimination.

The best near-term constraints will come from jointly fitting multiple geometries. Eclipse spectra constrain the dayside; full-orbit spectra constrain longitudinal brightness; transit spectra probe the terminators; Doppler spectroscopy adds velocity-sensitive information. No one geometry sees the same pressure–longitude weighting as another. A physically coherent model should predict all of them without pretending that inconsistent one-dimensional retrievals are direct atmospheric slices.

## Sources

- [Cowan and Agol, “The statistics of albedo and heat recirculation on hot exoplanets” (ApJ, 2011)](https://doi.org/10.1088/0004-637X/729/1/54) — energy-budget formalism and population inference from thermal measurements.
- [Perez-Becker and Showman, “Atmospheric heat redistribution on hot Jupiters” (ApJ, 2013)](https://doi.org/10.1088/0004-637X/776/2/134) — primary analytic and numerical wave-adjustment theory.
- [Komacek and Showman, “Atmospheric circulation of hot Jupiters: dayside–nightside temperature differences” (ApJ, 2016)](https://doi.org/10.3847/0004-637X/821/1/16) — scaling theory for temperature contrasts with radiation, waves, rotation, and drag.
- [Zhang and Showman, “Effects of bulk composition on the atmospheric dynamics on close-in exoplanets” (ApJ, 2017)](https://doi.org/10.3847/1538-4357/836/1/73) — composition, wave propagation, and circulation scalings.
- [Knutson et al., “A map of the day–night contrast of the extrasolar planet HD 189733b” (Nature, 2007)](https://doi.org/10.1038/nature05782) — landmark infrared phase curve and brightness-map inference.
- [Schwartz and Cowan, “Balancing the energy budget of short-period giant planets” (MNRAS, 2015)](https://doi.org/10.1093/mnras/stv470) — comparative albedo and redistribution constraints with explicit observational limitations.
- [Bell and Cowan, “Increased heat transport in ultra-hot Jupiter atmospheres through H2 dissociation and recombination” (ApJ Letters, 2018)](https://doi.org/10.3847/2041-8213/aabcc8) — chemical transport mechanism and energy-balance model.
- [Keating, Cowan, and Dang, “Uniformly hot nightside temperatures on short-period gas giants” (Nature Astronomy, 2019)](https://doi.org/10.1038/s41550-019-0859-z) — empirical nightside brightness-temperature pattern and cloud interpretation.
- [Bell et al., “Nightside clouds and disequilibrium chemistry on the hot Jupiter WASP-43b” (Nature Astronomy, 2024)](https://www.nature.com/articles/s41550-024-02230-x) — primary JWST/MIRI phase-resolved spectra, independent reductions, retrievals, and GCM comparisons.

## Open questions

- How accurately can broad JWST spectral coverage recover bolometric dayside and nightside power without importing a restrictive temperature structure outside the observed bands?
- Which combinations of spectral phase curves and Doppler measurements distinguish strong drag from short radiative relaxation when both enlarge the brightness contrast and reduce the hotspot offset?
- Can simultaneous cloud microphysics and radiative feedback reproduce nightside spectra without tuning cloud-top pressure independently at each longitude?
- At what irradiation does hydrogen dissociation measurably alter the population trend in day–night contrast, and what spectral diagnostic isolates it from shifting opacity?
- How should redistribution efficiency be defined so that giant and terrestrial planets can be compared without hiding their different energy reservoirs?
- Which repeated phase curves show genuine atmospheric variability after detector, stellar, and mapping degeneracies are propagated?
