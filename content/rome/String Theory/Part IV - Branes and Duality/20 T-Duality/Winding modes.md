---
title: Winding modes
number: "20.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, winding]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A closed string can be wrapped around a circle like a rubber band around a can. The number of wraps, $m$, is a new label no particle can carry, and the stretch energy it costs behaves exactly like a second kind of momentum, $w = mR/\alpha'$.

## A loop you cannot slide off

Put one spatial dimension on a circle: $x \sim x + 2\pi R$. A point particle living there has only its momentum $p$. A closed string can do something extra — it can loop the circle and close up, wrapped $m$ times, with no way to slide it off. That trapped loop is a **winding mode**.

Two facts make winding the twin of momentum, and they run in opposite directions:

- **Momentum costs less energy as the circle grows.** Quantized momentum $p = n/R$ shrinks as $R\to\infty$: a bigger box means finer momentum spacing.
- **Winding costs more energy as the circle grows.** A wrapped string is stretched to length $\propto R$, and stretching a taut string costs energy. Bigger circle, more stretch, more energy.

Momentum energy $\propto 1/R$, winding energy $\propto R$: the same string, two rulers pointing opposite ways. That opposition is the entire engine of [[Spectrum invariance under R to alpha-prime over R|T-duality]], and this note builds winding carefully enough that the engine is undeniable.

## What winding is, precisely

The string is a map from the worldsheet $\sigma$-circle ($\sigma \in [0,2\pi]$) into the spacetime $x$-circle. As $\sigma$ runs once around the string, the image can travel around the target circle a whole number of times. That integer is the **winding number** $m$: the degree of a circle-to-circle map. It is *topological* — you cannot continuously unwind an $m \ne 0$ string without cutting it, exactly as a rubber band wound twice around a can cannot become singly-wound without being snapped.

To state this cleanly, lift the target circle to its covering line, so $x$ is a genuine real coordinate rather than a value modulo $2\pi R$. Then traversing the string once ($\sigma\to\sigma+2\pi$) need not return $X$ to its start:
$$ X(\tau, \sigma + 2\pi) = X(\tau,\sigma) + m\,(2\pi R), \qquad m\in\mathbb{Z}. \tag{1} $$
The lifted coordinate has advanced by $m$ full circumferences, its sign recording orientation. At $m=0$ this is ordinary closed-string periodicity, so $(1)$ is the only new ingredient compactification adds.

## The winding $w$: rescaling into a momentum

Define the **winding** $w$ (lowercase, not the integer $m$) by
$$ \boxed{\,w \equiv \frac{mR}{\alpha'}.\,} \tag{2} $$
Then $(1)$ reads
$$ X(\tau,\sigma+2\pi) = X(\tau,\sigma) + 2\pi\alpha'\, w. \tag{3} $$
Why rescale? Units. With $[R]=$ length and $[\alpha']=$ length$^2$, the winding $w$ has units of inverse length — the units of **momentum**. So $w$ is not a bookkeeping integer but a physical quantity that will sit on symmetric footing with the ordinary momentum $p$. The full mode expansion confirms it: $X = x_0 + \alpha' p\,\tau + \alpha' w\,\sigma + \text{oscillators}$, with $p$ multiplying $\tau$ and $w$ multiplying $\sigma$ in exactly parallel roles.

## Winding energy: the stretch *is* the mass

Here is why winding is momentum's partner, made quantitative. The string has tension $T_0 = 1/(2\pi\alpha')$ — energy per unit length (natural units, $\hbar=c=1$). A string wound $|m|$ times has length $|m|\,2\pi R$, and its rest energy is tension times length:
$$ M = T_0 \cdot |m|\,2\pi R = \frac{1}{2\pi\alpha'}\,|m|\,2\pi R = \frac{|m|R}{\alpha'} = |w|. \tag{4} $$
A wound string is a stretched rubber band, and the energy stored in the stretch is its rest mass. Momentum gave $M = |p| \propto 1/R$; winding gives $M = |w| \propto R$ — the opposite dependence on the radius, exactly as promised.

This line is also the safest way to remember the factors in $(2)$: the $2\pi$ in the circumference cancels the $2\pi$ in the tension, leaving precisely $mR/\alpha'$. No stray $2\pi$ survives in $w$.

## Why $w$ is quantized

Two views, genuinely different in what they assume.

**Topological.** $m$ counts wrappings, so it is an integer by construction. Then $(2)$ makes $w$ automatically quantized in units of $R/\alpha'$. Nothing quantum is used — this is pure topology of the map.

**Operator.** Impose the periodicity $(1)$ not as a classical identity but as a condition on the allowed quantum states. In the mode expansion the only $\sigma$-dependent zero-mode piece is $\alpha' w\,\sigma$, so demanding $(1)$ hold as an operator equation forces
$$ \alpha'\, w\,(2\pi) = m\,(2\pi R) \;\Longrightarrow\; w = \frac{mR}{\alpha'}, \qquad m\in\mathbb{Z}. \tag{5} $$
This is the exact mirror of momentum quantization. There, single-valuedness of the wavefunction on the *spacetime* circle forced $p = n/R$ (see [[Momentum modes on a circle]]). Here, single-valuedness of the string map into the target circle forces the integer $m$, and with it the momentum-like $w$. Two quantizations, one principle: going once around a circle must close up.

## The "double strike"

Turning a line into a circle does two opposite things to the spectrum:

- **Gains** states: winding modes with $m\ne 0$, which did not exist before. Only a string can wind.
- **Loses** states: momentum becomes discrete, $p = n/R$, so the momentum continuum is gone.

A *particle* on a circle only loses states — it cannot wind. So the gain is genuinely stringy, and it is the source of everything distinctive about strings on compact spaces.

## Why this is the seed of T-duality

A particle on a circle is dull: shrink the circle and its momentum levels just spread apart. A string carries a second charge — how many times it is looped around — and that charge costs stretch energy that *grows* with the circle. So the string has two ways to feel the radius, and they pull in opposite directions. Momentum says small circle, expensive; winding says small circle, cheap. Because the string carries both at once, you cannot tell a small circle from a big one by watching its energy levels alone. That single statement is what T-duality turns into a theorem.

## Open questions

- Every operator in the expansion of $X$ commutes with $w$, so naively $w$ looks like a fixed label picking out a superselection sector. The more useful picture — where $w$ has its own conjugate zero mode $q_0$, on equal footing with $(x_0, p)$ — is what makes T-duality an operator map $X = X_L + X_R \to \tilde X = X_L - X_R$; see [[Spectrum invariance under R to alpha-prime over R]].
- Open strings on a space-filling brane have *no* topological winding: their endpoints slide, so the loop can always open and shrink. The "winding" that appears after T-duality is instead a Dirichlet stretch between a brane and its image on the covering space; see [[Dp to D(p minus 1) under T-duality]].

## Exercise

The winding energy $(4)$, $M = |w| = |m|R/\alpha'$, was read off from tension times length. Confirm it a different way, from the mass formula, and pin down where the factor of tension hides.

The compactified closed-string mass formula is $M^2 = p^2 + w^2 + \tfrac{2}{\alpha'}(N^\perp + \bar N^\perp - 2)$. Take a purely wound string: no momentum ($n=0$), and choose the lightest oscillator content consistent with level matching $N^\perp - \bar N^\perp = nm$. What $M$ do you get, and does it reproduce $(4)$? Then check: if you (wrongly) wrote the tension as $T_0 = 1/(\pi\alpha')$, by what factor would $w$ — and hence $M$ — be off?

> [!success]- Solution
> Set $n=0$, so $p = n/R = 0$ and the level-matching constraint is $N^\perp - \bar N^\perp = nm = 0$, i.e. $N^\perp = \bar N^\perp$. The lightest choice is $N^\perp = \bar N^\perp = 0$. Then
> $$ M^2 = 0 + w^2 + \frac{2}{\alpha'}(0 + 0 - 2) = w^2 - \frac{4}{\alpha'}. $$
> The $-4/\alpha'$ is the closed-string tachyonic zero-point energy at the oscillator ground level: it comes entirely from the universal intercept $-2$ (the $-1$-per-sector normal-ordering constant), independent of $w$. Set it aside and the winding contribution to $M^2$ is exactly $w^2$, so $M = |w| = |m|R/\alpha'$, reproducing $(4)$. The tension-times-length estimate $(4)$ is the classical rest energy; the mass formula adds the universal quantum zero-point piece on top.
>
> Tension check: $w = mR/\alpha'$ came from $M = T_0\cdot|m|2\pi R$ with $T_0 = 1/(2\pi\alpha')$, the two $2\pi$'s cancelling. With the wrong tension $T_0 = 1/(\pi\alpha')$ the length is unchanged but the energy doubles: $M = \tfrac{1}{\pi\alpha'}\,|m|2\pi R = 2|m|R/\alpha' = 2|w|$. So $w$, and with it the winding mass, would be too large by a factor of $2$ — the same factor of $2$ separating the correct closed-string tension $1/(2\pi\alpha')$ from a naive $1/(\pi\alpha')$.
