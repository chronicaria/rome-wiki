---
title: 22 — Polyakov Action and CFT (Overview)
number: "22.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Polyakov action swaps the ugly square root of Nambu–Goto for an auxiliary worldsheet metric, and that one swap turns the worldsheet into a 2D **conformal field theory** whose symmetry algebra is the **Virasoro algebra** — the language every modern string text speaks.

## From area to a fake ruler

Think of the string's worldsheet as a rubber sheet swept out in spacetime. Nambu–Goto measures its *area*, and area comes with a square root ($\sqrt{-\det \gamma}$) that is miserable to quantize. Polyakov's move is the same trick that tames the relativistic point particle with an einbein: **stop measuring the sheet with its own induced geometry, and hand it a separate "ruler" metric $h_{\alpha\beta}$ that you vary independently.** The ruler is fake — it has no dynamics of its own — but introducing it makes the action polynomial in the fields. Then three facts cascade:

- **The ruler is pure gauge.** A symmetric $2\times2$ metric has 3 components; the theory has exactly 3 local symmetries (2 coordinate reparametrizations + 1 Weyl rescaling) to eat them. So $h_{\alpha\beta}$ carries *zero* physical information and can be flattened to $\eta_{\alpha\beta}$ — **conformal gauge**.
- **The constraints stop being an axiom.** In light-cone gauge we *imposed* $(\dot X\pm X')^2=0$ by hand. Here they are simply the equation of motion of the ruler: vary $h_{\alpha\beta}$ and you get $T_{\alpha\beta}=0$, the worldsheet stress tensor set to zero. The constraints fall out; we never assumed them.
- **What survives is a CFT.** The flattened theory is $D$ free scalar fields $X^\mu$ in two dimensions — the simplest CFT there is. Its stress tensor $T(z)$, expanded in modes $L_n$, generates the Virasoro algebra, and the entire spectrum becomes representation theory of that one algebra.

The worldsheet metric is thus a disposable scaffold. Setting it up costs nothing (it is pure gauge), knocking it down for free gives the constraints, and what remains standing is a conformal field theory.

## Why this rebuild is worth it

We already quantized the string once, in light-cone gauge: pick a clever frame, solve the constraints by hand, read off the spectrum. That works but hides Lorentz invariance and is welded to one gauge choice. The Polyakov/CFT route buys three things the light-cone route obscures:

- **Manifest covariance.** No preferred frame; all $D$ coordinates $X^\mu$ are kept.
- **The constraints for free.** $(\dot X\pm X')^2=0$ are the metric EOM, not a postulate — see 22.1 [[Independent worldsheet metric]] and 22.2 [[Virasoro constraints]].
- **One algebra runs everything.** Primaries, descendants, the mass formula — all become Virasoro representation theory. The famous **critical dimension $D=26$** turns into a single clean statement: the **total central charge must vanish**. The bosons contribute $c=D$; the gauge-fixing ghosts contribute $c=-26$; consistency forces $D=26$. The old open-string intercept ($L_0-1$) is the *same* zero-point/Casimir bookkeeping wearing CFT clothes, not a separate magic number.

## The hinge: the stress tensor

Two vocabularies are braided through this module, and getting lost means confusing them:

- **Geometry language** (continuation of Parts I–II): actions, metrics, gauge symmetries, constraints.
- **CFT language** (the new graduate vocabulary): local operators, OPEs, conformal weights, primaries, descendants, Virasoro modes.

The **stress tensor $T_{\alpha\beta}$ is the single hinge** connecting them. Read it three ways and the whole module unfolds:

1. Vary the Polyakov action by the metric → $T_{\alpha\beta}=0$ (the **constraints**).
2. Write its holomorphic part $T(z)$ as a Laurent series → the operators **$L_n$**.
3. Compute the short-distance product $T(z)T(w)$ → the **central charge $c$**.

Whenever a CFT statement feels abstract, ask: *what did the stress tensor do in the geometry story?*

## Sublesson notes

- 22.3 [[Polyakov action]] — the action, its $X^\mu$ and metric variations.
- 22.4 [[Polyakov vs Nambu-Goto]] — the square root removed; classical equivalence.
- 22.1 [[Independent worldsheet metric]] — why a dynamical $h_{\alpha\beta}$ simplifies everything; its EOM = the constraints.
- 22.5 [[Weyl invariance]] — the extra local symmetry $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$ and why it matters.
- 22.6 [[Complex coordinates on the worldsheet]] — $z,\bar z$, holomorphic factorization, $T(z)$ and $\bar T(\bar z)$.
- 22.7 [[Worldsheet stress tensor]] — derive $T_{\alpha\beta}$ by varying Polyakov; tracelessness; free-boson form.
- 22.2 [[Virasoro constraints]] — $T_{\alpha\beta}=0$ in conformal gauge and its mode-language form.
- 22.8 [[Free boson OPEs]] — the worked examples: $\partial X\,\partial X$, $T\,\partial X$, $T\,e^{ikX}$, $T\,T$.
- 22.9 [[Virasoro algebra and central charge]] — the algebra, where $c$ comes from, and what $c$ measures.

Recurring cross-links: [[Nambu-Goto action]], [[Light-cone constraints]], [[Mass-shell relation]], [[Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance]], [[Mode expansions in light-cone gauge]], [[Normal ordering constant]], [[Total central charge and D = 26]].

## Conventions used across the module

- **Signature** mostly-plus, $\eta_{\alpha\beta}=\mathrm{diag}(-1,+1)$ on the worldsheet and $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$ in target space.
- **Action normalization** $S_P=-\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{-h}\,h^{\alpha\beta}\,\partial_\alpha X\cdot\partial_\beta X$; the $1/(4\pi\alpha')$ is *half* the Nambu–Goto coefficient, the factor of 2 restored by $h^{\alpha\beta}h_{\alpha\beta}=2$ in 2D.
- **Signature switch for CFT.** The geometry notes are Lorentzian; the OPE notes Wick-rotate to Euclidean with $z=\sigma^1+i\sigma^2$. 22.6 [[Complex coordinates on the worldsheet]] is the bridge — watch factors of $i$ crossing back.

## Open questions

- The $bc$-ghost derivation of $c=-26$ is deferred to [[The bc ghost CFT]] and [[Total central charge and D = 26]]. This module quotes that value; it does not derive it.
- Global gauge fixing leaves moduli on higher-genus worldsheets; that structural issue belongs to [[Moduli spaces]] and the interactions module.

## Exercise

*No-notes self-test for the whole module.* Answer all three cold, then check yourself.

1. **Why does an independent worldsheet metric simplify the theory?** State the Polyakov action and give the three payoffs of making $h_{\alpha\beta}$ an independent field.
2. **State the Virasoro algebra** and name every piece. Which term is the classical (Witt) algebra, and which is the quantum central extension?
3. **What does the central charge $c$ mean?** Give at least two independent readings, then explain how $c$ fixes $D=26$.

> [!success]- Solution
> **1 — Independent metric.** The action is
> $$S_P=-\frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{-h}\,h^{\alpha\beta}\,\partial_\alpha X\cdot\partial_\beta X,$$
> with $h_{\alpha\beta}$ varied separately from $X^\mu$. Three payoffs:
> (a) **No square root** — the action is quadratic in $\partial X$, so the EOM is a linear wave equation and the $X$ path integral is Gaussian.
> (b) **Constraints for free** — because $h_{\alpha\beta}$ appears with no derivatives, its EOM is algebraic: $T_{\alpha\beta}=\partial_\alpha X\cdot\partial_\beta X-\tfrac12 h_{\alpha\beta}h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X=0$. In conformal gauge this is exactly $(\dot X\pm X')^2=0$, the Virasoro constraints — now derived, not imposed.
> (c) **Gauge counting** — a symmetric $2\times2$ $h_{\alpha\beta}$ has 3 components; the 3 local symmetries (2 reparametrizations + 1 Weyl) eat all 3. So $h_{\alpha\beta}$ has no propagating degrees of freedom and can be flattened to $\eta_{\alpha\beta}$ (conformal gauge), leaving a free CFT.
>
> **2 — The algebra.**
> $$[L_m,L_n]=(m-n)\,L_{m+n}+\frac{c}{12}\,m(m^2-1)\,\delta_{m+n,0}.$$
> - $(m-n)L_{m+n}$ is the **Witt algebra**, the classical algebra of 2D conformal transformations (the modes $\ell_n=-z^{n+1}\partial_z$ obey $[\ell_m,\ell_n]=(m-n)\ell_{m+n}$). This term is the entire *classical* content.
> - $\frac{c}{12}m(m^2-1)\delta_{m+n,0}$ is the **central extension**: a c-number (proportional to the identity), nonzero only when $m+n=0$, arising purely from normal-ordering the operators inside $T$ — a *quantum* effect. Its coefficient $c$ is the central charge. Note it vanishes for $m\in\{-1,0,1\}$, so $\{L_{-1},L_0,L_1\}$ (the global $SL(2,\mathbb C)$ subalgebra) closes without anomaly.
>
> **3 — Meaning of $c$, and $D=26$.** Any two of:
> (i) **Degree-of-freedom count** — one free boson gives $c=1$, so $D$ bosons give $c=D$; $c$ measures "how much stuff" the CFT contains (made precise by the c-theorem: $c$ decreases along RG flow).
> (ii) **Anomaly in $T$** — $c/2$ is the coefficient of the $(z-w)^{-4}$ pole in the $T(z)T(w)$ OPE; equivalently the Schwarzian obstruction to $T$ transforming as a tensor.
> (iii) **Physical energy** — the Casimir energy on the cylinder is $E=-\tfrac{2\pi(c+\bar c)}{24}$, and on a curved worldsheet the trace anomaly is $\langle T^\alpha{}_\alpha\rangle=-\tfrac{c}{12}R$.
>
> Weyl invariance of the *full* gauge-fixed string requires the trace anomaly to cancel, i.e. **total $c=0$**. The $D$ embedding bosons give $c=D$; the diffeomorphism ($bc$) ghosts give $c=-26$. Hence $c_{\text{total}}=D-26=0\Rightarrow D=26$. (The ghost value $c=-26$ is the one piece *not* derived in this module — it needs Faddeev–Popov quantization.)
