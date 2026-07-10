---
title: Critical dimension and the spectrum
number: "14.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, critical-dimension]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Once Lorentz invariance fixes $D=26$ and $a=-1$, the open-string mass formula $\alpha'M^2=N^\perp-1$ hands us the bottom of the spectrum level by level: a tachyon at level 0, a photon at level 1, a 324-state massive tensor at level 2.

## One string, an infinite tower

A single quantized string is not one particle. Each way of exciting its oscillators is a different species, and its mass is set entirely by how excited it is (natural units, $\hbar=c=1$):

$$\alpha'M^2=N^\perp-1.$$

The level $N^\perp$ is a non-negative integer — it counts oscillator quanta weighted by mode number. The $-1$ is the quantum zero-point shift, and everything interesting at the bottom of the tower comes from it: it drags the lowest state *below* zero mass (a tachyon), and it drags level 1 *exactly to* zero (a photon). Change the shift and both effects vanish.

The two constants in that formula are not free. Demanding that the light-cone theory secretly respect the Lorentz symmetry we broke by singling out $X^\pm$ forces
$$\boxed{\,D=26\,,\qquad a=-1\,,}$$
simultaneously. The full audit is in [[Light-cone Lorentz anomaly]]; here we take the result and use it.

## Why the two constants are locked together

Light-cone gauge trades manifest Lorentz invariance for a clean, ghost-free Hilbert space. The price: the quantum boost generators $M^{-I}$ (which mix a transverse direction $I$ with the solved-for $X^-$) must still close into the Lorentz algebra. The dangerous relation is $[M^{-I},M^{-J}]=0$. Because $X^-$ is quadratic in the transverse oscillators, normal ordering can spoil this, and the leftover works out to

$$[M^{-I},M^{-J}]=\frac1{\alpha'p^{+2}}\sum_{m=1}^{\infty}
\big(\alpha_{-m}^I\alpha_m^J-\alpha_{-m}^J\alpha_m^I\big)
\left\{m\left[1-\frac{D-2}{24}\right]+\frac1m\left[\frac{D-2}{24}+a\right]\right\}.$$

Each mode $m$ contributes an independent transverse-rotation operator, so nothing can cancel across modes — the brace must vanish for every $m\ge1$. Since $m$ and $1/m$ are independent functions, both brackets vanish separately:

$$1-\frac{D-2}{24}=0\ \Rightarrow\ D=26,\qquad
\frac{D-2}{24}+a=0\ \Rightarrow\ a=-\frac{24}{24}=-1.$$

One requirement fixes both numbers at once. $D=26$ is not imposed by hand — it is the unique dimension in which the open bosonic string is a consistent, Lorentz-invariant quantum theory. And $a=-1$ agrees exactly with the regularized zero-point value $-(D-2)/24$ from [[Normal-ordering constant for open strings]]: the algebra and the Casimir energy tell the same story.

### The little-group shortcut: why level 1 must be massless

A slicker argument makes $D=26$ vivid, though it gives a necessary condition, not the full proof. It rests on Wigner's classification of particles by their little group:

- A **massive** particle has a rest frame, so its internal states must fill a representation of the rotation group $SO(D-1)$ that fixes its rest momentum.
- A **massless** particle has no rest frame; a frame change can at best bring its momentum to a fixed null vector, so its states need only fill the smaller $SO(D-2)$.

The level-1 states $\alpha_{-1}^I|p^+,\vec p_T\rangle$ carry a single transverse index $I=2,\dots,D-1$, so they form an $SO(D-2)$ vector — exactly $D-2$ states, too few to fill the $SO(D-1)$ multiplet a massive vector requires, and there are no other level-1 states to make up the difference. Lorentz invariance therefore forces these states to be massless. Feeding in the Casimir shift $a=-(D-2)/24$ from [[Normal-ordering constant for open strings]], the level-1 mass is $\alpha'M^2=1-\frac{D-2}{24}$, so masslessness requires $\frac{D-2}{24}=1$, i.e. $D=26$ (and correspondingly $a=-1$).

This is intuition, not the boost-commutator check — but it says *why* $D=26$ is the answer: it is precisely the dimension where the photon-like states are forced onto the massless shell.

## The first three levels

Set $D=26$, so there are $D-2=24$ transverse directions, $I=2,\dots,25$. Read off $\alpha'M^2=N^\perp-1$ level by level.

### Level 0 — the tachyon

$$|p^+,\vec p_T\rangle,\qquad \alpha'M^2=-1.\qquad(\textbf{1 state})$$

A single scalar with **negative** $M^2=-1/\alpha'$. Despite the name, nothing here outruns light: in field language a mass term is $V=\tfrac12M^2\phi^2$, so $M^2<0$ makes $\phi=0$ a *maximum* of the potential — the vacuum is unstable and wants to roll off (compare the Higgs at the origin). Physically, the space-filling D25-brane these open strings live on is unstable and decays. The tachyon is the blemish of the *bosonic* string; the superstring removes it.

### Level 1 — the photon

$$\alpha_{-1}^I|p^+,\vec p_T\rangle,\qquad \alpha'M^2=0.\qquad(\textbf{24 states})$$

Twenty-four **massless** states, one per transverse direction, carrying a single transverse Lorentz index. That is exactly the fingerprint of a photon: light-cone Maxwell theory also has $D-2$ massless states labeled by a transverse index. Same labels, same momenta, same (zero) mass — the correspondence is one-to-one. **The open string contains a photon**, even though the Nambu–Goto action we started from knew nothing of electromagnetism. The vector exists *only* because $a=-1$ pushed level 1 down to $M^2=0$, and the index matters: it is what makes the 24 states rotate into one another under Lorentz transformations, rather than sitting as 24 unrelated scalars.

### Level 2 — the massive tensor

Two independent ways to reach $N^\perp=2$:

$$\alpha_{-1}^I\alpha_{-1}^J|p^+,\vec p_T\rangle\ \ (\text{symmetric in }I,J)\qquad\text{and}\qquad \alpha_{-2}^I|p^+,\vec p_T\rangle,\qquad \alpha'M^2=+1.$$

Counting: the symmetric pair $(I,J)$ gives $\binom{D-2}{2}+(D-2)=\tfrac12(D-2)(D-1)$ states (the $+(D-2)$ is the $I=J$ diagonal), and the single $\alpha_{-2}^I$ gives another $D-2$. Total

$$\tfrac12(D-2)(D-1)+(D-2)=\tfrac12(D-2)(D+1)\ \xrightarrow{\,D=26\,}\ \tfrac12\cdot24\cdot27=\mathbf{324}.$$

These states are massive ($M^2=+1/\alpha'$), so Lorentz invariance demands they fill complete multiplets of the rest-frame little group $SO(D-1)=SO(25)$. They do, in the tightest way possible: 324 is exactly the dimension of a symmetric traceless 2-tensor of $SO(25)$ (see the exercise), so the two oscillator families merge into a single multiplet with nothing missing and nothing left over. The bookkeeping that could only be satisfied at level 1 by masslessness is satisfied here the massive way.

### Summary table

| $N^\perp$ | basis state(s) | $\alpha'M^2$ | # states ($D=26$) | particle |
|:---:|:---|:---:|:---:|:---|
| $0$ | $\lvert p^+,\vec p_T\rangle$ | $-1$ | $1$ | tachyon (unstable scalar) |
| $1$ | $\alpha_{-1}^I\lvert p^+,\vec p_T\rangle$ | $0$ | $24$ | **photon** (massless vector) |
| $2$ | $\alpha_{-1}^I\alpha_{-1}^J\lvert p^+,\vec p_T\rangle,\ \ \alpha_{-2}^I\lvert p^+,\vec p_T\rangle$ | $+1$ | $324$ | massive tensor |

The degeneracy keeps growing from here — the start of a Regge trajectory of ever-heavier, ever-more-numerous states.

## Common traps

- $D-2=24$ transverse directions, **not** $D-1=25$: the light-cone index $I=2,\dots,25$ omits *both* $X^+$ and $X^-$. Using $D-1$ gives $a=-25/24$, the tell-tale of this slip.
- Level count weights by mode number, not occupation: $\alpha_{-2}^I|p^+,\vec p_T\rangle$ has $N^\perp=2$ — one quantum of a mode-2 oscillator lands at the same level as the two mode-1 quanta of $\alpha_{-1}^I\alpha_{-1}^J|p^+,\vec p_T\rangle$.
- The photon's masslessness is a *consequence* of $a=-1$, itself a *consequence* of $D=26$ — never smuggle it in as an independent input.

## Open questions

- *Why* the superstring shifts the critical dimension to $D=10$ and kills the tachyon — worldsheet fermions change the zero-point sum — is the natural sequel, beyond this module.
- The endpoint of tachyon condensation: Sen's conjecture identifies the minimum of the tachyon potential with the no-brane vacuum, and string field theory computations have confirmed it, but the time-dependent decay process itself is still not fully understood. Included here only as physical context.

## Exercise

The 324 massive states at level 2 must fill a single irreducible representation of the massive little group $SO(D-1)=SO(25)$. Show that they do, by checking that a symmetric traceless rank-2 tensor of $SO(n)$ has dimension $\tfrac12 n(n+1)-1$, and that this equals 324 for the right $n$. Then show that the oscillator count $\tfrac12(D-2)(D+1)$ in fact equals the $SO(D-1)$ symmetric-traceless dimension for *every* $D$ (not just $D=26$), and explain in one sentence what — given that the counts always match — actually singles out $D=26$.

> [!success]- Solution
> A general rank-2 tensor $T_{ij}$ of $SO(n)$ has $n^2$ components. Split it: the symmetric part has $\tfrac12 n(n+1)$ components, the antisymmetric part $\tfrac12 n(n-1)$. The symmetric part is still reducible because the trace $\delta^{ij}T_{ij}$ is an $SO(n)$-invariant scalar; removing it leaves the symmetric traceless tensor with
> $$\dim=\tfrac12 n(n+1)-1.$$
> For the massive little group of $D=26$, $n=D-1=25$:
> $$\tfrac12\cdot25\cdot26-1=325-1=324.$$
> This matches the level-2 count exactly:
> $$\tfrac12(D-2)(D-1)\ \text{(from }\alpha_{-1}^I\alpha_{-1}^J)\ +\ (D-2)\ \text{(from }\alpha_{-2}^I)\ =\ \tfrac12(D-2)(D+1)\ \xrightarrow{D=26}\ 324.$$
> So the 324 states assemble into one symmetric traceless tensor of $SO(25)$ — a single massive spin-2-like multiplet, with no states left over and none missing.
>
> Why the count closes for every $D$: the *oscillator* count is $\tfrac12(D-2)(D+1)$, a function of $D-2$ (transverse directions); the *little-group* target is $\tfrac12(D-1)D-1$, a function of $D-1$ (rest-frame rotations). These are equal when
> $$\tfrac12(D-2)(D+1)=\tfrac12(D-1)D-1\ \Longleftrightarrow\ \tfrac12(D^2-D-2)=\tfrac12(D^2-D)-1,$$
> which holds identically in $D$ — provided the states are genuinely massive, so that $SO(D-1)$ rather than $SO(D-2)$ is the relevant group. Level 2 is massive whenever $\alpha'M^2=2+a>0$, i.e. for any $a>-2$, so level 2 alone cannot pin down $a$ or $D$. What singles out $D=26$ is level 1: its $D-2$ states can only fill a *massless* multiplet, forcing $\alpha'M^2=1+a=0$ — hence $a=-1$ and, through $a=-(D-2)/24$ (rigorously, through the boost commutator), $D=26$. Once that holds, Lorentz invariance guarantees every massive level assembles into complete $SO(25)$ multiplets; the 324 states at level 2 are the first instance.
