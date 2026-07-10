---
title: Euler-Lagrange equation
number: "1.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, euler-lagrange]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Euler–Lagrange equation is the pointwise condition that makes the action stationary — it is what $\delta S = 0$ becomes once you integrate by parts and strip off the integral: $\frac{d}{dt}\frac{\partial L}{\partial \dot q} - \frac{\partial L}{\partial q} = 0$ for a coordinate, $\partial_\mu\!\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}\right) - \frac{\partial \mathcal{L}}{\partial\phi} = 0$ for a field.

Read it as $\dot p = F$: the rate of change of the *momentum* $p = \partial L/\partial\dot q$ equals the *force* $\partial L/\partial q$, the position-slope of $L$. The machinery below extracts this Newton-shaped law from "the action doesn't change to first order," then upgrades it from a particle to a field.

Every derivation here runs the same four moves:

1. **Vary** the unknown function, $q \to q + \delta q$.
2. **Linearize** — keep only terms first-order in $\delta q$.
3. **Integrate by parts** until no derivative touches $\delta q$.
4. **Split** boundary from bulk. The bulk coefficient set to zero is the equation of motion; the boundary term is dealt with by boundary conditions.

## Part 1 — A coordinate $q(t)$

One dynamical variable $q(t)$, a general Lagrangian that may depend explicitly on time,

$$S[q] = \int_{t_i}^{t_f} L\big(q(t), \dot q(t); t\big)\, dt .$$

Vary $q \to q + \delta q$. Since $\delta$ (change the function) and $\tfrac{d}{dt}$ (differentiate it) act on independent slots, they commute: $\delta\dot q = \frac{d}{dt}\delta q$. Expand $L$ to first order in its first two slots:

$$\delta S = \int_{t_i}^{t_f}\left( \frac{\partial L}{\partial q}\,\delta q + \frac{\partial L}{\partial \dot q}\,\frac{d}{dt}\delta q \right) dt .$$

Two channels: $L$ responds because the *position* moved ($\partial L/\partial q$) and because the *velocity* moved ($\partial L/\partial \dot q$). The explicit-$t$ slot contributes nothing — we vary $q$, not $t$.

The second term has $\tfrac{d}{dt}$ on $\delta q$, so it is not yet of the form $\int(\cdots)\,\delta q\,dt$. Move the derivative off $\delta q$ with integration by parts:

$$\frac{\partial L}{\partial \dot q}\frac{d}{dt}\delta q = \frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot q}\,\delta q\right) - \left(\frac{d}{dt}\frac{\partial L}{\partial \dot q}\right)\delta q .$$

The total-derivative piece integrates to an endpoint evaluation. Hence

$$\boxed{\ \delta S = \left[\frac{\partial L}{\partial \dot q}\,\delta q\right]_{t_i}^{t_f} + \int_{t_i}^{t_f}\left( \frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot q} \right)\delta q\, dt .\ }\tag{1}$$

Equation (1) is the variational method in miniature: endpoint physics (first term) plus bulk physics (integral), cleanly separated.

Now impose **Hamilton's principle**, $\delta S = 0$, with endpoints held fixed: $\delta q(t_i) = \delta q(t_f) = 0$. That kills the boundary term. (Freeing the endpoints instead is the whole subject of [[Boundary terms and allowed variations]].) The bulk integral must vanish for *every* allowed $\delta q$; by the fundamental lemma of the calculus of variations (see [[Functional derivative]]) the bracket vanishes pointwise:

$$\boxed{\ \frac{d}{dt}\frac{\partial L}{\partial \dot q} - \frac{\partial L}{\partial q} = 0 \ }\qquad \text{(Euler–Lagrange).}\tag{2}$$

**Sanity check** with $L = \tfrac12 m\dot q^2 - V(q)$: here $\frac{\partial L}{\partial \dot q} = m\dot q$ and $\frac{\partial L}{\partial q} = -V'(q)$, so (2) gives $m\ddot q = -V'(q)$ — Newton's law, with the force pointing down the potential gradient as it must.

Define the **conjugate momentum** $p \equiv \partial L/\partial \dot q$. Then (2) is just

$$\dot p = \frac{\partial L}{\partial q},$$

"momentum changes at the rate set by the position-slope of $L$" — i.e. $\dot p = F$. And the payoff: if $L$ does not depend on $q$ (only on $\dot q$), the right side is zero and $p$ is conserved. A symmetry (invariance under shifting $q$) has produced a conservation law — the first taste of [[Noether's theorem]].

## Part 2 — A scalar field $\phi(t, x)$

Now the unknown is a *field* $\phi$ spread over spacetime. The Lagrangian becomes a **Lagrangian density** $\mathcal{L}$ integrated over a $D$-dimensional spacetime, $D = d + 1$ ($d$ space, one time):

$$S[\phi] = \int d^D x\; \mathcal{L}\big(\phi(x),\, \partial_\mu\phi(x)\big),\qquad d^D x = dt\, dx^1\cdots dx^d,\quad \partial_\mu\phi \equiv \frac{\partial\phi}{\partial x^\mu}.$$

Here $\mu = 0,1,\dots,D-1$ with $x^0 = t$ (see [[Minkowski metric and the mass shell|Minkowski metric]]). If the index notation is new, read $\partial_\mu\phi$ as a *list* of first derivatives $(\partial_t\phi, \partial_{x^1}\phi, \dots, \partial_{x^d}\phi)$ — one derivative channel per spacetime direction. The particle had a single velocity slot $\dot q$; the field has $D$ of them. That is the only new feature.

Vary $\phi \to \phi + \delta\phi$, so $\partial_\mu\phi \to \partial_\mu\phi + \partial_\mu(\delta\phi)$. First order:

$$\delta S = \int d^D x\left( \frac{\partial \mathcal{L}}{\partial \phi}\,\delta\phi + \frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}\,\partial_\mu(\delta\phi) \right),$$

with the Einstein sum over $\mu$ implied. Integrate by parts in each direction — the multivariable analogue of the single IBP above, using $\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial_\mu(\delta\phi) = \partial_\mu\!\big(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\delta\phi\big) - \big(\partial_\mu\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\big)\delta\phi$:

$$\boxed{\ \delta S = \int d^D x\;\partial_\mu\!\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}\,\delta\phi\right) + \int d^D x\left( \frac{\partial \mathcal{L}}{\partial \phi} - \partial_\mu\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)} \right)\delta\phi .\ }\tag{3}$$

The first integral in (3) is a total spacetime divergence; by the divergence theorem it becomes a **boundary term** on the surface enclosing the region — one piece at the time edges $t_i, t_f$, plus pieces at the spatial edges. (The spatial-edge pieces are where the string's endpoint physics, and eventually D-branes, live; see [[Boundary terms and allowed variations]].)

Demand $\delta S = 0$ with $\delta\phi$ vanishing on the boundary; the bulk vanishes for arbitrary $\delta\phi$, giving the **field Euler–Lagrange equation**:

$$\boxed{\ \partial_\mu\!\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0 .\ }\tag{4}$$

This is the same law with one index more. The particle's momentum $p$ becomes a **current** $\Pi^\mu \equiv \partial\mathcal{L}/\partial(\partial_\mu\phi)$, one component per spacetime direction, and $\dot p = F$ becomes $\partial_\mu\Pi^\mu = \partial\mathcal{L}/\partial\phi$: the spacetime divergence of the current is sourced by the field-slope of $\mathcal{L}$. Where the particle had one bookkeeping equation for $p(t)$, the field has a local balance at every spacetime point.

For **several fields** $\phi^A$, vary each independently:

$$\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi^A)}\right)-\frac{\partial\mathcal{L}}{\partial\phi^A}=0\qquad\text{for every }A.$$

This is the rule later applied component-by-component to the string embedding fields $X^\mu(\tau,\sigma)$.

### Sanity check 1 — the vibrating string

The nonrelativistic string is the field $y(t,x)$ (transverse displacement) with density $\mathcal{L} = \tfrac12\mu_0\dot y^2 - \tfrac12 T_0 y'^2$, where $\mu_0$ is mass per length and $T_0$ the tension. The two derivative slots are

$$\Pi^0 = \frac{\partial\mathcal{L}}{\partial\dot y} = \mu_0\dot y,\qquad \Pi^1 = \frac{\partial\mathcal{L}}{\partial y'} = -T_0\, y'.$$

Since $\mathcal{L}$ has no bare $y$, the source $\partial\mathcal{L}/\partial y = 0$, and (4) reads $\partial_t\Pi^0 + \partial_x\Pi^1 = 0$:

$$\mu_0\,\frac{\partial^2 y}{\partial t^2} - T_0\,\frac{\partial^2 y}{\partial x^2} = 0,$$

the **wave equation** with speed $v_0 = \sqrt{T_0/\mu_0}$. (Physically: $\Pi^0 = \mu_0\dot y$ is the momentum density and $\Pi^1 = -T_0 y'$ its flux; the EL equation is the statement that momentum flowing in equals momentum accumulating — a continuity equation.) See [[The wave equation on an interval|Wave equation]].

### Sanity check 2 — the relativistic free scalar

With mostly-plus signature $\eta_{\mu\nu} = \mathrm{diag}(-1,+1,\dots,+1)$ and natural units $\hbar = c = 1$,

$$\mathcal{L} = -\tfrac12\,\partial_\mu\phi\,\partial^\mu\phi - \tfrac12 m^2\phi^2.$$

The slots are $\partial\mathcal{L}/\partial(\partial_\mu\phi) = -\partial^\mu\phi$ and $\partial\mathcal{L}/\partial\phi = -m^2\phi$, so (4) gives

$$-\partial_\mu\partial^\mu\phi + m^2\phi = 0 \quad\Longleftrightarrow\quad (\partial_\mu\partial^\mu - m^2)\phi = 0,$$

the **Klein–Gordon equation**. In mostly-plus, $\partial_\mu\partial^\mu = -\partial_t^2 + \nabla^2$, so a plane wave $e^{i(\vec k\cdot\vec x - \omega t)}$ obeys $\omega^2 = \vec k^{\,2} + m^2$, i.e. $E^2 = \vec p^{\,2} + m^2$ — the [[Mass-shell relation]]. (This is why the overall minus sign on the kinetic term is not cosmetic: it is what makes the time-derivative term come out with the physical sign in mostly-plus.)

## Open questions

- Higher-derivative Lagrangians (depending on $\ddot q$ or $\partial^2\phi$) give a modified EL equation with extra boundary data such as $\delta\dot q$. The actions in this module are all first-derivative; higher-derivative effective actions are a later refinement.
- Constrained or gauge fields need variations that respect a redundancy; that belongs with [[Gauge fixing as choosing a representative]].

## Exercise

Take the relativistic free scalar and add a cubic self-interaction, keeping mostly-plus signature:

$$\mathcal{L} = -\tfrac12\,\partial_\mu\phi\,\partial^\mu\phi - \tfrac12 m^2\phi^2 - \tfrac{\lambda}{3!}\phi^3.$$

Without re-deriving (4), use it to write down the equation of motion. Which of the three terms in $\mathcal{L}$ feeds the "current" slot $\partial\mathcal{L}/\partial(\partial_\mu\phi)$ and which feeds the "source" slot $\partial\mathcal{L}/\partial\phi$? Sketch in one line why the new term makes the equation *nonlinear*, and what breaks in Sanity check 2 as a result.

> [!success]- Solution
> Only the kinetic term carries derivatives, so it alone feeds the current slot:
> $$\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)} = -\partial^\mu\phi,\qquad \frac{\partial\mathcal{L}}{\partial\phi} = -m^2\phi - \tfrac{\lambda}{2}\phi^2.$$
> (The mass and cubic terms have no derivatives, so they land entirely in the source slot, with $\partial_\phi(\tfrac{\lambda}{3!}\phi^3) = \tfrac{\lambda}{2}\phi^2$.) Plugging into $\partial_\mu\big(\partial\mathcal{L}/\partial(\partial_\mu\phi)\big) - \partial\mathcal{L}/\partial\phi = 0$:
> $$-\partial_\mu\partial^\mu\phi + m^2\phi + \tfrac{\lambda}{2}\phi^2 = 0 \quad\Longleftrightarrow\quad (\partial_\mu\partial^\mu - m^2)\phi = \tfrac{\lambda}{2}\phi^2.$$
> The $\tfrac{\lambda}{2}\phi^2$ term is quadratic in $\phi$, so the equation is **nonlinear**: sums of solutions are no longer solutions, and superposition fails. Consequently the plane-wave / mass-shell analysis of Sanity check 2 no longer applies — $e^{i(\vec k\cdot\vec x - \omega t)}$ is not a solution, because $\phi^2$ generates new frequencies (the field's Fourier modes scatter off each other). Only the free ($\lambda=0$) theory has clean $E^2 = \vec p^{\,2} + m^2$ modes.
