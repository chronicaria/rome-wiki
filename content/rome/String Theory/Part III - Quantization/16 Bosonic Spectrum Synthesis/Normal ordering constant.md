---
title: Normal ordering constant
number: "16.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, quantization]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The normal-ordering constant is the leftover zero-point energy of the string's infinitely many vibrating modes. Regularizing the divergent sum $\sum n$ down to $-\tfrac1{12}$ per direction gives the additive constant $a=-1$ that pushes the ground state into the tachyon — a value the theory locks in only at $D=26$.

## An infinite stack of oscillators

A guitar string, quantum-mechanically, is an infinite collection of harmonic oscillators, one for each vibrational overtone. Every quantum oscillator keeps an irreducible **zero-point energy** even in its ground state: it can never sit perfectly still. Add up the zero-point energies of all the overtones and the total is formally infinite. That infinity is not a disaster. It is the same object as the **Casimir energy** — the small attractive force between two uncharged metal plates in vacuum, which is real and measured — and in both cases the physically meaningful quantity is finite and comes out **negative**.

The one number to carry: a divergent sum of positive integers, $1+2+3+\cdots$, has a well-defined finite fingerprint of $-\tfrac1{12}$. That number, times the count of transverse directions and a factor of $\tfrac12$, is the constant that drags the string's ground state below zero into a tachyon.

## Where the constant comes from

Work in natural units, $\hbar=c=1$. A single quantum harmonic oscillator of frequency $\omega$ has energy
$$
H=\omega\left(a^\dagger a+\tfrac12\right).
$$
The $a^\dagger a$ counts quanta; the $\tfrac12\omega$ is the zero-point energy that survives when no quanta are present. The string's transverse coordinate $X^I$ is a free field whose Fourier modes $\alpha_n^I$ are exactly such oscillators, one for each mode number $n=1,2,3,\dots$, with frequency $\omega_n=n$ in units set by the string length. Summing $\tfrac12\omega_n$ over all modes and over the $D-2$ transverse directions gives the total zero-point energy
$$
a=\frac{D-2}{2}\sum_{n=1}^{\infty}n. \tag{1}
$$
This is the number that appears, additively, in the mass formula: quantizing $X^I$ and moving the annihilation operators to the right ("normal ordering") leaves this constant behind, so $\alpha' M^2 = N^\perp + a$ with $N^\perp$ the oscillator level. The divergent $\sum n$ is not to be evaluated naively; it flags that the zero-point energy is a **composite operator** requiring regularization.

## Cutoff calculation

To extract the finite content of $\sum n$, damp the high modes, compute, then remove whatever depends on how we damped them. No real cavity confines arbitrarily high-frequency quanta, so insert a soft cutoff $e^{-\epsilon n}$ that switches off modes with $n\gtrsim 1/\epsilon$:
$$
S(\epsilon)=\sum_{n=1}^{\infty} n\,e^{-\epsilon n}
=\frac{e^{-\epsilon}}{(1-e^{-\epsilon})^{2}}
=\frac{1}{4\sinh^{2}(\epsilon/2)}. \tag{2}
$$
The middle equality is $\sum_{n\ge1} n x^n = x/(1-x)^2$ at $x=e^{-\epsilon}$. Expanding for small $\epsilon$,
$$
S(\epsilon)=\frac{1}{\epsilon^{2}}-\frac{1}{12}+\frac{\epsilon^{2}}{240}+\cdots. \tag{3}
$$
The two leading terms carry all the physics.

- $\dfrac{1}{\epsilon^{2}}$ diverges as the cutoff is removed. It scales like (cutoff energy)$^2$: a smooth, extensive vacuum energy of empty worldsheet, a bulk quantity carrying no information about the string's finite length. Normal ordering subtracts it once and for all, absorbing it into the definition of the vacuum — the same move that discards the cutoff-dependent bulk energy in the Casimir plate calculation.
- $-\dfrac{1}{12}$ is cutoff-independent; it survives $\epsilon\to0$. This is the genuine Casimir remnant, the finite gap between the confined string's vacuum energy and the free continuum. It is negative, and it is the answer.

So the regularized value of the divergent sum is
$$
\sum_{n=1}^{\infty}n \;\longrightarrow\; -\frac{1}{12}. \tag{4}
$$
Analytic continuation of the Riemann zeta function assigns the same number, $\zeta(-1)=-\tfrac1{12}$, but $\zeta(-1)$ is shorthand for the cutoff calculation above, not an independent justification. Writing "$1+2+3+\cdots=-\tfrac1{12}$" naively is nonsense; the meaning lives entirely in the subtraction of the $1/\epsilon^2$ bulk term.

## From the sum to the constant

Feed (4) into (1):
$$
a=\frac{D-2}{2}\left(-\frac{1}{12}\right)=-\frac{D-2}{24}. \tag{5}
$$
Regularization ties the constant to the dimension but does not by itself pick $D$. The dimension is fixed separately, by demanding that Lorentz invariance survive quantization (see [[Critical dimension D=26]]); that check forces
$$
\boxed{\,D=26 \;\Longrightarrow\; a=-\frac{24}{24}=-1.\,} \tag{6}
$$
One unit of zero-point shift against one unit of oscillator level — exactly the balance that makes the first excited state massless. The open-string mass formula becomes
$$
\alpha' M^2 = N^\perp - 1,
$$
so the ground state $N^\perp=0$ has $\alpha' M^2 = -1 < 0$: a **tachyon** (see [[Tachyon as instability]]), the direct fingerprint of the negative Casimir energy.

**Sign-convention warning.** The textbooks write this physics two ways. Here $a$ is the constant that *adds* to the zero-point energy, so $\alpha' M^2 = N^\perp + a$ with $a=-1$; the intercept is then $-a=+1$. Other texts write the mass shift as a positive number subtracted, $\alpha' M^2 = N^\perp - a_+$ with $a_+=(D-2)/24=+1$, so $a_+=-a$. "The intercept is $+1$" and "the additive shift is $-1$" are the same statement; check which convention a formula uses before comparing factors. The neighboring notes [[Open versus closed spectra]] and [[Critical dimension D=26]] carry the full mass formulas (including the open-versus-closed factor of $4$); this note supplies only the number $-\tfrac1{12}$ that feeds them.

## Why the cutoff answer is trustworthy

The soft cutoff $e^{-\epsilon n}$ is arbitrary, so why should any physics survive it? Because the answer $-\tfrac1{12}$ is independent of the regulator: a sharp cutoff, a zeta function, or a heat-kernel damping all leave the same finite constant once their own bulk divergences are subtracted. The divergent $1/\epsilon^2$ piece is regulator-dependent and unphysical; the finite piece is not. That universality is what makes the Casimir energy a prediction rather than an artifact, and it is why the same $-\tfrac1{12}$ shows up in real one-dimensional systems such as quantum spin chains.

The cutoff computation explains the *number* but not the *consistency*: it does not prove that $D=26$ is forced. That comes from a separate demand — that the quantum Lorentz generators still close — which pins $a=-1$ and $D=26$ together. The finite Casimir subtraction, the light-cone Lorentz algebra, and (covariantly) the vanishing of the Weyl anomaly $c_{\text{matter}}+c_{\text{gh}}=D-26=0$ are three faces of one consistency condition.

## Open questions

- The mode-by-mode Lorentz-closure computation $[M^{-I},M^{-J}]=0$ that actually *forces* $D=26$ is carried out in [[Critical dimension D=26]]; this note only supplies the Casimir input.
- In the superstring, worldsheet fermions contribute their own zero-point energy of opposite sign, partially cancelling the boson sum. The additive constant and the critical dimension both change (to $D=10$); see [[Worldsheet fermions|Superstring Preview]].

## Exercise

The expansion (3) has a next term, $+\dfrac{\epsilon^{2}}{240}$. A student worries this represents an *extra* finite physical contribution to the zero-point energy that the note ignored. Resolve the worry: what happens to this term as the cutoff is removed, and what does the sign of the $-\tfrac1{12}$ term (versus this one) tell you physically? As a numerical sanity check, verify directly from the closed form (2) that $\lim_{\epsilon\to0}\big[S(\epsilon)-\epsilon^{-2}\big]=-\tfrac1{12}$.

> [!success]- Solution
> **The $\epsilon^2$ term vanishes.** As the cutoff is removed, $\epsilon^2/240 \to 0$, so it contributes nothing to the physical zero-point energy. Only two kinds of term matter in the limit: those that diverge (here $\epsilon^{-2}$, subtracted as bulk vacuum energy) and the single cutoff-independent constant ($-\tfrac1{12}$). Every positive power of $\epsilon$ is a cutoff artifact that switches off when the regulator is removed. There is no extra physical piece; the finite content of the sum is exactly $-\tfrac1{12}$.
>
> **The sign carries the physics.** The one surviving constant is negative even though every term of $\sum n$ is positive. That negative sign is what drives $a=-1$, hence the tachyonic ground state $\alpha'M^2=-1$. A positive constant would have pushed the ground state up, not down.
>
> **Numerical check.** From (2), $S(\epsilon)=\dfrac{1}{4\sinh^2(\epsilon/2)}$. Using $\sinh u = u + \tfrac{u^3}{6}+\cdots$ with $u=\epsilon/2$,
> $$
> \sinh^2(\epsilon/2)=\frac{\epsilon^2}{4}\left(1+\frac{\epsilon^2}{24}+\cdots\right)^2=\frac{\epsilon^2}{4}\left(1+\frac{\epsilon^2}{12}+\cdots\right),
> $$
> so
> $$
> S(\epsilon)=\frac{1}{\epsilon^2}\left(1+\frac{\epsilon^2}{12}+\cdots\right)^{-1}=\frac{1}{\epsilon^2}\left(1-\frac{\epsilon^2}{12}+\cdots\right)=\frac{1}{\epsilon^2}-\frac{1}{12}+\cdots.
> $$
> Subtracting the $\epsilon^{-2}$ divergence and taking $\epsilon\to0$ leaves exactly $-\tfrac1{12}$. (A quick numerical evaluation at, say, $\epsilon=0.01$ gives $S-\epsilon^{-2}\approx -0.0833$, i.e. $-1/12$.)
