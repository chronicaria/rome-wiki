---
title: Structure-preserving numerical methods
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, numerical-analysis, geometric-integration]
---
Structure preservation means building a discrete evolution that retains the continuum identities or inequalities responsible for admissibility and long-time behavior, rather than asking consistency alone to recover them eventually.

Up: [[Applied PDE research frontier 2026]] · Prerequisite: [[Consistency stability and convergence]] · Related: [[Conservation laws and entropy conditions]] · [[Finite-volume methods for conservation laws]] · [[Discontinuous Galerkin methods]] · [[Adaptive mesh refinement]]

## The target is a mechanism, not a slogan

A PDE usually carries more information than the statement that a residual vanishes. It may conserve mass, momentum, charge, or energy; dissipate entropy or free energy; preserve nonnegativity; propagate a divergence constraint; maintain a steady balance between flux and forcing; or arise from a symplectic, Hamiltonian, gradient-flow, or variational structure. Those properties organize the continuum dynamics. They restrict which states are reachable, which equilibria are stable, and how errors can grow.

A numerical method is **structure preserving** when its finite-dimensional update retains a chosen version of one of those mechanisms. The choice matters. Exact energy conservation is valuable for a reversible wave equation but wrong for a viscous flow whose kinetic energy must decay. A symplectic method generally does not conserve the Hamiltonian exactly; instead, under suitable smoothness and step-size assumptions, it follows the flow of a nearby modified Hamiltonian for long times. An entropy-stable shock scheme deliberately dissipates a convex entropy. A positivity limiter may preserve admissibility while sacrificing formal order near an active constraint.

The central design question is therefore not “does this method preserve structure?” It is:

> Which continuum law controls the regime of interest, what is its discrete analogue, and which algebraic choices make that analogue hold?

The answer links modeling, spatial discretization, time integration, solvers, mesh transfer, and diagnostics. Preserving a law in only one layer does not guarantee that the complete code preserves it.

## Four forms of continuum structure

Consider an evolution equation written abstractly as

$$
\partial_t u=\mathcal F(u),\qquad u(0)=u_0.
$$

Four common structures lead to different numerical contracts.

### Conservation laws

If a density $q(u)$ and flux $g(u)$ satisfy

$$
\partial_t q(u)+\nabla\cdot g(u)=0,
$$

then integration over a fixed domain $\Omega$ gives

$$
\frac{d}{dt}\int_\Omega q(u)\,dx
=-\int_{\partial\Omega}g(u)\cdot n\,ds.
$$

For periodic or impermeable boundaries the total is constant. The numerical analogue should change only through a single, auditable boundary flux. This is the mechanism behind conservative finite-volume and conservative Galerkin methods: every interior interface contribution must occur twice with opposite orientation.

### Dissipation and Lyapunov functionals

For a gradient flow,

$$
\partial_t u=-\mathcal K(u)\frac{\delta E}{\delta u},
$$

where $\mathcal K$ is positive semidefinite, the energy obeys

$$
\frac{dE}{dt}
=-\left\langle \frac{\delta E}{\delta u},
\mathcal K(u)\frac{\delta E}{\delta u}\right\rangle\le 0.
$$

Allen–Cahn, Cahn–Hilliard, porous-medium, and Fokker–Planck equations exhibit variants of this pattern. The discrete goal is an inequality $E_h(u^{n+1})\le E_h(u^n)$ under stated conditions. Exact conservation would contradict the physics.

### Constraints and admissible sets

In incompressible flow, $\nabla\cdot u=0$ is a constraint coupled to pressure. Maxwell's equations propagate divergence constraints. Density, species fractions, water depth, and distribution functions often must remain nonnegative. These are not merely aesthetically pleasing properties: leaving the admissible set can make pressure laws undefined, destroy hyperbolicity, or produce nonphysical states.

### Hamiltonian and variational structure

A Hamiltonian system has the form

$$
\dot z=J(z)\nabla H(z),
$$

with a skew operator $J$. Canonical finite-dimensional dynamics preserve the symplectic two-form. PDEs such as nonlinear Schrödinger, Korteweg–de Vries, wave, and ideal fluid equations possess Hamiltonian or multisymplectic formulations under appropriate variables and boundaries. Variational integrators instead discretize an action principle; discrete stationarity then yields update equations and discrete versions of Noether momentum maps.

These categories overlap. Shallow-water flow, for example, combines mass conservation, potential-vorticity structure, energy behavior, positivity of depth, and steady geostrophic or lake-at-rest balances. No single generic method automatically preserves all of them.

## How local cancellation becomes global conservation

Take the scalar conservation law

$$
u_t+\nabla\cdot f(u)=0
$$

and partition $\Omega$ into cells $K$. A finite-volume update is

$$
|K|\frac{d\bar u_K}{dt}
=-\sum_{e\subset\partial K}|e|\,\widehat f_{K,e}\cdot n_{K,e}.
$$

For a shared face $e=K\cap L$, conservation requires one numerical flux with opposite orientation:

$$
\widehat f_{K,e}\cdot n_{K,e}
=-\widehat f_{L,e}\cdot n_{L,e}.
$$

Summing over cells cancels every interior face exactly. This is a topological statement: it depends on incidence and orientation, not on the flux being highly accurate. The remaining change is the boundary flux. The same skeleton appears after integration by parts in [[Discontinuous Galerkin methods]].

This derivation exposes common failure points. Two neighboring blocks cannot independently compute inconsistent face fluxes. Nonconforming meshes need conservative projection or mortar operators. [[Adaptive mesh refinement]] needs refluxing because several fine-grid fluxes must replace the corresponding coarse-grid flux. A moving mesh must satisfy a discrete geometric conservation law, or even a constant state can drift as cells change volume. An iterative implicit solve stopped early leaves a residual that acts like a source; conservation is then exact only to solver tolerance unless the algebraic formulation enforces it more strongly.

Conservation alone is insufficient near shocks. Many conservative discretizations converge to nonphysical weak solutions unless numerical dissipation or another mechanism enforces the entropy condition described in [[Conservation laws and entropy conditions]]. Structure preservation must select the right structure, not merely the easiest invariant.

## Entropy-conservative and entropy-stable fluxes

Suppose a system $u_t+f(u)_x=0$ admits a convex entropy $\eta(u)$, entropy variables $v=\nabla_u\eta$, entropy flux $q$, and entropy potential $\psi=v^Tf-q$. A two-point flux $f^{ec}(u_L,u_R)$ is entropy conservative in Tadmor's sense when

$$
(v_R-v_L)^T f^{ec}(u_L,u_R)=\psi_R-\psi_L.
$$

This identity is the discrete counterpart of the chain rule that turns the conservation law into the entropy equality for smooth solutions. Used with compatible volume and boundary terms, it makes neighboring entropy contributions telescope.

Across shocks, equality is not the physical target. Add dissipation in entropy variables,

$$
f^{es}=f^{ec}-\frac12 D(v_R-v_L),
$$

where $D$ is positive semidefinite in the appropriate metric. Then

$$
(v_R-v_L)^Tf^{es}\le \psi_R-\psi_L,
$$

which produces a semidiscrete entropy inequality after summation. The exact matrix, boundary treatment, quadrature, and metric identities determine whether that statement actually holds. Underintegrated nonlinear terms can break the discrete product rule; split-form or flux-differencing formulations restore a compatible algebraic identity. On curved meshes, discrete metric terms must also satisfy the required identities.

An entropy-stable method does not promise pointwise positivity, monotonicity, absence of oscillations, or high accuracy. These are separate properties. It gives an estimate tied to a chosen convex entropy, under explicit assumptions. Limiters and positivity corrections may still be necessary, and they must be checked for compatibility with conservation and entropy stability.

## Compatible spaces encode differential identities

Vector-calculus identities such as

$$
\nabla\times\nabla \phi=0,
\qquad
\nabla\cdot(\nabla\times A)=0
$$

organize electromagnetism, incompressible flow, elasticity, and vorticity dynamics. A compatible or mimetic discretization builds finite-dimensional spaces and discrete operators into a sequence

$$
V_h^0\xrightarrow{\,d_0\,}V_h^1
\xrightarrow{\,d_1\,}V_h^2
\xrightarrow{\,d_2\,}V_h^3,
\qquad d_{k+1}d_k=0.
$$

In finite element exterior calculus, these spaces are discrete differential forms and the commuting projection connects the continuous de Rham complex to the discrete one. The identity $d^2=0$ then holds exactly in the mesh complex. This prevents certain spurious modes and supports stable mixed formulations because the discrete spaces reproduce the compatibility relations used by the continuum analysis.

For Maxwell problems, placing electric and magnetic fields in compatible edge- and face-based spaces respects curl and divergence structure. For incompressibility, a velocity–pressure pair must satisfy an inf–sup condition; merely differentiating a generic nodal vector field does not guarantee stable pressure or exact mass balance. Some methods yield pointwise divergence-free velocities, others only weak divergence control. Those claims should never be conflated.

The important separation is between topology and metric. Incidence matrices encode connectivity and exact cancellation. Mass matrices or discrete Hodge stars encode lengths, areas, material coefficients, and inner products. Preserving the topological identities while approximating metric information is one reason compatible formulations transfer across irregular meshes.

## Time integration can preserve or destroy the spatial law

After spatial discretization, suppose

$$
M\dot y=F(y).
$$

If a linear invariant $c^TMy$ satisfies $c^TF(y)=0$, any Runge–Kutta method preserves it in exact arithmetic because each stage increment lies in the invariant's nullspace. Nonlinear invariants require more.

For canonical Hamiltonian ordinary differential equations, a Runge–Kutta scheme is symplectic when its coefficients satisfy

$$
b_i a_{ij}+b_j a_{ji}-b_i b_j=0
$$

for all stages $i,j$. Gauss collocation methods satisfy this ordinary Runge–Kutta condition. Symplectic Euler is instead naturally a partitioned Runge–Kutta method for partitioned canonical systems and obeys the corresponding partitioned condition. These methods preserve the symplectic form, not generally the exact Hamiltonian. Backward-error analysis can associate a modified Hamiltonian with the discrete map, explaining bounded, oscillatory energy error over long intervals when analyticity, regularity, and a nonresonant sufficiently small timestep justify the expansion. This is different from a generic method whose energy error may drift systematically.

Discrete-gradient methods target energy directly. Choose a discrete gradient $\bar\nabla H(y^n,y^{n+1})$ satisfying

$$
H(y^{n+1})-H(y^n)
=\bar\nabla H(y^n,y^{n+1})^T(y^{n+1}-y^n).
$$

With a skew matrix $S$ and update

$$
\frac{y^{n+1}-y^n}{\Delta t}
=S\bar\nabla H,
$$

the energy difference is zero. For a gradient system, replacing $S$ by a negative semidefinite operator produces a discrete energy decrease. These methods can be implicit and expensive, and exact energy behavior does not by itself preserve symplectic geometry or every Casimir.

Projection methods take an unconstrained step and map it back to an invariant manifold. They can enforce mass, norm, or energy to solver tolerance but may change order, reversibility, or other invariants. Constraint solvers such as SHAKE and RATTLE are designed so the projection is compatible with mechanical geometry; arbitrary clipping is not.

## Balance laws, positivity, and steady states

A balance law

$$
u_t+\nabla\cdot f(u)=s(u,x)
$$

may have an equilibrium $u_*(x)$ satisfying $\nabla\cdot f(u_*)=s(u_*,x)$. If flux and source are discretized independently, their truncation errors need not cancel. A **well-balanced** method makes a selected family of equilibria discrete steady states. For shallow water over bottom topography, preserving lake at rest requires the pressure-flux gradient and bed-slope source to cancel when velocity vanishes and free-surface height is constant.

Well-balancing is selective. A method exactly preserving lake at rest may not preserve a moving equilibrium. The receipt for a numerical claim should name the equilibrium family, mesh assumptions, quadrature, and boundary treatment.

Positivity is another nonlinear contract. If cell averages lie in a convex admissible set, many positivity-preserving methods express a forward Euler update as a convex combination of admissible states under a CFL restriction, then extend the result to strong-stability-preserving Runge–Kutta stages. High-order polynomials can still leave the admissible set at quadrature points, so a scaling limiter contracts them toward the cell average. Conservation survives because the mean is unchanged. Accuracy survives in smooth regions when the limiter is inactive or its correction is high order.

No positivity theorem is unconditional. It depends on the numerical flux, timestep, quadrature weights, equation of state, source treatment, and an admissible cell average. Roundoff and nonlinear solver failures can violate the premise. Positivity also does not prove entropy stability or absence of unphysical local extrema.

## Variational integrators and discrete Noether laws

For a Lagrangian system with action

$$
\mathcal S[q]=\int_{t_0}^{t_1}L(q,\dot q)\,dt,
$$

Hamilton's principle sets the first variation to zero for endpoint-fixed paths. A variational integrator first defines a discrete Lagrangian $L_d(q_k,q_{k+1};h)$ approximating the action over one step, then varies the discrete action sum. The resulting discrete Euler–Lagrange equation is

$$
D_2L_d(q_{k-1},q_k)+D_1L_d(q_k,q_{k+1})=0.
$$

Because the update descends from a discrete variational principle, it is symplectic. If $L_d$ is invariant under a group action, a discrete Noether theorem supplies a preserved momentum map. Space–time variational discretizations can extend this idea to field theories, although boundaries, mesh geometry, constraints, and quadrature determine which multisymplectic identity is obtained.

The variational route is powerful when the continuum model itself has a trustworthy action. It is less direct for irreversible shocks, diffusion, inequality constraints, or empirical closure terms. Forcing and dissipation require extensions rather than pretending the dynamics are conservative.

## Preservation is not the same as correctness

A method can exactly preserve the wrong discrete quantity. It can conserve mass while transporting it at the wrong speed, preserve energy while scrambling phase, maintain positivity through excessive diffusion, or hold one equilibrium while misrepresenting perturbations around it. Structure supplies a stability mechanism or qualitative constraint; it does not replace consistency, resolution, convergence, or model validation.

There are also incompatibilities. Under the hypotheses of the Ge–Marsden result—on the relevant reduced phase space and with the required conserved momentum and Poisson structure—an exactly energy-preserving symplectic algorithm is forced to reproduce the exact flow up to a time reparameterization. This helps explain why a generic non-exact integrator should not be expected to preserve both symplectic structure and the Hamiltonian exactly for arbitrary Hamiltonians. Godunov's order barrier says a linear monotone scheme for a scalar conservation law cannot exceed first order. High-order shock methods therefore use nonlinear limiting and accept local loss of order. Choosing which property dominates is part of modeling the regime.

The discrete invariant may also be too weak. Global mass conservation does not prevent local negative density. A norm estimate may hide phase error. Entropy stability relative to one entropy does not automatically settle uniqueness for a multidimensional system. Preserving a divergence constraint does not guarantee accurate curl dynamics. Report precisely what is proved or measured.

## A verification ladder

Structure claims should be tested at several levels.

1. **Write the continuum identity.** Include boundary terms and regularity assumptions. Decide whether the target is equality, inequality, constraint, or equilibrium.
2. **Derive the discrete identity.** Show the cancellation, skew symmetry, summation-by-parts rule, convex combination, commuting diagram, or variational argument. Do not infer it from plots.
3. **Audit every algorithmic layer.** Check quadrature, curved geometry, boundary closure, mesh transfer, time integration, splitting, filtering, nonlinear iteration, linear-solver tolerance, and parallel reductions.
4. **Use manufactured or exactly solvable tests.** Verify convergence independently of preservation. A constant-state or equilibrium test isolates geometric conservation and well-balancing.
5. **Track the structure defect.** For an invariant $I_h$, record $I_h(u^n)-I_h(u^0)$ against time, resolution, timestep, and solver tolerance. For dissipation, detect every positive increment in a quantity expected to decrease.
6. **Compare a nonpreserving baseline.** Match spatial resolution, order, timestep, solver tolerance, and computational budget. Long-time advantage is meaningful only under comparable error and cost.
7. **Stress the active regime.** Use shocks for entropy, near vacuum for positivity, long integration for symplectic behavior, rough meshes for compatible operators, and perturbed equilibria for well-balanced methods.
8. **Separate theorem from floating-point behavior.** Exact-arithmetic cancellation becomes a tolerance-scaled statement in distributed arithmetic. Reproducible summation and constrained solves may matter when defects accumulate.

A useful report states both benefits and costs: extra stages, wider stencils, nonlinear solves, constrained linear algebra, reduced timestep, limiter activation, or harder implementation on adaptive meshes. The fairest conclusion is often conditional: a preserved law controls a specific failure mode, provided the discretization is sufficiently accurate to represent the dynamics that law organizes.

## Choosing the right structure

Start from the application rather than a method label.

- For shocks and compressible flow, prioritize conservation, entropy admissibility, positivity, and compatible boundary fluxes.
- For geophysical balance, add well-balancing, potential-vorticity behavior, and compatible divergence/curl operators.
- For diffusion, phase fields, and kinetics, target free-energy decay, mass conservation when appropriate, and nonnegative states.
- For wave propagation and nearly conservative mechanics, prioritize phase accuracy, symplectic or variational structure, and long-time diagnostics.
- For electromagnetism and incompressibility, preserve differential constraints through compatible spaces and stable mixed formulations.
- For multiphysics, identify which subsystem structures survive coupling; operator splitting can destroy a global invariant even if each substep preserves its own.

This choice should be recorded before discretization. Otherwise “structure preserving” becomes a retrospective marketing term rather than a falsifiable numerical contract.

## Sources

- [Arnold, Falk, and Winther, “Finite element exterior calculus: from Hodge theory to numerical stability”](https://doi.org/10.1090/S0273-0979-10-01278-4) — compatible complexes, commuting projections, and stability.
- [Hairer, Lubich, and Wanner, *Geometric Numerical Integration*, 2nd ed.](https://doi.org/10.1007/3-540-30666-8) — symplectic integration, backward-error analysis, constraints, and long-time behavior.
- [Marsden and West, “Discrete mechanics and variational integrators”](https://doi.org/10.1017/S096249290100006X) — discrete action principles and Noether structure.
- [Tadmor, “The numerical viscosity of entropy stable schemes for systems of conservation laws. I”](https://doi.org/10.1090/S0025-5718-1987-0871152-8) — entropy-conservative flux identity and entropy-stable dissipation.
- [Fisher and Carpenter, “High-order entropy stable finite difference schemes for nonlinear conservation laws: Finite domains”](https://doi.org/10.1016/j.jcp.2013.06.014) — flux differencing and summation-by-parts structure.
- [Gonzalez, “Time integration and discrete Hamiltonian systems”](https://doi.org/10.1007/BF02440162) — discrete gradients and exact energy behavior.
- [Audusse et al., “A fast and stable well-balanced scheme with hydrostatic reconstruction for shallow water flows”](https://doi.org/10.1137/S1064827503431090) — well-balancing and nonnegative water depth.
- [Zhang and Shu, “On positivity-preserving high order discontinuous Galerkin schemes for compressible Euler equations on rectangular meshes”](https://doi.org/10.1016/j.jcp.2010.10.036) — convex-state arguments and scaling limiters.
- [Ge and Marsden, “Lie–Poisson Hamilton–Jacobi theory and Lie–Poisson integrators”](https://doi.org/10.1016/0375-9601(88)90773-6) — structural obstruction motivating the distinction between symplecticity and exact energy preservation.

## Open questions

- Which structures in Andrew's surface-flow solver are mathematical invariants, which are equilibrium conditions, and which are only desirable diagnostics?
- How should one rank mass conservation, energy behavior, positivity, and geometric fidelity when no practical scheme preserves all four?
- Which structure defects predict application error better than conventional norm error for adaptive and multiphysics calculations?
