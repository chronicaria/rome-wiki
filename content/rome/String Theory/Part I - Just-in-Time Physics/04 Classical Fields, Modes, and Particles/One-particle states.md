---
title: One-particle states
number: "4.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, particle-states]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Calling $a_p^\dagger|\Omega\rangle$ "a particle" is a claim you can prove: it is an eigenstate of energy and momentum with exactly the values a relativistic mass-$m$ particle should have.

Prereqs: [[Fock vacuum]], [[Fourier modes as oscillators]].

## A note struck on the field

The word "particle" tempts you to imagine a tiny bead at a point. Forget that. Here a particle is a **note struck on the field**. The field is a set of oscillators, one per momentum $\vec p$ (from [[Fourier modes as oscillators]]); the vacuum $|\Omega\rangle$ is all of them silent. Hit the $\vec p$-oscillator once with $a_p^\dagger$ and you get a sound — an excitation — carrying a definite pitch (energy $E_p$) and a definite direction (momentum $\vec p$).

Nothing so far *forces* that excitation to behave like a particle. What earns the name is a test: measure its energy and momentum. The measuring operators are $H$ and $\vec P$, and "the state has a definite value" means "the state is an eigenstate." So this note is one computation run twice — feed $a_p^\dagger|\Omega\rangle$ to $\vec P$, then to $H$, and read off the eigenvalues. They come out $\vec p$ and $E_p$, and those satisfy the relativistic dispersion relation. That is the calculation behind the slogan "particles are excitations of fields."

One trick does all the work: an annihilation operator hits the vacuum and dies ($a_p|\Omega\rangle=0$), so the only thing that survives when you push $a$ past $a^\dagger$ is the commutator $[a,a^\dagger]$.

## The candidate state

The natural candidate for "one particle with momentum $\vec p$" is the vacuum with the $\vec p$-oscillator raised once:

$$ |\,\vec p\,\rangle \equiv a_p^\dagger|\Omega\rangle. $$

In the finite box (momenta discrete, $[a_p,a_p^\dagger]=1$) it is already normalized:

$$ \langle \vec p\,|\,\vec p\rangle
=\langle\Omega|a_p a_p^\dagger|\Omega\rangle
=\langle\Omega|[a_p,a_p^\dagger]|\Omega\rangle
=1. $$

The middle step drops $a_p^\dagger a_p$ because $a_p|\Omega\rangle=0$, leaving the commutator. Working in the box (Kronecker $\delta_{p,k}$, not Dirac) is what keeps this a clean $1$ with no delta functions — a deliberate choice to postpone the continuum bookkeeping.

## Momentum eigenvalue

The total momentum operator counts excitations, weighting each oscillator's occupation number by its momentum label $\vec k$:

$$ \vec P=\sum_{\vec k}\vec k\,a_k^\dagger a_k. $$

Act on the candidate and commute the annihilation operator rightward until it reaches the vacuum:

$$
\vec P\,a_p^\dagger|\Omega\rangle
=\sum_{\vec k}\vec k\,a_k^\dagger \, a_k \, a_p^\dagger|\Omega\rangle
=\sum_{\vec k}\vec k\,a_k^\dagger\,[a_k,a_p^\dagger]\,|\Omega\rangle
=\sum_{\vec k}\vec k\,a_k^\dagger\,\delta_{k,p}\,|\Omega\rangle
=\vec p\,a_p^\dagger|\Omega\rangle. \tag{1}$$

The second equality uses $a_k a_p^\dagger = a_p^\dagger a_k + [a_k,a_p^\dagger]$ and throws away $a_p^\dagger a_k|\Omega\rangle=0$; the third uses $[a_k,a_p^\dagger]=\delta_{k,p}$; the $\delta$ then collapses the sum. So $a_p^\dagger|\Omega\rangle$ is an eigenstate of total momentum with eigenvalue $\vec p$. The label we hung on the oscillator is now the physical momentum of the state.

## Energy eigenvalue

The Hamiltonian has the identical shape, weighting each excitation by its frequency $E_k$ instead of its momentum (we work in units $\hbar=c=1$, so frequencies are energies):

$$ H=\sum_{\vec k}E_k\,a_k^\dagger a_k. $$

The word "normal-ordered" is doing quiet work here: it means the vacuum zero-point sum $\tfrac12\sum_{\vec k}E_k$ has already been dropped, so $H|\Omega\rangle=0$ and the energy we read off is the excitation's alone (see [[Fock vacuum]]). The same commutator calculation as (1) gives

$$ H\,a_p^\dagger|\Omega\rangle=E_p\,a_p^\dagger|\Omega\rangle. \tag{2}$$

So the state carries energy $E_p=\sqrt{\vec p^{\,2}+m^2}$ (the frequency of the $\vec p$-oscillator, fixed back in [[Fourier modes as oscillators]]). Squaring,

$$ E_p^2-\vec p^{\,2}=m^2, \tag{3}$$

which is exactly the relativistic energy–momentum relation for a particle of mass $m$. A single excitation of a free field automatically obeys $E^2=\vec p^{\,2}+m^2$: the field never mentioned "particles," and the mass-shell dropped out of the oscillator algebra on its own.

## Why this isn't a negative-energy particle

The classical field had a positive-frequency half and a negative-frequency half, and a naive reading would fear the second gives negative-energy particles. It doesn't. In the quantized field

$$ \phi(t,\vec x)=\frac{1}{\sqrt V}\sum_{\vec p}\frac{1}{\sqrt{2E_p}}\Big(a_p\,e^{-iE_pt+i\vec p\cdot\vec x}+a_p^\dagger\,e^{+iE_pt-i\vec p\cdot\vec x}\Big),$$

the negative-frequency exponential $e^{+iE_pt-i\vec p\cdot\vec x}$ is attached to a **creation** operator $a_p^\dagger$. Acting on the vacuum, it still returns the positive energy $+E_p$ by (2). Quantization converts the old negative-energy worry into harmless creation-operator bookkeeping; for this real scalar in the box it yields one neutral particle species.

## What "particle" means here

$a_p^\dagger|\Omega\rangle$ is a momentum eigenstate spread through the whole box — a plane wave, not a bead on a trajectory. "Particle" means an energy–momentum excitation of the free field, nothing more. A localized, particle-shaped wavepacket is a *superposition* of many such momentum eigenstates. This is the honest content of the slogan: the field's quanta are the particles, and their sharp labels are momentum and energy, not position.

## Light-cone label for later string notes

The same physical state can be labeled by light-cone data instead of $\vec p$. On the positive-energy mass-shell ($p^+>0$, transverse momentum $p^I$), the mass-shell relation $-p^2=m^2$ (mostly-plus signature) written in light-cone components fixes the remaining light-cone energy:

$$ p^-=\frac{p^I p^I+m^2}{2p^+}. $$

This is $2p^+p^- - p^Ip^I = m^2$ solved for $p^-$; in light-cone quantization $p^-$ plays the role $E_p$ plays in $H$ — it is the light-cone energy, the eigenvalue of the light-cone Hamiltonian that multiplies each mode's number operator. So the scalar one-particle state is written

$$ \boxed{\ \text{One scalar particle:}\quad a_{p^+,\,p_T}^\dagger|\Omega\rangle\ }. $$

This is the **template** for the whole module. The photon and graviton states in [[Polarizations of massless spin-1 and spin-2]] have identical structure — a creation operator on the vacuum, labeled by $(p^+,p_T)$ — with extra transverse polarization indices ($I$, or $IJ$) attached because those fields carry more than one physical degree of freedom per mass-shell point.

## Open questions

- The continuum limit replaces $\delta_{p,k}$ by $(2\pi)^d\delta^d(\vec p-\vec k)$, so single-particle states become delta-normalized rather than unit-normalized; the box version here is the finite-volume model to keep in mind.
- In interacting QFT, "particle number" is only sharp for asymptotic in/out states; the free-field notion built here is the one the first string spectrum needs.

## Exercise

Two-particle states test whether you truly own the note's computation — and its mass-shell verdict.

**(a) Two distinct modes.** With $\vec p\neq\vec k$, build $|\vec p,\vec k\rangle = a_p^\dagger a_k^\dagger|\Omega\rangle$. Using only $\vec P=\sum_{\vec q}\vec q\,a_q^\dagger a_q$ and the commutators $[a_q,a_r^\dagger]=\delta_{q,r}$, show it is an eigenstate of total momentum and find the eigenvalue. Then state the total energy without a separate calculation, and explain in one sentence why $a_p^\dagger a_k^\dagger|\Omega\rangle = a_k^\dagger a_p^\dagger|\Omega\rangle$.

**(b) Same mode twice.** A student proposes $|\psi\rangle=(a_p^\dagger)^2|\Omega\rangle$ and claims it is a single particle of energy $2E_p$. Using only $a_p|\Omega\rangle=0$, the operators $H=\sum_{\vec k}E_k\,a_k^\dagger a_k$ and $\vec P=\sum_{\vec k}\vec k\,a_k^\dagger a_k$, and the identity $[a_k^\dagger a_k,\,a_p^\dagger]=\delta_{k,p}\,a_p^\dagger$, compute $H|\psi\rangle$ and $\vec P|\psi\rangle$ and decide: is $|\psi\rangle$ an energy eigenstate, and if so does the eigenvalue justify calling it *one* particle?

> [!success]- Solution
> **(a)** Act with $\vec P$ and push the annihilation operator rightward to the vacuum, picking up one commutator per creation operator it meets:
> $$
> \vec P\,a_p^\dagger a_k^\dagger|\Omega\rangle
> =\sum_{\vec q}\vec q\,a_q^\dagger\,a_q\,a_p^\dagger a_k^\dagger|\Omega\rangle .
> $$
> Move $a_q$ past both creators: $a_q a_p^\dagger a_k^\dagger = a_p^\dagger a_k^\dagger a_q + \delta_{q,p}\,a_k^\dagger + \delta_{q,k}\,a_p^\dagger$. The first term dies on $|\Omega\rangle$ ($a_q|\Omega\rangle=0$), leaving two Kronecker deltas:
> $$
> \vec P\,a_p^\dagger a_k^\dagger|\Omega\rangle
> =\sum_{\vec q}\vec q\big(\delta_{q,p}\,a_q^\dagger a_k^\dagger+\delta_{q,k}\,a_p^\dagger a_q^\dagger\big)|\Omega\rangle
> =(\vec p+\vec k)\,a_p^\dagger a_k^\dagger|\Omega\rangle .
> $$
> So the total momentum eigenvalue is $\vec p+\vec k$ — momenta simply add, as two independent excitations should. Running the identical calculation with $H=\sum_{\vec q}E_q\,a_q^\dagger a_q$ replaces each $\vec q$ by $E_q$, giving total energy $E_p+E_k$; for $m>0$ this exceeds $\sqrt{(\vec p+\vec k)^2+m^2}$, so two particles are not one heavier particle. The symmetry $a_p^\dagger a_k^\dagger|\Omega\rangle = a_k^\dagger a_p^\dagger|\Omega\rangle$ holds because $[a_p^\dagger,a_k^\dagger]=0$: the state is unchanged under exchange, which is exactly what makes these quanta **bosons**.
>
> **(b)** From the identity, $[H,a_p^\dagger]=E_p\,a_p^\dagger$ (the label $k=p$ is the only surviving term in the sum), so
> $$H(a_p^\dagger)^2|\Omega\rangle = \big([H,a_p^\dagger]a_p^\dagger + a_p^\dagger[H,a_p^\dagger] + a_p^\dagger a_p^\dagger H\big)|\Omega\rangle.$$
> Since $H|\Omega\rangle=0$, the last term dies, and each commutator gives $E_p$:
> $$H|\psi\rangle = \big(E_p\,a_p^\dagger a_p^\dagger + E_p\,a_p^\dagger a_p^\dagger\big)|\Omega\rangle = 2E_p\,|\psi\rangle.$$
> So $|\psi\rangle$ **is** an energy eigenstate, eigenvalue $2E_p$ — the student's arithmetic is right. But the interpretation is wrong. The same computation gives $\vec P|\psi\rangle = 2\vec p\,|\psi\rangle$, and the mass-shell test of equation (3) fails at every $\vec p$:
> $$(2E_p)^2-(2\vec p)^2 = 4\big(E_p^2-\vec p^{\,2}\big) = 4m^2 \neq m^2 \quad (m>0).$$
> The state sits exactly on a mass-$2m$ shell — the invariant mass of two mass-$m$ quanta with zero relative momentum — not on the mass-$m$ shell of a single particle. It is **two** identical quanta of momentum $\vec p$: energies and momenta simply add. Being an energy eigenstate is necessary but not sufficient for "one particle" — $(H,\vec P)$ must land on the mass-$m$ shell, and for $m>0$ only the single-quantum states $a_p^\dagger|\Omega\rangle$ do ($n$ quanta carry invariant mass at least $nm$).
