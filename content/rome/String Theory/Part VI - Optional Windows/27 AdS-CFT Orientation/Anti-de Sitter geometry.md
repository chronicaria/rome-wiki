---
title: Anti-de Sitter geometry
number: "27.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, holography]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Anti-de Sitter space $\mathrm{AdS}_{d+1}$ is the maximally symmetric spacetime of constant *negative* curvature; in AdS/CFT it is the gravitational "bulk," and its one extra coordinate — the radial direction — is what the boundary theory encodes as an energy scale.

## Warped Minkowski, sheet by sheet

Take flat $d$-dimensional Minkowski space and stack infinitely many copies of it, one for each value of a new coordinate $z>0$. Glue them with a rule: **the deeper you go (larger $z$), the shorter your ruler.** Near $z=0$ rulers are huge, so you never quite reach $z=0$ — it sits infinitely far away and plays the role of a *boundary*. That warped stack is anti-de Sitter space, and the rest of this note makes the picture precise.

## What "anti-de Sitter" means

Three spacetimes are maximally symmetric — as homogeneous and isotropic as geometry allows, with the largest possible isometry group. They are told apart by the constant sign of their curvature:

- **Zero** curvature → Minkowski space (flat). The geometry of every prior module.
- **Positive** curvature → de Sitter space (a sphere-like, expanding universe; roughly our cosmology).
- **Negative** curvature → **anti-de Sitter** space (saddle-like; our subject).

The negative sign is what gives AdS a boundary at infinity that light can reach in finite time — the feature holography lives on.

> **Just-in-time GR.** "Curvature" means the Riemann curvature of a metric $g_{\mu\nu}$. We do **not** need Einstein's equations here. We need only that AdS *is* a fixed background metric we can write down, and that "constant negative curvature" is a number computed from it. Why a stack of D3-branes produces this metric belongs to a supergravity course; we quote that step and derive everything downstream of it.

## A metric we can actually write

Write $\mathrm{AdS}_{d+1}$ in **Poincaré coordinates**: the $d$ boundary directions $x^\mu=(t,\vec x)$ with $\mu=0,\dots,d-1$, plus one **radial** coordinate $z>0$.
$$ \boxed{\; ds^2 = \frac{R^2}{z^2}\Big(\eta_{\mu\nu}\,dx^\mu dx^\nu + dz^2\Big) \;}\tag{1}$$
Here $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$ is the flat (mostly-plus) boundary metric and $R$ is the **AdS radius**, the single length scale of the geometry — the same $R$ that enters the dictionary $R^4/\alpha'^2=g_{YM}^2N$ (see [[Gauge-gravity duality]]).

Read (1) term by term:

- The **warp factor** $R^2/z^2$ carries all the geometry. It diverges as $z\to0$ and vanishes as $z\to\infty$. It multiplies *everything*, so it sets the local conversion between coordinate steps and proper distance: near $z=0$ a tiny coordinate step is a huge proper distance (long ruler); deep at large $z$ the same step is a tiny proper distance (short ruler). This is the "shrinking ruler" made precise.
- **At fixed $z$**, the metric $\frac{R^2}{z^2}\eta_{\mu\nu}dx^\mu dx^\nu$ is just a rescaled copy of flat $d$-dimensional Minkowski space. So $\mathrm{AdS}_{d+1}$ literally is a stack of flat sheets, one per $z$, each scaled by $R/z$.
- $z\to0$ is the **conformal boundary**: the warp factor blows up, proper distance out to it is infinite, and the dual field theory lives there (see [[Conformal boundary]]). $z\to\infty$ is the deep interior, the **Poincaré horizon**.

Nothing in (1) depends on $x^\mu$, only on $z$ — so the geometry looks identical at every boundary point. That homogeneity is a first hint that (1) is maximally symmetric.

## Checking the curvature is constant and negative

The name "anti-de Sitter" is a *claim* about (1): that its curvature is constant and negative. Let us verify it, because verifying it is the one piece of real geometry this note owns. Let $A,B$ run over all $d+1$ coordinates $(x^\mu,z)$, with $z$ last. The metric is conformally flat, $g_{AB}=\frac{R^2}{z^2}\eta_{AB}$.

The nonzero Christoffel symbols are
$$
\Gamma^z_{zz}=-\frac1z,\qquad
\Gamma^z_{\mu\nu}=\frac1z\,\eta_{\mu\nu},\qquad
\Gamma^\mu_{z\nu}=\Gamma^\mu_{\nu z}=-\frac1z\,\delta^\mu_{\nu}.\tag{2}
$$
Every entry is $\pm 1/z$ because the connection is set by the logarithmic derivative of the warp factor, $\partial_z\ln(R/z)=-1/z$. No $x^\mu$ derivative appears, confirming the boundary-direction homogeneity. (Sign check: $\Gamma^z_{tt}=\frac1z\eta_{tt}=-\frac1z$ while $\Gamma^z_{x^ix^i}=+\frac1z$ — the timelike direction flips, as mostly-plus signature demands.)

Feed (2) into the Ricci tensor $R_{AB}=\partial_C\Gamma^C_{AB}-\partial_B\Gamma^C_{AC}+\Gamma^C_{AB}\Gamma^D_{CD}-\Gamma^D_{AC}\Gamma^C_{BD}$:
$$R_{AB}=-\frac{d}{R^2}\,g_{AB},\qquad
\mathcal R = g^{AB}R_{AB}=-\frac{d(d+1)}{R^2}<0.\tag{3}$$
The Ricci tensor is proportional to the metric with a **negative** constant — so every point, every direction, sees the same negative curvature scale $R$. That is exactly what "maximally symmetric, constant negative curvature" means. Constant curvature goes further: the full Riemann tensor is fixed by the metric alone,
$$R_{ABCD}=-\frac{1}{R^2}\big(g_{AC}g_{BD}-g_{AD}g_{BC}\big),\tag{4}$$
and contracting (4) reproduces (3). For $\mathrm{AdS}_5$ ($d=4$): $R_{AB}=-\frac{4}{R^2}g_{AB}$ and $\mathcal R=-\frac{20}{R^2}$.

This proves (1) *is* an AdS metric of radius $R$. It does **not** prove why D3-branes give it — that remains the one quoted input.

## The radial direction is the "extra" holographic dimension

The structural payoff follows from that one extra coordinate. $\mathrm{AdS}_{d+1}$ has the same $x^\mu$ as the boundary *plus one*: the radial $z$. AdS/CFT reads that extra coordinate not as an extra place, but as an **energy scale** of the boundary theory:

- near the boundary, $z\to0$ ↔ high energy / short distance (the UV);
- deep in the bulk, $z\to\infty$ ↔ low energy / long distance (the IR).

Why is that natural? The rescaling $x^\mu\to\lambda x^\mu,\ z\to\lambda z$ leaves (1) invariant. On the boundary that is a zoom (a dilatation, a change of length unit); in the bulk it is a slide in $z$. So *moving in $z$ = changing the scale you probe the boundary at*, and moving into the bulk is flowing the boundary theory toward the infrared. That is why a $(d+1)$-dimensional gravity theory can match a $d$-dimensional field theory: the missing dimension isn't missing, it is stored as **scale data**. This is the hologram — a $d$-dimensional edge recording a $(d+1)$-dimensional interior.

> **Scope flag.** "Radial coordinate = RG scale" is standard, but a *proof* needs the holographic dictionary and holographic renormalization, beyond this module. The scale-invariance argument above is the honest heuristic for *why* it holds; take the identification as orientation, not theorem.

## Where the $S^5$ went

The full IIB background is $\mathrm{AdS}_5\times S^5$, not just $\mathrm{AdS}_5$. The five-sphere fills the space *around* the D3-branes in the six transverse directions, and it carries the *same* radius $R$ as the AdS factor. Its isometry group $SO(6)$ becomes the **R-symmetry** of the boundary $\mathcal{N}=4$ theory — the symmetry rotating its six scalars and its fermions into one another. So $S^5$ contributes an internal/global symmetry, not a spacetime direction and not the holographic radial coordinate. For orientation we track $\mathrm{AdS}_5$ and remember the $S^5$ as "where the R-symmetry lives."

## Open questions

- Poincaré coordinates cover only a *patch* of global AdS. Global $\mathrm{AdS}$ has boundary topology $\mathbb{R}\times S^{d-1}$, versus flat $\mathbb{R}^{1,d-1}$ here. Both are used; conformal compactification relates them, and the flat patch is the one suited to $\mathcal{N}=4$ SYM on Minkowski space. (Beyond orientation scope.)
- Is $z=\infty$ a true horizon or a coordinate artifact? For *pure* AdS it is a coordinate horizon of the Poincaré patch; for the *finite-temperature* dual it becomes a genuine black-hole horizon — the connection to [[Entropy-area relation]]. (Beyond scope.)
- The scale-invariance heuristic for "radial = RG" is suggestive but not a derivation; the precise statement needs holographic renormalization ([[Bulk versus boundary observables]]).

## Exercise

The warp factor $R^2/z^2$ is the entire geometric content, so a good self-test is to see it produce curvature *with the sign fixed*. Consider the two-dimensional analogue — the upper-half-plane metric with the same warp,
$$ ds^2 = \frac{R^2}{z^2}\big(dx^2 + dz^2\big),\qquad z>0, $$
now with a Euclidean flat metric $\delta$ instead of $\eta$ (so both directions are spacelike). Compute the Ricci scalar and check it is a negative constant. What familiar surface is this, and does the sign of $\mathcal R$ match the general formula (3) with $d=1$?

> [!success]- Solution
> Coordinates $(x,z)$, $g_{AB}=\frac{R^2}{z^2}\delta_{AB}$ with $\delta=\mathrm{diag}(1,1)$. The warp derivative is again $\partial_z\ln(R/z)=-1/z$, so the Christoffels have the same shape as (2) but with $\eta\to\delta$:
> $$\Gamma^z_{zz}=-\tfrac1z,\quad \Gamma^z_{xx}=+\tfrac1z\ (=\tfrac1z\,\delta_{xx}),\quad \Gamma^x_{zx}=\Gamma^x_{xz}=-\tfrac1z.$$
> In $2$D the Ricci scalar is $\mathcal R = 2R_{xx}/g_{xx}$ (since $R_{AB}=\tfrac12\mathcal R\,g_{AB}$ in two dimensions). Compute $R_{xx}$ from $R_{AB}=\partial_C\Gamma^C_{AB}-\partial_B\Gamma^C_{AC}+\Gamma^C_{AB}\Gamma^D_{CD}-\Gamma^D_{AC}\Gamma^C_{BD}$:
> $$R_{xx}=\partial_z\Gamma^z_{xx}+\Gamma^z_{xx}\Gamma^D_{zD}-\Gamma^D_{xC}\Gamma^C_{xD}.$$
> Term by term: $\partial_z(\tfrac1z)=-\tfrac1{z^2}$; $\ \Gamma^D_{zD}=\Gamma^x_{zx}+\Gamma^z_{zz}=-\tfrac1z-\tfrac1z=-\tfrac2z$, so $\Gamma^z_{xx}\Gamma^D_{zD}=\tfrac1z\cdot(-\tfrac2z)=-\tfrac2{z^2}$; the last term is $\Gamma^z_{xx}\Gamma^x_{xz}+\Gamma^x_{xz}\Gamma^z_{xx}=2\cdot\tfrac1z\cdot(-\tfrac1z)=-\tfrac2{z^2}$, entering with a minus sign as $+\tfrac2{z^2}$. Summing: $R_{xx}=-\tfrac1{z^2}-\tfrac2{z^2}+\tfrac2{z^2}=-\tfrac1{z^2}$.
> Then $g_{xx}=R^2/z^2$, so
> $$\mathcal R = \frac{2R_{xx}}{g_{xx}} = \frac{2(-1/z^2)}{R^2/z^2} = -\frac{2}{R^2},$$
> a negative constant — independent of $x$ and $z$. This is the **hyperbolic plane** $\mathbb{H}^2$ of radius $R$ (Euclidean $\mathrm{AdS}_2$). Check against (3) with $d=1$: $\mathcal R=-d(d+1)/R^2=-1\cdot2/R^2=-2/R^2\ \checkmark$. Same sign, same magnitude — the warp factor alone forces constant negative curvature.
