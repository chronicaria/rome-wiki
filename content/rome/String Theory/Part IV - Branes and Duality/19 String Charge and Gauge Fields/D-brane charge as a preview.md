---
title: D-brane charge as a preview
number: "19.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, brane-charge]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A D$p$-brane carries charge under a $(p{+}1)$-index antisymmetric tensor exactly as a string ([[Fundamental string charge]]) carries charge under the two-index $B_{\mu\nu}$ — one more rung on the ladder "a dimension-$n$ object couples to an $(n{+}1)$-index gauge field." Wrap such a brane on small circles and it looks like an ordinary charged point particle whose charge is its volume in string units, $Q=V_p/\ell_s^p$, a preview of the Ramond–Ramond fields these branes actually couple to in the superstring.

## The coupling ladder

A charged object of dimension $n$ drags an oriented $n$-dimensional surface element through spacetime, and the natural field to feed that element into is an $n$-index antisymmetric tensor. That one principle generates the table:

| object | worldvolume dim | couples to | indices |
|---|---|---|---|
| point particle | 1 (worldline) | $A_\mu$ | 1 |
| fundamental string | 2 (worldsheet) | $B_{\mu\nu}$ | 2 |
| D$p$-brane | $p{+}1$ (worldvolume) | $A_{\mu_0\cdots\mu_p}$ | $p{+}1$ |

A point particle drags a tangent vector $dx^\mu$ and feeds it to $A_\mu$; a string drags an oriented area 2-form and feeds it to $B_{\mu\nu}$; a D$p$-brane drags an oriented $(p{+}1)$-form and feeds it to a $(p{+}1)$-index tensor. So a D$p$-brane is *electrically charged* when it couples to a massless $(p{+}1)$-index antisymmetric tensor $A_{\mu_0\cdots\mu_p}$, through the direct generalization of the string's coupling:

$$S_p = -\int d\tau\,d\sigma_1\cdots d\sigma_p\;\frac{\partial X^{\mu_0}}{\partial\tau}\frac{\partial X^{\mu_1}}{\partial\sigma_1}\cdots\frac{\partial X^{\mu_p}}{\partial\sigma_p}\,A_{\mu_0\mu_1\cdots\mu_p}\big(X\big).\tag{1}$$

The worldvolume is parameterized by $(\tau,\sigma_1,\dots,\sigma_p)$, and the product of tangent vectors is the oriented volume element the brane sweeps out. Two sanity checks recover what we already know:

- **$p=0$** gives $S_0=-\int d\tau\,\dot X^{\mu_0}A_{\mu_0}=-\int A_\mu\,dx^\mu$, the point-particle coupling to Maxwell.
- **$p=1$** gives $S_1=-\int d\tau\,d\sigma\,\partial_\tau X^{\mu}\partial_\sigma X^{\nu}A_{\mu\nu}$, identical to the string coupling $S_B=-\tfrac12\int d\tau\,d\sigma\,\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu B_{\mu\nu}$. Expand $\epsilon^{\alpha\beta}\partial_\alpha X^\mu\partial_\beta X^\nu=\partial_\tau X^\mu\partial_\sigma X^\nu-\partial_\sigma X^\mu\partial_\tau X^\nu$; contracting with the antisymmetric $B_{\mu\nu}$, the two terms are equal, the $\tfrac12$ cancels the resulting factor of $2$, and $(1)$ returns with $A_{\mu\nu}=B_{\mu\nu}$. The $\tfrac12\epsilon^{\alpha\beta}$ is the reparameterization-invariant way of writing that same oriented area.

Dimensionally $S_p$ must be a pure number, so $[A_{\mu_0\cdots\mu_p}]=M^{p+1}=L^{-(p+1)}$ — one more power of mass per index, as for $A_\mu$ ($M$) and $B_{\mu\nu}$ ($M^2$).

Gauge invariance follows the same boundary logic as everywhere in this module. If $A_{p+1}\mapsto A_{p+1}+d\Lambda_p$ then $\delta S_p\propto\int_{W_{p+1}}d\Lambda_p=\int_{\partial W_{p+1}}\Lambda_p$: it vanishes for a closed brane worldvolume, and a brane *with* boundary needs extra objects to soak up the leftover — one rung above the open-string endpoint of [[Endpoint charge]].

## Which fields exist — and why stability follows

This coupling only means something if a massless $(p{+}1)$-index field actually *exists* in the spectrum. This is where bosonic and superstring theories part ways.

- **Bosonic** closed string theory has only $B_{\mu\nu}$ (two indices, sourced by strings). There is no higher antisymmetric tensor for a D$p$-brane to couple to, so bosonic D-branes carry **no conserved charge** — and indeed they are unstable, their worldvolume open string having a tachyon.
- **Superstrings** add antisymmetric tensors in the **Ramond–Ramond (R–R) sector**:
$$\text{IIA: } A_\mu,\ A_{\mu\nu\rho};\qquad \text{IIB: } A,\ A_{\mu\nu},\ A_{\mu\nu\rho\sigma}.$$

These R–R fields couple electrically to the D-brane whose worldvolume dimension matches the field's index count:

- IIA: $A_\mu\to$ D0-brane, $A_{\mu\nu\rho}\to$ D2-brane.
- IIB: $A_{\mu\nu}\to$ D1-brane, $A_{\mu\nu\rho\sigma}\to$ D3-brane.

So the electrically charged D-branes are IIA: D0, D2 and IIB: D1, D3.

Charge and energy conservation together forbid a charged object from decaying when nothing lighter carries its charge. The R–R-charged D-branes have nowhere to decay to, so they are stable — the reason D-branes count as trustworthy dynamical objects rather than calculational bookkeeping. The D4/D6/D8 of IIA and D5/D7/D9 of IIB carry *magnetic* R–R charge instead, deferred here. The stable IIB D3-brane, with its four-dimensional worldvolume, is the one shaped like our own spacetime.

## Worked payoff: a wrapped brane is a charged particle

To turn the analogy into a number, curl up $p$ spatial dimensions into circles of radii $R^1,\dots,R^p$ and wrap the D$p$-brane completely around them. A low-dimensional observer who cannot resolve the small circles sees a point particle, and we can read off its Maxwell charge straight from $(1)$.

Parameterize the wrapped directions and the free ones by

$$X^k(\tau,\sigma^1,\dots,\sigma^p)=R^k\sigma^k\quad(\sigma^k\in[0,2\pi],\ \text{not summed}),\qquad X^m(\tau,\dots)=x^m(\tau),$$

so as $\sigma^k$ runs over $[0,2\pi]$ the brane wraps the $k$-th circle once, while the non-compact coordinates $x^m(\tau)$ trace a single worldline — the point-particle trajectory.

Now feed this into $(1)$ and follow the indices. Only $X^k$ depends on $\sigma^k$, and $\partial_{\sigma^k}X^{\mu_k}=R^k\delta^{\mu_k}_{\,k}$, so each $\sigma$-slot forces $\mu_k=k$. Full antisymmetry of $A$ then leaves the $\tau$-slot no choice but a non-compact index, $\mu_0=m$:

$$S_p=-\int d\tau\,d\sigma_1\cdots d\sigma_p\;\frac{\partial X^m}{\partial\tau}\,R^1R^2\cdots R^p\;A_{m\,12\cdots p}\big(x(\tau)\big).$$

Nothing left in the integrand depends on the $\sigma$'s, so each circle integral is just its circumference, $\int_0^{2\pi}d\sigma^k=2\pi$, and the radii already pulled out assemble the compact volume

$$V_p=(2\pi R^1)\cdots(2\pi R^p).$$

Define a reduced one-index gauge field with a factor of $\alpha'$ chosen to fix its units,

$$\frac{1}{(\alpha')^{p/2}}\,\bar A_m(x)\equiv A_{m\,12\cdots p}(x).\tag{2}$$

With $\ell_s=\sqrt{\alpha'}$ so that $(\alpha')^{p/2}=\ell_s^{\,p}$, everything collapses to a point-particle Maxwell coupling:

$$S_p=-\frac{V_p}{\ell_s^{\,p}}\int \bar A_m\,dx^m
\qquad\Longrightarrow\qquad
\boxed{\,Q=\frac{V_p}{\ell_s^{\,p}}\,}.\tag{3}$$

The wrapped D$p$-brane *is* a charged point particle, and its Maxwell charge is the brane's volume measured in string-length units — bigger wrapped brane, bigger charge. $Q$ is dimensionless, as a charge should be. This is dimensional reduction made concrete: drop the dependence on the compact directions, shed all but one index, and the word *charge* becomes a number you can compute rather than a structural analogy.

The factor of $\alpha'$ in $(2)$ is there purely to fix units. The full tensor component carries $[A_{m\,12\cdots p}]=M^{p+1}=M^p\cdot M$; dividing out the $M^p$ supplied by $(\alpha')^{-p/2}$ leaves $[\bar A_m]=M$, the dimension of a genuine Maxwell potential (inverse length). That is exactly what makes $Q=V_p/\ell_s^p$ dimensionless.

## The word "charge," made honest (and where it goes next)

In modern D-brane language the R–R charge sits inside a **Wess–Zumino coupling** $S_{\rm WZ}=\mu_p\int_{W_{p+1}}C_{p+1}+\cdots$, where $C_{p+1}$ is the R–R potential (the $A_{\mu_0\cdots\mu_p}$ above), $\mu_p$ is the R–R charge density, and the omitted terms involve the brane field strength $\mathcal F=F+B$ from [[Maxwell fields on branes]]. The value of $\mu_p$, charge quantization, and BPS stability all need superstring machinery and belong to later material. Here the leading term $(1)$ is all we use, and its wrapped-brane reduction $(3)$ is the whole point: it turns "charge" into something computed.

## Open questions

- Why exactly these R–R tensors appear in IIA vs. IIB (the GSO projection, and why IIA has even-$p$ / IIB has odd-$p$ stable branes) is superstring-spectrum material this note imports as fact.
- Magnetic R–R charge for D4/D6/D8 and D5/D7/D9: those branes couple to *dual* R–R potentials, not developed here.
- The full Wess–Zumino action, charge quantization, and the tension–charge (BPS) relation need D-brane dynamics beyond this module.
- $N$ coincident D-branes $\to U(N)$ gauge symmetry and the Standard-Model group $SU(3)\times SU(2)\times U(1)$: see [[D-branes and the Standard Model]].

## Exercise

Specialize the wrapped-brane result to the simplest case: a **D1-brane wrapped once on a single circle of radius $R$**. Starting from the coupling $(1)$ with $p=1$, carry out the reduction yourself and obtain $Q$. Then confirm $Q$ is dimensionless directly from the units of the two-index field $A_{\mu\nu}$, and say in one sentence what object this wrapped D1-brane looks like — and to what other stringy object it is charge-equivalent.

> [!success]- Solution
> Set $p=1$. The wrapped and free coordinates are $X^1=R\sigma^1$ with $\sigma^1\in[0,2\pi]$ and $X^m=x^m(\tau)$. The $p=1$ coupling is
> $$S_1=-\int d\tau\,d\sigma^1\;\partial_\tau X^{\mu_0}\,\partial_{\sigma^1}X^{\mu_1}\,A_{\mu_0\mu_1}.$$
> Only $X^1$ depends on $\sigma^1$, and $\partial_{\sigma^1}X^{\mu_1}=R\,\delta^{\mu_1}_{\,1}$, forcing $\mu_1=1$; antisymmetry of $A_{\mu_0\mu_1}$ then forces $\mu_0=m$ (a non-compact index). So
> $$S_1=-\int d\tau\,d\sigma^1\;\frac{\partial X^m}{\partial\tau}\,R\,A_{m1}(x(\tau)).$$
> The integrand is $\sigma^1$-independent, so $\int_0^{2\pi}d\sigma^1=2\pi$ gives the circle circumference $V_1=2\pi R$. Defining $\bar A_m\equiv (\alpha')^{1/2}A_{m1}=\ell_s A_{m1}$ per $(2)$,
> $$S_1=-\frac{2\pi R}{\ell_s}\int \bar A_m\,dx^m
> \qquad\Longrightarrow\qquad Q=\frac{V_1}{\ell_s}=\frac{2\pi R}{\ell_s},$$
> which is $(3)$ at $p=1$.
>
> **Dimensions.** A two-index field has $[A_{\mu\nu}]=M^{2}$. In $\bar A_m=\ell_s A_{m1}$ the factor $\ell_s\sim L=M^{-1}$ turns $M^2$ into $M$, so $\bar A_m$ is a bona fide Maxwell potential (inverse length). Then $Q=V_1/\ell_s\sim L/L$ is dimensionless. (Equivalently: $[V_1]=L$, $[\ell_s]=L$.)
>
> **What it looks like.** To the low-dimensional observer it is a charged point particle carrying Maxwell charge $2\pi R/\ell_s$. Since $p=1$, the coupling $(1)$ is structurally identical to the fundamental string's $B$-coupling, so this wrapped D1-brane is the point-particle image of a charge-carrying string — charge-equivalent to a fundamental string.
