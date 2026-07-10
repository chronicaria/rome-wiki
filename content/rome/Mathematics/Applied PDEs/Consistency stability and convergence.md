---
title: Consistency stability and convergence
created: 2026-07-09
source: llm
status: seed
as_of: 2026-07-09
tags: [mathematics, partial-differential-equations, applied-mathematics, numerical-analysis, verification]
---

Consistency says the discrete equations approximate the PDE locally, stability says perturbations are not amplified without uniform control, and convergence says the computed solution approaches the PDE solution; none of these words is interchangeable, and the theorem connecting them has a deliberately narrow scope.

Up: [[Applied PDE research frontier 2026]] · Related: [[Finite-volume methods for conservation laws]] · [[Well-posedness as an applied requirement]] · [[Weak solutions and why shocks require them]]

## The three questions

Let a well-posed evolution problem be written abstractly as

$$
u_t=Au,\qquad u(0)=u_0,
$$

with exact solution operator $E(t)$, and let a grid method advance data by $U^{n+1}=C_{h,k}U^n$. Here $h$ is a spatial scale, $k$ is the timestep, and $t_n=nk$. Restriction $R_hu$ samples or projects a continuum function onto the grid. Three different comparisons then arise.

**Consistency** asks whether one discrete step reproduces the differential equation when fed a sufficiently smooth exact solution. With

$$
L_{h,k}U^n:=\frac{U^{n+1}-C_{h,k}U^n}{k},
$$

one useful residual convention is

$$
\tau^n=L_{h,k}(R_hu)^n.
$$

The scheme is consistent if $\tau^n\to0$ in an appropriate norm as $(h,k)\to0$ along the admitted refinement paths. If $\|\tau^n\|=O(h^p+k^q)$, it has local truncation orders $p$ and $q$ for solutions smooth enough to justify the Taylor expansions. Authors sometimes define the unscaled one-step defect $d^n=k\tau^n$ instead; confusing the two shifts the apparent temporal order by one.

**Stability** asks how the discrete evolution propagates perturbations. A Lax–Richtmyer-style bound is

$$
\|C_{h,k}^{n}\|_h\le K_T \qquad (0\le nk\le T),
$$

where $K_T$ is independent of sufficiently small $h,k$ in the admissible family. The norm and family are part of the claim. “The code did not blow up” at one resolution is not stability, and boundedness in a convenient coefficient norm may not control the physical quantity of interest.

**Convergence** asks whether global numerical error vanishes:

$$
\max_{0\le nk\le T}\|U^n-R_hu(t_n)\|_h\longrightarrow0
$$

for each admissible initial datum, normally with consistent initialization. A rate $O(h^p+k^q)$ requires more than the bare statement of convergence: regularity, boundary compatibility, projection estimates, and a stability estimate strong enough to accumulate local defects without losing order.

The causal picture is simple. Consistency makes a small error at each step; stability prevents those errors, together with initialization and roundoff perturbations, from being magnified uncontrollably; convergence is the resulting small global error. But this is a proof pattern, not a universal slogan.

## What Lax–Richtmyer actually says

The 1956 Lax–Richtmyer equivalence theorem concerns a **properly posed linear initial-value problem** and a **consistent linear finite-difference approximation**. In the specified normed setting, stability is necessary and sufficient for convergence. Schematically,

$$
\text{consistency}+\text{stability}\quad\Longleftrightarrow\quad\text{convergence}.
$$

The consistency hypothesis is already fixed on both sides; the theorem does not say that stability alone produces the right PDE. Nor does it apply automatically to nonlinear equations, nonlinear limiters, arbitrary boundary closures, elliptic boundary-value problems, moving meshes, or floating-point implementations. “Well posed” also matters: the continuum solution operator must exist, be unique, and depend continuously on data in the spaces under discussion. A discretization cannot repair an ill-posed target merely by looking numerically calm.

In one direction, stability plus consistency controls the global error. If $e^n=U^n-R_hu(t_n)$, then

$$
e^{n+1}=C_{h,k}e^n-k\tau^n.
$$

Iteration gives

$$
e^n=C_{h,k}^{n}e^0-k\sum_{j=0}^{n-1}C_{h,k}^{n-1-j}\tau^j.
$$

Therefore a uniform stability bound yields

$$
\|e^n\|_h\le K_T\left(\|e^0\|_h+T\max_{j<n}\|\tau^j\|_h\right).
$$

Consistent initialization and vanishing truncation residual imply convergence. The reverse direction—convergence implies stability—uses linearity and functional-analysis machinery (uniform boundedness), which is one reason casually exporting the theorem to nonlinear schemes is unsafe.

## Worked scheme: upwind advection

Consider constant-speed advection on a periodic interval,

$$
u_t+a u_x=0,\qquad a>0,
$$

and the forward-Euler, backward-space update

$$
U_j^{n+1}=U_j^n-\nu(U_j^n-U_{j-1}^n),
\qquad \nu=\frac{ak}{h}.
$$

### Consistency

Insert the smooth exact solution and divide the residual by $k$:

$$
\tau_j^n=
\frac{u(x_j,t_{n+1})-u(x_j,t_n)}{k}
+a\frac{u(x_j,t_n)-u(x_{j-1},t_n)}{h}.
$$

Taylor expansion about $(x_j,t_n)$ gives

$$
\tau_j^n=u_t+a u_x+\frac{k}{2}u_{tt}-\frac{ah}{2}u_{xx}
+O(k^2+h^2).
$$

Because $u_t+a u_x=0$ and $u_{tt}=a^2u_{xx}$,

$$
\tau_j^n=\frac{ah}{2}(\nu-1)u_{xx}+O(k^2+h^2).
$$

Thus the method is first-order consistent when $h,k\to0$ with a bounded ratio. The leading modified-equation behavior is numerical diffusion:

$$
u_t+a u_x=\frac{ah}{2}(1-\nu)u_{xx}+\cdots.
$$

For $0\le\nu\le1$, the artificial viscosity is nonnegative; at $\nu=1$, grid values translate exactly one cell per step for this special constant-coefficient problem, canceling the displayed leading error.

### Stability and the CFL restriction

For a Fourier mode $U_j^n=\widehat U^n e^{ij\theta}$, the amplification factor is

$$
G(\theta)=1-\nu+\nu e^{-i\theta}.
$$

A direct calculation gives

$$
|G|^2=1-2\nu(1-\nu)(1-\cos\theta).
$$

Hence $|G(\theta)|\le1$ for every frequency exactly when $0\le\nu\le1$. In the periodic constant-coefficient setting, Fourier modes diagonalize the update, so this establishes $\ell^2$ stability. The same interval also makes the update a convex combination,

$$
U_j^{n+1}=(1-\nu)U_j^n+\nu U_{j-1}^n,
$$

which yields maximum-norm stability and monotonicity. Combined with consistency and well-posed periodic advection, Lax–Richtmyer gives convergence.

This restriction has a domain-of-dependence meaning. During one step the PDE transports information a distance $ak$; the stencil can reach only one cell upstream, so it must have $ak\le h$. This is the Courant–Friedrichs–Lewy (CFL) necessity. A CFL condition is not, in general, a complete stability proof: it aligns domains of dependence, while amplification, energy, monotonicity, or entropy estimates must still control the scheme.

### What refinement should show

For a smooth periodic profile at a fixed time before any loss of regularity, choose $k=\nu h/a$ with fixed $0<\nu<1$. Then the truncation residual is $O(h)$ and stability predicts a global $O(h)$ error in a compatible norm. A table should report $h$, $k$, $\nu$, error $E_h$, and observed order

$$
p_{\mathrm{obs}}=\frac{\log(E_h/E_{h/2})}{\log 2}.
$$

Values approaching one support—not prove—that the implementation realizes the analyzed scheme in the asymptotic range. A nonsmooth square wave will not display the same normwise rate: regularity assumptions behind the Taylor estimate fail, and numerical diffusion spreads the jump over a resolution-dependent layer.

## Von Neumann analysis: powerful but conditional

Von Neumann analysis tests Fourier-mode amplification. It is exact and economical for linear, constant-coefficient problems on periodic or infinite uniform grids when the update is diagonalizable by Fourier modes. For multistep or system schemes it additionally requires root/eigenvalue control, including treatment of repeated roots and non-normal amplification.

Its limits are structural. Boundaries destroy translation invariance; variable coefficients couple modes; nonuniform grids lack the same Fourier basis; nonlinear fluxes and limiters depend on the evolving solution. Freezing coefficients and examining symbols can reveal likely restrictions, but it is not automatically a theorem for the original problem. Even eigenvalues inside the unit disk can coexist with large transient growth for non-normal matrices. Energy estimates, summation-by-parts boundary analysis, matrix-power bounds, discrete maximum principles, or nonlinear entropy estimates may be the appropriate tools instead.

Stability also depends on the chosen norm. Hyperbolic problems may be naturally controlled in $L^2$, monotone scalar conservation schemes in $L^1$ or $L^\infty$, and elliptic finite elements in an energy norm. Convergence in one norm does not silently imply pointwise accuracy. Norm equivalence constants on finite-dimensional grids may deteriorate as $h\to0$, so “all norms are equivalent” does not supply a mesh-uniform argument.

## Nonlinear PDEs and finite-volume caveats

For nonlinear problems, there is no single Lax–Richtmyer equivalence theorem of comparable generality. Stability may mean a Lipschitz bound between two discrete solutions, total-variation bounds, positivity, an invariant region, a maximum principle, or a discrete entropy inequality. Which property matters depends on the continuum solution concept.

For a conservation law

$$
u_t+f(u)_x=0,

$$

smooth solutions can form shocks, so classical truncation expansions cease to describe cells crossing discontinuities. A conservative finite-volume method has the form

$$
U_j^{n+1}=U_j^n-\frac{k}{h}
\left(F(U_j^n,U_{j+1}^n)-F(U_{j-1}^n,U_j^n)\right),

$$

with consistent numerical flux $F(v,v)=f(v)$. The Lax–Wendroff theorem supplies a different implication: under suitable boundedness and convergence hypotheses, the limit of a consistent conservative scheme is a weak solution. It does **not** prove that the approximations converge, and weak solutions may be nonunique. Entropy stability, monotonicity, TVD estimates, compactness, or problem-specific arguments are needed to select and reach the physical entropy solution. See [[Finite-volume methods for conservation laws]] and [[Weak solutions and why shocks require them]].

For fully nonlinear elliptic or parabolic equations, the Barles–Souganidis framework connects consistency, monotonicity, and stability to convergence toward the viscosity solution when the limiting equation has a comparison principle. Related Hamilton–Jacobi results use the same viscosity-solution architecture. This resemblance should not be collapsed into the linear theorem: the definitions, comparison principles, and compactness arguments are different.

Boundary conditions deserve equal attention. A high-order interior stencil with a low-order or unstable boundary closure can determine the global rate or destabilize the entire calculation. Likewise, solving an implicit discrete system only approximately adds algebraic error; adapting the mesh changes the approximation spaces; operator splitting adds another consistency defect. The relevant convergence claim must cover the complete algorithm, not its most elegant interior formula.

## Verification practice

A theorem is a conditional mathematical claim about an idealized scheme. A convergence plot is empirical evidence about a particular implementation and test. Neither substitutes for the other.

A defensible verification workflow is:

1. **Specify the target.** State the PDE, solution concept, domain, data, coefficients, norm, quantity of interest, and regularity regime.
2. **Specify the full discretization.** Include boundary closures, initialization/projection, timestep coupling, nonlinear and linear solver tolerances, quadrature, limiters, stabilization, and mesh family.
3. **Derive the residual.** Use manufactured or exact smooth solutions to calculate expected orders in space and time separately. With the method of manufactured solutions, add a forcing term so a chosen smooth function exactly solves the modified test PDE; this tests code paths but not the physical model.
4. **Test stability restrictions.** Sweep CFL or analogous parameters, but distinguish observed boundedness from a uniform proof. Monitor conserved quantities, positivity, entropy, or energy when theory identifies them.
5. **Run at least three systematically refined levels.** Keep nondominant errors smaller: reduce solver tolerances, control roundoff, and refine space and time in a way that separates their contributions. Confirm an asymptotic regime rather than fitting a slope through pre-asymptotic points.
6. **Report multiple relevant norms.** $L^1$, $L^2$, $L^\infty$, energy norms, and functional outputs expose different failures. Report raw errors and refinement ratios, not only a fitted order.
7. **Use independent benchmarks.** Exact solutions, manufactured solutions, highly resolved reference solutions, and conservation identities test different things. Agreement between two codes sharing an assumption or bug is weak evidence.

NASA's verification guidance distinguishes **code verification**, which asks whether algorithms and source code correctly implement the mathematical model, from **solution verification**, which estimates numerical error for the calculation of interest. Validation is a separate question: whether the mathematical model adequately represents reality for its intended use. A solver can converge perfectly to the wrong physical model.

When no exact solution exists, Richardson extrapolation can estimate leading discretization error only after evidence supports a smooth asymptotic expansion such as $Q_h=Q+C h^p+o(h^p)$. Shocks, changing mesh topology, limiter activation, singular corners, stochastic error, or unconverged iterative solves can invalidate that model. Report the assumption rather than converting an extrapolation into certainty.

## Convergence order is an error-budget statement

An advertised formal order is visible only when its discretization term dominates every competing error. A useful schematic budget is

$$
E_{\mathrm{total}}\lesssim E_{\mathrm{space}}+E_{\mathrm{time}}+E_{\mathrm{boundary}}+E_{\mathrm{iteration}}+E_{\mathrm{roundoff}}+E_{\mathrm{reference}}.
$$

If a second-order spatial study holds $k$ merely proportional to $h$, a first-order time integrator can force the measured slope toward one. If nonlinear solves stop at a fixed residual tolerance, iterative error eventually forms a floor. If the “exact” reference is another numerical solution, its error contaminates both numerator and denominator in the observed-order calculation. At extremely fine grids, cancellation and accumulated floating-point error can reverse the expected trend.

This is why verification often uses complementary refinements. Hold spatial error negligible while refining $k$ to test temporal order; then choose a sufficiently small $k$ while refining $h$ to test spatial order. For coupled explicit methods, the CFL restriction may prevent complete separation, so use the predicted combined order along a declared path such as $k=Ch$. Boundaries and singularities need targeted tests because a smooth periodic manufactured solution never exercises them. The expected rate is therefore not simply a property printed beside a method's name. It is a claim about a solution class, norm, full implementation, refinement path, and asymptotic error hierarchy.

## Theorem, evidence, and claim discipline

- **Proved:** the upwind scheme above is stable in periodic $\ell^2$ for $0\le\nu\le1$, and the stated linear theorem then gives convergence under its hypotheses.
- **Derived:** its smooth-solution truncation residual is first order under coupled refinement.
- **Observed:** a measured slope near one on selected grids is implementation evidence, conditional on the test and error controls.
- **Not established by those facts:** convergence for variable-speed advection with arbitrary boundaries, a limiter-equipped nonlinear code, shock accuracy in $L^\infty$, or physical validity of the PDE.

This vocabulary prevents a common escalation: a local Taylor calculation becomes “the method is accurate,” a stable-looking run becomes “the scheme is stable,” and three agreeing grids become “the model is validated.” Each step needs its own argument.

## Sources

- P. D. Lax and R. D. Richtmyer, [“Survey of the Stability of Linear Finite Difference Equations”](https://doi.org/10.1002/cpa.3160090206), *Communications on Pure and Applied Mathematics* 9 (1956), 267–293. Original equivalence theorem and stability framework.
- Randall J. LeVeque, [*Finite Difference Methods for Ordinary and Partial Differential Equations*](https://doi.org/10.1137/1.9780898717839), SIAM, 2007. Consistency, stability, convergence, von Neumann analysis, and time-dependent finite differences.
- Peter D. Lax and Burton Wendroff, [“Systems of Conservation Laws”](https://doi.org/10.1002/cpa.3160130205), *Communications on Pure and Applied Mathematics* 13 (1960), 217–237. Conservative-scheme limit theorem.
- Guy Barles and Panagiotis E. Souganidis, [“Convergence of approximation schemes for fully nonlinear second order equations”](https://doi.org/10.3233/ASY-1991-4305), *Asymptotic Analysis* 4 (1991), 271–283. Primary convergence framework for consistent, monotone, stable schemes under a comparison principle.
- Stanley Osher and Ronald Fedkiw, [*Level Set Methods and Dynamic Implicit Surfaces*](https://doi.org/10.1007/b98879), Springer, 2003, chapter 3. Accessible treatment of CFL reasoning, monotone schemes, and Hamilton–Jacobi discretization.
- NASA Glenn Research Center, [“Verification Assessment”](https://www.grc.nasa.gov/www/wind/valid/tutorial/verassess.html), accessed 2026-07-09. Code verification, calculation verification, and comparison against highly accurate solutions.
- William J. Rider, James R. Kamm, and V. Gregory Weirs, [“Procedures for Calculation Verification”](https://www.nas.nasa.gov/assets/nas/pdf/papers/NASA-TP-2016-219422_and_JANNAF-GL-2016-0001.pdf), in NASA/TP–2016–219422, 2016. Discretization-error estimation and solution-verification practice.

## Open questions

- Which stability concept best predicts useful error control for entropy-stable, positivity-preserving high-order schemes when shocks and smooth regions coexist?
- How should adaptive-mesh convergence studies separate discretization error from changes in refinement logic and mesh topology?
- When non-normal transient growth is physically important, which pseudospectral or energy diagnostics best complement eigenvalue-based stability checks?
- What verification standard should learned PDE surrogates meet when their error combines discretization, optimization, sampling, and out-of-distribution effects?
