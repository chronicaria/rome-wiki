---
title: Conformal boundary
number: "27.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, holography]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Anti-de Sitter space, though infinite in size, has a sharp edge "at infinity" — and that edge carries angles but no ruler. That missing ruler is the geometric reason a **conformal** field theory is the natural thing to put there.

## AdS as a reverse fisheye room

Think of AdS as a room whose walls are painted so that everything looks smaller the farther out you go — like a fisheye lens run in reverse. Walk toward the wall and you never arrive: it is infinitely far away by any tape measure. Yet the wall is really there, it has a definite shape, and light can bounce off it and come back in finite time. That wall is the **conformal boundary**.

Here is the twist. To read off the wall's geometry you must first divide out the fisheye distortion — but *which* distortion you divide out is your choice, and different choices stretch the wall's metric by different overall factors. So the boundary comes with a well-defined notion of **angles** (which distortion never touches) but **no absolute scale of length** (which the distortion sets arbitrarily). A geometry with angles-but-no-ruler is a **conformal geometry**. A physical theory living on it must not care about the ruler either — it must be **scale-invariant**, i.e. a conformal field theory. That is the "CFT" in AdS/CFT, read straight off the bulk geometry.

## How a non-compact space can have a boundary

Minkowski space is infinite and, in the ordinary sense, edgeless. AdS is different. Recall the Poincaré metric (mostly-plus signature; [[Anti-de Sitter geometry]]):
$$ ds^2 = \frac{R^2}{z^2}\big(\eta_{\mu\nu}\,dx^\mu dx^\nu + dz^2\big),\qquad \eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1). \tag{1}$$
The warp factor $R^2/z^2$ **diverges** as $z\to 0$. That divergence is the fisheye: lengths near $z=0$ are measured in enormous proper units. Concretely, the radial proper distance from a slice $z=z_0$ out to $z=\epsilon$, at fixed $t,\vec x$, is
$$\int_{\epsilon}^{z_0}\frac{R}{z}\,dz = R\ln\frac{z_0}{\epsilon}\;\xrightarrow[\ \epsilon\to0\ ]{}\;\infty. \tag{2}$$
So $z=0$ is **infinitely far away** by any tape measure — you never walk to the wall.

But light does not measure proper distance; it follows $ds^2=0$. For a radial ray (only $t,z$ vary), (1) gives $-dt^2+dz^2=0$, so $dt=\pm dz$, and the **coordinate** time to run from $z_0$ to $z=0$ is
$$\Delta t=\int_0^{z_0}dz = z_0<\infty. \tag{3}$$
Light reaches the wall in **finite time**. This is the special combination: $z=0$ is at infinite proper distance yet is a genuine *causal* boundary — signals get there and, unless you say what happens, would leak out. Physics in AdS is therefore not fully determined until you impose data on $\{z=0\}$. That set, coordinatized by $x^\mu=(t,\vec x)$, is the **conformal boundary**, and it is where the dual theory lives. (This finite-time reachability is a feature of the Poincaré patch; the global causal structure is subtler — see Open questions.)

## Why the boundary metric is only defined up to scale

The obstruction is blunt: the bulk metric (1) is **singular** at $z=0$, since $R^2/z^2\to\infty$. You cannot simply restrict $ds^2$ to $z=0$ — it blows up. The cure is to peel off the divergence *before* restricting.

Pick any positive **defining function** $\omega(x,z)$ that vanishes like $z$ at the boundary; the cleanest is $\omega=z/R$. Multiply the metric by $\omega^2$:
$$ d\tilde s^2 \equiv \omega^2\,ds^2 = \frac{z^2}{R^2}\cdot\frac{R^2}{z^2}\big(\eta_{\mu\nu}\,dx^\mu dx^\nu + dz^2\big) = \eta_{\mu\nu}\,dx^\mu dx^\nu + dz^2. \tag{4}$$
This *is* finite at $z=0$, and restricting to $z=0$ leaves $\eta_{\mu\nu}\,dx^\mu dx^\nu$ — flat Minkowski in the boundary directions. So the wall's geometry exists after all.

Now the catch. The defining function was **not unique**. Any $\omega' = e^{f(x)}\,\omega$, with $f$ finite at $z=0$, vanishes like $z$ just as well and gives an equally good finite metric. But it rescales the boundary metric:
$$ \eta_{\mu\nu}\;\longmapsto\; e^{2f(x)}\,\eta_{\mu\nu}. \tag{5}$$
The bulk fixes the boundary metric only up to this position-dependent positive factor — a **Weyl rescaling**. There is no canonical boundary metric, only a canonical **conformal class**: a metric modulo $g\mapsto e^{2f}g$. The bulk geometry remembers the boundary's angles and causal structure, but forgets any absolute unit of length. That is the "angles-but-no-ruler" statement made precise.

## Why this forces a conformal theory

A field theory placed on this boundary is handed a conformal class, not a metric. To be well-defined on that data it must give the same physics for every representative $e^{2f}\eta$ — it must be insensitive to local rescalings of length. A theory with no preferred length scale, invariant under angle-preserving rescalings, is exactly a **conformal field theory (CFT)**. The bulk geometry does not *derive* which CFT sits there; it tells you that a CFT is the right *kind* of object.

And the actual boundary theory obliges: $\mathcal{N}=4$ $SU(N)$ Yang–Mills is exactly conformal — its coupling $g_{YM}$ does not run (vanishing beta function), so it has no built-in energy scale. That exact conformality is a supersymmetric quantum-field-theory fact we do not prove here; it is a [[Part VI - Optional Windows/27 AdS-CFT Orientation/00 — Overview|prerequisite]], asserted, not derived. What this note establishes is the compatibility: the AdS edge and a scale-free theory are made for each other.

## The symmetry match (why this is more than a slogan)

The compatibility becomes an exact fit at the level of symmetry groups. The **conformal group of 4D Minkowski** has 15 generators:

$$\underbrace{6}_{\text{Lorentz}} + \underbrace{4}_{\text{translations}} + \underbrace{1}_{\text{dilatation}} + \underbrace{4}_{\text{special conformal}} = 15.$$

The first ten are the Poincaré generators (spacetime symmetries you already know); the extra five — one scale transformation and four special conformal transformations — are exactly the symmetries a scale-free theory gains. These close into the 4D conformal algebra, which contains the Lorentz algebra as a subalgebra.

The payoff: the **isometries of $\mathrm{AdS}_5$** — its smooth distance-preserving maps — are generated by **15 operators obeying that same algebra**. The isometry group is $SO(4,2)$, whose dimension is $\binom{6}{2}=15$, and $SO(4,2)$ *is* the conformal group of 4D Minkowski. So
$$ \text{conformal symmetry of the 4D boundary theory} \;=\; \text{isometry of the 5D bulk }\mathrm{AdS}_5. \tag{6}$$
The bulk *geometry* already encodes the boundary theory's full *symmetry* — the symmetry did not have to be added by hand. This is one of the two heuristic pillars for believing the correspondence (the other is the D3-brane decoupling argument in [[Gauge-gravity duality]]).

## Where the extra dimension and the sphere go

- $\mathrm{AdS}_5$ has 5 dimensions: 4 boundary + 1 radial ($z$). The boundary CFT has 4. The one extra bulk dimension is not lost — it reappears on the boundary as an **energy scale** (the RG direction), developed in [[Bulk versus boundary observables]]. Encoding a whole dimension as scale data is the **holographic** content.
- The $S^5$ factor of the full $\mathrm{AdS}_5\times S^5$ background adds **no** boundary spacetime dimensions. Its $SO(6)$ isometry becomes the boundary theory's internal **R-symmetry**, rotating the scalars and fermions of $\mathcal{N}=4$ SYM ([[Anti-de Sitter geometry]]).

So "gravity in 5D bulk ↔ gauge theory in 4D boundary," with one dimension traded for scale and the sphere traded for an internal symmetry.

## Open questions

- We built the boundary from the *Poincaré* patch, where it is flat $\mathbb{R}^{1,3}$. In *global* AdS the conformal boundary is $\mathbb{R}\times S^3$. Both are used; conformal compactification relates them, and the flat patch is the one suited to $\mathcal{N}=4$ SYM on Minkowski space.
- The null-ray count (3) gives finite Poincaré *coordinate* time to $z=0$, but global AdS causal structure needs a Penrose diagram to state honestly. Flag as beyond orientation.
- Is *every* Weyl factor $f(x)$ in (5) allowed, or only those extending smoothly into the bulk? This decides which boundary conformal transformations are genuine symmetries versus gauge redundancy — a real subtlety past this module.

## Exercise

Show that the "angles-but-no-ruler" claim is literal: the defining-function ambiguity (5) rescales lengths but leaves **angles between boundary directions unchanged**. Concretely, take two boundary tangent vectors $u^\mu,v^\mu$ and compare the angle between them computed with the representative $\eta_{\mu\nu}$ versus with a Weyl-rescaled representative $\hat g_{\mu\nu}=e^{2f}\eta_{\mu\nu}$ (with $f$ evaluated at the point in question). Then state, in one sentence, why this is exactly the property a CFT needs.

> [!success]- Solution
> Take $u,v$ spacelike (so the norms below are real and positive and $\theta$ is a genuine angle; in Lorentzian signature $\eta_{\alpha\beta}u^\alpha u^\beta$ can be negative or zero, in which case one works in the Euclidean continuation of the boundary — the algebra that follows is identical). The angle $\theta$ between $u,v$ in a metric $g$ is defined through
> $$\cos\theta = \frac{g_{\mu\nu}u^\mu v^\nu}{\sqrt{g_{\alpha\beta}u^\alpha u^\beta}\,\sqrt{g_{\rho\sigma}v^\rho v^\sigma}}.$$
> Swap $\eta_{\mu\nu}\to\hat g_{\mu\nu}=e^{2f}\eta_{\mu\nu}$. Every factor of the metric brings out one factor $e^{2f}$: the numerator scales by $e^{2f}$, and each square root in the denominator scales by $\sqrt{e^{2f}}=e^{f}$, so the denominator scales by $e^{f}\cdot e^{f}=e^{2f}$. The common $e^{2f}$ cancels:
> $$\cos\hat\theta = \frac{e^{2f}\,\eta_{\mu\nu}u^\mu v^\nu}{e^{f}\sqrt{\eta u u}\;\cdot\;e^{f}\sqrt{\eta v v}} = \frac{\eta_{\mu\nu}u^\mu v^\nu}{\sqrt{\eta u u}\,\sqrt{\eta v v}} = \cos\theta.$$
> So $\hat\theta=\theta$: angles are invariant under the rescaling, while lengths $\sqrt{\hat g_{\mu\nu}u^\mu u^\nu}=e^{f}\sqrt{\eta_{\mu\nu}u^\mu u^\nu}$ are not. The bulk therefore hands the boundary a conformal structure — angles but no ruler.
>
> One sentence on why a CFT needs this: since the boundary metric is only fixed up to $g\mapsto e^{2f}g$, any theory living there must give identical physics for every representative, i.e. be invariant under local rescalings of length — which is exactly conformal invariance.
