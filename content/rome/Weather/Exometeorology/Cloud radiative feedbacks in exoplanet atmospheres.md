---
title: Cloud radiative feedbacks in exoplanet atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, clouds, radiation, atmospheric-circulation, climate-feedbacks]
---

Clouds do not merely hide an exoplanet's atmosphere: by reflecting stellar light, absorbing and emitting thermal radiation, and changing where energy is deposited, they can reorganize the temperature field and circulation that created them.

Up: [[Exometeorology research frontier 2026]]

Related: [[Cloud formation and transport beyond Earth]] · [[Radiative transfer in planetary climate models]] · [[Atmospheric circulation on tidally locked planets]] · [[Exoplanet phase curves]]

## The feedback loop

A cloud is a population of particles suspended in a gas, not a passive painted layer. Temperature, pressure, elemental inventory, nucleation, condensation, coagulation, sedimentation, evaporation, and transport determine where particles occur and what sizes they reach. Those particles then alter radiation. Radiation changes heating rates; heating changes temperature gradients, buoyancy, winds, convection, and condensation; the altered flow moves or destroys the cloud. A minimal causal loop is

$$
T,\ p,\mathbf{u},q_v \rightarrow q_c,r_{\rm eff},z_c
\rightarrow (\tau_\lambda,\omega_{0,\lambda},g_\lambda)
\rightarrow \frac{\partial T}{\partial t}_{\rm rad}
\rightarrow T,\mathbf{u},q_v,
$$

where $q_v$ and $q_c$ are vapor and condensate abundances, $r_{\rm eff}$ is an effective particle radius, $z_c$ represents cloud altitude, and optical depth $\tau_\lambda$, single-scattering albedo $\omega_{0,\lambda}$, and asymmetry parameter $g_\lambda$ summarize wavelength-dependent radiative behavior. Every arrow contains uncertain physics. Equilibrium-condensation schemes omit kinetic delays; prescribed particle sizes omit growth and breakup; two-stream radiation compresses angular scattering; and coarse circulation grids cannot resolve individual convective plumes.

The **cloud radiative effect** (CRE) is usually a diagnostic difference between all-sky and clear-sky radiative flux. At the top of an atmosphere one may write, with downward flux positive,

$$
\mathrm{CRE}=F_{\rm net}^{\rm all}-F_{\rm net}^{\rm clear}
=\mathrm{CRE}_{\rm SW}+\mathrm{CRE}_{\rm LW}.
$$

Shortwave CRE is often cooling because reflective clouds reduce absorbed stellar energy. Longwave CRE is often warming because an opaque, cold cloud top emits less thermal radiation to space than the warmer layers beneath it. “Often” matters: strongly absorbing particles can heat the atmosphere in stellar wavelengths, optically thin clouds may have little effect, and the balance depends on the host star's spectrum, particle composition and size, cloud altitude, and underlying gas opacity.

CRE is not automatically a **feedback**. A feedback is the radiative response caused by cloud changes after some perturbation, including the subsequent dynamical adjustment. A large CRE in one control climate does not establish that clouds amplify or damp a change in stellar flux, rotation, composition, or surface temperature. Comparing a cloudy simulation with a cloud-free one also changes the base climate, so the resulting difference mixes the direct radiative role of clouds with all adjustments to their presence.

## Three radiative levers

### Reflection and planetary albedo

Cloud particles comparable to or larger than incident wavelengths can scatter efficiently. Over a dark surface or a deep gaseous atmosphere, a bright cloud usually raises Bond albedo and lowers absorbed stellar power,

$$
P_{\rm abs}=\pi R_p^2(1-A_B)S,
$$

where $A_B$ is Bond albedo and $S$ is incident stellar flux at the planet. Because cool stars emit more strongly in the near infrared, where water, condensates, and gases may absorb, the same nominal cloud need not produce the same cooling around an M dwarf as around a Sun-like star. Particle size matters twice: it controls extinction per unit mass and the angular distribution of scattered light.

Cloud location also matters. On a synchronously rotating terrestrial planet, deep convection tends to concentrate near the substellar region. If convection builds a thick, optically bright dayside cloud deck, it places reflection precisely where incident flux is strongest. Yang, Cowan, and Abbot demonstrated this stabilizing mechanism in three-dimensional simulations: stronger irradiation intensified substellar convection and cloud reflection, allowing their slowly rotating modeled worlds to remain temperate at higher stellar flux than comparable rapidly rotating cases. That is a model result, not an observational detection of a universal inner habitable-zone boundary. Later studies showed sensitivity to rotation, stellar spectrum, convection and cloud parameterizations, ocean treatment, and atmospheric composition.

### Thermal blanketing

At thermal wavelengths an optically thick high cloud raises the effective emission level to lower pressure and usually lower temperature. The outgoing longwave radiation can fall, warming the column below until energy balance is restored. A low cloud with a top temperature near the emitting surface may add little longwave greenhouse effect while remaining reflective; a high cloud may exert both strong shortwave cooling and strong longwave warming. Cancellation is possible but not guaranteed.

On hot Jupiters, condensates commonly favor cooler nightsides, western limbs, or higher latitudes. Nightside clouds can suppress thermal escape from the cloudy region. The atmosphere and deep layers then warm relative to an otherwise comparable radiatively inactive-cloud calculation, while clear dayside regions may emit more of the planet's required cooling flux. Thus local thermal blanketing can change the global energy pathway and sometimes increase, rather than erase, the day–night brightness contrast. It is unsafe to infer heat transport directly from a phase-curve amplitude without accounting for cloud opacity and the pressure levels sampled.

### Vertical and horizontal heating gradients

Radiation acts through flux divergence, not just the top-of-atmosphere balance:

$$
\left(\frac{\partial T}{\partial t}\right)_{\rm rad}
=-\frac{1}{\rho c_p}\frac{\partial F_{\rm net}}{\partial z}.
$$

An absorbing cloud can heat its own layer while shading gas below. A thermal cloud can cool strongly from its top and warm by absorption near its base. Horizontal contrasts between cloudy and clear columns create pressure gradients. These gradients can accelerate winds, alter wave propagation, shift jets, change vertical mixing, and move the condensation boundary. The global-mean CRE may be small while dynamically important regional heating remains large because shortwave and longwave effects, or positive and negative regions, cancel in the mean.

This distinction connects cloud feedback to [[Equatorial superrotation]]. Hot-Jupiter jets are maintained by correlated eddy transports arising from the forced planetary-scale wave pattern. Patchy cloud heating can reshape that pattern rather than merely riding on the jet. Roman and Rauscher's temperature-dependent, radiatively active cloud simulations found substantial changes to thermal structure and predicted phase curves relative to clear and radiatively passive-cloud cases. Their particular cloud prescription was deliberately simplified, so the work establishes sensitivity and plausible mechanisms, not a unique forecast for every hot Jupiter.

## Regimes, not one universal sign

### Slowly rotating, synchronously illuminated rocky planets

The best-known negative feedback is the substellar cloud shield. Slow rotation weakens rotational constraint, permitting a broad day-to-night overturning circulation with persistent ascent near the substellar point. More stellar heating can strengthen moist convection, increase high cloud near maximum illumination, and raise planetary albedo. The geometrical correlation between clouds and incident flux makes the effect powerful.

The regime can weaken or change when faster rotation organizes zonal jets and displaces convection, when a thin or dry atmosphere cannot sustain thick water clouds, when ocean heat transport moves surface-temperature maxima, or when stellar near-infrared absorption warms the atmosphere before radiation reaches the surface. A cloud scheme's treatment of condensate, precipitation, entrainment, and convective organization can also shift the modeled threshold. The robust statement is conditional: several GCMs produce a stabilizing substellar cloud response for specified slowly rotating, water-rich worlds. “Tidally locked planets are protected by clouds” is too broad.

### Hot and ultra-hot giant planets

Different condensates appear across broad temperature ranges, from silicates and metals at high temperatures to salts and sulfides on cooler giants. Strong day–night forcing makes cloud formation spatially selective. The flow transports vapor and particles across limbs and between pressure levels; sedimentation competes with mixing; evaporation can clear hot regions. Clouds consequently alter optical phase curves, thermal phase curves, spectra, and the circulation simultaneously.

Radiatively active clouds can warm cloudy nightsides through thermal opacity, cool reflective dayside regions, heat absorbing layers, or shift the infrared photosphere. Feedback may move condensation curves through the atmosphere and change cloud coverage nonlinearly. A small temperature change near a condensation boundary can create or remove opacity, which changes heating and drives a larger dynamical adjustment. Conversely, strong sedimentation or evaporation may damp the response. There is no single “hot-Jupiter cloud feedback” sign because condensate species, particle properties, irradiation, gravity, metallicity, mixing, and spatial distribution differ.

### Brown dwarfs and directly imaged young giants

These objects are primarily internally heated, so the shortwave reflection lever is weak or absent. Condensate clouds instead regulate escaping thermal radiation. A locally thinner cloud can expose hotter, deeper layers; enhanced cooling changes buoyancy and temperature gradients; circulation and convection can then alter cloud thickness again. Coupled cloud-radiative-dynamical models have produced spontaneous variability and patchiness, supporting a physically plausible route from feedback to rotational light curves.

But an observed variable light curve measures disk-integrated brightness, not the feedback loop. Patchy cloud opacity, temperature perturbations, chemical abundance changes, and vertically stacked structures can generate overlapping spectral signatures. [[Time-series mapping of brown-dwarf weather]] therefore treats “cloud-driven variability” as an interpretation strengthened by multiwavelength phase shifts, repeat epochs, and models that predict independent data—not as a direct image of cloudy holes.

## How models isolate the effect

The cleanest experiment is rarely just “clouds on” versus “clouds off.” A useful hierarchy holds most physics fixed while changing one coupling:

1. **Clear control:** condensate opacity absent, used to establish the circulation without clouds.
2. **Passive clouds:** clouds form and move but do not affect radiative heating; this tests what the circulation does to clouds.
3. **Active clouds:** the same cloud field enters radiation; differences from the passive case reveal coupled adjustment.
4. **Cloud locking:** a saved cloud field from one climate is inserted into another radiation calculation, helping isolate the impact of changed cloud radiative properties without allowing clouds to coevolve immediately.
5. **Mechanism sweeps:** shortwave scattering, shortwave absorption, and longwave opacity are varied separately, followed by particle-size, sedimentation, nucleation, and spectral tests.

Even this hierarchy needs care. Turning opacity off changes temperature and therefore gas opacity, water vapor, convection, and cloud formation. A passive-cloud state may drift far from the active-cloud base climate. Cloud locking can decorrelate clouds from meteorology in an artificial way. Energy and tracer budgets, equilibrated integration lengths, resolution tests, and identical post-processing are necessary. [[Benchmarking exoplanet general circulation models]] explains why agreement between two complex models is not proof that either cloud closure is right.

A useful diagnostic set includes top-of-atmosphere shortwave and longwave CRE; atmospheric radiative heating profiles; cloud mass and particle-number budgets; condensation, evaporation, and sedimentation rates; cloud fraction by pressure; temperature and wind differences; eddy momentum fluxes; and synthetic spectra and phase curves. Reporting only global albedo misses longwave and dynamical effects. Reporting only a phase curve confounds physical redistribution with wavelength-dependent photospheres.

## What observations can and cannot establish

**Measured:** transit depths, eclipse depths, phase-dependent fluxes, polarization, time-variable spectra, and their uncertainties. These are radiation received from an unresolved system after instrument and stellar corrections.

**Retrieved:** conditional estimates of albedo, brightness temperature, molecular abundances, particle properties, cloud-top pressure, or map coefficients. These depend on radiative transfer, geometry, priors, opacity databases, and assumed cloud parameterization. A high optical albedo supports reflective material but does not alone identify composition, particle radius, or feedback.

**Simulated:** temperatures, winds, condensate fields, heating rates, and synthetic observables generated by a stated model. A difference between active- and passive-cloud simulations is evidence about that model's feedback, not a measurement of the planet's feedback.

**Interpreted:** claims that clouds stabilize a rocky planet, warm a hot-Jupiter nightside, weaken or strengthen a jet, or drive brown-dwarf variability. Confidence rises when the mechanism predicts multiple independent observables—such as consistent optical reflection, infrared emission, spectral cloud signatures, and temporal behavior—and survives alternative gas opacity, chemistry, circulation, and stellar-contamination models.

Directly measuring a feedback requires observing a response to a perturbation or exploiting an ensemble that samples different forcing while other determinants are controlled. For most exoplanets, neither is presently available. Phase curves at multiple wavelengths and epochs can test predicted spatial and temporal consequences, but they do not by themselves supply the counterfactual clear or passive-cloud atmosphere. “Cloud radiative feedback detected” should therefore be reserved for unusually discriminating evidence; “consistent with a coupled cloud-radiative model” is usually more accurate.

## Why it matters

Cloud feedback changes the mapping from stellar irradiation and bulk composition to climate. It can shift an inferred habitable-zone boundary, determine whether a nightside atmosphere collapses, change a hot Jupiter's heat budget and jet structure, or help generate weather variability on self-luminous objects. It also changes observability: the same clouds that drive circulation may flatten a transmission spectrum, move an emission photosphere, or dominate reflected light.

The practical lesson is that clouds cannot always be appended after a clear-atmosphere simulation as cosmetic post-processing. If their opacity materially changes heating, the circulation should be recomputed with that opacity coupled. Yet interactive clouds do not guarantee realism: uncertain microphysics can make a tightly coupled model precisely wrong. Strong conclusions should therefore be phrased by regime, tied to explicit cloud and radiation assumptions, and tested against diagnostics beyond the observable originally fitted.

## Sources

- Yang, J., Cowan, N. B., & Abbot, D. S. (2013), “Stabilizing Cloud Feedback Dramatically Expands the Habitable Zone of Tidally Locked Planets.” *The Astrophysical Journal Letters* 771, L45. https://doi.org/10.1088/2041-8205/771/2/L45
- Kopparapu, R. K. et al. (2016), “The Inner Edge of the Habitable Zone for Synchronously Rotating Planets around Low-mass Stars Using General Circulation Models.” *The Astrophysical Journal Letters* 819, L7. https://doi.org/10.3847/2041-8205/819/1/L7
- Roman, M., & Rauscher, E. (2019), “Modeled Temperature-dependent Clouds with Radiative Feedback in Hot Jupiter Atmospheres.” *The Astrophysical Journal* 872, 1. https://doi.org/10.3847/1538-4357/aafdb5
- Lines, S. et al. (2019), “Exonephology: transmission spectra from a 3D simulated cloudy atmosphere of HD 209458b.” *Monthly Notices of the Royal Astronomical Society* 481, 194–205. https://doi.org/10.1093/mnras/sty2275
- Parmentier, V., Showman, A. P., & Lian, Y. (2013), “3D mixing in hot Jupiters atmospheres. I. Application to the day/night cold trap in HD 209458b.” *Astronomy & Astrophysics* 558, A91. https://doi.org/10.1051/0004-6361/201321132
- Tan, X., & Showman, A. P. (2019), “Atmospheric Variability Driven by Radiative Cloud Feedback in Brown Dwarfs and Directly Imaged Extrasolar Giant Planets.” *The Astrophysical Journal* 874, 111. https://doi.org/10.3847/1538-4357/ab0c07
- Gao, P. et al. (2021), “Aerosols in Exoplanet Atmospheres.” *Journal of Geophysical Research: Planets* 126, e2020JE006655. https://doi.org/10.1029/2020JE006655

## Open questions

- Which combinations of multiwavelength phase curves, polarization, and repeat observations can distinguish cloud-driven heating changes from gas-opacity and drag changes?
- How robust is the substellar cloud shield across convection schemes, cloud-resolving nests, ocean heat transport, and M-dwarf spectral variability?
- When do kinetic nucleation and particle-size evolution reverse conclusions obtained from equilibrium clouds with fixed radii?
- Can cloud-locking methods be adapted to strongly inhomogeneous exoplanets without creating unphysical cloud–meteorology combinations?
- What laboratory measurements of high-temperature condensate refractive indices and surface chemistry would most reduce radiative-feedback uncertainty?
