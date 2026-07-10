---
title: The four-open-string modulus
number: "24.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, moduli]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Two open strings that join and then re-split trace a worldsheet with exactly one adjustable shape — the time gap $T$ between joining and splitting — and the conformal map to the upper half-plane $\overline{\mathbb{H}}$ turns $T$ into the modulus $\lambda$; as $T$ runs over $(-\infty,\infty)$, $\lambda$ sweeps all of $(0,1)$, so the physical diagrams generate the *entire* moduli space $\mathcal{N}_4$.

## The physical picture

Two open strings come in, fuse into one intermediate string, and that string later splits into two outgoing strings. In light-cone gauge this is a strip of constant total width with **two horizontal slits**: the first slit closes (the join) at worldsheet time $T_2$, the second opens (the split) at worldsheet time $T_1$. (Throughout, $T$ and $T_1,T_2$ denote worldsheet interaction time — values of $\tau=\Re w$, not temperature.) The only knob you can turn — once the momenta are fixed — is *how long the intermediate string lives*, i.e. the gap $T=T_1-T_2$.

That single physical knob $T$ is a disguised coordinate on the space of abstract worldsheet shapes. Conformal invariance says the surface is a disk (equivalently $\overline{\mathbb{H}}$) with four marked boundary points, and its one shape parameter is where the fourth point sits, $\lambda\in(0,1)$ (see [[Moduli spaces]]). We will show $T\mapsto\lambda$ is onto: stretching the intermediate string from nothing to forever draws out every inequivalent four-punctured disk exactly once. This is why the scattering amplitude is an *integral over $\lambda$* rather than a coupling at a vertex — there is no vertex, only a one-parameter family of shapes to sum over.

For intuition, think of the intermediate string as a rubber tube joining two Y-junctions. You cannot change the pipe widths (those are the fixed momenta), but you can slide the junctions apart or together. The single number "junction separation" is the whole moduli space, and $\lambda$ is a relabeling of it.

## The diagram and its one parameter

Strings 3 and 4 join at the interaction point $Q_2$ (at worldsheet time $\tau=T_2$); the intermediate string splits at $Q_1$ (at $\tau=T_1$) into outgoing strings 1 and 2. Each external string $i$ occupies a horizontal sub-strip of width $2\pi\alpha' p_i^+$, fixed by its light-cone momentum, and total width is conserved. With generic momenta the *only* free shape parameter is the time between interactions,
$$T = T_1 - T_2, \qquad -\infty < T < \infty. \tag{1}$$
$T<0$ simply means the second slit has slid to before the first — the surfaces are still legitimate, so the natural range is the whole real line. (The lone exception is equal momenta $p_2^+=p_3^+$: then the two slits would have to collide at $T=0$, and $T$ is restricted to $[0,\infty)$; that special case reaches the same $\lambda$-interval and we set it aside.)

Claim to prove: this physical $T$ is a coordinate on the moduli space $\mathcal{N}_4$ of $\overline{\mathbb{H}}$ with four ordered boundary punctures, and it covers all of it. The plan has three moves:

1. Spend the $SL(2,\mathbb{R})$ freedom of $\overline{\mathbb{H}}$ to pin three punctures at $0,1,\infty$.
2. The fourth puncture's position $\lambda\in(0,1)$ is the one surviving invariant — the modulus.
3. Show the light-cone gap $T$ drives $\lambda$ from one end of $(0,1)$ to the other.

## Mapping the strip to the upper half-plane

A light-cone diagram is a **degenerate polygon**: the boundary turns by $+\pi$ (a $180^\circ$ hairpin) at each external string-end $P_i$, and by $-\pi$ at each interaction corner $Q_j$. The Schwarz–Christoffel map sends $\overline{\mathbb{H}}$ to such a polygon via
$$\frac{dw}{dz} = A\,(z-x_1)^{-\alpha_1/\pi}(z-x_2)^{-\alpha_2/\pi}\cdots, \tag{2}$$
where $x_i$ are the real-axis preimages of the corners and $A$ is a constant. Each factor injects one turning angle: taking $\arg$ of both sides, $\arg(dw)$ jumps by $\alpha_i$ as $z$ crosses $x_i$ along the real axis, because $\arg(z-x_i)$ swings by $-\pi$ there. The corner sent to $z=\infty$ needs no factor.

Read off the boundary order of the four-string diagram: $(P_1\,Q_1\,P_2\,P_3\,Q_2\,P_4)$. Use $SL(2,\mathbb{R})$ to send $P_1\to0$, $P_3\to1$, $P_4\to\infty$. Then $P_2\to\lambda$ is the unprescribable modulus, and the interaction images $Q_1\to x_1$, $Q_2\to x_2$ are squeezed between their neighbors:
$$0 < x_1 < \lambda, \qquad 1 < x_2 < \infty. \tag{3}$$
With exponent $-1$ at the $P$'s (angle $+\pi$) and $+1$ at the $Q$'s (angle $-\pi$), and $P_4$ at $\infty$ carrying no factor, the map equation is
$$\frac{dw}{dz} = A\,\frac{1}{z}\,(z-x_1)\,\frac{1}{z-\lambda}\,\frac{1}{z-1}\,(z-x_2). \tag{4}$$
The three reciprocal factors are the string-ends $P_1,P_2,P_3$; the two numerator factors are the interaction corners $Q_1,Q_2$.

### Writing the map directly — and why the coefficients are the momenta

The same map has a second, more physical form, and deriving it (rather than asserting it) fixes every coefficient. Near an external string-end the worldsheet is a semi-infinite strip of width $2\pi\alpha' p_i^+$. The single-string map (a free open string is the strip $0\le\Im w\le 2\pi\alpha' p^+$ sent to $\overline{\mathbb{H}}$ by $z=\exp(w/(2\alpha' p^+))$; see [[Riemann surfaces replace Feynman graphs]]) inverts to $w = 2\alpha' p^+\ln z$ near the puncture. So each finite external puncture contributes one logarithm,
$$w(z) = \sum_i (\pm)\,2\alpha' p_i^+\,\ln(z-x_i) + \text{const}, \tag{5}$$
with coefficient fixed by the strip width and sign fixed by whether the string is incoming or outgoing. Concretely, with $P_1,P_2,P_3$ at $0,\lambda,1$:
$$w(z) = -2\alpha' p_1^+ \ln z \;-\; 2\alpha' p_2^+ \ln(z-\lambda) \;+\; 2\alpha' p_3^+\ln(z-1). \tag{6}$$

Two checks pin down (6) completely.

**The width check.** $\Im w=\sigma$ is the string coordinate. As $z$ crosses a real point $x_i$, $\arg(z-x_i)$ swings by $\pi$ in magnitude (with the orientation that opens the strip upward), so $\Im w$ jumps by $2\pi\alpha' p_i^+$ — exactly the strip width of string $i$. The logarithm's coefficient *is* the momentum.

**The sign / conservation check.** $\Re w=\tau$ is worldsheet time. Outgoing strings live at $\tau\to+\infty$, incoming at $\tau\to-\infty$. Near $P_1$ ($z\to0$): $\Re w=-2\alpha' p_1^+\ln|z|\to+\infty$, so $P_1$ is **outgoing** — string 1, correct. Near $P_3$ ($z\to1$): $\Re w=+2\alpha' p_3^+\ln|z-1|\to-\infty$, so $P_3$ is **incoming** — string 3, correct. Now the puncture with no explicit log: as $z\to\infty$, $w\approx -2\alpha'(p_1^++p_2^+-p_3^+)\ln z$. Light-cone conservation $p_1^++p_2^+=p_3^++p_4^+$ makes the coefficient exactly $-2\alpha' p_4^+$, so $P_4$ is incoming with the right width. The single omitted logarithm is not a gap — it is *forced* by momentum conservation.

Differentiating (6) gives poles with residues $-2\alpha' p_1^+,\,-2\alpha' p_2^+,\,+2\alpha' p_3^+$; matching them to the partial-fraction expansion of (4) yields three relations among $A,\lambda,x_1,x_2$ and the momenta:
$$-2\alpha' p_1^+ = A\,\frac{x_1 x_2}{\lambda},\quad
-2\alpha' p_2^+ = A\,\frac{(\lambda-x_1)(x_2-\lambda)}{\lambda(1-\lambda)},\quad
-2\alpha' p_3^+ = A\,\frac{(1-x_1)(x_2-1)}{1-\lambda}. \tag{7}$$

## Extracting $T$ and proving $\lambda$ sweeps $(0,1)$

The interaction *times* are the real parts of $w$ at the corner images:
$$T_1 = \Re\,w(x_1), \qquad T_2 = \Re\,w(x_2). \tag{8}$$
Since $\Re\ln z=\ln|z|$, eq. (6) gives the gap $T=T_1-T_2$ explicitly:
$$\frac{T}{2\alpha'} = p_1^+\ln\frac{x_2}{x_1} + p_2^+\ln\!\frac{x_2-\lambda}{\lambda-x_1} + p_3^+\ln\!\frac{1-x_1}{x_2-1}. \tag{9}$$
Eliminating the overall constant $A$ from (7) gives the momentum-ratio constraints
$$\frac{p_2^+}{p_1^+} = \frac{(\lambda-x_1)(x_2-\lambda)}{(1-\lambda)\,x_1 x_2}, \qquad
\frac{p_2^+}{p_3^+} = \frac{(\lambda-x_1)(x_2-\lambda)}{(1-x_1)(x_2-1)\,\lambda}. \tag{10}$$
Equations (9)–(10) at fixed momenta implicitly fix $\lambda=\lambda(T)$. The system is ugly to solve in closed form, but we do not need to: the two endpoints settle everything.

**End 1 — $\lambda\to0$ gives $T\to+\infty$.** By (3), $x_1\to0$ too. In (9) the singular pieces are $-p_1^+\ln x_1 - p_2^+\ln(\lambda-x_1)$ (the ratios (10) keep $x_2$ and $x_1/\lambda$ finite). Both $x_1\to0^+$ and $\lambda-x_1\to0^+$, so
$$\frac{T}{2\alpha'} \simeq -p_1^+\ln x_1 - p_2^+\ln(\lambda-x_1) \;\longrightarrow\; +\infty. \tag{11}$$
Geometrically: $P_1$ and $P_2$ (strings 1 and 2) collide on the boundary, the sub-strip carrying strings 1&2 grows infinitely long, and the two slits separate infinitely far in time.

**End 2 — $\lambda\to1$ gives $T\to-\infty$.** Now the ratios (10) force the regime $x_2\to1$ with $x_1$ finite (and, with the conventional labeling $p_2^+>p_3^+$, this is the consistent branch). In (9) the singular piece is
$$\frac{T}{2\alpha'} \simeq (p_2^+ - p_3^+)\ln(x_2-\lambda) + \text{finite}. \tag{12}$$
With $p_2^+-p_3^+>0$ and $x_2-\lambda\to0^+$, this drives $T\to-\infty$. Geometrically: $P_2$ and $P_3$ (strings 2 and 3) collide instead, and the *other* sub-strip grows long — the slits have slid past each other.

Since $\lambda(T)$ is continuous and reaches both endpoints, it hits **every** value in between:
$$\boxed{\;T\in(-\infty,\infty)\ \longrightarrow\ \lambda\in(0,1)\ \text{(all of it)}\;} \tag{13}$$

That surjectivity is the essential content: **the light-cone string diagrams generate the entire moduli space $\mathcal{N}_4$.** (One can further check that $\lambda(T)$ is monotone, so each surface is hit exactly once and no shape is double-counted; the endpoint analysis already gives full coverage.)

The two ends are the two **factorization channels**. When $\lambda\to0$ the disk pinches so strings 1&2 flow through a long thin neck — an intermediate string in the "$s$-channel". When $\lambda\to1$ it pinches the other way — the "$t$-channel". The single interval $\lambda\in(0,1)$ remembers *both* ways the process can nearly become two free strings joined by a long propagator. This is the seed of the duality that makes the [[The Veneziano amplitude|Veneziano amplitude]] famous.

## From one shape parameter to the amplitude integral

Four-string tree scattering is **not** a coupling times a vertex, because the worldsheet has no vertex — locally every patch looks like a free string (see [[Riemann surfaces replace Feynman graphs]]). What replaces the vertex is a one-parameter family of shapes:

1. The physical interaction has a continuous shape knob $T$ (the intermediate string's lifetime).
2. Conformally inequivalent worldsheets are labeled by $\lambda\in(0,1)$, and $T$ covers the whole interval.
3. Each inequivalent surface is one "path" contributing to the amplitude, so *summing all contributions = integrating $\lambda$ over $(0,1)$*. That integral is the [[The Veneziano amplitude|Veneziano integral]] $\int_0^1 d\lambda\,\lambda^{2\alpha' p_1\cdot p_2}(1-\lambda)^{2\alpha' p_2\cdot p_3}$.

A $\phi^3$ vertex in field theory is one number at one point. A string "vertex" is smeared across a whole one-dimensional family of worldsheets, and conformal invariance *forces* you to integrate the modulus over that family. The general lesson, of which this is the cleanest example: fix the topology, vary the diagram's natural parameters, and you sweep out exactly the inequivalent Riemann surfaces of that type. **String interactions generate moduli spaces.**

## Open questions

- Monotonicity of $\lambda(T)$ (so that the map is one-to-one, not just onto) is stated but not proved here; the endpoint argument establishes surjectivity. A clean proof belongs in a later light-cone string-field-theory / moduli-cell note.
- Closed-form $\lambda(T)$ is not extracted — the system (9)–(10) is analyzed only at its two ends, which is all the coverage claim needs. An explicit $\lambda(T)$ (or its equal-momentum special case, where $T\in[0,\infty)$ already fills $(0,1)$) would be a nice numerical exercise.

## Exercise

Take the omitted fourth puncture seriously. The direct map (6) writes explicit logarithms only for $P_1,P_2,P_3$ (at $0,\lambda,1$); $P_4$ sits at $z=\infty$ and gets no factor. **Show that $P_4$ is nonetheless a genuine incoming string of the correct width** — i.e. extract its light-cone momentum and its time direction from (6) alone, using only light-cone momentum conservation $p_1^++p_2^+=p_3^++p_4^+$. Then state in one sentence why this means the "missing" logarithm carries no independent information.

> [!success]- Solution
> Expand (6) as $z\to\infty$. Each $\ln(z-x_i)=\ln z + \ln(1-x_i/z)=\ln z + O(1/z)$, so
> $$w(z) \;\approx\; \big(-2\alpha' p_1^+ - 2\alpha' p_2^+ + 2\alpha' p_3^+\big)\ln z \;=\; -2\alpha'\big(p_1^+ + p_2^+ - p_3^+\big)\ln z.$$
> Light-cone conservation gives $p_1^++p_2^+-p_3^+ = p_4^+$, so
> $$w(z)\;\approx\; -2\alpha' p_4^+\,\ln z \qquad (z\to\infty).$$
> **Width:** as $z$ circles $\infty$, $\Im w=\sigma$ jumps by $2\pi\alpha' p_4^+$ — exactly the strip width of string 4. So $P_4$ is a string of momentum $p_4^+$, as required.
>
> **Time direction:** $\Re w = -2\alpha' p_4^+\ln|z|\to-\infty$ as $z\to\infty$ (with $p_4^+>0$). Real time $\to-\infty$ means $P_4$ is an **incoming** string — consistent with strings 3 and 4 being the incoming pair.
>
> **One-sentence why:** the coefficient of the $P_4$ logarithm is not a free parameter but the conservation-fixed combination $p_4^+ = p_1^++p_2^+-p_3^+$, so putting $P_4$ at infinity (no factor) loses nothing — its data is already encoded in the other three strings' momenta.
