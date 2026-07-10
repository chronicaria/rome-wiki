---
title: Reduced basis methods
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, reduced-basis, model-reduction, error-estimation]
---

Reduced basis methods turn a repeatedly solved parametric PDE into a small Galerkin system, and—under stability and separability assumptions—attach a computable residual certificate whose online cost does not depend on the full discretization dimension.

Up: [[Applied PDE research frontier 2026]]

Related: [[Reduced-order models for PDEs]] · [[Finite element methods]] · [[Goal-oriented error estimation]] · [[Well-posedness as an applied requirement]]

## Why this is a distinct kind of reduced model

A reduced basis (RB) method is a projection-based [[Reduced-order models for PDEs|reduced-order model]] designed especially for a **parametric solution family** and a **many-query or real-time regime**. The expensive stage solves selected high-fidelity problems and constructs parameter-independent data. The cheap stage answers a new parameter query in a space of dimension $N$, ideally with cost independent of the high-fidelity dimension $N_h$.

Three ideas belong together:

1. snapshots or a greedy procedure approximate the solution manifold;
2. Galerkin projection turns that approximation space into a reduced solver;
3. a posteriori error estimation decides whether a new reduced solution is trustworthy.

This is narrower than generic proper orthogonal decomposition. POD optimally compresses a given snapshot matrix in a chosen norm, but it does not by itself certify an unseen parameter query. Classical certified RB methods use the governing variational problem both to choose new snapshots and to bound the reduction error. Their strongest theory concerns linear, coercive, affinely parametrized problems. Extensions exist for time dependence, nonlinear equations, saddle-point systems, and noncoercive operators, but the simple certificate derived below does not transfer unchanged.

## Parametric weak problem and its truth discretization

Let $\mathcal P\subset\mathbb R^p$ be a compact parameter domain and let $X$ be a Hilbert space with norm $\|\cdot\|_X$. For each $\mu\in\mathcal P$, consider:

> Find $u(\mu)\in X$ such that
> $$
> a(u(\mu),v;\mu)=f(v;\mu)\qquad\text{for every }v\in X.
> $$

Assume $a(\cdot,\cdot;\mu)$ is bilinear and continuous,

$$
|a(w,v;\mu)|\le \gamma(\mu)\|w\|_X\|v\|_X,
$$

and coercive,

$$
a(v,v;\mu)\ge \alpha(\mu)\|v\|_X^2,
\qquad \alpha(\mu)>0.
$$

Assume also that $f(\cdot;\mu)\in X'$. Lax–Milgram then gives a unique weak solution. A typical example is parametrized diffusion on a fixed domain $\Omega$:

$$
-\nabla\cdot(\kappa(x;\mu)\nabla u)=g(x;\mu),
\qquad u|_{\partial\Omega}=0,
$$

with $X=H_0^1(\Omega)$ and

$$
a(w,v;\mu)=\int_\Omega \kappa(x;\mu)\nabla w\cdot\nabla v\,dx.
$$

If $0<\kappa_{\min}(\mu)\le \kappa(x;\mu)$, coercivity follows in the energy seminorm; Poincaré's inequality relates that seminorm to the full $H^1$ norm.

In computation, one first chooses a high-fidelity or **truth** space $X_h\subset X$ of dimension $N_h$ and solves

$$
a(u_h(\mu),v_h;\mu)=f(v_h;\mu)qquad\forall v_h\in X_h.
$$

The term “truth” is conventional, not literal. The RB method normally approximates $u_h$, not the exact $u$. Its certificate therefore bounds $\|u_h-u_N\|_X$ unless a separate discretization estimator is included. Mesh error, geometry error, quadrature error, and model-form error remain outside the basic RB bound.

The target object is the discrete solution manifold

$$
\mathcal M_h=\{u_h(\mu):\mu\in\mathcal P\}\subset X_h.
$$

RB succeeds when this nonlinear manifold lies near a low-dimensional linear space. Smooth or analytic parameter dependence often produces rapid approximation, but parameter dimension alone does not decide compressibility. Moving shocks, bifurcations, topology changes, and transport-dominated features can make the Kolmogorov $N$-width decay slowly.

## From snapshots to a reduced space

Choose parameters $\mu^1,\ldots,\mu^N$ and define

$$
X_N=\operatorname{span}\{u_h(\mu^1),\ldots,u_h(\mu^N)\}\subset X_h.
$$

In practice the snapshots are orthonormalized in the $X$ inner product to obtain basis vectors $\zeta_1,\ldots,\zeta_N$. Orthonormalization does not change the span, but it controls coordinate conditioning. Nearly dependent snapshots should be rejected or handled by a rank-revealing factorization.

There are two common selection logics.

**POD from a snapshot ensemble.** Sample parameters in advance, form the snapshot matrix, and retain leading left singular vectors in the desired inner product. For that empirical ensemble, the rank-$N$ POD space minimizes summed squared projection error. The result depends on the sampling distribution and norm; rare but important regimes can disappear from an average-energy basis.

**Error-driven greedy selection.** Choose a finite training set $\Xi_{\mathrm{train}}\subset\mathcal P$, an initial parameter $\mu^1$, and repeat:

$$
\mu^{N+1}\in\arg\max_{\mu\in\Xi_{\mathrm{train}}}\Delta_N(\mu),
$$

where $\Delta_N$ is a computable error bound or indicator. Solve the high-fidelity problem only at $\mu^{N+1}$, enlarge and orthonormalize the basis, and stop when the maximum indicator meets tolerance.

The greedy loop is adaptive experimental design: it spends expensive solves where the current space appears weakest. If $\Delta_N$ is a rigorous bound over the finite training set, the stopping statement is rigorous only there. Coverage of the continuous parameter domain requires additional analysis or sufficiently disciplined sampling; a million-point training set is still not a theorem about points it omits. The estimator's **effectivity**, $\Delta_N/\|u_h-u_N\|_X$, also matters. A valid but wildly pessimistic estimator can waste snapshots in the wrong regions.

## Galerkin projection

For a new $\mu$, seek

$$
u_N(\mu)=\sum_{j=1}^N c_j(\mu)\zeta_j\in X_N
$$

such that

$$
a(u_N(\mu),v_N;\mu)=f(v_N;\mu)qquad\forall v_N\in X_N.
$$

Testing with each $\zeta_i$ gives the dense reduced system

$$
A_N(\mu)c(\mu)=F_N(\mu),
$$

where

$$
[A_N(\mu)]_{ij}=a(\zeta_j,\zeta_i;\mu),
\qquad [F_N(\mu)]_i=f(\zeta_i;\mu).
$$

Coercivity on $X$ implies coercivity on the subspace $X_N$, so the reduced system is uniquely solvable. Galerkin orthogonality follows directly:

$$
a(u_h-u_N,v_N;\mu)=0\qquad\forall v_N\in X_N.
$$

Together with continuity and coercivity, this yields Céa's quasi-optimality estimate

$$
\|u_h-u_N\|_X
\le \frac{\gamma(\mu)}{\alpha(\mu)}
\inf_{w_N\in X_N}\|u_h-w_N\|_X.
$$

Thus Galerkin projection is near the best approximation available in the chosen space, with degradation controlled by the stability ratio. It cannot repair a poor space, and a small algebraic reduced residual is meaningful only relative to the original high-dimensional test space.

## Residual certification for a coercive problem

Define the full residual functional $r_N(\cdot;\mu)\in X_h'$ by

$$
r_N(v_h;\mu)=f(v_h;\mu)-a(u_N(\mu),v_h;\mu).
$$

Let $e_N=u_h-u_N$. Subtracting the reduced approximation from the truth equation gives the exact error–residual relation

$$
a(e_N,v_h;\mu)=r_N(v_h;\mu)qquad\forall v_h\in X_h.
$$

Set $v_h=e_N$. Coercivity, the definition of the dual norm, and cancellation of one error norm give

$$
\alpha(\mu)\|e_N\|_X^2
\le a(e_N,e_N;\mu)
=r_N(e_N;\mu)
\le \|r_N(\cdot;\mu)\|_{X_h'}\|e_N\|_X,
$$

hence

$$
\boxed{
\|u_h(\mu)-u_N(\mu)\|_X
\le \frac{\|r_N(\cdot;\mu)\|_{X_h'}}{\alpha(\mu)}.}
$$

The exact coercivity constant is usually too expensive to compute online. A certified lower bound $0<\alpha_{\mathrm{LB}}(\mu)\le\alpha(\mu)$ gives the practical estimator

$$
\Delta_N(\mu)=
\frac{\|r_N(\cdot;\mu)\|_{X_h'}}{\alpha_{\mathrm{LB}}(\mu)}.
$$

This inequality explains both halves of certification. The residual measures violation of the truth equations; the stability constant converts equation violation into state error. A tiny residual can coexist with a large error near loss of coercivity. Methods such as the successive constraint method build inexpensive parameter-dependent lower bounds for coercivity or inf-sup constants by solving offline stability problems and online small linear programs. Replacing a proven lower bound by a sampled minimum, a reduced-space eigenvalue, or an unconverged eigensolve can turn a certificate into an indicator without announcing the change.

The dual residual norm is computed through the Riesz map. If $(\cdot,\cdot)_X$ is the chosen inner product, find $\widehat r_N(\mu)\in X_h$ such that

$$
(\widehat r_N(\mu),v_h)_X=r_N(v_h;\mu)
\qquad\forall v_h\in X_h.
$$

Then $\|r_N\|_{X_h'}=\|\widehat r_N\|_X$. Computing this vector naively still costs $N_h$, so certification also needs offline–online decomposition.

## Affine decomposition creates the speedup

Suppose the parameter dependence separates as

$$
a(w,v;\mu)=\sum_{q=1}^{Q_a}\Theta_q^a(\mu)a_q(w,v),
\qquad
f(v;\mu)=\sum_{m=1}^{Q_f}\Theta_m^f(\mu)f_m(v).
$$

The scalar coefficient functions $\Theta(\mu)$ contain all online parameter dependence; $a_q$ and $f_m$ are parameter-independent. Offline, compute

$$
[A_N^q]_{ij}=a_q(\zeta_j,\zeta_i),
\qquad [F_N^m]_i=f_m(\zeta_i).
$$

Online, assemble

$$
A_N(\mu)=\sum_{q=1}^{Q_a}\Theta_q^a(\mu)A_N^q,
\qquad
F_N(\mu)=\sum_{m=1}^{Q_f}\Theta_m^f(\mu)F_N^m,
$$

and solve an $N\times N$ system. Assembly and solve costs depend on $N$, $Q_a$, and $Q_f$, not $N_h$.

The residual norm has the same property. Let $\mathcal R:X_h'\to X_h$ denote the Riesz inverse and precompute

$$
\psi_m^f=\mathcal R f_m,
\qquad
\psi_{qj}^a=\mathcal R\big(a_q(\zeta_j,\cdot)\big).
$$

Then

$$
\widehat r_N(\mu)=
\sum_{m=1}^{Q_f}\Theta_m^f(\mu)\psi_m^f
-\sum_{q=1}^{Q_a}\sum_{j=1}^N
\Theta_q^a(\mu)c_j(\mu)\psi_{qj}^a.
$$

All pairwise $X$ inner products among these parameter-independent Riesz vectors can be stored offline. Online evaluation of $\|\widehat r_N\|_X^2$ becomes a quadratic form in the scalar coefficients. The formula is independent of $N_h$, though its storage and arithmetic can grow quadratically in $Q_f+Q_aN$.

This separation is the real economic contract. A small reduced system assembled by looping over every high-fidelity element is not an online-efficient RB method. Offline cost includes training-set sweeps, truth solves, basis construction, stability bounds, reduced tensors, and residual Gram data. RB pays only when enough queries amortize that investment, or when latency matters more than total setup cost.

## Empirical interpolation as the nonaffine bridge

Many operators are not affinely separable. In the diffusion example, a general $\kappa(x;\mu)$ makes every reduced matrix entry a parameter-dependent spatial integral. Empirical interpolation method (EIM) constructs a collateral approximation

$$
\kappa(x;\mu)\approx \kappa_M(x;\mu)
=\sum_{m=1}^M\beta_m(\mu)q_m(x).
$$

The basis functions $q_m$ are built greedily from coefficient snapshots. EIM also selects interpolation points $x_1,\ldots,x_M$ and enforces

$$
\kappa_M(x_i;\mu)=\kappa(x_i;\mu),
\qquad i=1,\ldots,M.
$$

Thus the online coefficients solve the small interpolation system

$$
\sum_{m=1}^M q_m(x_i)\beta_m(\mu)=\kappa(x_i;\mu).
$$

Substitution yields an effectively affine form,

$$
a_M(w,v;\mu)=\sum_{m=1}^M\beta_m(\mu)
\int_\Omega q_m(x)\nabla w\cdot\nabla v\,dx,
$$

so reduced matrices can again be precomputed. Discrete EIM applies the same idea to vectors or nonlinear operator evaluations at selected degrees of freedom.

EIM introduces a second approximation layer. The reduced solution now solves a projected **approximated operator**, and an estimator derived for the original affine operator is not automatically rigorous. Certification must bound or incorporate the interpolation defect, preserve a valid stability lower bound for the approximated-or-original problem as claimed, and account for evaluation and quadrature error. Interpolation matrices can become ill-conditioned; coefficient snapshots may miss important online regimes; and positivity of $\kappa$ need not survive an unconstrained expansion. EIM restores separability, not truth.

## Stability and validation limitations

A persuasive RB result should answer more than “the test error was small.”

- **Coercivity is structural.** The displayed residual bound does not apply directly to advection-dominated, Helmholtz, mixed, or saddle-point problems. These require inf-sup analysis, stabilized Petrov–Galerkin projection, supremizer enrichment, minimum-residual formulations, or problem-specific bounds.
- **Parameters can cross regimes.** Near bifurcation, resonance, material degeneracy, or geometry failure, stability constants may collapse and the solution map may cease to be smooth or single-valued.
- **Time can amplify defects.** For parabolic problems, space–time residual estimates include temporal accumulation and initial-condition error. For chaotic dynamics, trajectory error may grow rapidly even if short-time residuals are small; statistical quantities may be the appropriate targets.
- **The certificate has a reference level.** A bound to $u_h$ says nothing about whether the truth mesh resolves boundary layers, singular corners, or shocks. Combine reduction and discretization estimators when the exact PDE solution matters.
- **Training and testing must be separated.** Report the training-set design, an independent validation set, worst-case as well as distributional error, estimator effectivity, and behavior near parameter-domain boundaries. Adaptive training data are not an independent test set.
- **Outputs need their own analysis.** A small state error often controls a continuous output by $|\ell(e)|\le\|\ell\|_{X'}\|e\|_X$, but this can be pessimistic. Primal–dual bounds or [[Goal-oriented error estimation]] can certify a specified quantity more sharply.
- **Roundoff can spoil residual evaluation.** The residual norm is often computed as cancellation among precomputed terms. At high requested accuracy, the quadratic expansion can lose digits; stable residual representations, reorthogonalization, or higher precision may be necessary.
- **Latency claims need a ledger.** Report offline time, truth-solver configuration, basis size, affine or EIM rank, stability-bound time, online assembly, solve, certification, memory, break-even query count, and hardware. Comparing an online RB solve with a full solve while hiding offline work answers only a latency question.

A robust deployment therefore treats the error bound as a runtime guard. If $\Delta_N(\mu)$ exceeds tolerance, the system can reject the query, fall back to the high-fidelity solver, or enrich the basis. Extrapolation beyond the certified parameter domain should be labeled extrapolation, not silently accepted because the reduced system returns a number.

## A compact implementation recipe

1. Specify $\mathcal P$, $X$, the weak form, output quantities, norm, and truth discretization.
2. Verify continuity and coercivity or identify the correct inf-sup replacement.
3. Expose an exact affine decomposition, or construct EIM/DEIM while budgeting its additional error.
4. Select a training set and initial snapshot; orthonormalize in the certification norm.
5. Precompute reduced operator components, residual Riesz data, and certified stability lower-bound data.
6. Run a residual-bound greedy loop until the training maximum meets tolerance or evidence shows the target is not low-rank.
7. Validate on independent parameters against truth solutions, reporting state/output errors, bounds, effectivities, stability estimates, timing, and failure cases.
8. Deploy the reduced solve with its certificate and a declared response when certification fails.

The decisive question is not whether $N\ll N_h$. It is whether the entire online path—operator evaluation, solve, output evaluation, and error bound—is independent of $N_h$, and whether the bound actually covers every approximation layer being claimed.

## Sources

- Gianluigi Rozza, D. B. Phuong Huynh, and Anthony T. Patera, [“Reduced Basis Approximation and A Posteriori Error Estimation for Affinely Parametrized Elliptic Coercive Partial Differential Equations”](https://doi.org/10.1007/s11831-008-9019-9), *Archives of Computational Methods in Engineering* 15 (2008), 229–275 — primary synthesis for Galerkin RB spaces, residual bounds, greedy construction, affine decomposition, and offline–online evaluation.
- Maxime Barrault, Yvon Maday, Ngoc Cuong Nguyen, and Anthony T. Patera, [“An ‘Empirical Interpolation’ Method: Application to Efficient Reduced-Basis Discretization of Partial Differential Equations”](https://doi.org/10.1016/j.crma.2004.08.006), *Comptes Rendus Mathématique* 339 (2004), 667–672 — original EIM construction for nonaffine parameter dependence.
- D. B. Phuong Huynh, Gianluigi Rozza, Sugata Sen, and Anthony T. Patera, [“A Successive Constraint Linear Optimization Method for Lower Bounds of Parametric Coercivity and Inf-Sup Stability Constants”](https://doi.org/10.1016/j.crma.2007.09.019), *Comptes Rendus Mathématique* 345 (2007), 473–478 — primary source for offline–online stability lower bounds.
- Martin A. Grepl and Anthony T. Patera, [“A Posteriori Error Bounds for Reduced-Basis Approximations of Parametrized Parabolic Partial Differential Equations”](https://doi.org/10.1051/m2an:2005006), *ESAIM: M2AN* 39 (2005), 157–181 — primary extension to parabolic equations, greedy sampling, output bounds, and online-efficient certification.
- Andreas Buhr, Christian Engwer, Mario Ohlberger, and Stephan Rave, [“A Numerically Stable A Posteriori Error Estimator for Reduced Basis Approximations of Elliptic Equations”](https://doi.org/10.1137/15M1012083), *SIAM Journal on Scientific Computing* 38 (2016), A212–A238 — primary analysis of cancellation and stable residual-norm evaluation.
- Alfio Quarteroni, Andrea Manzoni, and Federico Negri, [*Reduced Basis Methods for Partial Differential Equations: An Introduction*](https://doi.org/10.1007/978-3-319-15431-2), Springer, 2016 — authoritative textbook treatment of construction, analysis, and implementation.

## Open questions

- Which certified stability strategy gives the best sharpness-versus-online-cost tradeoff for noncoercive transport problems?
- How should EIM error and truth-discretization error be combined into one end-to-end certificate without making the bound unusably pessimistic?
- Which nonlinear solution manifolds are better handled by local bases, transported coordinates, or nonlinear trial manifolds than by one global linear reduced space?
- How dense must adaptive parameter sampling be to support a claim over a continuous, high-dimensional parameter domain?
