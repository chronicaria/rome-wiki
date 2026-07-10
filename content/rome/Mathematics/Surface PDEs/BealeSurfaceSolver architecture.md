---
title: BealeSurfaceSolver architecture
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, scientific-computing, julia, surface-pdes, software-architecture]
as_of: 2026-07-09
---
BealeSurfaceSolver separates a reusable Julia surface-PDE package from verification routines, standalone research experiments, provenance, visualization, and manuscripts.

Up: [[BealeSurfaceSolver research (MOC)]]

## Package spine

The top-level module loads the code in a dependency-aware order:

1. `src/core/` defines vectors, level-set types, cut points, solver options, grid construction, topology, equilibration, metrics, and promoted oblate/tidal figures.
2. `src/operators/` implements matrix-free and sparse Laplace–Beltrami operators plus surface-mode utilities.
3. `src/numerics/` provides GMRES and later mimetic, structure-preserving, weak-Hodge, and surface-adjoint machinery.
4. `src/pdes/` contains diffusion, reaction–diffusion, advection, sphere shallow water, generalized forced shallow water, and quadrature helpers.
5. `src/solve_surface_pde.jl` ties a `SurfaceProblem` to a readable high-level workflow.
6. `src/verification/`, `src/cli/`, and `src/io/` keep table reproduction, command-line dispatch, and outputs out of the mathematical core.

The central data flow is

$$
\text{level set}
\rightarrow \text{cut-point grid}
\rightarrow \text{primary/secondary topology}
\rightarrow \text{equilibration map}
\rightarrow \text{surface operator}
\rightarrow \text{time integrator or linear solve}.
$$

This is a useful conceptual boundary: changing the surface belongs at the first stage; changing the PDE should reuse the geometry and topology whenever possible.

## Public mathematical objects

The package exports concrete level sets such as spheres, ellipsoids, tori, functional level sets, and promoted Roche, Maclaurin, and tidal figures. A `SurfaceSolver` holds the discretized geometry. Operator calls apply or assemble the Laplace–Beltrami map; high-level problem objects select the equation, geometry, resolution, and time options.

The generalized shallow-water API adds geometry fields derived from $\nabla\phi$ and a `ForcedSWEParameters` object. The structure-preserving and adjoint modules expose more specialized primitives, but those should be read with their own tests and research documentation rather than assumed to be the default solve path.

## Package code versus research code

The distinction is load-bearing:

- `src/` is the promoted reusable package surface.
- `test/` and `src/verification/` are the package-level regression and paper-table checks.
- `research/implementations/` contains a large collection of self-contained experimental solvers and demonstrators. Some are mature and heavily verified; many are not yet promoted.
- `research/reference/` stores extracted source material, validation harnesses, evidence notes, claims ledgers, and saved results.
- `research/viz/` turns data products into figures and movies.
- `research/papers/` contains manuscripts and claims ledgers at different stages of preparation.
- `research/phase*` and `research/brown_dwarf/` record plans, result one-pagers, progress, capstones, and caveats.

A working script under `research/implementations/` proves that an idea is executable in its tested setting. It does not automatically make the feature a stable public API. Promotion requires a reusable interface, additive regression tests, and an explicit decision about which assumptions belong in package defaults.

## Reproducibility architecture

The best result lines use a chain of artifacts: a driver writes data and metadata; a verifier recomputes metrics; a claims ledger records the number and its provenance; a figure builder reads the frozen data; a manuscript cites the ledger. Brown-dwarf work adds golden runs and null controls. This design is more reliable than preserving a conclusion only in prose.

The repository also contains large generated outputs and active working files. A future release should distinguish regenerable artifacts from canonical evidence and attach commit/data hashes to the latter.

## Source trail

Synthesized from `README.md`, `docs/repository_map.md`, `docs/algorithm.md`, `src/BealeSurfaceSolver.jl`, and the `research/` dossier index.

## Open questions

- Which standalone implementations are ready for promotion, and which should remain paper-specific references?
- Can a single experiment manifest construct the solver, run it, verify it, and regenerate its figure from a clean checkout?
- Should the package define explicit stability or admissibility diagnostics before starting an expensive run?
- How should research-output storage be separated from source control without losing claim provenance?
