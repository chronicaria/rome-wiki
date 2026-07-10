---
title: Boundary conditions as geometry
number: "10.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, work-product]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open string's boundary conditions are geometry in disguise: the list of which directions are free (Neumann) and which are fixed (Dirichlet) draws, one axis at a time, the D-brane its endpoints live on.

Related: [[String Theory/Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry|module 18 boundary conditions as geometry]] returns to the same dictionary after D-branes become a central object.

## Spaghetti in a room

Picture the string as a strand of cooked spaghetti and space as a room. An end left to flap moves wherever it likes — free. An end pinned to a tabletop slides anywhere on the table but never lifts off it — fixed in the direction normal to the table, still free along the table. The decision is made independently for each axis of the room, and the surface the ends are confined to — here, the tabletop — is the D-brane. Fixing a coordinate removes a brane dimension; freeing one adds it. Choosing boundary conditions is choosing that surface; the rest of the note draws it.

## Where the choice comes from

Varying the open-string action leaves an unavoidable boundary term at each endpoint (derived in [[Neumann versus Dirichlet conditions]]):

$$\mathcal P^\sigma_\mu\,\delta X^\mu\Big|_{\text{endpoint}} = 0, \qquad \mu = 0,1,\dots,d.$$

Here $x^1,\dots,x^d$ are the spatial coordinates and $x^0$ is time, so $\mu$ runs over all $D=d+1$ spacetime directions. The variational principle demands only that each product vanish; it stays silent on how. For each direction $\mu$ we make an independent binary choice — kill one factor or the other:

$$
\begin{cases}
\textbf{Neumann (free):}\quad \mathcal P^\sigma_\mu = 0, & \delta X^\mu \text{ unconstrained} \Rightarrow \text{end roams in } x^\mu, \\[4pt]
\textbf{Dirichlet (fixed):}\quad \delta X^\mu = 0 \iff X^\mu = \bar x^\mu = \text{const}, & \text{end pinned in } x^\mu.
\end{cases}
$$

Neumann kills the momentum flux: with nothing beyond the end to absorb $\mu$-momentum, none leaks and the tension reflects back. Dirichlet holds the coordinate fixed instead, and momentum flows off the end into whatever object the end is glued to.

## Reading the choice as geometry

Ask where a single endpoint is allowed to be. Each Dirichlet choice is a constraint $X^a = \bar x^a$ — one equation, slicing one hyperplane out of space. With $d-p$ Dirichlet directions, the constraints intersect in a $p$-dimensional plane. Each Neumann choice imposes no constraint — those are exactly the directions the endpoint may wander. The allowed locus is

$$\boxed{\ \big\{\,x \in \text{space} : x^{p+1}=\bar x^{p+1},\ \dots,\ x^d=\bar x^d\,\big\}\ }$$

a $p$-dimensional spatial hyperplane. Sweep it through time — time is always Neumann, since pinning an endpoint to one instant would delete it from every other — and the result is a $(p+1)$-dimensional worldvolume: the **Dp-brane** ([[D-branes (first appearance)]]).

Axis by axis, the dictionary reads:

| coordinate direction | boundary condition | geometric effect |
|---|---|---|
| time $x^0$ | Neumann (forced) | the endpoint persists through time |
| brane-tangent $x^m$ ($m=1,\dots,p$) | Neumann | the endpoint slides along the brane |
| brane-normal $x^a$ ($a=p+1,\dots,d$) | Dirichlet | the brane sits at $x^a=\bar x^a$ |

Boundary conditions translate "free or fixed, per axis" into the geometry of the surface the string ends on. Name the pattern and you have named the brane.

## Worldsheet sketches: free edge versus fixed edge

The open-string worldsheet is the strip $\sigma\in[0,\pi]$ with $\tau$ running upward; the two long edges $\sigma=0$ and $\sigma=\pi$ are the endpoint trajectories. Plot a single spatial coordinate $x$ against $\tau$ and the two conditions look nothing alike:

```
   FREE edge (Neumann in x)          FIXED edge (Dirichlet in x)
   the endpoint's x wanders          the endpoint's x is pinned

   τ                                 τ
   ↑    \        /                   ↑    |        |
   |     \      (                    |    |        |
   |      )      \                   |    |        |
   |     /        \                  |    |        |
   |     \         )                 |    |        |
   |      \       /                  |    |        |
   +----------------→ x              +----------------→ x
    (both edges wander in x)          (both edges pinned at constant x)
```

- **Free / Neumann in $x$:** the edge is a wiggly curve — $X(\tau,\text{end})$ changes with $\tau$. A *fully* free end sweeps sideways at the speed of light ([[Endpoint velocity and endpoint force]]).
- **Fixed / Dirichlet in $x$:** the edge is a straight vertical line — $X(\tau,\text{end})=\bar x$ never changes. In this direction both edges are welded to the brane.

A given endpoint has one such picture per spatial axis: wiggly in the brane directions, ruler-straight in the normal ones.

## The D2-brane in $d=3$

Take three spatial directions. Choose Neumann in $x^1,x^2$ and Dirichlet in $x^3$ with $\bar x^3=0$. The endpoints glide freely on the $(x^1,x^2)$ plane but can never leave it; the body of the string is free to bulge into $x^3$ — only the ends are welded down:

```
   x¹
    ↑        │  brane: the (x¹,x²) plane at x³ = 0, edge-on
    |        │  (x² points out of the page)
    |        ●────~~~~\
    |        │         )   string bulges into x³ > 0
    |        ●────~~~~/
    |        │
    +────────┴───────────────→ x³
       both ● endpoints sit on the brane, free to slide along it
```

Boundary-condition list: Neumann in $x^0,x^1,x^2$; Dirichlet in $x^3$ at $\bar x^3=0$. Two free spatial directions give $p=2$: a **D2-brane**, with a $(2+1)$-dimensional worldvolume.

## The whole dictionary on one line

Free axis: wiggly edge, one more brane dimension. Fixed axis: straight edge, one fewer. The module's payoff — endpoint conditions fix the directions of a D-brane — is now something you can sketch: count the free spatial axes and read off $p$.

## Open questions
- The ASCII sketches are placeholders; redraw cleanly in Obsidian (Excalidraw) — one worldsheet strip with a wiggly free edge beside a straight fixed edge, plus the D2 picture with the string bulging off the plane.
- The mixed case (one end on brane A, the other on brane B) is deferred to [[Strings stretched between Dp- and Dq-branes]], where ND/DN coordinates pick up half-integer modes.

## Exercise

You are handed the boundary-condition list for a single open-string endpoint in $d=4$ spatial dimensions:

$$\mathcal P^\sigma_0 = 0,\quad \mathcal P^\sigma_2 = 0,\quad X^1 = 3,\quad X^3 = 0,\quad X^4 = -1.$$

(a) Which spacetime directions are Neumann and which are Dirichlet? (b) What is $p$, and which brane is this? (c) Write the allowed endpoint locus as a set, and give the dimension of its worldvolume. (d) One entry in the list is forced by physics, not chosen — which, and why?

> [!success]- Solution
> **(a)** Neumann means $\mathcal P^\sigma_\mu=0$ (free); Dirichlet means $X^\mu$ fixed to a constant. So Neumann in $x^0$ (time) and $x^2$; Dirichlet in $x^1,x^3,x^4$ (pinned at $3,0,-1$).
>
> **(b)** Count the *free spatial* directions: only $x^2$. So $p=1$ — a **D1-brane**. (Time is Neumann but does not count toward $p$, which counts spatial dimensions.)
>
> **(c)** The endpoint may sit anywhere in $x^2$ but is fixed in $x^1,x^3,x^4$:
> $$\{\,x : x^1=3,\ x^3=0,\ x^4=-1\,\},$$
> a 1-dimensional line in space (parameterized by $x^2$). Swept through time it is a $(1+1)$-dimensional worldvolume — consistent with $p+1 = 2$.
>
> **(d)** The time entry $\mathcal P^\sigma_0=0$ is forced: a Dirichlet condition $X^0=\text{const}$ would freeze the endpoint at a single instant, so it would not exist at other times. Time must always be Neumann, which is why every brane is extended in time.
