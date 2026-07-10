---
title: 00 — Overview
number: "19.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, string-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open string's endpoint on a D-brane behaves like an electric point charge, because the string carries a conserved current and a conserved current cannot simply stop. This module tracks where that current goes.

## The picture

The string is a wire carrying a current, not a rod smeared with static charge. The current is charge under the closed-string 19.1 [[Kalb-Ramond field]] $B_{\mu\nu}$, and it flows along the string. A steady current in a wire has no loose ends: it loops back on itself or runs to infinity. Cut the wire in mid-air and the current stops, which is impossible.

So what happens when an open string ends on a D-brane, its endpoint stopping in the middle of the brane? The current must go somewhere. The module builds to the answer: the endpoint becomes an electric point charge, and the missing current continues as electric field lines on the brane. The string is the wire; the brane completes the circuit. A current can't stop, so the string's endpoint becomes a charge and hands its current off to the brane.

## The spine: conservation $\Leftrightarrow$ gauge invariance

A conserved current and a gauge-invariant coupling are the same statement. Couple a current $j$ to a gauge field, integrate by parts, and the variation collapses to
$$\delta S \;=\; -\!\int (\text{gauge parameter})\,(\partial\cdot j) \;+\; (\text{boundary term}).$$
For an *arbitrary* gauge parameter this vanishes **iff** $\partial\cdot j = 0$ in the interior *and* the boundary term vanishes. Gauge invariance is not a force; it is the compatibility condition that forbids an unbalanced source.

Every result in this module comes from watching that **boundary term**. For a closed string there is no boundary and everything is conserved. For an open string the boundary is in $\sigma$ — the two endpoints — and the boundary term *survives*. That surviving term is the entire physics: it is non-conservation made visible, and cancelling it is what forces the endpoint charge. This is the same "boundary terms carry the physics" theme as [[Boundary terms and allowed variations]], now with the boundary at the string's ends.

## Why this module is the hinge of Part IV

Earlier modules quantized strings and found the spectrum. Here we learn what strings and branes *carry*. Three payoffs:

1. **Strings are the natural charged 1-dimensional objects.** A point particle (0-dimensional) couples to the 1-index field $A_\mu$; a string (1-dimensional) couples to the 2-index $B_{\mu\nu}$; a D$p$-brane ($p$-dimensional) to a $(p{+}1)$-index tensor. The rule *"a $p$-dimensional object couples to a $(p{+}1)$-index gauge field"* organizes the whole subject — an $n$-dimensional worldvolume sweeps an oriented $n$-form, and the natural thing to integrate it against is an $n$-index antisymmetric field.
2. **D-branes carry worldvolume fields, not just boundary conditions.** The Maxwell field living on a brane and the charge on its open-string endpoints are *forced by gauge invariance*, not postulated.
3. **It seeds all of D-brane physics.** Branes carrying a conserved charge are stable (nothing lighter can carry their charge away), and stacks of coincident branes give non-abelian gauge groups — the door to particle physics. The endpoint-as-charge story is where that begins; the full superstring and Ramond–Ramond machinery is previewed and deferred.

## The module in seven notes

Read them roughly in this order; each link says what it delivers.

1. 19.1 [[Kalb-Ramond field]] — the two-form gauge field $B_{\mu\nu}$, its field strength $H=dB$, and why a string (not a particle) is its natural source.
2. 19.2 [[Fundamental string charge]] — derive the conserved current $j^{\mu\nu}$ from the $B$-coupling; show its charge density is a **vector** $\vec j^{\,0}$ pointing *along* the string, with $\nabla\cdot\vec j^{\,0}=0$.
3. 19.3 [[Visualizing string charge]] — that current cannot stop, so strings close or run to infinity; measure it by *linking* (an $S^1$ around the string) rather than *enclosing*, and count strings with the string number $\mathcal N$.
4. 19.4 [[Endpoint charge]] — **the core.** Vary $S_B$ for an open string; the leftover $\sigma$-boundary term shows gauge invariance fails at the endpoints; the cure makes each endpoint a point charge $q=\pm1$.
5. 19.5 [[Maxwell fields on branes]] — **the payoff.** The joint transformation $\delta A_m=-\Lambda_m$ forces $F$ and $B$ into the invariant $\mathcal F = F+B$; the brane's electric field lines carry the string charge.
6. 19.6 [[D-brane charge as a preview]] — the pattern one rung up: D$p$-branes couple to $(p{+}1)$-index (Ramond–Ramond) tensors; charged branes are stable; a wrapped brane has charge $Q=V_p/\ell_s^{\,p}$.
7. 19.7 [[D-branes and the Standard Model]] — optional orientation: stacks of $N$ branes give $U(N)$ gauge fields, and strings between stacks give bifundamental matter.

Work products distilling the core: 19.8 [[How an endpoint becomes a source]] (the one-page essay) and 19.9 [[Charge flow — open string ending on a brane]] (the diagram).

Recurring concepts linked outward: [[Boundary terms and allowed variations]], [[Neumann versus Dirichlet conditions]], [[Chan-Paton factors]], [[Born-Infeld action]], [[Yang-Mills from D-branes]].

## Open questions

- 19.7 [[D-branes and the Standard Model]] is only orientation; a real model needs compactification, chirality, anomaly cancellation, orientifolds, and supersymmetry-breaking input.
- The Ramond–Ramond / Wess–Zumino coupling is previewed only at leading order in 19.6 [[D-brane charge as a preview]]; a later superstring module should derive the R–R spectrum, charge quantization, and the full Wess–Zumino action.
- Absolute normalizations — the physical strength of the endpoint charge and the brane gauge dynamics — are deferred to the [[Born-Infeld action]] and the string-coupling discussion.

## Exercise

*Close the notes.* On a blank page, **explain — in words and equations — how an open-string endpoint can behave like an electric charge.** A complete answer must hit all four links of the chain:

1. Why a string carries a *conserved vector charge density* that flows like a current and cannot just stop (state $\nabla\cdot\vec j^{\,0}=0$ and say why it holds).
2. Vary the $B$-coupling $S_B$ for an *open* string and exhibit the leftover boundary term $\delta S_B=\int d\tau\,\Lambda_m\,\partial_\tau X^m\big|_{\sigma=0}^{\sigma=\pi}\neq 0$ — gauge invariance fails *at the endpoints*.
3. State the cure: add $\pm\!\int A_m\,dX^m$ at each endpoint ($q=\pm1$), with the joint rule $\delta A_m=-\Lambda_m$, so $\delta S=0$. The endpoint is now a point charge.
4. Say where the charge goes: on the brane $F^{0k}=E_k$ couples to $B_{0k}$, so electric field lines carry the string charge through the worldvolume.

If you can produce that chain cold — *current can't stop $\to$ gauge term survives at the endpoint $\to$ add an endpoint charge $\to$ brane flux continues the current* — you have the module.

> [!success]- Solution
> **1 — The current can't stop.** The string couples to $B_{\mu\nu}$ through $S_B=-\tfrac12\int d\tau\,d\sigma\,\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu B_{\mu\nu}$. Reading this as a spacetime coupling $-\int d^Dx\,B_{\mu\nu}j^{\mu\nu}$ defines the string current $j^{\mu\nu}$, which is antisymmetric ($j^{00}=0$). Varying the $B$ kinetic term $\propto H^2$ gives the field equation $\tfrac{1}{\kappa^2}\partial_\rho H^{\mu\nu\rho}=j^{\mu\nu}$; because $H$ is totally antisymmetric and partials commute, $\partial_\mu j^{\mu\nu}=0$. Taking $\nu=0$ and using $j^{00}=0$ leaves $\partial_k j^{0k}=0$, i.e. $\nabla\cdot\vec j^{\,0}=0$. The charge density is the *vector* $\vec j^{\,0}$, and (in static gauge) it points along $\vec X'$, the tangent to the string. A divergenceless current has no loose ends — like current in a wire, it must loop or run to infinity.
>
> **2 — Gauge invariance fails at the ends.** Under $\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu$, the two antisymmetric terms double up and $\delta S_B$ reduces to two total worldsheet derivatives, $-\!\int d\tau\,d\sigma\big[\partial_\tau(\Lambda_\nu\partial_\sigma X^\nu)-\partial_\sigma(\Lambda_\nu\partial_\tau X^\nu)\big]$. The $\partial_\tau$ piece dies ($\Lambda\to0$ at the ends of time). The $\partial_\sigma$ piece is a boundary term at $\sigma=0,\pi$. Splitting $X^\mu=(X^m,X^a)$ into Neumann (along-brane) and Dirichlet (normal), the Dirichlet condition $\partial_\tau X^a=0$ at the endpoints kills the normal part, leaving
> $$\delta S_B=\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=0}\neq0.$$
> By conservation $\Leftrightarrow$ gauge invariance, this surviving term *is* the statement that the standalone string current is not conserved at the endpoints.
>
> **3 — The cure forces a point charge.** Add an endpoint coupling to the brane Maxwell field, $S=S_B+\int d\tau\,A_m\partial_\tau X^m\big|_{\sigma=\pi}-\int d\tau\,A_m\partial_\tau X^m\big|_{\sigma=0}$. Each term is the point-particle coupling $q\!\int A_\mu dx^\mu$ with $q=\pm1$ ($-1$ at the tail $\sigma=0$, $+1$ at the head $\sigma=\pi$). Now let $B$ and $A$ transform *together*: $\delta A_m=-\Lambda_m$. Then the added terms vary by $-\!\int\Lambda_m\partial_\tau X^m$ at each end, with matching signs, cancelling $\delta S_B$ term by term. So $\delta S=0$: consistency *forced* the endpoint to be an electric charge.
>
> **4 — The charge continues on the brane.** The same joint rule makes $\delta F_{mn}=-\delta B_{mn}$, so only $\mathcal F_{mn}=F_{mn}+B_{mn}$ is gauge invariant on the brane. Expanding the brane Lagrangian $-\tfrac14\mathcal F^{mn}\mathcal F_{mn}$ produces the cross term $-\tfrac12 F^{mn}B_{mn}=-F^{0k}B_{0k}+\cdots$. Since $j^{0k}$ is *by definition* whatever couples to $B_{0k}$, and $F^{0k}=E_k$ is the electric field, the brane's electric field lines carry the string charge: flux spreads out from the $+$ endpoint and converges into the $-$ endpoint, confined to the worldvolume. The current never stopped — it changed channels.
>
> **The chain:** current can't stop $\to$ gauge term survives at the endpoint $\to$ endpoint becomes a charge $q=\pm1$ $\to$ brane electric flux carries the current onward. Endpoint $=$ source.
