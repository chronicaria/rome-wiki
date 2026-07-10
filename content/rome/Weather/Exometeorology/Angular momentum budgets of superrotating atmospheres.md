---
title: Angular momentum budgets of superrotating atmospheres
created: 2026-07-10
source: llm
status: seed
tags: [weather, exoplanets, atmospheric-dynamics, superrotation, modeling]
as_of: 2026-07-10
desk: Exometeorology
review_after: 2026-10-10
---
An eastward equatorial jet is maintained only when resolved circulation, waves, torques, and numerical tendencies close an axial-angular-momentum budget; the jet maximum alone does not identify that mechanism.

Up: [[Exometeorology research frontier 2026]]

Related: [[Equatorial superrotation]] · [[Primitive equations of planetary atmospheres]] · [[General circulation models for exoplanets]] · [[Numerical artifacts and false atmospheric variability]]

## The quantity that must be budgeted

For a parcel at latitude $\phi$, distance $r$ from the planet's center, and eastward wind $u$ relative to a planet rotating at angular speed $\Omega$, the axial specific angular momentum is

$$
m=(\Omega r\cos\phi+u)r\cos\phi
=\Omega r^2\cos^2\phi+ur\cos\phi.
$$

The first term is the angular momentum of air corotating with the solid planet; the second is the relative contribution of the wind. In a shallow atmosphere one often replaces $r$ with planetary radius $a$, but a deep model should retain the radial dependence consistently. A local equatorial wind is superrotating when its $m$ exceeds the maximum attainable by air at rest at the equatorial surface, approximately $\Omega a^2$. A global superrotation index instead compares the mass-integrated atmospheric angular momentum with a chosen solid-body reference. Local and global superrotation are therefore different statements. A narrow eastward equatorial jet may coexist with compensating westward flow elsewhere, while an atmosphere can possess excess global angular momentum only through exchange with a boundary or another reservoir.

That distinction matters especially for gas giants. A rocky surface can exert frictional and mountain torques. A giant planet has no comparably simple lower boundary: the modeled weather layer may exchange momentum with a deeper conducting, convecting, or magnetically coupled interior. A truncated GCM domain can conserve the angular momentum inside its numerical box while omitting a physically important flux through its lower boundary. Conversely, a model can drift because its dynamical core, filters, sponge layers, remapping, or parameterizations introduce an unreported torque.

## Conservation before mechanism

In flux form, axial angular momentum obeys a schematic conservation law

$$
\frac{\partial (\rho m)}{\partial t}
+\nabla\cdot(\rho \mathbf{v}m)
=\rho\mathcal{T},
$$

where $\rho$ is density, $\mathbf{v}$ is the three-dimensional velocity, and $\mathcal{T}$ collects axial torque per unit mass. Pressure forces redistribute angular momentum internally; after integration over a closed atmosphere their net axial torque vanishes unless pressure acts on sloping topography or an imposed boundary. Physical right-hand-side terms can include surface stress, Lorentz forces, gravitational or thermal tides, mass exchange, and parameterized wave drag. Numerical diffusion and stabilization also create tendencies, whether or not the code labels them as torques.

Integrating over the modeled atmospheric volume gives the strongest first audit:

$$
\frac{d}{dt}\int_V \rho m\,dV
=-\oint_{\partial V}\rho m\mathbf{v}\cdot d\mathbf{S}
+\int_V\rho\mathcal{T}\,dV.
$$

For a closed, impermeable, torque-free domain, total atmospheric angular momentum should remain constant apart from controlled numerical error. Heating can reorganize the circulation, and waves can move momentum toward the equator, but heating alone cannot create net axial angular momentum in the closed atmosphere. This is why a simulation spun up from rest may build a fast equatorial jet only by placing compensating angular-momentum deficits elsewhere. If the global integral changes without a diagnosed boundary or body torque, the residual is evidence about the model, not a new atmospheric mechanism.

Lebonnois and colleagues demonstrated this point in Venus and Titan GCMs. Models subjected to similar thermal forcing produced different superrotation partly because their dynamical cores did not conserve atmospheric angular momentum equally well. Their result is a comparative-planet warning, not proof that every exoplanet GCM has the same defect. It establishes a diagnostic obligation: the summed physical torques and resolved boundary fluxes must explain the global tendency, and the leftover must be reported.

## Zonal-mean pathways

A global integral says whether angular momentum is created or lost, but not how a jet is maintained. For that, decompose fields into a zonal mean and departure, $u=\overline{u}+u'$, $v=\overline{v}+v'$, and similarly for vertical velocity. In pressure coordinates, the zonal-mean momentum equation can be organized schematically as

$$
\frac{\partial\overline{u}}{\partial t}
=\text{mean-meridional advection}
+\text{mean-vertical advection}
-\frac{1}{a\cos^2\phi}\frac{\partial}{\partial\phi}
\left(\overline{u'v'}\cos^2\phi\right)
-\frac{\partial\overline{u'\omega'}}{\partial p}
+\text{torques and residuals}.
$$

The precise metric factors and signs depend on coordinates, equation set, and whether the budget is written for zonal wind or angular momentum. The physical categories are stable:

**Mean circulation.** A zonal-mean meridional or overturning cell transports planetary and relative angular momentum. Air moving equatorward tends to acquire eastward wind if its $m$ is approximately conserved; poleward motion tends toward westward relative wind. Vertical motion likewise connects levels with different cylindrical distance from the rotation axis and different wind.

**Horizontal eddy flux.** The covariance $\overline{u'v'}$ measures whether waves and non-axisymmetric structures transport eastward momentum meridionally. Convergence of eastward eddy momentum at the equator accelerates an eastward jet. The covariance is not simply “wave amplitude”: phase tilts between velocity components determine the sign.

**Vertical eddy flux.** The covariance between zonal and vertical motion transports momentum between pressure levels. It can feed an upper jet, return momentum downward, or connect the observable atmosphere to a deep reservoir. Omitting it because the photospheric wind looks horizontally organized can produce a false closure.

**Explicit and parameterized torque.** Drag, magnetic stress, boundary-layer exchange, breaking gravity waves, and sponge layers can balance flux convergence. A linear Rayleigh-drag term is a modeling closure, not automatically a physical measurement of friction or magnetic braking.

**Numerical residual.** After all archived tendencies are added, the remaining acceleration measures incomplete diagnostics plus discretization and filtering effects. A small instantaneous residual is desirable, but cumulative residual matters for long spin-ups. A weak bias integrated over thousands of planetary days can build or erode a jet.

Transformed-Eulerian-mean or Eliassen–Palm-flux diagnostics can combine eddy heat and momentum fluxes into a wave–mean-flow framework. They are often more faithful than inspecting $\overline{u'v'}$ alone when waves also reshape the overturning circulation. But their interpretation assumes a coordinate system, averaging operation, and approximations. Tidally locked atmospheres have a permanent longitudinal forcing pattern, so a conventional zonal mean can mix stationary day–night structure with freely propagating eddies. A useful analysis should compare planet-fixed, substellar, temporal, and zonal decompositions rather than declaring every departure from a zonal mean a transient wave.

## Why tidally locked planets superrotate in models

The canonical mechanism begins with stationary day–night heating. The forcing excites an equatorially trapped Kelvin-like response extending east of the substellar region and Rossby-like gyres displaced westward and poleward. Their phase tilts correlate $u'$ and $v'$ so that eddies transport eastward angular momentum toward the equator. Convergence accelerates an eastward equatorial jet; the jet grows until advection, wave propagation, vertical transport, drag, or nonlinear changes in the wave pattern balance that convergence.

This mechanism is demonstrated by forced shallow-water theory and reproduced across many three-dimensional hot-Jupiter models. It is physically stronger than the loose claim that “the hotspot pushes the air east.” The forcing organizes planetary-scale waves; the waves' velocity correlations create a momentum flux; flux convergence changes the zonal mean. Each link can be tested.

Yet a familiar jet morphology does not prove that one simulation realizes the canonical balance. Mendonça's three-dimensional hot-Jupiter analysis found both stationary and transient waves important to the angular-momentum transport and showed that vertical transport and mean circulation belong in the closure. Changes in radiative treatment, drag, cloud opacity, rotation, depth, and numerical dissipation can shift the balance. The same time-mean jet can result from different compensating terms.

The budget also evolves during spin-up. Early waves may deposit momentum rapidly in the observable atmosphere while the deeper domain adjusts much more slowly. A nearly steady photospheric jet can therefore sit above a continuing global drift. [[Deep atmosphere coupling in giant-planet circulation]] explains why equilibration must be assessed by reservoir and pressure range, not from a single upper-atmosphere time series.

## A practical diagnostic ladder

1. **Define the control volume and reference.** State whether angular momentum is computed over the entire atmosphere, a pressure-limited domain, or only the observable region. Specify shallow versus deep geometry and the solid-body reference used for any superrotation index.

2. **Close mass first.** Angular-momentum integrals are mass-weighted. Global mass drift, inconsistent pressure remapping, or top-boundary leakage can masquerade as momentum drift.

3. **Plot the global integral and cumulative torques.** Compare $M(t)-M(0)$ with time-integrated boundary, drag, magnetic, and other torque terms. Report the residual in absolute units and relative to both total planetary and wind angular momentum; normalization only by the huge solid-body term can hide a dynamically important error.

4. **Archive process tendencies online.** Reconstructing a budget from sparse saved winds loses fast covariance and operator-split tendencies. Radiation does not directly torque a spherical atmosphere, but it drives circulation between dynamical steps. Filters and physics packages should expose their momentum increments.

5. **Diagnose horizontal and vertical flux convergence.** A latitude–pressure map of accelerations is more informative than maps of flux alone. A large flux that is spatially uniform has little local convergence and need not accelerate the jet.

6. **Separate stationary and transient components.** On a synchronously rotating planet, compute departures of the time mean from the zonal mean, then departures from the time mean. This distinguishes the standing day–night wave from evolving eddies, subject to adequate sampling.

7. **Repeat across resolution and dissipation.** A mechanism is suspect if its inferred balance changes sign when grid spacing, timestep, hyperdiffusion, polar filtering, or sponge strength changes. Convergence need not mean identical winds, but leading budget terms and their integrated closure should stabilize.

8. **Test the lower boundary and integration length.** Move the bottom deeper, alter boundary drag transparently, and compare reservoir equilibration. A jet balanced primarily by an arbitrary bottom sponge has a different evidentiary status from one robust to plausible boundary choices.

9. **Project into observables.** Spectra and phase curves weight temperature, opacity, chemistry, clouds, and line-of-sight velocity over broad three-dimensional regions. They do not directly return the zonal-mean angular-momentum budget. Synthetic observations can test consequences of rival balances, but agreement does not uniquely select one.

### Reporting a budget without hiding the residual

A reproducible paper should publish enough information to reconstruct the closure: averaging interval, coordinate definition, control-volume boundaries, mass weighting, sampling cadence, sign convention, every archived physical tendency, and the numerical residual. Color scales should use the same acceleration units for competing terms. Vertically integrated plots should state the pressure or mass limits and retain boundary fluxes. Time means need accompanying variability because two large fluctuating terms can cancel in the mean while controlling episodic jet acceleration.

The residual should not be silently assigned to “subgrid mixing.” If a code applies hyperdiffusion, polar filtering, flux correction, sponge damping, or fixer steps, each operation is part of the implemented model. Either diagnose its momentum increment directly or label the unresolved remainder. Comparing the residual with the resolved eddy convergence and with the secular jet tendency makes its dynamical importance legible. This reporting discipline also prevents false precision: a closed budget in one discretization is evidence that its bookkeeping works, not proof that its parameterized torques represent the planet.

## What observations can and cannot establish

Thermal phase offsets, day–night contrasts, rotational line broadening, and Doppler shifts can be consistent with eastward flow. Repeated multiwavelength measurements may constrain how winds and temperature vary with pressure. None measures the full global mass-weighted angular-momentum inventory. Cloud tracers can move differently from the gas; contribution functions cover broad pressure ranges; retrieved velocities mix orbital motion, rotation, winds, chemistry, and geometry.

Consequently, “observed superrotation” is usually an interpretation conditioned on a circulation and radiative-transfer model. The more defensible chain is: a measured signal constrains a brightness or line-of-sight velocity pattern; retrieval and forward modeling admit certain flow structures; dynamically closed GCMs test whether those structures can arise from stated forcing and torques. The angular-momentum budget is the model's conservation audit inside that chain, not an observable smuggled directly out of a light curve.

## Why it matters

Superrotation is one of the most visually robust predictions of hot-Jupiter modeling, which makes it unusually vulnerable to shallow confirmation. A fast jet in a figure may be physical, numerically assisted, or maintained by an arbitrary closure. Budgeting forces the explanation into falsifiable pieces: where momentum originates, how waves and circulation transport it, what balances the convergence, how large the numerical residual is, and whether the inferred mechanism produces distinguishable observations.

It also connects comparative atmospheres. Venus and Titan show that slowly rotating, strongly superrotating systems are exacting tests of conservation and wave–mean-flow diagnosis. Exoplanets expand the forcing and parameter regimes, but do not relax those accounting rules.

## Sources

- [Showman & Polvani (2011), Equatorial superrotation on tidally locked exoplanets](https://doi.org/10.1088/0004-637X/738/1/71) — forced equatorial-wave mechanism and eddy momentum convergence.
- [Mendonça (2020), Angular momentum and heat transport on tidally locked hot Jupiter planets](https://doi.org/10.1093/mnras/stz3050) — three-dimensional stationary and transient transport diagnostics.
- [Lebonnois et al. (2012), Angular momentum budget in GCMs of superrotating atmospheres](https://doi.org/10.1029/2012JE004223) — conservation residuals and model dependence for Venus and Titan.
- [Read & Lebonnois (2018), Superrotation on Venus, Titan, and elsewhere](https://doi.org/10.1002/2017RG000605) — comparative definitions and mechanisms.
- [Lewis, Colyer & Read (2021), Dependence of global superrotation on planetary rotation rate](https://doi.org/10.1016/j.icarus.2020.114216) — global indices and rotation-regime experiments.
- [Showman & Polvani (2010), The Matsuno–Gill model and equatorial superrotation](https://doi.org/10.1029/2010GL044343) — wave tilts and momentum transport under equatorial forcing.
- [Mayne et al. (2017), The limits of the primitive equations for hot Jupiters](https://doi.org/10.1051/0004-6361/201629678) — deep-atmosphere evolution and equation-set sensitivity.
- [Polichtchouk et al. (2014), Intercomparison of hot-Jupiter dynamical cores](https://doi.org/10.1016/j.icarus.2014.01.043) — numerical sensitivity and benchmark context.

## Open questions

- Which combinations of Doppler spectroscopy and multiwavelength phase curves can distinguish horizontal eddy convergence from vertical or drag-controlled balances?
- How should angular momentum be partitioned between an observable weather layer and an unmodeled deep giant-planet interior?
- Which GCMs expose every physics-package and stabilization tendency needed for reproducible offline closure?
- When clouds, chemistry, or magnetic induction evolve with the flow, which apparent eddy correlations are causes of the jet and which are responses to it?
