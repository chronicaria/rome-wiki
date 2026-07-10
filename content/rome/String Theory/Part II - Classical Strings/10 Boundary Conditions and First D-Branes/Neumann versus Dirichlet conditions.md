---
title: Neumann versus Dirichlet conditions
number: "10.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-conditions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Varying the open-string action leaves one leftover term at each endpoint, $\mathcal P^\sigma_\mu\,\delta X^\mu = 0$. Killing it forces a binary choice per coordinate — Neumann ($\mathcal P^\sigma_\mu=0$, free) or Dirichlet ($X^\mu$ pinned) — and that per-axis pattern is the data that defines a D-brane.

## A guitar string in $D$ dimensions

Think of the string as a guitar string, but relativistic and living in $D$-dimensional spacetime. When you shake a real guitar string, its *ends* do something definite: they are either **clamped** (a fret) or **free** (past the bridge, if you let it flap). Those are the only two clean options, and you must pick one — the wave equation alone does not decide for you.

The open relativistic string is the same, with one twist: the choice is made **independently in every spacetime direction**. An endpoint can be free to slide in $x^1$ while being nailed to a fixed value of $x^2$. The list of "free or fixed" over all the spatial directions is not fine print — it *is* the specification of the surface the endpoint must live on. That surface is a D-brane. This note derives where the choice comes from and why it is exactly binary.

## Where the boundary term comes from

Start from the Nambu–Goto action (mostly-plus signature $\eta=\mathrm{diag}(-,+,\dots,+)$ throughout),

$$
S=-\frac{T_0}{c}\int d\tau\,d\sigma\,
\sqrt{(\dot X\!\cdot X')^2-\dot X^2\,X'^2}
\;\equiv\;\int d\tau\,d\sigma\,\mathcal L(\dot X^\mu,X'^\mu),
$$

where $\dot X^\mu=\partial_\tau X^\mu$, $X'^\mu=\partial_\sigma X^\mu$. The square root is the worldsheet area density; the tension $T_0$ says area costs energy. Define the two momentum densities as the derivatives of $\mathcal L$ with respect to the two velocities:

$$
\mathcal P^\tau_\mu \equiv \frac{\partial\mathcal L}{\partial\dot X^\mu}
=-\frac{T_0}{c}\,
\frac{(\dot X\!\cdot X')\,X'_\mu-X'^2\,\dot X_\mu}
{\sqrt{(\dot X\!\cdot X')^2-\dot X^2\,X'^2}},
\qquad
\mathcal P^\sigma_\mu \equiv \frac{\partial\mathcal L}{\partial X'^\mu}
=-\frac{T_0}{c}\,
\frac{(\dot X\!\cdot X')\,\dot X_\mu-\dot X^2\,X'_\mu}
{\sqrt{(\dot X\!\cdot X')^2-\dot X^2\,X'^2}}.
$$

Here $\mathcal P^\tau_\mu$ is the density of spacetime momentum the string carries forward in worldsheet time, and $\mathcal P^\sigma_\mu$ is the **flux of that momentum along the string**, toward an endpoint. The boundary condition turns entirely on this second density: it is a statement about how much momentum reaches the end.

Vary $X^\mu\to X^\mu+\delta X^\mu$. Since $\delta\dot X^\mu=\partial_\tau\delta X^\mu$ and $\delta X'^\mu=\partial_\sigma\delta X^\mu$,

$$
\delta S=\int d\tau\,d\sigma\,
\Big(\mathcal P^\tau_\mu\,\partial_\tau\delta X^\mu+\mathcal P^\sigma_\mu\,\partial_\sigma\delta X^\mu\Big).
$$

Integrate by parts in each variable — move the derivative off $\delta X^\mu$, picking up a boundary term for each:

$$
\delta S=
\underbrace{\int d\sigma\,\Big[\mathcal P^\tau_\mu\,\delta X^\mu\Big]_{\tau_i}^{\tau_f}}_{\text{$\tau$-boundary}}
+\underbrace{\int d\tau\,\Big[\mathcal P^\sigma_\mu\,\delta X^\mu\Big]_{\sigma=0}^{\sigma=\sigma_1}}_{\text{$\sigma$-boundary}}
-\int d\tau\,d\sigma\,\Big(\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu\Big)\,\delta X^\mu.
$$

The $\tau$-boundary term vanishes because Hamilton's principle holds the string's configuration fixed at the initial and final times ($\delta X^\mu=0$ there). Two pieces remain, and each carries a distinct job:

- **Bulk term** $\Rightarrow$ **equation of motion.** For arbitrary interior $\delta X^\mu$ it forces
  $$\partial_\tau\mathcal P^\tau_\mu+\partial_\sigma\mathcal P^\sigma_\mu=0.$$
  This is local conservation of spacetime momentum on the worldsheet.

- **$\sigma$-boundary term** $\Rightarrow$ **the endpoint conditions.** A *closed* string has no boundary in $\sigma$ (the ends are glued), so this term is absent and we are done. An *open* string has two edges, and the variations $\delta X^\mu$ there — one independent function per coordinate per edge — force every term in the sum to vanish separately:
  $$\boxed{\ \mathcal P^\sigma_\mu\,\delta X^\mu\Big|_{\text{endpoint}}=0\ \text{(no sum)}\quad\text{for each }\mu,\text{ at }\sigma=0\text{ and }\sigma=\sigma_1.\ } \tag{1}$$

The variational principle does **not** tell you what happens at the ends. It only demands that each product vanish. *You* supply the physics by choosing, coordinate by coordinate, which of the two factors you send to zero.

> **The mechanical analogy.** For a single-particle action $\int L(q,\dot q)\,dt$, integration by parts leaves an endpoint term $p\,\delta q$. A *free* end has arbitrary $\delta q$, so the momentum $p$ must vanish there; a *fixed* end has $\delta q=0$, so nothing is asked of $p$. The string repeats this exactly, once per spacetime coordinate at each edge — with $\mathcal P^\sigma_\mu$ playing the role of $p$.

## The binary choice

Equation (1) is a product of two factors; killing it means killing at least one. That gives precisely two clean options per coordinate per endpoint.

**Neumann (free) — kill the momentum factor:**
$$\mathcal P^\sigma_\mu=0\quad\text{at the endpoint.}$$
The displacement $\delta X^\mu$ is then unconstrained, so the endpoint is **free to move** in the $X^\mu$ direction. Read $\mathcal P^\sigma_\mu$ as the flow of $\mu$-momentum *along* the string toward its end: setting it to zero says **no momentum leaks off the end** — there is nothing out there to catch it, so the tension force reflects back. (When *every* direction is Neumann, this no-leak condition is stringent enough to force the endpoint to move at $c$; see [[Endpoint velocity and endpoint force]].)

**Dirichlet (fixed) — kill the displacement factor instead:**
$$X^\mu(\tau,\text{endpoint})=\text{const}\quad\Longrightarrow\quad \delta X^\mu=0\ \text{at the endpoint.}$$
The endpoint is **pinned** to a fixed value of $X^\mu$ for all time, so its value is not allowed to vary and $\delta X^\mu$ dies. Now $\mathcal P^\sigma_\mu$ is generally *nonzero* — momentum *does* flow off the end, into whatever is holding the string fixed. That "whatever" is a D-brane, and this leaked momentum is the force the string exerts on it.

| condition | set to zero | endpoint moves in $X^\mu$? | momentum flow off the end? |
|---|---|---|---|
| **Neumann / free** | $\mathcal P^\sigma_\mu$ | yes | none |
| **Dirichlet / fixed** | $\delta X^\mu$ | no, pinned | allowed — flows into the brane |

> **Why these names.** "Dirichlet" fixes the *value* of the field $X^\mu$ at the boundary — a Dirichlet boundary-value problem. "Neumann" fixes a *derivative*: after the later conformal/light-cone gauge, $\mathcal P^\sigma_\mu\propto\partial_\sigma X^\mu$, so $\mathcal P^\sigma_\mu=0$ becomes the normal-derivative condition $\partial_\sigma X^\mu=0$. Same dichotomy every PDE course teaches — it transfers directly.

## Why time is always Neumann

The choice is *not* symmetric between the two factors. You may **never** impose Dirichlet on the time coordinate $X^0$.

A Dirichlet condition $X^0(\tau,\text{end})=\text{const}$ would freeze the endpoint at a single instant of time. But the string must persist *through* time — its endpoint has to exist at every moment, tracing a worldline. Pinning $X^0$ would delete the endpoint at all other times, which is nonsense. Equivalently: Dirichlet says $\partial_\tau X^\mu=0$, and since $\tau$ advances time, $\partial_\tau X^0=0$ contradicts the fact that time must flow as $\tau$ flows. So

$$\boxed{\ \text{Always Neumann along }X^0:\quad \mathcal P^\sigma_0=0\ \text{ at every endpoint.}\ }$$

This is precisely why a D-brane always extends in the *time* direction: it has a worldvolume, never a purely spatial one. An endpoint is free in $p$ chosen spatial directions and time, pinned in the rest; the surface it sweeps is a $(p{+}1)$-dimensional **Dp-brane**. The counting and the resulting geometry are developed in [[D-branes (first appearance)]].

## Worked instance: the D2-brane

Take three spatial dimensions, $d=3$. Choose **Neumann along $x^1,x^2$** and **Dirichlet along $x^3$**, pinning $X^3(\tau,\text{end})=0$:

$$\mathcal P^\sigma_1=0,\quad \mathcal P^\sigma_2=0\ (\text{free}); \qquad X^3=0\ (\text{fixed}); \qquad \mathcal P^\sigma_0=0\ (\text{time, always free}).$$

The endpoints glide freely on the $(x^1,x^2)$ plane but can never leave it — $x^3=0$ for all time. That plane, swept through time, is a **D2-brane**. The string body can flop around anywhere in space, but its two ends are stuck to the brane. If instead *every* spatial direction is Neumann ($p=d$), the ends roam freely everywhere: a **space-filling D-brane**, the fully-free case of [[Endpoint velocity and endpoint force]].

## Open questions
- The two ends of one open string can carry *different* conditions in the same direction (Neumann at one end, Dirichlet at the other). Later [[Strings stretched between Dp- and Dq-branes]] names these ND/DN coordinates and finds their oscillators carry half-integer moding.
- Here the free condition is $\mathcal P^\sigma_\mu=0$ in the full nonlinear Nambu–Goto form; the textbook $\partial_\sigma X^\mu=0$ Neumann form only emerges after the conformal/light-cone gauge fixing of the next module.

## Exercise

Consider an open string endpoint in a two-dimensional spatial world $(x^1,x^2)$. Suppose you try to impose **both** conditions in the *same* direction $x^1$ at the *same* endpoint: Neumann ($\mathcal P^\sigma_1=0$) **and** Dirichlet ($\delta X^1=0$) simultaneously.

(a) Is this over-determined, contradictory, or redundant? (b) Now the physically interesting case: what goes wrong if you try to impose Dirichlet on $x^1$ at one end while insisting the endpoint carry *no* momentum flow ($\mathcal P^\sigma_1=0$) there too — and how does this differ from the illegal Dirichlet-on-time case?

> [!success]- Solution
> **(a)** For the variational principle, nothing goes wrong — the demand is the single product $\mathcal P^\sigma_1\,\delta X^1=0$, and either factor's vanishing already satisfies it, so the pair is **redundant, not contradictory**. As a condition on the dynamics, however, it is an extra restriction the variational principle never asked for: it selects the special "no-force pinned endpoint," pinned *and* with no momentum leaking into whatever pins it. It is not what a generic D-brane does.
>
> **(b)** This is exactly case (a) read physically. Dirichlet pins $X^1=\text{const}$, which alone kills the boundary term. Additionally demanding $\mathcal P^\sigma_1=0$ is a *further* physical condition, not required by the variational principle: it says the string exerts no force on the brane in the $x^1$ direction. Generic configurations violate it — a stretched, pinned string tugs on its anchor — so imposing it restricts to force-free special solutions rather than defining the boundary condition.
>
> This is the opposite of the time case. Dirichlet-on-$X^0$ is **forbidden** because pinning $X^0$ deletes the endpoint at all other times (it contradicts $\tau$ advancing time). Dirichlet-on-$x^1$ is perfectly **legal** — spatial pinning is fine, and it just anchors the end to a fixed spatial point. The asymmetry is entirely about time: you can freeze *where* an endpoint sits in space, never *when* it exists.
