---
title: Hagedorn temperature
number: "26.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, hagedorn]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string has *so many* excited states that heating it never gets it hotter than one fixed temperature $kT_H = 1/(4\pi\sqrt{\alpha'})$ — pour in more energy and it just makes longer strings, not a hotter gas.

## Two racing exponentials

In statistical mechanics a temperature $T$ weights each state of energy $E$ by the Boltzmann factor $e^{-E/kT}$: high-energy states are exponentially *suppressed*. This is a race between two exponentials:

- how many states there are at energy $E$ — the **density of states** $\rho(E)$,
- and how hard the Boltzmann factor $e^{-\beta E}$ (with $\beta = 1/kT$) suppresses them.

For an ordinary gas $\rho(E)$ grows only like a power of $E$, so the Boltzmann factor always wins and equilibrium exists at every temperature. A string is different: its state count grows **exponentially**, $\rho(E)\sim e^{\beta_H E}$. Now the two exponentials can tie. At the special temperature where $\beta = \beta_H$ the suppression exactly cancels the proliferation of states, and above it ($\beta<\beta_H$, i.e. $T>T_H$) the states win and the partition function diverges. That tie-point is the **Hagedorn temperature** $T_H = 1/(k\beta_H)$.

We derive this ceiling twice — once from entropy (the microcanonical route), once from the partition function (the canonical route) — and then ask what it physically means.

## Setup: strings at rest

Take open strings with zero spatial momentum — for instance, endpoints stuck on a D0-brane. Then each quantum state's energy is just its rest mass, $E = M$, and we can talk about "the energy of a state" without tracking momentum. The mass-shell relation ([[Mass-shell relation]]) reads

$$M^2 = \frac{1}{\alpha'}\left(N^\perp - 1\right) \simeq \frac{N^\perp}{\alpha'}, \qquad\text{so}\qquad \sqrt{N^\perp} = \sqrt{\alpha'}\,E. \tag{1}$$

The $-1$ is the normal-ordering constant $a=-1$ of the open bosonic string (the intercept being $-a=+1$); at the large excitation numbers $N^\perp \gg 1$ that dominate the thermodynamics it is negligible, leaving $\sqrt{N^\perp}=\sqrt{\alpha'}\,E$ — the level number grows linearly with energy.

## Entropy linear in energy

The number of states at level $N^\perp$ is the number of ways to distribute $N^\perp$ units of oscillation among the 24 transverse directions — a partition count $p_{24}(N^\perp)$, worked out in [[Partitions and oscillator counting]]. Its logarithm is

$$\ln p_{24}(N^\perp) \simeq 2\pi\sqrt{\frac{24\,N^\perp}{6}} = 4\pi\sqrt{N^\perp}, \tag{2}$$

so the entropy $S = k\ln p_{24}(N^\perp)$ is

$$S(N^\perp) = 4\pi k\sqrt{N^\perp}. \tag{3}$$

Substituting $\sqrt{N^\perp} = \sqrt{\alpha'}\,E$ from (1) turns this into an entropy–energy law:

$$\boxed{\,S = 4\pi k\sqrt{\alpha'}\,E\,} \tag{4}$$

Entropy is linear in energy. A photon gas in three space dimensions has $S\propto E^{3/4}$ (from $E\propto T^4V$, so $T\propto E^{1/4}$ and $S\propto T^3V\propto E^{3/4}$); here $S$ grows like $E$ itself. That linearity is the direct fingerprint of the exponential density of states — $\ln(\text{states})\sim\sqrt{N^\perp}\sim E$, so $S\propto E$.

## A constant temperature falls out

Temperature is *defined* by how much the entropy responds to added energy, $\dfrac{1}{T} = \dfrac{\partial S}{\partial E}$. With $S$ linear in $E$, that slope is a constant:

$$\frac{1}{kT} = \frac1k\frac{\partial S}{\partial E} = 4\pi\sqrt{\alpha'}. \tag{5}$$

The temperature does not depend on the energy: add energy and the slope — hence $T$ — does not budge. Its fixed value is the Hagedorn temperature,

$$\boxed{\,\frac{1}{\beta_H} = kT_H = \frac{1}{4\pi\sqrt{\alpha'}}\,} \tag{6}$$

Dimension check: with $\hbar=c=1$, $\alpha'$ is a length$^2$ = energy$^{-2}$, so $\sqrt{\alpha'}$ is an inverse energy and $kT_H$ is an energy. Good.

This ceiling is *low*. The first massive open-string level ($N^\perp = 2$) has rest energy $M = 1/\sqrt{\alpha'}$, and

$$\frac{kT_H}{1/\sqrt{\alpha'}} = \frac{1}{4\pi} \simeq \frac{1}{12.6}. \tag{7}$$

So the thermal energy at the ceiling is about a twelfth of a single string quantum: below $T_H$, essentially every massive string state sits far above the thermal scale and is barely excited.

## Closed strings: identical $T_H$

Redo the count for closed strings at rest. Their mass formula carries different factors of 2, and level matching ([[Level matching]]) forces $N^\perp = \bar N^\perp$:

$$M^2 = \frac{2}{\alpha'}\big(N^\perp + \bar N^\perp - 2\big) \simeq \frac{4}{\alpha'}N^\perp \quad\Longrightarrow\quad 2\sqrt{N^\perp} = \sqrt{\alpha'}\,E. \tag{8}$$

A closed string has independent left- and right-moving excitations, so the state count is a **product**, $\Omega = p_{24}(N^\perp)\,p_{24}(\bar N^\perp) = \big(p_{24}(N^\perp)\big)^2$, and its log doubles: $S = 2\cdot 4\pi k\sqrt{N^\perp} = 4\pi k\,(2\sqrt{N^\perp})$. Now use (8):

$$S = 4\pi k\,(2\sqrt{N^\perp}) = 4\pi k\sqrt{\alpha'}\,E. \tag{9}$$

The factor-of-2 in the mass relation and the factor-of-2 from doubling the entropy cancel, giving the **same** law (4) — hence the **same** $T_H$. (See the Exercise for the cancellation done factor-by-factor.)

## Why $T_H$ is a *limiting* temperature — the canonical view

The entropy argument gave a constant temperature but did not show what breaks above it. The partition function does. For highly excited strings the density of states as a function of mass is

$$\rho(M) \sim M^{-25/2}\,e^{\beta_H M}, \tag{10}$$

obtained by converting the level count (2) into a mass integral: with $N^\perp \simeq \alpha' M^2$, the refined partition asymptotic $p_{24}(N^\perp)\simeq \tfrac{1}{\sqrt2}(N^\perp)^{-27/4}e^{4\pi\sqrt{N^\perp}}$ becomes $\rho(M)$ via $p_{24}(N^\perp)\,dN^\perp = \rho(M)\,dM$, and $4\pi\sqrt{N^\perp} = 4\pi\sqrt{\alpha'}M = \beta_H M$. The exponential $e^{\beta_H M}$ is the exponential density of states; the $\beta_H$ in its rate is *literally* the inverse Hagedorn temperature.

A string in a box also carries center-of-mass momentum, so the one-string partition function sums the relativistic-particle partition function over the mass tower. For the relevant heavy states ($\beta M \gg 1$) that particle partition function in $d = 25$ space dimensions is

$$Z_{\rm particle}(M^2) \simeq V\left(\frac{M}{2\pi\beta}\right)^{25/2} e^{-\beta M}. \tag{11}$$

Multiplying $\rho(M)$ by $Z_{\rm particle}$ and integrating over mass, the power-law prefactors cancel exactly — the $M^{25/2}$ from translational momentum kills the $M^{-25/2}$ in $\rho$ — leaving the clean convergence question

$$Z_{\rm str}(\beta) \sim \int^\infty dM\; e^{(\beta_H - \beta)M}. \tag{12}$$

Now the boundary is sharp:

- $\beta > \beta_H$ ($T < T_H$): the exponent is negative, the integral converges — ordinary thermodynamics.
- $\beta = \beta_H$ ($T = T_H$): the integrand stops decaying, the integral diverges.
- $\beta < \beta_H$ ($T > T_H$): the exponent is positive, divergence is violent.

Carrying the constant prefactors through gives the explicit single-open-string result

$$Z_{\rm str} \simeq \frac{2^{11}}{\pi}\,V\,(kT_H)^{25}\,\frac{T_H}{T_H - T}, \qquad T \to T_H^-, \tag{13}$$

a simple pole at $T = T_H$: the free single-string partition function blows up as the temperature approaches the ceiling from below. Equivalently, the mean string energy $E_{\rm str} = -\partial_\beta \ln Z_{\rm str} \simeq 1/(\beta - \beta_H)$ diverges there — you cannot push a free string past $T_H$ because it soaks up unlimited energy at that fixed temperature.

Both routes say the same thing: an exponential density of states is equivalent to a limiting free-string temperature. Whenever $\rho(E)\sim e^{\beta_H E}$, the Boltzmann factor $e^{-\beta E}$ can only win for $\beta > \beta_H$; the convergence boundary sits exactly at $T_H = 1/(k\beta_H)$. What replaces the canonical ensemble above the ceiling is a physical question, not something this free-string calculation answers.

## Negative specific heat

The leading law (4) dropped the power-law prefactor in $p_{24}$. Keeping it exposes a genuinely strange subleading effect. With $N^\perp \simeq \alpha' E^2$,

$$\frac{S(E)}{k} = \ln p_{24}(\alpha' E^2) = \underbrace{4\pi\sqrt{\alpha'}\,E}_{=\,\beta_H E} \;-\; \frac{27}{2}\ln E + \text{const} + \cdots, \tag{14}$$

where the $-\tfrac{27}{2}\ln E$ comes from $\ln\big((N^\perp)^{-27/4}\big) = -\tfrac{27}{4}\ln(\alpha' E^2)$. Differentiating,

$$\beta(E) = \frac{\partial (S/k)}{\partial E} = \beta_H - \frac{27}{2E} + \cdots. \tag{15}$$

At any large but finite $E$, $\beta(E) < \beta_H$, so the microcanonical temperature $T(E)$ sits *above* $T_H$ and approaches it from above as $E\to\infty$. And since $\beta$ increases with $E$, $T$ **decreases** with $E$: $dT/dE < 0$, a **negative specific heat**. Adding energy makes a free string *colder*, not hotter — the opposite of everything ordinary. The leading lesson survives intact: $T_H$ is the asymptotic scale toward which the temperature settles, and where the usual canonical ensemble stops behaving.

## What $T_H$ physically means

$T_H$ is probably **not** a maximum temperature of nature. The more likely reading is a **phase transition**. Because entropy is linear in energy, dumping energy into the string system is "free" in entropy terms — the system happily absorbs it by growing a few very long strings rather than by heating many short modes (long strings are entropically favored). That is the string analog of a latent-heat transition: energy in, temperature stuck, until the system reorganizes.

There is also a genuine ensemble subtlety here. Ordinarily the microcanonical and canonical ensembles agree because the integrand $\Omega(E)e^{-\beta E}$ has a sharp saddle point. But with $\Omega(E)\sim e^{\beta_H E}$ the integrand is $\sim e^{(\beta_H - \beta)E}$ — a pure exponential with **no saddle point**. So the two ensembles need not give the same answer near $T_H$, and which one is physical is a modeling choice, not a theorem.

Everything above is the **free single string**. The multi-string thermodynamic phase, interactions near $T_H$, and the modern Hagedorn/deconfinement interpretation are beyond this note — but the free-string calculation already pins the scale and shows the ceiling is real.

## Open questions

- Is $T_H$ a true ceiling or a phase transition? The entropic argument (energy goes into long strings) favors a transition, but the free-string calculation alone cannot settle it — you need the interacting multi-string system.
- Canonical vs. microcanonical: with no saddle point they can disagree near $T_H$. Which ensemble is physical for a given problem?
- The open superstring's $T_H$ is larger by $\sqrt2$. Deriving that needs NS/R sectors and the GSO projection, so it belongs with the superstring material, not this bosonic note.

## Exercise

The note claims open and closed strings share the *same* $T_H$, with two factors of 2 conspiring to cancel. Verify this by carrying the factors explicitly. Starting from the closed-string inputs — mass relation $M^2 \simeq \tfrac{4}{\alpha'}N^\perp$ and state count $\Omega = \big(p_{24}(N^\perp)\big)^2$ — derive the closed-string entropy $S(E)$ and its $T_H$. Identify precisely which factor of 2 comes from the mass formula and which from the state count, and show they cancel. Then, as a sign check, confirm that if closed strings had *only one* set of movers (state count $p_{24}(N^\perp)$, not squared) while keeping the closed mass relation, $T_H$ would come out a factor of $2$ larger — i.e. the cancellation is not automatic.

> [!success]- Solution
> **Closed-string entropy.** The state count squares, so its log doubles:
> $$\frac{S}{k} = \ln\Omega = \ln\big(p_{24}(N^\perp)\big)^2 = 2\ln p_{24}(N^\perp) \simeq 2\cdot 4\pi\sqrt{N^\perp} = 4\pi\big(2\sqrt{N^\perp}\big).$$
> This is where the **first factor of 2 (from the state count)** enters — it turns $4\pi\sqrt{N^\perp}$ into $4\pi(2\sqrt{N^\perp})$.
>
> **Second factor of 2, from the mass relation.** The closed mass formula $M^2\simeq \tfrac{4}{\alpha'}N^\perp$ gives $M = \tfrac{2}{\sqrt{\alpha'}}\sqrt{N^\perp}$, i.e. $2\sqrt{N^\perp} = \sqrt{\alpha'}\,E$ (using $E=M$). Substitute this directly into the entropy:
> $$\frac{S}{k} = 4\pi\big(2\sqrt{N^\perp}\big) = 4\pi\sqrt{\alpha'}\,E.$$
> The bracket $2\sqrt{N^\perp}$ produced by the state count is *exactly* the combination that the mass relation sets equal to $\sqrt{\alpha'}E$. The two 2's cancel and we recover the open-string law $S = 4\pi k\sqrt{\alpha'}E$, hence
> $$\frac{1}{kT} = \frac{\partial(S/k)}{\partial E} = 4\pi\sqrt{\alpha'} \quad\Longrightarrow\quad kT_H = \frac{1}{4\pi\sqrt{\alpha'}},$$
> the same $T_H$ as for open strings.
>
> **Sign check.** Suppose the count were $p_{24}(N^\perp)$ (not squared), so $\tfrac{S}{k} = 4\pi\sqrt{N^\perp}$, while keeping the closed mass relation $2\sqrt{N^\perp} = \sqrt{\alpha'}E$, i.e. $\sqrt{N^\perp} = \tfrac{1}{2}\sqrt{\alpha'}E$. Then
> $$\frac{S}{k} = 4\pi\cdot\tfrac12\sqrt{\alpha'}E = 2\pi\sqrt{\alpha'}\,E \quad\Longrightarrow\quad \frac{1}{kT} = 2\pi\sqrt{\alpha'},\quad kT_H = \frac{1}{2\pi\sqrt{\alpha'}} = 2\cdot\frac{1}{4\pi\sqrt{\alpha'}}.$$
> Half the entropy slope means twice the temperature; the ceiling would rise by a factor of $2$. So the equality of open and closed $T_H$ genuinely relies on the state-count doubling canceling the factor of 2 in the closed mass relation — remove one and the match breaks.
