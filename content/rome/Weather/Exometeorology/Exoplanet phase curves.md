---
title: Exoplanet phase curves
created: 2026-07-09
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-science, spectroscopy, radiative-transfer, atmospheric-dynamics, retrieval]
as_of: 2026-07-09
desk: Exometeorology desk
review_after: 2027-01-09
---
An exoplanet phase curve measures unresolved star–planet flux through an orbit; atmospheric temperatures, maps, winds, clouds, and heat transport enter only through model-dependent inversions of that time series.

Up: [[Exometeorology research frontier 2026]]

## Why it matters

A transit samples the planet's silhouette and a secondary eclipse isolates its dayside flux, but a phase curve follows the changing visible hemisphere between those events. For short-period planets, especially synchronously rotating hot Jupiters, that changing flux is one of the few ways to constrain longitudinal structure on a point source. It can reveal whether the nightside is bright or dark, whether the brightest hemisphere faces the star, and whether different wavelengths vary differently with longitude.

The method is powerful precisely because it is indirect. A telescope records counts from the unresolved system, not a thermometer reading or a wind vector. Converting those counts into a brightness temperature requires stellar and planetary parameters plus a radiative model. Converting a one-dimensional function of time into a two-dimensional brightness map is an ill-posed inverse problem. Converting that map into circulation requires comparison with dynamical and cloud models. Keeping those three layers separate prevents the familiar phrase “weather map” from promising more spatial information than the data contain.

## Place in the map

Phase curves complement [[Emission spectroscopy and secondary eclipses]] by adding orbital longitude and complement [[Transmission spectroscopy]] by probing the emitting or reflecting hemispheres rather than only the limb. They are inputs to [[From light curves to atmospheric maps]], [[Day-night heat redistribution]], and [[Atmospheric circulation on tidally locked planets]]. Spectral phase curves connect them to [[Atmospheric retrieval degeneracies]], while repeated visits make them a limited probe of [[What counts as weather on an exoplanet]] rather than merely a static climate pattern.

## What is actually measured

At each time, the detector records counts from the unresolved system. A schematic raw-data model is

$$C_{\rm obs}(t,\lambda)=S_{\rm inst}(t,\lambda)\left[F_\star(t,\lambda)+F_p(t,\lambda)\right]+B_{\rm inst}(t,\lambda)+\epsilon,$$

where $S_{\rm inst}$ represents multiplicative sensitivity, $B_{\rm inst}$ additive background, and $\epsilon$ stochastic noise. Real detector models can be nonlinear and history-dependent, so this equation is bookkeeping rather than a universal calibration law. After calibration and background estimation, the planetary term is usually tens to thousands of parts per million of the stellar flux. Transit and occultation provide geometric anchors: transit constrains the radius ratio and ephemeris, while the loss of planetary light during secondary eclipse helps set the dayside planet/star contrast. The out-of-eclipse modulation contains several signals with related orbital frequencies, so an “atmospheric phase curve” is obtained only after a joint fit.

**Thermal emission** dominates many infrared observations. As the planet orbits, the observer sees different mixtures of hotter and cooler longitudes. The phase maximum, minimum, peak-to-trough amplitude, and eclipse depth are measured light-curve properties once a detrending and astrophysical model has been chosen. They are not yet temperatures. A nearly sinusoidal curve is common because disk integration smooths sharp spatial structure and suppresses many map modes.

**Reflected starlight** can dominate optical phase modulation for cooler or reflective planets. Its shape depends on albedo, the scattering phase function, clouds, and illumination geometry. A Lambertian reflector is a convenient baseline, not a universal atmosphere. In an optical band, reflected and thermal emission may coexist; a large dayside flux cannot be assigned uniquely to high albedo without constraining thermal emission. Patchy reflective clouds can also shift the optical maximum westward even when thermal advection shifts the infrared maximum eastward.

**Ellipsoidal variation** is stellar, not planetary weather. A close massive companion tidally distorts its host, producing a modulation primarily at twice the orbital frequency as the projected stellar shape changes. Its amplitude depends on the mass ratio, separation, inclination, and stellar limb- and gravity-darkening. **Doppler beaming** (or boosting) is also stellar: the host brightens slightly as its orbital velocity points toward the observer and dims as it recedes, predominantly at the orbital frequency and approximately a quarter-cycle out of phase with simple reflection. Starspots, pulsations, granulation, and rotational variability add further signals. Uniform Kepler and TESS analyses therefore fit transit, eclipse, planetary brightness, ellipsoidal distortion, and beaming together rather than subtracting an assumed atmosphere first.

Eccentricity complicates this decomposition. Varying star–planet distance changes irradiation, orbital speed, and the time between transit and eclipse; the atmosphere may retain thermal memory. Even on a circular orbit, an incorrect ephemeris or a phase-shifted planetary component can leak into beaming or ellipsoidal terms. Harmonic components are physical bookkeeping devices, not unique labels: two mechanisms can project onto similar sinusoids.

## From flux to brightness temperature

Brightness temperature $T_b(\lambda)$ is the temperature a blackbody would need to reproduce the observed specific intensity in a chosen band or wavelength. It is retrieved from a planet/star flux ratio using the radius ratio and a stellar spectrum. It is therefore wavelength dependent and generally differs from the gas temperature at one sharply defined pressure. Molecular opacity, collision-induced absorption, clouds, and temperature gradients give each channel a broad contribution function. A spectral “dayside temperature” is shorthand for a model-conditioned view of an emitting layer.

The phase-curve amplitude is often translated into a day–night brightness contrast, while the absolute nightside flux depends on the eclipse depth, normalization, and phase model. A large amplitude can mean inefficient energy redistribution, but it can also result when nightside clouds lift the photosphere to colder pressures and hide warmer material below. Conversely, a small amplitude may indicate efficient advection, a long radiative time, emission from a horizontally uniform deep layer, or dilution by an unmodeled stellar/instrumental trend.

Energy-balance models combine dayside and nightside emission to estimate Bond albedo and redistribution efficiency. Those quantities are retrieved, not directly measured, and depend on wavelength coverage or bolometric corrections. An infrared observation spanning only part of the spectral energy distribution cannot by itself inventory all absorbed and emitted power. Internal heat, nonsynchronous rotation, eccentric forcing, and reflected-light contamination can further weaken the usual two-hemisphere interpretation.

## From a phase curve to a map

For a static brightness field, the observed planetary flux is the visible-hemisphere integral of intensity weighted by visibility and projected area. The forward operation erases information: latitudes are poorly resolved for an edge-on orbit, north–south structure is often invisible, and exact null modes occur under common idealized thermal-mapping assumptions. In the edge-on, latitude-independent case analyzed by Cowan and Agol, odd longitudinal sinusoidal modes above the fundamental do not appear in the phase curve; non-ideal geometry and reflected-light kernels change the precise null space but do not restore arbitrary spatial resolution. Only a small number of map parameters can normally be recovered from a full-orbit curve. A many-pixel image produced by regularization is therefore not equivalent to that many independent measurements.

Simple inversions use longitudinal slices or a low-order Fourier map. A broad day–night contrast and low-order longitudinal asymmetry can be fairly interpretable when coverage and signal-to-noise are good. Even then, the orbital phase of maximum disk-integrated flux is not automatically the longitude of the brightest map pixel; that conversion depends on a static map, viewing geometry, emission or scattering law, and the allowed harmonic structure. Sharp boundaries, small storms, and latitude-dependent jets are not robustly recovered. Positivity constraints, smoothness priors, assumed limb darkening or brightening, and a choice of harmonic order all shape the displayed map. Eclipse mapping adds information because ingress and egress scan different portions of the dayside, but its spatial modes and systematics differ from those of the full-orbit variation.

Spectral mapping adds a vertical dimension only indirectly. Channels with different opacities tend to weight different pressure ranges; wavelength-dependent amplitudes and offsets can therefore suggest how longitudinal contrast changes with altitude. But abundance, clouds, and thermal structure jointly determine the contribution functions. Calling a wavelength channel a fixed pressure level without showing the radiative-transfer weighting overstates the measurement.

Time variability breaks the static-map assumption. If the brightness pattern evolves within an orbit, a conventional inversion can misplace variability in longitude. If data from many orbits are phase-folded, genuine changes can average away or inflate residuals. A retrieved map should consequently state whether it represents one orbit, a phase-folded mean, or a jointly constrained repeating pattern.

## Amplitude and hotspot offset as circulation clues

On a synchronously rotating planet with steady forcing, stellar heating peaks at the substellar longitude. Atmospheric waves and eastward equatorial flow can transport energy downwind before radiation escapes, shifting the thermal maximum east of the substellar point. Rapid radiative cooling tends to preserve a large day–night contrast and a small offset; stronger advection or wave adjustment can reduce the contrast and increase the offset. This timescale picture explains why phase amplitude and peak phase are useful diagnostics.

It does not make either observable a direct wind-speed meter. The relationship depends on rotation rate, drag, stratification, metallicity, opacity, clouds, magnetic effects, and the pressure being observed. Different combinations can yield similar amplitudes and offsets. Clouds may preferentially mute nightside thermal flux, and spatially varying opacity can move the apparent photosphere without moving the hottest gas. At ultra-hot temperatures, molecular dissociation on the dayside and recombination on the nightside can transport latent energy. At optical wavelengths, a westward phase maximum may trace reflective clouds rather than a westward thermal hotspot.

The classic Spitzer phase curve of HD 189733 b measured an infrared maximum before secondary eclipse and a finite nightside flux. Its longitudinal brightness inversion was consistent with an eastward-displaced hot region, as expected from circulation models, but the observation itself was a system light curve at 8 microns. The wind interpretation came from comparing its amplitude and phase with atmospheric simulations. This distinction remains the right template even when modern data have far higher precision.

## Spectral phase curves

A broadband curve compresses all photons into one time series. A spectral phase curve fits many wavelength channels across the orbit, producing phase-resolved emission spectra. The measurement layer is a matrix of flux ratio versus time and wavelength. Retrievals then estimate temperature–pressure profiles, abundances, cloud properties, or low-order longitudinal structure at selected phases; general circulation models produce synthetic spectra for comparison.

Hubble observations of WASP-43 b delivered an early phase-resolved emission spectrum over three rotations. The study inferred large day–night temperature differences and wavelength-dependent hotspot behavior. JWST later observed a full orbit with MIRI. Bell and collaborators measured 5–12 micron data but excluded 10.6–11.8 microns from the primary atmospheric analysis because different reductions could not adequately remove a systematic feature there. In the retained 5–10.5 micron channels they reported phase-resolved water absorption and retrieved average dayside and nightside brightness temperatures; comparisons with three-dimensional models favored optically thick nightside clouds and disequilibrium chemistry. “Favored” matters: the cloud and wind story is an interpretation supported by the joint spectral shape and model comparisons, not a cloud photographed on the nightside.

Spectral coverage helps break degeneracies because a temperature change and a cloud opacity change need not have the same wavelength dependence. It does not abolish them. Temperature–abundance degeneracy, uncertain line opacity, cloud composition and particle size, chemical equilibrium assumptions, horizontal gradients within the visible hemisphere, and stellar spectral models all remain. Retrieving each phase independently can create apparent longitudinal chemistry from correlated noise or inconsistent priors; enforcing a global model can instead hide real asymmetry. A defensible analysis tests both the data reduction and the retrieval architecture.

## Instrument systematics and analysis choices

Phase curves are unusually vulnerable to low-frequency systematics because the desired modulation unfolds over hours or days, comparable to detector ramps, pointing drift, thermal settling, and stellar variability. Spitzer/IRAC photometry depended strongly on correcting intrapixel sensitivity as the stellar image moved. Hubble observations are interrupted by Earth occultations and inherit orbit-period systematics. JWST offers long continuous sequences but still shows detector ramps, trace motion, background changes, antenna-move interruptions, and wavelength-specific effects. Kepler and TESS supply many orbits but broad optical bandpasses blend reflection and thermal emission and may contain stellar signals.

Detrending and astrophysical inference must be fit together because a flexible baseline can absorb the planetary phase curve, while an overly rigid one can leave a false phase shift. Useful robustness checks include independent extraction pipelines, alternative apertures and centroid models, multiple ramp functions, residual-correlated-noise tests, injection–recovery, sensitivity to discarded initial data, and posterior comparison under different harmonic orders. Spectroscopic analyses should examine common-mode corrections and inter-channel covariance rather than treating every channel as independent.

Absolute calibration is less important than relative stability for some curves, but normalization still couples the nightside level to eclipse depth and baseline. Gaps near a maximum or minimum degrade the offset and amplitude together. Fixed orbital and stellar parameters can make uncertainties look smaller than they are. Reported brightness maps should propagate uncertainty from system parameters, detrending, the light-curve model, and the map inversion, not only photon noise.

## Repeatability and weather

A single stable longitudinal asymmetry is climate structure, not proof of time-variable weather. Repeat observations ask whether amplitudes, offsets, spectra, or eclipse depths recur. Agreement across independent visits and reductions strengthens the claim that a feature belongs to the planet; disagreement may indicate atmospheric variability, stellar changes, calibration differences, or parameter covariance.

WASP-43 b is valuable because it has been observed repeatedly. A study of multiple Spitzer phase curves reported no compelling variability between visits, while the Hubble sequence spanned several rotations and the JWST MIRI visit used multiple independent reductions. That repeatability supports a persistent large day–night contrast but does not imply that every retrieved longitude is immutable. Conversely, reported changes in 55 Cancri e's secondary-eclipse depths raised possibilities including surface or atmospheric variability, yet sparse epochs and instrument sensitivity made the physical cause uncertain. Repeatability must be demonstrated at matched wavelength, cadence, and reduction quality before variability is assigned to weather.

Population comparisons introduce another level of non-repeatability. Uniform surveys are valuable because they process targets with a shared framework, but individual amplitudes and especially offsets can move when system parameters and detrending choices change. Population trends should therefore distinguish robust ensemble behavior from fragile object-level values.

## A disciplined inference ladder

For any claimed phase-curve result, the safest reading order is:

1. **Measured:** identify instrument, bandpass, cadence, orbital coverage, eclipse depth, modulation amplitude, peak phase, uncertainty, and the fitted stellar/orbital components.
2. **Retrieved:** state how flux ratios became brightness temperatures, spectra, albedo, chemical abundance, or a regularized longitudinal map; name priors and opacity/cloud assumptions.
3. **Simulated:** describe the circulation or radiative-transfer model, including rotation, drag, metallicity, clouds, chemistry, and boundary conditions.
4. **Interpreted:** explain why the model comparison favors eastward advection, inefficient redistribution, nightside clouds, magnetic drag, or another mechanism, and list viable alternatives.
5. **Tested for persistence:** ask whether the signal repeats across orbits, visits, wavelengths, instruments, and independent reductions.

This ladder does not weaken the science. It shows exactly what phase curves contribute: a precise, geometry-resolved constraint on planetary brightness that can discriminate among atmospheric models when the inverse problem and systematics are carried forward honestly.

## Sources

- [Knutson et al., “A map of the day–night contrast of the extrasolar planet HD 189733b” (Nature, 2007)](https://doi.org/10.1038/nature05782) — landmark 8-micron phase curve and longitudinal brightness inference.
- [Cowan and Agol, “Inverting Phase Functions to Map Exoplanets” (Astrophysical Journal Letters, 2008)](https://doi.org/10.1086/588553) — primary mathematical treatment of the longitudinal mapping inverse problem and its limited recoverable modes.
- [Stevenson et al., “Thermal structure of an exoplanet atmosphere from phase-resolved emission spectroscopy” (Science, 2014)](https://doi.org/10.1126/science.1256758) — Hubble/WFC3 spectral phase curve of WASP-43 b.
- [Bell et al., “Nightside clouds and disequilibrium chemistry on the hot Jupiter WASP-43b” (Nature Astronomy, 2024)](https://doi.org/10.1038/s41550-024-02230-x) — JWST/MIRI phase-resolved spectroscopy, independent reductions, systematics exclusions, retrievals, and GCM comparisons.
- [Wong et al., “Systematic Phase Curve Study of Known Transiting Systems from Year 1 of the TESS Mission” (Astronomical Journal, 2020)](https://doi.org/10.3847/1538-3881/ababad) — uniform optical modeling of planetary brightness, ellipsoidal distortion, and Doppler boosting.
- [Esteves, de Mooij, and Jayawardhana, “Optical Phase Curves of Kepler Exoplanets” (Astrophysical Journal, 2013)](https://doi.org/10.1088/0004-637X/772/1/51) — Kepler full-phase decomposition and the reflection/thermal ambiguity.
- [Murphy et al., “A Lack of Variability between Repeated Spitzer Phase Curves of WASP-43b” (Astronomical Journal, 2023)](https://doi.org/10.3847/1538-3881/acaec5) — repeatability test across multiple infrared visits.
- [Demory et al., “Variability in the super-Earth 55 Cnc e” (MNRAS, 2016)](https://doi.org/10.1093/mnras/stv2239) — evidence and caution surrounding multi-epoch eclipse variability.
- [Parmentier and Crossfield, “Exoplanet phase curves: observations and theory” (2018 review chapter)](https://arxiv.org/abs/1711.07696) — scholarly synthesis of observing methods, atmospheric mechanisms, and interpretive limitations.
- [STScI, “JWST Time-Series Observations”](https://jwst-docs.stsci.edu/methods-and-roadmaps/jwst-time-series-observations) — official instrument and planning context for long time-series measurements.

## Open questions

- Which phase-curve amplitudes and offsets remain stable under independent reductions that use different detector-systematics models?
- How much of the hot-Jupiter nightside-flux deficit is caused by genuinely cold gas versus clouds moving the emitting photosphere upward?
- Can joint retrievals enforce physical continuity across phase without suppressing real longitudinal chemistry or cloud asymmetry?
- Which combinations of spectral phase curves, eclipse mapping, and high-resolution Doppler data can recover latitude as well as longitude?
- What cadence and wavelength matching are required to distinguish evolving weather from stellar variability and instrumental drift?
- How should population studies propagate inconsistent stellar parameters and reduction choices into trends with equilibrium temperature or gravity?
