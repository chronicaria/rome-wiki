---
title: Hyper-reduction for nonlinear PDE models
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, model-reduction, hyper-reduction, deim]
---

Hyper-reduction makes a projected nonlinear PDE genuinely fast by replacing full-grid residual evaluation with a learned, carefully conditioned sample of entries, elements, or quadrature points.

Up: [[Applied PDE research frontier 2026]]

## Why it matters

A reduced state is not automatically a reduced computation. [[Reduced-order models for PDEs]] may represent a discretized field $u\in\mathbb R^n$ as

$$
u(t,\mu)\approx u_0+Va(t,\mu),\qquad V\in\mathbb R^{n\times r},\quad r\ll n,
$$

but a general nonlinear residual still touches all $n$ degrees of freedom. If a Galerkin ROM for

$$
M\dot u=F(u;\mu)
$$

is

$$
M_r\dot a=V^TF(u_0+Va;\mu),\qquad M_r=V^TMV,
$$

then forming $u_0+Va$, evaluating $F$ on the full mesh, and multiplying by $V^T$ costs at least $O(nr)$ and commonly the cost of a full nonlinear residual assembly. The state dimension is $r$, yet the online path still scales with $n$. Projection alone therefore reduces the solve but not necessarily the dominant work.

Hyper-reduction inserts a second approximation: infer the projected nonlinear term from only $m$ selected observations, with $r\lesssim m\ll n$. It is the mechanism behind many spectacular ROM speedups, but also a new source of error, ill-conditioning, and broken physical structure. A credible reduced model must report both reductions—the trial-space approximation and the sampled nonlinear approximation—and verify them separately.

## Two spaces, not one

The solution basis $V$ approximates the state manifold. It need not approximate the nonlinear image manifold

$$
\mathcal F=\{F(u_0+Va(t,\mu);\mu): (t,\mu)\text{ in the intended regime}\}.
$$

Hyper-reduction therefore learns a **collateral basis** $U\in\mathbb R^{n\times q}$ from nonlinear snapshots

$$
[F(u(t_1,\mu_1)),\ldots,F(u(t_K,\mu_K))]\approx U\Sigma W^T.
$$

Usually $U$ is the first $q$ left singular vectors. The two truncations answer different questions: $V$ asks whether the state is compressible; $U$ asks whether nonlinear residuals, fluxes, or integrands are compressible. A small state POD error does not imply a small collateral-basis error.

The generic sampled reconstruction has the form

$$
F(u)\approx Uc(u),
$$

where $c$ is recovered from a sampling operator $P^T\in\mathbb R^{m\times n}$. The online computation should evaluate only $P^TF(u)$, not first assemble $F(u)$ and then discard most entries. That implementation detail is decisive: speedup requires that sampled entries depend on a small identifiable stencil or a small set of elements.

## DEIM: interpolate the nonlinear vector

The discrete empirical interpolation method (DEIM) takes $m=q$ coordinate samples. Let

$$
P=[e_{p_1},\ldots,e_{p_q}],
$$

where each $e_{p_i}$ selects one component. DEIM enforces interpolation at those components:

$$
P^TUc=P^TF(u).
$$

Provided $P^TU$ is nonsingular,

$$
c=(P^TU)^{-1}P^TF(u)
$$

and hence

$$
F(u)\approx \mathcal D F(u),\qquad
\mathcal D=U(P^TU)^{-1}P^T.
$$

The reduced nonlinear term becomes

$$
V^TF(u)\approx \underbrace{V^TU(P^TU)^{-1}}_{B\text{ precomputed offline}}P^TF(u).
$$

Online work is now evaluation of $q$ nonlinear components plus multiplication by the dense $r\times q$ matrix $B$. If a pointwise nonlinearity satisfies $F(u)_i=f(u_i)$, only the sampled state

$$
P^Tu=P^Tu_0+(P^TV)a
$$


is needed, giving a cost dependent on $r$ and $q$, not $n$. For finite-volume fluxes or finite-element residuals, one must also gather the stencil, faces, or elements supporting the selected entries. The practical sample mesh can therefore exceed $q$.

The classical greedy DEIM index selection mirrors basis construction. It selects the largest-magnitude entry of $u_1$; at step $j$, it interpolates $u_j$ with the previously selected basis vectors and chooses the largest entry of the resulting residual. This guarantees nonsingularity in exact arithmetic. Pivoted QR or strong rank-revealing QR applied to $U^T$ often gives better conditioning, and oversampled least squares gives additional robustness.

The key bound exposes the two failure modes. For orthonormal $U$ and square interpolation,

$$
\|F-\mathcal DF\|_2
\leq \|(P^TU)^{-1}\|_2\,\|(I-UU^T)F\|_2.
$$

The rightmost factor is the best collateral-space projection error. The first is an amplification or interpolation-conditioning factor. More modes reduce the projection residual but can worsen the inverse; selecting samples solely where fields look visually active is not enough. The product, not either factor alone, governs reconstruction.

## Gappy POD: oversampled least-squares reconstruction

Gappy POD originates in reconstructing fields from incomplete observations. With $m\ge q$ sampled components and optional positive weights $W_s$, recover

$$
c=\arg\min_z\|W_s^{1/2}(P^TUz-P^TF)\|_2^2.
$$

Thus

$$
c=(U_s^TW_sU_s)^{-1}U_s^TW_sP^TF,\qquad U_s=P^TU,
$$

when the sampled Gram matrix is nonsingular. Square, unweighted gappy POD reduces algebraically to DEIM interpolation. Oversampling changes interpolation into regression: it can average noisy or locally unrepresentative data, improve the smallest singular value of $W_s^{1/2}U_s$, and make sample selection less brittle.

The conditioning diagnostic is explicit. Perturbing sampled values by $\delta y$ changes the coefficients by

$$
\delta c=(W_s^{1/2}U_s)^\dagger W_s^{1/2}\delta y,

$$

so noise and model mismatch are amplified by $1/\sigma_{\min}(W_s^{1/2}U_s)$. Oversampling is not magic: clustered or redundant points may add rows without adding information. Leverage-score sampling, pivoted QR, greedy conditioning criteria, and randomized oversampling seek a sample matrix with balanced singular values.

DEIM and gappy POD reconstruct a nonlinear **vector** before projection. Their natural error measure is therefore a vector norm, though the quantity that ultimately matters may be $V^T(F-\widetilde F)$ or an output functional. Training and validation should include that goal-relevant error, not only full-vector reconstruction.

## Empirical quadrature: sparsify the weak form

Finite-element and finite-volume codes often assemble residuals by summing local contributions. For a reduced test vector $v_i$ and trial state $u_0+Va$, write a component of the reduced residual as

$$
R_i(a;\mu)=\sum_{k=1}^{N_q}w_k\,g_i(x_k;a,\mu),
$$


where $x_k$ are the original quadrature points or elements. Empirical quadrature seeks a sparse nonnegative weight vector $\rho$ such that

$$
R_i(a;\mu)\approx \widetilde R_i(a;\mu)
=\sum_{k=1}^{N_q}\rho_k w_k\,g_i(x_k;a,\mu),

$$

with most $\rho_k=0$.

Training turns this into a moment-matching problem. Stack integrand evaluations for selected reduced test functions, training states, parameters, residual components, and sometimes constant or conservation moments as rows of a matrix $G$. If $b=G\mathbf 1$ represents the original quadrature moments, choose sparse $\rho$ satisfying

$$
\|G\rho-b\|\le \varepsilon,\qquad \rho\ge0.

$$

Linear programming, nonnegative least squares, greedy active-set methods, or sparse optimization can produce a rule with a small support. Online assembly then visits only those active points or elements. Unlike DEIM, empirical quadrature approximates the projected weak form directly rather than reconstructing every entry of the high-dimensional nonlinear vector. It is therefore especially natural for element-local residuals, nonlinear constitutive laws, and outputs already written as integrals.

Nonnegative weights matter. They prevent cancellation caused solely by artificial signed rules, help preserve positivity of integrated quantities, and can retain coercivity-like properties when each local contribution is nonnegative. But positivity alone does not guarantee stability or conservation: the constraint set must encode the relevant moments and the time integrator and trial/test spaces must respect the same structure.

## What can go wrong

### Error compounds through the dynamics

Let the projected vector field be $f_r(a)=V^TF(u_0+Va)$ and its hyper-reduced version $\widetilde f_r$. If $f_r$ is Lipschitz with constant $L$, a schematic Grönwall argument gives

$$
\|a(t)-\widetilde a(t)\|
\lesssim e^{Lt}\left(\|a(0)-\widetilde a(0)\|+
\int_0^t\|f_r(\widetilde a)-\widetilde f_r(\widetilde a)\|\,ds\right).
$$

Small instantaneous residual errors can accumulate, especially in unstable, chaotic, or long-time systems. Snapshot-average accuracy is therefore insufficient evidence for trajectory stability.

### Oblique projection can amplify unseen content

DEIM's $\mathcal D$ is an oblique projector: it is exact on $\operatorname{range}(U)$ but not orthogonal. A poorly conditioned $P^TU$ magnifies the portion outside the learned collateral space. Extrapolating to parameters, shocks, bifurcations, or regimes absent from training increases precisely that unseen component.

### Conservation can be destroyed

A conservative full discretization often cancels equal and opposite interface fluxes or satisfies $c^TF(u)=0$ for an invariant vector $c$. Sampling arbitrary residual entries need not preserve those paired cancellations; generally $c^T\mathcal DF(u)\ne0$. Mass, momentum, charge, or species can drift even when the state basis contains the invariant mode.

Repairs are problem-dependent: sample complete flux pairs or elements rather than isolated algebraic entries; add conservation moments as exact empirical-quadrature constraints; use conservative trial/test spaces; enforce constraints after each step; or hyper-reduce a potential, flux, or port-Hamiltonian quantity whose structure generates the dynamics. Verification must measure invariant defects directly.

### Energy, entropy, and monotonicity are not inherited

Galerkin projection may preserve a skew-symmetric operator or dissipative energy estimate, but replacing the nonlinear term by an oblique reconstruction can break that algebra. Negative empirical weights can turn local dissipation into energy creation. Even positive weights do not ensure a discrete entropy inequality unless the sampled representation retains the flux pairing and entropy-variable identities. Positivity and maximum principles can likewise fail.

Structure-preserving variants approximate a Hamiltonian gradient, potential, flux, or local energy contributions and then differentiate or assemble them in a compatible way. These methods trade some generality or extra constraints for invariants. They should be preferred when qualitative structure, rather than short-time state error, defines usefulness.

### Speed claims can hide full-order work

A hyper-reduced formula is not an online algorithm until dependencies are traced. Computing a sampled finite-element residual may require neighboring state values, geometric mappings, constitutive history, boundary data, and a sample mesh closure. Error estimators and output reconstruction can also scale with $n$. Report measured wall time, memory traffic, sample-mesh size, and all online auxiliaries—not just an $r\times q$ multiply.

## Sampling and training strategy

Start with a training design covering parameters, initial conditions, forcing, time windows, and discrete regimes expected online. Split trajectories or parameters into training, tuning, and untouched tests; neighboring time steps are strongly correlated and make random snapshot splits deceptively easy.

Choose the state dimension $r$, collateral dimension $q$, and sample count $m$ independently. A practical sequence is:

1. Build and validate the projected ROM without hyper-reduction. This isolates trial-space and closure failures.
2. Collect nonlinear snapshots along both full-order states and, when feasible, reduced trajectories. The latter expose states the ROM actually visits.
3. Plot singular-value decay for state and nonlinear snapshot matrices separately.
4. Select samples using greedy DEIM, pivoted QR, leverage information, or empirical-quadrature optimization; inspect $\sigma_{\min}(P^TU)$ or its oversampled analogue.
5. Sweep $q$ and $m$ at fixed $r$. Oversample when conditioning, noise, or out-of-distribution robustness matters.
6. Enrich adaptively where a residual indicator, invariant defect, or held-out error is largest. Local bases or clustered regimes may outperform one global collateral space across moving fronts.

Moving discontinuities are intrinsically difficult for linear collateral bases: translated shocks have slow singular-value decay, and point selection can miss the front. Domain localization, adaptive sampling, nonlinear transformations, transported bases, or reverting locally to full assembly may be safer than increasing $q$ indefinitely.

## Verification ladder

A useful verification campaign separates causes rather than reporting one end-to-end error.

**Algebraic reconstruction.** On held-out full-order snapshots, measure $\|F-\widetilde F\|$, $\|V^T(F-\widetilde F)\|$, and relevant weak-form or output errors. Compare them with the collateral projection floor $\|(I-UU^T)F\|$ and record conditioning factors.

**Projected versus hyper-reduced trajectories.** Integrate the same projected ROM once with exact full residual evaluation and once with hyper-reduction. Their difference isolates hyper-reduction; comparing either only to the full-order model confounds state truncation, closure, time discretization, and sampling.

**Regime tests.** Hold out entire parameters, forcings, geometries, and time intervals. Test near shocks, bifurcations, or constraint boundaries. Plot error against distance from the training distribution when such a distance is meaningful.

**Structure tests.** Track conservation residuals, energy or entropy production, positivity violations, long-time attractors, and stability under time-step refinement. A small state norm error over a short interval does not substitute for these tests.

**Complexity audit.** Measure online latency and memory across increasing full dimension $n$ while holding $r,q,m$ fixed. A genuinely mesh-independent online stage should flatten apart from unavoidable input/output work. Include sample dependency closure, estimator costs, and any basis switching.

**Tolerance robustness.** Vary $r$, $q$, $m$, sampling seed or algorithm, quadrature tolerance, and integrator tolerance. If conclusions change under small sampling perturbations, the rule is not robust enough for deployment.

## Relationship to the reduced basis method

Projection and hyper-reduction solve complementary bottlenecks. The state basis $V$ compresses the unknown and gives the reduced dynamical system. Hyper-reduction compresses evaluation of nonaffine or nonlinear operators. For an affine operator

$$
A(\mu)=\sum_{j=1}^{Q}\theta_j(\mu)A_j,

$$

ordinary offline–online decomposition already permits precomputation of $V^TA_jV$; hyper-reduction is unnecessary. It becomes essential when $Q$ is enormous, dependence is nonaffine, or nonlinear residual assembly remains full-dimensional.

DEIM and empirical interpolation manufacture an approximately affine expansion through a collateral basis. Gappy POD replaces exact interpolation with sampled regression. Empirical quadrature sparsifies the assembled reduced functional itself. These are not rival names for one identical algorithm: their natural objects, conditioning diagnostics, and structure-preservation opportunities differ.

The honest ROM error budget is consequently layered:

$$
E_{\mathrm{total}}
\lesssim E_{\mathrm{discretization}}+E_{\mathrm{state\ basis}}+
E_{\mathrm{closure}}+E_{\mathrm{hyper}}+E_{\mathrm{time}}.
$$

Hyper-reduction succeeds when it makes $E_{\mathrm{hyper}}$ smaller than the accuracy budget while removing $n$ from the important online costs, without invalidating the invariants or stability properties that make the PDE model meaningful.

## Sources

- Saifon Chaturantabut and Danny C. Sorensen, [“Nonlinear Model Reduction via Discrete Empirical Interpolation,” *SIAM Journal on Scientific Computing* 32 (2010), 2737–2764](https://doi.org/10.1137/090766498). Original DEIM construction and error analysis.
- Maxime Barrault, Yvon Maday, Ngoc Cuong Nguyen, and Anthony T. Patera, [“An ‘Empirical Interpolation’ Method: Application to Efficient Reduced-Basis Discretization of Partial Differential Equations,” *Comptes Rendus Mathématique* 339 (2004), 667–672](https://doi.org/10.1016/j.crma.2004.08.006). Original EIM offline–online formulation.
- Richard Everson and Lawrence Sirovich, [“Karhunen–Loève Procedure for Gappy Data,” *Journal of the Optical Society of America A* 12 (1995), 1657–1664](https://doi.org/10.1364/JOSAA.12.001657). Primary gappy reconstruction paper.
- Masayuki Yano and Anthony T. Patera, [“An LP Empirical Quadrature Procedure for Reduced Basis Treatment of Parametrized Nonlinear PDEs,” *Computer Methods in Applied Mechanics and Engineering* 344 (2019), 1104–1123](https://doi.org/10.1016/j.cma.2018.02.028). Sparse, nonnegative empirical quadrature for nonlinear residuals and outputs.
- Zlatko Drmač and Serkan Gugercin, [“A New Selection Operator for the Discrete Empirical Interpolation Method—Improved A Priori Error Bound and Extensions,” *SIAM Journal on Scientific Computing* 38 (2016), A631–A648](https://doi.org/10.1137/15M1019271). Pivoted-QR selection and conditioning analysis.
- Saifon Chaturantabut, Christopher Beattie, and Serkan Gugercin, [“Structure-Preserving Model Reduction for Nonlinear Port-Hamiltonian Systems,” *SIAM Journal on Scientific Computing* 38 (2016), B837–B865](https://doi.org/10.1137/15M1055085). A concrete structure-preserving modification of DEIM.

## Open questions

- Can an inexpensive online certificate bound accumulated trajectory error rather than only instantaneous residual error?
- Which conservation, entropy, or positivity constraints can be imposed simultaneously while keeping empirical rules sparse and well conditioned?
- How should sampling adapt safely when shocks, fronts, or bifurcations move outside the training distribution?
- When does a local or nonlinear collateral manifold outperform global oversampling enough to justify its switching complexity?
