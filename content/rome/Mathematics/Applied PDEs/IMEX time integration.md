---
title: IMEX time integration
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, partial-differential-equations, applied-mathematics, numerical-analysis, time-integration, stiffness]
---

Implicit–explicit time integrators treat only the computationally stiff part of a semidiscrete PDE implicitly while advancing the remaining part explicitly, but their accuracy and stability belong to the coupled additive method—not to either tableau in isolation.

Up: [[Applied PDE research frontier 2026]]

Related: [[Stiffness and multiscale PDEs]] · [[Operator splitting for multiphysics PDEs]] · [[Consistency stability and convergence]] · [[Finite-volume methods for conservation laws]]

## The problem IMEX methods are designed to solve

After spatial discretization, many evolutionary PDEs become a large system of ordinary differential equations

$$
\frac{d u}{dt}=F(u)+G(u), \qquad u(t_n)=u_n.
$$

The partition is chosen by computational character rather than by notation. $F$ should be cheap enough and sufficiently nonstiff to evaluate explicitly. $G$ contains the mechanism whose eigenvalues or time scale would make a fully explicit step prohibitively small, but whose implicit solve remains tractable. In an advection–diffusion–reaction model,

$$
u_t+a\cdot\nabla u=\nu\Delta u+R(u),
$$

one might put discretized advection in $F$ and diffusion in $G$. A rapidly relaxing reaction may instead belong in $G$, while a mildly nonlinear reaction may remain in $F$. The split is therefore part of the numerical method. A poor split can leave stiff eigenvalues in $F$, make the implicit solve nearly as difficult as a fully coupled solve, or destroy a structural property that the unsplit spatial discretization had.

The attraction is a compromise. A fully explicit method pays almost nothing per stage but must resolve the fastest stable time scale. A fully implicit method can step over that stability restriction but solves a large nonlinear or linear system involving every term. An IMEX method seeks a step size governed by accuracy and the explicit physics while solving only for $G$. This is especially useful when diffusion, pressure, chemistry, relaxation, or fast waves have exploitable algebraic structure.

IMEX does not make a stiff problem nonstiff. It relocates the cost: stability restrictions associated with $G$ are traded for implicit solves, preconditioning, and convergence tolerances. Nor does it permit the timestep to ignore accuracy, nonlinear transients, explicitly treated waves, positivity, or coupling-induced instabilities.

## Additive Runge–Kutta form

An $s$-stage additive Runge–Kutta (ARK) method uses an explicit tableau $(A^E,b^E,c^E)$ and an implicit tableau $(A^I,b^I,c^I)$. Its stages and update are

$$
U_i=u_n+h\sum_{j=1}^{s}a^E_{ij}F(U_j)
       +h\sum_{j=1}^{s}a^I_{ij}G(U_j),
$$

$$
u_{n+1}=u_n+h\sum_{i=1}^{s}b^E_iF(U_i)
                 +h\sum_{i=1}^{s}b^I_iG(U_i).
$$

$A^E$ is strictly lower triangular, so the explicit contribution at stage $i$ depends only on completed stages. A common implicit choice is a diagonally implicit Runge–Kutta (DIRK) tableau: $A^I$ is lower triangular, and solving stage $i$ requires only

$$
U_i-h a^I_{ii}G(U_i)=r_i,
$$

where $r_i$ is already known. If $G(u)=Lu$ is linear, the stage solve is $(I-ha^I_{ii}L)U_i=r_i$. A singly diagonally implicit method uses the same nonzero diagonal coefficient in every implicit stage, allowing one matrix factorization or preconditioner to be reused when $h$ and $L$ are fixed.

The abscissae are normally row sums, $c^E=A^E\mathbf 1$ and $c^I=A^I\mathbf 1$. Many practical pairs impose $c^E=c^I$ so both partitions are evaluated at matching stage times. Equal abscissae simplify coupling and nonautonomous problems, but equality alone does not guarantee the desired order.

## Why the two component orders are not enough

Suppose each tableau, used alone, is a second- or third-order Runge–Kutta scheme. That does **not** automatically make their additive combination the same order. The exact solution contains mixed derivatives such as $F'(u)G(u)$ and $G'(u)F(u)$. These terms disappear if one tests only $u'=F(u)$ or only $u'=G(u)$, so separate order tests cannot detect incorrect coupling coefficients.

The logic is visible by Taylor expansion. Write $c^E=A^E\mathbf 1$ and $c^I=A^I\mathbf 1$. Expanding the stages about $u_n$ and matching the exact solution for arbitrary smooth $F$ and $G$ gives first-order consistency

$$
(b^E)^T\mathbf 1=1,\qquad (b^I)^T\mathbf 1=1.
$$

Both are required because the method must remain consistent when either partition is set to zero. At second order, every choice of the outer derivative and the inner vector field must match:

$$
(b^\alpha)^Tc^\beta=\frac12,
\qquad \alpha,\beta\in\{E,I\}.
$$

Thus there are four colored conditions, including the mixed conditions $(b^E)^Tc^I=1/2$ and $(b^I)^Tc^E=1/2$. If the abscissae are shared, some conditions coincide, which is one reason shared-stage designs are attractive.

At third order, the two ordinary rooted-tree shapes acquire colors recording whether each occurrence is $F$ or $G$. In compact notation the chain conditions are

$$
(b^\alpha)^TA^\beta c^\gamma=\frac16,
\qquad \alpha,\beta,\gamma\in\{E,I\},
$$

and the branching conditions are

$$
(b^\alpha)^T\bigl(c^\beta\odot c^\gamma\bigr)=\frac13,
\qquad \alpha,\beta,\gamma\in\{E,I\}.
$$

Here $\odot$ denotes componentwise multiplication. Symmetry makes some branching equations duplicates when $\beta$ and $\gamma$ are exchanged, but it is safer conceptually to remember the rule: every colored elementary differential in the exact expansion needs the correct coefficient. Higher order brings more colored trees and more coupling constraints. Published ARK pairs are constructed to satisfy these algebraic conditions; casually pairing a favorite explicit scheme with a favorite DIRK scheme is unreliable.

These are classical, nonstiff order conditions. In a singularly perturbed limit, boundary layers, differential-algebraic constraints, or very large negative eigenvalues can cause **order reduction** even when the formal conditions hold. Stage order, boundary treatment, stiff accuracy, and compatibility of initial data then become consequential.

## Coupled linear stability

The natural scalar diagnostic is the split test equation

$$
u'=\lambda_Eu+\lambda_Iu,
\qquad z_E=h\lambda_E,\quad z_I=h\lambda_I.
$$

Eliminating the stage vector gives the amplification factor

$$
R(z_E,z_I)=1+
\left(z_E(b^E)^T+z_I(b^I)^T\right)
\left(I-z_EA^E-z_IA^I\right)^{-1}\mathbf 1.
$$

Linear stability requires $|R(z_E,z_I)|\le 1$. This is a region in two complex variables, not merely the intersection of the explicit and implicit stability regions. Setting $z_I=0$ recovers the explicit method; setting $z_E=0$ recovers the implicit method. Those axis checks are necessary but do not reveal mixed instability away from the axes.

For diffusion-like $G$, the implicit tableau is often A-stable, meaning its scalar stability function is bounded by one throughout the left half-plane, or L-stable, meaning it additionally damps modes as $z_I\to-\infty$. L-stability is valuable for suppressing unresolved stiff transients rather than leaving them as weakly damped numerical oscillations. But an L-stable implicit component does not by itself make the ARK pair uniformly stable for all $z_I$ and all explicitly admissible $z_E$. One should inspect slices or contours of the coupled $R$ appropriate to the spectra of the actual semidiscrete operators.

Noncommuting matrices add another limitation. The scalar model assumes the split operators share an eigenvector. For $u'=L_Eu+L_Iu$ with $L_EL_I\ne L_IL_E$, scalar stability is informative but incomplete; nonnormal growth, commutators, boundary closures, and solver errors can matter. Energy estimates, logarithmic norms, matrix pseudospectra, or direct convergence experiments may be needed.

## IMEX is not sequential operator splitting

Both IMEX integration and [[Operator splitting for multiphysics PDEs|operator splitting]] start from $F+G$, but they combine the parts differently.

A Lie split step composes two solution operators,

$$
u_{n+1}\approx \Phi_G^h\circ\Phi_F^h(u_n),
$$

and a Strang step uses $\Phi_F^{h/2}\circ\Phi_G^h\circ\Phi_F^{h/2}$. Even if each subproblem is solved exactly, composition introduces splitting error governed at leading order by commutators such as $[F,G]=G'F-F'G$. The physical state passes through separate subflows in sequence.

An additive Runge–Kutta IMEX method instead constructs shared stages in which explicit and implicit increments jointly approximate the same unsplit ODE. Its mixed colored-tree conditions control coupling error. It need not solve either subproblem over a full physical subinterval, and its error is not accurately described merely as the error of composing exact flows. Some schemes blur the taxonomy, and both can exploit modular solvers, but their order theories and stability functions are different.

This distinction affects implementation choices. Splitting is attractive when each subflow has a specialized high-quality solver or preserves a separate invariant exactly. IMEX ARK is attractive when tightly synchronized stages, standard embedded error estimation, and systematic high order are more important. Neither dominates universally.

## Stiff accuracy, conservation, and nonlinear solves

For a DIRK tableau, stiff accuracy usually means the final implicit weights equal the last row: $(b^I)^T=e_s^TA^I$. Then the last implicit stage is closely tied to the step solution. In IMEX literature, **global stiff accuracy** commonly requires the analogous relation for both partitions, $(b^E)^T=e_s^TA^E$ and $(b^I)^T=e_s^TA^I$, together with compatible last-stage times. This can help the numerical solution remain on an equilibrium manifold in a stiff relaxation limit. Definitions vary slightly across method classes, so a paper's convention should be checked rather than inferred from the label.

If both $F$ and $G$ conserve a linear invariant $\ell^Tu$, the additive update conserves it up to algebraic solve error because $\ell^TF(U_i)=\ell^TG(U_i)=0$ stage by stage. If only $F+G$ conserves the quantity through cancellation between partitions, separate stage weights can break that cancellation. Positivity, entropy stability, and maximum principles are even less automatic: the explicit SSP restriction, implicit monotonicity properties, spatial limiter, and nonlinear solver all interact.

An implicit stage is only as accurate as its solve. If a Newton or Krylov iteration stops with residual $r_i$, the method is advancing a perturbed stage equation. To observe order $p$, solve errors generally must be small relative to the requested local error; a fixed loose tolerance can eventually dominate as $h$ decreases. Oversolving every early stage is wasteful, so production solvers often scale nonlinear and linear tolerances with the timestep and error target, then verify tolerance independence empirically.

Preconditioning decides whether the nominal IMEX advantage is real. Treating $G$ implicitly is useful when $(I-ha_{ii}^IG')$ can be inverted or preconditioned efficiently. Mesh refinement can make an unpreconditioned Krylov solve increasingly expensive even though timestep stability improves. Cost comparisons should report right-hand-side evaluations, Jacobian or matrix builds, factorizations, Krylov iterations, rejected steps, memory, and achieved error—not timestep count alone.

## A verification ladder

An implementation should earn trust in increasing levels of difficulty.

1. **Tableau audit.** Check triangular structure, row sums, weights, claimed classical order conditions, embedded weights, and stiff-accuracy identities at higher precision than the solve uses.
2. **Partition degeneracy.** Run problems with $G=0$ and $F=0$. These isolate the explicit and implicit components and expose coefficient or stage-indexing mistakes.
3. **Mixed manufactured ODE.** Use smooth nonlinear $F$ and $G$ for which neither mixed derivative vanishes. A log–log error study should recover slope $p$ under repeated timestep halving. Linear commuting tests alone are too forgiving.
4. **Two-parameter stability scan.** Compare measured growth on $u'=(\lambda_E+\lambda_I)u$ with $R(z_E,z_I)$ over relevant real and imaginary slices, including $|z_I|\gg1$.
5. **Noncommuting linear system.** Choose small matrices with $L_EL_I\ne L_IL_E$ and compare against a matrix-exponential reference. This tests ordering and coupling beyond the scalar model.
6. **Manufactured PDE refinement.** Refine space first until temporal error dominates, then refine $h$. Repeat with realistic boundary conditions because time-dependent or inconsistent boundaries can trigger stiff order reduction.
7. **Invariant and admissibility checks.** Measure conservation drift, positivity violations, entropy behavior, and equilibrium-manifold error. These are separate from norm accuracy.
8. **Solver-tolerance study.** Tighten nonlinear and Krylov tolerances until the PDE error and observed order stop changing. Record iterations and failures.
9. **Work–precision comparison.** Compare IMEX against appropriate explicit, fully implicit, and splitting baselines at equal error and on the same mesh, hardware, stopping criteria, and output schedule.

Passing one rung does not imply the next. In particular, a correct order plot on a commuting linear problem does not validate nonlinear coupling, stiff limits, boundary treatment, or cost advantage.

## Choosing a useful partition

A defensible partition answers four questions. Which term imposes the explicit stability limit? Can that term be solved implicitly much more cheaply than the full residual? Which invariants or equilibria cross the partition boundary? What explicit modes still limit $h$? The answers may change with regime, mesh, or parameter.

Diffusion is a standard implicit candidate because its explicit stability limit often scales like $h=O(\Delta x^2)$ while advection permits $O(\Delta x)$. Fast local chemistry may be implicit because its stage solves decouple by cell. A linear gravity-wave or acoustic operator may be implicit while nonlinear transport stays explicit. Conversely, putting a strongly nonlinear, globally coupled term into $G$ can eliminate any advantage. Leaving a fast wave in $F$ means the CFL restriction survives regardless of the quality of the implicit tableau.

The best method is therefore not the pair with the highest formal order. It is the pair and partition that deliver the requested accuracy with robust solves, acceptable storage, correct stiff-limit behavior, and preservation of the application's important structure.

## Why it matters

IMEX integration is a bridge between PDE modeling and solver architecture. It makes the mathematical source of stiffness explicit, turns that diagnosis into a partition, and couples the partition to reusable explicit and implicit numerical machinery. Its failures are equally instructive: order reduction reveals hidden stiffness or boundary incompatibility; mixed instability reveals that componentwise analysis was inadequate; poor work–precision results reveal that the implicit solve or partition was not actually economical.

For applied work, “we used an IMEX scheme” is therefore incomplete. A reproducible account names both tableaux, states the partition, gives timestep control and solver tolerances, identifies the relevant coupled stability or stiff-limit property, and verifies convergence and cost against alternatives.

## Sources

- [Ascher, Ruuth, and Spiteri, “Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations,” *Applied Numerical Mathematics* 25 (1997), 151–167](https://doi.org/10.1016/S0168-9274(97)00056-1) — foundational IMEX Runge–Kutta construction and convection–diffusion experiments.
- [Kennedy and Carpenter, “Additive Runge-Kutta Schemes for Convection-Diffusion-Reaction Equations,” NASA/TM-2001-211038](https://ntrs.nasa.gov/api/citations/20010075154/downloads/20010075154.pdf) — primary derivation, order conditions, stability considerations, embedded pairs, and implementation-oriented ARK families.
- [Pareschi and Russo, “Implicit–Explicit Runge–Kutta Schemes and Applications to Hyperbolic Systems with Relaxation,” *Journal of Scientific Computing* 25 (2005), 129–155](https://doi.org/10.1007/s10915-004-4636-4) — SSP/DIRK pairings and asymptotic-preserving behavior for stiff relaxation systems.
- [Boscarino, Pareschi, and Russo, *Implicit-Explicit Methods for Evolutionary Partial Differential Equations* (SIAM, 2024)](https://doi.org/10.1137/1.9781611978209) — modern monograph covering IMEX multistep and Runge–Kutta methods, order, stability, and applications.

## Open questions

- Which coupled stability slices best predict performance for nonnormal advection–diffusion discretizations?
- How should nonlinear and Krylov tolerances scale with an embedded error estimator without systematic oversolving?
- When do stiff accuracy and stage order prevent boundary-induced order reduction, and when is a specialized boundary correction still necessary?
- Which partitions preserve the equilibrium manifold and asymptotic limit of a given relaxation PDE?
- Can an adaptive algorithm change the implicit–explicit partition during a simulation without introducing unacceptable switching error or preconditioner cost?
