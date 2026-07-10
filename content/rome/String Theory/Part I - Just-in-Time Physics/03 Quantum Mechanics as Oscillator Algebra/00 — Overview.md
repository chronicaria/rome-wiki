---
title: 00 — Overview
number: "3.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillator-algebra]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The quantum harmonic oscillator, solved by ladder operators from the single relation $[a,a^\dagger]=1$, is the atom of string theory: every vibration mode of a string is one copy of it, so we master it here once and reuse it forever.

## One ladder per harmonic

A guitar string is a bundle of independent springs: pluck it and it rings in a superposition of harmonics, each harmonic vibrating on its own. Quantize one spring and its energy stops being continuous — it climbs an evenly spaced ladder, $E_n=\hbar\omega(n+\tfrac12)$, one rung per "quantum" (we keep $\hbar$ explicit throughout this module). A quantum string is the same, one ladder per harmonic. The state of the string is then just an answer to *"how many quanta sit in each harmonic?"* — and, remarkably, each distinct answer turns out to be a distinct **particle**. The tachyon, the photon, the graviton, and the magic dimension $D=26$ are all bookkeeping on these ladders.

The leverage is enormous: own the one-oscillator algebra and most of string quantization is already in hand. What is new when the string arrives is not the algebra but the *interpretation* — the oscillator describes a vibration mode of a string rather than a single mass on a spring.

## The arc, for a math reader

The path is four moves, each a small generalization of linear algebra you already know:

1. **Change the arena.** Replace vectors in $\mathbb{C}^n$ by vectors in an infinite-dimensional inner-product (Hilbert) space; observables become Hermitian operators, and their eigenvalues are the possible measurement outcomes.
2. **Let operators stop commuting.** Position and momentum obey $[\hat x,\hat p]=i\hbar$. This one relation is the seed of everything — it forces the uncertainty principle and, downstream, the zero-point energy.
3. **Diagonalize by hand.** Choose the clever complex combinations $a,a^\dagger$ of $\hat x,\hat p$ so that the Hamiltonian becomes a *counting operator* $H=\hbar\omega(a^\dagger a+\tfrac12)$. The spectrum then falls out with no calculus.
4. **Repeat per mode.** A vibrating string separates into Fourier modes; orthogonality decouples them; each decoupled amplitude is one oscillator from step 3. Stack them and count.

The engine is the same trick as diagonalizing a coupled quadratic form $\tfrac12 p^\top p+\tfrac12 q^\top K q$ into independent oscillators: for a string the "matrix" $K$ is the spatial operator $-\partial_\sigma^2$, and its eigenvectors are the Fourier modes.

## The map of this module

Six notes build the toolkit in order. The first three lay the stage and solve the oscillator; the last three count excitations, quantize a spectrum from boundary conditions, and hand off to the string.

- 3.1 [[States, inner products, and observables]] — the Hilbert-space stage: kets, bras, inner products, Hermitian operators, eigenvalues as measurement outcomes.
- 3.2 [[Canonical commutation relations]] — $[\hat x,\hat p]=i\hbar$, why it holds, and why non-commuting operators force the uncertainty principle.
- 3.3 [[Ladder operators]] — build $a,a^\dagger$ from $\hat x,\hat p$; derive $[a,a^\dagger]=1$ and the factored Hamiltonian $H=\hbar\omega(a^\dagger a+\tfrac12)$.
- 3.4 [[The number operator]] — $N=a^\dagger a$, why its eigenvalues are exactly $0,1,2,\dots$, and why it "counts excitations." It works the exercise below in full.
- 3.5 [[Quantized momentum from boundary conditions]] — a particle on a segment (standing waves) and on a circle (periodicity $\Rightarrow p=\hbar n/R$): boundary conditions, not the equation, pick the spectrum.
- 3.6 [[A string is many oscillators]] — the synthesis: a vibrating string's modes are a tower of independent oscillators, and excitation numbers become particle states.

The two models in that lesson are the two string types in miniature. A particle on an interval gets walls, standing waves, and a discrete spectrum with nonzero ground energy — the template for an open string, whose endpoints carry Neumann or Dirichlet conditions. A particle on a circle gets periodicity, momentum quantized in units of $\hbar/R$, and $\pm n$ degenerate in pairs — the template for a closed string, which has no endpoints and instead closes on itself, $\sigma\sim\sigma+2\pi$.

## Open questions

- We work in the **Schrödinger picture** (operators fixed, states evolve) throughout this module. The string is usually quantized in the **Heisenberg picture** (operators carry the time dependence); [[Schrodinger and Heisenberg pictures]] compares them later.
- We keep $\hbar$ explicit here. String theory sets $\hbar=c=1$ and lets $\alpha'$ (the string length scale) carry the dimensions. We commit to dropping $\hbar$ at the start of Part II.

## Exercise

The whole module reduces to one self-test. Do it with the notes closed; if you can, the oscillator is yours. The full worked version with normalization constants lives in 3.4 [[The number operator]].

> Starting **only** from $[a,a^\dagger]=1$ and $H=\hbar\omega\!\left(a^\dagger a+\tfrac12\right)$:
> 1. Show $[H,a^\dagger]=+\hbar\omega\,a^\dagger$ and $[H,a]=-\hbar\omega\,a$.
> 2. Conclude that if $H|E\rangle=E|E\rangle$ then $a^\dagger|E\rangle$ has energy $E+\hbar\omega$ and $a|E\rangle$ has energy $E-\hbar\omega$ (hence "raising/lowering").
> 3. Argue the spectrum is bounded below, define the ground state by $a|0\rangle=0$, and derive $E_n=\hbar\omega(n+\tfrac12)$, $n=0,1,2,\dots$.
> 4. Explain why $N=a^\dagger a$ has eigenvalues exactly $n$, and therefore "counts excitations."

> [!success]- Solution
> Write $N=a^\dagger a$, so $H=\hbar\omega(N+\tfrac12)$. Everything follows from $[a,a^\dagger]=1$ and the product rule $[AB,C]=A[B,C]+[A,C]B$.
>
> **1. Key commutators.**
> $$[N,a^\dagger]=[a^\dagger a,a^\dagger]=a^\dagger[a,a^\dagger]+[a^\dagger,a^\dagger]a=a^\dagger,$$
> $$[N,a]=[a^\dagger a,a]=a^\dagger[a,a]+[a^\dagger,a]a=-a.$$
> Multiplying by $\hbar\omega$ (and using $H=\hbar\omega N+$ const, so the constant drops out of any commutator):
> $$[H,a^\dagger]=+\hbar\omega\,a^\dagger,\qquad [H,a]=-\hbar\omega\,a.$$
> These say $a^\dagger$ and $a$ each carry $\pm$ one unit of $N$: they are the ladder rungs.
>
> **2. The ladder.** If $H|E\rangle=E|E\rangle$, push $H$ through $a^\dagger$ using part 1:
> $$H\,a^\dagger|E\rangle=\big(a^\dagger H+[H,a^\dagger]\big)|E\rangle=\big(a^\dagger E+\hbar\omega\,a^\dagger\big)|E\rangle=(E+\hbar\omega)\,a^\dagger|E\rangle.$$
> So $a^\dagger|E\rangle$ is an eigenstate of energy $E+\hbar\omega$ (unless it vanishes). The same computation gives $H\,a|E\rangle=(E-\hbar\omega)\,a|E\rangle$, so $a$ lowers by $\hbar\omega$. Hence raising/lowering (creation/annihilation).
>
> **3. Bottom of the ladder and the spectrum.** Positivity pins the floor. For any normalized eigenstate $N|\nu\rangle=\nu|\nu\rangle$,
> $$\nu=\langle\nu|N|\nu\rangle=\langle\nu|a^\dagger a|\nu\rangle=\big\|\,a|\nu\rangle\,\big\|^2\ge 0,$$
> using that $a^\dagger$ is the adjoint of $a$. So no eigenvalue of $N$ is negative, and (via $H=\hbar\omega(N+\tfrac12)$) the energy is bounded below.
> But part 2 says $a$ lowers $\nu$ in integer steps. Start from any eigenvalue $\nu\ge0$ and apply $a$ repeatedly: the chain must terminate, or it would reach a negative eigenvalue and contradict positivity. It can only terminate by hitting a state $|0\rangle$ with
> $$a|0\rangle=0\;\Longrightarrow\;N|0\rangle=a^\dagger a|0\rangle=0,$$
> so the bottom rung sits at exactly $0$, not merely somewhere $\ge0$. If the original $\nu$ took $r$ lowerings to reach $0$, then $\nu=r$ is a non-negative integer — this rules out fractional bottoms like $\nu_0=\tfrac12$. Building back up with $a^\dagger$ gives eigenvalues $0,1,2,\dots$, hence
> $$E_n=\hbar\omega\left(n+\tfrac12\right),\qquad n=0,1,2,\dots$$
> The floor $E_0=\tfrac12\hbar\omega\neq0$ is the zero-point energy: the commutator $[\hat x,\hat p]=i\hbar$ forbids sitting still at $x=p=0$.
>
> **4. Why $N$ counts.** By construction $N|n\rangle=n|n\rangle$ with $n\in\{0,1,2,\dots\}$, and each $a^\dagger$ climbs one rung, adding one quantum of energy $\hbar\omega$. Reading $|n\rangle=\frac{(a^\dagger)^n}{\sqrt{n!}}|0\rangle$ as "the vacuum with $n$ identical quanta added," $N$ returns that integer $n$ — literally the number of quanta present. In 3.6 [[A string is many oscillators]] each vibration mode gets its own $a^\dagger$, and "$n$ quanta in mode $k$" becomes a string excitation, later reinterpreted as particles.
