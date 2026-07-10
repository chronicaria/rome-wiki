---
title: 00 — Overview — Compactification and Effective Actions
number: "25.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, compactification]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Two ideas run through this module: a string wrapped on a small circle sees more than a point particle can (winding, T-duality), and a string in a curved background forces spacetime to obey Einstein's equations. Both come down to one fact — the two-dimensional worldsheet is in charge.

## Loops do two things points cannot

A string is a *loop*, not a *point*, and a loop can do two things a point cannot.

**It can wrap.** Put a point particle on a circle and the only new thing that happens is that its momentum around the loop becomes quantized, $p=n/R$ — a ladder of states (the Kaluza–Klein tower) whose spacing grows as the circle shrinks. A closed string does all that *and* can wind around the circle like a rubber band around a pole, $m$ times, and it costs energy to stretch it. Winding is topological: you cannot unwrap without cutting the string. This one extra integer $m$ is the source of everything stringy in the compact directions — including the fact that a string literally cannot tell a circle of radius $R$ from one of radius $\alpha'/R$ (T-duality). Momentum and winding trade places; the string sees a symmetry a point particle has no access to.

**It sweeps a surface.** As it moves, a point particle traces a line; a string traces a 2d sheet, the *worldsheet*. That sheet carries its own quantum field theory, and the geometry of spacetime enters as the *coupling constants* of that theory. Demanding that this 2d theory stay quantum-mechanically consistent — specifically, that it keep its conformal (Weyl) symmetry, which we cannot give up — forces the spacetime fields to obey equations of motion. Those equations turn out to be **Einstein's equations**. Gravity is not put in by hand; it is the price of keeping the worldsheet a CFT.

So the module has two threads, and they are the same thread seen from two sides:

1. **Compactification** — what *new structure* the extended string detects in spacetime when a dimension is curled up: winding, T-duality, enhanced gauge symmetry, orbifold fixed points.
2. **Effective actions** — what *constraints* that same worldsheet imposes back on spacetime: the metric $G_{\mu\nu}$ (graviton), the antisymmetric $B_{\mu\nu}$ (Kalb–Ramond field), and the scalar $\Phi$ (dilaton) get dynamics from the vanishing of worldsheet beta functions.

This is the bridge from "string on flat $\mathbb{R}^{1,25}$" (Modules 22–24) to "string as a theory of gravity in a real, possibly compact universe."

## The two results to hold in your head

**Compactified mass formula.** Curl the last spatial coordinate into a circle, $X\sim X+2\pi R$. The closed string then carries quantized momentum $p=n/R$ and winding $w=mR/\alpha'$, and a 25-dimensional observer measures
$$
M^2 = \frac{n^2}{R^2} + \frac{m^2 R^2}{\alpha'^2} + \frac{2}{\alpha'}\big(N^\perp + \bar N^\perp - 2\big), \qquad N^\perp - \bar N^\perp = nm. \tag{1}
$$
The $-2$ is the closed-string zero-point energy $a+\bar a=-1-1$ (the intercept $-a=1$ per sector) that also forced $D=26$; the level-matching is no longer "equal left and right" but is offset by exactly $nm$. Momentum enters as $1/R$, winding as $R/\alpha'$ — *symmetric* under swapping them. Full derivation in 25.1 [[Toroidal compactification]].

**Einstein from conformal invariance.** A string in a metric $G_{\mu\nu}(X)$ is a 2d nonlinear sigma model. Its one-loop metric beta function is the target-space Ricci tensor,
$$
\beta_{\mu\nu}(G) = \alpha'\,\mathcal R_{\mu\nu}, \tag{2}
$$
and Weyl invariance demands $\beta_{\mu\nu}(G)=0$, i.e. $\mathcal R_{\mu\nu}=0$ — the vacuum Einstein equation. Turning on $B$ and $\Phi$ sources it, and all three field equations come from one 26d effective action. Derivations in 25.2 [[Beta functions and conformal invariance]] and 25.3 [[Einstein equations from conformal invariance]].

## Sublesson notes

- 25.1 [[Toroidal compactification]] — circle/torus backgrounds, momentum quantization, winding, the compactified mass formula (1). **(Assigned work product lives here.)**
- 25.4 [[T-duality]] — $R\leftrightarrow\alpha'/R$, $n\leftrightarrow m$, the self-dual radius $R^\ast=\sqrt{\alpha'}$, enhanced $SU(2)\times SU(2)$, and the dual coordinate $\tilde X = X_L - X_R$.
- 25.5 [[Twisted sectors on orbifolds]] — quotient by a discrete symmetry, fixed points, untwisted vs twisted closed-string sectors.
- 25.2 [[Beta functions and conformal invariance]] — the nonlinear sigma model, the Weyl anomaly, and $\beta=0$ as the consistency condition.
- 25.3 [[Einstein equations from conformal invariance]] — $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}=0$ as the vacuum Einstein equation, plus the full effective action.
- 25.6 [[Metric, B-field, and dilaton as low-energy fields]] — the three massless closed-string fields, their worldsheet couplings, beta functions, string vs Einstein frame.
- 25.7 [[Worldsheet consistency becomes spacetime dynamics]] — the assigned one-page thesis tying both threads together.

Recurring links from earlier modules: [[Light-cone gauge]], [[Mass-shell relation]], [[Virasoro algebra and central charge|Virasoro operators]], [[Weyl invariance]], [[Vertex operators and physical-state conditions|Vertex operators]], [[Polyakov action]].

## Open questions

- Orbifolds: the twisted-sector note derives the $S^1/\mathbb Z_2$ antiperiodic modes, the zero-point shift, and the modular reason twisted sectors are required. The full theta-function partition-function proof remains deferred.
- T-duality: the notes give the gauged-sigma-model Gaussian sketch behind the Buscher rules, but the full determinant/Jacobian derivation of the dilaton shift and the global measure proof remain deferred.
- Effective action: the full $G/B/\Phi$ beta-function coefficients are quoted, not derived from the background-field expansion; only the leading $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$ is derived here. Multi-loop $\alpha'$ corrections remain a precise deferral.

## Exercise

Close the book and answer both parts using only the two boxed results above.

1. **What can a string detect about a compact dimension that a point particle cannot, and why does it make big and small circles indistinguishable?** State the mass formula (1) and show it is invariant under $R\to\alpha'/R$ with $n\leftrightarrow m$.
2. **How does worldsheet conformal invariance constrain spacetime fields?** In one clean chain of reasoning, get from "string in a curved background" to "spacetime obeys Einstein's equations."

> [!success]- Solution
> **Part 1.** A point particle on a circle sees only quantized momentum $p=n/R$: a KK tower with $M^2=n^2/R^2$. A closed string additionally *winds*, $m$ times around the circle, contributing $M^2\supset (mR/\alpha')^2$. The winding mass has a one-line physical origin: a string wound $|m|$ times has length $|m|\,2\pi R$, and with tension $T_0=1/(2\pi\alpha')$ its stretched rest energy is $T_0\cdot|m|2\pi R = |m|R/\alpha' = |w|$ — literally the energy stored in the stretched loop. A point particle has no winding integer $m$.
>
> Invariance: under $R\to\tilde R=\alpha'/R$ and $n\leftrightarrow m$, the first term of (1) becomes
> $$ \frac{n^2}{R^2}\;\longrightarrow\;\frac{m^2}{\tilde R^2}=\frac{m^2 R^2}{\alpha'^2}, $$
> which is exactly the *second* term of the original; likewise the second term maps to the first. The oscillator term $\frac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$ is untouched, and the constraint $N^\perp-\bar N^\perp=nm$ is symmetric in $n,m$. So as $(n,m)$ range over all integers the two radii produce the *identical list of masses*: $M^2(R;n,m)=M^2(\alpha'/R;m,n)$. The string cannot tell the two circles apart — this is T-duality, and it is intrinsically stringy because it requires winding.
>
> (Consistency check on the offset: the winding energy also explains why level-matching shifts. The zero-mode part of $L_0-\bar L_0$ is $\tfrac12(\alpha_0^2-\bar\alpha_0^2)$ with $\alpha_0,\bar\alpha_0=\sqrt{\alpha'/2}\,(p\mp w)$, giving $-\alpha' pw = -nm$; setting $L_0=\bar L_0$ then forces $N^\perp-\bar N^\perp=nm$.)
>
> **Part 2.** The chain: a string propagating in a background metric $G_{\mu\nu}(X)$ is a *2d nonlinear sigma model*, and the spacetime fields are its coupling constants (the Taylor coefficients of $G_{\mu\nu}$ about each point). Weyl (conformal) invariance is a **gauge symmetry** of the [[Polyakov action]] — the thing that removed the unphysical modes and forced $D=26$ — so it cannot be lost when we quantize. But quantizing needs a UV cutoff, which introduces a scale and makes the couplings run; the running is measured by the beta functional $\beta_{\mu\nu}(G)$. Conformal invariance survives *only if* $\beta_{\mu\nu}(G)=0$. At one loop $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$, so the condition is $\mathcal R_{\mu\nu}=0$ — the vacuum Einstein equation. Turning on $B$ and $\Phi$ adds source terms, and all three $\beta=0$ conditions follow from extremizing one 26d effective action whose leading term is Einstein–Hilbert. Spacetime gravity is, in the end, the statement that the string's worldsheet is a consistent CFT.
