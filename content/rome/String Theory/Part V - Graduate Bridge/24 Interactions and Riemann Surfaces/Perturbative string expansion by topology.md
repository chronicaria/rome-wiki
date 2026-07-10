---
title: Perturbative string expansion by topology
number: "24.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, topology]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

String perturbation theory is a sum over worldsheet *topologies* — each surface weighted by $g_s^{-\chi}$ with $\chi$ its Euler number — so "add a loop" literally means "add a handle," and the genus-$g$ closed surface carries $(g_s^2)^{g-1}$.

In QFT you sum Feynman diagrams: more loops, more powers of the coupling. In string theory there are no vertices to draw, only surfaces — so "more loops" becomes "more handles," and the single knob $g_s$ counts handles. The Feynman expansion is replaced by a *topology* expansion, and that is the whole content of perturbative string theory.

## Why topology is the only place a coupling can hide

The [[Splitting and joining worldsheets|worldsheet dynamics]] is the free [[Polyakov action]] and nothing else: you cannot bolt a $\lambda\phi^3$ interaction term onto it without wrecking the gauge symmetries. So where does an interaction — and its coupling — come from? The Polyakov path integral already sums over all worldsheet *metrics* at fixed topology. The one new instruction is:

> **Also sum over all worldsheet topologies.** Two-string scattering gets a contribution from the cylinder, the cylinder-with-one-handle, with-two-handles, and so on.

To weight the topologies you need a number that (a) is invariant under all the symmetries and (b) actually distinguishes topologies. In 2d there is exactly one such term — the Einstein–Hilbert action:
$$S_{\text{string}} = S_{\text{Poly}} + \lambda\,\chi, \qquad \chi = \frac{1}{4\pi}\int d^2\sigma\,\sqrt{h}\,R. \tag{1}$$
Here $R$ is the **worldsheet** Ricci scalar (curvature of the 2d surface, not of spacetime), and we work on the Euclidean worldsheet so the path-integral weight is $e^{-S}$. In four dimensions this term makes gravity dynamical; in two dimensions the metric is pure gauge, so classically $\lambda\chi$ *does nothing* to the local physics. That is exactly what we want — a term that is invisible locally but sees the global shape.

Its whole job is topological. By **Gauss–Bonnet**, the integral in (1) is a metric-*independent* integer, the Euler number:
$$\chi = 2 - 2h \quad(\text{closed, } h \text{ handles}), \qquad \chi = 2 - 2h - b \quad(\text{with } b \text{ boundaries}). \tag{2}$$
For a surface with boundary the definition of $\chi$ also needs a boundary term $\frac{1}{2\pi}\int_{\partial}ds\,k$ ($k$ = geodesic curvature) to stay topological; with it, (2) still gives an integer. For closed surfaces $\chi = 2-2g$ with $g$ the **genus** (number of handles): sphere $g=0,\chi=2$; torus $g=1,\chi=0$; double-torus $g=2,\chi=-2$.

## Reading off the power of $g_s$

Because $e^{-\lambda\chi}$ multiplies each topology, define the **string coupling**
$$g_s = e^{\lambda}. \tag{3}$$
A genus-$g$ closed surface has $\chi = 2-2g$, so its weight is
$$e^{-\lambda\chi} = e^{-2\lambda(1-g)} = \big(e^{2\lambda}\big)^{\,g-1} = (g_s^2)^{\,g-1}. \tag{4}$$
Equivalently, since $g_s^{-\chi}=g_s^{2g-2}=(g_s^2)^{g-1}$, the weight is just $g_s^{-\chi}$. The perturbative amplitude for $m$ external states is
$$\mathcal{A}^{(m)} = \sum_{\text{topologies}} g_s^{-\chi}\,\frac{1}{\mathrm{Vol}}\int\mathcal{D}X\,\mathcal{D}h\; e^{-S_{\text{Poly}}}\prod_{i=1}^m V_{\Lambda_i}(p_i), \tag{5}$$
where $\mathrm{Vol}$ divides out the residual conformal symmetry (the [[Moduli spaces|conformal Killing group]]).

**Closed strings, genus by genus:**

| surface | genus $g$ | $\chi$ | weight $g_s^{-\chi}=(g_s^2)^{g-1}$ | order |
|---|---|---|---|---|
| sphere | 0 | $2$ | $g_s^{-2}$ | tree |
| torus | 1 | $0$ | $g_s^{0}$ | one loop |
| genus 2 | 2 | $-2$ | $g_s^{2}$ | two loops |

Each extra handle multiplies the weight by $g_s^2$ — one factor of $g_s^{-\chi}$ per unit drop of $\chi$, and a handle drops $\chi$ by $2$.

## Why a handle *is* a loop

Think of the two elementary things a string can do: a closed string can **split** into two, and two can **join** into one. Assign the amplitude for one such elementary event a factor of $g_s$. Now build a one-loop process: a string splits off a virtual closed string, which propagates and is reabsorbed. Geometrically that virtual string is a *tube that leaves the surface and comes back* — a **handle**. Emit + reabsorb = two elementary events = $g_s^2$, exactly the cost of one handle in (4).

So the dictionary is literal:

- **$g_s$ = the amplitude for one string to split or join.** Weak coupling $g_s\ll1$ means strings rarely interact, so the topology sum converges (asymptotically) — the leading sphere dominates.
- **handle = loop.** The genus counts loops the same way the loop number counts loops in QFT. There is no separate loop integral bolted on; the "loop" is a feature of the surface itself, and integrating over its shape is [[Moduli spaces|integrating over moduli]].

The whole expansion collapses to one statement: a string diagram is a surface, the only coupling is how hard it is to poke a handle into that surface, and each handle costs $g_s^2$ because building it takes one split and one join.

## Open strings: boundaries as well as handles

Open strings add **boundaries** (the free string edges) to the bookkeeping, so $\chi = 2-2h-b$:

| surface | $(h,b)$ | $\chi$ | weight | order |
|---|---|---|---|---|
| disk | $(0,1)$ | $1$ | $g_s^{-1}$ | tree |
| annulus | $(0,2)$ | $0$ | $g_s^0$ | one loop |

Adding a boundary drops $\chi$ by $1$ — half a handle's worth — which forces a relation between the open- and closed-string couplings. Define $g_{\text{open}}$ so that inserting one open-string vertex on a boundary costs one power of $g_{\text{open}}$. The disk with the right normalization then reproduces the topological weight $g_s^{-1}$ only if
$$g_{\text{open}}^2 = g_s. \tag{6}$$
Intuitively: an open string joining its two ends into a closed string is *one* open-string event ($g_{\text{open}}$) that produces *half* a closed-string handle, so the closed coupling is the square. This is why the four-open-string tree amplitude in [[The Veneziano amplitude]] carries $g_{\text{open}}^2$ (one disk, i.e. one factor of $g_s = g_{\text{open}}^2$), not $g_{\text{open}}^4$.

## Tree = sphere/disk: the conformal collapse

A tree diagram has external legs running to infinity; conformally those legs collapse to [[Riemann surfaces replace Feynman graphs|punctures]] and the surface rounds off to a sphere (closed) or disk (open). So "tree-level four-string scattering" *is* "the four-punctured sphere/disk," and even at fixed topology the surface still has a [[Moduli spaces|moduli space]] of inequivalent shapes to integrate over — see [[The four-open-string modulus]]. The number of loops is literally the number of handles.

## One-loop preview: the torus and its modular group

At one loop the surfaces are the **torus** (closed) and **annulus** (open). The torus is $\mathbb{C}$ with the identifications $z\equiv z+2\pi$ and $z\equiv z+2\pi\tau$, so its shape is one complex modulus $\tau$ in the upper half-plane. But not every $\tau$ is a new torus: relabeling the two cycles is a change of lattice basis, and the basis changes form the **modular group** $SL(2,\mathbb{Z})$,
$$\tau\longmapsto\frac{a\tau+b}{c\tau+d}, \qquad a,b,c,d\in\mathbb{Z},\ ad-bc=1, \tag{7}$$
generated by $T:\tau\to\tau+1$ and $S:\tau\to-1/\tau$. The moduli space is therefore the upper half-plane *modulo* $SL(2,\mathbb{Z})$ — one fundamental domain, not the whole plane.

That quotient is where string UV-softness lives. The would-be short-distance region of the loop integral is mapped by $S:\tau\to-1/\tau$ to a long-distance region already counted, so it is excluded from the fundamental domain: the point-particle UV divergence has nowhere to occur. The [[Riemann surfaces replace Feynman graphs|same conformal move]] shows up for the annulus, whose two degeneration limits are one open string propagating a long time versus one closed string propagating a long distance — the two channels are conformally the same surface. The loop-amplitudes module makes this precise; here it is only a pointer.

## Open questions

- Gauss–Bonnet ($\frac{1}{4\pi}\int\sqrt{h}\,R = \chi$, plus the boundary term) is used, not proved. A self-contained proof is a differential-geometry prerequisite; this note needs only metric-independence and the formulas (2).
- The genus sum is asymptotic, not convergent. The nonperturbative meaning of "sum over all topologies" is beyond this module.
- That $S,T$ *generate* $SL(2,\mathbb{Z})$ is stated, not proved; it belongs with the loop-amplitudes module.

## Exercise

The genus-$g$ closed surface has weight $(g_s^2)^{g-1}$, and the disk has weight $1/g_s$. Consider the **Möbius strip** — an *unorientable* one-loop open-string surface. It has $h=0$, one boundary $b=1$, and one crosscap (the twist); the Euler formula generalizing (2) is $\chi = 2 - 2h - b - c$ with $c$ the number of crosscaps.

(a) Compute $\chi$ and the topological weight $g_s^{-\chi}$ for the Möbius strip.
(b) Compare its power of $g_s$ to the annulus. At what order (tree / one loop / …) does the Möbius strip contribute, and is that consistent with calling it a one-loop surface?

> [!success]- Solution
> **(a)** For the Möbius strip $h=0,\ b=1,\ c=1$, so
> $$\chi = 2 - 2(0) - 1 - 1 = 0.$$
> The weight is $g_s^{-\chi} = g_s^{0} = 1$ — no power of $g_s$.
>
> **(b)** The annulus also has $\chi = 0$ (from $h=0,b=2$) and weight $g_s^0$. So the Möbius strip carries the *same* power of the coupling as the annulus. Both are $\chi=0$ open-string surfaces, hence both are **one-loop**: relative to the tree-level disk ($\chi=1$, weight $g_s^{-1}$) each is suppressed by one factor of $g_s = g_{\text{open}}^2$. This is consistent — one loop means $\chi$ has dropped by one unit below tree level, whether that unit comes from adding a boundary (annulus) or a crosscap (Möbius strip). The count "loop order $= (\chi_{\text{tree}} - \chi)$" is what matters, not the specific way the surface was complicated.
