---
title: Photon from open strings
number: "16.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, photon]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Excite one transverse oscillator on the open-string vacuum and you get a massless state with a single spacetime direction attached to it — the exact fingerprint of a photon. String theory hands you electromagnetism for free.

## A photon nobody ordered

Nobody put a photon into the theory. We extremized the area of a worldsheet, gauge-fixed, and quantized the free vibrations of a string. The lowest genuine note the open string can play — one unit of the softest oscillator — turns out to be a massless spin-1 particle: Maxwell's photon. The gravity story ([[Graviton from closed strings]]) is the same machine run with two towers instead of one; here we do the simpler one-tower version.

Picture a guitar string whose silence (the vacuum) is tachyonic and whose softest note is the photon. The chain — one transverse oscillator → one spacetime index → massless vector → photon — has no optional arrows, and the job of this note is to show why each one is forced.

## The state and its mass

After light-cone gauge only the $D-2$ **transverse** coordinates $X^I$ are physical, and quantizing their vibrations gives one tower of oscillators $\alpha_n^I$ with $[\alpha_m^I,\alpha_n^J]=m\,\delta^{IJ}\delta_{m+n,0}$ ([[Open versus closed spectra]]). With the unit-normalized ladder operators $\alpha_n^I=\sqrt n\,a_n^I$, $\alpha_{-n}^I=\sqrt n\,a_n^{I\dagger}$ for $n\ge1$, the open-string mass formula reads (natural units, $\hbar=c=1$)

$$\alpha'M^2=N^\perp-1,\qquad N^\perp=\sum_{n\ge1}\alpha_{-n}^I\alpha_n^I=\sum_{n\ge1}n\,a_n^{I\dagger}a_n^I. \tag{1}$$

$N^\perp$ counts oscillators weighted by their pitch $n$; the $-1$ is the normal-ordering constant $a=-\frac{D-2}{24}$ evaluated at $D=26$ ([[Normal ordering constant]]).

The **first excited state** puts one quantum of the softest ($n=1$) oscillator on the vacuum $|0;p\rangle$ — shorthand for the light-cone ground state $|p^+,\vec p_T\rangle$:

$$\boxed{\;\alpha_{-1}^I\,|0;p\rangle\;}\qquad I=2,\dots,D-1. \tag{2}$$

(For $n=1$ the ladder conversion is trivial: $\alpha_{-1}^I=a_1^{I\dagger}$.) The label $I$ is a transverse spacetime direction, not an internal charge — the seed of the "one index = vector" story below. The state has $N^\perp=1$, so (1) gives

$$\alpha'M^2=1-1=0. \tag{3}$$

Exactly massless, with no tuning: once $a=-1$, level one lands precisely on $M^2=0$. Level zero sat below zero (the tachyon), level two sits above; the photon is the single level the Casimir shift parks at the massless point.

## Why massless is not a coincidence

Turn the logic around. A one-index state can only be a Lorentz-covariant particle if its number of components matches an allowed spin multiplet, and representation theory does the checking. Ask which rotations fix the particle's momentum (its **little group**), because physical polarizations must fill out a representation of that group ([[Little group and Wigner classification]]):

- A **massive** particle in $D$ dimensions can be brought to rest; the momentum-fixing rotations are $SO(D-1)$, and a massive vector needs $D-1$ components.
- A **massless** particle cannot be brought to rest; only the transverse rotations $SO(D-2)$ survive, and a massless vector needs exactly $D-2$ components.

Our state (2) has precisely $D-2$ components transforming as a vector of $SO(D-2)$. That count fits a massless vector and is one component short of the $D-1$ a massive vector demands. So the state has no home in a massive Lorentz multiplet; to be Lorentz-covariant at all, it **must** be massless — a necessary condition the counting alone establishes. What delivers the masslessness is $a=-1$, and that value, with $D=26$, is fixed by closure of the light-cone Lorentz algebra, the requirement $[M^{-I},M^{-J}]=0$ ([[Critical dimension D=26]]). The count says level one has to be massless; the algebra pins the number that makes it so.

## Why "one index" means "gauge field"

A photon is described by a $D$-component field $A_\mu(X)$, yet the string produced only $D-2$ physical states. The reconciliation *is* gauge symmetry:

$$A_\mu\to A_\mu+\partial_\mu\lambda \tag{4}$$

together with the physical-state (Lorenz / on-shell) condition quotients out the two unphysical polarizations, temporal and longitudinal, leaving $D-2$. The gauge parameter $\lambda$ removes one; the mass-shell / Lorenz condition removes the other — it takes the pair, not gauge invariance alone. In light-cone gauge the string never displays (4); it built the $D-2$ physical states directly. But packaging those states as a Lorentz-covariant field *forces* spacetime to use a gauge field. The photon's gauge invariance is the spacetime shadow of the worldsheet's light-cone gauge: the worldsheet already discarded the redundant polarizations, so the spacetime field must carry a matching redundancy.

## Where the photon lives

For the space-filling open string (endpoints free — Neumann — in every spatial direction, a D25-brane), all $D-2=24$ transverse polarizations are physical, and the level-one state is a single $U(1)$ Maxwell photon in $26$-dimensional spacetime. This is the concrete claim: open bosonic string theory contains one-photon states with the same momentum, mass, and transverse polarizations as light-cone Maxwell theory.

If the endpoints are instead pinned in some directions (a lower-dimensional D$p$-brane), the same massless level splits into a Maxwell field *along* the brane plus scalars for the brane's transverse position, and coincident branes promote the $U(1)$ to a non-abelian $U(N)$. Those refinements belong to the D-brane modules; here the string has already delivered the photon.

## Contrast with gravity

Open string → *one* tower → *one* index → spin-1 gauge field. Closed string → *two* towers → *two* indices → spin-2 graviton. Same quantization, different boundary conditions. See [[Graviton from closed strings]].

## Open questions

- The little-group step used here is the fragment of Wigner classification we need; the reusable representation-theory bridge is [[Little group and Wigner classification]].
- Light-cone gauge shows only the $D-2$ physical polarizations. The covariant statement of the gauge symmetry (4) is cleanest from physical-state conditions; see [[Vertex operators and physical-state conditions]].
- D$p$-brane scalars and Chan–Paton non-abelian gauge fields are deferred to the D-brane modules.

## Exercise

The little-group argument claims the level-one state *cannot* be a massive vector because it is one component short. Make this quantitative in $D=26$: (a) how many physical components does a massive vector carry, and how many does the string's level-one state carry? (b) Suppose someone insisted the normal-ordering constant were $a=-\tfrac12$ instead of $-1$. What would $\alpha'M^2$ be at level one, would the state then be massive or massless, and does its component count match the little group that its mass would require?

> [!success]- Solution
> **(a)** A massive vector in $D=26$ fills a vector of the little group $SO(D-1)=SO(25)$, so it needs $D-1=25$ physical components. The level-one string state $\alpha_{-1}^I|0;p\rangle$ has one transverse index $I=2,\dots,D-1$, i.e. $D-2=24$ components. It is exactly **one short** of a massive vector — there is no way to assemble a $25$-component $SO(25)$ vector out of $24$ states, so the state *cannot* be massive and Lorentz-covariant simultaneously.
>
> **(b)** With $a=-\tfrac12$ the mass formula $\alpha'M^2=N^\perp+a$ would read $\alpha'M^2=N^\perp-\tfrac12$, so at level one
> $$\alpha'M^2 = 1-\tfrac12 = \tfrac12 > 0,$$
> a **massive** state. Its little group is $SO(25)$, which demands $25$ components for a vector, but the state still has only $24$: the counts clash, no complete $SO(25)$ multiplet forms, and Lorentz invariance breaks. This is the consistency check that forces level one to be massless — only masslessness drops the little group to $SO(24)$, where the $24=D-2$ components fit. The counting shows masslessness is *required*; the value $a=-1$ that supplies it is fixed, with $D=26$, by closure of the light-cone Lorentz algebra $[M^{-I},M^{-J}]=0$ (see [[Critical dimension D=26]]).
