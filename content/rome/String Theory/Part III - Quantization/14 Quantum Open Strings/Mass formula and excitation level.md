---
title: Mass formula and excitation level
number: "14.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mass-spectrum]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A quantum open string weighs exactly what its internal vibration carries: $\alpha' M^2 = N^\perp + a$, where $N^\perp$ counts the excitation and $a$ is a universal shift fixed to $-1$. Because $N^\perp$ is a non-negative integer, the masses form a discrete tower — and the shift $a=-1$ is precisely what drags the first excited level down to zero mass, turning it into a photon.

## The mass ladder

Think of the string as a bundle of independent harmonic oscillators, one per vibration mode. Quantum mechanics says each oscillator can only hold a whole number of quanta, and each quantum of the $n$-th mode costs $n$ units of energy. **A string's mass is nothing but its stored vibrational energy.** Pluck it harder — excite higher modes — and you get a heavier particle. Since the energy comes in integer packets, the mass comes in a discrete ladder. Everything below makes that ladder precise.

## From $p^-$ to $M^2$

We want the mass, and mass is a statement about momentum. In light-cone variables the mass-shell relation is

$$M^2=-p_\mu p^\mu=2p^+p^--p^Ip^I,$$

which is $-p^2$ (mostly-plus signature; natural units $\hbar=c=1$) written in components $p^\pm=\tfrac{1}{\sqrt2}(p^0\pm p^1)$; the transverse pieces $p^I$ ($I=2,\dots,D-1$) enter with the ordinary spatial sign (see [[Mass-shell relation]]). The point of light-cone gauge is that $p^-$ is *not* independent — it was solved from the constraints and packaged into the transverse Virasoro operator $L_0^\perp$ (see [[Transverse Virasoro operators]]):

$$2\alpha'p^-=\frac1{p^+}\big(L_0^\perp+a\big).\tag{1}$$

Here $a$ is the leftover constant from normal-ordering $L_0^\perp$ — the only place quantum ordering ambiguity survives. Multiply (1) by $p^+/\alpha'$:

$$2p^+p^-=\frac1{\alpha'}\big(L_0^\perp+a\big).$$

Now feed in the explicit form $L_0^\perp=\alpha'p^Ip^I+N^\perp$ (from [[Transverse Virasoro operators]]) and substitute both into $M^2$:

$$M^2=2p^+p^--p^Ip^I=\frac1{\alpha'}\big(\alpha'p^Ip^I+N^\perp+a\big)-p^Ip^I.$$

The $\tfrac1{\alpha'}\cdot\alpha'p^Ip^I=+p^Ip^I$ term cancels the $-p^Ip^I$ exactly, leaving the clean operator statement

$$\boxed{\;M^2=\frac1{\alpha'}\big(N^\perp+a\big)\quad\Longleftrightarrow\quad \alpha' M^2=N^\perp+a\;}\tag{2}$$

The mass came out independent of the center-of-mass momentum $p^I$, as any relativistic mass must. That is not automatic. It happens only because the coefficient of $p^Ip^I$ inside $L_0^\perp$ is *exactly* $\alpha'$ — not $\tfrac12$, not $2\alpha'$ — so that $\tfrac1{\alpha'}\cdot\alpha'p^Ip^I=+p^Ip^I$ kills the $-p^Ip^I$ from the mass shell. The cancellation is a built-in sanity check on the factors in $L_0^\perp$: a residual $p^I$ dependence in $M^2$ means a factor is wrong upstream.

## What the level $N^\perp$ contributes

$N^\perp$ is the total-excitation operator (from [[Open-string Fock space]]); on a Fock state with occupation numbers $\lambda_{n,I}$,

$$N^\perp=\sum_{n=1}^\infty n\,a_n^{I\dagger}a_n^I,\qquad N^\perp|\lambda\rangle=N_\lambda^\perp|\lambda\rangle,\quad N_\lambda^\perp=\sum_{n,I}n\,\lambda_{n,I}.$$

The weight $n$ is the crucial feature: exciting the $n$-th mode once raises $N^\perp$ by $n$, not by $1$. So

$$\alpha' M^2=a+\sum_{n=1}^\infty n\,a_n^{I\dagger}a_n^I,$$

and each quantum of the $n$-th oscillator adds $n$ units of $1/\alpha'$ to $M^2$. The eigenvalues of $N^\perp$ are $0,1,2,3,\dots$, so the spectrum is an evenly spaced ladder,

$$\alpha' M^2=a,\ a+1,\ a+2,\dots$$

The classical string had a *continuous* range of masses; quantization forces this ladder. $M^2$ growing linearly with the level is the structural fingerprint of a string: the highest-spin state at each level traces a straight line in the spin–$M^2$ plane — a **Regge trajectory**, the pattern in hadron data that historically first suggested strings.

## Fixing the constant $a$

The constant $a$ is the c-number left behind when the symmetric $L_0^\perp$ is normal-ordered. Written naively it is a zero-point sum over all $D-2$ transverse oscillator towers:

$$a\overset{\text{formal}}{=}\frac12(D-2)\sum_{n=1}^{\infty}n.$$

This sum diverges — a warning that ordering can shift the entire mass ladder, not a number to be taken literally. A cutoff regulator (derived in [[Normal-ordering constant for open strings]]) separates a local UV divergence from a genuine finite Casimir remnant, $\sum_{n\ge1}n\to-\tfrac1{12}$, giving the finite part

$$a=-\frac{D-2}{24}.$$

This is the honest content of the shorthand "$\zeta(-1)=-\tfrac1{12}$": a regularized statement, never ordinary arithmetic. But regularization alone relates $a$ to the number of transverse directions without pinning $D$.

The pin comes from consistency. Demanding that the quantum boosts close, $[M^{-I},M^{-J}]=0$ (worked out in [[Light-cone Lorentz anomaly]]), forces *two* conditions simultaneously:

$$D=26,\qquad a=-1,$$

and these agree with the Casimir value, since $-\tfrac1{24}(26-2)=-1$. So the physical formula is

$$\boxed{\;\alpha' M^2=N^\perp-1\;}\tag{3}$$

equivalently, the generator of $\tau$-translations is the light-cone Hamiltonian $H=2\alpha'p^+p^-=L_0^\perp-1$.

## The payoff: the shift is what makes a photon

Read the bottom of the ladder with $a=-1$:

| $N^\perp$ | $\alpha' M^2=N^\perp-1$ | character |
|:---:|:---:|:---|
| $0$ | $-1$ | tachyon (negative $M^2$, unstable) |
| $1$ | $0$ | **massless — a photon** |
| $2$ | $+1$ | massive tensor |

Without the shift, the level-1 states $\alpha_{-1}^I|p^+,\vec p_T\rangle$ would be massive. The downward shift of *exactly* $1$ drags them to $M^2=0$ — and a massless state carrying a transverse vector index is precisely a **photon**. Open string theory contains electromagnetism, even though we started from the Nambu–Goto action, which knew nothing of it. And it works only because $a$ is an *integer*: had $a$ been any non-integer, no level would ever land on $M^2=0$ and there would be no massless particles at all. The photon is not put in by hand; it is squeezed out by the arithmetic $-\tfrac1{24}(D-2)=-1$.

The full state-by-state breakdown — basis states, degeneracies, particle content — lives in [[Critical dimension and the spectrum]]. This note supplies the engine: $\alpha'M^2$ is the level $N^\perp$ shifted down by exactly one, and that shift is the only reason the spectrum has a photon at all.

## One landmine: don't copy the closed-string formula

The *closed* string obeys a formula that looks different:

$$M^2=\frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big),$$

where $\bar N^\perp$ is the level of the independent left-moving oscillator tower. With level matching $N^\perp=\bar N^\perp$ this reads $\frac{\alpha'}{4}M^2=N^\perp-1$: the closed-string ground state sits at $\alpha'M^2=-4$, not $-1$. Two traps when comparing sources:

- **Factor of 4.** The closed string's zero mode is $\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$, versus the open string's $\alpha_0^I=\sqrt{2\alpha'}\,p^I$. The differing $\sqrt2$'s square to a factor of $4$ in the spacing: $4/\alpha'$ (closed) vs $1/\alpha'$ (open).
- **Sign of the shift.** Some texts define the constant with the opposite sign, writing $\alpha'M^2=N-a$ with $a=+1$ and calling $a$ the *intercept*. This vault writes $\alpha'M^2=N^\perp+a$ with $a=-1$, so the intercept is $-a=1$. Same downward physical shift, opposite bookkeeping sign — check which convention is in force before transplanting a value of $a$.

For everything in this module: open string, spacing $1/\alpha'$, shift $-1$.

## Open questions

- Formula (3) is physical *only* once the Lorentz-anomaly argument in [[Light-cone Lorentz anomaly]] grants $D=26$; before that, (2) with general $a$ is all we have.
- [[Normal-ordering constant for open strings]] extracts the finite Casimir part, but *why* this subtraction is compatible with the underlying conformal symmetry is deferred to [[Worldsheet stress tensor]] and [[Virasoro algebra and central charge]].

## Exercise

The mass formula (2) is derived from the light-cone data $2\alpha'p^-=\frac1{p^+}(L_0^\perp+a)$ and $L_0^\perp=\alpha'p^Ip^I+N^\perp$. Suppose a careless student instead wrote the wrong zero-mode relation $L_0^\perp=2\alpha'p^Ip^I+N^\perp$ (a factor-of-2 slip). Redo the substitution into $M^2=2p^+p^--p^Ip^I$ and show that the mass now depends on the center-of-mass momentum $p^I$. What physical principle does this violate, and what does the correct coefficient $\alpha'$ (not $2\alpha'$) buy us?

> [!success]- Solution
> With the wrong $L_0^\perp=2\alpha'p^Ip^I+N^\perp$, the zero-mode relation gives
> $$2p^+p^-=\frac1{\alpha'}\big(2\alpha'p^Ip^I+N^\perp+a\big)=2p^Ip^I+\frac1{\alpha'}\big(N^\perp+a\big).$$
> Substituting into $M^2=2p^+p^--p^Ip^I$:
> $$M^2=2p^Ip^I+\frac1{\alpha'}\big(N^\perp+a\big)-p^Ip^I=\frac1{\alpha'}\big(N^\perp+a\big)+p^Ip^I.$$
> The transverse momentum no longer cancels — a residual $+p^Ip^I$ survives. This says the string's rest mass depends on how fast its center of mass is moving in the transverse directions, which is nonsense: **$M^2=-p_\mu p^\mu$ is a Lorentz invariant and cannot depend on the frame-dependent split into $p^I$.** The correct coefficient $\alpha'$ in $L_0^\perp=\alpha'p^Ip^I+N^\perp$ is exactly what makes $\tfrac1{\alpha'}\cdot\alpha'p^Ip^I=+p^Ip^I$ cancel the $-p^Ip^I$ from the mass-shell relation, leaving $M^2$ built purely from the internal excitation $N^\perp$ and the constant $a$. So the factor $\alpha'$ is not cosmetic — it is what guarantees the mass formula is Lorentz-consistent.
