---
title: Stress-energy tensor as momentum flow
number: "5.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, stress-energy]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The stress-energy tensor is what you get when you run Noether's machine on translation symmetry: it is the bookkeeping ledger for energy and momentum, tracking how much sits at each point and how fast it flows past each surface.

> Prereq: [[Current versus charge]] — currents, charges, and the total-derivative Noether rule used below.

## Why two indices

Electric charge has one conserved number and so one current $j^\alpha$: a density $j^0$ plus a spatial flux $\vec\jmath$. **Energy-momentum is a whole vector of conserved numbers** — one for energy, one for each momentum component — so it needs a whole vector of currents, stacked into a two-index object $\Theta^\alpha{}_\beta$. Read it as a table: the lower index picks *which* conserved quantity, the upper index picks *which direction it flows*:

$$\Theta^\alpha{}_\beta = \text{"flow of }\beta\text{-momentum in the }\alpha\text{ direction."}$$

Everything below either derives this object or reads entries off the table.

Why a whole vector? Translation is not one symmetry but a *family*: shifting along $x^0$, along $x^1$, and so on are all separate symmetries, each with its own conserved charge. Label the charge by $\beta$. Each charge, being conserved, obeys its own continuity equation — its own current with a flow index $\alpha$. Bolt the flow index on top of the charge label and you get $\Theta^\alpha{}_\beta$, a stack of continuity equations $\partial_\alpha\Theta^\alpha{}_\beta = 0$, one per $\beta$.

The rows and columns have plain meanings. Fix the conserved quantity $\beta$ and scan the flow index:

$$
\Theta^0{}_\beta = \text{density of }\beta\text{-momentum},
\qquad
\Theta^i{}_\beta = \text{flux of }\beta\text{-momentum through a surface normal to }i. \tag{1}
$$

The upper index is a spacetime *direction*; the lower index is a *label*, not a direction. Continuum mechanics stacks conservation laws the same way: a column of densities and a matrix of fluxes, one flux row per conserved quantity.

Fix the sign convention once. Under a translation by $\epsilon$ we compare the field with its own value one step ahead,
$$\delta\phi(x) = \phi(x+\epsilon) - \phi(x) = \epsilon^\beta\partial_\beta\phi, \tag{2}$$
which is the same as dragging the whole field configuration by $-\epsilon$. The signature is mostly-plus throughout, $\eta_{\alpha\beta} = \mathrm{diag}(-1,+1,\dots,+1)$. The opposite choice — dragging by $+\epsilon$, so $\delta\phi = -\epsilon^\beta\partial_\beta\phi$ — flips the overall sign of $\Theta^\alpha{}_\beta$ and nothing physical. We take (2) because it makes the energy density $\Theta^0{}_0$ come out positive; the price shows up in the momentum entries, and the exercise reads it off exactly.

## Deriving $\Theta^\alpha{}_\beta$

Take $\mathcal L = \mathcal L(\partial_\alpha\phi)$ with no explicit coordinate dependence — the field enters only through its derivatives. The variation (2) commutes with derivatives:
$$\delta(\partial_\alpha\phi) = \partial_\alpha(\delta\phi) = \epsilon^\beta\,\partial_\alpha\partial_\beta\phi.$$

Now vary $\mathcal L$. Because it depends on position only through $\partial\phi$, the chain rule collapses to a plain gradient of $\mathcal L$:
$$
\delta\mathcal L
= \frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\epsilon^\beta\partial_\alpha\partial_\beta\phi
= \epsilon^\beta\partial_\beta\mathcal L
= \partial_\alpha\!\big(\epsilon^\beta\,\delta^\alpha_\beta\,\mathcal L\big).
$$

So $\mathcal L$ is *not* strictly invariant — it changes by a total derivative. This is the key move: translation shifts the Lagrangian's value from point to point, and that shift is exactly a divergence, $\delta\mathcal L = \partial_\alpha(\epsilon^\beta K^\alpha{}_\beta)$ with $K^\alpha{}_\beta = \delta^\alpha_\beta\mathcal L$. The action still changes only by a boundary term, so it is still a symmetry — and the total-derivative Noether rule ([[Current versus charge]]) says the honest conserved current is the naive current *minus* $K$:
$$
\epsilon^\beta\Theta^\alpha{}_\beta
= \frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\delta\phi
- \epsilon^\beta\,\delta^\alpha_\beta\,\mathcal L.
$$
Insert $\delta\phi = \epsilon^\beta\partial_\beta\phi$ and strip the arbitrary $\epsilon^\beta$:

$$
\boxed{\;
\Theta^\alpha{}_\beta
= \frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\partial_\beta\phi
- \delta^\alpha_\beta\,\mathcal L,
\qquad
\partial_\alpha\Theta^\alpha{}_\beta = 0.
\;} \tag{3}
$$

The subtracted $-\delta^\alpha_\beta\mathcal L$ is the whole reason a stress tensor differs from the naive "momentum times field-gradient" guess. Drop it and conservation fails — it is the single most common mistake here.

Conservation follows in one line. Differentiate (3):
$$
\partial_\alpha\Theta^\alpha{}_\beta
= \underbrace{\partial_\alpha\!\Big(\tfrac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\Big)}_{=\,\partial\mathcal L/\partial\phi}\,\partial_\beta\phi
+ \frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\partial_\alpha\partial_\beta\phi
- \partial_\beta\mathcal L.
$$
The underbraced combination equals $\partial\mathcal L/\partial\phi$ by the Euler–Lagrange equation — and that is $0$ here, since $\mathcal L$ has no bare $\phi$. The middle term is exactly $\partial_\beta\mathcal L$ (the chain rule run backward), cancelling the last term. So $\partial_\alpha\Theta^\alpha{}_\beta = 0$ on shell. The conservation of energy-momentum is the equation of motion in disguise.

## Worked example: the free massless scalar

$$
\mathcal L = -\tfrac12\,\eta^{\rho\lambda}\partial_\rho\phi\,\partial_\lambda\phi
= -\tfrac12\,\partial^\rho\phi\,\partial_\rho\phi.
$$
Units are $c=1$ from here on, so $x^0 = t$ and $\dot\phi \equiv \partial_0\phi$; we work in four spacetime dimensions for concreteness. The $-\tfrac12$ is not arbitrary: in mostly-plus the time-derivative term carries a $+\tfrac12\dot\phi^2$, giving positive kinetic energy (checked below). Then
$$
\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)} = -\,\partial^\alpha\phi,
\qquad
\Theta^\alpha{}_\beta
= -\,\partial^\alpha\phi\,\partial_\beta\phi
+ \tfrac12\,\delta^\alpha_\beta\,\partial^\rho\phi\,\partial_\rho\phi. \tag{4}
$$

The energy density is the top-left entry, $\Theta^0{}_0$. In mostly-plus, $\partial^0 = \eta^{00}\partial_0 = -\partial_0$, so the first term is $-\partial^0\phi\,\partial_0\phi = +\dot\phi^2$, and $\tfrac12\partial^\rho\phi\partial_\rho\phi = \tfrac12(-\dot\phi^2 + |\nabla\phi|^2)$. Adding:
$$
\Theta^0{}_0 = \dot\phi^2 - \tfrac12\dot\phi^2 + \tfrac12|\nabla\phi|^2
= \tfrac12\dot\phi^2 + \tfrac12|\nabla\phi|^2 \;\ge\; 0. \tag{5}
$$
Kinetic plus gradient (potential) energy, both positive — exactly what a field energy density should be. Both ingredients matter: without the $-\delta^\alpha_\beta\mathcal L$ subtraction the entry would be $\dot\phi^2$ — positive, but not the energy, the gradient term lost — and the sign of the kinetic term rests on the metric factor $\partial^0 = -\partial_0$.

Conservation for this $\mathcal L$:
$$
\partial_\alpha\Theta^\alpha{}_\beta
= -(\Box\phi)\,\partial_\beta\phi
\;\underbrace{-\,\partial^\alpha\phi\,\partial_\alpha\partial_\beta\phi + \partial^\rho\phi\,\partial_\beta\partial_\rho\phi}_{=\,0}
= -(\Box\phi)\,\partial_\beta\phi.
$$
The two derivative terms cancel: relabel the dummy $\rho\to\alpha$ and use $\partial_\alpha\partial_\beta = \partial_\beta\partial_\alpha$. Here $\Box \equiv \partial_\alpha\partial^\alpha$, and the Euler–Lagrange equation for this $\mathcal L$ is exactly the wave equation $\Box\phi = 0$ — so on shell $\partial_\alpha\Theta^\alpha{}_\beta = 0$ for every $\beta$. The scalar's energy and all three momenta are conserved.

## What "stress" means

Nothing mystical. Momentum can cross a surface just as charge can, and a spatial-upper entry $\Theta^i{}_j$ counts the flux of $j$-momentum through a surface normal to $i$. In continuum mechanics those entries *are* the stress tensor — pressure on the diagonal, shear off it — up to the same overall sign that convention (2) locks into every entry. The name "stress-energy tensor" is literal: the $\Theta^0$ row holds energy and momentum densities, the $\Theta^i$ rows hold their mechanical stresses.

One thing to keep straight for the string chapters ahead. This $\Theta^\alpha{}_\beta$ is the *canonical* Noether tensor for translating the coordinates a field theory lives on. The string's [[World-sheet momentum current]] instead translates the *target-space* coordinates $X^\mu\mapsto X^\mu + \epsilon^\mu$ and yields $\mathcal P^\alpha_\mu$ — a related but distinct object, whose lower index is a spacetime label and whose upper index is a worldsheet direction.

## Open questions

- The canonical $\Theta^\alpha{}_\beta$ from (3) need not come out symmetric ($\Theta^{\alpha\beta}\ne\Theta^{\beta\alpha}$) for fields with spin; a "Belinfante improvement" fixes this. Harmless for the scalar, but it matters when comparing to the symmetric Polyakov worldsheet tensor $T_{\alpha\beta}$ and the Virasoro constraints later.
- Most QFT texts use mostly-minus signature, where the same formula (3) gives a positive $\Theta^0{}_0$ *and* charges $\int\Theta^0{}_\beta\,d^3x = +p_\beta$ simultaneously. Rerun the exercise in that signature and watch the sign tension it exposes dissolve.

## Exercise

Using (4) and mostly-plus, compute the **momentum-density** entry $\Theta^0{}_i$ in terms of $\dot\phi \equiv \partial_0\phi$ and $\partial_i\phi$. Then evaluate it on a right-moving wave $\phi = f(x^1 - x^0)$ and decide: does the sign of $\Theta^0{}_1$ point along or against the direction the wave travels? What does that tell you about reading $\Theta^0{}_i$ as "the" momentum density?

> [!success]- Solution
> Set $\alpha=0$, $\beta=i$ in (4). Since $i$ is spatial, $\delta^0_i = 0$ kills the second term, leaving
> $$\Theta^0{}_i = -\,\partial^0\phi\,\partial_i\phi.$$
> In mostly-plus, $\partial^0\phi = \eta^{00}\partial_0\phi = -\partial_0\phi = -\dot\phi$, so
> $$\boxed{\;\Theta^0{}_i = \dot\phi\,\partial_i\phi.\;}$$
> That single metric sign is the entire computation: (1) fixes each entry's *role*, but the overall sign is locked by convention (2).
>
> Now the sign check. For the right-mover $\phi = f(x^1 - x^0)$: $\partial_0\phi = -f'$ and $\partial_1\phi = +f'$, so
> $$\Theta^0{}_1 = \dot\phi\,\partial_1\phi = (-f')(f') = -[f']^2 \le 0.$$
> Meanwhile (5) gives the wave's energy density $\Theta^0{}_0 = \tfrac12[f']^2 + \tfrac12[f']^2 = [f']^2$, so the packet carries energy $E = \int[f']^2\,d^3x$; a massless packet moving in $+x^1$ carries momentum $p^1 = E > 0$, along its motion. So $\Theta^0{}_1$ points *against* the physical momentum, with exactly matching magnitude: $\int\Theta^0{}_1\,d^3x = -E = -p^1 = -p_1$ (mostly-plus leaves spatial indices alone).
>
> This is the price of convention (2). The charges conserved by (3) assemble into $\int\Theta^0{}_\beta\,d^3x = -p_\beta$: for $\beta=0$ that is $-p_0 = +E$ — exactly why $\Theta^0{}_0$ came out *positive* in (5) — and for $\beta=i$ it is $-p_i$, the flipped sign found above. Flipping the sign of (2) would make $\int\Theta^0{}_i\,d^3x$ the momentum directly, but would turn $\Theta^0{}_0$ into $-\tfrac12\dot\phi^2 - \tfrac12|\nabla\phi|^2$. In mostly-plus no overall sign makes both entries look nice, because lowering an index on $p^\beta$ costs a sign for $\beta=0$ but not for $\beta=i$. The reliable reading is covariant: with (2), $\Theta^0{}_\beta$ is the density of $-p_\beta$, all components at once. So $\Theta^0{}_i$ *is* the momentum density up to a convention-locked overall sign — and when the sign matters, test it on a wave, exactly as here.
