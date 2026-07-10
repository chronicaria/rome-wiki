---
title: A string is many oscillators
number: "3.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillator-algebra]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A vibrating string is a chord of independent harmonics, and each harmonic, once quantized, is literally one harmonic oscillator with its own $a_n,a_n^\dagger$ — so a quantum string is a tower of oscillators whose states are occupation lists: how many quanta in each harmonic. Those excitation patterns are the particle spectrum: the photon, the graviton, and the tachyon are different ways of plucking one string.

## Harmonics are masses on springs

Pluck a guitar string and you hear a fundamental plus overtones. Those harmonics are the string's **normal modes**: shapes that oscillate on their own without dragging the others along. A general vibration is a superposition of them, and each mode oscillates at its own frequency, sinusoidally, forever — each mode behaves exactly like a mass on a spring.

That one observation carries the entire note. A mass on a spring, quantized, is [[Ladder operators|the harmonic oscillator]]. A quantized string is therefore **infinitely many copies of the oscillator we already solved**, one per harmonic, and everything from that module — the ladder, the number operator, the counting — comes along for free with an extra label $n$.

The mathematical engine underneath is diagonalization. A coupled quadratic system $H=\tfrac12 p^\top p+\tfrac12 q^\top Kq$ decouples into independent oscillators in the eigenbasis of $K$. A string is the $\infty$-dimensional version: the "matrix" is the spatial operator $-\partial_\sigma^2$, its eigenfunctions are the Fourier harmonics, boundary conditions pick the modes, and orthogonality decouples them.

## 1. A wave equation splits into normal modes

Take the simplest string-like model: one transverse displacement $X(\sigma,\tau)$ on $0\le\sigma\le\pi$, wave speed $1$,

$$ \partial_\tau^2X-\partial_\sigma^2X=0. $$

Acceleration in time equals curvature along the string — the restoring force is bending. For free (Neumann) endpoints the slope vanishes at each end,

$$ \partial_\sigma X(0,\tau)=\partial_\sigma X(\pi,\tau)=0, $$

the open-string statement of "no transverse force pulling on a free end." Separating variables $X=q(\tau)S(\sigma)$ turns the PDE into

$$ \frac{\ddot q(\tau)}{q(\tau)}=\frac{S''(\sigma)}{S(\sigma)}=-n^2, $$

where the shared value must be a constant because the left side depends only on $\tau$ and the right only on $\sigma$. The endpoint condition $S'(0)=S'(\pi)=0$ rules out a positive separation constant (real exponentials cannot have vanishing slope at both ends) and selects cosines with integer $n$:

$$ S_n(\sigma)=\cos(n\sigma),\qquad n=0,1,2,\dots $$

so the general solution is a Fourier cosine sum

$$ X(\sigma,\tau)=x_0+p_0\tau+\sum_{n\ge1}q_n(\tau)\cos(n\sigma),\qquad \ddot q_n+n^2q_n=0. $$

The $n=0$ piece $x_0+p_0\tau$ is the center of mass sliding freely; every $q_n$ with $n\ge1$ obeys $\ddot q_n=-n^2q_n$ — **a harmonic oscillator of frequency $\omega_n=n$.** The harmonics decouple because the cosines are orthogonal:

$$ \int_0^\pi \cos(n\sigma)\cos(m\sigma)\,d\sigma=\frac{\pi}{2}\,\delta_{mn}\qquad(n,m\ge1). \tag{1}$$

To see the oscillators in the *energy*, feed the mode sum into the string's quadratic Hamiltonian ($T_0$ is the tension),

$$ H=\frac{T_0}{2}\int_0^\pi d\sigma\left((\partial_\tau X)^2+(\partial_\sigma X)^2\right). $$

By (1) all cross-terms between different modes integrate to zero, leaving the free center-of-mass kinetic energy $\tfrac{T_0\pi}{2}p_0^2$ plus a diagonal sum. Rescaling to unit mass via $Q_n=\sqrt{T_0\pi/2}\,q_n$ and $P_n=\dot Q_n$ (each mode's integral left a coefficient $\tfrac{T_0\pi}{4}$, and this rescaling normalizes it to $\tfrac12$),

$$ H_{\text{modes}}=\sum_{n\ge1}\left(\tfrac12P_n^2+\tfrac12 n^2 Q_n^2\right). $$

Each summand is *identically* the oscillator Hamiltonian of [[Ladder operators]] with $m=1$, $\omega=n$. This is the whole mechanism: **boundary conditions choose the Fourier modes, orthogonality decouples them, and each decoupled amplitude is one oscillator.**

For a **closed** string, periodicity $\sigma\sim\sigma+2\pi$ replaces cosines with running waves $e^{in\sigma}$, which split into independent left- and right-moving towers — the same boundary-condition logic as [[Quantized momentum from boundary conditions]], now producing two oscillators per mode number instead of one.

## 2. Quantize each mode independently

Promote each mode's $Q_n,P_n$ to operators with one canonical commutator apiece — the Kronecker delta encoding that distinct harmonics are independent degrees of freedom:

$$ [Q_n,P_m]=i\hbar\,\delta_{nm},\qquad [Q_n,Q_m]=[P_n,P_m]=0. $$

Define ladder operators mode by mode, copying [[Ladder operators]] with $\omega_n=n$:

$$ a_n=\sqrt{\tfrac{n}{2\hbar}}\left(Q_n+\tfrac{i}{n}P_n\right),\qquad
a_n^\dagger=\sqrt{\tfrac{n}{2\hbar}}\left(Q_n-\tfrac{i}{n}P_n\right). $$

The same one-line commutator computation, now carrying an index, gives one independent oscillator per mode,

$$ [a_n,a_m^\dagger]=\delta_{nm},\qquad [a_n,a_m]=[a_n^\dagger,a_m^\dagger]=0, $$

and the Hamiltonian becomes a sum of number operators, each charging $\hbar n$ per quantum:

$$ \boxed{\;H_{\text{modes}}=\sum_{n\ge1}\hbar n\left(N_n+\tfrac12\right)\;}\qquad N_n=a_n^\dagger a_n. $$

Every mode drops in its own zero-point energy $\tfrac12\hbar n$ — harmless for finitely many modes, but the string has infinitely many, and $\tfrac12\sum_{n\ge1}\hbar n$ diverges. It is tamed by **normal-ordering** (dropping the additive constant) and then fixing the leftover finite shift by consistency — the origin of the famous $-1$ in the mass formula below.

A real string vibrates in several transverse directions at once, so each mode also carries a polarization label $I$ (the transverse spatial directions), giving operators $a_n^I$. String theory prefers a rescaled normalization,

$$ \alpha_n^I=\sqrt n\,a_n^I,\qquad \alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}\qquad(n\ge1), $$

which turns the unit commutator into the level-weighted form

$$ [\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\,\delta_{m+n,0}. \tag{2}$$

This is the *same* algebra — the $\sqrt n$ just moves the mode number from the Hamiltonian into the commutator (positive $m$ = annihilator, negative $m$ = creator). On transverse indices the metric contributes the plain $\delta^{IJ}$; on full spacetime indices it would be $\eta^{\mu\nu}$ (mostly-plus signature), whose timelike entry flips the sign of one commutator and creates negative-norm states — exactly the problem light-cone gauge sidesteps by keeping only the transverse $I$.

## 3. Excitation numbers become particles

A string state is an occupation list — how many quanta sit in each mode $n$ and each polarization $I$:

$$ |\{\lambda_{n,I}\}\rangle
=\prod_{n\ge1}\prod_I\frac{(a_n^{I\dagger})^{\lambda_{n,I}}}{\sqrt{\lambda_{n,I}!}}\,|0;p\rangle, $$

where $|0;p\rangle$ is the oscillator vacuum carrying center-of-mass momentum $p$ (the $n=0$ mode). The physically decisive quantity is the **weighted level**

$$ N^\perp=\sum_{n\ge1}\sum_I n\,\lambda_{n,I}, $$

weighted by $n$ because a quantum in mode $n$ costs $n$ times the energy of a quantum in mode $1$. So one quantum of the second harmonic and two quanta of the first sit at the *same* level:

$$ \frac{(a_1^{I\dagger})^2}{\sqrt{2}}|0;p\rangle,\qquad a_2^{I\dagger}|0;p\rangle
\qquad\text{both have } N^\perp=2. $$

Different states, same level — degeneracy appears immediately, with no string dynamics yet invoked. Counting how many patterns sit at each level is the state-counting problem of [[Density of states|Partition Functions and State Counting]].

Light-cone open-string quantization fixes the finite normal-ordering shift and hands over the mass formula

$$ \alpha' M^2=N^\perp-1, \tag{3}$$

where $\alpha'$ sets the length scale and the $-1$ is the normal-ordering constant $a$, pinned to $-1$ by Lorentz invariance at $D=26$. The derivation lives in [[Mass formula and excitation level]] and [[Critical dimension and the spectrum]], but this module's input is already visible: **mass is set by oscillator occupation.** Reading off (3):

- **Ground state** $|0;p\rangle$: $N^\perp=0$, so $\alpha'M^2=-1$. Negative mass-squared — the open-string **tachyon**, the signal that this bosonic vacuum is unstable.
- **First excitation** $\alpha_{-1}^I|0;p\rangle$: $N^\perp=1$, so $M^2=0$ — a **massless vector**, one quantum per transverse direction. This is the **photon**.
- **Closed-string first matched excitation** $\alpha_{-1}^I\bar\alpha_{-1}^J|0;p\rangle$: one right-mover *and* one left-mover (the closed string has two towers). Its polarization tensor splits into symmetric-traceless + antisymmetric + trace — the **graviton, the $B$-field, and the dilaton**.

The last item is the headline of string theory. A graviton is a *massless two-index* state. The open string can build two-index states — $\alpha_{-1}^I\alpha_{-1}^J|0;p\rangle$ — but only at level $2$, where (3) makes them massive; the closed string takes one index from each tower at one unit apiece, and its mass formula makes exactly that state massless. Gravity lives on closed strings. And because every excitation of one string is a different particle, a single string is secretly an entire particle spectrum.

A quantum string, then, is a bundle of independent harmonic oscillators, one per harmonic and polarization; a state is a choice of how many quanta to put in each; and each excitation pattern is a different elementary particle — pluck the string one way for a photon, another way for a graviton.

## Open questions

- The relativistic string's actual wave equation, constraints, and the light-cone gauge that produces the normalization in (2) are derived later in [[Mode expansions in light-cone gauge]] and [[Oscillator commutation relations]]. This note proves the oscillator mechanism in the cleaner quadratic wave model.
- The value of the normal-ordering constant ($a=-1$) and the critical dimension $D=26$ are not inputs here — they are forced by Lorentz invariance in [[Critical dimension and the spectrum]] and re-derived via CFT in [[Two roads to D = 26]].
- $\hbar$ stays explicit throughout this note; the rescaled commutator (2) is $\hbar$-free automatically because $a_n$ is dimensionless. The quoted mass formula (3) lives in downstream natural units $\hbar=c=1$, with $\alpha'$ carrying the dimensions.

## Exercise

The closed string has *two* independent oscillator towers ($\alpha$, $\bar\alpha$) instead of the open string's one; its level operator is $N^\perp+\bar N^\perp$, with the physical constraint $N^\perp=\bar N^\perp$ ("level matching"), and its mass formula is

$$ \tfrac{\alpha'}{4}\,M^2 = N^\perp - 1 \quad(=\bar N^\perp-1). $$

**(a)** Find $\alpha' M^2$ for the closed-string ground state $|0;p\rangle$ and for the first matched excitation $\alpha_{-1}^I\bar\alpha_{-1}^J|0;p\rangle$. **(b)** The closed-string formula differs from the open-string (3) by a factor of $4$: where does that factor come from, in one sentence? **(c)** Level matching forbids the state $\alpha_{-1}^I|0;p\rangle$ (one right-mover, no left-mover). Why must a closed-string state have $N^\perp=\bar N^\perp$?

> [!success]- Solution
> **(a)** Ground state: $N^\perp=\bar N^\perp=0$, so $\tfrac{\alpha'}{4}M^2=-1$, giving $\alpha'M^2=-4$ — the closed-string tachyon, four times more negative than the open one. First matched excitation: the $\alpha_{-1}^I$ gives $N^\perp=1$ and the $\bar\alpha_{-1}^J$ gives $\bar N^\perp=1$, so $\tfrac{\alpha'}{4}M^2=1-1=0$, i.e. $M^2=0$ — **massless**. This is the graviton/$B$-field/dilaton multiplet, consistent with gravity being long-range.
>
> **(b)** The full closed-string formula is $M^2=\frac{2}{\alpha'}\left(N^\perp+\bar N^\perp-2\right)$, and level matching collapses it to $\frac{4}{\alpha'}(N^\perp-1)$: one factor of $2$ comes from adding the two towers' levels, the other from the closed string's zero-mode normalization ($\alpha_0^I=\sqrt{\alpha'/2}\,p^I$ versus the open string's $\sqrt{2\alpha'}\,p^I$), which traces to the doubled range $\sigma\in[0,2\pi]$. (Open-string endpoints reflect left-movers into right-movers, which is why the open string has a single tower to begin with.)
>
> **(c)** A closed string's loop has no physical origin — the point $\sigma=0$ is an arbitrary label. Nothing may depend on where you start labeling, so rigid shifts $\sigma\to\sigma+c$ must leave physical states invariant. The generator of that shift is $N^\perp-\bar N^\perp$ (the two towers rotate with opposite phase), so invariance forces $N^\perp=\bar N^\perp$. A lone $\alpha_{-1}^I|0;p\rangle$ has $N^\perp=1$, $\bar N^\perp=0$ and is thrown out.
