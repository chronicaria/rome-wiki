---
title: Contribution functions in exoplanet spectra
created: 2026-07-10
source: llm
status: seed
tags: [exometeorology, exoplanets, radiative-transfer, spectroscopy, retrieval]
---

A contribution function is a model-dependent weighting kernel showing which atmospheric regions most affect a spectral datum; it is broad, geometry-specific, and never a one-to-one conversion from wavelength to pressure.

## The inverse problem behind a plotted spectrum

An unresolved spectrum records photons, not pressure levels. Pressure enters only after a forward model specifies gravity, temperature, composition, opacity, clouds, scattering, geometry, and hydrostatic structure. A contribution function makes that dependence visible by decomposing the modeled emergent signal into contributions from layers or locations.

For plane-parallel thermal emission without scattering, the upward monochromatic intensity at the top of the atmosphere along direction cosine $\mu$ can be written

$$
I_\nu(0,\mu)=I_\nu(\tau_b,\mu)e^{-\tau_b/\mu}
+\int_0^{\tau_b} B_\nu[T(\tau_\nu)]e^{-\tau_\nu/\mu}\frac{d\tau_\nu}{\mu}.
$$

The integrand is a contribution per unit optical depth. Converting to log pressure gives a commonly plotted kernel,

$$
C_\nu(\ln p)=B_\nu[T(p)]e^{-\tau_\nu(p)/\mu}
\frac{1}{\mu}\frac{d\tau_\nu}{d\ln p}.
$$

Definitions vary. Some authors normalize $C$ to unit area; some plot the derivative of flux rather than intensity; some use a response or Jacobian $\partial F_\nu/\partial T(p)$; some include the Planck function while others show only transmission weighting. The label on the axis is therefore not enough. One must ask: contribution to what observable, per unit of which vertical coordinate, under which atmospheric state?

## Why the kernel peaks near optical depth unity

Deep layers emit strongly but their photons are absorbed before escape. Very high layers transmit readily but contain little optical-depth interval and may be cold. Their product often peaks where the remaining optical depth along the ray is of order one. This yields the useful photosphere heuristic $\tau_\nu\sim1$.

The heuristic is not a delta function. Molecular bands, collision-induced absorption, clouds, and temperature gradients produce broad or multiple peaks. A temperature inversion can make a high-altitude band emit strongly. An optically thick cloud can truncate all deeper contributions. A transparent window can reach a surface or deep boundary, at which point boundary emission contributes separately. Disk integration mixes rays with different $\mu$, so limb paths generally sample smaller vertical optical depth but longer slant columns.

Opacity links optical depth to pressure:

$$
d\tau_\nu = \kappa_\nu(p,T,\mathbf{x})\,\frac{dp}{g},
$$

under hydrostatic balance for mass opacity $\kappa_\nu$. Because $\kappa_\nu$ depends on temperature, pressure broadening, mixing ratios $\mathbf{x}$, clouds, and sometimes velocity, a wavelength does not possess a fixed pressure. Change the atmospheric state and the weighting moves.

## Emission, transmission, and reflection need different kernels

In secondary-eclipse or phase-curve emission, the kernel weights thermal source functions along outgoing rays. It is sensitive to the vertical temperature gradient: an isothermal region can be spectrally bland even when molecular opacity is large because shifting the photosphere samples nearly the same temperature. A spectral feature can therefore diagnose opacity, temperature structure, or both.

Transmission spectroscopy measures the wavelength-dependent effective area blocked during transit. The relevant rays skim the limb, and the slant optical depth crosses many scale heights. A transmission “contribution function” usually weights changes in effective transit radius by altitude or pressure. Refraction, clouds, hazes, stellar heterogeneity, and the two-dimensional morning/evening terminator alter it. There is no emission-style photospheric pressure that can simply be reused.

Reflected-light kernels include the incident stellar beam, scattering phase functions, multiple scattering, surface reflection where relevant, and the outgoing path. Their sensitivity may peak near cloud tops or absorbers above clouds. Raman scattering and polarization contain still different information. Thus a pressure quoted for one observing geometry is not automatically relevant to another.

## Contribution functions versus retrieval Jacobians

A contribution function partitions a forward-model signal. A Jacobian asks how the signal changes when a parameter changes:

$$
K_{ij}=\frac{\partial y_i}{\partial x_j},
$$

where $y_i$ is a spectral datum and $x_j$ might be temperature in a layer, a gas abundance, cloud-top pressure, or radius. The two objects are related but not interchangeable. A layer may contribute substantial flux while the datum has little sensitivity to a small temperature perturbation there, especially in an isothermal region or when other parameters compensate.

Retrieval identifiability depends on the full Jacobian matrix, noise covariance, priors, and degeneracies. Broad overlapping kernels imply limited vertical resolution. Reporting the peak pressure of each channel can create a false impression of many independent layers when neighboring channels carry nearly the same weighting. Averaging kernels or posterior resolution diagnostics are better measures of how much vertical information the data actually recover.

The state dependence is especially important in nonlinear retrievals. A kernel evaluated at the posterior median may differ from kernels across plausible cloudy, clear, inverted, or compositionally distinct solutions. A robust analysis plots an ensemble or reports the range of weighted pressures rather than treating one best-fit curve as observed truth.

## Three-dimensional atmospheres break the column shortcut

Hot exoplanets are horizontally heterogeneous. Dayside and nightside temperature differences change both the Planck source and chemical equilibrium. Condensation can remove an absorber from one region; dissociation and ionization can alter another. Winds transport species away from local equilibrium. Consequently, opacity and the pressure of emission vary with longitude, latitude, and time.

Dobbs-Dixon and Cowan's warning that “wavelength does not equal pressure” is therefore stronger than the familiar statement that a kernel is broad. At the same wavelength, the dayside may be optically thick high in the atmosphere while the nightside is transparent to deeper pressure, or vice versa. Disk-integrated flux then combines radiation from different pressures across the visible hemisphere. Assigning one pressure to that band can manufacture an apparent vertical wind or temperature gradient.

Clouds create the same problem dramatically. A patchy cloud deck replaces deep thermal contribution in cloudy pixels with shallower contribution while clear pixels still see deep. The phase curve changes as cloud coverage rotates into view even if the temperature field is steady. Chemistry, clouds, and dynamics therefore affect the kernel as well as the atmospheric state the kernel is supposed to diagnose.

## Spectral resolution and bandpass integration

Line cores generally become optically thick higher than wings, while pressure-broadened wings can probe deeper layers. At high spectral resolution, individual lines contain a range of weighting and Doppler information. At low resolution, the instrument integrates many lines and continua into a channel:

$$
F_b=\frac{\int R_b(\nu)F_\nu\,d\nu}{\int R_b(\nu)\,d\nu},
$$

so the appropriate band contribution function must be integrated with the response $R_b$ and the source spectrum. Averaging precomputed peak pressures is not equivalent because radiative transfer is nonlinear in temperature and opacity.

Correlated-$k$ methods reorder opacities within a band to accelerate integration. Their internal quadrature points are not literal wavelengths, so interpreting each $g$-ordinate as a separately observed altitude is incorrect. The final band kernel must follow the same quadrature and overlap assumptions used by the forward model. Line-by-line calculations are conceptually more direct but still inherit uncertain line lists, broadening coefficients, continua, and cloud optical properties.

## Using kernels with phase curves and maps

Multiwavelength phase curves are often described as vertical sounding: bands expected to be more opaque sample lower pressure, where radiative times are shorter and day–night contrast may be larger. This can be a useful hypothesis, connected to [[Radiative and advective timescales in exoplanet atmospheres]]. It is not a direct pressure coordinate.

A defensible workflow computes three-dimensional, phase-dependent kernels from the same circulation, chemistry, and cloud state used to generate the light curve. It then asks whether differences in amplitude and hotspot offset persist after the broad and shifting weights are included. If multiple atmospheric states fit the spectra, the interpretation should be repeated across them. [[From light curves to atmospheric maps]] explains the separate longitudinal inverse problem; contribution functions add a vertical mixing problem on top.

The famous 3.6 and 4.5 micron hot-Jupiter comparison illustrates the danger. Simple one-dimensional intuition assigned different fixed pressures to the two bands and predicted a corresponding ordering of amplitudes and offsets. Three-dimensional opacity changes, especially carbon chemistry varying between hot and cool regions, can move those photospheres enough to reverse or complicate the ordering. The observation remains a band-dependent phase curve; the pressure-dependent circulation is an interpretation.

## What to report

A paper or note using a contribution function should specify the observable and geometry; whether the kernel is for intensity, flux, transit depth, or a Jacobian; its normalization and vertical coordinate; the atmospheric model at which it was evaluated; cloud and scattering assumptions; spectral response and resolution; and whether horizontal variation was retained. It should report a width or cumulative pressure interval, not only a peak.

For consequential claims, show sensitivity to plausible temperature, abundance, and cloud states. Separate the **measured** spectrum or light curve from the **retrieved** state, the **simulated** kernel, and the **interpreted** pressure-dependent dynamics. This evidence ladder prevents a colorful pressure–wavelength plot from being mistaken for an atmospheric sounding measured in situ.

## Worked interpretation: two emission channels

Suppose channel A has a modeled kernel peaking at 0.1 bar and channel B at 1 bar. It is tempting to call A the “upper atmosphere” and B the “deep atmosphere,” then convert differences in phase offset into vertical wind shear. Four checks are needed before that language is justified.

First, compare widths. If A spans 0.01–1 bar and B spans 0.1–10 bar, their information overlaps substantially. Second, compute kernels at every orbital phase. The nightside opacity may move A's weighting deeper than its dayside weighting. Third, test alternative compositions and clouds that fit the spectrum. Their pressure ordering may change. Fourth, calculate whether the retrieved phase offsets are independent once instrumental and stellar covariance are included.

Only after these checks can the data support a conditional statement such as: within a specified model family, channel A gives greater weight to lower pressures than channel B and favors an eastward displacement that differs between their weighted regions. That is less vivid than “the upper jet is faster,” but it preserves what was measured and what the model supplied.

A weighted mean pressure can summarize a kernel,

$$
\langle\ln p\rangle_b=\frac{\int C_b(\ln p)\ln p\,d\ln p}{\int C_b(\ln p)\,d\ln p},
$$

but the mean and peak may disagree for skewed or bimodal weights. Reporting the 10–90 percent cumulative interval and number of separated lobes communicates more. For three-dimensional kernels, this summary should be phase- or location-specific.

## Common category errors

The first error is calling a contribution function an observation. It is calculated from a model. The second is treating its peak as vertical resolution. Resolution depends on how distinct the kernels are and on noise and priors. The third is transferring a kernel between planets or between retrieval solutions. Opacity and scale height make it state-specific.

The fourth error is confusing pressure sensitivity with abundance sensitivity. An emission channel that receives photons from a pressure range may have weak ability to constrain a molecule if temperature or another opacity dominates. The fifth is using an emission kernel for transmission or vice versa. The slant and outgoing geometries are fundamentally different. The sixth is ignoring the surface or lower boundary when a window reaches it.

The seventh is assigning a single pressure to a high-resolution cross-correlation detection. Cross-correlation combines many lines with different strengths, excitation energies, and limb weights. Its effective kernel also depends on the template, preprocessing, and velocity field. The measured quantity is a correlation or likelihood surface; pressure localization requires a forward model that reproduces the analysis.

## Verification exercises for radiative-transfer codes

A contribution-function implementation should integrate back to the modeled observable within numerical precision. For an isothermal, nonscattering atmosphere with a black lower boundary, it should reproduce the analytic formal solution. Refining vertical layers should converge both the spectrum and cumulative kernel. Changing from altitude to log pressure should preserve the integral after applying the Jacobian.

Code comparisons need identical opacity, grid, boundary, angular quadrature, and normalization. Otherwise two kernels can look different while producing nearly identical spectra, or look similar while embedding different meanings. Perturbing one layer's temperature and comparing the finite-difference spectral response with the analytic Jacobian is a direct check. For band-integrated observations, the test must include the instrument throughput and binning.

Three-dimensional codes should verify that summing local intensities with projected-area weights reproduces disk flux and that longitude conventions follow the viewing geometry. Phase-dependent chemistry and clouds should be recomputed consistently rather than attached to an old kernel. These tests turn the contribution function from a decorative plot into an auditable component of the inference chain.

## Sources

- Dobbs-Dixon, I., & Cowan, N. B. (2017), [Wavelength Does Not Equal Pressure](https://arxiv.org/abs/1711.08463).
- Mollière, P. et al. (2019), [petitRADTRANS](https://doi.org/10.1051/0004-6361/201935470).
- Madhusudhan, N. (2019), [Exoplanetary Atmospheres: Key Insights, Challenges, and Prospects](https://doi.org/10.1146/annurev-astro-081817-051846).
- Marley, M. S., & Robinson, T. D. (2015), [On the Cool Side](https://doi.org/10.1146/annurev-astro-082214-122522).

## Open questions

- How should retrievals summarize ensembles of state-dependent kernels without overwhelming the reader?
- Which JWST phase-curve datasets genuinely add independent vertical information after cloud and chemistry uncertainty?
- Can common reporting standards distinguish contribution functions, Jacobians, and averaging kernels consistently across codes?
