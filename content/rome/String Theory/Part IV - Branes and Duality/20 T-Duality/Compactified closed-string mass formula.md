---
title: Compactified closed-string mass formula
number: "20.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mass-formula]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string on a circle has two independent zero modes — one for momentum, one for winding — and its mass is the Pythagorean sum $M^2 = p^2 + w^2 + \tfrac{2}{\alpha'}(N^\perp + \bar N^\perp - 2)$.

## Two integers, two energies

A closed string on a circle carries two integers: how much momentum it has going *around* the circle ($n$, spacing $1/R$), and how many times it *wraps* the circle ($m$, winding). Both cost energy. Momentum costs $p = n/R$, cheap on a big circle. Winding costs $w = mR/\alpha'$; a wound string is a stretched rubber band, expensive on a big circle. The two energies pull in opposite directions in $R$, and that opposition is the entire engine of T-duality.

The derivation turns on one fact: on a circle, the left-moving and right-moving halves of the string no longer share a single momentum. They split into two independent zero modes $\bar\alpha_0$ (left) and $\alpha_0$ (right). Their sum is momentum, their difference is winding. Everything below turns that split into a mass. Prerequisites: [[Momentum modes on a circle]], [[Winding modes]], [[Light-cone gauge]].

## Step 0 — split into left- and right-movers

The compact coordinate $X(\tau,\sigma)$ satisfies the free wave equation $\partial_\tau^2 X = \partial_\sigma^2 X$, so every solution is a left-moving wave plus a right-moving wave:
$$ X(\tau,\sigma) = X_L(u) + X_R(v), \qquad u = \tau+\sigma,\quad v = \tau-\sigma. $$
This is just d'Alembert. It matters here because T-duality will turn out to be the operation of flipping the sign of $X_R$ *alone* — which is only meaningful once the two halves are separated.

## Step 1 — winding forces the two zero modes apart

The two halves have the standard mode expansions (barred modes = left, unbarred = right):
$$ X_L(u) = \tfrac12 x_0^L + \sqrt{\tfrac{\alpha'}{2}}\,\bar\alpha_0\, u + i\sqrt{\tfrac{\alpha'}{2}}\sum_{n\ne0}\frac{\bar\alpha_n}{n}e^{-inu}, \qquad X_R(v) = \tfrac12 x_0^R + \sqrt{\tfrac{\alpha'}{2}}\,\alpha_0\, v + i\sqrt{\tfrac{\alpha'}{2}}\sum_{n\ne0}\frac{\alpha_n}{n}e^{-inv}. $$
Now impose winding: going once around the string ($\sigma\to\sigma+2\pi$) advances $X$ by $m$ full circumferences, i.e. $X(\tau,\sigma+2\pi)=X(\tau,\sigma)+2\pi\alpha' w$ with $w = mR/\alpha'$ (see [[Winding modes]]). Only the terms linear in $u,v$ fail to be periodic; $u$ shifts by $+2\pi$ and $v$ by $-2\pi$, so the shift is $2\pi\sqrt{\alpha'/2}\,(\bar\alpha_0-\alpha_0)$. Matching this to $2\pi\alpha' w$:
$$ \boxed{\,\bar\alpha_0 - \alpha_0 = \sqrt{2\alpha'}\, w.\,} \tag{1} $$
An ordinary non-compact closed string has $\alpha_0 = \bar\alpha_0$: one momentum, shared. Winding is exactly what pries the two zero modes apart.

## Step 2 — sum is momentum, difference is winding

The momentum around the circle is the total worldsheet current integrated over the string. Only the linear-in-$u,v$ terms survive the $\sigma$-integral:
$$ p = \frac{1}{2\pi\alpha'}\int_0^{2\pi}(\dot X_L + \dot X_R)\,d\sigma = \frac{1}{\sqrt{2\alpha'}}(\bar\alpha_0 + \alpha_0). \tag{2} $$
So momentum is the *sum* of the zero modes; winding (1) is their *difference*:
$$ p = \frac{1}{\sqrt{2\alpha'}}(\bar\alpha_0 + \alpha_0), \qquad w = \frac{1}{\sqrt{2\alpha'}}(\bar\alpha_0 - \alpha_0). $$
Inverting these two linear equations:
$$ \boxed{\ \alpha_0 = \sqrt{\tfrac{\alpha'}{2}}\,(p - w), \qquad \bar\alpha_0 = \sqrt{\tfrac{\alpha'}{2}}\,(p + w).\ } \tag{3} $$
The right-mover carries $p-w$, the left-mover carries $p+w$. This pairing is the algebraic heart of the duality: swapping $p\leftrightarrow w$ leaves $\bar\alpha_0 = \sqrt{\alpha'/2}\,(p+w)$ untouched but flips the sign of $\alpha_0 = \sqrt{\alpha'/2}\,(p-w)$, since $p-w\to w-p=-(p-w)$. That sign flip is exactly the map $X_R\to -X_R$: right-movers reflected, left-movers fixed. The combinations that appear are the left- and right-moving momenta $p_L = p+w = \tfrac{n}{R}+\tfrac{mR}{\alpha'}$ and $p_R = p-w = \tfrac{n}{R}-\tfrac{mR}{\alpha'}$, so that $\bar\alpha_0 = \sqrt{\alpha'/2}\,p_L$ and $\alpha_0 = \sqrt{\alpha'/2}\,p_R$.

## Step 3 — the two Virasoro zero modes

In light-cone gauge the mass comes from the Virasoro zero modes $L_0^\perp$ (right) and $\bar L_0^\perp$ (left). Split the transverse sum into the 23 non-compact transverse directions $I=2,\dots,24$ and the one compact direction $X\equiv X^{25}$:
$$ L_0^\perp = \frac{\alpha'}{4}p^I p^I + \tfrac12 \alpha_0\alpha_0 + N^\perp, \qquad \bar L_0^\perp = \frac{\alpha'}{4}p^I p^I + \tfrac12 \bar\alpha_0\bar\alpha_0 + \bar N^\perp. \tag{4} $$
Here $p^I$ is the non-compact transverse momentum, the $\tfrac12\alpha_0\alpha_0$ and $\tfrac12\bar\alpha_0\bar\alpha_0$ are the compact-direction zero-mode energies from (3), and $N^\perp,\bar N^\perp$ count all oscillator excitations, compact and non-compact. These are the usual $L_0,\bar L_0$ with the compact direction's zero mode written out so we can track $p$ and $w$. The count of oscillator *towers* is unchanged: 23 non-compact transverse plus 1 compact makes 24, the same as flat space. Compactification alters the zero modes of $X^{25}$, not the number of oscillators.

## Step 4 — take the difference and the sum

The difference gives level matching. Because $x^-$ is non-compact, its left and right pieces still balance, so the constraint $L_0^\perp = \bar L_0^\perp$ survives. Their difference is
$$ L_0^\perp - \bar L_0^\perp = \tfrac12(\alpha_0\alpha_0 - \bar\alpha_0\bar\alpha_0) + N^\perp - \bar N^\perp. $$
From (3), $\alpha_0^2 - \bar\alpha_0^2 = \tfrac{\alpha'}{2}\big[(p-w)^2-(p+w)^2\big] = -2\alpha' pw$, so $\tfrac12(\alpha_0^2-\bar\alpha_0^2) = -\alpha' pw$. Setting $L_0^\perp-\bar L_0^\perp=0$:
$$ N^\perp - \bar N^\perp = \alpha' pw = \alpha'\cdot\frac{n}{R}\cdot\frac{mR}{\alpha'} = nm, \qquad\text{so}\qquad \boxed{\,N^\perp - \bar N^\perp = nm.\,} \tag{5} $$
With *both* momentum and winding, the left and right oscillator levels need not match — they differ by the integer $nm$. The $R$ and $\alpha'$ cancel to leave a pure integer, a sharp check that the factors are right.

The sum gives the mass. A 25-dimensional observer, blind to the compact direction, measures $M^2 = -p^\mu p_\mu = 2p^+p^- - p^I p^I$. The light-cone constraint fixes $p^-$ so that $2p^+p^- = \tfrac{2}{\alpha'}(L_0^\perp+\bar L_0^\perp - 2)$. Substituting:
$$ M^2 = \frac{2}{\alpha'}(L_0^\perp + \bar L_0^\perp - 2) - p^I p^I = \frac{1}{\alpha'}(\alpha_0\alpha_0 + \bar\alpha_0\bar\alpha_0) + \frac{2}{\alpha'}(N^\perp + \bar N^\perp - 2). \tag{6} $$
The $\tfrac{\alpha'}{4}p^Ip^I$ from each of $L_0^\perp,\bar L_0^\perp$ combines to $\tfrac{\alpha'}{2}p^Ip^I$, and the prefactor $\tfrac{2}{\alpha'}$ turns it into exactly the $p^Ip^I$ that cancels the explicit $-p^Ip^I$. The non-compact transverse momentum drops out, leaving only the compact zero modes and oscillators.

The $-2$ is the intercept: $-1$ from the right-movers, $-1$ from the left-movers. Each $-1$ is the regularized zero-point energy of 24 transverse oscillator towers, $-\tfrac{1}{24}\times 24 = -1$, where the $-\tfrac{1}{24}$ per tower is the *finite* value a cutoff regulator assigns to the divergent sum $\tfrac12\sum_{n\ge1} n$ (equivalently $\tfrac12\zeta(-1)$), never the naive sum, which diverges. Compactifying one direction leaves 24 towers with the same integer frequencies, so the intercept is unchanged. Finally, from (3), $\alpha_0^2+\bar\alpha_0^2 = \tfrac{\alpha'}{2}\big[(p-w)^2+(p+w)^2\big] = \alpha'(p^2+w^2)$, so $\tfrac{1}{\alpha'}(\alpha_0^2+\bar\alpha_0^2) = p^2+w^2$:
$$ \boxed{\,M^2 = p^2 + w^2 + \frac{2}{\alpha'}\big(N^\perp + \bar N^\perp - 2\big).\,} \tag{7} $$

## Step 5 — the formula in integer labels

Substituting $p=n/R$, $w=mR/\alpha'$:
$$ \boxed{\,M^2 = \Big(\frac{n}{R}\Big)^2 + \Big(\frac{mR}{\alpha'}\Big)^2 + \frac{2}{\alpha'}\big(N^\perp + \bar N^\perp - 2\big).\,} \tag{8} $$
Read term by term:
- $(n/R)^2$ — momentum energy; **falls** as $R$ grows (a big circle has finely-spaced momenta).
- $(mR/\alpha')^2$ — winding/stretch energy; **rises** as $R$ grows (a big circle is expensive to wrap).
- $\tfrac{2}{\alpha'}(N^\perp+\bar N^\perp-2)$ — oscillator + zero-point energy; radius-**independent**. At $n=m=N^\perp=\bar N^\perp=0$ it gives the tachyon, $M^2 = -4/\alpha'$.

The payoff is the shape of that first line. Compactification adds $p^2 + w^2$, *not* $(p+w)^2$: the cross term $2pw$ never enters the mass. It went instead into the separate level-matching constraint (5), $N^\perp-\bar N^\perp = nm$. That clean split is why the mass is symmetric in $p$ and $w$ even though the left and right excitation levels need not be equal. And because the momentum term falls while the winding term rises, their sum is left invariant by the swap $R\to\alpha'/R,\ n\leftrightarrow m$: a small circle and a big circle carry the identical list of masses, and a string cannot tell them apart. That is T-duality — see [[Spectrum invariance under R to alpha-prime over R]].

## Sanity checks

- **Massless level** ($n=m=0$, $N^\perp=\bar N^\perp=1$): $M^2 = \tfrac{2}{\alpha'}(2-2)=0\ \checkmark$. These are the graviton, Kalb–Ramond field, and dilaton, plus, from the compact direction, two Maxwell fields — one from the metric, one from Kalb–Ramond.
- **Units**: $[p^2]=[w^2]=[2/\alpha']=\text{length}^{-2}=\text{mass}^2$. Every term is a $\text{mass}^2\ \checkmark$.
- **Self-dual radius preview**: at $R=\sqrt{\alpha'}$, states with $n=m=\pm1$, $N^\perp=1$, $\bar N^\perp=0$ become massless and supply the left-moving $SU(2)_L$. A mirror set with $n=-m=\pm1$, $N^\perp=0$, $\bar N^\perp=1$ — also massless there, also obeying level matching $N^\perp-\bar N^\perp=nm$ — supplies the right-moving $SU(2)_R$, so the two $U(1)$s enhance to $SU(2)_L\times SU(2)_R$. Worked out in the duality note.
- **Hamiltonian cross-check**: $H = \tfrac{\alpha'}{2}(p^Ip^I + p^2 + w^2) + N^\perp + \bar N^\perp - 2$, consistent with $M^2 = 2p^+p^- - p^Ip^I$ in light-cone gauge $\checkmark$.

## Open questions

- The intercept $-1$ per sector is *imported* here as the critical-dimension result. Why the regularized sum equals $-\tfrac{1}{24}$ and why Lorentz invariance forces $D=26$ belong to the quantization notes; here we only use that compactifying one direction keeps 24 transverse towers intact.
- This is the *free* spectrum. Proving T-duality survives interactions needs the full worldsheet CFT statement, deferred to [[Spectrum invariance under R to alpha-prime over R]].

## Exercise

A **vector** (a would-be gauge boson) needs at least one oscillator carrying a non-compact Lorentz index. **Show that a pure-momentum vector ($m=0$) is massless only in the decompactification limit $R\to\infty$, while a vector carrying both momentum and winding can be massless at a finite radius.** Concretely: (a) take $(n,m)=(1,0)$ with $N^\perp=\bar N^\perp=1$ — a Kaluza–Klein photon, one oscillator supplying the index and the other the compact charge — and show $M^2>0$ for all finite $R$; then (b) find the radius at which $(n,m)=(1,1)$ with $N^\perp=1$, $\bar N^\perp=0$ — a single oscillator, its winding standing in for the second oscillator's charge — becomes massless, and check it satisfies level matching (5).

> [!success]- Solution
> **(a)** With $m=0$, $N^\perp=\bar N^\perp=1$, formula (8) gives
> $$ M^2 = \frac{1}{R^2} + \frac{2}{\alpha'}(1+1-2) = \frac{1}{R^2} > 0 \quad\text{for all finite } R. $$
> Level matching: $nm = 1\cdot 0 = 0 = N^\perp - \bar N^\perp\ \checkmark$, so the state is allowed. The mass vanishes only as $R\to\infty$, when the circle decompactifies and the momentum spacing $1/R$ closes up. A pure-momentum vector is *never* massless at finite radius.
>
> **(b)** For $(n,m)=(1,1)$, $N^\perp=1$, $\bar N^\perp=0$:
> $$ M^2 = \frac{1}{R^2} + \frac{R^2}{\alpha'^2} + \frac{2}{\alpha'}(1 + 0 - 2) = \frac{1}{R^2} + \frac{R^2}{\alpha'^2} - \frac{2}{\alpha'} = \Big(\frac{1}{R} - \frac{R}{\alpha'}\Big)^2. $$
> This is a perfect square, so $M^2 = 0$ exactly when $\tfrac{1}{R} = \tfrac{R}{\alpha'}$, i.e. $R = \sqrt{\alpha'}$ — the self-dual radius, a *finite* $R$. Level matching: $nm = 1\cdot 1 = 1$ and $N^\perp - \bar N^\perp = 1-0 = 1\ \checkmark$.
>
> Winding lets a string go massless at a finite radius where a pure-momentum state cannot. The extra massless gauge bosons of the self-dual radius are inescapably stringy, powered by the winding term that a point particle simply does not have.
