---
title: From light curves to atmospheric maps
created: 2026-07-09
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-science, inverse-problems, atmospheric-mapping, time-series, radiative-transfer]
as_of: 2026-07-09
desk: Exometeorology desk
review_after: 2027-01-09
---
Atmospheric light-curve mapping is a lossy inverse problem: disk integration measures only selected spatial modes, while every displayed longitude, latitude, or pressure structure also reflects a basis, prior, geometry, and stability assumption.

Up: [[Exometeorology research frontier 2026]]

## Why it matters

Exoplanets and brown dwarfs are usually unresolved points. Yet their flux changes as rotation, orbital phase, or an occulting edge changes which parts of the object contribute to the detector. These time series contain spatial information. The challenge is that a light curve is one number at each time while a map is a function over a sphere, possibly also over wavelength and time. Infinitely many maps can therefore fit a finite data set unless geometry and model restrictions reduce the possibilities.

This limitation is not merely low signal-to-noise. Disk integration mathematically destroys some map patterns even with perfect data. Other patterns produce almost indistinguishable curves and become practically unidentifiable after cadence, noise, and systematics enter. A scientifically useful map makes this information loss visible. It reports observable modes and their uncertainty, tests sensitivity to the assumed map family, and does not turn a regularized image into a literal photograph.

## Place in the map

This note supplies the inverse-problem foundation for [[Exoplanet phase curves]], [[Time-series mapping of brown-dwarf weather]], and [[Emission spectroscopy and secondary eclipses]]. It also explains why an atmospheric map remains a retrieval under [[Atmospheric retrieval degeneracies]]. Dynamical claims belong one level later, in comparison with [[Atmospheric circulation on tidally locked planets]], [[Cloud formation and transport beyond Earth]], or a general circulation model.

## The forward problem is an integral

Let $B(\theta,\phi,\lambda,t)$ be the emergent specific intensity from latitude $\theta$ and longitude $\phi$. A simplified thermal light curve is

$$
f(t,\lambda)=\int_{4\pi} K(\theta,\phi,t;\mathcal G,\lambda)
B(\theta,\phi,\lambda,t)\,d\Omega+\epsilon(t,\lambda),
$$

where $K$ is the visibility and projection kernel, $\mathcal G$ denotes the viewing and orbital geometry, and $\epsilon$ contains measurement noise and unmodeled signals. Outside eclipse, $K$ is positive on the visible hemisphere and zero on the far side, with a factor proportional to the cosine of the emission angle for isotropic specific intensity. During occultation, the stellar disk sets $K=0$ over the covered portion. For reflected light, the kernel also contains illumination and a scattering law; visibility alone is insufficient.

This equation separates what is known from what is sought. Given a map, geometry, limb law, and time, predicting flux is the **forward problem**. Estimating a map from flux is the **inverse problem**. After choosing pixels or basis functions $Y_j$, it becomes approximately linear,

$$
\mathbf f=\mathbf A\mathbf y+\boldsymbol\epsilon,
$$

where $y_j$ are map coefficients and $A_{ij}$ is the light curve produced by unit coefficient $j$ at observation time $i$. Nonlinearities return when geometry, rotation period, limb behavior, spectrum, or atmospheric parameters are inferred simultaneously, but the linear form exposes the core information limit.

## Observable modes and the null space

After whitening by the data covariance and fixing a normalization for the map basis, the singular-value decomposition $\mathbf A=\mathbf U\boldsymbol\Sigma\mathbf V^T$ divides map combinations into directions that strongly affect the light curve, weak directions, and a null space. Without those choices, singular-value magnitudes depend on coefficient units and noise weighting. If $\mathbf A\mathbf y_0=0$, adding $\mathbf y_0$ to a map changes no modeled datum. No increase in photometric precision can recover an exact null mode under the same observing geometry. Small singular values instead describe modes that are formally visible but easily overwhelmed by noise or systematics.

This is why pixel count is not spatial resolution. A plotted grid may contain hundreds of cells while the data constrain only a handful of broad combinations. For an edge-on thermal phase curve of a static synchronously rotating planet, disk integration is chiefly sensitive to low-order longitudinal structure; latitude information is extremely limited, and, in the ideal latitude-independent kernel, odd longitudinal sinusoidal modes above the fundamental cancel exactly. Higher even modes are not all exact null modes, but the broad kernel suppresses them progressively, so practical recoverability depends on cadence, geometry, basis, noise, and systematics. Cowan and Agol's analysis establishes this mode structure rather than a universal fixed number of recoverable map parameters.

Null-space structure also changes how simulations should be compared with data. A high-resolution GCM contains jets, vortices, and cloud edges that the observation could never encode. Comparing its raw map pixel by pixel with a retrieved low-order map penalizes the simulation for invisible structure. Challener and Rauscher instead advocate projecting theory through the same observation operator—or into its observable subspace—before comparison. The fair question is whether the simulation predicts the measured modes, not whether its unobservable pixels resemble the regularized retrieval.

## Harmonics, eigencurves, and eigenmaps

Spherical harmonics provide a natural complete basis on a sphere. Low degree represents broad structure; increasing degree permits smaller scales. Analytic tools such as `starry` calculate rotation and occultation curves for harmonic maps efficiently. Completeness does not imply identifiability: several harmonics can produce identical or nearly collinear light curves for a particular geometry.

Eigenmapping begins with candidate map components—often spherical harmonics—computes their light curves, and uses principal-component or singular-value methods to form orthogonal **eigencurves** ranked by observable variance. Each eigencurve has a corresponding **eigenmap**. Fitting the first few modes avoids asking the data to distinguish basis functions whose projected curves are redundant. The ranking is observation-specific: change the cadence, impact parameter, eclipse coverage, or noise weighting and the useful modes change.

Eigenmaps are not uniquely physical atmospheric patterns. Their signs may yield negative intensities when combined carelessly, so positivity constraints or a positive baseline are often imposed. Choosing how many modes to retain is model selection. Too few force bias toward smooth symmetric maps; too many fit noise and systematics. Cross-validation, evidence, predictive checks, and injection recovery are more defensible than selecting a visually pleasing map.

## Phase and rotational mapping

In a thermal orbital phase curve, the visible longitude changes as a close-in planet travels around its star. A static, usually synchronously rotating brightness pattern is convolved with the broad hemispheric kernel. This is mainly a longitudinal mapper. A peak before secondary eclipse implies that the disk-integrated bright side is weighted east of the substellar longitude under the adopted ephemeris and thermal model; it does not locate a compact spot with photographic precision.

For an isolated brown dwarf or directly imaged planet, rotation carries brightness structures across the visible disk. The same integral applies, but there is no transit or eclipse to anchor radius or longitude and no permanent stellar illumination pattern. Periodic variability measures brightness contrast among rotating sectors. Inclination controls which latitudes are visible: a pole-on object shows little rotational modulation even if it is heterogeneous, while an equator-on view gives longitude leverage but retains strong north–south degeneracy. The unknown inclination can trade against spot latitude, size, and contrast.

Rotational inversions frequently use a few spots, longitudinal slices, or low-order harmonics. Those are compact descriptions, not proof that the atmosphere contains circular spots or hard-edged bands. Apai and collaborators used Hubble time-resolved spectroscopy to show that brown-dwarf spectral variability could be represented by changing contributions from a small number of surface spectral components. Such components can diagnose heterogeneous clouds and temperatures, but their fitted areas are conditional on the assumed spectra and map geometry.

Directly imaged planets add practical contamination from the stellar point-spread function, speckles, and variable telluric throughput on the ground. A light curve extracted after high-contrast processing may attenuate astrophysical modes. Mapping should therefore inject rotating signals before or through the reduction, not only into the final one-dimensional series.

## Eclipse mapping adds a moving edge

Secondary-eclipse ingress and egress provide a sharper kernel than whole-disk rotation. The stellar limb progressively hides or reveals strips across the planet. Departures from the light curve of a uniformly bright disk encode the order in which bright and dark regions are occulted. In favorable noncentral geometries this supplies some latitude information as well as longitude.

The information is still incomplete. A central eclipse has symmetries that make some north–south patterns indistinguishable. Impact parameter, planet radius, orbital eccentricity, limb shape, and timing affect the scanning chord and can covary with the map. Finite exposure time blurs the moving edge. Stellar limb darkening is central to transit mapping but not to the loss of planetary emission behind an opaque star in secondary eclipse; however, stellar variability, dilution, and detector trends still affect the measured system flux.

Ingress and egress occupy a small fraction of an orbit, so the spatial signal is often much smaller than the eclipse depth. Baseline and phase-curve uncertainty can leak into the eclipse map. Jointly fitting the out-of-eclipse brightness modulation, eclipse geometry, and systematics is safer than treating a pre-detrended ingress as exact. Even with JWST-quality data, eclipse maps contain null modes. Their reported uncertainty should include possible null-space structure rather than only the covariance of retained coefficients.

## Regularization and priors make a solution possible

When $\mathbf A$ is singular or ill-conditioned, a maximum-likelihood map is nonunique or unstable. Regularization chooses among maps with similar light curves. Common choices penalize roughness or large high-order coefficients, enforce positivity, favor maximum entropy relative to a default map, limit the number of spots, or place a Gaussian-process prior over the sphere. In Bayesian language,

$$
p(\mathbf y\mid\mathbf f,M)\propto
p(\mathbf f\mid\mathbf y,M)p(\mathbf y\mid M).
$$

The likelihood says which maps predict the data; the prior and model family allocate probability among them. A smooth map may be an excellent stable estimator of low-order structure while being a poor statement about whether sharp clouds exist. A sparse-spot model may reconstruct isolated features because sparsity was assumed. Positivity is physically necessary for intensity but can couple observable and null modes, making posterior shapes non-Gaussian.

Regularization strength should be selected and tested, not hidden. Evidence optimization, cross-validation, hierarchical inference, or simulations can calibrate it, but each answers a conditional question. Reporting only the maximum a posteriori image suppresses degeneracy. Posterior draws, coefficient correlations, resolution kernels, and maps projected into the observable subspace show what is data-driven.

## Geometry, limb laws, and scattering

Inclination, obliquity, rotation period, orbital orientation, and occultation impact parameter define the kernel. Fixing them too tightly can transfer geometric error into brightness structure. Obliquity changes which latitudes rotate into view. Differential rotation or winds make the relationship between rotation phase and longitude time dependent. Oblateness changes projected area and surface normals, particularly for rapid brown-dwarf rotators.

Thermal models often assume isotropic emergent intensity. Real atmospheres may be limb darkened or brightened because slanted rays sample different pressures and temperatures. An incorrect limb law can masquerade as spatial structure, especially in ingress and egress. Reflected-light mapping is more model-dependent because the kernel combines visibility, illumination, cloud scattering, and surface or particle phase functions. A Lambert sphere is a reference model, not a measurement. Specular glint or strongly forward-scattering aerosols can create time variability without the albedo geography inferred under Lambertian reflection.

## Multiwavelength maps are not direct pressure slices

Spectral time series can retrieve a separate brightness map at each wavelength. Because opacity changes with wavelength, the maps often weight different atmospheric depths. The relevant forward model is more accurately

$$
B_\lambda(\theta,\phi)=\int C_\lambda(p,\theta,\phi)\,
S_\lambda[p,T,\mathrm{composition}]\,d\ln p,
$$

where $S_\lambda$ is the local source function and $C_\lambda$ is a broad radiative-transfer weighting function, defined here so that their product integrates to emergent intensity. The weighting depends on opacity, clouds, viewing angle, and the atmospheric state and may vary across the map. Assigning every wavelength to one global pressure surface can therefore invent a neat vertical structure that the radiation does not warrant.

A three-dimensional retrieval may first estimate wavelength-dependent two-dimensional maps and then place them in pressure using contribution functions. This can reveal whether the data favor altitude-dependent hotspot positions or thermal inversions, but the vertical placement is retrieved under opacity and chemistry assumptions. Overlapping contribution functions limit vertical resolution. Correlated spectroscopic systematics can also produce apparently coherent wavelength structure.

The strongest spectral mapping result reports the measured channel light curves, the two-dimensional brightness modes recovered in each channel, and the radiative-transfer assumptions used to associate them with temperature and pressure. Chemistry, clouds, and circulation remain interpretations unless jointly constrained.

## Evolving patterns and the weather problem

Most simple inversions assume $B(\theta,\phi)$ is constant during the observation. Atmospheric patterns can instead evolve on a rotation or orbital timescale. A cloud that brightens while crossing the disk can be mislocated in longitude; two evolving regions can mimic one static harmonic. Phase-folding many rotations increases precision only if the pattern repeats. Otherwise it returns a time average and correlated residuals.

Time-dependent mapping introduces many more degrees of freedom. Gaussian processes, evolving spot models, or dynamical priors can share information across time, but inferred lifetimes and drift rates then depend on those priors. Differential rotation, zonal winds, feature growth, and radiative evolution can be mutually degenerate. A change in light-curve shape is **measured variability**; an evolving brightness map is **retrieved**; a storm, wave, or advected cloud is **interpreted**.

Repeat observations help distinguish persistent climate structure from weather, but only after controlling bandpass, cadence, instrument state, and reduction. A non-detection of evolution places a limit at the spatial and temporal modes accessible to the observation; it does not establish a motionless atmosphere.

## Validation: can the pipeline recover what it claims?

Mapping methods should be tested end to end rather than only on noiseless curves generated by the fitting basis. Essential checks include:

- inject maps with structures outside the retrieval basis, pass them through realistic cadence, occultation geometry, instrument systematics, and reduction, and measure bias and interval coverage;
- inject signals into raw or minimally processed data when extraction or detrending can attenuate variability;
- recover ensembles spanning inclinations, map contrasts, evolution rates, limb laws, and cloud spectra rather than one favorable truth;
- fit alternative harmonic orders, pixelizations, spot models, and regularization strengths;
- perform posterior predictive checks in light-curve space, where the measurements live;
- use held-out times, wavelengths, rotations, or eclipse visits to test prediction;
- quantify singular values, observable modes, and null-space uncertainty for the actual cadence and geometry;
- perturb ephemeris, impact parameter, stellar variability, and nuisance models jointly with the map;
- compare a GCM only after forward-projecting it through the same kernel and data reduction.

A method can reproduce its injected map yet remain overconfident if truth was drawn from the same prior used in retrieval. Misspecified injections are therefore crucial. Conversely, failure to recover invisible fine structure is not a pipeline defect; claiming to recover it would be.

## The evidence ladder for every map

1. **Measured:** calibrated flux versus time and wavelength, with cadence, geometry, covariance, and detrending choices.
2. **Retrieved:** coefficients or brightness structures conditional on a basis, limb/scattering law, regularization, static or evolving model, and system parameters.
3. **Radiatively retrieved:** brightness temperatures or pressure placement conditional on stellar flux, opacities, composition, clouds, and contribution functions.
4. **Simulated:** structures produced by a GCM, cloud model, or dynamical calculation, projected through the observation operator before comparison.
5. **Interpreted:** hotspot advection, jets, storms, cloud holes, vortices, or vertical wind shear proposed to explain the observable modes.

The word “map” is justified when it means a quantified spatial retrieval. It becomes misleading when its plotting resolution is mistaken for independent resolution or its physical interpretation is presented as a directly imaged atmosphere.

## Sources

- [Cowan and Agol, “Inverting Phase Functions to Map Exoplanets” (ApJ Letters, 2008)](https://doi.org/10.1086/588553) — foundational longitudinal phase-curve inversion and recoverable-mode limits.
- [Cowan, Fuentes, and Haggard, “Light Curves of Stars and Exoplanets: Estimating Inclination, Obliquity and Albedo” (MNRAS, 2013)](https://doi.org/10.1093/mnras/stt1191) — harmonic light curves, geometry, and mapping degeneracies.
- [Rauscher, Suri, and Cowan, “A More Informative Map: Inverting Thermal Orbital Phase and Eclipse Light Curves of Exoplanets” (AJ, 2018)](https://doi.org/10.3847/1538-3881/aae57f) — eigencurve/eigenmap method.
- [Luger et al., “starry: Analytic Occultation Light Curves” (AJ, 2019)](https://doi.org/10.3847/1538-3881/aae8e5) — analytic spherical-harmonic rotation and occultation operator.
- [Challener and Rauscher, “The Eclipse-mapping Null Space” (AJ, 2023)](https://doi.org/10.3847/1538-3881/acf862) — observable/null-space decomposition and fair projection of GCM predictions.
- [Boone et al., “An analytical theory for the resolution attainable using eclipse mapping of exoplanets” (MNRAS, 2024)](https://doi.org/10.1093/mnras/stad3912) — spatial-resolution scaling with geometry, precision, and cadence.
- [Challener and Rauscher, “ThERESA: Three-dimensional Eclipse Mapping with Application to Synthetic JWST Data” (AJ, 2022)](https://doi.org/10.3847/1538-3881/ac4885) — spectral two-dimensional maps and contribution-function-based vertical placement.
- [Apai et al., “HST Spectral Mapping of L/T Transition Brown Dwarfs Reveals Cloud Thickness Variations” (ApJ, 2013)](https://doi.org/10.1088/0004-637X/768/2/121) — rotational spectral mapping of unresolved brown dwarfs.
- [Karalidi et al., “Aeolus: A Markov Chain Monte Carlo Code for Mapping Ultracool Atmospheres” (ApJ, 2015)](https://doi.org/10.1088/0004-637X/814/1/65) — spot-based rotational mapping and uncertainty framework.
- [Luger et al., “Analytic Light Curves in Reflected Light” (AJ, 2022)](https://doi.org/10.3847/1538-3881/ac4017) — illumination, occultation, and non-Lambertian scattering in reflected-light mapping.

## Open questions

- Which map features remain identifiable when evolution, inclination, limb behavior, and detector systematics are inferred jointly?
- How should null-space uncertainty be visualized without implying that all invisible structures are equally plausible?
- Can multi-epoch spectral maps distinguish vertical wind shear from wavelength-dependent cloud opacity and shifting contribution functions?
- Which observation schedules maximize new singular modes rather than merely repeating already well-measured combinations?
- How well do regularized map credible intervals cover atmospheres drawn from GCMs outside the retrieval's basis and prior?
- What minimum evidence should be required before a changing brightness map is called exoplanet or brown-dwarf weather?
