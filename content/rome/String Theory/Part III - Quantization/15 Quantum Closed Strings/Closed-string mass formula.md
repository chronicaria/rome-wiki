---
title: Closed-string mass formula
number: "15.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, mass-formula]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string's mass is stored in its vibration: $M^2=\frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big)$, symmetric in the left- and right-moving oscillator towers, which [[Level matching]] then locks together into $M^2=\frac{4}{\alpha'}(N-1)$.

## Two towers, one hoop

A closed string is a hoop carrying two independent standing-wave patterns at once: a right-moving tower (unbarred oscillators $\alpha_n^I$) and a left-moving tower (barred oscillators $\bar\alpha_n^I$), each a full copy of the open-string vibration spectrum (see [[Left and right oscillator algebras]]). The mass-squared of a state is its total vibration energy, counted by the two number operators $N^\perp$ and $\bar N^\perp$, shifted down by a constant.

Two facts make the closed string differ from the open string by a factor of 4:

1. **The coefficient out front doubles.** The closed string shares one zero mode, $\alpha_0^\mu=\bar\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$, half the open-string size — so momentum enters each sector's constraint as $\frac{\alpha'}{4}p^Ip^I$, and when the constraints are solved for $M^2$ the level operators come out multiplied by $\frac{2}{\alpha'}$ instead of the open string's $\frac{1}{\alpha'}$. That is one factor of 2.
2. **You can't climb one tower alone.** Level matching forbids raising the right tower without also raising the left; the only legal move is diagonal, $(N^\perp,\bar N^\perp)\to(N^\perp+1,\bar N^\perp+1)$, so the summed level $N^\perp+\bar N^\perp$ jumps by 2, not 1. That is the second factor of 2.

Physical closed-string masses are therefore spaced by $4/\alpha'$, and the first level above the tachyon is *massless* — that is where the graviton lives.

## Where $M^2$ comes from: $p^-$ in light-cone gauge

In light-cone gauge all the dynamics sit in $p^-$, which the Virasoro zero modes fix. In natural units ($\hbar=c=1$) the two zero-mode relations, one per sector, read
$$\sqrt{2\alpha'}\,\alpha_0^-=\frac{2}{p^+}\big(L_0^\perp-1\big),\qquad
\sqrt{2\alpha'}\,\bar\alpha_0^-=\frac{2}{p^+}\big(\bar L_0^\perp-1\big),$$
where the $-1$ in each is the normal-ordering constant derived below. But the closed string has a *single* zero mode, $\alpha_0^-=\bar\alpha_0^-$, so both relations must hold at once. Averaging them gives one symmetric expression:
$$\sqrt{2\alpha'}\,\alpha_0^-=\frac{1}{p^+}\big(L_0^\perp+\bar L_0^\perp-2\big)=\alpha'p^-. \tag{1}$$
The two $-1$'s add to the $-2$. The last equality uses $\alpha_0^-=\sqrt{\alpha'/2}\,p^-$, which turns the left side into $\sqrt{2\alpha'}\sqrt{\alpha'/2}\,p^-=\alpha'p^-$ and so isolates $p^-$.

## Assembling $M^2$

The mass-shell relation in mostly-plus signature is $M^2=-p^2=2p^+p^--p^Ip^I$. Feed in $p^-$ from (1):
$$M^2=2p^+p^--p^Ip^I=\frac{2}{\alpha'}\big(L_0^\perp+\bar L_0^\perp-2\big)-p^Ip^I.$$
Now use the ordered zero modes $L_0^\perp=\frac{\alpha'}{4}p^Ip^I+N^\perp$ and $\bar L_0^\perp=\frac{\alpha'}{4}p^Ip^I+\bar N^\perp$. The two momentum pieces sum to $\frac{\alpha'}{2}p^Ip^I$; multiplied by $\frac{2}{\alpha'}$ they give exactly $+p^Ip^I$, which cancels the explicit $-p^Ip^I$. This cancellation is not luck — $M^2$ is a Lorentz scalar and *must not* depend on transverse momentum, so the two $\frac{\alpha'}{4}$ coefficients are forced to be what they are. What survives is pure oscillator content:
$$\boxed{\;M^2=\frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big)\;}\tag{2}$$
or, equivalently, in the form that reads off levels directly,
$$\tfrac12\alpha'M^2=N^\perp+\bar N^\perp-2.$$

## The factor of 4 versus the open string

Set the two formulas side by side, before level matching:
$$M^2_{\rm open}=\frac{1}{\alpha'}\big(N^\perp-1\big),\qquad
M^2_{\rm closed}=\frac{2}{\alpha'}\big(N^\perp+\bar N^\perp-2\big).$$
Level matching then sets $N^\perp=\bar N^\perp\equiv N$, so
$$\boxed{\;M^2_{\rm closed}=\frac{4}{\alpha'}\big(N-1\big)\;}$$
Every allowed step up the matched ladder changes $M^2$ by $4/\alpha'$. That 4 is the product of the two effects above: the summed level $N^\perp+\bar N^\perp$ rises by 2 per legal move, and the coefficient in front is $2/\alpha'$.

## The $-2$: the normal-ordering constant

Each sector's constraint carries a normal-ordering constant of $-1$; the two together give the $-2$ in (2). Here is where the $-1$ comes from, one sector at a time.

The oscillator part of $L_0^\perp$ is
$$\tfrac12\sum_{n=1}^{\infty}\big(\alpha_{-n}^I\alpha_n^I+\alpha_n^I\alpha_{-n}^I\big).$$
To normal-order, push the annihilators $\alpha_n^I$ ($n>0$) to the right using $[\alpha_n^I,\alpha_{-n}^J]=n\,\delta^{IJ}$, which contributes $n(D-2)$ per mode once summed over the $D-2$ transverse directions:
$$\tfrac12\sum_{n=1}^{\infty}\big(\alpha_{-n}^I\alpha_n^I+\alpha_n^I\alpha_{-n}^I\big)
=\sum_{n=1}^{\infty}\alpha_{-n}^I\alpha_n^I+\frac{D-2}{2}\sum_{n=1}^{\infty}n.$$
The first term is $N^\perp$; the second is the zero-point energy of $D-2$ transverse oscillator towers — a formally divergent $\sum n$. The divergence is handled by a regulator, not by declaring $\sum n=-\frac{1}{12}$ as if it were an ordinary sum:
$$\sum_{n=1}^{\infty}n\,e^{-\epsilon n}
=\frac{e^{-\epsilon}}{(1-e^{-\epsilon})^2}
=\frac{1}{\epsilon^2}-\frac{1}{12}+O(\epsilon^2).$$
The $1/\epsilon^2$ divergence is a worldsheet vacuum-energy (cosmological-constant) term and is renormalized away; the physical, cutoff-independent remainder is $-\frac{1}{12}$ — the finite value the analytic continuation $\zeta(-1)=-\frac{1}{12}$ is a shorthand for. Hence the zero-point energy per sector is
$$E_0=\frac{D-2}{2}\left(-\frac{1}{12}\right)=-\frac{D-2}{24}.$$
For the bosonic string $D=26$, so $E_0=-1$: exactly the $-1$ used above, and $-2$ once both sectors are summed. This $E_0$ is the normal-ordering constant $a=-\frac{D-2}{24}=-1$ of the mass formula — after matching, $M^2=\frac{4}{\alpha'}(N+a)$, with intercept $-a=1$.

The cutoff delivers the number but not the reason for it. What actually forces $D=26$ and $a=-1$ is demanding that the light-cone Lorentz algebra close without an anomaly; that deeper check lives in [[Critical dimension D=26]].

## Reading off the spectrum

| $(N^\perp,\bar N^\perp)$ | state | $\tfrac12\alpha'M^2$ | $M^2$ | meaning |
|---|---|---|---|---|
| $(0,0)$ | $\lvert p^+,\vec p_T\rangle$ | $-2$ | $-4/\alpha'$ | tachyon (scalar) |
| $(1,1)$ | $\alpha_{-1}^I\bar\alpha_{-1}^J\lvert p^+,\vec p_T\rangle$ | $0$ | $0$ | massless: graviton + $B$-field + dilaton |

The ground state is tachyonic, $\alpha'M^2=-4$ — four times more negative than the open-string tachyon's $\alpha'M^2=-1$, the same factor of 4 seen from below. Level matching forbids $(1,0)$ and $(0,1)$, so there is *no* physical state at $\tfrac12\alpha'M^2=-1$: the spectrum jumps straight from the tachyon to the massless level. That massless level is the reason to care about closed strings at all — see [[Graviton antisymmetric tensor and dilaton]].

The light-cone Hamiltonian packages the same content:
$$H=\alpha'p^+p^-=L_0^\perp+\bar L_0^\perp-2=\tfrac{\alpha'}{2}p^Ip^I+N^\perp+\bar N^\perp-2,$$
one $\big(L_0^\perp-1\big)$ from the right-movers plus one $\big(\bar L_0^\perp-1\big)$ from the left-movers, each sector paying its own $-1$.

## Open questions

- The cutoff computation nails the number, but the honest reason for $D=26$ and $a=-1$ is the no-anomaly condition on the Lorentz algebra, deferred to [[Critical dimension D=26]] and the CFT route in [[Total central charge and D = 26]].
- The closed-string tachyon signals an instability of the bosonic vacuum, not a genuine faster-than-light particle; its fate is not settled by the free spectrum.

## Exercise

The open- and closed-string tachyons both sit at oscillator level zero, yet the closed one is *four times* more negative in $\alpha'M^2$. Trace exactly where each factor of 2 in that "4" enters, starting from the two ingredients: the shared zero mode $\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$ and the doubling of sectors. Then state, in one sentence, why level matching does *not* introduce a *third* factor of 2 here.

> [!success]- Solution
> Start from the closed-string mass formula (2) evaluated on the ground state $N^\perp=\bar N^\perp=0$:
> $$M^2=\frac{2}{\alpha'}(0+0-2)=-\frac{4}{\alpha'},\qquad \alpha'M^2=-4.$$
> The open-string tachyon has $\alpha'M^2=N^\perp-1=-1$. The ratio is 4, and it factorizes as $2\times2$:
> - **First 2 — the normal-ordering constant doubles.** Each sector contributes its own $-1$ normal-ordering constant (from its own $E_0=-(D-2)/24=-1$), so the closed string's additive constant is $-2$ where the open string's is $-1$. That is one factor of 2, sitting inside the parentheses.
> - **Second 2 — the prefactor doubles.** The overall coefficient is $2/\alpha'$ for the closed string versus $1/\alpha'$ for the open string. This traces to the shared zero mode: the closed string's $\alpha_0^-$ relation $(1)$ carries the *sum* $L_0^\perp+\bar L_0^\perp$ and turns $\sqrt{2\alpha'}\,\alpha_0^-$ into $\alpha'p^-$, so $2p^+p^-=\frac{2}{\alpha'}\big(L_0^\perp+\bar L_0^\perp-2\big)$ and the mass formula inherits the $2/\alpha'$. The half-size zero mode $\sqrt{\alpha'/2}$ (versus the open $\sqrt{2\alpha'}$) is what makes each sector enter through $\frac{\alpha'}{4}p^Ip^I$ in the first place — the source of that $2/\alpha'$.
> $$\underbrace{2}_{\text{prefactor }2/\alpha'}\times\underbrace{2}_{\text{constant }-2}=4.$$
> **Why no third factor of 2.** Level matching only acts on *excited* states, where it forbids raising one tower alone and so bundles level-changes into steps of $4/\alpha'$. The ground state has nothing excited to match ($N^\perp=\bar N^\perp=0$ trivially satisfies $N^\perp=\bar N^\perp$), so level matching is silent here — the factor of 4 in the tachyon is entirely the constant-times-prefactor product above, not a level-spacing effect.
