---
title: Density of states
number: "6.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, density-of-states]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The density of states answers "how many quantum states live at this energy?" — and the partition function $Z$ is that answer wrapped in a Laplace transform, so computing $Z$ (easy) lets you read the count off by a saddle point.

A partition function is a *packing crate*. You throw every state in, each weighted by its energy through a factor $e^{-\beta E}$, and $Z$ is the total weight. The density of states is the *packing list* — how many states sit on each energy shelf. Going from the crate back to the list is an inverse Laplace transform, and for a large system a single temperature dominates that transform. That dominant temperature is the saddle point, and it does the real work: it turns an easy thermodynamics calculation into the quantum violin string's number-theory count.

## What we are counting

One object, three costumes:

- $g_N$ — the exact integer degeneracy at excitation level $N$ (how many states have exactly this $N$).
- $\rho(E)$ — the continuous density, so $\rho(E)\,dE$ counts states in $[E,E+dE]$.
- $\Omega(E)$ — the microcanonical count in a physical window; the coarse-grained version of $\rho$.

For a genuinely discrete spectrum, $\rho(E)=\sum_\alpha \delta(E-E_\alpha)$ is a comb of spikes; $\Omega$ smooths it into a finite window; $g_N$ is the clean integer form when the spectrum is labeled by an integer. In this module the spectrum *is* labeled by an integer, so we count $g_N$ and treat $\Omega(E)$, $g_N$, and $p(N)$ as the same number in different clothes.

Why they coincide here: the **quantum violin string** is a tower of oscillators with energy $E=\hbar\omega_0 N$, where $N=\sum_{\ell\ge1}\ell\, n_\ell$ is a non-negative integer built from occupation numbers $\{n_\ell\}$. Counting states at energy $E$ means counting the ways to write $N$ as a sum of positive integers — the **number of partitions** $p(N)$:

$$\Omega(E) = p(N), \qquad N=\frac{E}{\hbar\omega_0}.$$

The physics word "state" and the number-theory word "partition" name the same list of occupation numbers. So the density of states of an oscillator tower is a pure combinatorial object — and that is what makes it explode.

### See it once, by hand

A state is an occupation list $\{n_1,n_2,\dots\}$; its energy label is $N=\sum_\ell \ell n_\ell$. Counting states at fixed $N$ *is* counting partitions of $N$:

| $N$ | partitions of $N$ | $p(N)=\Omega$ |
|----|----|----|
| 1 | $\{1\}$ | 1 |
| 2 | $\{2\},\{1,1\}$ | 2 |
| 3 | $\{3\},\{2,1\},\{1,1,1\}$ | 3 |
| 4 | $\{4\},\{3,1\},\{2,2\},\{2,1,1\},\{1,1,1,1\}$ | 5 |

The count climbs $1,2,3,5,\dots$ — gently here, but by $N=100$ it is $1.9\times10^{8}$ and by $N=10000$ it is $3.6\times10^{106}$. That ferocious growth is the physical content of [[Why many oscillators grow fast]] and the seed of the [[Hagedorn temperature]].

## $Z$ is the Laplace transform of $\rho$

From [[Microcanonical versus canonical ensemble]], group the canonical sum by energy — all $\rho(E)\,dE$ states at energy $E$ share the same Boltzmann weight $e^{-\beta E}$:

$$Z(\beta) = \int_0^\infty dE\;\rho(E)\,e^{-\beta E}. \tag{1}$$

**$Z$ is the Laplace transform of the density of states.** For the violin string's integer levels the same statement is a generating function,

$$Z(q)=\sum_{N=0}^\infty g_N\, q^N,\qquad q=e^{-\beta\hbar\omega_0},$$

with $g_N=p(N)$. The transform runs one way for free (sum up the states). We want the *other* way: recover $g_N$ from $Z$. As a generating function that is Cauchy's coefficient formula,

$$g_N=\frac{1}{2\pi i}\oint \frac{dq}{q^{N+1}}\,Z(q),$$

and in the continuum it is the inverse Laplace (Bromwich) integral,

$$\rho(E) = \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty} d\beta\; Z(\beta)\,e^{\beta E}, \tag{2}$$

a vertical contour to the right of every singularity of $Z$. You almost never do this integral exactly. You do it by saddle point — and the saddle is where the physics lives.

## Reading $\Omega(E)$ off $Z$ by saddle point

Write the integrand of (2) as a single exponential $Z(\beta)e^{\beta E}=e^{\Phi(\beta)}$ with

$$\Phi(\beta)=\beta E+\ln Z(\beta).$$

For a large system $\Phi$ is huge, so the integral is dominated by the stationary point of the exponent — like a bell curve so narrow only its peak matters. Extremize over real $\beta$:

$$\frac{d}{d\beta}\big[\beta E + \ln Z\big]=0 \;\Longrightarrow\; E = -\frac{\partial \ln Z}{\partial\beta}=\langle E\rangle(\beta^\ast). \tag{3}$$

Read that right-hand side: the dominant $\beta^\ast$ is *the inverse temperature at which the canonical mean energy equals the target $E$*. Extracting a coefficient has become choosing a temperature. Evaluate $\Phi$ at the saddle:

$$\boxed{\;\ln\Omega(E) \approx \beta^\ast E + \ln Z(\beta^\ast) = \frac{S(E)}{k}\;} \tag{4}$$

The identification with entropy is one line: $\ln Z = -\beta F = -\beta(E-TS)=S/k-\beta E$, so $\beta E+\ln Z=S/k$. **The leading growth of the density of states is set by the entropy, $\Omega(E)\sim e^{S(E)/k}$.** This is *why* the easy canonical calculation ($Z\to F\to S$) hands you the hard microcanonical count.

The Gaussian around the saddle only fixes the prefactor. Along the vertical contour $\beta=\beta^\ast+it$,

$$\Phi\approx\Phi(\beta^\ast)-\tfrac12\Phi''(\beta^\ast)\,t^2,\qquad
\Phi''(\beta^\ast)=\partial_\beta^2\ln Z=\langle(\Delta E)^2\rangle,$$

so the exponent falls off along the contour while rising along the real axis — a genuine saddle — and the Gaussian integral supplies a factor $1/\sqrt{2\pi\langle(\Delta E)^2\rangle}$: the prefactor is set by the canonical energy fluctuation. This is sub-exponential — it does not touch the leading $\ln\Omega\sim S/k$ that drives Hagedorn.

This saddle *is* the violin-string result. The thermodynamic route (computed in [[Why many oscillators grow fast]]) gives $S(E)=k\,2\pi\sqrt{N/6}$, and (4) reads off

$$\ln p(N) \simeq 2\pi\sqrt{\frac{N}{6}},$$

the leading term of the Hardy–Ramanujan formula

$$p(N)\simeq\frac{1}{4N\sqrt3}\exp\!\Big(2\pi\sqrt{\tfrac{N}{6}}\Big).$$

The elementary saddle nails the exponential $e^{2\pi\sqrt{N/6}}$; the exact $1/(4N\sqrt3)$ prefactor needs the modular (eta-function) refinement on top of the Gaussian, quoted here only for orientation.

## Contrast: the free particle grows only as a power law

Not every density of states is number-theoretic. For a free non-relativistic particle in a box of volume $V$ in $d$ space dimensions, momentum states fill phase space uniformly. The number with $|\vec p|<p$ scales as $p^{\,d}$, and $E=p^2/(2m)$ gives $p\propto E^{1/2}$, so $N(<E)\propto V E^{d/2}$ and

$$\rho(E)=\frac{dN}{dE}\;\propto\; V\,E^{\,d/2-1}.$$

Ordinary matter has a *power-law* density of states. An oscillator tower's $\Omega(E)\sim e^{c\sqrt E}$ already beats every power law (though it still trails $e^{cE}$). A relativistic *string* does best of all: $\Omega(E)\sim e^{cE}$, true exponential — and that is precisely what forces a *limiting* temperature. The hierarchy is the throughline of the whole module:

$$\underbrace{E^{d/2-1}}_{\text{free particle}} \;\ll\; \underbrace{e^{c\sqrt{E}}}_{\text{one oscillator tower}} \;\ll\; \underbrace{e^{cE}}_{\text{string}}. \tag{5}$$

The last step is kinematics turning $\sqrt N$ into $E$; the string formulas that do it are quoted in natural units, $\hbar=c=1$. For a high-excitation **open** string with zero spatial momentum, the mass formula is $M^2\simeq N^\perp/\alpha'$ and $E=M$, so $\sqrt{N^\perp}\simeq\sqrt{\alpha'}\,E$. Its states carry $b=24$ transverse oscillator labels, so $\Omega=p_{24}(N^\perp)$ and $\ln p_{24}\simeq 2\pi\sqrt{24\,N^\perp/6}=4\pi\sqrt{N^\perp}$, giving

$$S(E)=k\,4\pi\sqrt{N^\perp}=k\,4\pi\sqrt{\alpha'}\,E.$$

Oscillator counting delivers $\ln\Omega\sim\sqrt{N^\perp}$; the mass formula converts $\sqrt{N^\perp}$ into a term *linear* in $E$. A **closed** string reaches the same relation by a two-way cancellation: it has independent left- and right-moving sectors, so $\Omega=\big(p_{24}(N^\perp)\big)^2$ doubles the oscillator entropy, but its mass formula $2\sqrt{N^\perp}\simeq\sqrt{\alpha'}\,E$ carries a compensating factor of $2$, and the two cancel to leave the same $S(E)=k\,4\pi\sqrt{\alpha'}\,E$.

A *linear* $S(E)$ means $\Omega(E)\sim e^{4\pi\sqrt{\alpha'}\,E}$, so the canonical integral (1) develops a convergence boundary at $\beta_H=4\pi\sqrt{\alpha'}$ — the Hagedorn inverse temperature. For $\beta<\beta_H$, i.e. temperatures above $T_H$ with $kT_H=1/(4\pi\sqrt{\alpha'})$, the density of states outruns the Boltzmann suppression and $Z$ diverges. That is the [[Hagedorn temperature]].

## Open questions

- The full Hardy–Ramanujan prefactor $1/(4N\sqrt3)$ needs the modular transformation of the Dedekind eta function, beyond the elementary saddle.
- When $\Omega(E)\sim e^{cE}$ the Laplace transform (1) converges only for $\beta>c$; the microcanonical $\Omega(E)$ survives past that point, which is why Hagedorn physics is told through entropy, not $Z$. Developed in [[Hagedorn temperature]].

## Exercise

The saddle-point relation (4) claims that the $\beta^\ast$ dominating the inverse transform is the temperature at which $\langle E\rangle=E$. Test it on a case you can solve exactly: a spectrum with constant density $\rho(E)=\rho_0$ (states uniformly spread along the energy axis). Compute $Z(\beta)$, find the saddle $\beta^\ast(E)$ from (3), and check that plugging it into (4) reproduces the true $\ln\Omega$ up to a sub-exponential prefactor. Then interpret $\beta^\ast$: why must the dominant temperature scale as $1/E$ here?

> [!success]- Solution
> **Partition function.** With $\rho(E)=\rho_0$ on $[0,\infty)$,
> $$Z(\beta)=\int_0^\infty \rho_0\,e^{-\beta E}\,dE=\frac{\rho_0}{\beta}.$$
> **Saddle.** From (3), $E=-\partial_\beta\ln Z=-\partial_\beta(\ln\rho_0-\ln\beta)=1/\beta$, so
> $$\beta^\ast=\frac1E.$$
> This is exactly the advertised meaning of (3): the canonical mean energy of the flat spectrum is $\langle E\rangle=1/\beta$, and the saddle is the temperature at which that mean hits the target, $kT^\ast=E$. A flat spectrum has no energy scale of its own ($\rho_0$ only shifts $\ln Z$ by a constant), so the only temperature available is built from the target energy itself — $\beta^\ast$ *must* scale as $1/E$.
> **Saddle estimate of the count.** Equation (4) gives
> $$\ln\Omega(E)\approx \beta^\ast E+\ln Z(\beta^\ast)=\frac{1}{E}\cdot E+\ln\!\frac{\rho_0}{\beta^\ast}=1+\ln(\rho_0 E).$$
> **Exact count.** The true cumulative number of states up to $E$ is $\Omega_{\rm true}(E)=\int_0^E\rho_0\,dE'=\rho_0 E$, so $\ln\Omega_{\rm true}=\ln(\rho_0 E)$.
> **Compare.** The saddle overshoots by exactly $+1$ — a constant, i.e. a sub-exponential prefactor $e$, never a term that grows with $E$. A power-law $\rho$ has no exponential to capture, so the "leading exponential" is trivial and the whole answer *is* the prefactor; the bare saddle can only be accurate up to that $O(1)$ shift. The Gaussian correction does the rest: here $\Phi''(\beta^\ast)=1/\beta^{\ast2}=E^2$, and dividing $e^{\Phi(\beta^\ast)}=e\,\rho_0 E$ by $\sqrt{2\pi\Phi''}=\sqrt{2\pi}\,E$ returns $\rho\approx(e/\sqrt{2\pi})\,\rho_0\approx1.08\,\rho_0$ — the flat density itself, to within ten percent. This is the tame end of the hierarchy (5); for the genuinely exponential string density the same machinery captures the leading $S(E)/k$, which is the part that matters.
