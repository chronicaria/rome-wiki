---
title: Dp to D(p minus 1) under T-duality
number: "20.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, d-branes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

T-duality along a compact circle swaps Neumann and Dirichlet boundary conditions. A D$p$-brane that **wraps** the circle turns into a D$(p\!-\!1)$-brane **stuck at a point** on the dual circle: the brane loses one dimension, and the open string's momentum around the circle becomes its winding.

An open string on a wrapped brane slides freely and carries momentum. View the *same physics* on the dual circle and that sliding freedom is gone: the endpoints are nailed down, and what was momentum is now the number of times the string wraps. Nailing down the endpoints is exactly what it means for the brane to shrink away in that direction.

(Here $p$ counts the brane's **spatial** dimensions, not momentum. A D24-brane fills 24 of the 25 spatial directions, so it is localized in exactly one — a wall in 25-dimensional space.)

## The puzzle: open strings seem to break the duality

[[Spectrum invariance under R to alpha-prime over R]] established that a circle of radius $R$ and one of radius $\tilde R = \alpha'/R$ are the same physics *for closed strings*, once you swap momentum and winding. Now add a space-filling **D25-brane** so open strings can move everywhere; their endpoints are **Neumann** in all directions, including the compact $X^{25}\equiv X$.

An open string on a space-filling brane cannot wind. Its endpoints slide freely, so any loop it makes around the circle can be pulled off. Its only circle label is momentum, $p = n/R$, contributing $n^2/R^2$ to $M^2$. If we kept the space-filling brane and merely replaced $R$ by $\tilde R=\alpha'/R$, the momentum tower would become
$$ \tilde p=\frac{n}{\tilde R}=\frac{nR}{\alpha'}, \qquad \tilde p^{\,2}=\frac{n^2R^2}{\alpha'^2} \neq \frac{n^2}{R^2}. $$
That is a *different* spectrum. Open strings on an unchanged D25-brane could tell $R$ from $\alpha'/R$ by measuring their momentum spacing — so naive T-duality is broken.

The escape is that **the brane is not a fixed backdrop; it transforms too.** Fix the duality and the brane is forced to change type.

## The resolution: the brane changes type

In the dual description, replace the D25-brane by a **D24-brane** with $X$ **Dirichlet** — the endpoints pinned at a fixed value, say $X=0$. Two things flip at once:

- The open string can now **wind**. A string running from $X=0$ to $X=2\pi\tilde R$ (once around) cannot contract, because both endpoints are nailed to the brane. The Neumann string that couldn't wind becomes a Dirichlet string that must.
- The **momentum** tower of the space-filling theory matches the **winding** tower of the D24 theory, level for level, precisely when $\tilde R=\alpha'/R$.

$$ \boxed{\ \text{T-duality along } X^{25}:\quad (\text{D}25;\, R) \ \longrightarrow\ (\text{D}24;\, \tilde R=\alpha'/R).\ } $$

The rest of this note derives this from the mode expansion, which shows the boundary-condition flip is automatic — not a choice we impose.

## The mechanism: boundary conditions get swapped

Start from the Neumann–Neumann (NN) open-string expansion on $\sigma\in[0,\pi]$:
$$ X(\tau,\sigma) = x_0 + \sqrt{2\alpha'}\,\alpha_0\,\tau + i\sqrt{2\alpha'}\sum_{n\ne0}\frac{1}{n}\,\alpha_n\cos n\sigma\, e^{-in\tau}, \qquad \alpha_0 = \sqrt{2\alpha'}\,p = \sqrt{2\alpha'}\,\frac{n}{R}. \tag{1}$$
The $\cos n\sigma$ is what makes it Neumann: $\partial_\sigma X \propto \sin n\sigma$ vanishes at both ends $\sigma=0,\pi$, so no momentum flows off the string. The $\alpha_0\tau$ term is the center-of-mass motion; its zero mode $\alpha_0=\sqrt{2\alpha'}\,p$ encodes the momentum $p=n/R$.

Split into left- and right-movers, $X = X_L(\tau+\sigma)+X_R(\tau-\sigma)$. Copying the closed-string trick, define the **dual coordinate** by flipping the sign of the right-mover only:
$$ \tilde X \equiv X_L - X_R. \tag{2}$$
Because $\cos n\sigma$ came from *adding* the two movers, subtracting them turns every cosine into a sine:
$$ \tilde X(\tau,\sigma) = q_0 + \sqrt{2\alpha'}\,\alpha_0\,\sigma + \sqrt{2\alpha'}\sum_{n\ne0}\frac{1}{n}\,\alpha_n\,\sin n\sigma\, e^{-in\tau}. \tag{3}$$
Read off what changed. The $\tau$-linear (momentum) term is **gone**; a $\sigma$-linear (winding-like) term $\alpha_0\sigma$ takes its place. And $\sin n\sigma$ makes $\partial_\tau\tilde X \propto \sin n\sigma$ vanish at the ends: $\partial_\tau\tilde X=0$ at $\sigma=0,\pi$. That is the **Dirichlet** condition — the endpoints do not move in $\tau$, so they sit at fixed positions. The dual string's endpoints are pinned.

The two statements combine into the master swap:
$$ \boxed{\ X = X_L + X_R,\quad \tilde X = X_L - X_R, \qquad \partial_\sigma X = \partial_\tau \tilde X, \qquad \partial_\tau X = \partial_\sigma \tilde X.\ } \tag{4}$$
(These follow instantly from (2): $\partial_\sigma X = X_L' - X_R' = \partial_\tau\tilde X$, and $\partial_\tau X = X_L' + X_R' = \partial_\sigma\tilde X$, since $X_L$ and $X_R$ each depend on a single variable.)

The left relation is the whole story. **Neumann for $X$** ($\partial_\sigma X=0$) is **Dirichlet for $\tilde X$** ($\partial_\tau\tilde X=0$), and vice versa. T-duality literally exchanges N and D. Since "Dirichlet in a direction" means "the brane does not extend there," passing to $\tilde X$ drops that direction from the brane and its dimension falls by one.

## Momentum becomes winding, made quantitative

Because $\tilde X$ is Dirichlet, its endpoints are fixed — but *how far apart* are they? Integrate the $\sigma$-linear term across the string:
$$ \tilde X(\tau,\pi) - \tilde X(\tau,0) = \sqrt{2\alpha'}\,\alpha_0\,(\pi-0) = 2\pi\alpha'\, p = 2\pi\,\frac{\alpha'}{R}\,n = 2\pi\tilde R\,n. \tag{5}$$
So the dual string's ends are separated by $n$ full circumferences of the dual circle: the original **momentum number** $n$ has become the **winding number**. The clean picture is an infinite ladder of identical D24-branes on the covering line, spaced $2\pi\tilde R$ apart (the images of one brane on the dual circle). A string whose ends land $n$ rungs apart wraps the dual circle $n$ times. Momentum quantization $p=n/R$ has become winding quantization in units of $\tilde R$.

This also passes the energy check. A stretched string costs (tension)$\times$(length). With tension $T_0=1/(2\pi\alpha')$ and dual length $2\pi|n|\tilde R$,
$$ T_0\cdot 2\pi|n|\tilde R = \frac{1}{2\pi\alpha'}\cdot 2\pi|n|\,\frac{\alpha'}{R} = \frac{|n|}{R}, \tag{6}$$
which is exactly the original momentum-mode energy $|p| = |n|/R$. The stretch of the Dirichlet string weighs precisely what the momentum did — the $2\pi$ and $\alpha'$ cancel, just as they did for closed-string winding. Same spectrum, relabelled.

## The general rule (and the direction that goes the other way)

The argument touches only one direction, so it iterates. If a D$p$-brane **wraps** a compact direction (Neumann there), T-duality along it gives a D$(p\!-\!1)$-brane **at a point** on the dual circle. Conversely, dualizing a direction **transverse** to the brane — where the brane already sits at a point, i.e. Dirichlet there — turns that pinned point into a wrapped Neumann direction and *raises* the dimension:
$$ \text{wrap the circle:}\quad \text{D}p \to \text{D}(p-1); \qquad\qquad \text{transverse circle:}\quad \text{D}p \to \text{D}(p+1). $$
The rule is symmetric because (4) is: N$\leftrightarrow$D runs both ways.

Closed strings do not end on the brane, so nothing in their Hilbert space cares whether we call it D25 or D24 — their $R\leftrightarrow\alpha'/R$ equivalence is untouched. The brane transformation is demanded *only* by the open sector, and once made, everything is consistent.

Step back: a D-brane is nothing but "where open strings are allowed to end." T-duality is a change of variables that swaps the string's two ways of noticing the circle — sliding around it (momentum) versus wrapping it (winding). Swapping those swaps "endpoints free to slide" for "endpoints nailed down," which is the same as the brane losing a dimension. This is how D-branes were first discovered: by asking what a moving open string turns into on the dual circle.

The convention above pins the dual D$(p\!-\!1)$-brane at $\tilde X=0$; the arbitrary constant $q_0$ just chooses which point. A [[Wilson lines|Wilson line]] on the original wrapped brane slides that point around the dual circle — the holonomy angle *is* the dual brane's position.

## Open questions

- **Why only $p\ge 2$ here?** Light-cone gauge builds $X^\pm=(X^0\pm X^1)/\sqrt2$ from the time direction $X^0$ and a spatial direction $X^1$, both of which must be Neumann (on the brane); together with the wrapped compact direction $X$ also being Neumann, the brane must fill at least the two *spatial* directions $X^1$ and $X$, so this explicit derivation covers D$p\to$D$(p\!-\!1)$ only for $p\ge 2$. The $p=1\to0$ case (a D1-brane to a D0-brane) is true but needs covariant quantization — asserted here, not derived.
- **Superstrings.** Everything above is the bosonic string in 26 dimensions. In Type II, T-duality additionally exchanges IIA$\leftrightarrow$IIB (consistent with IIA carrying even-$p$ branes and IIB odd-$p$), so a wrapped brane in one theory becomes a lower brane in the *other*. Same spirit, out of scope for this module.

## Exercise

You know that dualizing a **wrapped** direction sends D$p\to$D$(p\!-\!1)$. Show the reverse claim quantitatively: dualizing a direction **transverse** to the brane sends D$p\to$D$(p\!+\!1)$, and the string's original stretch (a Dirichlet separation) becomes momentum on the dual circle. Concretely, take a D$p$-brane sitting at the point $X=x_1$ on the circle of radius $R$, so $X$ is **Dirichlet** with the DD expansion
$$ X(\tau,\sigma) = x_1 + \sqrt{2\alpha'}\,\alpha_0\,\sigma + \sqrt{2\alpha'}\sum_{n\ne0}\tfrac{1}{n}\alpha_n\sin n\sigma\, e^{-in\tau}, \qquad \sqrt{2\alpha'}\,\alpha_0 = \frac{x_2 - x_1}{\pi}, $$
where the string stretches from $x_1$ to a brane image at $x_2 = x_1 + 2\pi R\,w$ ($w\in\mathbb Z$ windings around the covering line). Form $\tilde X = X_L - X_R$, identify the boundary condition of $\tilde X$, and read the dual momentum $\tilde p$ off the coefficient of the new $\tau$-linear term. Check that $\tilde p$ is quantized in the units expected for momentum on a circle of radius $\tilde R = \alpha'/R$.

> [!success]- Solution
> Splitting the DD expansion into movers and forming $\tilde X = X_L - X_R$ flips $\sin n\sigma \to \cos n\sigma$ and turns the $\sigma$-linear term into a $\tau$-linear term — the exact inverse of the wrapped-case algebra (1)$\to$(3):
> $$ \tilde X(\tau,\sigma) = \tilde x_0 + \sqrt{2\alpha'}\,\alpha_0\,\tau + i\sqrt{2\alpha'}\sum_{n\ne0}\tfrac{1}{n}\alpha_n\cos n\sigma\, e^{-in\tau}. $$
> Now $\partial_\sigma\tilde X \propto \sin n\sigma$ vanishes at $\sigma=0,\pi$: $\tilde X$ is **Neumann**. The brane that was pinned to a point in $X$ now extends along $\tilde X$, so its dimension rises: D$p\to$D$(p\!+\!1)$.
>
> The dual momentum is the coefficient of $\tau$: $\tilde p = \alpha_0/\sqrt{2\alpha'}$. From the given zero mode,
> $$ \sqrt{2\alpha'}\,\alpha_0 = \frac{x_2-x_1}{\pi} = \frac{2\pi R\,w}{\pi} = 2 R\,w \quad\Longrightarrow\quad \tilde p = \frac{\alpha_0}{\sqrt{2\alpha'}} = \frac{\sqrt{2\alpha'}\,\alpha_0}{2\alpha'} = \frac{2Rw}{2\alpha'} = \frac{wR}{\alpha'} = \frac{w}{\tilde R}. $$
> So $\tilde p = w/\tilde R$ with $w\in\mathbb Z$: exactly momentum quantized in units of $1/\tilde R$ on the dual circle. The Dirichlet *stretch* $w$ (how many times the string wound the covering line between brane images) has become the momentum *number* on the dual circle — the mirror image of (5), where momentum $n$ became stretch. Boundary condition, brane dimension, and the winding$\leftrightarrow$momentum roles all flip together, confirming D$p\to$D$(p\!+\!1)$ for a transverse circle.
