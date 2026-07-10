---
title: Why many oscillators grow fast
number: "6.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, hagedorn]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

One oscillator has one state per energy level; an infinite tower of them has $e^{c\sqrt N}$ states at level $N$, because energy can be shared among ever more modes — and the string mass formula turns that into the runaway $e^{cE}$ growth behind the Hagedorn temperature.

## A piggy bank with more slots

Think of a piggy bank you fill with coins. If there is only one slot, there is exactly one way to hold any amount — drop the coins in. That is a single oscillator: at energy $E=n\hbar\omega$ there is *one* state, no choice, no degeneracy.

Now open more slots. A fixed number of coins can be split across slots in many ways, and the number of ways grows as slots are added. That is the entire mechanism: more independent modes sharing the energy means more microstates at fixed total energy. The only question is *how fast* the count grows, and the answer depends entirely on whether the number of available slots is fixed or grows with the energy.

- **Fixed number of slots** (a finite oscillator stack): the count grows only *polynomially*. Fast, but tame.
- **A slot at every frequency** (an infinite tower, like a vibrating string): the count of ways to reach level $N$ is the **partition number** $p(N)$ of number theory, whose log grows like $\sqrt N$ — *faster than any polynomial*. This is "grow fast."
- **A relativistic string** does one better: its mass formula makes level $\sim E^2$, so $\ln\Omega\sim\sqrt N \sim E$ becomes **linear in energy**, i.e. $\Omega\sim e^{cE}$. That true-exponential growth is what produces a limiting temperature.

The rest of this note earns each of those three lines.

## Slot-counting, made precise

Fix a total excitation level $N$ and count microstates. A microstate is a list of occupation numbers $\{n_\ell\}$: how many quanta sit in each oscillator.

**Finite stack — polynomial.** Take $r$ labeled oscillators *all at the same frequency* $\omega_0$. Fixed level means

$$n_1+\cdots+n_r=N,\qquad n_i\ge0.$$

The number of solutions is the stars-and-bars count

$$g_N^{(r)}=\binom{N+r-1}{\,r-1\,}\sim \frac{N^{\,r-1}}{(r-1)!}\qquad(r\text{ fixed, }N\to\infty).\tag{1}$$

*A fixed number of slots gives polynomial degeneracy* — genuinely more than one oscillator, but not yet dramatic. The explosion needs the number of available frequencies to grow with the energy.

**Infinite tower — the partition number.** Now give the tower one oscillator at *every* multiple of a base frequency, $\omega_\ell=\ell\omega_0$ ($\ell=1,2,3,\dots$) — the "quantum violin string." A quantum of the $\ell$-th mode carries energy $\ell\hbar\omega_0$, so fixing total energy $E=\hbar\omega_0 N$ means

$$\sum_{\ell\ge1}\ell\,n_\ell=N.\tag{2}$$

Reading (2) as "write $N$ as a sum of positive integers, using the part $\ell$ exactly $n_\ell$ times," this is precisely a **partition of the integer $N$**. The count is the partition number $p(N)$ ([[Density of states]]):

$$N=1,2,3,4,5,\dots \;\Longrightarrow\; p(N)=1,2,3,5,7,\dots$$

Already this outruns a single oscillator, which is stuck at $\Omega=1$ forever. And it climbs ferociously: $p(100)=190{,}569{,}292\approx1.9\times10^{8}$, $p(1000)\approx2.4\times10^{31}$, $p(10000)\approx3.6\times10^{106}$.

## Why the log-count is $\sqrt N$

The headline growth rate is

$$\boxed{\;\ln p(N)\simeq 2\pi\sqrt{\tfrac{N}{6}}\;}\qquad\Longleftrightarrow\qquad p(N)\sim e^{2\pi\sqrt{N/6}}.\tag{3}$$

The number of states grows like $e^{c\sqrt N}$ — **faster than any polynomial in $N$**. That single fact *is* "many oscillators grow fast."

### The intuition, before the algebra

Why $\sqrt N$ and not, say, $N$? Two competing effects fix it.

1. **More energy activates more modes — but only up to $\sqrt N$.** At the temperature that best carries energy $N$, the dimensionless variable $x=\beta\hbar\omega_0$ turns out to be $\sim N^{-1/2}$. A mode of frequency $\ell\omega_0$ is thermally awake only if $\ell x\lesssim1$, i.e. $\ell\lesssim 1/x\sim\sqrt N$. So the *active band* holds about $\sqrt N$ modes, not all $N$ of them.
2. **Each active mode adds $O(1)$ to the log-count.** Stacking $\sim\sqrt N$ effectively-independent oscillators, each worth an $O(1)$ chunk of $\ln\Omega$, gives $\ln\Omega\sim\sqrt N$.

Multiply the two effects and you get square-root growth of the *log*, hence exponential-in-$\sqrt N$ growth of the count. The exact prefactor $2\pi/\sqrt6$ is set by the convergent sum $\zeta(2)=\sum_{m\ge1}1/m^2=\pi^2/6$ that the mode sum produces, as the next section shows.

### The prefactor, in four lines

Let $x=\beta\hbar\omega_0$. The tower's partition function multiplies one geometric series per mode ([[Harmonic-oscillator partition function]]):

$$Z=\prod_{\ell=1}^\infty (1-e^{-x\ell})^{-1},\qquad
\ln Z=-\sum_{\ell=1}^\infty \ln(1-e^{-x\ell}).$$

At high temperature $x\ll1$, adjacent terms barely differ, so replace the sum by an integral and substitute $y=x\ell$:

$$\ln Z\simeq -\int_0^\infty d\ell\,\ln(1-e^{-x\ell})
=-\frac1x\int_0^\infty dy\,\ln(1-e^{-y})
=\frac1x\sum_{m\ge1}\frac{1}{m^2}=\frac{\pi^2}{6x}.$$

*The integral is large like $1/x$ because many low-frequency modes are thermally active; the number $\pi^2/6$ is the ordinary convergent sum $\zeta(2)$* — expand $\ln(1-e^{-y})=-\sum_m e^{-my}/m$ and integrate term by term. Nothing divergent is being regularized here.

Now read off energy and entropy from $\ln Z=\pi^2/(6\hbar\omega_0\beta)$:

$$E=-\partial_\beta\ln Z=\frac{\pi^2}{6\hbar\omega_0\beta^2},\qquad
\frac{S}{k}=\ln Z+\beta E=\frac{\pi^2}{6x}+\frac{\pi^2}{6x}=\frac{\pi^2}{3x}.$$

The level is $N=E/(\hbar\omega_0)=\pi^2/(6x^2)$, so $x=\pi/\sqrt{6N}$. (This is the $x\sim N^{-1/2}$ promised above.) Eliminating $x$,

$$\frac{S}{k}=\frac{\pi^2}{3x}=\frac{\pi^2}{3}\cdot\frac{\sqrt{6N}}{\pi}=2\pi\sqrt{\frac{N}{6}}.$$

Boltzmann's $S=k\ln\Omega$ with $\Omega=p(N)$ turns this thermodynamic entropy straight into the number-theory asymptotic (3). A purely thermal calculation ($Z\to E,S\to S(N)$) has delivered the leading term of the Hardy–Ramanujan formula for $p(N)$.

## More species grow even faster

Give each frequency $b$ degenerate oscillators — for the bosonic string, $b=24$ transverse directions of vibration. Independent factors multiply, so $Z_b=Z^{\,b}$, hence $\ln Z_b=b\ln Z$, $S_b=bS$, and

$$\ln p_b(N)\simeq 2\pi\sqrt{\frac{Nb}{6}}.\tag{4}$$

The growth exponent scales as $\sqrt b$: **more oscillator species $\Rightarrow$ faster growth.** The factor $b$ counts polarizations — this is the first place the *number of spacetime dimensions* leaks into the state count, and it is exactly the input that later sets the string's Hagedorn temperature.

## The payoff: from $\sqrt N$ to a temperature ceiling

Everything above is a *non-relativistic* oscillator tower: energy is proportional to level, so $\Omega\sim e^{c\sqrt N}$ is exponential only in $\sqrt E$. A **relativistic string** does qualitatively more, because relativity changes the relation between level and energy.

For an open string at rest ($E=M$, zero spatial momentum; natural units $\hbar=c=1$ from here on), the mass formula $\alpha'M^2=N^\perp-1\simeq N^\perp$ at high level gives

$$N^\perp\simeq\alpha' E^2,\qquad\text{i.e.}\qquad \sqrt{N^\perp}\simeq\sqrt{\alpha'}\,E.$$

Feed this into the $b=24$ log-count (4): $\ln p_{24}(N^\perp)\simeq 2\pi\sqrt{24\,N^\perp/6}=4\pi\sqrt{N^\perp}$, hence

$$S(E)=k\,4\pi\sqrt{N^\perp}=k\,4\pi\sqrt{\alpha'}\,E
\;\Longrightarrow\;
\Omega(E)\sim e^{4\pi\sqrt{\alpha'}\,E}.$$

*The square root got eaten:* $\sqrt N\propto E$, so the density of states is now **exponential in $E$ itself**, not in $\sqrt E$. Write it as $\Omega\sim e^{E/kT_H}$ and the meaning is immediate — the canonical sum $\sum_E\Omega(E)\,e^{-\beta E}$ pits proliferation against Boltzmann suppression, and the two exponentials tie at

$$kT_H=\frac{1}{4\pi\sqrt{\alpha'}}.$$

Above this **Hagedorn temperature** the states win and the sum diverges — a hard boundary the non-relativistic tower never had. The whole story is one climbing ladder:

$$\underbrace{\Omega=1}_{\text{1 oscillator}} \;\to\;
\underbrace{\Omega\sim N^{r-1}}_{\text{fixed finite stack}} \;\to\;
\underbrace{\Omega\sim e^{c\sqrt N}}_{\text{infinite tower}} \;\to\;
\underbrace{\Omega\sim e^{cE}}_{\text{relativistic string}} \;\to\;
\underbrace{T_H}_{\text{canonical boundary}}.$$

Each arrow is one physical change: add slots, make the slots infinite in number, then let relativity trade $\sqrt N$ for $E$. That last arrow — what the ceiling *means* and why closed strings share the same $T_H$ — is the subject of [[Hagedorn temperature]].

## Open questions

- **Fermionic tower.** If each mode can hold only $0$ or $1$ quantum (Pauli), the count becomes partitions into *distinct* parts, $\ln q(N)\simeq2\pi\sqrt{N/12}$ — slower by $\sqrt2$. Pauli statistics change the *constant*, not the $\sqrt N$ scaling; this is what distinguishes the superstring count.
- **Center-of-mass labels and the tachyon.** The full single-string partition function also sums over spatial momentum and must confront the bosonic tachyon; both belong with [[Hagedorn temperature]], not this qualitative note.

## Exercise

The finite stack (1) grows polynomially and the infinite tower (3) grows like $e^{c\sqrt N}$. Pin down *where* the transition happens: for the equal-frequency stack of $r$ oscillators, treat $r$ as free and find the value of $r$ (in terms of $N$) at which the stars-and-bars log-count $\ln g_N^{(r)}$ first reaches the tower's $\ln p(N)\simeq 2\pi\sqrt{N/6}$. Interpret the answer using the "active band" intuition of this note.

> [!success]- Solution
> For $1\ll r\ll N$ the stars-and-bars count (1) is $g_N^{(r)}\simeq N^{r-1}/(r-1)!$, and Stirling turns its log into
> $$\ln g_N^{(r)}\simeq (r-1)\ln N-(r-1)\ln(r-1)+(r-1)=(r-1)\left[\ln\frac{N}{r-1}+1\right].$$
> The factorial is not a small correction here: the crossover $r$ will turn out to be of order $\sqrt N$, where $\ln(r-1)\simeq\tfrac12\ln N$ cancels half of the naive $r\ln N$. So keep it, and match the full expression to the tower's log-count with the ansatz $r=A\sqrt N/\ln N$. Then $\ln\frac{N}{r-1}\simeq\tfrac12\ln N$ up to $\ln\ln N$ corrections, the left side is $\simeq\tfrac{A}{2}\sqrt N$, and equating it to $2\pi\sqrt{N/6}$ fixes $A=4\pi/\sqrt6$:
> $$r\simeq\frac{4\pi}{\sqrt6}\,\frac{\sqrt N}{\ln N}.$$
> An equal-frequency stack only matches the infinite tower once it has about $\sqrt N/\ln N$ oscillators — of order $\sqrt N$ up to the logarithm.
>
> This is the active band of the intuition section. The tower behaves as though roughly $\sqrt N$ modes are in play (those with $\ell\lesssim 1/x\sim\sqrt N$), each contributing $O(1)$ to the log-count, so faking that entropy with a finite equal-frequency stack takes about that many oscillators. The $\ln N$ discount has a clean origin: every slot of the stack sits at the cheapest frequency $\omega_0$, so each carries a large occupancy $N/r\sim\sqrt N\ln N$ and contributes $\ln(N/r)\simeq\tfrac12\ln N$ to the log-count, rather than the tower mode's $O(1)$ — so slightly fewer slots suffice. The tower still wins for free: it opens a new slot at every frequency as the energy rises, while a fixed stack of size $r=O(1)$ stays frozen at polynomial growth $N^{r-1}$.
