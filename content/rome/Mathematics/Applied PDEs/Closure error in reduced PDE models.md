---
title: Closure error in reduced PDE models
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, reduced-order-modeling, closure, scientific-machine-learning]
---

Projecting a nonlinear PDE onto a small trial space does not eliminate discarded modes: it hides their feedback inside an unclosed term that must be derived, modeled, and tested in the reduced system's own dynamics.

Up: [[Applied PDE research frontier 2026]]

## The problem is elimination, not merely approximation

A [[Reduced-order models for PDEs|reduced-order model]] replaces a large state $u_h(t)$ with coordinates $a(t)\in\mathbb R^r$ in a low-dimensional space. If $\{\phi_i\}_{i=1}^R$ is an $M$-orthonormal basis for a high-fidelity space and $r\ll R$, write

$$
u_h=u_r+u'=\sum_{i=1}^r a_i\phi_i+\sum_{i=r+1}^R b_i\phi_i.
$$

The retained component $u_r=P_ru_h$ and discarded component $u'=Q_ru_h$ are coupled whenever the PDE is nonlinear. Small $\|u'\|$ does not by itself imply small feedback on $u_r$: a derivative can amplify fine scales, a quadratic term can transfer energy across the cutoff, and a phase error in a discarded mode can alter a resolved instability.

Consider a semidiscrete evolution equation

$$
M\dot u_h=F(u_h;\mu),
$$

where $M$ is a mass matrix, $F$ contains spatial operators and forcing, and $\mu$ denotes parameters. In mass-orthonormal coordinates, exact projection gives

$$
\dot a=\Phi_r^TM\,G(u_r+u';\mu)
=\Phi_r^TF(u_r+u';\mu),
$$

where $G=M^{-1}F$, the columns of $\Phi_r$ are the retained basis vectors, $\Phi_r^TM\Phi_r=I$, and $P_r=\Phi_r\Phi_r^TM$ is the $M$-orthogonal state projector. The standard Galerkin ROM instead evaluates

$$
\dot a=f_r(a;\mu):=\Phi_r^TM\,G(u_r;\mu).
$$

Their difference is the exact closure term

$$
\tau(a,u';\mu)
=\Phi_r^TM\left[G(u_r+u';\mu)-G(u_r;\mu)\right].
$$

Thus the exact retained dynamics obey $\dot a=f_r(a;\mu)+\tau$. This identity is bookkeeping, not a model: $u'$ is unknown during an online reduced solve. Closure means replacing $\tau$ by information available at reduced cost, perhaps $\widehat\tau(a)$, $\widehat\tau(a,t,\mu)$, a stochastic process, or a functional of the history $a|_{[0,t]}$.

This issue is distinct from [[Hyper-reduction for nonlinear PDE models]]. Hyper-reduction asks how to evaluate a reduced nonlinear operator cheaply. Closure asks which operator the reduced variables should obey after unresolved variables have been eliminated. One can evaluate the wrong closed operator very cheaply, or hyper-reduce a carefully closed operator and introduce a second approximation error.

## A quadratic example exposes the missing interactions

Suppose the state-space vector field is $G(u)=Lu+B(u,u)+g$, with $B$ bilinear. Substitution of $u_h=u_r+u'$ yields

$$
\tau=\Phi_r^TM\left[Lu'+B(u_r,u')+B(u',u_r)+B(u',u')\right].
$$

These terms represent unresolved linear response, resolved–unresolved exchange, and unresolved self-interaction feeding back into retained modes. If the basis diagonalizes $L$ and $P_rLu'=0$, the nonlinear terms generally remain. For convection-dominated flows this is the reduced analogue of a subfilter stress: truncation removes routes by which resolved energy reaches smaller scales and is dissipated.

For an incompressible velocity POD basis, a common Galerkin model has

$$
\dot a_i=b_i+\sum_{j=1}^r A_{ij}a_j+\sum_{j,k=1}^r C_{ijk}a_ja_k.
$$

If the full expansion contains $R$ modes, the exact equation for $i\le r$ also contains sums in which $j>r$ or $k>r$. Dropping them is a closure assumption. It can produce excessive resolved energy, phase drift, unstable long-time trajectories, or an incorrect attractor even when the retained POD modes explain a high percentage of snapshot variance. Variance capture measures reconstruction in the training inner product; it is not a dynamical stability theorem.

An energy check makes the risk visible. With $E_r=\tfrac12 a^Ta$—the physical quadratic energy only when the chosen mass inner product represents that energy—

$$
\frac{dE_r}{dt}=a^Tf_r(a)+a^T\tau.
$$

The scalar $a^T\tau$ is the closure contribution to the instantaneous resolved-energy budget: positive values inject resolved energy and negative values remove it under this convention. Its sign need not always be dissipative; backscatter can occur. A closure that forces $a^T\widehat\tau\le0$ may stabilize the model but erase real bidirectional exchange. A closure with unconstrained positive injection may fit short trajectories and then blow up. The appropriate constraint depends on the PDE, boundary fluxes, forcing, and the energy or entropy functional being protected by [[Structure-preserving numerical methods]].

## Exact elimination usually creates memory

The Mori–Zwanzig formalism explains why a memoryless correction is an approximation rather than the default consequence of projection. For a full ODE $\dot z=R(z)$, let $L$ be the Liouville operator, let $z_j$ be a resolved coordinate observable, and let $P$ project observables onto resolved information, with $Q=I-P$. Dyson's identity gives the schematic but correctly ordered relation

$$
\frac{d}{dt}e^{tL}z_j
=e^{tL}PLz_j
+e^{tQL}QLz_j
+\int_0^t e^{(t-s)L}PL e^{sQL}QLz_j\,ds.
$$

The three contributions are commonly called Markov, noise, and memory. Exact projected equations may subsequently apply $P$, take a conditional expectation, or specialize the initial unresolved state; under some such choices the explicit noise term vanishes after projection. Exact notation therefore varies with the projection and observable, but the message is robust: unresolved variables evolve under orthogonal dynamics, retain information about the initial unresolved state, and influence the present through a history integral. Therefore $a(t)$ alone may not be a sufficient state.

A Markov closure $\widehat\tau(a(t))$ assumes that unresolved effects relax rapidly or are well encoded by the current resolved coordinates. Delay coordinates, recurrent networks, auxiliary latent variables, convolution kernels, and rational approximations attempt to represent memory. Stochastic closures represent unresolved initial conditions or chaotic degrees of freedom statistically. None is automatically superior: a long memory model may be expensive and poorly identified, while a short memory approximation can be adequate when time-scale separation is strong.

The formal identity does not certify a learned recurrent closure. It motivates what information may be missing and supplies consistency questions: Does the memory vanish when $Q=0$? Does its horizon change with Reynolds number or parameter $\mu$? Does the discretized convolution respect causality? Is apparent memory merely compensation for time-discretization or hyper-reduction error?

## Four closure families

### Dissipative and functional models

The simplest remedy changes the reduced operator, for example by increasing viscosity, damping selected modes, or adding an eddy-viscosity term

$$
\widehat\tau_i=-\nu_T\sum_{j=1}^r K_{ij}a_j,
$$

where $K$ represents a positive semidefinite dissipation operator. Constant, modal, dynamic, and state-dependent variants exist. Their strength is transparency: energy effects and online cost can be inspected. Their weakness is structural bias. They often represent net forward transfer but not phase-dependent backscatter or parameter variation.

### Variational multiscale models

Variational multiscale ROMs split the retained space again into large resolved scales and small resolved scales, then concentrate stabilization or modeled interaction near the cutoff. This mirrors the idea that closure should not damp every retained coordinate equally. Residual-based variants make the correction depend on how badly $u_r$ satisfies the high-fidelity variational equation. These models can inherit interpretable stabilization structure, but their error and parameter robustness remain conditional on the scale split, residual approximation, basis, and problem regime.

### Structural and memory models

Structural approaches approximate the unresolved response itself through approximate inertial manifolds, nonlinear manifolds, Mori–Zwanzig memory expansions, or auxiliary variables. They try to reproduce interaction mechanisms rather than only net dissipation. The cost is additional state, kernel estimation, or nonlinear solves. A truncated memory expansion can become unstable; a manifold learned from one attractor may fail during transients or parameter shifts.

### Data-driven corrections

Given high-fidelity snapshots, one can compute a target closure by filtering the full operator:

$$
\tau^{n}_{\mathrm{data}}
=\Phi_r^TM\left[G(u_h^n;\mu^n)-G(P_ru_h^n;\mu^n)\right].
$$

Regression then fits $\widehat\tau_\theta$ using resolved coordinates, residuals, parameters, or histories. Linear and quadratic operator inference, constrained least squares, Gaussian processes, neural networks, and recurrent models are all possible. The target must match the deployed discretization and projection. If derivatives are estimated from noisy snapshots, the label may mix closure with differentiation error; using the operator difference above can avoid numerical time differentiation when $F$ is accessible.

Data-driven closure has two evaluation modes. A priori testing compares $\widehat\tau_\theta$ with closure labels on held-out states. A posteriori testing integrates the closed ROM and compares trajectories, statistics, invariants, outputs, and stability. Low one-step regression error does not ensure a good rollout because the learned correction changes the state distribution that supplies its future inputs. The a posteriori test is indispensable.

## Closure error lives inside a larger error budget

Let $u$ be the continuum solution, $u_h$ the full discretization, and $u_r$ the deployed ROM. A useful diagnostic decomposition is

$$
\|u-u_r\|\le \|u-u_h\|+\|u_h-P_ru_h\|+\|P_ru_h-u_r\|.
$$

The terms are full-order discretization error, projection error, and reduced-dynamics error. Closure influences the last term, but so do time integration, parameter interpolation, hyper-reduction, boundary treatment, and solver tolerances. Calling all ROM discrepancy “closure error” hides the mechanism.

The projection defining the closure also matters. An $L^2$ POD projection, an energy projection, and a Petrov–Galerkin test space produce different resolved variables and different exact closure terms. Changing $r$ changes the target. A model trained at one cutoff generally cannot be assumed correct at another. Likewise, closure learned from under-resolved full-order data may compensate for the full solver's numerical dissipation rather than the continuum's unresolved physics.

## A verification ladder

A credible closure study should move through increasingly difficult gates:

1. **Identity check.** On stored full-order states, compute the exact filtered closure and verify the sign, normalization, mass matrix, basis convention, and boundary contributions.
2. **Limit checks.** As $r\to R$, the exact closure should approach zero up to numerical error. For a linear invariant subspace, the nonlinear-style closure should not appear spuriously.
3. **Budget checks.** Track mass, energy, entropy, momentum, or another governing invariant. Separate volume production from boundary flux.
4. **A priori generalization.** Hold out trajectories, parameters, initial conditions, forcing, and time intervals rather than randomly shuffling adjacent snapshots.
5. **A posteriori rollouts.** Compare not only coefficient error but fields, quantities of interest, spectra, phase, long-time statistics, stability, and constraint violations.
6. **Ablations.** Compare the unclosed Galerkin ROM, a transparent dissipative baseline, the proposed closure, and—when costs matter—the full-order model under stated tolerances and hardware.
7. **Coupled approximation checks.** Turn hyper-reduction and closure on separately before combining them. Otherwise one correction can conceal another error.
8. **Shift tests.** Vary parameters, geometry, boundary data, resolution, and forcing within and beyond the training envelope; report failure rather than averaging it away.

For control or inverse problems, forward trajectory fit is insufficient. The closure changes sensitivities and therefore gradients. Compare adjoint or automatic-differentiation gradients against finite differences and, where feasible, the full-order gradient, following [[Adjoint methods for PDE-constrained optimization]] and [[Differentiable PDE solvers]].

## Identification is an observability problem

Closure fitting can be non-identifiable even with abundant snapshots. Suppose a linear correction $Da$ and a quadratic correction $H(a\otimes a)$ are fit from a narrow nearly periodic trajectory. Along that trajectory, columns of the regression library can be strongly correlated, so many coefficient sets reproduce the same labels. Regularization chooses one set but does not prove it represents the unresolved mechanism. Exciting multiple initial conditions and parameters, inspecting singular values of the design matrix, and reporting sensitivity to regularization are therefore part of verification.

There is also a choice between fitting instantaneous closure labels and fitting trajectories. Label fitting is transparent and exposes which term is being approximated, but minimizes an error that may not correlate with rollout quality. Trajectory fitting differentiates through the ROM and directly penalizes accumulated state or output error, but can let the closure compensate for an inaccurate integrator, wrong initial projection, or biased observation operator. A strong workflow uses both: first identify an operator against exact filtered targets, then refine or select it using held-out rollouts while keeping the other numerical components fixed.

Noise changes the target. Experimental observations rarely provide the full state needed to evaluate $\Phi_r^TM[G(u_h)-G(P_ru_h)]$. One then faces joint state estimation and closure learning. Treating interpolated sensor data as exact full-order snapshots produces overconfident labels. Data assimilation, latent-state uncertainty, and closure uncertainty should be separated where possible. Ensemble or Bayesian treatments can quantify parameter uncertainty, but they do not remove structural uncertainty caused by a missing input, inadequate memory, or a basis that merges dynamically distinct states.

A practical diagnostic is conditional scatter: plot exact closure components against proposed resolved inputs. If identical or nearby $a$ values correspond to widely different $\tau$, a deterministic Markov map $a\mapsto\tau$ is insufficient at that resolution. Adding parameters, delays, residual features, or latent variables may reduce the scatter. If it does not, increasing the retained dimension or changing the projection may be more honest than escalating the regression model.

## What can and cannot be claimed

A closure may be empirically stable over tested horizons without being globally stable. A constrained energy inequality may certify one norm while leaving phase accuracy or another invariant uncontrolled. A Mori–Zwanzig derivation can identify a memory structure without proving that a chosen neural architecture approximates it. Good results on Burgers flow or cylinder wakes demonstrate behavior on those regimes, not universal turbulence closure.

The most defensible claim names the projection, basis size, governing equation, discretization, parameters, training distribution, comparator, time horizon, error metric, and conserved quantities. It also reports online cost. Adding an elaborate closure can erase the speed advantage that motivated reduction; [[Operator learning versus numerical solvers]] supplies the corresponding fairness ledger.

## Why it matters

Closure is the point at which compression becomes dynamics. It explains why a small reconstruction error can coexist with an unstable ROM, why memory appears after variables are eliminated, and why rollout validation outranks snapshot fit. The same logic connects projection ROMs to [[Learned closures for turbulent flows]], but the objects differ: this article concerns errors created by reducing a PDE model's state space, while turbulence closure begins from physical or numerical coarse-graining of an unresolved flow.

For Andrew-specific surface-PDE work, the lesson is methodological: if equilibration or geometry is projected into a reduced space, conservation and geometric constraints must be checked after reduction, and any correction must be separated from discretization and level-set errors. This is a prerequisite for comparison, not a claim about [[BealeSurfaceSolver research (MOC)|BealeSurfaceSolver]] results.

## Sources

- [Chorin, Hald, and Kupferman, “Optimal prediction with memory”](https://doi.org/10.1016/S0167-2789(02)00446-3) — projection and memory formulation for unresolved dynamics.
- [Iliescu and Wang, “Variational Multiscale Proper Orthogonal Decomposition: Navier–Stokes Equations”](https://doi.org/10.1002/num.21835) — VMS-POD construction and conditional error analysis.
- [Wang et al., “Proper orthogonal decomposition closure models for turbulent flows: A numerical comparison”](https://doi.org/10.1016/j.cma.2012.04.015) — numerical comparison of POD closure strategies and diagnostics.
- [Mou et al., “Data-driven variational multiscale reduced order models”](https://doi.org/10.1016/j.cma.2020.113470) — explicit closure targets and hierarchical data-driven VMS construction.
- [Wang, Ripamonti, and Hesthaven, “Recurrent neural network closure of parametric POD-Galerkin reduced-order models based on the Mori–Zwanzig formalism”](https://doi.org/10.1016/j.jcp.2020.109402) — history-dependent learned closure with parametric conditioning.
- [Ivagnes et al., “Pressure data-driven variational multiscale reduced order models”](https://doi.org/10.1016/j.jcp.2022.111904) — separate momentum and pressure/continuity corrections in incompressible-flow ROMs.

## Open questions

- Which projection and observable make the shortest adequate memory for a given PDE regime?
- Can a closure preserve several competing structures—energy, mass, positivity, and boundary power—without making online integration expensive?
- How should uncertainty in closure form be propagated into quantities of interest and control gradients?
- Which shift tests best distinguish learned unresolved physics from compensation for one full-order discretization?
