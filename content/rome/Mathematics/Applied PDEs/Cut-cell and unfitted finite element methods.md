---
title: Cut-cell and unfitted finite element methods
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, numerical-analysis, finite-elements, embedded-boundary]
---

Cut-cell and unfitted methods keep a simple background mesh while representing a physical boundary independently, trading remeshing for delicate geometry, stability, conditioning, and conservation problems near arbitrarily small intersections.

## The central bargain

Suppose a PDE is posed on a physical domain $\Omega\subset\mathbb R^d$ with boundary $\Gamma$, but the available triangulation $\mathcal T_h$ covers a simple background box. A fitted method bends element faces onto $\Gamma$. An unfitted method instead defines the active mesh

$$
\mathcal T_h^\Omega=\{T\in\mathcal T_h:T\cap\Omega\ne\varnothing\}
$$

and integrates the PDE only on the physical pieces $T\cap\Omega$. The boundary can be a level set $\phi(x)=0$, a CAD surface, a triangulated surface, or image data. This separation of geometry from approximation is valuable for moving interfaces, topology changes, complex pores, fluid–structure interaction, and parameter sweeps: the bulk mesh need not be regenerated whenever the body moves.

“Cut cell,” “embedded boundary,” “fictitious domain,” “immersed,” and “unfitted finite element” overlap but are not synonyms. Cut-cell schemes often mean conservative finite volumes on Cartesian control volumes intersected by a boundary. CutFEM usually means finite element spaces on an active background mesh, weak boundary or interface conditions, and stabilization localized near cut elements. XFEM commonly enriches a space to reproduce jumps or crack-tip singularities. The shared geometric fact is that the physical fraction of a background cell may be arbitrarily small.

That fact drives nearly every difficulty. Let

$$
\eta_T=\frac{|T\cap\Omega|}{|T|}\in(0,1]
$$

be a volume fraction. No lower bound on $\eta_T$ follows from refining a geometry-independent mesh: a boundary can pass as close to a vertex as it likes. A robust method therefore cannot quietly assume shape-regular *physical* subcells even when the background cells are shape regular.

## A model unfitted finite element formulation

Consider Poisson’s equation with Dirichlet data,

$$
-\nabla\cdot(\kappa\nabla u)=f\quad\text{in }\Omega,
\qquad u=g\quad\text{on }\Gamma,
$$

where $\kappa>0$ is bounded above and below. Let $V_h$ be continuous piecewise polynomials on the active background mesh. Because $\Gamma$ cuts elements rather than following their faces, imposing nodal values strongly is generally unavailable. A symmetric Nitsche form is

$$
\begin{aligned}
a_h(u_h,v_h)=&\int_\Omega \kappa\nabla u_h\cdot\nabla v_h\,dx
-\int_\Gamma (\kappa\nabla u_h\cdot n)v_h\,ds\\
&-\int_\Gamma (\kappa\nabla v_h\cdot n)u_h\,ds
+\int_\Gamma \frac{\gamma\kappa}{h}u_hv_h\,ds
+g_h(u_h,v_h),
\end{aligned}
$$

with the corresponding boundary terms containing $g$. Nitsche’s method is consistent: inserting the exact solution and integrating by parts recovers the PDE. Symmetry is retained, while the penalty term supplies coercivity. But on a sliver, the trace of a polynomial on $\Gamma\cap T$ need not be controlled uniformly by its energy on $\Omega\cap T$. Choosing a cut-dependent enormous $\gamma$ can restore coercivity at the price of conditioning. The CutFEM answer is normally a geometry-independent penalty combined with a *ghost penalty* $g_h$.

For piecewise linear elements, one representative ghost penalty is

$$
g_h(u_h,v_h)=\sum_{F\in\mathcal F_h^\Gamma}
\gamma_g h\int_F [\partial_{n_F}u_h][\partial_{n_F}v_h],ds,
$$

where $\mathcal F_h^\Gamma$ is a set of interior faces in a narrow band around the cut boundary. Higher-order spaces penalize suitably scaled jumps of higher normal derivatives. The term vanishes for a globally smooth polynomial extension, so it is weakly consistent. More importantly, it transfers control from a tiny physical intersection through neighboring full cells. Under assumptions on the cut-cell patches, one obtains extension estimates and stiffness condition numbers with the usual fitted-mesh scaling, independent of the precise cut location.

This is not generic artificial diffusion. It acts in the fictitious part of a narrow band and targets modes whose support in $\Omega$ is almost invisible. Alternatives include cell aggregation, basis-function removal, diagonal scaling, robust weighted Nitsche terms, local projection stabilization, and stabilized Lagrange multipliers. They make different compromises among consistency, locality, implementation, and preconditioning.

## Why small cuts cause two distinct pathologies

### Explicit-time CFL restriction

For a conservative finite-volume hyperbolic update on a physical cut volume $K=T\cap\Omega$,

$$
U_K^{n+1}=U_K^n-\frac{\Delta t}{|K|}
\sum_{f\subset\partial K}|f|\widehat F_f,
$$

the denominator is $|K|=\eta_T|T|$. If face measures remain of order $h^{d-1}$, monotonicity or stability can require roughly

$$
\Delta t\lesssim \eta_T\frac{h}{\lambda_{\max}},
$$

rather than the background-grid step $h/\lambda_{\max}$. One microscopic sliver can therefore throttle a global explicit simulation. Common remedies merge the sliver with a neighbor, redistribute its conservative update, enlarge the update stencil, use local time stepping, or treat the stiff region implicitly. Colella and collaborators’ embedded-boundary algorithm hybridizes a stable nonconservative update with the conservative one and redistributes the mass discrepancy to neighboring cells, recovering conservation while avoiding the tiny-cell step.

### Algebraic conditioning

For elliptic finite elements, a basis function may overlap $Omega$ on only a tiny region. Its physical energy and mass then become tiny, creating nearly dependent or poorly scaled algebraic modes. The smallest eigenvalue can collapse as $\eta_T\to0$ even though approximation error remains good. This is an algebraic problem, not a hyperbolic CFL problem, and its remedies differ. Ghost penalties enlarge effective support; aggregation constrains sliver degrees of freedom to well-posed interior degrees of freedom; basis removal discards functions below a tolerance; specialized multigrid and domain-decomposition preconditioners treat interface modes explicitly. A condition-number experiment must vary the boundary offset through a fixed mesh, not merely refine a favorably aligned geometry.

For transient finite elements both effects can coexist: a cut-dependent mass matrix and a stabilized stiffness matrix jointly determine the eigenvalues of $M^{-1}A$. “The elliptic solve is well conditioned” does not imply an explicit time integrator has a cut-independent stable step.

## Conservation is a design property

Finite-volume cut-cell schemes begin with control-volume balance, so interior numerical fluxes cancel pairwise and geometric boundary fluxes account for the remainder. Their central challenge is modifying the tiny-cell update without destroying that telescoping identity. Cell merging preserves balance over aggregates but can complicate reconstruction and parallel ownership. Flux or state redistribution can retain global conservation, yet positivity, local conservation, and high-order accuracy require careful weights and neighborhoods.

Standard continuous Galerkin CutFEM is globally conservative only in the weak variational sense; it does not automatically give an exact balance on each cut cell. If local mass conservation matters—for shocks, species transport, porous flow, or multiphase coupling—one should choose a locally conservative formulation such as discontinuous Galerkin, mixed $H(\mathrm{div})$ elements, conservative flux reconstruction, or embedded finite volumes. Nitsche terms and ghost penalties must then be audited as numerical boundary and interelement fluxes. A small global residual can conceal damaging local leakage.

Moving geometry adds the geometric conservation law. Even a constant solution should remain constant as cells change volume. In space-time form this follows when the swept space-time control volumes and fluxes close exactly. In a time-sliced implementation it requires consistent updates of volume fractions, apertures, boundary velocity, and remapping. Geometry and PDE quadrature cannot be evolved independently and expected to conserve automatically.

## Geometry and quadrature are part of the method

Every cut element requires integrals over $T\cap\Omega$, $Gamma\cap T$, or both. A typical pipeline reconstructs the zero set of $phi$, classifies cells, clips each cut cell into subcells, triangulates the physical portion, and applies ordinary quadrature on those subcells. Moment-fitting instead chooses points and weights that integrate a polynomial space exactly. Recursive subdivision is simpler but can be expensive. Dimension-reduction formulas transform volume moments into surface moments. High-order isoparametric unfitted methods curve an approximate interface and map it toward the true geometry.

The relevant accuracy is not merely visual. If a degree-$p$ finite element method targets $O(h^{p+1})$ solution error, geometry and quadrature errors must be smaller than, or balanced with, that target. A piecewise-planar boundary can cap convergence for high-order elements. Normal errors contaminate Neumann and traction data; curvature errors are especially dangerous in surface-tension forces. Negative moment-fitting weights can harm positivity. Extremely small subcells can make quadrature generation numerically fragile even when the weak formulation is stable.

Useful implementation invariants include: subcell volumes sum to the reconstructed physical volume; outward normals have consistent orientation; interface facets close without gaps; quadrature integrates constants and low-degree monomials to tolerance; and the same geometric representation is used by volume, boundary, and stabilization terms. Near vertices or tangencies, classification must use deterministic tolerances. Otherwise a nearly zero level-set value can make topology flicker under roundoff.

## Interfaces and discontinuous coefficients

For an internal interface $\Gamma$ separating $Omega_1$ and $Omega_2$, a common model imposes

$$
[u]=0,
\qquad [\kappa\nabla u\cdot n]=q
$$

with possibly large coefficient contrast. The approximation often carries separate traces $u_{h,1}$ and $u_{h,2}$ on overlapping active meshes. Weighted Nitsche averages couple them, while phase-wise ghost penalties extend each field through its narrow fictitious band. Weights should reflect both material coefficients and cut geometry; naive arithmetic averages can lose robustness for large contrast. Pressure in two-phase flow may jump, while velocity is continuous with a traction jump, so the discrete space must represent the correct interface regularity rather than smoothing it away.

Stabilization must respect the PDE’s structure. In incompressible flow one needs a stable velocity–pressure pair or pressure stabilization in addition to cut stabilization. In elasticity, nearly incompressible locking is separate from sliver conditioning. For advection-dominated transport, ghost penalties do not replace upwinding or streamline stabilization. “Unfitted” specifies the geometric relationship, not a complete discretization.

## Moving boundaries

Unfitted meshes are attractive precisely because $\Gamma(t)$ can cross the background mesh without remeshing. Yet degrees of freedom enter and leave the active mesh. A field at $t^n$ may not be defined on all of $\Omega(t^{n+1})$. One must therefore extend the old discrete solution into a neighborhood, project or remap between active spaces, or use a space-time slab formulation. Ghost stabilization can provide the controlled extension needed by time stepping, but the band must cover the interface displacement; a practical assumption is often that the boundary moves at most $O(h)$ per step, unless a wider band is activated.

In an Eulerian domain with boundary velocity $w$, transport relative to the boundary involves $(b-w)\cdot n$. Boundary conditions must distinguish inflow from outflow in that relative frame. In fluid–structure interaction, weak traction transfer should satisfy action–reaction and avoid artificial energy injection. In two-phase flow, level-set advection, reinitialization, curvature estimation, and the flow solve form a coupled error budget. A sharp PDE solve cannot repair lost volume caused by an inconsistent interface tracker; [[Surface conservation laws and level-set geometry]] supplies the geometric identities behind these balances.

## Verification ladder

A convincing unfitted implementation should pass tests designed to expose cut sensitivity, not only standard convergence plots.

1. **Geometry tests.** For circles, spheres, and planar cuts, compare volume, area, normals, and moments against exact values. Sweep the interface continuously across vertices and edges.
2. **Patch tests.** Confirm exact or expected reproduction of constants and affine fields, including weak boundary conditions and coefficient jumps.
3. **Manufactured solutions.** Use smooth $u$ to verify $L^2$, energy, boundary-flux, and—where relevant—pressure rates. Separate geometry order from polynomial order.
4. **Cut-position robustness.** On a fixed mesh translate or rotate the boundary through many offsets. Plot error, coercivity estimates, iteration counts, condition number, and admissible explicit step against the smallest $\eta_T$.
5. **Conservation audits.** Track global mass, cell or aggregate residuals, boundary flux, and redistribution defects. For moving domains, preserve a constant state and check the discrete geometric conservation law.
6. **Stress tests.** Include thin gaps, nearly tangent cuts, large coefficient contrast, high Reynolds or Péclet number, topology change, and interface motion across multiple cells.
7. **Solver tests.** Report iterations as both $h$ and cut position vary. A direct solve can hide conditioning that defeats production-scale iterative solvers.

The exact solution used in a manufactured test must be extended smoothly to the active neighborhood when the method or analysis assumes an extension. Conversely, error norms should normally be measured on the physical domain; including fictitious regions can reward an extension that has no physical meaning.

## Applied bridge: flow around a moving valve

Consider incompressible flow through a device whose valve translates and rotates. A fitted arbitrary-Lagrangian–Eulerian mesh can give excellent boundary layers, but repeated deformation risks tangling and remeshing. An unfitted workflow holds a background mesh fixed, represents the valve by a level set or surface mesh, activates intersected cells, weakly imposes no-slip velocity with Nitsche terms, and stabilizes velocity and pressure extensions in the cut band.

This removes bulk remeshing, not modeling work. Accurate valve forces require reliable surface quadrature and normals. Narrow clearances may need adaptive refinement because a coarse background mesh can represent geometry but not resolve lubrication scales. The pressure space must permit physically correct jumps if multiple fluids are present. Time transfer must define yesterday’s velocity where today’s fluid has appeared. Force and mass balances should be checked independently. The method wins when geometric flexibility outweighs the extra cut integration and stabilization machinery—not simply because its mesh looks simpler.

## Limitations and selection criteria

Unfitted methods are not universally cheaper. Cut-cell construction, neighbor searches, variable sparsity patterns, quadrature, stabilization, and specialized preconditioners complicate software and accelerator execution. A background mesh can waste degrees of freedom outside a thin or sparse domain. Boundary-layer anisotropy is easier to align in a fitted mesh. CAD defects that a mesher would expose may instead appear as ambiguous clipping topology. High-order curved geometry remains demanding.

Choose the family by the invariant that matters most. For shock-dominated conservation laws, exact flux balance, positivity, and an explicit-step remedy favor conservative embedded finite volumes. For elliptic problems on complex or evolving geometry, Nitsche CutFEM with a proven extension stabilization is natural. For discontinuities or cracks, enriched or doubled spaces may be essential. For local conservation, use DG, mixed, or reconstructed fluxes. For extreme geometry motion, space-time methods or robust remapping may dominate. In every case, demand estimates and experiments uniform in cut position; a method that converges only when the interface misses vertices by a comfortable margin has not solved the defining problem.

## Sources

- Erik Burman and Peter Hansbo, [“Fictitious domain finite element methods using cut elements: I. A stabilized Lagrange multiplier method”](https://doi.org/10.1016/j.cma.2010.05.011), *Computer Methods in Applied Mechanics and Engineering* 199 (2010), 2680–2686.
- Erik Burman and Peter Hansbo, [“Fictitious domain finite element methods using cut elements: II. A stabilized Nitsche method”](https://doi.org/10.1016/j.apnum.2011.10.008), *Applied Numerical Mathematics* 62 (2012), 328–341.
- Erik Burman, Susanne Claus, Peter Hansbo, Mats G. Larson, and André Massing, [“CutFEM: Discretizing geometry and partial differential equations”](https://doi.org/10.1002/nme.4823), *International Journal for Numerical Methods in Engineering* 104 (2015), 472–501.
- Anita Hansbo and Peter Hansbo, [“An unfitted finite element method, based on Nitsche’s method, for elliptic interface problems”](https://doi.org/10.1016/S0045-7825(02)00524-8), *Computer Methods in Applied Mechanics and Engineering* 191 (2002), 5537–5552.
- Erik Burman, Susanne Claus, and André Massing, [“A stabilized cut finite element method for the three field Stokes problem”](https://doi.org/10.1137/140983574), *SIAM Journal on Scientific Computing* 37 (2015), A1705–A1726.
- Phillip Colella, Daniel T. Graves, Benjamin J. Keen, and David Modiano, [“A Cartesian grid embedded boundary method for hyperbolic conservation laws”](https://www.osti.gov/biblio/841320), *Journal of Computational Physics* 211 (2006), 347–366.
- Andrew Giuliani et al., [“A weighted state redistribution algorithm for embedded boundary grids”](https://doi.org/10.1016/j.jcp.2022.111305), *Journal of Computational Physics* 464 (2022), 111305.

## Open questions

- Which stabilization and preconditioner combinations remain cut-independent for high-order, high-contrast, multiphysics systems on GPUs?
- How can high-order conservative quadrature retain positive weights through topology changes and nearly tangent cuts?
- When do space-time cut methods outperform extension-and-remap schemes for rapidly moving boundaries?
- Can error estimators cleanly separate geometry, quadrature, stabilization, and PDE discretization errors on adaptive unfitted meshes?
