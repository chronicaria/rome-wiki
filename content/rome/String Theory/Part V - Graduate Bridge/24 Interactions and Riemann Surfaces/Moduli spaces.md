---
title: Moduli spaces
number: "24.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, moduli]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A modulus is a coordinate on the space of Riemann surfaces that survives after you use up all conformal symmetry; string amplitudes integrate over these leftover shape parameters, not over point-like vertices.

You are handed a surface — a sphere, a disk — with some marked points on it, the punctures where strings enter and leave. Two such surfaces count as *the same* if a conformal map slides one onto the other. So the honest question is never "where are the punctures?" but "which puncture configurations are genuinely different?" Conformal symmetry lets you drag a few punctures to standard spots for free; whatever positions you *still can't remove* are the **moduli**. Counting them is pure bookkeeping: **moduli = (things to place) − (symmetry to spend).**

Formally, for this module a moduli space is the quotient
$$
\mathcal{M} = \frac{\{\text{Riemann surfaces of fixed topology with labeled punctures}\}}{\{\text{conformal self-maps}\}}.
$$
The numerator is a configuration space; the denominator is a symmetry group. A modulus is a continuous invariant of the quotient — a coordinate no symmetry can erase.

## How much symmetry can you spend?

The symmetry group is the set of conformal maps a surface has to *itself* (its global automorphisms). The size of this group is exactly the number of puncture-placements you get for free.

**Sphere (closed strings).** The self-maps of the Riemann sphere $\hat{\mathbb{C}}$ are the **Möbius transformations**
$$w = \frac{az+b}{cz+d}, \qquad ad-bc \ne 0. \tag{1}$$
Four complex numbers $a,b,c,d$, but scaling them all by a common factor leaves the map unchanged, so we can normalize $ad-bc=1$ and are left with **three complex parameters**. That is the entire freedom.

Why *these* maps and no others? A general conformal generator on the plane is $\ell_n = z^{n+1}\partial_z$. For the map to be a genuine self-map of the *whole* sphere it must blow up nowhere — not at $z=0$ and not at $z=\infty$. Checking both poles kills every $\ell_n$ except $\ell_{-1},\ell_0,\ell_{+1}$ (translation, scaling/rotation, and special conformal), and those three are precisely the generators of (1). The resulting group is $SL(2,\mathbb{C})/\mathbb{Z}_2 = PSL(2,\mathbb{C})$, called the **conformal Killing group** of the sphere. ("Killing" = symmetry-generating; these are the leftover gauge freedoms after fixing the worldsheet metric.)

**Disk / upper half-plane (open strings).** Open-string punctures live on a *boundary*, so the allowed maps must send the boundary $\operatorname{Im}z=0$ to itself. Imposing this on (1) forces the coefficients real:
$$w = \frac{az+b}{cz+d}, \quad a,b,c,d\in\mathbb{R}, \quad ad-bc=1. \tag{2}$$
The group is $SL(2,\mathbb{R})/\mathbb{Z}_2$ — **three real parameters**, half as much freedom as the sphere. That the boundary really is preserved follows from a one-line computation of the imaginary part:
$$\operatorname{Im}(w) = \frac{ad-bc}{|cz+d|^2}\,\operatorname{Im}(z). \tag{3}$$
With $ad-bc=1>0$, upper half-plane maps to upper half-plane; this is *why* we choose $+1$ rather than $-1$ when normalizing. Intuition: the sphere is fully two-dimensional to move around in, the disk boundary is one-dimensional, so it offers a smaller symmetry group — and correspondingly fewer free placements.

**Boundary maps preserve cyclic order.** Differentiating (2) along the real axis,
$$\frac{dw}{dz}=\frac{ad-bc}{(cz+d)^2}=\frac{1}{(cz+d)^2}>0. \tag{4}$$
The boundary parametrization moves strictly forward, so a real Möbius map can *slide* three ordered boundary punctures anywhere but can **never reverse their cyclic order**. This constraint has no analog for interior punctures on the sphere, and it is what makes open-string moduli richer (discrete data on top of continuous).

## The counting rule in action

Now spend the symmetry. Pick a convenient representative of each orbit — the applied-math name for this is *gauge fixing* — and record the coordinates you couldn't remove.

**Sphere, three complex parameters of freedom.**

| punctures on $\hat{\mathbb{C}}$ | complex moduli | reason |
|---|---|---|
| 3 | 0 | Möbius fixes all three to $0,1,\infty$ |
| 4 | **1** | fix three to $0,1,\infty$; the 4th lands at some $\lambda$ you can't dictate |
| $m$ | $m-3$ | |

Three points cost exactly the three complex parameters, so they carry no modulus. The map sending any three points to any three targets is the **cross-ratio construction**
$$\frac{z-z_1}{z-z_2}\cdot\frac{z_3-z_2}{z_3-z_1} = \frac{w-w_1}{w-w_2}\cdot\frac{w_3-w_2}{w_3-w_1}, \tag{5}$$
and it is *unique*. That uniqueness is decisive: once three points are pinned, the map is used up, so a fourth point's image is forced. Whether that forced image is where you wanted it is a genuine invariant — the modulus $\lambda$. Equivalently, $\lambda$ is the cross-ratio of the four points, the first coordinate that survives the quotient.

Hence the four-punctured sphere has one complex = two real moduli:
$$\dim_{\mathbb{R}} \mathcal{M}_{0,4} = 2 \tag{6}$$
(the subscripts read *genus 0, four punctures*). The modulus $\lambda$ can be any complex number except $0,1,\infty$ (those would collide punctures), so $\mathcal{M}_{0,4}$ is *itself* a sphere with three points removed — a moduli space that looks like the objects it parametrizes.

### Open strings: a discrete twist

For the upper half-plane, the three real parameters of $SL(2,\mathbb{R})$ fix three *ordered* boundary points to $0,1,\infty$, but only within a fixed cyclic order (from (4)). So beyond the continuous moduli there is **discrete** data: which cyclic ordering of the labeled punctures you started in. Here the counting needs one more input. $SL(2,\mathbb{R})$ is connected and preserves orientation, so on its own it leaves $(n-1)!$ distinct orderings (arrangements of $n$ labels on a circle, up to rotation). But the physical open string is unoriented: reversing the boundary — reading it clockwise instead of counterclockwise, an orientation-reversing map — is a symmetry, and it flips every cyclic order into its reverse. Identifying each ordering with its reverse halves the count to $(n-1)!/2$. The count then goes:

- **2 boundary punctures**: no moduli. Slide one to $0$, rescale the other to $1$; done.
- **3 boundary punctures**: no continuous *and* no discrete modulus. The two cyclic orderings $(1,2,3)$ and $(1,3,2)$ are reverses of each other, so parity identifies them: $(3-1)!/2 = 1$, and $\mathcal{N}_3$ is a single point — matching $\mathcal{M}_{0,3}$ for the sphere.
- **4 boundary punctures**: **one** continuous modulus per ordering,
  $$\dim \mathcal{N}_4 = 1, \qquad \lambda \in (0,1), \tag{7}$$
  and $(4-1)!/2 = 3$ inequivalent orderings, so $\mathcal{N}_4$ is *three* copies of the interval. These three orderings are exactly the three channels — $(s,t)$, $(s,u)$, $(t,u)$ — whose amplitudes sum to the four-tachyon Veneziano amplitude.

The open modulus $\lambda$ is real and confined to the interval $(0,1)$ — after fixing $P_1,P_3,P_4\to 0,1,\infty$, the remaining point $P_2$ must stay *between* $P_1$ and $P_3$ to keep the cyclic order, so $0<\lambda<1$. This $\lambda$ is exactly what the [[The four-open-string modulus|four-open-string interaction]] generates dynamically.

## Why this matters for amplitudes

The amplitude is an integral **over the moduli space**, not over the surfaces themselves. Each conformally-inequivalent surface is one "history" connecting the incoming and outgoing strings; summing all histories means integrating $\lambda$ over its range.

The contrast with ordinary field theory is sharp. In particle QFT an interaction is a **point**: several worldlines meet at a vertex, and you assign that single point a single number (the coupling). A string worldsheet has *no such point* — locally it always looks like a free string, and the "interaction" is a global feature of the shape. So there is nothing point-like to hand a coupling to. Instead the interaction is **smeared across a whole one-parameter family** of conformally-inequivalent worldsheets, and the only invariant way to sum their contributions is to integrate the modulus.

That is why the four-string tree amplitude is $\int d\lambda\,(\dots)$ and not a bare vertex factor: there is a one-dimensional quotient space of inequivalent four-punctured surfaces ($\dim\mathcal{N}_4 = 1$ for the disk, or the complex $\lambda$-line for the sphere), and conformal invariance forces you to cover all of it. This is the [[Part V - Graduate Bridge/24 Interactions and Riemann Surfaces/00 — Overview|central lesson of the module]].

## Open questions

- **The torus and modular group.** Loop amplitudes replace $PSL(2,\mathbb{C})$ by the *modular group* $PSL(2,\mathbb{Z})$ acting on the torus modulus $\tau$; there the moduli space is a fundamental domain, not a single point. Used only as a forward pointer in [[Perturbative string expansion by topology]].
- **General dimension formula.** The pattern $\dim_{\mathbb{C}}\mathcal{M}_{g,n} = 3g-3+n$ (valid for $g\ge 2$) generalizes the sphere counting $m-3$ here. It follows from the Riemann–Roch theorem — beyond this module — and should be derived in a later moduli/loop note before being invoked, since $g\ge 2$ surfaces have *no* conformal Killing vectors and the naive "punctures − symmetry" shortcut needs modification.

## Exercise

Redo the counting for the **five-punctured sphere** and the **five-boundary-punctured disk**. In each case: how much conformal symmetry is available, how many punctures can be fixed for free, and what is the real dimension of the moduli space? For the disk, also say what discrete data (if any) accompanies the continuous moduli.

> [!success]- Solution
> **Sphere, five interior punctures.** The conformal Killing group is $PSL(2,\mathbb{C})$: three *complex* = six real parameters. Fix three punctures to $0,1,\infty$; two remain unprescribable, each a complex coordinate. So there are $5-3=2$ complex moduli and
> $$\dim_{\mathbb{R}}\mathcal{M}_{0,5} = 2\cdot 2 = 4.$$
> This matches $\dim_{\mathbb{C}}\mathcal{M}_{g,n}=3g-3+n$ at $g=0,n=5$: $\,3(0)-3+5 = 2$ complex.
>
> **Disk, five boundary punctures.** The conformal Killing group is $SL(2,\mathbb{R})/\mathbb{Z}_2$: three *real* parameters. Fix three ordered boundary points to $0,1,\infty$; two remain, each a *real* coordinate on the boundary. So
> $$\dim_{\mathbb{R}}\mathcal{N}_5 = 5-3 = 2.$$
> The continuous moduli are two real cross-ratios, confined so the fixed cyclic order is preserved. On top of that sits **discrete** data: the number of inequivalent cyclic orderings of five labeled boundary points. $SL(2,\mathbb{R})$ is connected and preserves orientation (recall $dw/dz>0$), so on its own it leaves $(5-1)! = 24$ orderings — arrangements on a circle up to rotation. But the unoriented open string identifies each ordering with its reverse under boundary reflection, halving this to $(5-1)!/2 = 12$. Sanity check against the note: for three points the same rule gives $(3-1)!/2 = 1$, the single point of $\mathcal{N}_3$. So $\mathcal{N}_5$ is 2-real-dimensional with 12 disconnected sheets. The sphere has half the real dimension per puncture (complex vs real placements) and no ordering data — exactly the pattern from the $n=4$ case.
