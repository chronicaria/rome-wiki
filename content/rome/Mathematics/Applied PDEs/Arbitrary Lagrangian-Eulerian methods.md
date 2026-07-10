---
title: Arbitrary Lagrangian-Eulerian methods
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, numerical-methods, moving-meshes, ale]
---
Arbitrary Lagrangian-Eulerian methods move the computational mesh independently of the material, trading advection error against mesh distortion while requiring exact geometric bookkeeping.

Up: [[Applied PDE research frontier 2026]]

## Three descriptions of motion

An Eulerian method observes a fixed region of space. A Lagrangian method attaches coordinates to material particles. Arbitrary Lagrangian-Eulerian (ALE) coordinates interpolate between them: the mesh has a chosen velocity $w$, while the material has velocity $u$. This freedom is valuable when a boundary moves, an interface should remain sharp, or a fixed mesh would advect a structure through many cells. It is also dangerous because a numerical method can confuse physical transport with motion of its coordinates.

Let a reference domain $\widehat\Omega$ be mapped into the physical domain by
$$
x=\mathcal A(\chi,t),\qquad F_A=\nabla_\chi\mathcal A,\qquad J=\det F_A>0.
$$
The mesh velocity is $w(x,t)=\partial_t\mathcal A(\chi,t)$ evaluated at $\chi=\mathcal A^{-1}(x,t)$. For a scalar field $q(x,t)$, the derivative at fixed reference coordinate is
$$
\left.\partial_t q\right|_\chi
=\left.\partial_t q\right|_x+w\cdot\nabla q.
$$
Hence the material derivative becomes
$$
\frac{Dq}{Dt}=\left.\partial_t q\right|_\chi+(u-w)\cdot\nabla q.
$$
The relative velocity $u-w$, not $u$, advects information through the moving mesh. Setting $w=0$ recovers Eulerian coordinates; setting $w=u$ makes material advection vanish locally and recovers the Lagrangian limit. ALE is not a new physical model. It is a time-dependent coordinate description whose discrete geometry must remain consistent with the physical conservation law.

## Conservation on a moving control volume

For a conservation law
$$
\partial_t U+\nabla\cdot F(U)=S(U),
$$
Reynolds' transport theorem on a control volume $K(t)$ moving with boundary velocity $w$ gives
$$
\frac{d}{dt}\int_{K(t)}U\,dx
+\int_{\partial K(t)}\big(F(U)-U\otimes w\big)n\,ds
=\int_{K(t)}S(U)\,dx.
$$
For a scalar conserved quantity, $U\otimes w$ is simply $Uw$. The mesh carries conserved content through a face even when physical flux is zero, so the ALE numerical flux must approximate $F(U)n-U(w\cdot n)$. This formula is the safest starting point for a finite-volume implementation: neighboring cells share the same moving face and must use equal-and-opposite integrated fluxes.

In reference coordinates, writing $\widehat U=U\circ\mathcal A$, $\widehat F=F(U)\circ\mathcal A$, $\widehat S=S(U)\circ\mathcal A$, and $\widehat w=w\circ\mathcal A$, the Piola transformation gives a corresponding strong form,
$$
\partial_t(J\widehat U)
+\nabla_\chi\cdot\left[J F_A^{-1}\big(\widehat F-\widehat U\otimes\widehat w\big)\right]
=J\widehat S.
$$
The formula is compact, but it should not be implemented by independently approximating every factor. The time evolution of $J$, face metrics, and mesh fluxes must be compatible. Otherwise even a constant physical state can acquire a spurious time derivative.

For compressible flow, a face Riemann problem is naturally posed in the moving-face frame. In one dimension, the ALE flux is $F(U)-wU$; its characteristic speeds shift from the physical eigenvalues $\lambda_k$ to $\lambda_k-w$. A face moving with a contact can reduce numerical diffusion of that contact. A poor mesh velocity can instead compress cells, worsen conditioning, or drive the relative wave speed and timestep restriction in an unhelpful direction.

## The geometric conservation law

Geometry satisfies its own identity. Differentiating the determinant at fixed reference coordinate yields
$$
\left.\partial_t J\right|_\chi=J\,(\nabla_x\cdot w)\circ\mathcal A.
$$
Equivalently, a moving control volume obeys
$$
\frac{d}{dt}|K(t)|=\int_{\partial K(t)}w\cdot n\,ds.
$$
This is the geometric, or space, conservation law (GCL). It contains no fluid physics. It states that the volume change computed from the mesh coordinates equals the swept volume computed from moving faces.

Its discrete version is essential. Insert a constant state $U_0$ with zero source into an ALE finite-volume update. Consistency makes the physical face fluxes cancel around a closed cell, leaving
$$
U_0\left(|K^{n+1}|-|K^n|-\sum_f \mathcal V_f^{n\to n+1}\right),
$$
where $\mathcal V_f^{n\to n+1}$ is the signed space-time volume swept by face $f$. A uniform state is preserved only if the bracket vanishes to the accuracy—and preferably to machine precision—of the update. Recomputing the new cell volume from vertices while estimating face velocity with an unrelated temporal quadrature can violate that identity.

The GCL is necessary bookkeeping, not a complete accuracy theorem. It does not guarantee stability, conservation of the physical flux, correct boundary work, or high-order temporal accuracy. A scheme can preserve constants and still damp waves, mishandle shocks, or use inconsistent stage geometries. Conversely, the precise role of a discrete GCL depends on the spatial and temporal formulation; finite-volume prescriptions do not transfer mechanically to every finite-element method. The robust principle is to derive geometry and state evolution from the same space-time or stage-level variational identity.

## Choosing and updating the mesh

The word “arbitrary” means designed, not unconstrained. Common choices include:

1. **Boundary-following motion.** Prescribe $w$ on a moving interface and extend it smoothly into the interior. This keeps the boundary fitted and simplifies traction or kinematic conditions.
2. **Elastic or harmonic smoothing.** Treat mesh displacement as the solution of an elliptic problem. A linear-elastic analogy can make small elements stiffer; harmonic extension is simpler but may allow severe skewness.
3. **Feature tracking.** Choose $w$ to follow shocks, contacts, fronts, or solution monitors. This reduces advection across cells but couples mesh quality to noisy or rapidly changing indicators.
4. **Lagrange-plus-remap.** First move with the material, then remap the solution to a repaired mesh. The remap must conserve mass, momentum, and energy as appropriate and must control interpolation diffusion and admissibility.
5. **Direct space-time ALE.** Integrate the conservation law over a space-time control volume, including topology changes or nonconforming faces. Correct orientation and closure of that volume can enforce the GCL by construction.

No mesh motion prevents all tangling. Monitor $J$, minimum angles, aspect ratios, face inversion, and the conditioning of element maps. When $J$ approaches zero, the coordinate transformation ceases to be valid. Local smoothing, reconnection, remeshing, or remapping is then part of the algorithm rather than a cosmetic postprocess.

Mesh velocity should also respect the timestep controller. For a hyperbolic finite-volume scheme, a typical stability indicator is based on relative characteristic speeds,
$$
\Delta t\lesssim C\min_K\frac{h_K}{\max_k|\lambda_k(u)-w|}.
$$
Diffusion, reactions, mesh deformation, and small cut cells add other restrictions. Matching $w$ to $u$ may reduce advective stiffness yet create thin or inverted cells in shear. The useful choice minimizes total error and cost subject to mesh-quality constraints, not merely the local relative speed.

## Boundaries, interfaces, and fluid–structure interaction

At a material interface, the normal mesh velocity often matches the interface normal velocity so the fitted mesh does not leak across it. Tangential mesh motion remains a design choice because it changes parameterization without changing the geometric interface. At a no-slip moving wall, the fluid velocity equals the wall velocity, but interior mesh nodes need not move like the fluid.

In fluid–structure interaction, the structure supplies an interface displacement and the fluid supplies traction. An ALE fluid mesh extends the interface motion into the fluid domain. The coupled method must satisfy more than pointwise continuity: time levels, interface work, and transfer operators must agree. If force and velocity transfers are not dual in the discrete work pairing, the interface can create or destroy energy. Added-mass instability can still occur in partitioned coupling even when the ALE mapping and GCL are exact; that instability belongs to the coupling algorithm, not to coordinate motion alone.

Remeshing creates another interface—between old and new discrete spaces. A nodal interpolation may be accurate for smooth fields but is generally not locally conservative. Conservative remap integrates overlaps or reconstructs flux-consistent cell content. For Euler flow it must also keep density and internal pressure admissible; for multiphase flow it must control material fractions. This connects ALE to [[Positivity-preserving discretizations]], [[Conservation laws and entropy conditions]], and [[Operator splitting for multiphysics PDEs]].

## Finite-element and finite-volume viewpoints

In finite volumes, the integral moving-control-volume law makes local conservation explicit. Space-time face geometry, numerical Riemann fluxes, reconstruction, limiting, and remap determine the method. The central tests are flux cancellation, swept-volume closure, and correct relative wave speeds.

In finite elements, basis functions themselves move through $\mathcal A$. Differentiating a semidiscrete expansion therefore changes mass, convection, and sometimes stabilization terms. A continuous Galerkin method is not automatically locally conservative, while a discontinuous Galerkin method uses moving-face numerical fluxes much like finite volumes. Stabilization parameters should depend on $u-w$ where they represent advective transport. Quadrature and time integration must treat the evolving mass matrix consistently.

An ALE weak form can be derived either by pulling the PDE to $\widehat\Omega$ or by differentiating integrals on $\Omega(t)$. Both are valid if every Jacobian, test-function derivative, and boundary term is retained. Mixing a reference-domain mass term with a physical-domain convection term is a common source of missing GCL contributions. Automatic differentiation does not repair a mathematically inconsistent pullback; it only differentiates the implemented inconsistency accurately.

## Verification ladder

ALE verification should isolate geometry before testing difficult physics.

1. **Map identity.** For a prescribed analytic $\mathcal A$, compare computed $J$, inverse metrics, normals, and $w$ with exact values. Check $J>0$ throughout each quadrature rule, not only at vertices.
2. **Swept-volume closure.** For every cell and timestep, compare its volume change with the signed sum of swept face volumes. Repeat at every Runge–Kutta stage if the state update uses stage geometry.
3. **Free-stream preservation.** Advance a constant state under a strongly deforming but periodic or compatible mesh. Any change exposes a GCL, boundary, quadrature, or metric inconsistency.
4. **Geometric convergence.** Move a smooth field with a known mapping but no physical deformation. Refine space and time separately; a fixed ratio can hide whether geometry or physics limits the order.
5. **Relative-advection test.** Solve linear advection with prescribed $u$ and several mesh velocities: $w=0$, $w=u$, and a nonuniform $w$. The transformed solutions should agree after mapping to physical space.
6. **Conservation audit.** Sum cell content and all boundary fluxes. Across internal faces, use the same stored integrated flux with opposite signs. Include remap and topology-change transfers.
7. **Manufactured moving-domain solution.** Manufacture source and boundary data after choosing both $q(x,t)$ and $\mathcal A$. This exercises Jacobians, boundary velocities, and temporal geometry together.
8. **Mesh-independence study.** Repeat the same physical problem with distinct admissible mesh motions. Differences should converge away; persistent dependence signals coordinate-induced error.
9. **Coupled energy check.** For fluid–structure problems, track fluid energy, structural energy, interface work, dissipation, and solver tolerances. GCL residual alone cannot detect nonconservative coupling.

Report geometry errors separately from solution errors. A tiny free-stream residual does not justify claiming high-order accuracy, and a convergent physical norm does not prove local conservation. Useful ALE evidence includes the minimum Jacobian, maximum skewness, GCL residual, conservation defect, remap defect, nonlinear-solver tolerance, and wall-clock cost alongside the usual solution norm.

## Failure modes and design choices

Mesh motion can reduce one error while introducing another. Lagrangian tracking sharpens material interfaces but accumulates distortion under rotation or shear. Frequent remapping repairs geometry but adds diffusion and may damage extrema. Moving meshes alter sparsity values, preconditioners, quadrature, and parallel load balance. Topology changes complicate history-dependent variables and adjoints.

The separation between physical and coordinate motion is especially important in inverse problems. If mesh motion depends nonsmoothly on parameters—through remeshing triggers, contact changes, or limiter activation—the computed objective may be continuous while its derivative is not. [[Differentiable PDE solvers]] therefore need the mesh update, GCL construction, remap, and event logic inside the derivative audit.

The practical decision is not “Eulerian or Lagrangian?” but which mesh velocity, geometry update, and remap policy preserve the contracts that matter. A credible ALE method states those choices explicitly and demonstrates that constant preservation, conservation, accuracy, admissibility, and mesh validity survive them.

An implementation should therefore expose geometry as testable data rather than bury it inside the residual assembly. Store or reconstruct each stage's cell volumes, oriented face areas, face velocities, and swept volumes from one declared convention. Give the state update and any remap access to those same quantities. This makes failures localizable: a free-stream defect can be traced to a particular cell and stage; a global conservation defect to a mismatched interior flux or remap transfer; a loss of accuracy to spatial reconstruction, temporal quadrature, or geometry interpolation. It also prevents a subtle reproducibility problem in which two runs use nominally identical node trajectories but different face-velocity approximations.

Solver tolerances belong in that ledger. On a deforming mesh, an implicit nonlinear residual mixes physical and geometric terms whose scales change with cell volume. A fixed absolute tolerance can become permissive in small cells or unnecessarily strict in large ones. Scale residuals by conserved content and compare iteration error with the requested discretization error. When the mesh update itself solves an elliptic problem, report its tolerance too: an incompletely converged mesh field changes $w$, and therefore changes the PDE operator being advanced.

## Why it matters

ALE methods are the connective tissue between moving-boundary PDEs, fitted-interface accuracy, conservative CFD, and fluid–structure interaction. Their main lesson is broader: changing coordinates is harmless analytically only when the discrete metric identities evolve in lockstep with the discrete state.

## Sources

- T. J. R. Hughes, W. K. Liu, and T. K. Zimmermann, [“Lagrangian-Eulerian finite element formulation for incompressible viscous flows”](https://doi.org/10.1016/0045-7825(81)90049-9), *Computer Methods in Applied Mechanics and Engineering* 29 (1981), 329–349 — foundational ALE finite-element formulation.
- P. D. Thomas and C. K. Lombard, [“Geometric Conservation Law and Its Application to Flow Computations on Moving Grids”](https://doi.org/10.2514/3.61273), *AIAA Journal* 17 (1979), 1030–1037 — foundational geometric-conservation-law treatment.
- C. Farhat, P. Geuzaine, and C. Grandmont, [“The Discrete Geometric Conservation Law and the Nonlinear Stability of ALE Schemes for the Solution of Flow Problems on Moving Grids”](https://doi.org/10.1006/jcph.2001.6932), *Journal of Computational Physics* 174 (2001), 669–694 — discrete GCL and stability analysis.
- J. Donea, A. Huerta, J.-P. Ponthot, and A. Rodríguez-Ferran, [“Arbitrary Lagrangian–Eulerian Methods”](https://doi.org/10.1002/0470091355.ecm009), in *Encyclopedia of Computational Mechanics* (2004) — broad formulation and mesh-update reference.
- M. Lesoinne and C. Farhat, [“Geometric conservation laws for flow problems with moving boundaries and deformable meshes, and their impact on aeroelastic computations”](https://doi.org/10.1016/S0045-7825(96)01216-6), *Computer Methods in Applied Mechanics and Engineering* 134 (1996), 71–90 — moving-boundary conservation and aeroelastic context.
- W. Boscheri and M. Dumbser, [“Arbitrary-Lagrangian-Eulerian One-Step WENO Finite Volume Schemes on Unstructured Triangular Meshes”](https://doi.org/10.4208/cicp.170512.010313a), *Communications in Computational Physics* 14 (2013), 1174–1206 — a high-order space-time ALE finite-volume construction.

## Open questions

- Which stage-consistent GCL construction best matches high-order implicit and IMEX integrators on strongly deforming unstructured meshes?
- How should mesh-quality objectives trade interface resolution against adjoint smoothness and remap frequency?
- Can conservative, positivity-preserving remapping remain inexpensive when topology changes and many materials meet?
