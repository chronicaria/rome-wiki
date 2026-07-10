---
title: Geometry as forcing in planetary surface PDEs
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, applied-pdes, planetary-science, geometry, exometeorology]
as_of: 2026-07-09
---
In Andrew's surface-PDE program, changing a world's figure changes the metric, differential operators, and normal-dependent forces, so geometry can alter dynamics even when the conventional forcing parameters are held fixed.

Up: [[BealeSurfaceSolver research (MOC)]]

## What “forcing” means here

The phrase does not mean that curvature is always an extra body-force vector. It means that the geometry enters load-bearing parts of the PDE:

$$
\nabla_\Gamma\cdot v
=\frac1{\sqrt g}\partial_i(\sqrt g,v^i),
\qquad
\Delta_\Gamma u
=\frac1{\sqrt g}\partial_i(\sqrt g,g^{ij}\partial_j u),
$$

$$
f_\Gamma=2\Omega\cdot n.
$$

Changing the surface changes $\sqrt g$, $g^{ij}$, and $n$. It therefore changes transport distances, modal spectra, wave propagation, Coriolis organization, and flux convergence before any radiative, stochastic, or mechanical forcing coefficient is changed.

The strongest experiment holds everything else fixed and changes only the figure. A second control rescales the figures to equal area when total size could otherwise confound the comparison. The claim should then be stated as an operator or geometry effect, not as “shape alone creates weather” in every model.

## Positive examples in the repository

### Spectral fingerprints

On the sphere, Laplace–Beltrami eigenvalues have rotational degeneracies. A triaxial figure breaks the symmetry and splits those multiplets. This is a particularly clean geometry signal because it can be checked against the known sphere ladder and does not depend on an arbitrary weather forcing.

### Energy-balance climate

In the repository's Budyko–Sellers-style energy-balance model,

$$
(B I-D\Delta_\Gamma)T=Qas(x)-A,
$$

the oblate surface changes lateral heat transport through $\Delta_\Gamma$. An early comparison overstated the effect by also changing total area. After an equal-area correction, the recorded $c/a=0.8$ experiment still shows about a $29.9\%$ reduction in pole-to-equator temperature contrast and a poleward ice-line displacement in the tested parameter sets. The corrected result is stronger epistemically because it survived removal of a real confound.

### Hotspot and wave organization

In forced shallow water, figure changes can move gyres, jets, or a hotspot while leaving the overall day-night amplitude nearly unchanged. This separates two questions: radiative and drag timescales largely set **how much** contrast survives, while geometry can influence **where** patterns sit. The observed effect depends on symmetry breaking, diagnostic choice, resolution, and model closure.

### Oblate brown dwarfs

The flagship self-luminous experiment goes one step further. Its effective-potential gradient supplies both geometry and a gravity-darkened equilibrium target. A lever matrix separates the metric/normal effect from the thermal forcing effect. See [[One gradient two physics in oblate brown-dwarf weather]].

## Nulls and corrections are part of the thesis

Geometry is not automatically the dominant lever. The repository's converged single-surface WASP-43b investigation records a small displacement with a corrected sign and concludes that the planet's weak real deformation cannot explain the reported $-13.4^\circ$ latitude. A richer model also fails to generate the observation without an external symmetry-breaking seed. The scientific statement is therefore bounded: geometry produces a measurable model effect in some regimes, but it does not explain that particular observation.

Similarly, the brown-dwarf lever matrix reports that gravity-darkening forcing supplies most of the deterministic pole-equator contrast, while geometry mainly shifts a jet band. In that setting geometry is a modulator and coordinate structure, not the primary generator of thermal contrast.

## A disciplined experimental design

A geometry-as-forcing claim is strongest when it includes:

1. a sphere regression through the same general operator;
2. an equal-area or otherwise physically matched figure sequence;
3. a manufactured-solution convergence table on every geometry used;
4. a forcing-only, geometry-only, both, and neither lever matrix where the model permits it;
5. a diagnostic whose coordinate definition is consistent across figures;
6. resolution and stencil-regime sensitivity;
7. a statement of whether the result is a numerical mechanism, a physical forecast, or an observational inference.

This turns “shape matters” from a slogan into a falsifiable program: it identifies the term through which shape enters, predicts which observable should move, and names the null experiment that would make the claim disappear.

## Source trail

Synthesized from `docs/overview.md`, `docs/exometeorology.md`, the Phase-1/2/3 result summaries, the equal-area EBM correction, the WASP-43b pipeline verdict, and the brown-dwarf capstones.

## Open questions

- Is there a dimensionless parameter that predicts when metric forcing competes with radiative, drag, or topographic forcing?
- Which observables are invariant enough across coordinate choices to compare strongly deformed figures fairly?
- Can shape-induced spectral splitting or achromatic phase signatures be isolated above realistic observational systematics?
- Where does geometry cease to be a perturbation and instead trigger a qualitative bifurcation in the dynamics?
