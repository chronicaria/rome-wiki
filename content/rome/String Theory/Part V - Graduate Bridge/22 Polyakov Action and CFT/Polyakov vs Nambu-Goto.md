---
title: Polyakov vs Nambu-Goto
number: "22.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Nambu–Goto measures the worldsheet's area directly, which buries a square root in the action. Polyakov hands the geometry to a separate metric field $h_{\alpha\beta}$ instead; on shell $h_{\alpha\beta}$ is forced back to the induced geometry, so the two actions describe the *same classical string* — but Polyakov is polynomial in the fields and therefore quantizable.

## The einbein trick, one dimension up

Nambu–Goto is like defining a car's motion by the *length of the road it traces* — geometrically honest, but the arc-length formula $\int\sqrt{1+y'^2}\,dx$ has a square root you can't differentiate cleanly or path-integrate. The einbein trick for a point particle removes exactly this square root by adding a "ruler" field. Polyakov is that trick with one more dimension: add a worldsheet metric $h_{\alpha\beta}$ that does the measuring, so the action becomes a plain quadratic $\int (\partial X)^2$. The metric turns out to carry no physics of its own — its equation of motion just hands the geometry back — but along the way it converts an intractable action into a free 2D field theory. Everything downstream in this module is built on this one move.

## The problem with Nambu–Goto

The [[Nambu-Goto action]] is (minus the tension times) the area of the worldsheet:
$$S_{\mathrm{NG}} = -\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-\gamma},\qquad \gamma\equiv\det(\gamma_{\alpha\beta}),\quad \gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X.$$
Here $\gamma_{\alpha\beta}$ is the **induced metric**: the target-space Minkowski metric $\eta_{\mu\nu}$ (mostly-plus, $\mathrm{diag}(-1,+1,\dots,+1)$) pulled back onto the worldsheet by the embedding $X^\mu(\tau,\sigma)$, with $A\cdot B=\eta_{\mu\nu}A^\mu B^\nu$. It is the geometry the string *actually* has, dictated entirely by where it sits in spacetime.

This is beautiful and unusable. Writing out the $2\times2$ determinant,
$$\gamma = \dot X^2\,X'^2 - (\dot X\cdot X')^2 \quad\Longrightarrow\quad S_{\mathrm{NG}}=-\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{(\dot X\cdot X')^2-\dot X^2 X'^2},$$
so $\sqrt{-\gamma}$ is a **nonpolynomial** function of the velocities $\dot X^\mu$ and slopes $X'^\mu$ (a timelike worldsheet has $\gamma<0$, so the radicand $-\gamma=(\dot X\cdot X')^2-\dot X^2 X'^2$ is positive). Three consequences, all fatal for quantization:

- **Momenta don't invert.** The canonical momentum $\mathcal P^\tau_\mu=\partial\mathcal L/\partial\dot X^\mu$ comes out as a ratio with $\sqrt{-\gamma}$ in the denominator, and you cannot algebraically solve back for $\dot X^\mu$. This non-invertibility is the signature of a *constrained* system — the same pathology the relativistic point particle $L=-m\sqrt{-\dot x^2}$ has.
- **The path integral chokes.** A square root in the exponent of $\int\mathcal D X\,e^{iS_{\mathrm{NG}}}$ has no Gaussian handle; there is no standard way to do the integral.
- **Constraints must be added by hand.** The mass-shell-like relations $(\dot X\pm X')^2=0$ are not produced by the action; you impose them after gauge-fixing (as in [[Light-cone constraints|light-cone gauge]]).

## The fix: hand the geometry to an auxiliary field

Polyakov's move is to stop letting the embedding dictate the metric. Introduce an **independent worldsheet metric** $h_{\alpha\beta}(\tau,\sigma)$ — see [[Independent worldsheet metric]] — a brand-new field varied separately from $X^\mu$, and write:
$$\boxed{\,S_P = -\frac{1}{4\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-h}\;h^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,\eta_{\mu\nu}\,}$$
with $h\equiv\det(h_{\alpha\beta})$ and $h^{\alpha\beta}$ the matrix inverse, $h^{\alpha\beta}h_{\beta\gamma}=\delta^\alpha_\gamma$. This is **$D$ scalar fields $X^\mu$ living on a 2D worldsheet whose own metric is $h_{\alpha\beta}$** — free scalars coupled to 2D gravity. The flat-gauge action $S=-\frac{1}{4\pi\alpha'}\int \eta^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X$ is just $S_P$ with $\sqrt{-h}\,h^{\alpha\beta}$ frozen to $\eta^{\alpha\beta}$; Polyakov promotes that frozen background to a field.

The single structural fact that everything rests on: **no square root touches the $X$ fields.** The action is *quadratic* in $\partial X$. So:

- $X^\mu$ obeys a clean wave-type equation, $\partial_\alpha(\sqrt{-h}\,h^{\alpha\beta}\partial_\beta X^\mu)=0$ (derived in [[Polyakov action]]).
- Once $h_{\alpha\beta}$ is gauge-fixed, the $X$ path integral is **Gaussian** — the reason the worldsheet becomes a tractable 2D conformal field theory.

**Why $1/(4\pi\alpha')$ and not $1/(2\pi\alpha')$?** The coefficient is forced, not chosen. When we eliminate $h$ below we must land *exactly* on Nambu–Goto with its $1/(2\pi\alpha')$; the factor of 2 is supplied by the 2D identity $h^{\alpha\beta}h_{\alpha\beta}=2$ (a 2D metric contracted with its inverse is $\delta^\alpha_\alpha=2$). The equivalence check below closes this.

## Classical equivalence: hand the geometry back

$h_{\alpha\beta}$ is **auxiliary**: the action contains no derivatives of it, so its Euler–Lagrange equation is purely *algebraic*. We can solve it and substitute the solution straight back — "integrating out" a non-propagating field. Varying $h^{\alpha\beta}$ gives (using $\delta\sqrt{-h}=-\tfrac12\sqrt{-h}\,h_{\alpha\beta}\,\delta h^{\alpha\beta}$; full derivation in [[Worldsheet stress tensor]]):
$$\underbrace{\partial_\alpha X\cdot\partial_\beta X}_{=\,\gamma_{\alpha\beta}} - \tfrac12 h_{\alpha\beta}\,(h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X) = 0. \tag{1}$$
This is the worldsheet stress tensor set to zero, $T_{\alpha\beta}=0$ — the constraints, now *produced by the theory* instead of imposed. The second term has no free indices (it's $h_{\alpha\beta}$ times a scalar), so (1) says $h_{\alpha\beta}$ is **proportional to the induced metric** at every point:
$$h_{\alpha\beta} = f^2(\tau,\sigma)\,\gamma_{\alpha\beta}, \tag{2}$$
with $f^2(\tau,\sigma)$ an arbitrary positive function of position. *The auxiliary metric is forced to be a local rescaling of the real induced geometry — it carries no information beyond that one free scale $f^2$.*

Now substitute (2) back. In 2D, scaling $h_{\alpha\beta}\to f^2\gamma_{\alpha\beta}$ gives $\sqrt{-h}=f^2\sqrt{-\gamma}$ and $h^{\alpha\beta}=f^{-2}\gamma^{\alpha\beta}$, so
$$\sqrt{-h}\,h^{\alpha\beta} = f^2\sqrt{-\gamma}\cdot f^{-2}\gamma^{\alpha\beta} = \sqrt{-\gamma}\,\gamma^{\alpha\beta} \tag{3}$$
— **the arbitrary factor $f^2$ cancels exactly.** Then, using $\gamma^{\alpha\beta}\gamma_{\alpha\beta}=2$,
$$S_P \;\longrightarrow\; -\frac{1}{4\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-\gamma}\,\underbrace{\gamma^{\alpha\beta}\gamma_{\alpha\beta}}_{=\,2} \;=\; -\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-\gamma} \;=\; S_{\mathrm{NG}}.$$
So **on shell for $h$, Polyakov = Nambu–Goto.** The $\tfrac{1}{4\pi\alpha'}\cdot 2=\tfrac{1}{2\pi\alpha'}$ is the promised factor-of-2 bookkeeping: the boxed coefficient is exactly right.

That $f^2$ dropped out of both the $X$ equation (via (3)) and the action is not luck. The action's blindness to $f^2$ *is* [[Weyl invariance|Weyl symmetry]] — the extra local rescaling gauge symmetry Polyakov buys, and the thing that makes the worldsheet conformal.

## Why this is the better starting point

| | Nambu–Goto | Polyakov |
|---|---|---|
| Fields | $X^\mu$ | $X^\mu$ **and** $h_{\alpha\beta}$ |
| $X$-dependence | $\sqrt{\det\partial X\partial X}$ (nonpolynomial) | quadratic in $\partial X$ |
| Constraints | imposed by hand | fall out as the $h$ equation of motion |
| Path integral | intractable | Gaussian in $X$ |
| Gauge symmetry | reparam. (2D diffeo) | reparam. **+ Weyl** |

Same classical string, then, but Polyakov's extra field and extra symmetry turn the worldsheet into a quantizable 2D field theory. Everything downstream — the [[Worldsheet stress tensor]], [[Free boson OPEs]], the [[Virasoro algebra and central charge]] — is built on $S_P$, never on $S_{\mathrm{NG}}$.

## Open questions

- **Quantum equivalence.** Classically, eliminating $h_{\alpha\beta}$ gives Nambu–Goto exactly. Quantum mechanically, gauge-fixing $h$ in the path integral introduces Faddeev–Popov ghosts and a potential Weyl anomaly, tamed only if the total central charge vanishes; developed in [[Weyl invariance]] and the ghost module.
- **Global metric data.** The relation $h_{\alpha\beta}=f^2\gamma_{\alpha\beta}$ is local. On higher-genus worldsheets a finite-dimensional space of moduli survives gauge-fixing — not a flaw in the action, but the integration variables of the later Riemann surface story in [[Moduli spaces]].

## Exercise

The boxed $1/(4\pi\alpha')$ looks like it disagrees with Nambu–Goto's $1/(2\pi\alpha')$ by a factor of 2. Show, without assuming the answer, that the coefficient is forced: starting from a *general* coefficient $-\lambda\int\sqrt{-h}\,h^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X$, carry out the $h$-elimination and determine the $\lambda$ that reproduces $S_{\mathrm{NG}}=-\frac{1}{2\pi\alpha'}\int\sqrt{-\gamma}$. Which 2D identity supplies the factor of 2, and where would it fail in $d\neq2$ worldsheet dimensions?

> [!success]- Solution
> The $h^{\alpha\beta}$ equation of motion is independent of the overall constant $\lambda$ (it multiplies both terms of (1) equally), so it still gives $h_{\alpha\beta}=f^2\gamma_{\alpha\beta}$. Substituting via (3), $\sqrt{-h}\,h^{\alpha\beta}\to\sqrt{-\gamma}\,\gamma^{\alpha\beta}$ with $f^2$ cancelling, so
> $$S\to-\lambda\int d\tau\,d\sigma\,\sqrt{-\gamma}\,\gamma^{\alpha\beta}\gamma_{\alpha\beta}.$$
> The factor of 2 comes from $\gamma^{\alpha\beta}\gamma_{\alpha\beta}=\delta^\alpha_\alpha=\operatorname{tr}(\mathbb{1}_{2\times2})=2$ — a metric contracted with its inverse gives the trace of the identity, which equals the worldsheet dimension. Thus
> $$S\to-2\lambda\int d\tau\,d\sigma\,\sqrt{-\gamma}\stackrel{!}{=}-\frac{1}{2\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-\gamma}\quad\Longrightarrow\quad \boxed{\lambda=\frac{1}{4\pi\alpha'}.}$$
> The factor is not free; matching Nambu–Goto pins it. The $d=2$ specialness runs deeper than the numerology $\gamma^{\alpha\beta}\gamma_{\alpha\beta}=2$. In a $d$-dimensional worldvolume the $h$-elimination itself breaks down: contract the $h$-equation of motion $\gamma_{\alpha\beta}-\tfrac12 h_{\alpha\beta}(h^{\gamma\delta}\gamma_{\gamma\delta})=0$ with $h^{\alpha\beta}$ to get $(1-\tfrac d2)\,h^{\alpha\beta}\gamma_{\alpha\beta}=0$. For $d\neq2$ this forces $h^{\alpha\beta}\gamma_{\alpha\beta}=0$, whereupon the equation of motion collapses to $\gamma_{\alpha\beta}=0$ — the induced metric is driven to zero, not to $f^2\gamma_{\alpha\beta}$. So there is no finite $\lambda$ reproducing the area action away from $d=2$; the trick works at all only because $d=2$ makes the trace part of the constraint vacuous, leaving the Weyl factor $f^2$ free to cancel.
