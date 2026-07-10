---
title: Scientific machine learning benchmark design
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, scientific-machine-learning, benchmarking]
---

A useful scientific-machine-learning benchmark is a controlled experiment on numerical reliability: it separates interpolation from physical generalization, reports error by scale and regime, prices the complete workflow, and makes failures reproducible.

Up: [[Applied PDE research frontier 2026]]

Related: [[Operator learning versus numerical solvers]] · [[Neural operators]] · [[Learned closures for turbulent flows]]

## Why it matters

A low test loss is not yet evidence that a learned PDE model is useful. The number may describe a narrow interpolation task, hide rare but consequential failures, inherit error from the reference solver, or compare an amortized neural evaluation with only the online portion of a numerical method. In a dynamical problem, a small one-step error can also change invariants, phase, shock position, or the long-time statistical state. Benchmark design therefore determines what a reported advance means.

The central design question is not “Which architecture wins on this tensor?” It is: **under which mathematical problem, information budget, distribution shift, accuracy target, and computational accounting does a method succeed or fail?** A benchmark should let a reader answer that question without reverse-engineering undocumented preprocessing or rerunning an entire paper.

This is especially important because “PDE learning” joins several distinct tasks. A surrogate may approximate a solution operator over coefficients and initial data; an autoregressive emulator may advance a state; a physics-informed method may solve one instance without labeled trajectories; a learned closure may be coupled to a conventional discretization; and an inverse method may infer parameters from observations. These tasks have different baselines and failure modes. A single leaderboard that collapses them into one normalized error confuses different scientific claims.

PDEBench helped establish a reusable suite with generation code, datasets, classical and ML baselines, multiple PDE families, and metrics beyond aggregate error. PDEArena emphasized common training infrastructure for time-dependent PDE surrogates. The Well expanded the range and scale of expert-generated physical simulations. These resources make comparison easier, but no dataset can substitute for an explicit experimental contract. Benchmark quality lives in the split, task definition, metrics, reference hierarchy, and reporting ledger as much as in the stored arrays.

## Start from a claim, not a dataset

Every benchmark card should state the claim it can test. Examples include:

- interpolation across initial conditions at fixed equation parameters;
- extrapolation to unseen Reynolds numbers, forcing spectra, geometries, or boundary conditions;
- stable rollout beyond the training horizon;
- recovery of a mesh-independent continuum operator;
- sample-efficient adaptation from a pretrained PDE model;
- acceleration at a specified error tolerance;
- robust parameter inversion under specified noise and sensor placement.

The claim fixes the unit of generalization. If the intended object is a parametric solution operator

$$
\mathcal G:(a,u_0,f,g)\longmapsto u,
$$

then the benchmark must say which arguments vary. Here $a$ may denote coefficients or physical parameters, $u_0$ initial data, $f$ forcing, and $g$ boundary data. Randomly splitting snapshots from the same trajectories tests something much weaker than withholding entire draws of $(a,u_0,f,g)$. Likewise, holding out time indices from a trajectory does not independently test generalization across physical instances.

The mathematical specification should include the PDE in dimensional or clearly nondimensional form, domain, initial and boundary conditions, parameter ranges, regularity assumptions, forcing law, output variables, and evaluation horizon. A named equation is insufficient: compressible Euler with smooth subsonic flow is not the same problem as Euler with shocks; Navier–Stokes at one viscosity and periodic boundaries is not a generic fluid benchmark. Units and nondimensional groups such as Reynolds, Mach, Péclet, or Courant numbers make regimes comparable and expose accidental scaling changes.

## Build a split that tests the intended generalization

The safest split is by independent physical realization before any windowing or augmentation. All time windows, spatial crops, resolutions, and derived variables from one simulation seed belong to one partition. Otherwise near-duplicate states can cross from training to test and inflate apparent skill.

A diagnostic suite should contain several named partitions rather than one “test set”:

1. **In-distribution interpolation.** New realizations sampled from the training law. This measures basic fit and optimization health.
2. **Parameter shift.** Intervals or combinations of physical parameters are withheld. Interpolation gaps and true extrapolation beyond the training range should be labeled separately.
3. **Initial-condition or forcing shift.** The spectral content, correlation length, amplitude, or family of inputs changes.
4. **Geometry and boundary shift.** Domains, meshes, obstacles, or boundary-condition types differ. This is essential for claims of geometric generality.
5. **Resolution shift.** Training and evaluation grids differ while representing the same continuum problem. Both refinement and coarsening matter.
6. **Temporal shift.** Evaluation extends beyond the training rollout horizon or uses a different output cadence.
7. **Stress regimes.** Rare events, shocks, boundary layers, bifurcations, high gradients, or conservation-sensitive states are deliberately oversampled and reported separately.

Each shift should change one axis when possible. If viscosity, forcing, resolution, and horizon all change together, failure is scientifically interesting but not diagnostic. A factorial design can then add combined shifts after single-axis tests identify mechanisms.

For pretrained or foundation models, contamination control becomes part of the split. The benchmark must record every pretraining dataset and derived representation available to the model. A downstream trajectory that also appeared in pretraining is not a clean zero-shot test. When exact provenance cannot be established, the result should be labeled “open-book” or “pretraining overlap unknown,” not silently presented as transfer.

## Reference solutions are measurements, not truth

Most PDE datasets contain numerical approximations $u_h$, not exact continuum solutions $u$. The observed model error satisfies

$$
\|\widehat u-u\|\leq \|\widehat u-u_h\|+\|u_h-u\|,
$$

so a model-reference score below the discretization uncertainty is not evidence of continuum accuracy. It may indicate that the model reproduced solver-specific artifacts. Benchmark documentation should name the solver, discretization, mesh, time step, tolerances, stabilization, dealiasing, and software version. Random seeds and generation scripts should be preserved.

Where analytic solutions or manufactured solutions are available, use them for unit tests. For realistic cases, perform a convergence study with at least one finer resolution and report an error estimate in the same norms used for models. A second method with different numerical biases is valuable for selected cases. Conservation residuals should be checked on the reference data too: a learned model cannot be fairly penalized for exceeding a “truth” that already violates the advertised balance at the same scale.

Training data and reference evaluation need not use the same grid. A strong protocol stores or regenerates a high-resolution reference, maps predictions and baselines onto a declared comparison space, and applies the same interpolation or projection to every method. Downsampling should be conservative for conserved quantities. Naive point sampling can erase shocks, alias high frequencies, or alter integrals.

## Metrics must expose where error lives

For a field prediction $\widehat u$ and reference $u$, relative $L^2$ error is a useful starting point,

$$
E_{2}=\frac{\|\widehat u-u\|_{L^2(\Omega)}}{\|u\|_{L^2(\Omega)}+\varepsilon},
$$

but it is not a sufficient endpoint. The small $\varepsilon$ convention must be specified, particularly for components that cross zero. Aggregate means should be accompanied by medians, quantiles, per-trajectory distributions, and confidence intervals across both data draws and training seeds. Reporting only the best seed converts optimization noise into a research result.

A balanced scorecard should include:

- **field accuracy:** absolute and relative $L^1$, $L^2$, and where appropriate $L^\infty$ errors, separated by variable and time;
- **derivative or Sobolev accuracy:** errors in gradients, vorticity, divergence, or an $H^1$-type norm when fluxes and small scales matter;
- **spectral accuracy:** error by wavenumber band, not merely a global Fourier-space scalar;
- **conservation and constraints:** drift in mass, momentum, energy, charge, positivity, incompressibility, or equation-specific admissibility;
- **event and structure metrics:** shock or front location, extrema, interface geometry, coherent-structure statistics, and arrival time;
- **rollout behavior:** error versus lead time, failure time at a declared tolerance, and boundedness beyond the scored horizon;
- **distributional fidelity:** long-time means, variances, correlations, spectra, or invariant measures for chaotic systems where pathwise trajectories decorrelate;
- **uncertainty quality:** coverage and calibration if the method issues probabilistic predictions.

Physics residuals require special care. For an operator $\mathcal N$ and forcing $f$, the residual

$$
r=\partial_t\widehat u+\mathcal N(\widehat u)-f
$$

depends on how derivatives are computed. Evaluating $r$ with the same stencil used during training can reward stencil-specific cancellation. Benchmarks should define an independent residual evaluator, state its resolution, and avoid comparing residual magnitudes across differently scaled equations without nondimensionalization. A small residual is evidence of approximate equation satisfaction, not automatically of closeness to the desired solution when uniqueness, boundary conditions, or stability are unresolved.

For discontinuous solutions, pointwise norms mix amplitude error with phase or shock-location error. Report both. A slightly displaced sharp front can have a large $L^2$ error while preserving its shape and speed; a diffused front may score deceptively well at coarse resolution. Conservation, front location, total variation, and weak-form residuals provide complementary information.

## Compare at matched information and accuracy

Baselines should represent the real alternatives. At minimum, include a simple persistence or climatology predictor when meaningful, a low-capacity statistical model, a standard neural architecture, and a competent numerical method. Operator-learning papers should compare against numerical solvers at several resolutions or tolerances rather than one arbitrarily expensive configuration. Learned closures should compare the coupled solver, not only offline closure labels. Inverse problems need conventional optimization or data-assimilation baselines with the same observations and prior information.

Fairness requires an information ledger. Record whether each method receives the governing equation, coefficients, mesh, boundary values, future forcing, derivatives, high-resolution labels, pretrained weights, or privileged simulator queries. Two methods using different information can still be compared, but the distinction changes the claim.

Compute comparisons need separate lifecycle columns:

- reference-data generation;
- preprocessing and storage;
- architecture search and hyperparameter tuning;
- pretraining;
- task-specific training or fine-tuning;
- single-instance inference;
- repeated online evaluation;
- hardware, precision, batch size, memory, and energy when measurable.

An amortized surrogate is advantageous only after enough queries. If conventional solve cost is $C_s$, training plus data cost is $C_0$, and surrogate evaluation costs $C_m$, the nominal break-even query count is

$$
N_* = \frac{C_0}{C_s-C_m}, \qquad C_s>C_m.
$$

This simple expression is incomplete—it omits error, maintenance, and distribution shift—but forces transparent accounting. The more meaningful plot is a Pareto frontier of wall time, memory, and accuracy. “Speedup” should always name the accuracy target and include data-transfer costs. See [[Operator learning versus numerical solvers]] for the broader decision logic.

## Reproducibility is part of the measured object

A benchmark result should be reconstructible from a versioned manifest. The manifest fixes dataset hashes, split identifiers, normalization statistics computed from training data only, variable ordering, coordinate conventions, missing-data rules, interpolation operators, metric code, random seeds, dependency versions, and hardware. Model selection must use validation data; the hidden or locked test set should not become an iterative development set.

Normalization is a common leakage channel. Global statistics computed across train, validation, and test expose information about shifted regimes. Per-trajectory normalization can also erase physically meaningful amplitude differences and give the model statistics unavailable at deployment. The benchmark should publish both the transformation and the information required to invert it.

Reproducibility does not mean freezing a benchmark forever. Dataset and metric defects require corrections. Version numbers, changelogs, immutable prior splits, and result provenance allow the suite to evolve without silently invalidating comparisons. A leaderboard should require executable predictions or archived outputs, not only self-reported scalar scores. Evaluation code should test tensor shapes, units, boundary conventions, NaNs, and trivial exploits.

## A practical benchmark card

For each task, publish one compact card with:

1. PDE, variables, units, domain, conditions, and regime.
2. Learning task and input/output contract.
3. Sampling law and the independent unit assigned to splits.
4. Named in-distribution, shift, and stress partitions.
5. Reference solver, discretization, convergence evidence, and data license.
6. Allowed external data and pretraining disclosure.
7. Baselines with matched information.
8. Primary metric plus a diagnostic metric panel.
9. Training, tuning, and evaluation budgets.
10. Seed policy and uncertainty reporting.
11. Compute and amortization ledger.
12. Versioned code, hashes, and a known-limitations section.

The primary metric is useful for sorting, but publication decisions should not rest on a rank alone. A method that improves average $L^2$ error while worsening conservation, tails, and compute may be a legitimate tradeoff rather than a universal improvement. Results should therefore be presented as profiles or Pareto sets, with explicit deployment priorities.

## What good failure reporting looks like

The benchmark has succeeded when it explains failure. Slice results by parameter, time, scale, boundary proximity, and event type. Plot error distributions and worst cases. Distinguish numerical divergence, nonphysical states, memory exhaustion, unstable training, and ordinary loss of accuracy. Predeclare invalid-run handling so failures are not excluded post hoc.

Negative results should identify whether the limiting factor is approximation, data coverage, optimization, resolution, or coupling. For example, strong one-step accuracy with unstable rollout suggests a dynamical or exposure-bias problem; stable large-scale statistics with poor trajectory error may be acceptable for a climate-like objective; conservation drift under resolution shift suggests that the representation learned grid correlations rather than a robust balance law. These diagnoses generate research questions that a single leaderboard number cannot.

## Sources

- [Takamoto et al., “PDEBench: An Extensive Benchmark for Scientific Machine Learning,” NeurIPS 2022](https://proceedings.neurips.cc/paper_files/paper/2022/hash/0a9747136d411fb83f0cf81820d44afb-Abstract-Datasets_and_Benchmarks.html) — primary benchmark paper; tasks, datasets, baselines, and multi-part evaluation metrics.
- [PDEBench official repository](https://github.com/pdebench/PDEBench) — generation, training, evaluation code, dataset access, and reproducibility artifacts.
- [Gupta and Brandstetter, “Towards Multi-spatiotemporal-scale Generalized PDE Modeling,” Transactions on Machine Learning Research, 2023](https://openreview.net/forum?id=dPSTDbGtBY) — primary PDEArena paper defining common surrogate tasks and evaluation across scales.
- [PDEArena documentation](https://pdearena.github.io/pdearena/) — maintained framework and benchmark implementation.
- [Ohana et al., “The Well: a Large-Scale Collection of Diverse Physics Simulations for Machine Learning,” NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/4f9a5acd91ac76569f2fe291b1f4772b-Abstract-Datasets_and_Benchmarks_Track.html) — primary dataset paper covering 16 expert-generated simulation datasets and benchmark use.
- [Herde et al., “Poseidon: Efficient Foundation Models for PDEs,” NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/84e1b1ec17bb11c57234e96433022a9a-Abstract-Conference.html) — primary foundation-model paper illustrating pretraining, sample-efficiency, and unseen-physics evaluation claims.

## Open questions

- How can benchmark suites estimate continuum error without making high-resolution reference generation prohibitively expensive?
- Which metrics best distinguish harmless phase error from destructive structural error in chaotic and discontinuous systems?
- How should pretraining overlap be audited when foundation-model corpora combine many simulations with incomplete provenance?
- Can hidden-test evaluation remain scientifically inspectable while resisting years of adaptive overfitting to a public benchmark?
- What minimum energy and lifecycle accounting is practical across heterogeneous accelerators and numerical codes?
- How should uncertainty calibration be scored when the reference solution itself has discretization and model-form uncertainty?
