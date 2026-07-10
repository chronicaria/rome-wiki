---
title: Finite-volume methods for conservation laws
created: 2026-07-09
as_of: 2026-07-09
source: llm
status: seed
desk: Applied partial differential equations
tags: [mathematics, partial-differential-equations, applied-mathematics, numerical-analysis, finite-volume, conservation-laws]
---

Finite-volume methods evolve cell averages by balancing fluxes through cell faces, making discrete conservation exact while leaving accuracy, entropy selection, and robustness to the numerical flux and reconstruction.

Up: [[Applied PDE research frontier 2026]] · Prerequisites: [[Weak solutions and why shocks require them]] · [[Conservation laws and entropy conditions]] · Related: [[Consistency stability and convergence]] · [[Adaptive mesh refinement]] · [[Structure-preserving numerical methods]]

## 1. Why start from an integral balance?

Consider a one-dimensional system of conservation laws

$$
\partial_t u+\partial_x f(u)=0,
\qquad u(x,t)\in\mathbb{R}^m,
$$

with initial data $u(x,0)=u_0(x)$. For compressible Euler flow, for example, $u$ contains density, momentum, and total energy, and $f(u)$ is their physical flux. Even smooth initial data can form shocks. At a shock, $u_x$ does not exist classically, so a discretization built around pointwise derivatives is no longer aligned with the solution concept.

Integrate over a fixed control volume $K_i=[x_{i-1/2},x_{i+1/2}]$:

$$
\frac{d}{dt}\int_{K_i}u(x,t)\,dx
=-f(u(x_{i+1/2},t))+f(u(x_{i-1/2},t)).
$$

Writing $\Delta x_i=|K_i|$ and the exact cell average

$$
\bar u_i(t)=\frac{1}{\Delta x_i}\int_{K_i}u(x,t)\,dx,
$$

gives

$$
\frac{d\bar u_i}{dt}
=-\frac{1}{\Delta x_i}\left(f_{i+1/2}-f_{i-1/2}\right).
$$

This identity is the design principle. A finite-volume method stores approximations $U_i\approx\bar u_i$, constructs one shared numerical flux $F_{i+1/2}$ for each face, and advances the semidiscrete system

$$
\frac{dU_i}{dt}
=-\frac{1}{\Delta x_i}\left(F_{i+1/2}-F_{i-1/2}\right).
\tag{1}
$$

Summing (1) over cells cancels every interior face flux exactly. Thus total discrete mass changes only through boundary fluxes. This *local* conservation is stronger than obtaining a nearly correct global total after cancellation of unrelated errors: neighboring cells use equal-and-opposite copies of the same transfer.

For forward Euler,

$$
U_i^{n+1}=U_i^n-
\frac{\Delta t}{\Delta x_i}
\left(F_{i+1/2}^n-F_{i-1/2}^n\right).
\tag{2}
$$

Higher-order strong-stability-preserving Runge–Kutta methods can integrate (1), but time accuracy cannot repair a bad face flux or reconstruction.

## 2. The numerical flux is the method's physics

A two-state flux $F(U_L,U_R)$ must at least be **consistent**,

$$F(U,U)=f(U),$$

and **conservative**: the identical face value must enter both adjacent updates with opposite signs. Consistency says a constant state produces the physical flux; conservation makes discrete jumps obey the correct balance. The Lax–Wendroff convergence theorem is often summarized carefully as: if bounded approximations from a consistent conservative scheme converge strongly enough, their limit is a weak solution. It does not promise convergence, stability, or selection of the entropy solution.

### Godunov flux

Godunov's first-order method places piecewise-constant data in every cell and solves a Riemann problem at each face:

$$
u(x,0)=
\begin{cases}
U_L,&x<0,\\
U_R,&x>0.
\end{cases}
$$

If $u^{\mathrm{RP}}(\xi;U_L,U_R)$ is its entropy solution with $\xi=x/t$, then

$$
F_G(U_L,U_R)=f\!\left(u^{\mathrm{RP}}(0;U_L,U_R)\right).
$$

The interface sees whichever waves reach $x/t=0$. For scalar convex fluxes this has a simple min–max form; for systems such as Euler, an exact solve requires nonlinear wave relations. Godunov's method is robust and physically interpretable, but exact Riemann solves can be expensive, and a piecewise-constant representation is only first order.

### Rusanov or local Lax–Friedrichs flux

The Rusanov flux replaces detailed wave structure by one speed bound:

$$
F_R(U_L,U_R)=\frac{f(U_L)+f(U_R)}{2}
-\frac{\alpha}{2}(U_R-U_L),
$$

where $\alpha\ge\max_{U\in\mathcal S}\rho(f'(U))$ bounds the fastest relevant characteristic speed across the interface. The jump term is numerical viscosity. Rusanov is cheap, simple, and often a good debugging baseline or fallback near pathological states. Its weakness is excess diffusion: using the largest wave speed smears slow contact and shear waves as if they traveled at the fastest acoustic speed.

### Roe flux

Roe constructs a constant matrix $\widetilde A(U_L,U_R)$ satisfying, ideally,

$$
\widetilde A(U_L,U_R)(U_R-U_L)=f(U_R)-f(U_L),
$$

with real eigenvalues and a complete eigenbasis. If $\widetilde A=R\Lambda R^{-1}$, the flux is

$$
F_{\mathrm{Roe}}=\frac{f(U_L)+f(U_R)}2
-\frac12 R|\Lambda|R^{-1}(U_R-U_L).
$$

Because dissipation is characteristic-by-characteristic, Roe resolves contacts much more sharply than Rusanov. But a transonic rarefaction can be represented as a nonphysical expansion shock unless an entropy fix modifies eigenvalues near zero. For Euler equations the Roe intermediate state can also lose positive density or pressure. These are not cosmetic issues: a sharp linearization is not automatically entropy stable or positivity preserving.

### HLL flux

The Harten–Lax–van Leer construction replaces the full fan by two bounding speeds $S_L\le S_R$ and one intermediate state. Its flux is

$$
F_{\mathrm{HLL}}=
\begin{cases}
f(U_L),&0\le S_L,\\
\dfrac{S_Rf(U_L)-S_Lf(U_R)+S_LS_R(U_R-U_L)}{S_R-S_L},&S_L<0<S_R,\\
f(U_R),&S_R\le0.
\end{cases}
$$

With suitable wave-speed bounds and a compatible CFL restriction, HLL has useful positivity guarantees for important systems such as Euler; “positivity-friendly” is not unconditional for every system or implementation. Because it collapses all internal waves into one state, it diffuses contacts; HLLC restores a contact wave for Euler and shallow-water-type systems. The practical hierarchy is therefore not “one best solver.” Rusanov is a robust broad brush, Roe is sharp but needs safeguards, and HLL-family solvers trade internal-wave resolution against robustness.

## 3. CFL: the numerical domain of dependence

An explicit update must not move information farther than the stencil can communicate in one step. On a uniform one-dimensional mesh, a typical restriction is

$$
\nu=\frac{\Delta t}{\Delta x}\max_i\rho(f'(U_i))\le C_{\mathrm{method}},
$$

where $\rho$ is spectral radius. The admissible constant depends on the flux, reconstruction, and time integrator; it should not be assumed to equal one. In multiple dimensions a face-based form is more informative:

$$
\Delta t_K\lesssim
\frac{|K|}{\sum_{e\subset\partial K}|e|\,a_{K,e}},
$$

where $a_{K,e}$ bounds normal signal speed at face $e$. Small cells, high aspect ratios, and cut cells can therefore impose severe steps.

The CFL condition is necessary for many explicit schemes but not a universal stability proof. Nonlinear stability may additionally require monotone fluxes, limiter constraints, invariant-domain arguments, positivity bounds, or entropy inequalities. Conversely, an implicit method can evade an explicit CFL stability bound while still becoming inaccurate when waves cross many cells in a step.

## 4. Second order without ringing: reconstruction and limiting

Piecewise-constant Godunov methods smear smooth waves. A MUSCL-type method reconstructs a linear profile in cell $i$,

$$
u_i(x)=U_i+\sigma_i(x-x_i),
$$

and supplies face states

$$
U_{i+1/2}^-=U_i+\frac{\Delta x}{2}\sigma_i,
\qquad
U_{i+1/2}^+=U_{i+1}-\frac{\Delta x}{2}\sigma_{i+1}.
$$

An unlimited centered slope is second order in smooth regions but generates Gibbs-like overshoots near jumps. A slope limiter replaces it by a nonlinear choice. For instance, with one-sided differences $\delta_-=(U_i-U_{i-1})/\Delta x$ and $\delta_+=(U_{i+1}-U_i)/\Delta x$,

$$
\sigma_i=\operatorname{minmod}(\delta_-,\delta_+),
$$

where minmod returns the argument of smallest magnitude if all arguments share a sign and zero otherwise. Van Leer and monotonized-central limiters are less dissipative alternatives.

For a scalar grid function, total variation is

$$
TV(U)=\sum_i|U_{i+1}-U_i|.
$$

A total-variation-diminishing update satisfies $TV(U^{n+1})\le TV(U^n)$, preventing creation of new scalar oscillation. This is a powerful nonlinear stability property, not a blanket guarantee for systems. Componentwise limiting can mix characteristic families and create artifacts; characteristic limiting transforms jumps into approximate wave coordinates, limits each family, and transforms back. Near smooth extrema, strict TVD limiters often reduce to first order—the price encoded in Godunov's order barrier for linear monotone schemes. TVB, ENO/WENO, and extremum-preserving reconstructions relax the criterion more intelligently.

Reconstruction must also respect physical admissibility. A high-order polynomial can produce negative density, pressure, water depth, or species fraction even when cell averages are admissible. Positivity-preserving scaling limiters pull reconstructed face values toward the cell average until they lie in the invariant set. This step should be tested independently from the Riemann solver.

## 5. Entropy is more than conservation

A nonlinear conservation law can possess multiple weak solutions. For a convex entropy $\eta(u)$ with entropy flux $q(u)$ satisfying $\nabla q=\nabla\eta\,f'(u)$, the physical solution obeys

$$
\partial_t\eta(u)+\partial_xq(u)\le0
$$

in the distributional sense. A discretization should mimic an entropy inequality, for example

$$
\frac{d}{dt}\eta(U_i)
+\frac{Q_{i+1/2}-Q_{i-1/2}}{\Delta x_i}\le0,
$$

for a consistent numerical entropy flux $Q$. Monotone scalar schemes are entropy convergent under standard assumptions, but systems are subtler. Exact Godunov flux inherits the entropy Riemann solution; Roe needs an entropy correction around sonic rarefactions. Modern entropy-stable fluxes deliberately combine an entropy-conservative central flux with dissipation that guarantees a discrete inequality.

Entropy stability does not automatically imply positivity, low diffusion, or robustness to every multidimensional shock instability. Each property needs its own argument or diagnostic.

### Worked scalar example: Burgers' equation

For $f(u)=u^2/2$, the characteristic speed is $f'(u)=u$. At a face with states $U_L$ and $U_R$, the exact Godunov flux exposes the entropy mechanism explicitly. If $U_L\le U_R$, the Riemann solution is a rarefaction. The interface flux is $f(U_L)$ when both states are positive, $f(U_R)$ when both are negative, and zero when the fan straddles the sonic point. If $U_L>U_R$, the solution is a shock with Rankine–Hugoniot speed

$$
s=\frac{f(U_R)-f(U_L)}{U_R-U_L}=\frac{U_L+U_R}{2}.
$$

The interface samples the left flux if $s>0$ and the right flux if $s<0$. Thus

$$
F_G(U_L,U_R)=
\begin{cases}
\min_{u\in[U_L,U_R]}f(u),&U_L\le U_R,\\
\max_{u\in[U_R,U_L]}f(u),&U_L>U_R.
\end{cases}
$$

This formula is worth implementing before a system solver. It tests whether face orientation, sonic rarefactions, and shock propagation are correct without eigenvectors or equations of state. Compare it with Rusanov using $\alpha=\max(|U_L|,|U_R|)$. Both are conservative and consistent, but Rusanov generally adds diffusion the exact scalar Riemann solution does not require. A useful experiment evolves a square pulse and a transonic rarefaction at several CFL numbers. Measure conservation, $L^1$ error, and shock-location error under refinement, and inspect whether the rarefaction becomes a nonphysical jump. Do not prescribe a universal first-order shock-location rate: observed rates depend on the scheme, data, norm, reference alignment, and whether wave interactions occur. Then turn on MUSCL reconstruction and check second order on a smooth solution *before* its shock-formation time; after a shock forms, global high-order convergence should not be expected in norms dominated by the discontinuity.

## 6. Multiple dimensions, geometry, and source terms

For $\partial_tu+\nabla\cdot\mathbf f(u)=0$ on a cell $K$,

$$
\frac{dU_K}{dt}
=-\frac1{|K|}\sum_{e\subset\partial K}|e|\,
F_e(U_K^-,U_{K_e}^+;n_{K,e}),
\tag{3}
$$

where $n_{K,e}$ is the outward unit normal and $F_e$ approximates the normal flux $\mathbf f(u)\cdot n_{K,e}$. The neighboring cell uses the opposite orientation, so a conservative flux must satisfy

$$
F(U_L,U_R;n)=-F(U_R,U_L;-n).
$$

On unstructured meshes, least-squares or Green–Gauss gradients feed a multidimensional limiter. Skewness, nonorthogonality, and poor conditioning can corrupt these gradients; bounded reconstruction at cell vertices or quadrature points is not optional near shocks. Dimension-by-dimension splitting is simple on Cartesian grids but introduces splitting error and misses genuinely transverse wave interactions. Unsplit methods incorporate transverse corrections at greater complexity.

Curved coordinates and manifolds introduce metric weights. The safe procedure is still geometric integration: compute physical face measure, outward conormal, and cell volume consistently. On a stationary curvilinear mesh, exact finite-volume face vectors of a closed cell sum to zero; high-order mapped discretizations need compatible discrete metric identities to preserve a constant free stream. On a moving mesh, cell-volume change must also equal the swept mesh-face flux; this additional space–time identity is the discrete geometric conservation law. Violating either requirement can create flow from geometry alone. On a fixed curved surface, a surface conservation law instead uses tangential flux and surface divergence; if the surface moves, its transport law adds geometric and mesh-velocity terms. These factors connect directly to [[Level-set geometry for surface conservation laws]].

Balance laws,

$$
\partial_tu+\nabla\cdot\mathbf f(u)=s(u,x),
$$

need more than conservative fluxes. Naive source quadrature can destroy equilibria such as lake-at-rest shallow water. A well-balanced method discretizes flux gradient and source so the target steady state cancels exactly. Operator splitting is convenient, but stiff reactions may require implicit or IMEX treatment and splitting-error studies.

## 7. Verification ladder

A credible implementation should climb tests that isolate mechanisms rather than jump directly to a spectacular shock image.

1. **Constant state:** with periodic boundaries, the residual should be roundoff-level, including on curved or unstructured meshes.
2. **Discrete conservation:** track the volume-weighted sum $\sum_K|K|U_K$ and compare its change to integrated boundary flux and sources.
3. **Smooth manufactured or exact solution:** refine $h$ and $\Delta t$ together; measure $L^1$, $L^2$, and $L^\infty$ errors and recover the designed order before shocks form.
4. **Linear advection:** test positive and negative speeds, periodic return, limiter activation, and phase/diffusion error.
5. **Scalar nonlinear shock:** Burgers' equation checks shock speed against Rankine–Hugoniot and distinguishes entropy-satisfying shocks from expansion shocks.
6. **System Riemann problems:** shock tubes expose contact smearing, rarefaction entropy defects, negative states, and boundary mistakes.
7. **Multidimensional stress tests:** rotated discontinuities, vortices, and strong grid-aligned shocks reveal anisotropy, carbuncle-like instabilities, and limiter sensitivity.
8. **Production balance:** verify positivity, entropy production, steady-state preservation, and convergence of the actual quantity of interest.

Report mesh, timestep/CFL, boundary treatment, reconstruction variables, limiter, Riemann solver, time integrator, norms, and reference solution. A convergence table without these settings is not reproducible.

## 8. Failure modes and an applied bridge

Common failures have identifiable signatures. Excessive smearing points to first-order reconstruction or overly large scalar dissipation. Oscillations near shocks point to unlimited reconstruction, a broken limiter, or inconsistent ghost states. Wrong shock speed often means nonconservative differencing or source imbalance. Negative pressure suggests inadmissible reconstruction, an unsafe solver state, or too-large timestep. A stationary grid-aligned shock that develops a transverse bulge may be a carbuncle instability, for which more robust HLL-type dissipation or multidimensional shock sensing is often used. Loss of convergence on irregular meshes may originate in gradient reconstruction rather than the face flux.

The applied reason for finite volumes is clearest in atmosphere, ocean, astrophysical, hydraulic, combustion, and compressible-flow models: the variables being transported are extensive quantities. If mass leaves one atmospheric column, the neighboring column should receive precisely that mass. Yet conservation alone does not make a model trustworthy. For [[Forced-damped shallow-water equations on a level-set surface]], for example, one must coordinate normal fluxes, surface metric factors, forcing and damping, equilibrium preservation, and verification on a curved geometry. The finite-volume balance supplies the accounting architecture; entropy, positivity, well-balancing, geometry, and resolution determine whether the accounting represents the intended physics.

## Sources

- S. K. Godunov, “A difference method for numerical calculation of discontinuous solutions of the equations of hydrodynamics” (1959), original method paper and archival record: [Math-Net](https://www.mathnet.ru/php/archive.phtml?jrnid=sm&option=&option_lang=eng&paperid=4873&wshow=paper).
- A. Harten, P. D. Lax, and B. van Leer, “On Upstream Differencing and Godunov-Type Schemes for Hyperbolic Conservation Laws,” *SIAM Review* 25 (1983), the original HLL synthesis: [doi:10.1137/1025002](https://epubs.siam.org/doi/10.1137/1025002).
- B. Einfeldt, “On Godunov-Type Methods for Gas Dynamics,” *SIAM Journal on Numerical Analysis* 25 (1988): 294–318, signal-speed and positivity context for the HLLE refinement: [doi:10.1137/0725021](https://epubs.siam.org/doi/10.1137/0725021).
- P. L. Roe, “Approximate Riemann Solvers, Parameter Vectors, and Difference Schemes,” *Journal of Computational Physics* 43 (1981): 357–372, original Roe linearization: [doi:10.1016/0021-9991(81)90128-5](https://doi.org/10.1016/0021-9991(81)90128-5).
- A. Harten, “High Resolution Schemes for Hyperbolic Conservation Laws,” *Journal of Computational Physics* 49 (1983): 357–393, foundational TVD analysis: [doi:10.1016/0021-9991(83)90136-5](https://doi.org/10.1016/0021-9991(83)90136-5).
- R. J. LeVeque, *Finite Volume Methods for Hyperbolic Problems* (Cambridge University Press, 2002); author-maintained examples, corrections, and lecture materials: [Clawpack book materials](https://www.clawpack.org/fvmhp_materials/).
- R. Eymard, T. Gallouët, and R. Herbin, “Finite Volume Methods,” *Handbook of Numerical Analysis* 7 (2000), broad analysis across elliptic, parabolic, and hyperbolic problems: [author-hosted manuscript](https://raphaeleh.github.io/PUBLI/bookevol.pdf).
- P. D. Thomas and C. K. Lombard, “Geometric Conservation Law and Its Application to Flow Computations on Moving Grids,” *AIAA Journal* 17 (1979): 1030–1037, foundational moving-grid GCL paper: [doi:10.2514/3.61273](https://doi.org/10.2514/3.61273).

## Open questions

- Which entropy-stable and positivity-preserving flux pairing gives the best accuracy–robustness tradeoff for the curved shallow-water regime in [[BealeSurfaceSolver research (MOC)]]?
- How should a discrete geometric conservation law be formulated when a level-set surface and its cut-point degrees of freedom change in time?
- When do characteristic limiters materially outperform primitive- or conserved-variable limiting on the target equations and meshes?
- Can a well-balanced surface finite-volume scheme preserve both the intended equilibrium and the relevant discrete energy or entropy law?
