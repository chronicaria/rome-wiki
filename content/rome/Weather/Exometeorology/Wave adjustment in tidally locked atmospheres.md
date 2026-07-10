---
title: Wave adjustment in tidally locked atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [weather, exometeorology, atmospheric-dynamics, waves, tidally-locked-planets]
---

Planetary-scale waves redistribute pressure, mass, and entropy across a permanently forced day–night pattern; whether they succeed before radiation or drag damps them largely controls the thermal contrast of a tidally locked atmosphere.

Up: [[Exometeorology research frontier 2026]]

Wave adjustment is the missing physics in the popular statement that winds erase a day–night temperature contrast when an “advective time” is shorter than a radiative time. Winds are not an externally prescribed conveyor belt. They are accelerated by the same pressure gradients whose removal one is trying to predict. A dynamically closed explanation therefore asks how a heated atmospheric column launches disturbances, how rapidly those disturbances communicate the anomaly, and whether radiation, friction, rotation, or nonlinear flow interrupts that communication.

The answer is regime-dependent. In hot-Jupiter theory, equatorial Kelvin and Rossby responses to stationary day–night heating are central. In slowly rotating terrestrial atmospheres, a weak-temperature-gradient or day-to-night overturning picture can be more useful above the boundary layer. Both are expressions of a broader adjustment principle: gravity and stratification allow pressure anomalies to generate motion, while vertical motion and mass divergence alter the temperature field. This note develops that common core, then states where the analogy stops.

## What is being adjusted?

Consider a synchronously rotating planet with a circular, zero-obliquity orbit. Stellar heating is stationary in longitude, maximizing near the substellar point and vanishing on the nightside. The radiative-equilibrium temperature field $T_{\rm eq}$ can therefore have an order-unity hemispheric contrast. The realized field $T$ is smaller in amplitude if dynamics transports energy or if motion produces adiabatic heating and cooling that offsets the imposed radiative tendency.

A useful nondimensional measure is

$$
A \equiv \frac{\Delta T}{\Delta T_{\rm eq}},
$$

where $\Delta T$ and $\Delta T_{\rm eq}$ must refer to the same pressure level or vertically defined quantity. $A\ll1$ denotes efficient adjustment; $A\sim1$ denotes a temperature pattern close to radiative equilibrium. It is not automatically an observable. A phase curve measures wavelength-dependent disk brightness, whose contribution function, clouds, and chemistry can make its day–night contrast differ from the gas-temperature contrast at a named pressure.

Heating produces horizontal thickness and pressure gradients. In a hydrostatic atmosphere,

$$
\frac{\partial p}{\partial z}=-\rho g,
$$

so a warmer column has a larger scale height and different geopotential on pressure surfaces. Horizontal geopotential gradients accelerate air. Divergence, convergence, and vertical motion then redistribute mass and potential temperature. The restoring forces are gravity and, for stratified motion, buoyancy. The resulting disturbances include gravity waves and, on a rotating sphere near the equator, Kelvin- and Rossby-like modes.

“Wave adjustment” does not mean that a freely propagating sinusoid literally carries all dayside heat to the nightside. It means the atmosphere responds to a pressure anomaly through wave-capable dynamics, establishing a global pattern of velocities, geopotential, and vertical motion. Under steady forcing the response can be stationary in the rotating frame even though its dynamical communication is wave-like.

## The wave clock

In a one-layer shallow-water model, a representative gravity-wave speed is

$$
c=\sqrt{gH},
$$

with equivalent depth $H$. The time to communicate across a planetary scale $L$ is

$$
\tau_{\rm wave}=\frac{L}{c}.
$$

In a continuously stratified atmosphere, the analogous speed depends on vertical mode and static stability. A common order-of-magnitude choice for a first baroclinic mode is $c\sim NH$, where $N$ is buoyancy frequency and $H$ a vertical scale, giving $\tau_{\rm wave}\sim L/(NH)$. These are not interchangeable plug-in formulae: the equivalent depth or vertical mode must match the circulation being modeled.

Composition enters this clock. For an ideal gas the pressure scale height is $H_p=RT/(\mu g)$, so higher mean molecular mass $\mu$ generally reduces characteristic horizontal wave speeds when other quantities are held comparable. Zhang and Showman’s idealized GCM experiments found larger day–night contrasts, smaller eastward phase offsets, and weaker, narrower jets as molecular weight increased. That result is a modeled regime trend, not a composition retrieval from any one observed phase curve.

Rotation supplies additional scales. Near the equator, $\beta=2\Omega/a$, and an equatorial deformation scale is approximately

$$
L_{\rm eq}=\sqrt{\frac{c}{\beta}}.
$$

If $L_{\rm eq}$ is comparable to the planetary radius $a$, the forced Kelvin–Rossby pattern can span much of the globe. If it is much smaller, the equatorial response is more confined and multiple jets or stronger rotational control can emerge. Away from the equator a familiar deformation scale is $L_D\sim c/f$, with Coriolis parameter $f$. Thus rotation changes the geometry and momentum balance of adjustment rather than merely adding another independent stopwatch.

## Why comparing advection and radiation is incomplete

The heuristic advective time

$$
\tau_{\rm adv}=\frac{L}{U}
$$

requires a wind speed $U$. But $U$ is an output of pressure-gradient acceleration, Coriolis deflection, drag, wave–mean-flow interaction, and nonlinear advection. Choosing $U$ first and predicting $\Delta T$ from it is circular unless the wind is independently constrained.

Perez-Becker and Showman demonstrated this explicitly with a forced two-layer shallow-water model. Their transition between small and large day–night contrasts was controlled by the planetary wave time. In a weak-drag limit, their scaling placed the transition near

$$
\tau_{\rm wave}\sim\sqrt{\frac{\tau_{\rm rad}}{\Omega}},
$$

rather than simply $\tau_{\rm rad}\sim\tau_{\rm adv}$. They also expressed the transition as a comparison between radiative time and the vertical time required to move a parcel through the day–night thickness difference. The two statements expose the same mechanism: waves generate divergence and vertical motion, and the associated adiabatic temperature tendency must act before radiation restores the imposed equilibrium contrast.

Komacek and Showman extended the reasoning in three-dimensional primitive-equation models. A schematic thermodynamic balance is

$$
\mathbf{u}\cdot\nabla T + w\left(\frac{\partial T}{\partial z}+\frac{g}{c_p}\right)
\sim \frac{T_{\rm eq}-T}{\tau_{\rm rad}}.
$$

For large-scale stratified flow, horizontal divergence links $w$ to the horizontal velocity field. Wave-driven pressure gradients therefore couple momentum and thermodynamics: motion does not merely move existing hot air; it produces vertical adiabatic tendencies that reduce—or fail to reduce—the radiative-equilibrium anomaly.

The lesson is not that advection is irrelevant. Horizontal enthalpy flux is physically real and essential to the energy budget. The lesson is that $L/U$ is usually diagnostic after a circulation solution or wind constraint exists, whereas $\tau_{\rm wave}$ can participate in a predictive theory because its speed is tied to gravity and stratification.

## Radiation and drag can stop adjustment

Radiative relaxation is commonly represented as

$$
\left.\frac{DT}{Dt}\right|_{\rm rad}=\frac{T_{\rm eq}-T}{\tau_{\rm rad}}.
$$

If radiative damping acts quickly relative to the dynamically relevant adjustment time, a disturbance loses its thermal or thickness anomaly before communicating it globally. The atmosphere then remains closer to local radiative equilibrium and $A$ grows. Hotter photospheric layers often have shorter radiative times, helping explain why highly irradiated hot-Jupiter models and observations tend toward larger brightness-temperature contrasts. Pressure matters: deeper layers usually possess greater mass and longer radiative memory, so the contrast can change strongly with wavelength as different contribution functions sample different pressures.

Linear drag is often written

$$
\left.\frac{D\mathbf{u}}{Dt}\right|_{\rm drag}=-\frac{\mathbf{u}}{\tau_{\rm drag}}.
$$

Strong drag prevents pressure gradients from building the velocities and divergence required for adjustment. Komacek and Showman found drag especially consequential when it acts faster than Coriolis turning. But $\tau_{\rm drag}$ is a model parameter, not a universal material property. It may represent boundary-layer friction on a rocky planet, unresolved turbulent or numerical dissipation, or hypothesized magnetic effects in a partially ionized hot atmosphere. These mechanisms have different vertical and spatial structures. A scalar Rayleigh drag that reproduces a phase amplitude does not identify which physical mechanism operated.

Radiation and drag also alter the forced wave geometry. Damping changes phase relations among pressure and velocity perturbations; those phase relations control eddy momentum fluxes. Hence damping affects both thermal adjustment and the emergence of [[Equatorial superrotation]].

## Kelvin–Rossby response and superrotation

Stationary day–night heating near the equator excites an eastward-extended Kelvin-like response and off-equatorial Rossby gyres. Showman and Polvani showed that the Rossby components acquire velocity tilts that transport eastward angular momentum toward the equator. Convergence of this eddy momentum accelerates an eastward equatorial jet. The jet can advect the hottest region east of the substellar point, while the waves and associated overturning influence the day–night contrast.

Thermal adjustment and superrotation are therefore connected but not identical. A low contrast does not require a strong zonal jet: a direct day-to-night overturning circulation can also redistribute energy. Conversely, a jet’s existence does not guarantee a large eastward thermal offset. Rapid radiation, clouds, drag, magnetic stresses, or vertically varying contribution functions can reduce or reverse the apparent offset. Wave adjustment concerns the response that weakens pressure and temperature anomalies; superrotation concerns the angular-momentum convergence that maintains an equatorial mean flow.

This distinction prevents two common errors. First, an eastward brightness maximum is evidence consistent with eastward transport, not a direct wind-vector measurement. Second, a near-zero offset is not proof that waves are absent. A strong stationary wave response can coexist with a small observed offset if radiative damping or opacity structure places the photosphere in a different regime.

## Slowly rotating terrestrial atmospheres

For temperate planets orbiting M dwarfs, synchronous periods may be many days rather than the few days typical of hot Jupiters. Weak rotational constraint above the boundary layer can support a weak-temperature-gradient (WTG) regime: gravity waves act rapidly enough that large free-tropospheric horizontal temperature gradients cannot persist. The leading balance then links radiative heating to vertical motion and adiabatic cooling on the dayside, with descent and adiabatic warming elsewhere.

Mills and Abbot tested a low-order WTG model against an Earth-like, dry, one-bar tidally locked GCM. Their result supports WTG as an efficient member of a model hierarchy for that case; it does not establish horizontally uniform temperature at the surface or in every composition and rotation regime. Boundary layers can retain strong gradients because surface exchange and friction change the balance. Condensation, clouds, latent heating, topography, ocean heat transport, and nightside atmospheric collapse introduce further processes absent from a dry WTG reduction.

Wordsworth’s rocky-planet experiments likewise caution against treating free-atmospheric wave adjustment as the whole surface-climate problem. In his modeled parameter range, boundary-layer transport was central to the planetary energy balance and atmospheric stability. A free atmosphere can adjust efficiently aloft while a cold surface remains vulnerable to condensation. The relevant habitability or collapse question therefore requires surface pressure, infrared opacity, boundary-layer coupling, condensable thermodynamics, and geothermal or oceanic fluxes—not only $\tau_{\rm wave}$.

The hot-Jupiter and terrestrial pictures share hydrostatic pressure gradients, stratification, waves, vertical motion, radiation, rotation, and friction. They differ in lower boundary, optical thickness, condensables, radiative regime, and often rotation. A scaling imported across those families should be treated as a hypothesis until checked with an appropriate hierarchy of models.

## From dynamics to observations

Wave adjustment is inferred, not imaged. Thermal [[Exoplanet phase curves]] constrain wavelength-dependent phase amplitude and peak offset. Secondary-eclipse spectra constrain dayside emission, while transmission spectra probe a terminator with different geometry. High-resolution Doppler spectroscopy can constrain disk-integrated line shifts and broadening. None directly returns the three-dimensional geopotential and velocity fields that define wave adjustment.

The strongest evidence is comparative and model-conditioned. Komacek, Showman, and Tan compared analytic scaling and double-gray GCM results with hot-Jupiter phase curves, finding that increasing irradiation produces an increasing fractional day–night brightness contrast in broad trend. Yet matching individual planets required assumptions about photospheric pressure, drag, metallicity, and clouds. This is exactly the evidential boundary: the population trend supports the relevance of radiative damping and wave adjustment, while any one planet remains degenerate.

Useful tests should seek multiple, pressure-resolved consequences:

- Does day–night contrast increase toward wavelengths sampling lower pressure, as shorter radiative time suggests?
- Do amplitude and offset covary in the direction predicted by one circulation regime?
- Are Doppler shifts consistent with the jet or day-to-night flow required by the thermal interpretation?
- Does temporal variability exceed what a steady forced-wave pattern predicts?
- Can the same composition, opacity, cloud, and drag assumptions fit emission, transmission, and phase-resolved spectra?

Even these tests do not isolate “a wave time” directly. Clouds can move the emitting surface; dissociation and recombination can transport latent chemical energy in ultra-hot Jupiters; molecular weight changes scale height and wave speed; and internal heat can warm the nightside. [[Atmospheric retrieval degeneracies]] therefore remain part of the dynamical inference.

## Evidence boundaries

**Established fluid dynamics:** horizontal pressure gradients in a stratified, rotating atmosphere excite wave-capable motion; gravity-wave propagation, Coriolis effects, radiation, and drag enter the adjustment problem. These statements follow from the governing equations and terrestrial/geophysical theory.

**Robust within idealized model families:** forced shallow-water and primitive-equation calculations show transitions from weak to strong day–night contrast as radiative or drag damping overwhelms wave adjustment. They also show standing Kelvin–Rossby patterns and equatorward eddy momentum transport under broad hot-Jupiter conditions.

**Model-dependent extrapolation:** a particular equivalent depth, radiative time, drag law, cloud scheme, or photospheric pressure can shift quantitative thresholds. Shallow-water models omit vertical structure; Newtonian cooling and gray radiation compress complex radiative transfer; idealized GCMs may omit magnetic induction, cloud microphysics, or nonequilibrium chemistry.

**Observed but not uniquely interpreted:** infrared phase curves establish brightness contrasts and offsets for particular wavelength bands. They do not uniquely establish wind speeds, wave amplitudes, drag mechanisms, or bolometric heat-transport efficiency.

## Why it matters

Wave adjustment provides a causal bridge from planetary parameters to remotely measured climate patterns. It explains why hotter, more rapidly damped photospheres can retain larger day–night contrasts, why composition and rotation alter circulation geometry, and why a guessed advective time is not a predictive theory. It also organizes model design: a hierarchy can begin with shallow-water or WTG calculations, test scaling in idealized three-dimensional models, then add nongray radiation, clouds, chemistry, a surface, or magnetohydrodynamics only where the question requires them.

For rocky planets, adjustment helps determine whether heat reaches a permanent nightside, but it cannot by itself decide atmospheric collapse or habitability. For giant planets, it links phase curves to circulation while forcing an honest separation between brightness maps and dynamical maps. Across both regimes, the concept turns “heat redistribution” from a fitted efficiency factor into a competition among identifiable physical processes.

## Sources

- Perez-Becker, D., and Showman, A. P. (2013), “Atmospheric Heat Redistribution on Hot Jupiters.” Primary shallow-water scaling theory for wave-controlled day–night contrast: https://arxiv.org/abs/1306.4673
- Komacek, T. D., and Showman, A. P. (2016), “Atmospheric Circulation of Hot Jupiters: Dayside–Nightside Temperature Differences.” Primary three-dimensional analytic scaling and numerical tests: https://arxiv.org/abs/1601.00069
- Komacek, T. D., Showman, A. P., and Tan, X. (2017), “Atmospheric Circulation of Hot Jupiters: Dayside–Nightside Temperature Differences. II. Comparison with Observations.” Primary theory–observation comparison: https://arxiv.org/abs/1610.03893
- Showman, A. P., and Polvani, L. M. (2011), “Equatorial Superrotation on Tidally Locked Exoplanets.” Primary Kelvin–Rossby and wave–mean-flow mechanism: https://arxiv.org/abs/1103.3101
- Mills, S. M., and Abbot, D. S. (2013), “Utility of the Weak Temperature Gradient Approximation for Earth-Like Tidally Locked Exoplanets.” Primary WTG/GCM comparison: https://arxiv.org/abs/1308.1670
- Wordsworth, R. (2015), “Atmospheric Heat Redistribution and Collapse on Tidally Locked Rocky Planets.” Primary GCM and scaling study emphasizing boundary-layer control: https://arxiv.org/abs/1412.5575
- Zhang, X., and Showman, A. P. (2017), “Effects of Bulk Composition on the Atmospheric Dynamics on Close-in Exoplanets.” Primary idealized GCM study of molecular-weight and heat-capacity effects: https://arxiv.org/abs/1607.04260
- Koll, D. D. B., and Abbot, D. S. (2015), “Deciphering Thermal Phase Curves of Dry, Tidally Locked Terrestrial Planets.” Primary dimensional analysis and idealized GCM tests of observability: https://arxiv.org/abs/1412.8216

## Open questions

- Which observable combination most cleanly separates short radiative time from strong drag or high-altitude cloud opacity?
- How should the wave-adjustment scaling be generalized when hydrogen dissociation and recombination carry substantial energy?
- When do magnetic stresses reshape stationary waves rather than behaving approximately like linear drag?
- Which vertical mode supplies the most relevant equivalent depth at each wavelength-dependent photosphere?
- How far does WTG reasoning survive moist convection, patchy clouds, ocean transport, and nightside condensation on temperate rocky planets?
- Can repeated phase-resolved spectra detect departures from a stationary forced-wave pattern strongly enough to distinguish climate from weather?
