---
title: Physics-informed neural networks and their failure modes
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, partial-differential-equations, scientific-machine-learning, neural-networks, numerical-analysis]
---
Physics-informed neural networks turn a PDE into a differentiable training objective, but a small sampled residual is neither a general certificate of solution accuracy nor evidence that the method beats a purpose-built numerical solver.

Up: [[Applied PDE research frontier 2026]]

Related: [[Consistency stability and convergence]] · [[Stiffness and multiscale PDEs]] · [[Conservation laws and entropy conditions]] · [[Finite-volume methods for conservation laws]] · [[Spectral methods and aliasing]] · [[Inverse problems for PDEs]]

## The method in one equation

Let $u:\Omega\times[0,T]\to\mathbb R^m$ solve

$$
\mathcal N[u](x,t;\mu)=f(x,t),\qquad (x,t)\in Q:=\Omega\times(0,T],
$$

with boundary operator $\mathcal B[u]=g$ on $\partial\Omega\times(0,T]$ and initial value $u(x,0)=u_0(x)$. The parameter $\mu$ may be known in a forward problem or inferred with $u$ in an inverse problem. A physics-informed neural network (PINN) represents the state by a neural function $u_\theta(x,t)$. Automatic differentiation evaluates its derivatives, giving the pointwise PDE residual

$$
r_\theta(x,t)=\mathcal N[u_\theta](x,t;\mu)-f(x,t).
$$

For interior collocation points $Z_r=\{z_i\}_{i=1}^{N_r}$, boundary points $Z_b$, initial points $Z_0$, and possibly observations $Z_d$, a common loss is

$$
\mathcal L(\theta,\mu)=
\lambda_r\frac1{N_r}\sum_{z_i\in Z_r}\|r_\theta(z_i)\|^2
+\lambda_b\frac1{N_b}\sum_{z_i\in Z_b}\|\mathcal B[u_\theta](z_i)-g(z_i)\|^2
+\lambda_0\frac1{N_0}\sum_{x_i\in Z_0}\|u_\theta(x_i,0)-u_0(x_i)\|^2
+\lambda_d\frac1{N_d}\sum_{z_i\in Z_d}\|\mathcal H u_\theta(z_i)-y_i\|^2.
$$

Here $\mathcal H$ is an observation operator and the nonnegative $\lambda$'s set the relative penalties. Training chooses $(\theta,\mu)$ to approximately minimize this finite-sample objective. Some formulations enforce boundary or initial data exactly through the architecture, remove the corresponding penalty, or use weak and variational residuals rather than pointwise strong-form derivatives.

This construction is attractive. It is mesh-free in the limited sense that it does not require a fixed connectivity graph; it can combine equations and scattered observations in one objective; and automatic differentiation avoids manually discretizing every derivative. None of those properties removes discretization. The network class, collocation measure, finite sample, optimizer, floating-point arithmetic, and stopping rule form a computational discretization of their own.

## What is proved, what is observed, and what is inferred

Three kinds of statement should not be blended.

**Theorem.** For selected PDE classes, norms, network families, and sampling assumptions, analysis can bound solution error using residual and approximation terms. A representative result by Mishra and Molinaro gives conditional generalization estimates for several forward PDEs. Such a theorem depends on a stability estimate linking the PDE residual and data mismatch to a solution norm. It does not say that stochastic gradient training finds the required low-loss network, that a finite validation set detects every defect, or that constants remain benign for a singularly perturbed problem.

**Experiment.** Raissi, Perdikaris, and Karniadakis demonstrated forward and inverse examples and established the modern PINN template. Later controlled experiments by Krishnapriyan and collaborators found that otherwise standard PINNs can fail on convection, reaction, and reaction–diffusion examples as coefficients make the problems harder; curriculum-style changes improved some cases. Wang, Teng, and Perdikaris measured highly unequal loss-term gradients and connected them to numerical stiffness in backpropagation. These are reproducible claims about stated architectures, optimizers, equations, and metrics—not universal impossibility results.

**Inference.** A useful diagnosis is that PINN reliability is the intersection of four conditions: the network must approximate the relevant solution features; sampled residuals must represent the continuous residual; optimization must find an adequate parameter vector; and the PDE must stably convert residual control into solution-error control. If any link is weak, “the loss went down” is insufficient. This four-part account synthesizes theory and experiments; it is not itself a theorem covering every PINN.

## Failure mode 1: spectral bias and missing small scales

Standard multilayer networks trained by gradient methods often learn lower-frequency components before higher-frequency ones, a behavior commonly called **spectral bias**. For a smooth solution dominated by large scales this ordering may help. It becomes dangerous when the answer contains thin boundary layers, rapid oscillations, sharp fronts, or multiscale interference. A network may fit the broad profile while delaying or suppressing precisely the modes that control fluxes or pointwise extrema.

The PDE loss does not automatically cure this. Differential operators reweight frequencies: for a Fourier mode $e^{ikx}$, one derivative contributes a factor $ik$ and diffusion contributes $-k^2$. Consequently the residual can have a very different spectral conditioning from the solution. Optimization may oscillate between fitting low-frequency state error and high-frequency derivative error. Sparse random collocation can also miss a layer whose width is far smaller than the domain.

Fourier features, sinusoidal activations, multiscale networks, domain decomposition, adaptive sampling, and nondimensionalization can improve representation. But adding high frequencies enlarges the searchable function class; it does not select the physically correct frequency, guarantee adequate sampling, or make a discontinuity compatible with a classical strong residual. For shocks, a weak or conservative formulation linked to [[Weak solutions and why shocks require them]] is usually conceptually closer to the PDE than differentiating a globally smooth surrogate through the shock.

## Failure mode 2: gradient imbalance

The weights $\lambda_r,\lambda_b,\lambda_0,\lambda_d$ are not harmless bookkeeping. Each loss term has different units, scale, derivative order, sample count, and curvature. During training one may have

$$
\|\nabla_\theta \mathcal L_r\|\gg \|\nabla_\theta \mathcal L_b\|,
$$

so an update that reduces the interior residual can effectively ignore boundary data. The reverse can produce a network that matches observations yet violates the governing equation between them. A single fixed weight rarely balances all terms throughout training because their gradients evolve at different rates.

Adaptive loss weighting based on gradient norms, learned multipliers, augmented Lagrangians, exact constraint constructions, and alternating optimization are plausible remedies. Each has a limit. Equal gradient magnitudes do not imply equal contribution to solution error. Learned weights can collapse toward easy terms or become another ill-conditioned optimization. Exact boundary ansatzes can be awkward on complex geometry and may themselves introduce steep factors. Constraint optimization still requires tolerances and scaling. The principled target is not aesthetic balance among loss curves but control of an application-relevant error norm.

## Failure mode 3: stiffness in optimization and in the PDE

PINN papers use **stiffness** in two related senses. The physical PDE can contain widely separated temporal or spatial scales, as in reaction–diffusion with reaction time $O(\varepsilon)$. Separately, the loss Hessian or neural tangent kernel can have eigenvalues spanning many orders of magnitude, forcing gradient descent to use a step small enough for the sharp directions while making slow progress in flat directions. High-order derivatives and large coefficients can amplify this conditioning.

This resembles, but is not identical to, timestep stiffness in [[Stiffness and multiscale PDEs]]. An implicit PDE solver exploits the algebraic structure of a semidiscrete operator, often with a problem-specific preconditioner. A generic quasi-Newton optimizer applied to millions of network parameters does not inherit that advantage. Adam may move quickly early and L-BFGS may polish a smooth deterministic objective, but neither guarantees global convergence or correct scale separation.

Nondimensionalization should come first: scale coordinates, states, and equations so important terms are roughly comparable. Curriculum strategies can begin with an easier coefficient or shorter interval and continue toward the desired problem. Domain decomposition, sequential time windows, operator-aware architectures, and second-order or natural-gradient methods may help conditioning. Their limitations are path dependence, extra hyperparameters, interface errors, memory cost, and the possibility that continuation follows the wrong solution branch. A method that works only after problem-specific continuation is no longer an effortless universal solver; the continuation schedule belongs in the reported algorithm.

## Failure mode 4: causality and long-time dynamics

A space–time PINN often samples all of $Q$ at once. The optimizer can reduce residual at late times before accurately transmitting information from the initial condition through earlier times. For an evolution equation, however, the state at $t_{n+1}$ depends on the history that reaches it. A small, scattered late-time residual cannot repair an incorrect earlier trajectory. Chaotic or unstable dynamics magnify a small phase error even if local residuals appear modest.

Causal weighting and time marching divide the horizon or weight later residuals only after earlier intervals are learned. This restores part of the triangular dependency familiar from numerical time integration. It can substantially improve benchmark training, but it does not abolish accumulated error. Window interfaces require continuity checks; long horizons multiply training cost; unstable systems still have finite prediction horizons; and conserved or dissipated quantities may drift unless encoded and audited. For periodic or statistically stationary objectives, strict forward causality may also be the wrong organizing principle.

## Failure mode 5: advection, shocks, and transport-dominated problems

For $u_t+a u_x=0$ with initial data $u_0$, the exact smooth solution is $u(x,t)=u_0(x-at)$. A narrow feature must travel without diffusion or phase error. A global network has to represent a diagonal ridge in space–time, while random points provide weak information about its characteristic alignment. At high advection speed or Péclet number, experiments show optimization degradation and smeared or misplaced fronts.

Nonlinear conservation laws are harder. Once shocks form, the physical solution is a weak solution selected by an entropy condition. A classical strong residual is undefined at the jump, while a smooth network may reduce sampled squared residual by replacing the discontinuity with a broad transition. Pointwise residual minimization does not by itself impose conservation across the front or select the entropy solution. This is a structural mismatch, not merely a need for more epochs.

Characteristic coordinates, moving or adaptive points, subdomain methods, weak-form PINNs, conservative flux losses, entropy penalties, and shock-aware architectures target pieces of the problem. Yet a penalty approximation to conservation should be checked against integral balance, shock speed, entropy production, and a reference [[Finite-volume methods for conservation laws|finite-volume method]]. If those audits are absent, a visually sharp curve is not validation.

## Sampling and residual aliasing

Even perfect minimization of the empirical loss controls only the selected points. Between them, the residual can spike. This is analogous in spirit—not algebraically identical—to aliasing in [[Spectral methods and aliasing]]: an inadequately resolved test set can report a deceptively small defect. Resampling each epoch, low-discrepancy designs, residual-based adaptive refinement, and independent validation points reduce this risk.

Adaptive sampling is itself biased by the current model. If the provisional network fails to express a narrow layer, its estimated residual may not identify where points are needed. Therefore validation should include geometry-aware strata, boundary neighborhoods, known layers or characteristics, conservation integrals, and convergence under larger independent test sets. Reporting the training residual at training points is the weakest possible check.

## Remedies are hypotheses, not warranties

A defensible workflow matches a remedy to a diagnosed bottleneck:

| Diagnosis | Candidate intervention | What must still be checked |
|---|---|---|
| unresolved oscillations or layers | Fourier features, local networks, adaptive points | aliasing, layer error, derivative accuracy |
| incompatible loss gradients | nondimensionalization, adaptive weights, exact constraints | solution norm, multiplier stability |
| ill-conditioned or stiff training | continuation, preconditioning, domain/time decomposition | branch correctness, interface error, total cost |
| broken temporal information flow | causal weights, sequential windows | accumulated and invariant error |
| shocks or transport | characteristics, weak/conservative residuals, entropy terms | Rankine–Hugoniot speed, entropy, integral conservation |
| sparse inverse data | priors, regularization, uncertainty quantification | identifiability, noise sensitivity, coverage |

The table is a test plan. Combining every intervention can make attribution impossible and hyperparameter search enormous. Ablations should change one mechanism at a time, with seeds and failed runs retained.

## A fair comparison with numerical solvers

For a single forward PDE on a known geometry, a mature finite-difference, finite-volume, finite-element, or spectral solver is usually the relevant baseline. “Mesh-free” is not a speed result. A PINN evaluation may be cheap after training, but obtaining one solution can require thousands of optimization steps, automatic differentiation of high-order derivatives, many collocation batches, and hyperparameter trials. The classical method pays assembly and solve cost; the PINN pays training and selection cost.

A fair benchmark fixes the problem family, hardware, precision, and target observable, then declares an **error budget**. Useful errors include $L^2$ or $H^1$ state error, maximum error near a layer, flux error, conservation defect, shock-location error, parameter error, or downstream functional error. Residual loss alone is not a common accuracy metric. The reference solution needs a refinement study or analytic solution, not merely another unverified network.

The cost ledger should include:

1. wall-clock time and device-hours for every retained and failed training run;
2. architecture, collocation, optimizer, weighting, continuation, and seed search;
3. reference-data generation and preprocessing;
4. peak memory and inference cost;
5. classical mesh generation, assembly, linear/nonlinear iterations, preconditioning, adaptivity, and refinement;
6. amortization across parameter queries, if reuse is claimed.

For one solve, compare **total time to target error**. For repeated parametric queries, separate offline cost $C_{\mathrm{off}}$ from online cost $C_{\mathrm{on}}$. If a learned model costs $C_{\mathrm{off}}$ to train, a solver costs $C_s$ per query, and learned inference costs $C_{\mathrm{on}}$, the idealized break-even count is

$$
N_* = \frac{C_{\mathrm{off}}}{C_s-C_{\mathrm{on}}},
$$

provided $C_s>C_{\mathrm{on}}$ and both methods meet the same error target over the same distribution. Distribution shift, retraining, and failed-query detection increase the true break-even point. In inverse problems, PINNs may be valuable because state and unknown parameters are optimized together, but the baseline should include adjoint-based inversion, regularization, and uncertainty—not only a naive grid search.

The fairest conclusion may be role-specific: a PINN can be useful for assimilating sparse data, differentiable surrogacy, or awkward inverse constraints while a classical solver remains superior for reliable forward propagation. Hybrid methods can use numerical solvers to generate data, enforce local conservation, or precondition learning. The question is not which label wins, but which computational contract is met at lowest audited cost.

## A verification ladder

Before trusting a trained PINN:

1. verify boundary and initial conditions on dense independent sets;
2. evaluate residuals on fresh, stratified points and report distributions, not only means;
3. test integral conservation, entropy, invariants, positivity, and dimensional consistency where applicable;
4. compare state and application observables with an analytic or mesh-refined numerical reference;
5. repeat over seeds and disclose hyperparameter search;
6. refine network capacity and collocation count, looking for stable convergence rather than one low loss;
7. perturb coefficients, geometry, noise, and sampling within the claimed scope;
8. account for complete training and baseline costs at a common error tolerance.

This ladder echoes [[Consistency stability and convergence]]: approximation, stability, and convergence evidence must accompany consistency with the equation. PINNs change the discretization and optimization machinery; they do not repeal the logic.

## Sources

- [Raissi, Perdikaris, and Karniadakis, “Physics-informed neural networks”](https://doi.org/10.1016/j.jcp.2018.10.045) — foundational Journal of Computational Physics article defining continuous- and discrete-time PINN formulations.
- [Wang, Teng, and Perdikaris, “Understanding and mitigating gradient flow pathologies in physics-informed neural networks”](https://doi.org/10.1137/20M1318043) — primary analysis and experiments on gradient imbalance and stiffness in training.
- [Krishnapriyan et al., “Characterizing possible failure modes in physics-informed neural networks”](https://arxiv.org/abs/2109.01050) — primary controlled experiments on convection, reaction, reaction–diffusion, and curriculum remedies.
- [Wang, Yu, and Perdikaris, “When and why PINNs fail to train: a neural tangent kernel perspective”](https://doi.org/10.1016/j.jcp.2021.110768) — primary kernel-based account of unequal convergence rates across loss components.
- [Wang, Sankaran, and Perdikaris, “Respecting causality is all you need for training physics-informed neural networks”](https://arxiv.org/abs/2203.07404) — primary causal-training formulation and evolution-equation experiments.
- [Mishra and Molinaro, “Estimates on the generalization error of physics-informed neural networks for approximating PDEs”](https://doi.org/10.1093/imanum/drab093) — conditional mathematical error estimates for selected forward PDEs.
- [Rahaman et al., “On the spectral bias of neural networks”](https://proceedings.mlr.press/v97/rahaman19a.html) — primary experiments and analysis of frequency-dependent learning in deep networks.
- [McClenny and Braga-Neto, “Self-adaptive physics-informed neural networks”](https://doi.org/10.1016/j.jcp.2022.111722) — primary adaptive loss-weighting method and benchmark evidence.
- [Kharazmi, Zhang, and Karniadakis, “Variational physics-informed neural networks for solving partial differential equations”](https://arxiv.org/abs/1912.00873) — primary weak/variational PINN formulation.
- [Grossmann et al., “Can physics-informed neural networks beat the finite element method?”](https://doi.org/10.1093/imamat/hxac023) — direct empirical comparison emphasizing accuracy and computational cost.

## Open questions

- Which computable residual-to-error estimators remain sharp for nonlinear, noncoercive, or chaotic PDEs?
- Can conservative and entropy-stable PINN formulations match shock-capturing solvers under equal wall-clock and error budgets?
- How should hyperparameter-search cost and failed runs be standardized in scientific-machine-learning benchmarks?
- When does adaptive collocation discover a previously unrepresented thin layer rather than reinforce the network's current bias?
- Which inverse problems gain enough from joint state-parameter representation to offset weaker forward-solver reliability?
