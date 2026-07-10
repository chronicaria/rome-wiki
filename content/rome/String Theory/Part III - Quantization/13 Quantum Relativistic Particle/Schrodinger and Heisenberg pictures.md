---
title: Schrodinger and Heisenberg pictures
number: "13.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, quantum-pictures]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Time has to live *somewhere* in quantum mechanics: in the states (Schrödinger) or in the operators (Heisenberg), with identical predictions either way. We quantize in the Heisenberg picture, where operators obey the *classical* equations of motion — exactly the dynamics we already understand.

## Moving actors or a moving camera

Film a scene two ways. **Schrödinger:** the actors move, the camera is bolted down. **Heisenberg:** the actors freeze mid-pose, and the camera dollies around them. Same final footage — the relative motion between camera and actors is all the eye records.

In quantum mechanics the "footage" is a matrix element $\langle\Phi|\alpha|\Psi\rangle$; every measurable prediction is built from such numbers. Whether you evolve the states toward a fixed operator or the operator toward fixed states, the number is the same.

- **Schrödinger.** Operators fixed; the state moves. With time-independent $H$ and $\hbar=1$, a state equal to $|\Psi\rangle$ at $t=0$ evolves as
$$ |\Psi,t\rangle = e^{-iHt}\,|\Psi\rangle, \qquad i\frac{d}{dt}|\Psi,t\rangle = H\,|\Psi,t\rangle. $$
Differentiating the first gives the second — the Schrödinger equation.

- **Heisenberg.** The state freezes; the operators carry the time. A Schrödinger operator $\alpha$ becomes
$$ \alpha(t) \equiv e^{iHt}\,\alpha\, e^{-iHt}. \tag{1}$$
The sandwiching $e^{\pm iHt}$ is the camera dolly: $e^{iHt}$ undoes state evolution, $e^{iHt}|\Psi,t\rangle=|\Psi\rangle$, and hands that motion to the operator instead.

**Why they agree.** Evolve both states in a matrix element, then regroup the exponentials with the operator:
$$ \langle \Phi,t|\alpha|\Psi,t\rangle
=\langle\Phi|\,e^{iHt}\alpha e^{-iHt}\,|\Psi\rangle
=\langle\Phi|\alpha(t)|\Psi\rangle. $$
Left side: states evolved, operator fixed. Right side: states fixed, operator evolved. Same number — two bookkeepings, one physics.

**Why Heisenberg for us.** Classical mechanics is a story about *variables that evolve* — $x(\tau), p(\tau)$ satisfying equations of motion. The Heisenberg picture is the quantum mirror of exactly that story: operators $x(\tau), p(\tau)$ that evolve. Once the classical dynamics is in hand — which, after [[Light-cone gauge]], it is — we *demand* that the Heisenberg operators satisfy the classical equations of motion, and build the quantum theory from that demand. That is this module's strategy.

## The Heisenberg equation of motion

A Heisenberg operator built from a **time-independent** Schrödinger operator $\xi$ has only *implicit* time dependence: time enters solely through the sandwich in (1). Differentiate $\xi(t)=e^{iHt}\xi\,e^{-iHt}$, using $\frac{d}{dt}e^{\pm iHt}=\pm iH\,e^{\pm iHt}$ and $[H,e^{\pm iHt}]=0$:
$$ \frac{d\xi(t)}{dt} = iH\,e^{iHt}\xi e^{-iHt} + e^{iHt}\xi e^{-iHt}(-iH) = i H\,\xi(t) - i\,\xi(t) H = i[H,\xi(t)]. $$
Multiply by $i$ and flip the commutator ($i\cdot i\,[H,\xi]=-[H,\xi]=[\xi,H]$):
$$ \boxed{\,i\frac{d\xi(t)}{dt} = \big[\,\xi(t),\,H\,\big]\,} \tag{2}$$

Commutation with $H$ generates time translation. This one line is the quantum Hamilton equation of motion, and every later check that a proposed Hamiltonian reproduces the right $\tau$-evolution is an application of (2).

Compare the classical rule for a phase-space observable $F(q,p;t)$, $\ \dot F=\partial_t F+\{F,H\}$. Canonical quantization keeps the shape and swaps the Poisson bracket for a commutator, $\{F,H\}\rightsquigarrow \tfrac1i[F,H]$. That is the entire recipe: *choose the commutators so that the Heisenberg equations are the classical equations with brackets upgraded.* (Restoring $\hbar$ rescales (2) to $i\hbar\,\dot\xi=[\xi,H]$, so $H/\hbar$ — an energy divided by $\hbar$ — is the frequency at which quantum phase rotates.)

### When the Schrödinger operator carries explicit time

Some operators depend on time *before* you pass to the Heisenberg picture — the gauge condition $x^+(\tau)=\tfrac{p^+}{m^2}\tau$ wears an explicit $\tau$. For those, differentiating the sandwich (1) picks up one extra term:
$$ i\frac{d\mathcal O(t)}{dt} = i\frac{\partial \mathcal O}{\partial t} + \big[\,\mathcal O(t),\,H\,\big]. \tag{3}$$

Two clocks drive the operator: the $\partial_t$ term is the explicit, hand-written time dependence, and the commutator is the implicit, dynamical part. When $\partial_t\mathcal O=0$, (3) collapses back to (2). We need (3) for $x^+(\tau)$ and $x^-(\tau)$ in [[Light-cone Hamiltonian]] — there the commutator part vanishes and the whole answer comes from the $\partial_t$ term.

## Pictures preserve commutators

The single fact we lean on constantly: passing Schrödinger $\to$ Heisenberg preserves the algebra. If $[\alpha_1,\alpha_2]=\alpha_3$, conjugate all three by $e^{\pm iHt}$; the inner $e^{-iHt}e^{iHt}=\mathbb 1$ telescopes:
$$ [\alpha_1(t),\alpha_2(t)] = e^{iHt}\alpha_1 e^{-iHt}\,e^{iHt}\alpha_2 e^{-iHt} - (1\!\leftrightarrow\!2) = e^{iHt}[\alpha_1,\alpha_2]e^{-iHt} = \alpha_3(t). $$

If the right-hand side is a c-number (like $i$), conjugation does nothing to it: $e^{iHt}\,i\,e^{-iHt}=i$. So the commutators we postulate once in [[Canonical commutators]] hold at *every* $\tau$ for free — set them up once and never revisit them.

## What to carry forward

- Quantize in the **Heisenberg picture**; demand the operators obey the classical equations of motion.
- Master equation: $i\,\dot\xi=[\xi,H]$, with an extra $i\,\partial_t\mathcal O$ term only when the Schrödinger operator carries explicit time.
- Commutators are picture-independent, so postulate them once $\to$ [[Canonical commutators]].

## Open questions

- The interaction picture is not needed here. It becomes the natural bookkeeping only once interactions enter — through worldsheet splitting/joining or perturbative field theory in later modules.

## Exercise

The operator $x^+(\tau)=\tfrac{p^+}{m^2}\tau$ is an *explicitly* time-dependent Schrödinger operator. Using the light-cone Hamiltonian $H=\tfrac{1}{2m^2}(p^Ip^I+m^2)$ and the fact that all momenta commute, show that its Heisenberg evolution reproduces the classical result $\dot x^+=p^+/m^2$ — and explain in one sentence why the *implicit* (commutator) part contributes nothing.

> [!success]- Solution
> Because $x^+$ carries an explicit $\tau$, use the explicit-time evolution equation (3):
> $$ i\,\frac{dx^+(\tau)}{d\tau} = i\,\frac{\partial x^+}{\partial\tau} + \big[\,x^+(\tau),\,H\,\big]. $$
> **Explicit part.** $\ \partial_\tau x^+ = \partial_\tau\!\big(\tfrac{p^+}{m^2}\tau\big) = \tfrac{p^+}{m^2}$, so the first term is $i\,p^+/m^2$.
> **Implicit part.** $\ x^+ = \tfrac{p^+}{m^2}\tau$ is (a $\tau$-multiple of) $p^+$, and $H$ depends only on the $p^I$. Since all momenta commute — $[p^+,p^I]=0$ — the commutator $[x^+,H]=\tfrac{\tau}{m^2}[p^+,H]=0$ vanishes.
> **Combine.** $\ i\,\dot x^+ = i\,p^+/m^2 + 0$, hence
> $$ \dot x^+ = \frac{p^+}{m^2}, $$
> matching the classical trajectory. The implicit part contributes nothing because $x^+$ is a pure momentum operator and momenta commute with the momentum-only Hamiltonian, so *all* of the motion here is the hand-written $\tau$ in the gauge condition — none of it is dynamical.
