---
title: World-sheet momentum current
number: "5.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, worldsheet-current]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string's spacetime momentum is a conserved charge carried entirely on the two-dimensional worldsheet, like ink painted on a moving ribbon rather than smeared through the room.

> Prereqs: [[Current versus charge]] (local flux law vs. global charge, and the Noether rule) and [[Stress-energy tensor as momentum flow]] (two-index translation currents).

## Momentum spread along the string

A point particle carries momentum $p_\mu$: one number per spacetime direction, located wherever the particle is. A string is extended, so its momentum is spread along it as a density. That density can slosh from one part of the string to another, but for a free string it never leaks away, and integrating it along the string at any instant recovers the total $p_\mu$. The object that does this bookkeeping is a current with one leg in spacetime — *which* component of momentum — and one leg on the worldsheet — *how* it flows, sitting on a piece of string or streaming past a point of it. Conservation says momentum leaving one patch of the sheet must turn up in the adjacent patch.

## Why the current lives on the worldsheet

The dynamical fields of a string are the embedding coordinates
$$ X^\mu(\tau,\sigma), $$
functions of the two worldsheet parameters $\tau$ (worldsheet time) and $\sigma$ (position along the string). The action integrates a Lagrangian density over $(\tau,\sigma)$ — **not** over target spacetime. Noether's construction produces a current that flows through the *integration domain*, so here the flow index is a worldsheet index:
$$ \mathcal P^\alpha_\mu,\qquad \alpha\in\{\tau,\sigma\}. $$
Read the two indices separately:

- the lower **target-space** index $\mu$ says *which* component of spacetime momentum is being tracked — the same role $\mu$ plays in $p_\mu$;
- the upper **worldsheet** index $\alpha$ says *how* it flows: $\mathcal P^\tau_\mu$ is the density of $\mu$-momentum along the string, and $\mathcal P^\sigma_\mu$ is the rate at which $\mu$-momentum streams along the string past a point of fixed $\sigma$.

This is the same index-splitting as the stress tensor $\Theta^\alpha{}_\beta$ of [[Stress-energy tensor as momentum flow]], with a twist: there the lower index labeled a *coordinate* translation of the world the field lives on; here it labels a *target-space* translation of where the string sits. That difference is what makes $\mu$ a spacetime index while $\alpha$ stays two-valued.

## Target-space translation is the symmetry

The Nambu–Goto density depends on the $X^\mu$ only through their derivatives $\partial_\alpha X^\mu$ — the string cares about its shape and motion, not its absolute location. So a rigid shift of the whole string,
$$ \delta X^\mu(\tau,\sigma)=\epsilon^\mu \qquad(\epsilon^\mu \text{ constant}), $$
changes nothing at all:
$$ \delta(\partial_\alpha X^\mu)=\partial_\alpha\epsilon^\mu=0 \;\Rightarrow\; \delta\mathcal L=0. $$
This is a **strict** invariance — the density is untouched, so no boundary-term subtraction is needed (contrast the coordinate-translation case, where $\delta\mathcal L$ was a total derivative). The plain Noether rule then gives the current directly:
$$
\mathcal P^\alpha_\mu
=\frac{\partial\mathcal L}{\partial(\partial_\alpha X^\mu)},
\qquad
(\mathcal P^\tau_\mu,\mathcal P^\sigma_\mu)
=\left(\frac{\partial\mathcal L}{\partial\dot X^\mu},\;\frac{\partial\mathcal L}{\partial X'^\mu}\right),
$$
writing $\dot X^\mu=\partial_\tau X^\mu$ and $X'^\mu=\partial_\sigma X^\mu$. The time component $\mathcal P^\tau_\mu=\partial\mathcal L/\partial\dot X^\mu$ is the momentum canonically conjugate to $X^\mu$ — a **momentum density**, exactly what the time slot of a momentum current ought to hold. Its explicit Nambu–Goto form is an unwieldy ratio of $\dot X\cdot X'$, $\dot X^2$, and $X'^2$; we need only its meaning, never the formula.

Conservation is the statement
$$
\boxed{\;\partial_\alpha\mathcal P^\alpha_\mu
=\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0.\;}
\tag{1}
$$
This is not an extra assumption — it *is* the string equation of motion. Euler–Lagrange for $X^\mu$ reads $\partial_\alpha\big(\partial\mathcal L/\partial(\partial_\alpha X^\mu)\big)-\partial\mathcal L/\partial X^\mu=0$, and since $\mathcal L$ has no bare $X^\mu$ the second term vanishes, leaving exactly (1). "The string obeys its equation of motion" and "spacetime momentum is locally conserved on the sheet" are the same sentence.

## Density, flux, and endpoints

At fixed worldsheet time, the total spacetime momentum is the charge obtained by integrating the density along the string,
$$
p_\mu(\tau)=\int_0^{\sigma_1}\mathcal P^\tau_\mu(\tau,\sigma)\,d\sigma,
\tag{2}
$$
with $\sigma_1=\pi$ for the open string and $\sigma_1=2\pi$ for the closed (our standing ranges). Is it actually conserved? Differentiate and feed in the local law (1):
$$
\frac{dp_\mu}{d\tau}
=\int_0^{\sigma_1}\partial_\tau\mathcal P^\tau_\mu\,d\sigma
=-\int_0^{\sigma_1}\partial_\sigma\mathcal P^\sigma_\mu\,d\sigma
=-\,\mathcal P^\sigma_\mu\Big|_{0}^{\sigma_1}.
\tag{3}
$$
The interior contribution telescoped away; **only the endpoints survive.** This exposes $\mathcal P^\sigma_\mu$ as the *flux of $\mu$-momentum out through the string ends* — the rate at which the string leaks momentum through its boundary. Whether momentum is conserved is therefore entirely a boundary question:

- **Closed string:** $\sigma=0$ and $\sigma=\sigma_1$ are the same point, so the two endpoint terms cancel by periodicity.
- **Free open string:** the free-endpoint (Neumann) boundary condition is precisely $\mathcal P^\sigma_\mu=0$ at each end — no flux can escape.

Either way the right side of (3) vanishes and
$$ \frac{dp_\mu}{d\tau}=0. $$
The lone exception: an open string ending on a D-brane with a Dirichlet direction. There $\mathcal P^\sigma_\mu$ need not vanish, so the string alone can gain or lose momentum through that end — the brane absorbs the difference, and only string-plus-brane momentum is conserved.

## Momentum as flux through *any* crossing curve

Formula (2) used a constant-$\tau$ slice, but nothing forced that choice. The stronger statement: the *same* charge is obtained by integrating the current across **any** curve $\gamma$ that cuts all the way across the worldsheet.

Along an infinitesimal oriented segment with tangent $(d\tau,d\sigma)$, the normal is $(d\sigma,-d\tau)$ — the tangent rotated a quarter turn clockwise, pointing outward when the segment belongs to a counterclockwise loop. Dotting the current $(\mathcal P^\tau_\mu,\mathcal P^\sigma_\mu)$ into that normal gives the flux crossing the segment:
$$
(\mathcal P^\tau_\mu,\mathcal P^\sigma_\mu)\cdot(d\sigma,-d\tau)
=\mathcal P^\tau_\mu\,d\sigma-\mathcal P^\sigma_\mu\,d\tau.
$$
So the momentum crossing $\gamma$ is
$$
\boxed{\;
p_\mu(\gamma)=\int_\gamma\!\big(\mathcal P^\tau_\mu\,d\sigma-\mathcal P^\sigma_\mu\,d\tau\big).
\;}
\tag{4}
$$
On a constant-$\tau$ curve traversed toward increasing $\sigma$, $d\tau=0$ and (4) collapses back to (2) — consistent.

**Why $\gamma$ can be deformed freely.** Take a contractible counterclockwise loop $\Gamma$ bounding a region $R$ of the sheet. The two-dimensional divergence theorem plus conservation (1) gives
$$
\oint_\Gamma\!\big(\mathcal P^\tau_\mu\,d\sigma-\mathcal P^\sigma_\mu\,d\tau\big)
=\int_R\!\big(\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu\big)\,d\tau\,d\sigma
=0.
$$
No source inside means no net flux out. Consequently, sliding $\gamma$ to a new curve $\gamma'$ changes $p_\mu$ only by the flux through the enclosed strip — which is zero, provided you don't sweep across a momentum-leaking boundary (an open-string end with escaping flux). This is the worldsheet cousin of Cauchy's contour deformation: the value depends on the *homotopy class* of the curve, not its exact shape. For open strings $\gamma$ must run from the $\sigma=0$ boundary to the $\sigma=\sigma_1$ boundary; for closed strings it must wind once around the cylinder in the direction of increasing $\sigma$. Those are precisely the curves that slice the whole string once.

## Why static gauge is a convenience, not the definition

Conservation (3) is phrased in worldsheet time $\tau$, but a Lorentz observer wants conservation in *their* time $t=X^0/c$ (we keep $c$ explicit in this note). In **static gauge** we pin
$$ X^0(\tau,\sigma)=c\tau, $$
so worldsheet time *is* observer time, $t=\tau$: a constant-$\tau$ slice is the string photographed at one observer-instant, and $dp_\mu/d\tau=0$ reads directly as $dp_\mu/dt=0$.

But we never needed that crutch. In an arbitrary parameterization a constant-$\tau$ curve is *not* a snapshot at fixed $t$ — yet curve independence saves us. The observer computes momentum on whatever curve $\gamma$ corresponds to the string at time $t$; asking again at a later $t'$ uses a different curve $\gamma'$; and since (4) is curve-independent, the two answers agree. Momentum conservation in real time falls out **without** committing to a gauge. That is the whole point of promoting (2) to (4).

## Open questions

- The analogous Lorentz current $\mathcal M^\alpha_{\mu\nu}=X_\mu\mathcal P^\alpha_\nu-X_\nu\mathcal P^\alpha_\mu$ (angular momentum and boosts) is built the same way; it deserves its own note if angular momentum becomes load-bearing before quantization. See [[Noether's theorem]].
- D-brane notes should make endpoint momentum exchange in Dirichlet directions concrete, tying back to $\mathcal P^\sigma_\mu\neq0$ here.

## Exercise

An open string has one end ($\sigma=0$) free and the other ($\sigma=\sigma_1$) attached to a D-brane; $\mu=k$ is a Dirichlet direction (normal to the brane), and there the endpoint flux is $\mathcal P^\sigma_k(\tau,\sigma_1)=f(\tau)\neq 0$. Using only the local conservation law, find $dp_k/d\tau$ for the string, and state in one sentence what conservation law *does* still hold.

> [!success]- Solution
> Start from the charge and differentiate, using $\partial_\tau\mathcal P^\tau_k=-\partial_\sigma\mathcal P^\sigma_k$ from (1):
> $$
> \frac{dp_k}{d\tau}=\int_0^{\sigma_1}\partial_\tau\mathcal P^\tau_k\,d\sigma
> =-\,\mathcal P^\sigma_k\Big|_0^{\sigma_1}
> =\mathcal P^\sigma_k(\tau,0)-\mathcal P^\sigma_k(\tau,\sigma_1).
> $$
> The free end at $\sigma=0$ contributes nothing ($\mathcal P^\sigma_k(\tau,0)=0$), so
> $$
> \frac{dp_k}{d\tau}=-f(\tau)\neq 0.
> $$
> The string's $k$-momentum is **not** conserved: it drains through the D-brane end at rate $f(\tau)$. What is conserved is the *total* momentum of string plus brane — the flux $f(\tau)$ is exactly the momentum the string hands to (or takes from) the brane, so $\tfrac{d}{d\tau}(p_k^{\text{string}}+p_k^{\text{brane}})=0$. (In the Neumann directions $\mu\neq k$, along the brane, both ends give zero flux and $dp_\mu/d\tau=0$ as usual.)
