---
title: Differentiable PDE solvers
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, partial-differential-equations, numerical-analysis, inverse-problems, scientific-machine-learning]
---

A differentiable PDE solver returns not only a numerical state but a trustworthy derivative of a stated discrete objective with respect to parameters, controls, initial data, or geometry.

Up: [[Applied PDE research frontier 2026]]

Related: [[Adjoint methods for PDE-constrained optimization]] · [[Consistency stability and convergence]] · [[Data assimilation as an inverse problem]] · [[Structure-preserving numerical methods]]

## The object being differentiated

Write a parameterized PDE abstractly as

$$
\mathcal F(u,m)=0 \quad \text{in }\Omega,
$$

with boundary and initial conditions included in $\mathcal F$. Here $u$ is the state field and $m$ may represent a coefficient, source, boundary control, initial condition, or shape. A spatial and temporal discretization replaces this continuum statement by a finite system

$$
R_h(U_h,M_h)=0,
$$

and a scalar quantity of interest becomes $J_h(U_h,M_h)$. A differentiable solver supplies the total derivative

$$
\frac{dJ_h}{dM_h}
=\frac{\partial J_h}{\partial M_h}
+\frac{\partial J_h}{\partial U_h}\frac{dU_h}{dM_h}.
$$

That subscript matters. Differentiating the implemented computation normally produces the derivative of the **discrete** map. It does not automatically produce the exact derivative of the continuum PDE, nor does a small gradient error repair a poor forward discretization. The useful contract therefore has two parts: the forward solution must approximate the intended PDE, and the derivative must accurately differentiate the stated discrete objective.

This capability is central to [[PDE-constrained optimization]], parameter estimation, [[Data assimilation as an inverse problem|data assimilation]], uncertainty propagation, experimental design, and training hybrid physics–machine-learning models. The word “differentiable” is nevertheless easy to overread. It means that a derivative can be computed under stated regularity and algorithmic assumptions; it does not mean that the inverse problem is identifiable, the optimization is convex, or the resulting design is physically robust.

## Three routes to a gradient

### Tangent or forward sensitivity

Differentiate the residual equation with respect to one component $M_j$:

$$
R_U\,S_j=-R_{M_j},
\qquad S_j=\frac{\partial U}{\partial M_j}.
$$

After solving this linearized PDE, the gradient component is

$$
\frac{dJ}{dM_j}=J_{M_j}+J_U S_j.
$$

Forward sensitivity is attractive when there are few input directions and many outputs. Each parameter direction generally requires another linearized solve, so a million-dimensional coefficient field makes the approach prohibitive even if the objective is scalar.

### Reverse mode and the discrete adjoint

Introduce a Lagrangian

$$
\mathcal L(U,M,\lambda)=J(U,M)-\lambda^T R(U,M).
$$

Choose $\lambda$ to solve

$$
R_U^T\lambda=J_U^T.
$$

Then dependence on $dU/dM$ cancels and

$$
\frac{dJ}{dM}=J_M-\lambda^T R_M.
$$

One adjoint solve gives the derivative of one scalar objective with respect to every parameter represented in $M$. This “one output, many inputs” scaling explains why adjoints dominate large inverse and design problems. Reverse-mode automatic differentiation through the sequence of solver operations is an algorithmic way to produce the same chain-rule computation when every relevant operation has an appropriate derivative rule.

The transpose solve is not free. It needs access to the primal state, linearizations, and—in time-dependent problems—the trajectory in reverse order. A framework can automate equation construction without eliminating the mathematical conditioning or storage cost.

### Implicit differentiation

For a steady or converged inner solve, it is often wasteful to backpropagate through every nonlinear or Krylov iteration. If $R(U(M),M)=0$ and $R_U$ is nonsingular near the solution, the implicit-function theorem gives

$$
\frac{dU}{dM}=-R_U^{-1}R_M.
$$

In reverse mode, the implementation solves the same adjoint system $R_U^T\lambda=J_U^T$ and never stores the entire iteration history. This differentiates the solution of the residual equation, not the particular path used to reach it. JAX's `custom_root` exposes precisely this pattern: the user supplies a root solve and a tangent linear solve, while derivatives with respect to closed-over variables are defined implicitly.

The assumptions are substantive. If the nonlinear solve has not converged, if multiple solution branches meet, or if $R_U$ is singular or badly conditioned, the implicit derivative may be inaccurate, huge, or undefined. Near bifurcations, that behavior is often real sensitivity rather than a software bug.

## Differentiate-then-discretize or discretize-then-differentiate

A **continuous adjoint** is derived from the PDE and objective before discretization. Integration by parts determines the adjoint differential operator and its terminal or boundary conditions. The result can reveal structure, regularity requirements, and the physical transport of sensitivity. It must then be discretized and implemented.

A **discrete adjoint** differentiates $R_h(U_h,M_h)=0$ after the numerical method is fixed. When implemented correctly, it gives the exact derivative of $J_h$ up to algebraic and floating-point error. It also captures details such as numerical fluxes, quadrature, limiters, boundary enforcement, and adaptive timesteps—provided those operations are actually represented on the differentiation tape or by custom rules.

The two gradients need not agree on a coarse mesh. Agreement requires a form of adjoint consistency as well as convergence of the forward discretization. Boundary terms are a common source of mismatch: a continuum derivation may assume a smooth trace while the code imposes a discrete boundary operation with a different derivative. For optimization of the implemented model, the discrete adjoint is usually the operational target. For analysis and interpretation, the continuous adjoint remains valuable. Comparing them under refinement is stronger evidence than treating either derivation as automatically authoritative.

## Time dependence and checkpointing

Suppose a time step has the form

$$
U_{n+1}=\Phi_n(U_n,M),\qquad n=0,\ldots,N-1.
$$

Reverse accumulation starts at the final objective and applies

$$
\lambda_n=\left(\frac{\partial\Phi_n}{\partial U_n}\right)^T\lambda_{n+1}
+\left(\frac{\partial j_n}{\partial U_n}\right)^T.
$$

The Jacobian of step $n$ depends on $U_n$, so a naive reverse pass stores every state. For a three-dimensional transient PDE, memory can become the limiting resource. Recomputing all earlier states from the beginning saves memory but can make runtime quadratic in the number of steps.

Checkpointing occupies the middle ground. Selected states are saved; missing trajectory segments are recomputed when the reverse pass needs them. The Revolve algorithm schedules this tradeoff for a fixed number of checkpoints and steps. Practical PDE frameworks may combine checkpointing with disk storage, multilevel schedules, or user-defined restart data. A useful performance report must therefore state forward cost, adjoint cost, peak memory, number of recomputed steps, and I/O—not merely “supports backpropagation.”

Adaptive stepping complicates replay. The reverse pass must recover the accepted step sequence and any event decisions. If recomputation takes a different branch because of floating-point nondeterminism, the recorded computational graph and the replayed state may diverge.

## Nonsmooth operations are mathematical decisions

Many robust PDE codes contain switches: slope limiters, positivity clipping, contact detection, remeshing, wetting and drying, phase appearance, adaptive refinement, and iterations terminated by tolerances. Such operations are not everywhere differentiable. Automatic differentiation can return the derivative of the executed branch, but that local number may not describe the effect of crossing the switch.

Three responses are possible, and they answer different questions:

1. Differentiate the branch actually taken and accept a piecewise derivative away from switching surfaces.
2. Replace the operation with a smooth approximation and acknowledge that the forward model changed.
3. Use generalized derivatives, active-set methods, or derivative-free outer optimization when the nonsmoothness is essential.

A silent smooth surrogate is especially dangerous: it may make optimization easy by removing the mechanism that protected monotonicity or positivity. [[Structure-preserving numerical methods]] remains relevant in the differentiated code. A gradient-enabled solver that violates the forward model's invariants is not a trustworthy scientific instrument.

Iterative linear solvers add a subtler issue. Unrolling a fixed number of iterations differentiates that truncated algorithm. Implicit differentiation targets the converged algebraic solution. With loose, parameter-dependent stopping tolerances, these are different maps. The choice should be explicit.

## A worked elliptic example

Let $u$ solve

$$
-\nabla\cdot(k(x;m)\nabla u)=f \quad\text{in }\Omega,
\qquad u=0\quad\text{on }\partial\Omega,
$$

and let

$$
J(u,m)=\frac12\int_\Omega (u-u_d)^2\,dx
+\frac\alpha2\int_\Omega m^2\,dx.
$$

For a perturbation $\delta m$, the tangent field $\delta u$ satisfies

$$
-\nabla\cdot(k\nabla\delta u)
=\nabla\cdot(k_m\,\delta m\,\nabla u).
$$

Solving this for every basis direction of $m$ would be expensive. Instead solve the adjoint

$$
-\nabla\cdot(k\nabla p)=u-u_d,
\qquad p=0\quad\text{on }\partial\Omega.
$$

After integration by parts, the directional derivative is

$$
dJ(m)[\delta m]
=\int_\Omega \left(\alpha m-k_m\nabla u\cdot\nabla p\right)\delta m\,dx.
$$

Thus the $L^2$ gradient is $\alpha m-k_m\nabla u\cdot\nabla p$. A finite-element discrete adjoint produces the analogous derivative for the assembled discrete forms. The sign depends on the residual and Lagrangian convention, which is why a memorized formula is less reliable than deriving it from the actual code's residual.

## Verification must test both solver and derivative

A forward convergence test cannot validate an adjoint, and a gradient check cannot establish that the PDE was solved accurately. Use a ladder:

1. **Forward verification.** Check manufactured solutions, conservation, refinement, and nonlinear/linear residual tolerances as appropriate.
2. **Taylor remainder test.** For a direction $p$, compute
   $$
   E_0(h)=|J(m+hp)-J(m)|,
   $$
   and
   $$
   E_1(h)=|J(m+hp)-J(m)-h\,g^Tp|.
   $$
   For a smooth problem and correct gradient, $E_0=O(h)$ and $E_1=O(h^2)$ until rounding and solver tolerances dominate.
3. **Directional finite differences or complex step.** Compare several random directions, not just coordinate axes. Complex-step checks require the entire path to support complex arithmetic and analytic operations.
4. **Adjoint identity.** Verify $\langle Jv,w\rangle=\langle v,J^Tw\rangle$ for tangent and transpose actions.
5. **Tolerance study.** Tighten primal, adjoint, and inner linear solves. A derivative that changes materially with tolerances is not yet controlled.
6. **Mesh study.** Compare discrete and, where available, continuous-adjoint gradients under refinement.

Taylor tests have a characteristic failure envelope. Large $h$ shows nonlinear truncation error; very small $h$ shows cancellation and algebraic noise. The expected slope should appear over a range, not at one hand-picked step.

## What software automation does and does not guarantee

High-level systems such as dolfin-adjoint record finite-element operations and automatically derive tangent and discrete-adjoint models. PETSc's TSAdjoint solves discrete adjoint problems for time-integrated ODE/DAE systems arising after spatial discretization. General autodiff systems can differentiate explicit array programs, while custom derivative rules and implicit differentiation connect external or iterative solvers to the graph.

These tools reduce implementation burden, but the user still owns:

- whether the recorded operations represent every state mutation;
- whether custom kernels, boundary conditions, and external libraries have correct derivative rules;
- whether the discretization is differentiable in the regime explored;
- whether solver tolerances make the gradient accurate enough;
- whether the chosen objective and parameterization are scientifically meaningful; and
- whether the inverse or optimization problem is identifiable and well conditioned.

The most credible claim is therefore not “end-to-end differentiable.” It is: *for this discrete PDE, objective, parameterization, tolerance, mesh, and regime, the reported derivative passes stated verification tests and has stated time–memory cost.*

## A gradient has its own error budget

Suppose the continuum objective has gradient $g$, the chosen discretization has exact gradient $g_h$, and the computed adjoint returns $\widetilde g_h$. Then

$$
\|g-\widetilde g_h\|
\leq \|g-g_h\|+\|g_h-\widetilde g_h\|.
$$

The first term is sensitivity discretization error; it includes mesh, timestep, quadrature, geometry, and adjoint-consistency effects. The second is algebraic and implementation error; it includes incomplete primal or adjoint solves, checkpoint replay differences, missing derivative rules, and floating-point effects. A Taylor test primarily probes the second term for the implemented $J_h$. It can pass perfectly while $g_h$ remains a poor approximation to $g$. Conversely, refining the mesh cannot repair a missing derivative through a boundary update.

Optimization adds a third practical scale: how accurately the outer algorithm needs a descent direction. Early iterations may tolerate an inexact gradient, while convergence near a stationary point usually requires tighter inner solves. A defensible workflow therefore couples tolerances: reduce algebraic and adjoint errors below the current discretization error, then refine the discretization when the scientific quantity—not merely the optimizer—demands it. Reporting only the norm of the final gradient hides this hierarchy.

For a derived prediction $Q(m^*)$, uncertainty in observations and parameters is separate again from numerical gradient error. Differentiability makes local propagation possible; it does not justify treating all these error sources as one Gaussian standard deviation.

## Why it matters

Differentiable solvers join mechanistic simulation to optimization and statistical inference without replacing the PDE by an opaque surrogate. They can expose which measurements inform a coefficient, which boundary changes reduce drag, or which initial perturbations control a forecast. Their gradients can also be more misleading than an obvious solver crash: a plausible but inconsistent derivative may steer thousands of optimization steps toward a numerical artifact.

The right mental model is thus a verified derivative-bearing numerical method. It inherits every responsibility of ordinary scientific computing—consistency, stability, convergence, conservation, conditioning, and reproducibility—and adds a second layer of sensitivity verification.

## Sources

- Farrell, Ham, Funke, and Rognes, “Automated derivation of the adjoint of high-level transient finite element programs,” *SIAM Journal on Scientific Computing* 35(4), 2013. [Author preprint and framework paper](https://arxiv.org/abs/1204.5577).
- dolfin-adjoint project, [official documentation and limitations](https://www.dolfin-adjoint.org/en/stable/) and [Taylor remainder verification manual](https://www.dolfin-adjoint.org/en/stable/documentation/manual.html) (accessed 2026-07-10).
- Zhang, Constantinescu, and Smith, “PETSc TSAdjoint: A Discrete Adjoint ODE Solver for First-Order and Second-Order Sensitivity Analysis,” *SIAM Journal on Scientific Computing* 44(1), 2022. [Preprint](https://arxiv.org/abs/1912.07696); [official PETSc TSAdjoint interface](https://petsc.org/main/manualpages/Sensitivity/TSAdjointSolve/).
- Griewank and Walther, “Algorithm 799: Revolve: An Implementation of Checkpointing for the Reverse or Adjoint Mode of Computational Differentiation,” *ACM Transactions on Mathematical Software* 26(1), 2000. [DOI](https://doi.org/10.1145/347837.347846).
- JAX project, [official `custom_root` documentation](https://docs.jax.dev/en/latest/_autosummary/jax.lax.custom_root.html) and [custom derivative rules with implicit differentiation](https://docs.jax.dev/en/latest/hijax_custom_derivatives.html) (accessed 2026-07-10).

## Open questions

- How should derivative error be included in a full optimization error budget alongside discretization, algebraic, and statistical error?
- Which generalized derivative is most useful when conservation-preserving limiters switch active sets?
- When does differentiating an adaptive mesh produce a meaningful shape or parameter sensitivity rather than a mesh-decision artifact?
- How should checkpoint schedules change when recomputation, storage, and communication have different energy as well as time costs?
