---
title: 00 — Overview
number: "23.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
Gauge-fixing the Polyakov path integral produces anticommuting $bc$ **ghosts** with central charge $c_{\text{gh}}=-26$; demanding the Weyl anomaly cancel ($c_{\text{matter}}+c_{\text{gh}}=0$) recovers the critical dimension $D=26$ — now in a manifestly Lorentz-invariant way.

## Gauge-fixing forces $D = 26$

Summing the string's path integral over *all* worldsheet metrics massively overcounts, because diffeomorphisms and Weyl rescalings relate metrics that describe the *same* physics — like keeping every duplicate photo of the same person instead of one per person. Faddeev–Popov gauge-fixing keeps one metric per equivalence class, and a change of variables always carries a Jacobian; here that Jacobian is a determinant we rewrite as a path integral over two new fields, $b$ and $c$. These are the **ghosts**: not particles, just the determinant written in field language. The redundancy we divided out then refuses to *stay* divided out. Its would-be anomaly is proportional to the total central charge, so the only way to kill it is $c_{\text{total}}=0$. The $D$ coordinates $X^\mu$ supply $c=D$; the ghosts supply exactly $-26$; balancing them forces $D=26$.

## Why bother — we already have $D=26$

In [[Light-cone gauge]] (Modules 14–16) we got $D=26$ by a brute-force route: fix a gauge that *breaks* manifest Lorentz invariance, quantize, then *demand Lorentz invariance back*. The dimension fell out as the price of consistency. It works, but it hides the thing you most want to keep visible — Lorentz symmetry.

This module takes the **covariant** road. Keep all $D$ coordinates $X^\mu$; fix the *worldsheet* gauge symmetries (diffeomorphisms + Weyl) instead of the spacetime ones. The price is different: gauge-fixing spits out the $bc$ ghosts. Their negative central charge subtracts the unphysical gauge directions *without* choosing a spacetime frame, so Lorentz invariance stays manifest the whole way. Same answer, cleaner logic, and along the road we pick up the machinery — the state–operator map, vertex operators — that runs the interacting theory in Module 24.

## The logical spine

Four links, each derived in a sublesson:

1. **Gauge-fixing → ghosts.** The Polyakov integral sums over metrics $g_{\alpha\beta}$, but diffeos + Weyl are redundancies. Faddeev–Popov turns "divide by the gauge volume" into a determinant, and that determinant becomes a path integral over anticommuting $b_{\alpha\beta}$ (symmetric traceless, from the metric-variation multiplier) and $c^\alpha$ (a vector, from the diffeomorphism parameter). → 23.1 [[Faddeev-Popov ghosts]]

2. **Ghosts → $c_{\text{gh}}=-26$.** In conformal gauge the ghost action becomes a free holomorphic CFT. The index structure $b_{zz},c^z$ forces weights $(h_b,h_c)=(2,-1)$, and the resulting $TT$ OPE has quartic pole $-13/(z-w)^4$, i.e.
$$c_{\text{gh}}=-26.$$
It is *negative* because anticommuting integer-spin fields violate unitarity — exactly what a non-physical bookkeeping sector should do. → 23.2 [[The bc ghost CFT]]

3. **Anomaly cancellation → $D=26$.** The Weyl (trace) anomaly of any 2d CFT is
$$\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}\,R,$$
with $c$ the *total* central charge. Weyl symmetry is a **gauge** symmetry, and a gauge anomaly is fatal — it means the redundancy you divided out has come back to haunt you. So $c_{\text{total}}=0$ is not optional. Each scalar $X^\mu$ gives $c=1$, so
$$c_{\text{total}}=\underbrace{D}_{\text{matter}}+\underbrace{(-26)}_{\text{ghosts}}=0\quad\Longrightarrow\quad D=26. \tag{1}$$
→ 23.3 [[Total central charge and D = 26]]

4. **The reusable machinery.** In a CFT every local operator *is* a state (radial quantization maps the infinite past of the cylinder to the point $z=0$). Physical string states become **vertex operators** — integrated local operators whose Weyl-invariance condition, weight $(1,1)$, is exactly the mass-shell condition. → 23.4 [[State-operator correspondence]] · 23.5 [[Vertex operators and physical-state conditions]]

## Critical *central charge*, not critical *dimension*

Equation (1) never actually required $D$ free scalars. The real consistency condition is just $c_{\text{matter}}=26$. *Any* CFT with $c=26$ is a valid string background:

- $26$ free scalars → flat 26d Minkowski space (the case where $26$ *looks* like a dimension).
- $D<26$ flat scalars $\times$ an "internal" CFT with $c=26-D$ → strings on $\mathbb{R}^{1,D-1}\times(\text{internal})$. For $D=4$ observable spacetime dimensions you need an internal $c=22$ CFT. That internal sector — geometric or abstract — is what "extra hidden dimensions" really means.

So "critical dimension" is a misnomer for a **critical central charge**. Only when the $c=26$ CFT happens to be free scalars does $26$ get to masquerade as a spacetime dimension. This reframing is the single most important idea in the module: the string cares about a *number* ($c$), and geometry is one of many ways to supply it.

## How this connects to the light-cone road

Both roads compute the *same* anomaly in different gauges. The light cone fixes the Weyl anomaly away, so the inconsistency resurfaces as a **Lorentz anomaly** $[M^{-I},M^{-J}]\neq 0$, cured only at $D=26$ with mass shift $a_{\text{lc}}=-\tfrac{1}{24}(D-2)=-1$. The covariant road keeps Lorentz manifest, so the same disease surfaces as the **Weyl anomaly**, cured by $c_{\text{matter}}+c_{\text{gh}}=D-26=0$. One disease, two symptoms, one cure. The term-by-term match — $24$ transverse oscillators of the light cone $\leftrightarrow$ $26$ covariant coordinates minus the two gauge directions the ghosts remove — is worked out in 23.6 [[Two roads to D = 26]].

## Open questions

- **BRST is the honest way to carve physical states out of the ghost-enlarged Hilbert space.** This module uses the "poor man's" spectrum instead: ignore ghost excitations, keep the matter primary of weight $1$ or $(1,1)$. That suffices on-shell at tree level. Off-shell and at loops, ghost zero modes and BRST cohomology become load-bearing — deferred to Module 24, where amplitudes and worldsheet moduli appear.
- The timelike $X^0$ contributes $c=+1$ but a negative-norm Fock space; the subtlety lives in the inner product, not the central charge. What ultimately removes those negative-norm states is again BRST.

## Exercise

State, from memory, *where each piece of the equation $c_{\text{matter}}+c_{\text{gh}}=0$ comes from*, and use it to answer: what is the critical dimension of a hypothetical bosonic string whose ghost system had weights $(h_b,h_c)=(3,-2)$ instead of $(2,-1)$?

> [!success]- Solution
> **The chain.** Weyl symmetry is a *gauge* symmetry of the Polyakov string, so its anomaly must vanish. That anomaly is $\langle T^\alpha{}_\alpha\rangle=-\tfrac{c}{12}R$, fatal unless the *total* central charge is zero. The matter is $D$ free scalars at $c=1$ each, giving $c_{\text{matter}}=D$. The FP ghosts — which replaced a symmetric-traceless tensor and a vector, hence carry weights $(2,-1)$ — form a $bc$ CFT whose $TT$ OPE has quartic pole $-13/(z-w)^4$, so $c_{\text{gh}}=2\times(-13)=-26$. Cancellation: $D-26=0\Rightarrow D=26$.
>
> **The extension.** A first-order $bc$ system of weight $\lambda$ (here $b$ has weight $\lambda$, $c$ has weight $1-\lambda$) has central charge
> $$c_{bc}=1-3(2\lambda-1)^2.$$
> Check: $\lambda=2$ gives $1-3(3)^2=1-27=-26\;\checkmark$. For the hypothetical $(h_b,h_c)=(3,-2)$, i.e. $\lambda=3$:
> $$c_{bc}=1-3(2\cdot3-1)^2=1-3\cdot25=-74.$$
> Anomaly cancellation would then require $c_{\text{matter}}=74$, so a free-scalar background would need $\boxed{D=74}$. This is exactly the module's central lesson: the critical dimension is dictated entirely by the *ghost* central charge, which is dictated by the *weights*, which are dictated by the tensor structure of the gauge symmetry being fixed. Change the gauge structure, change the number.
