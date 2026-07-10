---
title: 00 — Overview
number: "24.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, overview]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string interaction is one smooth worldsheet with the external strings pinched to marked points; quotient it by conformal symmetry and scattering becomes an integral over the *shapes* of that surface — for four open strings, a single integral that is the Veneziano amplitude.

## No interaction point

A point particle traces a **worldline**; when two of them meet, you get a new local object — a **vertex**, a kink where lines cross. That kink is where you write the coupling constant.

A string traces a **worldsheet** — the history is already two-dimensional. So when strings join or split, nothing new is glued on. You just *bend the same surface*: a tube smoothly branches into two tubes, like a pair of trousers. Zoom in anywhere on that surface — even right at the crotch — and it looks exactly like a free string propagating. **There is no interaction point.** The interaction is a global fact about the surface's shape, not a local event you can put your finger on.

That single observation drives the whole module. If there is no vertex, there is no place to attach a coupling and no point to sum over. What replaces "sum over vertices"? **Integrate over the shapes of the surface.** The four moves below are just this idea made precise.

## The four moves of this module

1. **One surface, not a graph.** A join/split is a single smooth worldsheet. Locally free everywhere; the interaction lives only in the global topology and shape. → 24.1 [[Splitting and joining worldsheets]]

2. **Shape, not size.** The string action is invariant under Weyl rescaling, so lengths on the worldsheet are unphysical — only the *conformal* (angle-preserving, complex-analytic) structure matters. The worldsheet is therefore a **Riemann surface**. Under a conformal map to a bounded region, each semi-infinite external string shrinks to a single boundary point that is never actually reached — a **puncture**. External strings are punctures, not legs. → 24.2 [[Riemann surfaces replace Feynman graphs]]

3. **Fix what you can for free; integrate the rest.** At fixed topology, two punctured surfaces are "the same" if a conformal automorphism maps one to the other. That automorphism group — the **conformal Killing group** ($PSL(2,\mathbb{C})$ for the sphere, $PSL(2,\mathbb{R})$ for the disk) — lets you pin a few punctures to standard positions for free. Whatever coordinates survive are **moduli**, and they parametrize the **moduli space** of genuinely inequivalent shapes. → 24.3 [[Moduli spaces]]

4. **The amplitude is the moduli integral.** Each inequivalent shape is one "path" from initial to final states, so summing paths = integrating over the moduli space. For four open strings the moduli space is one real interval, so the amplitude is a single integral

$$A = g_o^2\int_0^1 d\lambda\ \lambda^{2\alpha' p_1\cdot p_2}\,(1-\lambda)^{2\alpha' p_2\cdot p_3}. \tag{1}$$

   This is the **Veneziano amplitude** — the formula written down in 1968, before anyone knew it came from a string. → 24.4 [[The four-open-string modulus]], 24.5 [[The Veneziano amplitude]]

The dynamical parameter here is a **time gap** $T$: two strings join, wait a time $T$, then split. Varying $T$ over $(-\infty,\infty)$ sweeps the modulus $\lambda$ across all of $(0,1)$ — the physical "when did they interact?" *is* the abstract coordinate on shape space. This is the central lesson of the module: **string interactions generate moduli spaces.**

## Why this is the bridge

This module is the step from *spectrum* (the free string's states) to *scattering* (how they collide). It is also where string theory's **UV softness** first peeks out: a region that looks like dangerous short-distance physics in one conformal frame can be re-drawn, by a conformal map, as harmless long-distance propagation in another. Doing amplitudes over moduli space, rather than over point vertices, is exactly what removes the point-particle UV blow-up. Loops just add handles to the surface; the same "integrate over shapes" logic carries over. → 24.6 [[Perturbative string expansion by topology]]

## The module, note by note

- 24.1 [[Splitting and joining worldsheets]] — the light-cone strip picture; choosing $\beta = 1/(\alpha' p^+)$ so that $X^+ = \tau$ lets all strings share one time; each string is a strip of width $2\pi\alpha' p^+$; open vs closed drawings.
- 24.2 [[Riemann surfaces replace Feynman graphs]] — Weyl invariance $\Rightarrow$ Riemann surface; the complex coordinate $w=\tau+i\sigma$ and the exponential map $z=\exp\!\big(w/(2\alpha' p^+)\big)$ to the upper half-plane $\overline{\mathbb{H}}$; strings become punctures.
- 24.3 [[Moduli spaces]] — moduli as coordinates on {surfaces}/{conformal maps}; conformal Killing groups; the counting rule moduli $=$ punctures $-$ symmetry; $\dim_{\mathbb{R}}\mathcal{M}_{0,4}=2$ (closed), $\dim\mathcal{N}_4=1$ (open).
- 24.4 [[The four-open-string modulus]] — the work: the Schwarz–Christoffel map, the time gap $T$, and why $T\in(-\infty,\infty)$ makes $\lambda$ cover all of $(0,1)$.
- 24.5 [[The Veneziano amplitude]] — the moduli integral $(1)$ evaluated as an Euler beta function, $A = g_o^2\,B(-\alpha(s),-\alpha(t))$ with $\alpha(s)=\alpha's+1$; its poles are the open-string spectrum; $s$/$t$-channel duality.
- 24.6 [[Perturbative string expansion by topology]] — sum over topologies weighted by $g_s^{-\chi}$; loops $=$ handles; $g_{\text{open}}^2=g_s$; the loop/UV forward pointer.

Recurring concepts linked outward: [[Polyakov action]], [[Light-cone gauge]], [[Mass-shell relation]], [[Weyl invariance|Conformal invariance]], [[Vertex operators and physical-state conditions|Vertex operators]].

## Open questions

- The **measure** in the Veneziano integral $(1)$ is *fixed* here by demanding conformal invariance, but not *derived* from first principles. The honest derivation needs the gauge-fixed Polyakov path integral with $b$–$c$ ghosts and normalized vertex operators; recorded as a deferral in 24.5 [[The Veneziano amplitude]].
- The move "worldsheet $=$ Riemann surface" quietly **Wick-rotates** the Lorentzian worldsheet ($-d\tau^2+d\sigma^2$) to Euclidean signature ($dx^2+dy^2$). It is used as a license, not proved; a precise Lorentzian-to-complex-structure statement is left for a later note.
- The general moduli count $\dim_{\mathbb{C}}\mathcal{M}_{g,n}=3g-3+n$ (for $g\ge 2$) is the natural sequel but belongs to the loop-amplitudes / higher-genus module, not this one.

## Exercise

**Explain why the four-open-string tree amplitude is an *integral over a modulus* rather than a *sum over a point-like vertex*. Then identify precisely which quantity is integrated, over what range, and what physically drives it across that range.**

Aim to answer cold, in your own words, then check against the solution.

> [!success]- Solution
> There is no vertex to sum over. The four-string tree history is a *single smooth worldsheet*, and locally every patch — including the join/split regions — looks like a free string, so there is no distinguished "interaction point" and nothing point-like to which a coupling could be attached. Contrast a $\phi^3$ QFT vertex, which *is* a single point carrying a single number (the coupling). → 24.2 [[Riemann surfaces replace Feynman graphs]]
>
> What survives instead is a shape. The action only sees the worldsheet up to Weyl/conformal rescaling, so the worldsheet is a Riemann surface. Conformally, the open four-string tree worldsheet is the upper half-plane $\overline{\mathbb{H}}$ (a disk) with **four boundary punctures**, one per external string. The conformal Killing group $PSL(2,\mathbb{R})$ has three real parameters, enough to pin **three** of the punctures to $0,1,\infty$. The fourth puncture's position is a genuine invariant — the **modulus** $\lambda\in(0,1)$. Counting: $4$ punctures $-\;3$ symmetry $=\;1$ modulus, i.e. $\dim\mathcal{N}_4 = 1$. → 24.3 [[Moduli spaces]]
>
> One physical quantity drives $\lambda$ across its range: the light-cone **time gap** $T = T_1 - T_2$ between the join at $Q_2$ and the split at $Q_1$. The Schwarz–Christoffel map to $\overline{\mathbb{H}}$ turns $T$ into $\lambda(T)$. The endpoint analysis shows $T\to+\infty$ gives $\lambda\to 0$ (punctures $P_1,P_2$ collide — a long strip in one channel) and $T\to-\infty$ gives $\lambda\to 1$ (punctures $P_2,P_3$ collide — a long strip in the other channel), so as $T$ runs over $(-\infty,\infty)$, $\lambda$ covers all of $(0,1)$. → 24.4 [[The four-open-string modulus]]
>
> The amplitude is therefore the moduli integral. Each inequivalent surface is one path contributing to it; summing them means integrating over the moduli space:
> $$A = g_o^2\int_0^1 d\lambda\ \lambda^{2\alpha' p_1\cdot p_2}\,(1-\lambda)^{2\alpha' p_2\cdot p_3}.$$
> The factor $g_o^2$ counts the two elementary interactions (one join, one split), each carrying one power of $g_o$. → 24.5 [[The Veneziano amplitude]]
>
> In short: no vertex exists to sum over, so the interaction is smeared across a one-parameter family of conformally inequivalent worldsheets, and conformal invariance forces you to integrate the modulus $\lambda$ over that family $(0,1)$.
