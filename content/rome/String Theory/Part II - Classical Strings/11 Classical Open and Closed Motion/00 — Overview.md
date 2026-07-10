---
title: 00 — Overview
number: "11.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, classical-motion]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Pick the right coordinates and the relativistic string's equation of motion collapses to the ordinary wave equation: the motion is left-moving plus right-moving waves, with open- and closed-string boundary conditions deciding how the two are tied together.

## A guitar string made relativistic

Pluck an ordinary guitar string and a disturbance runs to the ends, reflects, and comes back: that is the wave equation $\ddot y = v^2 y''$, with wave speed $v$ set by tension and mass density. A relativistic string does the same thing, component by component, with disturbances traveling at speed $c$ through the string's label — the only extra baggage is two bookkeeping constraints that keep the coordinate labels honest. This module is that intuition made relativistic.

The collapse is not automatic, and engineering it is the payoff of the module: the raw equation of motion from the [[Nambu-Goto action]] (module 09) is an ugly nonlinear PDE. It becomes the clean wave equation only after a deliberate, physically motivated choice of how to label points along the string.

## The setup: three coordinate choices

Think of the string's history as a map
$$\vec X:\ \text{(worldsheet)}\ \longrightarrow\ \mathbb R^{D-1},$$
sending each point $(t,\sigma)$ — a time and a label along the string — to a position in space. We keep $c$ explicit throughout this module. Three coordinate choices make the algebra collapse (derived in 11.1 [[Wave equation and constraints]]):

1. **Static gauge:** use lab time as worldsheet time, $X^0 = ct$. This solves the time component away, leaving only the spatial curve $\vec X(t,\sigma)$ to find.
2. **Perpendicular label lines:** carry each label forward in time along the normal to the string, so lines of constant $\sigma$ cut the string at right angles.
3. **Energy spacing:** fix the spacing of labels so that equal steps $d\sigma$ carry equal energy, $d\sigma = dE/T_0$ (with $T_0$ the string tension). Then $\sigma$ runs from $0$ to $\sigma_1 = E/T_0$.

With those choices the string's motion is governed by four equations:

$$\text{Wave equation:}\qquad \frac{\partial^2\vec X}{\partial\sigma^2}-\frac{1}{c^2}\frac{\partial^2\vec X}{\partial t^2}=0, \tag{1}$$
$$\text{Constraint 1 (orthogonality):}\qquad \frac{\partial\vec X}{\partial t}\cdot\frac{\partial\vec X}{\partial\sigma}=0, \tag{2}$$
$$\text{Constraint 2 (unit normalization):}\qquad \left(\frac{\partial\vec X}{\partial\sigma}\right)^2+\frac{1}{c^2}\left(\frac{\partial\vec X}{\partial t}\right)^2=1, \tag{3}$$
$$\text{Boundary (free open ends):}\qquad \left.\frac{\partial\vec X}{\partial\sigma}\right|_{\sigma=0}=\left.\frac{\partial\vec X}{\partial\sigma}\right|_{\sigma=\sigma_1}=0. \tag{4}$$

What each one demands: (1) waves travel at speed $c$ in the $\sigma$-label; (2) is choice 2 — the velocity of a labeled point is purely transverse, so labels never slide along the string; (3) is choice 3 — a step $d\sigma$ is a fixed step of energy, fixing the *scale* of the label; (4) no momentum flows off a free end, and since $\vec{\mathcal P}^\sigma=-T_0\,\partial_\sigma\vec X$ in these coordinates, that is exactly the Neumann condition $\partial_\sigma\vec X=0$. Equations (2) and (3) are not evolution equations — they are restrictions on the allowed initial data for the otherwise linear wave equation (1).

## Left-movers, right-movers, and how the ends tie them together

The wave equation (1) has d'Alembert's general solution — an arbitrary left-moving wave plus an arbitrary right-moving wave (derived in 11.2 [[Left-moving and right-moving components]]):
$$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big). \tag{5}$$
$\vec F$ slides toward smaller $\sigma$, $\vec G$ toward larger $\sigma$, both at speed $c$. Constraints (2)–(3) collapse into one statement per mover: $|\vec F'|=|\vec G'|=1$ — each wave is traced at unit speed, so its argument is arc length along the curve it sweeps. That is the energy parameterization reappearing as pure geometry.

The whole difference between open and closed strings is one question: *what happens at the ends of the $\sigma$-interval?*

- **Open string — the ends are mirrors.** The Neumann condition (4) reflects the right-mover into the left-mover. The two arbitrary functions collapse to *one* quasi-periodic waveform $\vec F$ (derived in 11.3 [[Open-string reflection at endpoints]]):
$$\vec X(t,\sigma)=\tfrac12\big(\vec F(ct+\sigma)+\vec F(ct-\sigma)\big),\qquad |\vec F'|=1,\qquad \vec F(u+2\sigma_1)=\vec F(u)+2\sigma_1\tfrac{\vec v_0}{c},$$
with $\vec v_0$ the string's average (center-of-mass) velocity. The period is $2\sigma_1$, not $\sigma_1$: a wave must run to the far end *and bounce back* before it repeats. Watching one endpoint therefore determines the whole string forever — $\vec F(u)$ is the position of the $\sigma=0$ end at time $u/c$.

- **Closed string — the ends are glued into a loop.** There are no walls; $\sigma$ lives on a circle, $\sigma\sim\sigma+\sigma_1$. So $\vec F$ and $\vec G$ stay **independent**, and single-valuedness on the loop forces each derivative to be periodic with period $\sigma_1$ (derived in 11.4 [[Closed-string periodicity and rotating strings]]). The closed string keeps *two* independent wave families — the classical seed of its two oscillator towers and, after quantization, of [[Level matching]].

The capstone worked example — a straight open string spinning rigidly with its tips at the speed of light — lives in 11.4 [[Closed-string periodicity and rotating strings]] and exercises every piece above: it fixes $\omega/c=\pi/\sigma_1$, length $\ell=\tfrac{2}{\pi}E/T_0$, and shows the tips hit exactly $c$.

## Sublesson map

- 11.1 [[Wave equation and constraints]] — how static gauge + perpendicular labels + energy spacing turn the nonlinear EOM into wave equation (1) plus constraints (2)–(3) and the Neumann boundary condition (4).
- 11.2 [[Left-moving and right-moving components]] — the d'Alembert split (5); what the constraints say about each mover ($|\vec F'|=|\vec G'|=1$).
- 11.3 [[Open-string reflection at endpoints]] — Neumann glues $\vec G$ to $\vec F$, makes $\vec F$ quasi-periodic with period $2\sigma_1$; the heart of the module.
- 11.4 [[Closed-string periodicity and rotating strings]] — periodicity keeps both movers with period $\sigma_1$; plus the rigidly rotating open string worked in full.

## Why this is the skeleton for everything later

This classical solution is the scaffold the quantum theory hangs on. The arbitrary function $\vec F$ becomes a Fourier tower of oscillators; the constraints (2)–(3), written as $(\dot X\pm X')^2=0$ after rescaling to dimensionless worldsheet coordinates, become the classical ancestors of the Virasoro constraints; the open/closed split becomes one oscillator tower versus two. Module 12 ([[Light-cone gauge]]) redoes all of this in the coordinates that make quantization tractable.

## Open questions

- The oscillator/mode expansion, normal ordering, and level matching are deferred: the closed-string zero-mode normalization and level matching go to [[Left and right oscillator algebras]] and [[Level matching]]. This module needs only the classical periodicity logic, not the quantum modes.

## Exercise

Reproduce the module's core result from scratch, with no notes:

1. State the four governing equations (1)–(4) and say in one line what each physically demands.
2. Write the general solution of the wave equation as left-mover + right-mover, and explain why an arbitrary function of $(ct\pm\sigma)$ solves it.
3. **Open string:** impose the Neumann conditions at $\sigma=0$ and $\sigma=\sigma_1$ to reduce the two free functions to a single quasi-periodic $\vec F$. Derive both $|\vec F'|=1$ and $\vec F(u+2\sigma_1)=\vec F(u)+2\sigma_1\vec v_0/c$, identify $\vec v_0$ physically, and explain where the factor of $2$ in the period comes from.
4. **Closed string:** impose periodicity $\vec X(t,\sigma)=\vec X(t,\sigma+\sigma_1)$ and show it instead keeps *both* movers, forcing each derivative to be periodic with period $\sigma_1$. Explain why the zero-mode drift cancels between the two arguments.

> [!success]- Solution
> **1. The four equations.** Wave equation $\partial_\sigma^2\vec X-c^{-2}\partial_t^2\vec X=0$ — waves at speed $c$ in the label $\sigma$. Orthogonality $\partial_t\vec X\cdot\partial_\sigma\vec X=0$ — velocity is purely transverse; labels never slide along the string. Unit normalization $(\partial_\sigma\vec X)^2+c^{-2}(\partial_t\vec X)^2=1$ — one unit of $\sigma$ is one fixed unit of energy. Neumann $\partial_\sigma\vec X=0$ at both ends — no momentum flows off a free end, and the momentum flux along the string is $\vec{\mathcal P}^\sigma=-T_0\,\partial_\sigma\vec X$, so it must vanish there.
>
> **2. General solution.** In worldsheet light-cone coordinates $u_\pm=ct\pm\sigma$, the chain rule gives $\partial_\sigma^2-c^{-2}\partial_t^2=(\partial_+-\partial_-)^2-(\partial_++\partial_-)^2=-4\,\partial_+\partial_-$, so the wave equation is $\partial_+\partial_-\vec X=0$. A function annihilated by $\partial_+\partial_-$ is a sum of a function of $u_+$ alone and a function of $u_-$ alone:
> $$\vec X=\tfrac12\big(\vec F(ct+\sigma)+\vec G(ct-\sigma)\big).$$
> Each piece has constant argument along a line moving at speed $c$ (from $ct\pm\sigma=\text{const}$, $d\sigma/dt=\mp c$), so it is a rigid waveform gliding at $c$ — left-mover and right-mover.
>
> **3. Open string.** Neumann at $\sigma=0$: $\partial_\sigma\vec X=\tfrac12(\vec F'-\vec G')=0$ at $\sigma=0$ gives $\vec F'(ct)=\vec G'(ct)$ for all $t$, so $\vec G=\vec F+\text{const}$; absorbing the constant leaves $\vec X=\tfrac12(\vec F(ct+\sigma)+\vec F(ct-\sigma))$ — one waveform. Neumann at $\sigma=\sigma_1$: $\vec F'(ct+\sigma_1)-\vec F'(ct-\sigma_1)=0$; setting $u=ct-\sigma_1$ gives $\vec F'(u+2\sigma_1)=\vec F'(u)$, so $\vec F'$ is periodic with period $2\sigma_1$. Integrating a periodic derivative gives a fixed drift per period, $\vec F(u+2\sigma_1)-\vec F(u)=\int_u^{u+2\sigma_1}\vec F'\,du'=\text{const}$; package the constant as $2\sigma_1\vec v_0/c$. Since $\vec X(t,0)=\vec F(ct)$, this says the $\sigma=0$ end advances by $\vec v_0\,\Delta t$ over each round-trip time $\Delta t=2\sigma_1/c$: $\vec v_0$ is the endpoint's average velocity, which is also the string's center-of-mass drift. For the constraint, compute $\vec X'+c^{-1}\dot{\vec X}=\vec F'(ct+\sigma)$ and $\vec X'-c^{-1}\dot{\vec X}=-\vec F'(ct-\sigma)$; expanding $(\vec X'\pm c^{-1}\dot{\vec X})^2=\vec X'^2+c^{-2}\dot{\vec X}^2\pm\tfrac{2}{c}\,\dot{\vec X}\cdot\vec X'$, constraints (2) and (3) set this to $1$ for both signs, forcing $|\vec F'|^2=1$ at every argument. The factor of $2$ in the period is the round trip: a disturbance must reach the *far* endpoint and reflect *back* before the pattern recurs.
>
> **4. Closed string.** With $\sigma$ on a circle there are no walls, so $\vec F$ and $\vec G$ stay independent. Periodicity $\vec F(ct+\sigma+\sigma_1)+\vec G(ct-\sigma-\sigma_1)=\vec F(ct+\sigma)+\vec G(ct-\sigma)$ splits (since $u=ct+\sigma$ and $w=ct-\sigma$ vary independently) into $\vec F(u+\sigma_1)-\vec F(u)=\vec G(w)-\vec G(w-\sigma_1)=\vec c_0$, a single constant. So each mover's derivative is periodic with period $\sigma_1$ (one trip around the loop — no reflection, no factor of 2), while each function carries the same linear drift $\vec c_0 u/\sigma_1$. Under $\sigma\mapsto\sigma+\sigma_1$ the two arguments move oppositely, $u\mapsto u+\sigma_1$ and $w\mapsto w-\sigma_1$, so $\vec F$ picks up $+\vec c_0$ and $\vec G$ picks up $-\vec c_0$; the drifts cancel and $\vec X$ is single-valued. The center-of-mass velocity is $\vec v_{\rm cm}=c\,\vec c_0/\sigma_1$; if it is at rest, both movers are strictly periodic.
