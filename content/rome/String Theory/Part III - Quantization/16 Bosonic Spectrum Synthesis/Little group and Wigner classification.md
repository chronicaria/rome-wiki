---
title: Little group and Wigner classification
number: "16.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, representation-theory]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A particle's spin is not extra data attached by hand — it is a representation of the *little group*, the subgroup of Lorentz transformations that fix the particle's momentum: $SO(D-1)$ for massive states, $SO(D-2)$ for massless ones. This is the dictionary that reads "one transverse index" as photon and "two transverse indices" as graviton $\oplus$ $B$-field $\oplus$ dilaton, without ever leaving light-cone gauge.

## Fix the momentum, ask what survives

We work in natural units ($\hbar=c=1$) with mostly-plus signature, so a physical particle of mass $M$ has $p^2=p_\mu p^\mu=-M^2$.

Fix a particle's momentum $p^\mu$ and ask which Lorentz transformations leave it unchanged. Those form a group — the little group $G_p$. Everything else about the particle, its spin and its polarizations, must be labeled by a representation of $G_p$: a Lorentz transformation that fixes $p$ sends states of momentum $p$ to other states of the same momentum, so $G_p$ acts *inside* the fixed-$p$ multiplet, shuffling polarizations among themselves without touching the momentum. The number and pattern of polarizations is exactly a $G_p$-representation. Spin content is little-group representation — that is Wigner's classification.

The whole subject splits on one question about $p$: *can the particle be brought to rest?*

- **Massive** ($p^2=-M^2<0$): yes. In the rest frame only spatial rotations survive → $SO(D-1)$.
- **Massless** ($p^2=0$): no — no frame has zero energy. The stabilizer is subtler, $ISO(D-2)$, and its finite-spin representations reduce to $SO(D-2)$.

## Massive states: go to the rest frame

A massive particle satisfies $p^2=-M^2$ with $M>0$. Boost to the rest frame,
$$
p^\mu=(M,0,\dots,0).
$$
Which Lorentz transformations fix this? Any boost changes the energy component, so none survive; only rotations of the $D-1$ spatial axes leave $(M,\mathbf 0)$ untouched. The little group is
$$
G_p = SO(D-1).
$$
A massive particle has an honest rest frame, and its spin is whatever $SO(D-1)$ representation its internal states fill out — the ordinary rotations of space, just in $D-1$ spatial dimensions. A massive vector, for instance, needs all $D-1$ components.

## Massless states: no rest frame, so the count drops

A massless particle has $p^2=0$ and can never be brought to rest — there is no frame where its energy vanishes. Pick a standard lightlike momentum moving along one axis, with light-cone components
$$
p^+>0,\qquad p^-=0,\qquad p^I=0\ \ (I=2,\dots,D-1).
$$
The transverse directions $I$ are the $D-2$ axes orthogonal to the direction of motion. Rotating those fixes $p$, giving an $SO(D-2)$. But that is not the whole stabilizer: there are also $D-2$ "parabolic" transformations, each mixing the two lightlike directions with one transverse axis, that leave this particular null $p^\mu$ invariant. Together they form
$$
G_p = ISO(D-2) = SO(D-2)\ltimes\mathbb R^{D-2},
$$
the *Euclidean group* of the transverse plane: rotations $SO(D-2)$ plus $D-2$ translation-like generators.

The non-compact factor is the crux. $ISO(D-2)$ is non-compact, exactly like the Poincaré group itself, and just as the momentum $p^\mu$ (the eigenvalue of translations) ranges continuously, the eigenvalues of these $\mathbb R^{D-2}$ generators could in principle be continuous too. Wigner found that this branch gives a "continuous-spin" particle with infinitely many polarizations. Nature — and perturbative string theory — takes the other branch: on ordinary finite-spin states the translation-like generators act *trivially* (zero eigenvalue), leaving only the rotational $SO(D-2)$. Physical massless polarizations are therefore classified by
$$
\boxed{\;SO(D-2)\;}.
$$

Setting the translations to zero is not an arbitrary declaration; it is the representation-theory face of *gauge symmetry*. A covariant description packages the same particle into a field with extra components — $A_\mu$ has $D$ of them, not $D-2$ — and on polarization vectors the translation-like generators act by shifting along the momentum, $\epsilon^\mu\to\epsilon^\mu+\alpha\,p^\mu$. A shift $\delta\epsilon_\mu\propto p_\mu$ is precisely a gauge transformation, $A_\mu\to A_\mu+\partial_\mu\lambda$ for the photon and $h_{\mu\nu}\to h_{\mu\nu}+\partial_\mu\xi_\nu+\partial_\nu\xi_\mu$ for the graviton. Demanding trivial action is the statement that gauge-equivalent polarizations describe one physical state. Light-cone gauge does the removal up front, building only the $D-2$ transverse states, which is why the string never shows you a gauge symmetry — only its physical shadow.

A massless vector therefore has exactly $D-2$ physical polarizations, versus $D-1$ for a massive vector; the missing polarization is the would-be longitudinal mode that gauge invariance eats. In $D=26$ this is $24$ — matching the $24$ transverse open-string oscillators $\alpha_{-1}^I$.

## Reading the string spectrum

Now the classification does its job. Each oscillator $\alpha_{-1}^I$ carries one transverse index $I=2,\dots,D-1$ and so transforms as the vector $\mathbf{D-2}$ of $SO(D-2)$. At $D=26$ the first excited level sits exactly at $M^2=0$, so $SO(D-2)$ is the right little group to organize it.

**Open string — one index, one vector:**
$$
\alpha_{-1}^I|0;p\rangle,\qquad I=2,\dots,D-1,
$$
with $|0;p\rangle$ the light-cone Fock ground state $|p^+,\vec p_T\rangle$. One transverse index is the vector $\mathbf{D-2}$, which is the physical polarization content of a massless spin-1 field: the **photon** (see [[Photon from open strings]]).

**Closed string — two indices, a tensor product:**
$$
\bar\alpha_{-1}^I\,\alpha_{-1}^J|0;p\rangle
\ \in\ \mathbf{D-2}\otimes\mathbf{D-2}\quad\text{of }SO(D-2).
$$
A rank-2 transverse tensor is reducible. Split it by symmetry and trace into irreducible $SO(D-2)$ pieces:
$$
\mathbf{D-2}\otimes\mathbf{D-2}
=\underbrace{(\text{symmetric traceless})}_{\text{spin-2}}
\ \oplus\ \underbrace{(\text{antisymmetric})}_{\text{2-form}}
\ \oplus\ \underbrace{(\text{trace})}_{\text{scalar}},
$$
with dimensions
$$
\underbrace{\tfrac{(D-2)(D-1)}{2}-1}_{\text{sym. traceless}},\qquad
\underbrace{\tfrac{(D-2)(D-3)}{2}}_{\text{antisym.}},\qquad
\underbrace{1}_{\text{trace}},
$$
summing to $(D-2)^2$, the full tensor product — a good check. Each piece (the trace removed from the symmetric part, the antisymmetric block) is separately $SO(D-2)$-invariant, which is why the split lands on genuine irreducibles rather than an arbitrary regrouping.

For $D=26$:
$$
\tfrac{24\cdot25}{2}-1=299,\qquad
\tfrac{24\cdot23}{2}=276,\qquad
1,\qquad(299+276+1=576=24^2).
$$
These are the polarization counts of the **graviton** (symmetric traceless, massless spin-2), the **Kalb–Ramond 2-form** $B_{\mu\nu}$ (antisymmetric), and the **dilaton** (scalar). Same machine as the photon, one more index because the closed string has two oscillator towers instead of one (see [[Graviton from closed strings]]).

A particle's spin is not chosen; its momentum chooses. Massive means it can be stopped, so all the rotations of space act and the multiplet is fat; massless means it cannot, so only the rotations transverse to its flight survive and the multiplet is exactly two components leaner, the missing modes being what gauge invariance throws away. Count the transverse indices on a string state and you have read off which particle it is.

## Open questions

- The continuous-spin representations of the massless little group are perfectly good unitary representations, yet they never appear in the perturbative string spectrum; the string only produces the finite-spin (trivial-translation) branch.
- The claim that an *interacting* massless spin-2 particle must be gravity is a dynamical theorem (the Feynman–Weinberg bootstrap), one level beyond this kinematic little-group classification; see [[Graviton from closed strings]].
- In light-cone gauge the gauge redundancy is invisible because we build only physical states; its covariant reappearance ($A_\mu\to A_\mu+\partial_\mu\lambda$, diffeomorphisms) is deferred to the covariant/BRST treatment.

## Exercise

Suppose the first excited open-string level in $D$ dimensions were *massive*. Using only the little-group logic of this note: how many physical polarizations would a massive vector need, and what goes wrong when you try to fit the $D-2$ transverse states $\alpha_{-1}^I|0;p\rangle$ into that multiplet? Use this to explain why Lorentz invariance forces the first open level to be massless — and how, through the mass formula, that fixes $D=26$.

> [!success]- Solution
> A **massive** vector in $D$ dimensions is a vector representation of the little group $SO(D-1)$, so it needs $D-1$ physical polarizations (one for each spatial axis in the rest frame).
>
> The string's first open level supplies only $\alpha_{-1}^I|0;p\rangle$ with $I=2,\dots,D-1$, i.e. exactly $D-2$ states — a vector of $SO(D-2)$, not $SO(D-1)$. There is no way to assemble $D-2$ states into a complete $SO(D-1)$ vector multiplet: one polarization is simply missing, and on an incomplete multiplet the Lorentz transformations cannot act consistently.
>
> The only escape is for these states to be **massless**: the little group drops to $SO(D-2)$, for which $D-2$ vector components is exactly a complete multiplet. Lorentz invariance leaves no choice — the first excited open level must sit at $M^2=0$.
>
> Feeding this into the open mass formula $\alpha' M^2 = N^\perp + a$ at $N^\perp=1$ gives $0=1+a$, so $a=-1$; combined with the regularized zero-point value $a=-\frac{D-2}{24}$ this forces $D=26$ (see [[Critical dimension D=26]]). The representation-theory count of this note is the lever that fixes the critical dimension.
