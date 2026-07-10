---
title: Reduced-order models for PDEs
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, numerical-analysis, reduced-order-modeling]
---
Reduced-order models replace a high-dimensional PDE discretization by dynamics on a carefully chosen low-dimensional trial space, trading global fidelity for fast repeated evaluations whose validity must be checked in the intended parameter and time regime.

Up: [[Applied PDE research frontier 2026]]

Related: [[Consistency stability and convergence]] · [[Adjoint methods for PDE-constrained optimization]] · [[Uncertainty quantification for PDE models]] · [[Differentiable PDE solvers]]

## The problem reduction is trying to solve

A spatial discretization of a PDE may produce a system with millions of unknowns. One accurate forward solve can be acceptable, yet optimization, control, uncertainty propagation, parameter estimation, or a digital twin may require thousands of solves. A **reduced-order model** (ROM) attempts to reuse structure across those queries.

Write a parameterized evolution equation abstractly as

$$
M(\mu)\dot u_h(t;\mu)+A(\mu)u_h(t;\mu)+N(u_h(t;\mu);\mu)=f(t;\mu),
$$

where $u_h\in\mathbb R^{n}$ is the full-order discrete state, $M$ is a mass matrix, $A$ contains linear spatial operators, $N$ is nonlinear, and $\mu$ denotes parameters, geometry, or boundary data. The subscript $h$ matters: most practical ROMs reduce an already discretized model, not the continuum PDE directly. Their error therefore contains both full-order discretization error and reduction error.

Choose a trial basis $V=[v_1,\ldots,v_r]\in\mathbb R^{n\times r}$ with $r\ll n$ and approximate

$$
u_h(t;\mu)\approx u_r(t;\mu)=\bar u+Va(t;\mu).
$$

The reduced coordinates $a\in\mathbb R^r$ are the only online unknowns. If $V$ is orthonormal in the $M$-inner product, $V^TMV=I$. Galerkin projection requires the residual to be orthogonal to the same space:

$$
V^T\!\left[M V\dot a+A(\bar u+Va)+N(\bar u+Va)-f\right]=0.
$$

This produces $r$ equations. A Petrov–Galerkin ROM instead tests with a different matrix $W$, replacing $V^T$ by $W^T$. That freedom can improve stability or align the reduction with a least-squares residual.

The dimension reduction alone does not guarantee speed. Linear reduced matrices such as $V^TAV$ can be assembled offline and cost only in $r$ online. But evaluating a general nonlinear term $V^TN(\bar u+Va)$ may still require reconstructing all $n$ entries. **Hyper-reduction**—for example empirical interpolation, discrete empirical interpolation, gappy sampling, or empirical quadrature—approximates nonlinear evaluation from selected points or elements. It is often the step that turns a small state vector into genuine wall-clock savings, and it introduces another approximation error.

## Proper orthogonal decomposition

Proper orthogonal decomposition (POD) builds a basis from representative full-order snapshots. Put centered snapshots in

$$
S=[u_h(t_1;\mu_1)-\bar u,\ldots,u_h(t_m;\mu_m)-\bar u].
$$

For a Euclidean inner product, compute $S=U\Sigma Z^T$ and retain the first $r$ left singular vectors. With a finite-element mass matrix, one instead uses the physical inner product $x^TMy$, implemented through a weighted SVD or generalized eigenproblem. The basis solves the optimization problem

$$
\min_{\substack{\dim X_r=r}}\sum_{j=1}^{m}\|s_j-P_{X_r}s_j\|_M^2,
$$

and the minimum snapshot projection error is the tail $\sum_{i>r}\sigma_i^2$ under the corresponding weighting.

This theorem is exact but narrow. It says POD is the best rank-$r$ **linear reconstruction of the supplied snapshots in the supplied norm**. It does not say the projected dynamics are stable, that unseen parameters lie near the span, or that a low state error implies an accurate drag, flux, threshold-crossing time, or other quantity of interest. A dataset dominated by long quiescent intervals can give little weight to rare transients. Scaling temperature, velocity, and pressure differently changes the basis. Snapshot cadence, boundary lifting, mean subtraction, and inner product are therefore modeling choices rather than clerical details.

POD is attractive when trajectories repeatedly visit a low-dimensional, nearly linear region of state space. Transport is harder. A translating sharp front can require many global linear modes even though its configuration is described by one position. Shifted bases, local ROMs, nonlinear manifolds, or coordinate transformations may then compress much better than one global POD space.

### Compressibility before algorithm choice

The relevant theoretical object is the solution manifold

$$
\mathcal M=\{u_h(t;\mu):(t,\mu)\text{ lies in the operating set}\}.
$$

Its Kolmogorov $r$-width in a normed space $X$ is

$$
d_r(\mathcal M;X)=\inf_{\dim V_r=r}\sup_{u\in\mathcal M}\inf_{v\in V_r}\|u-v\|_X.
$$

This asks how well the *best possible* $r$-dimensional linear space approximates the entire manifold in the worst case. Rapid decay means a global linear ROM is plausible; slow decay means no clever POD sampling can make a small linear space uniformly accurate. POD estimates an average-case, finite-snapshot problem, whereas the width describes an idealized worst-case set. Neither automatically measures dynamic stability.

This distinction explains why smooth coercive elliptic problems with moderate parameter dimension often admit effective reduced bases, while advection with moving discontinuities can have slow linear-width decay. In the latter case, adding modes may be less effective than changing the representation: align or transport snapshots, partition parameter space into local bases, or learn a nonlinear manifold. Before tuning a projection algorithm, one should therefore plot singular-value decay under several sampling designs, inspect worst held-out projection errors, and determine whether failures correspond to a missing regime or to fundamentally non-linear geometry of $\mathcal M$.

## Reduced bases and certified approximation

Reduced-basis methods usually target parameterized boundary-value problems and select solution snapshots adaptively over parameter space. For a coercive variational problem, find $u(\mu)\in X$ such that

$$
a(u(\mu),v;\mu)=f(v;\mu)\qquad\text{for all }v\in X.
$$

The reduced solution $u_r\in X_r$ satisfies the same equation for all $v_r\in X_r$. If $a$ has coercivity constant $\alpha(\mu)>0$, the residual functional

$$
r(v;\mu)=f(v;\mu)-a(u_r,v;\mu)
$$

gives the classical bound

$$
\|u-u_r\|_X\le \frac{\|r(\cdot;\mu)\|_{X'}}{\alpha(\mu)}.
$$

An efficiently computable bound lets a greedy algorithm search a training set for the parameter with the largest estimated error, add its full-order solution to the basis, and repeat. This is more than compression: it ties sampling to an explicit reliability target. For noncoercive, saddle-point, nonlinear, or time-dependent systems, stability constants and estimators become more involved. A bound may also be pessimistic; its effectivity must be measured, not assumed.

Efficient online evaluation usually requires affine parameter dependence,

$$
A(\mu)=\sum_{q=1}^{Q}\theta_q(\mu)A_q,
$$

so each $V^TA_qV$ is precomputed. Nonaffine coefficients and changing geometry require interpolation, mappings, or hyper-reduction. The advertised online complexity should include those operations and any estimator, reconstruction, or output evaluation.

## Where stability is lost

Projection preserves only structures compatible with the trial and test spaces and the numerical formulation. Several failures recur.

**Unresolved feedback.** In a nonlinear system, discarded modes influence retained modes. Truncating them does not merely remove small-scale energy; it removes their feedback. For turbulent flow this can eliminate dissipation or backscatter and produce biased or unstable reduced dynamics. Eddy-viscosity, variational multiscale, stochastic, memory, and learned closures attempt to represent that feedback. A closure fitted to one Reynolds number is not automatically valid at another.

**Constraint failure.** In incompressible flow, velocity and pressure spaces must satisfy a stability condition. A naive pair of POD spaces can violate the inf–sup requirement even when the full finite-element pair was stable. Divergence-free velocity snapshots, supremizer enrichment, pressure stabilization, or a carefully designed Petrov–Galerkin formulation address different versions of this problem. Similar care is needed for positivity, conservation, symplectic structure, and boundary conditions.

**Non-normal and convection-dominated dynamics.** A basis with small state projection error can yield unstable projected evolution because the residual is amplified along sensitive directions. Petrov–Galerkin or least-squares projection, stabilization inherited from the full-order scheme, and residual-based basis enrichment can help. Stability must be assessed for the reduced time integrator and operators actually used.

**Distribution shift.** Snapshot coverage defines an empirical validity region. New forcing, geometry, boundary data, bifurcation branch, or longer time horizon may move the solution away from the trial manifold. Monitoring residuals or error indicators can detect some failures, but a small sampled residual is not automatically a small state error without a stability relation.

**Time-discretization mismatch.** Projecting a semidiscrete PDE and then choosing a reduced integrator can differ from reducing the fully discrete update. Large reduced time steps may destroy invariants or stability that held in the full model. As with [[Differentiable PDE solvers]], the actual computational map—not an idealized continuum equation—is the object that must be verified.

## An honest error budget

A ROM prediction should be interpreted through a decomposed error budget:

$$
\|u-u_r\|\le
\underbrace{\|u-u_h\|}_{\text{PDE discretization}}
+\underbrace{\|u_h-P_Vu_h\|}_{\text{representation}}
+\underbrace{\|P_Vu_h-u_r\|}_{\text{projected dynamics}}
+\underbrace{E_{\mathrm{hyper}}}_{\text{hyper-reduction}},
$$

with further contributions from parameter estimation, time integration, roundoff, and model-form discrepancy when relevant. This expression is a diagnostic decomposition, not a universal theorem: the precise norms and constants depend on stability and consistency. Its value is that it prevents singular values alone from being presented as total prediction error.

Verification should therefore include held-out parameters and trajectories, convergence in $r$, sensitivity to snapshot design, conservation or constraint defects, long-time stability, quantities of interest, and comparison with the full-order discretization at an accuracy target. A manufactured solution can isolate implementation error; an independent fine solve can assess the combined full-order and ROM error. Residual-based certification is strongest when the residual norm and stability factor are evaluated rigorously.

State error and output error should be separated. If the desired output is $J(u)$, a moderate global state error may be harmless when it is orthogonal to the output sensitivity, or disastrous when concentrated near a boundary flux. Dual-weighted residual methods solve an adjoint problem to weight residual components by their influence on $J$. This can guide basis enrichment toward the decision-relevant directions and can produce sharper output estimates than a global energy norm. It does not remove the need to validate the adjoint discretization or stability constants; it changes which error the ROM is designed to control.

## Offline–online economics

ROMs are most compelling in a many-query setting. Let $C_F$ be one full-order solve, $C_{mathrm{off}}$ the cost of snapshots, basis construction, tuning, and reduced assembly, and $C_R$ one reduced query including reconstruction and certification. For $Q$ queries, reduction is economically favorable only if

$$
C_{\mathrm{off}}+QC_R<QC_F,
\qquad
Q>\frac{C_{\mathrm{off}}}{C_F-C_R}.
$$

The break-even formula is simple; measuring its inputs is not. Snapshot simulations may run in parallel. Full-order preconditioners may be reused. Reduced models may need online enrichment. A scalar output may be obtainable cheaply from the full solver without reconstructing a field. Hardware, tolerances, mesh resolution, setup time, and failure handling belong in the comparison.

The reduced model is not a replacement for the full solver that generated and validates it. It is a second model with a narrower purpose: rapid evaluation inside a declared region. In design optimization, it can screen candidates while selected designs receive full-order confirmation. In data assimilation, it can accelerate ensembles but must include reduction error in [[Uncertainty quantification for PDE models]]. In control, a controller designed on the ROM should be tested on the full system, because closed-loop trajectories may leave the training region.

## A practical construction and validation loop

A defensible project begins by declaring the query distribution and quantities of interest before generating snapshots. Parameter bounds, forcing histories, initial conditions, geometry changes, time horizon, and acceptable errors define the intended operating envelope. The full-order solver is then verified at representative points; a ROM cannot repair an incorrectly discretized PDE.

Training points should cover mechanisms rather than merely fill a box. A bifurcation, moving front, resonance, or boundary layer may require targeted sampling. Build the basis on a training set, but reserve genuinely unseen parameters and trajectories for validation. Select $r$ from both singular-value decay and downstream errors: an energy threshold alone may discard a low-energy mode that controls a rare output. For a time-dependent problem, plot state and output error against time instead of reporting only an average.

Next, test the projected model before adding hyper-reduction. This separates failure of the trial space or dynamics from failure of sampled nonlinear evaluation. Add stabilization or enrichment only with a diagnostic reason, then repeat the tests. When hyper-reduction is introduced, vary its sampling dimension independently of $r$; otherwise two error sources are confounded.

Finally, install an online guard. It might combine a residual indicator, constraint defect, distance to training data, or certified output bound. Define in advance what happens when it fires: reject the query, enrich the basis with a new full solve, switch to the full-order model, or widen uncertainty intervals. Reporting the rejection rate is as important as reporting speed on accepted queries. This loop turns “the ROM was accurate on examples” into an auditable statement about scope, evidence, and failure handling.

## Projection ROMs and learned surrogates

Projection ROMs expose a trial space, a residual, and a relationship to the discretized equations. [[Neural operators]] and other learned surrogates instead approximate an input-to-solution map from data. The boundary is not absolute: nonlinear autoencoder coordinates can be paired with projected physics; closures can be learned; operator inference can fit reduced dynamics; a ROM can generate training data for a neural surrogate.

The useful comparison is therefore not “physics versus data.” It asks which parts are derived, fitted, or sampled; which errors can be bounded; how constraints are enforced; what must be recomputed after a mesh or parameter change; and how offline cost is amortized. [[Operator learning versus numerical solvers]] develops the corresponding benchmark contract.

## Why it matters

Reduced-order modeling makes expensive PDE analysis interactive enough for optimization, uncertainty quantification, estimation, and control. Its deepest lesson is also cautionary: low-rank snapshots show compressibility of observed states, not automatic reliability of new dynamics. A useful ROM couples compression to stability, residual or output checks, explicit validity limits, and full-order fallback.

## Sources

- Peter Benner, Mario Ohlberger, Albert Cohen, and Karen Willcox, eds., [*Model Reduction and Approximation: Theory and Algorithms*](https://doi.org/10.1137/1.9781611974829), SIAM, 2017 — authoritative overview of POD, reduced bases, and related algorithms.
- Gianluigi Rozza, Federico Pichi, Maria Strazzullo, and Francesco Ballarin, [*Advanced Reduced Order Methods and Applications in Computational Fluid Dynamics*](https://doi.org/10.1137/1.9781611977257), SIAM, 2022 — projection methods, POD, greedy construction, and CFD applications.
- Sugata Sen et al., [“Natural norm a posteriori error estimators for reduced basis approximations”](https://www.mit.edu/~cuongng/project/rbm7/rbm7.pdf), *Journal of Computational Physics* 217 (2006), 37–62 — residual estimators and offline–online certified approximation.
- Julia Novo and Samuele Rubino, [“Error Analysis of Proper Orthogonal Decomposition Stabilized Methods for Incompressible Flows”](https://doi.org/10.1137/20M1341866), *SIAM Journal on Numerical Analysis* 59 (2021), 334–369 — inf–sup, pressure recovery, grad-div stabilization, and rigorous error analysis.
- Shady E. Ahmed et al., [“On closures for reduced order models”](https://arxiv.org/abs/2106.14954), 2021 survey — unresolved-mode closure from first-principles through learned models.
- Kevin Carlberg, Matthew Barone, and Harbir Antil, [“Galerkin v. least-squares Petrov–Galerkin projection in nonlinear model reduction”](https://doi.org/10.1016/j.jcp.2017.06.033), *Journal of Computational Physics* 330 (2017), 693–734 — distinction between Galerkin and residual-minimizing projection.
- Changhong Mou et al., [“Reduced Order Models for the Quasi-Geostrophic Equations: A Brief Survey”](https://arxiv.org/abs/2012.00638), 2020 — applied ROM workflow and closure issues in geophysical flow.

## Open questions

- Which residual and stability indicators remain cheap and trustworthy for strongly nonlinear, long-time, or bifurcating PDEs?
- When should a global linear basis be replaced by local bases, transported coordinates, or a nonlinear manifold?
- How can conservation, positivity, entropy stability, and uncertainty calibration be preserved simultaneously under hyper-reduction?
- What full-order fallback policy is appropriate when an online indicator signals that a query lies outside the ROM's certified region?
