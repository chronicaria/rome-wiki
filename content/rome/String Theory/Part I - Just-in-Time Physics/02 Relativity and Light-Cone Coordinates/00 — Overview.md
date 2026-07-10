---
title: 02 — Relativity and Light-Cone Coordinates (Overview)
number: "2.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, light-cone]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Aligning coordinates with light rays turns the mass shell — the one equation every relativistic object must obey — from a square root into a division. Compactifying one spatial direction then makes momentum discrete.

## Trading the square root for a division

Every relativistic particle carries a four-momentum $p^\mu = (E/c, \vec p)$, and its squared Minkowski length is pinned by the rest mass (mostly-plus signature):

$$ p\cdot p = -m^2c^2. $$

This is a *constraint*, not a force law — it does not say how $p$ evolves, only which momenta are allowed. Solved for the energy in ordinary coordinates it gives $E = c\sqrt{\vec p^{\,2} + m^2c^2}$, a square root; after quantization that square root becomes an awkward operator, and string theory dodges it with a coordinate trick.

The trick: instead of measuring time along the vertical axis, measure it along a light ray. Define $x^\pm = (x^0 \pm x^1)/\sqrt2$ — the two $45^\circ$ null directions in the time/$x^1$ plane. In this skewed frame the time–space block of the Minkowski quadratic form has no diagonal $(x^+)^2$ or $(x^-)^2$ term at all: it is the pure cross-term $-2\,x^+x^-$, and the transverse directions ride along unchanged. The mass shell becomes

$$ -2\,p^+p^- + p_T^2 = -m^2c^2, $$

with $p_T^2 = \sum_I (p^I)^2$ the squared momentum in the transverse directions $I = 2,\dots,D-1$ of $D$-dimensional spacetime (here $D=4$, so $I = 2,3$). The light-cone energy $p^-$ appears only to the first power, so no square root — divide:

$$ \boxed{\,p^- = \frac{p_T^2 + m^2c^2}{2p^+}\,}. $$

That single algebraic fact is the reason light-cone coordinates exist. Light-cone string quantization is tractable because it repeats this finite-dimensional move across infinitely many oscillator modes at once: the string's energy becomes an oscillator expression divided by $2p^+$, and only the transverse directions stay dynamical.

The same thing happens for a plain hyperbola. Solving $y^2 - x^2 = k$ for $y$ needs a square root; in the null variables $u = (y+x)/\sqrt2$, $v = (y-x)/\sqrt2$ the curve reads $2uv = k$, solved by one division, $v = k/(2u)$. Same curve, better axes — and the mass shell is exactly this hyperbola, one dimension up.

## The four moving parts

Each becomes its own note; here is why each exists and how it feeds the next.

1. **2.1 [[Minkowski metric and the mass shell]]** — the indefinite geometry itself. Time and space enter the interval with opposite signs, $-ds^2 = -(dx^0)^2 + (dx^i)^2$, and feeding the four-momentum into that form yields $p\cdot p = -m^2c^2$. The mass shell is a Lorentz-invariant level set: all observers agree on $m$.
2. **2.2 [[Light-cone coordinates]]** — the skew change of basis $x^\pm = (x^0\pm x^1)/\sqrt2$. The metric goes off-diagonal, $\eta_{+-} = \eta_{-+} = -1$, and index-lowering swaps the labels: $a_+ = -a^-$. The quadratic form becomes bilinear in $+$ and $-$ instead of quadratic in either — the payoff set up here and cashed in next.
3. **2.3 [[Solving the mass shell in light-cone coordinates]]** — the payoff itself. Because $\eta_{--} = 0$, the mass shell is linear in $p^-$, and $p^- = (p_T^2 + m^2c^2)/(2p^+)$ follows by pure algebra. One subtlety earns its own discussion there: the light-cone *energy* is $p^-$, not $p^+$, because $x^+$ is the light-cone time and its conjugate covariant component is $p_+ = -p^-$.
4. **2.4 [[Momentum quantization on a circle]]** — an independent, quantum-mechanical thread. Curl one spatial direction into a circle $S^1 = \mathbb{R}/(2\pi R\,\mathbb{Z})$; single-valuedness of the wavefunction then forces $p = \hbar n/R$, $n\in\mathbb{Z}$. Continuous translation symmetry survives, but the global condition "go once around = identity" allows only integer modes — the seed of Kaluza–Klein towers and, later, string winding.

The spine connecting them: notes 1–3 are one idea in two coordinate systems — the mass shell, first as invariant geometry, then re-expressed so it is trivially solvable. Note 4 stands apart as the mechanism by which compactness discretizes momentum, included because the same relativistic four-momentum reappears there as a mass tower $m_n^2 = M^2 + \hbar^2 n^2/(c^2R^2)$.

Two conventions to lock in now, because everything downstream leans on them:

- Mostly-plus signature $(-,+,+,+)$ throughout, so $p^2 = -m^2c^2$. Many particle-physics texts use mostly-minus, which flips the sign; always check before importing a formula.
- Never lower $\pm$ indices without writing the sign swap explicitly. Keep them up; the energy is always $p^-$.

Nothing here needs physics beyond special relativity's energy-momentum relation and a plane wave $e^{ipx/\hbar}$. Everything else is derived in place.

## Open questions

- Later chapters set $c=1$ and often $\hbar=1$; track which constants have been suppressed so nonrelativistic comparisons still make sense.
- Light-cone gauge will assume $p^+\neq 0$. The excluded case is a massless particle moving exactly along the $-x^1$ null ray, where $p^+ = 0$ and the division above breaks — revisit why that sector is safely dropped.
- For strings, winding modes add energy $\propto R$, competing with the momentum tower's $\propto 1/R$. That tension is [[T-duality]], deferred until the string spectrum exists.

## Exercise

Close every note and work on a blank page; the two parts are the module's two core results — the square-root-free energy and the discreteness mechanism.

1. Starting from $p\cdot p = -m^2c^2$, use the light-cone scalar product to solve for $p^-$ in terms of $p^+$, the transverse momenta $p^I$ ($I = 2,\dots,D-1$), and $m^2$. Identify exactly where the factor of $2$ enters and explain, in one sentence, why no square root appears.
2. Starting from the identification $x \sim x + 2\pi R$, impose single-valuedness on a plane wave $e^{ipx/\hbar}$ and derive $p = \hbar n/R$, $n\in\mathbb{Z}$. Name the exact global condition that forces discreteness.

> [!success]- Solution
> **Part 1.** The light-cone self-product of the momentum is
> $$ p\cdot p = -2\,p^+p^- + p_T^2, \qquad p_T^2 \equiv \sum_{I=2}^{D-1}(p^I)^2. $$
> The factor of $2$ comes from the *two* off-diagonal metric entries $\eta_{+-} = \eta_{-+} = -1$, which both multiply $p^+p^-$ and add. Setting this equal to $-m^2c^2$:
> $$ -2\,p^+p^- + p_T^2 = -m^2c^2 \;\Longrightarrow\; 2\,p^+p^- = p_T^2 + m^2c^2 \;\Longrightarrow\; \boxed{\,p^- = \frac{p_T^2 + m^2c^2}{2p^+}\,}. $$
> No square root appears because $\eta_{--} = 0$: the mass shell has no $(p^-)^2$ term, so it is linear in $p^-$, and a linear equation is solved by one division (valid whenever $p^+\neq 0$).
> Sanity check: a particle boosted hard along $+x^1$ with $p_T = 0$ has $p^0 = \sqrt{(p^1)^2 + m^2c^2} \simeq p^1 + \frac{m^2c^2}{2p^1}$, so $p^+ = \frac{p^0+p^1}{\sqrt2} \simeq \sqrt2\,p^1$ and $p^- = \frac{p^0-p^1}{\sqrt2} \simeq \frac{m^2c^2}{2\sqrt2\,p^1}$ — exactly the boxed formula's $m^2c^2/(2p^+)$ at $p^+ = \sqrt2\,p^1$. $\checkmark$
>
> **Part 2.** A momentum eigenstate along the compact direction is $\psi(x) = e^{ipx/\hbar}$. Because $x$ and $x + 2\pi R$ name the *same point* on the circle, $\psi$ must return to itself after one loop:
> $$ \psi(x + 2\pi R) = \psi(x) \;\Longrightarrow\; e^{ip(2\pi R)/\hbar} = 1. $$
> A complex exponential equals $1$ iff its phase is an integer multiple of $2\pi$:
> $$ \frac{p\,(2\pi R)}{\hbar} = 2\pi n, \; n\in\mathbb{Z} \;\Longrightarrow\; \boxed{\,p = \frac{\hbar n}{R}\,}. $$
> The exact global condition is **single-valuedness of the wavefunction under the identification $x\sim x+2\pi R$** — the $2\pi$'s cancel, so the answer is $\hbar n/R$ (radius $R$), not $2\pi\hbar n/R$. The integer $n$ counts phase windings per trip around the circle.
