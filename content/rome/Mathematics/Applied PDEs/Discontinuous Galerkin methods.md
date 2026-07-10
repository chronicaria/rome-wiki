---
title: Discontinuous Galerkin methods
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, numerical-analysis, discontinuous-galerkin, finite-elements]
---

Discontinuous Galerkin (DG) methods approximate a PDE by independent elementwise polynomials and make neighboring elements communicate only through numerical fluxes, combining finite-element weak forms with finite-volume-style conservation.

Up: [[Applied PDE research frontier 2026]]

Related: [[Finite element methods]] · [[Finite-volume methods for conservation laws]] · [[Weak solutions and why shocks require them]] · [[Consistency stability and convergence]]

## The organizing idea

A continuous Galerkin finite-element space forces adjacent elements to share nodal values. A DG space removes that constraint. For a mesh $\mathcal T_h$ of elements $K$ and polynomial degree $p$,

$$
V_h^p=\{v\in L^2(\Omega):v|_K\in \mathbb P_p(K)\quad\forall K\in\mathcal T_h\}.
$$

Thus a face has two traces, $u_h^-$ from the current element and $u_h^+$ from its neighbor. This apparent defect is DG's central design freedom: a **numerical flux** chooses how those traces interact. The volume calculation is local; all coupling is carried by faces.

DG therefore sits between two familiar methods. Like [[Finite element methods]], it starts from a variational statement and supports high-order polynomials, unstructured meshes, and geometric mappings. Like [[Finite-volume methods for conservation laws]], it uses one shared face flux, so flux leaving one element enters the next with the opposite sign. Unlike a classical finite-volume method, it evolves all polynomial moments rather than only a cell average.

This architecture yields element-local mass matrices, compact communication, flexible $h$- and $p$-adaptivity, and exact elementwise conservation. It also creates more degrees of freedom than continuous elements and requires deliberate control of face jumps.

## Element-local weak form for a conservation law

Consider the scalar conservation law

$$
\partial_t u+\nabla\cdot f(u)=0
$$

on $\Omega$. Choose a test function $v_h\in V_h^p$, restrict to one element $K$, multiply, and integrate:

$$
\int_K \partial_t u_h\,v_h\,dx+\int_K \nabla\cdot f(u_h)\,v_h\,dx=0.
$$

Integration by parts moves the spatial derivative onto the test function:

$$
\int_K \partial_t u_h\,v_h\,dx
-\int_K f(u_h)\cdot\nabla v_h\,dx
+\int_{\partial K} f(u_h)\cdot n_K\,v_h\,ds=0.
$$

The boundary trace is ambiguous because $u_h$ is discontinuous. DG replaces the physical normal flux by a single-valued numerical flux $\widehat f(u_h^-,u_h^+;n_K)$:

$$
\boxed{
\int_K \partial_t u_h\,v_h\,dx
-\int_K f(u_h)\cdot\nabla v_h\,dx
+\int_{\partial K}\widehat f(u_h^-,u_h^+;n_K)v_h^-\,ds=0.}
$$

This is the **weak form**. Integrating the volume term by parts a second time gives a strong-form variant,

$$
\int_K (\partial_tu_h+\nabla\cdot f(u_h))v_h\,dx
+\int_{\partial K}\bigl(\widehat f-f(u_h^-)\cdot n_K\bigr)v_h^-\,ds=0.
$$

With exact integration these are algebraically equivalent. Under quadrature, nonlinear aliasing can make them behave differently; split forms or overintegration are then stability tools, not cosmetic rewrites.

Expand $u_h|_K=\sum_{j=1}^{N_p}U_{Kj}(t)\phi_{Kj}(x)$. Testing with each basis function produces

$$
M_K\dot U_K=R_K(U_K,U_{K^+}),
$$

where $(M_K)_{ij}=\int_K\phi_{Ki}\phi_{Kj}\,dx$. The mass matrix is block diagonal across elements. An explicit method can invert or apply each $M_K$ independently; only residual evaluation needs neighbor traces.

### Conservation is visible in the constant test

Set $v_h=1$ on $K$. The volume derivative vanishes, leaving

$$
\frac{d}{dt}\int_Ku_h\,dx=-\int_{\partial K}\widehat f\,ds.
$$

If the flux is conservative,

$$
\widehat f(a,b;n)=-\widehat f(b,a;-n),
$$

interior-face contributions cancel when element balances are summed. Only physical-boundary flux remains. This is exact discrete local and global conservation, independent of polynomial degree.

## Numerical fluxes encode propagation and dissipation

A usable hyperbolic flux should at least be:

1. **consistent:** $\widehat f(u,u;n)=f(u)\cdot n$;
2. **conservative:** the two orientations give opposite fluxes;
3. sufficiently stable for the PDE and chosen norm or entropy.

For linear advection, $\partial_tu+\nabla\cdot(\beta u)=0$, the upwind flux is

$$
\widehat f(u^-,u^+;n)=(\beta\cdot n)^+u^-+(\beta\cdot n)^-u^+,
\qquad a^\pm=\frac{a\pm|a|}{2}.
$$

Information is taken from the inflow side of the face. Equivalently,

$$
\widehat f=\beta\cdot n\,\{u\}+\frac{|\beta\cdot n|}{2}(u^--u^+),
$$

where $\{u\}=(u^-+u^+)/2$. The second term damps jumps. A central flux omits it and can conserve an $L^2$ energy in ideal settings, but supplies no interface damping; unresolved modes, boundaries, and nonlinear aliasing then need other control.

For nonlinear systems, approximate Riemann solvers such as local Lax–Friedrichs/Rusanov use

$$
\widehat f=\frac12\bigl(f(u^-)+f(u^+)\bigr)\cdot n
-\frac{\alpha}{2}(u^+-u^-),
$$

with $\alpha$ bounding the normal characteristic speed. Roe, HLL, and HLLC fluxes resolve different wave structures. More dissipation is often more robust but smears contacts and small scales; less dissipation improves resolution but tightens the burden on limiting, entropy stability, quadrature, and time stepping.

Physical boundary conditions enter through an exterior trace or boundary numerical flux. At an advection outflow, the interior state supplies the flux; at inflow, prescribed data supplies the incoming characteristic information. For systems, imposing every component at every boundary is generally wrong: only incoming characteristics are freely specifiable.

## An energy estimate explains stability

Take one-dimensional periodic advection $u_t+a u_x=0$ with $a>0$ and upwind flux $\widehat f=a u^-$. Test the semidiscrete weak form by $v_h=u_h$. Summing elements, integrating the volume term, and pairing the two traces at every interface gives

$$
\frac12\frac{d}{dt}\|u_h\|_{L^2(\Omega)}^2
+\frac{a}{2}\sum_{F\in\mathcal F_h}\int_F [u_h]^2\,ds=0,
$$

where, in one dimension, $[u_h]=u_h^+-u_h^-$. Hence the discrete energy cannot grow; dissipation is exactly proportional to squared jumps. With a central flux the jump term is zero, giving semidiscrete energy conservation rather than damping.

This calculation exposes the general stability recipe: choose a test function tied to an energy or entropy, sum element identities, and demand that the face terms have the correct sign. For nonlinear conservation laws, an entropy-stable DG method uses entropy variables and fluxes satisfying a discrete entropy inequality. A consistent conservative flux alone does not guarantee entropy stability or prevent oscillations near shocks.

Semidiscrete stability also does not settle time integration. Explicit Runge–Kutta schemes obey a CFL restriction of approximate form

$$
\Delta t\lesssim C\frac{h}{(2p+1)\lambda_{\max}}
$$

for hyperbolic problems, with constants depending on element geometry, basis, quadrature, and scheme. Diffusion treated explicitly is more restrictive, roughly $\Delta t=O(h^2/p^4)$ in common settings. These are scaling guides, not universal constants; the actual spectral radius should control implementation choices. Strong-stability-preserving Runge–Kutta methods preserve certain forward-Euler stability properties under their stated step restriction.

## Diffusion needs more than an advective Riemann flux

For Poisson's equation $-\Delta u=f$, discontinuity makes the normal derivative and the solution trace ambiguous. Define on an interior face $F=K^-\cap K^+$ the scalar jump $[u]=u^- -u^+$ and average $\{\nabla u\}=(\nabla u^-+\nabla u^+)/2$ after fixing a face normal $n$ from $K^-$ to $K^+$. The symmetric interior penalty (SIPG) bilinear form is

$$
\begin{aligned}
a_h(u_h,v_h)=&\sum_K\int_K\nabla u_h\cdot\nabla v_h\,dx\\
&-\sum_F\int_F\{\nabla u_h\}\cdot n\,[v_h],ds
-\sum_F\int_F\{\nabla v_h\}\cdot n\,[u_h],ds\\
&+\sum_F\int_F\frac{\sigma_F}{h_F}[u_h][v_h],ds.
\end{aligned}
$$

The first face term restores the integration-by-parts flux; the second makes the operator symmetric and adjoint consistent; the penalty suppresses uncontrolled jumps. For sufficiently large $\sigma_F$, normally scaled with $p^2$ and adjusted for shape regularity and coefficient contrasts, the form is coercive in a DG energy norm such as

$$
\|v\|_{DG}^2=\sum_K\|\nabla v\|_{L^2(K)}^2+
\sum_F\frac{\sigma_F}{h_F}\|[v]\|_{L^2(F)}^2.
$$

Too small a penalty can make the discrete operator unstable or singular; excessively large penalties worsen conditioning and approach an overconstrained continuous limit. Boundary faces require corresponding consistency, symmetry, and penalty terms for weak Dirichlet enforcement.

An alternative is local DG (LDG): rewrite diffusion as a first-order system, for example $q=\nabla u$ and $u_t-\nabla\cdot q=0$, then select numerical traces for both $u$ and $q$. This retains local first-order machinery and extends naturally to convection–diffusion systems, but different alternating or central trace choices affect stability, sparsity, and accuracy.

## Accuracy and what happens near discontinuities

For a smooth solution, degree-$p$ DG approximation commonly achieves $L^2$ error of order $h^{p+1}$ under the assumptions appropriate to the operator, flux, mesh, and regularity. This should never be quoted without those qualifiers: elliptic energy-norm rates, hyperbolic estimates, nonsmooth domains, variable coefficients, and underintegrated nonlinear systems differ. Some quantities—especially downwind values or suitable functionals—can superconverge and support postprocessing.

High order does not make a polynomial approximation monotone. Near a shock, an unlimited DG polynomial develops Gibbs oscillations. Stability of a norm is not the same as positivity, a maximum principle, or entropy admissibility. Practical shock-capturing systems therefore add one or more of:

- troubled-cell detection followed by slope or moment limiting;
- WENO-type reconstruction within selected elements;
- positivity-preserving scaling for density, pressure, or concentration;
- artificial viscosity localized by a smoothness sensor;
- entropy-stable volume and surface discretizations.

Every device trades sharp smooth-region accuracy against robustness. A convincing computation reports the sensor, limiter, quadrature, flux, and parameter values rather than simply saying “DG of order $p$.”

## Implementation blueprint

1. **Mesh and maps.** Store cells, oriented faces, neighbors, boundary markers, Jacobians, and outward normals. Incorrect normal orientation is a common conservation bug.
2. **Reference basis.** Choose modal orthogonal or nodal Lagrange polynomials on a reference element. Modal bases simplify filtering and can diagonalize mass matrices; nodal bases simplify interpolation and collocated quadrature.
3. **Quadrature.** Precompute basis values and gradients at volume and face points. Integrate sufficiently accurately for the polynomial/nonlinear terms, or deliberately use a provably stable collocation/split form. Geometry and variable coefficients raise the required degree.
4. **Volume residual.** For each element, evaluate $u_h$, fluxes, and volume integrals using only local coefficients.
5. **Face residual.** Visit each interior face once, evaluate both traces in a shared orientation, compute one flux, and add equal-and-opposite conservative contributions. Nonmatching faces need mortar/projection machinery that preserves conservation.
6. **Boundary flux.** Construct an exterior state or direct boundary flux from the mathematically correct incoming data.
7. **Mass solve and time update.** Apply local inverse mass matrices and an explicit, implicit, or IMEX integrator. Stiff diffusion, chemistry, or small cut cells can dominate the step size.
8. **Verification.** Check constant-state preservation, face cancellation to roundoff, convergence on a manufactured smooth solution, conservation history, and a discontinuous benchmark with the limiter enabled. Compare measured rates against the norm actually claimed.

The face loop is the communication kernel on distributed hardware, while volume kernels have high arithmetic intensity. This makes DG attractive on accelerators and large parallel machines, but only if data layout, batching, and geometry evaluation are designed carefully. Matrix-free operator application often avoids assembling a large sparse matrix. Implicit DG, however, needs scalable preconditioning: the extra element unknowns and penalty terms can make naive solvers expensive. Hybridizable DG methods introduce face unknowns and statically eliminate element interiors, reducing the globally coupled system at the cost of more elaborate local solves.

## Limitations and failure modes

DG pays for flexibility. In $d$ dimensions, the number of scalar unknowns per simplex grows like $\binom{p+d}{d}$; because interface degrees of freedom are duplicated, memory can exceed continuous FEM at the same mesh and degree. Face quadrature and flux evaluation add work. Explicit steps shrink as $p$ rises and as elements become distorted or tiny. Implicit systems demand robust block, multigrid, or domain-decomposition preconditioners.

The method is not automatically conservative on curved moving meshes: metric identities and a discrete geometric conservation law must be respected. It is not automatically entropy stable, positivity preserving, or free of aliasing. A high-order geometry map can still invert or degrade elements. Interior penalty parameters that ignore anisotropy or coefficient jumps can fail. Adaptivity across nonconforming faces can leak conservation if projections are inconsistent.

Nor is DG always the best tool. Low-order finite volumes may be cheaper and more robust for shock-dominated production calculations. Continuous FEM may achieve the desired elliptic accuracy with far fewer globally coupled unknowns. Spectral methods can be superior on smooth simple domains. The relevant comparison fixes an error tolerance, geometry, conservation requirement, hardware budget, and robustness target—not merely polynomial degree.

## Applied bridge

DG is especially compelling when several demands coincide: complex geometry, high-order wave propagation, strict local conservation, and local adaptivity. Compressible aerodynamics uses Riemann fluxes and shock capturing; acoustics and electromagnetics exploit high-order phase accuracy and element locality; porous-media transport benefits from local mass balance; advection–diffusion–reaction systems use upwinding plus an elliptic/LDG diffusion treatment. For surface conservation laws or evolving interfaces, the same local balance principle applies on mapped surface elements, but geometric consistency becomes part of the numerical analysis.

For an Andrew-specific computational project such as [[BealeSurfaceSolver research (MOC)]], DG suggests a concrete comparison rather than a default replacement: hold the surface geometry, time integrator, and target conservation error fixed; compare a conservative finite-volume baseline with DG at matched degrees of freedom or wall time; measure mass drift, convergence on smooth manufactured solutions, robustness near steep gradients, and sensitivity to metric and face-normal errors. That experiment separates DG's theoretical attraction from its actual value on the project's geometry and hardware.

## Why it matters

DG makes a deep numerical-analysis principle tangible: discontinuity between elements is acceptable when the interface law is designed to reproduce the PDE's information flow and energy structure. The local weak form supplies accuracy and geometry; the numerical flux supplies communication, conservation, and much of the stability; penalties or auxiliary fluxes handle diffusion; time integration and nonlinear stabilization complete the method. Seeing these parts separately prevents the common mistake of treating “DG” as one algorithm. It is a framework whose reliability depends on a compatible choice of space, volume form, surface flux, quadrature, boundary treatment, and solver.

## Sources

- B. Cockburn and C.-W. Shu, “The Local Discontinuous Galerkin Method for Time-Dependent Convection-Diffusion Systems,” *SIAM Journal on Numerical Analysis* 35(6), 1998. [DOI](https://doi.org/10.1137/S0036142997316712) · [university-hosted PDF](https://www.math.utah.edu/~epshteyn/selectedpapers.html/paperDG1.pdf)
- D. N. Arnold, F. Brezzi, B. Cockburn, and L. D. Marini, “Unified Analysis of Discontinuous Galerkin Methods for Elliptic Problems,” *SIAM Journal on Numerical Analysis* 39(5), 2002. [University of Minnesota repository](https://hdl.handle.net/11299/3539) · [author-hosted PDF](https://mate.unipv.it/marini/reports/abcm.pdf)
- B. Cockburn and C.-W. Shu, “Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems,” *Journal of Scientific Computing* 16, 2001. [DOI](https://doi.org/10.1023/A:1012873910884)
- B. Cockburn, G. E. Karniadakis, and C.-W. Shu, eds., *Discontinuous Galerkin Methods: Theory, Computation and Applications*, Springer, 2000. [DOI](https://doi.org/10.1007/978-3-642-59721-3)
- A. Harten, “High Resolution Schemes for Hyperbolic Conservation Laws,” *Journal of Computational Physics* 49, 1983. [DOI](https://doi.org/10.1016/0021-9991(83)90136-5)

## Open questions

- Which entropy-stable split form is most useful for a first compressible-flow implementation without obscuring the basic DG architecture?
- Under a matched wall-time budget, when does hybridization offset DG's larger local algebra for elliptic surface problems?
- How should penalty scaling be modified for strongly anisotropic curved elements and discontinuous diffusion tensors?
- Which conservation and geometric-identity tests would most directly expose face-normal errors in BealeSurfaceSolver?
