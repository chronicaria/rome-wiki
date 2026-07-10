---
title: Disequilibrium chemistry as a tracer of circulation
created: 2026-07-09
source: llm
status: seed
tags: [weather, exoplanets, atmospheres, chemistry, circulation, spectroscopy]
as_of: 2026-07-09
---
Chemical disequilibrium can preserve a memory of atmospheric transport, but turning an anomalous abundance into a wind constraint requires showing that chemistry, vertical mixing, photolysis, composition, clouds, and retrieval assumptions cannot produce the same spectrum.

Up: [[Exometeorology research frontier 2026]]

## The tracer idea

Local thermochemical equilibrium is a prediction about composition at a specified pressure, temperature, and elemental inventory. It does not say that every atmosphere reaches that state. A parcel carried from a hot region into a cool one may retain the hot region's molecular mixture if the relevant reactions are slow. Vertical motion can likewise lift gas from a deep, hot reservoir faster than it can re-equilibrate. Ultraviolet photons can create a third kind of disequilibrium by breaking molecules and driving reaction pathways unavailable in purely thermal equilibrium.

That lag makes chemistry a potential flow tracer. On a synchronously rotating hot Jupiter, equilibrium may favor CO on the hot dayside but CH$_4$ on the cooler nightside. If spectra instead show CO-rich, CH$_4$-poor gas around the orbit, fast day-to-night transport is one possible explanation: the wind has moved the carbon reservoir before CO can be converted to methane. The chemistry is then analogous to a long-lived dye, except that its lifetime changes steeply with pressure and temperature and its optical signature also changes the heating that drives the flow.

The word *tracer* must therefore be used conditionally. A passive tracer is carried without changing the circulation. CO, CH$_4$, H$_2$O, NH$_3$, HCN, and photochemical hazes alter wavelength-dependent opacity; opacity changes radiative heating and cooling; temperatures change reaction rates and winds. Fully coupled calculations can depart from post-processed chemistry. [[Radiative and advective timescales in exoplanet atmospheres]] supplies the parallel dynamical clocks, while [[Atmospheric retrieval degeneracies]] explains why an abundance posterior is not a direct chemical measurement.

## What is actually known

The evidence is easiest to read if each rung of the inference ladder remains explicit.

**Measured.** A telescope measures time-tagged detector counts. Calibration and light-curve fitting produce transit depths, eclipse depths, or planet-star flux ratios as functions of wavelength and orbital phase. In 2024, a JWST/MIRI 5–12 $\mu$m phase curve of WASP-43 b measured a large day–night brightness contrast and water-sensitive spectral structure at all phases. In 2026, JWST/NIRSpec followed the full 18-hour orbit of NGTS-10A b and obtained phase-resolved spectra spanning its dayside and nightside. Neither dataset directly measured a wind vector or counted methane molecules in situ.

**Retrieved.** Forward models map parameterized temperatures, molecular mixing ratios, clouds, and instrumental terms into spectra. The WASP-43 b analysis reported no methane detection on the nightside, with a model-dependent $2\sigma$ upper limit of roughly 1–6 ppm. The NGTS-10A b analysis retrieved carbon chemistry dominated by CO on both hemispheres and a strong nightside CH$_4$ depletion relative to equilibrium expectations. These are conditional abundance constraints: their values inherit the opacity database, temperature parameterization, cloud treatment, priors, and assumptions about how composition varies with altitude and phase.

**Simulated.** Three-dimensional circulation and chemistry models predict how winds redistribute molecules. Mendonça and collaborators' WASP-43 b calculation found longitudinal quenching at low latitudes for CO, CH$_4$, and H$_2$O, while polar vortices retained different chemistry; its disequilibrium spectral effect was small at solar C/O in that particular model but exceeded 15% in some wavelength ranges at C/O = 2. Steinrueck and collaborators imposed homogenized CO/CH$_4$ ratios in HD 189733 b simulations and found broad temperature changes of at least 50–100 K in likely CO-dominated cases. Drummond and collaborators later coupled a reduced kinetic network directly to a three-dimensional general circulation model, allowing composition, opacity, temperature, and circulation to interact rather than prescribing a uniform ratio.

**Interpreted.** A spatially broad excess of a chemically long-lived species can be interpreted as transport outrunning reaction. The NGTS-10A b team argued specifically for rapid horizontal transport because its phase-resolved constraints on the principal carbon- and oxygen-bearing species disfavored both unusual elemental abundances and vertical quenching as explanations for the nightside methane deficit. This is stronger than merely observing “too little methane,” but it remains a model-mediated exclusion argument rather than an anemometer reading.

**Forecast.** Repeated, higher-resolution phase spectroscopy should test whether different species imply a coherent transport field. A robust circulation diagnosis would recover compatible timescales from molecules with different chemical lifetimes and would reproduce their longitude-dependent spectra with one coupled dynamical–chemical model. This is a research program, not yet a generic capability.

## Quenching is a competition of clocks

For species $i$ with number density $n_i$, a compact continuity equation is

$$
\frac{\partial n_i}{\partial t}+\nabla\!\cdot(n_i\mathbf{u})
=P_i-L_i-\nabla\!\cdot\boldsymbol{\Phi}_i,
$$

where $\mathbf{u}$ is the resolved wind in m s$^{-1}$, $P_i$ and $L_i$ are chemical production and loss rates in m$^{-3}$ s$^{-1}$, and $\boldsymbol{\Phi}_i$ is the unresolved diffusive flux in m$^{-2}$ s$^{-1}$. Chemistry approaches equilibrium only when production and loss can erase transport-induced perturbations rapidly enough.

A horizontal transport time is often estimated as

$$
\tau_{\rm horiz}\sim \frac{L}{U},
$$

with length $L$ in metres and wind speed $U$ in m s$^{-1}$. For a planetary-scale distance of $10^8$ m and $U=1$ km s$^{-1}$, $\tau_{\rm horiz}\sim10^5$ s, about a day. A one-dimensional vertical-mixing estimate is

$$
\tau_{\rm mix}\sim\frac{L_{\rm eff}^{2}}{K_{zz}},
$$

where $K_{zz}$ is an eddy diffusivity in m$^2$ s$^{-1}$ and $L_{\rm eff}$ is an effective mixing length. Taking $L_{\rm eff}$ equal to a pressure scale height is convenient but not universally correct; Smith's analysis of quench problems showed that the relevant length can be a fraction of a scale height because equilibrium abundances and chemical rates vary sharply with altitude.

The chemical relaxation time $\tau_{\rm chem}$ is not one universal molecular constant. It depends on the rate-limiting sequence that exchanges reservoirs such as CO and CH$_4$, on pressure, temperature, radical abundances, and elemental composition. Reaction coefficients often have Arrhenius-like temperature dependence, so a modest temperature change can move the equality $\tau_{\rm chem}\approx\tau_{\rm trans}$ by many scale heights. Below that crossing, reactions are fast and composition tracks local equilibrium. Above it, transport is faster and the mole fraction is approximately “quenched” near the value at the crossing.

This timescale picture is diagnostic, not an exact solution. Horizontal and vertical advection occur together; parcels follow three-dimensional trajectories; multiple reactions contribute; quench surfaces are not necessarily isobars; and chemical relaxation may not be a single exponential. A calculated quench pressure is consequently conditional on the adopted kinetics and mixing representation.

## Horizontal, vertical, and latitudinal memories

Different transport pathways leave different idealized fingerprints.

Vertical quenching tends to carry the composition of deeper, hotter, higher-pressure gas upward. In a one-dimensional model it can produce nearly constant mixing ratios above a quench level. The retrieved upper-atmosphere abundance can then constrain a combination of the deep temperature profile, elemental inventory, chemical network, and $K_{zz}$—not $K_{zz}$ alone. Inferring a vertical velocity from it requires additional dynamical assumptions because eddy diffusion is a statistical closure, not a resolved wind.

Horizontal quenching tends to homogenize longitude when zonal or day–night advection is fast compared with chemistry. On a hot Jupiter, a superrotating equatorial jet may therefore spread dayside-favored CO through the equatorial nightside. Cooler, more weakly mixed polar vortices can remain compositionally distinct, as the WASP-43 b simulation demonstrated. Disk-integrated phase spectra combine these regions through a changing visibility kernel, so an apparently uniform abundance can hide latitude-dependent structure.

The direction of causality also runs backward. A quenched absorber moves opacity into or out of particular bands, changing where optical depth reaches unity. Steinrueck and collaborators found that altered carbon chemistry affected HD 189733 b predictions strongly in methane-sensitive 3.6 and 8 $\mu$m bands but could not explain its low 4.5 $\mu$m nightside flux, because CO and H$_2$O opacity changes offset one another there. A chemical hypothesis must predict the spectrum band by band; “more CO” is not equivalent to “dimmer at every CO-sensitive wavelength.”

## Photochemistry writes a different history

At low pressures, stellar ultraviolet photons dissociate stable molecules and create radicals. Photochemical production can yield species such as SO$_2$, HCN, hydrocarbons, and aerosol precursors even when their local thermochemical-equilibrium abundances are tiny. The detection of SO$_2$ in WASP-39 b's transmission spectrum was interpreted with photochemical models as sulfur chemistry initiated by stellar irradiation, not as a simple product of deep quenching.

Photolysis introduces another clock, approximately $\tau_{\rm phot}\sim J^{-1}$ for a first-order photolysis frequency $J$ in s$^{-1}$. But $J$ varies with wavelength, stellar activity, absorption above the parcel, and scattering. Vertical mixing may resupply a parent molecule into the irradiated region, while winds move products from day to night. A nightside photochemical product need not have been made there; conversely, absence on the nightside may reflect chemical destruction, condensation, or insufficient transport.

Photochemistry and transport are thus coupled rather than competing labels. Their spatial signatures can help: irradiation is anchored to the star-facing hemisphere, vertical quenching connects to deeper pressure levels, and zonal transport shifts or smears those patterns. Yet clouds and the line-of-sight weighting of [[Transmission spectroscopy]] can make these signatures observationally similar.

## Why the inverse problem is degenerate

An equilibrium mismatch is evidence that the equilibrium model is inadequate, not a unique measurement of circulation. At least seven degeneracies matter.

1. **Elemental abundance.** Metallicity, C/O, N/O, and sulfur inventory alter the equilibrium baseline. A methane deficit relative to a solar-composition calculation may disappear under another bulk composition.
2. **Thermal structure.** Molecular equilibrium and kinetic rates depend steeply on temperature, while spectra infer temperature through broad contribution functions. A biased nightside temperature can mimic anomalous chemistry.
3. **Vertical versus horizontal transport.** Both can preserve CO against conversion to CH$_4$. Phase-resolved measurements and multiple elemental reservoirs are needed to separate them.
4. **Clouds and hazes.** Aerosol opacity can mute bands, shift the photosphere, and change the apparent phase curve. The WASP-43 b MIRI result required nightside clouds in addition to disequilibrium chemistry; a methane non-detection alone was not a clean wind diagnostic.
5. **Abundance parameterization.** A retrieval that forces one mixing ratio through the atmosphere or one value across a hemisphere may return a precise average that no location actually has.
6. **Reaction-network uncertainty.** Reduced networks make three-dimensional integration feasible but may disagree near sharp abundance gradients or omit pathways important outside their validated pressure–temperature range. Rate coefficients and reverse-reaction thermochemistry propagate into the inferred quench surface.
7. **Radiative feedback.** Post-processing a fixed circulation neglects the possibility that changed molecular opacity alters temperature and therefore both winds and kinetics.

Geometry adds another layer. A phase bin is a weighted integral over many longitudes, latitudes, pressures, and emission angles. Chemical maps inferred from phase curves inherit the null spaces described in [[From light curves to atmospheric maps]]. High spectral resolution can separate Doppler components and improve sensitivity to winds, but line shifts also mix rotation, orbital motion, asymmetric brightness, and circulation.

## A disciplined circulation claim

A convincing use of disequilibrium chemistry as a tracer should pass a sequence of tests.

First, establish that the relevant molecular bands are present in calibrated spectra and robust to alternative systematics models. Second, retrieve temperature, composition, and aerosols jointly, reporting posterior covariance and sensitivity to priors. Third, compare against a chemically consistent equilibrium baseline over plausible elemental inventories rather than one solar-composition curve. Fourth, calculate vertical, horizontal, photochemical, and condensation pathways with validated kinetics. Fifth, forward-model their phase- and wavelength-dependent observables through the same instrumental response. Finally, ask whether one transport solution explains several species and observing geometries simultaneously.

NGTS-10A b illustrates the logic. The study's central result is not merely a CO detection: it combines full-orbit spectra, retrieved major carbon and oxygen carriers, equilibrium and disequilibrium calculations, and tests of vertical mixing and non-solar composition. The authors interpret the surviving explanation as fast horizontal transport. The exact wind speed remains dependent on the dynamical and kinetic models; the observation constrains a regime in which transport outruns conversion more directly than it measures $U$ itself.

The payoff is substantial. Temperature phase curves constrain radiative redistribution, while chemical phase curves can constrain parcel history. Used together, they probe both where gas is now and where it has recently been. The safest statement is not “methane measures the wind,” but “the joint spatial distribution of chemically linked species can bound the competition between reaction and transport.”

## Sources

- Parmentier et al., “Horizontal transport as a source of disequilibrium chemistry on the nightside of a hot exoplanet,” *Nature Astronomy* (2026): https://doi.org/10.1038/s41550-026-02845-2
- Bell et al., “Nightside clouds and disequilibrium chemistry on the hot Jupiter WASP-43b,” *Nature Astronomy* (2024): https://doi.org/10.1038/s41550-024-02230-x
- Mendonça et al., “Three-dimensional circulation driving chemical disequilibrium in WASP-43b,” *The Astrophysical Journal* 869, 107 (2018): https://doi.org/10.3847/1538-4357/aaed23
- Steinrueck et al., “The effect of 3D transport-induced disequilibrium carbon chemistry on the atmospheric structure and phase curves and emission spectra of hot Jupiter HD 189733b,” *The Astrophysical Journal* 880, 14 (2019): https://doi.org/10.3847/1538-4357/ab2591
- Drummond et al., “The three-dimensional chemical structure of the atmosphere of HD 209458b: chemical kinetics and transport,” *Astronomy & Astrophysics* 636, A68 (2020): https://doi.org/10.1051/0004-6361/201937153
- Cooper and Showman, “Dynamics and disequilibrium carbon chemistry in hot Jupiter atmospheres, with application to HD 209458b,” *The Astrophysical Journal* 649, 1048–1063 (2006): https://doi.org/10.1086/506312
- Smith, “Estimation of a length scale to use with the quench level approximation for obtaining chemical abundances,” *Icarus* 132, 176–184 (1998): https://doi.org/10.1006/icar.1997.5886
- Tsai et al., “Photochemically produced SO$_2$ in the atmosphere of WASP-39b,” *Nature* 617, 483–487 (2023): https://doi.org/10.1038/s41586-023-05902-2

## Open questions

- Can multi-species phase curves recover separate horizontal and vertical mixing constraints without imposing chemically uniform hemispheres?
- Which reaction-rate uncertainties dominate inferred CO–CH$_4$ quench pressures across the 600–1,500 K regime?
- How much does radiative feedback from disequilibrium species change the circulation relative to post-processed chemistry?
- Can high-resolution Doppler spectra separate chemical patchiness from rotation and winds?
- Will repeated phase curves reveal time-variable chemistry associated with storms, waves, or changing clouds?
