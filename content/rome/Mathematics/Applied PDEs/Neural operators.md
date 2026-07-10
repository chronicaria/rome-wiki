---
title: Neural operators
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, scientific-machine-learning, operator-learning]
---

Neural operators learn a map between spaces of functions, offering amortized surrogates for families of PDE problems while leaving approximation, sampling, discretization, and distribution-shift errors to be controlled separately.

Up: [[Applied PDE research frontier 2026]]

## From one solution to a solution operator

A conventional numerical PDE calculation fixes data and computes one approximate solution. For example, given a coefficient field $a$, forcing $f$, boundary data $g$, and perhaps an initial condition $u_0$, it approximates the corresponding solution $u$. Operator learning instead treats some or all of those data as variable and tries to learn the entire input-to-solution map

$$
\mathcal G^\dagger:X\supset A\longrightarrow Y,
\qquad a\longmapsto u,
$$

where $X$ and $Y$ are function spaces and $A$ is the admissible input set. For an elliptic problem, $a$ might be a spatially varying conductivity and $u$ the solution field. For an evolutionary equation, the learned map could send an initial state to the state at a later time, or to a whole trajectory. The dagger marks the unknown target operator rather than an adjoint.

The distinction from ordinary regression is mathematical, not cosmetic. An image-to-image network acts on fixed arrays in $\mathbb R^n$. An ideal neural operator $\mathcal G_\theta$ is formulated on functions and has parameters $\theta$ independent of a particular mesh. Its inputs and outputs may later be sampled on grids, meshes, sensors, or point clouds, but the intended object is a map such as $L^2(D)\to H^1(D')$, not merely $\mathbb R^n\to\mathbb R^m$. This perspective supports evaluation at resolutions or locations different from those used in training. It does **not** make such transfer automatic.

Learning the operator is attractive when the same PDE family must be queried many times. The expensive offline stage generates solution pairs $(a_j,u_j)$ and fits $\theta$; the cheap online stage evaluates $\mathcal G_\theta(a)$ for new inputs. This amortization can matter in [[Uncertainty quantification for PDE models]], real-time control, parameter inference, and [[Adjoint methods for PDE-constrained optimization]]. It is usually a poor bargain for a single solve: generating training data and optimizing a large network can cost far more than running a mature solver once.

## What a neural-operator layer does

A widely used construction first lifts the input values and coordinates into a channel-valued function $v_0(x)$. It then composes layers of the form

$$
v_{\ell+1}(x)=\sigma\!\left(W_\ell v_\ell(x)
+\int_D \kappa_\ell(x,y;\theta)v_\ell(y)\,dy+b_\ell(x)\right),
$$

before projecting $v_L(x)$ to the output. The pointwise term $W_ℓ$ mixes channels locally; the integral kernel communicates nonlocally; the activation $\sigma$ makes the map nonlinear. Because the kernel acts on a function rather than a fixed-length vector, this formula has a continuum interpretation. In computation, however, the integral is replaced by quadrature or a structured transform. Architecture and discretization therefore cannot be assessed independently.

Several important families instantiate this idea differently.

- **DeepONet** evaluates an input function at sensors and feeds those values to a branch network. A trunk network evaluates basis-like features at an output coordinate $y$. Their inner product predicts $\mathcal G(a)(y)$. It naturally allows output queries at arbitrary coordinates, but a fixed sensor encoder can tie the learned map to the input sampling design.
- **Fourier neural operators (FNOs)** parameterize the integral action as a convolution and multiply a retained set of Fourier modes by learned matrices. FFTs make global mixing efficient on regular grids. Mode truncation supplies a spectral bottleneck, while nonlinearities regenerate high frequencies and hence introduce aliasing unless resolution and regularity are handled carefully. See [[Fourier neural operators]].
- **Graph, mesh, and geometry-aware operators** replace uniform-grid convolution with message passing, learned kernels, coordinate maps, or latent representations. They target irregular domains and meshes, at the cost of more difficult geometric consistency and scaling.
- **Encoder-decoder operators** compress the input function, learn a finite-dimensional latent map, and decode an output function. PCA-Net and reduced-basis hybrids make the compression explicit. Their success depends on the relevant input and output sets having low effective dimension.

These architectures share an aspiration, not an identical guarantee: parameters should describe an operator whose evaluation is meaningful across suitable discretizations.

## Discretization invariance is a claim to test

Every training example is finite. Suppose $P_h:X\to X_h$ samples or projects a function onto a discretization of scale $h$, while $R_h:Y_h\to Y$ reconstructs a discrete output. A practical network computes

$$
G_{\theta,h}:X_h\to Y_h.
$$

Calling it a neural operator asserts that the family $R_hG_{\theta,h}P_h$ approximates a common continuum map as $h$ changes. Three properties must not be conflated:

1. **Variable-size execution:** the code accepts different numbers of points.
2. **Resolution generalization:** a model trained on one grid is empirically accurate on another.
3. **Discretization convergence:** for a fixed continuum input and fixed learned parameters, discrete evaluations converge to a well-defined continuum operator as the discretization is refined.

The first is an interface property, the second an experiment, and the third a numerical-analysis statement. None implies the others without assumptions.

For FNOs, the continuum layer may be well defined while its FFT implementation incurs aliasing error. Lanthaler, Stuart, and Trautner prove algebraic discretization-error rates under regularity assumptions: smoothness controls how rapidly unresolved Fourier content decays. This is a precise reason that apparent resolution transfer is easier on smooth fields than across shocks or rough coefficients. Nonlinear pointwise activations can create frequencies above the grid cutoff even when the retained spectral multiplier is band-limited. Dealiasing, sufficient oversampling, and convergence studies remain relevant just as in classical pseudospectral methods.

DeepONet exposes a different issue. The trunk can evaluate at arbitrary output points, yet the branch receives finitely many measurements $a(x_i)$. If two admissible functions agree at all sensors but have materially different solutions, no downstream network can distinguish them. Dense or adaptive sensors, a justified input basis, or a restriction to a compact regularity class is needed. Irregular meshes add quadrature weights, local density, boundary representation, and coordinate dependence. A sum of messages without measure-aware weights may change when the same continuum field is resampled more densely.

Evaluation should therefore include more than one held-out grid. A credible study fixes a continuum test problem, represents it on a refinement sequence, compares outputs in a consistent norm, reports the reference-solver error at each level, and checks whether the learned prediction approaches a stable limit. Training-grid, input-sensor, output-query, and geometry changes should be varied separately. “Zero-shot super-resolution” is descriptive evidence, not a substitute for this convergence test.

## Universality: powerful but narrow

Universal approximation theorems justify expressive capacity. DeepONet builds on a theorem for continuous nonlinear operators and approximates outputs by learned coefficient and basis functions. The general neural-operator framework of Kovachki and collaborators proves universality for continuous operators on compact subsets of Banach spaces under stated architectural conditions. Related results establish approximation properties for FNOs.

The quantifiers matter. A typical statement says that for a compact set $K\subset X$, a continuous target $\mathcal G^\dagger:K\to Y$, and any $\varepsilon>0$, there exists some sufficiently large network such that

$$
\sup_{a\in K}\|\mathcal G_\theta(a)-\mathcal G^\dagger(a)\|_Y<\varepsilon.
$$

This is an existence theorem. It does not say that gradient descent finds the approximant, that a finite dataset identifies it, that its size is affordable, or that the error is small outside $K$. Compactness and continuity are substantive restrictions in infinite-dimensional spaces. A bounded set need not be compact, and PDE solution maps can lose regularity or continuity near bifurcations, shocks, topology changes, loss of well-posedness, or changes in the solution concept.

Universality also does not erase the curse of complexity. An architecture may approximate every continuous operator while requiring prohibitive width, modes, sensors, or samples for a particular class. Useful rate results need more structure: smoothness, analyticity, low-dimensional manifolds, sparsity, locality, spectral decay, or known PDE physics. The theorem establishes representational possibility; it does not establish statistical or computational superiority over [[Finite element methods]], spectral schemes, or [[Reduced-order modeling for PDEs]].

## An honest error budget

The reported test error mixes several mechanisms. A useful schematic decomposition for a continuum input $a$ is

$$
\begin{aligned}
\|\mathcal G^\dagger(a)-R_hG_{\hat\theta,h}P_h a\|_Y
\le{}& E_{\mathrm{model}}+E_{\mathrm{estimation}}+E_{\mathrm{optimization}}\\
&+E_{\mathrm{input\,disc}}+E_{\mathrm{network\,disc}}+E_{\mathrm{label}}.
\end{aligned}
$$

The terms are conceptual and may interact rather than add orthogonally:

- **Model or approximation error** is the best error attainable by the chosen architecture and parameter budget on the target class.
- **Estimation error** comes from learning with finitely many sampled input functions. Many spatial points from one trajectory are correlated; they are not automatically many independent operator examples.
- **Optimization error** is the gap between the fitted parameters and the best parameters in the class.
- **Input discretization error** reflects sensors, projection, interpolation, and imperfect geometry or coefficient representation.
- **Network discretization error** is the difference between the intended continuum network and its numerical evaluation, including quadrature, truncation, and aliasing.
- **Label error** comes from the numerical solver, tolerances, mesh, experimental noise, or model discrepancy used to generate targets.

Deployment adds **distribution shift**: the test law may differ from the training law in coefficients, forcing, boundary conditions, time horizon, geometry, or nondimensional parameters. A small average relative $L^2$ error under the training distribution can coexist with a catastrophic conservation-law violation, missed rare event, phase error, or wrong force functional. The norm must follow the application. A pressure field accurate in $L^2$ need not yield accurate drag; a stable short rollout need not remain stable when iterated.

Reference data deserve special care. Training against coarse numerical solutions teaches the coarse solver’s modified problem and artifacts. Comparing the network only with those same labels measures imitation, not continuum accuracy. The reference method should have an independent refinement or tolerance study. Where possible, include residuals, invariants, boundary errors, quantities of interest, and out-of-distribution stress tests. A classical baseline should receive a comparable accuracy target and include both offline and online costs.

## Where neural operators help

The strongest use case is a bounded, repeatedly queried family with expensive high-fidelity solves and a stable input distribution. Examples include ensembles for UQ, rapid forecasting of parametrized dynamics, inverse-problem likelihood evaluations, design-space screening, and control loops. The learned map can provide an initial guess or coarse correction inside a trusted solver, act as a preconditioner, or propose candidates whose final objectives are verified at high fidelity. The hybrid role is often more robust than wholesale solver replacement.

Operator learning is also valuable when outputs are required at many coordinates or times and one wants a reusable functional representation. DeepONet’s coordinate query and FNO’s field-to-field map address different versions of this need. In inverse problems, a differentiable surrogate can make gradients cheap, but surrogate bias then propagates through the inverse map. In optimization, the optimizer actively seeks regions where an imperfect surrogate is overly optimistic; periodic high-fidelity correction is therefore essential. [[Neural-operator topology priors for PDE-constrained inverse design]] is an example in which a learned representation guides search while a Maxwell solver retains authority over objective evaluation.

## Limits and failure modes

Neural operators do not solve an arbitrary PDE presented symbolically at inference time. A trained model approximates a particular operator family encoded by its data and architecture. Changing the equation, domain topology, boundary-condition type, coefficient statistics, Reynolds number regime, or time horizon may define a different operator.

Discontinuities and multiscale structure are difficult because global smooth representations can blur shocks, Gibbs oscillations can appear, and fine scales may not be predictable from coarse observations. Chaotic systems amplify small one-step errors; long rollouts require stability analysis rather than only one-step accuracy. Complex geometry challenges coordinate-based and spectral architectures. Conservation, positivity, maximum principles, symmetries, and boundary conditions are not guaranteed unless imposed or tested. Even a small field error can violate a hard physical constraint.

There are also economic limits. Data generation may dominate the budget, especially in three-dimensional turbulent, multiphysics, or high-frequency regimes. Inference speedups quoted against one solver configuration can disappear when accuracy is equalized, batching is disallowed, data transfer is included, or a highly optimized reduced model already exists. A neural surrogate also acquires maintenance costs: distribution monitoring, retraining, calibration, versioning, and verification.

The right question is consequently not “Can a neural operator solve PDEs?” but: **Which operator, on which admissible set and probability law, represented and evaluated on which discretizations, in which norm, at what total cost, with what verification?** That formulation makes neural operators part of applied PDE analysis rather than an exception to it.

## Practical verification checklist

Before trusting a learned operator, record:

1. the continuum input and output spaces, admissible set, and target operator;
2. the training distribution and every intended deployment shift;
3. sensor, mesh, quadrature, reconstruction, and coordinate conventions;
4. reference-solver convergence and label tolerances;
5. train/test separation at the level of independent functions, trajectories, or geometries;
6. errors in physically meaningful norms and quantities of interest;
7. refinement tests with fixed weights to distinguish resizability from convergence;
8. conservation, boundary, symmetry, stability, and long-rollout tests;
9. offline data and training cost as well as online latency and memory;
10. a fallback or high-fidelity correction policy when uncertainty or shift is detected.

This checklist parallels [[Consistency stability and convergence]]: a learned method still needs a meaningful continuum target, a consistent discretization, and controlled propagation of errors.

## Sources

- [Kovachki et al., “Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs,” *Journal of Machine Learning Research* 24 (2023)](https://www.jmlr.org/papers/v24/21-1524.html) — framework, continuum layers, universality, architectures, and PDE examples.
- [Lu et al., “Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators,” *Nature Machine Intelligence* 3 (2021)](https://doi.org/10.1038/s42256-021-00302-5) — branch–trunk architecture, operator approximation theorem, and demonstrations.
- [Li et al., “Fourier Neural Operator for Parametric Partial Differential Equations,” ICLR 2021](https://openreview.net/forum?id=c8P9NQVtmnO) — FNO construction and original PDE benchmarks.
- [Kovachki, Lanthaler, and Mishra, “On universal approximation and error bounds for Fourier Neural Operators,” *Journal of Machine Learning Research* 22 (2021)](https://www.jmlr.org/papers/v22/21-0806.html) — FNO universality and quantitative approximation analysis.
- [Lanthaler, Stuart, and Trautner, “Discretization Error of Fourier Neural Operators,” arXiv:2405.02221 (2024)](https://arxiv.org/abs/2405.02221) — aliasing, regularity-dependent discretization bounds, and numerical stability evidence.
- [Liu et al., “Discretization-invariance? On the Discretization Mismatch Errors in Neural Operators,” ICLR 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/313829757739365201b5adb3a1cbd9bd-Abstract-Conference.html) — empirical and theoretical analysis of mismatch across input discretizations.

## Open questions

- Which operator classes admit useful sample-complexity and computational rates, not merely universal approximation?
- How should adaptive meshes, moving boundaries, shocks, and changing domain topology be represented while preserving a continuum interpretation?
- Can uncertainty estimates reliably detect operator-level distribution shift before a surrogate is used inside optimization or control?
- Which hybrid learned–numerical designs provide provable stability or conservation while retaining meaningful amortized speedups?
