---
title: BealeSurfaceSolver research status and open frontier
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, applied-pdes, research-program, surface-pdes, open-problems]
as_of: 2026-07-09
---
BealeSurfaceSolver is an active research laboratory with a functioning geometry-general package core, a much larger experimental solver library, several manuscript programs, and important unresolved questions in analysis, stability, calibration, and publication.

Up: [[BealeSurfaceSolver research (MOC)]]

## Snapshot status

The local repository identifies the software as `BealeSurfaceSolver` version `0.1.0`, authored by Andrew Park and licensed under MIT. Its latest inspected commit is dated 2026-06-21, while the working tree contains extensive staged and untracked simulation outputs, research drivers, manuscripts, and later brown-dwarf program artifacts. This means the 2026-07-09 snapshot is an active laboratory state, not a clean tagged release.

The source documents repeatedly report a green Julia suite, and package tests cover the core discretization plus promoted structure-preserving, adjoint, and oblate-figure features. This Rome import did not run the full campaign or normalize the working tree. Claims below are therefore descriptions of the repository's recorded evidence, not new independent certification.

## What is implemented in the reusable package

- smooth closed surfaces represented by built-in or functional level sets;
- Cartesian-grid cut-point construction and primary/secondary topology;
- sparse equilibration and reduced surface operators;
- matrix-free and sparse Laplace–Beltrami diffusion;
- explicit and implicit diffusion time stepping with GMRES support;
- Turing-style reaction–diffusion;
- sphere advection and Williamson shallow water;
- geometry-general forced-damped shallow water on arbitrary admissible level sets;
- generic quadrature and selected mimetic, structure-preserving, weak-Hodge, and adjoint primitives;
- promoted oblate, Maclaurin, and tidal-figure geometry utilities;
- command-line, output, and benchmark-table paths.

This is already enough to make the central computational claim meaningful: the same geometry and operator machinery can run multiple PDE families on more than one surface.

## What exists as research infrastructure

The `research/implementations/` directory contains over one hundred Julia drivers in the inspected snapshot. They range across energy-balance climate, surface modes, quasi-geostrophy, semi-Lagrangian transport, higher-order pattern equations, magnetism, moving surfaces, inverse problems, shallow-water MHD, radiative-transfer proxies, planetary applications, and cross-disciplinary surface dynamics.

Breadth is not uniform maturity. Some drivers have manufactured solutions, conservation gates, parameter sweeps, independent verifier notes, and paper-ready figures. Others are demonstrators, boundary probes, or failed experiments preserved for diagnosis. The repository's result index and phase capstones are useful maps, but the strongest scientific unit remains an individual claim with its own code, parameters, saved output, verification, and caveats.

## Strongest established threads in the repository record

### Geometry-general numerical core

The sphere regression, ellipsoid diffusion, geometry-general metric identity, and manufactured-solution tables support the cut-point method as a practical second-order engine over its tested smooth-surface regime. This is the mathematical spine described in [[Beale cut-point method for surface PDEs]].

### Geometry-sensitive planetary PDEs

The clearest positive results are those with exact or manufactured anchors and matched controls: Laplace–Beltrami mode splitting, equal-area energy-balance climate changes, forced shallow-water geometry sweeps, moving-surface demonstrations, and the one-gradient brown-dwarf lever matrix. See [[Geometry as forcing in planetary surface PDEs]].

### Structure and inverse methods

Later promoted modules explore mimetic operators, energy/enstrophy-preserving vorticity evolution, weak Hodge projection, and surface adjoints. These make the repository more than a catalog of forward simulations: it also contains the beginnings of long-time conservative dynamics and PDE-constrained retrieval.

## Claims that remain bounded or provisional

- There is no general convergence proof for the equilibration-reduced operator.
- Mixed-sign interpolation prevents a general monotonicity or positivity guarantee.
- Hyperbolic dynamics remain less robust than elliptic and parabolic problems, especially on extreme figures.
- The viscosity-free weather research path still has a checkerboard wave mode and fails on some triaxial Jacobi states.
- The packaged shallow-water closure omits the active-layer momentum exchange and vertical structure.
- Many astrophysical numbers are nondimensional or model-internal rather than calibrated predictions for measured bodies.
- The WASP-43b latitude problem is a bounded null, not a success of geometry alone.
- Several manuscripts are described as in preparation; a repository manuscript is not evidence of peer review or publication.
- Extensive uncommitted working artifacts make commit-level reproduction of the newest claims harder until the tree is frozen.

## A prioritized mathematical frontier

1. **Analysis of equilibration.** Establish stability and consistency bounds for $L_hE_h$ on a quantitative class of surfaces; determine whether a variational or energy argument can replace the unavailable maximum principle.
2. **Positivity and monotonicity.** Develop a flux-limited or otherwise bound-preserving surface operator for reaction and transport problems without sacrificing geometry generality.
3. **Hyperbolic stabilization.** Control the checkerboard mode and extreme-figure instability with a semi-implicit, compatible, or carefully filtered method whose dissipation is measurable rather than tuned invisibly.
4. **Moving-surface conservation.** Couple cut-point rebuilding to a discrete geometric-conservation law and quantify transfer error when degrees of freedom change.
5. **Package promotion.** Move only the best-verified semi-Lagrangian, climate, and higher-order primitives into `src/`, each with cold tests and stable interfaces.
6. **Frozen reproducibility.** Tag a release, reduce generated-file noise, and bind every manuscript claim to a code revision, manifest, seed, and data hash.

## A prioritized scientific frontier

1. Turn idealized parameter sweeps into dimensionally calibrated forecasts with uncertainty.
2. Replace grey or proxy observables with wavelength-dependent radiative transfer where the question requires it.
3. Separate figure, cloud, spot, and circulation signatures under realistic correlated noise.
4. Use the solver where its geometry advantage is structural: changing topology, moving boundaries, or directly measured non-spherical figures.
5. Treat model failure as information: specify whether a null belongs to the physical hypothesis, the closure, the diagnostic, or the numerical stability envelope.

## Source trail

Synthesized from the package metadata, repository map, current source exports, test layout, result index, Phase-1 through Phase-5 capstones, and the brown-dwarf Program-I/III capstones in the local repository.

## Open questions

- Which two or three claims should define the first frozen public release and paper submission?
- Can the strong elliptic/parabolic results be published independently of the more fragile atmospheric program?
- What minimum external cross-validation would make the geometry-as-forcing results persuasive beyond the cut-point codebase?
- Which newest working-tree artifacts are canonical, and which are regenerable or superseded?
