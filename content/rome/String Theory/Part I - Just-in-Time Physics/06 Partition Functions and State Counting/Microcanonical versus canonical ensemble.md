---
title: Microcanonical versus canonical ensemble
number: "6.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ensembles]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Microcanonical means fix the energy and count the states; canonical means let the energy fluctuate and weight every state by $e^{-\beta E}$. For a large system these are two ways of asking the same counting question.

## Two ways to ask the same question

Suppose you want to know how many quantum states a system has at a given energy. There are two ways to ask.

**Way 1 (microcanonical): stand at one energy and count.** Dial the energy to exactly $E$ and ask "how many microstates sit right here?" The answer is a single integer, $\Omega(E)$. This is the honest, primary object — a literal head-count. Its downside: the count is a hard *constrained* combinatorics problem (states must land on *exactly* $E$).

**Way 2 (canonical): don't fix energy — tax it.** Attach the system to a huge heat bath at temperature $T$ and let energy slosh back and forth. Now no single energy is fixed; instead every state gets a *weight* $e^{-\beta E}$ that penalizes high energy. Add up all the weights and you get one number, the partition function $Z$. This is computationally *easy* — the constraint is gone, so the sums over independent parts of the system factorize into a product.

The two ways are one transform apart: **$Z$ is the Laplace transform of $\Omega$**. Way 2 smears Way 1 over all energies with an exponential envelope. For a large ordinary system the smeared weight $\Omega(E)e^{-\beta E}$ collapses to a needle-sharp spike over a single energy shell, so the two ways deliver the same physics and you use whichever is easier. Way 2 usually is, which fixes the standard move: **compute $Z$, then read $\Omega$ back off it.** The move breaks in exactly one place — a string near the [[Hagedorn temperature]], where the spike stops being sharp. All of Hagedorn physics turns on that failure.

An exam analogy: microcanonical is counting exactly how many students scored 90. Canonical is computing a score-weighted head-count with a knob $\beta$ that sets how harshly high scores are docked — easier to compute, and once you know it for every $\beta$ it encodes the whole score histogram, including how many scored 90.

## What an ensemble is

A quantum system has energy eigenstates $|\alpha\rangle$ with energies $E_\alpha$. The label $\alpha$ is a **microstate**: the full microscopic description (e.g. every oscillator's occupation number). A **macrostate** keeps only coarse data — total energy, or temperature.

An **ensemble** is a probability distribution $p_\alpha$ over the microstates compatible with a given macrostate. All of thermodynamics is averages over that distribution. Two natural choices of what to hold fixed give the two ensembles.

## Microcanonical: fix the energy

Isolate the system completely, so its energy is pinned at $E$ (or, for a continuous spectrum, in a thin window $[E, E+\Delta E]$). The **fundamental postulate of statistical mechanics** is:

> An isolated system in equilibrium is equally likely to be in any accessible microstate.

If $\Omega(E)$ counts the microstates in that energy shell, each has probability

$$p_\alpha = \frac{1}{\Omega(E)}.$$

Once the energy is fixed we refuse to privilege any one compatible arrangement — total ignorance beyond the constraint. Everything is built from the single counting function $\Omega(E)$ — the microcanonical face of the [[Density of states]] — and the entropy is Boltzmann's

$$S(E) = k\ln\Omega(E),$$

the content of [[Entropy as log Omega]]. For a discrete level $N$ it is cleaner to write the degeneracy as $g_N$; for the quantum violin string $g_N = p(N)$, the partition number, with $E = \hbar\omega_0 N$.

The catch: extracting $g_N$ directly means solving an exact integer constraint,

$$N = \sum_{\ell\ge 1}\ell\, n_\ell,$$

i.e. "how many occupation lists $\{n_\ell\}$ hit *exactly* total $N$?" That hard constraint is precisely what the canonical ensemble dissolves.

## Canonical: fix the temperature

Now couple the system to a large **reservoir** (heat bath) at temperature $T$. The system's energy fluctuates; what is fixed is $T$. The probability of microstate $\alpha$ is the **Boltzmann distribution**

$$p_\alpha = \frac{e^{-\beta E_\alpha}}{Z}, \qquad \beta \equiv \frac{1}{kT},$$

normalized by the **canonical partition function**

$$\boxed{\,Z = \sum_\alpha e^{-\beta E_\alpha}\,}.$$

High-energy states are exponentially suppressed, and $\beta$ sets how steeply. Probabilistically $Z$ is just the normalizer; but as a *function of $\beta$* it packs away the energy moments and the entropy.

For a spectrum $E_N = \hbar\omega_0 N$, set $q = e^{-\beta\hbar\omega_0}$. Then

$$Z(q) = \sum_{N\ge 0} g_N\, q^N.$$

This is an ordinary **generating function**: temperature just picks a numerical value of $q\in(0,1)$, and the $g_N$ we struggled to count in the microcanonical picture now sit as the coefficients of a power series. Trading the exact constraint for a generating function is the entire computational payoff.

### Where the Boltzmann weight comes from

This is the one derivation that *justifies* the canonical ensemble, so do it once. Put the system (states $\alpha$, energies $E_\alpha$) in contact with a reservoir and treat the **combined** system as isolated with fixed total energy $E_{\text{tot}}$ — i.e. apply the microcanonical postulate to system + reservoir.

If the system sits in one specific microstate $\alpha$, the reservoir must carry $E_{\text{tot}} - E_\alpha$, and the number of ways to arrange it is $\Omega_R(E_{\text{tot}} - E_\alpha)$. By the equal-probability postulate,

$$p_\alpha \;\propto\; \Omega_R(E_{\text{tot}} - E_\alpha).$$

The system prefers states that leave the bath with the *most* ways to be — it is the bath's entropy doing the driving. Write $S_R = k\ln\Omega_R$ and Taylor-expand $\ln\Omega_R$ around $E_{\text{tot}}$, using $E_\alpha \ll E_{\text{tot}}$ (the reservoir is huge):

$$\ln\Omega_R(E_{\text{tot}} - E_\alpha) \approx \ln\Omega_R(E_{\text{tot}}) - E_\alpha\,\frac{\partial\ln\Omega_R}{\partial E}\Big|_{E_{\text{tot}}}.$$

That derivative is the definition of temperature: $\partial S_R/\partial E = 1/T$, so $\partial\ln\Omega_R/\partial E = 1/(kT) = \beta$. Hence

$$\Omega_R(E_{\text{tot}} - E_\alpha) \approx \Omega_R(E_{\text{tot}})\,e^{-\beta E_\alpha} \quad\Longrightarrow\quad p_\alpha \propto e^{-\beta E_\alpha}.$$

The reservoir's entire influence collapses to **one number**, its temperature; the constant $\Omega_R(E_{\text{tot}})$ is absorbed into $1/Z$. This is where $\beta = 1/(kT)$ physically *comes from*: it is the rate at which the bath's log-multiplicity changes with energy — how much "phase space" the bath gives up to hand the system one more unit of energy. (The definition $1/T = \partial S/\partial E$ is motivated in [[Entropy as log Omega]].)

Equivalently, in optimization language: $\beta$ is the Lagrange multiplier that enforces a fixed *mean* energy once exact energy is allowed to fluctuate.

## How the two ensembles connect

Group the canonical sum by energy. All $\Omega(E)$ states at energy $E$ carry the same weight $e^{-\beta E}$, so

$$Z = \sum_\alpha e^{-\beta E_\alpha} = \sum_E \Omega(E)\,e^{-\beta E} \;\xrightarrow{\text{continuum}}\; \int_0^\infty dE\,\rho(E)\,e^{-\beta E}.$$

**$Z$ is the Laplace transform of the density of states.** Fixing $T$ is a weighted superposition over all energies; fixing $E$ is one slice of that superposition. To go the other way — recover $\Omega(E)$ or $g_N$ from $Z$ — you inverse-Laplace transform (or extract a power-series coefficient), which in practice is a saddle-point estimate developed in [[Density of states]].

### Why they agree (for large systems)

The integrand is $\rho(E)e^{-\beta E}\sim e^{\ln\Omega(E) - \beta E} = e^{S(E)/k - \beta E}$. For a large ordinary system this is **sharply peaked**: the exponent is extensive — of order the number of constituents — and the fluctuation computation below shows the peak's width grows only like the square root of its location. The peak sits where

$$\frac{\partial}{\partial E}\Big(\frac{S}{k} - \beta E\Big) = 0 \;\Longrightarrow\; \frac{1}{k}\frac{\partial S}{\partial E} = \beta \;\Longrightarrow\; \frac{\partial S}{\partial E} = \frac{1}{T},$$

exactly the thermodynamic definition of temperature. So the canonical ensemble at temperature $T$ is *dominated by the single energy shell whose microcanonical temperature is $T$*. In applied-math terms: the Laplace transform is controlled by one saddle.

How sharp is the peak? In the canonical ensemble the energy moments come straight from $\ln Z$:

$$\langle E\rangle = -\partial_\beta\ln Z,\qquad \langle(\Delta E)^2\rangle = \partial_\beta^2\ln Z = -\partial_\beta\langle E\rangle.$$

The curvature of $\ln Z$ *is* the width of the energy distribution. Since $dT/d\beta = -kT^2$,

$$\langle(\Delta E)^2\rangle = kT^2 C_V,\qquad C_V = \left(\frac{\partial\langle E\rangle}{\partial T}\right)_V.$$

For an ordinary extensive system of $N$ independent constituents (in this argument $N$ counts particles or oscillators, not the level of the previous sections) $\langle E\rangle\sim N$ and $C_V\sim N$, so

$$\frac{\sqrt{\langle(\Delta E)^2\rangle}}{\langle E\rangle}\sim\frac{\sqrt N}{N} = \frac{1}{\sqrt N}\xrightarrow{N\to\infty}0.$$

Relative energy fluctuations vanish in the thermodynamic limit. **That** is why "fixed $T$" and "fixed $E = \bar E$" describe the same macroscopic state for large ordinary systems: the ensembles are **equivalent** at leading order — the spike from the opening picture becomes a needle.

### Caveat: strings break the equivalence

Equivalence is a sharp-peak statement, and the peak can fail to be sharp. At high energy the string density of states grows like $\rho(E)\sim e^{\beta_H E}$ (up to powers of $E$), so the exponent of the Laplace integrand is $S(E)/k - \beta E \simeq -(\beta-\beta_H)E$ — *linear* in $E$, with **no interior maximum** and hence no saddle at any $\beta$. For $\beta > \beta_H$ the integrand merely decays: $Z$ converges but no single energy shell dominates it. Once $\beta$ drops below $\beta_H$ (temperature rises past the [[Hagedorn temperature]] $T_H$), $Z$ *stops converging* altogether, whereas the microcanonical count $\Omega(E)$ remains finite and well-defined at every energy. This is precisely why Hagedorn physics is told through entropy and density of states rather than through the canonical $Z$: beyond $T_H$ Way 2 breaks and only Way 1 survives.

## Which to use when

- **Microcanonical** ($\Omega(E)$ or $g_N$, $S = k\ln\Omega$): conceptually primary; the right tool when you literally want a state count, and the *only* safe tool when $Z$ diverges near Hagedorn.
- **Canonical** ($Z$, $F = -kT\ln Z$): computationally easier, because independent-oscillator sums factor into products. Compute here, then convert back.

The practical loop: compute $Z$ (canonical, easy) $\to$ get $F = -kT\ln Z$, then $S(T)$ and $E(T)$ $\to$ eliminate $T$ to get $S(E)$ $\to$ identify $\Omega(E) = e^{S/k}$ (back to microcanonical) $\to$ read off the state count. For the violin string that count is $p(N)$, and this loop is exactly how you get its asymptotic growth without ever counting partitions by hand.

## Open questions

- Genuine inequivalence — negative specific heat, or no saddle at all — is the Hagedorn boundary case, developed in [[Hagedorn temperature]].
- This note keeps only the leading saddle; subleading finite-size corrections to the equivalence are not needed here.

## Exercise

A two-level system has just two microstates, with energies $0$ and $\epsilon > 0$.

**(a)** Write down $Z(\beta)$ and compute $\langle E\rangle(\beta)$.
**(b)** Compute $\langle(\Delta E)^2\rangle$ two ways — directly from $\sum_\alpha p_\alpha E_\alpha^2 - \langle E\rangle^2$, and from $\partial_\beta^2\ln Z$ — and check they agree.
**(c)** This is *not* a large system: show that near $\beta\to 0$ (high $T$) the relative fluctuation $\sqrt{\langle(\Delta E)^2\rangle}/\langle E\rangle$ does **not** go to zero, and say in one sentence why that is consistent with the "$1/\sqrt N$" argument in this note.

> [!success]- Solution
> **(a)** Two states, so $Z = e^{-\beta\cdot 0} + e^{-\beta\epsilon} = 1 + e^{-\beta\epsilon}$. Then
> $$\langle E\rangle = -\partial_\beta\ln Z = -\frac{-\epsilon e^{-\beta\epsilon}}{1 + e^{-\beta\epsilon}} = \frac{\epsilon\, e^{-\beta\epsilon}}{1 + e^{-\beta\epsilon}} = \frac{\epsilon}{e^{\beta\epsilon} + 1}.$$
> The last form is the Fermi-like occupation of the upper level. Limits check: $\langle E\rangle\to 0$ as $\beta\to\infty$ (frozen in ground state), $\langle E\rangle\to\epsilon/2$ as $\beta\to 0$ (both states equally likely).
>
> **(b)** *Direct.* The probabilities are $p_0 = 1/(1+e^{-\beta\epsilon})$ and $p_\epsilon = e^{-\beta\epsilon}/(1+e^{-\beta\epsilon})$. Since $E_\alpha\in\{0,\epsilon\}$, $\langle E^2\rangle = \epsilon^2 p_\epsilon = \epsilon^2 e^{-\beta\epsilon}/(1+e^{-\beta\epsilon})$. Then
> $$\langle(\Delta E)^2\rangle = \langle E^2\rangle - \langle E\rangle^2 = \epsilon^2\frac{e^{-\beta\epsilon}}{(1+e^{-\beta\epsilon})^2}.$$
> *From $\ln Z$.* With $\ln Z = \ln(1 + e^{-\beta\epsilon})$, first $\langle E\rangle = \epsilon e^{-\beta\epsilon}/(1+e^{-\beta\epsilon})$ as above; differentiating again,
> $$\langle(\Delta E)^2\rangle = -\partial_\beta\langle E\rangle = \epsilon^2\frac{e^{-\beta\epsilon}}{(1+e^{-\beta\epsilon})^2}.$$
> The two agree. (Sanity: writing $p_\epsilon = 1/(e^{\beta\epsilon}+1)$, this is $\epsilon^2 p_\epsilon p_0$, the variance of a Bernoulli variable scaled by $\epsilon^2$ — as it must be.)
>
> **(c)** As $\beta\to 0$: $\langle E\rangle\to\epsilon/2$ and $\langle(\Delta E)^2\rangle\to\epsilon^2/4$, so
> $$\frac{\sqrt{\langle(\Delta E)^2\rangle}}{\langle E\rangle}\to\frac{\epsilon/2}{\epsilon/2} = 1,$$
> an $O(1)$ fluctuation that does not shrink. Consistent with the note: the $1/\sqrt N$ suppression required an **extensive** system with $\langle E\rangle\sim N$ and $C_V\sim N$; here $N=1$ (a single degree of freedom, energy bounded by $\epsilon$), so there is no large parameter to make the peak sharp, and the two ensembles are *not* equivalent. Strings near Hagedorn break the same sharp-peak assumption by a different route: not a missing large parameter, but an exponent with no interior peak at all.
