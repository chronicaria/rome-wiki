---
title: Harmonic-oscillator partition function
number: "6.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, partition-functions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

One oscillator's partition function is a geometric series; stack independent oscillators and the series *multiply*, giving the generating function that counts string states.

A partition function $Z(\beta)$ packages an oscillator's entire thermal behavior into a single number, and for non-interacting oscillators those numbers multiply. That one fact turns a string — an infinite pile of oscillators — into a counting machine for its own states, and this note builds it in three steps: one oscillator, then $r$, then infinitely many. Throughout, $r$ is the number of independent oscillators and $N$ a total excitation level; string theory reserves $N$ for levels, so the two letters stay apart from the start.

## One harmonic oscillator

A single quantum oscillator of angular frequency $\omega$ has evenly spaced levels (algebra $[a,a^\dagger]=1$, $H=\hbar\omega(a^\dagger a+\tfrac12)$ from [[Ladder operators]]):

$$E_n = \hbar\omega\left(n+\tfrac12\right), \qquad n=0,1,2,\dots$$

For the counting problem it is cleanest to measure energy from the ground state, dropping the constant $\tfrac12\hbar\omega$, so $E_n = n\hbar\omega$. For one oscillator this is just choosing where "zero energy" sits; we restore the $\tfrac12$ below and show it changes nothing that matters. (For an *infinite* tower the dropped pieces sum to a divergent vacuum energy that needs honest regularization — a separate issue, not needed in this finite-temperature calculation.)

### The partition function is a geometric series

The canonical partition function ([[Microcanonical versus canonical ensemble]]) sums the Boltzmann weight over every state:

$$Z_1 = \sum_{n=0}^{\infty} e^{-\beta E_n} = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega\, n}, \qquad \beta=\frac{1}{kT}.$$

Each term weights the state "$n$ quanta" by how thermally costly it is. Set $x\equiv e^{-\beta\hbar\omega}$. Because $\beta\hbar\omega>0$ we have $0<x<1$, so this is a convergent geometric series:

$$Z_1 = \sum_{n=0}^{\infty} x^n = \frac{1}{1-x}.$$

$$\boxed{\,Z_1(\omega) = \frac{1}{1-e^{-\beta\hbar\omega}}\,}\tag{1}$$

This single closed form holds the oscillator's entire thermodynamics: energy, entropy, and free energy all follow by differentiating it. That compression is why $Z$ is worth computing at all.

**Two limits pin down the meaning of $Z_1$.**

- *Cold* ($\beta\to\infty$, $x\to0$): $Z_1\to 1$. Only the ground state has any weight; the oscillator is frozen. A partition function counts "effectively occupied" states, and here that count is one.
- *Hot* ($\beta\to0$, $x\to1^-$): $Z_1\approx\dfrac{1}{\beta\hbar\omega}=\dfrac{kT}{\hbar\omega}\to\infty$. Now many levels are reachable, and $Z_1$ literally counts how many: the number of thermally accessible states grows linearly in $T$.

### The zero-point energy is a harmless prefactor

Keep the $\tfrac12$ and pull the constant out of the sum:

$$Z_1^{\text{full}} = e^{-\beta\hbar\omega/2}\sum_{n=0}^\infty e^{-\beta\hbar\omega n} = \frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}} = \frac{1}{2\sinh(\beta\hbar\omega/2)}.$$

The factor $e^{-\beta\hbar\omega/2}$ shifts the free energy $F=-kT\ln Z$ by the temperature-independent constant $+\tfrac12\hbar\omega$ — the same shift appears in $\langle E\rangle$ — and contributes nothing to the entropy $S=-\partial F/\partial T$, since the derivative kills a constant. The tidy $1/(2\sinh)$ is the textbook form of the oscillator partition function; equation (1) is the same object with the ground-state energy set to zero. Which you use is a bookkeeping choice; the entropy and the state counts come out identical.

The high-temperature expansions ($u\equiv\beta\hbar\omega\ll1$) show the two conventions agree where it counts:

$$Z_1=\frac{1}{1-e^{-u}}=\frac{1}{u}+\frac12+O(u),\qquad
Z_1^{\text{full}}=\frac{1}{2\sinh(u/2)}=\frac{1}{u}-\frac{u}{24}+O(u^3).$$

Both give the classical $Z_1\simeq kT/(\hbar\omega)$ at leading order; they part ways only in the subleading terms, which is precisely where the choice of energy origin lives.

### The mean energy is one derivative away

From (1), with the same $u=\beta\hbar\omega$:

$$\langle E\rangle = -\frac{\partial \ln Z_1}{\partial\beta} = \hbar\omega\,\frac{e^{-u}}{1-e^{-u}} = \frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.$$

Reading off $\langle E\rangle=\hbar\omega\,\langle n\rangle$, the mean occupation is the Bose–Einstein number $\langle n\rangle=(e^{\beta\hbar\omega}-1)^{-1}$ — the same function that powers the Planck blackbody law, here dropping straight out of a geometric series. Limits confirm it: $\langle E\rangle\to 0$ as $T\to0$ (frozen), and $\langle E\rangle\to kT$ as $T\to\infty$ (equipartition — one oscillator carries $kT$). Add $\tfrac12\hbar\omega$ if you kept the zero-point energy.

## $r$ independent oscillators: partition functions multiply

Stack $r$ labeled oscillators with frequencies $\omega_1,\dots,\omega_r$ and **no coupling**, so the Hamiltonian is a plain sum:

$$H = \sum_{i=1}^r \hbar\omega_i\, a_i^\dagger a_i, \qquad
E_{(n_1,\dots,n_r)} = \sum_{i=1}^r n_i\hbar\omega_i.$$

With no coupling, the total energy is just the sum of each mode's, and that additivity is the hinge of the next step.

The partition function sums over every occupation list $(n_1,\dots,n_r)$:

$$
Z_r = \sum_{n_1=0}^\infty\cdots\sum_{n_r=0}^\infty
\exp\!\Big[-\beta\sum_{i=1}^r n_i\hbar\omega_i\Big].
$$

Now the key move: $\exp$ of a sum is a product of $\exp$'s, and each factor uses only one summation index, so the nested sum splits mode by mode:

$$
Z_r = \prod_{i=1}^r\left(\sum_{n_i=0}^\infty e^{-\beta n_i\hbar\omega_i}\right)
= \prod_{i=1}^r \frac{1}{1-e^{-\beta\hbar\omega_i}}.
$$

$$\boxed{\,Z_r = \prod_{i=1}^r Z_1(\omega_i)\,}\tag{2}$$

For independent subsystems, partition functions multiply — equivalently, $\ln Z$ adds. This is the fact the rest of the module runs on, the statistical-mechanics echo of "independent events have factorizing probabilities," and it makes every additive thermodynamic quantity a one-liner:

$$\ln Z_r = \sum_i \ln Z_1(\omega_i),\qquad F_r=\sum_i F_1,\qquad \langle E\rangle_r=\sum_i\langle E\rangle_i,\qquad S_r=\sum_i S_1.$$

Do one oscillator, then sum over modes; nothing gets re-derived.

**Identical oscillators.** If all $\omega_i=\omega$, the product collapses to a power:

$$Z_r = \big(Z_1(\omega)\big)^r,\qquad \ln Z_r = r\ln Z_1.$$

This is where spacetime dimension will eventually enter: the bosonic string carries $b=24$ transverse oscillators at each frequency, so its $Z$ picks up an exponent $b$, and $F_b=bF$, $S_b=bS$, $E_b=bE$ — again nothing but the "multiply / add" rule.

## An infinite tower is a state-counting machine

Take $r\to\infty$ with frequencies $\omega_\ell=\ell\omega_0$ ($\ell=1,2,3,\dots$) — one oscillator at every integer multiple of a base frequency. This is the "quantum violin string," and equation (2) gives its partition function directly:

$$Z = \prod_{\ell=1}^{\infty}\frac{1}{1-e^{-\beta\hbar\omega_0\ell}}.\tag{3}$$

The string's partition function is an infinite product of one-oscillator partition functions, one per vibrational mode — the result the whole module was built to make obvious. Write $q=e^{-\beta\hbar\omega_0}$; for $0<q<1$ the product and its log converge outright, with no zeta-function regularization anywhere. (The high-$T$ analysis of $\ln Z$, using the ordinary convergent $\zeta(2)=\pi^2/6$, is carried out in [[Why many oscillators grow fast]].)

Now read (3) not as thermodynamics but as bookkeeping. Expand each factor as its own geometric series:

$$Z(q)=\prod_{\ell=1}^{\infty}(1-q^\ell)^{-1}=\prod_{\ell=1}^{\infty}\big(1+q^\ell+q^{2\ell}+\cdots\big).$$

Choosing the term $q^{\ell n_\ell}$ from the $\ell$-th factor means putting $n_\ell$ quanta into the mode of frequency $\ell\omega_0$. Multiply one choice from every factor and you get $q^{\sum_\ell \ell\, n_\ell}$, so the coefficient of $q^N$ counts occupation lists with $\sum_\ell \ell\, n_\ell=N$ — exactly the number of ways to write $N$ as a sum of positive integers, the partition number $p(N)$:

$$Z(q)=\sum_{N\ge0}p(N)\,q^N.$$

Read as a power series, then, a partition function is a generating function whose $q^N$ coefficient counts the states at level $N$. For a single oscillator that coefficient is always $1$. Multiply infinitely many factors — independence makes this free — and the coefficients become $p(N)$, a count that explodes. Thermal physics ($q=e^{-\beta\hbar\omega_0}$) and combinatorics (partitions of $N$) are the *same object* viewed two ways, and that double life powers [[Why many oscillators grow fast]] and, downstream, the [[Hagedorn temperature]].

> **Forward link.** The oscillator trace just computed, $\mathrm{Tr}\,q^{N}=\prod_\ell(1-q^\ell)^{-1}$, reappears in the string's worldsheet partition function: one such factor per transverse direction, each dressed with a factor $q^{-1/24}$ from the regularized zero-point energy, giving the inverse of the Dedekind eta function $\eta=q^{1/24}\prod_\ell(1-q^\ell)$. Noted, not derived here.

## Open questions

- A worked two-coupled-oscillator example would show the normal-mode route to factorization (diagonalize first, then the modes are independent).
- The $q^{1/24}$ eta factor and the Casimir sum $\sum_{\ell\ge1}\ell$ need honest regularization in the later quantization notes; this thermal product does not.

## Exercise

Two independent oscillators have frequencies $\omega$ and $2\omega$ (a "mini violin string," $\ell=1,2$). Write down $Z_2$ from the factorization rule, expand it as a power series in $q=e^{-\beta\hbar\omega}$, and read off the degeneracy $g_N$ (number of states) at levels $N=0,1,2,3$. Check your $g_N$ directly against the definition $g_N=\#\{(n_1,n_2): n_1+2n_2=N\}$.

> [!success]- Solution
> By equation (2), with frequencies $\omega_1=\omega$ (so $q^1$) and $\omega_2=2\omega$ (so $q^2$):
> $$Z_2 = \frac{1}{1-q}\cdot\frac{1}{1-q^2}.$$
> Multiply the two geometric series $ (1+q+q^2+q^3+\cdots)(1+q^2+q^4+\cdots)$ and collect powers:
> $$Z_2 = 1 + q + 2q^2 + 2q^3 + 3q^4 + \cdots$$
> so the coefficients give $g_0=1,\ g_1=1,\ g_2=2,\ g_3=2$.
>
> Direct check — count $(n_1,n_2)$ with $n_1+2n_2=N$:
> - $N=0$: $(0,0)$ → $g_0=1$.
> - $N=1$: $(1,0)$ → $g_1=1$.
> - $N=2$: $(2,0),(0,1)$ → $g_2=2$.
> - $N=3$: $(3,0),(1,1)$ → $g_3=2$.
>
> They match. From $N=2$ on the count exceeds the single oscillator's $g_N\equiv1$: a second mode gives the energy more than one place to sit. Extend to all frequencies $\ell=1,2,3,\dots$ and the coefficients become the partition numbers $p(N)=1,1,2,3,5,\dots$ — the expansion of the full product (3).
