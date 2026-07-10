---
title: Toroidal compactification
number: "25.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, compactification]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Curl one spatial dimension into a circle of radius $R$ and a closed string carries two integers on equal footing — momentum $n$ (like a point particle) and winding $m$ (uniquely stringy, counting how many times it wraps the circle) — whose interplay under $R\leftrightarrow\alpha'/R$ is the seed of T-duality.

## Momentum and winding

Take flat space and roll up one direction into a loop. A **point particle** on that loop notices one thing: to fit its wave into the circle, its momentum along the loop must be quantized, $p = n/R$. Bigger loop, finer spacing — a ladder of energies called the **Kaluza–Klein tower**. That is the whole story for a particle.

A **string** is a loop of thread, and a thread can be *tied around* a circle. Once wrapped $m$ times you cannot slide it off without cutting it — the wrap count is a topological integer, the **winding number**. Wrapping costs energy because the string is elastic (it has tension), and the more times you wrap the more thread you must stretch. So the string sees a *second* ladder that the particle simply does not have.

Momentum and winding enter the mass on exactly equal footing. Momentum energy scales as $1/R$ (a wave fits better in a big circle); winding energy scales as $R$ (cheaper to wrap a small circle). Swap $R \leftrightarrow \alpha'/R$ and the two ladders trade places — the string cannot tell a huge circle from a tiny one. That symmetry is [[T-duality]], and everything below is the machinery that makes it precise.

## Setup: a circle in one direction

Work in $D=26$ Minkowski space (mostly-plus, $\eta = \mathrm{diag}(-,+,\dots,+)$) and roll up the last coordinate, which we call $X$ and identify periodically:
$$ X \sim X + 2\pi R. $$
The other coordinates $X^0,\dots,X^{24}$ stay flat. Light-cone gauge still works because $X^0,X^1$ are non-compact: we form $X^\pm$ from those, keep transverse oscillators $X^I$ ($I=2,\dots,24$), and handle the compact $X$ separately.

The circle changes two things.

**(1) Momentum is quantized.** The string wavefunction carries $e^{ipX}$. Single-valuedness under $X\to X+2\pi R$ forces $e^{ip\,2\pi R}=1$, so
$$ p = \frac{n}{R}, \qquad n\in\mathbb Z. $$
This is the KK tower; a point particle sees exactly this and nothing else.

**(2) Winding is now allowed.** For a *closed* string the field need only return to itself up to a lap around the circle:
$$ X(\tau,\sigma+2\pi) = X(\tau,\sigma) + 2\pi R\,m, \qquad m\in\mathbb Z. $$
The integer $m$ counts wraps. It is topological — you cannot change it continuously. This is the genuinely stringy datum.

It is convenient to package the wrap into a quantity with units of momentum, the **winding** $w$:
$$ w \equiv \frac{mR}{\alpha'}, $$
so the boundary condition reads $X(\tau,\sigma+2\pi) = X + 2\pi\alpha' w$. We define $w$ this way precisely because it will sit in the spectrum on the same footing as $p$.

## Mode expansion: momentum on $\tau$, winding on $\sigma$

$X$ obeys the free 2d wave equation, so it splits into left- and right-movers, $X = X_L(\tau+\sigma) + X_R(\tau-\sigma)$. Imposing the two conditions above (periodic in $\tau$ up to nothing, in $\sigma$ up to $2\pi\alpha' w$) fixes the zero-mode part:
$$ X(\tau,\sigma) = x_0 + \alpha' p\,\tau + \alpha' w\,\sigma + (\text{oscillators}). \tag{1} $$
Read this off directly: **$\tau$ multiplies $p$** (translation in worldsheet time is momentum) and **$\sigma$ multiplies $w$** (translation around the string is winding). The circle has made the field manifestly symmetric between the two integers.

Left- and right-movers each get their own effective momentum. Collecting the $\tau\pm\sigma$ pieces of (1),
$$ p_L = p + w = \frac{n}{R} + \frac{mR}{\alpha'}, \qquad p_R = p - w = \frac{n}{R} - \frac{mR}{\alpha'}. \tag{2} $$
Equivalently, in terms of the normalized zero-mode oscillators $\alpha_0,\bar\alpha_0$,
$$ \alpha_0 = \sqrt{\tfrac{\alpha'}{2}}\,(p-w) = \sqrt{\tfrac{\alpha'}{2}}\,p_R, \qquad \bar\alpha_0 = \sqrt{\tfrac{\alpha'}{2}}\,(p+w) = \sqrt{\tfrac{\alpha'}{2}}\,p_L. $$
Without a circle, $w=0$ and $\alpha_0=\bar\alpha_0$: a single momentum, left equals right. **The circle splits the zero modes** — their sum is momentum, their difference is winding:
$$ p = \tfrac{1}{\sqrt{2\alpha'}}(\bar\alpha_0+\alpha_0), \qquad w = \tfrac{1}{\sqrt{2\alpha'}}(\bar\alpha_0-\alpha_0). $$

## Two conjugate pairs, two circles

Quantize using the equal-time worldsheet commutator $[X(\sigma),P^\tau(\sigma')]=i\delta(\sigma-\sigma')$ with $P^\tau = \dot X/(2\pi\alpha')$. Feeding in the expansion (1) gives the expected pairing for the ordinary zero mode,
$$ [x_0,p]=i, \qquad [x_0,w]=0, \qquad [p,w]=0. $$
So $x_0$ is conjugate to momentum $p$, and everything visible in $X$ commutes with $w$ — winding looks like a passive label.

But there is a hidden conjugate coordinate. The combination that dropped out of $X=X_L+X_R$ survives in the **dual coordinate** $\tilde X \equiv X_L - X_R$, whose zero-mode part is (1) with $p$ and $w$ swapped:
$$ \tilde X(\tau,\sigma) = q_0 + \alpha' w\,\tau + \alpha' p\,\sigma + (\text{oscillators}). $$
Now $\tau$ multiplies $w$: in the dual field, **winding plays the role of momentum**. Demanding the same canonical commutator for $\tilde X$ gives
$$ [q_0,w]=i, \qquad [q_0,p]=0. $$
So $w$ is a genuine momentum operator, conjugate to $q_0$. Quantizing that circle exactly as we did for $p$ makes $w$ discrete too:
$$ p = \frac{n}{R}, \qquad w = \frac{mR}{\alpha'} = \frac{m}{\tilde R}, \qquad \tilde R \equiv \frac{\alpha'}{R}. $$
Reading these: $x_0$ lives on the original circle of radius $R$ (hence $p=n/R$), and $q_0$ lives on a **dual circle** of radius $\tilde R = \alpha'/R$ (hence $w = m/\tilde R$). The appearance of that dual circle, with radius inverted through the string scale, is the operator-level seed of [[T-duality]].

Turning a line into a circle does two things at once: it **adds** states (winding — you need a circle to wrap) and it **removes** states (momentum goes from a continuum to a discrete ladder). A point particle gets only the removal; it has no way to wind.

## Level matching is deformed

On the flat closed string, the constraint $L_0^\perp=\bar L_0^\perp$ says "equal oscillator level on both sides," $N^\perp=\bar N^\perp$. The compact zero modes now contribute:
$$ L_0^\perp-\bar L_0^\perp = \tfrac12(\alpha_0^2-\bar\alpha_0^2) + N^\perp-\bar N^\perp. $$
The zero-mode piece is $\tfrac12(\alpha_0^2-\bar\alpha_0^2)=\tfrac{\alpha'}{4}\big[(p-w)^2-(p+w)^2\big]=-\alpha' p w$. Setting $L_0^\perp=\bar L_0^\perp$:
$$ N^\perp-\bar N^\perp = \alpha'\,p\,w = \alpha'\cdot\frac{n}{R}\cdot\frac{mR}{\alpha'} = nm. \tag{3} $$
Level matching is no longer symmetric between left and right. A state carrying both momentum and winding must be lopsided by exactly $nm$ oscillators — a hard selection rule, not a suggestion.

## The mass formula

The 25d observer, blind to the compact direction, measures $M^2 = -p_\mu p^\mu$ over $\mu=0,\dots,24$. The two Virasoro constraints $L_0^\perp = 0$ and $\bar L_0^\perp = 0$ each fix $M^2$; averaging them gives
$$ M^2 = \frac{1}{\alpha'}\big(\alpha_0^2+\bar\alpha_0^2\big) + \frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big). $$
The zero-mode block collapses cleanly:
$$ \frac{1}{\alpha'}\big(\alpha_0^2+\bar\alpha_0^2\big) = \frac{1}{\alpha'}\cdot\frac{\alpha'}{2}\big[(p-w)^2+(p+w)^2\big] = p^2+w^2. $$
Therefore
$$ \boxed{\;M^2 = p^2 + w^2 + \frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big)\;} \tag{4} $$
and in terms of the integers, with the constraint (3),
$$ M^2 = \frac{n^2}{R^2} + \frac{m^2R^2}{\alpha'^2} + \frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big), \qquad N^\perp-\bar N^\perp = nm. \tag{5} $$

The $-2$ is the closed-string zero-point energy: $a+\bar a = (-1)+(-1)$, one additive normal-ordering constant $a=-1$ from each of the left and right towers of 24 transverse oscillators. That value (which comes from $\sum_{k\ge1}k \to \zeta(-1)=-\tfrac{1}{12}$ under a regulator, times $24/2$) is the same normal-ordering constant that pins the bosonic string to $D=26$; it is imported from [[Light-cone gauge]] quantization. Rolling up one transverse boson changes its *zero* modes but not its oscillator tower, so this constant is untouched.

### The three terms, physically
- $\dfrac{n^2}{R^2}$ — **momentum energy**, the KK tower. This is all a point particle would get. Big circle, cheap momentum.
- $\dfrac{m^2R^2}{\alpha'^2} = w^2$ — **winding energy**, pure elastic stretch. A string wound $|m|$ times has length $|m|\,2\pi R$; with tension $T_0=1/(2\pi\alpha')$ its rest energy is $T_0\cdot|m|2\pi R = |m|R/\alpha' = |w|$. The winding mass is *literally* the energy stored in the stretched loop. Small circle, cheap winding.
- $\dfrac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$ — the usual oscillator/tachyon term, unchanged.

Momentum and winding energies add **in quadrature** (as $p^2+w^2$), like two independent contributions to a rest mass, not linearly.

## Limits: how a dimension appears and disappears
- **$R\to\infty$:** winding energy $\sim R/\alpha'$ blows up (wrapping a giant circle is ruinous), so winding modes decouple; momentum spacing $\sim 1/R$ collapses to a continuum. The circle has become an ordinary infinite direction. Expected.
- **$R\to 0$:** now *momentum* modes get heavy and *winding* modes collapse to a continuum. To the string, a new large dimension seems to open up — of size $\tilde R = \alpha'/R$. The circle never truly shrinks to nothing; below $R=\sqrt{\alpha'}$ it looks big again. This is the seed of [[T-duality]].

## From a circle to a torus
Roll up several directions with independent identifications $x^a\sim x^a+2\pi R_a$; the compact space becomes a **torus** $\mathbf T^d$. A flat torus is Ricci-flat, $\mathcal R_{\mu\nu}=0$, so it automatically solves the vacuum condition that worldsheet conformal invariance imposes on the metric (see [[Einstein equations from conformal invariance]]); hence $\mathbb R^{1,25-d}\times\mathbf T^d$ is a consistent bosonic background. The radii $R_a$ are fixed by *nothing* — they are massless scalar **moduli**, flat directions of the theory. Pinning them down needs a potential, which the bosonic string does not supply. (The general torus also carries a $B$-field and off-diagonal metric, organized by the Narain lattice; only the rectangular one-circle case is worked here.)

## Open questions
- The normal-ordering constant $a=-1$ (hence the $-2$) is carried over from light-cone quantization, not re-derived here. Compactifying a transverse boson leaves its oscillator sum — and therefore this constant — unchanged, so this is a clean import rather than a gap.
- General $\mathbf T^d$ compactification has a full Narain lattice of momentum/winding with metric and $B$-field moduli. This note treats only the rectangular one-circle case needed for the module exit check.

## Exercise
The self-dual radius is $R=\sqrt{\alpha'}$. Consider the four states with one oscillator excited on one side and none on the other, carrying momentum and winding $(n,m)=(\pm1,\pm1)$ and $(\pm1,\mp1)$ — i.e. $|n|=|m|=1$. Using the mass formula (5) and the constraint (3), show that at $R=\sqrt{\alpha'}$ these states are **massless**, and check that the constraint is satisfied. (These are the extra vectors that enhance $U(1)\times U(1)\to SU(2)\times SU(2)$.)

> [!success]- Solution
> A single oscillator on one side means $(N^\perp,\bar N^\perp)$ is either $(1,0)$ or $(0,1)$, so $N^\perp+\bar N^\perp = 1$ and $N^\perp-\bar N^\perp = \pm1$.
>
> **Constraint check.** Equation (3) demands $N^\perp-\bar N^\perp = nm$. For $(n,m)=(1,1)$ or $(-1,-1)$ we have $nm=+1$, matched by $N^\perp-\bar N^\perp=+1$, i.e. $(N^\perp,\bar N^\perp)=(1,0)$. For $(n,m)=(1,-1)$ or $(-1,1)$ we have $nm=-1$, matched by $(N^\perp,\bar N^\perp)=(0,1)$. All four are consistent.
>
> **Mass.** Set $R^2=\alpha'$ in (5), so $1/R^2 = 1/\alpha'$ and $R^2/\alpha'^2 = 1/\alpha'$. With $n^2=m^2=1$ and $N^\perp+\bar N^\perp=1$,
> $$ M^2 = \frac{1}{\alpha'} + \frac{1}{\alpha'} + \frac{2}{\alpha'}(1-2) = \frac{2}{\alpha'} - \frac{2}{\alpha'} = 0. $$
> The momentum-plus-winding energy $2/\alpha'$ exactly cancels the oscillator/tachyon deficit $-2/\alpha'$, so the states are massless — but only at $R=\sqrt{\alpha'}$. Move $R$ off the self-dual value and $1/R^2 + R^2/\alpha'^2 > 2/\alpha'$ (AM–GM), so $M^2>0$: the extra gauge bosons get a mass and the enhanced symmetry is Higgsed back to $U(1)\times U(1)$.
