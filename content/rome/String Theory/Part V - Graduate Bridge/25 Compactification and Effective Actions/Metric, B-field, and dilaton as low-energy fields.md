---
title: Metric, B-field, and dilaton as low-energy fields
number: "25.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, massless-fields]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The massless states of the closed string are exactly three spacetime fields — a graviton $G_{\mu\nu}$, an antisymmetric 2-form $B_{\mu\nu}$, and a scalar dilaton $\Phi$ — and each shows up as a different way of coupling to the worldsheet, which is why the string carries gravity, a new kind of charge, and its own coupling constant all at once.

A closed string vibrating in its lowest excited level is spinning in two independent ways (a left-moving quantum and a right-moving quantum). Multiply those two spins together and a $2$-index tensor $\psi_{\mu\nu}$ appears. Any such tensor splits into a symmetric-traceless part, an antisymmetric part, and a trace — and that arithmetic is the statement "the massless closed string = graviton + $B$-field + dilaton." We never put a metric in by hand; it falls out of the spectrum.

## Where the three fields come from

The massless level of the closed string ($N^\perp=\bar N^\perp=1$, no momentum or winding) is built by acting on the momentum-$p$ vacuum $|0;p\rangle$ with one left and one right oscillator:
$$ \alpha_{-1}^\mu\,\bar\alpha_{-1}^\nu\,|0;p\rangle \;\longrightarrow\; \psi_{\mu\nu}. $$
The two indices are independent, so $\psi_{\mu\nu}$ is a general (not-yet-symmetric) tensor. Under the spacetime Lorentz group it decomposes into three irreducible pieces:
$$ \psi_{\mu\nu} = \underbrace{\psi_{(\mu\nu)} - \tfrac1D\,\eta_{\mu\nu}\psi^\lambda{}_\lambda}_{\text{graviton }G_{\mu\nu}} \;+\; \underbrace{\psi_{[\mu\nu]}}_{\text{Kalb–Ramond }B_{\mu\nu}} \;+\; \underbrace{\tfrac1D\,\eta_{\mu\nu}\psi^\lambda{}_\lambda}_{\text{dilaton }\Phi}. $$
Each piece is a field the string can source:

- **symmetric-traceless** — a massless spin-2 field. There is exactly one consistent theory of a massless spin-2 field: general relativity. So this is the **graviton**. Gravity was never assumed; it is forced.
- **antisymmetric** — a massless 2-form, the **Kalb–Ramond field** $B_{\mu\nu}$. A genuinely new field with no point-particle analogue at this rank.
- **trace** — a single scalar, the **dilaton** $\Phi$.

Every consistent closed string theory contains all three. The rest of this note is about *how* each couples, and how those couplings dictate the fields' spacetime dynamics.

## How each couples to the worldsheet

Turn on all three background fields. A string moving through them is a 2d field theory (a sigma model) with three terms:
$$ S = \frac{1}{4\pi\alpha'}\int d^2\sigma\,\sqrt{h}\,\Big( G_{\mu\nu}(X)\,\partial_\alpha X^\mu\partial_\beta X^\nu\,h^{\alpha\beta} \;+\; i\,B_{\mu\nu}(X)\,\partial_\alpha X^\mu\partial_\beta X^\nu\,\epsilon^{\alpha\beta} \;+\; \alpha'\,\Phi(X)\,R^{(2)} \Big). $$
The three couplings are built from the only three natural worldsheet tensors: the symmetric $h^{\alpha\beta}$, the antisymmetric $\epsilon^{\alpha\beta}$, and the curvature scalar $R^{(2)}$. Each field couples to exactly one of them — which is the deep reason there are exactly three massless fields. (The factor of $i$ is a Euclidean-signature bookkeeping artefact for the single-derivative $B$ term.)

**Metric $G_{\mu\nu}$** couples through the *symmetric* $h^{\alpha\beta}\partial X\partial X$. This is the ordinary kinetic term; it is literally the geometry the string measures distances with. Demanding this coupling stay Weyl-invariant is what produces Einstein's equations — see [[Beta functions and conformal invariance]] and [[Einstein equations from conformal invariance]].

**Kalb–Ramond $B_{\mu\nu}$** couples through the *antisymmetric* $\epsilon^{\alpha\beta}\partial X^\mu\partial X^\nu$. Read this geometrically: it is the **pullback of the spacetime 2-form $B$ onto the 2d worldsheet**, $\int B_{\mu\nu}\,dX^\mu\wedge dX^\nu$. Compare a charged point particle, which couples to a 1-form $A_\mu$ by dragging it along its 1d worldline, $\int A_\mu\,\dot X^\mu$. A string is a 1d object, so it couples to a *2*-form the way a point couples to a *1*-form: **the string is electrically charged under $B$.** The gauge symmetry mirrors electromagnetism's $A\to A+d\alpha$:
$$ B_{\mu\nu}\to B_{\mu\nu}+\partial_\mu C_\nu - \partial_\nu C_\mu, $$
under which the action shifts by a total derivative. The gauge-invariant field strength is the 3-form $H=dB$,
$$ H_{\mu\nu\rho}=\partial_\mu B_{\nu\rho}+\partial_\nu B_{\rho\mu}+\partial_\rho B_{\mu\nu}, $$
the exact analogue of $F=dA$. ($H$ also acts as spacetime torsion — an antisymmetric piece of the affine connection.) On a compact circle this charge shows up as winding: the winding modes in [[Toroidal compactification]] are exactly the states charged under the reduced field $\tilde A_\mu=B_{\mu,25}$.

**Dilaton $\Phi$** couples to the **worldsheet Ricci scalar** $R^{(2)}$ — the curvature of the *string's own sheet*, not of spacetime. Two features make it the odd one out:
1. It **vanishes on a flat worldsheet** ($R^{(2)}=0$), which makes its vertex operator subtle to write down.
2. It carries an explicit $\alpha'$, so it is effectively "one loop up" from the other two — and on a curved worldsheet it **classically breaks Weyl invariance**. This looks fatal (Weyl invariance is sacred) but is rescued: the classical violation is exactly the size of the *one-loop* violation from the $G$ and $B$ terms (both are order $\alpha'$), so they can cancel. That cancellation is the dilaton's beta-function condition; see [[Beta functions and conformal invariance]].

## The dilaton is the string coupling

Take the dilaton constant, $\Phi(X)=\lambda$. Then its coupling collapses to a pure topological number. Since $\frac{1}{4\pi\alpha'}\cdot\alpha' = \frac{1}{4\pi}$, the Gauss–Bonnet theorem gives
$$ S_{\text{dilaton}}=\frac{1}{4\pi}\int d^2\sigma\,\sqrt h\,\lambda\,R^{(2)}=\lambda\,\Big(\tfrac{1}{4\pi}\!\int\!\sqrt h\,R^{(2)}\Big)=\lambda\,\chi, $$
where $\chi=2-2g$ is the Euler characteristic of a genus-$g$ closed worldsheet. A constant dilaton changes no local equation of motion; it only **weights the worldsheet by its topology**.

This topological weight is what fixes the string coupling. In the path integral each worldsheet is weighted by $e^{-S}\supset e^{-\lambda\chi}$. Adding one handle to the string diagram — the next order in string perturbation theory — raises the genus by $1$, so $\chi$ drops by $2$, and the amplitude picks up a factor
$$ e^{-\lambda\,\Delta\chi}=e^{+2\lambda}. $$
Each extra loop costs a fixed factor of $e^{2\lambda}$. That is precisely how a coupling constant behaves: each loop should cost $g_s^2$. Reading off,
$$ \boxed{\,g_s = e^{\Phi_0}\,},\qquad \Phi_0=\lim_{X\to\infty}\Phi(X). $$
The string coupling is not a free parameter of the theory — it is the vacuum value of a field, on the same footing as the metric or a Higgs vev, and in principle set dynamically. (In the bosonic string nothing fixes it; in the superstring, fluxes and other effects can.) There is no dial for how strongly strings interact: the coupling strength is just how large one of the string's own vibration modes sits in the vacuum.

## The spacetime action and its two frames

Demanding all three beta functions vanish (done in [[Einstein equations from conformal invariance]]) is equivalent to extremizing a single 26d action — the low-energy effective action of the bosonic string:
$$ S = \frac{1}{2\kappa_0^2}\int d^{26}X\,\sqrt{-G}\,e^{-2\Phi}\Big(\mathcal R - \tfrac{1}{12}H_{\mu\nu\lambda}H^{\mu\nu\lambda} + 4\,\partial_\mu\Phi\,\partial^\mu\Phi\Big). $$
The Einstein–Hilbert term $\sqrt{-G}\,\mathcal R$ is gravity, derived not postulated. The odd features are the $e^{-2\Phi}$ prefactor (this is the tree-level $1/g_s^2$, since $g_s=e^{\Phi_0}$) and the *wrong-sign*-looking dilaton kinetic term (mostly-plus signature: a healthy scalar wants $-\tfrac12(\partial\Phi)^2$, so the $+4(\partial\Phi)^2$ here looks backwards). Neither is a problem: they are artefacts of writing everything in the metric $G_{\mu\nu}$ that the string physically sees. This is **string frame**.

**Getting to Einstein frame.** The $e^{-2\Phi}$ out front is ugly because it means $G_{\mu\nu}$ is not canonically normalized. Absorb it by *rescaling the metric with the dilaton* — split $\Phi=\Phi_0+\tilde\Phi$ (constant plus varying) and define
$$ \tilde G_{\mu\nu} = e^{-4\tilde\Phi/(D-2)}\,G_{\mu\nu}. $$
This is not a coordinate change or a symmetry — just a relabeling of fields, allowed precisely because a massless scalar $\Phi$ exists to fold into the ruler. Why *this* exponent and no other? Write the inverse as $G_{\mu\nu}=e^{2\omega}\tilde G_{\mu\nu}$ with $\omega=\dfrac{2\tilde\Phi}{D-2}$, and track how the Einstein–Hilbert term transforms. Under $G_{\mu\nu}=e^{2\omega}\tilde G_{\mu\nu}$ in $D$ dimensions, $\sqrt{-G}=e^{D\omega}\sqrt{-\tilde G}$ and $\mathcal R[G]=e^{-2\omega}(\tilde{\mathcal R}+\cdots)$, while the prefactor contributes $e^{-2\Phi}\to e^{-2\tilde\Phi}$ (the $\Phi_0$ absorbs into the coupling). So
$$ \sqrt{-G}\,e^{-2\Phi}\,\mathcal R[G] \;=\; e^{\,D\omega-2\omega-2\tilde\Phi}\,\sqrt{-\tilde G}\,\tilde{\mathcal R}+\cdots, $$
and the exponent is $(D-2)\,\omega-2\tilde\Phi$. Choosing $\omega=\dfrac{2\tilde\Phi}{D-2}$ makes it vanish identically — the dilaton is expelled from the coefficient of $\tilde{\mathcal R}$. That is the *only* choice that does so, which is why the exponent is fixed.

Carrying the same rescaling through the rest of the action (and dropping a total derivative), the $D=26$ result is
$$ S=\frac{1}{2\kappa^2}\int d^{26}X\,\sqrt{-\tilde G}\Big(\tilde{\mathcal R}-\tfrac{1}{12}e^{-\tilde\Phi/3}H^2-\tfrac16\,\partial_\mu\tilde\Phi\,\partial^\mu\tilde\Phi\Big). $$
Now the gravity term is standard Einstein–Hilbert and the dilaton kinetic term has the healthy sign. Newton's constant emerges with the string coupling baked in:
$$ 8\pi G_N=\kappa^2=\kappa_0^2\,e^{2\Phi_0}\sim \ell_s^{24}\,g_s^2. $$
String frame and Einstein frame are the *same physics* — just two ways of packaging the fields. The mere fact that there are two natural metrics to choose from is possible only because a massless scalar $\Phi$ exists to mix into the definition of length.

## Compactification payoff: KK reduction of all three

Curl up one direction on a circle (see [[Toroidal compactification]]). A 25d observer sees each 26d field split according to whether its indices point along the circle:
- $G_{\mu\nu}\to$ a 25d metric $\tilde G_{\mu\nu}$, a $U(1)$ gauge field $A_\mu=G_{\mu,25}$ (the **KK photon**), and a scalar $\sigma=G_{25,25}$ (the radius modulus).
- $B_{\mu\nu}\to$ a 25d $B_{\mu\nu}$ and a *second* $U(1)$ gauge field $\tilde A_\mu=B_{\mu,25}$.
- $\Phi\to$ a 25d scalar $\Phi$ (a scalar reduces to a scalar).

So a single graviton in 26d yields **gravity + electromagnetism + a scalar** in 25d — the original Kaluza–Klein miracle, with Maxwell theory literally falling out of higher-dimensional gravity. The two $U(1)$'s (from $G$ and from $B$) are exactly the pair that gets enhanced to $SU(2)\times SU(2)$ at the self-dual radius in [[T-duality]].

## Under T-duality: the whole package transforms

T-duality is not "metric only." Because $G$, $B$, and $\Phi$ together define the sigma model, the duality acts on all three at once. When the coordinate along a circle isometry is dualized, the coefficient of $(\partial y)^2$ inverts (this is the $R\mapsto\alpha'/R$ of [[T-duality]]), metric and $B$ cross-terms trade places, and — because dualizing means doing a Gaussian path integral over a worldsheet gauge field — the leftover determinant shifts the dilaton:
$$ \tilde\Phi=\Phi-\tfrac12\log G_{yy}. $$
For a plain rectangular circle with $G_{yy}=R^2/\alpha'$ and no cross-terms this collapses to the familiar rules
$$ R\mapsto \frac{\alpha'}{R},\qquad g_s\mapsto \frac{\sqrt{\alpha'}\,g_s}{R}, $$
the second being just $e^{\tilde\Phi}$ with the shift above. *The dilaton must move so that observers on the two dual circles measure the same low-energy physics* — the $R/g_s^2$ in front of the reduced action stays put. The full determinant/holonomy derivation lives in [[T-duality]].

## Open questions
- The dilaton's T-duality shift is quoted from the Gaussian-integral picture. The complete determinant/Jacobian and global-holonomy proof is deferred to [[T-duality]].
- Nothing in this tree-level bosonic action fixes $\Phi_0$ (no dilaton potential). Stabilizing the string coupling requires ingredients — fluxes, superstring effects — outside this bosonic pass.

## Exercise

The Einstein-frame rescaling $\tilde G_{\mu\nu}=e^{-4\tilde\Phi/(D-2)}G_{\mu\nu}$ is tuned to remove the dilaton from the coefficient of $\tilde{\mathcal R}$. Suppose a careless student instead used the exponent with the **wrong sign**, $\tilde G_{\mu\nu}=e^{+4\tilde\Phi/(D-2)}G_{\mu\nu}$. What exponential factor is then left multiplying $\sqrt{-\tilde G}\,\tilde{\mathcal R}$ in the action, and why does this *fail* to reach Einstein frame? Give the answer for general $D$, then evaluate at $D=26$.

> [!success]- Solution
> With the wrong sign, the inverse relation is $G_{\mu\nu}=e^{2\omega}\tilde G_{\mu\nu}$ with $\omega=-\dfrac{2\tilde\Phi}{D-2}$ (opposite to the correct $\omega=+\dfrac{2\tilde\Phi}{D-2}$).
>
> Transforming the Einstein–Hilbert term exactly as in the note: $\sqrt{-G}=e^{D\omega}\sqrt{-\tilde G}$, $\mathcal R[G]=e^{-2\omega}\tilde{\mathcal R}+\cdots$, and the prefactor gives $e^{-2\tilde\Phi}$. The total exponent multiplying $\sqrt{-\tilde G}\,\tilde{\mathcal R}$ is
> $$ (D-2)\omega-2\tilde\Phi = (D-2)\!\left(-\tfrac{2\tilde\Phi}{D-2}\right)-2\tilde\Phi = -2\tilde\Phi-2\tilde\Phi = -4\tilde\Phi. $$
> So instead of cancelling, the dilaton dependence **doubles**: the gravity term becomes
> $$ e^{-4\tilde\Phi}\,\sqrt{-\tilde G}\,\tilde{\mathcal R}. $$
> This is worse than string frame ($e^{-2\Phi}$), not better — the dilaton is still (more strongly) glued to the coefficient of the curvature, so the graviton is not canonically normalized and we are not in Einstein frame. Only the exponent that makes $(D-2)\omega-2\tilde\Phi=0$, i.e. the $+$ sign, works. At $D=26$ the correct rescaling is $\tilde G_{\mu\nu}=e^{-\tilde\Phi/6}G_{\mu\nu}$ (since $4/(D-2)=4/24=1/6$); the wrong-sign version $e^{+\tilde\Phi/6}G_{\mu\nu}$ leaves the factor $e^{-4\tilde\Phi}$ above.
