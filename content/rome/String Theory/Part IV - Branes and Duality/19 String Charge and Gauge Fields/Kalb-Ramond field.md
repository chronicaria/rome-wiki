---
title: Kalb-Ramond field
number: "19.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, string-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Kalb–Ramond field $B_{\mu\nu}$ is an antisymmetric two-index gauge field, and a string couples to it the way a point particle couples to the photon $A_\mu$ — one extra index on the field for one extra dimension on the object.

## What the extra index is for

A photon $A_\mu$ carries one index because it feeds on a *tangent vector* $dX^\mu$: a point particle drags a single direction as it moves. A string does not move along a line; it sweeps a **surface**, and a surface has an oriented *area element*, an antisymmetric bivector $dX^\mu\wedge dX^\nu$. Feeding on area takes a field with two antisymmetric indices, and that field is $B_{\mu\nu}$. Everything in this note is that one idea and the gauge redundancy it carries.

The pattern generalizes: **a $p$-dimensional object couples to a gauge field with $(p{+}1)$ antisymmetric indices** (a point is $p=0$, a string is $p=1$).

| object | worldvolume dim | what it drags | gauge field |
|---|---|---|---|
| point particle | $1$ (a line) | tangent vector $dX^\mu$ | $A_\mu$ (1 index) |
| string | $2$ (a sheet) | oriented area $dX^\mu\wedge dX^\nu$ | $B_{\mu\nu}$ (2 indices) |
| D$p$-brane | $p{+}1$ | oriented $(p{+}1)$-volume | $A_{\mu_0\cdots\mu_p}$ ($p{+}1$ indices) |

The string sits one rung up the ladder from the particle. The field is not an add-on: quantizing the closed string produces a massless antisymmetric state $B_{\mu\nu}=-B_{\nu\mu}$ alongside the graviton and dilaton (see [[Fundamental string charge]]), so $B$ is already present in the closed-string spectrum.

## The field strength and its gauge symmetry

Write $B_{\mu\nu}=-B_{\nu\mu}$. Its gauge-invariant field strength is the antisymmetrized derivative (in form language, $H=dB$):
$$
H_{\mu\nu\rho}
= \partial_\mu B_{\nu\rho}
+ \partial_\nu B_{\rho\mu}
+ \partial_\rho B_{\mu\nu}.
\tag{1}
$$
This is the two-form analogue of $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$: the physical, gauge-invariant object built from derivatives of the potential.

The gauge transformation shifts $B$ by an "exterior derivative" of a *vector* parameter $\Lambda_\mu$:
$$
B_{\mu\nu}\longmapsto B_{\mu\nu}
+ \partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu.
\tag{2}
$$
The parameter carries one index — Maxwell's $\lambda$ is a scalar, $B$'s $\Lambda_\mu$ is a vector. Plug (2) into (1): every added piece is a *second* antisymmetrized derivative like $\partial_{[\mu}\partial_\nu\Lambda_{\rho]}$, which vanishes because partials commute while the indices are antisymmetrized. So $H$ is unchanged — in form language, $H\mapsto d(B+d\Lambda)=dB+d^2\Lambda=dB$ since $d^2=0$. This is the same reason $F$ survives $A_\mu\mapsto A_\mu+\partial_\mu\lambda$: the field strength keeps only the curl-like part, and the shift is purely gradient-like.

## Why a string, not a particle, couples to $B$

A point particle of charge $q$ couples through a one-form integrated along its worldline:
$$
S_A = q\int A_\mu(X)\,dX^\mu.
\tag{3}
$$
One integral, one tangent vector, because a worldline has one direction. A string's worldsheet has *two* directions $(\tau,\sigma)$, so it can integrate a *two-form*. With the sign convention shared with [[Fundamental string charge]],
$$
S_B
= -\frac{1}{2}\int d\tau\,d\sigma\;
\epsilon^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\, B_{\mu\nu}(X),
\tag{4}
$$
where $\alpha,\beta\in\{0,1\}$ are worldsheet indices ($\partial_0=\partial_\tau,\ \partial_1=\partial_\sigma$) and $\epsilon^{01}=1$. The block $\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu = \partial_\tau X^\mu\partial_\sigma X^\nu-\partial_\sigma X^\mu\partial_\tau X^\nu$ is the antisymmetric tangent bivector — the oriented area element the sheet sweeps in spacetime. $B$ assigns a coupling to that oriented area, so orientation is physical: reverse $\sigma\to\pi-\sigma$ and the area element flips sign, flipping the sign of $S_B$. Unoriented string theories therefore have no $B$ in their spectrum. (The full consequence — that string charge is a *vector along the string* — is worked out in [[Fundamental string charge]].)

## Closed strings vs. open strings: watch the boundary

The gauge redundancy (2) has teeth, and the difference between closed and open strings is entirely a **boundary-term** story — the theme running through this module.

Vary $S_B$ under (2). The two terms of $\delta B_{\mu\nu}$ are antisymmetric and contract with the antisymmetric area element, so they double up, and the result collapses to two total worldsheet derivatives:
$$
\delta_\Lambda S_B
= -\int d\tau\,d\sigma\,\Big(\partial_\tau(\Lambda_\nu\,\partial_\sigma X^\nu) - \partial_\sigma(\Lambda_\nu\,\partial_\tau X^\nu)\Big).
\tag{5}
$$
This is a curl in the $(\tau,\sigma)$ plane, so by Green's/Stokes' theorem it equals a line integral around the worldsheet boundary $\partial\Sigma$. Orient the plane the standard way, $\sigma$ horizontal and $\tau$ vertical, and traverse $\partial\Sigma$ counterclockwise:
$$
\delta_\Lambda S_B = \oint_{\partial\Sigma}\Lambda_\mu\,dX^\mu.
\tag{6}
$$

- **Closed string.** The worldsheet is a tube, infinite in time and *periodic* in $\sigma$, so there is no $\sigma$-edge. The $\partial_\tau$ piece dies because $\Lambda\to0$ at the ends of time. So $\partial\Sigma=\varnothing$ and $\delta_\Lambda S_B=0$: the coupling is gauge invariant, and a closed string carries conserved Kalb–Ramond charge with no endpoint data needed.
- **Open string.** The worldsheet is a strip with two edges, the endpoint worldlines at $\sigma=0$ and $\sigma=\pi$. Now $\partial\Sigma\neq\varnothing$. The $\partial_\tau$ piece still vanishes at temporal infinity, leaving the $\sigma$-boundary term
$$
\delta_\Lambda S_B
= \int d\tau\,\Lambda_\mu\,\partial_\tau X^\mu\Big|_{\sigma=\pi}
- \int d\tau\,\Lambda_\mu\,\partial_\tau X^\mu\Big|_{\sigma=0}.
\tag{7}
$$

Equation (7) is the engine of the rest of the module. A nonzero gauge variation means the standalone string current is **not conserved at the endpoints** — the charge flowing down the string reaches the end and has nowhere to go. When the endpoints sit on a D-brane, only the directions *along* the brane survive: the Dirichlet condition $\partial_\tau X^a=0$ kills the normal components, so the surviving variation involves the brane indices, $\Lambda_m\,\partial_\tau X^m$. [[Endpoint charge]] cures the leftover by making each endpoint a charged particle under a Maxwell field $A_m$ on the brane, with the joint rule
$$
A_m\longmapsto A_m-\Lambda_m,
\tag{8}
$$
tuned so its variation cancels (7) term by term. The consequence, developed in [[Maxwell fields on branes]], is that $F$ alone is no longer gauge invariant on the brane; only the combination
$$
\mathcal F_{mn}=F_{mn}+B_{mn}
\tag{9}
$$
is, and the string charge that would have "stopped" at the endpoint continues as electric flux on the brane worldvolume.

## Open questions

- The absolute normalization of the $B$ coupling and of the endpoint charge is fixed only by matching to the full string normalization (string coupling $g_s$, $\alpha'$) and the brane effective action — deferred to [[Born-Infeld action]] and later material.
- The Ramond–Ramond analogue, which gives *stable* charged D-branes in superstring theory, is a separate story; this note covers only the NS–NS two-form $B_{\mu\nu}$ that the fundamental string couples to. See [[D-brane charge as a preview]].

## Exercise

Show that $S_B$ in (4) is unchanged if you replace $B_{\mu\nu}$ by its symmetric part's counterpart — i.e. prove directly that only the antisymmetric part of any two-index field couples. Concretely: let $T_{\mu\nu}=S_{\mu\nu}+B_{\mu\nu}$ with $S_{\mu\nu}=S_{\nu\mu}$ symmetric and $B_{\mu\nu}=-B_{\nu\mu}$ antisymmetric, and show the symmetric part $S_{\mu\nu}$ drops out of the worldsheet coupling. Then use the same mechanism to argue in one line why the gauge shift $\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu$ is the *most general* one that leaves $H$ invariant while being built from a vector parameter.

> [!success]- Solution
> The coupling contracts $B_{\mu\nu}$ with the area element $A^{\mu\nu}\equiv\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu$. Swapping the dummy names $\mu\leftrightarrow\nu$ and using $\epsilon^{\alpha\beta}=-\epsilon^{\beta\alpha}$,
> $$A^{\nu\mu}=\epsilon^{\alpha\beta}\partial_\alpha X^\nu\partial_\beta X^\mu=\epsilon^{\beta\alpha}\partial_\beta X^\nu\partial_\alpha X^\mu=-\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu=-A^{\mu\nu},$$
> so $A^{\mu\nu}$ is antisymmetric. Now for the symmetric part, $S_{\mu\nu}A^{\mu\nu}=S_{\nu\mu}A^{\mu\nu}$ (symmetry of $S$) $=S_{\mu\nu}A^{\nu\mu}$ (relabel) $=-S_{\mu\nu}A^{\mu\nu}$ (antisymmetry of $A$). A quantity equal to its own negative is zero, so $S_{\mu\nu}A^{\mu\nu}=0$: the symmetric part contributes nothing, and $T_{\mu\nu}A^{\mu\nu}=B_{\mu\nu}A^{\mu\nu}$. Only the antisymmetric part couples.
>
> The same antisymmetry pins down the gauge symmetry. A shift of $B$ built from first derivatives of a vector $\Lambda_\mu$ is a linear combination of $\partial_\mu\Lambda_\nu$ and $\partial_\nu\Lambda_\mu$; keeping $B$ antisymmetric forces the antisymmetric combination $\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu=(d\Lambda)_{\mu\nu}$, up to an overall scale absorbed into $\Lambda$. It leaves $H=dB$ invariant because $H\mapsto d(B+d\Lambda)=dB+d^2\Lambda=dB$ ($d^2=0$). This is the most general first-derivative shift of a vector parameter consistent with the antisymmetry of $B$.
