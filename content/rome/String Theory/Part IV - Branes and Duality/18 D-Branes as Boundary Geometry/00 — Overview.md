---
title: 00 — Overview
number: "18.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, dp-brane]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A D$p$-brane is a rule about where open strings may end, and nothing more. From that single rule the whole apparatus of gauge theory falls out.

## The one idea

**A boundary condition is a geometry.** Fix a $p$-dimensional flat surface in space. Declare that open-string endpoints must live on it. That declaration *is* the D$p$-brane — there is no extra object, no new force. The surface is just the set of allowed landing points.

Everything in this module is the consequence of taking that rule seriously and quantizing. The payoff is a chain that turns a boundary-value problem into physics:

$$
\underbrace{\text{where endpoints may land}}_{\text{boundary conditions}}
\;\to\; \underbrace{\text{open-string spectrum}}_{\text{quantize}}
\;\to\; \underbrace{\text{a Maxwell photon}}_{\text{on one brane}}
\;\to\; \underbrace{U(N)\ \text{Yang–Mills}}_{\text{on }N\text{ coincident branes}}.
$$

This is the first place string theory produces something recognizable as ordinary field theory. Stated plainly: **the gauge fields of the Standard Model can be read off a stack of surfaces where strings end.**

## Two boundary conditions, direction by direction

A string at one instant is a little arc, and its two endpoints are beads that must stay on the allowed surface. In each spacetime direction the bead does one of two things:

- **Along the brane** the bead is free to slide. Nothing pins it, so the endpoint force in that direction must vanish — the slope $X'$ goes to zero. This is a **Neumann** condition. Slogan: *Neumann = "along the brane."*
- **Normal to the brane** the bead cannot leave the surface, so its coordinate is frozen at the brane's location $\bar x^a$. This is a **Dirichlet** condition — the "D" in D-brane. Slogan: *Dirichlet = "on the brane."*

From this one dictionary the rest is bookkeeping:

- **One brane, one string:** both beads on the same surface. Quantizing gives a photon living on the brane plus one scalar per normal direction — and those scalars turn out to be the brane's own wobble modes, the first hint the brane is a real dynamical thing.
- **Two branes:** each bead can land on brane 1 or brane 2, so a string carries a sector label $[ij]$ — think of it as a **directed edge** from node $i$ to node $j$. A $[12]$ string has its ends pinned to *different* surfaces, so it is a taut segment stretched across the gap; that tension costs energy, and the energy shows up as extra mass.
- **$N$ coincident branes:** the edge labels $[ij]$ become the $N\times N$ **matrix indices** of a gauge field. Joining string ends multiplies the matrices. Coincident $\Rightarrow$ all $N^2$ strings are massless $\Rightarrow$ the photon is promoted to a full $U(N)$ Yang–Mills field.

That last bullet is the module in miniature. Separating the branes gives the off-diagonal strings a length and hence a mass — a stringy Higgs mechanism — leaving only the diagonal $U(1)^N$ light.

![[strings-on-branes.svg]]

*Figure: (a) both ends on one brane; (b) two parallel branes with a $[11]$ string and a stretched $[12]$ string; (c) a string between branes of different dimension (an ND string). Red dots are endpoints — pinned by Dirichlet in the normal directions, free to slide along the Neumann directions. Read it with the dictionary above, not as a literal photograph.*

## Sublessons (reading order)

Work through them top to bottom; each builds on the last.

1. 18.1 [[Definition of a Dp-brane]] — what a D$p$-brane *is*: $p$ spatial dimensions, a $(p+1)$-dimensional world-volume, located by fixing its $(d-p)$ normal coordinates. (The $+1$ is time; do not lose it.)
2. 18.2 [[Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/Boundary conditions as geometry]] — the central derivation: varying the string action produces a boundary term, and killing it forces either Neumann ($X'=0$, tangent) or Dirichlet ($\delta X=0$, normal). This note *is* the "boundary condition = geometry" claim, worked out.
3. 18.3 [[Open strings on one brane]] — quantize on a single brane. Massless spectrum: a Maxwell photon ($p-1$ physical states) plus $(d-p)$ scalars, the brane's transverse positions.
4. 18.4 [[Strings between parallel branes]] — four sectors, the stretched $[12]$ string, the mass $M^2 = \big(|\Delta\bar x|/(2\pi\alpha')\big)^2 + \tfrac1{\alpha'}(N^\perp-1)$, and the coincident-limit $U(N)$ enhancement.
5. 18.5 [[Strings stretched between Dp- and Dq-branes]] — mixed (ND) directions with half-integer modes, and the shifted intercept $-1+\tfrac{p-q}{16}$.
6. 18.6 [[Chan-Paton factors]] — endpoint labels as matrix indices; why $N$ coincident branes give $N^2$ vector states.
7. 18.7 [[Yang-Mills from D-branes]] — the low-energy bridge from matrix-valued open-string vectors to non-abelian curvature $F_{mn}$.

Recurring cross-module links: [[Light-cone gauge]], [[Mass-shell relation|M² operator]], [[Mode expansions in light-cone gauge|Open string mode expansion]], [[Dp to D(p minus 1) under T-duality]], [[Wilson lines]].

## The load-bearing numbers

Three facts do most of the work; if you remember only these, you can reconstruct the module.

- **Stretched-string mass:** $M^2 = \big(|\Delta\bar x|/(2\pi\alpha')\big)^2 + \tfrac1{\alpha'}(N^\perp-1)$. The first term is $(\text{tension}\times\text{length})^2$, since the tension is $T_0 = 1/(2\pi\alpha')$. It vanishes exactly when the branes coincide.
- **Critical separation:** the $[12]$ ground state (a scalar, $M^2 = -1/\alpha' + \big(|\Delta\bar x|/(2\pi\alpha')\big)^2$) is tachyonic when close, **massless at** $|\Delta\bar x| = 2\pi\sqrt{\alpha'}$, massive beyond.
- **Coincidence gives symmetry:** $N$ coincident branes $\Rightarrow$ $U(N)$ gauge symmetry, because all $N^2$ off-diagonal strings drop to zero length and hence zero mass.

## Open questions (module-level)

- Open-string quantization *suggests* that fields live on the brane, but it does not *prove* the brane is dynamical. The proof needs closed strings scattering off it — flagged in 18.3 [[Open strings on one brane]].
- Where do the stretched $[12]$ fields actually live? Not cleanly on either brane; the honest answer points toward noncommutative geometry, beyond this first pass.
- Intersecting D-branes (the route to Standard-Model-like fermions) are structurally related but belong to a later model-building layer, not this boundary-geometry module.

## Exercise

Close the notes and answer all three aloud. Each targets one pillar of the module; if all three come out clean, bump `status` on the sublessons.

1. **Why does a D$p$-brane have $p$ spatial Neumann directions and $(d-p)$ transverse Dirichlet directions?**
2. **Describe a string stretched between two parallel branes** — its shape, its zero mode, and its mass. Explain why the mass term is (tension × length)$^2$.
3. **Why do $N$ coincident branes give $U(N)$ rather than $N$ unrelated photons?**

> [!success]- Solution
> **1. The N/D split.** The brane is a $p$-dimensional spatial hyperplane, so locating it takes $(d-p)$ conditions — one per normal direction. Endpoints must lie on the brane. In a *normal* direction, "on the brane" means "frozen at the brane's position $\bar x^a$" — a Dirichlet condition; that gives $(d-p)$ of them. In a *tangent* direction nothing pins the endpoint, and killing the boundary term in $\delta S$ forces $X'=0$ — a Neumann condition; that gives the $p$ spatial ones, plus the always-Neumann time direction $x^0$ (strings are never pinned in time), for $p+1$ NN coordinates total. One line: **Dirichlet = "on the brane," Neumann = "along the brane."**
>
> **2. The stretched string.** Its two endpoints are Dirichlet-pinned to *different* branes in the normal directions, so classically it is a straight taut segment of length $|\Delta\bar x|$ from brane 1 (at $\sigma=0$) to brane 2 (at $\sigma=\pi$), plus $\sin n\sigma$ oscillations that leave the ends fixed. It carries a nonzero zero mode $\sqrt{2\alpha'}\,\alpha_0^a = \tfrac1\pi\Delta\bar x^a$ but **no normal momentum** ($\alpha_0^a$ appears in the slope $X'^a$, never in the velocity $\dot X^a$). Its mass is
> $$ M^2 = \left(\frac{|\Delta\bar x|}{2\pi\alpha'}\right)^2 + \frac1{\alpha'}\big(N^\perp - 1\big). $$
> The first term is (tension × length)$^2$: with $T_0 = 1/(2\pi\alpha')$ it equals $(T_0\,|\Delta\bar x|)^2$, the squared rest energy of a static taut string. It vanishes only when the branes coincide.
>
> **3. Coincidence gives $U(N)$.** Each endpoint can land on any of the $N$ branes, so a massless vector carries two labels $i,j=1,\dots,N$: it is a matrix entry $A_m{}^i{}_j$, with $N^2$ of them. When the branes coincide, every off-diagonal string has zero stretched length and is therefore massless, so all $N^2$ vectors are light and assemble into one matrix-valued gauge field — the $U(N)$ Yang–Mills connection (joining string ends realizes matrix multiplication, $[ij]*[jk]=[ik]$). Separate the branes and the off-diagonal strings gain mass $\big(|\Delta x_{ij}|/(2\pi\alpha')\big)^2$, leaving only the diagonal $U(1)^N$ light — the Higgs mechanism, geometrically.
