---
title: 00 — Overview
number: "6.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, partition-functions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

String theory needs exactly one applied-math tool from statistical mechanics: turn "how many states have this energy?" into a generating function, extract the count as a coefficient, and read its logarithm as entropy.

## The counting question

A quantum string is a stack of harmonic oscillators — one for each vibrational overtone, in each transverse direction. So the whole subject reduces to a bookkeeping question you can ask about any pile of oscillators:

> Fix a total energy. In how many distinct ways can the oscillators share it?

That number, the **degeneracy** $\Omega(E)$, is everything. Its growth rate controls whether a hot gas of strings behaves like ordinary matter or hits a wall — the [[Hagedorn temperature]] — and much later the same count reappears as [[Supersymmetric black-hole counting|black-hole entropy]]. This module builds the counting machine from nothing.

## Two ways to count, and why you need both

There are two languages for "how many states at energy $E$," and this module is the dictionary between them.

- **Microcanonical — count directly.** Fix the energy, list the states, get $\Omega(E)$. Conceptually primary, but the constraint that the occupied modes' energies add up to exactly $E$ makes it a hard combinatorics problem.
- **Canonical — count with a generating function.** Relax the hard constraint: weight every state by $e^{-\beta E}$, where $\beta=1/(kT)$ is the inverse temperature, and add them all up, $Z(\beta)=\sum_\alpha e^{-\beta E_\alpha}$. This is easy, because for independent oscillators the sum **factorizes into a product**.

The trick: for a spectrum $E = \hbar\omega_0 N$ with integer $N$, set $q=e^{-\beta\hbar\omega_0}$ and $Z$ becomes an ordinary power series,

$$Z(q)=\sum_{N\ge 0}g_N\,q^N.$$

*The coefficient of $q^N$ is exactly the count you wanted.* The physical parameter $\beta$ (inverse temperature) and the formal variable $q$ (bookkeeping) are the same knob. Compute $Z$ the easy way, then read off the degeneracy $g_N$ as a Taylor coefficient. This is the applied-math heart of the module: **a partition function is a generating function that happens to have a thermometer attached.**

## Three rungs of the count

**One oscillator is boring.** Frequency $\omega$, levels $E=n\hbar\omega$: exactly one state per energy. $Z_1=(1-e^{-\beta\hbar\omega})^{-1}$, a geometric series.

**A tower is not.** Give the string its overtones $\omega_0,2\omega_0,3\omega_0,\dots$. Independent factors multiply, so

$$Z(q)=\prod_{\ell=1}^{\infty}\frac{1}{1-q^{\ell}}=\sum_{N=0}^{\infty}p(N)\,q^{N}.$$

The coefficient $p(N)$ is the **number of ways to write $N$ as a sum of positive integers** — the integer partitions of $N$. Choosing $n_\ell$ quanta in the mode of frequency $\ell\omega_0$ is the same data as putting $n_\ell$ copies of $\ell$ into a partition of $N=\sum_\ell \ell\,n_\ell$. Physics counting *is* number-theory counting.

**And it explodes.** A short thermodynamic calculation (do $Z\to$ energy $\to$ entropy, eliminate temperature) gives

$$\ln p(N)\;\simeq\; 2\pi\sqrt{\tfrac{N}{6}}.$$

The $\pi^2/6$ hiding in the prefactor is $\zeta(2)=\sum_{m\ge1}m^{-2}$, an ordinary *convergent* sum — no divergent-series regularization anywhere in this module. The point is the shape: $\ln\Omega\sim\sqrt N$, so $\Omega\sim e^{c\sqrt N}$ grows **faster than any polynomial**. Concretely $p(100)\approx1.9\times10^{8}$ and $p(10^4)\approx3.6\times10^{106}$.

## Why this seeds Hagedorn

A non-relativistic oscillator tower gives $\Omega\sim e^{c\sqrt E}$ — fast, but tame. A **relativistic string** does qualitatively more, and one extra fact is responsible: its mass formula ties level to energy quadratically. For an open string at high level (natural units $\hbar=c=1$ for the string formulas),

$$\alpha' M^2 = N^\perp - 1 \;\simeq\; N^\perp \quad\Longrightarrow\quad N^\perp\simeq \alpha' E^2 \quad(E=M\text{ at rest}).$$

So $\sqrt{N^\perp}\simeq\sqrt{\alpha'}\,E$. The string vibrates in $b=24$ transverse directions, each with its own tower; independent towers multiply $Z$, which pushes $N^\perp/6$ to $b\,N^\perp/6$ under the square root, so $\ln\Omega \simeq 2\pi\sqrt{24\,N^\perp/6}=4\pi\sqrt{N^\perp}$. Substituting the mass formula turns the harmless $\sqrt{N^\perp}$ into a term **linear in $E$**:

$$S(E)=k\,4\pi\sqrt{\alpha'}\,E \quad\Longrightarrow\quad \Omega(E)\sim e^{\beta_H E},\qquad kT_H=\frac{1}{\beta_H}=\frac{1}{4\pi\sqrt{\alpha'}}.$$

A density of states exponential in $E$ decides everything: the thermal sum $\sum_E\Omega(E)e^{-\beta E}$ stops converging once $\beta$ drops to $\beta_H$. There is a maximum temperature. The module's spine is the growth ladder

$$\underbrace{\Omega=1}_{\text{1 oscillator}}\;\to\;\underbrace{\Omega\sim N^{r-1}}_{\text{finite stack}}\;\to\;\underbrace{\Omega\sim e^{c\sqrt N}}_{\text{infinite tower}}\;\to\;\underbrace{\Omega\sim e^{cE}}_{\text{relativistic string}}\;\to\;\underbrace{T_H}_{\text{a wall}}.$$

The module is complete when every arrow is obvious.

*(Closed strings hit the same wall: their left- and right-moving towers each contribute the full 24-species count, doubling $\ln\Omega$, while the closed-string mass formula gives $2\sqrt{N^\perp}\simeq\sqrt{\alpha'}E$ — half the $\sqrt{N^\perp}$ per unit energy. The two factors of $2$ cancel, and $S=k\,4\pi\sqrt{\alpha'}\,E$ again.)*

## Sublesson notes

- 6.1 [[Microcanonical versus canonical ensemble]] — fixed-energy counting versus temperature-weighted generating functions, and why they agree for large systems.
- 6.2 [[Harmonic-oscillator partition function]] — derive $Z_1=(1-e^{-\beta\hbar\omega})^{-1}$, then multiply independent factors into the violin-string product.
- 6.3 [[Density of states]] — degeneracies $g_N$, densities $\rho(E)$, the Laplace-transform relation to $Z$, and the saddle point that reads $\Omega(E)$ off $Z$.
- 6.4 [[Entropy as log Omega]] — why $S=k\ln\Omega$, why temperature is a slope of a log-count, and why canonical and microcanonical entropy coincide.
- 6.5 [[Why many oscillators grow fast]] — the synthesis: how stacking modes turns multiplication of $Z$'s into a combinatorial explosion of $\Omega$, and the clean bridge to Hagedorn.

## Open questions

- Dropping the oscillators' zero-point energy is harmless here — it only shifts the zero of energy and never touches $S=-\partial F/\partial T$. But the *infinite* tower's $\tfrac12\hbar\omega_0\sum_\ell \ell$ is divergent; the quantization modules must regularize it honestly (a cutoff yielding $\zeta(-1)=-\tfrac1{12}$, never the naive divergent sum) before it enters the mass spectrum.
- Canonical/microcanonical equivalence is a large-system, sharp-saddle statement. Strings *near* $T_H$ are exactly the case where it breaks (the canonical $Z$ diverges while $\Omega(E)$ stays finite), so Hagedorn physics is discussed through entropy and density of states, not $Z$. Treated later.

## Exercise

This is the no-notes self-test for the whole module. Close everything and reproduce, in order:

1. **One oscillator.** From $Z_1=\sum_n e^{-\beta E_n}$ with $E_n=n\hbar\omega$, recognize the geometric series and get $Z_1$ in closed form. Say what changes if you keep $E_n=\hbar\omega(n+\tfrac12)$.
2. **Many oscillators.** For $r$ independent oscillators, explain why a *sum* of Hamiltonians makes $Z$ *factor*, and write $Z_r=\prod_i Z_1(\omega_i)$.
3. **Product to counting.** For the tower $\omega_\ell=\ell\omega_0$, show $Z(q)=\prod_{\ell\ge1}(1-q^\ell)^{-1}$ and explain why the coefficient of $q^N$ counts partitions of $N$.
4. **Bridge to Hagedorn.** Explain in words why $\ln p(N)\sim\sqrt N$ becomes $\ln\Omega(E)\sim E$ for a relativistic string, using $N^\perp\simeq\alpha' E^2$.

> [!success]- Solution
> **1. One oscillator.** With $E_n=n\hbar\omega$ and $x\equiv e^{-\beta\hbar\omega}\in(0,1)$,
> $$Z_1=\sum_{n=0}^\infty x^n=\frac{1}{1-x}=\frac{1}{1-e^{-\beta\hbar\omega}}.$$
> Keeping the zero-point energy, $E_n=\hbar\omega(n+\tfrac12)$, pulls out a constant factor: $Z_1\to e^{-\beta\hbar\omega/2}Z_1=[2\sinh(\beta\hbar\omega/2)]^{-1}$. This shifts $F$ and $\langle E\rangle$ up by the constant $\tfrac12\hbar\omega$ but leaves $S=-\partial F/\partial T$ unchanged — the entropy does not care where you put the zero of energy.
>
> **2. Many oscillators.** Independence means $H=\sum_i H_i$ with no coupling, so a microstate is a list $(n_1,\dots,n_r)$ with $E=\sum_i n_i\hbar\omega_i$. The Boltzmann weight of a sum is a product of weights, $e^{-\beta\sum_i n_i\hbar\omega_i}=\prod_i e^{-\beta n_i\hbar\omega_i}$, and each factor depends on one index only, so the multiple sum splits:
> $$Z_r=\sum_{n_1,\dots,n_r}\prod_i e^{-\beta n_i\hbar\omega_i}=\prod_{i=1}^r\Big(\sum_{n_i\ge0}e^{-\beta n_i\hbar\omega_i}\Big)=\prod_{i=1}^r Z_1(\omega_i).$$
> Independent subsystems $\Rightarrow$ partition functions multiply ($\ln Z$ adds). This is the single most-used fact in the module.
>
> **3. Product to counting.** Put $\omega_\ell=\ell\omega_0$ and $q=e^{-\beta\hbar\omega_0}$:
> $$Z(q)=\prod_{\ell=1}^\infty\frac{1}{1-q^\ell}=\prod_{\ell=1}^\infty\big(1+q^\ell+q^{2\ell}+\cdots\big).$$
> Choosing the term $q^{\ell n_\ell}$ from the $\ell$-th factor means "put $n_\ell$ quanta in mode $\ell$." Multiplying the choices gives $q^{\sum_\ell \ell n_\ell}$, so the coefficient of $q^N$ counts occupation lists with $\sum_\ell \ell n_\ell=N$ — precisely the partitions of $N$, hence $p(N)$.
>
> **4. Bridge to Hagedorn.** The oscillator count alone gives $\ln p(N)\sim\sqrt N$: the log-count grows like the square root of the level. For a relativistic string the level is not the energy — the mass formula ties them quadratically, $N^\perp\simeq\alpha' E^2$, so $\sqrt{N^\perp}\simeq\sqrt{\alpha'}\,E$. Substituting turns $\ln\Omega\sim\sqrt{N^\perp}$ into $\ln\Omega\sim E$: a density of states **exponential in energy**. Since $\Omega(E)\sim e^{\beta_H E}$, the canonical sum $\sum_E\Omega(E)e^{-\beta E}$ diverges once $\beta\le\beta_H$ — a maximum temperature $kT_H=1/(4\pi\sqrt{\alpha'})$.
