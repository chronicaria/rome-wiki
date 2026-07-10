---
title: What counts as weather on an exoplanet
created: 2026-07-09
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-science, weather, variability, inference]
as_of: 2026-07-09
desk: Exometeorology desk
review_after: 2027-01-09
---

Exoplanet weather is time-dependent atmospheric structure on timescales shorter than the planet's climatic baseline, but an observation earns that label only after instrumental, stellar, orbital, and static-map explanations have been tested.

Up: [[Exometeorology research frontier 2026]]

## Why the word needs an evidence standard

On Earth, weather means the evolving state of the atmosphere: winds, temperature, clouds, precipitation, pressure systems, and the disturbances that change them from hours to seasons. Climate describes a distribution of such states and the boundary conditions that organize it. The distinction is easy to state because terrestrial observing systems resolve locations and repeatedly measure many variables. An exoplanet is normally one unresolved point blended with a much brighter star. Its atmosphere contributes a small, wavelength-dependent signal to a light curve or spectrum. The telescope therefore measures changing photons, not a named storm, wind map, or cloud deck.

The useful minimum definition is **atmospheric evolution that cannot be represented by one time-invariant atmospheric state viewed through changing but known geometry**. This definition requires time dependence but does not require an Earthlike phenomenon. A cloud pattern evolving between rotations, a migrating hot spot, a changing chemical distribution, or a storm that perturbs disk-integrated emission can qualify. A permanent eastward hot-spot offset on a synchronously rotating planet is evidence of circulation and climate structure, but it is not by itself weather: one stable longitudinal map produces the same offset every orbit.

Conversely, variability alone is insufficient. Telescope sensitivity can drift. The star can rotate spotted and facular regions across view. An eccentric orbit changes irradiation. A fixed planetary map produces a periodic light curve as the visible hemisphere changes. Even a genuinely atmospheric spectrum may vary because different observations sample different limb geometries or because an ephemeris is slightly wrong. “Weather” is therefore an interpretation reached after an exclusion and replication process, not a synonym for any non-flat time series.

## The evidence ladder

The desk's five levels make the burden of proof explicit.

1. **Measured:** calibrated counts, transit depths, eclipse depths, line profiles, or planet-to-star flux ratios differ with time beyond the stated noise and covariance model.
2. **Retrieved:** a time-dependent forward model favors changes in brightness, temperature, opacity, cloud parameters, composition, or velocity under specified priors.
3. **Simulated:** a dynamical, radiative, chemical, or cloud model produces variability resembling some aspects of the data.
4. **Interpreted:** atmospheric evolution is proposed as the best explanation after credible instrumental, stellar, geometric, and static-atmosphere alternatives are compared.
5. **Forecast:** the proposed mechanism predicts a repeatable wavelength, phase, polarization, Doppler, or cadence signature not used to construct the interpretation.

A measured flux change may be robust while the weather interpretation remains weak. A retrieval can also force each epoch to have a different atmosphere even when a shared atmosphere plus calibration offset fits almost as well. Simulations demonstrate plausibility, not identity: several mechanisms can yield similar disk-integrated modulation. The strongest cases move up the ladder through repeated observations and successful predictions rather than through more vivid terminology.

## Four distinctions that prevent false weather claims

### Rotation is not evolution

Let a surface-brightness distribution in band $\lambda$ be $I_\lambda(\theta,\phi,t)$. The unresolved planetary flux is schematically

$$
F_{p,\lambda}(t)=\int_{\mathrm{visible}} I_\lambda(\theta,\phi,t)K(\theta,\phi,t)\,d\Omega,
$$

where $K$ contains visibility, projected area, illumination for reflected light, and occultation. A time series changes even when $\partial I_\lambda/\partial t=0$, because $K$ changes as the body rotates or orbits. This is the basis of [[Exoplanet phase curves]] and [[From light curves to atmospheric maps]]. Recovering a stable nonuniform map establishes spatial structure. Weather requires evidence that no single stable map, under the measured rotation and viewing geometry, explains all epochs.

The cleanest test compares multiple rotations or orbits. If a phase-folded signal repeats within uncertainty, it supports a persistent map or statistically steady climate. If amplitude, phase, harmonic content, or spectrum evolves in a manner coherent across independent reductions, a time-dependent atmosphere becomes plausible. The comparison must allow for uncertainty in rotation period: a small period error accumulates phase drift and can masquerade as feature migration.

### A circulation pattern is not necessarily weather

A dayside-to-nightside temperature contrast, an eastward hot-spot displacement, or different morning and evening limbs can reveal atmospheric dynamics. [[WASP-94A b morning-evening cloud asymmetry]], for example, reports a measured limb difference and a retrieved cloudy-morning, clearer-evening interpretation. Yet a stationary condensation–evaporation cycle locked to stellar longitude can be a climate pattern. Repeated changes in the asymmetry would provide the additional temporal evidence needed for weather.

This distinction is especially important for synchronously rotating worlds. Their forcing is nearly fixed in planetary longitude, so jets, waves, and clouds can settle into a statistically steady but highly asymmetric state. The atmosphere is moving continuously, but the observable pattern may remain stable. Meteorology studies both instantaneous flow and its variability; observational claims should say whether they establish circulation, a stable spatial pattern, or temporal evolution.

### An atmosphere is not automatically the variable source

The measured system flux may be written schematically as

$$
C(t,\lambda)=S_{\rm inst}(t,\lambda)\,[F_\star(t,\lambda)+F_p(t,\lambda)]+B_{\rm inst}(t,\lambda)+\epsilon,
$$

with multiplicative sensitivity $S_{\rm inst}$, additive background $B_{\rm inst}$, and noise $\epsilon$. Long time series can contain ramps, pointing correlations, thermal settling, persistence, changing backgrounds, and discontinuities after telescope events. A flexible planetary-variability model may absorb residual systematics; a flexible systematics model may erase a real planetary signal. Robust work compares plausible models, propagates covariance, uses independent reductions where possible, and checks whether the inferred change correlates with detector state.

The host star is an astrophysical contaminant, not merely noise. Spots, faculae, flares, granulation, pulsations, and rotation can change the stellar spectrum or apparent transit depth. Unocculted heterogeneity can make repeated transmission spectra differ without any planetary evolution. Occulted active regions can leave localized transit anomalies. Useful controls include simultaneous stellar monitoring, activity indicators, chromatic tests, out-of-transit baselines, and joint stellar–planetary models. A variation at the planet's orbital period is suggestive but not decisive when stellar rotation, sampling aliases, and instrumental cycles interact.

### A retrieved parameter change is conditional

Suppose two epochs produce data $\mathbf d_1$ and $\mathbf d_2$. One may compare a shared-atmosphere model $M_s$, with common atmospheric parameters and epoch-specific nuisance terms, against a variable-atmosphere model $M_v$. The relevant question is not whether separate fits yield different posterior medians. It is whether the joint evidence favors the additional atmospheric degrees of freedom after their prior volume is counted:

$$
\mathcal B_{v,s}=\frac{p(\mathbf d_1,\mathbf d_2\mid M_v)}{p(\mathbf d_1,\mathbf d_2\mid M_s)}.
$$

Even a favorable Bayes factor is conditional on the candidate models and priors. Posterior predictive checks should ask whether either model reproduces the residual structure. Hierarchical models are often more physical than independent epoch fits: they can represent a mean atmospheric state plus stochastic or correlated deviations and estimate the population variance of those deviations. [[Atmospheric retrieval degeneracies]] still apply at every epoch, and apparent abundance variability may exchange with temperature, cloud-top pressure, reference radius, or stellar contamination.

## A practical hierarchy of claims

The following vocabulary scales language to evidence.

**Atmospheric structure** is the broadest defensible claim. A phase offset, limb asymmetry, spectral contrast, or Doppler shift can reveal nonuniformity without demonstrating temporal change.

**Candidate atmospheric variability** applies when repeated data differ and known systematics have been modeled, but stellar or retrieval degeneracies remain material. This is often the right label for one instrument and one bandpass.

**Repeatable atmospheric variability** requires the difference to recur across multiple rotations, orbits, visits, wavelengths, or reductions in a manner tied to the planet. Repeatable does not mean identical: evolving features may retain a characteristic timescale or spectral signature.

**Weather-like variability** is warranted when the signal is repeatable, atmospheric evolution is preferred to static and contaminating alternatives, and a plausible dynamical, cloud, thermal, or chemical mechanism connects its amplitude and timescale to the atmosphere. “Weather-like” preserves the fact that spatial variables and mechanism may remain underdetermined.

**Detected weather phenomenon** should be reserved for a more discriminating case: the proposed mechanism makes observations that alternatives do not, and those predictions succeed. For example, an evolving cloud interpretation becomes stronger if simultaneous bands respond according to cloud opacity and temperature rather than as a grey detector offset, if the change tracks rotation without phase coherence expected from a fixed map, and if independent epochs recover the evolution timescale.

The phrase **weather map** deserves separate caution. A map inferred from one light curve is usually a regularized brightness representation with a null space, not a resolved meteorological analysis. A sequence of such inversions may visualize change, but the number of plotted pixels greatly exceeds the number of independently constrained spatial modes. Reporting the retained basis, resolution kernel, null modes, and prior sensitivity is more informative than showing a high-resolution globe.

## Timescale tests

Weather interpretations should connect the observed variation time $\tau_{\rm var}$ to plausible physical clocks. Rotation gives $\tau_{\rm rot}$; radiation, advection, waves, chemistry, drag, condensation, sedimentation, and vertical mixing supply others. [[Radiative and advective timescales in exoplanet atmospheres]] explains why such comparisons organize hypotheses without uniquely identifying them.

If $\tau_{\rm var}\approx\tau_{\rm rot}$ and the waveform repeats, a fixed pattern is sufficient. Slow modulation of amplitude or phase over many rotations may indicate feature evolution or beating between zonal features with different pattern speeds. Rapid decorrelation within one rotation demands either fast evolution, multiple moving features, or an observational/systematic explanation. A chemical claim should compare $\tau_{\rm chem}$ with the mixing time; a cloud claim should compare condensation and settling with transport; a hot-spot shift should be judged against radiative and wave adjustment. Agreement to order of magnitude supports plausibility but is rarely unique.

Sampling creates its own clock. Gaps, short visits, and cadence aliases can manufacture or obscure a period. A campaign should span enough cycles to distinguish rotation from evolution and should include a baseline long enough to constrain detector and stellar trends. Null results are valuable: a stable repeated phase curve bounds variability in the pressure and wavelength regions probed, even though unobserved layers may remain active.

## What current examples establish

Brown dwarfs offer the clearest comparative laboratory because their planet-like atmospheres can contribute most of the observed flux. Rotational spectral and photometric modulation reveals longitudinal brightness heterogeneity, commonly interpreted through patchy clouds and temperature differences. Irregular waveforms and changes over consecutive rotations supply stronger evidence of evolving weather-like patterns than a single periodic modulation. Yet disk integration still permits multiple maps, and magnetic aurorae or unresolved multiplicity can complicate individual objects.

For exoplanets, Armstrong and collaborators reported that the optical phase-curve peak of HAT-P-7 b shifted over tens to hundreds of days. The measured object was a changing fitted phase offset in Kepler data. Variable winds and clouds were an interpretation capable of changing the balance of reflected and thermal flux; the paper did not directly track clouds or measure winds. The case is therefore a useful model of evidence-layered language, not permission to equate every phase-offset change with weather.

Repeated Hubble phase curves of WASP-121 b illustrate another benefit: observations at different epochs can be jointly checked for consistency before being inverted into a global temperature representation. The published inversion explicitly uses low-order spherical harmonics and is non-unique. Agreement between epochs supports a stable large-scale pattern in the pressures and wavelengths sampled; a difference would still require tests against detector ramps, baseline choices, and mapping priors.

Solar-System analogues provide controlled warnings. Disk-integrated Venus brightness varies as clouds superrotate, so an unresolved light curve can encode atmospheric motion—but rotation of a fixed surface-like pattern and atmospheric advection can resemble each other. Jupiter's belts can appear stable while meteorological activity and longer cycles alter cloud-level emission. These examples show why both persistence and change belong in atmospheric science, while only the second establishes weather variability observationally.

## A publication checklist

Before a Rome note calls a result exoplanet weather, it should answer:

- What calibrated quantity changed, at which wavelengths, cadence, orbital phases, and significance?
- Was the change recovered by an independent reduction or observing epoch?
- Can one static brightness or spectral model plus known viewing geometry explain every visit?
- Which detector states, baseline functions, and covariance assumptions were tested?
- Which stellar-variability controls were available?
- Does a joint model prefer atmospheric variation over epoch-specific nuisance offsets?
- Which pressure levels or contribution functions are sampled, and could the change occur elsewhere?
- What physical timescale and amplitude does the proposed mechanism predict?
- Which competing atmospheric mechanisms produce similar disk-integrated behavior?
- What new observation would distinguish the leading explanations?

If these questions cannot be answered, the conservative conclusion is not that nothing happened. It is that variability was measured while its origin remains open. That is a scientifically useful result and a better foundation for the next observation than an unsupported storm narrative.

## Sources

- [Armstrong et al., “Variability in the atmosphere of the hot giant planet HAT-P-7 b”](https://doi.org/10.1038/s41550-016-0004) — changing optical phase offsets and a variable wind/cloud interpretation, *Nature Astronomy* (2017).
- [Artigau, “Variability of Brown Dwarfs”](https://arxiv.org/abs/1803.07672) — review of rotational variability and weather-like atmospheric patterns, in the *Handbook of Exoplanets* (2018).
- [Metchev et al., “Weather on Other Worlds. II. Survey Results”](https://arxiv.org/abs/1411.3051) — Spitzer variability survey and irregular brown-dwarf light curves, *The Astrophysical Journal* (2015).
- [Mikal-Evans et al., “Diurnal variations in the stratosphere of the ultrahot giant exoplanet WASP-121b”](https://doi.org/10.1038/s41550-021-01592-w) — two Hubble phase curves and an explicitly non-unique map inversion, *Nature Astronomy* (2022).
- [Lee et al., “Brightness modulations of our nearest terrestrial planet Venus reveal atmospheric super-rotation rather than surface features”](https://doi.org/10.1038/s41467-020-19385-6) — Solar-System test of unresolved atmospheric variability, *Nature Communications* (2020).
- [Cowan and Fujii, “Mapping Exoplanets”](https://doi.org/10.1007/978-3-319-55333-7_147) — review of disk-integrated mapping information and degeneracies, in the *Handbook of Exoplanets* (2018).

## Open questions

- What minimum cross-instrument replication should be required before dropping the qualifier “weather-like”?
- How should hierarchical time-domain retrievals report variability when the individual epoch posteriors are prior dominated?
- Which combinations of spectroscopy, Doppler information, and polarization most efficiently distinguish cloud evolution from temperature evolution?
- Can a common set of decorrelation-time and repeatability metrics compare brown dwarfs, hot Jupiters, and directly imaged planets without hiding their different viewing geometries?
