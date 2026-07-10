---
title: Static gauge
number: "10.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, gauge-fixing]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The static gauge locks worldsheet time to the lab clock, $X^0 = c\tau$, so each line of constant $\tau$ is a snapshot of the whole string at one instant of lab time.

## A global shutter

Filming a moving string, you could sync a global shutter to the wall clock: every frame captures the entire string at a single lab instant. The static gauge is that choice of shutter. It draws the worldsheet's constant-$\tau$ grid lines to coincide with "the string, right now" as seen in one fixed Lorentz frame. Advance $\tau$ by $d\tau$ and the lab clock advances by the same $d\tau$ — the two clocks are welded together.

We are free to do this because the [[Nambu-Goto action|Nambu–Goto action]] depends only on the *shape* of the worldsheet in spacetime, never on how we ruled it with coordinates $(\tau,\sigma)$: any smooth invertible relabeling $(\tau,\sigma)\to(\tilde\tau,\tilde\sigma)$ leaves it unchanged. This **reparameterization invariance** is the string analogue of gauge freedom in electromagnetism — many potentials $A_\mu$ describe the same $\vec E,\vec B$, and a shrewd gauge choice exposes the physics without changing any of it. The static gauge spends the string's gauge freedom on the single most convenient rule: **let worldsheet time be lab time.**

## The choice, stated

Pick a Lorentz frame. The hyperplane $t=t_0$ cuts the worldsheet along a curve — that curve *is the string at time $t_0$* in this frame. We **declare** it to be the line $\tau = t_0$. Doing this at every instant defines $\tau$ on the whole worldsheet:

$$\tau(Q) = t(Q) \quad\text{for every worldsheet point } Q.$$

In terms of the embedding coordinate $X^0 = ct$ this reads

$$\boxed{\,X^0(\tau,\sigma) = c\,t(\tau,\sigma) = c\,\tau\,}$$

That is the entire content of the static gauge. We have spent our $\tau$-freedom and *nothing else*: $\sigma$ is still an arbitrary label running along the string. A relabeling $\sigma\mapsto\tilde\sigma(\tau,\sigma)$ slides labels along the same physical curve without moving the string, so any physically meaningful "string velocity" must ignore motion *parallel* to the string — the loose end that makes velocity subtle in [[Endpoint velocity and endpoint force]].

One choice does remain: the $\sigma$-interval. For an **open** string, let the two boundary curves be $\sigma=0$ and $\sigma=\sigma_1$, so $\sigma\in[0,\sigma_1]$. For a **closed** string the $\sigma$-line must close into a circle, $(\tau,\sigma)\sim(\tau,\sigma+\sigma_c)$ with $\sigma_c$ the circumference, because the closed worldsheet is topologically a cylinder.

## What the gauge buys: clean tangent vectors

Split the embedding into time and space, $X^\mu = (c\,t,\ \vec X(t,\sigma))$, where $\vec X$ holds the $d$ spatial coordinates. Because $X^0=c\tau$ is now trivial, the two worldsheet tangent vectors separate cleanly:

$$\frac{\partial X^\mu}{\partial\sigma} = \Big(0,\ \frac{\partial\vec X}{\partial\sigma}\Big), \qquad \frac{\partial X^\mu}{\partial\tau} = \Big(c,\ \frac{\partial\vec X}{\partial t}\Big). \tag{1}$$

The $\sigma$-tangent has **no time component** — walking along the string at fixed $\tau=t$ does not change $t$ — so it is pure spatial stretch $\partial\vec X/\partial\sigma$. The $\tau$-tangent always carries the universal $c$ in its time slot, with spatial part the motion $\partial\vec X/\partial t$. This clean split is what later turns the Nambu–Goto area into an ordinary time integral $\int dt\,(\cdots)$.

## A ten-second sign check

The gauge also lets us confirm the sign under the Nambu–Goto square root. Take a piece of string momentarily at rest, $\partial\vec X/\partial t = 0$. From (1), with mostly-plus signature,

$$\dot X\cdot\dot X = -c^2, \qquad X'\cdot X' = \Big(\frac{\partial\vec X}{\partial\sigma}\Big)^2, \qquad \dot X\cdot X' = 0,$$

so the square root $\sqrt{(\dot X\cdot X')^2 - (\dot X\cdot\dot X)(X'\cdot X')}$ becomes

$$\sqrt{\,0 - (-c^2)\Big(\frac{\partial\vec X}{\partial\sigma}\Big)^2\,} = c\,\Big|\frac{\partial\vec X}{\partial\sigma}\Big|, \tag{2}$$

real and positive — $c$ times the local stretch, exactly what a proper-area density should be. The minus sign under the radical (together with the minus in front of the action) is the one that makes a static string carry *positive* energy, as [[String tension and the energy of a stretched string]] computes. Forget the sign someday, and this is the fastest way to recover it.

> **Signature used throughout this module: mostly-plus,** $\eta_{\mu\nu}=\mathrm{diag}(-,+,\dots,+)$, so for a moving piece $\dot X\cdot\dot X = -c^2 + (\partial\vec X/\partial t)^2$. This single sign is the most common place to go wrong; the check (2) is the antidote.

## Why this matters

The static gauge is the hinge of the whole module. It converts the abstract worldsheet area into a plain mechanics problem with an ordinary time integral, which is what lets us read off a potential energy in [[String tension and the energy of a stretched string]] and a Lagrangian in [[Endpoint velocity and endpoint force]]. Every concrete number in Module 10 rides on this one gauge choice: we glued the string's clock to ours, so "the string at time $t$" is now literally a grid line, and Nambu–Goto becomes ordinary dynamics in ordinary time.

## Open questions
- Static gauge fixes only $\tau$; it leaves residual smooth relabelings $\sigma\mapsto\tilde\sigma(\tau,\sigma)$ that preserve the two endpoint curves. Module 11 spends this leftover freedom by parameterizing $\sigma$ with the string's energy.
- The gauge needs lab time to be a good worldsheet coordinate: every constant-$t$ hyperplane must cut the worldsheet transversally, in an ordinary string snapshot. An everywhere-timelike worldsheet — physical string motion — guarantees this locally; the gauge breaks down only where the worldsheet turns spacelike, i.e. for unphysical superluminal motion.

## Exercise

A student proposes the "co-moving gauge" $X^0 = c\tau + \lambda\, X^1(\tau,\sigma)$ for some constant $\lambda\neq 0$, hoping to simplify a string drifting along $x^1$. Show that this destroys the defining property of the static gauge: compute the time component of the $\tau$-tangent, $\partial X^0/\partial\tau$, and of the $\sigma$-tangent, $\partial X^0/\partial\sigma$, and explain why the clean split (1) is lost. Then state the one property of $X^0=c\tau$ that makes the split work.

> [!success]- Solution
> Differentiate the proposed relation. The $\tau$-tangent's time slot is
> $$\frac{\partial X^0}{\partial\tau} = c + \lambda\,\frac{\partial X^1}{\partial\tau},$$
> no longer the universal constant $c$ — it drifts with the string's own motion $\partial X^1/\partial\tau$. Worse, the $\sigma$-tangent's time slot is
> $$\frac{\partial X^0}{\partial\sigma} = \lambda\,\frac{\partial X^1}{\partial\sigma},$$
> nonzero wherever the string has any extent along $x^1$: walking along the string at fixed $\tau$ now changes the lab time, so constant-$\tau$ lines are **not** snapshots at a single instant. Both halves of the clean split (1) fail — the $\sigma$-tangent picks up a time component and the $\tau$-tangent loses its fixed $c$.
>
> The property that makes $X^0=c\tau$ work is that $X^0$ depends on $\tau$ **alone, linearly, with no $\sigma$-dependence**: then $\partial X^0/\partial\sigma=0$ (constant-$\tau$ curves are true equal-time snapshots) and $\partial X^0/\partial\tau=c$ (a universal clock rate). Any admixture of the spatial coordinates spoils exactly these two facts.
>
> The student's proposal is not *inconsistent* — for $\lambda=-1$ it sets $X^0+X^1\propto\tau$, which is essentially the [[Light-cone gauge]] adopted from Module 12 on. It is a perfectly good gauge that trades away the snapshot property; it just is not a static-type gauge.
