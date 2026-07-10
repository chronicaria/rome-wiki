---
title: T-duality
number: "25.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, t-duality]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string cannot tell a circle of radius $R$ from one of radius $\alpha'/R$; the two give identical physics once momentum and winding trade places ($n\leftrightarrow m$). This is the sharpest way a string sees what a point particle cannot.

A point particle on a circle knows only how fast it goes around — its momentum $p=n/R$. A closed string knows that and how many times it is wrapped — its winding $m$. Shrinking the circle ($R\to 0$) makes momentum expensive but winding cheap; growing it does the reverse. Because winding and momentum enter the string's energy on exactly the same footing, the string cannot decide which is which: it reads a tiny circle as a huge one. That is T-duality, and a point particle, having no winding, never feels it.

## The symmetry of the mass formula

From [[Toroidal compactification]], a closed string on a circle of radius $R$ has mass$^2$

$$ M^2(R;n,m) = \frac{n^2}{R^2} + \frac{m^2 R^2}{\alpha'^2} + \frac{2}{\alpha'}(N^\perp+\bar N^\perp-2), \qquad N^\perp-\bar N^\perp = nm, \tag{1}$$

with $n$ the momentum quantum number, $m$ the winding number, and $N^\perp,\bar N^\perp$ the left/right oscillator levels. The two radius-dependent terms are mirror images. Send

$$ R \longrightarrow \tilde R = \frac{\alpha'}{R}, \qquad n \longleftrightarrow m. \tag{2}$$

The first term becomes $\dfrac{m^2}{\tilde R^2}=\dfrac{m^2R^2}{\alpha'^2}$ — exactly the *second* term of the original — and vice versa. The oscillator term is untouched, and the constraint $N^\perp-\bar N^\perp=nm$ is symmetric in $n,m$. Hence

$$ \boxed{\,M^2(R;n,m) = M^2(\alpha'/R;\,m,n)\,}. \tag{3}$$

As $n,m$ run over all integers, the two theories produce **the same list of masses**: momentum and winding trade places. The interchange is not a coincidence of the formula — it is the string being unable to distinguish "moving around a small circle" from "wrapping a big one." A point particle has no winding to swap, so no such symmetry exists for it; the duality is intrinsically stringy.

## The self-dual radius

The transformation $R\to\alpha'/R$ has one fixed point:

$$ \tilde R = R \;\Longrightarrow\; \frac{\alpha'}{R}=R \;\Longrightarrow\; R^* = \sqrt{\alpha'} = \ell_s. \tag{4}$$

$R^*$ is the **self-dual radius**, equal to the string length. Since every $R<R^*$ is physically the same as some $R>R^*$, you can never get *below* $R^*$ by shrinking — try to, and the theory reads it as a larger circle instead. This is one of string theory's built-in minimum-length features: toroidal compactification cannot probe distances shorter than the string scale.

At $R=R^*$ the spectrum is richest — extra massless states appear and the gauge symmetry enhances. Setting $\alpha'=1$ so $R^*=1$, level matching $N^\perp-\bar N^\perp=nm$ together with $M^2=0$ has these vector solutions (each with a spacetime index $\mu$):

- $n=m=\pm1$, $N^\perp=1,\bar N^\perp=0$: two states $\alpha_{-1}^\mu|0;p\rangle$ (unbarred oscillator excited), where $|0;p\rangle$ is the oscillator ground state carrying spacetime momentum $p$ together with compact charges $(n,m)$; quantum numbers $(n,m)=(\pm1,\pm1)$. These carry $(p_L,p_R)=(\pm2,0)$: all their compact charge is left-moving, so they are $SU(2)_L$ vectors.
- $n=-m=\pm1$, $N^\perp=0,\bar N^\perp=1$: two states $\bar\alpha_{-1}^\mu|0;p\rangle$ (barred oscillator excited), quantum numbers $(\pm1,\mp1)$. These carry $(p_L,p_R)=(0,\pm2)$: all their compact charge is right-moving, so they are $SU(2)_R$ vectors.

The oscillator sector and the charge sector sit on opposite sides here, and that is not a slip: the spacetime vector index comes from the transverse oscillator ($\alpha_{-1}^\mu$, our right-mover), while the $SU(2)_L$ charge $p_L=\pm2$ comes from the compact zero modes. Together they build the two charged $W^\pm$ bosons of $SU(2)_L$; the barred states do the same for $SU(2)_R$. The level count is fixed by (1): $nm=+1$ forces $N^\perp-\bar N^\perp=+1$, giving $(1,0)$, while $nm=-1$ forces $(0,1)$ — the excited oscillator sits on the side dictated by the sign of $nm$. These four new vectors join the two ordinary photons already present at $n=m=0$ — one from the metric ($G_{\mu,25}$) and one from the $B$-field ($B_{\mu,25}$), see [[Metric, B-field, and dilaton as low-energy fields]] — giving $3+3$ massless gauge bosons:

$$ U(1)\times U(1)\ \longrightarrow\ SU(2)\times SU(2). \tag{5}$$

Charged massless spin-1 fields can only be consistent as non-Abelian gauge bosons, so the string has manufactured a Yang–Mills symmetry out of nothing but a circle sitting at one special radius. Detune $R$ away from $R^*$ and those extra vectors gain mass — the symmetry Higgses back down to the Cartan $U(1)\times U(1)$.

## The dual coordinate: a literal new direction

Why are the two descriptions *physically* identical and not merely spectrally? Under (2) the left/right momenta transform as $p_L\to p_L$, $p_R\to -p_R$: the duality is a **sign flip on the right-movers only**. That suggests building a new field that flips $X_R$'s sign,

$$ \tilde X \equiv X_L - X_R, \qquad\text{versus the ordinary}\qquad X = X_L + X_R. \tag{6}$$

Using the compact mode expansion from [[Toroidal compactification]] ($X_L,X_R$ carrying $p_L=p+w$, $p_R=p-w$), the two combinations are

$$ X = x_0 + \alpha' p\,\tau + \alpha' w\,\sigma + (\text{osc}), \qquad \tilde X = q_0 + \alpha' w\,\tau + \alpha' p\,\sigma + (\text{osc}). \tag{7}$$

In $\tilde X$ the roles of $p$ and $w$ are exchanged: $w$ now multiplies $\tau$ (so winding is the *momentum* of $\tilde X$) and $p$ multiplies $\sigma$ (so momentum is the *winding* of $\tilde X$). The dual coordinate $\tilde X$ lives on the dual circle of radius $\tilde R=\alpha'/R$. Compactly (worldsheet indices $\alpha,\beta$; $\epsilon_{\tau\sigma}=+1$),

$$ \partial_\alpha X = \epsilon_{\alpha\beta}\,\partial^\beta \tilde X, \tag{8}$$

which just repackages $\partial_\tau X=\partial_\sigma\tilde X$, $\partial_\sigma X=\partial_\tau\tilde X$ from (7).

### Why $\tilde X$ is an equally good coordinate

In the free CFT the two-point functions are all that matter, and $\tilde X$ has the same ones as $X$. Holomorphically,

$$ X_L(z)X_L(0)\sim -\tfrac{\alpha'}{2}\ln z,\qquad X_R(\bar z)X_R(0)\sim -\tfrac{\alpha'}{2}\ln\bar z,\qquad X_LX_R\ \text{regular}. \tag{9}$$

The cross term vanishes, so

$$ \tilde X\,\tilde X = (X_L-X_R)(X_L-X_R)\sim -\tfrac{\alpha'}{2}\ln|z|^2 = X\,X. \tag{10}$$

The minus sign on $X_R$ squares away in every local contraction, so the stress tensor and the whole oscillator algebra are identical whether written in $X$ or in $\tilde X$. **T-duality is therefore not a map between two theories — it is one theory described in two coordinates**, and the "new direction that opens up as $R\to 0$" is $\tilde X$, a perfectly ordinary circle of radius $\alpha'/R$.

## Path-integral derivation: duality of the full quantum theory

The spectrum argument only shows the free-string states match. The following proof survives interactions and any worldsheet topology. Write the compact scalar as $X=R\varphi$ with $\varphi\sim\varphi+2\pi$, so the radius sits out front (Euclidean action):

$$ S[\varphi] = \frac{R^2}{4\pi\alpha'}\int d^2\sigma\,\partial_\alpha\varphi\,\partial^\alpha\varphi. \tag{11}$$

The trick is to gauge the shift symmetry $\varphi\to\varphi+\lambda$ with a worldsheet gauge field $A_\alpha$ (replacing $\partial_\alpha\varphi$ by $\partial_\alpha\varphi+A_\alpha$), then add a Lagrange multiplier $\theta$, periodic $\theta\sim\theta+2\pi$:

$$ S[\varphi,\theta,A] = \frac{R^2}{4\pi\alpha'}\int (\partial_\alpha\varphi+A_\alpha)^2 + \frac{i}{2\pi}\int \theta\,\epsilon^{\alpha\beta}\partial_\alpha A_\beta. \tag{12}$$

Now do the *same* path integral two ways.

**Integrate out $\theta$ first.** It forces $\epsilon^{\alpha\beta}\partial_\alpha A_\beta=0$ — the gauge field is flat. On a simply connected worldsheet a flat $A_\alpha$ is pure gauge; gauge it away and (12) collapses back to the original theory (11). (On a worldsheet with handles, $A_\alpha$ can have nontrivial holonomy around cycles; the periodicity of $\theta$ is exactly what makes those holonomies gauge-trivial, restoring the winding sectors. This is why the equivalence holds at any genus.)

**Integrate out $A_\alpha$ first.** Fix the gauge $\varphi=0$ and integrate the $\theta\,\partial A$ term by parts:

$$ \frac{R^2}{4\pi\alpha'}\int A_\alpha A^\alpha \;-\; \frac{i}{2\pi}\int \epsilon^{\alpha\beta}(\partial_\alpha\theta)\,A_\beta. \tag{13}$$

Now $A_\alpha$ appears purely quadratically, with no derivatives — a Gaussian integral done pointwise. Complete the square ($c\equiv R^2/4\pi\alpha'$, source $b_\alpha\equiv-\tfrac{i}{2\pi}\epsilon_{\alpha}{}^{\beta}\partial_\beta\theta$):

$$ c\,A^2 + b\!\cdot\! A = c\Big(A+\tfrac{b}{2c}\Big)^2 - \tfrac{b^2}{4c}. \tag{14}$$

The shift is absorbed by translating the integration variable, leaving the source term $-b^2/4c$. Using $(\epsilon\,\partial\theta)^2=(\partial\theta)^2$ and $b^2=-\tfrac{1}{4\pi^2}(\partial\theta)^2$,

$$ -\frac{b^2}{4c} = +\frac{\alpha'}{4\pi R^2}(\partial\theta)^2 \;\;\Longrightarrow\;\; S[\theta]=\frac{\alpha'}{4\pi R^2}\int d^2\sigma\,\partial_\alpha\theta\,\partial^\alpha\theta. \tag{15}$$

The sign came out positive — a healthy Euclidean kinetic term. Since $\theta\sim\theta+2\pi$, this is *the same compact-scalar theory* as (11) but with

$$ \frac{\tilde R^2}{4\pi\alpha'} = \frac{\alpha'}{4\pi R^2} \;\;\Longrightarrow\;\; \tilde R = \frac{\alpha'}{R}. \tag{16}$$

Same partition function, dual radius — for worldsheets of any topology, hence for interacting strings, not just the free spectrum. The overall Gaussian factor $\propto\sqrt{\alpha'}/R$ that we discarded is what produces the dilaton shift below.

### Buscher rules, the general case

If the background is independent of a coordinate $y$, gauging $y\to y+\lambda$ makes $A_\alpha$ appear quadratically with coefficients built from $G_{yy},G_{yi},B_{yi}$; integrating it out in the dual order inverts that quadratic form, so $G_{yy}\to 1/G_{yy}$ and the off-diagonal metric and $B$ components trade roles. The full rules live in [[Metric, B-field, and dilaton as low-energy fields]]; the rectangular-circle case here is just $G_{yy}=R^2/\alpha'$ inverting to $\tilde R=\alpha'/R$.

## What else transforms

- **String coupling.** A scientist in a stringy world must not be able to tell $R$ from $\alpha'/R$ even by measuring the prefactor of the effective action, which scales as $R/g_s^2$. Holding $R/g_s^2$ invariant forces
$$ g_s \longrightarrow \tilde g_s = \frac{\sqrt{\alpha'}\,g_s}{R}. \tag{17}$$
This is exactly the discarded Gaussian factor from (16) made precise; see [[Metric, B-field, and dilaton as low-energy fields]].
- **Open strings / D-branes.** T-duality along a direction *transverse* to a D$p$-brane turns its Dirichlet condition into Neumann (from (8), $\partial_\tau X=0 \Rightarrow \partial_\sigma\tilde X=0$): a D$p$-brane becomes a D$(p{+}1)$-brane, and along a wrapped direction a D$p$-brane becomes a D$(p{-}1)$-brane. This is historically how D-branes were discovered — by tracking open strings under T-duality.
- **Type IIA $\leftrightarrow$ IIB**, and the two heterotic strings, map into each other under T-duality.
- **Mirror symmetry** is the same confusion on Calabi–Yau targets: two topologically distinct manifolds give one CFT. Noted here only for orientation.

## Open questions
- The dilaton shift (17) is argued from the effective-action prefactor and identified with the leftover Gaussian factor in (16), but the precise determinant/Jacobian computation is deferred to a fuller Buscher-rule treatment.
- The path-integral argument establishes the equivalence at any genus; a fully explicit genus-by-genus proof tracking every measure factor and holonomy sum is beyond this module's first pass.

## Exercise

The path-integral derivation (11)–(16) hinged on one number: the leftover kinetic coefficient after integrating out $A_\alpha$. Suppose you had instead added the multiplier term with a *different* normalization, $\dfrac{ik}{2\pi}\int\theta\,\epsilon^{\alpha\beta}\partial_\alpha A_\beta$ for some constant $k$. Redo the complete-the-square and read off the dual radius $\tilde R(k)$. What value of $k$ reproduces the correct self-duality (i.e. dualizing twice returns you to $R$), and why is that the only consistent choice?

> [!success]- Solution
> With the rescaled term, the gauge-fixed action (13) becomes
> $$ \frac{R^2}{4\pi\alpha'}A^2 - \frac{ik}{2\pi}(\epsilon\,\partial\theta)\!\cdot\! A. $$
> So $c=R^2/4\pi\alpha'$ is unchanged but the source is $b_\alpha=-\tfrac{ik}{2\pi}\epsilon_\alpha{}^\beta\partial_\beta\theta$, giving $b^2=-\tfrac{k^2}{4\pi^2}(\partial\theta)^2$. The leftover $-b^2/4c$ is
> $$ +\frac{k^2\alpha'}{4\pi R^2}(\partial\theta)^2 = \frac{\tilde R^2}{4\pi\alpha'}(\partial\theta)^2 \;\Longrightarrow\; \tilde R^2 = \frac{k^2\alpha'^2}{R^2} \;\Longrightarrow\; \tilde R = \frac{k\,\alpha'}{R}. $$
> Now dualize a second time: $\tilde{\tilde R} = k\alpha'/\tilde R = k\alpha'/(k\alpha'/R) = R$. So the double-dual returns to $R$ for *any* $k$ — that consistency alone does not fix $k$. What fixes it is matching the spectrum: T-duality must be $R\to\alpha'/R$ (from the mass formula (1)–(3)), which is $\tilde R=k\alpha'/R$ only when
> $$ k = 1. $$
> The $k=1$ normalization is the one for which the multiplier $\theta$ has the standard period $2\pi$ and lives on a genuine dual circle. Any other $k$ would describe duality onto a circle of the wrong size, inconsistent with the momentum/winding swap the spectrum already forces. The moral: the factor of $1/2\pi$ in front of the $\theta\,\partial A$ coupling is not cosmetic — it is fixed by demanding the path integral reproduce the known duality.
