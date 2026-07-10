---
title: BealeSurfaceSolver research (MOC)
created: 2026-07-09
source: llm
status: seed
tags: [moc, mathematics, applied-pdes, surface-pdes, numerical-analysis]
as_of: 2026-07-09
---
# BealeSurfaceSolver research

Andrew's BealeSurfaceSolver program studies partial differential equations on smooth closed surfaces whose geometry is supplied by a level-set function rather than a fitted surface mesh.

Up: [[Mathematics]] · Related: [[Exometeorology research frontier 2026]]

## Start here

- [[Beale cut-point method for surface PDEs]] — the mathematical and numerical foundation.
- [[BealeSurfaceSolver architecture]] — how the Julia package, verification code, experiments, manuscripts, and provenance fit together.
- [[BealeSurfaceSolver research status and open frontier]] — what is implemented, what has evidence behind it, and what remains unresolved.

## Geometry and discretization

- [[Equilibration in the Beale cut-point method]] — how secondary cut-point values are reconstructed from the independent primary values.
- [[Level-set geometry for surface conservation laws]] — the Hessian-free area factor, surface divergence, normal, and Coriolis terms.
- [[Verification ladder for BealeSurfaceSolver]] — regression, manufactured solutions, convergence, conservation, ablations, and adversarial checks.

## Physical models

- [[Forced-damped shallow-water equations on a level-set surface]] — the single-layer weather model and its numerical realizations.
- [[Geometry as forcing in planetary surface PDEs]] — the program's central scientific hypothesis and its strongest positive and null results.
- [[One gradient two physics in oblate brown-dwarf weather]] — the flagship effective-potential experiment.

## A useful reading order

1. Begin with the cut-point method and its assumptions.
2. Read the level-set geometry note to see how a change in shape enters a conservation law.
3. Read the shallow-water note for the main dynamical model.
4. Use the verification ladder before treating any numerical result as scientific evidence.
5. End with the program-status note, which separates package capability, research implementations, working manuscripts, and open claims.

## Source snapshot

These notes synthesize the local repository `Desktop/Code/BealeSurfaceSolver_reorganized` as inspected on 2026-07-09. The primary source paths are its `README.md`, `docs/`, `src/`, `test/`, and `research/` trees. The repository itself was not modified during this import.

## Open questions

- Which parts of this research program should become a formal sequence of mathematical research notes rather than project-oriented summaries?
- Which manuscript should be treated as the canonical statement of the method after Andrew freezes the present working tree?
- Should future Rome imports preserve result-level provenance down to individual data products and commit hashes?
