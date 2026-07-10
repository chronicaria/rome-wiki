---
title: Open strings on one brane
number: "18.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, open-string-spectrum]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Quantizing an open string with both ends on one D$p$-brane gives a massless spectrum of one photon living along the brane plus one scalar per normal direction — and those scalars are the coordinates telling you where the brane sits.

## From a boundary condition to a gauge field

A D$p$-brane is a rule: open-string endpoints must land on a fixed $p$-dimensional surface. That rule is a set of boundary conditions — free to slide **along** the brane (Neumann), pinned **normal** to it (Dirichlet); see [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]]. Quantize a string obeying them and the low-lying vibrations organize into fields on the brane's world-volume:

> **A D$p$-brane carries a Maxwell photon, plus one massless scalar for each direction it can be pushed in.** The photon is the brane's gauge field; the scalars are its wobble modes.

The calculation is nothing more than tracking which pieces of the mode expansion survive the pinning, and reading off what the survivors are.

## The shortcut: the Neumann directions are already done

Split the light-cone coordinates by geometry (from [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]]):

$$ \underbrace{X^+,\,X^-,\,X^i}_{\text{NN, tangent to brane}}\ (i=2,\dots,p) \qquad \underbrace{X^a}_{\text{DD, normal to brane}}\ (a=p+1,\dots,d). $$

The tangent (NN) coordinates satisfy *exactly* the conditions of ordinary D25-brane quantization — a string free at both ends. Only the *range* of the transverse index shrinks from $2,\dots,25$ down to $2,\dots,p$. So every NN result carries over verbatim with the relabelling $I\to i$; in particular the derivative combination has the standard full-integer expansion

$$ \dot X^i \pm X'^{\,i} = \sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^i\, e^{-in(\tau\pm\sigma)}. \tag{1}$$

The sum runs over *all* integers, so $\alpha_0^i$ is present — that is the center-of-mass momentum along the brane. All the genuinely new work is in the normal (DD) coordinates.

## Solving the pinned (DD) coordinates

The wave equation gives left- and right-movers, $X^a=\tfrac12\big(f^a(\tau+\sigma)+g^a(\tau-\sigma)\big)$. Now impose the two Dirichlet conditions, both ends frozen at the brane's location $\bar x^a$.

**Endpoint $\sigma=0$.** Setting $X^a(\tau,0)=\bar x^a$ forces $g^a=-f^a+2\bar x^a$, so

$$ X^a(\tau,\sigma)=\bar x^a+\tfrac12\big(f^a(\tau+\sigma)-f^a(\tau-\sigma)\big). \tag{2}$$

Notice it is now a *difference* of the same function evaluated at the two null arguments — that antisymmetric structure is what will hold both ends fixed.

**Endpoint $\sigma=\pi$.** Requiring $X^a(\tau,\pi)=\bar x^a$ gives $f^a(\tau+\pi)=f^a(\tau-\pi)$, i.e. **$f^a$ itself is periodic with period $2\pi$**.

This single fact separates Dirichlet from Neumann. A periodic function has a Fourier series with **no term linear in its argument**. For a Neumann coordinate it was $f'$ that came out periodic, so $f$ could grow linearly — and that linear term *is* the center-of-mass momentum. Dirichlet kills it:

> A pinned string has **no momentum in the normal direction** — it cannot translate off the brane. The missing linear term is the missing momentum.

Expanding the periodic $f^a$ in $\cos n u,\sin n u$ and substituting into (2), the difference $f^a(\tau+\sigma)-f^a(\tau-\sigma)$ kills the constant term and turns every mode into a product with $\sin n\sigma$ (sum-to-product identities), leaving

$$ X^a(\tau,\sigma)=\bar x^a+\sqrt{2\alpha'}\sum_{n\neq0}\frac1n\,\alpha_n^a\,e^{-in\tau}\sin n\sigma. \tag{3}$$

Two fingerprints of a Dirichlet coordinate are visible at a glance:

- **$\sin n\sigma$, not $\cos n\sigma$.** $\sin n\sigma$ vanishes at $\sigma=0,\pi$, so no oscillation ever moves an endpoint off $\bar x^a$. (Neumann coordinates carry $\cos n\sigma$, which is *flat*, not zero, at the ends — free to move, but with vanishing endpoint force.)
- **No $\alpha_0^a$.** The sum starts at $n=\pm1$. No zero mode means no normal momentum and no drift, exactly as the periodicity argument promised. And $\bar x^a$ is a fixed *number*, not an operator: the brane does not fluctuate, so $\bar x^a$ is never promoted in quantization.

Quantizing (3) gives the usual oscillator algebra, identical to the NN case except for the absent zero mode:

$$ [\alpha_m^a,\alpha_n^b]=m\,\delta^{ab}\delta_{m+n,0}. \tag{4}$$

## The mass operator (and why the intercept does not budge)

Only the *zero-mode* structure differs between $X^a$ and $X^i$; the oscillator sums $\sum_{n\ge1}\alpha_{-n}\alpha_n$ are identical in form. The normal-ordering constant is built from those oscillator modes, so it is **unchanged** from the space-filling value: the intercept is still $a=-1$, fixed by the same $\sum_{n\ge1}n \to \zeta(-1)=-\tfrac1{12}$ regularization (a cutoff, never the naive divergent sum) that forces $D=26$. Changing the boundary conditions feels like it should shift the intercept, but it touches only the zero modes, and zero modes never enter the normal-ordering sum.

The light-cone mass-shell relation $M^2=2p^+p^--p^ip^i$ then reads, with $p^a=0$,

$$ M^2=\frac1{\alpha'}\left(-1+\sum_{n=1}^{\infty}\Big[\alpha_{-n}^i\alpha_n^i+\alpha_{-n}^a\alpha_n^a\Big]\right)
=\frac1{\alpha'}\left(-1+\sum_{n=1}^{\infty}n\big(a_n^{i\dagger}a_n^i+a_n^{a\dagger}a_n^a\big)\right). \tag{5}$$

Both tangent ($i$) and normal ($a$) oscillators raise the level; the $-1$ is the same tachyonic intercept as the space-filling string.

## The spectrum, level by level

Ground states carry only momenta *along the brane*, $|p^+,\vec p\,\rangle$ with $\vec p=(p^2,\dots,p^p)$ — there is **no $p^a$**, because the normal directions have no momentum operator.

**Level 0 — the tachyon.**
$$ |p^+,\vec p\,\rangle,\qquad M^2=-\frac1{\alpha'}. \tag{6}$$
A Lorentz scalar on the brane, same negative mass$^2$ as the D25 tachyon. (A tachyon signals the bosonic-string vacuum is unstable — a known feature of this toy theory, cured by the superstring.)

**Level 1, tangent oscillator — the photon.**
$$ a_1^{i\dagger}|p^+,\vec p\,\rangle,\quad i=2,\dots,p,\qquad M^2=0. \tag{7}$$
These $(p+1)-2=p-1$ massless states carry a Lorentz-vector index *along the brane*. Count check: a massless vector in $(p+1)$ dimensions starts with $p+1$ components $A_m$; the equation of motion imposes transversality $k^m\epsilon_m=0$ (one removal) and gauge equivalence $\epsilon_m\sim\epsilon_m+\lambda k_m$ removes one more, leaving $p-1$ physical polarizations. Light-cone gauge has *already* done both removals by using $X^\pm$, so the surviving labels $i=2,\dots,p$ are exactly the physical photon states. This is the fundamental result:

> **Every D$p$-brane carries a Maxwell field** $A_m(x)$ on its world-volume, an abelian gauge potential with the redundancy $A_m\sim A_m+\partial_m\lambda$.

**Level 1, normal oscillator — the scalars.**
$$ a_1^{a\dagger}|p^+,\vec p\,\rangle,\quad a=p+1,\dots,d,\qquad M^2=0. \tag{8}$$
These $(d-p)$ massless states carry the index $a$, which is *not* a brane Lorentz index — it is just a counting label. So each is a **Lorentz scalar on the brane**: one massless scalar per normal direction.

## Why the scalars are the brane's own positions

This is what makes the brane a physical object rather than a bookkeeping surface. There are $(d-p)$ massless scalars and $(d-p)$ directions you can *displace the brane in* — the same number, and no coincidence. Picture bending the brane slightly, as a graph over its flat reference position:

$$ x^a=\bar x^a+\phi^a(x^0,\dots,x^p),\qquad a=p+1,\dots,d. \tag{9}$$

The field $\phi^a$ records how far the brane is locally pushed in the $a$-th normal direction. A rigid, constant displacement costs no energy (you have just moved the whole brane, which is free), so it is a zero-momentum, zero-energy — hence **massless** — mode of the brane theory. That is exactly the $M^2=0$ scalar in (8). The excitations of a brane along its normal directions *are* massless scalar fields living on it, and vice versa.

The limiting case confirms it: a space-filling D25-brane has **no** normal directions, so (8) gives **no** massless scalars — and indeed a space-filling brane cannot be moved anywhere. No room to wobble, no wobble modes.

**Tally.** On the D$p$-brane: $(p-1)$ photon states $+\,(d-p)$ scalar states $=d-1$ massless states — the same total as the $(d-1)$ photon polarizations of the space-filling D25-brane, just repackaged. Lowering $p$ trades photon polarizations for position scalars, one for one, keeping the count fixed. That conservation is the fingerprint that these really are the *same* degrees of freedom seen through different boundary conditions.

## Open questions

- This analysis *suggests* that the photon and scalars are fields living on the brane, but does not *prove* the brane is a dynamical object. The proof requires scattering closed strings off the brane and seeing them interact with these fields on the world-volume — beyond this first pass.
- The variational origin of the N vs D split lives in [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]]; the open subtlety is how it deforms for a curved or genuinely dynamical brane (where $\bar x^a$ becomes the field $\phi^a$ everywhere, not just at linear order).

## Exercise

**(a)** Suppose someone claims that pinning the string (Dirichlet at both ends) shifts the tachyon mass. Point to the exact step in the derivation that refutes this, and state in one sentence why the intercept $a=-1$ is untouched.
**(b)** Take the D25-brane limit $p=d=25$ of the massless spectrum (7)–(8). How many photon states? How many scalars? Reconcile with the general tally $d-1$, and say in words what happened to the brane's ability to move.

> [!success]- Solution
> **(a)** The intercept is the normal-ordering constant $\tfrac12\sum_{n\ge1}n$ per transverse coordinate, summed over all 24 of them and regularized via $\zeta(-1)=-\tfrac1{12}$ to $-1$ — it lives entirely in the $n\ge1$ *oscillator* modes of equation (5). Dirichlet changed only the **zero mode**: it deleted $\alpha_0^a$ and turned $\cos n\sigma$ into $\sin n\sigma$. The count of transverse coordinates (24) and their oscillator content are untouched, so each still contributes $-\tfrac1{24}$. One sentence: *boundary conditions rearrange the zero modes, but the intercept is built only from the higher oscillators, so it stays $a=-1$ and the tachyon keeps $M^2=-1/\alpha'$.*
>
> **(b)** At $p=25=d$ there are no normal directions ($a=p+1,\dots,d$ is empty), so (8) gives **zero scalars**. The photon (7) has $p-1=24$ states. The tally is $24+0=24=d-1$ with $d=25$ — consistent. In words: the space-filling brane fills all of space, so it cannot be displaced in any direction; all $(d-p)=0$ of its would-be wobble scalars are absent, and the full $d-1$ massless count is carried entirely by the photon. Lowering $p$ from 25 converts photon polarizations into position scalars one at a time — the total never changes.
