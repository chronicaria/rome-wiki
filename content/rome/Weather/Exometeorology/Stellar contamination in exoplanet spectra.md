---
title: Stellar contamination in exoplanet spectra
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, transmission-spectroscopy, stellar-activity, starspots, faculae, inference]
as_of: 2026-07-10
desk: Exometeorology desk
review_after: 2027-01-10
---

Stellar contamination occurs when the spectrum behind a planet's transit chord differs from the spectrum of the star used as the out-of-transit reference; spots, faculae, limb effects, and their evolution can then imitate or erase planetary atmospheric structure.

Up: [[Exometeorology research frontier 2026]]

## Why it matters

[[Transmission spectroscopy]] is often described as subtracting an in-transit stellar spectrum from an out-of-transit one. That shorthand hides the key assumption: the planet must block a representative sample of the stellar disk. Real photospheres contain cool magnetic spots, hot or bright faculae and plages, granulation, and wavelength-dependent center-to-limb structure. A planet crosses one narrow chord, while the normalization contains light from the entire visible disk. The mismatch is the **transit light source effect** (TLSE).

This is not merely extra random noise. Stellar heterogeneity can produce smooth slopes, band-like spectral structure, or epoch-to-epoch depth changes that overlap the scale and wavelength range of planetary clouds, hazes, and molecular absorption. The danger is greatest when the atmospheric signal is only tens to hundreds of parts per million, as for small planets around cool stars, but the logic applies to every transit. A precise spectrum can be precisely biased.

The remedy is not to declare every disputed feature stellar. It is to preserve the inference chain: identify what the light curves measure, model which stellar surfaces supplied and normalized the blocked photons, compare stellar and planetary explanations jointly, and report what remains conditional. Stellar contamination is an inverse problem nested inside [[Atmospheric retrieval degeneracies]].

## Place in the map

This note supplies the stellar-systematics branch of [[Transmission spectroscopy]] and the variability controls required by [[What counts as weather on an exoplanet]]. It complements [[Emission spectroscopy and secondary eclipses]], where the planet is measured by the loss of its own light and the same chord-versus-disk TLSE does not apply, although stellar variability and spectral dilution still can. Repeated-transit comparisons also connect to [[Exoplanet phase curves]] and [[From light curves to atmospheric maps]] because a changing stellar surface can masquerade as a changing planetary atmosphere.

## The measurement is a ratio of two different stellar spectra

Let $S_{\rm chord}(\lambda,t)$ be the specific intensity averaged over the area occulted at a given transit time and $F_{\rm disk}(\lambda,t)$ the disk-integrated stellar flux. Ignoring limb geometry for a moment, the measured depth is approximately

$$
d_{\rm obs}(\lambda,t)\simeq d_p(\lambda)\,
\frac{S_{\rm chord}(\lambda,t)}{\langle S_{\rm disk}(\lambda,t)\rangle},
$$

where $d_p(\lambda)=[R_p(\lambda)/R_\star]^2$ is the depth that would be associated with the planet under a homogeneous reference star. The multiplicative ratio is one only when the chord and disk have the same spectrum after the adopted limb-darkening model is applied.

A common simplified model divides the disk into quiet photosphere, spots, and faculae. If their disk filling fractions are $f_s$ and $f_f$, with spectra $S_q$, $S_s$, and $S_f$, and the transit chord samples only quiet photosphere, then

$$
d_{\rm obs}(\lambda)=d_p(\lambda)
\frac{S_q(\lambda)}{(1-f_s-f_f)S_q(\lambda)+f_sS_s(\lambda)+f_fS_f(\lambda)}.
$$

Unocculted dark spots reduce the out-of-transit denominator, so a quiet-chord transit appears deeper, especially where the spot-to-photosphere contrast is large. Unocculted bright faculae raise the denominator, tending to make it shallower. Both effects are chromatic because stellar component spectra are not scaled copies of one another. Their mixture can be non-intuitive: spots and faculae may partially cancel in broadband rotational photometry yet leave appreciable spectral contamination.

This equation is bookkeeping, not a complete star. Real active regions have temperature and magnetic distributions, molecular bands, limb-dependent contrast, irregular locations, and spectra that one-dimensional atmosphere grids may not reproduce. The transit chord also has finite width and moves across changing $\mu=\cos\theta$. Geometry-aware calculations integrate specific intensities over each exposed and occulted surface element rather than applying one disk-average correction.

## Unocculted heterogeneity changes the reference light

An **unocculted** region lies outside the area covered by the planet during the modeled exposure. It need not be invisible: it contributes to the disk-integrated reference but not to the blocked spectrum. If a planet repeatedly crosses a quiet latitude while spots concentrate elsewhere, a spotless-looking transit can still be contaminated.

Cool spots usually make the inferred radius too large under the quiet-chord assumption. At optical wavelengths their contrast often rises toward the blue, producing a slope that can be confused with aerosol scattering. Their cool spectra may also contain stronger molecular absorption than the quiet photosphere. Those stellar bands can appear in the apparent transmission spectrum even if the planet has no corresponding molecule. Conversely, a planetary feature can be suppressed if stellar and planetary spectral structures have opposing signs.

Faculae are not simply spots with a positive temperature offset. Solar facular contrast depends strongly on wavelength and position on the disk and often strengthens toward the limb. A disk-average two-temperature model can therefore fit a spectral slope while assigning a physically wrong area or spatial distribution. The sign of the bias depends on what the chord crosses relative to the rest of the disk, not on the label “facula” alone.

The absence of large rotational modulation does not bound unocculted coverage tightly. A nearly axisymmetric polar spot, many small regions distributed in longitude, or compensating dark and bright structures can produce weak modulation despite a large filling fraction. Photometric variability measures changing projected asymmetry, not total heterogeneous area. Likewise, an activity indicator correlated with rotation demonstrates magnetic structure but does not uniquely determine the spectrum behind the transit chord.

## Occulted spots and faculae distort the transit itself

An **occulted** region lies under the planet. Crossing a dark spot blocks less light than expected and makes a localized upward bump in a normalized transit. Crossing a bright facular or plage region blocks more light and produces a downward anomaly. These signatures can reveal the active region's projected location and contrast when cadence and signal-to-noise resolve them.

The spectral bias arises when such anomalies are missed, clipped, or absorbed by the transit model. A low-cadence or low-signal event may not show a conspicuous bump. A flexible baseline, incorrect limb darkening, or integration over a complex active-region complex can translate the anomaly into a changed radius ratio. Because contrast is wavelength dependent, fitting each spectral channel independently can turn one crossing into a false slope or band. Oshagh and collaborators demonstrated in simulations that occulted plages can mimic a blueward scattering signature; the result establishes a credible failure mode, not that every observed blue slope has that origin.

Occulted and unocculted effects can coexist. A planet might cross one spot while other spots remain elsewhere on the disk. “Correcting the spot crossing” does not correct the global reference spectrum. Nor does masking the anomalous times necessarily solve the problem: masking changes the sampled chord and weakens constraints on limb darkening and impact parameter. A joint surface-plus-transit model can use the anomaly, but its recovered spot size and contrast are degenerate with each other and with the planet's path.

Repeated crossings at similar transit phase may trace a long-lived active latitude or, in favorable systems, constrain projected spin-orbit geometry and stellar rotation. They still do not prove that the unobserved hemisphere shares the inferred surface. Spot evolution and differential rotation can break a rigid recurring-spot interpretation.

## Time dependence is part of the forward model

The disk and chord spectra evolve between and sometimes during transits. Rotation changes which active longitudes are visible. Spots and faculae emerge, decay, and change contrast; flares add impulsive continuum and line emission; plages and chromospheric structures alter activity-sensitive lines. Consequently, spectra taken weeks apart need not share one contamination factor.

This matters when multiple visits are combined to improve precision or stitch wavelength ranges. A blue spectrum obtained in one activity state and an infrared spectrum obtained in another can create a discontinuity or broad slope that no simultaneous planetary atmosphere possessed. Normalizing each visit removes its absolute flux level but not the color-dependent chord-to-disk ratio. A single white-light depth offset is generally not enough when the stellar components have different spectra.

Contemporaneous monitoring helps locate rotation phase, flares, and secular changes, but broadband light curves do not uniquely invert a stellar surface. Monitoring must overlap the transit campaign closely enough to be relevant, and its bandpasses must constrain the contrasts that affect the spectroscopic wavelengths. Spectroscopy of activity indicators, multi-band photometry, and repeat transits add complementary information; no one proxy is a direct map of the chord spectrum.

Time variability is also a diagnostic. If an apparent atmospheric feature changes with stellar rotation phase, activity indicators, or resolved crossing anomalies, a stellar contribution becomes more plausible. A planetary spectrum should normally repeat at matched geometry, though genuine planetary weather, atmospheric escape, precession, and instrument differences provide alternatives. Repeatability therefore raises confidence but is not an automatic planetary verdict; non-repeatability demands a model comparison, not an immediate weather claim.

## The important degeneracies

**Planetary slope versus stellar color.** High-altitude aerosols can increase apparent radius toward short wavelengths. A cool-spot or facular mixture can produce a similar broadband trend. Narrower planetary bands, broad stellar molecular structure, and wide simultaneous wavelength coverage may help, but stellar models and cloud prescriptions can trade off.

**Planetary molecules versus photospheric molecules.** Cool regions on M dwarfs can strengthen molecular bands also expected in exoplanet atmospheres. A retrieval that includes only planetary opacity can return a confident but biased abundance. Conversely, an overly flexible stellar component can absorb real planetary absorption.

**Filling fraction versus contrast.** A small, strongly contrasting region and a larger, weakly contrasting region can perturb the disk spectrum similarly. Converting a fitted component temperature into an actual magnetic-feature area is model dependent.

**Chord composition versus disk composition.** Transit spectroscopy constrains their difference more directly than either one separately. Even an absolutely calibrated disk spectrum does not reveal which latitudes the planet crossed without spatial assumptions.

**Surface distribution versus limb darkening.** Stellar specific intensity and facular contrast change with $\mu$. Errors in limb-darkening coefficients can be exchanged with impact parameter, radius ratio, and active-region placement. This is why a disk-average contamination factor has a limited validity regime.

**Stellar spectra versus atmosphere grids.** One-dimensional stellar models may inadequately represent magnetic atmospheres, molecular opacities, facular limb behavior, or mixtures of unresolved structures. A statistically excellent fit within that grid does not prove that its temperatures and coverages are physical.

**Instrument systematics versus epoch changes.** Detector ramps, wavelength calibration, extraction choices, and baseline models can also change depths between visits. A stellar explanation becomes credible only after instrumental alternatives are tested in the same joint analysis.

These degeneracies make identifiability more important than the number of fitted parameters. Joint stellar–planet retrievals can propagate uncertainty and reduce bias, but they do not manufacture information. If the data constrain only a family of stellar and planetary decompositions, the result should remain a family.

## Mitigation is a layered strategy

### Design observations for discrimination

Obtain broad, preferably simultaneous wavelength coverage so stellar and planetary spectral shapes cannot exploit arbitrary inter-visit offsets. Repeat transits at different stellar rotation phases and repeat at least some identical wavelength coverage. Acquire sufficient cadence to resolve spot-crossing morphology. Monitor the star contemporaneously in multiple bands and collect activity-sensitive spectroscopy where feasible. Scheduling alone cannot guarantee a clean photosphere, but it can make competing explanations predict different data.

### Preserve anomalies in the reduction

Inspect wavelength-resolved residuals rather than automatically clipping bumps. Fit instrumental systematics jointly with transit and stellar terms, and test whether detrending absorbs injected crossings or color trends. Report flare excisions and data masks. Independent reductions are especially useful when a claimed epoch change is comparable to pipeline-dependent offsets.

### Use geometry-aware forward models

Model the transit chord, stellar limb, and spatial active-region distribution at the precision demanded by the data. Simple filling-factor models remain valuable for sensitivity tests and retrieval marginalization, but their assumptions should be named. Compare quiet-only, spot-only, facula-only, and mixed models; spots and faculae should not be collapsed into a generic temperature offset when the data can distinguish their wavelength or limb behavior.

### Retrieve star and planet together

Fit the out-of-transit stellar spectrum, transit light curves, monitoring, and planetary atmosphere in a common probabilistic framework where practical. Propagate stellar-model uncertainty rather than subtracting one best correction before the planetary retrieval. Compare evidences or predictive performance for planetary-only, stellar-only, and joint models. Posterior predictive checks should reproduce individual visits and crossing residuals, not only the combined transmission spectrum.

### Stress-test the claim

Perform injection–recovery across plausible stellar surfaces, including configurations with weak rotational modulation. Refit visits separately, vary limb-darkening prescriptions, allow inter-epoch stellar states, and test alternative stellar atmosphere grids. A molecular claim is stronger if it persists under these choices and predicts an independent band that the stellar model does not. A claimed correction is stronger if it explains photometric modulation or crossing behavior not used to tune it.

There is no universal ppm threshold below which stellar contamination is negligible. The relevant comparison is between the posterior range of contamination under plausible surfaces and the planetary feature being interpreted.

## An evidence ladder for contamination claims

1. **Measured:** a light-curve anomaly, wavelength-dependent depth, disk-integrated variability, or activity indicator is detected with an explicit noise and systematics model.
2. **Associated:** the signal covaries with transit phase, stellar rotation, color, or an activity tracer in the way expected for a heterogeneous star.
3. **Retrieved:** a stated stellar-surface model infers contrasts, filling fractions, or chord composition, with degeneracies and model-grid dependence shown.
4. **Discriminated:** stellar-only, planetary-only, and joint explanations are compared against repeated or multiwavelength data; alternatives fail specific predictive checks.
5. **Verified:** the preferred decomposition successfully predicts new transit epochs, crossing morphology, or spectral bands not used in the fit.

Most real analyses occupy several levels at once. A spot crossing may be directly measured while its temperature is model dependent. Stellar contamination may be decisively required while the corrected planetary abundance remains broad. Language should track the weakest link: “consistent with facular contamination” is not “the facular map is measured,” and “robust to tested stellar models” is not “immune to stellar contamination.”

## Reading a contaminated-spectrum claim

Ask five questions in order:

1. Were the relevant wavelength ranges observed simultaneously, and how were visits normalized or stitched?
2. Did the transit chord show resolved anomalies, and were they modeled, masked, or absorbed into detrending?
3. Which stellar components, limb behavior, and spatial distributions were allowed, and how were their spectra generated?
4. Were disk monitoring and activity indicators used as likelihood information or merely as qualitative context?
5. Does the atmospheric feature survive separate-epoch fits, joint stellar–planet retrievals, alternative stellar grids, and an independent predictive test?

The strongest conclusion may be a bound rather than a correction: for example, a feature remains planetary across all stellar surfaces consistent with monitoring, or a molecular abundance cannot be identified because plausible stellar and planetary models overlap. Such bounds are scientifically useful because they state what the photons actually decide.

## Sources

- Rackham, Apai, and Giampapa, “The Transit Light Source Effect: False Spectral Features and Incorrect Densities for M-dwarf Transiting Planets” (2018) — foundational quantitative formulation of unocculted spot and facular contamination: https://doi.org/10.3847/1538-4357/aabfd0
- Rackham et al., “The Effect of Stellar Contamination on Low-resolution Transmission Spectroscopy: Needs Identified by NASA's Exoplanet Exploration Program Study Analysis Group 21” (2023) — community assessment of stellar heterogeneity, temporal evolution, solar benchmarks, and research needs: https://doi.org/10.48550/arXiv.2201.09905
- Oshagh et al., “Impact of occultations of stellar active regions on transmission spectra: Can occultation of a plage mimic the signature of a blue sky?” (2014) — simulations of occulted spots and plages and repeat-observation tests: https://doi.org/10.1051/0004-6361/201424059
- Iyer and Line, “The Influence of Stellar Contamination on the Interpretation of Near-infrared Transmission Spectra of Sub-Neptune Worlds around M-dwarfs” (2020) — joint stellar–planet retrieval experiments and model-dependence caveats: https://doi.org/10.3847/1538-3881/ab8e7a
- Morris et al., “The Stellar Variability Noise Floor for Transiting Exoplanet Photometry with PLATO” (2020) — why rotational modulation is not a direct measure of total spot coverage: https://doi.org/10.1093/mnras/staa026
- NASA Exoplanet Exploration Program, Study Analysis Group 21 final report (2022) — official program report underlying the community review: https://exoplanets.nasa.gov/internal_resources/2211/
- STScI, “JWST Time-Series Observations Noise Sources” — official observing guidance distinguishing astrophysical stellar variability from instrumental noise: https://jwst-docs.stsci.edu/methods-and-roadmaps/jwst-time-series-observations/jwst-time-series-observations-noise-sources

## Open questions

- Which combinations of simultaneous optical and infrared measurements most efficiently distinguish facular limb contrast from a planetary aerosol slope for active M dwarfs?
- How accurately do current one-dimensional stellar atmosphere grids reproduce the spectra and center-to-limb behavior of magnetically active regions at JWST precision?
- Can solar spatially resolved observations be transformed into defensible priors for stars with different gravity, metallicity, rotation, and magnetic topology?
- What minimum repeat-transit cadence separates stellar rotation and active-region evolution from genuine time variability in a planet's terminator?
- When a joint retrieval is non-identifiable, which observation—another wavelength band, an activity indicator, or a transit at a different rotation phase—provides the largest expected information gain?
