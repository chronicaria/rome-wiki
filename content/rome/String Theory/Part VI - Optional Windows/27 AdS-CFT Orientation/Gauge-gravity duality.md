---
title: Gauge-gravity duality
number: "27.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, holography]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Look at one stack of $N$ D3-branes two ways — as gauge fields living on the branes, or as a curved throat in the surrounding spacetime — take the low-energy limit of each, and the leftover pieces must match. That match is the origin of AdS/CFT.

## Two descriptions of one object

The same object has two honest low-energy descriptions; they share one identical piece, so the remaining pieces have to be the same theory.

The object is a stack of $N$ coincident D3-branes ([[Definition of a Dp-brane]]) — a 3+1 dimensional sheet sitting inside 9+1 dimensional spacetime. There are two legitimate ways to describe its low-energy physics:

- **As a place where open strings end.** Open strings attached to the branes give a gauge theory *on* the branes.
- **As a heavy charged object.** The branes carry mass and charge, so like a black hole they bend spacetime around themselves, digging an infinite "throat."

Neither description is wrong. They are the same physics. Take the low-energy limit of each: both split into a decoupled free-gravity piece plus one interesting piece. The free-gravity pieces are *identical*. So the two interesting pieces must be the same theory — and that is the duality.

The result we reach below: the interesting piece on side A is $SU(N)$ Yang–Mills, and the interesting piece on side B is type IIB strings living in the throat, whose geometry turns out to be $\mathrm{AdS}_5\times S^5$.

This is a **conjecture**, not a theorem. The argument below is *evidence* — a plausibility argument built from decoupling — not a proof.

## The low-energy limit

Both descriptions are taken in the same limit: keep only physics below the string scale ($\hbar=c=1$ throughout, so $1/\sqrt{\alpha'}$ is an energy),
$$ E \ll \frac{1}{\sqrt{\alpha'}} \equiv \frac{1}{\ell_s}. \tag{1}$$
Equivalently, hold energies fixed and send $\alpha'\to 0$ with the string coupling $g_s$ fixed. This throws away every massive string state (mass $M\sim 1/\sqrt{\alpha'}\to\infty$) and keeps only massless modes — plus whatever gets red-shifted down to low energy, which becomes the crux of side B.

## Description A — open strings on the branes

Open strings ending on $N$ coincident D3-branes have massless modes forming a $U(N)$ gauge field, together with six adjoint scalars (from the six transverse directions) and their superpartner fermions ([[Open strings on one brane]], [[Maxwell fields on branes]]). That field content is precisely $\mathcal{N}=4$ super-Yang–Mills in four dimensions, living on the brane worldvolume. In the limit (1) the massive open-string states drop out.

Two decouplings happen as $\alpha'\to 0$:

- **The open strings decouple from the bulk closed strings.** Gravity is controlled by the ten-dimensional Newton constant, which vanishes in the limit:
$$ G^{(10)} \sim g_s^2(\alpha')^4 \;\xrightarrow{\;\alpha'\to 0\;}\; 0. \tag{2}$$
With $G^{(10)}\to 0$ the closed strings in the surrounding flat space become *free* (non-interacting), and their coupling to the brane fields switches off. Gravity turns itself off.
- **One $U(N)$ photon decouples.** The overall $U(1)\subset U(N)$ describes the center-of-mass motion of the whole stack and separates out, leaving a fully interacting $SU(N)$ gauge theory.

**Result A:** interacting $SU(N)$ Yang–Mills $\;\oplus\;$ free closed strings in flat 10D.

## Description B — the branes as a curved throat

The same $N$ branes carry energy and Ramond–Ramond charge, so in the closed-string theory they source a nontrivial solution of the gravitational field equations, much like a charged black hole. The solution has an **infinite throat**: transverse spheres around the branes, whose circumference would shrink to zero near a point mass in flat space, instead approach a *constant* size as you descend, and the branes sit an infinite proper distance down the tube (schematically below).

```
   flat asymptotic region
   ────────────────────────
            │  throat
            │  (spheres → constant radius R)
            │
            ▼  D3-branes (infinitely far down)
```

In the limit (1), low-energy excitations as seen from infinity split into two kinds:

- **Far from the branes:** ordinary low-energy excitations in the asymptotically flat region — again free closed strings in flat space.
- **Deep in the throat (near-horizon):** an excitation of any energy sitting deep down is **gravitationally red-shifted** to arbitrarily low energy as measured from infinity. So even non-negligible near-horizon physics *survives* the low-energy limit — this is why the interesting piece here is a full string theory, not just massless modes.

These two kinds decouple: far excitations are almost never captured by the throat, and throat excitations cannot climb out to infinity. (This decoupling is supported by evidence — vanishing absorption in the limit — not proven here.)

**Result B:** type IIB strings in the near-horizon throat $\;\oplus\;$ free closed strings in flat 10D.

## The match

Both results contain the *same* decoupled free closed strings in flat space. Cancel that common piece; the remainders must agree:
$$ \boxed{\;SU(N)\ \text{Yang–Mills} \;=\; \text{type IIB strings in the near-horizon geometry}\;} \tag{3}$$

Reading the D3-brane supergravity solution, the near-horizon geometry turns out to be exactly $\mathrm{AdS}_5\times S^5$ (see [[Anti-de Sitter geometry]], [[Conformal boundary]]). The four flat brane directions plus the radial throat coordinate assemble into $\mathrm{AdS}_5$; the transverse spheres, whose radius levels off at the horizon value $R$, are the $S^5$, with the *same* radius $R$. So (3) reads:

$$ \mathcal{N}=4\ SU(N)\ \text{SYM in 4D} \;\;\longleftrightarrow\;\; \text{type IIB closed strings on } \mathrm{AdS}_5\times S^5. $$

That "the throat is exactly $\mathrm{AdS}_5\times S^5$" is *quoted* from the explicit type IIB supergravity $p$-brane metric, which is beyond this module — the derivation of the metric itself is listed as a prerequisite in [[Part VI - Optional Windows/27 AdS-CFT Orientation/00 — Overview]].

## The parameter dictionary

Each side carries two dimensionless parameters:
$$ \text{Yang–Mills: } g_{YM},\ N \qquad\qquad \text{IIB strings: } g_s,\ \frac{R}{\sqrt{\alpha'}}. $$
The correspondence relates them by
$$ \boxed{\; g_s = g_{YM}^2 \qquad\text{and}\qquad \frac{R^4}{\alpha'^2} = g_{YM}^2\,N \;}\tag{4}$$

This dictionary is *quoted*: its numerical constants come from the D3-brane tension/charge normalization and the supergravity solution, which we do not build here. Reading it:

- $g_s = g_{YM}^2$: **the closed-string coupling is the square of the gauge coupling.** Weak gauge coupling means weak string coupling. (This is Zwiebach's normalization, with no extra $4\pi$; a common field-theory convention instead writes $g_s = g_{YM}^2/(4\pi)$. The physics is convention-independent; we keep the no-$4\pi$ form throughout this module.)
- $R^4/\alpha'^2 = g_{YM}^2 N$: the right side is the **'t Hooft coupling** $\lambda \equiv g_{YM}^2 N$ ([[Large-N gauge theory]]). Taking the fourth root,
$$ \frac{R}{\sqrt{\alpha'}} = \lambda^{1/4}. \tag{5}$$
The geometry measured in string units is set entirely by $\lambda$: **big $\lambda$ means a big, gently curved AdS.**

## Why the two sides are never both easy

Equation (5) is exactly what makes the duality powerful and hard to test at once:

- **Gravity is tractable when the geometry is weakly curved**, i.e. $R/\sqrt{\alpha'}\gg 1$, i.e. **large $\lambda$**. Then classical supergravity (GR plus matter) is a good approximation to the full string theory, because $\alpha'$-corrections scale as $\alpha'^2/R^4 = 1/\lambda \to 0$.
- **Gauge theory is tractable when $\lambda$ is small** — that is when perturbation theory in $\lambda$ converges.

Large $\lambda$: easy gravity, hard gauge theory. Small $\lambda$: easy gauge theory, hard gravity. There is no overlap. What rescues testability is **supersymmetry**, which protects certain observables so they are *$\lambda$-independent*: compute them cheaply at small $\lambda$, then compare against the strong-coupling gravity prediction. Several such quantities have been matched — the strongest concrete evidence for the conjecture.

## What this buys, and the honest limits

- It is a concrete realization of **holography**: the gravitational $\mathrm{AdS}_5$ directions are fully encoded by a non-gravitational 4D boundary theory; the $S^5$ contributes internal $SO(6)$ R-symmetry rather than extra boundary dimensions. See [[Bulk versus boundary observables]].
- The sharp case has **maximal supersymmetry** and is **conformal** — $\mathcal{N}=4$ SYM has a vanishing beta function, so $g_{YM}$ does not run. That vanishing is *why* the boundary is a CFT and the bulk is maximally symmetric AdS. It is therefore **not QCD**, which has no supersymmetry and does run. A string description of real QCD remains open.
- The whole D3-brane argument motivates the correspondence *in the low-energy limit*. The actual conjecture is stronger: full type IIB strings $\leftrightarrow$ full $\mathcal{N}=4$ SYM, at all energies. That extension is assumed, not derived.

## Open questions

- The decoupling on side B rests on far and near excitations "genuinely" not talking to each other. The supporting evidence is that absorption cross-sections into the throat vanish in the limit — a computation beyond this module. How airtight is it?
- The dictionary constant in $g_s = g_{YM}^2$ hides in the D-brane action normalization ([[DBI action as a preview]]). Deriving it, not just the scaling, needs the DBI tension and RR charge quantization.
- Does the equivalence hold only near the low-energy limit or for the full theories? The strong form (all energies) is the real Maldacena conjecture — assumed here, unproven.

## Exercise

Assume the parameter dictionary (4), $g_s = g_{YM}^2$ and $R^4/\alpha'^2 = g_{YM}^2 N$. Work entirely in Zwiebach's no-$4\pi$ convention.

(a) Express the string coupling $g_s$ purely in terms of the 't Hooft coupling $\lambda = g_{YM}^2 N$ and $N$, and use it to state what happens to $g_s$ in the 't Hooft limit ($N\to\infty$ at fixed $\lambda$).

(b) The IIB string's $\alpha'$-expansion parameter (the size of stringy corrections to classical geometry) is $\lambda' \equiv \alpha'^2/R^4$. Show $\lambda' = 1/\lambda$, and state which side of the duality — gauge or gravity — is the tractable one when $\lambda \gg 1$.

(c) Deduce the "clean" corner of the duality: which single limit makes *both* the classical-geometry approximation ($\lambda'\to 0$) and the tree-level-string approximation ($g_s\to 0$) hold simultaneously? What is the boundary theory doing in that corner?

> [!success]- Solution
> **(a)** From (4), $g_s = g_{YM}^2$. Since $\lambda = g_{YM}^2 N$, we have $g_{YM}^2 = \lambda/N$, so
> $$ g_s = \frac{\lambda}{N}. $$
> In the 't Hooft limit $\lambda$ is held fixed while $N\to\infty$, so $g_s = \lambda/N \to 0$. The string coupling vanishes: at $N=\infty$ the bulk is classical in the string-loop sense, and $1/N$ counts string loops ([[Large-N gauge theory]]).
>
> **(b)** Directly invert the second relation in (4): $R^4/\alpha'^2 = g_{YM}^2 N = \lambda$, so
> $$ \lambda' \equiv \frac{\alpha'^2}{R^4} = \frac{1}{\lambda}. $$
> Classical geometry is reliable when $\alpha'$-corrections are small, i.e. $\lambda' \ll 1$, i.e. $\lambda \gg 1$. So $\lambda\gg 1$ is the regime where the **gravity** side is tractable — and simultaneously the regime where gauge perturbation theory in $\lambda$ *fails*. (Consistent with (5): $R/\sqrt{\alpha'} = \lambda^{1/4}\gg 1$ means a large, weakly curved AdS.)
>
> **(c)** Two smallness conditions must hold at once: $\lambda' = 1/\lambda \to 0$ needs $\lambda\to\infty$, and $g_s = \lambda/N \to 0$ needs $N\to\infty$ faster than $\lambda$ grows. The clean corner is therefore
> $$ N \to \infty \quad\text{first (fixing } \lambda\text{),}\qquad \text{then } \lambda \to \infty. $$
> There the bulk is **classical supergravity** (tree-level, weakly curved). On the boundary the theory is **planar** ($1/N$ loops suppressed) and **strongly coupled** ($\lambda\gg 1$) $\mathcal{N}=4$ SYM. Both simplifications — classical bulk, planar boundary — come from the *same* large-$N$, large-$\lambda$ limit, which is exactly why this is the corner where AdS/CFT is used.
