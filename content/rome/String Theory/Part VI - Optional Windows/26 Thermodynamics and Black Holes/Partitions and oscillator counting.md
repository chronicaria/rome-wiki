---
title: Partitions and oscillator counting
number: "26.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, state-counting]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Counting the states of a string at a fixed energy is exactly counting the **partitions of an integer** $N$, and that count blows up like $e^{2\pi\sqrt{N/6}}$ — an explosion we extract not by combinatorics but by a thermodynamics trick.

## From violin overtones to partitions

Pluck a violin string and it rings at a fundamental frequency plus overtones — integer multiples of it. Quantize that and each overtone becomes a harmonic oscillator you can load with quanta. To reach a target energy $E = \hbar\omega_0 N$ you distribute $N$ "units" among the overtones, where overtone $\ell$ costs $\ell$ units per quantum. **A way to reach energy $N$ is a way to write $N$ as a sum of positive integers** — a *partition*. So the number of string states at energy $N$ is $p(N)$, the partition function of number theory.

Two facts organize the whole note. First, partitions grow super-polynomially: there are wildly many ways to break a large integer into pieces, and we will find $p(N)\sim e^{2\pi\sqrt{N/6}}$ — sub-exponential in $N$ but far faster than any power. This single explosion is what later forces a limiting temperature ([[Hagedorn temperature]]) and gives black holes a microscopic entropy ([[Supersymmetric black-hole counting]]). Second, we never solve the combinatorics head-on: we treat the oscillator tower as a thermal system, compute its free energy, read off its entropy $S=k\ln(\text{states})$, and invert.

## The quantum violin string

A classical string with fixed endpoints vibrates at frequencies $\omega_0, 2\omega_0, 3\omega_0,\dots$. Quantizing gives one harmonic oscillator per frequency $\ell\omega_0$, each with its own ladder operators $(a_\ell, a_\ell^\dagger)$:

$$[a_m, a_n^\dagger] = \delta_{mn}, \qquad \hat H = \hbar\omega_0 \sum_{\ell=1}^\infty \ell\, a_\ell^\dagger a_\ell = \hbar\omega_0\,\hat N.$$

The energy is set by the **number operator** $\hat N$; mode $\ell$ contributes $\ell$ units of energy per quantum because its frequency is $\ell\omega_0$ (zero-point energies are irrelevant to the counting and dropped). A general state fixes an occupation number $n_\ell$ for each mode:

$$|\Psi\rangle = (a_1^\dagger)^{n_1}(a_2^\dagger)^{n_2}\cdots|\Omega\rangle, \qquad N = \sum_{\ell=1}^\infty \ell\, n_\ell, \qquad E = \hbar\omega_0 N.$$

So a state at energy $\hbar\omega_0 N$ is precisely a choice of occupation numbers $\{n_\ell\}$ with $\sum_\ell \ell\, n_\ell = N$.

## States at fixed $N$ = partitions of $N$

A **partition** of $N$ is a multiset of positive integers summing to $N$ (order ignored). Read a state's oscillators off as a partition: an $a_\ell^\dagger$ appearing $n_\ell$ times contributes the part $\ell$ with multiplicity $n_\ell$, and $\sum \ell\, n_\ell = N$ is exactly the partition condition. The map is a bijection, so the degeneracy is

$$\Omega(E) = p(N), \qquad N = E/(\hbar\omega_0),$$

with $p(N)$ the number of partitions. For instance $N=4$ has $\{4\},\{3,1\},\{2,2\},\{2,1,1\},\{1,1,1,1\}$, giving $p(4)=5$; likewise $p(1)=1,\ p(2)=2,\ p(3)=3$.

## Getting $\ln p(N)$ from thermodynamics

Direct combinatorics for large $N$ is hard. The physicist's shortcut runs the identity $S=k\ln\Omega$ **backwards**: build the partition function $Z$, get the free energy $F=-kT\ln Z$, differentiate to the entropy and energy, then eliminate the temperature to recover $S$ as a function of energy — which is $k\ln p(N)$.

The occupation numbers of different modes are independent, so $Z$ factorizes into one geometric series per mode:

$$Z = \prod_{\ell=1}^\infty \sum_{n_\ell=0}^\infty e^{-\hbar\omega_0\ell\, n_\ell/kT} = \prod_{\ell=1}^\infty \left[1 - e^{-\hbar\omega_0\ell/kT}\right]^{-1}.$$

Each factor is $\sum_{n\ge0} x^{n} = (1-x)^{-1}$ with $x=e^{-\hbar\omega_0\ell/kT}<1$. Taking the log,

$$F = kT\sum_{\ell=1}^\infty \ln\!\left[1 - e^{-\hbar\omega_0\ell/kT}\right].$$

**High-temperature limit.** When $\hbar\omega_0/kT \ll 1$ the summand varies slowly in $\ell$, so replace the sum by an integral. Substituting $x = \hbar\omega_0\ell/kT$ (hence $d\ell = (kT/\hbar\omega_0)\,dx$, and the lower limit $\ell=1$ slides to $x\to 0$):

$$F \simeq \frac{(kT)^2}{\hbar\omega_0}\int_0^\infty dx\,\ln(1-e^{-x}).$$

The lower endpoint is harmless: near $x=0$, $\ln(1-e^{-x})\sim\ln x$, whose integral is finite, so moving the limit from $x_{\min}\approx\hbar\omega_0/kT$ down to $0$ shifts only subleading terms. The leading free energy scales as $T^2$, and that $T^2$ is what ultimately produces the $\sqrt N$.

Now expand $\ln(1-y) = -\sum_{k\ge1} y^k/k$ and integrate term by term ($\int_0^\infty e^{-kx}dx = 1/k$):

$$F \simeq -\frac{(kT)^2}{\hbar\omega_0}\sum_{k=1}^\infty \frac{1}{k^2} = -\frac{(kT)^2}{\hbar\omega_0}\,\zeta(2) = -\frac{(kT)^2}{\hbar\omega_0}\frac{\pi^2}{6}.$$

The $1/k^2$ is honest: one $1/k$ comes from the log expansion, the other from the integral, and they multiply. This $\zeta(2)=\pi^2/6$ is a plain convergent sum — do **not** confuse it with the divergent $\zeta(-1)=-1/12$ that needs a cutoff regulator and sets the normal-ordering constant elsewhere ([[Critical dimension and the spectrum]]). Same function, different animal.

Standard thermodynamics, $S=-\partial F/\partial T$ and $E = F+TS$, gives

$$S = k\frac{\pi^2}{3}\frac{kT}{\hbar\omega_0}, \qquad E = \frac{\pi^2}{6}\left(\frac{kT}{\hbar\omega_0}\right)^2\hbar\omega_0.$$

Both are set by the single dimensionless combination $kT/\hbar\omega_0$. Eliminate it: from $E$, $kT/\hbar\omega_0 = \sqrt{6E/(\pi^2\hbar\omega_0)}$, and with $N=E/\hbar\omega_0$,

$$S(E) = k\,2\pi\sqrt{\frac{N}{6}} \quad\Longrightarrow\quad \boxed{\ \ln p(N) \simeq 2\pi\sqrt{\frac{N}{6}}\ }$$

The number of string states at level $N$ grows like $e^{2\pi\sqrt{N/6}}$. The square root traces straight back to the $T^2$ in $F$: energy grew like $T^2$ while entropy grew like $T$, so $S\propto\sqrt E$.

This leading exponent is the head of the full **Hardy–Ramanujan** asymptotic

$$p(N) \simeq \frac{1}{4N\sqrt3}\exp\!\left(2\pi\sqrt{\tfrac{N}{6}}\right).$$

The power-law prefactor $1/(4N\sqrt3)$ needs a sharper saddle-point/modular argument (see Open questions); the exponential is what we came for and is exact in the leading sense.

## $b$ transverse directions

A real string oscillates in $b$ transverse directions, so every mode number $\ell$ carries $b$ independent oscillators instead of one. The partition function is the single-direction $Z$ raised to the $b$: $Z_b=Z^b$, hence $F_b=bF$, $S_b=bS$, $E_b=bE$. Rerunning the elimination (now with $N=\sum_{\ell,q}\ell\, n_\ell^{(q)}$ summed over the $b$ colors),

$$\ln p_b(N) \simeq 2\pi\sqrt{\frac{Nb}{6}}.$$

More directions means more ways to spend the energy, so a bigger exponent. For the bosonic string $b=24$ (the transverse light-cone directions; [[Transverse coordinates as physical degrees of freedom|light-cone gauge]], [[Critical dimension D=26]]), and $2\pi\sqrt{24/6}=2\pi\cdot 2 = 4\pi$, so

$$p_{24}(N) \simeq \frac{1}{\sqrt2}\,N^{-27/4}\exp\!\left(4\pi\sqrt N\right).$$

This $e^{4\pi\sqrt N}$ is the density of states that drives the [[Hagedorn temperature]]: a spectrum growing this fast is what forces a limiting temperature on the string.

## Fermionic and mixed partitions (needed for SUSY)

Later black-hole counting needs oscillators that obey the **Pauli** rule: each mode is either empty or singly occupied, $n_\ell\in\{0,1\}$. Counting states then means counting partitions of $N$ into **distinct** parts, $q(N)$ (a part can appear at most once). Each mode contributes two terms to $Z$, not a geometric series:

$$Z_f=\prod_{\ell=1}^{\infty}\left(1+e^{-\hbar\omega_0\ell/kT}\right), \qquad F_f=-kT\sum_{\ell=1}^{\infty}\ln\!\left(1+e^{-\hbar\omega_0\ell/kT}\right).$$

The high-$T$ step is identical, but with a $+$ inside the log:

$$F_f\simeq-\frac{(kT)^2}{\hbar\omega_0}\int_0^\infty dx\,\ln(1+e^{-x}), \qquad \int_0^\infty dx\,\ln(1+e^{-x})=\sum_{r=1}^{\infty}\frac{(-1)^{r+1}}{r^2}=\frac{\pi^2}{12}.$$

The alternating signs halve the sum: $\pi^2/6\to\pi^2/12$. So a fermionic species carries exactly **half** the high-$T$ free energy of a bosonic one, giving

$$F_f\simeq-\frac{\pi^2}{12}\frac{(kT)^2}{\hbar\omega_0},\qquad
\ln q(N)\simeq 2\pi\sqrt{\frac{N}{12}},$$

smaller than the bosonic exponent by exactly $1/\sqrt2$ — a fingerprint of that $\pi^2/6\to\pi^2/12$.

Because free energies simply add, $b$ bosonic plus $f$ fermionic species give

$$F_{b,f}\simeq-\frac{\pi^2}{6}\frac{(kT)^2}{\hbar\omega_0}\left(b+\frac f2\right),$$

and the same entropy/energy elimination goes through with an **effective species count** $b+f/2$:

$$\boxed{\ \ln P(N;b,f) \simeq 2\pi\sqrt{\frac{N}{6}\left(b + \frac{f}{2}\right)}\ }$$

A fermion counts as half a boson inside the exponent's coefficient. This is the entire combinatorial content of the supersymmetric black-hole count; the D-brane and SUSY inputs that pick the values of $b$ and $f$ enter later in [[Supersymmetric black-hole counting]].

## Open questions

- The power-law prefactors ($1/(4N\sqrt3)$ for $p(N)$, $N^{-27/4}$ for $p_{24}$) come from a genuine saddle-point evaluation of the generating function $\prod_n (1-x^n)^{-1} = \sum p(n)x^n$ and the modular behavior of the Dedekind $\eta$ function — worth seeing once, but not needed for the leading physics.
- The mixed formula assumes free, independent oscillator species. In the D1-D5-P black hole it is supersymmetry, not this combinatorics, that guarantees the weak-coupling count survives to the coupling where the black hole actually exists.
- The "$4$ bosonic $+ 4$ fermionic ground states" of the $(1,5)$ superstring is a superstring-quantization fact, not derivable here; deferred to [[Supersymmetric black-hole counting]].

## Exercise

The high-temperature free energy per species scales as $F\propto -(kT)^2$, with a coefficient $c$ fixed by an integral: $F = -c\,\dfrac{(kT)^2}{\hbar\omega_0}$. Bosons have $c=\pi^2/6$, fermions $c=\pi^2/12$. **Take the free energy of one species as given and show that the entropy exponent is $\ln(\text{states})\simeq 2\pi\sqrt{cN/\pi^2}$** — i.e. that the whole $\sqrt N$ law follows from that single coefficient $c$, and check it reproduces both the bosonic $2\pi\sqrt{N/6}$ and the fermionic $2\pi\sqrt{N/12}$.

> [!success]- Solution
> Differentiate $F=-c(kT)^2/\hbar\omega_0$ with respect to $T$:
> $$S=-\frac{\partial F}{\partial T}=2c\,k\,\frac{kT}{\hbar\omega_0},\qquad E=F+TS=c\,\frac{(kT)^2}{\hbar\omega_0}.$$
> From $E$, solve for the temperature with $N=E/\hbar\omega_0$:
> $$\frac{kT}{\hbar\omega_0}=\sqrt{\frac{E}{c\,\hbar\omega_0}}=\sqrt{\frac{N}{c}}.$$
> Substitute into $S$:
> $$\frac{S}{k}=2c\sqrt{\frac{N}{c}}=2\sqrt{cN}=2\pi\sqrt{\frac{cN}{\pi^2}}.$$
> So $\ln(\text{states})\simeq 2\sqrt{cN}$. Checks:
> - Boson, $c=\pi^2/6$: $2\sqrt{\pi^2 N/6}=2\pi\sqrt{N/6}\ \checkmark$
> - Fermion, $c=\pi^2/12$: $2\sqrt{\pi^2 N/12}=2\pi\sqrt{N/12}$, smaller by $1/\sqrt2\ \checkmark$
>
> The exponent depends on the species only through the single number $c$ (equivalently, through $b+f/2$ when species are combined), which is why a fermion — with half the $c$ — counts as half a boson.
