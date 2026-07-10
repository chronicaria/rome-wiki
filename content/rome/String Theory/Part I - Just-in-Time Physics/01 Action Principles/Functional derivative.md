---
title: Functional derivative
number: "1.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, variational-calculus]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A functional derivative is ordinary calculus done on the space of *functions*: $\delta S/\delta x(t)$ is one component of the gradient of the action $S$, and it measures how $S$ responds when you wiggle the path $x$ at the single instant $t$.

You already know how to find where a function $f(x_1,\dots,x_n)$ is flat: set every partial $\partial f/\partial x_i$ to zero. An action $S[x]$ is the same problem with *infinitely many* variables — one for the height of the path $x(t)$ at each instant $t$. The functional derivative $\delta S/\delta x(t)$ is the partial derivative in the "direction $t$," and demanding that it vanish for every $t$ is how physics finds the path a particle actually takes. Every equation of motion in this course is produced this way.

## The object we are differentiating

The action is a **functional**: it eats an entire function and returns one number. For a particle,

$$S[x] = \int_{t_i}^{t_f} L\big(x(t), \dot x(t), t\big)\, dt .$$

The square brackets $S[x]$ (not $S(x)$, and never $S[x(t)]$) are a deliberate signal: the input is the *whole function* $x$, not its value at one point. As a mathematician, read this as a map

$$S : C^1([t_i,t_f]) \to \mathbb{R},$$

on the infinite-dimensional space whose "coordinates" are the values $\{x(t)\}_{t\in[t_i,t_f]}$ — one coordinate per instant.

## The variation is a directional derivative

Pick a "direction" in path space — any smooth function $\eta(t)$ — and a small scalar $\epsilon$. The **first variation** of $S$ in that direction is the plain directional (Gâteaux) derivative:

$$\delta S \;=\; \left.\frac{d}{d\epsilon}\, S[x + \epsilon\,\eta]\right|_{\epsilon = 0}.$$

This is the directional derivative you already know; the only novelty is that the "vector" $\eta$ is a function. Writing $\delta x(t) \equiv \epsilon\,\eta(t)$ for the infinitesimal bump, $\delta S$ is the piece of $S[x+\delta x] - S[x]$ that is **linear in $\delta x$**. Everything of order $(\delta x)^2$ is dropped, because stationarity is a statement about the *first-order* response — just as $\nabla f = 0$ ignores the curvature of $f$.

## From directional derivative to gradient: $\delta S/\delta x$

In finite dimensions the directional derivative packages into a gradient dotted with the direction: $df = \sum_i \frac{\partial f}{\partial x_i}\, dx_i$. Replace the discrete index $i$ by the continuous "index" $t$, and the sum becomes an integral:

$$\delta S \;=\; \int_{t_i}^{t_f} \frac{\delta S}{\delta x(t)}\;\delta x(t)\, dt . \tag{1}$$

The kernel $\dfrac{\delta S}{\delta x(t)}$ **is** the functional derivative — the continuous analogue of the gradient component $\partial f/\partial x_i$. Its meaning: it reports the sensitivity of the single number $S$ to a bump in the path localized at time $t$. Reading a functional derivative off a computation means massaging $\delta S$ into the form (1) and picking out whatever multiplies $\delta x(t)$.

**Sanity via discretization.** If the continuum still feels like a leap, slice time into points $t_1,\dots,t_N$. A path becomes a vector $(x_1,\dots,x_N)$ and $S$ becomes an ordinary function $S_N$, with the familiar

$$\delta S_N=\sum_{k=1}^N \frac{\partial S_N}{\partial x_k}\,\delta x_k.$$

Formula (1) is the $N\to\infty$ limit: the sum over time-slices becomes an integral and the gradient component $\partial S_N/\partial x_k$ becomes the kernel $\delta S/\delta x(t)$. A functional derivative is a gradient with a continuous label — nothing more exotic.

The building block, the analogue of $\partial x_i/\partial x_j = \delta_{ij}$, is the **Dirac delta**:

$$\frac{\delta\, x(t)}{\delta\, x(t')} = \delta(t - t').$$

A bump concentrated near $t'$ changes only the path-coordinate there, so distinct instants are independent "directions," exactly as $\partial x_i/\partial x_j$ vanishes for $i\neq j$.

## Worked example: read the kernel off the particle action

Take $L = \tfrac12 m \dot x^2 - V(x)$. Bump $x \to x + \delta x$ and keep first order:

$$\delta S = \int_{t_i}^{t_f}\Big( m\dot x\, \frac{d}{dt}\delta x - V'(x)\,\delta x \Big)\, dt .$$

The first term has the derivative on $\delta x$, so it is **not yet** in the form (1). Integrate by parts to move the derivative off $\delta x$:

$$\delta S = \big[\, m\dot x\,\delta x\,\big]_{t_i}^{t_f} + \int_{t_i}^{t_f}\big(-m\ddot x - V'(x)\big)\,\delta x\, dt .$$

Compare with (1). On the standard variation space with $\delta x(t_i)=\delta x(t_f)=0$ the endpoint term vanishes; if the endpoints are free to move it becomes extra boundary data (see [[Boundary terms and allowed variations]]). For fixed endpoints, read off the bulk kernel:

$$\boxed{\ \frac{\delta S}{\delta x(t)} = -m\ddot x(t) - V'(x(t)).\ }$$

The functional gradient of $S$ at a path is, pointwise in $t$, exactly *minus Newton's equation residual*. Requiring the whole gradient to vanish — $\delta S/\delta x(t) = 0$ for all $t$ — gives $m\ddot x = -V'(x)$, Newton's second law. "The particle takes the path where $S$ is flat in every direction" and "the particle obeys $F=ma$" are the *same statement*. This is the observation that [[Euler-Lagrange equation]] promotes into a general recipe.

For a general first-derivative Lagrangian the same steps give

$$S[q]=\int L(q,\dot q,t)\,dt,\qquad \frac{\delta S}{\delta q(t)}=\frac{\partial L}{\partial q}-\frac{d}{dt}\frac{\partial L}{\partial\dot q},$$

again the bulk kernel after the endpoint term is set aside. So the Euler–Lagrange equation is nothing but the infinite-dimensional critical-point condition $\delta S/\delta q(t)=0$.

One habit worth burning in: **do not read off the functional derivative before integrating by parts.** Only the coefficient of $\delta x$ is a gradient component; a coefficient of $d(\delta x)/dt$ still hides both a bulk piece and a boundary term.

## The fundamental lemma that lets us drop the integral

Stationarity gives us $\delta S=0$ in *every* direction, i.e. $\int_{t_i}^{t_f} F(t)\,\delta x(t)\, dt = 0$ for every allowed $\delta x$, where $F$ is the kernel — continuous, for the Lagrangians we meet. Why does this force $F(t)\equiv 0$ rather than merely "$F$ integrates against everything to zero"?

Suppose $F$ were nonzero — say $F(t_0)>0$ at some interior point. By continuity $F>0$ on a whole neighborhood of $t_0$. Choose a bump $\delta x$ that is positive there and zero elsewhere; then the integrand is $\geq 0$ everywhere and strictly positive on that neighborhood, so the integral is strictly positive — contradicting $\delta S=0$. Hence $F(t)=0$ at every interior $t$. This is the **fundamental lemma of the calculus of variations**, and it is the rigorous bridge from "flat in every direction" to "the functional derivative vanishes pointwise." The freedom to localize $\delta x$ is exactly what upgrades one scalar equation ($\delta S=0$) into a differential equation holding at *each* $t$.

## Open questions

- What is the honest function space? Physicists are cavalier about $C^1$ vs. $H^1$ (Sobolev), and about boundary conditions. The clean statement is that the allowed $\delta x$ form a *linear subspace* — e.g. functions vanishing at the endpoints — and the functional derivative is only defined relative to that subspace. Connect to [[Boundary terms and allowed variations]].
- The first variation only locates *stationary* paths. The **second variation** $\delta^2 S$ (the Hessian in function space) is what distinguishes a minimum from a saddle. Hamilton's principle asks only for stationarity, which is why physicists say "stationary," not "least." Revisit when we ask whether the relativistic action is a max, min, or saddle.

## Exercise

Take the free nonrelativistic particle, $S[x]=\int_{t_i}^{t_f}\tfrac12 m\dot x^2\,dt$, and add a term linear in the velocity coupling to a fixed function: $L=\tfrac12 m\dot x^2 + A(x)\,\dot x$, where $A$ is a given function of $x$ (a one-dimensional "vector potential"). Compute the functional derivative $\delta S/\delta x(t)$ from scratch, and determine whether the extra term $A(x)\,\dot x$ changes the equation of motion. Explain the result in one sentence.

> [!success]- Solution
> Bump $x\to x+\delta x$ and keep first order:
> $$\delta S = \int_{t_i}^{t_f}\Big( m\dot x\,\tfrac{d}{dt}\delta x \;+\; A(x)\,\tfrac{d}{dt}\delta x \;+\; A'(x)\,\dot x\,\delta x \Big)\,dt,$$
> where the last term comes from varying the $x$ inside $A(x)$ (chain rule), and the middle term from varying the $\dot x$.
>
> Integrate by parts on the two terms carrying $\tfrac{d}{dt}\delta x$:
> $$\int m\dot x\,\tfrac{d}{dt}\delta x\,dt = [\,m\dot x\,\delta x\,] - \int m\ddot x\,\delta x\,dt,$$
> $$\int A(x)\,\tfrac{d}{dt}\delta x\,dt = [\,A(x)\,\delta x\,] - \int \tfrac{d}{dt}A(x)\,\delta x\,dt = [\,A\,\delta x\,] - \int A'(x)\,\dot x\,\delta x\,dt.$$
> Collecting the bulk (endpoint terms vanish for fixed endpoints):
> $$\frac{\delta S}{\delta x(t)} = -m\ddot x \;-\; A'(x)\dot x \;+\; A'(x)\dot x \;=\; -m\ddot x.$$
> The two $A'(x)\dot x$ contributions cancel exactly, so $\delta S/\delta x = -m\ddot x$ and the equation of motion is unchanged: $m\ddot x = 0$.
>
> **One sentence:** in one dimension the term $A(x)\dot x = \tfrac{d}{dt}\!\int^x A$ is a total time derivative, so it only shifts $S$ by a boundary constant and cannot affect the bulk functional derivative — a first glimpse of why total-derivative (surface) terms are invisible to the equations of motion, though not, as [[Boundary terms and allowed variations]] shows, to the boundary physics.
