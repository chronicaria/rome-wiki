---
title: Mass-shell relation
number: "8.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mass-shell]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A relativistic particle's four-momentum is not free to be anything: it is locked onto the mass shell $p^\mu p_\mu = -m^2c^2$, a constraint baked into the geometric action — and the direct ancestor of the string mass formula.

## Energy is not an independent knob

Fix a particle's mass $m$ and three-momentum $\vec p$, and relativity has already fixed its energy $E$. That is this note's single claim: once you know how heavy something is and how fast it moves, no further input sets its energy.

Geometrically, plot the four numbers $(E/c, \vec p)$ as a point in momentum space. The allowed points do not fill the space — they lie on a curved surface, a hyperboloid (strictly, its positive-energy sheet), called the **mass shell**. "On shell" means "obeying relativity's energy budget"; "off shell" points are forbidden for a real particle. The mass $m$ labels *which* shell.

Why this matters for a string course: a string is a particle with internal structure, and the analog of this one equation becomes the equation that *predicts the entire particle spectrum* of the theory. Everything downstream is a dressed-up mass shell.

## Where the constraint comes from

From [[Free particle equation of motion]], the four-momentum of a free particle is

$$p^\mu = mc\,\frac{dx^\mu}{ds},$$

where $s$ is proper length along the worldline (physical proper time is $s/c$; see [[Proper length and proper time]]). The tangent $dx^\mu/ds$ has a *fixed* norm that comes straight from the definition of $s$. Starting from $ds^2 = -\eta_{\mu\nu}\,dx^\mu dx^\nu$ (mostly-plus signature) and dividing by $ds^2$,

$$\eta_{\mu\nu}\,\frac{dx^\mu}{ds}\frac{dx^\nu}{ds} = -1. \tag{1}$$

A worldline measured by its own proper length has a unit timelike tangent. This is not a law of motion but the meaning of "proper length," true for every massive particle by definition.

Now contract the momentum with itself:

$$p^\mu p_\mu = (mc)^2\,\eta_{\mu\nu}\frac{dx^\mu}{ds}\frac{dx^\nu}{ds} = (mc)^2(-1) = -m^2c^2.$$

**The mass-shell relation:**

$$\boxed{\,p^\mu p_\mu = -m^2c^2\,} \tag{2}$$

The four components of $p^\mu$ obey one equation, so only three are independent: energy is fixed by momentum and mass. This is the hyperboloid promised above, and in this classical module "on shell" means "satisfies (2)."

The minus sign is the signature at work: $p^\mu p_\mu = -(p^0)^2 + \vec p\cdot\vec p$, and a timelike momentum has $(p^0)^2$ winning, so the invariant comes out negative, equal to $-m^2c^2$.

## Same result without picking a gauge

Equation (1) used $s$ itself as the worldline parameter. The constraint does not need that choice — it is algebraic, not dynamical. With an arbitrary parameter $\tau$, the action reads $S = -mc\int d\tau\,\sqrt{-\dot x^2}$, where $\dot x^\mu \equiv dx^\mu/d\tau$ and $\dot x^2 \equiv \eta_{\mu\nu}\dot x^\mu\dot x^\nu$, and the conjugate momentum (computed in [[Free particle equation of motion]]) is

$$p_\mu = mc\,\frac{\dot x_\mu}{\sqrt{-\dot x^2}},$$

so

$$p^\mu p_\mu = m^2c^2\,\frac{\dot x^2}{-\dot x^2} = -m^2c^2.$$

The $\dot x^2$ cancels no matter what $\tau$ is. So the mass shell is not a fifth equation of motion competing with $dp_\mu/d\tau = 0$; it is an identity forced by the square-root structure of the action, satisfied by every trajectory before any dynamics.

This has a striking consequence for the Hamiltonian. In the arbitrary-$\tau$ description, with $L = -mc\sqrt{-\dot x^2}$,

$$H = p_\mu\dot x^\mu - L = mc\,\frac{\dot x^2}{\sqrt{-\dot x^2}} + mc\sqrt{-\dot x^2} = 0.$$

The canonical Hamiltonian vanishes identically — Euler's theorem at work, since $L$ is homogeneous of degree one in the velocities $\dot x^\mu$ and any such Lagrangian gives $H = p\cdot\dot x - L \equiv 0$. This does not mean the particle sits still. It means "time" here is the arbitrary label $\tau$, which carries no physics, so nothing generates evolution in $\tau$. The physical content lives not in a Hamiltonian but in the constraint (2), rewritten as $p^2 + m^2c^2 = 0$. A vanishing Hamiltonian that is really a constraint is how gauge theories and gravity are built, and it returns for the string as the Virasoro constraints.

## Component form: $E^2 = (pc)^2 + (mc^2)^2$

Write $p^\mu = (E/c,\,\vec p)$ and expand (2) with $\eta = \mathrm{diag}(-,+,+,+)$:

$$p^\mu p_\mu = -\frac{E^2}{c^2} + \vec p\cdot\vec p = -m^2c^2,$$

hence

$$\boxed{\,E^2 = (\vec p\,c)^2 + (mc^2)^2\,} \tag{3}$$

The famous energy–momentum relation is the mass shell written in components: a right triangle with legs $|\vec p|\,c$ and $mc^2$ and hypotenuse $E$, so momentum and rest energy add in quadrature.

Two limits make it concrete:

- **At rest:** $\vec p = 0 \Rightarrow E = mc^2$. The rest energy.
- **Massless:** $m = 0 \Rightarrow E = |\vec p|\,c$. The photon's dispersion, a straight line through the origin rather than a hyperbola. The geometric action $-mc\int ds$ collapses to zero here, yet the *constraint* (2) survives as $p^2 = 0$ — one reason the constraint, not the action, is the more fundamental object.

**Consistency check.** Independently, [[Proper-time action]] gives $E = \gamma mc^2$ and $|\vec p| = \gamma m v$. Then

$$E^2 - (pc)^2 = \gamma^2 m^2 c^4 - \gamma^2 m^2 v^2 c^2 = \gamma^2 m^2 c^4\Big(1 - \frac{v^2}{c^2}\Big) = m^2 c^4,$$

using $\gamma^2(1 - v^2/c^2) = 1$. Signs and factors agree.

## Why a string theorist cares

The mass shell is the conceptual prototype of the course's central object. Three parallels, from safest to most exciting:

1. **A constraint, not an equation of motion.** The mass shell restricts $p^\mu$; it is separate from the dynamical law $dp_\mu/d\tau = 0$. For the string, the [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance|reparameterization invariance]] of the [[Nambu-Goto action|Nambu–Goto action]] likewise produces constraints (the vanishing of the worldsheet stress tensor). The particle's single mass-shell condition becomes an *infinite tower* of them — the Virasoro constraints.

2. **Light-cone coordinates solve it linearly — the reason quantization is tractable.** Split spacetime with $p^\pm = \tfrac{1}{\sqrt2}(p^0 \pm p^1)$ and transverse $p^I$ ($I = 2,\dots,D-1$). The scalar product becomes $p^\mu p_\mu = -2p^+p^- + p^Ip^I$: still quadratic overall, but *linear* in $p^-$, and that linearity is the entire point of light-cone coordinates. Setting it to $-m^2c^2$:
$$\boxed{\;p^- = \frac{p^Ip^I + m^2c^2}{2p^+}\;},\qquad p^+ \neq 0. \tag{4}$$
The quadratic constraint (2) turns into an *explicit formula* for the dependent component $p^-$ — no square root, no sign ambiguity. In [[Light-cone gauge]] this is exactly why the string can be quantized: choose $p^-$ to be whatever the constraint demands, and every remaining variable is physical.

3. **Mass becomes an output.** For a point particle $m$ is an input you dial in by hand. For a string, $m$ is *computed*: the analog of (2) has a right-hand side built from the string's vibrational modes — oscillator number operators plus a normal-ordering constant. Different vibration patterns give different masses, so a single string reproduces a whole spectrum of particles. The exact open- and closed-string formulas, with their numerical factors and level-matching conditions, are stated precisely later; what matters now is the structure: **the mass shell, read backwards, is a machine that turns geometry into a particle spectrum.**

## Open questions

- The exact string mass formulas, intercepts, and level-matching conditions are deferred to Modules 14–15.
- The constraint $p^2 + m^2c^2 = 0$ should later be shown to *generate* reparameterizations via Poisson brackets — making precise the claim that the vanishing Hamiltonian is the physically meaningful object.
- The massless case ($m = 0$) needs an auxiliary einbein action to keep the constraint alive once the $m$-weighted action degenerates. Points toward the [[Polyakov action]].

## Exercise

A particle has energy $E$ and moves along the $x^1$ axis with momentum $\vec p = (p, 0, 0)$, so its transverse momentum is $p^I = 0$. Using the light-cone components $p^\pm = \tfrac{1}{\sqrt2}(p^0 \pm p^1)$ with $p^0 = E/c$ and $p^1 = p$, show from the definitions that $-2p^+p^- + p^Ip^I = -E^2/c^2 + p^2$, so that the light-cone constraint $-2p^+p^- + p^Ip^I = -m^2c^2$ is (3) in disguise. Then take the ultrarelativistic right-mover $p \to +E/c$ (so $m \to 0$): what happens to $p^-$? Does formula (4) survive this limit — and if it does, for which massless motion does it actually fail?

> [!success]- Solution
> Compute the two light-cone components:
> $$p^+ = \frac{1}{\sqrt2}\Big(\frac{E}{c} + p\Big), \qquad p^- = \frac{1}{\sqrt2}\Big(\frac{E}{c} - p\Big).$$
> Their product is a difference of squares:
> $$p^+p^- = \frac{1}{2}\Big(\frac{E^2}{c^2} - p^2\Big).$$
> With $p^I = 0$,
> $$-2p^+p^- + p^Ip^I = -\Big(\frac{E^2}{c^2} - p^2\Big) = -\frac{E^2}{c^2} + p^2.$$
> Setting this equal to $-m^2c^2$ gives $\dfrac{E^2}{c^2} - p^2 = m^2c^2$, i.e. $E^2 = (pc)^2 + (mc^2)^2$ — exactly (3). The light-cone form and the component form are the same equation.
>
> **Massless right-mover.** As $m \to 0$ with the particle moving in the $+x^1$ direction, $E \to pc$, so $p^- = \tfrac{1}{\sqrt2}(E/c - p) \to 0$ while $p^+ = \tfrac{1}{\sqrt2}(E/c + p) \to \sqrt2\,E/c \neq 0$. In formula (4) the numerator $p^Ip^I + m^2c^2 \to 0$ while the denominator $2p^+$ stays finite, consistently giving $p^- \to 0$. So (4) *survives* this limit — it correctly returns zero.
>
> Formula (4) fails only in the opposite case: a massless particle moving in the $-x^1$ direction, where $p < 0$ and $E = -pc > 0$, so $p^+ = \tfrac{1}{\sqrt2}(E/c + p) \to 0$. Solving the constraint for $p^-$ would then require dividing by $p^+ = 0$ — exactly the excluded case in (4). This is the price of the light-cone split: $x^+$ plays the role of time, so it cannot describe a massless particle moving purely in the $-x^1$ direction ($p^+ = 0$). One always assumes $p^+ \neq 0$, which costs a measure-zero set of states.
