---
title: The Veneziano amplitude
number: "24.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, amplitudes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The four-open-string tachyon amplitude is a single integral over the disk's one shape parameter $\lambda\in(0,1)$; that integral is the Euler beta function $B(-\alpha(s),-\alpha(t))$ with $\alpha(s)=\alpha's+1$ — Veneziano's 1968 formula, whose infinitely many poles are exactly the open-string spectrum.

## One integral over one shape parameter

Four open-string tachyons scatter. In particle physics you would draw a Feynman diagram with a vertex and sum over the particles exchanged there. The string worldsheet has no such vertex: it is one smooth disk with four punctures on its boundary, and up to conformal maps that disk has exactly **one** free shape parameter, the modulus $\lambda$. So instead of summing over a coupling at a point, we integrate over the family of shapes, $A=g_o^2\int_0^1 d\lambda\,(\dots)$. Three features fall out of that single integral.

The integral is elementary. Conformal invariance forces the integrand to be pure powers $\lambda^{a-1}(1-\lambda)^{b-1}$, so the amplitude is the Euler beta function — a formula an undergraduate could evaluate.

The poles are the particle spectrum. $B(-\alpha(s),-\alpha(t))$ blows up whenever $\alpha(s)=\alpha's+1$ hits a non-negative integer $n$, i.e. at $s=(n-1)/\alpha'$, and those are exactly the open-string mass levels. One tidy function secretly resums the exchange of an infinite tower of particles.

The amplitude is soft in the UV. Because a string is a fuzzy extended object, not a point, it dies exponentially at high energy — the Fourier transform of a smooth blob, not the power-law of a point charge. This is the first glimpse of why string theory is UV-finite.

This is the formula string theory started with: Veneziano wrote it down in 1968 to fit strong-interaction data, years before anyone knew a string produced it.

## The amplitude is an integral over the modulus

From [[The four-open-string modulus]], the four-tachyon worldsheet is the upper half-plane $\overline{\mathbb{H}}$ (a disk) with four ordered boundary punctures, and its moduli space is the single interval $\mathcal{N}_4=\{\lambda\in(0,1)\}$. The amplitude is therefore one integral over that parameter,
$$A(p_1,p_2,p_3,p_4)=g_o^2\int d\mu ,$$
where $g_o^2$ is the open-string coupling squared: the process is one join followed by one split, two elementary interactions, each carrying one power of $g_o$. The tachyons are on-shell (mostly-plus signature, so $p^2=-M^2$), with
$$p_1+p_2+p_3+p_4=0 ,\qquad p_i^2=-M^2=\frac{1}{\alpha'} . \tag{1}$$
The open-string tachyon has $M^2=-1/\alpha'$ — a quarter of the closed value $-4/\alpha'$.

### Conformal invariance fixes the integrand

Put the punctures at real points $x_1,x_2,x_3,x_4$ with $x_2$ the moving one. The natural measure gives each *pair* of punctures a factor $|x_i-x_j|^{2\alpha' p_i\cdot p_j}$ — the distance between two insertions raised to (twice $\alpha'$ times) the dot product of their momenta — together with $dx_2$ and three compensating distance factors. (The factor of $2$ in the exponent, versus $\alpha' p_i\cdot p_j$ for closed strings, comes from the boundary propagator: an image charge across the real axis doubles it.)

The whole measure must be invariant under the residual gauge symmetry of $\overline{\mathbb{H}}$, the real Möbius group $SL(2,\mathbb{R})$, since fixing three of the four punctures was an arbitrary choice. Under
$$x\to\frac{ax+b}{cx+d},\qquad dx\to\frac{dx}{(cx+d)^2},\qquad x_i-x_j\to\frac{x_i-x_j}{(cx_i+d)(cx_j+d)} , \tag{2}$$
every factor of $(cx_i+d)$ must cancel. Collecting the powers attached to puncture $1$ gives the exponent
$$2+2\alpha' p_1\cdot(p_2+p_3+p_4)=2-2\alpha' p_1^2=2-2\alpha'\cdot\frac{1}{\alpha'}=0 . \tag{3}$$
**This is the hinge of the whole construction.** The measure is conformally invariant *only because* momentum is conserved (so $p_2+p_3+p_4=-p_1$) and the tachyons are on-shell ($p_1^2=1/\alpha'$). Conformal invariance of the amplitude and the mass-shell condition are, right here, the same equation. (This fixes the measure's *form*; it does not prove $d\mu$ is unique — see Open questions.)

Now gauge-fix $x_1=0,\ x_2\equiv\lambda,\ x_3=1,\ x_4\to\infty$. The total power of $|x_4|$ works out to zero, so the point at infinity drops out cleanly, leaving
$$d\mu=d\lambda\,\lambda^{\,2\alpha' p_1\cdot p_2}\,(1-\lambda)^{\,2\alpha' p_2\cdot p_3},\qquad \lambda\in(0,1) ,$$
and therefore
$$\boxed{\ A(p_1,p_2,p_3,p_4)=g_o^2\int_0^1 d\lambda\ \lambda^{\,2\alpha' p_1\cdot p_2}\,(1-\lambda)^{\,2\alpha' p_2\cdot p_3}\ } \tag{4}$$
The four-string tree amplitude is one integral over the modulus — the [[Part V - Graduate Bridge/24 Interactions and Riemann Surfaces/00 — Overview|exit check]] of this module, made concrete.

## Doing the integral: the beta function

Introduce Mandelstam invariants. Only $s$ and $t$ appear because the cyclic ordering of boundary punctures allows strings $1,2$ to fuse or strings $2,3$ to fuse, but not $1,3$ — there is no $u$-channel for this ordering:
$$s=-(p_1+p_2)^2,\qquad t=-(p_2+p_3)^2 .$$
Expand $s$ using (1):
$$s=-p_1^2-p_2^2-2p_1\cdot p_2=-\frac{2}{\alpha'}-2p_1\cdot p_2 \ \Longrightarrow\ 2\alpha' p_1\cdot p_2=-\alpha' s-2=-(\alpha' s+1)-1 . \tag{5}$$
Define the **Regge trajectory** (this straight line $\alpha(s)=\alpha's+1$ is what plots the string's spin against its mass-squared — the origin of the name "string theory as the theory of Regge trajectories"):
$$\alpha(s)\equiv\alpha's+1,\qquad\text{so}\qquad 2\alpha' p_1\cdot p_2=-\alpha(s)-1 , \tag{6}$$
and identically $2\alpha' p_2\cdot p_3=-\alpha(t)-1$. The amplitude (4) becomes
$$A=g_o^2\int_0^1 d\lambda\ \lambda^{-\alpha(s)-1}(1-\lambda)^{-\alpha(t)-1} . \tag{7}$$

This is precisely the Euler beta integral,
$$B(a,b)=\int_0^1 dx\,x^{a-1}(1-x)^{b-1}=\frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)} . \tag{8}$$
Match the exponents: the first is $a-1=-\alpha(s)-1$, so $a=-\alpha(s)$; likewise $b=-\alpha(t)$. Hence
$$\boxed{\ A(p_1,p_2,p_3,p_4)=g_o^2\,B\big(-\alpha(s),-\alpha(t)\big)=g_o^2\,\frac{\Gamma(-\alpha(s))\,\Gamma(-\alpha(t))}{\Gamma(-\alpha(s)-\alpha(t))}\ } \tag{9}$$
This is the **Veneziano amplitude**. The integral (7) converges only when $\alpha(s),\alpha(t)<0$; for physical energies we simply *define* $A$ by the right-hand side of (9), the unique meromorphic continuation. Nothing is lost — the beta function *is* the analytic continuation of its own integral.

(Restoring the full physical amplitude sums the three cyclic orderings of the four punctures on the boundary; this note derives one ordering, which already carries all the physics below.)

## What the poles mean: the whole spectrum, and duality

$\Gamma(z)$ has simple poles at $z=0,-1,-2,\dots$ and — famously — **no zeros**. So the denominator $\Gamma(-\alpha(s)-\alpha(t))$ contributes no poles, and every pole of $A$ comes from a numerator gamma. An $s$-channel pole occurs when
$$-\alpha(s)=-n\ \Longleftrightarrow\ \alpha's+1=n\ \Longleftrightarrow\ s=\frac{n-1}{\alpha'}=M_n^2 ,\qquad n=0,1,2,\dots \tag{10}$$
**A pole in a scattering amplitude at $s=M^2$ signals an intermediate particle of mass $M$** (the resonance goes on-shell). So the poles (10) list the masses of everything the two strings can fuse into — and $M_n^2=(n-1)/\alpha'$ is *exactly* the open-string tower: $n=0$ the tachyon ($M^2=-1/\alpha'$), $n=1$ massless, then an infinite ladder of massive states. One elementary function has resummed an infinite set of QFT exchange diagrams, one per string state.

**Duality.** The same tower reappears in $t$. This is the property that named the subject — the "dual resonance model." You may expand $A$ as a sum over $s$-channel poles *or* as a sum over $t$-channel poles; the two descriptions are equal, and you must never add both, which would double-count. In ordinary field theory, $s$-channel and $t$-channel diagrams are genuinely distinct contributions you sum; here they are two views of one object. That is the surprise that hooked people in 1968.

**UV softness.** Take $s,t\to\infty$ with fixed ratio (fixed-angle, high-energy scattering), with $u$ fixed by $s+t+u=\sum_i M_i^2=-4/\alpha'$. Using $\Gamma(x)\sim e^{x\ln x}$, the amplitude falls off *exponentially*,
$$A\ \sim\ \exp\!\Big[-\alpha'\big(s\ln s+t\ln t+u\ln u\big)\Big] ,$$
with coefficient $\alpha'$ for these open strings (the closed-string amplitude has half this, tracking the factor-of-2 in the open-string exponent $2\alpha' p_i\cdot p_j$). This is far softer than any field theory, whose amplitudes at best decay by a power law and at worst diverge (exchange of a single spin-2 graviton already blows up). Truncate the tower at any finite level and you get that bad behavior; the full infinite sum conspires to be gentle. The clean way to see why: power-law tails are the signature of *point* charges, but a string is smooth and fuzzy at scale $\sqrt{\alpha'}$, and the amplitude of a smooth blob is its Fourier transform — a Gaussian-like exponential decay, exactly as in the Born approximation for scattering off a smooth potential. Extended objects scatter softly.

## Open questions

- The measure was *motivated* by conformal invariance, not uniquely derived from it. A first-principles derivation is the gauge-fixed [[Polyakov action|Polyakov]] path integral with ghosts and normalized [[Vertex operators and physical-state conditions|vertex operators]]; the free part is a Gaussian integral whose propagator produces the $|x_i-x_j|$ factors. Deferred to the CFT/path-integral notes.
- The factor of $2$ in $2\alpha' p_i\cdot p_j$ (open) versus $\alpha' p_i\cdot p_j$ (closed) is the boundary propagator's image-charge doubling. Verified here for *consistency* with the on-shell/invariance condition (3); the propagator itself is derived elsewhere.
- Why does the *residue* at each pole (10) have bounded degree in $t$? That degree fixes the highest spin at each mass level; it is implicit in the beta function but not extracted here.

## Exercise

Zoom in on the **first massless pole** ($n=1$) of the Veneziano amplitude (9), at fixed $t$, and show that near it $A$ looks like an ordinary field-theory exchange of a single particle, $A\sim \dfrac{c(t)}{s-M_1^2}$. Identify $M_1^2$ and the residue $c(t)$ (up to the constant $g_o^2$). What does the residue's *sign/structure* in $t$ tell you?

> [!success]- Solution
> The numerator factor $\Gamma(-\alpha(s))$ has its pole at $-\alpha(s)=-n$. Take $n=1$, so $\alpha(s)=1$, i.e. $\alpha's+1=1$, giving
> $$s=0=M_1^2 ,$$
> the massless level. Set $\alpha(s)=1+\epsilon$ with $\epsilon\to0$ (so $\epsilon=\alpha's$). Use $\Gamma(z)\simeq -1/(z+1)$ near $z=-1$, i.e. $\Gamma(-\alpha(s))=\Gamma(-1-\epsilon)\simeq \dfrac{1}{\epsilon}$ (the residue of $\Gamma$ at $-1$ is $-1$, and $-\alpha(s)+1=-\epsilon$, so $\Gamma(-1-\epsilon)\simeq -1/(-\epsilon)=1/\epsilon$). Then
> $$A=g_o^2\,\frac{\Gamma(-\alpha(s))\,\Gamma(-\alpha(t))}{\Gamma(-\alpha(s)-\alpha(t))}\ \xrightarrow{\ \epsilon\to0\ }\ g_o^2\,\frac{1}{\epsilon}\,\frac{\Gamma(-\alpha(t))}{\Gamma(-1-\alpha(t))} .$$
> Since $\epsilon=\alpha's=\alpha'(s-M_1^2)$, this is exactly a single-particle exchange pole,
> $$A\ \sim\ \frac{g_o^2}{\alpha'}\,\frac{1}{s-M_1^2}\,\frac{\Gamma(-\alpha(t))}{\Gamma(-1-\alpha(t))},\qquad c(t)=\frac{g_o^2}{\alpha'}\,\frac{\Gamma(-\alpha(t))}{\Gamma(-1-\alpha(t))} .$$
> Now simplify the residue with $\Gamma(z+1)=z\,\Gamma(z)$: $\dfrac{\Gamma(-\alpha(t))}{\Gamma(-1-\alpha(t))}=-1-\alpha(t)=-\alpha't-2$, a **first-degree polynomial in $t$**. So $c(t)\propto(\alpha't+2)$ is linear in $t$. Because $t$ is essentially the momentum transfer and $t\sim\cos\theta$ at fixed $s$, a residue that is a *degree-1* polynomial in $\cos\theta$ is the angular signature of a **spin-1** intermediate state — precisely the massless vector at level $n=1$. (In general the residue at level $n$ is a degree-$n$ polynomial in $t$, encoding highest spin $n$ at that level for the open string.) The single string amplitude has, at its lowest massless pole, reproduced ordinary QFT exchange of a massless vector.
