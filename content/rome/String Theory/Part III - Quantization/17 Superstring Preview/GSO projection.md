---
title: GSO projection
number: "17.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, gso-projection]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The GSO projection throws away half the string states — the half with the "wrong" number of worldsheet fermions — and the half that survives has no tachyon and exactly as many bosons as fermions.

## The problem, and the cheap fix

After building the [[Neveu-Schwarz and Ramond sectors]] the spectrum is sick in two ways: the NS ground state is a **tachyon** ($\alpha'M^2=-\tfrac12<0$, an unstable vacuum), and bosons and fermions do not come in equal numbers, so there is no supersymmetry.

The fix is startlingly cheap. Every state is built by hitting a vacuum with some number of fermionic oscillators. Count that number and ask whether it is even or odd; keep one parity, delete the other. That single yes/no cut deletes the tachyon and, once applied to both sectors, lines the surviving bosonic (NS) and fermionic (R) towers up on a common mass grid with equal counts at every level.

A fermionic oscillator is a light switch: each mode is either off (absent) or on (present, at most once, since $b_{-r}b_{-r}=0$). A state is a room full of switches, and its **parity** is whether an even or odd number are on. GSO keeps only rooms of one parity. The projected NS tower (a tower of spacetime bosons) then matches the projected R tower (a tower of spacetime fermions) state for state at each mass level — but that cross-sector balance is a separate fact, proved below by direct count, not a consequence of the parity cut alone.

## The rule

Define **worldsheet-fermion number** $F$ = the number of fermionic oscillators ($b^I_{-r}$ in NS, $d^I_{-n}$ in R) acting on the ground state. The **parity operator** $(-1)^F$ has eigenvalue $+1$ on even states, $-1$ on odd states. GSO keeps a definite parity with the projector

$$ P_\pm = \tfrac12\bigl(1 \pm (-1)^F\bigr), \qquad P_\pm^2 = P_\pm. \tag{1}$$

The word **projection** is literal: $P_\pm$ is idempotent, so it splits the Hilbert space into a kept image and a discarded kernel. $P_+$ keeps even parity, $P_-$ keeps odd. The superstring's choice:

- **NS sector:** keep **odd** $F$ — apply $P_-$. The NS vacuum has $F=0$ (even), so it is thrown out; the first survivors carry one $b$.
- **R sector:** here $F$ counts the nonzero modes $d^I_{-n}$ ($n\ge1$) built above a ground family. GSO keeps **even** $F$ on the $|R_1^a\rangle$ family **plus odd** $F$ on $|R_2^a\rangle$. Since $|R_1^a\rangle$ and $|R_2^a\rangle$ themselves differ by odd zero-mode parity, this is a single uniform parity once the two are counted together.

The R rule looks lopsided only because the eight zero modes $d_0^I$ flip parity "for free" — they do not change $M^2$, so they merely relabel the ground family. Which family counts as "kept" is a choice of **chirality**; see the last section.

## Why the tachyon dies

The would-be tachyon is the bare NS vacuum $|\mathrm{NS}\rangle\otimes|p^+,\vec p_T\rangle$ with **zero** $b$-oscillators — an **even** number. NS keeps only odd $F$, so it is deleted outright. The lightest survivors are the one-$b$ states

$$ b^I_{-1/2}|\mathrm{NS}\rangle, \qquad \alpha'M^2 = -\tfrac12 + \underbrace{\tfrac12}_{N^\perp} = 0. \tag{2}$$

The oscillator $b^I_{-1/2}$ contributes $N^\perp=\tfrac12$, exactly cancelling the intercept in $\alpha'M^2=-\tfrac12+N^\perp$. GSO has promoted the lightest state from a tachyon to a massless one. The spectrum now starts at $M^2=0$, with the eight transverse polarizations ($I=2,\dots,9$) of a massless photon — a Maxwell field. No instability remains.

The parity cut hides a second bonus. In the kept NS tower an **odd** count of half-integer modes forces $N^\perp$ to be half-integer, so $\alpha'M^2=-\tfrac12+N^\perp$ lands on **integers**. The R tower is integer-moded, so its $\alpha'M^2=N^\perp$ is already integer. The two towers now sit on the *same* integer mass grid — a prerequisite for pairing them level by level.

## Why the counts balance

The balance is *between* the two sectors, not inside either one. All NS states are spacetime **bosons**; all R states are spacetime **fermions**. So "bosons $=$ fermions at each level" means the projected NS count equals the projected R count level by level — a match across the NS/R divide. Check it by hand at the massless level.

| | states | count |
|---|---|---|
| **NS (bosons)** | $b^I_{-1/2}\lvert\mathrm{NS}\rangle$, $I=2,\dots,9$ | **8** |
| **R (fermions)** | GSO-kept ground states $\lvert R_1^a\rangle$, $a=1,\dots,8$ | **8** |

$$ 8 \text{ bosons} \;=\; 8 \text{ fermions}. \tag{3}$$

The R sector started with $16=2^4$ degenerate ground states; the parity cut keeps exactly one eight-state family. So the massless open superstring is a Maxwell field (8 boson polarizations) plus one massless spacetime fermion (8 fermion polarizations) — a supersymmetric multiplet.

The equality persists at every higher level too — $8, 128, 1152, \dots$ on both sides — and *that* is spacetime supersymmetry, seen through its bookkeeping. What actually does the work is worth separating out: the parity cut fixes *which* states survive in each sector, but the surviving NS count and the surviving R count then agreeing is a genuine coincidence of two different combinatorial towers. At the massless level it is the statement that the vector and spinor of the transverse rotation group $SO(8)$ both have dimension $8$. That $SO(8)$ vector/spinor coincidence, and its promotion to every level, is exactly the deep fact this preview quotes rather than proves.

## What we are not proving

The rule above is exactly right, but *why this particular parity cut* — and not some other — is the consistent, supersymmetric one is a deeper story. It rests on modular invariance of the one-loop amplitude and mutual locality of the sectors, which need the full RNS/superconformal machinery this preview does not build. Other parity truncations are also self-consistent, but they are **not** supersymmetric; GSO is the one that is.

## Chirality: the R-sector choice

Picking $|R_1^a\rangle$ over $|R_2^a\rangle$ as the "kept" family is a genuine choice of **spacetime chirality**. For the *open* string it is a convention — nothing physical depends on it. For the *closed* string, where left- and right-movers are projected separately, the *relative* choice between the two sides is exactly what splits **type IIA** (opposite chirality) from **type IIB** (same chirality) — see [[Type II closed-string orientation]].

## Open questions

- The consistency proof of GSO — modular invariance + mutual locality — is deferred to a full RNS treatment; this vault teaches central-charge/anomaly logic but not the RNS modular-invariance derivation.
- The Ramond chirality operator is represented here only by the $|R_1^a\rangle$ vs $|R_2^a\rangle$ parity split inherited from [[Neveu-Schwarz and Ramond sectors]]; its embedding into ten-dimensional Lorentz spinors is not built.

## Exercise

The GSO parity cut is supposed to be a genuine **projector**. Take $F$ = worldsheet-fermion number and $P_\pm=\tfrac12(1\pm(-1)^F)$. (a) Verify $P_+^2=P_+$ and that $P_++P_-=1$, $P_+P_-=0$. (b) In the NS sector, show that the parity $(-1)^F$ of a state is fixed by its level: integer $N^\perp$ forces even $F$, half-integer $N^\perp$ forces odd $F$. Conclude that the odd-$F$ projection keeps exactly the half-integer-$N^\perp$ levels, and hence that every surviving NS state has integer $\alpha'M^2$. (Warn the "switch-flip" tempter off here: flipping one switch adds weight $r$, so it moves you to a *different* level — it cannot pair states within a level, and indeed each NS level is purely one parity.) (c) Apply the NS rule to the two states $|\mathrm{NS}\rangle$ and $b^I_{-1/2}|\mathrm{NS}\rangle$: which survives, and what is its $\alpha'M^2$?

> [!success]- Solution
> **(a)** Since $(-1)^F$ has eigenvalues $\pm1$, it squares to the identity: $\bigl((-1)^F\bigr)^2=1$. Then
> $$P_\pm^2=\tfrac14\bigl(1\pm(-1)^F\bigr)^2=\tfrac14\bigl(1\pm2(-1)^F+1\bigr)=\tfrac12\bigl(1\pm(-1)^F\bigr)=P_\pm.$$
> Adding, $P_++P_-=\tfrac12(1+(-1)^F)+\tfrac12(1-(-1)^F)=1$ (they exhaust the space). Multiplying, $P_+P_-=\tfrac14\bigl(1+(-1)^F\bigr)\bigl(1-(-1)^F\bigr)=\tfrac14\bigl(1-((-1)^F)^2\bigr)=0$ (the two images are disjoint). So $P_\pm$ are complementary orthogonal projectors — a clean split of the Hilbert space.
>
> **(b)** In the NS sector $N^\perp$ collects two contributions: the bosonic modes $\alpha^I_{-n}$ each add an *integer* $n$, and the fermionic modes $b^I_{-r}$ each add a *half-integer* $r$. With $F$ fermionic modes switched on (each used at most once), the fermionic part of $N^\perp$ is a sum of $F$ half-integers, which is a half-integer when $F$ is odd and an integer when $F$ is even. Adding the always-integer bosonic part: $N^\perp$ is half-integer $\iff F$ is odd, and integer $\iff F$ is even. So $(-1)^F$ is *not free* to vary at a fixed level — the level pins it. The odd-$F$ (that is, $P_-$) projection therefore keeps precisely the half-integer-$N^\perp$ levels and deletes the integer ones. On the survivors $\alpha'M^2=-\tfrac12+N^\perp=-\tfrac12+(\text{half-integer})$ is an **integer** — the NS tower lands on the same grid as the integer-moded R tower.
>
> This also disarms the tempting "switch-flip" argument for balance. Acting with a fermionic mode $b^I_{-r}$ does flip parity, but it raises $N^\perp$ by $r>0$, so it maps a level to a *different* level — it cannot pair even against odd *within* a level. In fact each NS level is entirely one parity (all even or all odd), the opposite of a $50/50$ split. The true boson/fermion balance is the cross-sector match NS $\leftrightarrow$ R, level by level; the parity cut only selects *which* NS and R states enter that match.
>
> **(c)** $|\mathrm{NS}\rangle$ has $F=0$ (even) — **deleted** by the odd-keeping NS rule. $b^I_{-1/2}|\mathrm{NS}\rangle$ has $F=1$ (odd) — **kept**, with $N^\perp=\tfrac12$ and
> $$\alpha'M^2=-\tfrac12+\tfrac12=0,$$
> a massless state. The tachyon dies and a photon takes its place.
