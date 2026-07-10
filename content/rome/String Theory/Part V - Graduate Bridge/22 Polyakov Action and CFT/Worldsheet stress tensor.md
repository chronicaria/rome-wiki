---
title: Worldsheet stress tensor
number: "22.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The worldsheet stress tensor $T_{\alpha\beta}$ is what the Polyakov action pushes back with when you deform the worldsheet metric. Because that metric is auxiliary, its own equation of motion is simply $T_{\alpha\beta}=0$ — and *that equation is the Virasoro constraints*. It is automatically traceless (the algebraic fingerprint of [[Weyl invariance]]), so in complex coordinates it splits into a holomorphic $T(z)$ and an antiholomorphic $\bar T(\bar z)$.

## Why the response must vanish

A stress tensor records the **flow of energy and momentum**. $T_{\tau\tau}$ is energy density, $T_{\tau\sigma}$ is momentum flowing along the string, and "vary the metric" asks: if we locally stretch or shear the worldsheet, how much does the action care? The Polyakov action is built to be reparameterization invariant — it does not depend on how we draw the coordinate grid — so a pure change of grid leaves it unchanged and the response to it vanishes. The twist unique to the Polyakov string is that the metric is not a fixed backdrop but a **field we vary**, so "the action doesn't care" is not a theorem checked afterwards; it is the *equation of motion of that field*. The allowed string configurations are exactly the ones with zero worldsheet stress.

The one statement to carry forward is that **$T_{\alpha\beta}=0$ is not an extra rule imposed on the string; it is what the auxiliary metric demands.** Everything below makes that precise and reads off the normalization.

## Deriving $T_{\alpha\beta}$ by varying the metric

Start from the [[Polyakov action]] (mostly-plus signature, $\eta_{\mu\nu}=\mathrm{diag}(-1,+,\dots,+)$ in spacetime, $h_{\alpha\beta}$ the worldsheet metric):
$$S_P=-\frac{1}{4\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-h}\;h^{\alpha\beta}\,\partial_\alpha X\cdot\partial_\beta X. \tag{1}$$
We vary $h^{\alpha\beta}$ and demand $\delta S=0$. Two small identities do all the work.

**(i) Varying the determinant.** For any matrix, $\delta\det A=(\det A)\,\mathrm{Tr}(A^{-1}\delta A)$ (Jacobi's formula: the first-order change of a determinant is the trace of the inverse times the change). Applied to $h\equiv\det h_{\alpha\beta}$,
$$\delta h = h\,h^{\alpha\beta}\,\delta h_{\alpha\beta}. \tag{2}$$

**(ii) Trading $\delta h_{\alpha\beta}$ for $\delta h^{\alpha\beta}$.** Since $h^{\alpha\beta}h_{\beta\gamma}=\delta^\alpha_\gamma$ is fixed, varying it gives $h^{\alpha\beta}\delta h_{\beta\gamma}=-h_{\beta\gamma}\,\delta h^{\alpha\beta}$. Feed that into (2):
$$\delta h=-h\,h_{\alpha\beta}\,\delta h^{\alpha\beta} \quad\Longrightarrow\quad \delta\sqrt{-h}=-\frac{1}{2}\frac{\delta h}{\sqrt{-h}}=-\tfrac12\sqrt{-h}\,h_{\alpha\beta}\,\delta h^{\alpha\beta}. \tag{3}$$
This $-\tfrac12\sqrt{-h}\,h_{\alpha\beta}$ is the universal "measure piece" you get whenever you vary $\sqrt{-h}$; it is the source of the $-\tfrac12 h_{\alpha\beta}(\dots)$ trace-subtraction in every stress tensor.

**Assemble.** Varying (1) hits both the explicit $h^{\alpha\beta}$ (giving $\partial_\alpha X\cdot\partial_\beta X$) and the $\sqrt{-h}$ (giving (3)):
$$\delta S=-\frac{1}{4\pi\alpha'}\int d\tau\,d\sigma\,\sqrt{-h}\;\delta h^{\alpha\beta}\left(\partial_\alpha X\cdot\partial_\beta X-\tfrac12 h_{\alpha\beta}\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X\right). \tag{4}$$
Demanding $\delta S=0$ for **arbitrary** $\delta h^{\alpha\beta}$ kills the parenthesis pointwise. That parenthesis *is* the stress tensor, and its vanishing is the metric's equation of motion:
$$\boxed{\;T_{\alpha\beta}\;\propto\;\partial_\alpha X\cdot\partial_\beta X-\tfrac12 h_{\alpha\beta}\,h^{\gamma\delta}\,\partial_\gamma X\cdot\partial_\delta X=0\;} \tag{5}$$
The first term is the **induced metric** $\gamma_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X$ (cf. [[Independent worldsheet metric]]) — the geometry the string actually carries; the second term subtracts off its trace part. The EOM says the induced metric must equal its own trace part, i.e. the worldsheet is "on shell" as a geometry.

## Fixing the normalization

Equation (5) leaves an overall constant free. The clean way to pin it is the general-relativity definition of a stress tensor: it is the response of the action to the *inverse* metric,
$$\boxed{\;T_{\alpha\beta}=-\frac{4\pi}{\sqrt{g}}\,\frac{\partial S}{\partial g^{\alpha\beta}}\;} \tag{6}$$
where $g_{\alpha\beta}$ is now the **Euclidean** worldsheet metric ($\sqrt{-h}\to\sqrt{g}$) and the $4\pi$ is the conventional string-theory normalization. Reading (6) off the Euclidean free-boson action $S=\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt g\,g^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X$ (no minus sign in Euclidean signature): the $\partial S/\partial g^{\alpha\beta}$ produces exactly the parenthesis of (5) times $\frac{\sqrt g}{4\pi\alpha'}$, and the $-4\pi/\sqrt g$ prefactor cancels the $\sqrt g$ and the $4\pi$, leaving
$$\boxed{\;T_{\alpha\beta}=-\frac{1}{\alpha'}\left(\partial_\alpha X\,\partial_\beta X-\tfrac12\,\delta_{\alpha\beta}\,(\partial X)^2\right)\;} \tag{7}$$
So the proportionality constant in (5) is $-1/\alpha'$. *(The Lorentzian variation and this Euclidean definition are the same computation up to a Wick rotation — see [[Complex coordinates on the worldsheet]]; only the sign of $\sqrt{\pm h}$ and the flat metric $\eta\to\delta$ change. The local equation (7) is what every later OPE uses.)*

## Tracelessness — the conformal fingerprint

Trace (5) with $h^{\alpha\beta}$, using $h^{\alpha\beta}h_{\alpha\beta}=2$ in two dimensions:
$$h^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X-\tfrac12\underbrace{(h^{\alpha\beta}h_{\alpha\beta})}_{=2}\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X = h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X-h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X=0.$$
The trace vanishes **identically** — before using any equation of motion, purely because the $\tfrac12$ and the factor $2$ from the dimension conspire. This is the algebraic shadow of [[Weyl invariance]]: rescaling $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$ leaves the action alone, and the derivative of the action along that rescaling *is* $T^\alpha{}_\alpha$, so $T^\alpha{}_\alpha=0$. A traceless stress tensor is the defining local feature of a conformal theory; that is why the gauge-fixed worldsheet is a CFT.

## Complex coordinates: $T(z)$ and $\bar T(\bar z)$

In the coordinates of [[Complex coordinates on the worldsheet]] ($z=\sigma^1+i\sigma^2$), tracelessness $T^\alpha{}_\alpha=0$ reads $T_{z\bar z}=0$, and conservation $\partial^\alpha T_{\alpha\beta}=0$ becomes $\bar\partial T_{zz}=0$, $\partial T_{\bar z\bar z}=0$. A function killed by $\bar\partial$ is holomorphic, so
$$T(z)\equiv T_{zz}=-\frac{1}{\alpha'}\,\partial X\,\partial X,\qquad \bar T(\bar z)\equiv T_{\bar z\bar z}=-\frac{1}{\alpha'}\,\bar\partial X\,\bar\partial X. \tag{8}$$
The stress tensor of one free boson is just (minus, over $\alpha'$) the **square of the holomorphic current $\partial X$** — the simplest possible composite operator, and the seed of every computation in [[Free boson OPEs]]. Conservation + tracelessness having forced $T$ to be holomorphic is precisely why its modes can be extracted by a contour integral, which is what makes the [[Virasoro algebra and central charge|Virasoro algebra]] computable.

## Conformal gauge: the Virasoro constraints reappear

Fix $\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}$ (conformal gauge, [[Independent worldsheet metric]]) and write $\xi^1=\tau,\ \xi^2=\sigma$, $\dot X=\partial_\tau X$, $X'=\partial_\sigma X$. The Weyl factor drops out of (5), and component by component it gives
$$T_{\tau\tau}=T_{\sigma\sigma}\propto \dot X^2+X'^2=0,\qquad T_{\tau\sigma}\propto\dot X\cdot X'=0, \tag{9}$$
equivalently $(\dot X\pm X')^2=0$ — **the Virasoro constraints.** (The third component is redundant: symmetric $2\times2$ has three entries but tracelessness removes one, matching the two constraints.) So "$T_{\alpha\beta}=0$" and "Virasoro constraints" are literally the same statement — the conditions we imposed *by hand* in [[Light-cone constraints|light-cone gauge]] are now the free equation of motion of the metric. Expanding $T(z)$ in Laurent modes gives the covariant generators
$$L_n=\tfrac12\sum_{p\in\mathbb Z}\alpha_{n-p}\cdot\alpha_p, \tag{10}$$
whose algebra is worked out in [[Virasoro algebra and central charge]]. Here the dot runs over **all** $D$ spacetime indices (including $X^0$), which is why covariant quantization must work to remove negative-norm states.

## Quantum subtlety: normal ordering

Classically $T=-\tfrac{1}{\alpha'}\partial X\,\partial X$ is a product of fields at the *same point*, which is singular quantum-mechanically — $\langle\partial X(z)\partial X(w)\rangle\sim(z-w)^{-2}$ blows up as $z\to w$. The fix is to **normal-order**, subtracting the divergent self-contraction:
$$T=-\frac{1}{\alpha'}:\!\partial X\,\partial X\!:\;\equiv-\frac{1}{\alpha'}\lim_{z\to w}\Big(\partial X(z)\partial X(w)-\langle\partial X(z)\partial X(w)\rangle\Big), \tag{11}$$
so that $\langle T\rangle=0$ by construction. This finite composite operator is what lets the $T(z)T(w)$ OPE develop a **central term**: the $c$ in the [[Virasoro algebra and central charge|Virasoro algebra]] is a genuine quantum short-distance effect, of the same origin as the normal-ordering constant $a=-1$ in the open-string mass shell at $D=26$.

## Open questions

- **Wick-rotation bookkeeping.** The Lorentzian variation (giving (5)) and the Euclidean definition (giving (7)) agree after the standard Wick rotation; a full sign-by-sign proof is worthwhile but unnecessary for the local equations used here.
- **Quantum trace anomaly.** This note proves *classical* tracelessness. On a curved background the trace no longer vanishes: $\langle T^\alpha{}_\alpha\rangle=-\tfrac{c}{12}R$, derived from the same central charge in [[Weyl invariance]] and [[Virasoro algebra and central charge]].

## Exercise

Repeat the metric variation of the Polyakov action (1) on a **hypothetical $d$-dimensional worldsheet** (same action, $\alpha,\beta=1,\dots,d$), and show the stress tensor comes out as
$$T_{\alpha\beta}\propto\partial_\alpha X\cdot\partial_\beta X-\tfrac12\,h_{\alpha\beta}\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X,$$
with the **same** $\tfrac12$ for every $d$. Then take its trace and find the one dimension in which $T^\alpha{}_\alpha=0$. Why is that the worldsheet dimension of string theory?

> [!success]- Solution
> **Where the $\tfrac12$ comes from.** In the assembly step (4), the subtraction term is the measure piece (3): $\delta\sqrt{-h}=-\tfrac12\sqrt{-h}\,h_{\alpha\beta}\,\delta h^{\alpha\beta}$. That $\tfrac12$ is the derivative of a *square root*, $\tfrac{d}{dh}\sqrt{-h}$ — it has nothing to do with the worldsheet dimension. So on a $d$-dimensional worldsheet the variation gives exactly the boxed form above, $\tfrac12$ and all.
>
> **The trace.** Write $P\equiv h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X$ and use $h^{\alpha\beta}h_{\alpha\beta}=d$:
> $$T^\alpha{}_\alpha = h^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X-\tfrac12\,(h^{\alpha\beta}h_{\alpha\beta})\,P = P-\tfrac{d}{2}\,P=\Big(1-\tfrac{d}{2}\Big)\,P.$$
> This vanishes for all configurations ($P\neq0$ generically) **iff $d=2$.**
>
> So the Polyakov stress tensor is traceless *only* in two dimensions, because a fixed coefficient $\tfrac12$ meets the dimension-dependent requirement $\tfrac{d}{2}=1$ only at $d=2$. This is the same fact seen from the trace side that [[Weyl invariance]] sees from the action side: $\sqrt{-h}\,h^{\alpha\beta}$ is Weyl-invariant only in $d=2$, so only a 2D worldsheet is conformal. The stringy worldsheet is 2D precisely so that this tracelessness — the CFT structure the whole module rests on — actually holds.
