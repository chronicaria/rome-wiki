---
title: Riemann surfaces replace Feynman graphs
number: "24.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, riemann-surfaces]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The string action only sees the worldsheet up to a local rescaling, so the physical object is a *Riemann surface* — a 2d surface with angles and global shape but no intrinsic length — and a string "diagram" is one such surface, with external strings shrunk to marked missing points (punctures) instead of legs and vertices.

## Surface, not skeleton

A Feynman graph is a skeleton: line segments (particles) glued at points (vertices), and the geometry is nothing but the combinatorics of what connects to what. A string diagram is not a skeleton — it is an actual **surface**, the sheet a string sweeps out in time. Two ideas turn that surface into a Riemann surface and dissolve the whole graph vocabulary:

1. **No length.** The [[Polyakov action]] is Weyl-invariant: rescaling the worldsheet metric $h_{\alpha\beta}\to\Omega(\tau,\sigma)^2 h_{\alpha\beta}$ changes nothing physical. So "how long is this piece of the surface" is not a question the theory answers. What survives rescaling is *angles* and *global shape* — exactly the data a Riemann surface carries. Think of a balloon: you can inflate or deflate any patch, and the string theory can't tell. Only the shape you can't remove by local stretching is real.

2. **Legs become points.** Draw a free string as an infinitely long strip. Under a rescaling that shrinks the far past, the entire semi-infinite strip collapses to a single point. An incoming string is not an appendage sticking out to infinity; conformally it is *one marked point* on an otherwise closed surface — a **puncture**. "A string comes in here" becomes "delete this point and remember it."

Put together: the free open string is a disk with two boundary punctures; the free closed string is a sphere with two punctures; and a four-string interaction is a disk (or sphere) with four punctures. There is no interaction vertex anywhere on the surface — locally every patch still looks like a free string (see [[Splitting and joining worldsheets]]). The interaction lives only in the *global* fact that the surface has four punctures, not two. **That is the replacement of Feynman graphs: geometry stored in surface topology and shape, not in a graph of legs and vertices.**

## Why "metric up to scale" = "complex structure"

A 2d metric has three independent components $h_{\alpha\beta}$. Worldsheet diffeomorphisms (two functions) remove two of them; Weyl rescaling removes the third. Nothing is left of the metric locally — the surface has no intrinsic ruler. What *is* left is the equivalence class of metrics under rescaling, and in two dimensions (with an orientation) that class is precisely a **complex structure**: a consistent notion of angle and of which local coordinate is "holomorphic."

Concretely, glue local complex coordinates $z_\alpha : U_\alpha \to \mathbb{C}$ on patches of the surface and demand that where patches overlap the change of coordinate is **analytic**. That defines a Riemann surface. Analyticity is exactly angle-preservation: writing $f = u+iv$, the Cauchy–Riemann equations
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}, \tag{1}$$
say $f$ is conformal (rotations and uniform scalings only, no shear). Two surfaces related by an analytic one-to-one map are declared *the same* Riemann surface.

Distance really is gone. If $w=f(z)$ is such a map, then $dw = f'(z)\,dz$, so near $z_0$ every length scales by the *same* factor $|f'(z_0)|$ — the map stretches uniformly at each point but by an amount that varies from point to point. You cannot ask "how far apart are these two points on a Riemann surface," for the same reason you cannot ask it on the Weyl-invariant worldsheet. The two "no ruler" statements are the same statement.

One caveat is worth stating precisely. The physical worldsheet metric is Lorentzian, $-d\tau^2 + d\sigma^2$, whereas $\mathbb{C}$ is Euclidean, $dx^2+dy^2$. So "the worldsheet is a Riemann surface" means: Wick-rotate to Euclidean signature, and *then* the conformal class is a Riemann surface. This is the standard Euclidean-continuation move of QFT; that it gives a consistent theory of string interactions is the justification, and the precise Lorentzian-to-complex-structure theorem is deferred (see Open questions).

## The conformal map that shrinks a string to a point

Package the worldsheet coordinates into one complex coordinate,
$$w = \tau + i\sigma. \tag{2}$$
A free open string of light-cone momentum $p^+$ is the horizontal strip $0 \le \sigma \le 2\pi\alpha' p^+$; strings are the vertical segments at fixed time $\tau$ (the width $2\pi\alpha' p^+$ is derived in [[Splitting and joining worldsheets]]).

Now apply the exponential map
$$z = \exp\!\Big(\frac{w}{2\alpha' p^+}\Big). \tag{3}$$
This one map does two things at once:

**(i) The infinite past collapses to a single point.** Take $w = -\tau_0 + i\sigma$ and send $\tau_0\to+\infty$:
$$z = \underbrace{\exp\!\Big(\frac{-\tau_0}{2\alpha' p^+}\Big)}_{\to\, 0}\ \exp\!\Big(\frac{i\sigma}{2\alpha' p^+}\Big)\ \longrightarrow\ 0 \qquad\text{for every }\sigma. \tag{4}$$
The radial factor kills everything; the angular factor is irrelevant. The *entire* incoming string — all values of $\sigma$ at $\tau=-\infty$ — lands on the one point $z=0$. Symmetrically the far future $\tau\to+\infty$ goes to $z=\infty$. This is the "leg becomes a point" mechanism made explicit.

**(ii) The strip becomes the upper half-plane $\overline{\mathbb{H}}$.** As $\sigma$ runs across the strip, $\arg z = \sigma/(2\alpha' p^+)$ runs from $0$ to $\pi$, so the image fills the upper half-plane. The two boundaries map to the two halves of the real axis: $\sigma=0$ to the positive real axis, $\sigma = 2\pi\alpha' p^+$ to the negative real axis. The strings, formerly vertical lines, become semicircles centered at $z=0$.

To see the two boundary punctures cleanly, send $\overline{\mathbb{H}}$ to the unit disk by
$$\eta = \frac{1+iz}{1-iz}. \tag{5}$$
The real axis maps to the unit circle. Check the interior: for $z = x+iy$ with $y>0$,
$$|\eta|^2 = \frac{|1+iz|^2}{|1-iz|^2} = \frac{x^2+(1-y)^2}{x^2+(1+y)^2} < 1, \tag{6}$$
since $(1-y)^2 < (1+y)^2$ when $y>0$. So $\overline{\mathbb{H}}$ maps onto the disk interior, its boundary onto the circle. Under this map the infinite past $z=0$ goes to $\eta=1$ and the infinite future $z=\infty$ goes to $\eta=-1$: **the free open string is a disk with two marked boundary points.** Those two points are never reached by any finite-time string, so they are removed — they are the punctures where the incoming and outgoing strings are inserted.

## The dictionary

| Feynman graph | Riemann surface |
|---|---|
| external **leg** (line to infinity) | **puncture** (a marked removed point) |
| interaction **vertex** (point where lines meet) | *nothing local* — the interaction is the surface's topology and shape |
| **propagator** | a tube or strip of the surface |

- **Free open string:** $\overline{\mathbb{H}}$ (equivalently the disk) with **two boundary punctures**.
- **Free closed string:** identify the top and bottom edges of the strip to get a cylinder of circumference $2\pi\alpha' p^+$. The strip has the same width $2\pi\alpha' p^+$ as before, but now its two long edges are glued, so the image must close up into a full circle rather than stop at a half-plane; the map $z=\exp(w/\alpha' p^+)$, whose denominator $\alpha' p^+$ is half the open-string $2\alpha' p^+$, does exactly this and sends the cylinder to $\mathbb{C}$ with the origin removed. The infinite past is the puncture at $z=0$; to treat the infinite future symmetrically, add the point at infinity, giving the **Riemann sphere $\hat{\mathbb{C}}$ with two punctures** at $0$ and $\infty$.

The corner in the light-cone strip where a string splits (a $-\pi$ turning angle in the polygon) looks like a special place, but it is *not* a term in the action and *not* an intrinsic feature of the surface. It is an artifact of the particular polygonal coordinate system; up to conformal equivalence it is packaged into puncture positions and moduli (this is what the Schwarz–Christoffel map does in [[The four-open-string modulus]]). Every part of the surface is conformally a free string — the whole content is which points are punctured and what shape remains.

## Open questions

- The Euclidean continuation is used as a license, not proved. The precise theorem relating Lorentzian worldsheets, Wick rotation, and complex structures belongs in a later note.
- That an interacting disk-like worldsheet can be conformally mapped to $\overline{\mathbb{H}}$ with boundary punctures rests on the Riemann mapping / uniformization theorem. This is a complex-analysis prerequisite, not a string-specific derivation; see [[Moduli spaces]] for how the surviving shape data (moduli) are then counted.

## Exercise

Repeat mechanism **(i)** for the *closed* string. Using the closed-string map $z = \exp(w/\alpha' p^+)$ with $w=\tau+i\sigma$ and periodic $\sigma\in[0,2\pi\alpha' p^+)$, show that (a) the infinite past $\tau\to-\infty$ collapses to $z=0$ for every $\sigma$, (b) a fixed-time string is a *circle* in the $z$-plane (not a semicircle), and (c) explain in one sentence why we must add the point at infinity to get two punctures, whereas the open string got both punctures already inside $\overline{\mathbb{H}}$.

> [!success]- Solution
> Write $w = \tau + i\sigma$, so $z = \exp\!\big(\tfrac{\tau}{\alpha' p^+}\big)\exp\!\big(\tfrac{i\sigma}{\alpha' p^+}\big)$.
>
> **(a)** As $\tau\to-\infty$ the modulus $|z| = \exp(\tau/\alpha' p^+)\to 0$ for every $\sigma$, so the whole incoming string collapses to $z=0$. (Same mechanism as the open case (4); only the constant in the exponent differs.)
>
> **(b)** At fixed $\tau$, $|z| = \exp(\tau/\alpha' p^+)$ is a constant while $\arg z = \sigma/(\alpha' p^+)$ runs over $[0, 2\pi)$ as $\sigma$ sweeps its full period $[0, 2\pi\alpha' p^+)$. A constant modulus with the argument covering a full $2\pi$ is a **full circle** centered at the origin. (The open string covered only $\arg z\in[0,\pi]$, giving a semicircle. The $\sigma$-ranges are in fact the same width $2\pi\alpha' p^+$ in both cases; the difference is the map's denominator — $2\alpha' p^+$ for the open string versus $\alpha' p^+$ here — so equal $\sigma$-width sweeps out $\pi$ there but $2\pi$ here. Geometrically, the open string's two edges stay distinct boundaries rather than being identified, so a fixed-time string is a semicircular arc with two endpoints on the real axis, not a closed loop.)
>
> **(c)** The map sends the infinite past to $z=0$ but the infinite future $\tau\to+\infty$ to $|z|\to\infty$, which is not a point of $\mathbb{C}$. To make the two ends symmetric — both are just "a string inserted here" — we compactify $\mathbb{C}$ to the Riemann sphere $\hat{\mathbb{C}}=\mathbb{C}\cup\{\infty\}$, and then $z=\infty$ is the second puncture. The open string needed no compactification because its exponential map already sent *both* the past ($z=0$) and future ($z=\infty$) to boundary points of $\overline{\mathbb{H}}$, and the disk map (5) pulled both to finite points $\eta=\pm1$ on the unit circle.
