---
title: Critical dimension D=26
number: "16.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, critical-dimension]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Requiring that the quantized string still respect Lorentz symmetry forces the normal-ordering constant to $a=-1$ **and** the spacetime dimension to $D=26$. Neither number is put in by hand; both are the unique price of consistency.

## Why Lorentz invariance is the constraint

Light-cone gauge is a bargain with a hidden cost. To make the theory tractable we single out two spacetime directions ($X^\pm$) and keep only the $D-2$ transverse oscillators — but that choice secretly picks a preferred frame, so Lorentz invariance is no longer manifest and has to be checked by hand. The check is whether the rotation generators that mix a transverse direction with a light-cone direction still close into the Lorentz algebra. Classically they do. Quantum mechanically, normal-ordering the oscillators leaves a residue — an anomaly — and it vanishes for exactly one value of $D$ and one value of $a$. Rotating your head in $26$ dimensions is fine; in $25$ or $27$ it quietly breaks the theory.

Two numbers fall out of one condition. Picture two dials, the dimension $D$ and the constant $a$, and a single gauge that must read zero. The anomaly has two functionally independent pieces — one scaling like the mode number $n$, one like $1/n$ — so demanding zero pins both dials at once.

## Convention

We work in natural units ($\hbar=c=1$), mostly-plus signature, with the normal-ordering constant added to the level:
$$\alpha' M^2 = N^\perp + a\quad(\text{open}),\qquad \frac{\alpha'}{4}M^2 = N^\perp + a = \bar N^\perp + a\quad(\text{closed}). \tag{1}$$
Stacking oscillators raises $M^2$ in integer steps of the level $N^\perp$; the constant $a$ (which will come out negative) slides the whole tower down. The factor of $4$ between open and closed is the squared zero-mode normalization, not a second effect (see [[Open versus closed spectra]]). Some texts subtract a positive intercept instead, writing $\alpha'M^2=N^\perp-a_+$ with $a_+=-a$; then $a=-1\Leftrightarrow a_+=+1$. Same physics, sign moved to the other side — always check which form a formula uses before comparing factors.

## Step 1 — the constant as a function of D

Normal-ordering the $D-2$ transverse oscillators leaves a finite zero-point (Casimir) energy. Each free harmonic mode of frequency $n$ contributes $\tfrac12 n$, and there are $D-2$ transverse fields, so the bare shift is
$$E_0=\frac{D-2}{2}\sum_{n=1}^{\infty}n. \tag{2}$$
This sum diverges; it is regularized honestly with a short-distance cutoff (full derivation in [[Normal ordering constant]]). Damping high modes by $e^{-\epsilon n}$ and expanding,
$$\sum_{n=1}^{\infty} n\,e^{-\epsilon n}=\frac{e^{-\epsilon}}{(1-e^{-\epsilon})^2}=\frac{1}{\epsilon^2}-\frac{1}{12}+O(\epsilon^2). \tag{3}$$
The $1/\epsilon^2$ piece is a local UV vacuum energy, subtracted once and for all by the normal-ordering prescription; the frame-independent finite remnant is $-\tfrac1{12}$ — the number people summarize as "$\zeta(-1)=-\tfrac1{12}$," but obtained here from a cutoff, never from naively summing the integers. The constant $a$ is this energy added to the level, so
$$a=E_0^{\text{fin}}=\frac{D-2}{2}\left(-\frac1{12}\right)=\boxed{\,-\frac{D-2}{24}\,}. \tag{4}$$
Regularization alone ties $a$ to $D$, but it does not yet select $D$: it gives a one-parameter family of candidate theories, one per dimension. Something else must pick the member.

## Step 2 — the quick argument: masslessness forces D=26

Look at the first excited level, built on the light-cone momentum vacuum $|0;p\rangle$ (shorthand for $|p^+,\vec p_T\rangle$). It carries only transverse indices:

| string | first excited state | little-group content |
|---|---|---|
| open | $\alpha_{-1}^{I}\,|0;p\rangle$ | one vector of $SO(D-2)$, i.e. $D-2$ states |
| closed | $\bar\alpha_{-1}^{I}\alpha_{-1}^{J}\,|0;p\rangle$ | $(D-2)\otimes(D-2)$ of $SO(D-2)$ |

The key fact from [[Little group and Wigner classification]]: a **massive** particle in $D$ dimensions can be boosted to rest, so its polarizations must fill a representation of the rest-frame rotation group $SO(D-1)$; a **massless** particle cannot be brought to rest, and its polarizations only need to fill $SO(D-2)$.

Here is the squeeze. The open first-excited state supplies exactly $D-2$ states transforming as an $SO(D-2)$ vector. There is **no way** to assemble $D-2$ states into a representation of the larger group $SO(D-1)$ — a massive vector needs $D-1$. So if this level were massive, it could not form a Lorentz multiplet at all, and Lorentz invariance would be lost. The only escape is that the level is **massless**, where $SO(D-2)$ is the whole requirement and the count matches. (Same logic for the closed level, whose $(D-2)\otimes(D-2)$ is precisely the transverse polarization content of massless two-index fields.)

Impose masslessness on the open formula (1) at $N^\perp=1$:
$$0 = \alpha' M_1^2 = 1+a \;\Longrightarrow\; a=-1. \tag{5}$$
Combine with (4):
$$-\frac{D-2}{24}=-1 \;\Longrightarrow\; \boxed{\,D=26\,}. \tag{6}$$
The closed string gives the identical condition: masslessness at $N^\perp=\bar N^\perp=1$ again needs $\tfrac{D-2}{24}=1$. The photon and the graviton come out massless in exactly the dimension where the zero-point shift equals one unit of oscillator level. Bump $D$ off $26$ and the "photon" acquires a mass it has no room to carry, and Lorentz invariance breaks.

This argument creaks. It is a necessary condition dressed as a derivation: it assumes the level *should* fit into a Lorentz multiplet and reads off the dimension that allows it. It never shows Lorentz invariance genuinely survives quantization at all levels. For that we need the algebra itself.

## Step 3 — the honest check: the Lorentz algebra must close

The sharp statement is operatorial. The Lorentz generators $M^{\mu\nu}$ must satisfy the Lorentz algebra as quantum operators. Every commutator is automatic except the dangerous one,
$$[M^{-I},M^{-J}]\overset{!}{=}0, \tag{7}$$
which mixes a transverse rotation with a light-cone boost. It looks trivially zero — but in light-cone gauge $M^{-I}$ contains $\alpha^-_n$, which the constraints solve as a *quadratic* expression in the transverse oscillators. Reordering that product picks up commutator terms, so (7) is a real quantum computation. It is the operator that asks, after quantizing in a preferred frame, whether the theory still rotates correctly.

Carrying out the long, standard contraction with $D$ and $a$ left free gives, for the closed string,
$$[M^{-I},M^{-J}]=\frac{\text{const}}{(p^+)^2}\sum_{n>0}\left[\left(\frac{D-2}{24}-1\right)n-\frac1n\left(a+\frac{D-2}{24}\right)\right]\left(\alpha^I_{-n}\alpha^J_n-\alpha^J_{-n}\alpha^I_n\right)+(\alpha\leftrightarrow\bar\alpha). \tag{8}$$
Each mode $n$ contributes an antisymmetric transverse-rotation operator $\alpha^I_{-n}\alpha^J_n-\alpha^J_{-n}\alpha^I_n$; these are nonzero and independent for different $n$, so Lorentz invariance demands the *coefficient* vanish at every $n$ separately. (The open string gives the same bracket with one tower instead of two.) The overall prefactor $\text{const}/(p^+)^2$ depends on the oscillator normalization and drops out of the argument: any nonzero prefactor leaves the per-$n$ conditions untouched, since only the bracket's $n$-part and $1/n$-part carry the physics.

A single pair of numbers cannot make $\alpha\, n+\beta/n$ vanish for all positive integers $n$ unless $\alpha=\beta=0$, so the two pieces must vanish independently:
$$\frac{D-2}{24}-1=0,\qquad a+\frac{D-2}{24}=0. \tag{9}$$
The first equation gives $D=26$; feeding that into the second gives $a=-1$:
$$\boxed{\,D=26,\qquad a=-1\,}. \tag{10}$$
This is why the two dials are pinned simultaneously: the anomaly has two functionally independent pieces, so the one equation $[M^{-I},M^{-J}]=0$ delivers two conditions. Lorentz invariance is genuinely anomalous in every dimension except $26$ — the classical symmetry survives quantization at one value of $D$ and nowhere else. The quick argument's masslessness condition (5) is *contained in* (9): the second equation is just the Casimir relation (4), $a=-\tfrac{D-2}{24}$, while the first forces $D=26$, and together they give $a=-1$, reproducing (5). So the algebra does not assume masslessness; it *derives* the $D=26$ condition the quick argument had to put in by hand, upgrading a plausibility argument into a theorem.

## The same fact, three faces

- **Light-cone / no-ghost:** at $D=26,\ a=-1$ the would-be negative-norm timelike states decouple; away from it they leak into the physical spectrum. This is the covariant restatement of the anomaly.
- **CFT / Weyl anomaly:** the covariant route replaces "$[M^{-I},M^{-J}]=0$" with "total central charge $=0$," giving $c_{\text{matter}}+c_{\text{gh}}=D-26=0$. Same $26$, no broken Lorentz symmetry along the way. See [[Total central charge and D = 26]].

One disease, three symptoms: a finite Casimir subtraction, a closing Lorentz algebra, and a vanishing Weyl anomaly are the same consistency condition wearing different clothes.

## Open questions

- Only one input is imported rather than derived here: the term-by-term contraction that turns the normal-ordered $M^{-I}$ into the coefficient in (8). It is standard and tedious; this note displays the result and completes the logical argument from it.
- The cutoff-regularized constant (2)–(4) is summarized; the reusable derivation lives in [[Normal ordering constant]].
- The superstring analogue is $D=10$: worldsheet fermions change the zero-point sum and the GSO projection removes the tachyon. That belongs to a superstring note, not here.

## Exercise

Two parts, both answerable from this note alone.

**(a)** Suppose a careless regularization of the Casimir sum in (3) had produced $-\tfrac16$ instead of $-\tfrac1{12}$ (someone kept a spurious factor of $2$). Redo Step 1 to get the constant $a(D)$, then use the masslessness condition (5) to find the "critical dimension" this mistake predicts.

**(b)** Sanity-check the sign. In the correct theory, is the ground state $|0;p\rangle$ (level $N^\perp=0$) above, at, or below $M^2=0$ at $D=26$? Use (1) and (6). What is this state called, and why is the constant $a$ the thing that puts it there?

> [!success]- Solution
> **(a)** With finite part $-\tfrac16$, equation (4) becomes
> $$a=\frac{D-2}{2}\left(-\frac16\right)=-\frac{D-2}{12}.$$
> Masslessness of the first level still demands $a=-1$ — that condition comes from the mass formula (1) at $N^\perp=1$, which the Casimir error does not touch. So
> $$-\frac{D-2}{12}=-1 \;\Longrightarrow\; D=14.$$
> Here $14$ is a perfectly good integer, so the "must be a whole number" reflex would *not* catch this slip: an integer dimension is necessary but not sufficient. The value $26$ is inseparable from the specific number $\tfrac1{12}$; the whole edifice rides on getting that regularized constant exactly right, which is why Step 1 insists on an honest cutoff rather than a memorized $-\tfrac1{12}$.
>
> **(b)** Set $N^\perp=0$ and $a=-1$ in the open formula (1): $\alpha'M^2 = 0+(-1) = -1$, so $M^2=-1/\alpha' < 0$. The ground state sits **below** $M^2=0$: it is the **tachyon** (see [[Tachyon as instability]]). The constant puts it there — with no oscillators excited, the state carries only the zero-point shift $a$, so the same $a=-1$ that makes the first level massless drags the ground level to negative $M^2$. The masslessness of the photon/graviton and the tachyonic ground state are two readings of one number.
