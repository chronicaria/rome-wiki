---
title: Open-string Fock space
number: "14.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, fock-space]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Build the states of one quantum open string: start from a momentum-labeled ground state, act with creation operators $a_n^{I\dagger}$, and read the excitation off with the number operator $N^\perp=\sum_{n\ge1} n\,a_n^{I\dagger}a_n^I$ — the same number that will set the mass.

## An infinite bag of oscillators

A quantized open string is an infinite bag of independent harmonic oscillators — one oscillator for each pair (mode number $n\ge1$, transverse direction $I$). Everything here is the bookkeeping of that bag:

- **A state is an occupation list.** Say how many quanta sit in each oscillator, and you have named the state completely. This is a *Fock space* — the same construction as photons in a box, just with more oscillators.
- **The center of mass is separate.** The string as a whole still flies through spacetime with some momentum; that momentum labels the ground state, so there is a whole continuum of ground states, one per momentum.
- **Each occupation list is a particle species.** One string, quantized, is not one particle — it is an entire tower of them.

Everything below is standard harmonic-oscillator machinery, run once per mode: $a_n^{I\dagger}$ raises, $a_n^I$ lowers, the ground state is annihilated by every lowering operator, and "how excited is this state?" is answered by a number operator.

## Ground states: one vacuum per momentum

The zero modes of the string are the same as those of a free point particle: the center-of-mass position/momentum pairs $(x_0^I,p^I)$ and $(x_0^-,p^+)$. Nothing oscillates in them, so they carry no excitation — but they do carry the string's overall momentum. We label the ground state by that conserved momentum:

$$|p^+,\vec p_T\rangle,\qquad \vec p_T=(p^2,\dots,p^{D-1}).$$

There is not *one* vacuum but a continuum of them, one for each center-of-mass momentum. This is the vacuum of a *single string*, not the vacuum of spacetime: a string in its lowest internal state, moving with definite momentum. (An actual localized string is a wavepacket, a superposition $\int dp^+\,d\vec p_T\,\psi(p^+,\vec p_T)\,|p^+,\vec p_T\rangle$ — a wrinkle we can ignore for counting states.)

Every positive mode annihilates them:

$$a_n^I|p^+,\vec p_T\rangle=0,\qquad n\ge1,\ I=2,\dots,D-1.$$

This equation is a definition, not a theorem: it selects the representation in which the positive modes $a_n^I$ act as lowering operators and the ground state sits at the bottom of every oscillator tower — the convention set up in [[Oscillator commutation relations]].

## The creation tower and the general state

The raising operators form a two-dimensional grid: mode number $n=1,2,3,\dots$ running down the rows, transverse direction $I=2,\dots,D-1$ running across the columns. (After [[Critical dimension and the spectrum]] fixes $D=26$, the columns become $I=2,\dots,25$, exactly $D-2=24$ of them.) A general basis state is built by hitting the ground state with any raising operators, any number of times:

$$|\lambda\rangle=\prod_{n=1}^{\infty}\prod_{I=2}^{D-1}\big(a_n^{I\dagger}\big)^{\lambda_{n,I}}\,|p^+,\vec p_T\rangle.$$

The non-negative integer $\lambda_{n,I}$ is the **occupation number**: how many quanta sit in the $(n,I)$ oscillator. Because all raising operators commute (that is $[a_m^{I\dagger},a_n^{J\dagger}]=0$), *the order of building doesn't matter* — the whole state is fixed by the list $\{\lambda_{n,I}\}$, nothing more. Requiring only finitely many $\lambda_{n,I}\neq0$ makes every $|\lambda\rangle$ a finite excitation; the span of all such lists is the infinite-dimensional **string Hilbert space**.

This is where "one string = many particles" becomes concrete. Each distinct occupation list is a genuinely different one-particle state — a different mass, a different spin content — so the single object we quantized describes infinitely many particle species at once.

## The number operator $N^\perp$

We need one number that measures "how excited" a state is. Define

$$N^\perp\equiv\sum_{n=1}^{\infty} n\,a_n^{I\dagger}a_n^I=\sum_{n=1}^{\infty}\alpha_{-n}^I\alpha_n^I$$

(transverse index $I$ summed; the second form uses $\alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}$, $\alpha_n^I=\sqrt n\,a_n^I$). The crucial feature is the **weight $n$**: the $(n,I)$ oscillator's quanta count $n$ each, not $1$ each. From the algebra $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$ one gets

$$[N^\perp,a_n^{I\dagger}]=n\,a_n^{I\dagger},\qquad [N^\perp,a_n^{I}]=-n\,a_n^{I}. \tag{1}$$

So each raising operator $a_n^{I\dagger}$ lifts the $N^\perp$ eigenvalue by its mode number $n$. A single $a_3^{I\dagger}$ contributes $3$ — the same as three separate $a_1^{I\dagger}$'s. This weighting is what makes $N^\perp$ the right object, and it is the single easiest thing to get wrong (see the exercise).

Because $N^\perp$ is written with all annihilators on the right, it kills the vacuum, $N^\perp|p^+,\vec p_T\rangle=0$. On a general basis state it is diagonal, with eigenvalue equal to the total weighted count:

$$N^\perp|\lambda\rangle=N_\lambda^\perp|\lambda\rangle,\qquad N_\lambda^\perp=\sum_{n=1}^\infty\sum_{I=2}^{D-1} n\,\lambda_{n,I}. \tag{2}$$

Read (2) as: add up, over every excited oscillator, its mode number times its occupation. For instance $N^\perp\big(a_3^{J\dagger}a_2^{I\dagger}|p^+,\vec p_T\rangle\big)=(3+2)\,a_3^{J\dagger}a_2^{I\dagger}|p^+,\vec p_T\rangle$: the eigenvalue is just the sum of the mode numbers present. This eigenvalue is what other books call the **level** $N$ — same object, and the reason "level matching" has its name. (The open string has only this one tower, so there is no second $\bar N^\perp$ to match it against; that is a closed-string story.)

$N^\perp$ earns its keep in the Hamiltonian: it enters through $L_0^\perp=\alpha'p^Ip^I+N^\perp$ (natural units, $\hbar=c=1$; see [[Transverse Virasoro operators]]), and it is *exactly* the quantity that sets the mass — the payoff worked out in [[Mass formula and excitation level]], where $\alpha'M^2=N^\perp-1$. Every rung of the excitation ladder is a rung of the mass tower.

## No ghosts: every state has positive norm

Bras are Hermitian conjugates of kets, and the ground states are orthonormal in the continuum sense:

$$\langle p'^+,\vec p_T'\,|\,p^+,\vec p_T\rangle=\delta(p'^+-p^+)\,\delta^{D-2}(\vec p_T'-\vec p_T). \tag{3}$$

To compute any overlap $\langle\lambda'|\lambda\rangle$, push the annihilators to the right until they hit the ground state and die, using $[a_m^I,a_n^{J\dagger}]=\delta_{mn}\delta^{IJ}$. Every commutator spent puts down a $+\delta^{IJ}$, never a minus sign: distinct occupation lists come out orthogonal, and every norm comes out positive — $\langle\lambda|\lambda\rangle=\prod_{n,I}\lambda_{n,I}!$ times the momentum deltas. Concretely, for $|\lambda'\rangle=a_1^{I\dagger}|p'^+,\vec p_T'\rangle$ and $|\lambda\rangle=a_1^{J\dagger}|p^+,\vec p_T\rangle$,

$$\langle\lambda'|\lambda\rangle=\langle p'^+,\vec p_T'|\,a_1^{I}a_1^{J\dagger}\,|p^+,\vec p_T\rangle=\delta^{IJ}\,\delta(p'^+-p^+)\,\delta^{D-2}(\vec p_T'-\vec p_T). \tag{4}$$

Positive definiteness is what light-cone gauge bought us. Only transverse (spacelike) oscillators act, so the metric contracting them is the Euclidean $\delta^{IJ}$, and no state can have negative norm. Contrast the manifestly covariant approach, which keeps a timelike oscillator $\alpha_n^0$: there the commutator carries $\eta^{00}=-1$ (mostly-plus signature), and the state $\alpha_{-1}^0|0;p\rangle$ — with $|0;p\rangle$ the covariant ground state of momentum $p^\mu$ — has negative norm, $\langle 0;p'|\alpha_1^0\alpha_{-1}^0|0;p\rangle\sim-\delta^D(p'-p)$. Such negative-norm states are called **ghosts**, and removing them is extra work. Light-cone gauge never lets them in — the trade we made was giving up manifest Lorentz invariance to get a clean Hilbert space.

## Time evolution

Each basis state evolves by the Schrödinger equation with the light-cone Hamiltonian $H=L_0^\perp-1$ (see [[Mass formula and excitation level]]):

$$e^{-i(L_0^\perp-1)\tau}\,|\lambda\rangle. \tag{5}$$

The $-1$ is the normal-ordering constant $a=-1$, fixed by Lorentz consistency in [[Light-cone Lorentz anomaly]] and applied in [[Critical dimension and the spectrum]]. Since $L_0^\perp-1=\alpha'p^Ip^I+(N^\perp-1)=\alpha'(p^Ip^I+M^2)=2\alpha'p^+p^-$ by the mass shell, and light-cone gauge set $X^+=2\alpha'p^+\tau$, the phase in (5) is exactly $p^-X^+$ — light-cone energy times light-cone time. Evolution in worldsheet time $\tau$ knows about the particle's mass precisely through $N^\perp$.

## Open questions

- The overlaps (3)–(4) carry a $\delta(0)$ from the momentum delta functions, so $\langle\lambda|\lambda\rangle$ is formally infinite. It is harmless for *counting* states (integrate against wavepackets), but this note does not track how it behaves in genuine amplitude computations.
- Here the order of building the tower never matters because all $a^\dagger$ commute. In the superstring, fermionic oscillators anticommute and order *will* carry a sign — a flag for later modules.

## Exercise

The level, not the count. At excitation level $N^\perp=3$, write down two basis states built from *different numbers* of creation operators that nonetheless share the same $N^\perp$ eigenvalue, and verify the eigenvalue directly from the algebra $[N^\perp,a_n^{I\dagger}]=n\,a_n^{I\dagger}$. Then say in one line why $N^\perp$ is not just "count the creation operators."

> [!success]- Solution
> Take
> $$|A\rangle=a_3^{I\dagger}|p^+,\vec p_T\rangle\quad(\text{one creation operator}),\qquad |B\rangle=a_1^{I\dagger}a_1^{J\dagger}a_1^{K\dagger}|p^+,\vec p_T\rangle\quad(\text{three}).$$
> Apply $N^\perp$ using (1). For $|A\rangle$: since $N^\perp|p^+,\vec p_T\rangle=0$,
> $$N^\perp a_3^{I\dagger}|p^+,\vec p_T\rangle=[N^\perp,a_3^{I\dagger}]|p^+,\vec p_T\rangle=3\,a_3^{I\dagger}|p^+,\vec p_T\rangle,$$
> so $N^\perp_A=3$. For $|B\rangle$, commute $N^\perp$ through all three operators; each $a_1^{\dagger}$ contributes its mode number $1$:
> $$N^\perp a_1^{I\dagger}a_1^{J\dagger}a_1^{K\dagger}|p^+,\vec p_T\rangle=(1+1+1)\,a_1^{I\dagger}a_1^{J\dagger}a_1^{K\dagger}|p^+,\vec p_T\rangle,$$
> so $N^\perp_B=3$. Both sit at level $3$ despite $|A\rangle$ having one quantum and $|B\rangle$ having three.
>
> Why counting fails: $N^\perp$ weights each quantum by its **mode number** $n$, not by $1$ — it sums $\sum_n n\,\lambda_{n,I}$, not $\sum_n \lambda_{n,I}$. A single high-mode quantum ($n=3$) carries as much level as three low-mode quanta ($n=1$). Equivalently, $N^\perp$ is the total *energy* of the oscillator bag in units where mode $n$ has frequency $n$, not the total particle number. (This degeneracy at fixed $N^\perp$ is exactly the multiplicity that populates each mass level in [[Critical dimension and the spectrum]].)
