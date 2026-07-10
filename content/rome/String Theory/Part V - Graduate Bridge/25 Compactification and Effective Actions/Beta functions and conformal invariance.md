---
title: Beta functions and conformal invariance
number: "25.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, beta-functions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string in a curved spacetime is a 2d field theory whose coupling constants are the spacetime fields themselves; quantizing it makes those couplings run unless the spacetime is Ricci-flat, so demanding conformal invariance (killing the running) is Einstein's equation in disguise.

The string cannot move consistently in a spacetime that fails to solve the gravitational field equations: if it tries, the worldsheet theory breaks down as a quantum theory. This note builds the machinery; [[Einstein equations from conformal invariance]] reads off the gravitational consequence.

## Couplings that are spacetime fields

Set strings aside for a moment. In any quantum field theory the coupling constants — the numbers multiplying interaction terms — are not really constant: quantum corrections make them drift as one changes the energy scale $\mu$ probed at. The **beta function** $\beta = \mu\,\partial_\mu(\text{coupling})$ measures that drift. When $\beta=0$ the theory looks the same at every scale, and it is scale (conformal) invariant.

Return to the string. A string sweeping through a curved spacetime is governed by a 2d worldsheet theory in which the metric of spacetime plays the role of the coupling constant. So the question "does this 2d theory run?" becomes "does the spacetime metric drift under the renormalization group?" And the string cannot afford any drift: worldsheet conformal invariance is the gauge symmetry that made $D=26$ and the graviton come out right in the first place. So we set $\beta=0$. The answer that emerges is $\beta \propto \mathcal R_{\mu\nu}$, so $\beta=0$ forces $\mathcal R_{\mu\nu}=0$ — the vacuum Einstein equation. A consistent worldsheet forces gravity on the target space.

## The string in a curved background is a sigma model

The [[Polyakov action]] generalizes from flat space to a general target metric $G_{\mu\nu}(X)$. For the loop computation we Wick-rotate to a Euclidean worldsheet (hence $\sqrt{g}$, not $\sqrt{-h}$) and a Euclidean target ($\delta_{\mu\nu}$ in place of the mostly-plus $\eta_{\mu\nu}$); the signs below are fixed by that convention:
$$ S = \frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{g}\,g^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,G_{\mu\nu}(X). \tag{1}$$
The worldsheet metric $g_{\alpha\beta}$ ($\alpha,\beta$ = worldsheet indices) is still the 2d gauge field; the new ingredient is the *spacetime* metric $G_{\mu\nu}(X)$ ($\mu,\nu$ = target indices), which depends on the dynamical fields $X$. A theory whose kinetic term has field-dependent coefficients is a **nonlinear sigma model**, and the $D$-dimensional spacetime is its **target space**.

This $G_{\mu\nu}(X)$ is genuinely made of the flat-space string's gravitons: writing $G_{\mu\nu}=\delta_{\mu\nu}+h_{\mu\nu}$ and inserting the exponential of the graviton vertex operator into the path integral is the same as building a coherent state — a condensate — of gravitons. "String in a background metric" and "string in a cloud of its own gravitons" are the same statement.

## The couplings are the Taylor coefficients of $G_{\mu\nu}$

To see the metric literally as an infinite set of coupling constants, expand around a point $\bar x$ with $X^\mu = \bar x^\mu + \sqrt{\alpha'}\,Y^\mu$. (The $\sqrt{\alpha'}$ makes $Y$ dimensionless: $[X]=-1$ in worldsheet units, $[\alpha']=-2$.)
$$ G_{\mu\nu}(X) = G_{\mu\nu}(\bar x) + \sqrt{\alpha'}\,\partial_\omega G_{\mu\nu}(\bar x)\,Y^\omega + \tfrac{\alpha'}{2}\,\partial_\omega\partial_\rho G_{\mu\nu}(\bar x)\,Y^\omega Y^\rho + \cdots \tag{2}$$
Each Taylor coefficient multiplies a distinct interaction among the fluctuations $Y$: $\partial_\omega G_{\mu\nu}$ is a cubic vertex, $\partial_\omega\partial_\rho G_{\mu\nu}$ a quartic, and so on. Infinitely many couplings, all packaged into the single function $G_{\mu\nu}(X)$.

When is this weakly coupled? If the target curves on a length scale $r_c$ (so $\partial G/\partial X\sim 1/r_c$), the dimensionless coupling is
$$ \frac{\sqrt{\alpha'}}{r_c}. \tag{3}$$
Perturbation theory in the sigma model is therefore the **$\alpha'$-expansion**: valid when spacetime varies slowly compared to the string length $\sqrt{\alpha'}$. This is a separate expansion from the $g_s$ (string-loop) one — a string amplitude is a double series in $\alpha'$ and $g_s$.

## The beta functional and why it must vanish

Classically (1) is conformally invariant. Quantum-mechanically, regulating UV divergences forces in a scale $\mu$, and the couplings — i.e. the metric — run. Because there is a coupling for *every point of spacetime*, the running is measured by a beta **functional**:
$$ \beta_{\mu\nu}(G) \sim \mu\,\frac{\partial G_{\mu\nu}(X;\mu)}{\partial\mu}. \tag{4}$$
In string theory conformal (Weyl) invariance is a gauge symmetry of the Polyakov action and cannot be given up. So we *impose*
$$ \beta_{\mu\nu}(G) = 0. \tag{5}$$
Everything downstream in this module is the computation and consequence of this one condition.

## One-loop computation of $\beta_{\mu\nu}(G)$

Start by choosing the cleverest coordinates. At $\bar x$, pick **Riemann normal coordinates**, where the metric's Taylor expansion has no linear term and its leading nontrivial piece is the curvature itself:
$$ G_{\mu\nu}(X) = \delta_{\mu\nu} - \tfrac{\alpha'}{3}\,\mathcal R_{\mu\lambda\nu\kappa}(\bar x)\,Y^\lambda Y^\kappa + \mathcal O(Y^3). \tag{6}$$
These coordinates discard the coordinate-artifact terms and leave a single physical interaction, controlled by the Riemann tensor. The action (1) becomes
$$ S = \frac{1}{4\pi}\int d^2\sigma\,\Big[\,\partial Y^\mu\partial Y^\nu\,\delta_{\mu\nu} - \tfrac{\alpha'}{3}\,\mathcal R_{\mu\lambda\nu\kappa}\,Y^\lambda Y^\kappa\,\partial Y^\mu\partial Y^\nu\,\Big]. \tag{7}$$
The first term is a free 2d scalar; the second is a quartic vertex (two "spectator" legs $Y^\lambda,Y^\kappa$ from the metric, two derivative legs $\partial Y^\mu,\partial Y^\nu$ from the kinetic structure).

Now find the divergence. The one-loop correction comes from contracting the two spectator legs $Y^\lambda,Y^\kappa$ of a single vertex with each other — a self-loop closing on one point (a tadpole). That contraction is the coincident-point limit of the free 2d propagator,
$$ \langle Y^\lambda(\sigma)\,Y^\kappa(\sigma')\rangle = -\tfrac12\,\delta^{\lambda\kappa}\,\ln|\sigma-\sigma'|^2, \tag{8}$$
which diverges as $\sigma'\to\sigma$. Regulating in $d=2+\epsilon$ dimensions turns the log divergence into a $1/\epsilon$ pole:
$$ \langle Y^\lambda(\sigma)\,Y^\kappa(\sigma)\rangle \;\longrightarrow\; \frac{\delta^{\lambda\kappa}}{\epsilon}. \tag{9}$$

Read off the counterterm. To subtract the pole, replace $Y^\lambda Y^\kappa$ in the vertex by its self-contraction (9). Contracting the Riemann tensor on those two indices collapses it to the Ricci tensor:
$$ \mathcal R_{\mu\lambda\nu\kappa}\,\langle Y^\lambda Y^\kappa\rangle \;\propto\; \mathcal R_{\mu\lambda\nu\kappa}\,\frac{\delta^{\lambda\kappa}}{\epsilon} = \frac{1}{\epsilon}\,\mathcal R_{\mu\nu}. \tag{10}$$
So the divergent piece is $\propto \mathcal R_{\mu\nu}\,\partial Y^\mu\partial Y^\nu$ — the same structure as the kinetic term. The loop cannot manufacture a new kind of term at this order; it can only shift the coefficient of $\partial Y^\mu\partial Y^\nu$, which is nothing but the metric. Absorbing the pole (with a harmless $Y$-field redefinition) requires renormalizing the metric coupling:
$$ G_{\mu\nu} \;\longrightarrow\; G_{\mu\nu} + \frac{\alpha'}{\epsilon}\,\mathcal R_{\mu\nu}. \tag{11}$$

Finally, turn the counterterm into a beta function. The *bare* metric — the thing written in the Lagrangian — is independent of the arbitrary scale $\mu$:
$$ G_{\mu\nu}^{\text{bare}} = G_{\mu\nu}(\mu) + \frac{\alpha'}{\epsilon}\,\mathcal R_{\mu\nu}\big(G(\mu)\big) + \cdots,\qquad \mu\,\frac{d}{d\mu}\,G_{\mu\nu}^{\text{bare}} = 0. \tag{12}$$
For the bare quantity to stay fixed while the pole is subtracted, the finite (renormalized) metric $G_{\mu\nu}(\mu)$ must drift with $\mu$. Tracking that drift order by order gives the one-loop beta function:
$$ \boxed{\,\beta_{\mu\nu}(G) = \alpha'\,\mathcal R_{\mu\nu}\,} \tag{13}$$
Curvature is not just an interaction — it is precisely the obstruction to the worldsheet theory staying scale-invariant after quantization. A curved background sources the running; a Ricci-flat one does not.

## The same result as a Weyl anomaly

Result (13) came from studying the running on a flat worldsheet. The mirror-image statement lives on a curved worldsheet, and it is the one that makes the word "conformal" literal. Write the worldsheet metric as $g_{\alpha\beta}=e^{2\phi}\delta_{\alpha\beta}$; a Weyl transformation shifts $\phi$. In $d=2+\epsilon$ the $\sqrt g$ and $g^{\alpha\beta}$ factors in (1) fail to cancel by an amount $\propto\epsilon$, and after renormalizing the metric with (11) that mismatch leaves a finite $\phi$-dependence as $\epsilon\to0$: the action depends on the Weyl factor, so Weyl invariance is broken.

The clean diagnostic is the trace of the worldsheet stress tensor. Classically the trace vanishes; the quantum expectation value does not, and computing it gives
$$ \langle T^{\alpha}{}_{\alpha}\rangle = -\frac{1}{2\alpha'}\,\beta_{\mu\nu}(G)\,\partial X^\mu\partial X^\nu = -\tfrac12\,\mathcal R_{\mu\nu}\,\partial X^\mu\partial X^\nu. \tag{14}$$
This is the chain that runs the whole module:
$$ \beta_{\mu\nu}\ne 0 \;\Longleftrightarrow\; \langle T^\alpha{}_\alpha\rangle\ne 0 \;\Longleftrightarrow\; \text{Weyl anomaly} \;\Longleftrightarrow\; \text{no CFT}. $$
Demanding $\beta_{\mu\nu}=0$ is exactly demanding that the worldsheet theory remain a conformal field theory. That is the precise content of "worldsheet conformal invariance constrains the spacetime fields."

## The full set, with $B$ and $\Phi$

Turning on all three massless closed-string fields — metric $G_{\mu\nu}$, Kalb–Ramond $B_{\mu\nu}$, dilaton $\Phi$ (see [[Metric, B-field, and dilaton as low-energy fields]]) — gives three beta functions whose simultaneous vanishing is the full consistency condition:
$$
\begin{aligned}
\beta_{\mu\nu}(G) &= \alpha'\,\mathcal R_{\mu\nu} + 2\alpha'\,\nabla_\mu\nabla_\nu\Phi - \tfrac{\alpha'}{4}\,H_{\mu\lambda\kappa}H_\nu{}^{\lambda\kappa},\\
\beta_{\mu\nu}(B) &= -\tfrac{\alpha'}{2}\,\nabla^\lambda H_{\lambda\mu\nu} + \alpha'\,\nabla^\lambda\Phi\,H_{\lambda\mu\nu},\\
\beta(\Phi) &= -\tfrac{\alpha'}{2}\,\nabla^2\Phi + \alpha'\,\nabla_\mu\Phi\,\nabla^\mu\Phi - \tfrac{\alpha'}{24}\,H_{\mu\nu\lambda}H^{\mu\nu\lambda},
\end{aligned}
\tag{15}
$$
where $H=dB$ is the 3-form field strength. The metric term is (13); the extra pieces are the dilaton gradient and the $B$-field flux acting as sources. These are written for the critical dimension $D=26$; off-critical, $\beta(\Phi)$ picks up a constant $\tfrac{D-26}{6}$ whose vanishing is what selects $D=26$ (that framing is developed in [[Worldsheet consistency becomes spacetime dynamics]]). Only the leading $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$ is derived above; the $B$ and $\Phi$ pieces come from the analogous background-field expansion with torsion and dilaton improvement terms, which we quote rather than compute (see Open questions).

## The RG flow is Ricci flow (aside)

Reading (13) as an actual flow equation,
$$ \mu\,\partial_\mu\, G_{\mu\nu} = \alpha'\,\mathcal R_{\mu\nu}, \tag{16}$$
is exactly **Ricci flow** — the metric evolving in the direction of its own curvature. (The $\mu$ on the left is the RG scale, distinct from the tensor index $\mu$ on $G_{\mu\nu}$; the flow parameter is log-scale, $t=\ln\mu$, so $\partial_t G_{\mu\nu}=\alpha'\mathcal R_{\mu\nu}$, and the "standard" mathematician's normalization $\partial_t G=-2\mathcal R_{\mu\nu}$ differs only by rescaling $t$ and orienting toward the IR.) This is the same geometric flow (with a dilaton-like term) that Perelman used to prove the Poincaré conjecture. The renormalization group of a 2d sigma model is literally geometric flow on the target manifold; the fixed points, where the flow stops, are the Ricci-flat metrics — the string's allowed universes.

## Open questions
- Only $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$ is derived here. The $B$ and $\Phi$ terms in (15) are quoted; deriving them needs the full background-field expansion with torsion and the dilaton's $R^{(2)}$ coupling. That is the standard Friedan / Callan–Friedan–Martinec–Perry computation, deferred to a dedicated sigma-model-renormalization note.
- The one-loop derivation above tracks the covariant structure and the pole coefficient, but not every Feynman-graph symmetry factor from first principles. A fully rigorous coefficient audit belongs in that same dedicated note.

## Exercise

The boxed result $\beta_{\mu\nu}(G)=\alpha'\mathcal R_{\mu\nu}$ can be sanity-checked without redoing the loop, purely from **dimensions and symmetry**. Suppose you had never seen equation (13). Argue that at one loop $\beta_{\mu\nu}(G)$ must be proportional to $\mathcal R_{\mu\nu}$, and determine the power of $\alpha'$ that multiplies it. Then use the same dimensional reasoning to predict which structure(s) can appear at the next ($\alpha'^2$, two-loop) order.

> [!success]- Solution
> **Why $\mathcal R_{\mu\nu}$ and nothing else at one loop.** $\beta_{\mu\nu}(G)$ renormalizes the metric coupling, so it must be a symmetric two-index tensor built covariantly from $G_{\mu\nu}$ — general covariance forbids anything that isn't a genuine tensor (this is what Riemann normal coordinates enforce automatically). The loop expansion is the $\alpha'$-expansion (3), and each power of $\alpha'$ carries two derivatives, since $[\alpha']=-2$ and $[\partial]=+1$. At one loop we have exactly one power of $\alpha'$, hence two derivatives of the metric. The only symmetric two-index covariant tensor with two derivatives of $G_{\mu\nu}$ is the Ricci tensor $\mathcal R_{\mu\nu}$ (its trace $\mathcal R\,G_{\mu\nu}$ is the only other candidate, and it does not arise from the coincident-propagator contraction, which delivers the un-traced $\mathcal R_{\mu\lambda\nu\kappa}\delta^{\lambda\kappa}=\mathcal R_{\mu\nu}$ directly). So
> $$\beta_{\mu\nu}(G) = c\,\alpha'\,\mathcal R_{\mu\nu},$$
> and the explicit loop fixes $c=1$.
>
> **Next order.** Two loops means $\alpha'^2$, i.e. four derivatives of the metric. The available symmetric two-index tensors are curvature-squared contractions such as $\mathcal R_{\mu\lambda\rho\sigma}\mathcal R_\nu{}^{\lambda\rho\sigma}$ (and, by index gymnastics, terms like $\mathcal R_{\mu\rho}\mathcal R_\nu{}^\rho$ or $\nabla^2\mathcal R_{\mu\nu}$). So we predict
> $$\beta_{\mu\nu}(G) = \alpha'\,\mathcal R_{\mu\nu} + \tfrac12\alpha'^2\,\mathcal R_{\mu\lambda\rho\sigma}\mathcal R_\nu{}^{\lambda\rho\sigma} + \cdots,$$
> the curvature-squared correction to Einstein's equations that kicks in when $r_c\sim\sqrt{\alpha'}$. Dimensional analysis alone gets the structure; only the honest two-loop graph fixes the coefficient $\tfrac12$.
