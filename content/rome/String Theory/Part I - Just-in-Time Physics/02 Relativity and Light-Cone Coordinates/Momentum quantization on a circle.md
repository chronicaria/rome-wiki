---
title: Momentum quantization on a circle
number: "2.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, compactification]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Curl a spatial direction into a circle of radius $R$ and momentum along it can no longer be arbitrary: it comes in discrete steps $p = \hbar n/R$, $n\in\mathbb{Z}$.

## Waves on a loop

Take a guitar string and bend it into a loop instead of pinning it at two ends. A wave on an open line can have any wavelength. A wave running around a loop must join up smoothly with itself after one lap — otherwise it would take two different values at the same point. Only wavelengths that fit a whole number of times around survive, and a whole number of wavelengths means discrete momentum. Everything below is bookkeeping on that one fact.

## Compactifying a coordinate

Start with a coordinate $y$ on the infinite line. To roll it into a circle of radius $R$, declare points a full circumference apart to be *the same point*:

$$ y \sim y + 2\pi R . \tag{1}$$

This turns $\mathbb{R}$ into the circle $S^1$ (formally the quotient $\mathbb{R}/(2\pi R\mathbb{Z})$). One lap has length $2\pi R$, so $R$ is the radius even though the space has no visible center — the radius lives entirely in the periodic length. A "function on the circle" is just a function $f(y)$ on the line that is **periodic**, $f(y) = f(y+2\pi R)$. That periodicity is the one physical input, and it is what quantizes momentum.

## Deriving the discrete momentum

A state of definite momentum $p$ along $y$ is a plane wave,

$$ \psi(y) = e^{\,i p y/\hbar} , \tag{2}$$

with $\hbar$ converting momentum into an inverse length (a rate of phase per distance). For $\psi$ to be well defined *on the circle* it must take the same value at points that (1) declares identical:

$$ \psi(y + 2\pi R) = \psi(y) . \tag{3}$$

This is the loop-closing condition — the wave must return to itself after one trip around, because $y$ and $y+2\pi R$ are literally the same place. Impose it on (2):

$$ e^{\,i p (2\pi R)/\hbar} = 1 . $$

A complex exponential equals $1$ exactly when its phase is an integer multiple of $2\pi$:

$$ \frac{p\,(2\pi R)}{\hbar} = 2\pi n, \quad n \in \mathbb{Z}
\;\Longrightarrow\;
\boxed{\,p = \frac{\hbar\, n}{R}, \quad n\in\mathbb{Z}\,} \tag{4}$$

The $2\pi$'s cancel: momentum is quantized in units of $\hbar/R$, **not** $2\pi\hbar/R$. The integer $n$ counts phase windings — how many full wavelengths fit around the loop — and it can be positive, negative, or zero. Smaller circle (smaller $R$) means a *coarser* momentum grid: the steps $\hbar/R$ get bigger.

Compactifying does not break translation symmetry: the circle can still be rotated by any angle, so momentum is still conserved. What the identification imposes is a *global* condition — sliding by exactly one full circumference must act as the identity — and only the integer momentum modes satisfy it. In group language, the continuous circle group $U(1)$ has discrete characters $e^{iny/R}$, so its momentum labels are integers even though its rotations are continuous.

> [!note]- Same result from the shift operator
> The translation by $L=2\pi R$ is $V(L)\psi(y)=\psi(y+L)$. Taylor's theorem writes any shift as $V(L)=e^{L\partial_y}$, and since $\hat p=-i\hbar\,\partial_y$ this is $V(L)=e^{\,iL\hat p/\hbar}$. Requiring $V(L)\psi=\psi$ on a momentum eigenstate $\hat p\psi=p\psi$ gives $e^{\,iLp/\hbar}=1$, hence $p=\hbar n/R$ again — the closing condition (3), phrased as "one full lap does nothing."

## Why a small circle hides at low energy

The quantization matters most in the setting where it first bites: a particle on a *cylinder* — an interval of length $a$ (an infinite square well) crossed with our circle of radius $R$. Separating variables, the circle direction obeys exactly the periodic problem above, with real standing-wave solutions

$$ \phi_l(y) = a_l \sin\!\Big(\tfrac{l y}{R}\Big) + b_l \cos\!\Big(\tfrac{l y}{R}\Big), \qquad l = 0,1,2,\dots $$

This is the same quantization as (4) in sine/cosine dress: the argument $ly/R$ matches $py/\hbar$ with $p=\hbar l/R$. The complex modes $n=\pm l$ (left- and right-movers) and the real $\sin,\cos$ pair span the same 2D space for each $l>0$, which is why every level with $l\neq0$ is **doubly degenerate**. The $l=0$ mode is special — $\sin 0=0$, so only the constant $\cos$ survives: one state, zero momentum.

The total energy is

$$ E_{k,l} = \frac{\hbar^2}{2m}\left[\Big(\tfrac{k\pi}{a}\Big)^2 + \Big(\tfrac{l}{R}\Big)^2\right], \qquad k=1,2,\dots $$

the first term from the interval, whose pinned waves $\sin(k\pi x/a)$ must fit half-wavelengths between the walls; the second is the kinetic energy $p^2/2m$ of the quantized circle momentum $p=\hbar l/R$. Watch what $l$ controls:

- **$l=0$**: the circle contributes nothing. The levels $E_{k,0}=\frac{\hbar^2}{2m}(k\pi/a)^2$ are *exactly* the plain interval spectrum. The extra dimension is invisible.
- **$l=1$** (the first mode that feels the circle):

$$ E_{1,1} = \frac{\hbar^2}{2m}\left[\Big(\tfrac{\pi}{a}\Big)^2 + \Big(\tfrac1R\Big)^2\right] \;\xrightarrow{\,R\ll a\,}\; \frac{\hbar^2}{2m}\,\frac1{R^2} . $$

When $R\ll a$ the $1/R^2$ term dwarfs everything: the cheapest excitation that knows about the circle costs energy $\sim \hbar^2/(2mR^2)$, sitting far above the low-lying states. Equivalently, to reach the first new level using ordinary interval modes you would need the huge quantum number $k \sim \frac{1}{\pi}\frac{a}{R}$.

An extra dimension of radius $R$ therefore stays hidden from any experiment probing energies below $\sim \hbar^2/(2mR^2)$. Only at energies high enough to excite an $l\neq 0$ momentum mode does the circle announce itself. This is the Kaluza–Klein mechanism in miniature: a world with curled-up dimensions looks lower-dimensional until you have the energy to resolve the curl.

## The relativistic version: a mass tower

String theory reads the same fact through the relativistic mass shell. Let spacetime have one compact coordinate $y$, noncompact spatial momentum $\vec p_{\mathrm{nc}}$, and higher-dimensional rest mass $M$ (mostly-plus signature):

$$ -\frac{E^2}{c^2}+\vec p_{\mathrm{nc}}^{\,2}+p_y^2=-M^2c^2. $$

A lower-dimensional observer cannot watch motion around $y$, so that momentum shows up as extra *mass*. With $p_y=\hbar n/R$, collect the terms this observer can measure on the left:

$$ \frac{E^2}{c^2}-\vec p_{\mathrm{nc}}^{\,2}
= M^2c^2+\Big(\frac{\hbar n}{R}\Big)^2
\equiv m_n^2c^2
\;\Longrightarrow\;
\boxed{\,m_n^2=M^2+\frac{\hbar^2 n^2}{c^2R^2}\,}. $$

So one higher-dimensional particle looks, from below, like a whole **tower** of particles of masses $m_n$, $n=0,1,2,\dots$ — the Kaluza–Klein tower. In natural units $c=\hbar=1$ this is the clean $m_n^2 = M^2 + n^2/R^2$: a small circle means a large mass gap, so only the $n=0$ rung is light enough to notice.

## Open questions

- Strings add a *second* tower — **winding modes**, with energy proportional to $R$ rather than $1/R$, from strings wrapped around the circle. A very small circle then behaves like a very large one; this exchange is [[T-duality]]. See [[Winding modes]] when the string spectrum exists.
- Later formulas set both $c=1$ and $\hbar=1$; keep track of which constants have been suppressed to avoid mixing conventions.

## Exercise

A wavefunction on the circle is prepared as $\psi(y) = \cos\!\big(\tfrac{3y}{R}\big)$. Is this a state of definite momentum? Decompose it into momentum eigenstates from (4), give the allowed momentum values and their probabilities, and state what a momentum measurement can return.

> [!success]- Solution
> $\cos$ is real, so it is *not* a single momentum eigenstate (those are complex $e^{ipy/\hbar}$). Write it in the complex basis:
> $$ \cos\!\Big(\tfrac{3y}{R}\Big) = \tfrac12\, e^{\,i\,3y/R} + \tfrac12\, e^{-i\,3y/R}. $$
> Compare with the eigenstates $e^{ipy/\hbar}=e^{\,iny/R}$ from (4): the two pieces are $n=+3$ and $n=-3$, i.e. momenta
> $$ p = +\frac{3\hbar}{R} \quad\text{and}\quad p = -\frac{3\hbar}{R}. $$
> Both are allowed — they are legal grid points, since $n=\pm3\in\mathbb{Z}$. The state is an equal superposition, so (after normalizing) each outcome has probability $\tfrac12$. A momentum measurement returns $+3\hbar/R$ or $-3\hbar/R$, each half the time; the expectation value is $0$, reflecting the standing wave's left-right symmetry. This is exactly the $n=\pm l$ degeneracy behind the doubly degenerate cylinder levels, seen from the wavefunction side.
