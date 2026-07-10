---
title: States, inner products, and observables
number: "3.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, hilbert-space]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A quantum state is a unit vector (really a *ray*) in a complex Hilbert space; observables are Hermitian operators; their eigenvalues are the possible measurement outcomes, and squared magnitudes of inner products are the probabilities.

The whole framework is one slogan: **quantum mechanics is linear algebra over $\mathbb C$, plus one rule that turns squared components into probabilities.** Everything below is machinery you already know from $\mathbb C^n$ — column vectors, inner products, Hermitian matrices, eigen-decomposition — carried over to infinite dimensions. The *only* genuinely new physics is the Born rule: the length-squared of a component is a probability. That split is the thing to hold onto. We build this stage now because every string state will live on exactly such a space, and its inner product will decide which states are real and which are unphysical "ghosts."

## The stage: a complex vector space with an inner product

A quantum **state** is a vector in a complex Hilbert space $\mathcal H$. Following Dirac we write it as a **ket** $|\psi\rangle$. For a particle on a line, $\mathcal H$ is the space of square-integrable functions $\psi(x)$, and the abstract ket and the concrete wavefunction are two views of the same object:

$$ \psi(x) = \langle x | \psi \rangle . $$

The wavefunction is the component of $|\psi\rangle$ along the position eigenstate $|x\rangle$ — exactly like the component $v_i = \langle e_i, v\rangle$ of an ordinary vector along a basis vector, but with a continuous index $x$ in place of a discrete one.

Keep the finite-dimensional picture as your anchor. If $\mathcal H=\mathbb C^n$, then $|\psi\rangle$ is a column vector, the **bra** $\langle\psi|$ is its conjugate-transpose row vector, and their pairing is the ordinary Hermitian inner product

$$ \langle\phi|\psi\rangle=\phi^\dagger\psi=\sum_{j=1}^n \phi_j^*\psi_j . $$

Dirac notation is not a new algebra. It is this same complex linear algebra, written so that every formula survives verbatim when the index set $\{1,\dots,n\}$ becomes the continuum of positions $x$. In that continuous case the sum becomes an integral:

$$ \langle \phi | \psi \rangle = \int_{-\infty}^{\infty} \phi^*(x)\,\psi(x)\,dx . $$

For a mathematician: $\langle\cdot|\cdot\rangle$ is a Hermitian inner product — linear in the second slot, antilinear in the first, with $\langle\psi|\phi\rangle = \langle\phi|\psi\rangle^*$ and $\langle\psi|\psi\rangle\ge 0$. The antilinearity is the *only* deviation from a real inner product, and it is forced: it is what keeps $\langle\psi|\psi\rangle=\sum|\psi_j|^2$ real and positive when the components are complex.

For a discrete orthonormal basis $\{|e_n\rangle\}$, "orthonormal" means $\langle e_m|e_n\rangle=\delta_{mn}$ and "complete" means every state expands in it:

$$ |\psi\rangle=\sum_n |e_n\rangle\langle e_n|\psi\rangle . $$

This is just coordinate expansion: the coefficient of $|e_n\rangle$ is the inner product against $|e_n\rangle$. For the continuous position basis the same statement reads

$$ \langle x|x'\rangle=\delta(x-x'), \qquad |\psi\rangle=\int_{-\infty}^{\infty} dx\, |x\rangle\langle x|\psi\rangle . \tag{1}$$

The Dirac delta is the continuum's Kronecker delta: position eigenstates at different points are orthogonal, but each $|x\rangle$ has infinite norm, so it is *not* a legal state — only smeared-out packets $\psi(x)$ are normalizable. Think of $|x\rangle$ as a useful idealization (a ruler mark), not a state you can prepare.

## Normalization and the Born rule

Physical states have unit length:

$$ \langle\psi|\psi\rangle = \int |\psi(x)|^2\,dx = 1 . $$

Now the one new idea. **Born rule:** $|\psi(x)|^2$ is a probability density, and for any normalized $|\phi\rangle$,

$$ \boxed{\;P(\phi\,|\,\psi) = |\langle\phi|\psi\rangle|^2\;} $$

is the probability that a system prepared in $|\psi\rangle$ is found in state $|\phi\rangle$ upon measurement. The intuition: the component $\langle\phi|\psi\rangle$ is a complex **amplitude**, like the coordinate of $|\psi\rangle$ along the $|\phi\rangle$ axis; the Born rule says *nature reports the square of that coordinate as a probability*. Unit norm is then just Pythagoras — the squared components sum to $1$, so total probability is $1$. This rule is an **axiom**, not a theorem of linear algebra; it is where "probability" enters a theory that is otherwise pure geometry.

If a nonzero vector is not normalized, the state it represents is obtained by dividing out its length:

$$ |\psi_{\rm norm}\rangle=\frac{|\psi\rangle}{\sqrt{\langle\psi|\psi\rangle}} . $$

Concretely, take a two-state superposition

$$ |\psi\rangle=\frac{3}{5}|e_1\rangle+\frac{4i}{5}|e_2\rangle . $$

It is already normalized ($9/25+16/25=1$), and the outcome probabilities are $|3/5|^2=9/25$ and $|4i/5|^2=16/25$. The phase $i$ contributes nothing to *this* state's probabilities — $|4i/5|^2=16/25$ regardless — yet it is decisive when this state *interferes* with another. That is the whole difference between a probability (a square, phase-blind) and an amplitude (complex, phase-sensitive).

The same fact, globalized: $|\psi\rangle$ and $e^{i\alpha}|\psi\rangle$ give identical probabilities for *every* measurement, so they are the same physical state. **Only the ray — the complex line through the origin — is physical, not the vector on it.** (Relative phases *between* rays still matter; it is only the one overall phase that is invisible.)

## Observables are Hermitian operators

A measurable quantity (position, momentum, energy) is a linear operator $\hat A$ on $\mathcal H$ that is **Hermitian** (self-adjoint), $\hat A^\dagger = \hat A$, where the adjoint is defined by

$$ \langle \phi | \hat A\, \psi \rangle = \langle \hat A^\dagger \phi \,|\, \psi \rangle \quad\text{for all }\phi,\psi . $$

Two facts — both pure linear algebra you already trust in finite dimensions — make Hermiticity exactly the right demand:

1. **Real eigenvalues.** If $\hat A|a\rangle = a|a\rangle$ then $a = \langle a|\hat A|a\rangle/\langle a|a\rangle$, and Hermiticity forces this ratio to be real. *Measurement outcomes are real numbers, so observables must have real spectra.*
2. **An orthonormal eigenbasis.** Eigenstates with distinct eigenvalues are orthogonal, and the spectral theorem guarantees the eigenstates span $\mathcal H$. *This is precisely what lets you expand any state in the eigenstates of an observable and apply the Born rule to the coefficients.* (In infinite dimensions the spectrum can be continuous — then the "eigenbasis" consists of idealized states like $|x\rangle$, normalized as in (1), and sums become integrals; one also tracks the domains of unbounded operators like $\hat x,\hat p$. The algebra is identical to the finite-dimensional case.)

Position and momentum act on wavefunctions as

$$ \hat x\,\psi(x) = x\,\psi(x), \qquad \hat p\,\psi(x) = \frac{\hbar}{i}\frac{d\psi}{dx} . $$

Position just multiplies by the coordinate; momentum reads the *slope* of the wave, and $\hbar$ — kept explicit throughout this module — converts wavenumber into momentum. The peculiar prefactor $\hbar/i$ is not a free choice — it is the unique constant that makes $\hat p$ Hermitian while giving $[\hat x,\hat p]=i\hbar$ (worked out in [[Canonical commutation relations]]). Here is why the $i$ is mandatory. For wavefunctions vanishing at infinity, integrate by parts:

$$ \langle\phi|\hat p\psi\rangle
=\int \phi^*(x)\,\frac{\hbar}{i}\,\psi'(x)\,dx
=\underbrace{\left[\frac{\hbar}{i}\phi^*\psi\right]_{-\infty}^{\infty}}_{=\,0}
-\int \frac{\hbar}{i}\,(\phi^*)'(x)\,\psi(x)\,dx . $$

The boundary term dies for localized states. Now use $\big(\tfrac{\hbar}{i}\big)^*=i\hbar=-\tfrac{\hbar}{i}$, so $(\hat p\phi)^* = \big(\tfrac{\hbar}{i}\phi'\big)^* = i\hbar\,(\phi^*)'= -\tfrac{\hbar}{i}(\phi^*)'$, which is exactly the integrand above:

$$ \langle\phi|\hat p\psi\rangle=\int (\hat p\phi)^*(x)\,\psi(x)\,dx=\langle\hat p\phi|\psi\rangle . $$

So $\hat p$ is Hermitian. The mechanism: the bare derivative $d/dx$ is *anti*-Hermitian (integration by parts flips its sign), and multiplying by $\hbar/i$ — a pure imaginary number — flips the sign back, converting it into a genuine observable. Drop the $i$ and you would be measuring an imaginary quantity.

## Measurement and expectation values

When you measure $\hat A$ in the state $|\psi\rangle$:

- the result is one of the eigenvalues $a$;
- the probability of outcome $a$ is $|\langle a|\psi\rangle|^2$ (Born rule);
- the **expectation value** (the mean over many identical measurements) is

$$ \langle \hat A\rangle_\psi = \langle\psi|\hat A|\psi\rangle = \sum_a a\,|\langle a|\psi\rangle|^2 . $$

The second equality is just the spectral expansion $\hat A=\sum_a a\,|a\rangle\langle a|$ sandwiched in $|\psi\rangle$: *the mean is the eigenvalue-weighted sum of outcome probabilities* — an ordinary weighted average, where the weights happen to be squared amplitudes.

This is the finite-dimensional diagonalization picture, reinterpreted. To measure $\hat A$, decompose $|\psi\rangle$ in the orthonormal eigenbasis $\{|a\rangle\}$ and draw one label $a$ with probability equal to its squared coefficient. Quantum mechanics changed the *meaning* of the coefficients (amplitudes, whose squares are probabilities) — not the linear-algebraic decomposition, which is the same eigen-expansion you would do to any Hermitian matrix.

## Why this matters for strings

Every string state will be a ket built by hitting a ground state with creation operators — schematically $\alpha_{-1}^I|0;p\rangle$, a vacuum labeled by the string's momentum $p$ carrying one quantum in the lowest vibration mode (the index $I$ picks a direction of oscillation). Three structures from this note then return with full force: the *inner product* decides which such states are physical and which have zero or negative norm (the notorious **ghosts**); the *observables* are the momenta and the mass-squared operator; and the *eigenvalues* of mass-squared are the particle spectrum. The same scaffolding is what we count with in [[Density of states|Partition Functions and State Counting]] and constrain in [[Current versus charge|Currents, Constraints, and Gauge Redundancy]]. Master the ray, the amplitude, and the Hermitian eigen-expansion, and you already know what string quantization is *doing*.

## Open questions

- Domain subtleties are real: $\hat x$ and $\hat p$ are not defined on every square-integrable function. The oscillator notes work on their common dense domain of well-behaved wavefunctions and never hit trouble.
- The Born rule is taken as an axiom. Deriving it from Gleason-type theorems or decision theory is a foundations question, irrelevant to the oscillator algebra.

## Exercise

An operator built from a non-Hermitian one, $\hat N = \hat B^\dagger \hat B$, appears everywhere in this course (the number operator $a^\dagger a$ is exactly this shape). Show, using only the definitions in this note, that (a) $\hat N$ is Hermitian, and (b) $\langle\hat N\rangle_\psi \ge 0$ in every normalized state — so its eigenvalues cannot be negative. Then say in one sentence why "$a^\dagger a$ counts a non-negative integer number of quanta" is consistent with this, but "$a a^\dagger$" would give a different lowest eigenvalue.

> [!success]- Solution
> **(a) Hermiticity.** Use $(\hat X\hat Y)^\dagger = \hat Y^\dagger \hat X^\dagger$ and $(\hat X^\dagger)^\dagger=\hat X$:
> $$ \hat N^\dagger = (\hat B^\dagger \hat B)^\dagger = \hat B^\dagger (\hat B^\dagger)^\dagger = \hat B^\dagger \hat B = \hat N . $$
> So $\hat N^\dagger=\hat N$, and by fact 1 its eigenvalues are real.
>
> **(b) Non-negativity.** Take any normalized $|\psi\rangle$. Move $\hat B^\dagger$ across the inner product as the adjoint of $\hat B$:
> $$ \langle\hat N\rangle_\psi = \langle\psi|\hat B^\dagger \hat B|\psi\rangle = \langle \hat B\psi\,|\,\hat B\psi\rangle = \big\|\,\hat B|\psi\rangle\,\big\|^2 \ge 0 , $$
> a squared norm, hence $\ge 0$. Applying this to a normalized eigenstate $\hat N|\nu\rangle=\nu|\nu\rangle$ gives $\nu = \langle\hat N\rangle_\nu \ge 0$: **no eigenvalue is negative.**
>
> **One sentence.** Positivity only pins the *bottom* of the spectrum to be $\ge 0$; since $a a^\dagger = a^\dagger a + [a,a^\dagger] = \hat N + 1$ (using $[a,a^\dagger]=1$), reordering the same two operators shifts every eigenvalue up by $1$ — which is exactly why the choice $\hat N=a^\dagger a$, not $aa^\dagger$, is what makes the lowest count equal $0$ rather than $1$.
