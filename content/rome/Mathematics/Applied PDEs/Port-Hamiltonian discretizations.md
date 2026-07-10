---
title: Port-Hamiltonian discretizations
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pde, numerical-analysis, port-hamiltonian, structure-preserving]
---

Port-Hamiltonian discretization turns a distributed energy balance into a finite-dimensional one without erasing the boundary ports through which a PDE exchanges power with its environment.

## The organizing principle: discretize the power balance

A conventional method starts from a PDE and asks how accurately a finite vector approximates its solution. A port-Hamiltonian (pH) method asks an additional question: **what algebraic identity makes energy move, dissipate, and cross the boundary, and does the discrete model satisfy the same identity?** This shift matters for waves, beams, transmission lines, fluids, thermodynamic systems, and multiphysics networks because stability and interconnection are often consequences of that identity rather than of any particular coordinate representation.

For a finite-dimensional state $x$, the canonical form is

$$
\dot x=(J(x)-R(x))\nabla H(x)+G(x)u,
\qquad
y=G(x)^\top \nabla H(x),
$$

where $H$ is stored energy, $J^\top=-J$ transports energy without creating it, $R^\top=R\succeq0$ dissipates it, and $(u,y)$ are conjugate port variables. Direct calculation gives

$$
\dot H=\nabla H^\top\dot x
=-\nabla H^\top R\nabla H+u^\top y\le u^\top y.
$$

The skew term vanishes. Thus the model is passive: stored energy can increase only through supplied boundary or control power. A structure-preserving spatial discretization should produce this identity exactly (up to linear/nonlinear solver tolerance), even while its numerical solution only approximates the continuum state.

This viewpoint complements [[Energy methods for PDEs]], [[Finite element methods]], and [[Method of lines]]. It is stricter than merely observing that energy happens to decay in a numerical experiment: the discrete operators must imply the balance for every admissible discrete state.

## Distributed port-Hamiltonian form

The key continuum object is a formally skew differential operator together with the boundary term exposed by integration by parts. Let $z$ be an energy variable and let

$$
H[z]=\int_\Omega \mathcal H(z(\xi))\,d\xi,
\qquad e=\frac{\delta H}{\delta z}
$$

be the Hamiltonian and its variational derivative, called an effort. A broad lossless class has

$$
\partial_t z=\mathcal J e,
$$

where $\mathcal J$ is only *formally* skew-adjoint. Green's formula says

$$
\langle e,\mathcal J e\rangle_\Omega
=\langle e_\partial,f_\partial\rangle_{\partial\Omega},
$$

after suitable traces have been collected into boundary effort $e_\partial$ and boundary flow $f_\partial$. Hence

$$
\frac{dH}{dt}=\langle e_\partial,f_\partial\rangle_{\partial\Omega}.
$$

Internal resistive variables add a nonpositive term. Boundary conditions are therefore not an afterthought: they close selected ports. Setting a flow or effort to zero gives no power transfer; terminating a port with a passive relation gives dissipation; interconnecting two systems with compatible signs cancels their exchanged powers.

In one space dimension, Stokes--Dirac structures make this explicit. For energy variables $p,q$ one common first-order form is

$$
\partial_t
\begin{bmatrix}p\\q\end{bmatrix}
=
\begin{bmatrix}0&\partial_s\\ \partial_s&0\end{bmatrix}
\begin{bmatrix}e_p\\e_q\end{bmatrix}.
$$

Then

$$
\dot H=\int_a^b(e_p\partial_s e_q+e_q\partial_s e_p)\,ds
=\big[e_pe_q\big]_a^b.
$$

The differential operator is not skew on an unrestricted domain; its failure to be skew *is precisely the boundary power*. Imposing periodicity too early would conceal the ports and prevent later connection to actuators or adjacent media.

## Running example: the wave equation

Consider a string with displacement $w(s,t)$, momentum density $p=\rho w_t$, and strain $q=w_s$. With mass density $\rho(s)>0$ and tension $T(s)>0$,

$$
H[p,q]=\frac12\int_a^b\left(\frac{p^2}{\rho}+Tq^2\right)ds,
\qquad e_p=\frac p\rho=w_t,
\qquad e_q=Tq.
$$

The equations

$$
p_t=\partial_s e_q,
\qquad q_t=\partial_s e_p
$$

imply $\rho w_{tt}=\partial_s(Tw_s)$ and

$$
\dot H=[e_pe_q]_a^b=[w_t\,Tw_s]_a^b.
$$

Velocity and traction form the boundary power pair. A clamped end sets velocity to zero; a free end sets traction to zero; a damper can impose traction with a sign that extracts power. The pH representation retains all three possibilities in one open model.

This choice of state is important. Discretizing the second-order equation directly can yield a good scheme, but splitting it into momentum and strain exposes which variables store energy and which traces exchange power. It also reveals a compatibility constraint: because $q=w_s$, admissible strains lie in the range of a derivative. Boundary conditions and topology determine whether additional harmonic modes exist.

## What the spatial discretization must reproduce

Choose discrete energy variables $z_h$, efforts $e_h$, and a discrete Hamiltonian $H_h$. The semidiscrete target is

$$
M\dot z=(J-R)e+B u,
\qquad e=\nabla_z H_h(z),
$$

or, depending on coefficient conventions, $e=M^{-1}\nabla H_h$. Here $M$ represents the duality pairing. The essential algebraic conditions are

$$
J^\top=-J,
\qquad R^\top=R\succeq0,
\qquad y=B^\top e,
$$

in the correct mass-matrix pairing. They imply

$$
\dot H_h=-e^\top R e+u^\top y.
$$

One must not test skew-symmetry in Euclidean coordinates if efforts and flows live in weighted coefficient spaces. For $\dot z=Ae$, the relevant condition may be $M A+A^\top M=0$, or skewness of a block operator between dual mass matrices. A common implementation error is to move mass matrices across equations and then check the wrong transpose identity.

Four pieces must align:

1. **Discrete energy.** Quadrature, material coefficients, and basis functions define $H_h$. Positive density, stiffness, or capacitance should yield a bounded-below energy.
2. **Discrete integration by parts.** The volume operator and trace operator must satisfy a summation-by-parts or Green identity.
3. **Port orientation.** Outward-normal signs determine whether boundary powers add or cancel.
4. **Constitutive closure.** Efforts must be consistent derivatives of the same $H_h$ used in the balance; independently interpolating a nonlinear constitutive law can break this chain rule.

## Three principal construction routes

### Mixed finite elements and discrete exterior calculus

The geometric route assigns variables to differential forms of appropriate degree and uses compatible spaces from a discrete de Rham complex,

$$
V_h^0\xrightarrow{d_h}V_h^1\xrightarrow{d_h}\cdots,
\qquad d_h^2=0.
$$

Incidence matrices represent topology and metric-dependent mass (Hodge) matrices represent constitutive laws. Mixed weak formulations integrate selected derivatives by parts, exposing boundary traces and producing an algebraic Dirac structure. Because incidence identities hold exactly, conservation and compatibility do not depend on mesh refinement.

For the string, approximate momentum and strain in compatible spaces, test each balance, and integrate one derivative by parts. The resulting derivative blocks occur with opposite transposes, while the leftover endpoint evaluation forms $B u$. The assembled interconnection matrix is skew by construction. Partitioned finite elements deliberately choose which equation is integrated by parts so that boundary variables remain explicit and the discrete power pairing mirrors the continuum one.

Advantages are geometric clarity, natural handling of complex meshes, and compatibility with existing finite-element machinery. Costs include careful trace-space design, possible differential-algebraic equations (DAEs), and inf-sup or rank conditions. Exact quadrature is not automatically required, but the *same* quadrature-induced pairing must be used consistently.

### Summation-by-parts finite differences and spectral elements

An SBP derivative $D$ and positive mass/norm matrix $P$ satisfy

$$
P D+D^\top P=E,
$$

where $E$ contains signed boundary evaluation. This is the finite-dimensional integration-by-parts formula. Inserting $D$ into the two-field wave system gives cancellation of interior power and leaves only $E$-terms. Boundary conditions can be imposed weakly with simultaneous-approximation terms; their coefficients must be chosen so the resulting port termination is passive.

This route is attractive for tensor-product grids and high-order methods. Its hazard is assuming that any high-order derivative matrix is acceptable. Accuracy of $D$ does not imply the SBP identity, and nonlinear variable-coefficient terms may require split forms or compatible quadrature to prevent aliasing from creating energy. See [[Spectral methods and aliasing]].

### Finite-volume and discrete-gradient constructions

Finite volumes already balance fluxes cell by cell. A pH construction pairs oriented face fluxes with cell or face efforts so internal-face powers cancel and boundary-face powers remain. This is especially natural for conservation laws and network-like meshes. However, conservation of the primary variable alone does not guarantee an energy or entropy balance; numerical fluxes must be designed for the relevant storage functional.

Discrete gradients can preserve the chain rule for nonlinear $H_h$. A map $\bar\nabla H(x^n,x^{n+1})$ satisfying

$$
H(x^{n+1})-H(x^n)
=\bar\nabla H^\top(x^{n+1}-x^n)
$$

lets a skew interconnection conserve energy exactly under time stepping. This is a temporal construction, but it is useful only after the spatial power identity is correct.

## Boundary conditions are port terminations

Suppose a semidiscrete open system satisfies

$$
\dot H_h=-e^\top R e+u^\top y.
$$

A static boundary law $u=-K y+r$, with $K\succeq0$, gives

$$
\dot H_h=-e^\top R e-y^\top K y+r^\top y.
$$

Thus boundary damping is added without reopening the interior discretization. Two subsystems with port variables $(u_1,y_1)$ and $(u_2,y_2)$ may be interconnected by $u_1=y_2$, $u_2=-y_1$; then $u_1^\top y_1+u_2^\top y_2=0$. This modular cancellation is the applied payoff: separately verified models of a flexible structure, actuator, circuit, and controller can be connected while preserving the total power law.

Sign and causality choices still matter. Different authors swap flow and effort or transform boundary traces. Such transformations are harmless only if they preserve the bilinear power product. Before connecting components, write each port's units and positive direction. Force times velocity, voltage times current, and pressure times volume flux are power; force paired with displacement is not.

## Space preservation is not time preservation

After spatial discretization, a generic time integrator can spoil the balance. For a closed linear quadratic system, symplectic methods usually bound long-time energy error but do not necessarily conserve energy at every step; energy-preserving methods conserve the specified Hamiltonian but need not be symplectic. With ports and dissipation, the desired fully discrete statement is an inequality or equality such as

$$
H_h^{n+1}-H_h^n
=-\Delta t\,\mathcal D^{n+1/2}
+\Delta t\,(u^{n+1/2})^\top y^{n+1/2}.
$$

The implicit midpoint rule gives this exactly for quadratic $H_h$ when the port variables are sampled consistently. Average-vector-field or discrete-gradient methods extend an exact chain rule to nonlinear Hamiltonians. Algebraically stable Runge--Kutta methods can preserve passivity under suitable hypotheses. Solver tolerances matter: an incompletely converged implicit solve appears as unexplained power residual.

Time adaptivity should therefore monitor both local truncation error and the energy residual. A small state error estimate does not certify passivity, while a small energy residual does not certify phase accuracy.

## DAEs, constraints, and reduction

Mixed formulations often yield

$$
E\dot x=(J-R)\nabla H(x)+Bu
$$

with singular $E$. Singularity may encode constraints, gauges, or variables with no storage rather than a defect. Eliminating algebraic variables can destroy sparsity or hide ports; stabilizing them indiscriminately can inject artificial power. Index analysis and consistent initial conditions are part of the discretization.

Model reduction must preserve the same structure. A naive Galerkin basis can make the reduced interconnection non-skew in the reduced energy pairing or approximate nonlinear efforts inconsistently. Structure-preserving projection chooses compatible trial/test bases and reduces the Hamiltonian, interconnection, dissipation, and ports as a unit. Hyper-reduction is particularly delicate because sampled nonlinear terms can break the discrete chain rule; see [[Hyper-reduction for nonlinear PDE models]].

## A practical construction recipe

1. **Declare energy variables and units.** Write $H$ and verify that its variational derivatives are the intended efforts.
2. **Derive the continuum balance.** Perform integration by parts with all boundary terms present. Name the conjugate boundary variables and orientations.
3. **Choose compatible approximation spaces.** Match traces and differential maps; decide where each weak integration by parts occurs.
4. **Assemble one pairing consistently.** Use the same quadrature and material representation in $H_h$, efforts, and operator adjoints.
5. **Prove the matrix identity.** Show skew-adjointness plus the boundary matrix symbolically, before running trajectories.
6. **Close ports passively.** Encode boundary conditions as power-preserving interconnections or dissipative relations.
7. **Choose a compatible time method.** State whether the promised property is exact balance, passivity, symplecticity, or bounded drift.
8. **Measure both physics and approximation.** Report convergence norms, phase error, constraint residuals, and power residuals.

## Verification ladder

**Level 1 — operator audit.** Numerically check mass-matrix symmetry and positivity, $J+J^\top$, the SBP/Green identity, $R\succeq0$, trace ranks, and units. Scale residuals by operator norms rather than quoting raw machine-sized numbers.

**Level 2 — manufactured convergence.** Use a smooth forced solution with nonzero boundary power. Verify expected orders for state and traces. Zero-port tests cannot detect many sign or trace bugs.

**Level 3 — instantaneous power audit.** For random admissible states compare $\nabla H_h^\top\dot z$ with $-e^\top Re+u^\top y$. This isolates spatial assembly from time integration.

**Level 4 — closed-system trajectory.** With $R=0$ and ports closed, test long-time energy and phase behavior. With $R\ne0$, test monotone decay. Record nonlinear-solver work and tolerance.

**Level 5 — interconnection test.** Couple two independently assembled meshes through a port and verify cancellation of exchanged power. This catches orientation and interpolation errors invisible in isolated components.

**Level 6 — refinement and adversarial regimes.** Refine space and time independently; test heterogeneous coefficients, distorted meshes, stiffness, nonlinear constitutive laws, and boundary switching. Compare against a trusted reference and [[Consistency stability and convergence]].

## Limitations and common failure modes

Structure preservation is not a substitute for consistency or convergence. A perfectly passive method may have severe dispersion, excessive numerical dissipation, locking, or poor shock selection. Conversely, exact energy conservation is wrong for systems whose physically relevant solution dissipates energy, including entropy solutions after shocks. The storage functional must match the model and solution concept.

Other recurring failures are: declaring a differentiation matrix skew while silently discarding its boundary form; using inconsistent quadrature for energy and efforts; imposing essential boundary conditions before identifying the conjugate port; connecting nonmatching meshes with interpolation that does not preserve power; mistaking Euclidean skewness for weighted skew-adjointness; and reporting energy conservation while constraints drift.

For nonlinear PDEs, exact evaluation can be expensive and the Hamiltonian may be nonconvex. Passivity bounds storage but need not guarantee uniqueness, bounded state norms, or absence of finite-time singularities. Open-system stability also needs assumptions about the supplied input and detectability. Finally, terminology varies: “port-Hamiltonian discretization” may mean a discretization derived from a Dirac structure, any semidiscrete pH realization, or a postprocessed matrix factorization. The derivation and preserved identity should be stated explicitly.

## Sources

- Arjan van der Schaft and Dimitri Jeltsema, [*Port-Hamiltonian Systems Theory: An Introductory Overview*](https://doi.org/10.1561/2000000023), *Foundations and Trends in Systems and Control* 1 (2014). Authoritative system-theoretic treatment of passivity, Dirac structures, ports, and interconnection.
- Arjan van der Schaft and Bernhard Maschke, [“Hamiltonian formulation of distributed-parameter systems with boundary energy flow”](https://doi.org/10.1006/jmsp.2001.2379), *Journal of Geometry and Physics* 42 (2002). Foundational Stokes--Dirac formulation for distributed systems.
- Y. Le Gorrec, H. Zwart, and B. Maschke, [“Dirac structures and boundary control systems associated with skew-symmetric differential operators”](https://doi.org/10.1137/S0363012902416244), *SIAM Journal on Control and Optimization* 44 (2005). Rigorous boundary-control and differential-operator framework.
- Andrea Brugnoli, Daniel Alazard, Valérie Pommier-Budinger, and Denis Matignon, [“Port-Hamiltonian formulation and symplectic discretization of plate models”](https://doi.org/10.1016/j.jmaa.2018.12.035), *Journal of Mathematical Analysis and Applications* 474 (2019). Applied mixed finite-element/symplectic treatment for distributed structures.
- Antoine Bendimerad-Hohl, Denis Matignon, Ghislain Haine, and Laurent Lefèvre, [“Partitioned finite element method for port-Hamiltonian systems”](https://doi.org/10.1007/s11071-018-4383-9), *Nonlinear Dynamics* 95 (2019). Construction preserving the power balance while retaining boundary ports.
- Jan C. Willems, [“Dissipative dynamical systems, Part I: General theory”](https://doi.org/10.1007/BF00276493), *Archive for Rational Mechanics and Analysis* 45 (1972). Primary source for dissipativity and supply-rate reasoning underlying passivity.
- Ernst Hairer, Christian Lubich, and Gerhard Wanner, [*Geometric Numerical Integration*, 2nd ed.](https://doi.org/10.1007/3-540-30666-8), Springer (2006). Authoritative distinctions among symplectic, energy-preserving, and long-time integration behavior.

## Open questions

- Which compatible finite-element pairs give the best accuracy-to-cost ratio for nonlinear three-dimensional pH PDEs with mixed boundary causality?
- How can nonmatching-grid interface operators preserve power exactly while remaining high-order, local, and robust under moving meshes?
- When shocks or irreversible thermodynamics are present, what is the most useful synthesis of port-Hamiltonian power balance with entropy-stable discretization?
- How should adaptive mesh and time refinement allocate error between state accuracy, constraint violation, and power-balance residual?
