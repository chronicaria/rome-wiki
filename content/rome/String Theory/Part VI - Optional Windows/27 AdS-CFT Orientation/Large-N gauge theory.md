---
title: Large-N gauge theory
number: "27.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, holography]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Sending the number of colors $N\to\infty$ while holding $\lambda=g_{YM}^2N$ fixed sorts every Feynman diagram by the **topology of a surface** — and that surface is a string worldsheet. This is 't Hooft's clue that a gauge theory secretly *is* a string theory.

## Ribbons instead of lines

Draw a gauge-theory Feynman diagram not with thin lines but with **ribbons**. A gluon carries two color indices (color in, anti-color out), so its propagator is naturally a *double line* — a strip. Glue the strips of a diagram together and you get a two-dimensional surface with some number of handles. The surprise: when you count powers of $N$, **the answer depends only on how many handles the surface has**, nothing else. So the $1/N$ expansion is literally a sum over surfaces of increasing genus — the exact bookkeeping of closed-string loops, where a worldsheet with $h$ handles is a string $h$-loop diagram. Fatten the Feynman diagrams and they turn into discretized string worldsheets.

## Two couplings, one limit

An $SU(N)$ Yang–Mills theory has two knobs: the gauge coupling $g_{YM}$ and the rank $N$ (the number of colors). The combination that controls the physics is the **'t Hooft coupling**
$$\boxed{\;\lambda \;\equiv\; g_{YM}^2\,N\;}$$
The **'t Hooft limit** takes
$$N\to\infty \quad\text{with}\quad \lambda \text{ held fixed.}$$
Since $\lambda$ is fixed, $g_{YM}^2 = \lambda/N \to 0$: the coupling between any *two individual* colors vanishes, but the *collective* coupling $\lambda$ stays finite. Many weakly-interacting colors add up to genuinely strong dynamics — the way a gas of weakly-scattering molecules still exerts real pressure.

## Why $1/N$ counts topology

**Normalize the action** so the color counting is visible. Pull the coupling out front:
$$S=\frac{N}{\lambda}\int d^4x\,\mathrm{tr}\!\left((\partial A)^2+A^3+A^4+\cdots\right).$$
The field $A$ is an $N\times N$ matrix (adjoint of $SU(N)$), and the trace ties its color indices into loops. Two consequences of the $N/\lambda$ prefactor:

- The kinetic term $\tfrac{N}{\lambda}(\partial A)^2$ inverts to a **propagator** $\propto \lambda/N$.
- Each interaction term $\tfrac{N}{\lambda}\,\mathrm{tr}(A^3\ \text{or}\ A^4)$ gives a **vertex** $\propto N/\lambda$.

And the matrix structure gives the third rule:

- Each **closed color-index loop** is a sum $\sum_{a=1}^{N}$ over the color running around it, worth a factor $N$.

Now draw the diagram in **double-line (ribbon) notation**: every propagator is a strip bounded by two index lines, every vertex is where strips meet, and every closed index line bounds a **face** of the resulting surface. Read off three integers:

- $V$ = number of vertices,
- $E$ = number of propagators (edges of the ribbon graph),
- $F$ = number of closed index loops (faces).

Multiply the three factors:
$$\left(\frac{\lambda}{N}\right)^{E}\left(\frac{N}{\lambda}\right)^{V} N^{F}
=\lambda^{\,E-V}\;N^{\,V-E+F}. \tag{1}$$
The exponent of $N$ is a pure combinatorial invariant of the surface,
$$V-E+F=\chi,$$
the **Euler characteristic**. For a closed orientable surface with $h$ handles (genus $h$), $\chi = 2-2h$. So every diagram scales as
$$\boxed{\;\lambda^{\,E-V}\;N^{\,2-2h}\;}\tag{2}$$

## The payoff

Equation (2) has two consequences.

- **The power of $N$ is fixed by topology alone** — the number of handles $h$ — and is blind to every other detail of the diagram. Sphere diagrams ($h=0$, drawable on a plane with no crossings, the **planar** diagrams) dominate at $N^2$. Each extra handle costs a factor $N^{-2}$.
- Therefore the $1/N$ expansion **is a sum over surfaces graded by genus**:
$$\text{amplitude} \;=\; N^{2}\big[\,c_0(\lambda) + N^{-2}c_1(\lambda) + N^{-4}c_2(\lambda)+\cdots\big],$$
one term per genus. This is *exactly* the shape of the closed-string perturbation series, where a genus-$h$ worldsheet carries $g_s^{\,2h-2}$ ([[Perturbative string expansion by topology]], [[String coupling and the dilaton]]).

Matching the two genus expansions term by term forces
$$g_s \;\sim\; \frac{1}{N}.$$
This dovetails with the quoted dictionary from [[Gauge-gravity duality]]: there $g_s = g_{YM}^2$, and at fixed $\lambda$ that is $g_s = g_{YM}^2 = \lambda/N \propto 1/N$. The two routes agree — genus-matching and the D3-brane dictionary give the same $g_s(N)$.

What the counting does **not** give you is the continuous worldsheet or the target-space geometry; it fixes only the *topological weights*. Supplying the actual string background — $\mathrm{AdS}_5\times S^5$ for the $\mathcal{N}=4$ SYM case — is the extra content of AdS/CFT, not of large-$N$ alone. Large-$N$ says "a string theory is hiding here"; AdS/CFT says *which* one.

## How the two parameters split the labor

With $g_s=g_{YM}^2$ and $R^4/\alpha'^2=\lambda$ (the [[Gauge-gravity duality]] dictionary), the 't Hooft limit cleanly separates the two string parameters:

- **$\lambda$ sets the curvature.** $R/\sqrt{\alpha'}=\lambda^{1/4}$: large $\lambda$ means a weakly curved geometry with small $\alpha'$ (stringy) corrections, so supergravity is trustworthy; small $\lambda$ means a stringy geometry but reliable gauge perturbation theory.
- **$1/N$ sets the string loops** at fixed $\lambda$: $g_s=\lambda/N\to 0$, so at $N=\infty$ the bulk is classical (no string loops), and $1/N^2$ corrections are bulk quantum loops — one added handle at a time, per (2).

So the cleanest corner of AdS/CFT sits at $N\to\infty$, large $\lambda$: **classical supergravity in the bulk ↔ planar, strongly-coupled $\mathcal{N}=4$ SYM on the boundary.** Both simplifications are the *same* limit viewed from the two sides.

## Open questions

- The counting used a schematic action and vacuum diagrams. Adding ghosts, fermions, scalars, and normalized single-trace operator insertions changes overall powers of $N$ but never the genus rule — every handle still costs $1/N^2$. Seeing this survive a full field content is left to a QFT course.
- 't Hooft's 1974 claim that *every* large-$N$ gauge theory is dual to *some* string theory remains a conjecture in general; AdS/CFT is its first sharp realization, not a proof of the general statement.

## Exercise

Take a single **quartic** vertex ($V=1$) and contract its four legs pairwise into $E=2$ double-line propagators. There are two topologically distinct ways to do the contraction: an **uncrossed** (planar) one and a **crossed** (non-planar) one. Using the double-line rules, find the face count $F$, Euler characteristic $\chi$, genus $h$, and power of $N$ for each, and confirm that the crossed diagram is suppressed relative to the planar one by exactly $1/N^2$.

> [!success]- Solution
> Both diagrams have $V=1$, $E=2$, so from Euler's formula $\chi = V-E+F = F-1$, and the $N$-power is $N^{\chi}$ (with a common $\lambda^{E-V}=\lambda^{1}$ prefactor that is the same for both).
>
> **Uncrossed (planar).** Drawing the two ribbons without crossing, the index lines close into $F=3$ separate loops. Then
> $$\chi = 1-2+3 = 2 = 2-2h \;\Rightarrow\; h=0,\qquad \text{weight}\ \propto \lambda\,N^{2}.$$
> The surface is a sphere — a planar diagram, as expected.
>
> **Crossed (non-planar).** Twisting one ribbon so the two propagators cross, the index lines now join into a single loop, $F=1$. Then
> $$\chi = 1-2+1 = 0 = 2-2h \;\Rightarrow\; h=1,\qquad \text{weight}\ \propto \lambda\,N^{0}.$$
> The surface is a torus — one handle.
>
> **Ratio.** $\dfrac{N^{0}}{N^{2}} = \dfrac{1}{N^{2}}$: the single crossing costs exactly one factor of $1/N^2$, i.e. $g_s^{2}$. One crossing = one handle = one string loop, precisely the content of $N^{\,2-2h}$ in (2).
