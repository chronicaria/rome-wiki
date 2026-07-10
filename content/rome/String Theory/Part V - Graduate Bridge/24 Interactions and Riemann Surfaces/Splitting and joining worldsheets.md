---
title: Splitting and joining worldsheets
number: "24.1"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, interactions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A string interaction is a single smooth worldsheet on which the number of strings changes — there is no interaction *point* — and in light-cone gauge it is drawn as a flat strip that develops a slit.

## Why strings need no interaction vertex

A particle traces a **line** through spacetime, so "two particles meet and become one" needs a new ingredient: a **point** where three lines touch. That point is the vertex, and it is where you bolt an interaction onto the free theory by hand ($\lambda\phi^3$ in field theory).

A string traces a **surface**. And a surface can change how many strings it represents *just by changing its shape* — a trouser leg that splits into two, a tube that branches. No new local ingredient is needed: every small patch of the pants still looks like an ordinary free worldsheet. Only the *global* shape knows an interaction happened.

**Interactions in string theory are not added to the action; they are already there, hidden in the freedom to let one free worldsheet have a more interesting shape.** You get them by summing over worldsheet shapes and topologies (see [[Perturbative string expansion by topology]]), each weighted by the string coupling — never by inserting a vertex.

Point particles interact at a point; strings interact by the surface smoothly branching, and there is no point on that surface you could call "the collision."

## Why no local vertex is possible

Two independent arguments, both worth carrying:

1. **Geometric.** A worldline meeting a worldline forces a genuinely new, non-smooth feature: the vertex. A worldsheet branching into two worldsheets is a *smooth* surface — a "pair of pants." Locally it is indistinguishable from a free string; the branch is only visible globally. So there is nothing point-like to attach a coupling to.

2. **Gauge-theoretic.** Could you *force* a vertex by adding a nonlinear term to the [[Polyakov action]]? No. The free worldsheet theory is consistent only because of its gauge symmetries (reparametrization + Weyl invariance). Any extra local term would spoil those symmetries. So the local dynamics is *forced* to stay the free Polyakov dynamics, and the only room left for interactions is the global one — summing over the shapes and topologies of otherwise-free worldsheets, weighted by the string coupling.

For a mathematician the clean framing is a **cobordism**: the interacting worldsheet is a surface interpolating between incoming boundary circles/segments and outgoing ones. Which surface, and of what shape, is all the physics — but no boundary point or interior point is distinguished as "the vertex."

## Light-cone strips that split

We now draw the surface explicitly. The cleanest drawing comes from **light-cone gauge**, where the worldsheet becomes a flat strip and splitting becomes literally cutting a slit in it.

### Step 1 — parameter length is energy

Start in **static gauge**, $X^0 = \tau$ (natural units, $c = 1$): worldsheet time is spacetime time. Parametrize $\sigma$ so that *equal $\sigma$-intervals carry equal energy* — a uniform bookkeeping choice. With string tension $T_0 = 1/(2\pi\alpha')$, a string of energy $E$ then spans
$$\sigma \in \big[0,\ E/T_0\big] = \big[0,\ 2\pi\alpha' E\big]. \tag{1}$$
The $\sigma$-length is just energy measured in units of tension. Because energy is conserved, **the total $\sigma$-length is conserved through an interaction** — this is the geometric backbone of every string diagram. A string of energy $E$ splitting into $E_1 + E_2$ is an infinite strip in the $(\tau,\sigma)$ plane with a horizontal **slit** opening at the interaction time $\tau_0$: one string before, two after.

### Step 2 — the problem with the naive gauge

The usual light-cone gauge (the "$\beta = 2$" choice) sets
$$X^+ = 2\alpha' p^+\tau, \qquad p^+\sigma = \pi\int_0^\sigma d\tilde\sigma\,\mathcal{P}^{\tau+}. \tag{2}$$
The first equation ties physical light-cone time $X^+$ to worldsheet time $\tau$ **through $p^+$**. That is fatal for interactions: when three strings meet at one spacetime event, they must all agree on the physical time $X^+$ there. But
$$X_1^+ = 2\alpha' p_1^+\tau_1, \quad X_2^+ = 2\alpha' p_2^+\tau_2, \quad X_3^+ = 2\alpha' p_3^+\tau_3, \tag{3}$$
and with different momenta $p_i^+$ the same physical time forces *different* $\tau_i$. The three strings cannot be glued along one common $\tau$ — there is no shared clock.

### Step 3 — the fix: a $p^+$-independent clock

Use the general relation with a free parameter $\beta$,
$$X^+ = \beta\alpha' p^+\tau, \qquad p^+\beta\,\sigma = 2\pi\int_0^\sigma d\tilde\sigma\,\mathcal{P}^{\tau+}(\tau,\tilde\sigma), \tag{4}$$
and **choose $\beta$ to cancel the $p^+$** in the $X^+$–$\tau$ relation:
$$\boxed{\ \beta = \frac{1}{\alpha' p^+}\ } \quad\Longrightarrow\quad X^+ = \tau. \tag{5}$$
Now **physical time equals worldsheet time for every string, regardless of its momentum.** All interacting strings share one clock $\tau$ and can be glued along it. The price moves to $\sigma$: from (4) the range now carries the momentum,
$$\sigma \in \Big[0,\ \tfrac{2\pi}{\beta}\Big] = \big[0,\ 2\pi\alpha' p^+\big]. \tag{6}$$
Each string is a horizontal strip whose **width is $2\pi\alpha' p^+$**. Conservation of $p^+$ becomes a purely geometric statement:

> **The total strip width is constant in $\tau$.**

A single string of momentum $p_1^+$ splitting into $p_2^+ + p_3^+$ is a **constant-width strip with a cut**: width $2\pi\alpha' p_1^+$ before the split, dividing into stacked widths $2\pi\alpha' p_2^+$ and $2\pi\alpha' p_3^+$ after (with $p_1^+ = p_2^+ + p_3^+$, so the total width never changes).

The split is specified by just the two widths. *Where along the infinite strip you start the cut* is only a horizontal translation — a choice of convention, not physics. So for a single splitting the interaction time $\tau_0$ is **not** an independent shape parameter (a *modulus*). This is the seed of the whole moduli story: it is only when *two* interactions occur that their *separation* becomes a genuine, un-removable modulus — that is the [[The four-open-string modulus]].

## Open vs closed: the drawings

- **Open string splitting** ($1\to2$): an infinite strip (open strings are the vertical constant-$\tau$ segments, with two free boundary edges) develops an interior slit — one open string becomes two.
- **Open strings joining then splitting** ($2\to1\to2$): two incoming strips fuse into an intermediate strip that later splits — **two** slits, hence **two** interaction times, whose gap $T = T_1 - T_2$ is the modulus of [[The four-open-string modulus]].
- **Closed strings**: replace each strip by a **cylinder** (glue the strip's top and bottom edges). Joining/splitting cylinders trace the smooth **pair of pants**: one tube branching into two.

```
Open splitting (1 -> 2)              Closed splitting (pair of pants)
  ___________________                    ____
 |         __________|                  /    \____
 |  str.2 |                            | tube      \____
 | ‾‾‾‾‾‾‾‾  <- slit opens at tau_0     |            ‾‾‾‾ tube
 |  str.1 |__________                    \          ____
 |        |          |                    \    /‾‾‾‾
 |________|__________|                     \__/  ‾‾‾‾ tube
     one -> two strings                (one tube -> two, smooth)
```

Locally, every patch of either drawing is a free worldsheet. Nothing but the global shape records the interaction — exactly the claim from the top of the note.

## Open questions

- The claim that added local terms are incompatible with the worldsheet gauge symmetries is used here at the level of a principle, not proved. A real proof belongs with the BRST analysis of which worldsheet perturbations are allowed.
- The light-cone strip has a genuine **corner** at the slit. "Smooth" therefore means smooth as a conformal / Riemann-surface object *after* mapping away the corner — not smooth in the flat polygonal $(\tau,\sigma)$ coordinate. The corner is packaged into puncture-and-moduli data by a conformal map; see [[Riemann surfaces replace Feynman graphs]].
- Everything here is the interpolating-surface picture. It does not yet weight the surfaces — that is the string-coupling / topology bookkeeping in [[Perturbative string expansion by topology]].

## Exercise

The light-cone gauge (5) was engineered to give $X^+ = \tau$ for all strings. **Verify that the naive $\beta = 2$ gauge cannot do this at a three-string vertex, and show that no *single* constant $\beta$ (shared by all strings) can either — the cure must be the $p^+$-dependent choice (5).** Then state what geometric quantity conservation of $p^+$ becomes in the fixed gauge.

> [!success]- Solution
> **Why $\beta = 2$ fails.** From $X^+ = \beta\alpha' p^+\tau$ with $\beta = 2$, the three strings meeting at one spacetime event satisfy $X_i^+ = 2\alpha' p_i^+\tau_i$. Agreement on the physical time, $X_1^+ = X_2^+ = X_3^+ \equiv X^+_*$, gives
> $$\tau_i = \frac{X^+_*}{2\alpha' p_i^+},$$
> so $\tau_1 : \tau_2 : \tau_3 = \tfrac{1}{p_1^+} : \tfrac{1}{p_2^+} : \tfrac{1}{p_3^+}$. Generic distinct momenta force distinct $\tau_i$ — the strings have no common clock, and cannot be glued into one worldsheet with a single $\tau$.
>
> **Why no shared constant $\beta$ works.** Repeat with an arbitrary constant $\beta$ (same for all three strings): $X_i^+ = \beta\alpha' p_i^+\tau_i$, so $\tau_i = X^+_*/(\beta\alpha' p_i^+)$. The $\beta$ cancels out of the *ratios* $\tau_i/\tau_j = p_j^+/p_i^+$. A constant $\beta$ rescales all three $\tau$'s by the same factor but never equalizes them; distinct $p_i^+$ still give distinct $\tau_i$. So no universal constant can decouple $\tau$ from $p^+$.
>
> **Why (5) works.** Let $\beta$ depend on each string's own momentum, $\beta_i = 1/(\alpha' p_i^+)$. Then
> $$X_i^+ = \beta_i\,\alpha' p_i^+\,\tau = \frac{1}{\alpha' p_i^+}\cdot\alpha' p_i^+\,\tau = \tau,$$
> independent of $p_i^+$. Every string reads the same clock $X^+ = \tau$; they glue along one common $\tau$. The cost lands on the $\sigma$-range, which becomes $[0, 2\pi/\beta_i] = [0, 2\pi\alpha' p_i^+]$ — the strip **width** now carries the momentum.
>
> **The geometric statement.** With width $= 2\pi\alpha' p^+$, conservation of total $p^+$ (here $p_1^+ = p_2^+ + p_3^+$) becomes: **the total strip width is constant in $\tau$.** The worldsheet is a constant-width strip with a slit.
