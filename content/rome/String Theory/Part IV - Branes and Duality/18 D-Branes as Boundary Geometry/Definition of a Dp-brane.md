---
title: Definition of a Dp-brane
number: "18.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, dp-brane]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A D$p$-brane is a flat $p$-dimensional spatial hyperplane that open-string endpoints are required to lie on; the "D" is Dirichlet, and locating the hyperplane costs one condition per direction normal to it.

## A wall for open-string ends

Imagine a wall floating in a room. A string can wave around freely, but its two ends are glued to the wall — they slide along the wall's surface and never leave it. That wall is a D-brane. It is not (yet) matter, not a source of force: it is a rule about where strings may end. What makes the module worth writing is that such a rule behaves so much like a physical object that we end up calling it one.

The name encodes the rule. The **D** stands for **Dirichlet**: pinning an endpoint to the wall is a Dirichlet boundary condition on the string coordinates pointing away from the wall (derived in [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]]). The $p$ counts the wall's spatial dimensions.

## What $p$ counts

A D$p$-brane is an extended object with $p$ spatial dimensions. In the bosonic theory space has $d = 25$ dimensions, so spacetime has $D = d+1 = 26$. A D25-brane fills all of space; a D$p$-brane with $p<25$ is a genuine flat subspace — a point ($p=0$), a line ($p=1$), a sheet ($p=2$), and so on.

Two traps to avoid.

**Spatial versus spacetime dimension — the off-by-one.** A point particle sweeps a 1D worldline and a string sweeps a 2D worldsheet; likewise a $p$-brane sweeps a $(p+1)$-dimensional **world-volume**, its $p$ spatial directions plus time. So the brane is $p$-dimensional in space but $(p+1)$-dimensional in spacetime. That $+1$ is the single most common slip.

| object | spatial dim | world-volume dim (spacetime) |
|---|---|---|
| point particle | 0 | 1 (worldline) |
| string | 1 | 2 (worldsheet) |
| D$p$-brane | $p$ | $p+1$ |

**"$p$-brane" versus "D$p$-brane".** A $p$-brane is any object with $p$ spatial dimensions. The fundamental string is a 1-brane — but it is not a D1-brane. "D$p$-brane" is the specific kind whose defining property is that open-string endpoints are Dirichlet-pinned to it.

## Locating the hyperplane: one condition per normal direction

How do you pin down a flat $p$-dimensional hyperplane inside $d$-dimensional space? You need $(d-p)$ linear equations — one for each direction the plane does *not* extend along (each **normal** direction). Picture $d=3$:

- a 2-brane (a plane) needs $d-p = 1$ condition, e.g. $z=0$;
- a 1-brane (a line along $z$) needs $d-p = 2$ conditions, e.g. $x=0$ and $y=0$.

$$
\#\text{ conditions} \;=\; \#\text{ normal directions} \;=\; d-p . \tag{1}
$$

Hold onto this count: it is exactly the number of directions in which endpoints get *pinned*. It reappears everywhere in this module — as the number of Dirichlet directions, and as the number of transverse-position scalars a D$p$-brane carries.

## The coordinate split

Give spacetime coordinates $x^\mu$, $\mu = 0,1,\dots,25$, and sort them into directions **tangent** to the brane (along the wall) and directions **normal** to it (off the wall):

$$
\underbrace{x^0,\, x^1,\, \dots,\, x^p}_{\text{tangential: }p+1\text{ of them}}
\qquad
\underbrace{x^{p+1},\, x^{p+2},\, \dots,\, x^d}_{\text{normal: }d-p\text{ of them}} . \tag{2}
$$

The tangential group is time $x^0$ together with the $p$ spatial directions the brane fills. The normal group is the $(d-p)$ directions it does not fill. Time is always tangential, since no string is ever frozen at a single instant.

The brane's **location** is then fixed by freezing the normal coordinates at constants:

$$
x^a = \bar{x}^a , \qquad a = p+1, \dots, d . \tag{3}
$$

These $(d-p)$ numbers $\bar x^a$ are literally *where the brane sits*. That there are exactly $(d-p)$ of them is the same count as $(1)$ — the $(d-p)$ equations that specify the hyperplane are precisely the $(d-p)$ freezings $x^a=\bar x^a$. When two branes appear, the differences of their $\bar x^a$ set the gap between them, which becomes a stretched-string mass in [[Strings between parallel branes]].

## Why a rule turns into an object

Right now the brane is only a boundary condition: a menu of which directions endpoints may slide in and which they are pinned in. We promote it to an "object" because of the payoff in [[Open strings on one brane]]: quantizing the pinned strings produces fields — a Maxwell photon plus $(d-p)$ scalars — that live on the brane's $(p+1)$-dimensional world-volume, and those $(d-p)$ scalars are exactly the ways you could move the brane in its $(d-p)$ normal directions. A wall that carries its own gauge field and can be displaced is indistinguishable from a physical thing.

To keep in mind: a D$p$-brane is a $p$-dimensional wall for open-string ends. You pin it with one equation per perpendicular direction ($d-p$ of them), it lives in $p+1$ spacetime dimensions, and it earns the name "object" because the strings stuck to it behave like fields painted on its surface.

## Open questions

- The identification "D = Dirichlet on normals, Neumann on tangents" is *content*, not just nomenclature; it is derived from the variational principle in [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]].
- This module treats only **flat** branes. A curved D-brane replaces the constants $\bar x^a$ by an embedding map (the brane bends through space); that needs dynamical branes and is beyond this boundary-geometry pass.
- The light-cone quantization used later needs at least one *spatial* tangential direction to build $X^\pm$, forcing $p \ge 1$. D0-branes are perfectly real objects but require covariant quantization instead — flagged, not treated here.

## Exercise

A D3-brane and a D6-brane both sit in the bosonic theory ($d=25$). For each, state (a) the world-volume dimension, (b) how many equations $x^a=\bar x^a$ locate it, and (c) how many transverse-position numbers $\bar x^a$ it carries. Then explain in one sentence why the D25-brane is the unique case that carries *no* $\bar x^a$ at all.

> [!success]- Solution
> Use world-volume $= p+1$ and normal count $= d-p$ with $d=25$.
>
> **D3-brane** ($p=3$): (a) world-volume $=3+1=4$ dimensions; (b) located by $d-p=25-3=22$ equations; (c) it carries $22$ transverse constants $\bar x^a$.
>
> **D6-brane** ($p=6$): (a) world-volume $=6+1=7$ dimensions; (b) located by $25-6=19$ equations; (c) it carries $19$ transverse constants $\bar x^a$.
>
> **D25-brane:** here $p=d=25$, so the normal count is $d-p=0$. There are no directions off the brane, hence no equations to fix and no $\bar x^a$ to specify. It fills all of space, so there is nowhere to place it and no way to displace it — which is exactly why (as [[Open strings on one brane]] shows) a space-filling brane carries no transverse-position scalars.
