---
title: Conservation laws and entropy conditions
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, partial-differential-equations, applied-mathematics, conservation-laws, hyperbolic-pdes, entropy-stability]
as_of: 2026-07-10
desk: Applied partial differential equations
---
For a hyperbolic system, an entropy pair is an additional compatible balance that can select dissipative shocks, expose stability structure, and guide numerical design—but unlike the scalar case, one entropy inequality does not generally guarantee uniqueness.

Up: [[Applied PDE research frontier 2026]] · Prerequisites: [[Weak solutions and why shocks require them]] · Related: [[Finite-volume methods for conservation laws]] · [[Consistency stability and convergence]]

## The question beyond weak conservation

Consider a one-dimensional system of $m$ conservation laws

$$
U_t+F(U)_x=0,
\qquad U(x,t)\in\mathcal U\subset\mathbb R^m,
\tag{1}
$$

where $U$ is the vector of conserved variables, $F$ is the physical flux, and $A(U)=DF(U)$ is the flux Jacobian. The system is hyperbolic where $A(U)$ has real eigenvalues and a complete set of eigenvectors. Those eigenvalues are characteristic wave speeds. Hyperbolicity organizes local propagation, but it does not by itself choose a unique discontinuous continuation after characteristics intersect.

The weak form of (1) preserves every component of $U$ and forces a jump moving at speed $s$ to satisfy

$$
s[U]=[F],
\tag{2}
$$

where $[G]=G_R-G_L$. [[Weak solutions and why shocks require them]] derives this Rankine–Hugoniot relation and explains the complete scalar selection theory. The new difficulty for systems is that $U_L$, $U_R$, and $s$ must satisfy a vector relation, multiple characteristic families interact, and several plausible admissibility criteria cease to be equivalent outside restricted regimes. Conservation is necessary accounting, not a complete physical selection principle.

An entropy condition adds a directed statement about unresolved small scales. It asks a weak solution to dissipate a convex quantity that smooth solutions conserve. This is simultaneously:

- an **admissibility test** for shocks;
- an **energy estimate** that can control perturbations;
- a **structural test** for whether the system can be symmetrized; and
- a **numerical design target** stronger than conservation alone.

The word “entropy” is broader than thermodynamic entropy. In mathematical convention, a convex entropy usually satisfies a nonincreasing inequality. For gas dynamics, the convex mathematical entropy is commonly the negative of physical thermodynamic entropy, so the signs agree only after that translation is made explicit.

## Entropy pairs are compatibility laws

A differentiable scalar function $\eta:\mathcal U\to\mathbb R$ and scalar flux $q:\mathcal U\to\mathbb R$ form an **entropy–entropy-flux pair** for (1) when

$$
Dq(U)=D\eta(U)\,DF(U).
\tag{3}
$$

Here $D\eta$ and $Dq$ are row vectors. If $U$ is smooth, multiply (1) on the left by $D\eta(U)$. The chain rule gives

$$
\eta(U)_t+D\eta(U)DF(U)U_x=0.
$$

Condition (3) turns the second term into $q(U)_x$, yielding the companion conservation law

$$
\eta(U)_t+q(U)_x=0.
\tag{4}
$$

This derivation explains why $q$ cannot be chosen independently. Given $\eta$, the vector field $D\eta\,DF$ must actually be a gradient. On a simply connected state domain, the local integrability condition is that its mixed derivatives agree. Written with the Hessian $H(U)=D^2\eta(U)$, this condition is equivalent to

$$
H(U)A(U)=A(U)^T H(U).
\tag{5}
$$

To check this, differentiate $(Dq)_j=\sum_k\eta_{U_k}A_{kj}$ with respect to $U_i$, interchange $i$ and $j$, and use equality of the second derivatives of each component of $F$. The terms containing $D\eta\,D^2F$ cancel; the remaining equality says $HA$ is symmetric.

Equation (5) is a major distinction from scalar laws. For $m=1$, every smooth convex $\eta$ generates a flux through $q'=\eta'f'$. For $m>1$, the overdetermined compatibility relation sharply restricts which entropies exist. A physical energy or thermodynamic potential often supplies the required one.

Convexity means

$$
Z^T H(U)Z>0
$$

for every nonzero $Z$ in the relevant state set, or nonnegative with suitable qualifications for merely convex entropy. Strict convexity makes the entropy variables

$$
V=D\eta(U)^T
\tag{6}

locally invertible coordinates. Because $HA$ is symmetric, rewriting the quasilinear system in $V$ produces a symmetric-hyperbolic form. More explicitly, if $U=U(V)$, then

$$
U_V V_t+F_V V_x=0,

$$

with $U_V=H^{-1}$ symmetric positive definite and $F_V=AH^{-1}$ symmetric by (5). This structure supports energy estimates and local well-posedness for smooth solutions. It does not prevent shocks from forming or settle global weak uniqueness.

## The entropy inequality and shock production

At a shock, the chain rule used in (4) is unavailable. The admissibility requirement is instead

$$
\eta(U)_t+q(U)_x\le 0
\tag{7}
$$

in distributions, for the selected convex mathematical entropy or an appropriate family. Equivalently, for every nonnegative test function $\varphi\in C_c^\infty(\mathbb R\times[0,\infty))$,

$$
\int_0^\infty\!\int_{\mathbb R}
\left(\eta(U)\varphi_t+q(U)\varphi_x\right)dxdt
+\int_{\mathbb R}\eta(U_0(x))\varphi(x,0)dx\ge0.
\tag{8}
$$

For a piecewise constant shock at $x=st$, distributional differentiation gives

$$
\eta_t+q_x=\bigl([q]-s[\eta]\bigr)\,\delta_{x=st}.

$$

Thus (7) requires

$$
[q]-s[\eta]\le0,
\qquad\text{or equivalently}\qquad
s[\eta]-[q]\ge0.
\tag{9}
$$

This formula is an inexpensive equation check for an exact or computed Riemann solution: first verify the vector Rankine–Hugoniot residual in (2), then evaluate the scalar entropy production in (9). A jump may conserve every component while producing entropy with the wrong sign.

For a strictly hyperbolic system with ordered eigenvalues $\lambda_1<\cdots<\lambda_m$, a Lax $k$-shock satisfies, in a common formulation,

$$
\lambda_k(U_R)<s<\lambda_k(U_L),
\tag{10}
$$

while the other characteristic families pass through with the appropriate ordering. Characteristics of the $k$th family enter the shock from both sides, making it compressive. For small shocks in genuinely nonlinear fields and a compatible strictly convex entropy, Lax admissibility and entropy dissipation are closely related. They should not be declared universally equivalent. Large shocks, nonconvex constitutive laws, undercompressive waves, phase transitions, and mixed diffusive–dispersive regularizations can require a kinetic relation or a model-specific viscosity criterion.

## Why viscous structure matters more for systems

A regularized system has the form

$$
U_t+F(U)_x=\varepsilon\bigl(B(U)U_x\bigr)_x,
\tag{11}
$$

where $B$ represents viscosity, heat conduction, diffusion, or an artificial analogue. Multiplying by the entropy variables gives, formally,

$$
\eta_t+q_x
=\varepsilon\bigl(D\eta\,B U_x\bigr)_x
-\varepsilon U_x^T H B U_x,
\tag{12}
$$

provided the matrix products have the required compatibility. If the symmetric part of $HB$ is positive semidefinite, the last term is nonpositive. A controlled vanishing-viscosity limit can therefore inherit (7).

For systems, however, the choice of $B$ may affect which shocks possess traveling viscous profiles. Replacing physical viscosity with scalar Laplacian smoothing is not automatically neutral. A candidate shock can satisfy Rankine–Hugoniot and a chosen entropy inequality yet fail to be selected by the actual small-scale physics. Conversely, undercompressive shocks can arise from diffusive–dispersive regularizations even though they violate the classical Lax characteristic count. The correct admissibility rule belongs to the full modeling hierarchy: macroscopic conservation law, constitutive state set, entropy, and regularization.

This is why “add viscosity and send $\varepsilon$ to zero” is a mechanism, not a proof. One still needs uniform estimates, compactness, identification of nonlinear flux limits, and control of boundary or initial traces. In several space dimensions, oscillation and concentration may survive weak convergence, motivating Young-measure or measure-valued formulations.

## Compressible Euler: translating thermodynamics

For a calorically perfect gas in one dimension, the compressible Euler conserved variables and flux are

$$
U=
\begin{pmatrix}
\rho\\ m\\ E
\end{pmatrix},
\qquad
F(U)=
\begin{pmatrix}
m\\[2pt]
m^2/\rho+p\\[2pt]
(E+p)m/\rho
\end{pmatrix},
\tag{13}
$$

where $\rho>0$ is density, $m=\rho u$ is momentum, $u$ is velocity, $E=\rho e+\tfrac12\rho u^2$ is total energy density, and $p=(\gamma-1)(E-m^2/(2\rho))>0$. Mass, momentum, and total energy are conserved even across an inviscid shock.

The specific physical entropy can be normalized as

$$
s_{\mathrm{phys}}=\log p-\gamma\log\rho
\tag{14}
$$

up to an additive constant and positive scale. Smooth adiabatic flow transports it:

$$
(\rho s_{\mathrm{phys}})_t+(\rho u s_{\mathrm{phys}})_x=0.

$$

Across a physical compressive shock, thermodynamic entropy increases. A standard convex mathematical entropy is therefore a negative multiple,

$$
\eta(U)=-\frac{\rho s_{\mathrm{phys}}}{\gamma-1},
\qquad
q(U)=u\eta(U),
\tag{15}
$$

on the physical state set $\rho>0$, $p>0$. Its inequality is $\eta_t+q_x\le0$, precisely because increasing physical entropy means decreasing mathematical entropy. This example resolves a common apparent contradiction: Euler conserves total energy while dissipating a different convex entropy. Entropy dissipation converts organized mechanical structure into unresolved internal disorder without deleting total energy from the conservative model.

The entropy inequality is not the only invariant-domain requirement. A numerical state with negative density or pressure makes (14) undefined and is physically inadmissible even if a formal entropy residual appears favorable. Entropy stability and positivity preservation are separate properties.

## Relative entropy: a stability distance adapted to the PDE

Given a strictly convex entropy and a reference state $\bar U$, define the relative entropy

$$
\eta(U\mid\bar U)
=\eta(U)-\eta(\bar U)-D\eta(\bar U)(U-\bar U).
\tag{16}
$$

Convexity implies $\eta(U\mid\bar U)\ge0$. Taylor expansion shows that near $\bar U$ it is a quadratic distance weighted by $H(\bar U)$:

$$
\eta(U\mid\bar U)
=\frac12(U-\bar U)^T H(\bar U)(U-\bar U)
+o(|U-\bar U|^2).

$$

Unlike $|U-\bar U|^2$, this quantity is aligned with the system's entropy structure. Its associated relative flux is

$$
q(U\mid\bar U)
=q(U)-q(\bar U)-D\eta(\bar U)\bigl(F(U)-F(\bar U)\bigr).
\tag{17}
$$

For a sufficiently regular reference solution, combining the weak entropy inequality for $U$ with the strong equation for $\bar U$ yields a Grönwall-type estimate under suitable bounds. This is the engine behind many weak–strong uniqueness statements: while the strong solution exists, an admissible weak or dissipative solution with the same data must coincide with it in the theorem's class. Relative entropy can also quantify convergence of relaxation limits and numerical approximations.

The qualification matters. Weak–strong uniqueness is conditional on a sufficiently regular comparison solution and on the precise dissipative solution concept. It is not general uniqueness after the strong solution forms shocks. For multidimensional compressible Euler, admissible weak solutions can exhibit nonuniqueness; imposing the standard energy/entropy inequality alone does not restore a scalar-like global contraction theory.

## From continuum entropy to an entropy-stable scheme

A semidiscrete finite-volume method evolves cell averages $U_i(t)$ by

$$
\frac{dU_i}{dt}
+\frac{\widehat F_{i+1/2}-\widehat F_{i-1/2}}{\Delta x}=0.
\tag{18}
$$

Pairwise cancellation of $\widehat F$ guarantees conservation. Entropy stability asks for a compatible numerical entropy flux $\widehat q$ such that

$$
\frac{d}{dt}\eta(U_i)
+\frac{\widehat q_{i+1/2}-\widehat q_{i-1/2}}{\Delta x}\le0.
\tag{19}
$$

Tadmor's interface construction makes the algebra concrete. Define entropy variables $V=D\eta(U)^T$ and the entropy potential

$$
\psi(U)=V^T F(U)-q(U).
\tag{20}
$$

An entropy-conservative two-point flux $F^{ec}(U_L,U_R)$ satisfies

$$
(V_R-V_L)^T F^{ec}(U_L,U_R)=\psi_R-\psi_L.
\tag{21}
$$

This produces no interface entropy when paired with a suitable flux differencing. To select shocks, add dissipation in entropy variables:

$$
F^{es}=F^{ec}-\frac12D(V_R-V_L),
\tag{22}
$$

with $D$ symmetric positive semidefinite. Then

$$
(V_R-V_L)^T F^{es}-(\psi_R-\psi_L)
=-\frac12(V_R-V_L)^TD(V_R-V_L)\le0,
\tag{23}
$$

which is the interface entropy inequality. The sign and the jump orientation can be checked directly in code.

This attractive proof does not complete a production solver. High-order reconstruction, quadrature, boundary conditions, source terms, curvilinear metrics, time integration, and positivity limiting must preserve or correctly modify the entropy argument. An entropy-conservative flux without dissipation is generally unsuitable at shocks. An entropy-stable flux may still smear contacts, violate positivity, or suffer a multidimensional shock instability. [[Finite-volume methods for conservation laws]] places these properties in the broader solver stack.

## Applied and computational bridge

Entropy gives a hierarchy of diagnostics rather than a single “physics passed” badge:

1. **Conservation residual:** check (2) for exact jumps and the global sum of (18) for a mesh calculation.
2. **State admissibility:** verify density, pressure, depth, or concentration stays inside its physical invariant set.
3. **Entropy residual:** for a shock, evaluate $[q]-s[\eta]$; for a scheme, sum the discrete balance in (19), including boundary contributions.
4. **Regularization sensitivity:** compare physical and artificial viscosity when nonclassical waves are possible.
5. **Refinement:** verify that entropy production localizes at shocks rather than appearing as broad grid-dependent loss in smooth regions.
6. **Reference structure:** on smooth tests, monitor relative entropy against an exact or highly resolved solution.

For compressible flow, report which entropy normalization is used, how logarithms are protected near vacuum, and whether total energy, physical entropy, and mathematical entropy are being plotted. For shallow water, distinguish mechanical energy entropy from positivity of water depth and from well-balancing of lake-at-rest states. For surface or moving-mesh conservation laws, include metric and geometric-conservation terms in the global balance before attributing residuals to physical entropy production.

A useful minimal experiment is an Euler shock tube with an exact or trusted Riemann reference. At each interface or reconstructed shock, record the Rankine–Hugoniot error, minimum density and pressure, and total discrete mathematical entropy. Repeat under mesh refinement and with at least two fluxes. A sharper shock with increasing entropy in the wrong mathematical sign is not an improvement; a globally entropy-decreasing solution that loses pressure positivity is not acceptable either.

## What the theory does and does not establish

- **Exact identity for smooth solutions:** (3) forces the companion law (4) by the chain rule.
- **Shock admissibility:** (9) is a necessary entropy-production sign for a shock under the chosen entropy. Its adequacy depends on the system and regime.
- **Structural theorem:** a strictly convex entropy symmetrizes the smooth system through entropy variables, supporting local energy estimates.
- **Conditional stability:** relative entropy can establish weak–strong uniqueness and convergence in specified classes while a regular comparison solution exists.
- **Discrete theorem:** fluxes satisfying an identity such as (21), plus positive-semidefinite dissipation, yield a semidiscrete interface entropy inequality under the scheme's stated assumptions.
- **No general system analogue of scalar contraction:** one entropy inequality does not supply universal global uniqueness for arbitrary systems or dimensions.
- **No automatic physical completeness:** the selected entropy, constitutive domain, boundary condition, and small-scale regularization must match the modeled physics.

## Why it matters

Entropy conditions connect three levels that are often treated separately. At the modeling level, they encode the irreversible direction omitted when a thin dissipative layer is collapsed to a jump. At the analytical level, convexity turns thermodynamic or energetic structure into estimates. At the numerical level, the same variables and potentials expose whether an interface flux creates or destroys entropy with the intended sign.

The connection is valuable precisely because it is not a universal cure. Scalar convex laws admit a remarkably complete entropy theory; systems retain genuine ambiguity. Good applied work states which entropy is used, where it is convex, which regularization motivates it, what theorem its inequality supports, and which independent properties—positivity, well-balancing, geometry, or kinetic selection—remain to be checked.

## Sources

- [S. N. Kruzhkov, “First order quasilinear equations in several independent variables” (1970)](https://www.mathnet.ru/eng/sm3372) — primary source for scalar entropy solutions, comparison, and contraction; included to delimit what does not automatically extend to systems.
- [P. D. Lax, “Hyperbolic systems of conservation laws II” (1957)](https://doi.org/10.1002/cpa.3160100406) — primary source for characteristic shock admissibility and genuinely nonlinear systems.
- [C. M. Dafermos, *Hyperbolic Conservation Laws in Continuum Physics*, 4th ed.](https://link.springer.com/book/10.1007/978-3-662-49451-6) — authoritative monograph on entropy pairs, shock admissibility, relative entropy, and continuum models.
- [K. O. Friedrichs and P. D. Lax, “Systems of conservation equations with a convex extension” (1971)](https://doi.org/10.1073/pnas.68.8.1686) — primary source connecting a convex extension to symmetric hyperbolic structure.
- [C. M. Dafermos, “The second law of thermodynamics and stability” (1979)](https://doi.org/10.1007/BF00250480) — primary source for the relative-entropy stability method in thermomechanics.
- [E. Tadmor, “The numerical viscosity of entropy stable schemes for systems of conservation laws. I” (1987)](https://doi.org/10.1090/S0025-5718-1987-0890255-3) — primary numerical analysis source for entropy-conservative/stable flux structure and numerical viscosity.
- [E. Feireisl, M. Lukáčová-Medvid'ová, and H. Mizerová, “Convergence of finite volume schemes for the Euler equations via dissipative measure-valued solutions,” *Foundations of Computational Mathematics* 20 (2020)](https://doi.org/10.1007/s10208-019-09433-z) — primary modern source illustrating entropy, positivity, measure-valued convergence, and weak–strong uniqueness in compressible Euler numerics.
- [E. Chiodaroli, C. De Lellis, and O. Kreml, “Global ill-posedness of the isentropic system of gas dynamics” (2015)](https://doi.org/10.1002/cpa.21537) — primary evidence that admissible multidimensional Euler weak solutions need not be unique.

## Open questions

- Which physical viscosity matrices select shocks that a given convex entropy inequality alone cannot distinguish?
- Under what structural hypotheses can relative entropy remain useful when the reference solution contains shocks?
- How should entropy stability, positivity, and well-balancing be combined without excessive numerical dissipation for shallow-water or compressible-flow systems?
- Which entropy and boundary flux are appropriate for conservation laws posed on evolving level-set surfaces?
- What computable diagnostic best separates physical shock entropy production from entropy loss caused by under-resolution, limiters, or geometric inconsistency?
