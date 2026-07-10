---
title: Weak solutions and why shocks require them
created: 2026-07-09
source: llm
status: seed
tags: [mathematics, partial-differential-equations, applied-mathematics, conservation-laws, hyperbolic-pdes]
as_of: 2026-07-09
desk: Applied partial differential equations
---
Weak solutions let a conservation law remain meaningful after characteristics collide and a smooth profile becomes a shock, but an entropy condition is needed to select the physically relevant weak solution.

Up: [[Applied PDE research frontier 2026]]

## The problem: a valid model outlives its derivatives

Consider the one-dimensional scalar conservation law

$$
u_t+f(u)_x=0,\qquad u(x,0)=u_0(x).
$$

Here $u(x,t)$ is a conserved density and $f(u)$ is its flux. Depending on the model, $u$ might be vehicle density, fluid mass, or the height of a shallow layer. For any fixed interval $[a,b]$, the differential equation formally implies

$$
\frac{d}{dt}\int_a^b u(x,t)\,dx=f(u(a,t))-f(u(b,t)).
$$

The amount inside changes only through the boundary. This integral balance is the model's physical content. The pointwise derivatives in the PDE are a convenient encoding of it when $u$ is smooth.

Nonlinear transport can destroy that smoothness even from smooth initial data. If $f$ is differentiable, a classical solution satisfies

$$
u_t+f'(u)u_x=0.
$$

Along a characteristic $x(t)$ with $x'(t)=f'(u)$, the value of $u$ is constant. Different values therefore travel at different speeds. For inviscid Burgers' equation,

$$
u_t+\left(\frac{u^2}{2}\right)_x=0,
$$

the characteristic speed is $f'(u)=u$. If larger values begin to the left of smaller ones, the faster rear characteristics catch the slower front characteristics. A classical construction then tries to assign several values of $u$ to one point. The first crossing corresponds to an unbounded spatial gradient, not to a failure of mass conservation. The physically useful continuation is discontinuous: the compressed transition becomes a shock.

A discontinuity has no ordinary derivative at its jump. Demanding that $u_t$ and $f(u)_x$ exist pointwise would therefore discard exactly the phenomena—traffic jams, hydraulic jumps, blast waves—that the conservation law is supposed to represent. The right response is to weaken the meaning of “solves,” while retaining the balance law.

## Deriving the weak form

Let $u$ first be a smooth solution on $\mathbb R\times(0,\infty)$. Choose a smooth test function $\varphi(x,t)$ with compact support in $\mathbb R\times[0,\infty)$. Multiply the PDE by $\varphi$ and integrate:

$$
\int_0^\infty\!\int_{\mathbb R}
\bigl(u_t\varphi+f(u)_x\varphi\bigr)\,dx\,dt=0.
$$

Integration by parts moves derivatives off $u$ and onto the smooth probe. Compact support removes the spatial boundary terms and the term at large time. The lower time boundary remains:

$$
\int_0^\infty\!\int_{\mathbb R}
\bigl(u\varphi_t+f(u)\varphi_x\bigr)\,dx\,dt
+\int_{\mathbb R}u_0(x)\varphi(x,0)\,dx=0.
$$

This identity makes sense when $u$ is merely locally integrable and $f(u)$ is locally integrable. It contains no derivative of $u$. We therefore **define** such a function $u$ to be a weak, or distributional, solution if the identity holds for every admissible $\varphi$ and the initial data are attained in the stated weak sense.

The word “weak” describes how the equation is tested, not a claim that the solution is approximate. A discontinuous weak solution can satisfy conservation exactly. Conversely, a smooth approximation can violate conservation systematically.

The test-function form is also the global counterpart of the control-volume balance. One may approximate the indicator of a space-time control volume by smooth test functions. The resulting boundary terms say that the conserved quantity inside changes by flux through the boundary. This equivalence explains why the weak form is not an arbitrary relaxation: it preserves the statement from which the differential PDE was derived.

There are technical choices hidden in this compact definition. The domain and boundary conditions must be specified; on a bounded interval, boundary fluxes do not vanish. One must also state a function class, such as $L^\infty$ or bounded variation, and what it means to attain $u_0$. These choices matter in existence and uniqueness theorems. For the scalar Cauchy problem on $\mathbb R$, bounded initial data and a sufficiently regular flux are the standard setting for the entropy theory described below.

## A moving jump forces Rankine–Hugoniot

Suppose a weak solution is smooth except across a curve $x=s(t)$, with left and right traces $u_L(t)$ and $u_R(t)$. Conservation determines the permissible jump speed. Enclose a short piece of the curve in a narrow space-time control volume. As its width shrinks, the smooth interior contributions vanish, while the two traces and the motion of the boundary remain. The result is

$$
s'(t)(u_R-u_L)=f(u_R)-f(u_L).
$$

Using the jump notation $[g]=g_R-g_L$, this is

$$
s'[u]=[f(u)].
$$

For a constant-speed shock $x=\sigma t$, with $u_L\ne u_R$,

$$
\sigma=\frac{f(u_R)-f(u_L)}{u_R-u_L}.
$$

This is the Rankine–Hugoniot condition. It says that the interface cannot move arbitrarily: its speed is the secant slope of the flux between the two states. For Burgers' flux $f(u)=u^2/2$,

$$
\sigma=\frac{u_L+u_R}{2}.
$$

Take Riemann initial data $u_0=u_L$ for $x<0$ and $u_0=u_R$ for $x>0$. If $u_L=1$ and $u_R=0$, the discontinuity travels right at speed $1/2$. This satisfies the weak equation even though neither derivative exists classically on the shock line.

For a system $U_t+F(U)_x=0$, the condition becomes

$$
\sigma(U_R-U_L)=F(U_R)-F(U_L).
$$

It is now a vector relation: not every pair of states can be connected by a single shock. In compressible gas dynamics these relations encode conservation of mass, momentum, and total energy across a shock. Their satisfaction is necessary for a discontinuity to be a weak solution, but it is not sufficient to determine which discontinuities can arise physically.

## Conservation alone does not give uniqueness

Weakening the derivatives enlarges the solution class too much. Burgers' Riemann data make the issue visible. When $u_L<u_R$, the self-similar rarefaction

$$
u(x,t)=
\begin{cases}
u_L, & x/t\le u_L,\\
x/t, & u_L<x/t<u_R,\\
u_R, & x/t\ge u_R
\end{cases}
$$

is a weak solution. But the discontinuity traveling at $\sigma=(u_L+u_R)/2$ also satisfies Rankine–Hugoniot. The second solution is an “expansion shock”: characteristics on both sides run away from the interface, so information would have to emerge from the shock to maintain it. Conservation by itself does not reject this backward mechanism.

For $u_L>u_R$, the geometry reverses. Characteristics enter the shock from both sides. Burgers' shock speed lies between their speeds,

$$
f'(u_R)<\sigma<f'(u_L),
$$

and the shock represents compression. This characteristic inequality is the scalar version of a Lax admissibility condition. It separates compressive shocks from expansion shocks for a convex flux.

The more general scalar selection rule uses convex entropy pairs. Let $\eta(u)$ be convex and choose an entropy flux $q(u)$ satisfying

$$
q'(u)=\eta'(u)f'(u).
$$

Every smooth solution obeys the additional conservation law

$$
\eta(u)_t+q(u)_x=0.
$$

Across shocks, the selected solution instead satisfies the distributional inequality

$$
\eta(u)_t+q(u)_x\le 0.
$$

Equivalently, for every nonnegative compactly supported test function $\varphi$,

$$
\int_0^\infty\!\int_{\mathbb R}
\bigl(\eta(u)\varphi_t+q(u)\varphi_x\bigr)\,dx\,dt
+\int_{\mathbb R}\eta(u_0)\varphi(x,0)\,dx\ge0.
$$

The inequality permits entropy to be dissipated at unresolved shocks, in the sign convention where $\eta$ is a mathematical entropy. Physical thermodynamic entropy often uses the opposite sign, so statements such as “entropy decreases” must not be transferred between conventions without checking definitions.

For scalar conservation laws, the Kruzhkov family $\eta_k(u)=|u-k|$, with corresponding $q_k(u)=\operatorname{sgn}(u-k)(f(u)-f(k))$, supplies a complete admissibility criterion under standard assumptions. In a standard modern formulation, for $u_0\in L^\infty(\mathbb R^d)$ and locally Lipschitz flux $f:\mathbb R\to\mathbb R^d$, Kruzhkov's theory gives an entropy solution, uniqueness in the bounded entropy class, and $L^1$ contraction when the difference of two initial data is integrable. Precise statements also encode attainment of the initial trace. This is not a blanket uniqueness theorem for arbitrary systems. Multidimensional systems such as compressible Euler are much subtler, and a single entropy inequality need not recover a comparable general uniqueness theory.

## Why vanishing viscosity selects entropy solutions

A revealing regularization adds small diffusion:

$$
u_t+f(u)_x=\varepsilon u_{xx},\qquad \varepsilon>0.
$$

The parabolic term smooths a jump into a thin layer. Multiply this equation by $\eta'(u)$ for convex $\eta$. Using the chain rule gives

$$
\eta(u)_t+q(u)_x
=\varepsilon \eta(u)_{xx}-\varepsilon\eta''(u)|u_x|^2.
$$

Because $\eta''\ge0$, the last term is nonpositive. If a sufficiently controlled sequence $u^\varepsilon$ converges as $\varepsilon\to0$, the diffusion term disappears distributionally while the nonpositive entropy production survives as an inequality. This calculation explains why the inviscid limit selects entropy-admissible shocks rather than every weak solution.

For Burgers' equation, a traveling viscous shock has thickness proportional to $\varepsilon/|u_L-u_R|$ and approaches the Rankine–Hugoniot discontinuity as viscosity vanishes. This is both a physical mechanism—molecular dissipation acts in a narrow region—and a mathematical approximation device. Kruzhkov's existence argument uses vanishing viscosity and viscosity-independent estimates in the scalar theory.

Three distinctions prevent overclaiming. First, “vanishing viscosity solution” here is a limit of a hyperbolic conservation law with added diffusion; it is not the same definition as a viscosity solution of a Hamilton–Jacobi equation, despite the related terminology. Second, a different small-scale regularization can select a different nonclassical shock. Diffusive-dispersive limits, phase boundaries, and undercompressive shocks may require a kinetic relation in addition to an entropy inequality. Third, convergence of a particular regularization must be proved in an appropriate topology; the formal entropy calculation alone does not establish compactness or identify a limit.

## Numerical implications

The weak formulation tells a numerical method what it must preserve. A finite-volume scheme evolves cell averages $\bar u_i^n$ through interface fluxes:

$$
\bar u_i^{n+1}=\bar u_i^n-\frac{\Delta t}{\Delta x}
\left(F_{i+1/2}^n-F_{i-1/2}^n\right).
$$

When summed over cells, internal fluxes cancel pairwise. The discrete total changes only through boundary fluxes, mirroring the continuum control-volume law. This telescoping property is why [[Finite-volume methods for conservation laws]] are natural for shocks and why writing a nonlinear PDE in conservative form is consequential rather than cosmetic.

Conservation is still only the first gate. The same weak nonuniqueness reappears discretely. In the classical Lax–Wendroff consistency result, if a conservative, consistent finite-difference approximation remains uniformly bounded and converges almost everywhere as the grid is refined, then its limit is a weak solution. The theorem identifies a limit already assumed to exist; it does not itself prove convergence, entropy admissibility, or correctness for a system. Monotone scalar schemes provide numerical dissipation and converge to the entropy solution under standard conditions. Higher-order methods need devices such as limiters, entropy-stable fluxes, or nonlinear reconstruction to suppress oscillations near discontinuities without smearing every smooth feature.

This creates a real tradeoff. Too little numerical dissipation can produce Gibbs-like oscillations, negative densities or pressures, and convergence to an inadmissible discontinuity. Too much dissipation broadens shocks and erases contacts or small waves. Grid refinement should shrink a captured shock to fewer physical length units, but pointwise error remains inappropriate exactly at the moving jump. Useful checks include conservation error, convergence of integral quantities, shock-location error, and comparison against a Riemann solution. A visually sharp profile is evidence, not a theorem of correctness.

Nonconservative discretization is especially dangerous. If one expands $f(u)_x$ as $f'(u)u_x$ and discretizes the product without a conservative flux, the two forms agree for smooth functions but not necessarily across a jump. The computed shock speed can then be wrong even as the grid is refined. Clawpack's teaching examples explicitly use Burgers' equation to demonstrate this failure. For genuinely nonconservative systems, one must specify additional structure, such as a path defining the nonconservative product; scalar conservation-law intuition cannot simply be imported.

## Applied bridge: what a shock represents

In traffic flow, $u=\rho$ is vehicle density and $f(\rho)=\rho V(\rho)$ is vehicle flux. A discontinuity can mark the upstream-moving edge of a traffic jam. Rankine–Hugoniot says its speed is

$$
\sigma=\frac{f(\rho_R)-f(\rho_L)}{\rho_R-\rho_L},
$$

so a jam boundary can move backward even though every car moves forward. The result follows from counting cars across a moving boundary, not from assigning an ordinary derivative to the density jump.

In gas dynamics, the conserved vector contains density, momentum, and total energy. Shocks are thin compared with macroscopic scales, and the inviscid Euler model idealizes them as surfaces. The weak form preserves the balances across those surfaces; Rankine–Hugoniot couples the states and shock speed; an admissibility criterion distinguishes compressive shocks. Actual Navier–Stokes viscosity and heat conduction resolve internal shock structure at smaller scales, motivating—but not automatically proving—the inviscid entropy selection.

This same hierarchy is useful beyond these examples: begin with the conserved quantities, derive the integral balance, permit discontinuities through the weak form, determine jump motion from Rankine–Hugoniot, and then state the model-specific admissibility or regularization. Skipping the last step confuses “conservative” with “uniquely physical.”

## Theorem, mechanism, and evidence

- **Definition:** the test-function identity defines a distributional weak solution. It is an exact reformulation for smooth solutions and an extension to nonsmooth ones.
- **Necessary jump law:** Rankine–Hugoniot follows from weak conservation when suitable left and right traces exist. It does not alone prove that a global solution exists or that the jump is admissible.
- **Scalar theorem:** under standard regularity and boundedness assumptions, Kruzhkov entropy solutions have existence, uniqueness, and $L^1$ stability. The scope is scalar conservation laws, not arbitrary hyperbolic systems.
- **Selection mechanism:** vanishing diffusion formally produces the entropy inequality; rigorous convergence needs estimates and compactness. The scalar theory supplies such results in its setting.
- **Numerical theorem:** under the classical Lax–Wendroff hypotheses, a uniformly bounded conservative consistent approximation that converges almost everywhere has a weak solution as its limit. The theorem does not supply convergence, and entropy convergence needs more.
- **Computational evidence:** a resolved shock moving at the predicted speed, with decreasing integral error under refinement, supports an implementation. A single plot cannot establish convergence or admissibility.

## Limitations

This tutorial treats a homogeneous scalar law in one spatial dimension as the main model. Balance laws $u_t+f(u)_x=s(u,x,t)$ add sources; spatially discontinuous fluxes require interface conditions; boundaries require an entropy-compatible treatment; and measure-valued or stochastic solutions introduce further notions of weakness. Systems bring interacting characteristic families, contacts, vacuum, and genuinely nonclassical waves. In several dimensions, even stating traces on irregular shock sets can require substantial analysis.

Weak solutions are also broader than shocks. Elliptic and parabolic PDEs use Sobolev weak formulations based on integration by parts, often with coercivity and energy estimates rather than entropy inequalities. The shared idea is to transfer derivatives to test functions; the admissibility and uniqueness machinery depends on the PDE class. Thus “take a weak solution” is the start of a mathematical specification, not its completion.

## Sources

- [S. N. Kruzhkov, “First order quasilinear equations in several independent variables” (1970)](https://www.mathnet.ru/eng/sm3372) — original paper record, abstract, and English PDF; establishes the scalar generalized-solution theory and uses vanishing viscosity.
- [P. D. Lax, “Hyperbolic systems of conservation laws II” (1957)](https://doi.org/10.1002/cpa.3160100406) — original journal record for shock and characteristic theory in hyperbolic systems.
- [Randall J. LeVeque, *Finite Volume Methods for Hyperbolic Problems* companion site](https://depts.washington.edu/clawpack/book2/book.html) — scholarly numerical reference with chapter map, examples, and code.
- [LeVeque/Clawpack book example gallery](https://depts.washington.edu/clawpack/users/claw/doc/gallery/gallery_book.html) — includes the nonconservative Burgers discretization designed to show convergence to an incorrect weak solution.
- [Clawpack documentation](https://www.clawpack.org/) — maintained implementation context for high-resolution Godunov-type finite-volume methods and Riemann solvers.

## Open questions

- Which entropy-stable flux gives the best accuracy–robustness tradeoff for a chosen system, mesh, and positivity constraint?
- When a physical regularization contains both diffusion and dispersion, what kinetic relation replaces the scalar convex-entropy selection rule?
- Which weak or measure-valued solution concept remains useful when multidimensional systems lack a general uniqueness theory?
- How should shock-location error and integral conservation error be combined into a benchmark that fairly compares shock-capturing schemes?
