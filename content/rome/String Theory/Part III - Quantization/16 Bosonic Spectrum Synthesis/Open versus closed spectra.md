---
title: Open versus closed spectra
number: "16.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, spectrum]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open string has **one** ladder of vibrations and mass formula $\alpha' M^2 = N^\perp - 1$; a closed string has **two** ladders, left- and right-moving, locked together by level matching, giving $\tfrac{\alpha'}{4}M^2 = N^\perp - 1 = \bar N^\perp - 1$.

## One ladder or two

A guitar string with fixed ends can only vibrate in standing waves: the left- and right-travelling waves are the *same* wave, bounced back and forth. That is the open string — one set of vibrations. A rubber band has no ends, so a wave can circle it clockwise *or* counter-clockwise, and the two directions are genuinely independent. That is the closed string — two sets of vibrations.

Quantizing each vibration turns "how hard the string is buzzing" into "how heavy the spacetime particle is." The number operator $N^\perp$ counts the buzz; one line of algebra converts it to mass. Everything below is bookkeeping on that idea:

- one ladder $\to$ open string $\to$ first rung a **photon**;
- two ladders $\to$ closed string $\to$ first rung a **graviton**.

Same machine, different boundary conditions, different force of nature.

## Shared setup: from vibrations to masses

After [[Light-cone gauge]] the only independent quantum operators are the $D-2$ **transverse** coordinates $X^I$, $I=2,\dots,D-1$. Gauge fixing has already solved for $X^+$ and $X^-$ in terms of these, so no other degrees of freedom survive. Each $X^I$ is a free 2D field, and its Fourier modes obey
$$[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}. \tag{1}$$
These are harmonic-oscillator ladder operators in disguise. Setting $a_n^I=\alpha_n^I/\sqrt n$ recovers the textbook algebra $[a_n^I,a_m^{J\dagger}]=\delta_{nm}\delta^{IJ}$, so $\alpha_{-n}^I$ creates a quantum of vibration in direction $I$ at mode number $n$. Because only *spacelike* transverse indices appear, the Fock space built on the momentum vacuum $|0;p\rangle$ (shorthand for the light-cone ground state $|p^+,\vec p_T\rangle$, with $\alpha_n^I|0;p\rangle=0$ for $n>0$) has no negative-norm states. The price is that Lorentz invariance must be rechecked afterward, and that check is what forces $D=26$ ([[Critical dimension D=26]]).

The mass-shell relation in mostly-plus signature is $M^2=-p_\mu p^\mu$. Solving the light-cone constraint for $p^-$ turns this into a count of how excited the string is, weighted by mode number:
$$N^\perp = \sum_{n=1}^{\infty}\sum_I n\,a_n^{I\dagger}a_n^I = \sum_{n>0}\sum_I \alpha_{-n}^I\alpha_n^I. \tag{2}$$
$N^\perp$ is the **level**: a mode-$n$ quantum costs $n$ units. The extra factor of $n$ cancels the $1/\sqrt n$ in each $a_n^I=\alpha_n^I/\sqrt n$, so $N^\perp$ measures total vibrational energy, not merely the number of quanta.

Normal-ordering the operators leaves a finite zero-point shift, the same Casimir regularization that turns the divergent zero-point sum $\tfrac12\sum_n n$ into a finite value. The bare series regularizes to $\zeta(-1)=-1/12$. Per transverse direction the zero-point energy carries an extra $\tfrac12$, contributing $\tfrac12\zeta(-1)=-1/24$; summing over the $D-2=24$ transverse directions at $D=26$ makes the shift exactly $-1$ ([[Normal ordering constant]]). That one constant produces the tachyon below and lifts the photon and graviton to exactly massless above.

## Open string: one ladder

An open string obeys Neumann boundary conditions $\partial_\sigma X^I=0$ at $\sigma=0,\pi$, which reflect any travelling wave back on itself. The result is a standing wave with a **single** oscillator set $\alpha_n^I$:
$$X^I(\tau,\sigma)=x_0^I+2\alpha'\,p^I\tau + i\sqrt{2\alpha'}\sum_{n\neq0}\frac1n\,\alpha_n^I\,\cos n\sigma\,e^{-in\tau}. \tag{3}$$
The $\cos n\sigma$ is the standing-wave profile forced by the two reflecting ends; the center of mass drifts as $x_0^I+2\alpha' p^I\tau$. That linear coefficient is fixed, not chosen: the physical momentum is $p^I=\frac1{2\pi\alpha'}\int_0^\pi \dot X^I\,d\sigma$, and only the coefficient $2\alpha'$ makes the oscillator terms integrate to zero and leave $p^I$ on the left. This is exactly where a factor of 2 is easy to drop — the zero mode is $\alpha_0^I=\sqrt{2\alpha'}\,p^I$, so the linear term carries $\sqrt{2\alpha'}\,\alpha_0^I=2\alpha' p^I$, not $\sqrt{2\alpha'}\,p^I$.

Quantizing and normal-ordering gives the open mass formula:
$$\boxed{\;\alpha'M^2=N^\perp-1\;} \tag{4}$$
Mass$^2$ climbs in equal steps of $1/\alpha'$ as you stack oscillators; the $-1$ is the zero-point energy that drags the ground state *below* zero. The lowest rungs:

| $N^\perp$ | state | $\alpha'M^2$ | what it is |
|---|---|---|---|
| $0$ | $\lvert0;p\rangle$ | $-1$ | tachyon ([[Tachyon as instability]]) |
| $1$ | $\alpha_{-1}^I\lvert0;p\rangle$ | $0$ | massless vector $\to$ **photon** ([[Photon from open strings]]) |
| $2$ | $\alpha_{-2}^I\lvert0;p\rangle,\ \alpha_{-1}^I\alpha_{-1}^J\lvert0;p\rangle$ | $+1$ | massive tensor |

## Closed string: two ladders, locked together

A closed string is periodic, $X^I(\tau,\sigma)=X^I(\tau,\sigma+2\pi)$, with no ends to reflect waves. So the left-movers $\bar\alpha_n^I$ (functions of $\tau+\sigma$) and right-movers $\alpha_n^I$ (functions of $\tau-\sigma$) are **independent** — two full ladders. The mass draws on *both*: solving the light-cone constraint for $p^-$ collects a level from each sector, so
$$\boxed{\;M^2=\frac{2}{\alpha'}\bigl(N^\perp+\bar N^\perp-2\bigr)\;} \tag{5}$$
at $D=26$, where each sector contributes its own zero-point $-1$. This is the genuine closed mass formula — a sum over the two towers, not a readout from one.

Level matching is a *separate* constraint. Solving for $p^-$ actually produces two expressions for the same zero mode $\alpha_0^-=\bar\alpha_0^-$ — one built from right-movers, giving $L_0^\perp-1$, the other from left-movers, giving $\bar L_0^\perp-1$. Since the two must describe the same number, $L_0^\perp=\bar L_0^\perp$, hence
$$\boxed{\;N^\perp=\bar N^\perp\quad(\textbf{level matching})\;} \tag{6}$$
This is not a choice. The loop has no marked starting point, so the rigid rotation $\sigma\mapsto\sigma+\sigma_0$ is an unfixable gauge symmetry. Its generator is the **worldsheet momentum** around the loop,
$$P=L_0^\perp-\bar L_0^\perp=N^\perp-\bar N^\perp, \tag{7}$$
where the center-of-mass pieces $\tfrac{\alpha'}{4}p^2$ in $L_0^\perp$ and $\bar L_0^\perp$ are equal and cancel. Physical states must be invariant, $P|\psi\rangle=0$: a state more excited clockwise than counter-clockwise secretly depends on where you called "the start" of the loop, and no such point exists, so the state is a gauge copy rather than a physical one.

Once (6) holds, $N^\perp+\bar N^\perp=2N^\perp$ and (5) collapses to $\tfrac{\alpha'}{4}M^2=N^\perp-1=\bar N^\perp-1$ — the mass in terms of a single level, with the closed prefactor $4/\alpha'$ instead of the open $1/\alpha'$. Read (5) as an *average* of two open-string levels, $\tfrac{\alpha'}{4}M^2=\tfrac12[(N^\perp-1)+(\bar N^\perp-1)]$, not a literal sum of two open $M^2$'s: that naive sum would give only $\tfrac{1}{\alpha'}(N^\perp+\bar N^\perp-2)$, half the closed value. The missing factor of 2 is the same zero-mode effect that produces the factor of 4.

### Where the factor of 4 comes from

The open and closed mass formulas differ by a factor of 4, and it is not a normal-ordering effect — it is pure zero-mode normalization. The momentum enters each expansion through the zero mode:
$$\alpha_0^I=\sqrt{2\alpha'}\,p^I\ \ (\text{open}),\qquad \alpha_0^I=\bar\alpha_0^I=\sqrt{\tfrac{\alpha'}{2}}\,p^I\ \ (\text{closed}).$$
The closed string spans twice the parameter range ($\sigma\in[0,2\pi]$ versus $[0,\pi]$), which halves the momentum carried per unit zero mode — a factor of 2 in $\alpha_0$, hence a factor of 4 in $M^2$. Re-derive this factor from the zero modes; never trust it from memory.

## Side-by-side summary

| | open | closed |
|---|---|---|
| ladders | one ($\alpha_n^I$) | two ($\alpha_n^I,\ \bar\alpha_n^I$) |
| boundary | Neumann (standing wave) | periodic (two travelling waves) |
| zero mode | $\alpha_0^I=\sqrt{2\alpha'}\,p^I$ | $\alpha_0^I=\bar\alpha_0^I=\sqrt{\alpha'/2}\,p^I$ |
| mass formula | $\alpha'M^2=N^\perp-1$ | $\tfrac{\alpha'}{4}M^2=N^\perp-1=\bar N^\perp-1$ (at $D=26$) |
| extra constraint | — | level matching $N^\perp=\bar N^\perp$ |
| ground state | tachyon, $\alpha'M^2=-1$ | tachyon, $\tfrac{\alpha'}{4}M^2=-1$ |
| first massless | vector $\to$ photon | tensor $\to$ graviton $\oplus$ $B$ $\oplus$ dilaton |

Open strings give gauge fields, closed strings give gravity, and both start with a tachyon that says the bosonic vacuum is unstable. See [[Photon from open strings]] and [[Graviton from closed strings]] for the massless rungs in detail.

## Open questions

- The normal-ordering shift is imported as a result here; the cutoff derivation of $-1/12$ and the $D=26$ that pins it to exactly $-1$ live in [[Normal ordering constant]] and [[Critical dimension D=26]].
- Light-cone gauge shows only the physical $D-2$ polarizations. The spacetime gauge symmetries of the photon, graviton, and $B$-field are invisible here and reappear in the covariant/CFT description, e.g. [[Vertex operators and physical-state conditions]].

## Exercise

The closed-string formula (5) can be assembled from two copies of the open formula (4). Suppose you had never derived the factor of 4, only the open result $\alpha'M^2_{\text{open}}=N^\perp-1$ and the fact that a closed string is "two open ladders glued at the zero mode." Reconstruct the closed mass formula: (a) write $M^2$ as the sum of a right-moving and a left-moving open-like contribution, (b) fix the overall constant using the zero-mode relation $\alpha_0^{I,\text{closed}}=\sqrt{\alpha'/2}\,p^I$ versus $\alpha_0^{I,\text{open}}=\sqrt{2\alpha'}\,p^I$, and (c) state the ground-state mass and confirm the closed tachyon is heavier than the open one.

> [!success]- Solution
> **(a)** The closed Hamiltonian collects both ladders, each carrying the same zero-point shift $-1$ at $D=26$. Symmetrizing over the two sectors,
> $$\tfrac{\alpha'}{4}M^2=\tfrac12\bigl[(N^\perp-1)+(\bar N^\perp-1)\bigr]=\tfrac12(N^\perp+\bar N^\perp-2),$$
> i.e. $M^2=\tfrac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$. Level matching sets $N^\perp=\bar N^\perp$, so the two sectors give identical values and we may write the mass either way: $\tfrac{\alpha'}{4}M^2=N^\perp-1=\bar N^\perp-1$.
>
> **(b)** The factor of 4 is fixed by the zero mode. Mass$^2$ is built from $\alpha_0^I\alpha_0^I$. The ratio of closed to open zero modes is $\sqrt{\alpha'/2}\big/\sqrt{2\alpha'}=\tfrac12$, so a fixed physical momentum $p^I$ appears with a coefficient 4 times *smaller* inside $M^2$ for the closed string — equivalently, extracting the same $M^2$ requires multiplying the level by 4. Hence the prefactor $4/\alpha'$ in the closed formula versus $1/\alpha'$ in the open one. (Root cause: the closed string spans $\sigma\in[0,2\pi]$, twice the open range, halving the momentum per zero mode.)
>
> **(c)** Ground state: $N^\perp=\bar N^\perp=0$. Open: $\alpha'M^2=-1\Rightarrow M^2=-1/\alpha'$. Closed: $\tfrac{\alpha'}{4}M^2=-1\Rightarrow M^2=-4/\alpha'$. The closed tachyon is exactly **four times heavier** (in $M^2$) than the open one — the factor of 4 again — and both are negative, so both vacua are unstable.
