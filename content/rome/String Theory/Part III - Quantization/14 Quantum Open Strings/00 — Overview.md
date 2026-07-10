---
title: 00 — Overview
number: "14.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, quantum-open-strings]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Quantize the open bosonic string in light-cone gauge, turn its oscillation modes into creation/annihilation operators, and read off the particle spectrum — a tachyon, then a photon — with $D=26$ forced by Lorentz invariance.

## From standing waves to particles

A classical string can wiggle in infinitely many standing-wave patterns. Quantize each pattern and it becomes a harmonic oscillator; excite those oscillators and you get **an infinite tower of particles from a single string**. The algebra alone — no extra input — dictates where the tower starts: a tachyon, then a photon. And the construction respects special relativity only in $26$ spacetime dimensions.

## Why this module matters

This is the payoff of Part III. The classical chapters taught us how a string moves; now we promote its wiggles to quantum operators and watch three things fall out that we never put in:

1. **A discrete tower.** The classical string had a continuous range of masses. Quantization makes the spectrum evenly spaced: $\alpha' M^2 = -1, 0, 1, 2, \dots$ (natural units, $\hbar=c=1$, throughout). It is the same discreteness that gives a single quantum oscillator its ladder of energy levels, applied one string mode at a time.
2. **A photon for free.** At the first excited level a **massless vector particle** appears — a photon — even though we started from the Nambu–Goto action, which contains no electromagnetism. The string didn't know about light; light was hiding in its lowest genuine excitation.
3. **Spacetime dimension as a prediction.** Demanding that the quantum theory still respect special relativity **forces $D=26$** and the mass shift $a=-1$. The number of spacetime dimensions stops being an assumption and becomes an output of consistency.

The method is light-cone gauge. Rather than quantize all $D$ coordinates and fight the negative-norm "ghost" states a naive covariant quantization produces, we solve the constraints classically first, keep only the $D-2$ physical transverse oscillators $\alpha_n^I$, and quantize those. The resulting Hilbert space is manifestly positive-norm — ghost-free. The bill comes due exactly once: singling out two special directions makes Lorentz invariance no longer obvious, so it must be checked by hand, and that check is precisely what pins $D=26$ and $a=-1$.

## The chain of reasoning

The module is a single argument in seven links. Each link is one sublesson; the overview is the map.

- 14.1 [[Oscillator commutation relations]] — promote the mode amplitudes to operators: $[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}$, rescaled to canonical ladder operators $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$. *Each string mode is now a harmonic oscillator.*
- 14.2 [[Open-string Fock space]] — stack creation operators $a_n^{I\dagger}$ on momentum ground states $|p^+,\vec p_T\rangle$ to build the state tower; the number operator $N^\perp=\sum_{n\ge1} n\,a_n^{I\dagger}a_n^I$ counts total excitation. *One string, infinitely many particle species.*
- 14.3 [[Transverse Virasoro operators]] — the modes $L_n^\perp=\tfrac12\sum_p\alpha_{n-p}^I\alpha_p^I$ package the constraints; $L_0^\perp$ has an ordering ambiguity, and the algebra $[L_m^\perp,L_n^\perp]$ acquires a central term $\propto (D-2)$. *This central term is where the dimension will enter.*
- 14.4 [[Normal-ordering constant for open strings]] — ordering $L_0^\perp$ leaves a zero-point constant $a=\tfrac12(D-2)\sum_{p\ge1} p$; a cutoff extracts its finite part $a=-(D-2)/24$. *The divergent sum has a definite finite remnant, honestly regularized — not naive arithmetic.*
- 14.5 [[Mass formula and excitation level]] — combine the above into $\alpha' M^2 = N^\perp + a$: mass depends only on internal excitation, and the shift $a$ decides where the tower sits. *The transverse-momentum dependence cancels, as any true rest mass must.*
- 14.6 [[Light-cone Lorentz anomaly]] — the boost commutator $[M^{-I},M^{-J}]$ must vanish; it does only when $1-\tfrac{D-2}{24}=0$ and $\tfrac{D-2}{24}+a=0$. *One closure demand fixes $D=26$ and $a=-1$ at once.*
- 14.7 [[Critical dimension and the spectrum]] — feed $a=-1$, $D=26$ back in and tabulate the first three levels: tachyon, photon, massive tensor. *Where the whole argument lands.*

## The payoff, spelled out

Once the anomaly forces $a=-1$, the mass formula reads

$$\boxed{\alpha' M^2 = N^\perp - 1.}$$

The downward shift by exactly one unit does all the work: it drags the level-1 states — naively massive — down to $M^2=0$, **manufacturing a photon**. Read off the bottom of the tower:

| $N^\perp$ | $\alpha' M^2 = N^\perp - 1$ | states ($D=26$) | particle |
|:---:|:---:|:---:|:---|
| $0$ | $-1$ | $1$ | tachyon (unstable scalar) |
| $1$ | $0$ | $24$ | **photon** (massless vector) |
| $2$ | $+1$ | $324$ | massive tensor |

The tachyon's negative $M^2$ is not faster-than-light nonsense: it means the scalar sits at a *maximum* of its potential, so the vacuum is unstable — a defect the bosonic string carries and the superstring later removes. The photon is the miracle. The massive tower keeps climbing, the seed of a Regge trajectory.

A guitar string is the right mental model: a fundamental and its overtones, each independently excitable, with quantization turning every overtone into a particle species. The relativistic string adds one twist — quantum mechanics lowers the whole ladder by one unit, so the lowest genuine overtone lands at exactly zero mass, a photon, and the shift is consistent with relativity only in $26$ dimensions.

## Open questions

- The overview asserts the results; the load-bearing derivations live in the sublessons, above all 14.6 [[Light-cone Lorentz anomaly]] (why $D=26$) and 14.4 [[Normal-ordering constant for open strings]] (why $a=-1$). Read those before trusting the table.
- *Why* the superstring shifts the critical dimension to $D=10$ and removes the tachyon is the natural next question — worldsheet fermions change the zero-point sum. Beyond this module.

## Exercise

Reassemble the module's headline results from scratch. Given the mass formula $\alpha' M^2 = N^\perp + a$ and the two consistency equations from the boost commutator,

$$1-\frac{D-2}{24}=0,\qquad \frac{D-2}{24}+a=0,$$

(a) solve for $D$ and $a$; (b) list the level-0, level-1, and level-2 states built from $\alpha_{-n}^I$ acting on $|p^+,\vec p_T\rangle$, give $\alpha' M^2$ for each, and count the states; (c) explain in one sentence why the level-1 states behave like a photon rather than a massive vector.

> [!success]- Solution
> **(a)** The first equation gives $\tfrac{D-2}{24}=1$, so $D-2=24$ and $\boxed{D=26}$. Substituting into the second: $a=-\tfrac{D-2}{24}=-\tfrac{24}{24}=\boxed{-1}$. Hence $\alpha' M^2 = N^\perp - 1$.
>
> **(b)** With $D-2=24$ transverse directions $I=2,\dots,25$:
>
> | level | state(s) | $\alpha' M^2$ | count |
> |:---:|:---|:---:|:---:|
> | $N^\perp=0$ | $\lvert p^+,\vec p_T\rangle$ | $-1$ | $1$ |
> | $N^\perp=1$ | $\alpha_{-1}^I\lvert p^+,\vec p_T\rangle$ | $0$ | $24$ |
> | $N^\perp=2$ | $\alpha_{-1}^I\alpha_{-1}^J\lvert p^+,\vec p_T\rangle,\ \alpha_{-2}^I\lvert p^+,\vec p_T\rangle$ | $+1$ | $324$ |
>
> Counts: level 0 is the single ground state. Level 1 has one state per transverse direction, $D-2=24$. Level 2 splits into the symmetric pair $\alpha_{-1}^I\alpha_{-1}^J$ (symmetric because the creation operators commute), giving $\tfrac12(D-2)(D-1)=\tfrac12\cdot24\cdot25=300$, plus $\alpha_{-2}^I$ giving $D-2=24$; total $324=\tfrac12(D-2)(D+1)=\tfrac12\cdot24\cdot27$.
>
> **(c)** The $24$ level-1 states carry a single *transverse* vector index and so form an $SO(D-2)$ vector — exactly the polarization count of a **massless** photon, which has no rest frame and thus only $D-2$ physical polarizations. A massive vector would need $D-1=25$ states to fill an $SO(D-1)$ rest-frame multiplet; there are only $24$, so these states cannot be massive. The mass shift $a=-1$ delivers precisely $\alpha' M^2 = 1 + a = 0$, consistent with masslessness.
