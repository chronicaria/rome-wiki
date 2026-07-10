---
title: Operator learning versus numerical solvers
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, operator-learning, numerical-analysis, benchmarking]
---

Operator learning can make repeated predictions over a restricted family of PDE instances extremely cheap, but it does not erase the cost of producing training solutions or inherit the accuracy, stability, conservation, and out-of-distribution guarantees of a verified numerical method.

Up: [[Applied PDE research frontier 2026]]

## Two different computational contracts

A numerical PDE solver and a learned operator do not ordinarily solve the same optimization problem. For a parameter or input function $a$—a coefficient field, forcing, initial condition, geometry, or boundary datum—suppose the PDE defines a solution operator

$$
\mathcal G:a\mapsto u.
$$

A classical method chooses a discretization with scale $h$ and computes an approximation $u_h(a)$ for each requested $a$. Its offline work includes deriving and implementing the scheme, meshing, verification, and perhaps constructing a preconditioner. Its online cost is the assembly, nonlinear or linear iterations, time steps, and error-control work for this instance. Under appropriate regularity, consistency, stability, and solver tolerances, numerical analysis may establish an estimate such as

$$
\|u(a)-u_h(a)\|_X\le C(a)h^p + \varepsilon_{\mathrm{alg}}.
$$

The constant and even the validity of the rate can deteriorate near shocks, singular corners, unresolved layers, turbulence, or ill-conditioned coefficients. Nevertheless, the estimate states a recognizable contract: refine a specified discretization, control algebraic error, and approximate this PDE instance.

An operator learner instead chooses a hypothesis class $\mathcal G_\theta$, obtains training pairs $(a_i,u_i)$—usually from a numerical solver—and fits parameters by empirical optimization. Its deployed error can be decomposed conceptually as

$$
\|\mathcal G(a)-\mathcal G_{\hat\theta}(a)\|
\lesssim
\underbrace{\|\mathcal G(a)-\mathcal G_h(a)\|}_{\text{label/discretization error}}
+\underbrace{\inf_\theta\|\mathcal G_h-\mathcal G_\theta\|}_{\text{representation}}
+\underbrace{\text{finite-data error}}_{\text{sampling}}
+\underbrace{\text{optimization error}}_{\text{training}}.
$$

This is an accounting identity in spirit, not a universal a posteriori bound. The test distribution and norm determine the statistical terms. A fast neural evaluation approximates the map represented by its labels and training distribution; it is not automatically a fresh, tolerance-controlled solve of the continuum PDE.

That distinction explains the most productive division of labor. Numerical solvers are strongest when reliability for a new instance, local refinement, broad parameter change, or certified residual control matters. Operator learners are strongest in many-query regimes—uncertainty propagation, inverse problems, control, digital twins, and design loops—where a substantial offline investment can be amortized over many sufficiently similar queries. This connects operator learning to [[Reduced-order modeling for PDEs]], while [[Adjoint methods for PDE-constrained optimization]] shows why repeated forward and sensitivity solves make amortization attractive.

## What theorems do and do not establish

Kovachki et al. formulate neural operators as maps between function spaces, prove universal approximation results for continuous operators on suitable compact sets, and define discretization invariance as sharing parameters across discretizations with a continuum interpretation. These are mathematical results. They justify treating the target as an operator rather than as an unrelated finite-dimensional regression at every grid size.

They do **not** say that a finite trained model will find the approximating parameters, that a given data budget identifies them, that errors remain small outside the compact training set, or that predictions satisfy conservation, entropy, positivity, or stability constraints. Universal approximation is existential. Discretization invariance is an architectural property, not a guarantee of resolution-independent accuracy: evaluation on a finer grid may converge to the learned continuum operator while that learned operator remains biased away from the true PDE solution operator.

Likewise, classical convergence theory is conditional rather than magical. A theorem for a stable finite-volume scheme under a CFL condition is not evidence that an arbitrary production run is resolved, nor does a formal order apply through every nonsmooth regime. The fair contrast is therefore not “rigorous solver versus unprincipled network.” It is a comparison between two auditable chains of assumptions, approximations, and evidence. [[Consistency stability and convergence]] supplies the classical chain; learning adds approximation, sampling, and optimization links.

## The benchmark ledger

A credible comparison should publish enough information to reconstruct both total cost and achieved fidelity. The following ledger prevents a cheap inference pass from being compared with an expensive high-accuracy reference solve while hiding the work that made the inference possible.

### 1. Define the task and admissible distribution

Specify the PDE, domain, dimensions, variables, coefficients, initial and boundary conditions, parameter ranges, geometry family, requested time horizon, and output quantities. State the probability distribution used to draw training, validation, and test examples, including correlations and exclusions. If the classical method is asked to solve any admissible input while the learner is tested only on an interpolation distribution, say so explicitly.

Separate at least four tests: interpolation in the training distribution; shifted parameters or forcing; changed grid, geometry, or boundary conditions; and longer-time rollout. “OOD” is not one scalar difficulty. A viscosity just outside the training interval, a new obstacle topology, and a transition to a different dynamical regime test different failures.

### 2. Match accuracy before comparing speed

Report common physical errors on the same test instances and space-time sample set. Useful measures include relative $L^1$, $L^2$, and $L^\infty$ errors; errors in gradients or fluxes; phase and shock-location error; integral quantities; spectra or structure functions; and application outputs such as drag, lift, breakthrough time, or failure probability. Time-dependent tasks need error-versus-horizon curves, not only a one-step average.

PDEBench was designed partly because a single normalized root-mean-square error conceals important behavior. Its benchmark includes maximum error, boundary error, Fourier-band errors, and conservation-related quantities alongside standard errors. These metrics are numerical evidence on specified datasets, not general guarantees, but they make failure modes visible.

Speed comparisons should use an accuracy frontier. For each method, vary mesh, polynomial order, tolerance, time step, architecture, and precision to plot cost against error. Compare methods at matched error or compare errors at matched end-to-end cost. A claim that model A is $1000\times$ faster is scientifically incomplete if its error is larger, evaluated in a different norm, or measured against labels generated on a grid too coarse to adjudicate the difference.

### 3. Audit mesh and reference truth

Disclose the training-label grid, test grid, numerical scheme, time step, solver tolerances, and convergence study used to create “ground truth.” A held-out solution from the same coarse generator is a consistency target for that generator, not the continuum truth. Reference data should normally be produced with a demonstrably finer or higher-order calculation and checked by mesh and time-step refinement; experimental data require uncertainty and preprocessing documentation.

For resolution transfer, report training and evaluation resolutions separately and compare against a classical solver run at the evaluation resolution. Test whether error falls, plateaus, or grows under refinement. An operator architecture that accepts arbitrary point samples may avoid retraining, yet unresolved high frequencies in labels and learned spectral truncation still limit accuracy. [[Fourier neural operators]] makes this particularly concrete: grid transfer does not restore discarded modes.

### 4. Account for all offline cost

For learning, offline cost includes generating every training and validation trajectory; failed and exploratory data generation; storage and input/output; architecture search; hyperparameter tuning; all random seeds; training; checkpoint selection; and any pretraining. Report GPU/CPU type and count, wall-clock time, accelerator-hours, peak memory, numerical precision, software versions, and energy if available. State whether published training time describes the selected run only or the entire tuning campaign.

For the numerical baseline, report comparable setup: mesh generation, matrix assembly, preconditioner construction, compilation, autotuning, and reusable factorization. A fair many-query comparison may amortize a reusable preconditioner or reduced basis just as it amortizes a trained network. Conversely, charging every classical solve for one-time code development while omitting network research and tuning is not fair.

The training labels are especially important. If $N_{\mathrm{train}}$ trajectories cost $C_{\mathrm{label}}$ each, the learned method begins with roughly $N_{\mathrm{train}}C_{\mathrm{label}}$ of solver work before optimization. Synthetic data are not free merely because they are downloaded by the benchmark participant; disclose both the entrant-visible cost and the social cost of creating the dataset.

### 5. Measure online cost on matched hardware

Online timings must include preprocessing, device transfer, model evaluation, autoregressive rollouts, postprocessing, and any correction or fallback solve. Give batch size and latency as well as throughput. Large batches make accelerators efficient but may be irrelevant to a sequential controller with batch size one. Compare a GPU learner with a GPU-capable solver when one exists, or report separate hardware-normalized and deployment-realistic comparisons rather than quietly timing the baseline on a CPU.

The same precision and output burden matter. A network producing a coarse field should not be compared with a solver producing a fine field plus derived diagnostics unless those additional outputs are required by the task. Warm-up, compilation, communication, and memory capacity should be declared. Strong and weak scaling are relevant when the numerical baseline is distributed.

### 6. Compute the break-even query count

Let $C_L^{\mathrm{off}}$ and $C_N^{\mathrm{off}}$ denote reusable offline costs, and $C_L^{\mathrm{on}}$, $C_N^{\mathrm{on}}$ online cost per accepted query at matched accuracy. Then a simple break-even estimate is

$$
Q_* = \frac{C_L^{\mathrm{off}}-C_N^{\mathrm{off}}}
{C_N^{\mathrm{on}}-C_L^{\mathrm{on}}},
$$

when the denominator is positive. Report sensitivity to hardware utilization, retraining frequency, dataset reuse, and failure handling. If distribution drift forces retraining every $R$ queries, its recurring cost belongs in the numerator of each cycle. If the learner rejects or routes a fraction of cases to a full solver, include that fallback rate. The useful question is not merely whether inference is faster, but whether the expected workload exceeds $Q_*$ before the model or physics changes.

## Physics is part of accuracy

Pointwise error can look small while the prediction violates the governing balance. For a conservation law

$$
\partial_t u+\nabla\cdot F(u)=s,
$$

evaluate global and local balance defects, boundary fluxes, and the relevant jump or entropy conditions. For incompressible flow report divergence and mass flux; for energy systems report energy drift; for positive densities or concentrations count violations; for Hamiltonian or symplectic problems examine long-time invariant behavior. These checks should use conservative quadrature and the same geometry representation for every method.

A classical finite-volume method may conserve cell balances to solver tolerance but still be diffusive or inaccurate. A neural operator may achieve lower field error yet accumulate mass drift. Neither observation alone selects a winner: the acceptance thresholds must come from the intended use. Architectural conservation or a physics penalty is promising, but a small sampled residual is not equivalent to exact discrete conservation or a verified error bound, as [[Physics-informed neural networks and their failure modes]] explains.

Residual evaluation should also be independent of training. If the network was optimized using a particular discrete residual, test a finer-grid or alternative discretization of the residual to avoid measuring conformity to the training stencil. For shocks, weak-form and entropy diagnostics are more meaningful than pointwise automatic differentiation of a nonsmooth solution.

## Rollouts, uncertainty, and failure detection

Autoregressive models compound local error. Report one-step error, full-rollout error, stability statistics across seeds, and the fraction of trajectories that blow up or leave the admissible set. Benchmark beyond the training horizon where the application requires it. Chaotic systems demand statistical observables and ensemble comparisons in addition to trajectory error, since exponential separation can make pointwise long-time matching impossible even for a good solver.

Prediction without a reliability mechanism is a different product from a solver with residual-based stopping and adaptive refinement. A deployment study should test whether an uncertainty score, residual, conservation defect, or distance-to-training statistic detects bad cases. Calibration must be evaluated under shift, where it often matters most. The cost of ensembles, conformal calibration data, or fallback solves belongs in the ledger. [[Uncertainty quantification for PDE models]] describes why surrogate error is a separate uncertainty source rather than a replacement for physical and parametric uncertainty.

## Interpreting published evidence

The original Fourier neural operator experiments and the broader neural-operator study report large inference speedups over conventional solvers on Burgers, Darcy, and Navier–Stokes tasks. Those results are genuine numerical evidence for those implementations, datasets, resolutions, hardware choices, and error levels. They demonstrate that amortized learned evaluation can be compelling. They do not prove superiority over all classical solvers or certify behavior under new regimes.

PDEBench improves comparability by publishing datasets, generation code, baseline implementations, and multiple metrics across several time-dependent PDEs. PDEArena similarly standardizes training and rollout evaluation for neural PDE models. A benchmark result remains conditional on its generator, split, tuning budget, and metric; benchmark diversity reduces overfitting to one canonical problem but does not turn a leaderboard into a theorem.

The most defensible claims therefore have three labels:

- **Theorem:** under stated assumptions, an architecture approximates an operator, a discretization converges, or a structure is preserved.
- **Numerical evidence:** on named instances, grids, hardware, seeds, metrics, and budgets, one method occupies a better measured cost–accuracy region.
- **Inference:** those results suggest value for a related deployment, with explicit assumptions about distribution, workload, and acceptable failure.

Collapsing these categories produces both hype and unfair dismissal. Operator learning need not replace numerical analysis to be useful; it needs a workload in which reuse is valuable and a verification envelope that makes approximation risk visible.

## A minimum fair-comparison table

| Dimension | Required disclosure |
|---|---|
| Problem | PDE, domain, parameters, boundary/initial data, horizon, outputs |
| Distribution | train/validation/test sampling and distinct OOD shifts |
| Truth | generator, mesh, time step, order, tolerances, refinement evidence |
| Accuracy | common norms plus gradients, spectra, outputs, and horizon curves |
| Physics | conservation, constraints, residuals, invariants, stability failures |
| Learning offline | label generation, all training/tuning runs, seeds, storage, hardware |
| Solver offline | meshing, assembly, preconditioner/factorization setup, autotuning |
| Online | latency and throughput, batch size, transfers, rollout, postprocessing |
| Hardware | device models/counts, precision, memory, software, parallelism |
| Amortization | break-even queries, reuse horizon, retraining and fallback rate |
| Reliability | uncertainty calibration, rejection rule, OOD detection, failure counts |
| Reproducibility | code, configurations, raw per-case results, timing protocol |

## Sources

- [Kovachki et al., “Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs,” JMLR 24 (2023)](https://www.jmlr.org/papers/v24/21-1524.html) — primary theory and experiments: operator formulation, universal approximation, discretization invariance, and PDE examples.
- [Li et al., “Fourier Neural Operator for Parametric Partial Differential Equations,” ICLR 2021](https://openreview.net/forum?id=c8P9NQVtmnO) — primary FNO architecture, benchmark setup, and reported solver speed comparisons.
- [Takamoto et al., “PDEBench: An Extensive Benchmark for Scientific Machine Learning,” NeurIPS 2022](https://proceedings.neurips.cc/paper_files/paper/2022/hash/0a9747136d411fb83f0cf81820d44afb-Abstract-Datasets_and_Benchmarks.html) — primary benchmark paper covering datasets, baselines, and multiple physical and spectral metrics.
- [PDEBench official repository](https://github.com/pdebench/PDEBench) — authoritative generation, training, and evaluation implementation.
- [PDEArena official project and repository](https://pdearena.github.io/pdearena/) — authoritative benchmark documentation, datasets, and model-evaluation entry points.

## Open questions

- Can benchmark suites report full tuning and label-generation energy without making participation prohibitively expensive?
- Which independently evaluated residual or conservation diagnostics best predict operator-learner failure under distribution shift?
- How should cost–accuracy frontiers incorporate rare catastrophic failures when average field error remains low?
- Can adaptive hybrid systems learn when to use a surrogate, refine locally, or fall back to a classical solve while retaining an end-to-end reliability guarantee?
