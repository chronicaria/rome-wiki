---
title: Bulk equations versus boundary terms
number: "9.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-conditions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Integrating the Nambu–Goto variation by parts splits it into a bulk momentum-conservation law that governs the string's interior and an endpoint term that must be separately switched off at each open end.

## One variation, two questions

Extremizing an action means the variation $\delta S$ must vanish for *every* allowed wiggle $\delta X^\mu$. The variation from [[Variation of the worldsheet area]] contains derivatives of the wiggle, $\partial_\tau(\delta X^\mu)$ and $\partial_\sigma(\delta X^\mu)$. Integration by parts moves those derivatives *off* the wiggle and *onto* the momentum densities, at the price of a total-derivative term that lives on the edge of the parameter rectangle. This is the same move as ordinary Lagrangian mechanics — $\int \dot q\,\delta\dot q\,dt \to -\int \ddot q\,\delta q\,dt + [\dot q\,\delta q]$ — but now in two variables, so the leftover "edge" is a whole boundary curve rather than two endpoints.

The result cleanly separates two questions:

- **Interior (bulk):** what equation must the string satisfy at every point? Answer: a local conservation law for spacetime momentum.
- **Edges (boundary):** what happens where the sheet stops — the initial/final times, and the two ends of an open string? Answer: the time edges are fixed by the rules of the variational game, but each *spatial* end needs a real physical boundary condition, because momentum could otherwise leak out there.

One identification drives everything: **$\mathcal P^\sigma_\mu$ is the flow of spacetime momentum out the end of the string.** A free end says nothing leaks out ($\mathcal P^\sigma_\mu=0$); a pinned (Dirichlet) end says the endpoint cannot move, so what would leak is irrelevant ($\delta X^\mu=0$). Everything below works out those two options.

## Integration by parts

From [[Variation of the worldsheet area]] the variation is
$$
\delta S=\int_{\tau_i}^{\tau_f}d\tau\int_0^{\sigma_1}d\sigma\,
\left[
\mathcal P^\tau_\mu\,\partial_\tau(\delta X^\mu)
+\mathcal P^\sigma_\mu\,\partial_\sigma(\delta X^\mu)
\right],
$$
where $\mathcal P^\tau_\mu=\partial\mathcal L/\partial\dot X^\mu$ is the spacetime-momentum density carried along worldsheet time, and $\mathcal P^\sigma_\mu=\partial\mathcal L/\partial X'^\mu$ is the momentum flux carried along the string. (The endpoint label $\sigma_1$ stays arbitrary until a parameterization is chosen; the gauge-fixed notes later take $\sigma\in[0,\pi]$.) Use the product rule in each variable, $\mathcal P\,\partial(\delta X)=\partial(\delta X\,\mathcal P)-\delta X\,\partial\mathcal P$:
$$
\delta S
=\int d\tau\,d\sigma\left[
\underbrace{\partial_\tau(\delta X^\mu\mathcal P^\tau_\mu)
+\partial_\sigma(\delta X^\mu\mathcal P^\sigma_\mu)}_{\text{total derivatives}\;\to\;\text{edge terms}}
-\;\delta X^\mu\underbrace{\left(\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu\right)}_{\text{bulk Euler–Lagrange}}
\right].
\tag{1}
$$
Integrating each total derivative collapses it onto the corresponding edge of the rectangle $[\tau_i,\tau_f]\times[0,\sigma_1]$: the $\partial_\tau$ term lands on the time edges $\tau_i,\tau_f$, the $\partial_\sigma$ term on the space edges $0,\sigma_1$.

## Time edges: fixed by the rules of the game

The $\tau$-total-derivative gives
$$
\left[\int_0^{\sigma_1}d\sigma\,\delta X^\mu\mathcal P^\tau_\mu\right]_{\tau_i}^{\tau_f}.
\tag{2}
$$
Hamilton's principle only compares histories that share the *same* initial and final string configurations, so by construction
$$
\delta X^\mu(\tau_i,\sigma)=\delta X^\mu(\tau_f,\sigma)=0.
$$
The term (2) vanishes automatically. This is not a physical condition on the string — it is the definition of the variational problem (we hold the past and future fixed and ask what happens in between).

## Space edges: real physical ends

The $\sigma$-total-derivative gives, for an open string,
$$
\int_{\tau_i}^{\tau_f}d\tau\,
\Big[\delta X^\mu\mathcal P^\sigma_\mu\Big]_0^{\sigma_1}
=\int_{\tau_i}^{\tau_f}d\tau\,
\Big(
\delta X^\mu\,\mathcal P^\sigma_\mu\big|_{\sigma_1}
-\delta X^\mu\,\mathcal P^\sigma_\mu\big|_{0}
\Big).
\tag{3}
$$
The lower end carries a minus sign because $[\,\cdot\,]_0^{\sigma_1}$ means top minus bottom. That sign is harmless here: we will force each endpoint term to vanish *separately*, so how they combine never matters.

For a **closed string** there are no ends — $\sigma=0$ and $\sigma=\sigma_1$ are the same point. Periodicity makes $\delta X^\mu$ and $\mathcal P^\sigma_\mu$ match at the identified ends, the two contributions in (3) cancel, and no endpoint condition is needed. Boundary conditions are an open-string phenomenon.

## The bulk equation of motion

In the interior $\delta X^\mu$ is completely arbitrary, so its coefficient in (1) must vanish pointwise:
$$
\boxed{\;\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0\;}
$$
Read it as a **continuity equation for spacetime momentum on the sheet**: the momentum stored in a strip of string ($\mathcal P^\tau_\mu$) changes in time only through the flux $\mathcal P^\sigma_\mu$ crossing the strip's two edges in $\sigma$. It is one conservation law per spacetime component $\mu$, and it holds for open and closed strings alike. Compact as it looks, it is badly nonlinear — each $\mathcal P$ is a quotient of quadratics in $\dot X$ and $X'$ over a square root of the same — and becomes tractable only after a gauge choice like [[Static gauge]] collapses it.

## The two ways to kill an endpoint term

Focus on one spacetime component $\mu$ at one end $\sigma_*\in\{0,\sigma_1\}$. The term to kill is
$$
\delta X^\mu(\tau,\sigma_*)\,\mathcal P^\sigma_\mu(\tau,\sigma_*)
\qquad(\text{no sum on }\mu).
$$
A product vanishes if either factor does, giving exactly two choices per component per end.

**Dirichlet — pin the end.** Restrict the allowed variations:
$$
\delta X^\mu(\tau,\sigma_*)=0,
$$
so every competing history shares the same prescribed endpoint position. When the end is pinned to a wall that does not move — the case in this module — that position is constant in time, and on the solution
$$
\partial_\tau X^\mu(\tau,\sigma_*)=0.
$$
The endpoint coordinate is frozen. Freezing is only available to a **spatial** component: a frozen $X^0$ would stop time from advancing at the end, and time must advance as $\tau$ advances. So $\mu=0$ can never be Dirichlet.

**Free (Neumann) — let the end swing, but leak nothing.** Allow arbitrary endpoint variation and instead kill the flux:
$$
\boxed{\;\mathcal P^\sigma_\mu(\tau,\sigma_*)=0\;}
$$
No $\mu$-momentum flows out the end. Because the time component cannot be Dirichlet, it *must* be free at both ends:
$$
\mathcal P^\sigma_0(\tau,0)=\mathcal P^\sigma_0(\tau,\sigma_1)=0.
$$

**Counting.** With $D=d+1$ spacetime dimensions there are two ends, giving $2D$ endpoint terms, hence $2D$ conditions to fix. Each spatial direction at each end is an independent choice — Dirichlet if the end is pinned in that direction, free if it may slide.

## Why "free" becomes "Neumann"

At the raw Nambu–Goto level the invariant free condition is $\mathcal P^\sigma_\mu=0$, *not* yet the tidy $X'_\mu=0$ — in a generic parameterization $\mathcal P^\sigma_\mu$ is a messy combination of $\dot X$ and $X'$. It simplifies once we pick an orthonormal (conformal-type) gauge, whose constraints are
$$
\dot X\cdot X'=0,\qquad \dot X^2+X'^2=0.
$$
Substitute the first constraint into the explicit flux $\mathcal P^\sigma_\mu=-\frac{T_0}{c}\dfrac{(\dot X\cdot X')\dot X_\mu-\dot X^2X'_\mu}{\sqrt{(\dot X\cdot X')^2-\dot X^2X'^2}}$ from [[Variation of the worldsheet area]] (this module keeps $c$ explicit): the $\dot X\cdot X'$ pieces drop, leaving
$$
\mathcal P^\sigma_\mu
=-\frac{T_0}{c}\,\frac{-\dot X^2\,X'_\mu}{\sqrt{-\dot X^2X'^2}}.
$$
Now use the second constraint, $X'^2=-\dot X^2>0$ — the tangent along the string is spacelike and the velocity timelike (mostly-plus signature) — so the denominator is $\sqrt{(-\dot X^2)(-\dot X^2)}=-\dot X^2$, and
$$
\mathcal P^\sigma_\mu=-\frac{T_0}{c}\,X'_\mu.
$$
Hence $\mathcal P^\sigma_\mu=0 \iff X'_\mu=0$: the familiar Neumann condition. At a fully free (covariant Neumann) end, $X'^\mu=0$ turns the constraint $\dot X^2+X'^2=0$ into $\dot X^2=0$: the endpoint's velocity is null, so a free string end moves at the speed of light. The physics was always "no momentum leaks out"; the gauge just makes it look like a slope condition.

## D-brane preview

Dirichlet directions pin open-string endpoints to a surface. An end with $p$ spatial directions free and the rest Dirichlet is confined to a $p$-dimensional spatial hypersurface — a **D$p$-brane**. Module 10 turns this endpoint bookkeeping into geometry in [[Neumann versus Dirichlet conditions]] and [[D-branes (first appearance)]].

## Open questions

- Background gauge fields on a D-brane replace pure Neumann by *mixed* boundary conditions; see [[Maxwell fields coupled to open strings]].
- Curved or moving D-branes require time-dependent or curved Dirichlet data, beyond this static local analysis.

## Exercise

An open string has $D=4$ spacetime dimensions ($X^0,X^1,X^2,X^3$). Its two endpoints are attached to a flat D2-brane spanning the $(X^1,X^2)$ plane at $X^3=0$.

(a) For each of the four spacetime components $\mu=0,1,2,3$, state whether each endpoint obeys a Dirichlet or a free/Neumann condition, and write the condition.
(b) Confirm the total count of boundary conditions matches the $2D$ expected from the variation, and explain in one sentence why $\mu=0$ could not have been chosen Dirichlet.

> [!success]- Solution
> **(a)** The brane fills $X^1,X^2$ and sits at fixed $X^3=0$; time $X^0$ is never Dirichlet.
> - $\mu=0$ (time): **free** at both ends, $\mathcal P^\sigma_0(\tau,0)=\mathcal P^\sigma_0(\tau,\sigma_1)=0$.
> - $\mu=1,2$ (along the brane): **free/Neumann** at both ends; in conformal gauge $X'^1=X'^2=0$, so the endpoints slide freely on the plane.
> - $\mu=3$ (transverse to the brane): **Dirichlet** at both ends, $X^3(\tau,0)=X^3(\tau,\sigma_1)=0$ (equivalently $\partial_\tau X^3=0$), pinning the endpoints to $X^3=0$.
>
> **(b)** Two ends $\times$ $D=4$ components $=8=2D$ conditions, one per endpoint term in the variation — matching. And $\mu=0$ cannot be Dirichlet because freezing $X^0(\tau,\sigma_*)$ in time is impossible: time must advance as the worldsheet time $\tau$ advances, so the time component of each endpoint is forced to be free.
