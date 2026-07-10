---
title: Atmospheric circulation on tidally locked planets
created: 2026-07-09
source: llm
status: seed
tags: [exometeorology, exoplanets, atmospheric-dynamics, tidal-locking, general-circulation-models, phase-curves]
as_of: 2026-07-09
desk: Exometeorology desk
review_after: 2027-01-09
---
Permanent stellar forcing does not imply a motionless atmosphere: on a synchronously rotating planet, the day–night heating contrast excites planetary waves, overturning flow, and often equatorial jets whose observable signatures remain model-dependent.

Up: [[Exometeorology research frontier 2026]]

## Why it matters

Many close-in planets are expected to rotate synchronously, presenting approximately the same hemisphere to their star. The forcing is fixed in longitude: maximum irradiation near the substellar point, none on the nightside. That geometry makes circulation unlike Earth's moving diurnal heating, but it does not determine a unique wind pattern. Rotation, gravity, radius, atmospheric mass, opacity, stratification, friction, clouds, chemistry, and internal heat decide how the atmosphere answers the forcing.

Circulation is also one of the main bridges between an unresolved light curve and a claim about exoplanet weather. A thermal phase maximum before secondary eclipse may be consistent with an eastward-displaced hot region; it is not a measured eastward wind. The disciplined chain is: flux is **measured**, brightness or temperature structure is **retrieved**, winds are **simulated**, a dynamical explanation is **interpreted**, and a new observable is **forecast**. See [[Exoplanet phase curves]] and [[From light curves to atmospheric maps]] for the information lost before dynamics is inferred.

## What synchronous rotation fixes—and what it does not

In exact 1:1 spin–orbit resonance on a circular, zero-obliquity orbit, the substellar longitude is stationary in the planet's rotating frame. The rotation frequency equals the mean motion, $\Omega=n=2\pi/P$. Real planets may librate, have eccentricity or obliquity, occupy another spin–orbit resonance, or rotate pseudosynchronously; “tidally locked” should not be used as a synonym for every slowly rotating close-in planet.

The stellar heating pattern supplies energy but not a prescribed wind. In a rotating frame, a hydrostatic primitive-equation model schematically obeys

$$
\frac{D\mathbf v}{Dt}+f\,\hat{\mathbf k}\times\mathbf v
=-\nabla_p\Phi+\mathbf F,
$$

where $\mathbf v$ is horizontal velocity, $f=2\Omega\sin\phi$ is the Coriolis parameter, $\Phi$ is geopotential, and $\mathbf F$ represents drag and unresolved momentum transport. Thermodynamic evolution may be idealized as

$$
\frac{DT}{Dt}-\frac{\kappa T}{p}\frac{Dp}{Dt}
=\frac{T_{\rm eq}(\lambda,\phi,p)-T}{\tau_{\rm rad}}+Q',
$$

with a prescribed radiative-equilibrium field $T_{\rm eq}$, radiative relaxation time $\tau_{\rm rad}$, and additional heating $Q'$. This Newtonian-cooling form is a model device, not a universal radiative law. Full general circulation models (GCMs) instead couple dynamics to wavelength-dependent radiative transfer, sometimes clouds and chemistry.

Several timescales organize the response. An advective crossing estimate is $\tau_{\rm adv}\sim L/U$, for characteristic length $L$ and speed $U$. Wave adjustment uses $\tau_{\rm wave}\sim L/c$, where $c$ is the relevant gravity- or Kelvin-wave speed. Rotation supplies $\tau_{\rm rot}\sim\Omega^{-1}$, while drag supplies $\tau_{\rm drag}$. These are diagnosed or modeled scales, not separately measured clocks. Their ratios help explain a simulation ensemble, but a phase-curve amplitude cannot be inserted into one ratio to yield a unique wind speed.

## The dynamical response: waves before a jet

A localized equatorial day–night heat source excites a standing, planetary-scale wave pattern analogous to the Matsuno–Gill response: an equatorial Kelvin-like component extends east of the forcing, while off-equatorial Rossby gyres tend to lie westward. Showman and Polvani (2011) demonstrated in shallow-water and three-dimensional models that the resulting phase tilts transport eastward angular momentum toward the equator. Convergence of eddy momentum can accelerate an eastward equatorial jet—**superrotation**, meaning the equatorial atmosphere has greater axial angular momentum per unit mass than the solid surface at the equator.

This mechanism is simulated and theoretically interpreted; it is not a direct observation of a named wave on an exoplanet. The jet must equilibrate through counteracting processes: vertical and meridional advection of momentum, drag, wave breaking, shocks or numerical dissipation, and possibly magnetic stresses. Its speed and width are therefore not universal consequences of locking.

Equatorial deformation scales explain why the response is often global. For an equatorial wave speed $c$, the equatorial deformation radius is

$$
L_{\rm eq}=\sqrt{\frac{c}{\beta}},\qquad \beta=\frac{2\Omega}{a},
$$

where $a$ is planetary radius. A Rhines estimate,

$$
L_\beta\sim\sqrt{\frac{U}{\beta}},
$$

describes where turbulent eddies begin to feel the latitudinal variation of Coriolis acceleration. When these scales approach $a$, only a few broad jets or planetary waves fit around the globe. Factors of order unity vary by definition, so these equations are scaling guides rather than measured jet widths.

## Heat redistribution is wave adjustment plus radiation and drag

The simplest intuition says that advection homogenizes temperature if $\tau_{\rm adv}<\tau_{\rm rad}$. That comparison is incomplete because horizontal temperature gradients drive winds rather than being passively carried by a prescribed $U$. Perez-Becker and Showman (2013), then Komacek and Showman (2016), developed analytic scaling theories in which planetary waves communicate pressure anomalies, while radiative damping and friction can erase or arrest the adjustment. Their GCM comparisons predict that day–night contrast grows when radiation is fast or drag strong relative to wave adjustment, and can decrease when wave adjustment efficiently produces vertical motion and mass redistribution.

For hot Jupiters, radiative times generally shorten at low pressure and high temperature. Thus upper or hotter emitting layers can preserve a larger day–night contrast, while deeper layers redistribute energy more effectively. But a wavelength does not select one pressure surface: contribution functions are broad, abundance and clouds move the photosphere, and the photospheric pressure itself differs between day and night. [[Radiative and advective timescales in exoplanet atmospheres]] develops these qualifications.

On terrestrial planets, atmospheric mass matters strongly. A thicker atmosphere usually transports more energy for a given temperature and provides greater heat capacity and infrared optical depth, but composition and surface exchange change the result. Koll and Abbot (2016) derived a heat-engine and wave-adjustment scaling for rocky planets and showed how pressure, optical thickness, drag, and rotation regulate nightside temperature. A thin atmosphere may approach local radiative equilibrium or collapse by condensation on the nightside; a sufficiently massive atmosphere can keep the nightside warm even without an ocean.

## Conservation laws constrain every regime

Heating does not create net planetary angular momentum. A superrotating equator must gain eastward angular momentum through convergence from elsewhere, balanced by westward acceleration, vertical transport, surface or magnetic torque, or storage in another layer. This is why diagnosing only the zonal-mean wind is insufficient. The relevant budget includes mean meridional circulation, eddy correlations such as $\overline{u'v'}$, vertical momentum flux, and applied drag. Numerical diffusion can close the budget invisibly if it is not reported. A model that produces a fast jet without demonstrating convergence and equilibration may reproduce a pattern while leaving its maintenance uncertain.

Energy budgets impose a separate test. In statistical equilibrium, absorbed stellar plus internal power must balance outgoing radiation globally, subject to any slow storage. Horizontal circulation rearranges where radiation escapes; it cannot supply missing luminosity. Kinetic energy is generated by atmospheric heat-engine work and removed by friction, shocks, wave breaking, or magnetic dissipation. Consequently, “efficient circulation” can mean several different things: small temperature contrast, large enthalpy transport, strong winds, or a high fraction of absorbed energy moved before emission. These need not vary together. A cloud can reduce observed nightside brightness while heat transport below remains strong, and a fast jet can recirculate momentum without transporting enough mass vertically to erase the photospheric temperature contrast.

Mass continuity also couples horizontal divergence to vertical motion. The standing wave response reduces day–night thickness differences partly by driving ascent and descent, not merely by shifting hot air horizontally. This is why wave-adjustment theories often outperform a single $L/U$ comparison: they connect pressure gradients, vertical displacement, radiative damping, and drag within one dynamically consistent budget.

## Regimes are broader than “eastward jet”

Hot-Jupiter simulations commonly produce a broad eastward equatorial jet and eastward thermal displacement at photospheric pressures. Yet parameter changes create alternatives. Strong drag can suppress superrotation and favor a direct dayside-to-nightside flow aloft with return flow at depth. Faster rotation can shrink deformation scales and permit multiple jets. Deep forcing and internal heat can introduce baroclinic or barotropic variability. At ultra-hot temperatures, hydrogen dissociation on the dayside and recombination on the nightside transports energy chemically, weakening temperature contrast without requiring the same sensible-heat advection.

Magnetic effects are plausible when alkali metals become thermally ionized. Winds crossing a planetary magnetic field induce currents; Lorentz forces can act like drag, redirect flow, or create variability, while Ohmic dissipation heats the interior or atmosphere. A constant Rayleigh-drag time is only a surrogate. Conductivity varies steeply with temperature and pressure, and full magnetohydrodynamic geometry matters. Therefore a small hotspot offset on a very hot planet can be consistent with magnetic braking, but it is not a magnetic-field measurement.

Clouds break the identification between gas temperature and brightness. On a nightside, condensate opacity can lift the emitting level to lower, colder pressure and enlarge the thermal phase amplitude even if dynamical heat transport is effective below. Spatially varying reflective clouds can shift an optical maximum westward while the thermal hotspot remains eastward. Cloud particles also settle, evaporate, and are advected on competing timescales, so post-processing a clear GCM can miss cloud feedback on heating.

Slowly rotating terrestrial planets occupy another family. Day-to-night overturning may dominate, with ascent near the substellar region, divergence aloft, nightside descent, and near-surface return flow. Equatorial superrotation can coexist with this overturning. Hammond and Pierrehumbert (2018) showed that wave–mean-flow interaction can generate and maintain superrotation in simulations of tidally locked terrestrial atmospheres; the surface temperature maximum and upper-atmosphere jet need not have the same offset.

Cloud feedback can change climate as well as circulation. Yang, Cowan, and Abbot (2013) simulated slowly rotating, synchronously forced terrestrial planets and found thick convective clouds near the substellar point could raise planetary albedo and stabilize climate under high irradiation. This is a model result dependent on cloud parameterization, atmospheric composition, ocean treatment, and rotation—not evidence that a particular habitable-zone planet has a protective cloud shield.

## What observations currently constrain

No telescope has directly resolved a wind vector field on a tidally locked exoplanet. The principal constraints are disk-integrated spectra and time series.

**Measured:** thermal or reflected planet/star flux ratios versus orbital phase; transit spectra versus wavelength; eclipse depths; in some cases high-resolution spectral line positions and shapes. Each includes instrument, stellar, orbital, and reduction assumptions.

**Retrieved:** brightness temperatures, longitudinal brightness coefficients, hotspot phase, day–night spectral differences, molecular abundances, and sometimes Doppler shifts. A hotspot is a brightness structure at wavelength-dependent photospheric levels, not necessarily the hottest gas parcel. A net spectral blueshift can contain rotation, winds, limb asymmetry, ephemeris error, and line-list effects.

**Simulated:** three-dimensional temperature, velocity, cloud, and composition fields generated for selected gravity, rotation, irradiation, drag, opacity, chemistry, and boundary conditions. Simulations may resolve jets that the data cannot spatially encode.

**Interpreted:** an eastward phase offset is often attributed to wave-driven superrotation; a large amplitude to short radiative time or cloud-modified nightside emission; a reduced offset at high temperature to drag, dissociation, or magnetic effects. These explanations can overlap.

**Forecast:** a proposed mechanism should predict wavelength, pressure, epoch, or spectral-line behavior not used to select it. Examples include offset changing across contribution functions, a cloud signature correlated with reflective phase, or wind-sensitive Doppler structure that differs between morning and evening limbs.

The early 8-$\mu$m phase curve of HD 189733 b, for example, measured an infrared maximum before eclipse and nonzero nightside flux. Comparing that curve with circulation theory supported an eastward-displaced bright region. It did not measure the jet speed. Modern spectral phase curves offer more vertical leverage, but [[Atmospheric retrieval degeneracies]] remain: opacity, chemistry, clouds, temperature gradients, and horizontal mixing all affect emergent intensity.

## Competing explanations and discriminating tests

A large day–night brightness contrast may reflect inefficient dynamical redistribution, fast radiative cooling, high-altitude nightside clouds, different photospheric pressures, or an incomplete bolometric correction. A small contrast may reflect effective wave adjustment, a deep emitting layer, thick atmospheric heat capacity, hydrogen recombination, or internal heat. The phase offset can shrink because of short radiative time, drag, magnetic stress, cloud opacity, or a contribution function that samples another circulation regime.

Discrimination therefore needs joint observables. Broad spectral coverage constrains whether amplitude and offset follow molecular bands and hence pressure weighting. Optical plus infrared phases separate reflection imperfectly from emission. High-resolution transit spectra can compare morning and evening limbs, while repeated full-orbit spectra test persistence. Eclipse mapping supplies different spatial modes than the phase curve. Retrievals should compare synthetic observables after the GCM has passed through three-dimensional radiative transfer and the actual cadence, bandpass, and map kernel; comparing a raw model temperature map to a regularized brightness map is not like-for-like.

Model intercomparison is equally important. A robust circulation claim should survive plausible opacity tables, numerical cores, drag prescriptions, cloud schemes, lower boundaries, resolution, and initialization. Agreement among GCMs can reveal dynamics forced by conservation laws; disagreement maps the structural uncertainty. Either way, a visually Earth-like wind map is not evidence by resemblance.

## Primary sources

- Showman, A. P. & Polvani, L. M. (2011), “Equatorial Superrotation on Tidally Locked Exoplanets,” *The Astrophysical Journal* 738, 71. [DOI](https://doi.org/10.1088/0004-637X/738/1/71) · [arXiv](https://arxiv.org/abs/1103.3101)
- Perez-Becker, D. & Showman, A. P. (2013), “Atmospheric Heat Redistribution on Hot Jupiters,” *The Astrophysical Journal* 776, 134. [DOI](https://doi.org/10.1088/0004-637X/776/2/134) · [arXiv](https://arxiv.org/abs/1306.4673)
- Komacek, T. D. & Showman, A. P. (2016), “Atmospheric Circulation of Hot Jupiters: Dayside–Nightside Temperature Differences,” *The Astrophysical Journal* 821, 16. [DOI](https://doi.org/10.3847/0004-637X/821/1/16) · [arXiv](https://arxiv.org/abs/1601.00069)
- Koll, D. D. B. & Abbot, D. S. (2016), “Temperature Structure and Atmospheric Circulation of Dry Tidally Locked Rocky Exoplanets,” *The Astrophysical Journal* 825, 99. [DOI](https://doi.org/10.3847/0004-637X/825/2/99) · [arXiv](https://arxiv.org/abs/1605.01066)
- Hammond, M. & Pierrehumbert, R. T. (2018), “Wave–Mean Flow Interactions in the Atmospheric Circulation of Tidally Locked Planets,” *The Astrophysical Journal* 869, 65. [DOI](https://doi.org/10.3847/1538-4357/aaec03) · [arXiv](https://arxiv.org/abs/1810.11231)
- Yang, J., Cowan, N. B. & Abbot, D. S. (2013), “Stabilizing Cloud Feedback Dramatically Expands the Habitable Zone of Tidally Locked Planets,” *The Astrophysical Journal Letters* 771, L45. [DOI](https://doi.org/10.1088/2041-8205/771/2/L45) · [arXiv](https://arxiv.org/abs/1307.0515)
- Knutson, H. A. et al. (2007), “A map of the day–night contrast of the extrasolar planet HD 189733b,” *Nature* 447, 183–186. [DOI](https://doi.org/10.1038/nature05782) · [arXiv](https://arxiv.org/abs/0705.0993)

## Open questions

- Which combinations of spectral phase curves and high-resolution line profiles can distinguish wave-driven superrotation from spatially varying clouds or magnetic stresses?
- How well do current GCM conclusions survive intercomparison of dynamical cores, non-grey radiative transfer, cloud microphysics, and magnetohydrodynamics at matched parameters?
- At what atmospheric mass and composition does a synchronously rotating rocky planet avoid nightside atmospheric collapse once clouds, surface reservoirs, and topography are included?
- Can repeated observations identify genuine circulation variability rather than changing stellar contamination or instrument systematics?
- How do eccentricity, obliquity, libration, and non-1:1 spin states alter the standing-wave mechanisms usually derived for fixed forcing?
