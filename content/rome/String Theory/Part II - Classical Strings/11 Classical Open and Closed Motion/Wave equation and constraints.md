---
title: Wave equation and constraints
number: "11.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, wave-equation]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Choose the string's label $\sigma$ so that equal $d\sigma$ carries equal energy, and the relativistic equation of motion collapses to the plain wave equation $\ddot{\vec X}=c^2\vec X''$, plus two constraints on the initial data and a Neumann boundary condition.

The relativistic string resists solution because its effective tension and mass density depend on how fast each piece is moving. The escape is to stop labeling the string by length and label it by *energy*: give each little segment a $\sigma$-label proportional to the energy it carries. Energy per segment is conserved, so those labels ride along with the motion instead of sliding around, and in that comoving bookkeeping the string obeys the same wave equation as a guitar string. Everything relativistic is quarantined in two algebraic constraints on the allowed starting data.

Throughout, $\dot{\vec X}=\partial_t\vec X$, $\vec X'=\partial_\sigma\vec X$, and $\mathcal P^{\tau\mu},\mathcal P^{\sigma\mu}$ are the Nambu–Goto momentum densities of [[Bulk equations versus boundary terms]] (this module keeps $c$ explicit). The map $\vec X(t,\sigma)$ is a surface, not a moving curve: a function of two variables sending the **worldsheet** into space.

## Setup: static gauge and a well-chosen $\sigma$

We work in [[Static gauge|static gauge]], $X^0\equiv ct$, so the worldsheet clock $\tau$ is lab time $t$ and the worldsheet is fully described by the spatial embedding $\vec X(t,\sigma)$. That fixes *time*; it does not fix how we label points *along* the string. Two choices of the spatial label make the algebra collapse. We make them one at a time.

### Choice 1 — label lines run perpendicular to the string

Draw the string at $t=0$ with any labeling $\sigma\in[0,\sigma_1]$. At a slightly later time $t=\Delta$ the string has moved to a nearby curve; from each labeled point drop the perpendicular onto the new curve and give the foot of that perpendicular the *same* $\sigma$. Repeating this stitches together lines of constant $\sigma$ that are everywhere orthogonal to the string:
$$\frac{\partial\vec X}{\partial\sigma}\cdot\frac{\partial\vec X}{\partial t}=0. \tag{1}$$
The tangent *along* the string ($\partial_\sigma\vec X$) is perpendicular to the velocity of the labeled point ($\partial_t\vec X$). The payoff is immediate: $\partial_t\vec X$ is now perpendicular to the string everywhere, so it *is* the transverse velocity, $\vec v_\perp=\partial_t\vec X$ at every point — not just at the endpoints, where transversality holds regardless of labeling because free endpoints move at $c$ perpendicular to the string. Geometrically, the labels slide through time along normals, never along the string.

### Choice 2 — equal $d\sigma$ carries equal energy

Choice 1 still leaves the *spacing* of labels free. Now fix it: demand that each segment of equal parameter length $d\sigma$ carries the same energy. To see why this is possible — and what it buys — start from the string equation of motion, whose time component in this gauge reads
$$\frac{\partial\mathcal P^{\tau 0}}{\partial t}+\frac{\partial\mathcal P^{\sigma 0}}{\partial\sigma}=0, \tag{2}$$
a conservation law for the flow of $X^0$-momentum (i.e. energy$/c$). Here $\mathcal P^{\sigma 0}$ measures energy flowing *along* the string, and with orthogonal labels there is none: orthogonality (1) reduces the flux to a multiple of $\partial X^\mu/\partial s$ (with $s$ physical arc length), and $X^0=ct$ does not vary along the string at fixed time, so $\mathcal P^{\sigma 0}=0$. Equation (2) then collapses to $\partial_t\mathcal P^{\tau 0}=0$. The explicit density is
$$c\,\mathcal P^{\tau 0}=T_0\,\frac{ds/d\sigma}{\sqrt{1-v_\perp^2/c^2}}\equiv T_0\,A(\sigma), \tag{3}$$
the relativistic energy per unit $\sigma$: a segment of physical length $ds$ has rest energy $T_0\,ds$, boosted by the Lorentz factor of its transverse motion. So $A(\sigma)$ **is conserved in time**. The whole construction rests on this one fact: with orthogonal labels, each labeled packet carries a fixed amount of energy for all time.

In this same parameterization the momentum densities reduce to $\vec{\mathcal P}^\tau=\frac{T_0}{c^2}A(\sigma)\,\dot{\vec X}$ and $\vec{\mathcal P}^\sigma=-\frac{T_0}{A(\sigma)}\vec X'$, so the spatial equation of motion $\partial_t\vec{\mathcal P}^\tau+\partial_\sigma\vec{\mathcal P}^\sigma=0$, after dividing by the time-independent $A$, reads
$$\frac{1}{c^2}\frac{\partial^2\vec X}{\partial t^2}=\frac{1}{A(\sigma)}\frac{\partial}{\partial\sigma}\!\left[\frac{1}{A(\sigma)}\frac{\partial\vec X}{\partial\sigma}\right]. \tag{4}$$
The two factors of $A$ ask to be absorbed into the coordinate. Define a new label $\tilde\sigma$ by
$$d\tilde\sigma=A(\sigma)\,d\sigma. \tag{5}$$
Because $T_0A$ is the energy per unit old-$\sigma$, this says $d\tilde\sigma=dE/T_0$: **the new coordinate measures the energy stored between the endpoint and the point $\tilde\sigma$.** The chain rule $\frac{1}{A}\partial_\sigma=\partial_{\tilde\sigma}$ turns (4) into $\frac{1}{c^2}\partial_t^2\vec X=\partial_{\tilde\sigma}^2\vec X$ — the wave equation. The nonlinearity did not vanish; it moved entirely into the two constraints below, which is where relativity now lives.

## The four governing equations

Rename $\tilde\sigma\to\sigma$, so from now on **$\sigma$ *is* the energy coordinate**, $\sigma\in[0,\sigma_1]$ with $\sigma_1=E/T_0$ (total energy over tension). The complete system is these four equations.

$$\textbf{Wave equation:}\qquad \frac{\partial^2\vec X}{\partial\sigma^2}-\frac{1}{c^2}\frac{\partial^2\vec X}{\partial t^2}=0. \tag{6}$$
d'Alembert's equation: acceleration in time equals $c^2$ times curvature in the label, $\ddot{\vec X}=c^2\vec X''$, so disturbances propagate at speed $c$ in the $\sigma$ coordinate. Its general solution is a left-mover plus a right-mover — the next note, [[Left-moving and right-moving components]].

$$\textbf{Constraint 1 (orthogonality):}\qquad \frac{\partial\vec X}{\partial t}\cdot\frac{\partial\vec X}{\partial\sigma}=0. \tag{7}$$
This is (1), and it survives the relabeling $\tilde\sigma\to\sigma$ untouched: the *line* of constant $\sigma$ is the same line as before, so the flow velocity stays purely transverse. The labels still slide along normals.

$$\textbf{Constraint 2 (unit normalization):}\qquad \left(\frac{\partial\vec X}{\partial\sigma}\right)^2+\frac{1}{c^2}\left(\frac{\partial\vec X}{\partial t}\right)^2=1. \tag{8}$$
This is Choice 2 written on the embedding: in the energy coordinate a unit of $\sigma$ is a fixed unit of energy, so $A=1$, and (3) becomes $\big(\tfrac{ds}{d\sigma}\big)^2+\tfrac{1}{c^2}v_\perp^2=1$. It fixes the *scale* of the label. Together, (7) and (8) restrict the allowed Cauchy data $(\vec X(0,\sigma),\dot{\vec X}(0,\sigma))$ for the otherwise linear wave equation (6) — you cannot start the string however you like.

$$\textbf{Boundary condition (free open ends):}\qquad \left.\frac{\partial\vec X}{\partial\sigma}\right|_{\sigma=0}=\left.\frac{\partial\vec X}{\partial\sigma}\right|_{\sigma=\sigma_1}=0. \tag{9}$$
With $A=1$ the momentum flowing along the string is simply $\vec{\mathcal P}^\sigma=-T_0\,\partial_\sigma\vec X$, so a *free* endpoint (no momentum flux out the end, $\vec{\mathcal P}^\sigma=0$) becomes a plain **Neumann** condition $\partial_\sigma\vec X=0$. Closed strings have no ends and replace (9) with periodicity — see [[Closed-string periodicity and rotating strings]].

## Packaging the two constraints as null directions

The two constraints combine into one tidy statement:
$$\boxed{\;\left(\frac{\partial\vec X}{\partial\sigma}\pm\frac1c\frac{\partial\vec X}{\partial t}\right)^2=1.\;} \tag{10}$$
Expanding the square gives $\vec X'^2+\tfrac{1}{c^2}\dot{\vec X}^2\pm\tfrac2c\,\dot{\vec X}\cdot\vec X'$. The **average** of the $+$ and $-$ versions of (10) is $\vec X'^2+\tfrac{1}{c^2}\dot{\vec X}^2=1$, which is constraint (8); their **difference** is $\tfrac4c\,\dot{\vec X}\cdot\vec X'=0$, which is constraint (7). So (10) with both signs is exactly equivalent to (7) and (8) together — no information lost, one clean equation.

This form is the classical seed of the Virasoro constraints. To see why, restore the time component. With $X^\mu=(ct,\vec X)$ and the mostly-plus metric $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$, the two tangent combinations $\tfrac1c\partial_t X^\mu\pm\partial_\sigma X^\mu=(1,\ \tfrac1c\dot{\vec X}\pm\vec X')$ have squared length
$$\left(\frac1c\frac{\partial X^\mu}{\partial t}\pm\frac{\partial X^\mu}{\partial\sigma}\right)^2=-1+\left(\frac1c\dot{\vec X}\pm\vec X'\right)^2=-1+1=0. \tag{11}$$
The $-1$ is the timelike part of $X^0=ct$ (mostly-plus makes it negative); the $+1$ is exactly (10). So both combinations are **null (lightlike) worldsheet directions**: the two independent wavefronts on the worldsheet travel along light rays. Rescaled to dimensionless worldsheet coordinates $(\tau,\sigma)$, this becomes $(\dot X\pm X')^2=0$ — the constraints that return, quantized, as the Virasoro algebra.

## What the relabeling bought

The velocity-dependent energy and reduced effective tension that made the string intractable are exactly what the energy-packet labeling absorbs: each packet is a fixed accounting unit that never leaks energy to its neighbors, and the motion obeys the same $\ddot{\vec X}=c^2\vec X''$ that governs a taut violin string. Equations (6)–(9) are the complete classical open string; the relativity sits in the two side conditions — orthogonality (labels move sideways) and unit normalization (label spacing = energy) — whose covariant content is that the two wavefronts are null. Every mode expansion later in the course hangs on this skeleton.

## Sanity checks

- **$\sigma_1=E/T_0$ has units of length.** $[E]/[T_0]=$ energy $/$ (energy/length) $=$ length, consistent with the definition (5) of the energy coordinate, $d\sigma=dE/T_0$.
- **Wave speed.** The relative sign in (6) gives $\ddot{\vec X}=c^2\vec X''$: waves move at $c$, as required for a string whose free ends already move at $c$.
- **The $+$ in constraint (8).** It is a *Euclidean* sum of two spatial vectors, not a Minkowski difference, because static gauge already used up the $\mu=0$ component: $\partial_\sigma\vec X$ and $\tfrac1c\partial_t\vec X$ are both purely spatial. The Minkowski minus sign reappears only in the covariant form (11), carried by the $ct$ component.

## Open questions

- The same null constraints (11) fall out covariantly from the worldsheet stress tensor in the Polyakov formulation; that route is deferred to [[Worldsheet stress tensor]] and [[Polyakov vs Nambu-Goto]]. Here we took only the Nambu–Goto, static-gauge path.

## Exercise

The **average** of the two versions of the boxed equation (10) reproduced constraint (8). Verify the equivalence in the direction not shown in the text: assuming (7) *and* (8) hold, show that both signs of (10) equal $1$. Then decide how the null-direction conclusion (11) fares if the metric is mostly-minus, $\eta_{\mu\nu}=\mathrm{diag}(+1,-1,\dots,-1)$: in one sentence, what flips and what survives?

> [!success]- Solution
> Expand the left side of (10) directly:
> $$\left(\vec X'\pm\tfrac1c\dot{\vec X}\right)^2=\vec X'^2+\tfrac{1}{c^2}\dot{\vec X}^2\pm\tfrac2c\,\dot{\vec X}\cdot\vec X'.$$
> Constraint (7) kills the cross term ($\dot{\vec X}\cdot\vec X'=0$), independent of the sign. Constraint (8) sets the remaining two terms to $1$. So both signs give exactly $1$, which is (10). (The reverse direction — (10) $\Rightarrow$ (7) and (8) — is the average/difference argument in the text.) The two statements are therefore equivalent.
>
> **Metric sign.** In (11) the term $-1$ comes from $(\tfrac1c\partial_t X^0)^2=1$ times the metric's time component $\eta_{00}$. With mostly-plus, $\eta_{00}=-1$, giving $-1+1=0$ — null. With mostly-minus, $\eta_{00}=+1$ and every *spatial* $\eta_{ii}=-1$, so the same combination reads $+1-1=0$: still null, but only because *every* sign flipped together. The null-direction conclusion survives — a null vector is null in any signature convention; what flips is the *bookkeeping*, i.e. which term is positive. The danger is mixing conventions midway: writing the spatial constraint (8) with its Euclidean $+$ (correct — these are spatial vectors) but using $\eta_{00}=+1$ for the time part gives $+1+1=2\neq0$, wrongly concluding the directions are not null. Pick one signature and keep the spatial parts consistent with it.
