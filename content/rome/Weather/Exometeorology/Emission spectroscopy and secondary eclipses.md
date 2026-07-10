---
title: Emission spectroscopy and secondary eclipses
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-science, spectroscopy, radiative-transfer, retrieval]
---

A secondary eclipse measures the wavelength-dependent light lost when a planet passes behind its star; turning that small decrement into a dayside atmosphere requires calibration, a stellar model, radiative transfer, and an explicit accounting of degeneracies.

Up: [[Exometeorology research frontier 2026]] · Related: [[Exoplanet phase curves]] · [[Atmospheric retrieval degeneracies]] · [[Transmission spectroscopy]]

## What the eclipse actually measures

For a transiting system, **secondary eclipse** (or occultation) occurs near superior conjunction, when the planet moves behind the star. Immediately before and after eclipse the telescope receives unresolved star plus planet light. During totality it receives the star, background, and any unresolved contaminating sources, but not the planet. The small difference is the planet's contribution in the observed band. This differential geometry enabled the first detections of exoplanet thermal emission with *Spitzer*: TrES-1 at 4.5 and 8.0 $\mu$m and HD 209458 b at 24 $\mu$m ([Charbonneau et al. 2005](https://doi.org/10.1086/429991); [Deming et al. 2005](https://doi.org/10.1038/nature03507)).

The raw observable is not a planetary spectrum. A detector records time-tagged counts. An analysis corrects or models bias, dark signal, flat-field structure, cosmic rays, background, pointing or trace motion, wavelength drift, detector persistence, and time-correlated sensitivity. It then fits an astrophysical eclipse jointly with these instrumental effects. Repeating that fit in wavelength bins produces an **eclipse-depth spectrum**, conventionally written

$$
\delta_{\rm ecl}(\lambda) \simeq \frac{F_p(\lambda)}{F_\star(\lambda)},
$$

where $F_p$ and $F_\star$ are the disk-integrated planet and stellar fluxes at the observer. This simple ratio is exact only after accounting for dilution by companion stars or background sources and for any planet phase variation across the observing baseline. The eclipse depth is therefore already a fitted quantity with a covariance matrix, not a direct subtraction of two noiseless images.

At thermal infrared wavelengths, the planet term is usually dominated by dayside thermal emission. At shorter wavelengths, especially for cooler planets, reflected starlight can contribute:

$$
\frac{F_p}{F_\star} \approx
\left(\frac{R_p}{R_\star}\right)^2
\frac{I_{p,\rm therm}(\lambda)}{I_\star(\lambda)}
+ A_g(\lambda)\,\Phi(\alpha)\left(\frac{R_p}{a}\right)^2.
$$

Here $I_{p,\rm therm}$ and $I_\star$ are disk-averaged specific intensities, $R_p/R_\star$ is the radius ratio, $A_g$ is geometric albedo, $\Phi$ is the scattering phase function, and $a$ is orbital distance. Near full phase, $\alpha\approx0$, but the exact visible dayside and phase variation depend on orbit and brightness distribution. A broadband eclipse at one wavelength may therefore mix heat and reflection. Separating them requires wavelength coverage or a physical model.

Eclipse timing supplies a different observable. For a slightly eccentric orbit, the offset of mid-eclipse from half an orbital period primarily constrains $e\cos\omega$ after light-travel time and ephemeris effects are included. Duration and ingress/egress contain geometric information and, at exceptional precision, spatial information about dayside brightness. These are not atmospheric composition measurements. Spatial inference belongs to [[From light curves to atmospheric maps]].

## From a contrast spectrum to planetary radiance

An eclipse spectrum is a planet-to-star contrast. To express it as an absolute planetary flux or intensity, one multiplies by an adopted stellar spectral energy distribution and uses the system geometry. The stellar spectrum may be empirical, synthetic, or a hybrid anchored by photometry. Errors in stellar effective temperature, metallicity, surface gravity, radius, spectral lines, or unresolved companions propagate into the planetary spectrum. This is especially important where a planet feature overlaps structured stellar opacity.

For an idealized uniform blackbody planet and star,

$$
\delta_{\rm therm}(\lambda)=
\left(\frac{R_p}{R_\star}\right)^2
\frac{B_\lambda(T_p)}{B_\lambda(T_\star)},
$$

but a real atmosphere is not isothermal or spatially uniform. It emits according to the radiative-transfer equation. In a plane-parallel, non-scattering atmosphere in local thermodynamic equilibrium, viewed at direction cosine $\mu$, the emergent intensity can be written schematically as

$$
I_\lambda(0,\mu)=I_\lambda(\tau_b,\mu)e^{-\tau_b/\mu}
+\int_0^{\tau_b}B_\lambda[T(\tau)]e^{-\tau/\mu}\frac{d\tau}{\mu}.
$$

The exponential expresses the probability that a photon from optical depth $\tau$ escapes without being absorbed. The integrand is a **contribution function**: it weights the temperatures and pressures that contribute to one wavelength and viewing angle. Molecular line cores with high opacity generally emerge from lower pressures than nearby windows, while collision-induced absorption, H$^-$ (negative hydrogen ion) opacity, clouds, or hazes can set a continuum. Disk integration then mixes many viewing angles, temperatures, gravities, cloud columns, and longitudes.

A **brightness temperature** $T_b(\lambda)$ is the blackbody temperature that reproduces the measured intensity in a given channel. It is a useful change of units, not a thermometer placed at a unique pressure. A channel can have a broad or multi-peaked contribution function, and a heterogeneous hemisphere does not emit like a blackbody at its area-weighted mean temperature because the Planck function is nonlinear. Radius and stellar-model uncertainties also enter $T_b$.

The distinction became especially clear in the JWST/NIRISS eclipse spectrum of WASP-18 b. Coulombe and collaborators measured $F_p/F_\star$ from 0.85 to 2.85 $\mu$m, multiplied it by a PHOENIX stellar model to construct the planet's thermal spectrum, and also displayed a brightness-temperature spectrum. Multiple reductions agreed within the reported uncertainties, while the atmospheric inference required a retrieval. The measured spectrum contained water emission structure; models fitting it favored an inverted temperature profile, dissociation, and additional short-wavelength opacity ([Coulombe et al. 2023](https://doi.org/10.1038/s41586-023-06230-1)). “Water emission” here means wavelength-dependent planetary radiance shaped by water opacity in an atmosphere whose temperature increases over the relevant altitude range—not water molecules emitting independently like lamps.

## Why bands appear in absorption or emission

An opacity source becomes spectrally visible only if the atmosphere has both wavelength-dependent opacity and a temperature contrast across the pressures being sampled. In a conventional atmosphere that cools upward, a strong molecular band reaches optical depth near unity at a cooler, lower-pressure layer than a nearby opacity window. The band is dimmer and appears in absorption relative to the local continuum. In a **thermal inversion**, temperature rises over some altitude range; the same high-opacity band can then sample hotter gas and appear in emission.

This is why feature sign is evidence about the joint temperature–opacity structure, not composition alone. An isothermal atmosphere can contain abundant molecules and still look nearly blackbody because all wavelengths emerge at similar temperatures. A high-altitude gray cloud can similarly flatten features by truncating the range of pressures visible. Molecular dissociation can weaken features on ultra-hot daysides, while continuum opacity from H$^-$ can smooth the spectrum. Low spectral resolution blends multiple species, and broad photometric channels average over bands and windows.

The strongest compositional claim comes when multiple resolved features of one species appear with mutually consistent temperature structure and other plausible absorbers cannot reproduce them. Even then, the spectrum often constrains a photospheric abundance over a pressure range rather than a vertically constant, planet-wide mixing ratio. A retrieval's abundance parameter may be a useful compressed description rather than a literal atmospheric profile.

## The retrieval is an inverse problem

An emission retrieval proposes atmospheric parameters $\theta$—often a temperature–pressure profile, molecular abundances, cloud properties, gravity, radius, and calibration nuisance terms—passes them through radiative transfer to predict an eclipse spectrum, and evaluates a likelihood such as

$$
\ln \mathcal{L}=-\frac{1}{2}
(\mathbf d-\mathbf m_\theta)^\mathsf{T}\mathbf C^{-1}
(\mathbf d-\mathbf m_\theta)+\text{constant},
$$

where $\mathbf d$ is the measured contrast spectrum and $\mathbf C$ is its covariance. Bayesian inference combines that likelihood with explicit priors. The resulting posterior says which parameter combinations are supported **within that model family**. It does not prove that the chosen parameterization contains nature's true atmosphere.

Sparse eclipse photometry has low information content: several temperature profiles and mixtures of H$_2$O, CO, CO$_2$, and CH$_4$ can match the same handful of points. Retrieval methods may agree for high-quality spectra yet diverge for low-quality data, and seemingly uninformative abundance priors can induce structure in derived C/O ([Line et al. 2013](https://doi.org/10.1088/0004-637X/775/2/137)). JWST adds many more channels, but the inverse problem remains. More precise photons narrow some directions in parameter space; they do not remove missing physics, uncertain line lists, spatial averaging, or model misspecification.

The central degeneracies are coupled:

1. **Temperature versus abundance.** Band contrast depends on both opacity and the temperature difference between the layers sampled by the band and continuum. Increasing an absorber can move the photosphere upward; whether that makes the band brighter or darker depends on the temperature profile.
2. **Composition versus clouds and continuum opacity.** A gray or weakly chromatic cloud deck, H$^-$ continuum, collision-induced absorption, or an incomplete opacity inventory can suppress or reshape molecular features. A muted band is not automatically a low abundance.
3. **Vertical structure versus horizontal structure.** A one-dimensional retrieval assigns one temperature profile to a disk containing a hot substellar region, cooler limbs, possibly patchy clouds, and chemical gradients. The averaged spectrum need not equal any real column. A small hot area can dominate short wavelengths and bias a 1-D profile.
4. **Radius, gravity, and absolute scale.** The area factor $(R_p/R_\star)^2$ sets the conversion between intensity and contrast. Stellar radius, planetary radius, gravity, and reference pressure can covary with temperature and opacity, though the geometry is often better constrained for transiting planets than for directly imaged ones.
5. **Chemistry parameterization.** Free, vertically constant mixing ratios offer flexibility but can be chemically inconsistent. Equilibrium models reduce dimensions but impose elemental ratios, temperature-dependent dissociation, condensation, and sometimes rainout. Disequilibrium models add vertical mixing and photochemistry but also parameters. Agreement under one prescription is not prior independence.
6. **Instrument and baseline versus astrophysical shape.** Detector ramps, trace changes, background, pointing correlations, and the partial phase curve can covary with eclipse depth. Common-mode corrections can improve precision while coupling wavelength channels. The full spectral covariance matters.
7. **Thermal emission versus reflection.** At wavelengths where both contribute, albedo, scattering phase function, clouds, and temperature trade off. A bright optical eclipse need not imply a hot atmosphere; a dark optical eclipse need not fix Bond albedo, which is weighted over all incident wavelengths and angles.

These issues are developed generally in [[Atmospheric retrieval degeneracies]]. A defensible eclipse analysis tests alternate temperature and chemistry parameterizations, clear and cloudy cases, multiple reductions, correlated noise, stellar models, and—in consequential cases—independent retrieval codes. Posterior predictive checks ask whether the fitted model reproduces the data structure rather than merely returning narrow parameter intervals. Model comparison can establish that one family is favored under stated priors, but an evidence ratio is not a universal detection significance for a molecule.

## What eclipses reveal about exometeorology

A single eclipse is primarily a **dayside climate snapshot**, not a weather detection. It can constrain dayside radiance, brightness temperatures, broad temperature gradients with pressure, opacity sources, and—when coverage is sufficiently broad—an estimate of emitted power. Comparing that power with irradiation can inform heat redistribution and albedo, but only after filling unobserved wavelengths and separating reflected light. Those bolometric corrections are model dependent.

Repeated eclipses at the same bandpass can test whether dayside emission changes between epochs. A statistically significant difference is still only **measured variability** until stellar variability, dilution, ephemeris error, detector state, and reduction choices are excluded. If the residual change is planetary, explanations may include moving clouds, temperature fluctuations, variable chemistry, or changing surface emission on a rocky world. Multiple wavelengths and phase-resolved observations are needed to discriminate them. See [[What counts as weather on an exoplanet]].

Eclipse observations become much more informative when combined with [[Exoplanet phase curves]]. Eclipse depth anchors near-full-phase dayside flux; the curve supplies nightside flux and longitudinal modulation. Spectral channels can suggest altitude-dependent contrasts, but each samples a broad, model-dependent contribution function. [[High-resolution Doppler spectroscopy of exoplanet winds]] adds line positions and shapes, while transmission samples the terminator. These geometries need not agree because they observe different longitudes, pressures, temperatures, and chemical regimes.

Rocky planets show the method's interpretive limits particularly well. JWST/MIRI detected a 15-$\mu$m secondary eclipse of TRAPPIST-1 b and inferred a dayside brightness temperature consistent with little heat redistribution and with a bare, dark surface; the measurement disfavored a thick, heat-redistributing atmosphere but did not exclude every thin atmosphere or surface composition ([Greene et al. 2023](https://doi.org/10.1038/s41586-023-05951-7)). Adding a 12.8-$\mu$m eclipse later exposed remaining surface–atmosphere degeneracy rather than turning two broadband points into a resolved spectrum ([Ducrot et al. 2024](https://doi.org/10.1038/s41550-024-02428-z)). Broadband thermal photometry can reject classes of atmospheres; it rarely identifies a unique one.

## An evidence ladder for eclipse claims

**Measured:** calibrated count time series, a fitted eclipse time and shape, and wavelength-dependent planet/star contrasts with uncertainties and covariance. Instrument, wavelength range, cadence, baseline, dilution correction, orbital assumptions, and systematics model belong at this level.

**Retrieved:** absolute planetary radiance, brightness temperature, temperature–pressure structure, molecular abundance, cloud properties, albedo, or a low-order brightness map. Each depends on stellar and planetary parameters, radiative transfer, priors, opacity data, and spatial assumptions.

**Simulated:** spectra and circulation produced by radiative–convective, chemical, or three-dimensional dynamical models. A simulation can explain why an inversion, cloud deck, dissociation front, or inefficient redistribution is plausible; it is not itself observed.

**Interpreted:** the physical story linking retrieval and simulation—for example, that strong irradiation produces dissociation and H$^-$ opacity, or that a hot dayside indicates weak redistribution. Competing stories should remain visible when they fit the same photons.

**Forecast:** a discriminating observation, such as another wavelength band that resolves a molecule, repeated eclipses that test variability, a phase curve that measures nightside emission, or high-resolution lines that distinguish an inversion from a featureless continuum.

## A practical reading checklist

When evaluating an eclipse paper, first locate the measured light curves rather than beginning with the atmospheric cartoon. Ask how many eclipses were observed, whether the pre- and post-eclipse baselines are adequate, what was fixed from transit or radial-velocity analyses, and whether the detrending variables were selected before inspecting the eclipse. Check whether independent reductions recover the spectrum and whether residuals show red noise.

Then inspect the conversion from contrast to radiance: which stellar spectrum, radius ratio, dilution estimate, and reflected-light treatment were used? Look at the native wavelength covariance and resolution, not only a rebinned figure. Finally compare retrieval families. Which opacities and line lists were included? Is chemistry free or in equilibrium? Are clouds permitted? Is the atmosphere one-dimensional? Does the paper show contribution functions and test temperature parameterizations? The most trustworthy conclusion is often narrower than the most vivid one: “the data require wavelength-dependent opacity under all tested reductions” may be solid even when “the atmosphere has a precisely solar metallicity” is not.

## Why it matters

Secondary eclipse is one of exoplanet science's cleanest pieces of experimental geometry: the star temporarily removes the planet from the unresolved system, providing a direct differential estimate of dayside light. Yet clean geometry does not make atmospheric interpretation direct. The method's value lies in a disciplined chain from measured missing photons to model-conditioned radiance, then to competing temperature, chemistry, cloud, surface, and circulation explanations. Keeping that chain explicit lets eclipse spectroscopy constrain remote climates without mistaking a retrieval for an image or a single epoch for weather.

## Sources

- [Charbonneau et al., “Detection of Thermal Emission from an Extrasolar Planet” (*Astrophysical Journal*, 2005)](https://doi.org/10.1086/429991) — primary *Spitzer* secondary-eclipse detection of TrES-1.
- [Deming et al., “Infrared Radiation from an Extrasolar Planet” (*Nature*, 2005)](https://doi.org/10.1038/nature03507) — primary 24-$\mu$m eclipse detection of HD 209458 b.
- [Coulombe et al., “A broadband thermal emission spectrum of the ultra-hot Jupiter WASP-18b” (*Nature*, 2023)](https://doi.org/10.1038/s41586-023-06230-1) — primary JWST/NIRISS spectroscopic eclipse, reduction, stellar conversion, and retrieval case study.
- [Greene et al., “Thermal emission from the Earth-sized exoplanet TRAPPIST-1 b using JWST” (*Nature*, 2023)](https://doi.org/10.1038/s41586-023-05951-7) — primary JWST/MIRI rocky-planet eclipse measurement.
- [Ducrot et al., “Combined analysis of the 12.8 and 15 μm JWST/MIRI eclipse observations of TRAPPIST-1 b” (*Nature Astronomy*, 2024)](https://doi.org/10.1038/s41550-024-02428-z) — primary two-band analysis of the rocky planet's dayside emission.
- [Line et al., “A Systematic Retrieval Analysis of Secondary Eclipse Spectra. I. A Comparison of Atmospheric Retrieval Techniques” (*Astrophysical Journal*, 2013)](https://doi.org/10.1088/0004-637X/775/2/137) — retrieval-method comparison and low-information degeneracies.
- [Madhusudhan and Seager, “A Temperature and Abundance Retrieval Method for Exoplanet Atmospheres” (*Astrophysical Journal*, 2009)](https://doi.org/10.1088/0004-637X/707/1/24) — foundational emission-retrieval framework.
- [STScI, “JWST Time-Series Observations”](https://jwst-docs.stsci.edu/methods-and-roadmaps/jwst-time-series-observations) — authoritative observing and instrument-method context; accessed 2026-07-10.

## Open questions

- Which combinations of continuous wavelength coverage and spectral resolution most efficiently separate temperature structure from abundance and clouds for each planet class?
- How should one-dimensional eclipse retrievals quantify bias from unresolved horizontal temperature and composition gradients?
- When do repeat-eclipse differences become strong enough, across independent reductions and matched bandpasses, to support a planetary weather interpretation?
- Can joint low-resolution, high-resolution, phase-curve, and eclipse-map retrievals share a physically consistent three-dimensional atmosphere without becoming prior dominated?
- For rocky planets, which measurements best break the degeneracy among a bare surface, a thin atmosphere, clouds, and wavelength-dependent surface emissivity?
