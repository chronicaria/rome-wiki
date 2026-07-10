---
title: 20 — T-Duality (Overview)
number: "20.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, t-duality]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The first genuinely stringy duality: a circle of radius $R$ is physically identical to a circle of radius $\alpha'/R$, with momentum and winding swapping roles. The radius of a compact dimension is **not an observable** of string theory.

## Two rulers for one circle

Curl up one spatial direction into a circle of circumference $2\pi R$. A **point particle** has one way to notice the circle: its momentum around it is quantized, $p=n/R$, so it carries a ladder of states spaced by $1/R$. Shrink the circle and the spacing widens; grow it and the ladder becomes a continuum. That spacing *is* how you measure $R$.

A **string** can do something a particle cannot: it can **wind** around the circle and get stuck there, because a closed loop wrapped $m$ times cannot slip off without cutting. Winding costs energy $\propto R$ — you paid tension to stretch the string — spaced by $R/\alpha'$. So a string carries **two** rulers that report opposite things:

$$\underbrace{\Delta p = \tfrac{1}{R}}_{\text{momentum ladder}}\qquad\text{vs.}\qquad\underbrace{\Delta w = \tfrac{R}{\alpha'}}_{\text{winding ladder}}.$$

Shrink the circle: the momentum ladder spreads out (looks *small*) but the winding ladder crowds together (looks *large*). The two are mirror images across $R = \sqrt{\alpha'}$. And since a string carries **both** labels at once, swapping the two rulers — $R\mapsto\alpha'/R$ together with $n\leftrightarrow m$ — leaves the **entire spectrum unchanged**.

A small circle and a large circle look different to a particle, but to a string they are the same world with the two rulers relabeled. You cannot ask "how big is the extra dimension?" — only "which ruler are you using?"

## The factor-safe statement

Natural units, radius dimensions kept explicit:

| symbol | meaning | units |
|---|---|---|
| $R$ | original circle radius | length |
| $\alpha'$ | inverse string tension, $T_0=1/(2\pi\alpha')$ | length$^2$ |
| $n$ | momentum integer | — |
| $m$ | winding integer | — |
| $p=n/R$ | compact momentum | length$^{-1}$ |
| $w=mR/\alpha'$ | winding momentum | length$^{-1}$ |
| $\tilde R=\alpha'/R$ | dual radius | length |

The duality is **not** "replace $R$ and keep the state labels." It compares two *dictionaries* for the same physics:
$$
R\ \longmapsto\ \tilde R=\frac{\alpha'}{R},\qquad n\ \longleftrightarrow\ m.
$$
The state called "$n$ units of momentum" in one description is called "$n$ units of winding" in the other. The momentum spacing $1/R$ of one description equals the winding spacing $R/\alpha' = 1/\tilde R$ of the other — that is the whole trade.

## Why it matters

This is the conceptual seed of the entire web of string dualities (S-duality, U-duality, mirror symmetry): a physical equivalence between two backgrounds that look geometrically different. It also gives a minimal length. Every $R<\sqrt{\alpha'}$ has an equivalent description with $\tilde R>\sqrt{\alpha'}$, so shrinking a circle below the string length opens *no new short-distance physics* — it just relabels which ladder deserves the name "momentum." The self-dual radius $R^*=\sqrt{\alpha'}$ is the edge of the fundamental domain, and there something dramatic happens: extra states go massless and the gauge symmetry is enhanced.

Finally, T-duality is where **D-branes earn their name**. For open strings it forces Neumann and Dirichlet boundary conditions to exchange, so a D$p$-brane wrapping the circle becomes a D$(p\!-\!1)$-brane pinned to a point on the dual circle: the endpoint that was free to slide (Neumann) gets nailed down (Dirichlet). Distance is not destroyed — it is demoted from fixed background to a choice of dual variables, useful only in the regime where its light states are the natural probes.

## Sublessons

- 20.1 [[Momentum modes on a circle]] — $p=n/R$ from single-valuedness on the circle, and why it is quantized.
- 20.2 [[Winding modes]] — $w=mR/\alpha'$; winding as a stretched rubber band and a second kind of momentum.
- 20.3 [[Compactified closed-string mass formula]] — the full derivation of $M^2 = p^2 + w^2 + \tfrac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$. **(work product)**
- 20.4 [[Spectrum invariance under R to alpha-prime over R]] — the exchange $n\leftrightarrow m$, the self-dual radius, and duality as the operator map $X_L+X_R\to X_L-X_R$.
- 20.5 [[Wilson lines]] — a constant $A_x$ has holonomy $\theta=q\oint A_x\,dx$, an angle that becomes a brane position on the dual circle.
- 20.6 [[Dp to D(p minus 1) under T-duality]] — Neumann$\leftrightarrow$Dirichlet exchange; the brane changes dimension.

## Scope

The whole module is the **bosonic** string in light-cone gauge ($D=26$, normal-ordering constant $a=-1$ per sector). We prove the **free-string** operator equivalence; the interacting (string-loop) statement and the accompanying dilaton shift live in the worldsheet-CFT viewpoint, not here.

## Open questions

- How much survives to the superstring? The open-string result is derived cleanly only for $p\ge 2$ in light-cone gauge (you need $X^0,X^1$ Neumann to build $X^\pm$); $p=1,0$ are true but need covariant quantization. The Type II version additionally maps IIA$\leftrightarrow$IIB.
- The enhanced spectrum at $R^*$ includes tachyon-dependent scalar states in the bosonic theory. Which parts of the enhancement survive in tachyon-free (super/heterotic) compactifications is a later question.

## Exercise

*(This is the module's no-notes self-test. Everything you need is above and in the sublessons.)*

Start from the compactified closed-string mass formula and its level-matching constraint,
$$
M^2 = \Big(\frac{n}{R}\Big)^2 + \Big(\frac{mR}{\alpha'}\Big)^2 + \frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big),\qquad N^\perp-\bar N^\perp = nm.
$$

**(a)** Show the spectrum is invariant under $R\to\alpha'/R$ together with $n\leftrightarrow m$, and identify the fixed radius $R^*$.
**(b)** At $R=R^*$, find integer labels $(n,m)$ and levels $(N^\perp,\bar N^\perp)$ that give a **massless** state which is absent at generic $R$. What symmetry enhancement do such states signal?

> [!success]- Solution
> **(a) Invariance.** Substitute $R\to\alpha'/R$ and swap $n\leftrightarrow m$ in the first two terms:
> $$\Big(\frac{n}{R}\Big)^2 \xrightarrow{\ n\to m,\ R\to\alpha'/R\ } \Big(\frac{m}{\alpha'/R}\Big)^2 = \Big(\frac{mR}{\alpha'}\Big)^2,$$
> $$\Big(\frac{mR}{\alpha'}\Big)^2 \xrightarrow{\ m\to n,\ R\to\alpha'/R\ } \Big(\frac{n(\alpha'/R)}{\alpha'}\Big)^2 = \Big(\frac{n}{R}\Big)^2.$$
> The momentum and winding terms **trade places**, so their sum is unchanged. The oscillator term $\tfrac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$ contains no $R$, and the constraint $N^\perp-\bar N^\perp=nm$ is symmetric in $n\leftrightarrow m$, so both survive. Hence $M^2(R;n,m)=M^2(\alpha'/R;\,m,n)$: the *list* of masses is identical, only the labels are permuted.
>
> **Fixed radius.** The map fixes $R$ when $R=\alpha'/R$, i.e. $R^{*2}=\alpha'$, so
> $$\boxed{R^*=\sqrt{\alpha'}}$$
> — the string length. Every $R<R^*$ is dual to some $R'=\alpha'/R>R^*$, so $R^*$ is the edge of the fundamental domain: circles smaller than the string length buy no new physics.
>
> **(b) Massless states at $R^*$.** Take $(n,m)=(1,-1)$. Level matching forces $N^\perp-\bar N^\perp=nm=-1$, so the cheapest choice is $N^\perp=0,\ \bar N^\perp=1$. At $R=\sqrt{\alpha'}$ the first two terms are each $1/\alpha'$:
> $$M^2 = \frac{1}{\alpha'} + \frac{1}{\alpha'} + \frac{2}{\alpha'}\big(0+1-2\big) = \frac{2}{\alpha'} - \frac{2}{\alpha'} = 0.$$
> The same works for $(n,m)=(1,1)$ with $N^\perp=1,\bar N^\perp=0$, and for the two sign-flips $(-1,\mp1)$: **four** extra massless states. Each carries $m\ne0$, so it exists *only* on the compact circle and is invisible in the decompactification limit — a "truly stringy" state. Away from $R^*$ the term $\big(\tfrac1R-\tfrac{R}{\alpha'}\big)^2>0$ lifts them.
>
> **Enhancement.** A generic circle carries two $U(1)$ gauge bosons, the Kaluza–Klein photons from $g_{\mu 25}$ and $B_{\mu 25}$. The four new massless spin-1 states join them to fill out the adjoint of a non-abelian group: $U(1)\times U(1)\ \to\ SU(2)\times SU(2)$. This is the closed-string cousin of the non-abelian gauge symmetry that appears on coincident D-branes.
