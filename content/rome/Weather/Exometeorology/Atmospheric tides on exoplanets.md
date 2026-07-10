---
title: Atmospheric tides on exoplanets
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-dynamics, tides, waves]
---

Atmospheric tides are global, periodically forced waves whose phase lag redistributes heat and angular momentum; they can alter winds, observables, and even a terrestrial planet's spin without implying an ocean tide.

## What makes a tide atmospheric

An atmospheric tide is a coherent response to forcing at a harmonic of the orbital day, rotation period, or a companion's gravitational cycle. The word *tide* describes the forcing geometry and frequency, not the material carrying the wave. On Earth, absorption of sunlight by water vapor, ozone, clouds, and the surface excites thermal tides, while the Moon and Sun also exert much weaker direct gravitational forcing on atmospheric mass. On an exoplanet, irradiation can be so strong and spatially organized that the thermal component dominates the atmospheric response.

This distinguishes a tide from arbitrary variability. A storm may recur roughly once per rotation because it is carried through view, but a tide is phase-coherent with an external forcing frequency. The distinction matters for [[What counts as weather on an exoplanet]]: a periodic light curve alone does not show a tidal wave. One must exclude orbital viewing geometry, stellar variability, instrumental drift, and a stationary brightness pattern before attributing residual phase-locked structure to atmospheric dynamics.

Write a perturbation field as

$$
q'(\lambda,\phi,z,t)=\Re\left\{\hat q(\phi,z)e^{i(m\lambda-\sigma t)}\right\},
$$

where $m$ is zonal wavenumber and $\sigma$ is forcing frequency in an inertial description. The atmosphere responds at the intrinsic frequency $\hat\sigma=\sigma-m\Omega$, with $\Omega$ the planetary rotation rate. This Doppler shift is fundamental: the same stellar heating pattern can be slowly varying near synchronous rotation yet rapidly varying for a fast rotator. Background zonal wind adds another Doppler shift and can create critical levels where the intrinsic frequency approaches zero.

## Thermal forcing and phase lag

The substellar point supplies a moving heat source on an asynchronous planet and a stationary one on a synchronously rotating planet. Expanding that heating in longitude and time produces diurnal, semidiurnal, and higher harmonics. Each harmonic drives pressure and temperature perturbations. Because radiation, turbulence, convection, and wave propagation take time, the pressure bulge is generally displaced from the line joining star and planet.

That displacement creates a torque. If the mass bulge led or lagged the star by exactly zero degrees, the stellar gravitational pull would pass through it symmetrically and produce no net spin torque. Dissipation creates a quadrature component and therefore a nonzero torque. The sign depends on forcing frequency, vertical structure, and damping. Atmospheric thermal tides may oppose the solid-body gravitational tide that tends to synchronize a close-in terrestrial planet.

A useful schematic thermodynamic balance is

$$
\frac{DT'}{Dt}+w'\left(\frac{d\bar T}{dz}+\frac{g}{c_p}\right)
=\frac{Q'}{c_p}-\frac{T'}{\tau_{\rm rad}},
$$

coupled to momentum and mass continuity. Newtonian cooling with timescale $\tau_{\rm rad}$ is not a complete radiative-transfer model, but it makes the phase-lag mechanism visible. Very rapid cooling keeps temperature close to instantaneous radiative equilibrium and may suppress a large displaced mass anomaly. Very weak damping permits waves to propagate and interference to matter. Maximum torque often occurs between those limits, and resonances can sharpen the frequency response.

## The vertical structure controls the torque

Stable stratification supports internal gravity waves. In a strongly stratified atmosphere, heating may launch vertically propagating waves that transport energy and momentum away from the forcing region rather than maintaining a deep, coherent pressure bulge. In convective or weakly stratified layers, the response can behave more like a damped, column-integrated mass redistribution. Auclair-Desrotour and collaborators showed that this distinction changes both the magnitude and frequency dependence of thermal-tide torque near synchronization.

The relevant comparison involves the Brunt–Väisälä frequency $N$, forcing frequency, rotation, radiative damping, and vertical wavelength. The traditional approximation neglects the horizontal component of planetary rotation in the vertical momentum balance. It can be appropriate for thin atmospheres in particular frequency regimes, but it is not universally safe for slowly rotating planets or low-frequency tides. A model that assumes it should state the scale analysis rather than treating Hough modes as automatically exact.

Boundary conditions also matter. A rocky surface can store heat, impose drag, and reflect waves; an ocean changes thermal inertia and coupling; a giant planet lacks a solid lower boundary and may couple the observable atmosphere to a deep convective interior. Cloud absorption shifts where stellar energy is deposited. Thus two planets receiving the same flux need not produce comparable tidal torques.

## Relation to equatorial waves and superrotation

Atmospheric tides overlap mathematically with the equatorial wave response described in [[Shallow-water models of tidally locked atmospheres]]. Day–night heating on a synchronously rotating planet excites standing Kelvin- and Rossby-like structures. Their tilted velocity and pressure fields can converge eastward angular momentum onto the equator and help maintain [[Equatorial superrotation]]. In that broad sense, the stationary planetary-scale response is a zero-frequency thermal tide in the rotating frame.

It is still useful to separate two questions. The circulation question asks how a phase-locked heating pattern produces jets and heat transport for a specified rotation. The spin-evolution question asks how the atmosphere's mass quadrupole torques the solid planet and changes that rotation. A GCM may answer the first while imposing a fixed rotation rate and therefore not answer the second. Conversely, a linear torque model may predict asynchronous equilibria without resolving nonlinear jets or clouds.

Wave momentum deposition occurs where tides dissipate, break, or meet critical levels. The zonal-mean acceleration depends on the divergence of eddy momentum flux, schematically

$$
\frac{\partial \bar u}{\partial t}\sim
-\frac{1}{a\cos^2\phi}\frac{\partial}{\partial\phi}
\left(\overline{u'v'}\cos^2\phi\right)
-\frac{1}{\rho}\frac{\partial(\rho\overline{u'w'})}{\partial z}.
$$

The tidal temperature pattern is therefore not merely a passive brightness signature. Its waves can restructure the mean flow that subsequently Doppler-shifts and filters them. This feedback is one reason linear theory supplies mechanisms and scaling laws rather than a unique weather forecast.

## Rotation equilibria and climate implications

Solid tides usually drive a close-in rocky planet toward a spin-orbit resonance, often synchronous rotation in idealized circular cases. A sufficiently strong thermal atmospheric torque can balance the solid-tide torque at an asynchronous rotation rate. Venus is the Solar System warning that atmospheric and solid torques can compete, although its particular history cannot simply be transplanted to an exoplanet.

For terrestrial planets around low-mass stars, the result depends on atmospheric mass, stellar spectrum, absorption profile, surface pressure, stratification, and uncertain solid rheology. A dense atmosphere intercepts more energy and contains a larger redistributable mass, but stable stratification may reduce the effective torque. The solid-tide law is itself uncertain because mantle viscosity and frequency dependence are poorly known. Claims that a particular planet “will avoid tidal locking” are therefore forecasts conditional on both atmospheric and interior models.

Rotation state then feeds back on climate. It sets the Coriolis parameter, deformation radius, forcing frequency, and length of the solar day. An asynchronous equilibrium can move the substellar heating pattern, changing cloud organization and nightside cold-trap risk. Yet the causal chain must remain explicit: a simulated atmospheric torque changes a modeled spin equilibrium; that equilibrium changes a simulated circulation; neither step is a direct observation.

## What could be observed

Most exoplanet observations integrate radiation over an unresolved disk. Thermal tides might influence multiwavelength phase curves through periodic temperature and opacity perturbations, transmission spectra through terminator asymmetry, or high-resolution spectra through phase-dependent winds. These are indirect effects. A phase-curve harmonic at twice the orbital frequency can also arise from ellipsoidal stellar variation, reflected light, beaming, or a static planetary brightness distribution.

A credible inference should therefore separate five levels:

1. **Measured:** a repeatable harmonic in calibrated flux or line shape.
2. **Retrieved:** a brightness or temperature pattern under a radiative model.
3. **Simulated:** a tidal mode produced under specified forcing and damping.
4. **Interpreted:** identification of that mode as the cause of the measurement.
5. **Forecast:** an effect on long-term spin or climate.

The strongest tests would combine stable phase over many orbits, multiple wavelengths probing different heights, and a model that predicts relative phase and amplitude across those channels. Spectral Doppler information could test the associated velocity field. Even then, [[Contribution functions in exoplanet spectra]] are broad and location-dependent, so “height-resolved tide” is an inference rather than a direct slice through the atmosphere.

Temporal coherence has to be defined carefully. A forced tide should retain a predictable phase relative to the forcing, but its amplitude can change as clouds, mean winds, or stellar irradiation change. Folding many orbits increases signal-to-noise while erasing such evolution. Conversely, analyzing individual orbits preserves variability but increases the chance that correlated detector or stellar noise resembles a harmonic. A strong study should show both the folded detection and the distribution of orbit-by-orbit amplitudes and phases.

Different tide families can share the same frequency. Their horizontal eigenfunctions, vertical phase progression, and velocity–temperature phase relationships offer additional discriminants. Disk integration suppresses some symmetries and mixes others, so observability should be calculated using the actual inclination and bandpass. A mode with large local temperature perturbation may nearly cancel over the disk; a smaller asymmetric mode may dominate the light curve.

For nontransiting planets, reflected-light phase curves could contain atmospheric-tide effects through clouds or pressure variations, but the unknown radius and scattering phase function introduce further degeneracy. Direct imaging over many epochs may eventually sample rotation and orbital phase separately. Until then, a fitted harmonic is best described phenomenologically before a dynamical identity is assigned.

## Solar-System analogues and their limits

Earth demonstrates that solar heating can excite migrating and nonmigrating atmospheric tides. Satellite temperature and wind measurements resolve their vertical and latitudinal structure, something unavailable for an unresolved exoplanet. Venus demonstrates that a massive atmosphere and thermally forced waves can participate in angular-momentum exchange and spin evolution. Mars shows strong thermal tides shaped by dust and topography. Giant planets support global modes and wave–mean-flow interactions without a solid surface.

These analogues identify mechanisms, not parameter substitutions. Earth's ozone heating profile, Venus's clouds and slow rotation, Mars's thin dusty air, and the deep interiors of giants occupy different regimes. An exoplanet study should state which nondimensional similarities justify the analogy: ratios of forcing to rotation, radiative to wave time, scale height to radius, stratification to frequency, and atmospheric to planetary angular momentum. Similar equilibrium temperature alone is not enough.

Topography and land–ocean contrast generate nonmigrating tides on terrestrial planets. Those components do not follow the apparent solar motion in the same simple way and can create stationary longitudinal structure. Detecting them remotely would be extremely challenging, but omitting them from a spin-torque model may matter if surface heating is strong. A globally uniform slab surface is therefore a controlled assumption, not the generic rocky-planet lower boundary.

## Conservation and falsification

Because tides exchange angular momentum among waves, mean flow, atmosphere, surface, and orbit, a convincing simulation should close an angular-momentum budget. A changing global atmospheric angular momentum must be balanced by boundary torque, external gravitational torque, or numerical error. Sponge layers and drag schemes deserve explicit entries in that budget. Otherwise, a model may produce the correct-looking phase lag for the wrong reason.

Several falsification tests are inexpensive. Reverse the forcing frequency and check the expected symmetry of the linear response. Reduce forcing amplitude and verify linear scaling before interpreting a linear mode. Vary damping and vertical resolution to see whether resonant peaks converge. Turn off the mass-quadrupole calculation while retaining heating to separate circulation effects from spin torque. Compare a forced solution with free modes initialized at similar frequency to test phase locking.

Nonlinearity becomes important when wave velocities, temperature perturbations, or critical-layer absorption invalidate small-amplitude assumptions. Harmonics can then be generated internally, shocks or breaking can dissipate momentum, and the mean flow can shift the resonance. A linear theory may still organize the response, but quantitative torque should be checked against a nonlinear model over the relevant parameter range.

## Modeling checklist

A useful tidal calculation states the frame and forcing frequency; separates thermal from gravitational forcing; specifies background winds and stratification; resolves or parameterizes radiative and frictional damping; tests lower and upper boundary conditions; and checks angular-momentum conservation. For spin evolution it must also calculate the quadrupole phase lag and couple it to a stated solid-tide model. For observability it must pass the three-dimensional state through radiative transfer and the actual viewing geometry.

Resolution tests are important because vertical wave propagation, critical layers, and numerical diffusion can determine where momentum is deposited. A convenient Rayleigh drag or sponge layer may prevent reflection but also create the torque being diagnosed. The lessons of [[Numerical artifacts and false atmospheric variability]] apply directly: phase coherence and a visually plausible wave do not establish numerical convergence.

## Sources

- Auclair-Desrotour, P., Mathis, S., & Laskar, J. (2017), [Atmospheric thermal tides and planetary spin I](https://arxiv.org/abs/1709.10148).
- Auclair-Desrotour, P., Laskar, J., & Mathis, S. (2017), [Atmospheric thermal tides and planetary spin II](https://arxiv.org/abs/1710.07222).
- Showman, A. P., & Polvani, L. M. (2011), [Equatorial superrotation on tidally locked exoplanets](https://doi.org/10.1088/0004-637X/738/1/71).
- Chapman, S., & Lindzen, R. S. (1970), *Atmospheric Tides*.

## Open questions

- Which terrestrial-exoplanet atmospheres are massive and weakly stratified enough for thermal tides to compete with uncertain solid tides?
- Can multiwavelength phase stability distinguish a free atmospheric mode from forced tides and static longitudinal structure?
- How strongly do clouds, convection, and surface thermal inertia shift the torque near synchronization?
