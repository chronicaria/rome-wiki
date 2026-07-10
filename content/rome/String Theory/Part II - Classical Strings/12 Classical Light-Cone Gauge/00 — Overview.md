---
title: "12 — Classical Light-Cone Gauge (Overview)"
number: "12.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, light-cone-gauge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Light-cone gauge makes one light-ray coordinate $X^+$ the worldsheet clock, uses the constraints to *solve* for the other light-ray coordinate $X^-$, and leaves the $D-2$ transverse coordinates $X^I$ as the only fields that freely wiggle.

## A string can only move sideways

A classical string is a wiggling line in $D$-dimensional spacetime, described by $D$ embedding functions $X^\mu(\tau,\sigma)$. Not all $D$ are physical: the description is *redundant* in two ways, and both redundancies must be removed before "how much is the string actually doing?" has an honest answer.

A point sliding *along* the string toward its neighbor changes neither the string's shape nor where it sits in space — it only relabels which value of $\sigma$ marks that spacetime point. Sliding is reparameterization bookkeeping, not motion; the string's genuine motion is sideways. Light-cone gauge is the coordinate choice that turns this fact into a clean equation: after gauge-fixing, the physical fields *are* the transverse coordinates $X^I$.

The mechanism has three moves:

1. **Pick a clock.** Instead of ordinary time $X^0$, use the light-ray combination $X^+ = (X^0+X^1)/\sqrt2$. Spend the gauge freedom to force $X^+ = 2\alpha' p^+\tau$ (natural units $\hbar=c=1$ throughout). Now $X^+$ is not a field to solve for; it is the worldsheet time $\tau$ in disguise.
2. **Solve, don't just impose.** In light-cone coordinates the two constraints $(\dot X\pm X')^2=0$ that tangled everything in earlier gauges become *linear* equations for the derivatives of the other light-ray coordinate $X^-$. You reconstruct $X^-$ from the transverse data — no square root, no tangle.
3. **What's left is physical.** $X^+$ is the clock, $X^-$ is reconstructed, so the genuine motion lives entirely in the $D-2$ transverse coordinates $X^I$.

Of the $D$ coordinates, then: one becomes the clock, one is dictated by the constraints, and the remaining $D-2$ are the string's actual degrees of freedom. That count is the module's headline.

## Why one algebraic fact makes it all work

Everything hinges on the shape of the metric in light-cone coordinates. With mostly-plus signature $\eta = \mathrm{diag}(-,+,+,\dots)$ and $X^\pm = (X^0\pm X^1)/\sqrt2$,
$$
a\cdot b = -a^+b^- - a^-b^+ + a^Ib^I,
$$
which has **no $(a^-)^2$ term** — the $(+,-)$ block is off-diagonal. So a constraint like $(\dot X\pm X')^2 = 0$, quadratic in general, is only *linear* in the unknown $\dot X^-\pm X^{-\prime}$. In static gauge (freeze $X^0$) the leftover constraints stay quadratic and couple all $D-1$ spatial fields; you can impose them but never invert them. Light-cone gauge trades a familiar time coordinate for a metric that lets you divide instead of extracting a root, and the price is that Lorentz symmetry is no longer manifest.

## The module in one recipe

For the open string, read light-cone gauge as an input-output machine:
$$
\{\,x_0^I,\ p^I,\ \alpha_n^I,\ p^+,\ x_0^-\,\}
\quad\Longrightarrow\quad
X^I(\tau,\sigma),\ X^+(\tau,\sigma),\ X^-(\tau,\sigma).
$$

You freely choose the transverse oscillator data $\{x_0^I,p^I,\alpha_n^I\}$ and two longitudinal constants $\{p^+,x_0^-\}$. The gauge gives $X^+ = 2\alpha' p^+\tau$ immediately; the constraints give $X^-$ by integration. No longitudinal oscillator $\alpha_n^-$ is ever chosen independently — each is fixed to a quadratic in the transverse modes.

Explicitly:

- $X^+ = 2\alpha' p^+\tau$ (the clock);
- $X^I = x_0^I + \sqrt{2\alpha'}\,\alpha_0^I\,\tau + i\sqrt{2\alpha'}\sum_{n\neq0}\tfrac1n\,\alpha_n^I\,e^{-in\tau}\cos n\sigma$, with $\alpha_0^I = \sqrt{2\alpha'}\,p^I$ (the free physical wiggles);
- $\sqrt{2\alpha'}\,\alpha_n^- = \dfrac{1}{p^+}L_n^\perp$, with $L_n^\perp \equiv \tfrac12\sum_{p\in\mathbb Z} \alpha_{n-p}^I\alpha_p^I$ (the reconstructed $X^-$).

## Why this module matters

Module 11 solved the string equations of motion only *partially*: the constraints $\dot X\cdot X' = 0$ and $\dot X^2 + X'^2 = 0$ were still sitting there, entangling the components of $X^\mu$, and we never got a clean degree-of-freedom count. This module finishes the job by exhibiting the $D-2$ physical transverse fields explicitly.

It is also the hinge into Part III. When we quantize, the transverse oscillators $\alpha_n^I$ become the creation/annihilation operators that build the entire string spectrum, and the reconstruction $\alpha_n^-\sim L_n^\perp$ becomes the source of the critical dimension: demanding that the *hidden* Lorentz generators still close into the correct algebra forces $D=26$. That anomaly, and the normal-ordering shift $a=-1$ that turns the classical $M^2\geq0$ formula into a spectrum with a tachyon, are flagged below and derived in Part III.

## Sublessons

- 12.1 [[Light-cone gauge]] — a short hub for the clock / constraint / reconstruction picture.
- 12.2 [[Fixing X-plus as worldsheet time]] — the gauge choice $n\cdot X = \beta\alpha'(n\cdot p)\tau$ with $n$ null, giving $X^+ = 2\alpha' p^+\tau$ (open, $\beta=2$).
- 12.3 [[Light-cone constraints]] — how $(\dot X\pm X')^2 = 0$ become *solvable* for $\dot X^-\pm X^{-\prime}$, because the $(+,-)$ metric is off-diagonal.
- 12.4 [[Transverse coordinates as physical degrees of freedom]] — why the $X^I$ alone are physical, and how $X^-$ is reconstructed via the transverse Virasoro modes.
- 12.5 [[Mode expansions in light-cone gauge]] — the open-string solution $X^I(\tau,\sigma)$, the relation $\sqrt{2\alpha'}\,\alpha_n^- = \frac1{p^+}L_n^\perp$, and the mass formula $M^2 = \frac1{\alpha'}\sum_{n\geq1} n\,a_n^{I*}a_n^I$.

Supporting / recurring notes: [[Light-cone coordinates]], [[Mass-shell relation]], [[Neumann versus Dirichlet conditions|Neumann boundary conditions]], [[Virasoro constraints]], [[Transverse Virasoro operators|Virasoro modes]], [[Static gauge]].

## Static gauge versus light-cone gauge

| | Static gauge | Light-cone gauge |
|---|---|---|
| Clock | $X^0 = \tau$ ($n$ timelike) | $X^+ = 2\alpha' p^+\tau$ ($n$ null) |
| Constraints | can only be *imposed* | can be *solved* for $\dot X^-\pm X^{-\prime}$ |
| Physical fields | $D-1$ spatial $X^i$, still tangled | $D-2$ transverse $X^I$, free |
| Manifest symmetry | spatial rotations; boosts need compensating reparameterizations | transverse rotations; boosts mixing $+,-,I$ are hidden |
| Best for | visualizing string shapes | counting dof, solving completely, quantizing |

Both freeze one coordinate. The difference is the leftover constraint: static gauge leaves a nonlinear relation among all $D-1$ spatial fields (nothing isolates); light-cone gauge leaves a term $-2\dot X^+\dot X^- = -2(2\alpha' p^+)\dot X^-$ that is **linear** in $\dot X^-$, so you divide it out. The null direction is exactly what converts a quadratic-looking constraint into a linear reconstruction.

## Open questions

- Light-cone gauge breaks manifest Lorentz invariance (it singles out the $x^1$ direction). Classically harmless, but this is where quantization bites: requiring the broken Lorentz generators to close forces $D=26$. Deferred to Part III.
- The classical mass formula $M^2 = \frac1{\alpha'}\sum_{n\geq1} n\,a_n^{I*}a_n^I \geq 0$ says the classical string is never a tachyon. Quantization adds a normal-ordering constant $a=-1$ (from a *regularized* $\sum_{n\geq1} n = \zeta(-1) = -\tfrac1{12}$ via a cutoff — never the naive divergent sum), producing a tachyon at $D=26$ and discretizing the spectrum. Deferred to Part III.
- This module treats the open string. The closed string uses $\beta=1$, $\sigma\in[0,2\pi]$, independent left/right movers, and a global level-matching condition; deferred to the closed-string modules.

## Exercise

Sharpen the module's core result: reconstruct the degree-of-freedom count and write the physical solution cold, with correct factors.

**(a)** Starting from $D$ embedding fields $X^\mu$, explain in one sentence each how $X^+$ and $X^-$ are eliminated, and state exactly what free data remains.

**(b)** Write the open-string transverse mode expansion $X^I(\tau,\sigma)$ and the frozen $X^+(\tau,\sigma)$, giving $\alpha_0^I$ and the fixed values $x_0^+,\alpha_n^+$.

**(c)** Sign/factor check: the light-cone metric contributes a factor $2$ and the open-string gauge gives $\dot X^+ = 2\alpha' p^+$. Combine them to read off the coefficient in $\dot X^-\pm X^{-\prime} = C\,(\dot X^I\pm X^{I\prime})^2$, and confirm $C = \frac{1}{4\alpha' p^+}$.

> [!success]- Solution
> **(a)** *$X^+$ is frozen by the gauge* — the reparameterization freedom is spent to set $X^+ = 2\alpha' p^+\tau$, so $X^+$ carries no dynamical data beyond the single number $p^+$ (its zero-mode position and all oscillators are zero). *$X^-$ is solved by the constraints* — the two constraints determine both $\dot X^-$ and $X^{-\prime}$ from the transverse fields, so $X^-$ is fixed up to one integration constant $x_0^-$. The free data is exactly
> $$ \{\,X^I(\tau,\sigma),\ p^+,\ x_0^-\,\}, $$
> i.e. the $D-2$ transverse fields plus two longitudinal constants.
>
> **(b)** With $I = 2,\dots,D-1$ (that is $D-2$ values) and Neumann endpoints,
> $$ X^I(\tau,\sigma) = x_0^I + \sqrt{2\alpha'}\,\alpha_0^I\,\tau + i\sqrt{2\alpha'}\sum_{n\neq0}\frac{1}{n}\,\alpha_n^I\,e^{-in\tau}\cos n\sigma, \qquad \alpha_0^I = \sqrt{2\alpha'}\,p^I, $$
> so the drift term is $\sqrt{2\alpha'}\,\alpha_0^I\tau = 2\alpha' p^I\tau$. The frozen clock coordinate is
> $$ X^+(\tau,\sigma) = 2\alpha' p^+\tau = \sqrt{2\alpha'}\,\alpha_0^+\tau, \qquad x_0^+ = 0,\quad \alpha_n^+ = 0\ (n\neq0). $$
>
> **(c)** The constraint $(\dot X\pm X')^2 = 0$ in light-cone coordinates reads
> $$ -2\big(\dot X^+\pm X^{+\prime}\big)\big(\dot X^-\pm X^{-\prime}\big) + \big(\dot X^I\pm X^{I\prime}\big)^2 = 0, $$
> the $-2$ coming from the off-diagonal $-a^+b^- - a^-b^+$ metric (no $(\dot X^-)^2$ term appears, which is why this is linear in $\dot X^-$). Since $X^{+\prime}=0$ and $\dot X^+ = 2\alpha' p^+$, the prefactor is $-2(2\alpha' p^+) = -4\alpha' p^+$, so
> $$ \dot X^-\pm X^{-\prime} = \frac{1}{4\alpha' p^+}\big(\dot X^I\pm X^{I\prime}\big)^2, \qquad C = \frac{1}{4\alpha' p^+}. $$
> The $4 = 2\times 2$ is the single most common normalization slip in this module: one $2$ from the metric, one from $\dot X^+ = 2\alpha' p^+$. (In the general $\beta$ form $C = \frac{1}{2\beta\alpha' p^+}$; open strings have $\beta=2$.)
