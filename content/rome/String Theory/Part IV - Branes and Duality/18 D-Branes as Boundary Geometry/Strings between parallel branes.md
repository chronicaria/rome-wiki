---
title: Strings between parallel branes
number: "18.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, stretched-strings]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Put two parallel D$p$-branes a distance $|\Delta\bar x|$ apart; an open string whose two ends land on *different* branes is pulled taut across the gap, and the energy stored in that stretch, tension $\times$ length, shows up directly as extra mass: $M^2 = \big(\tfrac{|\Delta\bar x|}{2\pi\alpha'}\big)^2 + \tfrac1{\alpha'}(N^\perp-1)$.

Builds on [[Open strings on one brane]] and [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]].

## Separation buys mass

A relaxed rubber band costs nothing to hold; a stretched one pulls back. A fundamental string carries tension $T_0 = 1/(2\pi\alpha')$, so pinning its two ends to branes held apart forces it into a taut segment with rest energy $T_0\times(\text{length})$. Rest energy is mass, so a stretched string is a heavier particle than an unstretched one. Slide the branes together and the extra mass melts to zero. That one fact — separation buys mass — is what turns a stack of branes into a gauge theory with a built-in Higgs mechanism.

## Setup: two branes, four sectors

Put brane 1 at $x^a = \bar x_1^a$ and brane 2 at $x^a = \bar x_2^a$ in the normal (Dirichlet) directions $a=p+1,\dots,d$. Same dimensionality and parallel, so they share their tangent and normal directions; they coincide iff $\bar x_1^a=\bar x_2^a$ for all $a$, otherwise they are separated by $\Delta\bar x^a \equiv \bar x_2^a-\bar x_1^a$.

An open string has two endpoints, each free to land on brane 1 or brane 2, giving **four sectors**. Label a ground state $|p^+,\vec p\,;[ij]\rangle$, where $[ij]$ means the $\sigma=0$ end sits on brane $i$ and the $\sigma=\pi$ end on brane $j$:

$$ [11],\ [22]\quad(\text{both ends, same brane}), \qquad [12],\ [21]\quad(\text{stretched}). $$

The $[11]$ and $[22]$ sectors are just two copies of the single-brane story in [[Open strings on one brane]]. The new physics is entirely in the stretched sectors $[12]$ and $[21]$.

These two are *oriented oppositely* — one runs brane 1 $\to$ brane 2, the other brane 2 $\to$ brane 1 — and orientation is physical: reversing a string flips the sign of its charge. So $[12]$ and $[21]$ are genuinely distinct sectors, not one string read backwards.

**Picture the branes as two nodes and an oriented open string as a directed edge.** The label $[ij]$ records where the edge starts and ends. When the nodes coincide these directed edges become the matrix indices of [[Chan-Paton factors]].

## The stretched mode expansion

Take a $[12]$ string. The NN coordinates ($X^+,X^-,X^i$) quantize *exactly* as on one brane — nothing about the second brane touches the tangent directions. Only the DD (normal) coordinates change: the two ends are now pinned at **different** values,

$$ X^a(\tau,\sigma)\big|_{\sigma=0} = \bar x_1^a, \qquad X^a(\tau,\sigma)\big|_{\sigma=\pi} = \bar x_2^a. \tag{1}$$

The single-brane solution already enforces the $\sigma=0$ end via a *difference* of one function (see [[Open strings on one brane]]):

$$ X^a(\tau,\sigma) = \bar x_1^a + \tfrac12\big(f^a(\tau+\sigma) - f^a(\tau-\sigma)\big). \tag{2}$$

Imposing the $\sigma=\pi$ condition on (2) gives the new constraint

$$ f^a(u+2\pi) - f^a(u) = 2\,\Delta\bar x^a. \tag{3}$$

This is the entire difference from one brane. There $f^a$ was strictly periodic; now it must grow by a fixed step $2\Delta\bar x^a$ each period, so only its derivative $f'^a$ stays periodic and $f^a$ itself picks up a term linear in its argument — exactly the piece a periodic function forbids. Writing $f^a(u) = f_0^a\,u + (\text{periodic})$ and matching (3) fixes the slope $f_0^a = \Delta\bar x^a/\pi$. Substituting back and doing the trig yields

$$ X^a(\tau,\sigma) = \bar x_1^a + \Delta\bar x^a\,\frac{\sigma}{\pi} + \sqrt{2\alpha'}\sum_{n\neq0}\frac1n\,\alpha_n^a\,e^{-in\tau}\sin n\sigma. \tag{4}$$

Reading (4) term by term:

- $\bar x_1^a + \Delta\bar x^a\,\tfrac\sigma\pi$ is a **straight line in $\sigma$** running from brane 1 at $\sigma=0$ to brane 2 at $\sigma=\pi$ — the classical taut string spanning the gap.
- The $\sin n\sigma$ oscillators vanish at both ends, so they wobble the middle of the string but never nudge an endpoint off its brane.
- There is still **no term linear in $\tau$**, hence no center-of-mass momentum in the normal directions: a string pinned to branes cannot drift off them.

## The new zero mode

The linear-in-$\sigma$ term means the mode sum now carries a nonzero $n=0$ piece. Compute the two derivatives from (4):

$$ \dot X^a = -i\sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^a e^{-in\tau}\sin n\sigma, \qquad X'^a = \sqrt{2\alpha'}\sum_{n\in\mathbb Z}\alpha_n^a e^{-in\tau}\cos n\sigma, \tag{5}$$

with

$$ \boxed{\ \sqrt{2\alpha'}\,\alpha_0^a = \frac1\pi\,\Delta\bar x^a\ } \tag{6}$$

Watch where this zero mode goes. In $\dot X^a$ it multiplies $\sin(0\cdot\sigma)=0$, so $\alpha_0^a$ drops out of the velocity — consistent with zero normal momentum. In $X'^a$ it multiplies $\cos(0\cdot\sigma)=1$, so $\alpha_0^a$ survives in the slope — exactly what a tilted, stretched string should have. A nonzero $\alpha_0^a$ with zero momentum is not a contradiction; it is the algebraic fingerprint of stretch. From (6), $\alpha_0^a$ vanishes precisely when $\Delta\bar x^a=0$, when the branes coincide. The same zero mode — present in the slope, absent from the velocity — reappears for a closed string wound around a compact circle, where it measures winding rather than momentum.

## The mass: tension times length, squared

Feed (6) into the light-cone $M^2$. The oscillator sum and the normal-ordering intercept are **identical** to the single brane: the boundary conditions only touched the zero mode, so the regularized constant is still $a=-1$ (the value forced at $D=26$, obtained by cutting off $\sum_n n$ and keeping its finite part $\zeta(-1)=-\tfrac1{12}$, never the naive divergent sum). The only new ingredient is the zero-mode term $\tfrac{1}{2\alpha'}\alpha_0^a\alpha_0^a$:

$$ M^2 = \frac{1}{2\alpha'}\alpha_0^a\alpha_0^a + \frac1{\alpha'}\big(N^\perp - 1\big), \qquad N^\perp = \sum_{n\ge1}n\,a_n^{i\dagger}a_n^i + \sum_{m\ge1}m\,a_m^{a\dagger}a_m^a. \tag{7}$$

Now substitute (6), $\alpha_0^a\alpha_0^a = \tfrac{1}{2\alpha'}\,\tfrac{1}{\pi^2}(\Delta\bar x)^2$:

$$ \frac{1}{2\alpha'}\alpha_0^a\alpha_0^a = \frac{1}{2\alpha'}\cdot\frac{1}{2\alpha'}\cdot\frac{(\Delta\bar x)^2}{\pi^2} = \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2. \tag{8}$$

So

$$ \boxed{\ M^2 = \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2 + \frac1{\alpha'}\big(N^\perp - 1\big)\ } \tag{9}$$

The denominator $2\pi\alpha'$ is $1/T_0$, the inverse string tension, so the new term reads

$$ \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2 = \big(T_0\,|\Delta\bar x|\big)^2 = (\text{tension}\times\text{length})^2 = (\text{rest energy of a taut static string})^2. $$

Stretching a string between separated branes costs energy $= T_0\times\text{length}$, and for a particle at rest energy is mass, so that cost lands squared inside $M^2$. It vanishes exactly when the branes coincide — the rubber band goes slack.

## Spectrum of the stretched sector

**Ground state** $[12]$:
$$ |p^+,\vec p\,;[12]\rangle, \qquad M^2 = -\frac1{\alpha'} + \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2. \tag{10}$$
A Lorentz scalar on the world-volume. The intercept $-1/\alpha'$ makes it tachyonic when the branes are close, but the stretch term lifts it: it is **exactly massless at the critical separation**

$$ |\Delta\bar x| = 2\pi\sqrt{\alpha'}, \tag{11}$$

and genuinely massive beyond. The tachyon is a signal of instability at sub-string-scale separations; push the branes past one string length and it disappears.

**Level 1.** One oscillator on the ground state, all now with $M^2 = \big(\tfrac{|\Delta\bar x|}{2\pi\alpha'}\big)^2$ — **massive** whenever the branes are apart:

- $a_1^{i\dagger}|p^+,\vec p\,;[12]\rangle$, $i=2,\dots,p$: a world-volume vector, $p-1$ states.
- $a_1^{a\dagger}|p^+,\vec p\,;[12]\rangle$, $a=p+1,\dots,d$: $d-p$ scalars.

Counting states exposes a Higgs mechanism hidden in this list. In a $(p+1)$-dimensional world-volume a massless vector has $p-1$ polarizations, but a massive vector has $p$ — one more. The $a_1^{i\dagger}$ states supply only $p-1$, so the missing longitudinal polarization must come from the scalars. Exactly one scalar combination is singled out, the one polarized along the inter-brane direction:

$$ \sum_{a=p+1}^{d}\Delta\bar x^a\,a_1^{a\dagger}|p^+,\vec p\,;[12]\rangle . \tag{12}$$

The other $d-p-1$ scalar directions, orthogonal to $\Delta\bar x^a$, stay ordinary massive scalars. The net level-1 content is one massive vector plus $d-p-1$ massive scalars. This is a stringy **Higgs mechanism**: separating the branes "eats" the scalar pointing from one brane to the other and hands its degree of freedom to the gauge field as mass. Which scalar gets eaten is not put in by hand — the background $\Delta\bar x^a$ picks it out.

## Coincident-brane limit: gauge symmetry enhancement

Let the separation $\to 0$. Then the stretch term vanishes, the $[12]$ and $[21]$ tachyons and vectors join the $[11],[22]$ ones, and **all four sectors carry a massless gauge field**. Two coincident D$p$-branes therefore support not two independent photons but a single **$U(2)$** Yang–Mills field, the four sectors filling out the $2\times2$ matrix of gauge bosons; $N$ coincident branes give **$U(N)$**, with the $[ij]$ labels serving as Chan–Paton matrix indices. See [[Chan-Paton factors]] for the matrix dictionary and [[Yang-Mills from D-branes]] for the low-energy gauge theory.

Run it backwards and you have the Higgs story in geometric form: separating a stack breaks $U(N)\to U(1)^N$, the off-diagonal (stretched) gauge bosons gaining mass $\propto$ separation while the diagonal ones stay massless.

## Open questions

- Orientation $\Rightarrow$ charge sign (the $[12]$ vs $[21]$ distinction) rests on the string carrying an oriented endpoint charge; taken on faith here, justified when open-string charges are set up carefully later.
- **Where do the $[12]$ fields "live"?** Their momenta are $(p+1)$-dimensional like a single-brane field, but the two branes are on equal footing, so the fields cannot be assigned to either one alone — in some sense they live on *both*. Making this precise seems to need noncommutative geometry; beyond first-pass scope, flagged.

## Exercise

The critical separation (11) is where the stretched ground state (10) turns from tachyonic to massless. **(a)** Derive it directly from (10). **(b)** Then check the same number a completely different way: set it equal to the reduced Compton wavelength $\lambda = \hbar/(mc)$ associated with the *unstretched* ground-state tachyon mass $|M_0|$, and confirm you land on the same scale (work in units $\hbar=c=1$). What does this coincidence say about *why* the transition happens at one string length?

> [!success]- Solution
> **(a)** The ground state is massless when the two terms in (10) cancel:
> $$ 0 = -\frac{1}{\alpha'} + \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2 \;\Longrightarrow\; \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2 = \frac{1}{\alpha'} \;\Longrightarrow\; |\Delta\bar x|^2 = \frac{(2\pi\alpha')^2}{\alpha'} = 4\pi^2\alpha'. $$
> Taking the positive root, $|\Delta\bar x| = 2\pi\sqrt{\alpha'}$, which is (11). Below it the intercept wins and $M^2<0$ (tachyon); above it the stretch term wins and $M^2>0$.
>
> **(b)** The unstretched tachyon ($\Delta\bar x=0$) has $M_0^2 = -1/\alpha'$, so its magnitude is $|M_0| = 1/\sqrt{\alpha'}$. Its reduced Compton wavelength is
> $$ \lambda = \frac{1}{|M_0|} = \sqrt{\alpha'}. $$
> This differs from the critical separation only by the factor $2\pi$: $|\Delta\bar x|_{\rm crit} = 2\pi\,\lambda$. Both are set by the single length scale $\sqrt{\alpha'}$, the string length. The tachyon signals an instability whose natural size is its own Compton wavelength $\sim\sqrt{\alpha'}$; once you hold the branes farther apart than that, the taut-string energy cost $T_0|\Delta\bar x|$ overwhelms the tachyonic intercept and the mode can no longer go unstable. The transition happens at one string length because that is the only length in the problem — there is no other dimensionful quantity for $|\Delta\bar x|_{\rm crit}$ to be built from.
