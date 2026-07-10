---
title: Spectrum invariance under R to alpha-prime over R
number: "20.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, t-duality]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The closed-string spectrum on a circle of radius $R$ is identical to the one at radius $\tilde R = \alpha'/R$, once you also swap momentum for winding ($n\leftrightarrow m$). This is T-duality: a string cannot tell a big circle from a small one. Builds on [[Compactified closed-string mass formula]].

## Two rulers, one spectrum

A point particle measures the size of a hidden circle by the spacing of its momentum levels, $\Delta p = 1/R$: fine spacing means a big circle, coarse spacing means a small one. A string carries a second ruler a particle lacks — it can wrap the circle, and its winding levels are spaced by $\Delta w = R/\alpha'$. The two rulers disagree: as $R$ shrinks, momenta spread out but windings crowd together.

These two rulers are interchangeable. Shrinking the circle past the string length makes the winding tower light and the momentum tower heavy — but a light, densely spaced tower is exactly what a large dimension looks like. A tiny circle of radius $R$ is physically a large circle of radius $\alpha'/R$, with the string's two labels having quietly traded jobs. The radius is not an observable; it is a choice of which ruler you call momentum.

## The exchange, in one line

The mass formula and level-matching constraint from [[Compactified closed-string mass formula]] are
$$ M^2 = \frac{n^2}{R^2} + \frac{m^2 R^2}{\alpha'^2} + \frac{2}{\alpha'}\big(N^\perp + \bar N^\perp - 2\big), \qquad N^\perp - \bar N^\perp = nm. \tag{1}$$
Now make the **simultaneous** swap
$$ R \longleftrightarrow \tilde R = \frac{\alpha'}{R}, \qquad n \longleftrightarrow m. \tag{2}$$
This is not "rescale $R$ and keep the labels." T-duality compares two *descriptions* with different dictionaries: the state one description calls momentum $n$, the other calls winding $n$. Apply (2) to the first two terms of (1):
$$ \frac{n^2}{R^2} \ \longrightarrow\ \frac{m^2}{(\alpha'/R)^2} = \frac{m^2 R^2}{\alpha'^2}, \qquad \frac{m^2 R^2}{\alpha'^2} \ \longrightarrow\ \frac{n^2 (\alpha'/R)^2}{\alpha'^2} = \frac{n^2}{R^2}. $$
The momentum term of one theory *becomes* the winding term of the other, and vice versa — they trade places. The oscillator term is untouched (we compare states with identical oscillator content), and the constraint $N^\perp-\bar N^\perp = nm$ is symmetric under $n\leftrightarrow m$, so it survives. Hence
$$ \boxed{\,M^2(R;\, n, m) = M^2\big(\tilde R;\, m, n\big).\,} \tag{3}$$
The full list of masses is identical; only the labels are permuted. The engine is the opposite $R$-dependence of the two terms — momentum energy $\propto 1/R$, winding energy $\propto R$ — so sending $R\to\alpha'/R$ inverts both, and swapping $n\leftrightarrow m$ puts them back.

## The self-dual radius

One radius is left fixed by $R\leftrightarrow\alpha'/R$:
$$ R = \frac{\alpha'}{R} \ \Longrightarrow\ R^{*2} = \alpha' \ \Longrightarrow\ \boxed{\,R^* = \sqrt{\alpha'}\,}, $$
the string length itself. Here the duality maps the theory to itself, and something special happens in the spectrum. Take $(n,m)=(\pm1,\pm1)$ or $(\pm1,\mp1)$. Level matching forces $N^\perp-\bar N^\perp = nm = \pm1$, so in every case exactly one oscillator is excited with $N^\perp+\bar N^\perp = 1$ (the sign of $nm$ selects a right- vs. left-moving oscillator, but the mass is unaffected since only $n^2,m^2$ enter $M^2$); the oscillator term is $\tfrac{2}{\alpha'}(1-2) = -\tfrac{2}{\alpha'}$, giving
$$ M^2 = \frac{1}{R^2} + \frac{R^2}{\alpha'^2} - \frac{2}{\alpha'} = \Big(\frac1R - \frac{R}{\alpha'}\Big)^2 \ \xrightarrow{R=\sqrt{\alpha'}}\ 0. \tag{4}$$
The perfect square makes it manifest: away from $R^*$ these states are massive, but at $R^*$ the momentum and winding contributions cancel and they go massless. The four states $(n,m)=(\pm1,\pm1)$ and $(\pm1,\mp1)$ are new massless spin-1 fields, charged under the two circle photons. A charged massless spin-1 field only makes sense as a gauge boson of a non-abelian group, so the generic $U(1)\times U(1)$ of the two Kaluza–Klein photons is enhanced to $SU(2)\times SU(2)$. Each of these states carries nonzero winding — it is genuinely stringy, invisible to any point particle. This enhancement is the closed-string cousin of the non-abelian gauge symmetry that appears on coincident D-branes.

(In the bosonic string, extra massless *scalars* also appear at $R^*$: the tachyon's own momentum and winding modes at $(n,m)=(\pm2,0)$ and $(0,\pm2)$, which have $N^\perp=\bar N^\perp=0$ and so come from the mass formula (1) with the tachyon's $-4/\alpha'$ intercept. They complete the adjoint of the enhanced group but hang on the bosonic tachyon; the spin-1 enhancement is the robust lesson that survives into tachyon-free theories.)

## Why it is a physical equivalence, not a coincidence

Matching mass lists is suggestive, but two theories could share a spectrum by accident. To upgrade the match to an exact identity of the free theory, we produce an explicit dual coordinate whose modes reproduce the dual description operator by operator.

Recall $X = X_L + X_R$, whose zero-mode part is $x_0 + \alpha' p\,\tau + \alpha' w\,\sigma + (\text{osc})$ — momentum $p$ pairs with $\tau$, winding $w$ pairs with $\sigma$. Now flip the sign of the right-mover alone:
$$ \boxed{\ \text{T-duality:}\quad X = X_L + X_R \ \longrightarrow\ \tilde X = X_L - X_R.\ } \tag{5}$$
The zero-mode part of $\tilde X$ is
$$ \tilde X(\tau,\sigma) = q_0 + \alpha' w\,\tau + \alpha' p\,\sigma + (\text{osc}). $$
Now $w$ pairs with $\tau$ — it is the momentum of $\tilde X$ — and $p$ pairs with $\sigma$ — it is the winding of $\tilde X$. Passing from $X$ to $\tilde X$ exchanges the roles of momentum and winding outright. On the modes, (5) reads
$$ x_0 \leftrightarrow q_0, \qquad p \leftrightarrow w, \qquad \alpha_n \to -\alpha_n, \qquad \bar\alpha_n \to \bar\alpha_n, \tag{6}$$
the sign flip falling only on the right-movers $\alpha_n$. Two facts make this a genuine equivalence rather than a rewriting:

- **It is canonical.** A sign flip on the right-movers preserves every commutator, so it maps the Hilbert space to itself faithfully.
- **It preserves the Hamiltonian.** The sign on $\alpha_n$ does not affect the number operator $N^\perp$ (which counts $\alpha_{-n}\alpha_n$), and the mass formula depends on $p,w$ only through $p^2+w^2$, symmetric under $p\leftrightarrow w$.

Finally, the labels line up with a real circle: $q_0$ is conjugate to $w = mR/\alpha'$, which is quantized in units of $R/\alpha' = 1/\tilde R$, so $q_0$ lives on a circle of radius $\tilde R = \alpha'/R$. The dual description is not an analogy — it is an honest string on a circle of radius $\alpha'/R$. Two radii, one physics.

## What this says about distance

Because the two theories are the same, the radius $R$ is not an observable of the closed string. The dual radius is fixed by demanding that its momentum spacing equal the old winding spacing:
$$ \frac{1}{\tilde R} = \frac{R}{\alpha'} = \Delta w \qquad\Longleftrightarrow\qquad \tilde R = \frac{\alpha'}{R}. $$
A small $R$ is not "secretly large" by wordplay; it is large because its light states are naturally organized as momenta on the $\tilde X$ circle. The self-dual radius $R^* = \sqrt{\alpha'}$ is then the edge of a fundamental domain: every $R < R^*$ has an equivalent $R' = \alpha'/R > R^*$, so shrinking a circle below the string length opens no new short-distance physics — it only changes which tower deserves the name "momentum." Geometry in $X$ is trustworthy only when its winding tower is heavy ($R \gg \sqrt{\alpha'}$); for $R \ll \sqrt{\alpha'}$ the good coordinate is $\tilde X$; near $R^*$ both towers matter and the extra massless gauge bosons make the breakdown of naive geometry visible in the spectrum itself.

Open strings sharpen this: a Wilson-line angle becomes a literal brane *position*, and a wrapped D$p$-brane becomes a D$(p-1)$-brane localized in $\tilde X$ — see [[Dp to D(p minus 1) under T-duality]] and [[Wilson lines]]. Distance is not discarded; it is demoted from background data to a choice of dual variables, useful only where its light states are the natural probes.

## Open questions

- The operator map (5)–(6) proves the equivalence of the *free* theory. That it extends to interactions (the full worldsheet CFT, and a compensating shift of the dilaton) is a CFT/path-integral statement this light-cone module records but does not derive.
- The scalar enhancement at $R^*$ rides on the bosonic tachyon. Which pieces of the $SU(2)\times SU(2)$ enhancement survive in tachyon-free superstring or heterotic compactifications is a later superstring question.

## Exercise

Fix the radius at $R = 2\sqrt{\alpha'}$ (so we are *not* self-dual). Consider the two states
$$ A:\ (n,m)=(2,1), \quad B:\ (n,m)=(1,2), $$
each carrying the minimal oscillator content allowed by level matching. (a) Compute $M^2$ for state $A$ at radius $R$. (b) Without recomputing from scratch, use T-duality to name a state at the dual radius $\tilde R$ with the same mass, and check it is state $B$ at $\tilde R$. (c) What is $\tilde R$ here, and is it larger or smaller than $R$?

> [!success]- Solution
> **(a)** For $A$, level matching gives $N^\perp - \bar N^\perp = nm = 2$; the minimal content is $N^\perp = 2,\ \bar N^\perp = 0$, so $N^\perp + \bar N^\perp = 2$ and the oscillator term is $\tfrac{2}{\alpha'}(2-2) = 0$. With $R^2 = 4\alpha'$:
> $$ M_A^2 = \frac{n^2}{R^2} + \frac{m^2 R^2}{\alpha'^2} = \frac{4}{4\alpha'} + \frac{1\cdot 4\alpha'}{\alpha'^2} = \frac{1}{\alpha'} + \frac{4}{\alpha'} = \frac{5}{\alpha'}. $$
> **(b)** By (3), $M^2(R; n, m) = M^2(\tilde R; m, n)$. So the mass of $A=(2,1)$ at $R$ equals the mass of the state with labels swapped, $(1,2)$, at $\tilde R$ — which is exactly state $B$ at the dual radius. Direct check: at $\tilde R = \alpha'/R$, state $B=(1,2)$ has the same minimal content ($N^\perp - \bar N^\perp = nm = 2$, oscillator term $0$), and
> $$ M_B^2(\tilde R) = \frac{1^2}{\tilde R^2} + \frac{2^2\,\tilde R^2}{\alpha'^2} = \frac{1}{\alpha'^2/R^2} + \frac{4\,\alpha'^2/R^2}{\alpha'^2} = \frac{R^2}{\alpha'^2} + \frac{4}{R^2} = \frac{4}{\alpha'} + \frac{1}{\alpha'} = \frac{5}{\alpha'}. \checkmark $$
> The momentum term of $A$ turned into the winding term of $B$, and vice versa.
> **(c)** $\tilde R = \alpha'/R = \alpha'/(2\sqrt{\alpha'}) = \tfrac12\sqrt{\alpha'}$, half the string length — **smaller** than $R = 2\sqrt{\alpha'}$. The two descriptions sit on opposite sides of $R^* = \sqrt{\alpha'}$, as they must.
