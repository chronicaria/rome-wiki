---
title: Boundary conditions as geometry
number: "18.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-conditions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A D$p$-brane is not a new object you bolt onto the theory — it *is* the choice, direction by direction, of how each open-string endpoint is allowed to move: free along the brane (Neumann), pinned across it (Dirichlet).

Related: [[String Theory/Part II - Classical Strings/10 Boundary Conditions and First D-Branes/Boundary conditions as geometry|module 10 boundary conditions as geometry]] gives the first visual version of this boundary-condition dictionary.

## Two ways to hold a rope

Hold a jump rope. The rope is the open string; your two hands are its endpoints. There are exactly two ways to hold each hand:

- **Let it slide** along a rail — the hand moves freely, but the rope must meet the rail at a right angle (no sideways pull, or the hand would accelerate off). This is **Neumann**: the endpoint is free, the *slope* is fixed.
- **Nail it down** at a spot — the hand can't move at all. This is **Dirichlet**: the endpoint *value* is fixed, the slope is whatever it needs to be.

A D-brane is the surface your hands are allowed to live on. Along the brane the hands slide (Neumann); across the brane they are nailed in place (Dirichlet). Dirichlet means "on the brane," Neumann means "along the brane," and the brane is nothing but the locus where the pinned coordinates take their fixed values.

Everything below makes this precise and counts how many directions are of each type.

## Why there are only two choices

The open string is an interval $\sigma \in [0,\pi]$ at each time $\tau$. In conformal gauge (mostly-plus signature, so time contributes a minus) the action is

$$ S = \frac{T_0}{2}\int d\tau\,d\sigma\,\big(\dot X^\mu \dot X_\mu - X'^\mu X'_\mu\big), \tag{1}$$

with dot $=\partial_\tau$, prime $=\partial_\sigma$. Vary $X^\mu \to X^\mu + \delta X^\mu$:

$$ \delta S = T_0\int d\tau\,d\sigma\,\big(\dot X_\mu\,\delta \dot X^\mu - X'_\mu\,\delta X'^\mu\big). \tag{2}$$

Integrate by parts in both worldsheet directions. The $\tau$-boundary term dies because we hold $\delta X^\mu = 0$ at the initial and final times (fixed history). The $\sigma$-boundary term at the two ends of the interval *survives*:

$$
\delta S
= -T_0\int d\tau\,d\sigma\,(\ddot X_\mu - X''_\mu)\,\delta X^\mu
\;-\; T_0\int d\tau\,\big[X'_\mu\,\delta X^\mu\big]_{\sigma=0}^{\sigma=\pi}. \tag{3}$$

For $\delta S = 0$ on *every* variation, two things must hold. The bulk coefficient gives the wave equation $\ddot X^\mu = X''^\mu$ (the string vibrates). The endpoint term must vanish **separately at each end and for each coordinate** — and there it forces a choice, because a product $X'_\mu\,\delta X^\mu$ is zero only if one of its factors is:

- **Neumann (N):** keep $\delta X^\mu$ free (the endpoint may move), and kill the other factor:
$$ X'^\mu\big|_{\sigma=0} = X'^\mu\big|_{\sigma=\pi} = 0 . \tag{4}$$
  This is the *natural* boundary condition — the variation itself hands it to you. Physically: a free endpoint with a leftover slope would feel a sideways force and accelerate, so the slope must vanish.

- **Dirichlet (D):** instead forbid the endpoint from moving, $\delta X^\mu = 0$, i.e. hold the value fixed:
$$ X^\mu\big|_{\sigma=0} = X^\mu\big|_{\sigma=\pi} = \text{const}. \tag{5}$$
  This is an *imposed* condition — you decree the endpoint's location, so no variational freedom is left to worry about.

There is no third option: the endpoint either moves (N) or it doesn't (D). Each coordinate at each end must pick one. **A D-brane is exactly this pattern of choices made across all $d+1$ coordinates.**

## The dictionary: brane geometry ⇄ boundary conditions

Put a D$p$-brane at fixed transverse position $x^a = \bar x^a$ (see [[Definition of a Dp-brane]]). The endpoints must lie on it. Read off, direction by direction:

**Normal directions → Dirichlet.** "Lie on the brane" means "sit at the brane's fixed position" in each normal direction. That is literally condition (5):

$$ X^a\big|_{\sigma=0} = X^a\big|_{\sigma=\pi} = \bar x^a , \qquad a = p+1,\dots,d . \tag{6}$$

Both ends are Dirichlet — call these **DD coordinates**. There are $(d-p)$ of them, one per normal direction. This matches the "$(d-p)$ conditions pin a $p$-plane" count from [[Definition of a Dp-brane]]: each pinning condition *is* one Dirichlet direction.

**Tangent directions → Neumann.** Along the brane nothing pins the endpoint, so killing the boundary term forces condition (4):

$$ X'^{\,m}\big|_{\sigma=0} = X'^{\,m}\big|_{\sigma=\pi} = 0 , \qquad m = 0,1,\dots,p . \tag{7}$$

Both ends Neumann — **NN coordinates**. There are $p+1$: the $p$ spatial brane directions plus time $x^0$. Time is *always* Neumann — you never nail a string down at an instant, because a string persists through time; pinning $X^0$ would be pinning it to a single moment.

So the tangent/normal split of coordinates *is* the NN/DD split:

$$ \underbrace{X^0, X^1, \dots, X^p}_{\text{NN}} \qquad \underbrace{X^{p+1}, \dots, X^d}_{\text{DD}} . \tag{8}$$

| geometric role | endpoint | condition | name |
|---|---|---|---|
| tangent to brane | slides freely | $X'=0$ | Neumann / NN |
| normal to brane | pinned at $\bar x^a$ | $\delta X=0$ | Dirichlet / DD |

The upshot bears repeating: introducing a D-brane adds **no new force law and no new term to the action**. It only changes *which boundary data the same variational problem is allowed to use*.

## The count, assembled

So a D$p$-brane has $p$ spatial Neumann directions and $(d-p)$ transverse Dirichlet directions, and the reason is now mechanical. The brane is a $p$-dimensional spatial hyperplane, so locating it takes $(d-p)$ conditions, one per normal direction. Endpoints must lie on it: along a normal direction "on the brane" means "frozen at $\bar x^a$," which is Dirichlet — that is the $(d-p)$ **transverse Dirichlet** directions. Along a tangent direction nothing pins the endpoint, so forcing the boundary term to vanish gives $X'=0$, which is Neumann — that is the $p$ spatial **Neumann** directions, plus the always-Neumann time $x^0$, for $p+1$ NN coordinates in total.

## Light-cone bookkeeping

To quantize in [[Light-cone gauge]] you build $X^\pm = \tfrac1{\sqrt2}(X^0 \pm X^1)$ from time and *one spatial NN direction* — so you need at least one, forcing $p \ge 1$ (this treatment skips D0-branes). Time and that spatial partner are consumed into $X^\pm$; the remaining transverse coordinates $X^I$, $I=2,\dots,25$, split by type:

$$ \underbrace{X^+,\,X^-,\,\{X^i\}}_{\text{NN}} \quad \underbrace{\{X^a\}}_{\text{DD}}, \qquad i = 2,\dots,p,\;\; a = p+1,\dots,d . \tag{9}$$

Here the transverse NN directions are $X^i$ ($i=2,\dots,p$) and the transverse DD directions are $X^a$; $X^\pm$ are the (NN-built) light-cone pair. This split drives the spectrum computation in [[Open strings on one brane]].

## The algebraic fingerprint: no transverse momentum

The N/D distinction leaves a clean mark on the mode expansion. A Neumann coordinate carries a **zero mode** $\alpha_0^I = \sqrt{2\alpha'}\,p^I$ — center-of-mass momentum along that direction; a free endpoint can drift. A Dirichlet coordinate has **no zero mode**, $\alpha_0^a \equiv 0$, and its oscillations go as $\sin n\sigma$ (which vanishes at both ends) rather than $\cos n\sigma$. The reasoning is short. On an NN coordinate the endpoints are free, so the expansion carries a drift term $2\alpha' p^I\tau$; that linear-in-$\tau$ piece *is* the center-of-mass momentum. On a DD coordinate both endpoints are frozen at fixed values, $X^a(\tau,0)=X^a(\tau,\pi)=\bar x^a$ for all $\tau$ — a term growing like $\tau$ would drag the pinned end off its fixed value, so no such term is allowed, and with it goes $\alpha_0^a$. Geometrically: **a string pinned to the brane cannot translate off it, so its normal momentum is exactly zero.** The absence of $\alpha_0^a$ is the algebraic signature of "pinned." (Details in [[Open strings on one brane]].)

## T-duality cross-check

The same dictionary drops out from the opposite direction, from T-duality. Write an NN coordinate as $X = X_L(\tau+\sigma) + X_R(\tau-\sigma)$ and define its dual by flipping the right-mover's sign, $\widetilde X = X_L - X_R$. Differentiating both,

$$ \partial_\sigma X = \partial_\tau \widetilde X, \qquad \partial_\tau X = \partial_\sigma \widetilde X. \tag{10}$$

Now Neumann for $X$ means $\partial_\sigma X = 0$; by (10) that is $\partial_\tau \widetilde X = 0$ — the dual endpoint is frozen in time, i.e. **Dirichlet**. Running it backward, Dirichlet for $X$ becomes Neumann for $\widetilde X$. So T-duality *swaps N and D*, which is why dualizing along a brane direction lowers $p$ by one and dualizing along a transverse direction raises it by one (see [[Dp to D(p minus 1) under T-duality]]).

## Open questions

- **Mixed (ND) coordinates** — Neumann at one end, Dirichlet at the other — arise for [[Strings stretched between Dp- and Dq-branes]]. These have *half-integer* modes; that case lives in its own note.
- **Curved or moving branes** replace the constant Dirichlet locus $\bar x^a$ by dynamical embedding data, beyond this flat-brane picture.

## Exercise

Take a coordinate that is **Dirichlet at $\sigma=0$ but Neumann at $\sigma=\pi$** (a single ND coordinate). Starting from the surviving endpoint term in (3), write down the two boundary conditions this imposes, and then argue directly from those conditions why the standing waves must be **half-integer** modes $\sin\!\big((n+\tfrac12)\sigma\big)$ rather than the integer modes $\sin n\sigma$ of a DD coordinate. You do not need the full mode expansion — a shape argument on the interval $[0,\pi]$ suffices.

> [!success]- Solution
> **The two conditions.** The endpoint term in (3) is $\big[X'\,\delta X\big]_{0}^{\pi}$ and must vanish end-by-end.
> - At $\sigma=0$ (Dirichlet): the value is fixed, $\delta X|_0 = 0$, so $X(\tau,0)=\text{const}$.
> - At $\sigma=\pi$ (Neumann): the variation is free, so the factor $X'$ must die, $X'(\tau,\pi)=0$.
>
> **Why half-integer.** At fixed $\tau$ the spatial profile is a standing wave on $[0,\pi]$ obeying: value pinned at $\sigma=0$, zero slope at $\sigma=\pi$. A pinned end forces a *node* (use $\sin$, not $\cos$, since $\sin$ vanishes at $\sigma=0$); a zero-slope end forces an *antinode* (a crest or trough, where the slope is zero). So we need $\sin k\sigma$ with a node at $0$ and an antinode at $\pi$.
>
> $\sin k\sigma$ has an antinode where $k\sigma = \tfrac{\pi}{2},\tfrac{3\pi}{2},\dots$, i.e. $k\sigma = (n+\tfrac12)\pi$. Setting $\sigma=\pi$ gives $k\pi = (n+\tfrac12)\pi$, hence $k = n+\tfrac12$. The allowed modes are
> $$ \sin\!\big((n+\tfrac12)\sigma\big), \qquad n=0,1,2,\dots $$
>
> **Contrast.** A DD coordinate has a *node at both ends*, so $\sin k\pi = 0 \Rightarrow k=n$ integer ($\sin n\sigma$). Trading one node for an antinode shifts every mode number by $\tfrac12$. Physically: fitting "node-to-antinode" on the interval needs a quarter-wave plus whole half-waves, which is exactly the half-integer tower. This is the origin of the shifted mode-numbering (and the shifted intercept) in [[Strings stretched between Dp- and Dq-branes]].
