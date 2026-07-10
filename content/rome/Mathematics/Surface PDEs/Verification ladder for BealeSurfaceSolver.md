---
title: Verification ladder for BealeSurfaceSolver
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, numerical-analysis, verification, surface-pdes, reproducibility]
as_of: 2026-07-09
---
BealeSurfaceSolver results are most credible when they climb from algebraic identities and exact benchmarks through convergence, conservation, ablations, independent reruns, and finally domain-specific interpretation.

Up: [[BealeSurfaceSolver research (MOC)]]

## Why a ladder is necessary

A simulation that stays finite is not necessarily accurate, and an accurate PDE discretization does not automatically validate a scientific interpretation. The repository mixes package code, standalone research modules, result ledgers, manuscripts, and exploratory plans. Each layer answers a different question.

A useful evidence ladder is:

1. **Code-path inspection** — is the claimed equation actually implemented?
2. **Algebraic regression** — does the general expression reduce to a known special case?
3. **Exact or manufactured solution** — does the discrete error converge at the expected order?
4. **Conservation or budget closure** — does the scheme respect the invariant or source balance relevant to the model?
5. **Nulls and ablations** — does the signal vanish when its proposed mechanism is removed?
6. **Resolution and parameter robustness** — does it persist beyond one grid and one tuning choice?
7. **Independent verification** — can someone other than the result's producer recompute it from saved artifacts or a cold run?
8. **Scientific calibration** — are units, physical parameters, observational degeneracies, and model limitations treated honestly?

No later rung repairs a missing earlier one. A visually compelling flow field cannot substitute for a manufactured-solution test, and second-order convergence cannot establish that a one-layer atmosphere represents a real planet.

## Algebraic and benchmark anchors

The geometry-general shallow-water path has a clean spherical limit. For the unit sphere, the normal, metric area factor, Coriolis parameter, and weighted-flux divergence reduce to Beale's sphere formulas. In recorded Williamson-2 runs, the generic path gives

| Resolution | Generic $L_2(\Phi)$ | Beale table value |
|---:|---:|---:|
| $N=80$ | $1.115\times10^{-2}$ | $1.13\times10^{-2}$ |
| $N=160$ | $2.991\times10^{-3}$ | $3.03\times10^{-3}$ |

The generic and specialized implementations differ at the scale expected from their finite-difference realizations, and the difference shrinks under refinement. This checks implementation consistency; it is not yet an off-sphere accuracy result.

The diffusion and Laplace–Beltrami paths also reproduce sphere eigenvalues and published diffusion tables in the repository's verification routines. These are strong anchors because the exact structure is known before the experiment is run.

## Manufactured solutions off the sphere

When no natural exact solution exists on an ellipsoid, the repository uses the method of manufactured solutions: choose a smooth field $u^*$, insert it into the continuous equation, and define the residual as a forcing so that $u^*$ is exact by construction. Refining the cut-point grid then tests the operator independently of the scientific forcing.

For geometry-general shallow water, the research records approximately $1.94$–$2.00$ order in geopotential and momentum on sphere, oblate, and strongly triaxial test surfaces. Non-sphericity raises the error constant but does not erase the measured second-order trend in the tested range.

The day-night equilibrium $\max(0,n\cdot\hat s)$ is a deliberate counterexample to naive order claims: it has a kink at the terminator. The recorded order falls when that kink is unresolved and returns toward two when a grid-resolved smooth transition is used. The lesson is general: an operator's formal order cannot outrun the regularity of its data.

## Conservation and structure

Different equations require different budgets:

- diffusion should dissipate an appropriate norm;
- unforced shallow water should control total layer mass and, depending on the formulation, energy or potential-vorticity quantities;
- forced-damped flow should close the balance between resolved tendency and explicit source or sink;
- reaction–diffusion should preserve physical bounds only if the numerical method actually has that property;
- moving-surface problems need a geometric-conservation accounting as well as a field equation.

The repository uses an Appendix-B cut-point quadrature to approximate surface integrals. Some standalone research modules report machine-level mass fixes or machine-level energy and enstrophy drift in specially constructed structure-preserving schemes. Those statements belong to those modules and their tested configurations; they should not be silently transferred to the default MacCormack solver.

## Ablations that support causal interpretation

The most informative experiments change one lever at a time. Examples recorded in the repository include:

- sphere versus non-spherical geometry at fixed forcing;
- one-gradient gravity-darkened forcing versus a flat-forcing control on the same oblate surface;
- $\beta=0$ in the brown-dwarf equilibrium target, which removes gravity-darkening contrast;
- equal-area versus unequal-area oblate climate comparisons, which exposed and corrected a size confound;
- cloud-off, still-atmosphere, and no-geometry controls in later brown-dwarf work;
- stable states versus diverged triaxial Jacobi states, where a NaN result is explicitly not interpreted as a physical absence of superrotation.

These controls are more valuable than a larger catalog of unablated simulations because they discriminate mechanism from correlation.

## Failure evidence is part of verification

Several negative results define the method's boundary:

- a coarse distorted ellipsoid can lack enough admissible cut-point neighbors;
- mixed-sign equilibration prevents a general M-matrix or positivity guarantee, and a reaction–diffusion path exhibited overshoot;
- the default hyperbolic core needs numerical stabilization;
- a viscosity-free centered wave step retains a checkerboard mode;
- exact Jacobi-figure weather experiments can diverge even when the equilibrium figure itself is computed accurately;
- the single-surface geometry mechanism does not explain WASP-43b's reported off-equatorial hotspot.

Recording these failures prevents the success of one PDE family from being generalized to every surface, resolution, or physical regime.

## Provenance levels for Rome

This import uses four practical labels when reading repository material:

- **Package capability:** exported under `src/` and covered by `test/` or a package verification path.
- **Validated research implementation:** a standalone driver with a stated analytic, manufactured, conservation, or ablation gate and saved evidence.
- **Working result:** recorded in a capstone, ledger, or manuscript but still inside an active working tree.
- **Proposal or frontier:** a question, planned mechanism, or extrapolation not yet established by a passing computation.

The source documents often report a green test suite and independent verifier/blesser workflow. This Rome import inspected those records but did not rerun the large Julia research campaign. Their numerical values should therefore be described as **repository-recorded results** until independently reproduced from a frozen revision.

## Source trail

Synthesized from `docs/verification.md`, `src/verification/`, `test/`, `research/phase1_foundation/15_prototype_general_swe_results.md`, the implementation-campaign summaries, the brown-dwarf claims workflow, and the program capstones.

## Open questions

- Which minimal cold-reproduction suite should freeze the strongest paper claims at a tagged commit?
- Can every paper figure be regenerated from a manifest that records code revision, parameters, seed, and data hash?
- Which conservation laws can be proved for the discrete operators rather than only measured numerically?
- How should the repository distinguish a failed physical hypothesis from a numerical method that failed before reaching the relevant regime?
