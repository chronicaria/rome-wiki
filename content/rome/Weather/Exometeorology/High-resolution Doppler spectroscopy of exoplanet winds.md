---
title: High-resolution Doppler spectroscopy of exoplanet winds
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, spectroscopy, atmospheric-dynamics, winds]
---
High-resolution spectroscopy measures the velocity distribution of selected atmospheric absorbers, but turning their Doppler shifts into a wind map requires separating orbital motion, rotation, geometry, chemistry, and instrumental systematics.

Up: [[Exometeorology research frontier 2026]]

High-resolution Doppler spectroscopy (HRDS) trades broad, precisely calibrated spectral bins for thousands of individually resolved or partly resolved atomic and molecular lines. The atmosphere is not spatially imaged. Instead, its moving absorbers imprint a velocity-dependent pattern on starlight during transit or on the planet's own dayside emission. That distinction matters: a correlation peak is a weighted velocity statistic of one species over the pressures, temperatures, and locations contributing to its lines, not a weather station floating at one longitude.

HRDS complements [[Transmission spectroscopy]], [[Emission spectroscopy and secondary eclipses]], and [[Exoplanet phase curves]]. Low- and medium-resolution spectra are usually better at measuring continuum shape and broad molecular bands. High dispersion is unusually sensitive to line position and line shape, allowing the changing planetary radial velocity to move a weak atmospheric template through the much brighter stellar and telluric spectra. The technique can therefore establish that a set of lines follows the planet and can constrain motion within the atmosphere, even when the planet is unresolved.

## What the detector measures

A spectrograph with resolving power

$$R=\frac{\lambda}{\Delta\lambda}$$

separates velocity intervals of order $\Delta v\simeq c/R$. At $R=100{,}000$, one instrumental resolution element spans roughly $3\ \mathrm{km\,s^{-1}}$. A line centroid can be measured more precisely than one resolution element when many pixels and many lines contribute, but the precision is not equivalent to resolving every atmospheric parcel. ESO documents resolving powers of at least 43,000 or 86,000, depending on slit, over selected settings from 0.95 to 5.3 micrometres for CRIRES+ ([ESO instrument overview](https://www.eso.org/sci/facilities/paranal/instruments/crires/overview.html)).

During transit, the measured spectrum contains the stellar spectrum, absorption and emission in Earth's atmosphere for ground-based work, instrument throughput, and a small wavelength-dependent decrement produced by the planet's limb. In dayside observations the planet contributes a faint Doppler-shifted emission or absorption spectrum next to the star. Calibration and reduction attempt to remove or model the much larger stationary and slowly varying components without erasing the planet signal.

The nonrelativistic Doppler relation is

$$\frac{\Delta\lambda}{\lambda}\simeq \frac{v_{\rm los}}{c},$$

where $v_{\rm los}$ is the absorber's line-of-sight velocity. The relevant velocity is a sum rather than a pure wind:

$$v_{\rm los}=v_{\rm bary}+v_{\rm sys}+v_{\rm orb}+v_{\rm rot}+v_{\rm wind}+v_{\rm local}.$$

The terms represent the observer's barycentric motion, the system's center-of-mass velocity, the planet's orbital velocity, projected rotation, atmospheric circulation, and local motions such as vertical flow or turbulence. Errors in the ephemeris, systemic velocity, wavelength solution, or stellar line treatment can therefore masquerade as an atmospheric offset.

## Why cross-correlation works

An individual planetary line is commonly buried in photon noise and residual stellar or telluric structure. Molecules and atoms, however, produce a patterned forest of lines with known relative wavelengths. A template $M(\lambda;T,\mathrm{composition})$ is shifted through trial velocities and compared with the reduced data. Schematically,

$$C(v)=\sum_i w_i D(\lambda_i)M\!\left[\lambda_i(1+v/c)\right].$$

Correctly aligned lines add coherently while uncorrelated noise partly cancels. Analysts often repeat this over trial orbital semi-amplitudes $K_p$ and rest-frame offsets $V_{\rm sys}$, combining exposures after shifting them into a proposed planetary frame. A localized peak near the expected $K_p$ is evidence that the line pattern changes velocity with the planet.

This operation is a matched filter, not a model-free molecule counter. Its amplitude depends on the template temperature structure, mixing ratios, line lists, continuum removal, cloud opacity, and preprocessing. Filtering can suppress broad spectral information and distort line strength. A significant correlation with a species template establishes compatibility with that line pattern under the reduction and statistical test; abundance generally requires forward modeling or retrieval with the filtering operation applied consistently. The same warning underlies [[Atmospheric retrieval degeneracies]].

Injection-and-recovery tests are central. A synthetic planet signal is inserted before the destructive reduction steps and then recovered through the full pipeline. This tests attenuation and velocity bias for that assumed signal. It does not prove that the real atmosphere shares the injected temperature, abundance, or spatial distribution, nor does it automatically account for every choice made while selecting masks and velocity ranges.

## From a velocity peak to atmospheric motion

The cleanest kinematic information is the rapid orbital sweep. Snellen and colleagues detected CO during a transit of HD 209458 b and followed the planet's changing radial velocity; they reported a net blueshift of about $2\ \mathrm{km\,s^{-1}}$ relative to the expected planetary rest frame ([Snellen et al. 2010](https://www.nature.com/articles/nature09111)). In the paper's interpretation, the shift was consistent with a day-to-night flow at the low pressures probed by the lines. The measured object was a CO cross-correlation signal. “Day-to-night wind” was the physical interpretation after subtracting orbital and system velocities.

For a synchronously rotating transiting planet, both limbs contribute during most of transit. Rotation sends one limb toward the observer and the other away. A globally symmetric day-to-night flow can shift both limbs toward a common blueshift, while rotation tends to broaden or split their combined profile. An eastward equatorial jet changes the limb velocities differently. Ingress and egress alter which parts of the annulus are backlit, so time-resolved line profiles can in principle distinguish these patterns.

In practice, brightness and opacity weighting complicate this geometry. The morning and evening limbs can have different temperatures, cloud decks, scale heights, condensate depletion, or molecular abundances. A stronger line from one limb can pull the disk-integrated centroid toward that limb's rotational velocity without any change in wind. [[WASP-94A b morning-evening cloud asymmetry]] illustrates why composition and cloud differences must accompany dynamics in an interpretation.

The ESPRESSO observations of WASP-76 b provide a vivid case. Neutral iron absorption strengthened across transit and was reported at a blueshift of $-11\pm0.7\ \mathrm{km\,s^{-1}}$ on the trailing limb. The authors interpreted the asymmetry as rotation plus day-to-night flow, with gaseous iron absent near the morning terminator because it condenses during nightside passage ([Ehrenreich et al. 2020](https://www.nature.com/articles/s41586-020-2107-1)). What was measured was a phase-dependent, velocity-resolved iron signature. Nightside condensation is an interpretation joining that signature to temperature and circulation; it is not direct imaging of iron rain.

Recent CRIRES+ work on WASP-127 b resolved a two-lobed water/CO velocity structure and interpreted it as a fast equatorial jet plus cooler poles. The published analysis describes the data, template tests, and geometry and reports a fitted equatorial jet speed of $7.7\pm0.2\ \mathrm{km\,s^{-1}}$ ([Nortmann et al. 2025](https://www.aanda.org/articles/aa/full_html/2025/02/aa50438-24/aa50438-24.html)). This is more spatially informative than a single centroid because the line profile contains separated velocity components. It still depends on a forward model mapping latitude, temperature, rotation, and jet speed into the observed profile.

## A disciplined evidence ladder

**Measured.** The calibrated time series contains residual absorption or emission whose combined line pattern peaks at specified $K_p$ and rest velocity. Report wavelength range, spectral resolution, cadence, species template, correlation statistic, and how significance was estimated. A measured centroid, width, asymmetry, or phase trend belongs at this level.

**Retrieved.** A likelihood or cross-correlation-to-likelihood mapping constrains temperature, abundance, cloud, rotation, or wind parameters under explicit priors and a forward model. Posterior width does not include omitted model families. A narrow posterior for a uniform wind can be misleading if limb composition asymmetry was never allowed.

**Simulated.** A GCM, radiative-transfer calculation, or parameterized velocity field produces synthetic line profiles. This tests whether a circulation regime could yield the observation. It does not establish that the real atmosphere chose that regime. Links to [[Atmospheric circulation on tidally locked planets]], [[Day-night heat redistribution]], and [[Equatorial superrotation]] supply the dynamical context.

**Interpreted.** Agreement between the measured velocity pattern and one or more simulated patterns motivates labels such as day-to-night flow, superrotation, condensation asymmetry, or escape. Competing explanations should remain visible: rotation rate, drag, abundance gradients, clouds, and inaccurate line formation may trade off.

**Forecast.** A proposed next observation predicts how the profile should change with phase, wavelength, species, or epoch if one interpretation is correct. Forecasts are valuable because they turn a compelling atmospheric story into a discriminating test.

Keeping these levels separate prevents “a shifted template was detected” from becoming “a global wind field was mapped.”

## Which atmosphere is sampled

Transmission lines preferentially sample the slant optical path through low-pressure limb regions. Strong line cores become opaque higher than weak lines and wings, so nominally one spectrum mixes altitudes. Ionized metals may trace hotter, more rarefied gas than molecules. Condensation, photodissociation, ionization, and vertical mixing determine whether a species exists where the geometry is sensitive.

Dayside HRDS weights emitting longitudes and pressures according to temperature contrast and line contribution functions. Near secondary eclipse, the observer sees mainly the dayside; before and after eclipse the visible longitude changes. A thermal inversion can turn a molecular band from absorption to emission, reversing how the template should be constructed. Combining phase-resolved high dispersion with [[Emission spectroscopy and secondary eclipses]] can therefore constrain both velocity and temperature structure, but only within a joint radiative-dynamical model.

Different species need not share a velocity. That difference could reflect vertical wind shear, distinct day-night chemistry, condensation boundaries, or line-list and template errors. A multi-species comparison is strongest when the pressure contribution functions and processing biases are calculated rather than assumed identical.

## Major degeneracies and failure modes

**Orbital and ephemeris uncertainty.** A wrong orbital semi-amplitude or mid-transit time displaces the expected planet trail. Searching a broad $K_p$–velocity grid introduces a look-elsewhere effect that must enter the significance calculation.

**Stellar residuals.** During transit the planet hides different portions of a rotating, limb-darkened star. The Rossiter–McLaughlin effect and center-to-limb changes distort stellar lines in a phase-dependent way. Activity, pulsation, spots, and imperfect stellar models can overlap planetary species. Dividing by an out-of-transit spectrum does not guarantee removal.

**Telluric residuals.** Earth's absorption varies with airmass, water vapor, and time. Algorithms that regress against these patterns may remove part of a slowly moving planet signal or leave structured residuals. Multiple nights and independent reductions help expose this dependence.

**Template mismatch.** Incomplete or inaccurate line lists move or reweight the matched filter. Temperature controls which lines dominate. Assuming chemical equilibrium when the limb is photochemical or condensing can bias the recovered velocity toward the region best matched by the template.

**Limb weighting.** Clouds and scale-height differences change which limb contributes. A one-dimensional template treats a horizontally heterogeneous annulus as one column. Velocity offsets can then encode opacity asymmetry as much as wind.

**Line broadening and instrumental profile.** Thermal broadening, pressure broadening, rotation, winds, exposure smearing, and the line-spread function all contribute. A broad profile is not uniquely a fast jet. Wavelength calibration drift at a small fraction of a pixel can matter when interpreting kilometre-per-second offsets.

**Statistical selection.** Trying many molecules, templates, detrending settings, nights, and velocity windows creates correlated trials. A shuffled-time or out-of-trail noise estimate is informative only if it reproduces the actual selection procedure. Independent pipelines and predeclared tests make a claim more durable.

## What a robust wind result should report

A reusable exometeorological result should state the instrument, resolving power, wavelength interval, observing phases, and number of epochs. It should show the two-dimensional time–velocity trail before collapsing it into a single peak. The barycentric, systemic, orbital, and rotational conventions should be explicit, including uncertainties. Reduction choices, masked regions, injection tests, template grid, and significance calculation must be reproducible.

The physical inference then needs at least two competing velocity/opacity models. A uniform offset, rotation-only model, day-to-night flow, equatorial jet, and limb-asymmetric chemistry do not all need elaborate GCMs, but the data should be asked whether they distinguish them. Species-specific contribution functions should identify approximate pressure sensitivity. A claim about temporal weather requires repeat observations: one transit can show spatial or velocity structure, but it cannot by itself establish evolving weather.

The strongest program combines several observables. Low-resolution spectra constrain broad opacity and clouds; high dispersion supplies line identities and velocities; phase curves constrain longitudinal brightness; and GCM post-processing predicts all of them together. Agreement across these projections is harder for a spurious reduction artifact or a one-dimensional atmospheric model to imitate.

## What HRDS can and cannot establish

HRDS can directly measure a planet-following line pattern and its line-of-sight velocity distribution. It can separate planetary lines from quasi-stationary contamination through orbital motion, measure rotation in favorable cases, expose morning-evening differences, and test whether different species occupy different kinematic regimes. These are unusually direct constraints on atmospheric dynamics at low pressure.

It cannot by itself recover a unique three-dimensional wind vector. Only the line-of-sight component is encoded, spatial information arrives through changing illumination and visibility, and the signal is weighted by species abundance and opacity. A fast centroid is not automatically a global wind speed; a split profile is not automatically a resolved latitude map; a phase asymmetry is not automatically temporal variability. The technique becomes meteorology when its kinematics are joined cautiously to geometry, thermochemistry, radiative transfer, and repeatability.

## Sources

- Snellen et al., “The orbital motion, absolute mass and high-altitude winds of exoplanet HD 209458b,” *Nature* 465 (2010). [Primary paper](https://www.nature.com/articles/nature09111)
- Ehrenreich et al., “Nightside condensation of iron in an ultrahot giant exoplanet,” *Nature* 580 (2020). [Primary paper](https://www.nature.com/articles/s41586-020-2107-1)
- Nortmann et al., “CRIRES+ transmission spectroscopy of WASP-127b: Detection of the resolved signatures of a supersonic equatorial jet and cool poles in a hot planet,” *Astronomy & Astrophysics* 693, A213 (2025). [Primary paper](https://www.aanda.org/articles/aa/full_html/2025/02/aa50438-24/aa50438-24.html)
- ESO, “CRIRES overview.” [Official instrument documentation](https://www.eso.org/sci/facilities/paranal/instruments/crires/overview.html)
- Brogi and Line, “Retrieving temperatures and abundances of exoplanet atmospheres with high-resolution cross-correlation spectroscopy,” *Astronomical Journal* 157 (2019). [Primary methods paper](https://iopscience.iop.org/article/10.3847/1538-3881/aaffd3)

## Open questions

- Which multi-species velocity differences survive independent reductions and consistent contribution-function calculations?
- How reliably can ingress and egress separate rotation, jets, and morning-evening opacity asymmetry at current signal-to-noise?
- What benchmark data products would make cross-correlation significance and injection tests comparable between instruments?
- Can repeated high-resolution transits distinguish persistent circulation from genuine time-variable weather?
