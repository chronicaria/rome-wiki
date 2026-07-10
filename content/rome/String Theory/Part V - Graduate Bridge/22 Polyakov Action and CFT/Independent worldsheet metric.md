---
title: Independent worldsheet metric
number: "22.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Treating the worldsheet metric $h_{\alpha\beta}$ as an independent field rather than as the geometry the string inherits is the single move that makes the string quantizable: its three components are eaten exactly by three local symmetries, so it propagates nothing, can be gauged flat, and its own equation of motion *is* the Virasoro constraints — the very constraints we used to impose by hand.

## A metric with no job of its own

Start one dimension down, with a point particle. Its natural action is the arc length $S=-m\int d\tau\sqrt{-\dot x^2}$ — a square root, awful to quantize. The trick that fixes it: bolt on an extra field, the **einbein** $e(\tau)$, a "ruler" that measures proper time along the path, and write
$$S=\tfrac12\int d\tau\,\big(e^{-1}\dot x^2 - m^2 e\big).$$
No square root, and $e$ is not really new. It has no derivatives in the action, so its equation of motion is *algebraic*: varying $e$ gives $e=\sqrt{-\dot x^2}/m$, and putting that back reproduces the square-root action exactly. In momentum variables that same equation reads $p^2+m^2=0$ — the mass-shell constraint. The einbein's entire purpose is to be a non-dynamical field whose EOM *enforces a constraint* you would otherwise impose by hand.

The worldsheet metric $h_{\alpha\beta}$ is the einbein with one more dimension. Same three things happen: it kills the square root (making the [[Polyakov vs Nambu-Goto|Polyakov action]] quadratic in $\partial X$), it is non-dynamical, and its algebraic EOM is a constraint — here, the Virasoro constraints. The rest of the note makes each of these three claims precise.

## Two metrics, kept separate

The one confusion to avoid: there are *two* metrics on the worldsheet.

- The **induced metric** $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$ — *determined* by the embedding $X^\mu$. It is the actual geometry the string sheet has, inherited from spacetime. (The dot is $A\cdot B=\eta_{\mu\nu}A^\mu B^\nu$, mostly-plus.)
- The **intrinsic metric** $h_{\alpha\beta}(\tau,\sigma)$ — an *independent* field, put into the Polyakov action by hand, with its own equation of motion. This is the kind of metric one writes down in 2D general relativity, a field on the surface rather than a consequence of it.

In Nambu–Goto only $\gamma_{\alpha\beta}$ exists. In Polyakov, $h_{\alpha\beta}$ is a separate variable, and the relation $h_{\alpha\beta}\propto\gamma_{\alpha\beta}$ is *derived* on-shell, not assumed — that derivation lives in [[Polyakov vs Nambu-Goto]].

Calling $h_{\alpha\beta}$ **auxiliary** means something exact: it is varied in the action, but the action contains *no derivatives* of it. So its Euler–Lagrange equation is algebraic, not a wave equation. Unlike $X^\mu$, it does not propagate; it only ties together the gradients $\partial_\alpha X^\mu$.

## Why it is pure gauge: the counting

Here is the deep reason the metric can be thrown away entirely, not just simplified. A symmetric $2\times2$ matrix has **3 independent components**:
$$h_{\alpha\beta}=\begin{pmatrix} h_{\tau\tau} & h_{\tau\sigma}\\ h_{\tau\sigma} & h_{\sigma\sigma}\end{pmatrix}.$$
The Polyakov action has **3 local (position-dependent) symmetries** acting on it:

- **2 reparametrizations** — worldsheet diffeomorphisms $\xi^\alpha\to\tilde\xi^\alpha(\xi)$, two arbitrary functions;
- **1 Weyl rescaling** $h_{\alpha\beta}\to\Omega^2(\xi)\,h_{\alpha\beta}$, one arbitrary function (see [[Weyl invariance]]).

A local symmetry is the license to change a field freely at every point without touching the physics. Three such licenses against three components:
$$3\ \text{components}\;-\;3\ \text{local symmetries}\;=\;0\ \text{propagating degrees of freedom}.$$
The metric is pure gauge. Every value of $h_{\alpha\beta}$ is reachable from every other by a symmetry, so *choosing* it costs nothing — which is exactly why we are allowed to gauge it flat.

## The 3-vs-2 subtlety: why only 2 constraints

Varying a symmetric $h_{\alpha\beta}$ with 3 entries looks like it should give 3 equations, yet there are only 2 Virasoro constraints. The resolution is that $h$ enters the action *only* through the combination
$$M^{\alpha\beta}\equiv\sqrt{-h}\,h^{\alpha\beta},\qquad h\equiv\det h_{\alpha\beta},$$
and in two dimensions this combination has a **fixed determinant**:
$$\det M^{\alpha\beta}=(\sqrt{-h})^2\,\det(h^{\alpha\beta})=\frac{-h}{h}=-1.$$
A symmetric $2\times2$ matrix constrained to $\det=-1$ has only **2** free parameters, not 3 — its overall scale is pinned. That missing scale is precisely the Weyl factor: the action never sees it, so varying it produces no equation. Hence 2 independent constraints, not 3.

This is special to two dimensions. For an $n\times n$ metric of signature $(-,+,\dots,+)$ the same computation gives $\det M=-(-h)^{\,n/2-1}$, which is a fixed constant *only* when $n=2$. In any other dimension $M$ carries the scale and the metric is genuinely dynamical — the reason this whole story is unique to the worldsheet.

## Gauging it away: conformal gauge

Because $h_{\alpha\beta}$ is pure gauge, a standard fact of 2D geometry (the existence of isothermal coordinates) lets us bring *any* worldsheet metric locally to
$$h_{\alpha\beta}=\rho^2(\xi)\,\eta_{\alpha\beta},\qquad \eta_{\alpha\beta}=\mathrm{diag}(-1,+1),$$
using up the 2 reparametrizations. This is **conformal gauge**: flat up to a position-dependent scale $\rho^2$. The leftover Weyl symmetry then erases $\rho^2$ from the combination that actually appears:
$$\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}\qquad\text{(conformal gauge)},$$
since the two powers of $\rho$ from $\sqrt{-h}$ and from $h^{\alpha\beta}$ cancel. After gauge-fixing the dynamical metric is *entirely gone* from the action — traded for a flat background plus the constraints it left behind.

With $\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}$, the $X$ equation of motion collapses to the free 2D wave equation,
$$\partial_\alpha(\eta^{\alpha\beta}\partial_\beta X^\mu)=(-\partial_\tau^2+\partial_\sigma^2)X^\mu=0,\tag{1}$$
and the metric's own EOM, $\;\partial_\alpha X\cdot\partial_\beta X-\tfrac12 h_{\alpha\beta}\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X=0\;$ (the worldsheet [[Worldsheet stress tensor|stress tensor]] set to zero), reduces component by component to
$$\dot X^2+X'^2=0\quad(\tau\tau),\qquad \dot X\cdot X'=0\quad(\tau\sigma),\tag{2}$$
equivalently $(\dot X\pm X')^2=0$ — the **Virasoro constraints**, now *derived* rather than postulated. The remaining component ($\sigma\sigma$) repeats the $\tau\tau$ equation, exactly matching the 3-vs-2 count above: the trace part carried no information.

## What gauge-fixing buys you

Nambu–Goto hands you a square root and makes you impose $(\dot X\pm X')^2=0$ by hand. Polyakov's independent metric removes the square root, and because that metric is auxiliary and pure gauge, gauge-fixing it does two jobs at once: it turns the $X$ dynamics into free waves (1), and its leftover equation of motion hands you the constraints for free (2). We added an auxiliary metric whose only purpose is to enforce a law, then gauged it away and kept the law.

## Open questions

- **Local versus global.** $h_{\alpha\beta}=\rho^2\eta_{\alpha\beta}$ is a *local* statement. On higher-genus worldsheets a finite number of metric parameters (moduli) survive gauge fixing; developed in [[Moduli spaces]].
- **Quantum gauge fixing.** Diffeomorphism + Weyl removes the metric classically. Quantum mechanically the gauge-fixing is legitimate only if the total central charge vanishes, which forces $D=26$; see [[Weyl invariance]] and the ghost module.
- **Geometry input.** That every 2D metric is locally conformally flat (isothermal coordinates) is used here as a standard theorem, not proved.

## Exercise

Show that the metric-EOM component along $\sigma\sigma$ is *not* an independent constraint — i.e. that in conformal gauge the $\sigma\sigma$ equation is identical to the $\tau\tau$ equation — and connect this to the counting argument. Then state what would go wrong with this reasoning in $3$ worldsheet dimensions.

> [!success]- Solution
> In conformal gauge $\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}=\mathrm{diag}(-1,+1)$, so $h_{\alpha\beta}=\eta_{\alpha\beta}$ (up to the Weyl factor, which cancels) and $h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X=-\dot X^2+X'^2$. The stress tensor $T_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X-\tfrac12\eta_{\alpha\beta}(-\dot X^2+X'^2)$ has components
> $$T_{\tau\tau}=\dot X^2-\tfrac12(-1)(-\dot X^2+X'^2)=\tfrac12(\dot X^2+X'^2),$$
> $$T_{\sigma\sigma}=X'^2-\tfrac12(+1)(-\dot X^2+X'^2)=\tfrac12(\dot X^2+X'^2).$$
> So $T_{\tau\tau}=T_{\sigma\sigma}$ *identically*: setting one to zero automatically sets the other. Only $T_{\tau\tau}=0$ and $T_{\tau\sigma}=\dot X\cdot X'=0$ are independent — 2 constraints, not 3.
>
> This is the local shadow of the counting. The redundant component is the *trace* $\eta^{\alpha\beta}T_{\alpha\beta}$; in 2D the stress tensor is automatically traceless (that is Weyl invariance), so its trace is not an equation. Equivalently, the scale of $h_{\alpha\beta}$ dropped out of the action because $\det(\sqrt{-h}\,h^{\alpha\beta})=-1$ is fixed, leaving 2 free metric parameters and hence 2 constraints.
>
> In 3 dimensions the argument breaks: $\det(\sqrt{-h}\,h^{\alpha\beta})=-(-h)^{n/2-1}=-(-h)^{1/2}$ is *not* constant, so the Weyl factor is no longer invisible — the metric keeps a propagating scale, tracelessness fails, and there is no gauge in which the metric disappears. The trick is unique to the 2D worldsheet.
