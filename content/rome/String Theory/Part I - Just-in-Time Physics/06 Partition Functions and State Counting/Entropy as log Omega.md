---
title: Entropy as log Omega
number: "6.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, entropy]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Entropy is the logarithm of a state count, and the slope of that log-count against energy sets the temperature.

Picture the system as a lottery. $\Omega(E)$ is how many equally likely tickets (microstates) sit at energy $E$, and entropy $S=k\ln\Omega$ is essentially the number of digits in that ticket count. Temperature answers a different question: hand the system one more joule — how many new tickets does that unlock? A system starving for tickets (steep $\partial S/\partial E$) is cold and greedily absorbs energy; one that gains few (shallow slope) is hot and gives energy away. The whole note is a single move — count states, take the log, differentiate — and that move is what turns a thermodynamics calculation into a number-theory answer.

## Boltzmann: entropy is a log-count

Isolate a system at fixed energy $E$. The **fundamental postulate** of statistical mechanics says all $\Omega(E)$ accessible microstates are equally likely (we refuse to privilege any arrangement once energy is fixed). Boltzmann's entropy is

$$\boxed{\,S = k\ln\Omega\,}\tag{1}$$

with $k$ the Boltzmann constant — it only fixes units, and in natural units $k=1$ so $S/k=\ln\Omega$ is a pure number. *Entropy is the log of the number of ways the system can be.* More accessible microstates, more entropy.

**Why the logarithm?** Take two independent systems with $\Omega_1$ and $\Omega_2$ microstates. Each state of one pairs with each state of the other, so the joint count multiplies: $\Omega_{12}=\Omega_1\Omega_2$ (the same product rule that makes partition functions factor in [[Harmonic-oscillator partition function]]). We want entropy to be **additive** — two independent systems should have entropies that add — and the only continuous functions turning products into sums are multiples of the logarithm:

$$S_{12}=k\ln(\Omega_1\Omega_2)=k\ln\Omega_1+k\ln\Omega_2=S_1+S_2.\tag{2}$$

The $\ln$ is *forced* by additivity; the prefactor $k$ is fixed later by matching to thermodynamic temperature.

## Temperature from the slope of the log-count

Temperature is not an extra microscopic ingredient — it is *defined* by how fast the log-count grows when you add energy.

Let two systems, weakly coupled so they exchange energy, share a fixed total $E_{\rm tot}=E_1+E_2$. For a given split, joint states multiply, so the total entropy adds:

$$S_{\rm tot}(E_1)=S_1(E_1)+S_2(E_{\rm tot}-E_1).$$

Equilibrium is the split with the *most* joint microstates — the largest $S_{\rm tot}$. Differentiate in $E_1$ (since $E_2=E_{\rm tot}-E_1$, the chain rule hits $S_2$ with a minus sign):

$$\frac{dS_{\rm tot}}{dE_1}=\frac{\partial S_1}{\partial E_1}-\frac{\partial S_2}{\partial E_2}\stackrel{!}{=}0
\;\Longrightarrow\;\frac{\partial S_1}{\partial E_1}=\frac{\partial S_2}{\partial E_2}.$$

So the quantity that equalizes when two systems trade energy is the slope $\partial S/\partial E$. Name its reciprocal the temperature:

$$\boxed{\,\frac{1}{T}\equiv\frac{\partial S}{\partial E}\,}\tag{3}$$

Thermal equilibrium is equal temperature *because* it is equal entropy-slope. Heat flows toward whichever system gains more microstates per joule — exactly the direction that raises the total ticket count.

## The canonical entropy is the same entropy

The canonical route (fix temperature, not energy — see [[Microcanonical versus canonical ensemble]]) hands you entropy through a partition function $Z=\sum_\alpha e^{-\beta E_\alpha}$, with $\beta=1/(kT)$, and the free energy $F=-kT\ln Z$, via $S=-\partial F/\partial T$. That looks like a different formula; it is the same $S$.

Use the **Gibbs entropy** $S=-k\sum_\alpha p_\alpha\ln p_\alpha$, which measures the spread of any probability distribution over microstates. It reduces to Boltzmann's $(1)$ when the $\Omega$ accessible states are equiprobable: with $p_\alpha=1/\Omega$,

$$-k\sum_\alpha\frac1\Omega\ln\frac1\Omega=k\ln\Omega.\;\checkmark$$

Now feed in the canonical weights $p_\alpha=e^{-\beta E_\alpha}/Z$, so $\ln p_\alpha=-\beta E_\alpha-\ln Z$:

$$S=-k\sum_\alpha p_\alpha(-\beta E_\alpha-\ln Z)
=k\beta\underbrace{\sum_\alpha p_\alpha E_\alpha}_{\langle E\rangle}+k\ln Z\underbrace{\sum_\alpha p_\alpha}_{1}
=k\beta\langle E\rangle+k\ln Z.\tag{4}$$

With $k\beta=1/T$ and $k\ln Z=-F/T$ this is $S=\langle E\rangle/T-F/T$, i.e.

$$F=\langle E\rangle-TS,$$

the standard thermodynamic identity. So canonical entropy is **an energy term plus a log-count term** ($k\ln Z$), and it obeys $F=E-TS$ exactly. It equals Boltzmann's $k\ln\Omega$ whenever one energy shell dominates the canonical sum — true for large systems, where the sharply peaked saddle of [[Density of states]] pins $\langle E\rangle$ to a single shell. $S=k\ln\Omega$ (microcanonical) and $S=-\partial F/\partial T$ (canonical) are one entropy seen two ways.

*(Sanity check on the direct route: $-\partial_T F=k\ln Z+kT\,\partial_T\ln Z$. Since $\partial_T\ln Z=\partial_\beta\ln Z\cdot\big(-1/(kT^2)\big)=(-\langle E\rangle)\big(-1/(kT^2)\big)=\langle E\rangle/(kT^2)$, the second term is $\langle E\rangle/T$, matching $(4)$.)*

## String entropy from a log-count

Now the counting machine earns its keep. The **quantum violin string** is a tower of oscillators with frequencies $\omega_0,2\omega_0,3\omega_0,\dots$; a state is a list of occupation numbers with total energy $E=\hbar\omega_0 N$, and the number of states at level $N$ is the integer-partition count $p(N)$ ([[Density of states]]). Boltzmann $(1)$ turns that count into an entropy:

$$S(E)=k\ln\Omega(E)=k\ln p\!\left(\frac{E}{\hbar\omega_0}\right).\tag{5}$$

But $p(N)$ is a hard number-theoretic object. The canonical trick sneaks up on it: compute the easy $Z=\prod_\ell(1-e^{-\beta\hbar\omega_0\ell})^{-1}$, get $F$, then $S(T)$ and $E(T)$, and eliminate $T$ (worked in full in [[Why many oscillators grow fast]]). The result is a clean closed form:

$$S(E)=k\,2\pi\sqrt{\frac{N}{6}},\qquad N=\frac{E}{\hbar\omega_0}.\tag{6}$$

Equating $(5)$ and $(6)$ reads off the asymptotic partition count:

$$\ln p(N)\simeq 2\pi\sqrt{\frac{N}{6}}.$$

This is the small miracle the module is built for: a purely *thermodynamic* computation ($Z\to F\to S$) delivers a *number-theoretic* asymptotic — the leading term of the Hardy–Ramanujan formula for $p(N)$, obtained without a single combinatorial identity. Give each frequency $b$ degenerate oscillators (e.g. $b=24$ transverse directions of the bosonic string) and $Z\to Z^b$, so $S\to k\,2\pi\sqrt{Nb/6}$ and $\ln p_b(N)\simeq2\pi\sqrt{Nb/6}$ — more oscillator species, more entropy.

The Hagedorn bridge is now one line. Relativistic string kinematics later ties level to energy quadratically, $N^\perp\simeq\alpha' E^2$, so the level-count law $\ln\Omega\sim\sqrt{N^\perp}$ becomes an *energy* law $\ln\Omega(E)\sim E$. A linear entropy has *constant* slope $\partial S/\partial E$, and by $(3)$ a constant slope is a fixed $1/T$ — a limiting temperature. That ceiling is the [[Hagedorn temperature]].

### Where the zero-point energy goes

Shifting the zero of energy cannot change a state count, so entropy had better be blind to it. Check: for a finite set of oscillators, keeping zero-point energies multiplies $Z$ by the constant $e^{-\beta E_0}$ with $E_0=\sum_i\tfrac12\hbar\omega_i$, hence $F\to F+E_0$. Then $S=-\partial F/\partial T$ is **unchanged**, since $\partial E_0/\partial T=0$. This is why dropping zero-point terms is harmless for thermal counting.

For the infinite violin tower the same shift is $E_0=\tfrac12\hbar\omega_0\sum_{\ell\ge1}\ell$, which diverges. The honest statement here is narrow: we count *excitation* energies above the chosen vacuum, and nothing above needs that divergent sum. It must **not** be quietly replaced by $\zeta(-1)=-\tfrac1{12}$ — that finite value emerges only after a regularization subtracts the divergence, and it belongs to the normal-ordering of the mass spectrum in a later module, not to this counting problem.

## Open questions

- Deriving Gibbs entropy from Shannon's uniqueness axioms (or from many-copy typical-set counting) would justify $-k\sum p\ln p$ from first principles; it belongs in a dedicated statistical-mechanics note.
- The equivalence of the two entropies is a large-system, sharp-peak claim. Strings near [[Hagedorn temperature]] are the boundary case where it can fail — treated later.

## Exercise

A **two-level system** (one spin) has just two microstates: energy $0$ and energy $\varepsilon$. Put $M$ labeled copies of it in weak thermal contact, and suppose $m$ of them are excited, so the total energy is $E=m\varepsilon$.

**(a)** Write $\Omega(E)$, and use Boltzmann $(1)$ with Stirling's approximation $\ln M!\approx M\ln M-M$ to show
$$\frac{S}{k}=-M\Big[f\ln f+(1-f)\ln(1-f)\Big],\qquad f\equiv\frac{m}{M}=\frac{E}{M\varepsilon}.$$
**(b)** Apply the definition $(3)$, $1/T=\partial S/\partial E$, to show $\dfrac{1}{kT}=\dfrac1\varepsilon\ln\dfrac{1-f}{f}$, and invert it to get the occupation $f=\big(e^{\beta\varepsilon}+1\big)^{-1}$.

> [!success]- Solution
> **(a)** The copies are labeled and effectively independent, so the count is "choose which $m$ of the $M$ are excited":
> $$\Omega(E)=\binom{M}{m}=\frac{M!}{m!\,(M-m)!}.$$
> Then $S/k=\ln\Omega=\ln M!-\ln m!-\ln(M-m)!$. Apply Stirling to each factorial ($\ln M!\approx M\ln M-M$, and the three $-M,-m,-(M{-}m)$ linear pieces cancel since $m+(M-m)=M$):
> $$\frac{S}{k}\approx M\ln M-m\ln m-(M-m)\ln(M-m).$$
> Write $m=fM$, $M-m=(1-f)M$, and pull out the $\ln M$ pieces: $M\ln M-fM\ln(fM)-(1-f)M\ln((1-f)M)$. The $\ln M$ terms combine as $M\ln M[1-f-(1-f)]=0$, leaving
> $$\frac{S}{k}=-M\big[f\ln f+(1-f)\ln(1-f)\big].$$
> This is $M$ times the binary entropy of $f$ — maximal at $f=\tfrac12$ (energy $E=M\varepsilon/2$, most ways to arrange), zero at $f=0$ or $1$ (one microstate each). Additivity across the $M$ copies is visible as the overall factor $M$, exactly $(2)$.
>
> **(b)** Energy enters through $f=E/(M\varepsilon)$, so $\partial/\partial E=\big(1/(M\varepsilon)\big)\,\partial/\partial f$. Differentiating the bracket:
> $$\frac{d}{df}\big[f\ln f+(1-f)\ln(1-f)\big]=\ln f+1-\ln(1-f)-1=\ln\frac{f}{1-f}.$$
> Hence
> $$\frac{1}{T}=\frac{\partial S}{\partial E}=\frac{k}{\varepsilon}\Big(-\ln\frac{f}{1-f}\Big)=\frac{k}{\varepsilon}\ln\frac{1-f}{f}
> \;\Longrightarrow\;\frac{1}{kT}=\frac1\varepsilon\ln\frac{1-f}{f}.$$
> Solving for $f$: $\beta\varepsilon=\ln\frac{1-f}{f}\Rightarrow e^{\beta\varepsilon}=\frac{1-f}{f}=\frac1f-1\Rightarrow f=\dfrac{1}{e^{\beta\varepsilon}+1}$ — the Fermi–Dirac occupation, derived here from nothing but "count states, take the log, differentiate." The limits confirm the sign conventions: as $T\to0$ ($\beta\to\infty$), $f\to0$ — the system freezes into its ground state; as $T\to\infty$, $f\to\tfrac12$ — both levels equally likely. $\checkmark$
