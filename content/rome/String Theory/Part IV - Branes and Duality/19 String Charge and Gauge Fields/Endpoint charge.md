---
title: Endpoint charge
number: "19.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, endpoint-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

When an open string ends on a D-brane, the gauge symmetry of its $B$-field coupling fails at the endpoints, and the only repair is to make each endpoint an electric point charge under the Maxwell field living on the brane. That is how an open-string endpoint comes to behave like an electric charge.

Read [[Fundamental string charge]] and [[Visualizing string charge]] first; the physical payoff — electric flux on the brane carries the charge — lands in [[Maxwell fields on branes]].

## A current with nowhere to go

String charge is a divergenceless current that flows along the string's length ([[Visualizing string charge]]), and a current cannot simply stop. Yet an open string ending on a D-brane has its endpoint stop dead in the middle of the brane. Where does the current go? Either string-charge conservation fails, or something on the brane picks up the missing current at the junction.

We settle this by tracking gauge invariance, using one principle: conservation of a current is the same statement as gauge invariance of the term that couples to it. Watch that gauge invariance as an open string ends, and the answer falls out.

## The tool: conservation $\Leftrightarrow$ gauge invariance

For a Maxwell current, the coupling is $S_{\rm coup}=\int d^Dx\,A_\mu j^\mu$, and $A_\mu$ shifts by $\delta A_\mu=\partial_\mu\lambda$. Then

$$\delta S_{\rm coup}=\int d^Dx\,(\partial_\mu\lambda)\,j^\mu = -\int d^Dx\,\lambda\,\partial_\mu j^\mu, \tag{1}$$

integrating by parts and dropping the boundary term at infinity. Since $\lambda$ is arbitrary, $\delta S_{\rm coup}=0$ for every gauge choice **iff** $\partial_\mu j^\mu=0$. Gauge invariance is not an extra physical force; it is the bookkeeping rule that forbids an unbalanced source. So to test whether string charge stays conserved when a string ends, test whether the string's $B$-coupling is gauge invariant — and watch the boundary.

The same logic works for the Kalb–Ramond field. Its gauge transformation is $\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu$ (the field strength $H_{\mu\nu\rho}$ is invariant), and the spacetime coupling is $-\int d^Dx\,B_{\mu\nu}j^{\mu\nu}$ with $j^{\mu\nu}=-j^{\nu\mu}$. The variation is

$$
\begin{aligned}
\delta\!\left(-\int d^D x\,B_{\mu\nu}j^{\mu\nu}\right)
&=-\int d^D x\,(\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu)\,j^{\mu\nu} \\
&=-2\int d^D x\,(\partial_\mu\Lambda_\nu)\,j^{\mu\nu}
=2\int d^D x\,\Lambda_\nu\,\partial_\mu j^{\mu\nu}, \tag{2}
\end{aligned}
$$

using $j^{\nu\mu}=-j^{\mu\nu}$ to fold the two antisymmetric terms together, then integrating by parts. For a closed string $\partial_\mu j^{\mu\nu}=0$, so the coupling is gauge invariant. An open endpoint is exactly where this can fail.

## Where it breaks: vary $S_B$ for an open string

The string couples to $B$ through the worldsheet integral (from [[Fundamental string charge]])

$$S_B=-\tfrac12\int d\tau\,d\sigma\;\epsilon^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,B_{\mu\nu}(X),$$

with $\alpha,\beta\in\{0,1\}$ worldsheet indices and $\epsilon^{01}=1$. Now vary $B$ by $\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu$, with $\Lambda$ evaluated at the string coordinates $X(\tau,\sigma)$. The two antisymmetric terms double up, and the result collapses to two **total worldsheet derivatives**:

$$\delta S_B = -\int d\tau\,d\sigma\;\Big(\partial_\tau(\Lambda_\nu\,\partial_\sigma X^\nu) - \partial_\sigma(\Lambda_\nu\,\partial_\tau X^\nu)\Big). \tag{3}$$

Each derivative integrates to a boundary. The $\partial_\tau$ piece dies: $\Lambda$ vanishes in the far past and future. The $\partial_\sigma$ piece is a boundary term in $\sigma$, and this is where closed and open strings part ways. A closed string has no $\sigma$-boundary, so this term vanishes too and $S_B$ is gauge invariant; an open string has $\sigma$-boundaries, at $\sigma=0,\pi$, which are its two endpoints living on the brane.

Split the coordinates by how the endpoint sits on the brane: $X^\mu=(X^m, X^a)$, with $X^m$ *along* the brane (Neumann) and $X^a$ *normal* to it (Dirichlet). At a Dirichlet endpoint the string cannot move off the brane, so $\partial_\tau X^a=0$ there and only the along-brane part survives the $\sigma$-boundary evaluation $[\;]_{\sigma=0}^{\sigma=\pi}$:

$$\boxed{\;\delta S_B = \int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=\pi} \;-\; \int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=0}\;} \tag{4}$$

These endpoint terms do not vanish. Gauge invariance of $S_B$ fails exactly at the open-string endpoints — which, by the tool above, is precisely the statement that the standalone string current is not conserved there. The current reaches the end of the string with nowhere to go inside the string alone. What was a slogan, "a current can't stop," is now a concrete signed boundary term we are obliged to cancel.

## The cure: make the endpoints charged

Add to the action two worldline terms coupling each endpoint to the brane's Maxwell field $A_m$:

$$S = S_B + \int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=\pi} - \int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=0}. \tag{5}$$

Each term is exactly the point-particle coupling $q\int A_\mu\,dx^\mu$ evaluated on an endpoint's worldline. So the two endpoints are point charges $q=\pm1$, opposite signs coming from the relative minus sign. By convention the string begins at the $\sigma=0$ endpoint (charge $-1$) and ends at the $\sigma=\pi$ endpoint (charge $+1$). An oriented open string is a little electric dipole pinned to the brane: $-$ at the tail, $+$ at the head.

Now demand that the whole action be gauge invariant. The move is to shift the brane Maxwell field whenever we gauge-transform $B$:

$$\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu,\qquad \delta A_m=-\Lambda_m. \tag{6}$$

Then each added term in (5) varies by $\delta\!\int A_m\,\partial_\tau X^m = -\int\Lambda_m\,\partial_\tau X^m$, carrying the same endpoint signs as (4), so it cancels the leftover $\delta S_B$ term by term. Gauge invariance is restored, but only because the Maxwell field on the brane and the Kalb–Ramond field in the bulk transform together.

That is the mechanism by which the endpoint becomes a source. The endpoint coupling was never a modeling choice; consistency manufactured it. The endpoint is not a place where charge disappears — it is a junction where the string's current converts into another channel, the brane's electromagnetism. That second channel, electric field lines on the brane carrying the string charge, is worked out in [[Maxwell fields on branes]], where the joint rule (6) also forces the physical field strength to be $\mathcal F=F+B$.

The short version: string charge is a current, and currents have no loose ends. Glue a string's end to a brane and the current would be stranded, so gauge invariance forces that end to become an electric charge whose field lines carry the current onward across the brane. Endpoint equals source, conservation intact.

## Open questions

- That there *is* a Maxwell field $A_m$ on every D-brane is imported here, not derived — it comes from quantizing the open string ([[Maxwell fields on branes]]).
- The endpoint charges are $q=\pm1$ by convention; their physical strength depends on the normalization of the brane's $F^2$ term, which is fixed only later by the string coupling and $\alpha'$ ([[Born-Infeld action]]).
- The non-abelian version (strings ending on coincident branes, giving $U(N)$ gauge fields) is not developed here — see [[D-branes and the Standard Model]].

## Exercise

The entire result hinges on one asymmetry between closed and open strings. Starting from the two total-derivative form (3), carry out both integrations explicitly for **(a)** a closed string ($\sigma\in[0,2\pi]$ with $X(\tau,\sigma)$ periodic in $\sigma$) and **(b)** an open string ($\sigma\in[0,\pi]$ with a D-brane at each end). Show that (a) gives zero while (b) gives the boxed boundary term (4), and identify the single property of the closed string that kills the term the open string keeps.

> [!success]- Solution
> In both cases the $\partial_\tau$ term integrates to $\big[\Lambda_\nu\partial_\sigma X^\nu\big]$ evaluated at the endpoints of *time*, where $\Lambda\to 0$; it vanishes identically. Only the $\partial_\sigma$ term survives:
> $$\delta S_B = +\int d\tau\int d\sigma\;\partial_\sigma\big(\Lambda_\nu\,\partial_\tau X^\nu\big)=\int d\tau\,\Big[\Lambda_\nu\,\partial_\tau X^\nu\Big]_{\sigma=\text{lower}}^{\sigma=\text{upper}}.$$
> (The overall sign is $+$: the two minus signs in (3), one on the whole expression and one from $-\partial_\sigma$, cancel.)
>
> **(a) Closed string.** With $\sigma\in[0,2\pi]$ and everything periodic, $\Lambda_\nu\partial_\tau X^\nu$ takes the *same* value at $\sigma=2\pi$ as at $\sigma=0$. The bracket is upper minus lower $=0$. So $\delta S_B=0$: a closed string has no $\sigma$-boundary, and gauge invariance holds automatically. This is the same conclusion as the current-conservation argument (2).
>
> **(b) Open string.** With $\sigma\in[0,\pi]$ the two ends are genuinely distinct worldlines on the brane, so
> $$\delta S_B=\int d\tau\,\Lambda_\nu\,\partial_\tau X^\nu\Big|_{\sigma=\pi}-\int d\tau\,\Lambda_\nu\,\partial_\tau X^\nu\Big|_{\sigma=0}.$$
> Split $\nu=(m,a)$. The Dirichlet (normal) directions are pinned to the brane, so $\partial_\tau X^a=0$ at each endpoint and those terms drop, leaving exactly
> $$\delta S_B=\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=0}\neq 0,$$
> the boxed (4).
>
> **The decisive property:** *periodicity in $\sigma$.* The closed string identifies $\sigma=0$ with $\sigma=2\pi$, so the boundary contributions cancel in pairs; the open string has two free ends that do not, and that is the entire origin of the endpoint charge.
