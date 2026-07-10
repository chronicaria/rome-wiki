---
title: 05 — Currents, Constraints, and Gauge Redundancy (Overview)
number: "5.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, currents-overview]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every equation in a physical theory is one of three kinds — a *symmetry* that manufactures a conserved current, a *constraint* that tests whether your data are even legal, or a *gauge choice* that was never physics at all — and learning to sort them is the bookkeeping you need before quantizing the string.

## One balance sheet, two questions

You already own the master image from applied math: a **conservation law is a balance sheet.** The amount of stuff inside a region can change only because stuff crosses the boundary. Written locally that is $\partial_t\rho + \nabla\cdot\vec j = 0$; written globally it is $dQ/dt = -(\text{flux out})$. One equation, two readings.

This module takes that single template and asks two questions physics forces on you, which applied math usually lets you skip:

1. **Where did the balance law come from?** Answer: a continuous *symmetry*. Noether's theorem is a machine — feed it a symmetry, out comes a current that is automatically divergence-free on-shell. Translation symmetry feeds it, out comes the stress-energy tensor: the balance sheet for energy and momentum themselves.

2. **Which symbols in my equations are real, and which are just my choice of labels?** Some equations do not evolve anything; they *forbid* illegal initial data (**constraints**). And some of your variables were never physical to begin with — they are surplus notation, and picking convenient values for them is **gauge fixing.**

One claim ties the module together: **symmetries and redundancies are the same machine run in opposite directions.** A symmetry moves you between genuinely *different* physical states and hands you a conserved charge. A redundancy moves you between *identical* descriptions of *one* state and hands you a constraint. Same invariance principle; the charge and the constraint are two faces of it.

The three objects, stated once each:
- A conserved current is a local balance sheet; Noether's theorem prints one for every continuous symmetry, and translation symmetry prints the stress-energy tensor.
- A constraint is not a law of motion but a filter that rejects illegal states, and it appears precisely when your description carries extra, physically meaningless labels.
- Gauge fixing spends those meaningless labels on convenience; done right it changes nothing physical, and checking that "nothing physical changed" survives quantization is what later forces $D=26$.

## Why this module matters

For the *string* specifically, this bookkeeping is not optional decoration — it is where the string's physics lives:

- **String momentum is a worldsheet current.** For a particle in a field theory, a current $j^\alpha$ flows through all of spacetime. For a string, the "world" you integrate over is not spacetime — it is the 2D sheet $(\tau,\sigma)$ the string sweeps out. Target-space translations $\delta X^\mu = \epsilon^\mu$ feed Noether's machine and out comes $\mathcal P^\alpha_\mu$: the density and along-string flux of spacetime momentum, living on the sheet.
- **The constraints ARE the string's equations of tension.** Reparameterizing the worldsheet is a redundancy, so the string carries two constraints at every point. Classically, once the grid on the sheet is conformal, they say the left- and right-moving tangent directions are null in spacetime; quantized, they become the [[Virasoro constraints]] that select physical states and set the critical dimension.
- **Light-cone gauge is the payoff.** Gauge-fixing plus the constraints solve away all the unphysical coordinates, leaving only the $D-2$ transverse vibrations — exactly the degrees of freedom we quantize. That this gauge is *legal* (Lorentz invariance survives quantization) is the anomaly check behind $D=26$.

So this module is the last structural layer before quantization: it names what flows, what is forbidden, and what was only a coordinate choice.

## The chain of ideas

Read the sublessons in order; each is one link in the same argument.

- 5.1 [[Current versus charge]] — the balance-sheet picture made precise: current as local flux, charge as its integrated density, and **Noether's machine** that turns any continuous symmetry into a divergence-free current. Includes the total-derivative refinement ($\delta\mathcal L = \partial_\alpha K^\alpha$ still counts as a symmetry) that translations need.
- 5.2 [[Stress-energy tensor as momentum flow]] — run the machine on *translations*. The current $\Theta^\alpha{}_\beta$ has two indices for a reason: upper $\alpha$ is the direction of flow, lower $\beta$ labels *which* momentum is flowing. Worked out fully for the free scalar; $\Theta^0{}_0$ is the (positive) energy density.
- 5.3 [[World-sheet momentum current]] — the same derivation for the string. Why $\mathcal P^\tau_\mu$ is momentum *density* and $\mathcal P^\sigma_\mu$ is momentum *flux* through the endpoints, and why momentum can be measured through *any* curve crossing the sheet, not just a constant-$\tau$ slice.
- 5.4 [[Constraints as restrictions on motion]] — the machine run backwards. Reparameterization redundancy forces the particle's mass-shell $p^2+m^2c^2=0$ (mostly-plus signature, keeping $c$) and the string's two local constraints $\mathcal P^\tau\!\cdot X'=0$, $(\mathcal P^\tau)^2+\frac{T_0^2}{c^2}X'^2=0$ — the classical seeds of Virasoro.
- 5.5 [[Gauge fixing as choosing a representative]] — redundancy as an equivalence relation, physics as the quotient $\mathcal D/G$. Static gauge and light-cone gauge as two concrete representative choices, and the warning that gauge fixing can *hide* a symmetry whose survival must be rechecked after quantization.

Recurring tools linked outward: [[Noether's theorem]], [[Light-cone gauge]], [[Mass-shell relation]], [[Virasoro constraints]].

## The headline table

The whole module is one sorting rule. Every equation you meet is exactly one of these three:

| kind of equation | comes from | tells you | string example |
|---|---|---|---|
| **conserved current** $\partial_\alpha j^\alpha=0$ | a continuous **symmetry** (moves between *different* states) | a local balance sheet $\Rightarrow$ a globally conserved charge | translation $\delta X^\mu=\epsilon^\mu \Rightarrow$ momentum current $\mathcal P^\alpha_\mu$ |
| **constraint** | a **redundancy** (moves between *identical* descriptions) | which initial data are legal — a test, not an evolution | reparam. invariance $\Rightarrow$ $\mathcal P^\tau\!\cdot X'=0,\ (\mathcal P^\tau)^2+\frac{T_0^2}{c^2}X'^2=0$ |
| **gauge choice** | *spending* a redundancy | nothing physical — a convenient label | static gauge $X^0=c\tau$; light-cone $X^+\propto\tau$ |

The unifying pattern: **symmetry $\to$ charge, redundancy $\to$ constraint, and gauge fixing spends the redundancy without touching the physics.** Sort every equation this way and string quantization stops being a fog of formulas.

## Open questions

- The canonical Noether tensor $\Theta^\alpha{}_\beta$ built here is *not* symmetric in general and is not the object that later couples to gravity. Reconciling it with the symmetric Polyakov worldsheet tensor $T_{\alpha\beta}$ (obtained by varying the worldsheet metric) and with the [[Virasoro constraints]] is deferred to the quantization modules.
- Lorentz symmetry gives a *second* conserved current, the angular-momentum current $\mathcal M^\alpha_{\mu\nu}=X_\mu\mathcal P^\alpha_\nu-X_\nu\mathcal P^\alpha_\mu$. It is a straightforward rerun of the translation derivation and may deserve its own atomic note before the quantum Lorentz-anomaly discussion, where its charges test whether $D=26$.

## Exercise

Reconstruct the module's central object from a blank page. Take a translation-invariant scalar Lagrangian density $\mathcal L(\partial_\alpha\phi)$ with no explicit coordinate dependence. Run Noether's machine on a *spacetime translation* and derive the conserved canonical stress-energy tensor $\Theta^\alpha{}_\beta$; check it is conserved on-shell; say what each index means and which component is the (positive) energy density. Then explain in one sentence why a *string* target-space translation $\delta X^\mu=\epsilon^\mu$ gives the worldsheet current $\mathcal P^\alpha_\mu$ *without* any total-derivative subtraction.

> [!success]- Solution
> **How a translation acts on the field.** A spacetime translation shifts the *argument* of the field: the transformed field takes at $x$ the value the old field had at the shifted point, $\phi(x)\mapsto\phi(x+\epsilon)$, so to first order the field value at a fixed point changes by
> $$\delta\phi=\epsilon^\beta\partial_\beta\phi,\qquad \delta(\partial_\alpha\phi)=\epsilon^\beta\partial_\alpha\partial_\beta\phi.$$
> (The opposite map $\phi(x)\mapsto\phi(x-\epsilon)$, which drags the profile forward by $\epsilon$, gives $\delta\phi=-\epsilon^\beta\partial_\beta\phi$ and flips the overall sign of the current; we take the sign that makes the energy density come out positive.) The index $\beta$ labels *which* translation direction — one symmetry per direction, so the current will carry a $\beta$ index.
>
> **This is a total-derivative symmetry.** Because $\mathcal L$ depends on position only through $\partial\phi$,
> $$\delta\mathcal L=\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\epsilon^\beta\partial_\alpha\partial_\beta\phi=\epsilon^\beta\partial_\beta\mathcal L=\partial_\alpha\!\big(\epsilon^\beta\,\delta^\alpha_\beta\,\mathcal L\big).$$
> So $\mathcal L$ is *not* strictly invariant — it changes by the total derivative $\partial_\alpha(\epsilon^\beta K^\alpha{}_\beta)$ with $K^\alpha{}_\beta=\delta^\alpha_\beta\mathcal L$. The action is still invariant (the boundary term drops), so it still counts as a symmetry.
>
> **Apply the total-derivative Noether rule** $\epsilon^\beta j^\alpha{}_\beta=\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\delta\phi-\epsilon^\beta K^\alpha{}_\beta$, the symmetry parameter here being labeled by the translation direction $\beta$. Substituting $\delta\phi=\epsilon^\beta\partial_\beta\phi$ and stripping the arbitrary $\epsilon^\beta$:
> $$\boxed{\;\Theta^\alpha{}_\beta=\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\,\partial_\beta\phi-\delta^\alpha_\beta\,\mathcal L,\qquad \partial_\alpha\Theta^\alpha{}_\beta=0.\;}$$
> The $-\delta^\alpha_\beta\mathcal L$ is exactly the total-derivative subtraction; forgetting it is the classic error and leaves a current that is *not* conserved.
>
> **Conservation check (on-shell).**
> $$\partial_\alpha\Theta^\alpha{}_\beta=\underbrace{\partial_\alpha\!\Big(\tfrac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\Big)}_{=\,\partial\mathcal L/\partial\phi\ =\ 0}\partial_\beta\phi+\frac{\partial\mathcal L}{\partial(\partial_\alpha\phi)}\partial_\alpha\partial_\beta\phi-\partial_\beta\mathcal L=0.$$
> The first term vanishes by Euler–Lagrange (here $\partial\mathcal L/\partial\phi=0$); the middle term is precisely $\partial_\beta\mathcal L$ when $\mathcal L=\mathcal L(\partial\phi)$, cancelling the last. Conserved.
>
> **What the indices mean.** Upper $\alpha$ = direction of flow; lower $\beta$ = which momentum component is flowing. So $\Theta^0{}_0$ is the energy density and $\Theta^i{}_\beta$ the flux of $\beta$-momentum through a surface normal to $i$ (the "stresses"); $\Theta^0{}_i$ is the momentum density up to an overall sign the variation convention drags along — with this choice of $\delta\phi$ it is *minus* the physical momentum density, as 5.2 [[Stress-energy tensor as momentum flow]] checks on a traveling wave.
>
> **Positive energy for the free scalar.** With mostly-plus $\eta_{\mu\nu}=\mathrm{diag}(-,+,\dots,+)$ and $\mathcal L=-\tfrac12\partial^\rho\phi\,\partial_\rho\phi$, we get $\partial\mathcal L/\partial(\partial_\alpha\phi)=-\partial^\alpha\phi$, so
> $$\Theta^\alpha{}_\beta=-\partial^\alpha\phi\,\partial_\beta\phi+\tfrac12\delta^\alpha_\beta\,\partial^\rho\phi\,\partial_\rho\phi,\qquad \Theta^0{}_0=\tfrac12\dot\phi^2+\tfrac12|\nabla\phi|^2\ge0.$$
> The sign works because $\partial^0\phi=-\partial_0\phi$ in mostly-plus signature — the two minus signs conspire to give a positive density.
>
> **Why the string case needs no subtraction.** A *target-space* translation is $\delta X^\mu=\epsilon^\mu$, a constant, so $\delta(\partial_\alpha X^\mu)=\partial_\alpha\epsilon^\mu=0$: the Nambu–Goto density (which depends only on $\partial_\alpha X^\mu$) is *strictly* invariant, $\delta\mathcal L=0$. With no total derivative to cancel, the current is just the bare Noether term $\mathcal P^\alpha_\mu=\partial\mathcal L/\partial(\partial_\alpha X^\mu)$ — no $-\delta^\alpha_\beta\mathcal L$ piece. The scalar translation drags the field's *argument* (position); the string translation shifts the *target value* $X^\mu$ directly, and that single difference is why one carries the subtraction and the other does not.
