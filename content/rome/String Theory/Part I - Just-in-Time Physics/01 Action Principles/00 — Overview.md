---
title: 00 — Overview
number: "1.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, action-principles]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Instead of writing down forces, you assign every conceivable path a single number $S$ — the **action** — and demand that the true path be one where $S$ stops changing: $\delta S = 0$. That one principle generates every equation of motion this course will need, including the string's.

## A flat spot in the space of paths

Newton hands you $F = ma$ and you solve it. That works for a point particle, but there is no honest way to *guess* the analogous law for a string, a field, or a curved-spacetime worldsheet. The action principle removes the guessing: write down one scalar functional $S[\text{path}]$, demand it be stationary, and the equation of motion falls out mechanically — the same recipe for a bead on a wire and for a string sweeping out a surface in 26 dimensions.

The mental image that makes everything else click: **$S$ is a height function over the infinite-dimensional landscape of all conceivable paths, and the physical path sits at a flat spot.** A flat spot is a stationary point, $\delta S = 0$. As a mathematician you already own this picture: $S$ is a map from a function space to $\mathbb{R}$, and $\delta S = 0$ is the vanishing of its directional (Gâteaux) derivative in every direction at once. Physics adds nothing to the mathematics here; it only tells you *which* functional to use.

Two habits this module drills, because strings will make both non-negotiable:

- **Stationary is not minimal.** $\delta S = 0$ means the first-order change vanishes — a flat spot, which can be a minimum, a maximum, or a saddle. The free relativistic particle's worldline *maximizes* proper time; the minus sign in its action is exactly what lets that maximum pose as "least action." Say "stationary action" and you are never wrong.
- **The leftover boundary term is physics, not debris.** Extracting an equation of motion from $\delta S = 0$ takes an integration by parts, which always leaves behind a term evaluated at the endpoints. The reflex is to throw it away. Resist it: that term is where momentum flow, free vs. fixed ends, and eventually **D-branes** all live. Learning to read it is half the point of the module.

## The five moving parts

Each becomes its own note; here is why each one exists and how it feeds the next.

1. **1.1 [[Functional derivative]]** — what it means to differentiate a single number with respect to an entire path. This is the calculus that makes $\delta S = 0$ a well-defined equation rather than a slogan: $\delta S/\delta x(t)$ is an ordinary gradient with a continuous index $t$.
2. **1.2 [[Euler-Lagrange equation|Euler–Lagrange equation]]** — turn the crank on $\delta S = 0$ and out drops $\frac{d}{dt}\frac{\partial L}{\partial\dot q} - \frac{\partial L}{\partial q} = 0$ for a coordinate, and its field version $\partial_\mu\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)} - \frac{\partial\mathcal L}{\partial\phi} = 0$ for a field. This is the module's core derivation, done once and reused everywhere.
3. **1.3 [[Boundary terms and allowed variations]]** — the endpoint piece the previous note set aside. Fixing an endpoint (Dirichlet) vs. freeing it (Neumann) is a *physical* choice that decides whether momentum is conserved, and for open strings it is exactly the choice that plants their ends on D-branes.
4. **1.4 [[Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance|Reparameterization invariance]]** — some actions don't care how you *label* points along the path; relabeling is a **redundancy**, not a symmetry. The relativistic point particle is the worked rehearsal for the string's worldsheet gauge freedom.
5. **1.5 [[Noether's theorem]]** — every genuine continuous symmetry of $S$ hands you a conserved quantity (energy, momentum, charge) by a purely mechanical procedure. Crucially, the conserved quantity *is* the boundary term from note 3, now put to work instead of killed.

The spine connecting them: **symmetry** relates physically distinct states and gives a conserved charge (Noether); **redundancy** relabels one state and gives a constraint instead (reparameterization). Telling these two apart is the single conceptual skill the rest of the course leans on hardest.

The rhythm for each note: read the intuition, redo the derivation on paper, then attempt the exercise cold. Nothing here needs physics beyond derivatives, integrals, and integration by parts.

Concepts these notes link forward to, instantiated later: [[Mass-shell relation]], [[Light-cone gauge]], [[Proper-time action|Proper time]], [[Minkowski metric and the mass shell|Minkowski metric]], [[The wave equation on an interval|Wave equation]].

## Open questions

- The module is self-contained for elementary variational calculus. The same boundary-term and redundancy logic returns, unchanged in spirit but heavier in machinery, when the relativistic string and its D-branes arrive.

## Exercise

Close every note and work on a blank page; if you can do both parts cold, you have the module.

1. Starting from $S[q] = \int_{t_i}^{t_f} L(q,\dot q,t)\,dt$, vary $q \to q + \delta q$ and derive the Euler–Lagrange equation $\frac{d}{dt}\frac{\partial L}{\partial\dot q} - \frac{\partial L}{\partial q} = 0$. Show every step, including the integration by parts.
2. Identify the boundary term you generated. In words and symbols, say *why it carries physical information* rather than being an error to cancel — name what it equals, and what fixing it versus freeing it means physically.

> [!success]- Solution
> **Part 1.** Bump $q \to q + \delta q$, so $\dot q \to \dot q + \frac{d}{dt}\delta q$ (the variation commutes with the time derivative). Expand $L$ to first order:
> $$\delta S = \int_{t_i}^{t_f}\left(\frac{\partial L}{\partial q}\,\delta q + \frac{\partial L}{\partial\dot q}\,\frac{d}{dt}\delta q\right)dt.$$
> The second term has the derivative on $\delta q$, so it is not yet of the form $\int(\cdots)\delta q\,dt$. Integrate by parts using $\frac{\partial L}{\partial\dot q}\frac{d}{dt}\delta q = \frac{d}{dt}\!\big(\frac{\partial L}{\partial\dot q}\delta q\big) - \big(\frac{d}{dt}\frac{\partial L}{\partial\dot q}\big)\delta q$:
> $$\delta S = \left[\frac{\partial L}{\partial\dot q}\,\delta q\right]_{t_i}^{t_f} + \int_{t_i}^{t_f}\left(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial\dot q}\right)\delta q\,dt.$$
> With endpoints fixed, $\delta q(t_i) = \delta q(t_f) = 0$, the bracket vanishes. Stationarity $\delta S = 0$ must hold for *every* allowed $\delta q$, so by the fundamental lemma of the calculus of variations (see 1.1 [[Functional derivative]]) the integrand's coefficient vanishes pointwise:
> $$\frac{d}{dt}\frac{\partial L}{\partial\dot q} - \frac{\partial L}{\partial q} = 0.$$
> Check with $L = \tfrac12 m\dot q^2 - V(q)$: $\frac{\partial L}{\partial\dot q} = m\dot q$, $\frac{\partial L}{\partial q} = -V'(q)$, giving $m\ddot q = -V'(q)$ — Newton's law.
>
> **Part 2.** The boundary term is $\big[p\,\delta q\big]_{t_i}^{t_f}$ with the conjugate momentum $p \equiv \partial L/\partial\dot q$. It is separate physics from the bulk equation of motion: it concerns only the endpoints. To make it vanish you must *choose* something. **Fix the endpoint** (Dirichlet): demand $\delta q = 0$ there — "the particle starts at $A$, ends at $B$." **Free the endpoint** (Neumann): let $\delta q \neq 0$ and instead force the coefficient to vanish, $p = 0$ at that end. For the nonrelativistic string $y(t,x)$ on $x \in [0,a]$, the same move at the spatial ends leaves $\big[\mathcal P^x\,\delta y\big]_{x=0}^{x=a}$, where $\mathcal P^x \equiv \partial\mathcal L/\partial y' = -T_0\,\partial_x y$ ($T_0$ the tension) is the flux of transverse momentum along the string — its boundary values record what leaks out the ends, $dp_y/dt = -\big[\mathcal P^x\big]_{x=0}^{x=a}$. Zero-slope (Neumann) ends conserve momentum; pinned (Dirichlet) ends let a wall — or a D-brane — absorb it. The term literally *measures a force*; discarding it would discard the bookkeeping of where momentum goes. Full argument in 1.3 [[Boundary terms and allowed variations]].
