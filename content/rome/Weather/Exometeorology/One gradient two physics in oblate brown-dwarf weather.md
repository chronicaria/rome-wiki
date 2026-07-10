---
title: One gradient two physics in oblate brown-dwarf weather
created: 2026-07-09
source: llm
status: seed
tags: [weather, exometeorology, brown-dwarfs, shallow-water, surface-pdes]
as_of: 2026-07-09
---
Andrew's oblate brown-dwarf experiment uses one physically normalized effective-potential gradient to define both the body's surface geometry and its gravity-darkened thermal forcing, then separates those two roles by ablation.

Up: [[BealeSurfaceSolver research (MOC)]] · Context: [[Geometry as forcing in planetary surface PDEs]]

## The one-gradient identity

The model surface is an equipotential

$$
S=\{x:\phi(x)=0\}.
$$

For the Roche-style figure used in the first program,

$$
\phi(x,y,z)=1-\frac1r-\frac q2(x^2+y^2),
$$

with nondimensional rotation parameter $q$. Because $\phi$ is an effective potential rather than an arbitrary reparameterization of the same zero set,

$$
g_{\mathrm{eff}}=\lVert\nabla\phi\rVert
$$

has physical meaning. The normalized gradient supplies the unit normal

$$
n=\frac{\nabla\phi}{\lVert\nabla\phi\rVert},
$$

while the same gradient supplies the chart metric factor and local Coriolis parameter. Gravity darkening then defines an equilibrium geopotential of the form

$$
\Phi_{\mathrm{eq}}
\propto
\left(\frac{g_{\mathrm{eff}}}{g_{\mathrm{pole}}}\right)^\beta.
$$

Thus one input field has two distinct causal roles:

- its **direction and component ratios** determine surface geometry, tangent planes, metric weights, and $f=2\Omega\cdot n$;
- its **magnitude** determines the gravity-darkened relaxation target.

The distinction would be invalid for an arbitrarily rescaled level-set function. It works here because the effective potential fixes the physical normalization.

## The experiment

The dynamics are a single-layer forced-damped shallow-water model with viscosity-free semi-Lagrangian transport in the flagship research implementation:

$$
\frac{D\Phi}{Dt}
=-\Phi\nabla_S\cdot u
+\frac{\Phi_{\mathrm{eq}}-\Phi}{\tau_{\mathrm{rad}}}
+S_{\mathrm{int}},
$$

$$
\frac{Du}{Dt}
=-\nabla_S\Phi-fn\times u-\frac{u}{\tau_{\mathrm{drag}}}.
$$

The load-bearing design is a $2\times2$ lever matrix: sphere versus oblate geometry, crossed with flat versus gravity-darkened forcing. A $\beta=0$ control removes the gravity-darkening contrast. This distinguishes a thermal target that changes with latitude from a geometric operator that changes transport and jet organization.

## Repository-recorded result

In the Program-I capstone, the spherical limit has a flat equilibrium target to numerical roundoff. At $q=0.12$, the deterministic figure-locked pole-equator geopotential contrast is recorded as $1.569\times10^{-2}$ and is nearly plateaued over the tested $N=40,52,64,80$ sequence. The $2\times2$ matrix attributes about $98\%$ of that contrast to gravity-darkening **forcing**, while changing the geometry shifts the jet band about $5.3^\circ$ equatorward.

That is the most precise interpretation: gravity-darkened heating generates the contrast; oblate geometry modulates the circulation. Geometry is not claimed to create the weather by itself in this experiment.

A preregistered ensemble recorded that increasing flattening reduced rotational variability, opposite to an earlier ad hoc expectation. The capstone reports a paired significance of $-7.71\sigma$ and a more conservative independent comparison of $-3.36\sigma$. These are model-ensemble statistics, not measurements of a real brown dwarf.

## Later cloud and tidal extensions

Program III adds a passive condensible cloud tracer and reports a roughly $2.4\times$ increase in modeled rotational light-curve variability at a stated fiducial cloud opacity. It also explores a companion-locked tidal egg and a two-layer probe. The source explicitly limits the claims: the cloud does not feed back on dynamics, the amplification depends on opacity, the tidal headline is quoted only inside the stable fill range, and the two-layer eddies are resolution-limited.

The most interesting later observational conclusion is a degeneracy: one rotational light curve can confuse figure, spots, and clouds. Phase locking, harmonic content, wavelength dependence, and time-domain behavior are proposed discriminants, but no real figure is inferred from a light curve.

## What this does not establish

- $\Phi$ is a layer geopotential or thickness proxy, not brightness by itself.
- Axisymmetric gravity darkening changes inclination-dependent mean flux but produces essentially no rotational modulation without non-axisymmetric weather or clouds.
- The Roche point-mass figure overstates some forcing relative to a finite-density Maclaurin figure; the program records roughly a $76\%$ difference at matched flattening.
- No brown-dwarf figure in this work is directly measured; flattening is hydrostatically inferred from assumed spin and structure.
- The explicit core's calibrated stable range ends before the fastest near-breakup cases.
- A successful shallow-water mechanism is not a three-dimensional brown-dwarf atmosphere.

## Source trail

Synthesized from `research/brown_dwarf/433_oblate_brown_dwarf.md`, `449_obd_program_summary.md`, `599_obd_program_iii_capstone.md`, the promoted `src/core/oblate_figures.jl`, and the local repository's P7/P9 manuscript descriptions. Numerical statements here are repository-recorded and were not rerun during the Rome import.

## Open questions

- Does the forcing-versus-geometry separation persist in a vertically resolved model with cloud feedback?
- Which observable combination can distinguish a phase-locked tidal figure from long-lived spots and stochastic clouds?
- How does uncertainty in the interior model propagate from spin to inferred flattening and then to predicted variability?
- Can the high-$q$ stability frontier be extended without introducing a dissipation parameter that obscures the geometry signal?
