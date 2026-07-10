---
title: Worldsheet consistency becomes spacetime dynamics
number: "25.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, effective-action]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Einstein's equations are not postulated in string theory — they are the condition that the 2d quantum field theory living on the string's worldsheet stays scale-invariant. Gravity is the price of keeping the worldsheet conformal.

## Spacetime fields as worldsheet couplings

A single string sweeps out a 2d surface (the worldsheet) as it moves through a curved spacetime. From the worldsheet's point of view, the spacetime it moves through is not a stage — it is a set of **coupling constants**. The metric $G_{\mu\nu}(X)$, the antisymmetric field $B_{\mu\nu}(X)$, and the dilaton $\Phi(X)$ enter the worldsheet action multiplying the fields $X^\mu(\sigma)$, exactly the way a coupling multiplies an interaction term. Change the spacetime geometry and you have changed the *couplings* of a 2d field theory.

Now the one non-negotiable fact about the string: its worldsheet theory must be **Weyl (conformal) invariant**. That symmetry is what let us gauge away the unphysical modes, what forced $D=26$, and what put a massless graviton in the spectrum. Lose it and the whole quantization collapses.

Here is the tension. Coupling constants in a quantum field theory **run**: regulating the UV divergences introduces a scale, and the couplings change with it. The rate of change is the **beta function**. But a theory whose couplings run is *not* scale-invariant — running is the enemy of conformal symmetry. So conformal invariance survives quantization only at a **fixed point of the renormalization-group flow**, where every beta function vanishes.

The couplings here are the spacetime fields. So "the worldsheet stays conformal" translates, word for word, into differential equations on $G_{\mu\nu}, B_{\mu\nu}, \Phi$ — and those equations turn out to be **Einstein's equations coupled to matter.** That is the whole thesis:

$$
\underbrace{\beta_{\mu\nu}(G)=\beta_{\mu\nu}(B)=\beta(\Phi)=0}_{\text{worldsheet consistency}}
\quad\Longleftrightarrow\quad
\underbrace{\text{spacetime field equations}}_{\text{gravity}} .
$$

## The load-bearing equation

At one loop the metric beta function is just the target-space Ricci tensor (derived in [[Beta functions and conformal invariance]]):
$$ \beta_{\mu\nu}(G) = \alpha'\,\mathcal R_{\mu\nu}. \tag{1}$$
Curvature is the obstruction to scale invariance: a curved target makes the couplings run. Demanding the flow stop, $\beta_{\mu\nu}(G)=0$, gives
$$ \mathcal R_{\mu\nu} = 0, \tag{2}$$
the **vacuum Einstein equation**. Read the logic backwards to feel its force: we quantized a string in flat space, were pushed to $D=26$, then asked *nothing more* than that the string be allowed to move through a curved space consistently — and the string answered *only if that space is Ricci-flat.* We never invoked general relativity; the string handed it back to us.

Turn on the other two massless fields and (2) becomes Einstein's equation **with sources**: the 3-form $H=dB$ and the dilaton gradients act as stress-energy. All three vanishing-beta conditions descend from extremizing a single $D=26$ spacetime action, the low-energy effective action of the bosonic string (derived in [[Einstein equations from conformal invariance]]):
$$ S = \frac{1}{2\kappa_0^2}\int d^{26}X\,\sqrt{-G}\;e^{-2\Phi}\Big(\mathcal R - \tfrac{1}{12}H_{\mu\nu\lambda}H^{\mu\nu\lambda} + 4\,\partial_\mu\Phi\,\partial^\mu\Phi\Big). \tag{3}$$
The first term is Einstein–Hilbert. Gravity has been *derived*, not assumed. (The prefactor $e^{-2\Phi}$, whose constant mode fixes $e^{-2\Phi_0}=1/g_s^2$, marks this as a tree-level, string-frame result.)

## Two dialects for the same statement

**RG dialect.** The beta function *is* the RG flow of the sigma-model couplings, and a conformal theory is an RG **fixed point**. So "spacetime satisfies its equations of motion" is identical to "the worldsheet sigma model sits at a fixed point." Even the flow itself is famous: $\mu\,\partial_\mu G_{\mu\nu}=\alpha'\mathcal R_{\mu\nu}$ is **Ricci flow**, geometry evolving under its own curvature — the same equation Perelman used on the Poincaré conjecture. Spacetime dynamics and geometric analysis are literally the same flow.

**Anomaly dialect.** The diagnostic for Weyl invariance is the *trace* of the worldsheet stress tensor. Its metric contribution is
$$ \langle T^\alpha{}_\alpha\rangle \supset -\tfrac{1}{2\alpha'}\,\beta_{\mu\nu}(G)\,g^{\alpha\beta}\,\partial_\alpha X^\mu\partial_\beta X^\nu . \tag{4}$$
A nonzero beta function is a nonzero trace is a **Weyl anomaly**. "No anomaly" $=$ "$\beta=0$" $=$ "spacetime field equations" — three names for one condition. The same logic even regenerates the critical dimension: the constant piece of the dilaton beta function is $\tfrac{D-26}{6}$, so $D=26$ is itself just another worldsheet-consistency requirement, the leading term of a Weyl anomaly.

## Why this anchors the whole module

The module has two faces and this is the hinge between them. **Compactification** ([[Toroidal compactification]], [[T-duality]], [[Twisted sectors on orbifolds]]) shows what *extra structure* the two-dimensional string detects in spacetime — winding, T-duality, orbifold twisted sectors — things invisible to a point particle. **Effective actions** show what *constraints* that same two-dimensional object imposes *back* on spacetime. Same worldsheet, both directions: it sees more than a point particle can, and it demands more than a point particle would. A single quantized string is so fussy about its own consistency that it dictates the laws of gravity for the entire universe it lives in.

## Open questions
- The one-loop $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$ is re-derived in the sibling note; the full $G/B/\Phi$ coefficients are quoted from the standard Friedan / Callan–Friedan–Martinec–Perry computation, not derived here.
- Everything above is leading order in both expansions — one loop in $\alpha'$ (large curvature radius) and tree level in $g_s$. Higher-curvature $\alpha'$ corrections and string-loop corrections are separate passes.

## Exercise

The dilaton beta function carries a constant term absent from $\beta(G)$ and $\beta(B)$:
$$\beta(\Phi) = \frac{D-26}{6} - \frac{\alpha'}{2}\nabla^2\Phi + \alpha'\,\partial_\mu\Phi\,\partial^\mu\Phi - \frac{\alpha'}{24}H_{\mu\nu\lambda}H^{\mu\nu\lambda}.$$
(The gradient and flux terms match $\beta(\Phi)$ in [[Beta functions and conformal invariance]]; that note works at $D=26$ and so drops the constant $\tfrac{D-26}{6}$, which we keep here to expose the critical dimension.)
(a) In flat spacetime with a **constant** dilaton and $H=0$, all three beta functions except this constant piece vanish automatically. What does $\beta(\Phi)=0$ then force, and why is that the *same* statement as "the worldsheet has no Weyl anomaly"? (b) Why does only the dilaton beta function carry this constant, and not $\beta_{\mu\nu}(G)$ or $\beta_{\mu\nu}(B)$? (Hint: compare which worldsheet structure each beta function multiplies in the stress-tensor trace, eq. (4) and its $B$/$\Phi$ partners; think about what the dilaton couples to on the worldsheet.)

> [!success]- Solution
> **(a)** With $G_{\mu\nu}=\eta_{\mu\nu}$, $\Phi=\text{const}$, $B=0$: every derivative term dies, so $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}=0$ and $\beta_{\mu\nu}(B)=0$ are satisfied trivially, while
> $$\beta(\Phi)=\frac{D-26}{6}.$$
> Setting it to zero forces $D=26$. This *is* the Weyl-anomaly statement: the dilaton multiplies the worldsheet Ricci scalar $R^{(2)}$ in the trace (the $-\tfrac12\beta(\Phi)R^{(2)}$ term of eq. (4)'s full version). A constant nonzero $\beta(\Phi)$ is precisely a nonzero $\langle T^\alpha{}_\alpha\rangle\propto R^{(2)}$ — the same conformal anomaly, with the same coefficient $\propto(D-26)$, that first fixed the critical dimension when we quantized the free string. So the critical dimension is not a separate result: it is the flat-space, constant-dilaton corner of "$\beta=0$."
>
> **(b)** In the stress-tensor trace, $\beta_{\mu\nu}(G)$ multiplies $g^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu$ and $\beta_{\mu\nu}(B)$ multiplies $\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu$ — both need two worldsheet derivatives of $X$, so they cannot produce a field-independent constant. The dilaton term multiplies the worldsheet curvature $R^{(2)}$ alone (its coupling $\tfrac{1}{4\pi}\int\sqrt g\,\Phi R^{(2)}$ has no $\partial X$ at all). That is the one channel where a pure number — here $\tfrac{D-26}{6}$, one-sixth of the central-charge deficit $c_{\text{matter}}+c_{\text{gh}}=D-26$ — can appear. Physically: the dilaton is the field that couples to worldsheet topology/curvature, so it is the field whose anomaly counts the theory's central charge.
