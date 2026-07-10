---
title: Positivity-preserving discretizations
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, numerical-analysis, conservation-laws, positivity]
---

Positivity preservation is a conditional invariant-domain guarantee: a spatial update, timestep restriction, time integrator, and limiter must work together so that physically admissible discrete states remain admissible.

Up: [[Applied PDE research frontier 2026]]

Related: [[Structure-preserving numerical methods]] · [[Finite-volume methods for conservation laws]] · [[Discontinuous Galerkin methods]] · [[Conservation laws and entropy conditions]] · [[Consistency stability and convergence]]

## The property is more precise than “the code did not crash”

Many PDE variables cannot take arbitrary real values. A concentration, probability density, population, or water depth should be nonnegative. Compressible gas dynamics requires density and internal energy—and hence pressure for an ideal gas—to be positive. Radiation intensity and kinetic distribution functions have the same lower-bound constraint. These are not merely aesthetic requirements. If a compressible-flow update produces density $\rho\leq 0$, velocity $m/\rho$ is undefined; if it produces nonpositive internal energy, the pressure and sound speed may cease to exist. One invalid degree of freedom can therefore destroy the next flux evaluation.

Let $U$ denote the state and let $\mathcal G$ be the admissible set. A fully discrete method is positivity preserving when

$$
U_h^n\in \mathcal G_h \quad\Longrightarrow\quad U_h^{n+1}\in \mathcal G_h,
$$

under explicitly stated assumptions. The subscript matters. For a finite-volume method, $\mathcal G_h$ might constrain only cell averages. For a nodal method it might constrain every node. For a DG polynomial it might mean admissibility at a chosen quadrature set, not at every point in the cell. A credible claim therefore names:

- the quantities constrained and whether the bound is strict or non-strict;
- the discrete locations at which it holds;
- the boundary-state, source-term, mesh, and equation-of-state assumptions;
- the allowed timestep; and
- whether the theorem covers one forward-Euler step or the complete time integrator.

A floating-point floor such as replacing $\rho$ by $\max(\rho,10^{-12})$ is not automatically a conservative positivity-preserving discretization. It changes a state after the update, can violate mass or energy balance, and may conceal a failure whose scale depends on units. Floors can still be emergency safeguards, but they should be reported separately from the mathematical guarantee.

## Convex admissible sets are the organizing geometry

The most reusable proofs exploit convexity. If $\mathcal G$ is convex, then admissible states $U_j\in\mathcal G$ imply

$$
\sum_j \alpha_j U_j\in\mathcal G,
\qquad \alpha_j\geq 0,
\qquad \sum_j\alpha_j=1.
$$

Thus a difficult nonlinear update becomes safe if it can be rewritten as a convex combination of simpler safe states. For a scalar $u$, the interval $[m,M]$ is convex, so this gives both positivity ($m=0$) and a discrete maximum principle. For the ideal-gas Euler state $U=(\rho,m,E)$, a common admissible set is

$$
\mathcal G=\left\{(\rho,m,E):\rho>0,\quad
E-\frac{|m|^2}{2\rho}>0\right\}.
$$

The second inequality says that internal-energy density is positive. This set is convex: $|m|^2/(2\rho)$ is the perspective of a convex quadratic, so its epigraph is convex. Equivalently, pressure

$$
p(U)=(\gamma-1)\left(E-\frac{|m|^2}{2\rho}\right)
$$

is concave on $\rho>0$ for a perfect gas, and its positive superlevel set is convex. The strict set is open, which creates a practical distinction between proving $p>0$ in exact arithmetic and maintaining a safety margin under rounding.

Not every physical constraint is convex in the variables being advanced. A change from conservative to primitive variables can alter the geometry; multiple species, tabulated equations of state, magnetohydrodynamic divergence constraints, and realizability conditions for moment systems add coupled restrictions. One must prove convexity for the actual admissible set rather than assume that “positive components” settle the matter.

## The low-order forward-Euler anchor

Consider a one-dimensional finite-volume update for

$$
U_t+f(U)_x=0:
$$

$$
\bar U_i^{n+1}=\bar U_i^n
-\lambda\left(\widehat f_{i+1/2}-\widehat f_{i-1/2}\right),
\qquad \lambda=\frac{\Delta t}{\Delta x}.
$$

The first task is to identify a low-order numerical flux for which this forward-Euler map preserves $\mathcal G$ under a computable CFL restriction. Godunov-type fluxes inherit information from admissible Riemann solutions; local Lax–Friedrichs or Rusanov fluxes can be analyzed by splitting states with sufficient wave-speed bounds. Graph-viscosity finite-element methods use the same principle on a connectivity graph: enough artificial diffusion makes the update a convex combination of intermediate states that remain in an invariant domain.

The CFL restriction is not ceremonial. After algebraic rearrangement, its job is to make all combination coefficients nonnegative. A schematic scalar monotone update has

$$
u_i^{n+1}=a_{i,-}u_{i-1}^n+a_{i,0}u_i^n+a_{i,+}u_{i+1}^n,
\qquad a_{i,j}\geq0,
\qquad \sum_j a_{i,j}=1.
$$

If the step is enlarged until $a_{i,0}<0$, the convexity proof disappears even if several test runs remain positive. For systems, a bound based on the largest characteristic speed is typical, but the exact constant depends on the flux, mesh geometry, quadrature weights, polynomial degree, and multidimensional decomposition. Using an underestimated wave speed can invalidate the theorem.

This gives a design hierarchy. First establish an invariant-domain-preserving low-order method. Then treat a high-order method as a correction to that safe anchor. Starting with an arbitrary high-order update and clipping its output afterward generally makes conservation, order, and admissibility harder to analyze together.

Sources and boundaries also participate in the invariant-domain proof. For

$$
U_t+\nabla\cdot F(U)=S(U,x),
$$

a safe homogeneous flux step can be undone by an explicit reaction, gravity, cooling, or geometry-source update. Operator splitting does not make this interaction vanish: each substep needs its own admissibility property, or the composition needs a joint proof. Ghost cells and prescribed boundary fluxes must also supply admissible states. Cut cells, moving meshes, and local time stepping alter the convex weights and can impose a much smaller effective timestep.

## Why SSP time integration extends—but does not create—the guarantee

Suppose forward Euler preserves a convex functional or convex admissible set whenever $\Delta t\leq\Delta t_{\mathrm{FE}}$. A strong-stability-preserving (SSP) Runge–Kutta method is constructed so that each stage can be expressed as a convex combination of forward-Euler steps. If its SSP coefficient is $C>0$, the same property follows under

$$
\Delta t\leq C\,\Delta t_{\mathrm{FE}},
$$

provided the spatial operator and any stagewise limiter satisfy the forward-Euler hypothesis at every stage. The familiar third-order three-stage SSP method, for example, can be written

$$
U^{(1)}=U^n+\Delta t L(U^n),
$$

$$
U^{(2)}=\frac34U^n+\frac14\left(U^{(1)}+\Delta tL(U^{(1)})\right),
$$

$$
U^{n+1}=\frac13U^n+\frac23\left(U^{(2)}+\Delta tL(U^{(2)})\right).
$$

Convexity makes the induction immediate when each bracketed Euler step is admissible.

SSP is therefore a transfer theorem, not a repair mechanism. It cannot rescue a spatial forward-Euler step that lacks positivity. A Runge–Kutta method with no positive SSP coefficient does not inherit the proof merely because it is stable in a linear sense. Limiters applied only after the final stage leave intermediate flux evaluations exposed to invalid states. Variable timesteps, multistep methods, IMEX schemes, and implicit solves require their own coefficient or monotonicity analysis; a solver tolerance or failed nonlinear iteration can also break an otherwise formal implicit guarantee.

## High order requires control of more than the mean

A conservative high-order polynomial can have an admissible cell average while becoming negative near an interface or quadrature point. Zhang–Shu scaling limiters address this without changing the mean. For a scalar polynomial $u_h$ with cell average $\bar u\geq\varepsilon$ and minimum $u_{\min}$ on a prescribed test set, define

$$
\widetilde u_h(x)=\bar u+\theta\bigl(u_h(x)-\bar u\bigr),
\qquad
\theta=\min\left(1,\frac{\bar u-\varepsilon}{\bar u-u_{\min}}\right),
$$

with the quotient handled as $1$ when its denominator vanishes. Because the fluctuation has zero mean, the limiter conserves the cell average. Because $0\leq\theta\leq1$, each limited value lies on the segment between $\bar u$ and the old value and satisfies the lower bound on the test set.

For Euler, limiting is usually staged. Density is first contracted toward the admissible mean. Pressure or internal energy is then enforced using the convexity or concavity of the admissible constraint, sometimes solving for the point where the segment intersects a small positive pressure level. The proof that the next cell average is admissible also relies on a quadrature representation of that mean as a convex combination of polynomial values, including face points used by the flux. This is why quadrature weights and the CFL constant enter the theorem.

Flux-corrected transport and convex limiting take a related algebraic route. Write a high-order update as an invariant-domain-preserving low-order update plus conservative pairwise antidiffusive corrections. Symmetric correction factors are reduced so that every nodal state remains within local or physical bounds. Pairwise conservation can survive because what leaves one node enters another. This framework is valuable on unstructured meshes, but simultaneous constraints may require sequential or coupled limiting, and the result depends on correct bounds for every intermediate state.

The good case is smooth and comfortably interior to $\mathcal G$: the limiter stays inactive, or its change is of sufficiently high order, so the designed accuracy is retained. Near vacuum, dry fronts, sharp material interfaces, or underresolved shocks, the limiter may activate strongly and locally reduce accuracy. That degradation is often the honest price of admissibility, not evidence that the limiter failed.

## What positivity does not guarantee

Positivity is one structural contract among several:

- It does not enforce an entropy inequality or select the correct weak solution; see [[Conservation laws and entropy conditions]].
- It does not guarantee total-variation control, absence of oscillations, a maximum principle for every variable, or monotonicity.
- It does not imply conservation if the method clips degrees of freedom nonconservatively.
- It does not imply a well-balanced treatment of steady states, exact preservation of divergence constraints, or compatibility with mesh motion.
- It does not establish convergence or high-order accuracy. Those require consistency, stability, regularity or compactness arguments, and measured refinement behavior.
- It does not ensure robustness at an exact vacuum. Many proofs assume strictly positive cell averages and become singular as the margin approaches zero.

Positivity and entropy stability can even interfere operationally. An entropy-stable flux may still create an inadmissible state for a large step, while a positivity limiter may alter a carefully derived entropy balance unless the two devices are designed together. Similarly, limiting conservative variables can perturb species ratios or pressure equilibrium across material interfaces. The correct question is not “does the code have a positivity limiter?” but “which combined invariants does the complete algorithm preserve, under which assumptions?”

## A verification ladder

Verification should proceed from the proof obligation to adversarial computation.

1. **Define the contract.** Record $\mathcal G$, constrained locations, tolerance $\varepsilon$, boundary assumptions, source treatment, and whether the claim concerns averages or point values.
2. **Audit the low-order lemma.** Derive the forward-Euler update, expose its convex weights or admissible intermediate states, and confirm the implemented wave-speed and geometric bounds imply nonnegative coefficients.
3. **Audit temporal composition.** Write the actual time integrator in SSP or other monotone form. Check the coefficient and apply limiting at every stage where the proof requires it.
4. **Audit conservation.** On periodic or closed domains, measure global mass and the other conserved components before and after limiting. Roundoff-level drift is different from systematic clipping loss.
5. **Test the constrained set directly.** Inspect all theorem-relevant quadrature nodes, faces, cells, and stages—not only output snapshots. Track the minimum admissibility margin and limiter activation fraction.
6. **Challenge the boundary of the set.** Run near-vacuum Euler states, nearly dry shallow water, narrow positive pulses, strong rarefactions, high Mach shocks, and source-dominated states. Reduce the timestep around the predicted CFL threshold to see whether failure and success match the analysis.
7. **Verify accuracy away from the boundary.** Use a smooth strictly positive manufactured or exact solution, refine $h$ and $\Delta t$ consistently, and check the designed convergence rate. Repeat with the limiter disabled to quantify its effect.
8. **Separate stress robustness from convergence.** Shock-tube survival is valuable but not an order test. A smooth refinement table is valuable but does not probe near-vacuum robustness. Both are needed.
9. **Test interactions.** Repeat with the production boundary conditions, mesh deformation or AMR, source splitting, equation of state, parallel halo exchange, and precision. These are common places for a theorem proved on a uniform periodic mesh to stop applying.

Property-based tests can generate random admissible neighboring states and steps below the bound, apply one update, and assert membership in $\mathcal G$. Such tests do not prove a theorem, but they are effective at detecting sign errors, incorrect wave speeds, missed limiter stages, and indexing faults. Reproducibility requires logging the random seed and the state that minimizes the admissibility margin.

## Place in the map

Positivity-preserving methods connect continuum invariant regions to executable numerical contracts. They refine the nonlinear-stability discussion in [[Consistency stability and convergence]], supply a robustness layer for [[Finite-volume methods for conservation laws]] and [[Discontinuous Galerkin methods]], and illustrate the broader principle in [[Structure-preserving numerical methods]]: preservation comes from compatible spatial algebra, temporal composition, and verification, not from the name of a method family.

## Sources

- [Zhang and Shu, “On positivity-preserving high order discontinuous Galerkin schemes for compressible Euler equations on rectangular meshes,” *Journal of Computational Physics* 229 (2010), 8918–8934](https://doi.org/10.1016/j.jcp.2010.08.016) — primary construction of the cell-average argument, scaling limiter, and SSP extension for Euler equations.
- [Gottlieb, Shu, and Tadmor, “Strong Stability-Preserving High-Order Time Discretization Methods,” *SIAM Review* 43 (2001), 89–112](https://doi.org/10.1137/S003614450036757X) — foundational SSP formulation as convex combinations of forward-Euler steps.
- [Guermond and Popov, “Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems,” *SIAM Journal on Numerical Analysis* 54 (2016), 2466–2489](https://doi.org/10.1137/15M1019402) — primary invariant-domain and graph-viscosity analysis for hyperbolic systems.
- [Guermond, Nazarov, Popov, and Tomas, “Second-Order Invariant Domain Preserving Approximation of the Euler Equations Using Convex Limiting,” *SIAM Journal on Scientific Computing* 40 (2018), A3211–A3239](https://doi.org/10.1137/17M1149961) — primary convex-limiting construction of conservative high-order corrections over a safe low-order scheme.
- [Zhang and Shu, “Maximum-principle-satisfying and positivity-preserving high-order schemes for conservation laws: survey and new developments,” *Proceedings of the Royal Society A* 467 (2011), 2752–2776](https://doi.org/10.1098/rspa.2011.0153) — synthesis of the bound-preserving framework, quadrature conditions, and extensions.

## Open questions

- How can one enforce positivity, entropy stability, and well-balancedness simultaneously without excessive limiter activation near equilibria?
- Which admissibility variables and safety margins are most reliable for general equations of state near vacuum or phase boundaries?
- Can a posteriori subcell methods provide sharper high-order resolution than scaling limiters while retaining a comparably transparent invariant-domain proof?
- How should positivity guarantees be reformulated for implicit, locally time-stepped, adaptive, or asynchronous schemes whose updates are not simple SSP convex combinations?
