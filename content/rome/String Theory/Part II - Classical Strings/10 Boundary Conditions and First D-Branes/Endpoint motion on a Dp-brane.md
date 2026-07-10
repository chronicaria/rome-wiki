---
title: Endpoint motion on a Dp-brane
number: "10.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, d-branes, endpoints]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Ending a string on a D$p$-brane softens the "endpoints move at $c$" theorem to the product law $\sqrt{1-v^2/c^2}\,\hat n_\parallel=0$: the brane can catch sideways tension, so a string that meets it perpendicularly may move at any speed, while any other contact still forces $v=c$.

## Why the brane changes the verdict

A free open-string endpoint is forced to move transversely at the speed of light ([[Endpoint velocity and endpoint force]]). That theorem assumed the end was free in *every* direction — a space-filling brane. The endpoint whips sideways at $c$ because nothing out there absorbs the string's tension; the only way tension can vanish at a truly free end is for the relativistic factor to collapse, and that means $v=c$.

Now bolt the endpoint to a lower-dimensional D$p$-brane. The brane is a table the end must stay on: free to slide within the brane (Neumann), pinned in the normal directions (Dirichlet). The pinned directions change the outcome, because the brane absorbs momentum along its normals and the string may pull straight into it. When the string meets the brane perpendicularly, all its tension points into the brane and drains there; nothing is left to fling the endpoint, and it may move as slowly as it likes. Only a leftover tangent component *along* the brane revives the light-speed conclusion.

The entire result is one boundary law:

$$\boxed{\ \sqrt{1-\frac{v^2}{c^2}}\;\hat n_\parallel=0.\ }\tag{1}$$

Either the tangent has no component along the brane ($\hat n_\parallel=0$: perpendicular contact, $v$ free) or the end moves at light speed ($v=c$). Everything below derives (1) and reads off the cases.

## Setup: which directions are free

Work in $d$ spatial dimensions with static gauge $X^0=ct$ ([[Static gauge]]; mostly-plus signature). The D$p$-brane is a flat hyperplane; split the spatial coordinates into

$$
\underbrace{x^1,\dots,x^p}_{\text{brane-tangent (Neumann, free)}}\qquad
\underbrace{x^{p+1},\dots,x^d}_{\text{brane-normal (Dirichlet, fixed)}}.
$$

The boundary conditions at the endpoint are then

$$
\mathcal P^{\sigma i}=0\ \ (i=1,\dots,p),\qquad
X^a(\tau,\text{end})=\bar x^a\ \ (a=p+1,\dots,d),\qquad
\mathcal P^{\sigma 0}=0.
$$

Each brane-tangent direction is Neumann: the endpoint may vary there, so its boundary momentum flux $\mathcal P^{\sigma i}$ must vanish. Each brane-normal direction is Dirichlet: the coordinate is frozen, and $\mathcal P^{\sigma a}$ is left *unconstrained* — that nonzero flux is momentum draining out of the string into the brane. Time is always Neumann (a Dirichlet condition on $X^0$ would freeze the endpoint at one instant — see [[Neumann versus Dirichlet conditions]]).

Write the unit tangent to the string at the endpoint, $\hat n\equiv\partial\vec X/\partial s$ (a unit vector because $s$ is arc length), and split it the same way:

$$
\hat n=\hat n_\parallel+\hat n_\perp,\qquad
\hat n_\parallel=(n^1,\dots,n^p,0,\dots,0),\qquad
\hat n_\perp=(0,\dots,0,n^{p+1},\dots,n^d).
$$

Because the normal coordinates are frozen, the endpoint velocity has no normal component — it lives entirely in the brane:

$$
\vec v=\frac{\partial\vec X}{\partial t}=(v^1,\dots,v^p,0,\dots,0).\tag{2}
$$

This is the geometric content of the Dirichlet conditions: the endpoint slides *along* the brane, never off it.

## Two conditions survive on the brane

**Transversality, from the time condition.** The always-present $\mathcal P^{\sigma 0}=0$ is unchanged by going to a D$p$-brane. Its explicit form ([[Endpoint velocity and endpoint force]]) is

$$
\mathcal P^{\sigma 0}=-\frac{T_0}{c}\,\frac{\hat n\cdot\vec v}{\sqrt{1-v_\perp^2/c^2}}=0,
$$

where $v_\perp$ is the part of $\vec v$ perpendicular to the string. The denominator is finite, so the numerator vanishes:

$$
\hat n\cdot\vec v=0\qquad\text{at the endpoint.}\tag{3}
$$

The endpoint velocity is orthogonal to the string: whatever freedom the end has, it moves sideways. The velocity is therefore purely transverse, $v_\perp=v$, and we write $v$ from here on. This much is exactly the space-filling result; the brane cannot touch it, since it comes from the time direction, which is Neumann on *every* brane.

**The tangent-force law, from the brane-tangent conditions.** With transversality in hand, the spatial boundary momentum collapses to

$$
\vec{\mathcal P}^{\sigma}=-T_0\sqrt{1-\frac{v^2}{c^2}}\;\hat n .
$$

The Neumann conditions demand this vanish only in the brane-tangent directions, and the components $(n^1,\dots,n^p)$ are exactly $\hat n_\parallel$:

$$
\mathcal P^{\sigma i}=-T_0\sqrt{1-\frac{v^2}{c^2}}\,n^i=0\ \ (i=1,\dots,p)
\quad\Longleftrightarrow\quad
\sqrt{1-\frac{v^2}{c^2}}\;\hat n_\parallel=0 ,
$$

the boxed law (1). There is *no* condition in the normal directions: $\mathcal P^{\sigma a}=-T_0\sqrt{1-v^2/c^2}\,n^a$ is generically nonzero, and that flux is the tension the brane absorbs. In the space-filling case every component is constrained, $\hat n_\parallel=\hat n$ is a full unit vector, cannot vanish, and (1) forces $v=c$. Lowering the brane dimension is exactly what opens the second escape route, $\hat n_\parallel=0$.

## Reading off the cases

(1) is a product: it holds when either factor is zero. The classification is bookkeeping on the two factors, though transversality (3) does extra work in low dimensions.

| brane | argument | endpoint motion |
|---|---|---|
| **D0** | no brane-tangent directions, so $\hat n_\parallel$ has no components — (1) is empty | endpoint pinned to a point; all conditions automatic |
| **D1** | (3) and (1) together force $\hat n_\parallel=0$ (see below) | string meets the line perpendicularly; speed *along* the line is free (subluminal allowed) |
| **D$p$, $p\ge2$** | either $\hat n_\parallel=0$ or $v=c$ | perpendicular contact $\Rightarrow$ any speed; non-perpendicular contact $\Rightarrow$ $v=c$ transverse |
| **D$d$** (space-filling) | $\hat n_\parallel=\hat n$ is a unit vector, cannot vanish | end must move at $c$ — the original theorem |

**Why D1 cannot use the $v=c$ escape.** With one brane direction $x^1$, the velocity is $\vec v=(v^1,0,\dots,0)$ by (2), and transversality (3) reads $n^1v^1=0$. If $v^1\neq0$, (3) forces $n^1=0$; if $v^1=0$, the square root equals $1$ and (1) forces $n^1=0$. Either way $\hat n_\parallel=0$: the string always meets a D1 perpendicularly, and once $\hat n_\parallel=0$ the boundary equations leave the speed along the line undetermined. The $v=c$ escape decouples from perpendicular contact only with two or more brane directions, where a nonzero in-brane velocity can be orthogonal to a nonzero $\hat n_\parallel$.

**The extremes as a sanity check.** D0 is all-Dirichlet: the endpoint is nailed to a point and there is nothing to solve. D$d$ is all-Neumann: no normal directions exist for tension to escape into, so the end is flung at $c$. Every intermediate brane interpolates: the more normal directions, the more room for the string to plunge perpendicularly and slow down.

## Why this belongs with D-branes

The same list — which directions are Neumann, which Dirichlet — sets both the brane's geometry and the endpoint's dynamics:

- Neumann (brane-tangent) directions build the brane's dimensions and forbid momentum from leaving the endpoint there; in them the light-speed pressure survives.
- Dirichlet (brane-normal) directions locate the brane and let the string's tension flow into it; they are what let the endpoint slow down.

A D-brane is therefore not merely "where the endpoint lives." It is the object that decides which components of the string's tension must vanish at the boundary and which components the brane soaks up. Endpoint speed is a direct readout of the boundary-condition pattern.

## Open questions
- "Speed along a D1 is free" is a *local* boundary-condition statement. A complete string solution must also satisfy the bulk wave equation and global constraints, which can pin the speed down.
- This treatment holds the brane rigid. A dynamical brane recoils, carrying off the normal momentum that the fixed-brane picture simply lets leave the string; that back-reaction is deferred to later modules.

## Exercise

A string ends on a D2-brane in $d=3$: the brane is the $(x^1,x^2)$ plane and $x^3$ is normal. At the endpoint the unit tangent is $\hat n=\tfrac{1}{\sqrt2}(0,1,1)$ — the string leaves the brane at $45^\circ$. What do the product law (1) and transversality (3) together force for the endpoint velocity $\vec v$? Then change the tangent to $\hat n=(0,0,1)$ (perpendicular contact) and answer again.

> [!success]- Solution
> **Tangent at $45^\circ$.** The brane-parallel part of $\hat n=\tfrac1{\sqrt2}(0,1,1)$ is $\hat n_\parallel=\tfrac1{\sqrt2}(0,1,0)$, which is nonzero. The product law (1), $\sqrt{1-v^2/c^2}\,\hat n_\parallel=0$, then forces the square root to vanish:
> $$\sqrt{1-v^2/c^2}=0\ \Longrightarrow\ v=c.$$
> Transversality pins the direction. The velocity lives in the brane, $\vec v=(v^1,v^2,0)$, and (3) gives $\hat n\cdot\vec v=\tfrac{1}{\sqrt2}\,v^2=0$, so $v^2=0$. Hence
> $$\vec v=(\pm c,\,0,\,0):$$
> the endpoint races along the brane at light speed, perpendicular to the string's in-brane shadow. This is the $p\ge2$ non-perpendicular branch.
>
> **Perpendicular tangent.** For $\hat n=(0,0,1)$ the tangent is entirely normal: $\hat n_\parallel=\vec 0$. Now (1) reads $\sqrt{1-v^2/c^2}\cdot\vec 0=0$, satisfied for any $v$, and (3) is automatic because $\vec v=(v^1,v^2,0)$ has no $x^3$ component. The endpoint may move at any subluminal speed, in any direction along the brane. Physically: the string pulls straight into the brane, all its tension is absorbed in the normal direction ($\mathcal P^{\sigma 3}\neq0$ is allowed), and nothing is left to force the end to $c$.
