---
title: Einstein equations from conformal invariance
number: "25.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, effective-action]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Demanding that the string's worldsheet stay conformal forces its target spacetime to be Ricci-flat, $\mathcal R_{\mu\nu}=0$ — the vacuum Einstein equation. Gravity is not assumed; it is the price of quantum consistency on the sheet.

## The metric as a coupling

A string sweeping through spacetime carries a little 2d quantum field theory on its worldsheet (a nonlinear sigma model; see [[Beta functions and conformal invariance]]). The *couplings* of that theory are the spacetime fields the string moves through — the metric $G_{\mu\nu}(X)$ is a coupling, evaluated point by point.

Weyl (conformal) invariance is the string's load-bearing gauge symmetry: it is what killed the unphysical modes and forced $D=26$. Losing it would collapse the theory. But quantum-mechanically a coupling only stays scale-invariant if its **beta function vanishes** — otherwise the theory "runs" with energy and is no longer conformal. So the string is only allowed to sit in backgrounds where $\beta_{\mu\nu}(G)=0$. The one-loop calculation says $\beta_{\mu\nu}(G)\propto\mathcal R_{\mu\nu}$. Therefore the string can only live in a **Ricci-flat** spacetime — which is exactly a solution of the vacuum Einstein equation.

Nowhere did we write down general relativity. We asked one string to move without breaking its own symmetry, and it answered by handing us Einstein's equation.

## The result

The one-loop metric beta function of the sigma model is the target-space Ricci tensor:
$$ \beta_{\mu\nu}(G) = \alpha'\,\mathcal R_{\mu\nu}. \tag{1}$$
Weyl invariance cannot be sacrificed, so consistency demands $\beta_{\mu\nu}(G)=0$:
$$ \boxed{\,\mathcal R_{\mu\nu} = 0\,} \tag{2}$$
The background must be Ricci-flat. Curvature is precisely the obstruction to the worldsheet theory being scale-invariant after quantization, so a background is allowed exactly when it kills that obstruction.

**Why "Ricci-flat" is the full vacuum Einstein equation.** The vacuum equation is $\mathcal R_{\mu\nu}-\tfrac12 G_{\mu\nu}\mathcal R=0$. Trace it with $G^{\mu\nu}$ in $D$ dimensions: $\mathcal R - \tfrac{D}{2}\mathcal R = (1-\tfrac{D}{2})\mathcal R = 0$, so $\mathcal R=0$ for $D\neq2$, and the equation reduces to $\mathcal R_{\mu\nu}=0$. Hence $(2)$ is *exactly* the vacuum equation — no cosmological constant, no matter, at this leading order in $\alpha'$ and in the string coupling $g_s$. (Matter appears once $B$ and $\Phi$ turn on, below.)

This is the concrete meaning of "worldsheet conformal invariance constrains spacetime fields": the constraint on the metric coupling *is* the gravitational field equation. The RG fixed-point condition of a 2d field theory is Einstein's equation.

It also validates the flat backgrounds used elsewhere: a flat torus $\mathbf T^d$ has $\mathcal R_{\mu\nu}=0$, so $\mathbb R^{1,25-d}\times\mathbf T^d$ is a consistent background (see [[Toroidal compactification]]). More generally any Ricci-flat compact manifold works — a **Calabi–Yau** in the complex case. The string *selects its own admissible geometries* through $\beta=0$.

## Turning on $B$ and $\Phi$: Einstein with matter

With all three massless closed-string fields on (see [[Metric, B-field, and dilaton as low-energy fields]]), there are three beta functions, and their simultaneous vanishing gives coupled field equations:
$$
\begin{aligned}
\beta_{\mu\nu}(G)=0:&\quad \mathcal R_{\mu\nu} + 2\nabla_\mu\nabla_\nu\Phi - \tfrac14 H_{\mu\lambda\kappa}H_\nu{}^{\lambda\kappa} = 0,\\[2pt]
\beta_{\mu\nu}(B)=0:&\quad \nabla^\lambda H_{\lambda\mu\nu} - 2\,(\nabla^\lambda\Phi)\,H_{\lambda\mu\nu} = 0,\\[2pt]
\beta(\Phi)=0:&\quad \nabla^2\Phi - 2\,(\nabla\Phi)^2 + \tfrac{1}{12}H_{\mu\nu\lambda}H^{\mu\nu\lambda} = \tfrac{D-26}{3\alpha'}.
\end{aligned}
\tag{3}$$
Here $H=dB$ is the 3-form field strength. Now $\mathcal R_{\mu\nu}$ is sourced: the flux $H$ and dilaton gradients act as stress-energy. This is Einstein's equation *with matter*, the matter being the other massless string fields. The constant on the right of the dilaton equation is the leftover central-charge deficit $\propto c-26$; at the critical dimension $D=26$ it vanishes, so the same worldsheet bookkeeping that gives Einstein's equation also enforces the critical dimension.

## The spacetime effective action

All three equations of $(3)$ come from varying one $D=26$ action — the **low-energy effective action of the bosonic string**:
$$ S = \frac{1}{2\kappa_0^2}\int d^{26}X\,\sqrt{-G}\;e^{-2\Phi}\Big(\mathcal R - \tfrac{1}{12}H_{\mu\nu\lambda}H^{\mu\nu\lambda} + 4\,\partial_\mu\Phi\,\partial^\mu\Phi\Big). \tag{4}$$
Term by term:
- $\sqrt{-G}\,\mathcal R$ is the Einstein–Hilbert term — gravity, derived not assumed.
- $-\tfrac{1}{12}H^2$ is the kinetic term for the Kalb–Ramond field $B$.
- $e^{-2\Phi}$ out front is the tree-level $1/g_s^2$ (since $g_s=e^{\Phi_0}$); its presence marks this as string frame (the metric the string literally sees). A Weyl rescaling removes it and moves to Einstein frame — see [[Metric, B-field, and dilaton as low-energy fields]].

A single quantized string is so demanding that its consistency dictates the motion of the whole spacetime it lives in, and the demand is nothing more than worldsheet conformal invariance.

## Checking the action reproduces the beta functions

Varying $(4)$ in all three fields gives (this is the content of $\delta S$; the precise packaging is stated below)
$$ \delta S \propto \int \sqrt{-G}\,e^{-2\Phi}\left[\,\delta G_{\mu\nu}\,\beta^{\mu\nu}(G)-\delta B_{\mu\nu}\,\beta^{\mu\nu}(B)-\Big(2\delta\Phi+\tfrac12 G^{\mu\nu}\delta G_{\mu\nu}\Big)\big(\beta^{\lambda}{}_{\lambda}(G)-4\beta(\Phi)\big)\right]. \tag{5}$$
Equation $(5)$ says extremizing the spacetime action is equivalent to setting the worldsheet Weyl-anomaly coefficients to zero. Two features of this pairing need care.

**The $B$ equation (easiest coefficient check).** Vary $-\tfrac{1}{12}H^2$ in $(4)$ and integrate by parts against the $e^{-2\Phi}$ prefactor:
$$ \nabla_\lambda\!\left(e^{-2\Phi}H^{\lambda\mu\nu}\right)=0
\;\Longleftrightarrow\;
\nabla_\lambda H^{\lambda\mu\nu}-2(\nabla_\lambda\Phi)H^{\lambda\mu\nu}=0, $$
which is exactly $\beta_{\mu\nu}(B)=0$. The prefactor is what converts the plain divergence into the covariant-plus-dilaton combination.

**The scalar equation is a *combination*, not $\beta(\Phi)$ alone.** Varying $(4)$ in $\Phi$ gives
$$ 4\nabla^2\Phi-4(\nabla\Phi)^2+\mathcal R-\tfrac{1}{12}H^2=0. \tag{6}$$
Off-shell this is *not* $\beta(\Phi)=0$: it carries a bare Ricci scalar $\mathcal R$ and kinetic terms with coefficient $4$, not the $\nabla^2\Phi - 2(\nabla\Phi)^2 + \tfrac1{12}H^2$ of $\beta(\Phi)$. It is instead the combination $\beta^{\lambda}{}_{\lambda}(G)-4\beta(\Phi)=0$ that appears in $(5)$ — the $\mathcal R$ is the leftover trace piece $\beta^{\lambda}{}_{\lambda}(G)$. To collapse $(6)$ back to $\beta(\Phi)$ you must use the metric equation to eliminate $\mathcal R$. Trace the metric equation in $(3)$,
$$ \mathcal R + 2\nabla^2\Phi - \tfrac14 H^2 = 0 \;\Rightarrow\; \mathcal R = -2\nabla^2\Phi + \tfrac14 H^2, \tag{7}$$
and substitute into $(6)$:
$$ 2\nabla^2\Phi - 4(\nabla\Phi)^2 + \big(\tfrac14-\tfrac1{12}\big)H^2 = 0 \;\Rightarrow\; \nabla^2\Phi - 2(\nabla\Phi)^2 + \tfrac{1}{12}H^2 = 0. $$
This reduced form is *exactly* the stated $\beta(\Phi)=0$ in $(3)$ — same $+\tfrac1{12}H^2$, same normalization. So the action's $\Phi$-EOM and $\beta(\Phi)$ are **not** independent equations; they coincide once $\beta_{\mu\nu}(G)=0$ is imposed (its trace $(7)$ is what removed $\mathcal R$). What is genuinely true is the *off-shell* statement: you may not identify the raw action variation $(6)$ with $\beta(\Phi)$, because $(6)$ is the mixed object $\beta^{\lambda}{}_{\lambda}(G)-4\beta(\Phi)$. This is exactly why $(5)$ pairs $\delta\Phi$ (and the trace of $\delta G$) with that combination rather than with $\beta(\Phi)$ alone.

## $\alpha'$ corrections

Equation $(1)$ is one loop in the sigma model, hence leading order in the $\alpha'$-expansion. Higher loops add higher-curvature corrections. Ignoring $H$ and $\Phi$, the two-loop result is
$$ \beta_{\mu\nu} = \alpha'\mathcal R_{\mu\nu} + \tfrac12\alpha'^2\,\mathcal R_{\mu\lambda\rho\sigma}\mathcal R_\nu{}^{\lambda\rho\sigma} + \dots = 0. \tag{8}$$
String theory predicts *specific* curvature-squared corrections to GR. They matter when the curvature radius $r_c$ approaches the string length $\sqrt{\alpha'}$, i.e. when the expansion parameter $\sqrt{\alpha'}/r_c$ is no longer small. This is the precise sense in which ordinary GR is the *low-energy* limit of string theory: it is the first term of $(8)$.

## Open questions
- The $\tfrac12$ coefficient in $(8)$ is the standard two-loop sigma-model value, quoted rather than derived here; deriving it needs the two-loop background-field expansion.
- The action $(4)$ is tree-level in $g_s$. String-loop ($g_s$) corrections and tachyon dynamics are outside this bosonic effective-action pass.

## Exercise

Suppose someone hands you the *string-frame* dilaton equation of motion, $(6)$: $4\nabla^2\Phi - 4(\nabla\Phi)^2 + \mathcal R - \tfrac{1}{12}H^2 = 0$. Working at leading order with $H=0$ and a **constant** dilaton $\Phi=\Phi_0$, show that $(6)$ forces $\mathcal R=0$, and check this is consistent with the metric equation $\beta_{\mu\nu}(G)=0$. Then say in one sentence why a *non-constant* dilaton lets you have $\mathcal R\neq0$ even in vacuum ($H=0$).

> [!success]- Solution
> With $\Phi=\Phi_0$ constant, every derivative of $\Phi$ vanishes: $\nabla^2\Phi=0$ and $(\nabla\Phi)^2=0$. Setting $H=0$ too, equation $(6)$ collapses to
> $$ \mathcal R = 0. $$
> The metric equation from $(3)$ with $\Phi$ constant and $H=0$ is $\mathcal R_{\mu\nu}+2\nabla_\mu\nabla_\nu\Phi-\tfrac14 H_{\mu\lambda\kappa}H_\nu{}^{\lambda\kappa}=\mathcal R_{\mu\nu}=0$, i.e. the vacuum Einstein equation $(2)$. Ricci-flatness implies $\mathcal R=G^{\mu\nu}\mathcal R_{\mu\nu}=0$, so the two are consistent — the scalar equation is just the trace of the tensor equation in this simple case, carrying no new information.
> **Non-constant dilaton:** now $\nabla_\mu\nabla_\nu\Phi\neq0$ sources the metric equation, $\mathcal R_{\mu\nu}=-2\nabla_\mu\nabla_\nu\Phi$, so the geometry can be curved ($\mathcal R_{\mu\nu}\neq0$) even with $H=0$ — the dilaton gradient itself acts as stress-energy. This is Einstein's equation with the dilaton as matter.
