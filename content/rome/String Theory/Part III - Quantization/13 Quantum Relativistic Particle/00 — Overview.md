---
title: 13 Quantum Relativistic Particle — Overview
number: "13.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, quantization]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The dress rehearsal: quantize the relativistic point particle in light-cone gauge, so that quantizing the string next is "the same moves, more indices."

## The big picture

Quantizing the string is a hard jump, but almost all of its machinery already shows up for a *single relativistic particle*: pick independent variables, postulate their commutators, write a Hamiltonian that reproduces the classical motion, and find the Hilbert space. So we do the particle first. The string then reuses every step, with one addition — an oscillator index $n$ and a sum over modes.

A relativistic particle is a string with **no vibrations** — a point carried through spacetime. Quantizing it teaches the bookkeeping (light-cone gauge, canonical commutators, the Hamiltonian) in a setting where the "mass" is a fixed number $m$. For the string, that number becomes an *operator* built from vibration modes, and the rest of Part III is what that operator does to the spectrum.

## The three moves

The whole module is one classical-to-quantum bridge, crossed in three moves:

1. **Reduce the phase space.** Light-cone gauge *solves* the mass-shell constraint instead of dragging it along, leaving only the independent data $(x^I, x_0^-, p^I, p^+)$.
2. **Quantize what's left.** Promote those to operators; turn Poisson brackets into commutators via $[A,B]=i\{A,B\}$ (natural units, $\hbar=c=1$).
3. **Reuse the reduced Hamiltonian as an operator.** Because it is built from commuting momenta, there is no ordering ambiguity — for the particle. (That is exactly where the string will get interesting.)

## The payoff

The single result to remember is the **light-cone Hamiltonian**

$$ \boxed{\;H = \frac{1}{2m^2}\big(p^I p^I + m^2\big)\;} \tag{1}$$

Everything in the module compresses into this line. In light-cone components $p^2 = -2p^+p^- + p^Ip^I$ (mostly-plus signature), so the mass shell $p^2+m^2=0$ solves for the light-cone energy, $p^- = \tfrac{1}{2p^+}(p^Ip^I + m^2)$. Multiply by the gauge factor $p^+/m^2$ — which converts a generator of $x^+$-translations into a generator of $\tau$-translations — and the $p^+$ cancels, leaving $(1)$. The Hamiltonian does not *impose* the mass shell as a side constraint; it *is* the mass shell, already solved.

That template is the reason to bother: for the string, replace the fixed rest mass $m$ by a **mass operator built from oscillators**, then demand that the Lorentz generators still close. That single demand forces $D=26$ and the normal-ordering constant $a=-1$. The particle version has no such obstruction — its $m^2$ is just a number — which is precisely why it is the clean rehearsal.

## Sublessons

Read in this order; the first three build the bridge, the last checks that quantization did not break Lorentz symmetry.

- 13.1 [[Schrodinger and Heisenberg pictures]] — two bookkeepings of time. We quantize in the **Heisenberg picture** because there the operators obey the *classical* equations of motion, which is exactly the leverage we use to pin down the theory.
- 13.2 [[Canonical commutators]] — which variables survive the constraint, and the postulated $[x^I,p^J]=i\eta^{IJ}$, $[x_0^-,p^+]=-i$. The minus sign in the longitudinal pair is forced by the light-cone metric, not chosen.
- 13.3 [[Light-cone Hamiltonian]] — the centerpiece. Derives $(1)$ from gauge condition + mass shell, and checks it generates the right $\tau$-evolution.
- 13.4 [[Momentum and Lorentz generators]] — conserved charges become operators that *generate* their symmetry by commutation, and close into the Lorentz algebra $[M^{\mu\nu},M^{\rho\sigma}]=\dots$. The closure test $[M^{-I},M^{-J}]=0$ is the toy version of the calculation that later fixes $D=26$.

## Open questions

- No mathematical step in this module is deferred — the four sublessons stand alone. The one genuine forward reference is conceptual: the string version of the Lorentz-closure test, $[M^{-I},M^{-J}]=0$, becomes *anomalous* unless the open-string spectrum carries the right normal-ordering constant and dimension. That anomaly is where this module's template pays off; it is settled in Modules 14 and 16.

## Exercise

Do this cold, with no notes — it is the exit test for the entire module.

Starting from the relativistic particle action $S=-m\int d\tau\sqrt{-\dot x^2}$, impose the light-cone gauge $x^+ = \frac{p^+}{m^2}\tau$ and **derive the light-cone Hamiltonian** $(1)$. Then, in one or two sentences, explain **why this $H$ *is* the mass-shell relation** $p^2+m^2=0$ — i.e. why $H$ is that constraint solved for $p^-$ and dressed with the gauge factor $p^+/m^2$. Finally, write down the canonical commutators from memory.

> [!success]- Solution
> **Setup and mass shell.** From $L=-m\sqrt{-\dot x^2}$ the momentum is $p_\mu = \partial L/\partial\dot x^\mu = m\dot x_\mu/\sqrt{-\dot x^2}$. Squaring and contracting kills the parameterization: $p^2 = m^2\dot x^2/(-\dot x^2) = -m^2$, i.e.
> $$ p^2 + m^2 = 0, $$
> the mass shell, true in *any* parameterization.
>
> **Gauge fixes the dynamics.** The gauge $x^+ = p^+\tau/m^2$ means $\dot x^+ = p^+/m^2$ ($p^+$ is conserved). Feed this into the $+$ component of the momentum, with the index raised:
> $$ p^+ = \frac{m\,\dot x^+}{\sqrt{-\dot x^2}} = \frac{1}{\sqrt{-\dot x^2}}\frac{p^+}{m}. $$
> Cancel $p^+$: $\sqrt{-\dot x^2}=1/m$, i.e. $\dot x^2 = -1/m^2$, and $p_\mu = m^2\dot x_\mu$ — the square-root nonlinearity is gone.
>
> **Solve the mass shell for $p^-$.** In light-cone components (with $\eta^{+-}=-1$, transverse part Euclidean) $p^2 = -2p^+p^- + p^Ip^I$, so $p^2+m^2=0$ becomes
> $$ -2p^+p^- + p^Ip^I + m^2 = 0 \quad\Longrightarrow\quad p^- = \frac{1}{2p^+}\big(p^Ip^I + m^2\big). $$
> $p^-$ is now a *derived* quantity — no independent longitudinal energy survives.
>
> **From $p^-$ to $H$.** Light-cone energy $p^-$ generates $x^+$-translations, but we evolve in $\tau$, and the gauge ties them by $\partial_\tau = (p^+/m^2)\,\partial_{x^+}$. Hence
> $$ H = \frac{p^+}{m^2}\,p^- = \frac{1}{2m^2}\big(p^Ip^I + m^2\big), $$
> the two factors of $p^+$ canceling. This is result $(1)$.
>
> **Why $H$ *is* the mass shell.** $H$ was built by solving $p^2+m^2=0$ for $p^-$ and multiplying by the gauge factor $p^+/m^2$; nothing else went in. So $2m^2 H - p^Ip^I = m^2$ is just the on-shell statement that the invariant mass is $m$. The Hamiltonian never imposes the constraint separately — it is the constraint, already solved.
>
> **Canonical commutators.**
> $$ [x^I,p^J] = i\,\eta^{IJ} = i\,\delta^{IJ}, \qquad [x_0^-,p^+] = i\,\eta^{-+} = -i, \qquad \text{all others }=0. $$
> The transverse pair is textbook $[x,p]=i$; the longitudinal minus sign is forced by $\eta^{+-}=-1$, with the metric carrying one index from the coordinate ($-$) and one from the momentum ($+$).
