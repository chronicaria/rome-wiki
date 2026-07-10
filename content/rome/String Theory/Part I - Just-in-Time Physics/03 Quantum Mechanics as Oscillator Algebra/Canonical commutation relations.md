---
title: Canonical commutation relations
number: "3.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, commutators]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Position and momentum fail to commute: $[\hat x,\hat p]=i\hbar$, the seed of all quantum behavior. This one relation forces momentum to act as $\frac{\hbar}{i}\partial_x$, forces the uncertainty principle, and gets stamped onto every vibration mode when we quantize the string.

## Why order matters

The operators representing position and momentum act on the wavefunction, and **the order in which they act matters**. Multiplying a function by $x$ and then differentiating is not the same as differentiating and then multiplying by $x$ — the product rule leaves a leftover. That leftover, packaged as a number, *is* the commutator $[\hat x,\hat p]=i\hbar$. Everything strange about quantum mechanics — no simultaneous sharp position and momentum, a ground state that can't sit still — is this one non-cancellation, dressed up.

Rotating a book 90° about the vertical axis then 90° about a horizontal axis lands it in a different orientation than doing the two rotations in the other order. Rotations don't commute, and their failure to commute has physical content (it *is* angular momentum). Position and momentum are the same story: their non-commuting is not a bug, it is the whole physics.

## The relation

The defining algebraic statement of quantum mechanics is the **canonical commutation relation** (CCR):

$$ \boxed{\;[\hat x, \hat p] = i\hbar\;} $$

where $[\hat A,\hat B]\equiv \hat A\hat B-\hat B\hat A$ is the **commutator**, measuring how much two operators fail to interchange. In several spatial dimensions,

$$ [\hat x^i, \hat p_j] = i\hbar\,\delta^i_j, \qquad [\hat x^i,\hat x^j]=[\hat p_i,\hat p_j]=0. $$

The Kronecker $\delta^i_j$ says *different directions are independent*: $x^1$ fails to commute only with its own partner $p_1$, never with $p_2$. Positions commute with each other and momenta commute with each other — only a coordinate and its conjugate momentum clash.

This is the quantum replacement for the classical Poisson bracket $\{x,p\}=1$. The rule

$$ \{A,B\}_{\rm classical}\quad\leadsto\quad \frac{1}{i\hbar}[\hat A,\hat B]_{\rm quantum} $$

is the **canonical quantization postulate**. It is not derived from classical mechanics; it is the recipe that *builds* a quantum theory, tuned so that $\frac{1}{i\hbar}[\hat A,\hat B]$ reproduces the Poisson-bracket algebra as $\hbar\to 0$. When we quantize the string, we will apply exactly this one rule to each independent Fourier mode — that is all "quantizing the string" means at bottom.

## The CCR follows from what the operators are

We do not have to postulate $[\hat x,\hat p]=i\hbar$ abstractly — it drops out the moment we write down what $\hat x$ and $\hat p$ actually *do* to a wavefunction. From [[States, inner products, and observables]], $\hat x$ multiplies by $x$ and $\hat p=\frac{\hbar}{i}\frac{d}{dx}$. Act the commutator on an arbitrary test function $\psi(x)$ and use the product rule:

$$ [\hat x,\hat p]\,\psi = x\cdot\frac{\hbar}{i}\psi' - \frac{\hbar}{i}\frac{d}{dx}\big(x\,\psi\big) = \frac{\hbar}{i}\Big( x\psi' - \psi - x\psi'\Big) = -\frac{\hbar}{i}\,\psi = i\hbar\,\psi . \tag{1}$$

The two $x\psi'$ terms cancel. The entire result is the single $-\psi$ from $\frac{d}{dx}$ hitting the explicit $x$ in $x\psi$. Since $\psi$ was arbitrary,

$$ [\hat x,\hat p] = i\hbar . $$

The non-zero commutator is one term of the product rule — the one where the derivative lands on the $x$ instead of on $\psi$. That is the concrete face of "multiply then differentiate $\neq$ differentiate then multiply." The prefactor $\hbar/i$ is not free: Hermiticity forces it to be purely imaginary, and the convention $[\hat x,\hat p]=+i\hbar$ then selects $\hat p=\frac{\hbar}{i}\partial_x$ over $\hat p=+i\hbar\,\partial_x$, which would flip the sign to $-i\hbar$. The exercise walks through both constraints.

This same operator also earns the name **momentum**. Plane waves are its eigenfunctions:

$$ \hat p\,e^{iqx}=\frac{\hbar}{i}(iq)\,e^{iqx}=\hbar q\,e^{iqx}. $$

The derivative reads off the wavenumber $q$, and $\hbar$ converts wavenumber into momentum — de Broglie's $p=\hbar q$. Which values of $q$ are allowed is decided by boundary conditions in [[Quantized momentum from boundary conditions]].

## Commutator algebra (the identities we reuse constantly)

Three identities follow straight from the definition. We lean on them in every ladder-operator calculation, so internalize them now.

$$ [\hat A,\hat B] = -[\hat B,\hat A], \qquad [\hat A,\hat B+\hat C]=[\hat A,\hat B]+[\hat A,\hat C], $$
$$ [\hat A,\hat B\hat C] = [\hat A,\hat B]\hat C + \hat B\,[\hat A,\hat C]. \tag{2}$$

**Antisymmetry** is immediate:

$$ [\hat A,\hat B]+[\hat B,\hat A]=(\hat A\hat B-\hat B\hat A)+(\hat B\hat A-\hat A\hat B)=0. $$

The two middle products cancel exactly. **Linearity** is equally direct:

$$ [\hat A,\hat B+\hat C]=\hat A(\hat B+\hat C)-(\hat B+\hat C)\hat A=[\hat A,\hat B]+[\hat A,\hat C]. $$

The **Leibniz rule** (2) is the workhorse. Prove it by adding and subtracting the middle term $\hat B\hat A\hat C$:

$$
\begin{aligned}
[\hat A,\hat B\hat C]
&=\hat A\hat B\hat C-\hat B\hat C\hat A \\
&=(\hat A\hat B\hat C-\hat B\hat A\hat C)+(\hat B\hat A\hat C-\hat B\hat C\hat A) \\
&=[\hat A,\hat B]\hat C+\hat B\,[\hat A,\hat C].
\end{aligned}
$$

So the commutator behaves like a *derivation*: it differentiates one factor at a time while preserving the operator order. We use (2) to compute $[N,a^\dagger]$ in a single line in [[The number operator]], and that one-liner is the engine of the whole oscillator spectrum.

## Consequence: the uncertainty principle

The payoff of the CCR: **non-commuting observables cannot both be sharp, and the commutator sets the exact price of trying.** For Hermitian $\hat A,\hat B$, let

$$ \delta\hat A=\hat A-\langle\hat A\rangle,\qquad \delta\hat B=\hat B-\langle\hat B\rangle, $$

with expectation values in one normalized state $|\psi\rangle$. Because $\delta\hat A$ is Hermitian, its variance is a squared norm:

$$ (\Delta A)^2=\langle(\delta\hat A)^2\rangle=\|\delta\hat A|\psi\rangle\|^2,\qquad
(\Delta B)^2=\|\delta\hat B|\psi\rangle\|^2. $$

Cauchy–Schwarz on the vectors $\delta\hat A|\psi\rangle$ and $\delta\hat B|\psi\rangle$ gives

$$ (\Delta A)^2(\Delta B)^2\ge |\langle \delta\hat A\,\delta\hat B\rangle|^2. \tag{3}$$

The imaginary part of $\langle \delta\hat A\,\delta\hat B\rangle$ is fixed by the commutator: Hermiticity gives $\overline{\langle \delta\hat A\,\delta\hat B\rangle}=\langle \delta\hat B\,\delta\hat A\rangle$, and the c-number shifts drop out of the commutator, so $[\delta\hat A,\delta\hat B]=[\hat A,\hat B]$. Hence

$$
\operatorname{Im}\langle \delta\hat A\,\delta\hat B\rangle
=\frac{1}{2i}\Big(\langle \delta\hat A\,\delta\hat B\rangle-\langle \delta\hat B\,\delta\hat A\rangle\Big)
=\frac{1}{2i}\langle[\hat A,\hat B]\rangle .
$$

Since $|z|^2\ge(\operatorname{Im}z)^2$ for any complex $z$, inequality (3) gives the **Robertson bound**:

$$ \Delta A\,\Delta B \;\ge\; \tfrac12\,\big|\langle [\hat A,\hat B]\rangle\big|. $$

Plug in $[\hat x,\hat p]=i\hbar$:

$$ \boxed{\;\Delta x\,\Delta p \ge \frac{\hbar}{2}\;} $$

Because $\hat x$ and $\hat p$ share no eigenstate, squeezing one distribution necessarily spreads the other, and $\hbar/2$ is the exact floor, read straight off the commutator. This is not clumsy measurement; it is the geometry of the operators. It also tells us, before we do any oscillator algebra, why the ground state cannot sit frozen at $x=p=0$ (that would force $\Delta x\,\Delta p=0$, violating the bound). The oscillator's **zero-point energy** $\tfrac12\hbar\omega$ is this same bound converted into an energy — we watch it fall out algebraically in [[Ladder operators]].

## Open questions

- On a **circle**, the angle operator $\hat\theta$ is problematic because $\theta$ is multivalued, and $[\hat\theta,\hat p]=i\hbar$ cannot hold: on the circle $\hat p$ has *normalizable* eigenstates $|m\rangle$, and sandwiching the CCR gives $\langle m|[\hat\theta,\hat p]|m\rangle=0\neq i\hbar$. (On the line this argument fails — momentum eigenstates are not normalizable — which is why $[\hat x,\hat p]=i\hbar$ survives there.) The clean variable is $e^{i\theta}$; [[Quantized momentum from boundary conditions]] sidesteps the issue by diagonalizing $\hat p$ directly instead of ever writing $\hat\theta$.

## Exercise

The prefactor in $\hat p=\frac{\hbar}{i}\frac{d}{dx}$ looks like a free convention. Suppose a friend insists on the "simpler" operator $\hat p_{\rm bad}=\frac{d}{dx}$ (no $\hbar$, no $i$). Compute $[\hat x,\hat p_{\rm bad}]$ from its action on a test function, and name the *two* physical defects this choice creates — one about the commutator, one about Hermiticity.

> [!success]- Solution
> Act on an arbitrary $\psi(x)$ with the product rule, exactly as in (1):
> $$ [\hat x,\hat p_{\rm bad}]\,\psi = x\,\psi' - \frac{d}{dx}(x\psi) = x\psi' - \psi - x\psi' = -\psi, $$
> so $[\hat x,\hat p_{\rm bad}] = -1$.
>
> **Defect 1 (wrong commutator).** The canonical form requires $[\hat x,\hat p]=+i\hbar$: it must be purely imaginary (so that both $\hat x$ and $\hat p$ can be Hermitian — a commutator of two Hermitian operators is anti-Hermitian, hence $i\times$ real), and it must carry $\hbar$ to have units of action and to reproduce $\{x,p\}=1$ as $\hbar\to0$. The value $-1$ is real and dimensionless, so it fails both: it neither has the right character nor matches the classical bracket.
>
> **Defect 2 (not Hermitian).** The bare derivative is *anti*-Hermitian: for normalizable states the boundary terms vanish, and integration by parts gives $\langle\phi|\psi'\rangle = -\langle\phi'|\psi\rangle$, i.e. $(\tfrac{d}{dx})^\dagger=-\tfrac{d}{dx}$. Its expectation values are therefore purely imaginary ($\langle\psi|\psi'\rangle=-\overline{\langle\psi|\psi'\rangle}$), so $\hat p_{\rm bad}$ cannot be an observable. Multiplying by $\hbar/i=-i\hbar$ fixes exactly this: $-i\hbar\times(\text{anti-Hermitian})$ is Hermitian, and it simultaneously rescales the commutator from $-1$ to $(-i\hbar)(-1)=i\hbar$. The two defects are cured by the *same* factor — which is why the $\hbar/i$ in $\hat p$ is forced, not chosen.
