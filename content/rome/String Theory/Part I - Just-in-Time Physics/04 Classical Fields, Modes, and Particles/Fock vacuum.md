---
title: Fock vacuum
number: "4.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, particle-states]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The Fock vacuum $|\Omega\rangle$ is the simultaneous ground state of every mode-oscillator — every annihilation operator kills it — and creation operators stack particles on top of it, one $a_p^\dagger$ per particle.

Prereqs: [[Fourier modes as oscillators]], [[Ladder operators|Creation and annihilation operators]].

## One oscillator per momentum

After [[Fourier modes as oscillators]] the free scalar field stops being a mysterious continuum object. It is a warehouse full of independent harmonic oscillators, one for each allowed box momentum $\vec p$:

$$ [a_p,a_k^\dagger]=\delta_{p,k},\qquad [a_p,a_k]=[a_p^\dagger,a_k^\dagger]=0. \tag{1}$$

Each momentum $\vec p$ is its own oscillator, and the Kronecker delta guarantees that different momenta never talk to each other. So "quantize the field" reduces to "quantize infinitely many uncoupled springs at once," and we already know how to find the ground state of one spring.

The **Fock vacuum** is the state where every spring is in its ground state simultaneously. Picture a grid of springs all sitting perfectly still: no spring is excited, so there are no particles. A particle is one quantum of excitation dropped into one spring — created by $a_p^\dagger$. Everything below is bookkeeping for one slogan: *particle = one oscillator bumped up one rung; vacuum = all oscillators at the bottom.*

The energy and momentum operators just read off which springs are excited and how much:

$$ H=\sum_{\vec p}E_p\,a_p^\dagger a_p,\qquad \vec P=\sum_{\vec p}\vec p\,a_p^\dagger a_p. \tag{2}$$

Each is a weighted count of excitations: $H$ charges $E_p$ per quantum in mode $\vec p$, and $\vec P$ charges $\vec p$. (These are the *normal-ordered* operators — see the caveat below.)

## Definition

Define the Fock vacuum $|\Omega\rangle$ by demanding every oscillator sit in its ground state:

$$ \boxed{\ a_p|\Omega\rangle=0\quad\text{for every allowed }\vec p\ }. \tag{3}$$

This is the tensor product of single-oscillator ground states $|0\rangle$: one oscillator has a state killed by its $a$; a whole field imposes one such condition per mode. Feeding (3) into (2), every term of $H$ and $\vec P$ ends in an $a_p$ that annihilates $|\Omega\rangle$, so

$$ H|\Omega\rangle=0,\qquad \vec P|\Omega\rangle=0. $$

The vacuum has no particles, zero total momentum, and zero energy.

**Why "zero energy" is a choice, not a fact.** A single quantum spring sits at ground-state energy $\tfrac12\omega$, not zero (units with $\hbar=1$). Summed over all modes, the field's bare zero-point energy is $\tfrac12\sum_{\vec p}E_p$ — infinite. *Normal ordering* (writing every $a^\dagger$ to the left of every $a$, as in (2)) throws this constant away, setting $H|\Omega\rangle=0$. For a free scalar this is harmless: the constant shifts every state's energy equally and no experiment sees an absolute energy. Flag it anyway — when we quantize the string, the analogous constant, $a=-1$ at $D=26$, sits inside the mass formula and is *not* free to discard. Erasing it there would erase the tachyon and the critical dimension.

## Fock space

Applying creation operators to $|\Omega\rangle$ generates the whole state space, the **Fock space**:

$$ |\Omega\rangle,\qquad a_p^\dagger|\Omega\rangle,\qquad a_p^\dagger a_k^\dagger|\Omega\rangle,\qquad \ldots $$

Zero particles, one particle, two particles, and so on — organized by *particle number*, not by position. That is what makes it a Fock basis.

The vacuum is a quantum state, not the empty classical field $\phi=0$. Its average field vanishes,

$$ \langle\Omega|\phi(x)|\Omega\rangle=0, $$

because $\phi$ is linear in $a_p$ and $a_p^\dagger$ and both have zero vacuum expectation. But $\langle\Omega|\phi(x)^2|\Omega\rangle\neq 0$: the springs still jitter at their ground-state amplitude. The vacuum is quiet on average, never truly still. For reading the first string spectra, the fact that carries the weight is the simple one: there is a distinguished no-particle state, and every particle state is built above it.

## Number operator

The operator that counts total particles is

$$ N=\sum_{\vec p}a_p^\dagger a_p. \tag{4}$$

It earns the name because each $a_p^\dagger$ raises the count by one. Check the key commutator explicitly, using $[a_k,a_p^\dagger]=\delta_{k,p}$ and $[a_k^\dagger,a_p^\dagger]=0$:

$$ [a_k^\dagger a_k,\,a_p^\dagger]=a_k^\dagger[a_k,a_p^\dagger]+[a_k^\dagger,a_p^\dagger]a_k=\delta_{k,p}\,a_p^\dagger. $$

Summing over $\vec k$ collapses the delta:

$$ [N,a_p^\dagger]=a_p^\dagger,\qquad N|\Omega\rangle=0. \tag{5}$$

So $N(a_p^\dagger|\Omega\rangle)=(a_p^\dagger N+a_p^\dagger)|\Omega\rangle=a_p^\dagger|\Omega\rangle$: a single creation operator gives an eigenstate of $N$ with eigenvalue $1$ — exactly one particle. The proof that this same state carries energy $E_p$ and momentum $\vec p$ (upgrading "one excitation" to "one relativistic particle") is [[One-particle states]].

## Open questions

- The interacting vacuum is subtler — interactions dress it and blur particle number. This note only needs the free-field Fock vacuum used to read the first string spectra.
- The zero-point constant is a free choice here but becomes physically load-bearing as the string normal-ordering constant; deferred to [[Normal ordering constant]] and [[Critical dimension D=26]].

## Exercise

Two-particle bookkeeping. Consider the state $|\psi\rangle=a_p^\dagger a_k^\dagger|\Omega\rangle$ with $\vec p\neq\vec k$. Without any new machinery, use (2), (4), and the commutators (1) to find the eigenvalues of $N$, $H$, and $\vec P$ on $|\psi\rangle$. Then decide: is $|\psi\rangle$ symmetric or antisymmetric under swapping $p\leftrightarrow k$, and what does that say about the particles?

> [!success]- Solution
> Act with $N=\sum_q a_q^\dagger a_q$ and push it rightward through the two creation operators; by (5), each crossing adds one copy of the state. Since $N|\Omega\rangle=0$,
> $$ N\,a_p^\dagger a_k^\dagger|\Omega\rangle = a_p^\dagger a_k^\dagger N|\Omega\rangle + 2\,a_p^\dagger a_k^\dagger|\Omega\rangle = 2\,|\psi\rangle. $$
> So $N=2$: two particles. The identical steps with the weighted counts (2) give
> $$ H|\psi\rangle=(E_p+E_k)|\psi\rangle,\qquad \vec P|\psi\rangle=(\vec p+\vec k)|\psi\rangle. $$
> Energies and momenta simply add — the two excitations are independent, exactly as "grid of uncoupled springs" demands.
>
> Symmetry: since $[a_p^\dagger,a_k^\dagger]=0$, the operators commute, so
> $$ a_p^\dagger a_k^\dagger|\Omega\rangle = a_k^\dagger a_p^\dagger|\Omega\rangle. $$
> The state is *symmetric* under $p\leftrightarrow k$. Commuting creation operators build symmetric multi-particle states — these excitations are **bosons**, the relevant statistics for the bosonic string.
