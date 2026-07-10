---
title: Eclipse mapping and atmospheric structure
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-science, eclipse-mapping, atmospheric-dynamics, radiative-transfer, inverse-problems]
---

Eclipse mapping uses the order in which a star occults a planet’s dayside to constrain a few large-scale brightness modes; converting those modes into temperature, pressure, winds, or clouds requires wavelength-dependent radiative transfer and remains strongly model-conditioned.

Related: [[Emission spectroscopy and secondary eclipses]] · [[From light curves to atmospheric maps]] · [[Exoplanet phase curves]] · [[Contribution functions in exoplanet spectra]]

## The extra information inside ingress and egress

A secondary eclipse normally yields a planet-to-star flux ratio by comparing the unresolved system before or after eclipse with the star alone during totality. That disk-integrated depth is the zeroth-order observable described in [[Emission spectroscopy and secondary eclipses]]. Eclipse **mapping** asks a narrower question: does the detailed shape of ingress and egress differ from the prediction for a uniformly bright planetary disk?

During ingress, the stellar limb successively hides different projected regions of the planet. During egress it reveals them in the reverse geometric sequence. A bright region occulted early produces a different time-dependent loss of light from an equally bright region occulted late. The stellar disk therefore acts as a moving knife edge. It does not resolve the planet into image pixels, but it changes the weighting of those pixels with time.

For a specific intensity map $I_\lambda(\theta,\phi)$, a schematic light curve is

$$
F_\lambda(t)=\int_{\mathrm{visible}} I_\lambda(\theta,\phi)\,
V(\theta,\phi,t)\,O(\theta,\phi,t)\,d\Omega,
$$

where $V$ includes visibility and projected-area weighting and $O$ is one for an unocculted surface element and zero when the star covers it. Instrument throughput and exposure-time integration must also be applied. At each timestamp the datum is one weighted integral over the dayside. The series of changing kernels provides spatial information, but only for map patterns that alter those integrals.

This distinction sets the evidence ladder. The **measured** quantity is a calibrated time series, generally fit jointly with detector and astrophysical baselines. The eclipse depth and ingress–egress residuals are fitted observables. A brightness map is **retrieved** under an adopted basis, regularization, orbital geometry, stellar limb, and intensity law. A temperature or circulation pattern is **interpreted** by passing atmospheric models through radiative transfer. A general circulation model’s hotspot and its synthetic eclipse curve are **simulated** quantities. None should be described as a directly photographed atmosphere.

## Why the inversion is underdetermined

Discretizing the map gives a linear forward problem for fixed geometry,

$$
\mathbf f=\mathbf K\mathbf a+\boldsymbol\epsilon,
$$

where $\mathbf a$ contains pixel intensities or basis coefficients, $\mathbf K$ contains the occultation weights, and $\boldsymbol\epsilon$ includes photon noise and correlated residuals. The number of plotted pixels can easily exceed the number of independently constrained combinations of pixels. Singular-value decomposition exposes this: only modes associated with sufficiently large singular values measurably change the light curve. Other patterns fall in, or near, the null space.

The geometry most strongly resolves variation perpendicular to the instantaneous stellar limb. Nearby pixels crossed at almost the same time have similar light-curve signatures. Latitude is usually less accessible than the dominant east–west asymmetry, although impact parameter, spin-orbit geometry, cadence, and signal-to-noise change the exact mode set. A noncentral occultation can provide some north–south leverage, but a visually detailed two-dimensional map may still be constructed mostly by the prior.

Two families of representation are common. **Pixel maps** are intuitive but highly correlated and need positivity, smoothness, or entropy regularization. **Basis maps**, such as spherical harmonics or eigencurves derived from the observing kernel, concentrate the fit into a few observable modes. A low-order basis makes limited resolution explicit but can suppress a real compact feature; a flexible pixel grid can represent it but may turn noise into geography. The data do not choose a unique representation by themselves.

There is also a crucial distinction between precision and resolution. More photons reduce uncertainty on observable modes and may make additional modes detectable. They do not eliminate exact geometric null modes. Higher cadence helps only until finite exposure, ingress duration, stellar geometry, and noise dominate. Boone and collaborators analytically connected attainable eclipse-map resolution to eclipse depth, per-point precision, cadence, impact parameter, and the spatial scale being sought. Their scaling is a forecast under stated assumptions, not a promise that every nominal resolution element becomes an independent atmospheric measurement.

## The HD 189733 b demonstration

Two 2012 analyses used *Spitzer* 8 $\mu$m observations of the hot Jupiter HD 189733 b to demonstrate eclipse mapping. Majeau, Agol, and Cowan combined phase-curve and eclipse information in a spherical-harmonic framework. De Wit and collaborators used a global analysis that simultaneously constrained system parameters and the planet’s brightness distribution. Both favored an eastward displacement of the brightest dayside region relative to the substellar point, broadly consistent with earlier phase-curve evidence for eastward heat transport.

The durable result is methodological as much as meteorological. A nonuniform dayside changes ingress and egress and can bias orbital parameters if the eclipse is forced to have a uniform-disk shape. Conversely, uncertainty in orbital geometry can be absorbed into a brightness map. Joint inference is therefore necessary. The published reconstruction was not a conventional image: it was a low-order brightness solution supported by a particular bandpass, observation, systematics treatment, and map family.

The example also shows why independent routes matter. A full-orbit phase curve mainly constrains longitudinal brightness because the visible hemisphere rotates through view. Eclipse scanning supplies different spatial kernels during short intervals and can add latitude-sensitive combinations. Agreement between them strengthens a large-scale hotspot inference, but neither uniquely identifies the dynamical cause. An eastward brightness maximum can be compatible with an eastward equatorial jet transporting heat, yet wavelength-dependent opacity, clouds, chemical gradients, drag, or time variability can shift the photospheric brightness without tracing a single pressure-level temperature maximum.

## From brightness to temperature is already a model step

An eclipse map at wavelength $\lambda$ is fundamentally a map of emergent specific intensity or band-integrated radiance. A brightness temperature $T_b$ can be defined by equating that intensity to a Planck function, but $T_b$ is not automatically the gas temperature on a known isobar. Thermal photons emerge over a broad range of optical depths, viewing angles, and pressures. The relevant weighting is described by [[Contribution functions in exoplanet spectra]].

For a local plane-parallel column without scattering, the emergent intensity along direction cosine $\mu$ is schematically

$$
I_\lambda(0,\mu)=\int B_\lambda[T(p)]e^{-\tau_\lambda(p)/\mu}
\frac{d\tau_\lambda}{\mu}.
$$

Opacity, temperature, composition, and clouds determine which pressures contribute. Near the planetary limb, smaller $\mu$ gives a longer slant path, so the intensity can be limb-darkened or limb-brightened depending on the vertical temperature and opacity structure. Assuming isotropic emission when the real atmosphere has a different center-to-limb law can create an apparent spatial pattern during ingress and egress. That law should be calculated from an atmosphere or varied as a nuisance model, not silently fixed.

A broadband map blends wavelengths that may probe different pressures and species. Even a spectroscopic channel has a broad kernel. Thus the safe statement is “this band favors a brightness asymmetry.” Calling it a temperature anomaly at 0.1 bar requires a forward model, and its pressure attribution should be tested across plausible chemistry, clouds, and temperature profiles.

## Spectral eclipse mapping and three-dimensional structure

Repeating the inversion in several wavelength channels can, in principle, compare dayside structure at different opacity weightings. Molecular band cores often become optically thick at lower pressures than nearby windows. If their eclipse maps show different hotspot offsets or contrasts, this may indicate vertical variation in radiative time, advection, chemistry, or cloud opacity.

But “wavelength equals pressure” is not valid. The contribution function can be broad, multi-peaked, and horizontally variable. On an ultra-hot dayside, molecular dissociation and H$^-$ opacity may move the photosphere relative to a cooler limb. Patchy clouds can block deep radiation in one region while a clear region at the same wavelength reveals higher pressures. Disk position also changes the viewing angle. A spectral map therefore combines horizontal structure with a state-dependent vertical weighting.

A defensible atmospheric-structure analysis performs the comparison in observable space. It proposes a three-dimensional temperature, composition, and cloud field; computes angle-dependent intensities through the same bandpasses; integrates them through the time-dependent occultation kernel; and fits the resulting light curves. Competing models should be compared at the level of calibrated time series, not only by whether their displayed hotspot resembles a retrieved map.

This approach can test transferable hypotheses. Short radiative times at low pressure may produce a large day–night contrast and a hotspot closer to the substellar point. Deeper layers with longer radiative times may preserve a larger eastward displacement. Strong drag can reduce winds and offsets. Clouds can instead displace brightness by suppressing emission without equivalently shifting temperature. Multiwavelength eclipse maps can discriminate these stories only if their weighting functions differ enough and the spectral channels retain adequate ingress–egress precision.

## Geometry, timing, and the uniform time offset

A nonuniform brightness distribution can shift the apparent eclipse time. If the planet’s bright side is preferentially occulted early or late, fitting a uniform disk may move the best-fitting mid-eclipse. Williams and collaborators called this the “uniform time offset.” It can mimic or perturb the timing signal otherwise used to infer $e\cos\omega$, the eccentricity component along the line of sight.

The solution is not to assign every timing offset to weather. Light-travel time, orbital eccentricity, ephemeris uncertainty, apsidal effects, and brightness asymmetry must be modeled consistently. Transit-derived geometry and radial velocities provide external information, while repeated eclipses test stability. A brightness map inferred with orbital parameters held artificially exact will understate uncertainty; a freely floating orbit with weak priors can absorb atmospheric modes.

Stellar parameters matter as well. The occulting edge is the projected stellar limb, and the planet-to-star radius ratio, impact parameter, scaled semimajor axis, eccentricity, and projected orbital path set the scan. Starspots or faculae do not enter secondary eclipse exactly as they do a primary transit—the planet is being hidden, not blocking a patch of star—but stellar variability can distort the baseline and alter the stellar flux used for normalization. Unresolved companions dilute the eclipse.

## Instrumental and astrophysical failure modes

Ingress and egress are brief, and the mapping signal is smaller than the total eclipse depth. That makes it vulnerable to choices that barely affect a broadband depth:

- **Correlated detector behavior.** Pointing-dependent sensitivity, ramps, persistence, trace motion, background drift, and wavelength shifts can have timescales comparable to ingress. Flexible detrending may absorb real spatial signal or manufacture curvature.
- **Baseline leakage.** A phase-curve slope continues across eclipse. Removing it before mapping as though it were known can bias the ingress and egress shape. The phase variation, eclipse, and systematics should be fit jointly where possible.
- **Finite integration.** Long exposures smear the stellar limb’s motion. Forward models must integrate over each exposure rather than sample only its midpoint.
- **Ephemeris and geometry errors.** Small errors in contact times or impact parameter project onto low-order brightness modes.
- **Unmodeled center-to-limb intensity.** Atmospheric limb darkening or brightening can masquerade as latitudinal or radial structure.
- **Temporal variability.** Combining eclipses assumes a sufficiently stable map. Genuine weather, calibration changes, or inconsistent normalization can all make repeat events disagree.
- **Selection and regularization.** Trying many bases, detrending models, or hotspot shapes and reporting the most picturesque one without accounting for model selection exaggerates evidence.

Useful robustness checks include injection–recovery through the full reduction, fits to independent visits and reductions, residual permutation or time-correlated noise models, alternate map bases and regularization strengths, posterior predictive checks, and synthetic uniform-disk tests. A map feature is more credible when it persists across defensible systematics models and is represented by an observable mode rather than by prior-dominated pixels.

## A reporting standard for atmospheric claims

An eclipse-mapping result should begin with the instrument, bandpass, cadence, number of eclipses, ingress duration, fitted eclipse depth, and the amplitude of the nonuniform component. It should state which orbital quantities were fixed or jointly inferred, how exposure integration and the stellar limb were modeled, and how detector covariance entered the likelihood.

The reconstruction needs its own audit trail: map basis, number of retained modes, positivity or smoothness prior, regularization selection, null-space treatment, and comparison with a uniform disk. Posterior images should not hide unconstrained modes. Reporting eigencurve amplitudes, singular values, or resolution kernels makes the actual information content clearer than a finely pixelated heat map.

Atmospheric interpretation comes last. Authors should distinguish the retrieved radiance distribution from brightness temperature and from a modeled gas-temperature field. Pressure ranges must come from state-dependent contribution functions, preferably shown across posterior solutions. A claimed jet, drag regime, or cloud pattern should predict other observables—phase curves, spectra, Doppler shifts, or repeatability—not merely resemble one map.

## What eclipse mapping can responsibly establish

With adequate data, eclipse mapping can reject a uniform dayside, constrain a small number of large-scale brightness modes, locate a broad flux maximum relative to the substellar point, and test whether spatial structure changes with wavelength or epoch. Combined with phase curves and spectra, it can sharpen tests of heat redistribution and atmospheric models.

It cannot by itself return a unique meteorological map, identify a wind vector, or assign every pixel to a single pressure. The strongest conclusion is often conditional: under a stated orbital geometry, intensity law, map family, and systematics treatment, the time series favors a particular low-order brightness asymmetry. Atmospheric dynamics then compete to explain that asymmetry through forward-modeled observables.

That restraint is productive. Eclipse mapping is valuable precisely because its occultation kernels differ from ordinary phase-curve kernels. It adds a genuinely new projection of an unresolved atmosphere. Treating it as a sparse inverse problem—rather than a photograph—reveals which aspects of dayside structure the photons actually constrain and which remain supplied by physics, priors, or visual interpolation.

## Sources

- [Rauscher et al., “Toward Eclipse Mapping of Hot Jupiters” (*Astrophysical Journal*, 2007)](https://doi.org/10.1086/521346) — foundational forward calculations of ingress–egress signatures from nonuniform hot-Jupiter brightness patterns.
- [Williams et al., “Resolving the Surfaces of Extrasolar Planets with Secondary Eclipse Light Curves” (*Astrophysical Journal*, 2006)](https://doi.org/10.1086/509689) — secondary-eclipse spatial information and the uniform time offset.
- [Majeau, Agol, and Cowan, “A Two-dimensional Infrared Map of the Extrasolar Planet HD 189733b” (*Astrophysical Journal Letters*, 2012)](https://doi.org/10.1088/2041-8205/747/2/L20) — primary spherical-harmonic eclipse-map demonstration using *Spitzer* data.
- [de Wit et al., “Towards consistent mapping of distant worlds: secondary-eclipse scanning of the exoplanet HD 189733b” (*Astronomy & Astrophysics*, 2012)](https://doi.org/10.1051/0004-6361/201219060) — primary global analysis coupling system parameters and brightness structure.
- [Boone et al., “An analytical theory for the resolution attainable using eclipse mapping of exoplanets” (*Monthly Notices of the Royal Astronomical Society*, 2024)](https://doi.org/10.1093/mnras/stad3912) — analytical resolution scaling and geometric limits.
- [Challener and Rauscher, “The Eclipse-mapping Null Space: Comparing Theoretical Predictions with Observed Maps” (*Astronomical Journal*, 2023)](https://doi.org/10.3847/1538-3881/acf862) — analysis of unobservable map structure and its consequences for interpretation.
- [STScI, “JWST Time-Series Observations”](https://jwst-docs.stsci.edu/methods-and-roadmaps/jwst-time-series-observations) — authoritative observing and calibration context; accessed 2026-07-10.

## Open questions

- Which JWST targets have enough repeatable ingress–egress information to support more than one or two nonuniform brightness modes after marginalizing over correlated noise?
- How should spectral eclipse mapping display three-dimensional, posterior-dependent contribution functions without implying that each channel measures one pressure surface?
- Can joint eclipse, phase-curve, and high-resolution Doppler retrievals distinguish an advected thermal hotspot from a cloud- or opacity-driven brightness displacement?
- Which center-to-limb intensity parameterizations are flexible enough to avoid false spatial structure but constrained enough to preserve useful mapping information?
- When repeated eclipse maps differ, what observing design best separates atmospheric evolution from visit-dependent calibration and map-basis sensitivity?
