---
title: Classifying partial differential equations
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, applied-pdes, partial-differential-equations, principal-symbols, characteristics]
as_of: 2026-07-09
desk: Applied PDEs
---
Classifying a PDE means isolating its highest-order directional behavior: that local structure predicts smoothing, propagation, admissible data, and appropriate numerical methods, but it does not by itself prove well-posedness or determine a solution.

Up: [[Applied PDE research frontier 2026]]

Related: [[Partial differential equations]] · [[Characteristics]] · [[Weak solutions and why shocks require them]] · [[Well-posedness as an applied requirement]]

## The classification question

A partial differential equation relates an unknown field $u(x)$ to its derivatives. Its **order** is the order of the highest derivative present. It is **linear** if $u$ and all its derivatives enter linearly with coefficients independent of $u$; **semilinear** if the highest-order derivatives enter linearly with coefficients depending only on the independent variables; **quasilinear** if those coefficients may also depend on $u$ or lower derivatives; and **fully nonlinear** if the highest derivatives themselves enter nonlinearly.

These labels answer a different question from elliptic, parabolic, or hyperbolic type. Linearity describes how the unknown enters. Type describes the geometry of the highest-order part. For example, the heat equation is linear and parabolic, while a quasilinear conservation law is hyperbolic where its characteristic speeds are real. One should state both properties, along with the domain, coefficients, boundary or initial data, and solution concept.

Why privilege the highest derivatives? Under a rapidly oscillating trial field

$$
u_\varepsilon(x)=a(x)e^{i\phi(x)/\varepsilon},
$$

each derivative of the phase contributes a factor of $\varepsilon^{-1}$. An order-$m$ term therefore dominates lower-order terms as $\varepsilon\to0$. The highest-order coefficients control the leading response to fine-scale oscillations, singularities, and directional perturbations. This is the same scale separation behind both the principal symbol and [[Geometric optics for PDEs]]. Lower-order terms remain crucial for growth, damping, spectra, and global solvability; they simply do not set the local principal type.

## Principal symbols

Write a scalar linear differential operator of order $m$ as

$$
L=\sum_{|\alpha|\le m}a_\alpha(x)\partial^\alpha,
$$

where $\alpha$ is a multi-index. Its principal symbol is the homogeneous polynomial

$$
p_m(x,\xi)=\sum_{|\alpha|=m}a_\alpha(x)(i\xi)^\alpha.
$$

Authors sometimes omit the powers of $i$; this changes signs or complex factors but not the characteristic set relevant here. A nonzero covector $\xi$ is **characteristic** at $x$ when $p_m(x,\xi)=0$. A hypersurface $\phi(x)=0$ is noncharacteristic when $p_m(x,d\phi)\ne0$. On such a surface, the equation can locally solve for the highest normal derivative, which is why noncharacteristic surfaces are natural candidates for Cauchy data.

For a second-order scalar operator in $n$ variables,

$$
Lu=\sum_{i,j=1}^{n}a^{ij}(x)\,u_{x_i x_j}+\text{lower-order terms},
$$

only the symmetric part of $A=(a^{ij})$ matters because $u_{x_i x_j}=u_{x_j x_i}$ for a smooth $u$. With the real-symbol convention, the principal quadratic form is

$$
q_x(\xi)=\xi^T A(x)\xi.
$$

Under a smooth change of coordinates with invertible Jacobian $J$, the principal matrix transforms by congruence, schematically $A\mapsto JAJ^T$. Sylvester's law of inertia preserves the numbers of positive, negative, and zero eigenvalues. Thus classification by signature is coordinate-invariant, even though the displayed coefficients are not.

For an $N$-component system, the symbol becomes an $N\times N$ matrix. Characteristics are determined by

$$
\det P_m(x,\xi)=0,
$$

but that determinant is only a beginning: multiplicities, eigenvectors, diagonalizability, and uniform estimates matter. Scalar signature language does not transfer unchanged to systems.

## The two-variable second-order test

The familiar classroom equation is

$$
A u_{xx}+2B u_{xy}+C u_{yy}+D u_x+E u_y+Fu=G.
$$

Its principal matrix and quadratic form are

$$
M=\begin{pmatrix}A&B\\B&C\end{pmatrix},
\qquad q(\xi,\eta)=A\xi^2+2B\xi\eta+C\eta^2.
$$

At a point where the principal matrix is nonzero:

- **elliptic** means $B^2-AC<0$, so the two eigenvalues have the same sign;
- **hyperbolic** means $B^2-AC>0$, so they have opposite signs;
- **parabolic** means $B^2-AC=0$ with $M\ne0$, so one eigenvalue is zero.

Some books write the mixed term as $B u_{xy}$. Their discriminant is then $B^2-4AC$. The apparent disagreement is only notation.

The test follows directly from the determinant: $\det M=AC-B^2$. A real symmetric $2\times2$ matrix is definite exactly when its determinant is positive (after an overall sign choice), indefinite when its determinant is negative, and rank one when its determinant is zero but the matrix is nonzero. Multiplying the entire PDE by $-1$ reverses both eigenvalue signs without changing the type.

In more than two spatial variables, a second-order scalar operator is elliptic when $A(x)$ is definite. It is **uniformly elliptic** on a domain when, after a possible sign change, constants $0<\lambda\le\Lambda<\infty$ satisfy

$$
\lambda |\xi|^2\le \xi^T A(x)\xi\le\Lambda|\xi|^2
$$

for every $x$ and $\xi$. Pointwise positive definiteness alone need not provide the uniform coercivity used in energy estimates and numerical conditioning.

Hyperbolicity in several variables is usually defined relative to a distinguished time covector rather than merely by counting signs. For a scalar polynomial symbol $p(\tau,\xi)$, one asks whether, for every real spatial covector $\xi$, its roots in temporal frequency $\tau$ are real. Strict, strong, symmetric, and weak hyperbolicity distinguish root separation, diagonalizability with uniform estimates, and the availability of symmetrizers; they do not form one simple hierarchy in every setting. “The matrix is indefinite” is therefore not an adequate general definition.

Parabolic equations also single out time. The heat operator $\partial_t-\kappa\Delta$ is first order in time and second order in space, so treating $(t,x)$ as an ordinary collection of equal-weight variables makes its second-order matrix degenerate without capturing its evolution. Its natural scaling is anisotropic: $t$ has the scale of $x^2$. Modern parabolic theory combines ellipticity of the spatial operator with a forward time direction.

## Canonical forms and characteristics

At one point, an orthogonal rotation diagonalizes a real symmetric principal matrix. With constant coefficients, rescaling the new coordinates normalizes nonzero eigenvalues. In two variables the principal parts become, up to overall sign,

$$
u_{\xi\xi}+u_{\eta\eta}\quad\text{(elliptic)},
$$

$$
u_{\xi\xi}-u_{\eta\eta}\quad\text{(hyperbolic)},
$$

and

$$
u_{\xi\xi}\quad\text{(parabolic)}.
$$

For variable coefficients, this is initially a pointwise normalization. Turning it into a coordinate system over a region requires integrating direction fields, and derivatives of the coordinate change generate lower-order terms. A canonical principal part is not necessarily a globally constant-coefficient equation.

Characteristic curves for the two-variable equation satisfy

$$
A(dy)^2-2B\,dx\,dy+C(dx)^2=0.
$$

To check the formula, let a candidate curve be $\phi(x,y)=\text{constant}$. It is characteristic when $q(\phi_x,\phi_y)=0$. Along the curve, $\phi_xdx+\phi_y dy=0$; eliminating the normal components gives the displayed equation. If $dx\ne0$, the slopes obey

$$
A\left(\frac{dy}{dx}\right)^2-2B\frac{dy}{dx}+C=0,
$$

whose discriminant is $4(B^2-AC)$. Hyperbolic equations have two distinct real characteristic directions, parabolic equations one repeated direction, and elliptic equations no real characteristic direction.

For the wave equation $u_{tt}-c^2u_{xx}=0$, characteristics are $x\pm ct=\text{constant}$, and the principal part becomes $u_{\xi\eta}$ in characteristic coordinates. Information propagates along these curves. For the Laplace equation $u_{xx}+u_{yy}=0$, there are no real characteristics. Its solution at a point is constrained by data around the domain rather than transported along real rays. For the heat equation $u_t-\kappa u_{xx}=0$, the spatial principal part diffuses while time selects a forward evolution.

## What type predicts

Classification is a structural forecast, not a complete theorem.

**Elliptic type** usually signals equilibrium or spatial constraint. Prototypes include Laplace, Poisson, and steady diffusion equations. Under suitable coefficient, domain, and boundary assumptions, elliptic estimates control higher derivatives of a solution by the forcing and lower norms. Interior disturbances are globally coupled, and smooth coefficients and forcing often imply additional interior regularity. Natural formulations prescribe boundary data around a spatial domain: Dirichlet values, Neumann fluxes, Robin combinations, or mixed conditions. One does not generally pose arbitrary Cauchy data on an interior curve; elliptic Cauchy continuation is a classic ill-posed problem.

**Hyperbolic type** usually signals finite-speed propagation, waves, transport, and domains of dependence. Prototypes are the wave equation and first-order conservation laws. Initial displacement and velocity determine a second-order wave evolution when the initial surface is noncharacteristic and the problem satisfies the relevant energy estimates. Boundaries require data only for incoming characteristic modes; prescribing all components can overdetermine a system. Smooth hyperbolic solutions may develop singularities or shocks, so the classification persists even when the classical solution does not. Then [[Weak solutions and why shocks require them]], entropy conditions, or other admissibility rules become necessary.

**Parabolic type** usually signals diffusion, irreversible smoothing, and a preferred time direction. Prototypes include the heat equation and many reaction–diffusion systems. A forward problem typically takes one initial state plus spatial boundary conditions. Backward heat evolution amplifies high frequencies exponentially and is ill-posed in ordinary norms. Infinite propagation speed for the classical heat equation distinguishes it from hyperbolic flow: compactly supported initial heat data immediately influences every point, although the influence may be extremely small.

These statements need hypotheses. Elliptic regularity can fail at rough boundaries, discontinuous coefficients, corners, interfaces, or degeneracy. Hyperbolic finite-speed claims depend on the operator and solution framework. Parabolic smoothing can coexist with blow-up in nonlinear systems. Type guides which estimates and data to seek; theorems establish whether they actually hold.

## Three prototype applications

### Electrostatics and steady diffusion

Poisson's equation

$$
-\nabla\cdot(k(x)\nabla u)=f
$$

is elliptic where the symmetric conductivity tensor $k$ is uniformly positive definite. Its divergence form connects flux conservation to a weak formulation: multiplying by a test function and integrating by parts moves one derivative from $u$. Finite elements and finite volumes exploit this structure differently. If an eigenvalue of $k$ approaches zero, uniform ellipticity is lost; estimates and linear-system conditioning can deteriorate even before the formal type changes.

### Acoustics and elasticity

The scalar wave equation

$$
u_{tt}-c(x)^2\Delta u=f
$$

is hyperbolic where $c(x)>0$. Its characteristics approximate wavefront paths in the short-wavelength limit. Elasticity and Maxwell equations are systems: polarization and multiple wave speeds make the matrix symbol essential. Stable discretizations must respect the evolution structure, numerical domains of dependence, and incoming boundary modes rather than apply a scalar discriminant mechanically.

### Heat, viscosity, and diffusion

The equation

$$
u_t-\nabla\cdot(k(x)\nabla u)=f
$$

is parabolic when its spatial diffusion tensor is uniformly elliptic. Explicit time stepping typically faces a mesh-dependent stability restriction of diffusive scale $\Delta t=O(h^2)$, while implicit methods trade that restriction for an elliptic solve. Adding small viscosity to a hyperbolic conservation law creates a parabolic regularization; the limit as viscosity vanishes can select an entropy solution, but that selection is a theorem only for specified equations and convergence hypotheses.

## Mixed and changing type

Coefficients can make type depend on location or on the solution. The Tricomi equation

$$
u_{xx}+x u_{yy}=0
$$

is elliptic for $x>0$, hyperbolic for $x<0$, and degenerate on $x=0$. No single pure-type boundary template applies across the whole domain. Transonic potential flow behaves similarly: subsonic regions are elliptic, supersonic regions hyperbolic, and the sonic set is a free or partly unknown transition boundary tied to the solution.

Degenerate elliptic and degenerate parabolic equations deserve their own theories. The porous-medium equation $u_t=\Delta(u^m)$ with $m>1$ loses uniform parabolicity where $u=0$ and can have finite-speed interfaces, unlike the classical heat equation. The lesson is not that classification failed; its degeneracy correctly warns that pure-type conclusions such as instantaneous smoothing cannot simply be imported.

Mixed-type numerics must accommodate incompatible local behaviors. Elliptic regions invite global solves and boundary constraints; hyperbolic regions require upwinding, characteristic boundary treatment, and shock control. A method that is stable in one region can be inappropriate in another, especially near a sonic or degeneracy set where characteristic speeds merge and conditioning worsens.

## Nonlinear equations and systems

For a fully nonlinear second-order equation

$$
F(x,u,Du,D^2u)=0,
$$

type is commonly read from the linearization with respect to the Hessian. Formally perturb $u$ to $u+\varepsilon v$; the highest-order term in the first variation is

$$
\sum_{i,j}\frac{\partial F}{\partial u_{ij}}(x,u,Du,D^2u)v_{ij}.
$$

If this coefficient matrix is positive or negative definite in the relevant solution class, the equation is elliptic there. For nonlinear elliptic equations, a more intrinsic condition is monotonicity under addition of positive-semidefinite matrices, with sign depending on the convention for $F$. Uniform ellipticity imposes quantitative bounds. The classification may therefore depend on the unknown solution and on an admissible branch, as in Monge–Ampère equations where convexity selects the elliptic branch.

For a first-order quasilinear system

$$
U_t+\sum_{j=1}^{d}A_j(U,x,t)U_{x_j}=S(U,x,t),
$$

inspect $A(n)=\sum_j n_jA_j$ for every spatial direction $n$. Real eigenvalues represent real characteristic speeds. A complete set of eigenvectors gives strong hyperbolicity under suitable uniformity; a positive symmetrizer gives symmetric hyperbolicity and robust energy estimates. Real eigenvalues alone can be insufficient when the eigenbasis degenerates. Repeated characteristics are not automatically pathological, but they require finer analysis.

Systems also expose why labels can overlap. Incompressible Navier–Stokes has a parabolic velocity-diffusion component, nonlinear transport, and an elliptic pressure constraint enforcing divergence-free flow. It is more informative to identify these coupled mechanisms than to force the entire system into one word. Dispersive equations such as Schrödinger or Korteweg–de Vries have yet another principal behavior: oscillations spread by frequency-dependent phase speed rather than classical diffusion or finite-speed hyperbolic propagation.

## From classification to analysis and computation

A reliable workflow is:

1. Put the equation in a clear form and identify its order, unknowns, domain, and distinguished time variable.
2. Extract the principal scalar polynomial or matrix symbol. Symmetrize scalar second-order coefficients.
3. Determine type pointwise and note where uniformity, rank, eigenvalue separation, or diagonalizability fails.
4. Find characteristic covectors or curves and identify noncharacteristic initial surfaces and incoming boundary modes.
5. Specify the solution concept and data. Classical, Sobolev weak, entropy, and viscosity solutions answer different equations and failure modes.
6. Seek the estimate appropriate to the type: coercive elliptic estimates, hyperbolic energy estimates, parabolic energy and smoothing estimates, or a mixed-type substitute.
7. Choose a discretization that mirrors the structure, then verify consistency, stability, conservation, and convergence rather than inferring them from the label.

The theorem/evidence boundary matters. Sylvester's law proves invariance of the signature under nonsingular coordinate changes. A well-posedness theorem proves existence, uniqueness, and continuous dependence under named assumptions. A convergence theorem connects a numerical approximation to the specified solution. By contrast, a plotted smooth profile, a stable run, or an observed convergence rate is numerical evidence for one configuration. It cannot establish classification-independent reliability, and classification alone cannot certify the code.

## Sources

- [Lawrence C. Evans, *Partial Differential Equations*, 2nd ed. (American Mathematical Society)](https://bookstore.ams.org/gsm-19-r) — authoritative graduate reference for linear and nonlinear PDE, characteristics, elliptic, parabolic, and hyperbolic theory.
- [Michael E. Taylor, *Partial Differential Equations I: Basic Theory*, 2nd ed. (Springer)](https://doi.org/10.1007/978-1-4419-7055-8) — principal symbols, characteristics, coordinate invariance, and systems.
- [Fritz John, *Partial Differential Equations*, 4th ed. (Springer)](https://doi.org/10.1007/978-1-4684-0059-5) — classical treatment of second-order equations and canonical forms.
- [Lars Hörmander, *The Analysis of Linear Partial Differential Operators III* (Springer)](https://doi.org/10.1007/978-3-642-96839-3) — advanced reference for principal type, ellipticity, and propagation.
- [Peter D. Lax, *Hyperbolic Partial Differential Equations* (American Mathematical Society)](https://bookstore.ams.org/cm-14) — authoritative account of characteristics, hyperbolic evolution, and conservation laws.
- [Juan Luis Vázquez, *The Porous Medium Equation* (Oxford University Press)](https://doi.org/10.1093/acprof:oso/9780198569039.001.0001) — degenerate diffusion, free boundaries, and finite propagation.
- [Richard Courant and David Hilbert, *Methods of Mathematical Physics, Volume II* (Wiley)](https://doi.org/10.1002/9783527617234) — classical source for equations of elliptic, hyperbolic, and mixed type.

## Open questions

- Which definition of strong hyperbolicity is most useful when connecting continuum systems to stable semidiscrete schemes?
- How should mixed-type solvers couple elliptic global constraints to hyperbolic characteristic fluxes across an evolving sonic set?
- Which properties of degenerate parabolic equations survive under anisotropic, discontinuous diffusion tensors?
- How can principal-symbol diagnostics be automated for nonlinear multiphysics models without hiding solution-dependent branch assumptions?
