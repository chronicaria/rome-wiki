---
title: Fourier modes as oscillators
number: "4.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mode-quantization]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A free scalar field is an infinite orchestra of springs — one independent harmonic oscillator per momentum $\vec p$ — and quantizing each spring turns its energy rungs into a count of particles carrying that momentum. The $a_p,a_p^\dagger$ are the ladder operators of those springs.

Prereqs: [[Action and field equations for a scalar]], [[Ladder operators|Harmonic oscillator]], [[Ladder operators|Creation and annihilation operators]].

## Decoupling the mattress

A field $\phi(t,\vec x)$ is a number at every point of space that wobbles in time — imagine a mattress of masses joined by springs. Neighboring points are coupled (the gradient term), so a poke here shakes the whole mattress. That coupling is the whole difficulty: the degrees of freedom are tangled.

The cure is the oldest trick in linear algebra: **change basis to diagonalize.** For a translation-invariant quadratic system the diagonalizing basis is always the Fourier basis. In it the mattress's motion splits into standing waves that don't talk to each other — each wavelength $\vec p$ vibrates on its own, at its own frequency, exactly like one isolated spring. So:

$$\text{coupled field} \;\xrightarrow{\text{Fourier}}\; \text{independent springs, one per }\vec p.$$

Once the field is a pile of independent springs, quantizing it is nothing new: we already know a quantum spring has evenly spaced energy rungs built by a ladder operator $a^\dagger$. The payoff, developed here and cashed out in [[Fock vacuum]] and [[One-particle states]], is the dictionary **one rung on the $\vec p$-spring = one particle of momentum $\vec p$.**

## Strategy

We never quantize "the field" as one infinite object. Instead:

1. put space in a periodic box, so momenta are **discrete** (a countable pile of springs, not a continuum);
2. isolate a single momentum $\vec p$ and reduce it to ordinary oscillator mechanics — all the physics lives here;
3. restore the sum over all momenta and read off the quantum field.

## Step 1 — Box and discrete modes

Put space in a box with sides $L_1,\dots,L_d$, volume $V=L_1\cdots L_d$, and demand periodicity. A wave $e^{i\vec p\cdot\vec x}$ fits the box only if it comes back to itself after one period, which quantizes each momentum component:

$$ p_i L_i = 2\pi n_i,\qquad n_i\in\mathbb Z. $$

The allowed momenta form a discrete lattice — a *countable* set of modes, exactly what we want to quantize one at a time. The one fact that makes the modes decouple is orthogonality: for any nonzero allowed momentum $\vec p$,

$$ \int_{\text{box}} d^dx\; e^{\pm 2i\vec p\cdot\vec x} = 0, $$

because a full oscillation averages to zero over its period, while a momentum-free integrand just gives the volume $V$. This is the sieve that kills every cross-term between different modes.

## Step 2 — One mode is two springs (the finite problem)

Take a field built from a *single* momentum $\vec p$, patterned on a real plane wave:

$$ \phi_p(t,\vec x) = \frac{1}{\sqrt V}\,\frac{1}{\sqrt{2E_p}}\Big(a(t)\,e^{i\vec p\cdot\vec x} + a^*(t)\,e^{-i\vec p\cdot\vec x}\Big). $$

Two deliberate choices. First, $a(t)$ is a genuine *dynamical variable* now — a coordinate that evolves — not a frozen Fourier coefficient; the two complex-conjugate terms keep $\phi_p$ real. Second, the prefactor $\tfrac{1}{\sqrt V}\tfrac{1}{\sqrt{2E_p}}$ is a normalization reverse-engineered so the quantized Hamiltonian lands on a clean $E_p\,a_p^\dagger a_p$ with no stray factors; the exercise derives it from scratch. (For $\vec p=0$ the pair $\{\vec p,-\vec p\}$ collapses to a single real spring; nothing essential changes, so we follow the nonzero mode.)

Feed $\phi_p$ into the scalar action (natural units, $\hbar=c=1$) $S=\int dt\,d^dx\,\big(\tfrac12(\partial_0\phi)^2 - \tfrac12(\nabla\phi)^2 - \tfrac12 m^2\phi^2\big)$. Squaring each term produces cross-terms carrying $e^{\pm 2i\vec p\cdot\vec x}$ (killed by the orthogonality above) and momentum-free terms (a factor $V$ that cancels the $1/V$). The surviving spatial integrals are

$$
\int d^dx\,(\partial_0\phi_p)^2=\frac{1}{E_p}\,\dot a^*\dot a,\qquad
\int d^dx\,(\nabla\phi_p)^2=\frac{\vec p^{\,2}}{E_p}\,a^*a,\qquad
\int d^dx\,\phi_p^2=\frac{1}{E_p}\,a^*a.
$$

The first is the spring's kinetic energy; the last two are its restoring forces (from spatial gradient and from mass). Using $E_p^2 = \vec p^{\,2}+m^2$ to merge the two potential pieces, the action collapses to

$$ \boxed{\ S = \int dt\,\Big(\tfrac{1}{2E_p}\,\dot a^*\dot a - \tfrac12 E_p\,a^*a\Big)\ } $$

This is a harmonic oscillator written in a complex coordinate. To see the familiar real form, split $a = q_1 + iq_2$; because $a^*a=q_1^2+q_2^2$ and $\dot a^*\dot a=\dot q_1^2+\dot q_2^2$,

$$ S = \sum_{i=1}^{2}\int dt\,\Big(\tfrac{1}{2E_p}\dot q_i^2 - \tfrac12 E_p\,q_i^2\Big). $$

Two *identical* real springs, each with equation of motion $\ddot q_i = -E_p^2\,q_i$ — that is, **frequency $\omega = E_p$.** The field mode's frequency is the relativistic energy of a particle of momentum $\vec p$: the first hard bridge from wave language to particle language, and it fell straight out of the mass-shell $E_p^2=\vec p^{\,2}+m^2$.

The energy is the same expression with the potential sign flipped (energy *adds* the restoring terms):

$$ H = \tfrac{1}{2E_p}\dot a^*\dot a + \tfrac12 E_p\,a^*a. $$

> **Why two springs from one momentum?** A *real* field built from $\vec p$ must also contain $-\vec p$ (the complex-conjugate term). So "the $\vec p$ mode" secretly bundles the $+\vec p$ and $-\vec p$ standing waves — two oscillators, $a_p$ and $a_{-p}$.

### Quantize the two springs

This is now the problem solved in [[Ladder operators|Quantum Mechanics as Oscillator Algebra]]. The canonical momenta are $p_i = \dot q_i/E_p$, so $p_1+ip_2 = \dot a/E_p$. The general classical solution of $\ddot a=-E_p^2 a$ is

$$ a(t) = a_p\,e^{-iE_p t} + a_{-p}^*\,e^{+iE_p t}, \tag{1}$$

with **two** independent complex constants $a_p$ and $a_{-p}^*$ (no reality condition, since $a$ itself is complex — one constant per real spring). Substitute into $H$: the time-dependence cancels (energy is conserved) and

$$ H = E_p\big(a_p^* a_p + a_{-p}^* a_{-p}\big). \tag{2}$$

Now promote to operators. The form $E_p\big(a_p^\dagger a_p + a_{-p}^\dagger a_{-p}\big)$ is exactly two oscillators of frequency $E_p$, so $a_p,a_{-p}$ are **annihilation** operators, $a_p^\dagger,a_{-p}^\dagger$ are **creation** operators, and they obey

$$ [a_p, a_p^\dagger] = 1,\qquad [a_{-p}, a_{-p}^\dagger] = 1, \tag{3}$$

with every $p$-vs-$(-p)$ commutator zero. This is not a guess pasted on: from (3) one computes $[a(t),\dot a^\dagger(t)] = [a^\dagger(t),\dot a(t)] = 2iE_p$, and inverting the linear map $a\leftrightarrow(q_i,p_i)$ turns that back into the canonical $[q_i,p_i]=i$. The oscillator algebra is *forced* by the field's own dynamics.

## Step 3 — The field limit (sum over all modes)

Restore the operator $a(t)$ inside $\phi_p$ and add up the modes: each pair $\{\vec p,-\vec p\}$ contributes its two ladder operators, and collecting every momentum's positive-frequency term once, the full quantum field is an operator-valued Fourier series:

$$ \boxed{\ \phi(t,\vec x) = \frac{1}{\sqrt V}\sum_{\vec p}\frac{1}{\sqrt{2E_p}}\Big(a_p\,e^{-iE_p t + i\vec p\cdot\vec x} + a_p^\dagger\,e^{+iE_p t - i\vec p\cdot\vec x}\Big)\ } \tag{4}$$

The $a_p$ term is a positive-frequency wave $e^{-iE_pt+i\vec p\cdot\vec x}$ (which reads as $e^{ip\cdot x}$ with $p^0=+E_p$ in mostly-plus signature); its Hermitian conjugate supplies the $a_p^\dagger$ term, keeping $\phi$ Hermitian. The commutators generalize the obvious way:

$$ [a_p, a_k^\dagger] = \delta_{p,k},\qquad [a_p,a_k] = [a_p^\dagger,a_k^\dagger]=0. \tag{5}$$

The Kronecker $\delta_{p,k}$ is the point: **distinct momenta are independent oscillators.** The tangled mattress is now a warehouse of decoupled springs, each with its own ladder. Summing the single-mode Hamiltonians (each promoted like (2)) gives

$$ H = \sum_{\vec p} E_p\, a_p^\dagger a_p, \qquad \vec P = \sum_{\vec p}\vec p\, a_p^\dagger a_p. \tag{6}$$

Each is a number operator $a_p^\dagger a_p$ weighted by that spring's energy $E_p$ or momentum $\vec p$: energy and momentum are just *bookkeeping of how many rungs are excited on each spring*, which is why the excitations are countable particles.

**On the zero-point term.** Writing $H$ as in (6), with the creation operator on the left, is the *normal-ordering* choice; it silently drops a c-number $\tfrac12\sum_{\vec p}E_p$, the vacuum zero-point energy. For the free scalar this shifts every energy by the same (infinite) constant, so we set the vacuum energy to zero and move on. For the *string* the analogous oscillator constant lands inside the mass formula and cannot be discarded: it fixes the tachyon and, via a regularized $\sum_{n} n \to \zeta(-1)=-\tfrac1{12}$ (obtained with a cutoff, never by naive summation), the critical dimension.

The infinite-volume limit is pure bookkeeping, not new physics. Trading the discrete lattice for a continuum,

$$ \frac{1}{V}\sum_{\vec p}\longrightarrow \int\frac{d^dp}{(2\pi)^d},\qquad a(\vec p)=\sqrt V\,a_p, $$

turns (5) into $[a(\vec p),a^\dagger(\vec k)]=(2\pi)^d\delta^d(\vec p-\vec k)$ and (4) into the familiar integral expansion with the same $1/\sqrt{2E_p}$ weight. We stay on the box to keep the counting discrete.

## The finite → field dictionary

| | finite (one mode $\vec p$) | field (all modes) |
|---|---|---|
| dynamical variable | $a(t)$: two springs $q_1,q_2$ | field operator $\phi(t,\vec x)$ |
| action | $\int dt\,(\tfrac{1}{2E_p}\dot a^*\dot a - \tfrac12 E_p a^*a)$ | $\int d^Dx\,\mathcal L$ |
| algebra | $[a_p,a_p^\dagger]=1$ | $[a_p,a_k^\dagger]=\delta_{p,k}$ |
| Hamiltonian | $E_p(a_p^\dagger a_p + a_{-p}^\dagger a_{-p})$ | $\sum_{\vec p}E_p\,a_p^\dagger a_p$ |
| frequency | $\omega=E_p$ | spectrum $\{E_p\}$ |

The particle reading of these springs is split across [[Fock vacuum]] (the all-springs-in-ground-state vacuum) and [[One-particle states]] ($a_p^\dagger|\Omega\rangle$ carries $E_p,\vec p$).

## Open questions

- This is a *free* field: interactions add cubic-or-higher terms that recouple the springs, so particle number stops being absolute.
- The zero-point term is cosmetic here but load-bearing for string spectra; its honest regularization is deferred to [[Harmonic-oscillator partition function]] and Modules 14/16.

## Exercise

The $1/\sqrt{2E_p}$ in the mode ansatz $\phi_p$ was pulled out of a hat and justified only by "it makes $H$ come out clean." Redo the calculation with an unknown prefactor and pin down the value that clean form demands.

Replace the normalization by an unknown constant: take
$$\phi_p = \frac{1}{\sqrt V}\,C\,\big(a\,e^{i\vec p\cdot\vec x} + a^*\,e^{-i\vec p\cdot\vec x}\big),$$
and, using the three spatial integrals of Step 2 (each proportional to $C^2$), find the value of $C$ for which the quantized Hamiltonian is exactly $H=E_p\,a_p^\dagger a_p$ per oscillator, with $[a_p,a_p^\dagger]=1$. Then state, in one sentence, what goes wrong with the particle dictionary if you instead chose $C=1$.

> [!success]- Solution
> The three Step-2 integrals were computed at $C=1/\sqrt{2E_p}$ and each is proportional to $C^2$, so a general $C$ multiplies them by $2C^2E_p$ (Step 2's $C^2=1/(2E_p)$ supplied the $1/E_p$ there):
> $$\int d^dx\,(\partial_0\phi_p)^2 = 2C^2\,\dot a^*\dot a,\quad \int d^dx\,(\nabla\phi_p)^2 = 2C^2\vec p^{\,2}\,a^*a,\quad \int d^dx\,\phi_p^2 = 2C^2 a^*a.$$
> The energy $H=\int d^dx\,\mathcal H = \tfrac12\int(\partial_0\phi_p)^2 + \tfrac12\int(\nabla\phi_p)^2 + \tfrac12 m^2\int\phi_p^2$ becomes, with $E_p^2=\vec p^{\,2}+m^2$,
> $$H = C^2\big(\dot a^*\dot a + E_p^2\,a^*a\big).$$
> Insert the classical solution (1), $a(t)=a_p e^{-iE_pt}+a_{-p}^* e^{+iE_pt}$. The cross-terms $a_p^*a_{-p}^*\,e^{+2iE_pt}$ and $a_pa_{-p}\,e^{-2iE_pt}$ appear in $\dot a^*\dot a$ with a minus sign and in $E_p^2\,a^*a$ with a plus sign, so they cancel in the sum — that cancellation is energy conservation — leaving
> $$H = 2C^2 E_p^2\,\big(a_p^*a_p + a_{-p}^*a_{-p}\big).$$
> The coefficient must equal $E_p$, so $2C^2E_p^2 = E_p$, i.e.
> $$\boxed{\,C = \frac{1}{\sqrt{2E_p}}\,}$$
> — exactly the prefactor used. The commutator gives the same condition, not a second one: with general $C$ the kinetic term is $C^2(\dot q_1^2+\dot q_2^2)$, so the conjugate momenta are $p_i=2C^2\dot q_i$ and canonical quantization $[q_i,p_j]=i\,\delta_{ij}$ fixes $[a,\dot a^\dagger]=i/C^2$, while the mode decomposition (1) gives $[a,\dot a^\dagger]=2iE_p\,[a_p,a_p^\dagger]$. Hence
> $$[a_p,a_p^\dagger]=\frac{1}{2C^2E_p},$$
> which equals $1$ exactly when $2C^2E_p=1$: cleaning up $H$ and normalizing the ladder are one demand.
> With $C=1$ nothing physical changes — $[H,a_p^\dagger]=2E_p^2\cdot\tfrac{1}{2E_p}\,a_p^\dagger=E_p\,a_p^\dagger$, so a rung still costs $E_p$; a normalization cannot move a spectrum. What breaks is the bookkeeping: $[a_p,a_p^\dagger]=1/(2E_p)$, so $a_p^\dagger a_p$ no longer has integer eigenvalues and $a_p^\dagger|\Omega\rangle$ is not unit-normalized. The reading "eigenvalue of $a_p^\dagger a_p$ = number of particles, each of energy $E_p$" fails until you rescale $a_p\to\sqrt{2E_p}\,a_p$ — which is just restoring $C=1/\sqrt{2E_p}$. The normalization is what makes the Fourier coefficients themselves the canonical ladder operators.
