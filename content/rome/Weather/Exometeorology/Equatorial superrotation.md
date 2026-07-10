---
title: Equatorial superrotation
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, atmospheric-dynamics, superrotation, circulation, exoplanets]
---

Equatorial superrotation is an eastward atmospheric jet whose equatorial air carries more axial angular momentum per unit mass than a surface parcel corotating with the planet—a common simulated outcome on synchronously irradiated worlds, but not something a hotspot offset alone directly measures.

Up: [[Exometeorology research frontier 2026]]

Related: [[Atmospheric circulation on tidally locked planets]] · [[Day-night heat redistribution]] · [[Radiative and advective timescales in exoplanet atmospheres]] · [[Exoplanet phase curves]] · [[From light curves to atmospheric maps]]

## What the term means

For eastward zonal wind $u$, latitude $\phi$, planetary radius $a$, and rotation rate $\Omega$, the axial angular momentum per unit mass is approximately

$$
M = (\Omega a\cos\phi + u)a\cos\phi.
$$

A parcel resting relative to the surface at the equator has $M_0=\Omega a^2$. In the strict dynamical sense, an atmosphere is **equatorially superrotating** when its zonal-mean equatorial flow has $u>0$ and hence $M>M_0$. “Superrotation” therefore refers to motion relative to the rotating planet, not merely to fast winds or an atmosphere completing a circuit quickly. The distinction matters especially for slowly rotating planets, where a moderate eastward wind can greatly exceed the surface's angular velocity.

This definition is local enough to describe an equatorial jet, but the angular-momentum budget is global. In an atmosphere with no external axial torque, air cannot all acquire excess angular momentum: eastward acceleration somewhere must be balanced by westward momentum elsewhere or by changes in the solid planet, deep atmosphere, magnetic field, or escaping material. A statistically steady jet therefore requires a continuing convergence of angular momentum into the equatorial region that balances drag and other momentum export.

The jet is not synonymous with the whole circulation. A synchronously rotating atmosphere can combine a broad eastward equatorial jet with day-to-night flow, a thermally direct overturning cell, high-latitude return flow, vortices, and vertically reversing winds. Nor does superrotation uniquely identify a forcing mechanism. Venus, Titan, Earth-like idealized atmospheres, hot Jupiters, and tidally locked rocky planets can superrotate for different mixtures of thermal tides, planetary waves, transient eddies, and mean circulations. This note focuses on the stellar-forced wave mechanism most relevant to [[Exometeorology research frontier 2026|Exometeorology]].

## The angular-momentum problem

Axisymmetric overturning alone does not easily create a strong maximum of $M$ at the equator. In the absence of eddies and friction, meridional motion approximately conserves parcel angular momentum. Air moving equatorward from higher latitude brings less $M$ than an equatorial surface parcel, tending toward westward relative flow as it approaches the equator. Maintaining an equatorial maximum therefore demands non-axisymmetric motions—“eddies” in the dynamical sense—that transport eastward zonal momentum toward the equator, or an applied torque.

After zonal averaging, the horizontal eddy contribution to equatorial acceleration is represented schematically by

$$
\frac{\partial \overline{u}}{\partial t}
\sim -\frac{1}{a\cos^2\phi}\frac{\partial}{\partial\phi}
\left(\overline{u'v'}\cos^2\phi\right)+\cdots,
$$

where primes are departures from the zonal mean, $v$ is meridional wind, and the omitted terms include mean-flow advection, vertical eddy momentum transport, pressure-gradient effects in some coordinate systems, and drag. The key diagnostic is the covariance $\overline{u'v'}$: tilted wind patterns can correlate eastward or westward anomalies with equatorward or poleward motion. A pattern that produces convergence of eastward momentum at the equator accelerates a superrotating jet.

Energy and angular momentum answer different questions. Stellar heating supplies available potential energy that circulation can convert to kinetic energy. But the *shape* and tilts of the wave response determine where angular momentum goes. A large day–night temperature contrast is therefore not itself a proof that the equator accelerates eastward.

## How permanent day–night heating drives the jet

On a synchronously rotating planet, stellar heating is approximately fixed in longitude: persistent dayside heating and nightside cooling force a planetary-scale response. Near the equator, rotation organizes that response into an eastward-extending Kelvin-like component and off-equatorial Rossby gyres displaced toward the west. Radiative damping, friction, and wave propagation shift the pressure/height and velocity fields away from a purely symmetric response.

The resulting chevron-shaped wind pattern has the correlations needed for angular-momentum transport. In the northern hemisphere, the relevant phase tilts tend to send eastward momentum equatorward; the mirrored southern pattern does the same. Horizontal eddy momentum flux therefore converges at the equator. Showman and Polvani derived this mechanism in shallow-water models and demonstrated corresponding behavior in three-dimensional hot-Jupiter simulations; their result is **simulated and theoretically interpreted**, not a direct wind measurement ([Showman & Polvani 2011](https://doi.org/10.1088/0004-637X/738/1/71)).

Calling this merely “Kelvin waves push air east” is misleading. A wave carries momentum through correlations among perturbation fields, and Rossby and Kelvin-like components jointly set the stationary pattern. Moreover, the classic linear Matsuno–Gill solution contains a momentum source/sink subtlety: its horizontal convergence of eastward momentum can be canceled by an artificial equatorial term associated with the imposed mass forcing. A physically consistent shallow-water formulation lets mass exchange carry the momentum of the layer it enters or leaves, revealing net equatorial acceleration ([Showman & Polvani 2010](https://doi.org/10.1029/2010GL044343)).

The three-dimensional story adds vertical structure. Heating excites modes with different vertical wavelengths; their phase tilts and resonances affect both horizontal and vertical momentum fluxes. Tsai, Dobbs-Dixon, and Gu found **analytically calculated and simulated** vertically structured equatorial waves capable of sustaining superrotation, with the mature jet Doppler-shifting the wave response ([Tsai et al. 2014](https://doi.org/10.1088/0004-637X/793/2/141)). During spin-up from rest, however, a steady linear response is not always established. Debras and collaborators found in **simulations and nonlinear budget diagnostics** that vertical eddy momentum transport can be critical during the initial acceleration, particularly under strong day–night forcing ([Debras et al. 2020](https://doi.org/10.1051/0004-6361/201936110)). Horizontal convergence is thus the organizing explanation, not the only term at every time and pressure.

## Spin-up, equilibration, and limits

The wave field first accelerates eastward equatorial flow from a weak-wind state. As the mean jet strengthens, it modifies the very waves driving it. Doppler shifting moves their phases and possible resonances; vertical and meridional shear change propagation; the altered temperature pattern changes radiative forcing. Hammond and Pierrehumbert showed in a linearized shallow-water framework around an eastward basic state that this wave–mean-flow feedback helps explain the mature circulation and hotspot displacement on tidally locked planets ([Hammond & Pierrehumbert 2018](https://doi.org/10.3847/1538-4357/aaf178)). Equilibrium is consequently an interaction, not a fixed wave pattern acting on a passive mean flow.

Several processes can halt or weaken acceleration:

- **Drag or friction.** Surface friction matters for terrestrial planets; parametrized deep drag is often used in giant-planet models. If damping acts faster than waves can establish coherent phase tilts, the jet weakens and direct day-to-night flow becomes more prominent.
- **Wave adjustment.** As the jet changes wave phases, eddy convergence can diminish, move vertically, or be offset by other fluxes. A jet may equilibrate without a simple local Rayleigh drag balance.
- **Mean overturning.** The zonal-mean meridional circulation can export equatorial angular momentum, opposing eddy convergence.
- **Vertical momentum flux.** Waves and resolved circulation can transfer momentum between photospheric layers and the deep atmosphere. The observed pressure range need not be a closed budget.
- **Magnetic stresses.** In sufficiently hot, partially ionized atmospheres, winds interacting with a planetary magnetic field may experience Lorentz forces. Most exoplanet applications remain **modeled or interpreted** because field strength, conductivity, and geometry are poorly constrained.
- **Instability and variability.** Strong shear can generate waves or instabilities that redistribute momentum. Whether a particular numerical jet is stable depends on stratification, resolution, dissipation, and lower-boundary treatment.

Rotation rate and atmospheric stratification set the horizontal scale of equatorial waves. A useful equatorial deformation scale is $L_{\rm eq}\sim(c/\beta)^{1/2}$, where $c$ is a gravity-wave speed and $\beta\simeq 2\Omega/a$. When this scale is comparable to the planet's radius, the forced waves and jet can be planetary-wide. Faster rotation narrows equatorial trapping and can permit multiple jets; very strong damping prevents waves from traversing the needed distance. These are scaling expectations, not sharp universal thresholds, because $c$, radiative time, drag, forcing amplitude, and vertical structure covary.

The deep boundary is especially consequential for gas giants. A simulation spanning only a thin photospheric shell may reach a steady-looking upper jet while slowly exchanging momentum with deeper layers. Differences among bottom drag, imposed interior entropy, domain depth, numerical dissipation, and initialization can change equilibration time and jet speed. Robust appearance across model families supports the mechanism, but it does not make a particular simulated velocity a measurement.

## What observations do—and do not—show

No observation currently returns a global three-dimensional exoplanet wind field. Claims about superrotation combine remote data with radiative-transfer and circulation models, and should be labeled by evidential layer.

**Measured:** a thermal phase curve records disk-integrated flux versus orbital phase at particular wavelengths. An emission maximum before secondary eclipse corresponds geometrically to an eastward displacement of the hemisphere's brightness centroid under the adopted orbital convention. Multiwavelength curves probe broad, overlapping contribution functions rather than exact pressure surfaces. Eclipse mapping and phase-curve inversion add spatial information but remain regularized inverse problems. These data belong to [[Exoplanet phase curves]] and [[From light curves to atmospheric maps]], not to a direct anemometer reading.

**Retrieved:** analyses infer longitudinal brightness patterns, hotspot offsets, day–night contrasts, temperature profiles, or molecular abundances under assumptions about orbital parameters, map basis, clouds, chemistry, and radiative transfer. A retrieved eastward brightness offset is more model-dependent than the underlying flux time series. Different wavelengths can retrieve different offsets because opacity and vertical shear select different levels.

**Simulated:** general circulation models frequently produce broad eastward equatorial jets of order kilometres per second in hot-Jupiter photospheres. The exact speed, width, pressure range, and temporal variability are outputs conditional on forcing, drag, opacity, chemistry, numerical method, and boundary conditions. Simulations of synchronously rotating rocky planets can also produce superrotation, but surface drag and atmospheric mass make their regimes distinct.

**Interpreted:** an eastward thermal hotspot is consistent with eastward transport and wave–mean-flow dynamics, and is often treated as evidence supporting superrotation. It is not uniquely diagnostic. Spatially varying clouds can displace the brightness centroid; chemical opacity can move the emitting level; an eccentric orbit or uncertain ephemeris can affect phase interpretation; a jet and the stationary thermal wave can contribute together; and hotspot position is not linearly proportional to wind speed. Hammond and Pierrehumbert's analysis specifically cautions against picturing the offset as passive heat simply carried downstream: the mean flow reshapes the forced wave response itself.

High-resolution Doppler spectroscopy offers a more velocity-sensitive route. During transit, line shifts and broadenings can encode winds, rotation, and different morning/evening terminators; during orbital phases, disk-integrated line profiles weight approaching and receding regions differently. Yet rotation, orbital velocity, vertical winds, asymmetric opacity, and spatially varying chemistry are entangled. A net blueshift may indicate day-to-night flow at the terminator rather than an equatorial zonal jet. Combining resolved line shapes with phase-dependent emission and physically consistent three-dimensional forward models is more discriminating than any one offset.

## Why it matters

Superrotation links dynamics to nearly every atmospheric observable. It helps set the longitude of hot and cold regions, changes cloud condensation and evaporation histories, horizontally quenches disequilibrium chemistry, and shifts the spectral contribution of different limbs. It therefore couples [[Day-night heat redistribution]], [[Transmission spectroscopy]], and [[Disequilibrium chemistry as a tracer of circulation]].

It is also a test of mechanism. A model that matches a phase curve by adjusting drag but fails momentum conservation, vertical structure, or spectral line velocities has not uniquely explained the atmosphere. Conversely, departures from the canonical eastward-jet pattern can reveal strong drag, magnetic coupling, cloud radiative feedback, unusual rotation, or time variability. The useful scientific target is not “detect superrotation” as a binary label, but constrain the angular-momentum pathways well enough to distinguish competing circulations.

Comparative exoplanetology can expose where the mechanism changes regime. Hot Jupiters provide strong forcing and deep gaseous envelopes; ultra-hot Jupiters add dissociation and possible magnetic effects; sub-Neptunes introduce composition and cloud uncertainty; rocky synchronous planets add a surface and potentially strong friction. The same wave language can organize all four, while their different boundary conditions prevent careless transfer of a fitted drag time or jet speed from one class to another.

## A disciplined inference chain

A sound claim should preserve the chain from photons to dynamics:

1. State the **measured** quantity: calibrated fluxes, spectra, timing, or line profiles with uncertainties.
2. State the **retrieved** quantity and assumptions: brightness longitude, temperature, opacity, or velocity distribution.
3. Compare multiple **simulated** circulation families, not only a superrotating baseline.
4. Label the resulting dynamical account as **interpreted**, and identify degeneracies that could reproduce the observable.

This vocabulary prevents a common category error: writing that an eastward hotspot “measures a superrotating wind.” The hotspot is a brightness feature; superrotation is an angular-momentum property of the zonal-mean flow. They are causally related in many models but are not observationally identical.

## Sources

- Showman, A. P. & Polvani, L. M. (2011), “Equatorial Superrotation on Tidally Locked Exoplanets,” *The Astrophysical Journal* 738, 71. [DOI](https://doi.org/10.1088/0004-637X/738/1/71) · [author-hosted paper](https://www.columbia.edu/~lmp/paps/showman%2Bpolvani-APJ-2011.pdf)
- Showman, A. P. & Polvani, L. M. (2010), “The Matsuno–Gill model and equatorial superrotation,” *Geophysical Research Letters* 37, L18811. [DOI](https://doi.org/10.1029/2010GL044343)
- Tsai, S.-M., Dobbs-Dixon, I. & Gu, P.-G. (2014), “Three-dimensional Structures of Equatorial Waves and the Resulting Super-rotation in the Atmosphere of a Tidally Locked Hot Jupiter,” *The Astrophysical Journal* 793, 141. [DOI](https://doi.org/10.1088/0004-637X/793/2/141) · [arXiv](https://arxiv.org/abs/1405.0003)
- Hammond, M. & Pierrehumbert, R. T. (2018), “Wave-Mean Flow Interactions in the Atmospheric Circulation of Tidally Locked Planets,” *The Astrophysical Journal* 869, 65. [DOI](https://doi.org/10.3847/1538-4357/aaf178) · [arXiv](https://arxiv.org/abs/1810.11231)
- Debras, F. et al. (2020), “The Acceleration of Superrotation in Simulated Hot Jupiter Atmospheres,” *Astronomy & Astrophysics* 633, A2. [DOI](https://doi.org/10.1051/0004-6361/201936110) · [arXiv](https://arxiv.org/abs/1911.03182)

## Open questions

- Which combination of phase-resolved line profiles and multiwavelength brightness maps can isolate equatorial zonal momentum from day-to-night flow, rotation, and cloud asymmetry?
- How much momentum do observable layers exchange with deep, unobserved gas, and what boundary treatment best represents that reservoir in general circulation models?
- When do magnetic stresses, hydrogen dissociation, or cloud radiative feedback qualitatively change the wave-driven superrotation regime rather than merely alter its speed?
- Can repeated observations distinguish a statistically steady jet from oscillations, shear instabilities, or migrating wave patterns?
- Which observable measures constrain the momentum budget itself, rather than only the temperature field produced by that circulation?
