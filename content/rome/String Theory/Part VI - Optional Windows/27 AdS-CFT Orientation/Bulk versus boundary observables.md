---
title: Bulk versus boundary observables
number: "27.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, holography]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

If the two sides of AdS/CFT are really the same physics, every question has two answers that must agree — but the two calculators are switched on in opposite regimes, so the game is to find quantities you can compute on both sides and check.

## Hologram, made precise

A hologram stores a 3D scene on a 2D film. AdS/CFT says gravity in a $(d+1)$-dimensional bulk is stored, without loss, on a $d$-dimensional boundary theory that has no gravity in it at all. This note is the **dictionary**: which bulk object is which boundary object, why you can seldom check a translation directly, and the one degree-of-freedom count that makes "the boundary has enough room" quantitative.

## The dictionary: what maps to what

A duality is only content if it says *what corresponds to what*. Four entries, from firmest to softest:

| Bulk ($\mathrm{AdS}_5\times S^5$, gravity) | Boundary (4D $\mathcal{N}=4$ SYM, no gravity) |
|---|---|
| isometry of $\mathrm{AdS}_5$: the group $SO(4,2)$ | conformal symmetry (15 generators) |
| isometry of $S^5$: the group $SO(6)$ | R-symmetry rotating the scalars and fermions |
| geometry radius $R/\sqrt{\alpha'}=\lambda^{1/4}$ | 't Hooft coupling $\lambda=g_{YM}^2N$ |
| string loop coupling $g_s=\lambda/N$ | $1/N$ (loop counting at fixed $\lambda$) |
| a bulk field $\phi(x,z,\Omega)$ | a boundary operator $\mathcal{O}(x)$ |

The first row is a clean group-theory equality: $SO(4,2)$ *is* the 4D conformal group, so the bulk **geometry already knows the boundary's symmetry** (derived in [[Conformal boundary]]). The second row: harmonics on the $S^5$ carry $SO(6)$ labels, which on the boundary become the internal quantum numbers rotating the six scalars and four fermions of $\mathcal{N}=4$ SYM — the $S^5$ is *not* five more boundary dimensions. Rows three and four are the parameter dictionary $g_s=g_{YM}^2$, $R^4/\alpha'^2=\lambda$ from [[Gauge-gravity duality]], read off with the genus counting of [[Large-N gauge theory]].

The last row — **bulk field $\leftrightarrow$ boundary operator** — is the operational heart of the duality and the one entry this module can only *name*, not use. Its precise form (the GKP–Witten relation) is below.

## Why you can rarely check a translation directly

"Same physics, two descriptions" means any single number computed in the bulk must equal the same number computed on the boundary. The catch: **each description is only tractable in the opposite regime.**

$$
\underbrace{\lambda \gg 1}_{\text{geometry weakly curved: gravity is easy}}
\qquad\qquad
\underbrace{\lambda \ll 1}_{\text{coupling weak: gauge theory is easy}}
$$

Large $\lambda$ means $R/\sqrt{\alpha'}=\lambda^{1/4}\gg1$, a gently curved space where classical supergravity is a good approximation — but then the gauge theory is strongly coupled and its perturbation theory is useless. Small $\lambda$ flips both. The two easy windows don't overlap, so you almost never get to compute the *same* quantity on both sides and watch it match. That is exactly what makes the duality **powerful** (it hands you the hard side's answer) and **hard to test** (you can't usually check the hard side).

What rescues testability is **supersymmetry**. It forces certain quantities — **protected observables** — to be independent of $\lambda$. You compute a protected quantity where it's easy (weak coupling, gauge side) and compare it to the strong-coupling gravity prediction; if they agree, that is a real cross-check spanning both regimes. Several such quantities have matched. This is strong *evidence* for the duality, not a proof for every observable.

## The holographic count: does the boundary have enough room?

This is what makes "hologram" more than a slogan. If a 4D theory is to store all the physics of a 5D gravitational interior, it needs a *comparable number of degrees of freedom*. Do the counts match?

**Boundary side.** An $SU(N)$ gauge theory has fields in the adjoint representation, which has $N^2-1\approx N^2$ components. So the number of boundary degrees of freedom scales as
$$ n_{\text{bdy}} \sim N^2. $$

**Bulk side.** Gravitational "capacity" is measured by entropy, and a black hole's entropy is its horizon **area** in Planck units, not its volume ([[Entropy-area relation]]) — the first structural hint of holography. Measuring the AdS$_5$ horizon area in the appropriate Newton constant $G^{(5)}$ gives a dimensionless bulk capacity
$$ n_{\text{bulk}} \sim \frac{R^3}{G^{(5)}}. $$
Reducing 10D gravity on the $S^5$ fixes $G^{(5)}$. Using $G^{(10)}\sim g_s^2\alpha'^4$, $\mathrm{Vol}(S^5)\sim R^5$, and $R^4/\alpha'^2=g_s N$ from the dictionary,
$$ \frac{R^3}{G^{(5)}}\sim \frac{R^3\,\mathrm{Vol}(S^5)}{G^{(10)}}\sim\frac{R^8}{g_s^2\alpha'^4}=\Big(\frac{R^4}{\alpha'^2}\Big)^2\frac{1}{g_s^2}=\frac{(g_s N)^2}{g_s^2}=N^2. \tag{1}$$
The $g_s$ cancels, leaving $n_{\text{bulk}}\sim N^2$.

**Both sides scale as $N^2$.** That commensurability is the minimum holography demands, and AdS/CFT passes it. The boundary really does have enough room. (This is a scaling check, not a coefficient match; the precise $1/4$ area law needs the full dictionary.)

## The real dictionary, on record: GKP–Witten

The quantitative bulk↔boundary statement is the **GKP–Witten relation**. A bulk field $\phi$ that approaches a boundary value $\phi_0(x)$ acts as a *source* for a boundary operator $\mathcal{O}(x)$, and the two theories' generating functionals are equal:
$$ Z_{\text{gravity}}\big[\phi\to\phi_0\big]\;=\;\Big\langle \exp\!\int_{\partial\mathrm{AdS}}\phi_0\,\mathcal{O}\Big\rangle_{\text{CFT}}. \tag{2}$$
In words: computing the bulk partition function as a function of the boundary data is the *same* as computing the boundary theory's correlators. In the classical-gravity limit the left side is $e^{-S_{\text{on-shell}}[\phi_0]}$, so the practical rule becomes "**differentiate the bulk on-shell action with respect to boundary sources to get CFT correlators.**" The relation also fixes how a bulk field's mass $m$ sets the boundary operator's scaling dimension $\Delta$: for a scalar in $\mathrm{AdS}_{d+1}$,
$$ \Delta(\Delta-d)=m^2R^2, \tag{3}$$
which is the indicial equation for a power-law fall-off $\phi\sim z^{s}$ solving the AdS wave equation near the boundary (heavier bulk field $\to$ larger boundary dimension). Both roots $s$ satisfy (3); which one is the operator dimension is the subtlety flagged below.

This note writes (2)–(3) only so the **shape** of the answer is on record. It is *not* derived here and cannot be — using it needs path-integral QFT, the on-shell gravitational action, and holographic renormalization, none of which this module builds. Recognize the relation when you meet it later; do not treat it as established here.

## Open questions

- Eq. (1) is a scaling argument. Pinning the coefficient (and hence the exact $1/4$ area law) requires the actual $S^5$ reduction of type IIB supergravity with all numerical factors, not the $\sim$ estimate used here.
- The $\pm$ roots of (3), $\Delta_\pm=\tfrac{d}{2}\pm\sqrt{\tfrac{d^2}{4}+m^2R^2}$, both solve the equation. Which root is the operator dimension (and when "alternate quantization" uses the other) is a real subtlety — flag before using (3) quantitatively.
- "Protected observables are $\lambda$-independent" rests on supersymmetric nonrenormalization theorems only named here. *Which* observables (chiral primaries, certain anomaly coefficients)? Beyond scope.
- Is the full field↔operator map known, or only for special operators? Known precisely for protected/chiral-primary operators and a handful of others; the generic map is hard and open.

## Exercise

The dictionary gives $g_s=\lambda/N$ and $R^4/\alpha'^2=\lambda$. Using only these, show that the dimensionless bulk gravitational capacity $R^3/G^{(5)}$ is **independent of $\lambda$** at fixed $N$, and confirm it scales as $N^2$. Then state, in one sentence, what would have gone wrong with the holographic interpretation if the $g_s$ had *not* cancelled in (1).

> [!success]- Solution
> Start from $R^3/G^{(5)}\sim R^8/(g_s^2\alpha'^4)$ (from $G^{(10)}\sim g_s^2\alpha'^4$ and $\mathrm{Vol}(S^5)\sim R^5$). Write $R^8=(R^4/\alpha'^2)^2\,\alpha'^4=\lambda^2\alpha'^4$. Then
> $$ \frac{R^3}{G^{(5)}}\sim\frac{\lambda^2\alpha'^4}{g_s^2\alpha'^4}=\frac{\lambda^2}{g_s^2}=\frac{\lambda^2}{(\lambda/N)^2}=N^2. $$
> The $\alpha'$ and $\lambda$ both cancel, leaving $R^3/G^{(5)}\sim N^2$ — no $\lambda$ dependence, as claimed.
>
> If $g_s$ had *not* cancelled, the bulk capacity would depend on the coupling $\lambda$ while the boundary count stays fixed at $N^2-1\approx N^2$ (the adjoint dimension, which knows nothing about $g_{YM}$). The two "number of degrees of freedom" counts would then disagree over most of parameter space, and the claim that a fixed 4D theory stores the whole bulk would fail. The cancellation is what lets a *coupling-independent* boundary field count match the bulk capacity.
