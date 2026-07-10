---
title: Vertex operators and physical-state conditions
number: "23.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
A vertex operator is the integrated local operator $\int d^2z\,\mathcal{O}$ that stands in for an incoming or outgoing string; Weyl invariance forces it to have conformal weight $(1,1)$, and that condition is the mass-shell condition — it fixes the particle's mass.

## A vertex operator is an external leg

In a scattering process, strings come in from infinity, interact, and leave. In field theory each external particle is an **external leg** of a Feynman diagram, labeled by a momentum $p$ and a polarization. A vertex operator is the string version of an external leg: a local operator inserted on the worldsheet to say that a string of momentum $p$ was created (or absorbed) at that point.

The whole note turns on one demand: a physical amplitude must not depend on how we drew the coordinate grid on the worldsheet. Rescaling that grid is a **Weyl transformation**, and a physical amplitude cannot care about it. An inserted operator scales under a rescaling by a power set by its **conformal weight** $(h,\bar h)$; the integration measure $d^2z$ scales the opposite way. The two cancel — the insertion is Weyl-invariant — only if the operator has exactly weight $(1,1)$. Computing when a momentum-$p$ operator has weight $(1,1)$ pins down $p^2$, hence the mass. Mass-shell falls out of pure worldsheet gauge invariance.

## Why an integrated operator, and why weight $(1,1)$

By the [[State-operator correspondence]], every physical string state $|\Psi\rangle$ is a local primary operator $\mathcal{O}(z,\bar z)$ on the worldsheet. But a *bare* operator sitting at a fixed point $z_0$ is not gauge-invariant, because the worldsheet has a dynamical metric with two gauge symmetries we must respect:

1. **Reparameterization (diffeomorphism) invariance** — no point on the worldsheet is special, so integrate over all of them:
$$V\sim\int d^2z\;\mathcal{O}(z,\bar z).$$
2. **Weyl invariance** — under a rescaling $z\to\lambda z$ the measure $d^2z$ carries weight $(-1,-1)$, so for $V$ to be invariant the operator must carry the compensating weight
$$\boxed{(h,\bar h)=(+1,+1)}.\tag{1}$$

An integrated, weight-$(1,1)$, gauge-invariant operator is a **vertex operator**. Because Weyl invariance is what forces (1), and (1) will fix the mass, we say the vertex operator is automatically **on-shell** — exactly like an external leg, which also carries an on-shell momentum.

This is the covariant way to fix the normal-ordering constant. Old-covariant quantization imposes $(L_0-1)|\Psi\rangle=0$ on physical states; via the state-operator map the $L_0$ eigenvalue equals $h$, so $(L_0-1)|\Psi\rangle=0$ is the same statement as $h=1$. The unit intercept — written as a shift in $M^2$ (open string $\alpha'M^2=N^\perp-1$, closed string $\tfrac{\alpha'}{4}M^2=N^\perp-1$ per chiral sector) — reappears here as the required weight $+1$: the same number, moved to the other side of the equation.

## The core computation: weight of $:e^{ip\cdot X}:$

A string of momentum $p^\mu$ is created by the exponential $:\!e^{ip\cdot X}\!:$ — in operator language it maps the zero-momentum vacuum to the momentum eigenstate $|0;p\rangle$. Everything reduces to computing the weight of this exponential.

The one input we need is the free-scalar propagator (mostly-plus target signature):
$$X^\mu(z,\bar z)\,X^\nu(w,\bar w)\sim -\frac{\alpha'}{2}\,\eta^{\mu\nu}\ln|z-w|^2,\tag{2}$$
and its holomorphic derivative $\partial X^\mu(z)\,X^\nu(w,\bar w)\sim -\tfrac{\alpha'}{2}\,\eta^{\mu\nu}/(z-w)$. Contracting $\partial X$ against every $X$ in the exponential (each contraction pulls down a factor $ip$) gives the single most useful OPE:
$$\partial X^\mu(z)\,:\!e^{ip\cdot X(w,\bar w)}\!:\;\sim\;-\frac{i\alpha'}{2}\,\frac{p^\mu}{z-w}\,:\!e^{ip\cdot X}\!:.\tag{3}$$

**Closed string (insertion in the bulk).** The weight is read off the double pole in $T(z):\!e^{ip\cdot X}\!:$, with the stress tensor $T(z)=-\tfrac{1}{\alpha'}:\!\partial X\cdot\partial X\!:$. Contract *both* $\partial X$'s in $T$ into the exponential — a double contraction, each giving a factor from (3):
$$-\frac{1}{\alpha'}\left(-\frac{i\alpha'}{2}\,p^\mu\right)\!\left(-\frac{i\alpha'}{2}\,p_\mu\right)=-\frac{1}{\alpha'}\cdot\left(-\frac{\alpha'^2}{4}\,p^2\right)=\frac{\alpha' p^2}{4}.$$
The coefficient of the double pole $1/(z-w)^2$ is the weight, so
$$\boxed{\,h=\bar h=\frac{\alpha' p^2}{4}\,}.\tag{4}$$
Notice the two minus signs — one from $T$'s normalization, one from $i^2=-1$ — cancel, so a *spacelike* momentum ($p^2>0$) gives a *positive* weight; the antiholomorphic copy is identical, giving $\bar h$.

Now impose Weyl invariance (1), $h=\bar h=1$:
$$\frac{\alpha'p^2}{4}=1\;\Longrightarrow\;p^2=\frac{4}{\alpha'}\;\Longrightarrow\;M^2\equiv-p^2=-\frac{4}{\alpha'}.$$
The mass came out **negative**: this is the closed-string **tachyon**, the ground state, whose vertex operator is $V_{\text{tach}}\sim\int d^2z\,:\!e^{ip\cdot X}\!:$. In mostly-plus, $M^2=-p^2$, so a spacelike $p$ is exactly a tachyon — the ground state sits *below* the massless shell, and the operator formalism reproduces the same $M^2=-4/\alpha'$ found by light-cone quantization.

**Open string (insertion on the boundary).** On a worldsheet *with a boundary*, a scalar field's propagator acquires an **image charge** across the boundary — the field at $w$ also feels its mirror image at $\bar w$. So the derivative OPE (3) doubles up: the boundary version of $\partial X:\!e^{ipX}\!:$ has poles at *both* $w$ and $\bar w$,
$$-\frac{i\alpha'p}{2}\left(\frac{1}{z-w}+\frac{1}{z-\bar w}\right)\!:\!e^{ipX}\!:.$$
Feed this into $T$ and then set the operator *on* the boundary, $w=\bar w$, so the two poles merge into one of twice the residue. The coefficient of $1/(z-w)^2$ picks up a factor $(1+1)^2=4$ relative to before:
$$T(z)\,:\!e^{ipX(w,\bar w)}\!:\;=\;\frac{\alpha'p^2\,:\!e^{ipX}\!:}{(z-w)^2}+\dots\;\Longrightarrow\;\boxed{\,h=\alpha'p^2\,}.\tag{5}$$
A boundary operator has a *single* weight $h$, not a pair — there is no independent antiholomorphic sector on the boundary. Weyl invariance needs $h=+1$ (the line measure $ds$ has weight $-1$):
$$\alpha'p^2=1\;\Longrightarrow\;M^2=-p^2=-\frac{1}{\alpha'},$$
the open-string tachyon mass.

> [!note]- Factor sanity check
> Closed: $h=\bar h=\alpha'p^2/4$, total scaling dimension $h+\bar h=\alpha'p^2/2$, mass-shell $h+\bar h=2$ at $M^2=-4/\alpha'$.
> Open: $h=\alpha'p^2$, mass-shell $h=1$ at $M^2=-1/\alpha'$.
> The closed tachyon mass is $4\times$ the open one in $M^2$ — because the boundary image doubled every contraction, so the same $p^2$ counts twice as much. Signs and $\alpha'$ powers are consistent.

## The first excited states: mass-shell *and* transversality

Dress the exponential with one derivative from each sector:
$$V_{\text{exc}}\sim\int d^2z\;:\!e^{ip\cdot X}\,\partial X^\mu\,\bar\partial X^\nu\!:\,\zeta_{\mu\nu},$$
where $\partial X^\mu$ supplies an $\alpha^\mu_{-1}$ excitation, $\bar\partial X^\nu$ a $\bar\alpha^\nu_{-1}$, and $\zeta_{\mu\nu}$ is the polarization. Two conditions now drop out, because *both* physical constraints on a massless tensor particle appear as OPE conditions:

- **Mass-shell, from weight $(1,1)$.** Each of $\partial X,\bar\partial X$ adds weight $(1,0)$ and $(0,1)$, so the total weight is $h=\bar h=1+\alpha'p^2/4$. Setting this to $1$ forces
$$p^2=0,$$
so the first excited states are **massless** — the graviton, the $B$-field, and the dilaton, matching the light-cone spectrum.
- **Transversality, from primarity.** Being weight-$(1,1)$ is not enough; the operator must also be *primary* (no worse-than-double pole with $T$). Sitting $\partial X$ and $e^{ip\cdot X}$ inside the same normal-ordering produces an extra double-contraction term with a $1/(z-w)^3$ pole, proportional to $p^\mu\zeta_{\mu\nu}$; the $\bar T$ contraction gives $p^\nu\zeta_{\mu\nu}$. Killing both requires
$$p^\mu\zeta_{\mu\nu}=p^\nu\zeta_{\mu\nu}=0.$$
This is exactly the **transverse polarization condition** for a massless particle: the covariant way of throwing out the unphysical longitudinal polarizations. (In light-cone gauge you would have solved this by hand; here it is automatic.)

So the two properties of a vertex operator — *weight $(1,1)$* and *primary* — are precisely *mass-shell* and *transversality*. That is the sense in which the operator is "on-shell": it can only exist for physical, correctly polarized momenta.

## The general lesson: spectrum = internal CFT, shifted by one

Nothing above used flatness of *all* directions. Put the string on $\mathbb{R}^{1,3}\times(\text{internal }c=22\text{ CFT})$ and dress an internal primary of weight $(h,\bar h)$ with $e^{ip\cdot X}$ over the four flat directions. Weight-$(1,1)$ demands
$$\frac{\alpha'p^2}{4}+h=1,\qquad \frac{\alpha'p^2}{4}+\bar h=1.$$
The two equations must agree, which forces $h=\bar h$ — this is the closed-string **level-matching** condition wearing CFT clothing. Solving,
$$M^2=\frac{4}{\alpha'}\,(h-1).$$
Read off the whole spectrum by the weight of the internal operator:

| internal operator | weight | resulting particle |
|---|---|---|
| relevant | $h<1$ | tachyon ($M^2<0$) |
| **marginal** | $h=1$ | massless |
| irrelevant | $h>1$ | massive |

**The spectrum of the string is the spectrum of primary operators of its internal CFT, uniformly shifted down by one.** "Which particles exist" becomes "which operators the CFT has" — the cleanest possible restatement of the string spectrum.

## Open questions

- This is the "integrated" ($\int d^2z\,\mathcal{O}$) vertex operator. The **unintegrated** form $c\,\bar c\,\mathcal{O}$ carries explicit ghost factors and fixes three insertion points; it is what BRST and the moduli-space measure actually want. Deferred to the Module 24 amplitudes.
- The polarization split $\zeta_{\mu\nu}=$ (symmetric-traceless $\oplus$ antisymmetric $\oplus$ trace) $=$ (graviton $\oplus$ $B$-field $\oplus$ dilaton) is in [[Graviton from closed strings]]; here we only needed the shared mass-shell and transversality.

## Exercise

The exponential $:\!e^{ip\cdot X}\!:$ has closed-string weight $h=\bar h=\alpha'p^2/4$. **Vertex operators for spacetime fermions in the superstring** instead involve $:\!e^{ip\cdot X}\,\partial X^\mu\,\bar\partial X^\nu\,\partial X^\rho\!:$-type dressings, but stay with the *bosonic* string and take the **second** closed excited level, dressed with two holomorphic derivatives on one side:
$$V\sim\int d^2z\;:\!e^{ip\cdot X}\,\partial X^\mu\partial X^\nu\,\bar\partial X^\rho\bar\partial X^\sigma\!:.$$
Using only the additivity of weights, find $M^2$ from the Weyl condition. Is it a tachyon, massless, or massive? Then say in one sentence why level-matching is automatically satisfied here but would *fail* for a dressing with two holomorphic and one antiholomorphic derivative.

> [!success]- Solution
> Weights are additive for a normal-ordered product of mutually-local factors. Each $\partial X$ carries weight $(1,0)$ and each $\bar\partial X$ carries $(0,1)$; the exponential carries $(\alpha'p^2/4,\alpha'p^2/4)$. So the two holomorphic derivatives add $2$ to $h$ and the two antiholomorphic add $2$ to $\bar h$:
> $$h=2+\frac{\alpha'p^2}{4},\qquad \bar h=2+\frac{\alpha'p^2}{4}.$$
> Weyl invariance sets $h=\bar h=1$:
> $$2+\frac{\alpha'p^2}{4}=1\;\Longrightarrow\;\frac{\alpha'p^2}{4}=-1\;\Longrightarrow\;p^2=-\frac{4}{\alpha'}\;\Longrightarrow\;M^2=-p^2=\frac{4}{\alpha'}>0.$$
> A positive $M^2$ — this is a **massive** state at $N^\perp=2$, so $\alpha'M^2=4$, one level above the massless graviton ($N^\perp=1$). The general formula $M^2=\tfrac{4}{\alpha'}(N^\perp-1)$ with $N^\perp=2$ agrees.
>
> Level-matching works here because the dressing is *balanced*: two holomorphic and two antiholomorphic derivatives give equal shifts to $h$ and $\bar h$, so the two Weyl equations $h=1$ and $\bar h=1$ are the same equation and are consistent. With two holomorphic but only one antiholomorphic derivative we would need $2+\alpha'p^2/4=1$ *and* $1+\alpha'p^2/4=1$ simultaneously — two incompatible values of $p^2$. No momentum solves both, so that unbalanced operator is never Weyl-invariant. This is exactly closed-string level-matching ($N^\perp=\bar N^\perp$) reappearing as "equal holomorphic and antiholomorphic weight."
