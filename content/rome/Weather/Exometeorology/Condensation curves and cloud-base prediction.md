---
title: Condensation curves and cloud-base prediction
created: 2026-07-10
source: llm
status: seed
tags: [weather, exometeorology, exoplanets, clouds, thermodynamics, atmospheric-modeling]
---

A temperature–pressure profile crossing a condensate's saturation curve locates a thermodynamically permitted cloud base under stated composition assumptions; it does not by itself predict a realized, optically visible, or remotely measured cloud deck.

Up: [[Exometeorology research frontier 2026]]

Related: [[Cloud formation and transport beyond Earth]] · [[Cloud radiative feedbacks in exoplanet atmospheres]] · [[Contribution functions in exoplanet spectra]] · [[Atmospheric retrieval degeneracies]]

## The intersection construction

The familiar cloud-base diagram places temperature on the horizontal axis and pressure, usually decreasing upward, on a logarithmic vertical axis. One curve is the atmosphere's temperature–pressure profile, $T(P)$. Another is a **condensation curve**: the combinations of $T$ and total pressure at which a specified gas and condensed phase can coexist in equilibrium for a specified elemental composition. Where the atmospheric profile first enters the condensed-phase stability region while moving upward is a candidate cloud base.

The construction is powerful because it converts a chemical equilibrium condition into a geometrical test. It is also easy to overread. The intersection is not a photograph of a cloud. It is the level where an assumed vapor abundance would reach saturation if equilibrium applies and if the material needed to make that condensate has not already been removed.

For a condensable species with vapor partial pressure $p_v$, define the saturation ratio

$$
S=\frac{p_v}{p_{\rm sat}(T)}.
$$

Here $p_{\rm sat}(T)$ is the equilibrium vapor pressure over the relevant condensed phase. Saturation occurs at $S=1$; $S>1$ is supersaturation and $S<1$ is undersaturation. If the vapor has mole fraction $x_v$ in an ideal-gas mixture, then $p_v\simeq x_vP$. The candidate cloud base therefore satisfies

$$
x_v(P,T)P=p_{\rm sat}(T).
$$

This equation exposes an often-hidden assumption: a curve plotted against **total** pressure already embeds a vapor abundance or bulk elemental inventory. The pure substance's vapor-pressure curve $p_{\rm sat}(T)$ is not, by itself, a universal $T$–$P$ condensation boundary for an atmosphere. Changing metallicity, elemental ratios, chemical speciation, or prior rainout changes $x_v$ and moves the boundary.

## Why condensation curves are steep

For a phase transition in equilibrium, the Clausius–Clapeyron relation gives, approximately,

$$
\frac{d\ln p_{\rm sat}}{dT}=\frac{L}{R_vT^2},
$$

where $L$ is latent heat per unit mass and $R_v$ is the vapor's specific gas constant. If $L$ varies slowly over the relevant interval, integration gives

$$
\ln p_{\rm sat}\approx C-\frac{L}{R_vT}.
$$

Saturation pressure therefore changes exponentially with inverse temperature. A modest temperature displacement can move a cloud base by several pressure scale heights, especially when the atmospheric profile passes nearly parallel to the condensation curve. This sensitivity makes cloud geography responsive to day–night contrasts, waves, and temporal variability. It also makes predicted cloud-base pressure fragile to temperature errors.

For water or ammonia, one may speak fairly directly about saturation of a vapor over its liquid or solid phase. Refractory clouds often require a reaction rather than condensation of an abundant gas molecule bearing the condensate's exact formula. Magnesium silicates, for example, form through equilibrium reactions involving Mg-, Si-, O-, and H-bearing gases. Their stability boundary follows equality of chemical potentials, or equivalently a reaction quotient equal to the equilibrium constant. Tables of condensation temperatures compress this multicomponent calculation into a convenient curve. The curve is conditional on pressure, composition, chosen condensate phases, and whether the calculation assumes local equilibrium or rainout.

The phase identity matters. Different crystalline forms can have different vapor pressures; liquid droplets and solids have different saturation curves; mixed particles can reduce component activities; and curved nanoparticle surfaces require a higher equilibrium vapor pressure than a flat bulk surface through the Kelvin effect. Standard curves usually use bulk thermodynamic data and do not resolve all of these microphysical corrections.

## From deep atmosphere to first cloud base

Suppose a deep atmosphere is warm enough that a refractory element remains gaseous. Moving upward, pressure and temperature usually fall. The vapor partial pressure changes because total pressure falls and chemistry repartitions the element among molecules. Meanwhile $p_{\rm sat}$ generally falls very rapidly as temperature decreases. The first level at which the vapor reaches saturation is the equilibrium cloud base.

Above that level, equilibrium does not imply that the original vapor mole fraction persists. Condensation removes vapor. In a strict local-equilibrium calculation, gas and condensate remain available to react at every level. In a **rainout** calculation, condensed particles settle and remove elements from higher, cooler layers. These choices yield different condensation sequences. A refractory cloud deep in the column can sequester titanium, aluminum, magnesium, silicon, or oxygen, preventing some cooler condensates from forming aloft even when a naive curve drawn with undepleted abundances says they are stable.

This is why the phrase “crosses the silicate curve” is incomplete. Which silicate? Under what elemental abundances? Did aluminum and titanium condense first? Are condensates retained in contact with the gas, or do they settle? Is vertical mixing resupplying vapor? Lodders and Visscher and collaborators constructed equilibrium and rainout sequences for giant planets and brown dwarfs precisely because the answers depend on coupled chemical inventory, not temperature alone.

Multiple intersections are possible. A temperature inversion can carry a profile from an undersaturated region into saturation and then back into undersaturation, producing a finite thermodynamic cloud zone. A detached cool layer can create a second zone. In three dimensions, each longitude and latitude has its own profile, so a single global curve intersection becomes a field $P_{\rm base}(\lambda,\phi,t)$—if a base exists at all. A dayside column may never cross while the nightside column crosses deeply; a morning limb may contain particles advected from the nightside even if its instantaneous local profile is undersaturated.

## The parcel test and the environmental-profile test differ

Two related constructions are sometimes conflated. The environmental-profile test compares the actual or modeled $T(P)$ column with a condensation boundary. A parcel-lifting calculation follows an air parcel as it expands and cools, asking where it reaches saturation. Before condensation the parcel may follow a dry adiabat; afterward latent heating and removal of condensate alter its lapse rate. Its lifting condensation level is a dynamical trajectory result, not necessarily identical to the equilibrium base inferred from a horizontally averaged environmental profile.

On a convective brown dwarf the two may be closely connected because the deep profile is near an adiabat. In a strongly irradiated hot Jupiter, stable stratification, horizontal advection, and radiative heating can dominate parcel histories. On a synchronously rotating world, “upward” motion is only one route to saturation; horizontal transport into a colder hemisphere can cross the saturation boundary without large vertical displacement. A one-dimensional intersection remains a useful diagnostic, but it cannot encode the history of the air or particle.

## Thermodynamic permission is not microphysical realization

Supersaturation supplies a free-energy drive for condensation, but a new particle must first overcome a nucleation barrier. In classical homogeneous nucleation, forming a tiny cluster gains bulk free energy but costs surface free energy. The critical barrier decreases rapidly as supersaturation increases. Consequently, $S$ may need to exceed unity appreciably before seed particles appear. Heterogeneous nucleation on an existing aerosol can lower the barrier, depending on surface chemistry and wetting. If no efficient seeds exist, a profile can lie inside the nominal condensation region while remaining cloud-free over the relevant residence time.

Once seeds exist, vapor deposition must grow them. Growth can be limited by molecular diffusion, surface reactions, latent-heat removal, or shortage of condensable vapor. Particles also coagulate, fragment, evaporate, and settle. The important comparison is between microphysical times and transport times:

$$
\tau_{\rm cond},\ \tau_{\rm nuc},\ \tau_{\rm coag},\ \tau_{\rm evap}
\quad\hbox{versus}\quad
\tau_{\rm adv}\sim\frac{L}{U},\quad
\tau_{\rm mix}\sim\frac{H^2}{K_{zz}},\quad
\tau_{\rm set}\sim\frac{H}{v_{\rm fall}}.
$$

If nucleation and growth are fast relative to transport, particles can track the local saturation field. If winds move gas across a thermal boundary first, supersaturation can persist or particles can survive temporarily in undersaturated air. If settling is faster than upward resupply, an equilibrium base may feed only a compact deep cloud. If mixing is vigorous, condensate can extend many scale heights above its base. The base is thus one boundary condition for a cloud cycle, not its vertical opacity profile.

Particle size is not a detail appended after base prediction. Small particles settle slowly and can remain aloft, but may form inefficiently or evaporate quickly; large particles fall rapidly and concentrate opacity nearer the base. Ackerman and Marley's one-dimensional model represents the competition between upward turbulent mixing and downward sedimentation with a tunable sedimentation efficiency. More explicit microphysical models calculate particle number and mass through nucleation, growth, evaporation, and coagulation. Neither follows uniquely from a condensation-curve crossing.

## Dynamics and radiation move the answer

A cloud base calculated from a fixed $T(P)$ profile assumes the cloud does not alter that profile. Yet clouds scatter incoming stellar radiation and absorb and emit thermal radiation. Their heating and cooling can shift the very intersection used to place them. A reflective cloud can cool deeper layers by reducing absorbed stellar energy; an infrared-opaque cloud can warm layers below and cool or heat layers near its top depending on flux divergence. Latent heating may also matter where condensate mass is substantial. [[Cloud radiative feedbacks in exoplanet atmospheres]] explains this two-way coupling.

Post-processing a clear [[General circulation models for exoplanets|general circulation model]] with equilibrium curves is therefore a **diagnostic simulation**: it identifies where condensates would be allowed in the clear model state. It becomes a self-consistent prediction only if cloud radiative and compositional effects are negligible or if coupling has been iterated to convergence. A fully coupled model can still be uncertain because nucleation rates, optical constants, particle shapes, and subgrid mixing are uncertain.

Horizontal averaging can manufacture an intersection that occurs nowhere. Because saturation pressure is nonlinear in temperature, the condensation state of a mean profile is not the mean condensation state of heterogeneous columns. A terminator-mean profile may cross a curve even if the hot evening limb is clear and the cool morning limb is cloudy. Conversely, averaging condensate mass can hide patchy holes that dominate emergent radiation. Cloud-base prediction should therefore use the spatial and temporal resolution appropriate to the observation or dynamical question.

## What is measured, retrieved, and simulated

### Measured

A telescope measures calibrated transit depth, emergent flux, polarization, or time variability. It does not measure a pressure–temperature curve or cloud-base pressure directly. Even an in situ Solar System probe measures local pressure, temperature, and particle properties along a path; it still samples rather than globally maps the base.

### Retrieved

A retrieval uses a radiative-transfer model and priors to infer a temperature profile, gas abundances, and perhaps cloud parameters from the measured spectrum. A “cloud-top pressure” in a retrieval is commonly the pressure where an idealized grey deck becomes optically thick. It need not equal the thermodynamic cloud base, which may lie deeper than the spectrum can see. A retrieved $T(P)$ crossing a condensation curve is a derived, posterior-conditional result. It inherits degeneracies among radius, gravity, abundance, temperature, opacity, stellar contamination, and the cloud parameterization.

The uncertainty should be propagated by evaluating intersections across posterior samples, not merely crossing the median $T(P)$ with one nominal curve. Some samples may have no intersection in the modeled range; others may cross more than once. Composition uncertainty should move the condensation boundary along with the profile. Reporting only one pressure erases this topology.

### Simulated

An equilibrium chemistry code simulates phase stability. A one-dimensional atmosphere model simulates a $T(P)$ profile under boundary and opacity assumptions. A GCM simulates a three-dimensional, time-dependent thermal and wind field. A cloud microphysics module simulates particle populations. Combining these components can predict a candidate base and cloud distribution, but the prediction remains conditional on initialization, resolution, mixing, chemical inventory, nucleation data, sedimentation, and radiative coupling.

### Interpreted

An interpretation connects measured muted molecular features, phase-dependent brightness, or variability to retrieved aerosol opacity and then to a simulated condensate cycle. The strongest case requires several links to agree: thermodynamic viability at relevant pressures, sufficient elemental supply, plausible nucleation and growth, transport capable of maintaining particles, optical constants consistent with the spectrum, and preferably a spatial or temporal prediction confirmed independently. An intersection alone establishes only the first link.

## A disciplined workflow

1. Specify bulk elemental abundances, gravity, and the chemical-equilibrium or rainout convention.
2. Compute vapor partial pressures and phase-stability boundaries with documented thermodynamic data; do not substitute a pure-vapor curve without abundance scaling.
3. Use an ensemble of $T(P)$ profiles appropriate to longitude, latitude, time, and posterior uncertainty.
4. Locate every crossing and record whether the atmosphere enters or exits the stability region with altitude.
5. Check depletion by deeper condensates and whether vertical or horizontal mixing replenishes the limiting element.
6. Compare nucleation, growth, evaporation, settling, mixing, and advection times at the same pressures.
7. Convert particle distributions to wavelength-dependent opacity using stated size, shape, and optical-constant assumptions.
8. Recompute radiation and dynamics if clouds materially alter heating rates.
9. Forward-model the actual observing geometry and instrument bandpass; use [[Contribution functions in exoplanet spectra]] to identify which pressures affect the data.
10. Report measured, retrieved, simulated, and interpreted statements separately.

This workflow often yields a range or probability of base pressures rather than a point. That is a more physical answer. A base deeper than the contribution region may be unconstrained even when high-altitude aerosol opacity is robustly favored. Conversely, a predicted base within the observable atmosphere may produce little spectral effect if particles are sparse, absorbing bands lie outside the instrument range, or overlying gas opacity masks it.

## Why it matters

Condensation curves are among the fastest ways to connect atmospheric temperature to possible cloud composition. They organize comparative regimes: refractory oxides and silicates in very hot atmospheres, salts and sulfides in cooler substellar atmospheres, and water or ammonia at lower temperatures. They also identify cold traps that can remove elements from observable gas and alter chemical retrievals.

Their scientific value depends on preserving their limited claim. The curve–profile intersection is a thermodynamic hypothesis generator. Microphysics decides whether particles form, dynamics decides where they travel and survive, radiation decides how they reshape temperature, and observation decides which resulting opacity is detectable. Keeping those stages separate prevents a modeled equilibrium boundary from becoming an invented cloud map—and makes genuine agreement among them far more informative.

## Sources

- [Lodders, K. and Fegley, B. Jr. (2002), “Atmospheric Chemistry in Giant Planets, Brown Dwarfs, and Low-Mass Dwarf Stars. I. Carbon, Nitrogen, and Oxygen,” *Icarus*](https://doi.org/10.1006/icar.2001.6740) — primary equilibrium and rainout chemistry framework for major volatile elements.
- [Visscher, C., Lodders, K., and Fegley, B. Jr. (2010), “Atmospheric Chemistry in Giant Planets, Brown Dwarfs, and Low-Mass Dwarf Stars. III. Iron, Magnesium, and Silicon,” *The Astrophysical Journal*](https://doi.org/10.1088/0004-637X/716/2/1060) — primary refractory chemistry and condensation-sequence calculations.
- [Ackerman, A. S. and Marley, M. S. (2001), “Precipitating Condensation Clouds in Substellar Atmospheres,” *The Astrophysical Journal*](https://doi.org/10.1086/321540) — primary mixing–sedimentation cloud model showing why a base does not fix vertical cloud structure.
- [Morley, C. V. et al. (2012), “Neglected Clouds in T and Y Dwarf Atmospheres,” *The Astrophysical Journal*](https://doi.org/10.1088/0004-637X/756/2/172) — primary application of equilibrium cloud bases and sedimentation models to cooler sulfide and salt clouds.
- [Parmentier, V., Showman, A. P., and Lian, Y. (2013), “3D mixing in hot Jupiters atmospheres. I. Application to the day/night cold trap in HD 209458b,” *Astronomy & Astrophysics*](https://doi.org/10.1051/0004-6361/201321132) — primary three-dimensional study of transport, particle settling, and cold trapping.
- [Gao, P. et al. (2021), “Aerosols in Exoplanet Atmospheres,” *Journal of Geophysical Research: Planets*](https://doi.org/10.1029/2020JE006655) — authoritative synthesis of equilibrium, kinetic microphysics, transport, and observational constraints.

## Open questions

- Which refractory condensates have nucleation rates and surface energies known well enough for a saturation crossing to become a quantitative formation prediction?
- How should retrieval frameworks propagate uncertain elemental abundance and rainout history into posterior distributions for cloud-base pressure?
- In which exoplanet regimes does cloud radiative feedback move the equilibrium base more than observational uncertainty in the retrieved $T(P)$ profile?
- Can phase-resolved spectra distinguish a locally formed cloud from particles advected across a saturation boundary?
- What reporting standard would make condensation curves reproducible across equilibrium codes with different thermodynamic databases and phase lists?
