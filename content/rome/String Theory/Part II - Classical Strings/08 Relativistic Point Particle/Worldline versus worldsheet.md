---
title: Worldline versus worldsheet
number: "8.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, worldsheet]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every structural feature of the relativistic point particle — geometric action, reparameterization redundancy, gauge fixing, mass-shell constraint, field coupling — lifts one dimension up to the string; that is why the point particle is the right warm-up.

## One rule: the action is the size of the swept shape

A point particle is a dot; a string is a tiny loop or segment. Pushed through time, each sweeps out a shape: the dot a *curve* (its worldline), the string a *surface* (its worldsheet). A single rule then fixes the entire theory of each object — **the action is the geometric size of the swept shape**: proper length for the curve, proper area for the surface.

$$
\text{0-dim particle}\ \xrightarrow{\ \text{sweeps}\ }\ \text{1-dim worldline},
\qquad S=-mc\int ds
$$
$$
\text{1-dim string}\ \xrightarrow{\ \text{sweeps}\ }\ \text{2-dim worldsheet},
\qquad S=-\frac{T_0}{c}\int dA
$$

The reason the free particle extremizes proper length is, word for word, the reason the free string extremizes proper area — the same sentence with "length" swapped for "area." This note works out that one swap, and it is why the course spends a module on a particle: the string action is too unfamiliar to guess cold, yet it is a near-mechanical lift of the particle action once the dimensional pattern is visible. The recipe is identical both times — take the reparameterization-invariant geometric measure of the swept object and multiply by the constant with the right units. See [[Worldsheet and induced metric]] for the surface and its geometry.

## The dictionary

Each row translates one feature of the particle into its worldsheet image.

| Feature | Point particle (worldline) | String (worldsheet) |
|---|---|---|
| Object swept | 1-dim curve $\mathcal{P}$ | 2-dim surface $\Sigma$ |
| Parameters | one: $\tau$ | two: $(\tau,\sigma)$ |
| Embedding map | $x^\mu(\tau)$ | $X^\mu(\tau,\sigma)$ |
| Geometric measure | proper length $\int ds$ (proper time $\int ds/c$) | proper area $\int dA$ |
| Action | $S=-mc\int ds$ | $S=-\dfrac{T_0}{c}\int dA$ (Nambu–Goto) |
| Dimensionful constant | rest mass $m$ | tension $T_0$ (energy/length) |
| Induced metric | $\gamma_{\tau\tau}=\eta_{\mu\nu}\dot x^\mu\dot x^\nu$ (one number) | $\gamma_{\alpha\beta}=\eta_{\mu\nu}\partial_\alpha X^\mu\partial_\beta X^\nu$ ($2\times2$) |
| Redundancy | reparam. $\tau\to\tau'$ (1 function) | reparam. $(\tau,\sigma)\to(\tau',\sigma')$ (2 functions) |
| Gauge choices | proper-time / static / light-cone | conformal / light-cone |
| Equation of motion | $dp_\mu/d\tau=0$ | wave equation + boundary conditions |
| Constraint | mass shell $p^\mu p_\mu=-m^2c^2$ (one) | Virasoro constraints (infinite tower) |
| Couples to field | $A_\mu$ (one index) | $B_{\mu\nu}$ (two indices) |

Each row unpacks in a sibling note: [[Proper length and proper time]], [[Proper-time action]], [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance]], [[Gauge choices for the worldline parameter]], [[Free particle equation of motion]], [[Mass-shell relation]], [[Nambu-Goto action]], [[Worldsheet and induced metric]], [[Kalb-Ramond field]].

## The five parallels that matter

The table asserts; five of its rows deserve proof rather than assertion.

**1. Geometric action.** The particle action is (rest energy) $\times$ (proper time): since $ds$ is proper length and $ds/c$ is proper time, $S = -mc^2\!\int (ds/c) = -mc\int ds$. The simplest Lorentz-invariant number a curve carries is its length, so length is the inevitable first guess for the action — and it is correct. A surface's analogous invariant is its area, so the string action is $S = -\frac{T_0}{c}\int dA$, the [[Nambu-Goto action]]. The prefactor $mc$ has units of momentum, and momentum $\times$ length $=$ action; $T_0/c$ has units of action per area. Same idea, one dimension up.

**2. Reparameterization invariance.** A parameter is a ruler laid along the shape; sliding the ruler cannot change the shape's size. Concretely, the particle integrand
$$
S = -mc\int_{\tau_i}^{\tau_f}\sqrt{-\eta_{\mu\nu}\,\tfrac{dx^\mu}{d\tau}\tfrac{dx^\nu}{d\tau}}\;d\tau
$$
(mostly-plus signature, so the argument of the root is positive for timelike motion) is homogeneous of degree one in the velocities $dx^\mu/d\tau$: under $\tau\to\tau'$, one factor of the Jacobian $d\tau'/d\tau$ pulls out of the square root and one is eaten converting $d\tau\to d\tau'$. They cancel, so $S$ is unchanged — see [[Part II - Classical Strings/08 Relativistic Point Particle/Reparameterization invariance]]. Nambu–Goto is built with the same homogeneity, so the identical cancellation kills the 2-dim Jacobian $\partial(\tau',\sigma')/\partial(\tau,\sigma)$. Relabeling a curve becomes relabeling a surface; the redundancy grows from one arbitrary function to two.

**3. Gauge fixing.** Redundancy is freedom you get to spend. The particle's one function lets you pick $\tau=s$ (proper-time gauge, giving the clean $d^2x^\mu/ds^2=0$), or $\tau=t$ (static gauge, recovering Newtonian $\vec p$ and $E$), or $\tau\propto x^+$ (light-cone) — see [[Gauge choices for the worldline parameter]]. The string's two functions fix two conditions at once: $X^+\propto\tau$ plus a condition spreading $p^+$ uniformly along $\sigma$. For the particle a gauge choice is a convenience; for the string it is a necessity — the particle's light-cone choice is the rehearsal for the string's [[Light-cone gauge]], the move that makes quantization tractable.

**4. Equation of motion.** Varying $-mc\int ds$ gives $dp_\mu/d\tau=0$: a total $\tau$-derivative set to zero, i.e. momentum is constant along the worldline. Varying Nambu–Goto gives $\partial_\alpha(\text{worldsheet momentum density})=0$: a 2-dim divergence set to zero, i.e. a **wave equation**. The boundary term that the particle's fixed endpoints kill becomes, for the open string, genuine physical boundary conditions — and those conditions are the first hint of D-branes.

**5. Constraint from redundancy.** Reparameterization invariance is not free: it forces a constraint. For the particle, the momenta $p_\mu$ conjugate to $x^\mu$ cannot all be independent — the square-root structure of the action locks them onto the single mass shell $p^\mu p_\mu = -m^2c^2$ (see [[Mass-shell relation]]). For the string, the same invariance forces the worldsheet stress tensor to vanish — and that is one local condition per point along the string, an infinite tower: the **Virasoro constraints**. One mass becomes a whole spectrum: the particle's mass $m$ is an input, while the string's mass is an output built from its vibration modes.

## Index counting: why strings need $B_{\mu\nu}$

This is the deepest and least obvious parallel. A charged particle couples to the electromagnetic potential through
$$
\frac{q}{c}\int_\mathcal{P} A_\mu\,dx^\mu ,
$$
the integral of a **one-index** field along the **one-dimensional** worldline. Why one index? Because $dx^\mu$ carries exactly one spacetime index, and a Lorentz scalar needs it contracted against a field with one index. The dimension of the swept object dictates the rank of the field it can naturally couple to.

Lift this one dimension up. A worldsheet has *two* independent tangent directions, so its natural area element $dX^\mu\wedge dX^\nu$ carries **two** antisymmetric indices. A scalar therefore needs a **two-index** antisymmetric field,
$$
\int_\Sigma B_{\mu\nu}\,dX^\mu\wedge dX^\nu ,
\tag{1}
$$
and this is precisely how the antisymmetric [[Kalb-Ramond field|Kalb–Ramond field $B_{\mu\nu}$]] enters string theory. A particle sources a 1-form potential; a string sources a 2-form. The existence of $B_{\mu\nu}$ follows from nothing but the dimension of a string.

## What does *not* carry over cleanly

The analogy is a lift, not an isomorphism. Three places it genuinely breaks:

- **No proper-time gauge for the string.** A surface has no single clock; its induced metric $\gamma_{\alpha\beta}$ is a $2\times2$ matrix, not a single normalization you can set to $1$. The string's workable gauges are conformal and light-cone, not proper time.
- **The jump in constraint complexity is real, not cosmetic.** One mass-shell condition $\to$ an infinite Virasoro tower is a genuine escalation. Quantizing the tower forces a normal-ordering constant and a critical dimension ($D=26$ for the bosonic string), neither of which has any point-particle counterpart. Beyond this module.
- **The massless case.** $-mc\int ds$ collapses to zero when $m=0$, so the geometric particle action fails for a photon (though the mass-shell *constraint* survives — see [[Mass-shell relation]]). The string action does not degenerate: the constant multiplying its measure is the tension, and $T_0\neq0$. The clean fix for the particle is the auxiliary-metric formulation, the [[Polyakov action]] — deferred.

## Open questions

- The normalization and wedge-factor convention of the $B_{\mu\nu}$ coupling (1) are set in the string-charge module; here index counting only predicted its rank. → [[Kalb-Ramond field]].
- The [[Polyakov action]] gives a cleaner bridge between the particle constraint and the string constraints (both come from an auxiliary metric's equation of motion), and it repairs the massless case — but it belongs to the graduate-bridge module.

## Exercise

The dictionary claims the constant multiplying the geometric measure changes from $mc$ (particle) to $T_0/c$ (string). Verify this is forced by **units alone**, then use the same logic to predict the constant for a hypothetical **2-brane** — a membrane whose world-volume is 3-dimensional and whose "size" is a proper 3-volume. Take its defining constant to be a tension $T_2$ with units of energy per unit *area* (energy/length²).

An action has the dimensions of $\hbar$: energy $\times$ time. Give the multiplying constant in all three cases and state the pattern.

> [!success]- Solution
> Write $[S]$ for the dimensions of an action: energy $\times$ time $= \mathsf{E}\,\mathsf{T}$. The measure in each case has these dimensions:
>
> - worldline: $\int ds$ is a **length** $\mathsf{L}$;
> - worldsheet: $\int dA$ is an **area** $\mathsf{L}^2$;
> - membrane world-volume: $\int dV$ is a **3-volume** $\mathsf{L}^3$.
>
> The constant must supply whatever is left over so the product lands on $\mathsf{E}\,\mathsf{T}$. Using $\mathsf{L}=\mathsf{V}\mathsf{T}$ (velocity $\times$ time) via factors of $c$:
>
> **Particle.** Need $[k_0]\cdot\mathsf{L} = \mathsf{E}\,\mathsf{T}$, so $[k_0]=\mathsf{E}\,\mathsf{T}/\mathsf{L} = \mathsf{E}/\mathsf{V}$. With rest energy $mc^2$ and speed $c$: $k_0 = mc^2/c = mc\;\checkmark$ — matching $S=-mc\int ds$.
>
> **String.** Tension $T_0$ has units energy/length $=\mathsf{E}/\mathsf{L}$. Need $[k_1]\cdot\mathsf{L}^2=\mathsf{E}\,\mathsf{T}$, so $[k_1]=\mathsf{E}\,\mathsf{T}/\mathsf{L}^2 = (\mathsf{E}/\mathsf{L})\cdot(\mathsf{T}/\mathsf{L}) = (\mathsf{E}/\mathsf{L})/\mathsf{V}$. So $k_1 = T_0/c\;\checkmark$ — matching $S=-\frac{T_0}{c}\int dA$.
>
> **Membrane.** Tension $T_2$ has units energy/area $=\mathsf{E}/\mathsf{L}^2$. Need $[k_2]\cdot\mathsf{L}^3=\mathsf{E}\,\mathsf{T}$, so $[k_2]=\mathsf{E}\,\mathsf{T}/\mathsf{L}^3=(\mathsf{E}/\mathsf{L}^2)\cdot(\mathsf{T}/\mathsf{L})=(\mathsf{E}/\mathsf{L}^2)/\mathsf{V}$. So $k_2=T_2/c$, and
> $$ S_{\text{membrane}} = -\frac{T_2}{c}\int dV. $$
>
> **The pattern.** For a $p$-brane sweeping a $(p{+}1)$-dimensional world-volume, the constant is always (tension)$/c$, where the tension has units of energy per unit $p$-volume. Units alone fix the $1/c$; the minus sign and any dimensionless factor need the full derivation. This is exactly the dimensional lift the note describes: bump the swept dimension by one, bump the tension's spatial-density rank by one, and divide by $c$.
