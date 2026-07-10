---
title: Shallow-water models of tidally locked atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [weather, exoplanets, atmospheric-dynamics, shallow-water, tidal-locking]
---
Shallow-water models isolate how day–night heating, planetary waves, rotation, drag, and radiative relaxation can organize a tidally locked atmosphere, but their jets and hotspot offsets are conditional simulations rather than measured winds.

Up: [[Exometeorology research frontier 2026]]

## Why reduce an atmosphere to one layer?

A synchronously rotating planet presents nearly the same hemisphere to its star. To leading order, stellar heating is fixed in longitude: a hot dayside faces a cold nightside. The atmosphere must respond to that persistent pressure forcing while rotation turns horizontal motion, waves communicate the forcing, radiation restores thermal contrasts, and friction or deeper coupling removes momentum. A three-dimensional [[General circulation models for exoplanets|general circulation model]] can represent this response in detail, but its many coupled processes make the origin of a particular jet or temperature pattern difficult to diagnose.

The shallow-water system is a deliberately smaller laboratory. It replaces a stratified atmosphere by a single active layer whose thickness varies horizontally. Thickness stands in for a vertically integrated thermodynamic variable: depending on the derivation, a thicker column corresponds roughly to a warmer column, a higher geopotential surface, or greater mass above a reference pressure. Horizontal pressure gradients are then proportional to thickness gradients. The model retains rotation, nonlinear advection, gravity or internal-gravity waves, and mass continuity while discarding most vertical structure.

This reduction is especially useful for [[Atmospheric circulation on tidally locked planets]] because the imposed radiative-equilibrium thickness can be prescribed with a permanent substellar maximum and antistellar minimum. One can then ask a controlled question: how do equatorial Kelvin and Rossby responses redirect momentum when a rotating fluid is continuously forced by a day–night pattern? The answer helps explain [[Equatorial superrotation]], but does not determine a unique wind field for any observed planet.

## Governing equations

On a rotating sphere, a standard one-layer system for horizontal velocity $\mathbf{v}$ and layer thickness $h$ is

$$
\frac{D\mathbf{v}}{Dt}+f\,\hat{\mathbf{k}}\times\mathbf{v}
=-g\nabla h+\mathbf{R}-\frac{\mathbf{v}}{\tau_{\mathrm{drag}}},
$$

$$
\frac{\partial h}{\partial t}+\nabla\cdot(h\mathbf{v})
=\frac{h_{\mathrm{eq}}-h}{\tau_{\mathrm{rad}}}\equiv Q.
$$

Here $D/Dt=\partial/\partial t+\mathbf{v}\cdot\nabla$, $f=2\Omega\sin\phi$ is the Coriolis parameter, $g$ is an effective gravity, $h_{\mathrm{eq}}(\lambda,\phi)$ is the thickness toward which radiation relaxes the layer, and $\tau_{\mathrm{rad}}$ and $\tau_{\mathrm{drag}}$ are prescribed radiative and drag times. A common forcing shape is a dayside cosine such as

$$
h_{\mathrm{eq}}=H+\Delta h_{\mathrm{eq}}\cos\lambda\cos\phi
$$

on the illuminated hemisphere, with a chosen continuation or floor on the nightside. $H$ is a mean thickness and $\Delta h_{\mathrm{eq}}$ controls forcing amplitude. This is a parameterization of heating, not a radiative-transfer calculation.

The term $\mathbf{R}$ deserves attention. Newtonian relaxation adds or removes mass from the active layer. Newly added mass must carry some momentum, and removed mass changes the momentum budget. In the Showman–Polvani formulation, the momentum exchange is chosen so that mass entering from a motionless lower layer dilutes the active-layer momentum, while mass leaving carries the local momentum. Schematically,

$$
\mathbf{R}=
\begin{cases}
-Q\mathbf{v}/h, & Q>0,\\
0, & Q<0,
\end{cases}
$$

for a quiescent lower reservoir. Other choices imply different vertical momentum coupling. Omitting this bookkeeping while retaining mass forcing can silently alter the jet budget.

Near the equator, the beta-plane approximation writes $f\simeq\beta y$, with $\beta=2\Omega/a$. Linearizing about rest and a uniform depth $H$, defining $h=H+\eta$, and neglecting nonlinear products gives

$$
\frac{\partial u}{\partial t}-\beta yv=-g\frac{\partial\eta}{\partial x}-\frac{u}{\tau_{\mathrm{drag}}},
$$

$$
\frac{\partial v}{\partial t}+\beta yu=-g\frac{\partial\eta}{\partial y}-\frac{v}{\tau_{\mathrm{drag}}},
$$

$$
\frac{\partial\eta}{\partial t}+H\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right)
=\frac{\eta_{\mathrm{eq}}-\eta}{\tau_{\mathrm{rad}}}.
$$

The gravity-wave speed is $c=\sqrt{gH}$ and the equatorial deformation length is

$$
L_{\mathrm{eq}}=\sqrt{\frac{c}{\beta}}.
$$

$L_{\mathrm{eq}}$ sets the meridional width of equatorially trapped waves. The crossing time $\tau_{\mathrm{wave}}\sim L/c$, for a relevant horizontal scale $L$, competes with the clocks in [[Radiative and advective timescales in exoplanet atmospheres]]. If radiation erases anomalies much faster than waves propagate, the thickness pattern stays close to local radiative equilibrium and the day–night contrast is large. If waves communicate pressure anomalies efficiently, they flatten the layer and reduce that contrast. Drag can inhibit this adjustment by damping the velocities required to redistribute mass.

## The standing Kelvin–Rossby pattern

Steady day–night forcing projects onto multiple equatorial wave modes. East of the substellar region, the response has a Kelvin-like component: it is concentrated near the equator, has primarily zonal flow, and extends eastward. West of the forcing, paired off-equatorial Rossby gyres appear. Their combination produces a characteristic chevron or northwest–southeast tilt in the Northern Hemisphere, with the opposite tilt in the Southern Hemisphere.

Those phase tilts matter dynamically. They imply correlations between zonal and meridional wind perturbations. The zonal-mean acceleration contains a convergence of eddy momentum flux,

$$
\frac{\partial\overline{u}}{\partial t}
\supset-\frac{\partial\overline{u'v'}}{\partial y},
$$

with spherical metric factors required away from a beta plane. For the forced standing pattern, the eddies transport eastward angular momentum toward the equator. This can accelerate an eastward equatorial jet. Vertical or layer-exchange momentum transports and drag oppose or redistribute that acceleration; a statistically steady jet requires a complete momentum balance, not merely the presence of tilted velocity arrows.

This mechanism is more precise than saying that air “flows from day to night and gets deflected.” Direct day-to-night overturning is part of the response, but superrotation requires up-gradient transport of angular momentum into the equatorial region. The Kelvin–Rossby geometry supplies that transport. Nonlinear shallow-water calculations show the jet modifying the wave field that drives it, so the final state need not resemble a weakly forced linear solution.

The model can also produce an eastward displacement of maximum thickness relative to the substellar point. That displacement is an analogue of a thermal hotspot offset, yet the equivalence is incomplete. Observations measure a wavelength-dependent, disk-integrated flux maximum through an [[Exoplanet phase curves|exoplanet phase curve]]. They do not measure $h$, and a bandpass may probe different pressures at different longitudes because opacity and clouds shift the photosphere. A simulated thickness maximum, a retrieved brightness map, and a measured orbital phase of peak light are three distinct objects.

## What the model assumes

The mathematical shallowness assumption is that the active layer's vertical scale is small compared with planetary radius, allowing horizontal motion on a curved surface to dominate. The model further assumes a hydrostatic-like relation in which horizontal gradients of $gh$ represent pressure-gradient forces. It is usually hydrostatic, one-layer, and vertically integrated; it cannot resolve vertical shear, multiple photospheres, convective plumes, or the pressure-dependent reversal of winds.

The layer is often interpreted as an atmosphere over a deep, inert reservoir. This gives the reduced gravity and exchange terms physical meaning, but the lower layer is not dynamically neutral in a real giant planet. Deep jets, magnetic coupling, wave absorption, and vertical mixing may all return momentum to the observable atmosphere. A one-and-a-half-layer model encodes these processes only through its boundary and damping choices.

Radiation is represented by Newtonian cooling: $h$ relaxes exponentially toward a prescribed $h_{\mathrm{eq}}$. Real radiative heating depends on wavelength, opacity, composition, clouds, stellar zenith angle, temperature, and pressure. Therefore $\tau_{\mathrm{rad}}$ is an effective parameter, generally varying with altitude and state. Likewise, Rayleigh drag is a closure, not necessarily a literal molecular friction. It may stand for turbulent mixing, shocks, Lorentz forces, or exchange with depth, although [[Magnetic drag in ultra-hot Jupiter atmospheres]] warns that magnetic forces are state-dependent and cannot generally be reduced to one universal braking time.

The idealization assumes a known rotation rate and a stationary forcing pattern. Exact synchronous rotation makes that plausible, but eccentricity, obliquity, nonsynchronous spin, libration, and stellar variability introduce moving or time-dependent forcing. Composition is absent except insofar as it changes chosen parameters. Clouds, photochemistry, latent heating, condensation, and molecular-weight gradients require additional tracers or equations. The basic model conserves potential vorticity only in the unforced, undamped limit; radiative mass exchange and drag create or destroy it.

Finally, linear analytic solutions assume perturbations small enough that $|\eta|\ll H$ and nonlinear advection is negligible. Strong irradiation can violate both conditions. Nonlinear numerical shallow-water models relax the small-amplitude assumption, but they retain the one-layer thermodynamic mapping and their chosen closures.

## A useful nondimensional reading

The model is best compared across regimes through ratios rather than isolated parameter values. The fractional forcing amplitude $\Delta h_{\mathrm{eq}}/H$ measures how strongly equilibrium thickness departs from the mean. A wave-to-radiation ratio $\tau_{\mathrm{wave}}/\tau_{\mathrm{rad}}$ asks whether the atmosphere can adjust dynamically before radiation restores the imposed contrast. A wave-to-drag ratio asks whether motion survives long enough to perform that adjustment. Rotation enters through $L/L_{\mathrm{eq}}$ and through a Rossby number $Ro=U/(fL)$ away from the equator.

These ratios organize qualitative regimes but do not by themselves retrieve atmospheric properties. Pérez-Becker and Showman used an analytic model to show how wave propagation, damping, and forcing strength govern day–night temperature differences. Their theory clarified why weak drag does not imply perfect redistribution: wave adjustment also needs mechanisms that generate the pressure and velocity phase relationships required for mass transport, and radiation can damp the response before adjustment completes. In strongly forced regimes, advection and nonlinear effects alter the scalings.

A parameter sweep therefore answers a conditional question: given the reduced equations and chosen $\tau_{\mathrm{rad}}$, $\tau_{\mathrm{drag}}$, $c$, rotation, and forcing, which circulation regime emerges? It does not prove that a planet occupies that regime. Connecting the sweep to a target requires radiative-transfer calculations, credible parameter mappings, and comparison with data through an observation operator.

## Measured, retrieved, and simulated claims

**Measured:** a telescope records time-tagged detector counts. After calibration and systematics treatment, an analysis may report a transit depth, eclipse depth, spectrum, or phase-dependent planet-to-star flux ratio with uncertainties. The longitude of a light-curve maximum is measured in orbital phase only after adopting a light-curve model; it is not a direct longitude–pressure temperature measurement.

**Retrieved:** a forward model and priors turn those fluxes into a posterior over temperatures, abundances, clouds, or low-order brightness-map coefficients. [[From light curves to atmospheric maps]] explains why disk integration leaves a null space. A retrieved eastward brightness offset is conditional on basis functions, regularization, orbital parameters, stellar correction, and radiative transfer. [[Atmospheric retrieval degeneracies]] applies even when a circulation-shaped prior is used.

**Simulated:** the shallow-water equations generate $h(\lambda,\phi,t)$ and $\mathbf{v}(\lambda,\phi,t)$ for specified parameters, initial conditions, numerics, and closures. A jet speed or chevron pattern is a model output. To compare it with data, $h$ must be related to a temperature or geopotential structure and then passed through wavelength-dependent radiative transfer and disk integration. Without that bridge, visual resemblance between a thickness map and a phase-curve map is suggestive, not a likelihood-based test.

**Interpreted:** when a measured phase offset agrees with the sign expected from an eastward jet, it may support the circulation picture alongside other evidence. Clouds can displace optical brightness westward or eastward without matching the thermal field; opacity can move the emitting pressure; chemistry can alter contribution functions. Thus “eastward hotspot implies superrotation” is a model-informed interpretation, not a direct wind measurement. High-resolution line shifts offer a different observable but still combine winds, rotation, orbital motion, chemistry, and limb weighting in [[High-resolution Doppler spectroscopy of exoplanet winds]].

Keeping these verbs separate prevents the reduced model from becoming an atmospheric map by rhetorical substitution.

## What shallow water is good for—and where it breaks

The model is excellent for mechanism tests. Researchers can turn off drag, change the radiative time, vary rotation, inspect momentum-flux convergence, and identify which terms sustain a jet. Linear solutions expose modal structure; nonlinear integrations show equilibration and feedback. Because it is cheap relative to a full GCM, shallow water supports broad parameter surveys and code comparisons. It also provides a conceptual bridge from the [[Primitive equations of planetary atmospheres]] to observed phase behavior.

It is weaker for quantitative spectra and pressure-dependent circulation. A hot Jupiter may have an eastward jet at some pressures, day-to-night flow aloft, drag at depth, nightside cloud formation, and molecular dissociation/recombination carrying energy. A terrestrial synchronously rotating planet may involve surface friction, a boundary layer, latent heat, topography, oceans, and atmospheric collapse. One thickness field cannot represent all of these simultaneously.

Even within its remit, numerical details matter. Hyperdiffusion, filters, grid geometry, shock treatment, forcing floors, and layer-exchange rules can influence equilibrated jets and small-scale variability. Resolution convergence and global mass, energy, and angular-momentum diagnostics are therefore part of verification. Agreement between two shallow-water solvers is evidence about the equations; agreement between shallow water and a GCM can establish a shared mechanism; neither is an observational detection.

## Why it matters

Tidally locked circulation is often narrated through pictures: hot air rises on the dayside, flows toward the nightside, and rotation pushes the hotspot east. Shallow-water theory replaces that loose story with a testable momentum budget. A stationary thermal forcing excites a standing Kelvin–Rossby response; the resulting velocity tilts converge eastward momentum at the equator; damping and layer exchange close the balance. The same equations reveal when fast radiation or strong drag prevents wave adjustment and preserves a large day–night contrast.

That explanatory compression is valuable precisely because it is incomplete. It gives observers and GCM modelers a shared language for asking whether a claimed jet is dynamically plausible, which timescales should matter, and which signatures are non-unique. Used carefully, shallow water is a mechanism microscope. Used carelessly, it turns an elegant analogue into a fictional weather report.

## Sources

- [Showman & Polvani (2011), “Equatorial Superrotation on Tidally Locked Exoplanets,” *The Astrophysical Journal*](https://doi.org/10.1088/0004-637X/738/1/71) — primary derivation of the forced, damped shallow-water wave response and eddy momentum convergence mechanism.
- [Pérez-Becker & Showman (2013), “Atmospheric Heat Redistribution on Hot Jupiters,” *The Astrophysical Journal*](https://doi.org/10.1088/0004-637X/776/2/134) — primary analytic treatment of day–night contrast across radiative, drag, wave, and forcing regimes.
- [Showman et al. (2013), “Atmospheric Circulation of Exoplanets,” in *Comparative Climatology of Terrestrial Planets*](https://doi.org/10.2458/azu_uapress_9780816530595-ch12) — review connecting shallow-water mechanisms to exoplanet circulation regimes.
- [Matsuno (1966), “Quasi-Geostrophic Motions in the Equatorial Area,” *Journal of the Meteorological Society of Japan*](https://doi.org/10.2151/jmsj1965.44.1_25) — primary equatorial-wave eigenmode foundation.
- [Gill (1980), “Some Simple Solutions for Heat-Induced Tropical Circulation,” *Quarterly Journal of the Royal Meteorological Society*](https://doi.org/10.1002/qj.49710644905) — primary forced, damped tropical-wave analogue underlying the Kelvin–Rossby interpretation.

## Open questions

- Which observation operators let a hierarchy of shallow-water, primitive-equation, and radiative-transfer models be compared to the same phase-curve data without conflating thickness with brightness?
- How robust is equatorward eddy momentum transport when vertical shear, cloud radiative feedback, molecular dissociation, or state-dependent magnetic forces are included?
- Which combinations of phase curves, eclipse mapping, and high-resolution spectra can distinguish an eastward jet from cloud- or opacity-driven brightness offsets?
- How should mass and momentum exchange with a deep layer be parameterized for rocky planets, gas giants, and brown dwarfs without assigning the same physical meaning to Rayleigh drag?
- Where do nonlinear shocks or order-unity thickness variations make the one-layer system qualitatively misleading rather than merely approximate?
