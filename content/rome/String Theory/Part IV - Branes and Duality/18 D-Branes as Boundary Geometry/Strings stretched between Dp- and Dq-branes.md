---
title: Strings stretched between Dp- and Dq-branes
number: "18.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, nd-coordinates]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string running between two branes of *different* dimension has directions that are Neumann at one end and Dirichlet at the other; these ND directions carry half-integer modes, which shift the ground-state energy by $+\tfrac{1}{16}$ per direction and remove the massless gauge boson.

One end of the string lives on the big brane (D$p$) and slides freely; the other is pinned to the small brane (D$q$). A direction that runs *along* the big brane but *across* the small one leaves that string free at one end and frozen at the other. A string clamped on one side and loose on the other rings at half-integer frequencies — an organ pipe open at one end, whose lowest note is a quarter wavelength rather than a half. Half-integer instead of integer modes is the entire content of this note; the shifted vacuum energy and the missing photon both follow from it.

Builds on [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]] and [[Strings between parallel branes]].

## Three kinds of direction, not two

For one brane (or two parallel ones of the *same* dimension) every direction is either tangent (Neumann, free endpoint) or normal (Dirichlet, pinned endpoint). Put down a D$p$- and a D$q$-brane with $q<p$, parallel and nested, and a third possibility opens up: a direction can be tangent to the big brane but normal to the small one. So directions split into **three** classes.

| class | along D$p$? | along D$q$? | b.c. for a D$p\!\to\!$D$q$ string | count |
|---|---|---|---|---|
| **common tangential** | yes | yes | **NN** (free–free) | $q+1$ |
| **mixed** | yes | no | **ND** (free–pinned) | $p-q$ |
| **common normal** | no | no | **DD** (pinned–pinned) | $d-p$ |

The counts sum to $d+1$, one per spacetime direction. For a concrete case, take a **D2** filling the $(x,y)$ plane and a **D1** lying along $x$. Then $x$ is common tangential (NN), $z$ is common normal (DD), and $y$ is the mixed one — along the D2 sheet but normal to the D1 line, hence ND.

The light-cone gauge fixes $X^\pm$ using two of the common tangential (NN) directions, leaving three index types:

$$ \underbrace{X^+,X^-,\{X^i\}}_{\text{NN}}\qquad \underbrace{\{X^r\}}_{\text{ND}}\qquad\underbrace{\{X^a\}}_{\text{DD}}, \qquad i=2,\dots,q,\;\; r=q{+}1,\dots,p,\;\; a=p{+}1,\dots,d. \tag{1}$$

Watch the **upper limit $q$** on the transverse NN index $i$: only directions common to *both* branes are NN. The directions $q{+}1,\dots,p$ are precisely the mixed ones. If you ever forget which class a direction is in, ask the endpoint question: *can this endpoint move in this direction?* Free means Neumann, pinned means Dirichlet — one answer per end, per direction.

## The ND coordinate: free at $\sigma=0$, pinned at $\sigma=\pi$

Orient the string from the D$p$ (at $\sigma=0$) to the D$q$ (at $\sigma=\pi$). A mixed coordinate $X^r$ is **Neumann at $\sigma=0$** (its endpoint slides along the D$p$) and **Dirichlet at $\sigma=\pi$** (its endpoint is nailed to the D$q$'s position $\bar x_2^r$):

$$ \frac{\partial X^r}{\partial\sigma}(\tau,\sigma)\Big|_{\sigma=0} = 0, \qquad X^r(\tau,\sigma)\big|_{\sigma=\pi} = \bar x_2^r. \tag{2}$$

Solve the wave equation as a left- plus right-mover, $X^r=\tfrac12(f^r(\tau+\sigma)+g^r(\tau-\sigma))$. The $\sigma=0$ Neumann condition sets $g^r{}'=f^r{}'$, so $g^r=f^r+$const, and absorbing the constant into $\bar x_2^r$ gives

$$ X^r(\tau,\sigma) = \bar x_2^r + \tfrac12\big(f^r(\tau+\sigma)+f^r(\tau-\sigma)\big). \tag{3}$$

Now impose Dirichlet at $\sigma=\pi$: $X^r(\tau,\pi)=\bar x_2^r$ requires $f^r(\tau+\pi)=-f^r(\tau-\pi)$, i.e.

$$ f^r(u+2\pi) = -\,f^r(u). \tag{4}$$

This sign is the crux of the note. Compare it with the two familiar cases:

- **NN or DD** (free–free or pinned–pinned): $f$ is *periodic*, $f(u+2\pi)=f(u)$ → integer harmonics.
- **ND** (free–pinned): $f$ is *anti-periodic*, it flips sign after $2\pi$ and only returns after $4\pi$ → **half-integer harmonics**.

The minus sign kills every even harmonic (they satisfy the *plus* sign) and keeps only the odd ones. This is the standard Sturm–Liouville fact that a mode with a Neumann end and a Dirichlet end is a $\cos\!\big((n{+}\tfrac12)\sigma\big)$, not a $\cos(n\sigma)$ or $\sin(n\sigma)$ — the clamped-loose organ pipe, whose fundamental is a quarter wave.

## Half-integer modes — the fingerprint of ND

Expanding the anti-periodic $f^r$ over odd harmonics and passing to oscillators gives

$$ X^r(\tau,\sigma) = \bar x_2^r + i\sqrt{2\alpha'}\sum_{n\in\mathbb Z_{\text{odd}}}\frac2n\,\alpha_{n/2}^r\,e^{-i\frac n2\tau}\cos\!\Big(\frac{n\sigma}{2}\Big), \tag{5}$$

so the oscillator labels are $\tfrac12,\tfrac32,\tfrac52,\dots$ — half-integers. (The factor $i$ makes $X^r$ real given the reality condition $(\alpha^r_{n/2})^\dagger=\alpha^r_{-n/2}$; the factor $\tfrac2n$ fixes the standard commutator below.) Two consequences to read straight off:

- **No zero mode, no momentum.** There is no $n=0$ term — odd $n$ excludes it — so an ND coordinate carries no average momentum. That fits: one end is pinned, so the string can't drift in this direction. (Contrast the DD case in [[Strings between parallel branes]], which also has no momentum but *does* get a nonzero $\alpha_0$ from brane separation. ND has neither.)
- **Half-integer moding is exactly the NS-sector worldsheet fermion.** When you meet the superstring, the anti-periodic (NS) fermion carries this same half-integer expansion: same boundary algebra, different field.

The commutator inherits the label:

$$ [\alpha_{m/2}^r,\alpha_{n/2}^s] = \frac{m}{2}\,\delta^{rs}\delta_{m+n,0}, \qquad m,n\in\mathbb Z_{\text{odd}}, \tag{6}$$

the half-integer echo of the usual $[\alpha_m,\alpha_n]=m\,\delta_{m+n,0}$.

## The vacuum shifts: $-\tfrac{1}{24}$ per integer coordinate, $+\tfrac{1}{48}$ per ND

The number operator now has three pieces — integer-moded NN and DD, plus the new half-integer ND:

$$
N^\perp
= \sum_{n=1}^{\infty}\sum_{i=2}^{q} n\,a_n^{i\dagger}a_n^i
\;+\; \sum_{\substack{k=1\\ k\ \mathrm{odd}}}^{\infty}\sum_{r=q+1}^{p}\frac{k}{2}\,a_{k/2}^{r\dagger}a_{k/2}^r
\;+\; \sum_{m=1}^{\infty}\sum_{a=p+1}^{d} m\,a_m^{a\dagger}a_m^a . \tag{7}
$$

The middle sum is the newcomer: ND creation operators raise the level in steps of $\tfrac12$.

The zero-point energy changes too, because half-integer modes sum differently. Each transverse coordinate contributes $\tfrac12\sum(\text{its mode frequencies})$; the sum diverges and is defined by a cutoff, with the $\zeta$-function values below its finite, regularized part — not a naive sum of integers:

- **Integer-moded (NN or DD):** $\displaystyle\tfrac12\sum_{n=1}^\infty n = \tfrac12\zeta(-1) = \tfrac12\big(-\tfrac{1}{12}\big) = -\tfrac{1}{24}.$
- **Half-integer-moded (ND):** the sum runs over half-odd-integers, which repackages into a sum over *odd* positive integers, $\tfrac14\sum_{n\text{ odd}}n$. Splitting all integers into odd + even, $\sum_{\text{all}}=\sum_{\text{odd}}+2\sum_{\text{all}}$, so $\sum_{n\text{ odd}}n=-\sum_{\text{all}}n=+\tfrac{1}{12}$, giving $\tfrac14\cdot\tfrac{1}{12}=+\tfrac{1}{48}.$

So swapping an integer coordinate for an ND one moves its zero-point contribution from $-\tfrac{1}{24}$ to $+\tfrac{1}{48}$ — a jump of $+\tfrac{1}{16}$. With 24 transverse coordinates, $(p-q)$ of them ND and the rest at $-\tfrac{1}{24}$:

$$
a = -\frac{24-(p-q)}{24}+\frac{p-q}{48}
= -1+\frac{p-q}{16}. \tag{8}
$$

The photon-free space-filling value $-1$ is nudged upward by $\tfrac{1}{16}$ for every mixed direction.

## Mass formula

Only **common DD** separations create a taut stretched segment (the mechanism of [[Strings between parallel branes]]); a displacement along an ND direction can always be absorbed by sliding the free D$p$ endpoint, so it costs no tension energy. Putting the shifted intercept (8) together with the stretch term:

$$
\boxed{\;
M^2
= \left(\frac{|\Delta\bar x_{\mathrm{DD}}|}{2\pi\alpha'}\right)^2
+ \frac{1}{\alpha'}\left(N^\perp -1+\frac{p-q}{16}\right).
\;} \tag{9}
$$

The first term is $(\text{tension}\times\text{stretched length})^2$; the second is oscillators plus the ND-shifted vacuum.

## Spectrum: a scalar, and no photon

Take the branes coincident in the common-DD directions so the stretch term vanishes. The **ground state** ($N^\perp=0$) is a single scalar living on the $(q{+}1)$-dimensional D$q$ world-volume (its momentum labels $\vec p=(p^2,\dots,p^q)$ span only the NN directions):

$$ M^2 = \frac{1}{\alpha'}\left(-1+\frac{p-q}{16}\right). \tag{10}$$

So it is **tachyonic for $p-q<16$, massless exactly at $p-q=16$, massive for $p-q>16$** (bosonic string). The first excited states use one ND oscillator, $N^\perp=\tfrac12$:

$$ a_{1/2}^{r\dagger}\,|p^+,\vec p\,;[pq]\rangle, \qquad r=q{+}1,\dots,p, \tag{11}$$

giving $(p-q)$ scalar fields on the world-volume — one per mixed direction (the label $r$ is not a D$q$ world-volume index, so these are scalars, not a vector).

Unlike the same-dimension case, this sector has **no massless gauge boson**. A would-be photon needs an NN oscillator, $a_1^{i\dagger}$, at level $N^\perp=1$; but with $p>q$ the intercept obeys $-1+\tfrac{p-q}{16}>-1$, so $N^\perp\ge1$ forces $M^2>0$. Every candidate vector is massive. Gauge symmetry lives where strings can end on *identical* branes; a D$p$–D$q$ string spans a genuine dimensional mismatch, and that mismatch is exactly what the half-integer modes encode. The lightest thing the sector offers is a scalar, not a photon.

## Open questions

- DN (a string from D$q$ to D$p$) simply swaps the two endpoints; the moding, intercept, and spectrum are identical — a mirror image, $a_{\mathrm{DN}}=a_{\mathrm{ND}}=+\tfrac{1}{48}$.
- The bosonic ground state is tachyonic unless $p-q\ge16$; in the *super*string the same ND counting produces the phenomenologically central case of D-branes differing by 4 (e.g. D0 inside D4), where the shift lands the sector on a supersymmetric, tachyon-free spectrum. That belongs to a later superstring layer.

## Exercise

A string runs from a **D5** to a **D1** (so $p=5$, $q=1$), both coincident in all common normal directions, in the bosonic $d=25$ theory.

(a) How many NN, ND, and DD *transverse* directions does this sector have? (Total transverse $=24$.)
(b) Compute the ground-state $M^2$ from the shifted intercept. Is it a tachyon, massless, or massive?
(c) A friend claims "there must be a massless photon on the D1 world-volume from this sector." Refute it in one sentence.

> [!success]- Solution
> **(a)** Common tangential (NN) directions total $q+1=2$ ($x^0$ and $x^1$); the light-cone gauge eats both, leaving $q-1=0$ *transverse* NN. Mixed (ND): $p-q=4$. Common normal (DD): $d-p=25-5=20$. Transverse total $=0+4+20=24\ \checkmark$
> **(b)** The intercept is $-1+\dfrac{p-q}{16}=-1+\dfrac{4}{16}=-\dfrac34$. With $N^\perp=0$ and coincident branes,
> $$ M^2=\frac{1}{\alpha'}\Big(-1+\frac{4}{16}\Big)=-\frac{3}{4\alpha'}<0, $$
> still a **tachyon** (as expected, since $p-q=4<16$).
> **(c)** A massless vector would need an NN oscillator at level $N^\perp=1$, giving $M^2=\tfrac{1}{\alpha'}(1-\tfrac34)=+\tfrac{1}{4\alpha'}>0$ — massive, not massless; the sector has no massless gauge field.
