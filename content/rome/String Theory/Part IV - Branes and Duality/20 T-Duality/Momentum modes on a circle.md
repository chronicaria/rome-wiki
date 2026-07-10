---
title: Momentum modes on a circle
number: "20.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, compactification]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

On a circle of radius $R$, momentum is quantized: $p = n/R$, $n\in\mathbb{Z}$. The spacing $1/R$ is how you *measure* the size of a hidden circle.

## Momentum spacing is a ruler for the radius

Roll one spatial direction into a circle of circumference $2\pi R$. A wave living on that circle must close up on itself after one lap — you cannot fit half a wavelength around it. Only whole numbers of wavelengths survive, so momentum sits on a discrete ladder evenly spaced by $1/R$.

That spacing is a ruler. A large $R$ packs the momentum levels close together, so they blur into the continuum of flat space — a big enough circle is indistinguishable from an infinite line. A small $R$ spreads the levels apart, so the first excited momentum state is expensive and easy to spot. Read off the spacing and you have the radius. This is how a particle physicist would diagnose an extra dimension curled up too small to see, and it is exactly the intuition T-duality overturns.

None of this is stringy yet. It is quantum mechanics on a circle, and a point particle obeys it too. The stringy twist, winding, comes in the sibling note.

## Setup: one direction curled up

Pick a spatial coordinate $x$ and make it a circle by declaring
$$ x \sim x + 2\pi R. $$
The two points $x$ and $x+2\pi R$ are *literally the same point*; circumference $2\pi R$, radius $R$. Everything else stays ordinary non-compact Minkowski space. (In string theory this is one coordinate, $x \equiv X^{25}$, while $X^0, X^1$ stay non-compact so we can still fix [[Light-cone gauge]] with them.)

## Why momentum is quantized

The argument is one line, and it turns on a single fact: momentum generates translations. The operator that slides a state a distance $a$ along $x$ is
$$ e^{-iap}, $$
where $p$ is conjugate to the circle coordinate $x_0$, formally $[x_0,p]=i$. Exponentiating the generator of motion produces the finite shift.

Now use the identification. A translation by one full circumference, $a = 2\pi R$, sends every point back to itself — it *is* the identity map on the circle. So the operator implementing it must act as the identity on every physical state:
$$ e^{-i(2\pi R)\,p} = \mathbb{1}. $$
Going once around must return every wavefunction to itself. For that exponential to equal $\mathbb{1}$ its eigenvalues must all be $1$, forcing $2\pi R\,p \in 2\pi\mathbb{Z}$:
$$ \boxed{\,p = \frac{n}{R}, \qquad n\in\mathbb{Z}.\,} \tag{1} $$

The Fourier picture gives the same result and pins the factor down. A single-valued wavefunction on the circle is built from modes
$$ \psi_n(x)=e^{inx/R}, \qquad \psi_n(x+2\pi R)=\psi_n(x), $$
with $-i\partial_x\psi_n = (n/R)\psi_n$. Periodicity demands $e^{i n(2\pi R)/R}=e^{2\pi i n}=1$, again $n\in\mathbb{Z}$. The $2\pi$ lives in the circumference, but the momentum spacing is $1/R$, not $1/(2\pi R)$.

The integer $n$ is the **momentum number** — the ruler from above, now with an equation attached.

## A subtlety: $x_0$ is not a real operator

The position zero mode $x_0$ is *not* a well-defined operator: its eigenvalues are ambiguous under $x_0 \sim x_0 + 2\pi R$, so which of the identified values would you report? The commutator $[x_0,p]=i$ is therefore a formal mnemonic. The well-defined objects are the exponentials
$$ e^{i\ell x_0/R}, \quad \ell\in\mathbb{Z}, $$
which *are* invariant under $x_0 \to x_0+2\pi R$ (the shift multiplies them by $e^{2\pi i \ell}=1$). Feeding the formal $[x_0,p]=i$ into a Hadamard expansion gives their action unambiguously:
$$ e^{-i\ell x_0/R}\, p\, e^{i\ell x_0/R} = p + \frac{\ell}{R}. \tag{2} $$
So $e^{i\ell x_0/R}$ raises the momentum eigenvalue by $\ell/R$, i.e. $n \to n+\ell$. These are the honest raising operators for momentum number, and being invariant under the identification, they never see the ambiguity in $x_0$. On a circle, trust the exponentials; the commutator is shorthand for what they do.

## How this feeds the mass formula

To an observer in the large non-compact directions, motion around the invisible circle looks like internal energy. A state with compact momentum $p=n/R$ and nothing else has rest mass (natural units, $\hbar=c=1$)
$$ M = |p| = \frac{|n|}{R}. $$
This is the $1/R$ term that trades places with the $\propto R$ winding energy under T-duality; see [[Compactified closed-string mass formula]].

For an **open** string on a space-filling brane, $n$ is the *only* internal label: an open string cannot wind, since its endpoints slide off and let the loop shrink to a point. That asymmetry is exactly what T-duality exploits to change a brane's dimension in [[Dp to D(p minus 1) under T-duality]].

## Open questions

- **With a [[Wilson lines|Wilson line]]** (constant $A_x$, no field strength), single-valuedness of the wavefunction is unchanged, so the Fourier label stays $\ell\in\mathbb{Z}$. What shifts is the gauge-covariant momentum entering the energy: $\ell/R \mapsto \ell/R - \theta/(2\pi R)$, where $\theta$ is the holonomy angle. The quantization condition is untouched; the *effective* momentum is displaced.
- **Why the commutator is only formal.** The load-bearing statement is the well-defined shift (2), not $[x_0,p]=i$; the mass formula uses the *spectrum* of $p$, never an eigenvalue of $x_0$. A fully rigorous compact-boson Hilbert space is set up later in the CFT viewpoint.

## Exercise

A string theorist claims: "Compactify at radius $R$ and the lightest nonzero-momentum state has mass $M_1 = 1/R$. Halve the radius and that mass doubles." Confirm the claim, then decide whether it can be pushed arbitrarily far — is there a smallest circle for which "$M_1$ grows as $R$ shrinks" is the whole story? Answer using only this note plus what you know sits next door.

> [!success]- Solution
> The lightest nonzero-momentum state has $n=\pm 1$, so from (1), $p = 1/R$ and its rest mass is $M_1 = |p| = 1/R$. Sending $R \to R/2$ gives $M_1 = 1/(R/2) = 2/R$ — doubled. The claim is correct *as a statement about momentum modes*.
>
> It is not the whole story, though, and this note flags why: momentum is the only internal label for an **open** string, not a closed one. A closed string can also **wind**, with winding energy $\propto R$ (a wound string is a stretched rubber band; see [[Winding modes]]). As $R$ shrinks, momentum states get heavier but winding states get *lighter*, so the closed string has no runaway. The two effects cross, and the lightest states are momentum modes at large $R$ but winding modes at small $R$. The crossover — where the shrinking circle stops looking small and starts looking large again — is the self-dual radius $R^*=\sqrt{\alpha'}$, the seed of T-duality: shrinking a circle past $R^*$ is physically the same as growing it, with $n$ and $m$ swapped.
