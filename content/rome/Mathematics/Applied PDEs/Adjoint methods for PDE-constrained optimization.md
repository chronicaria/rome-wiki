---
title: Adjoint methods for PDE-constrained optimization
created: 2026-07-09
as_of: 2026-07-09
source: llm
status: seed
desk: Applied partial differential equations
tags: [mathematics, partial-differential-equations, applied-mathematics, optimal-control, inverse-problems, numerical-analysis]
---
Adjoint methods turn the derivative of a PDE-dependent objective with respect to many controls into one forward solve, one adjoint solve, and an inexpensive gradient assembly.

Up: [[Applied PDE research frontier 2026]] · Application: [[Neural-operator topology priors for PDE-constrained inverse design]] · Related: [[Data assimilation as an inverse problem]] · [[Differentiable PDE solvers]]

## The computational problem

Suppose a control or parameter $m$ determines a state $u$ through a PDE, and a scalar objective $J(u,m)$ measures misfit, cost, or performance. In an abstract weak formulation, let

$$
F(u,m;v)=0\qquad\text{for every }v\in V,
$$

where $u\in U$, $m\in M$, and $V$ is the test space. Equivalently, write an operator equation $F(u,m)=0$ in $V^*$. The reduced objective is

$$
j(m)=J(S(m),m),
$$

where the parameter-to-state map $S:M\to U$ returns the PDE solution. Examples include a distributed heat source $m(x)$, an initial condition, an inflow boundary value, a material coefficient, or a shape parameter. The state might be temperature, velocity, concentration, or wave amplitude.

Optimization needs $j'(m)$ repeatedly. A finite-difference gradient with $N$ scalar parameters requires about $N+1$ forward PDE solves. A tangent-linear calculation is exact to linearization error but still requires one incremental state solve for each independent direction. The adjoint reverses this accounting: because $J$ is scalar, a single adjoint variable compresses the effect of all state variations onto the control space. Its cost is therefore essentially independent of the number of control coefficients. This is the central advantage, not a claim that optimization itself becomes cheap or convex.

The derivation requires more than formal differentiation. Take $U$, $M$, and $V$ as Banach spaces, assume $F:U\times M\to V^*$ and $J:U\times M\to\mathbb R$ are continuously Fréchet differentiable near a feasible pair, and suppose $F_u(u,m):U\to V^*$ is a bounded isomorphism. The implicit-function theorem then gives a differentiable local map $S$. The Banach adjoint $F_u(u,m)^*:V^{**}\to U^*$ acts naturally on $V$ after the canonical embedding $V\hookrightarrow V^{**}$; when $V$ is reflexive, this identification is onto. In the Hilbert-space examples below, Riesz identifications make the familiar adjoint PDE notation legitimate. For nonsmooth controls, shocks, topology changes, contact, or active inequality constraints, these assumptions may fail and the classical adjoint must be modified or interpreted more carefully.

## Why the adjoint equation is forced

Perturb $m$ in a direction $h\in M$. The corresponding state perturbation $\dot u=S'(m)h$ satisfies the tangent equation

$$
F_u(u,m)\dot u+F_m(u,m)h=0.
$$

The chain rule gives

$$
j'(m)h=J_u(u,m)\dot u+J_m(u,m)h.
$$

Computing $\dot u$ for every $h$ is precisely what we want to avoid. Introduce a multiplier $p\in V$ and the Lagrangian

$$
\mathcal L(u,m,p)=J(u,m)+\langle F(u,m),p\rangle_{V^*,V}.
$$

The sign is conventional; choosing $J-\langle F,p\rangle$ changes the signs in the adjoint and gradient together. Since a feasible state has $F=0$, $\mathcal L=J$. Differentiate with respect to $u$:

$$
\mathcal L_u(u,m,p)\,\delta u
=J_u(u,m)\delta u+\langle F_u(u,m)\delta u,p\rangle.
$$

Choose $p$ so this vanishes for every $\delta u\in U$:

$$
F_u(u,m)^*p=-J_u(u,m).
$$

This is the adjoint equation. It is not guessed: it is the cancellation condition that removes the unknown sensitivity $\dot u$ from the reduced derivative. Under the isomorphism and reflexivity assumptions above, the adjoint equation has a unique solution. Substituting the tangent equation yields

$$
j'(m)h=J_m(u,m)h+\langle F_m(u,m)h,p\rangle.
$$

Thus a gradient evaluation follows three steps: solve the nonlinear state PDE for $u$; solve the linear adjoint PDE, linearized about that $u$, for $p$; assemble the remaining control derivative. If $M$ is a Hilbert space, the Riesz map $R_M:M\to M^*$ converts the derivative functional into a gradient $g=R_M^{-1}j'(m)$. This distinction matters: the same derivative has different gradient representations in $L^2$, $H^1$, or a mesh-dependent Euclidean inner product. An $H^1$ gradient is often smoother because the Riesz solve acts as a spatial preconditioner; it does not change the underlying derivative.

## Worked elliptic control problem

Let $\Omega\subset\mathbb R^d$ be bounded and Lipschitz. Choose a distributed source $m\in L^2(\Omega)$ to steer a Poisson state toward $u_d\in L^2(\Omega)$:

$$
\min_{m\in L^2(\Omega)}
J(u,m)=\frac12\|u-u_d\|_{L^2(\Omega)}^2
+\frac\alpha2\|m\|_{L^2(\Omega)}^2,
\qquad \alpha>0,
$$

subject to

$$
-\Delta u=m\ \text{in }\Omega,
\qquad u=0\ \text{on }\partial\Omega.
$$

Set $U=V=H_0^1(\Omega)$. The weak residual is

$$
F(u,m;v)=\int_\Omega \nabla u\cdot\nabla v\,dx
-\int_\Omega mv\,dx.
$$

The Poincaré inequality makes the Dirichlet energy coercive on $H_0^1(\Omega)$, while $m\in L^2(\Omega)$ defines a bounded functional there through the continuous embedding $H_0^1(\Omega)\hookrightarrow L^2(\Omega)$. Lax--Milgram therefore gives a unique $u\in H_0^1(\Omega)$. With the plus-sign Lagrangian above, stationarity in $u$ requires

$$
\int_\Omega (u-u_d)\,\delta u\,dx
+\int_\Omega \nabla p\cdot\nabla\delta u\,dx=0
\quad\forall\delta u\in H_0^1(\Omega).
$$

Therefore the adjoint satisfies

$$
-\Delta p=-(u-u_d)\ \text{in }\Omega,
\qquad p=0\ \text{on }\partial\Omega.
$$

Differentiation in the control direction $h$ gives

$$
j'(m)h=\int_\Omega (\alpha m-p)h\,dx,
$$

so the $L^2$ gradient is $\nabla j(m)=\alpha m-p$. At an unconstrained optimum, $m=p/\alpha$. Together, the state equation, adjoint equation, and stationarity relation form the first-order optimality system.

For box constraints $m_a\le m\le m_b$ almost everywhere, stationarity becomes the variational inequality

$$
\int_\Omega(\alpha m-p)(q-m)\,dx\ge0
\quad\text{for every admissible }q.
$$

Equivalently,

$$
m(x)=\Pi_{[m_a(x),m_b(x)]}\!\left(\frac{p(x)}{\alpha}\right)
$$

almost everywhere. This projection formula exposes the active set, but the reduced objective is no longer treated by an ordinary unconstrained step. Projected-gradient, semismooth Newton, or active-set methods enforce feasibility.

The Poisson operator is self-adjoint, so the state and adjoint differential operators look identical. That is special, not definitional. For advection, the adjoint reverses transport direction; integration by parts also generates adjoint boundary conditions. Dropping those boundary terms is a common source of plausible-looking but wrong gradients.

## Time-dependent adjoints run backward

Consider a semilinear parabolic equation on $Q=\Omega\times(0,T)$,

$$
\partial_t u-\kappa\Delta u+f(u)=Bm,
\qquad u(0)=u_0,
$$

with homogeneous Dirichlet boundary conditions, $\kappa>0$, and an objective

$$
J=\frac12\int_0^T\|Cu-y_d\|^2\,dt
+\Phi(u(T))+\frac\alpha2\int_0^T\|m\|^2\,dt.
$$

For a rigorous version, take the state in $W(0,T)=\{u\in L^2(0,T;H_0^1):\partial_tu\in L^2(0,T;H^{-1})\}$, whose members have a well-defined $L^2$ trace at $t=0,T$. Assume the semilinear problem is locally well posed, its linearization is an isomorphism, $f$ is differentiable with the required growth bounds, $B$ and $C$ are bounded between the chosen control, state, and observation spaces, and $\Phi$ is Fréchet differentiable. Without these hypotheses the displayed strong adjoint is only formal; its weak form is the primary object.

After integrating $p\,\partial_t\delta u$ by parts in time, cancellation of arbitrary $\delta u$ yields, under the same sign convention,

$$
-\partial_t p-\kappa\Delta p+f'(u)^*p
=-C^*(Cu-y_d),
$$

with terminal condition

$$
p(T)=-\Phi'(u(T)).
$$

The negative time derivative and terminal data mean the adjoint is solved from $T$ back to $0$. Its gradient contribution is $\alpha m-B^*p$. The backward direction reflects dependency, not reversed physical time: a late objective depends on every earlier state that causally influences it.

For nonlinear dynamics, the backward solve needs the forward trajectory $u(t)$. Keeping every time step can exceed memory; recomputing all states can be prohibitively slow. Checkpointing stores selected states and recomputes the missing intervals during the reverse pass, trading memory for additional forward work. Automated systems such as `dolfin-adjoint` record the high-level sequence of variational solves and can generate tangent and discrete-adjoint models while using checkpoint schedules. Automation removes much transcription work, but it does not validate differentiability, modeling assumptions, or the objective.

## Continuous and discrete adjoints

Two legitimate workflows answer subtly different questions.

In **optimize then discretize**, derive $F_u^*p=-J_u$ in function spaces, including adjoint boundary and terminal conditions, then discretize that PDE. This route exposes the continuum meaning, regularity requirements, and physical structure. It can preserve a desired adjoint-consistent weak form. But if quadrature, stabilization, limiters, iterative tolerances, mesh motion, or boundary implementation alter the actual code, the resulting gradient need not be the exact derivative of the numerical objective.

In **discretize then optimize**, regard the implemented residual as

$$
R(U,M)=0,\qquad J_h=J_h(U,M),
$$

where $U\in\mathbb R^{n_u}$ and $M\in\mathbb R^{n_m}$. Differentiation gives

$$
R_U\,\dot U+R_M\,H=0.
$$

Solve the transpose system

$$
R_U^T P=-J_U^T,
$$

then

$$
\frac{dJ_h}{dM}=J_M+P^TR_M.
$$

This derivative is discretely exact, up to nonlinear/linear solver and floating-point tolerances, for the program whose residual and objective were differentiated. Reverse-mode automatic differentiation is a general implementation of the same transpose-Jacobian logic, although exploiting PDE blocks is usually far more memory-efficient than differentiating blindly through every low-level operation.

The two gradients may converge to one another as the mesh and time step are refined when the scheme is consistent and adjoint-consistent. They need not coincide on a fixed mesh. Upwinding, shock limiters, remeshing, clipping, approximate solvers, and non-differentiable branches can make the discrepancy consequential. Hyperbolic problems are especially delicate because discontinuities can invalidate classical sensitivities; even where a discrete derivative exists, it may describe grid-scale changes rather than a stable continuum derivative.

There is also a practical linear-algebra trap. If the forward system uses a preconditioned Krylov method, the adjoint equation still involves the transpose of the true Jacobian. Reusing a forward preconditioner may be effective, but it is not automatically the correct transpose preconditioner. A loose forward solve means the computed $U$ does not exactly satisfy $R=0$; differentiating the ideal residual solve while stopping the actual solver early can produce a gradient inconsistent with the returned objective.

## Verification before optimization

An optimizer can decrease an objective even with a biased gradient, so successful iterations do not certify an adjoint. Verification should isolate the derivative before a large optimization run.

Choose a random direction $h$ and compare the adjoint directional derivative $g\cdot h$ with centered finite differences:

$$
D_\varepsilon=
\frac{j(m+\varepsilon h)-j(m-\varepsilon h)}{2\varepsilon}.
$$

For a smooth, correctly implemented problem, $|D_\varepsilon-g\cdot h|=O(\varepsilon^2)$ until cancellation and solver error dominate. The Taylor remainder test is often cleaner:

$$
R_0(\varepsilon)=|j(m+\varepsilon h)-j(m)|=O(\varepsilon),
$$

$$
R_1(\varepsilon)=
|j(m+\varepsilon h)-j(m)-\varepsilon g\cdot h|
=O(\varepsilon^2).
$$

Halving $\varepsilon$ should reduce $R_1$ by about four in the asymptotic range. Test several random directions and parameter regimes. Use tighter state and adjoint tolerances than the expected derivative error, and keep the same discretization in every evaluation. A dot-product test separately checks a tangent/adjoint pair:

$$
\langle F_u\delta u,p\rangle
=\langle\delta u,F_u^*p\rangle.
$$

For time-dependent codes, test a short run first, then increase the horizon and verify checkpoint recomputation. For mesh refinement, track both the discrete Taylor test and whether gradients themselves converge in a stated norm. Passing a Taylor test proves consistency with the discrete program near one point; it does not prove the PDE model is correct, the continuum derivative exists, or the optimizer will find a global solution.

## What adjoints enable—and what they do not

Adjoint gradients make high-dimensional local optimization feasible. In aerodynamic shape design they weight how residual perturbations affect lift or drag; in four-dimensional variational data assimilation they propagate observation misfit backward through a forecast model; in coefficient inversion they map state-data mismatch into sensitivity with respect to material fields; in flow control they expose where forcing changes an integrated objective. They also underpin goal-oriented error estimation, where an adjoint weights residuals according to their impact on a chosen quantity of interest.

The method is most attractive when there are many controls and few scalar outputs. If one needs sensitivities of millions of outputs to a few parameters, forward/tangent mode may be cheaper. Each independent scalar objective generally needs its own adjoint right-hand side, though linear combinations, block methods, and multiple right-hand-side solvers can share work. Thus “one adjoint solve” means one chosen scalar reduced objective at one linearization point, not one solve for an entire Pareto front.

Several limitations survive the favorable cost scaling. First, the forward and adjoint solves can each be difficult, particularly near bifurcations or for chaotic long-time dynamics. The inverse of $F_u$ becomes ill-conditioned near loss of state uniqueness. Second, adjoints provide local first derivatives, not convexity or global optimality. Regularization such as $\alpha\|m\|^2/2$ can stabilize an inverse problem but introduces a modeling choice and bias. Third, state inequality constraints require multipliers and complementarity; nonsmooth penalties and active-set changes complicate differentiation. Fourth, geometric controls require shape calculus: the derivative includes domain and boundary motion, not merely a coefficient derivative on a fixed mesh. Finally, an accurately differentiated biased discretization gives an accurate gradient of the wrong numerical model.

For learned surrogates and [[Differentiable PDE solvers]], the same discipline applies. Backpropagation through a neural operator may cheaply differentiate the surrogate objective, yet the result is only useful if the surrogate is accurate in the optimization-induced distribution. A robust hybrid workflow can use a learned model to propose candidates while retaining a verified classical PDE solve and adjoint—or at least high-fidelity evaluation—for correction. [[Neural-operator topology priors for PDE-constrained inverse design]] illustrates why compressing the design space and differentiating or searching within it must be distinguished from guaranteeing that the full-space optimum remains representable.

## Implementation checklist

1. State $U$, $M$, $V$, the domain, boundary/initial data, and the residual sign convention.
2. Establish or state the local well-posedness and differentiability assumptions behind $S(m)$.
3. Derive the tangent equation before the adjoint; it reveals every dependency that the reverse pass must transpose.
4. Derive boundary and terminal conditions from integration by parts rather than analogy.
5. Specify whether the reported object is a derivative in $M^*$, an $L^2$ gradient, an $H^1$ gradient, or a Euclidean coefficient gradient.
6. Decide explicitly between continuous and discrete adjoints, and document any stabilization, limiter, solver tolerance, or remeshing that may prevent equivalence.
7. Verify with directional finite differences, a second-order Taylor remainder test, and—where available—a tangent-adjoint dot-product test.
8. Only then couple the gradient to an optimizer; monitor feasibility, gradient norm or projected-gradient norm, objective decrease, and mesh dependence.

## Sources

- [Hinze, Pinnau, Ulbrich, and Ulbrich, *Optimization with PDE Constraints*](https://link.springer.com/book/10.1007/978-1-4020-8839-1) — scholarly monograph; functional-analytic optimality theory, Banach-space optimization, discretization, and applications.
- [Giles and Pierce, “An Introduction to the Adjoint Approach to Design”](https://people.maths.ox.ac.uk/~gilesm/files/ftc00.pdf) — primary tutorial in *Flow, Turbulence and Combustion* 65 (2000), pp. 393–415; linear-algebra derivation, PDE adjoints, boundary conditions, and aerodynamic design.
- [Farrell, Ham, Funke, and Rognes, “Automated derivation of the adjoint of high-level transient finite element programs”](https://arxiv.org/abs/1204.5577) — primary methods paper; derives discrete tangent and adjoint models from high-level finite-element programs and discusses checkpointing.
- [Funke and Farrell, “A framework for automated PDE-constrained optimisation”](https://arxiv.org/abs/1302.3894) — primary framework paper; connects automated adjoints, reduced functionals, optimization, and Taylor verification.
- [Hinze and Tröltzsch, “Discrete concepts versus error analysis in PDE-constrained optimization”](https://doi.org/10.1002/gamm.201010012) — scholarly comparison of discretize-then-optimize, optimize-then-discretize, control discretization, and error analysis.
- [`dolfin-adjoint` verification documentation](https://dolfin-adjoint-doc.readthedocs.io/en/latest/documentation/verification.html) — implementation reference for Taylor remainder tests and common consistency failures.

## Open questions

- Under what regularity and adjoint-consistency assumptions does a chosen stabilized discretization make continuous and discrete gradients converge at the expected rate?
- How should adjoint sensitivities be generalized for shocks, contact, topology changes, and other genuinely nonsmooth state maps?
- Which checkpoint schedule best balances memory, recomputation, and communication for a particular long-horizon parallel PDE solver?
- When does an $H^1$, Sobolev, or problem-specific natural gradient materially improve optimization over an $L^2$ gradient without hiding mesh dependence?
- How can surrogate-gradient error be bounded along the optimization trajectory rather than only on a fixed test distribution?
