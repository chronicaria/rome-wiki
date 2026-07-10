---
title: Light-cone Lorentz anomaly
number: "14.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, critical-dimension]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Light-cone gauge hides Lorentz symmetry; the quantum boosts $M^{-I}$ close into a proper Lorentz algebra only if $D=26$ and $a=-1$, and the leftover when they don't is the Lorentz anomaly.

## The one dangerous commutator

We gave up manifest Lorentz invariance to buy a clean Hilbert space — only transverse oscillators, no ghosts (see [[Oscillator commutation relations]]). The bill comes due here. Lorentz invariance still has to hold; we just cannot see it anymore, so we check it by hand. The dangerous check is a single commutator:

$$[M^{-I},M^{-J}]=0. \tag{1}$$

Zero is not a choice: every Lorentz structure constant that could feed this bracket carries an $\eta^{--}$ or $\eta^{-I}$, all of which vanish in light-cone coordinates, and $M^{--}=0$ identically — the algebra demands that these generators simply commute.

Why is this the one to fear? A boost $M^{-I}$ mixes a transverse direction $X^I$ with the dependent direction $X^-$, and $X^-$ is not an independent field: light-cone gauge solves it from the constraints as something quadratic in the transverse oscillators. So $M^{-I}$ is secretly a complicated operator built from the $\alpha_n^I$, and when two of them are commuted, normal ordering can leave a remainder that no amount of care removes. That remainder is the **Lorentz anomaly**. If it survives, the $M^{\mu\nu}$ fail to represent the Lorentz algebra on the Fock space — there is no consistent way to boost states, and the quantum string is not Lorentz invariant. The classical algebra closes identically; the quantum residue does not have to, and demanding that it does forces the two magic numbers of the bosonic string, $D=26$ and $a=-1$, at once.

## What $X^-$ hides

Light-cone gauge keeps the zero modes $x_0^-,p^+$ and the transverse variables $x_0^I,p^I,\alpha_n^I$ ($I=2,\dots,D-1$) as the only independent operators; every oscillator of $X^-$ is a solved quantity. For the nonzero modes the constraint gives (natural units, $\hbar=c=1$)

$$\sqrt{2\alpha'}\,\alpha_n^-=\frac{1}{p^+}L_n^\perp, \tag{2}$$

with the transverse Virasoro operators $L_n^\perp=\tfrac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\alpha_p^I$ from [[Transverse Virasoro operators]]. The zero mode carries the ordering constant $a$:

$$2\alpha'p^-=\frac{1}{p^+}\big(L_0^\perp+a\big). \tag{3}$$

Every appearance of the hidden $-$ direction thus becomes transverse Virasoro operators plus one unknown c-number $a$. The two dials we get to test — $D$ (how many transverse bosons, hidden inside the $L^\perp$) and $a$ (the shift in $p^-$) — are exactly the two the commutator will pin down.

## The quantum boost operator

Classically the Lorentz charge in oscillator form is

$$M^{\mu\nu}=x_0^\mu p^\nu-x_0^\nu p^\mu-i\sum_{n=1}^{\infty}\frac1n\big(\alpha_{-n}^\mu\alpha_n^\nu-\alpha_{-n}^\nu\alpha_n^\mu\big):$$

center-of-mass orbital angular momentum plus the spin carried by the string's internal wiggles. Promoting this to the quantum boost $M^{-I}$ needs two repairs. The term $x_0^Ip^-$ is not Hermitian — $p^-$ contains $p^Kp^K$ and so fails to commute with $x_0^I$ — so we symmetrize it. And every $\alpha_n^-$ gets replaced through (2)–(3). The result is

$$
M^{-I}=x_0^-p^I-\frac{1}{4\alpha'p^+}\big(x_0^I(L_0^\perp+a)+(L_0^\perp+a)x_0^I\big)
-\frac{i}{\sqrt{2\alpha'}\,p^+}\sum_{n=1}^{\infty}\frac1n
\big(L_{-n}^\perp\alpha_n^I-\alpha_{-n}^I L_n^\perp\big), \tag{4}
$$

Hermitian and normal-ordered as it stands (each $\alpha_n^-$ is itself a normal-ordered Virasoro operator). The first two terms are the orbital boost; the sum is the oscillator spin with each $\alpha_n^-$ rewritten as a Virasoro operator. The $1/n$ weights and the placement of the single free index $I$ decide the coefficients below.

The whole computation runs on three brackets: the zero-mode pairs (mostly-plus signature)

$$[x_0^I,p^J]=i\,\delta^{IJ},\qquad [x_0^-,p^+]=-i, \tag{5}$$

the Virasoro–oscillator bracket, which shifts a mode number,

$$[L_m^\perp,\alpha_n^I]=-n\,\alpha_{m+n}^I, \tag{6}$$

and the transverse Virasoro algebra with its central term,

$$[L_m^\perp,L_n^\perp]=(m-n)L_{m+n}^\perp+\frac{D-2}{12}\,(m^3-m)\,\delta_{m+n,0}. \tag{7}$$

Equation (7) is the only place the number of transverse bosons enters, and $(m^3-m)$ vanishes for $m=0,\pm1$ — the anomaly first bites at $|m|=2$, which is why checking two mode numbers will suffice at the end.

## Only one kind of term can survive

Suppose the anomaly leaves something in $[M^{-I},M^{-J}]$. Whatever survives inherits three properties directly from (5)–(7): it is antisymmetric in $I,J$, because the commutator is; it conserves mode number, because every bracket used does; and it is a normal-ordered bilinear in the transverse oscillators — each reordering trades an oscillator pair for a c-number, dropping the quartic structures of the classical cancellation to bilinears, and a pure c-number cannot appear at all, since there is no antisymmetric invariant tensor in $I,J$. For a fixed mode $m>0$ the only candidate is

$$R_m^{IJ}\equiv \alpha_{-m}^I\alpha_m^J-\alpha_{-m}^J\alpha_m^I,$$

the generator that rotates the two transverse directions $I,J$ inside the mode-$m$ tower. The commutator must therefore take the form

$$[M^{-I},M^{-J}]=\frac1{\alpha'p^{+2}}\sum_{m=1}^{\infty}C_m\,R_m^{IJ} \tag{8}$$

for some c-number coefficients $C_m$ (the prefactor is pulled out for later convenience). Crucially, the different $R_m^{IJ}$ are independent: on a one-oscillator state $\alpha_{-r}^K|p^+,\vec p_T\rangle$ the annihilator inside $R_m^{IJ}$ acts nontrivially only when $m=r$, so no $R_m^{IJ}$ can secretly cancel a different $R_k^{IJ}$. This independence is the whole logic of the argument: it turns "the commutator vanishes" into "every $C_m$ vanishes, mode by mode."

## Where the coefficient comes from

Grinding out $[M^{-I},M^{-J}]$ term by term is long bookkeeping with no new idea in it, and this note does not reproduce it. What we can do honestly is locate where each power of $m$ in $C_m$ is born, and derive the two entry points that matter — the ordering constant and the central charge.

**The ordering constant: the piece $+\dfrac{a}{m}$.** The only $a$ in (4) is the c-number term $-\frac{a}{2\alpha'p^+}\,x_0^I$. It has no oscillator to cancel against, but it talks to the spin sum: only the $\sqrt{2\alpha'}\,p^K\alpha_n^K$ piece of $L_n^\perp$ notices $x_0^I$, so $[x_0^I,L_n^\perp]=i\sqrt{2\alpha'}\,\alpha_n^I$. Commuting the $a$-term of $M^{-I}$ against the spin sum of $M^{-J}$ (plus the mirror with $I\leftrightarrow J$) therefore feeds a $1/m$ term proportional to $R_m^{IJ}$ into the bracket, and tracking it through the prefactor of (8) gives the contribution $+a/m$ to $C_m$. This is how the normal-ordering constant of the mass formula ([[Mass formula and excitation level]]) leaks into the boost algebra.

**The central charge: the piece $-\dfrac{D-2}{24}\Big(m-\dfrac1m\Big)$.** When the $L_m^\perp$ inside one spin sum meets the $L_{-m}^\perp$ inside the other, the central term of (7) fires:

$$[L_m^\perp,L_{-m}^\perp]_{\text{central}}=\frac{D-2}{12}(m^3-m).$$

The two $1/m$ weights and the $I\leftrightarrow J$ antisymmetrization package this as $-\frac{1}{2m^2}\cdot\frac{D-2}{12}(m^3-m)=-\frac{D-2}{24}\big(m-\frac1m\big)$ inside $C_m$. This is the part of the anomaly the $D-2$ transverse bosons control.

**Everything else: the piece $+m$.** The remaining ingredients — the orbital terms, the mode shifts (6), and the $(m-n)L_{m+n}^\perp$ part of (7) — reproduce the classical computation, which cancels to zero identically; quantum normal ordering leaves the finite residue $+m$ in $C_m$. This is the piece the other two must cancel in the critical theory, and the one entry we quote rather than derive: extracting it is the long bookkeeping.

Adding the three,

$$C_m=m-\frac{D-2}{24}\left(m-\frac1m\right)+\frac{a}{m}
=m\left(1-\frac{D-2}{24}\right)+\frac1m\left(\frac{D-2}{24}+a\right). \tag{9}$$

The coefficient splits cleanly into an $m$ part and a $1/m$ part: the $m$ part is a pure test of the central charge, and the $1/m$ part tests whether the mass shift $a$ is tuned to that same central charge.

## Closure forces $D=26$ and $a=-1$

The anomaly (8) is nonzero in general — light-cone gauge is not automatically Lorentz invariant. By the independence of the $R_m^{IJ}$, closure (1) demands $C_m=0$ for every $m\ge1$, and since $m$ and $1/m$ are linearly independent functions ($m=1,2$ already force it), both brackets in (9) must vanish separately:

$$1-\frac{D-2}{24}=0,\qquad \frac{D-2}{24}+a=0.$$

Therefore

$$\boxed{D=26}\,,\qquad \boxed{a=-\frac{D-2}{24}=-1}\,.$$

We traded manifest Lorentz symmetry for a ghost-free Fock space, and the boost algebra is where the trade could have failed. It nearly does: two boosts fail to commute by an operator anomaly, one term growing with the number of transverse bosons, the other tracking the mass shift. Demanding that they commute after all pins both dials of §"What $X^-$ hides" — the $m$ equation fixes the central charge and hence $D$; the $1/m$ equation then tunes $a$ to it. The dimension of spacetime is not an assumption of the theory but one of its outputs, and $a=-1$ is the same shift that drags the level-1 states down to zero mass, producing the photon of [[Critical dimension and the spectrum]].

## Relation to the other routes

- The little-group argument in [[Critical dimension and the spectrum]] gets $D=26$ from a single level: the level-1 vector has $D-2$ polarizations, which fit a massless particle only. That is fast intuition. The commutator here is sharper — it constrains the quantum generators themselves, hence all levels at once.
- The value $a=-1=-(D-2)/24$ matches the regularized zero-point sum of [[Normal-ordering constant for open strings]] (via a cutoff and $\zeta(-1)=-\tfrac1{12}$, never naive arithmetic). Lorentz invariance is what promotes that regularized value to a theorem.
- The covariant route in [[Total central charge and D = 26]] reaches the same obstruction as a Weyl-anomaly cancellation — $D$ matter bosons against $-26$ from the $bc$ ghosts. Same $26$, different disguise.

## Open questions

- §"Where the coefficient comes from" derives where $a$ and $D-2$ enter and quotes the $+m$ residue; the full term-by-term expansion of $[M^{-I},M^{-J}]$, including the check that all structures outside (8) cancel, is lengthy bookkeeping this vault does not reproduce.
- Why the superstring shifts the anomaly-free dimension to $D=10$ is the natural sequel: worldsheet fermions change the central charge and the zero-point sum. Beyond this module.

## Exercise

The mode-$m$ coefficient (9) is $C_m=m\big(1-\tfrac{D-2}{24}\big)+\tfrac1m\big(\tfrac{D-2}{24}+a\big)$.

**(a)** Suppose an impatient student imposes only $C_1=0$ (the lowest mode) and declares the theory Lorentz invariant. Show this single equation does **not** fix $D$, and find the one-parameter family of $(D,a)$ it allows.

**(b)** Now add $C_2=0$. Show that the two equations together force $D=26,\ a=-1$, and explain in one sentence why no further modes $C_m=0$ ($m\ge3$) give new information.

> [!success]- Solution
> **(a)** Setting $m=1$ makes the two structures collapse: $C_1 = \big(1-\tfrac{D-2}{24}\big) + \big(\tfrac{D-2}{24}+a\big) = 1 + a.$ The central-charge pieces cancel, so $C_1=0$ says only $a=-1$ and places **no** condition on $D$. The allowed family is $\{(D,\,a=-1)\ :\ D\ \text{arbitrary}\}$. Lorentz invariance at the lowest mode alone is blind to the dimension — which is exactly why the anomaly must be checked mode by mode.
>
> **(b)** With $m=2$: $C_2 = 2\big(1-\tfrac{D-2}{24}\big) + \tfrac12\big(\tfrac{D-2}{24}+a\big).$ Impose $a=-1$ from (a). The second bracket becomes $\tfrac{D-2}{24}-1$, so
> $$C_2 = 2\Big(1-\tfrac{D-2}{24}\Big) + \tfrac12\Big(\tfrac{D-2}{24}-1\Big) = \tfrac32\Big(1-\tfrac{D-2}{24}\Big).$$
> Setting $C_2=0$ gives $\tfrac{D-2}{24}=1$, i.e. $D=26$; the second bracket then returns $a=-\tfrac{D-2}{24}=-1$, consistent. So $(D,a)=(26,-1)$ is forced.
>
> No higher mode adds anything because $C_m=0$ is two independent linear conditions in disguise — the coefficient of $m$ ($1-\tfrac{D-2}{24}$) and the coefficient of $1/m$ ($\tfrac{D-2}{24}+a$) — and two modes already probe both. Equivalently: the Virasoro central term $\propto(m^3-m)$ vanishes at $m=0,\pm1$, so $m=1$ is blind to $D$ and $m=2$ is the first mode that sees the central charge. Once both structures are pinned, every $C_m$ is automatically zero.
