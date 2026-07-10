---
title: Boundary terms and allowed variations
number: "1.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, boundary-terms]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The surface term left over when you integrate by parts is not junk to sweep away — it is a physical knob. How you make it vanish — pinning an endpoint, freeing it, or handing the end to a wall that absorbs momentum — *selects the boundary conditions*, decides whether momentum is conserved, and, for open strings, is where D-branes first appear.

The bulk equation of motion says how the system moves in the interior; the boundary term asks what happens at the edges, and that is separate, independent physics. A jump rope makes the split concrete: the wave equation governs the middle, but whether the ends are nailed to a wall or flap freely is extra information the wave equation alone never supplies. That extra information is exactly the boundary term.

## Where the boundary term comes from

Every Euler–Lagrange derivation integrates by parts to peel the derivative off the variation. That move *always* produces a total derivative, and a total derivative integrates to its values on the boundary. For a coordinate $q(t)$ (see [[Euler-Lagrange equation]]):

$$\delta S = \underbrace{\left[\frac{\partial L}{\partial \dot q}\,\delta q\right]_{t_i}^{t_f}}_{\text{boundary term}} + \int_{t_i}^{t_f}\underbrace{\left(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot q}\right)}_{\text{bulk: gives the EOM}}\delta q\, dt .$$

The bulk term gives the equation of motion. The boundary term is $\big[p\,\delta q\big]_{t_i}^{t_f}$ with $p = \partial L/\partial\dot q$ the conjugate momentum — momentum times endpoint variation, the leftover physics at the two ends.

## Three ways to kill it

For $\delta S = 0$ you need the boundary term to vanish. There is more than one way, and *which one you pick is a physical statement about the ends*:

1. **Fix the endpoints** (Dirichlet): demand $\delta q(t_i) = \delta q(t_f) = 0$. Then $[p\,\delta q]$ dies because $\delta q = 0$, regardless of $p$. This is "the particle starts at $A$, ends at $B$" — the endpoints are pinned.
2. **Free an endpoint and let the coefficient die** (Neumann): if you *don't* fix $\delta q(t_f)$, the only way to kill the term is to force the coefficient to vanish, $p(t_f) = 0$. A free right end means zero final momentum. The endpoint is loose, and the physics — not the setup — forces a condition on it.
3. **Enlarge the system** — attach the end to a dynamical object (a wall, or a D-brane, below) and vary the object too. The string's piece of the boundary term no longer has to vanish on its own: it cancels against the object's variation, and its value is the force the string exerts on the object.

| Boundary choice | What is held fixed? | What must vanish instead? | Physical reading |
|---|---|---|---|
| Dirichlet | endpoint value | the variation $\delta q$ | the endpoint is pinned |
| Neumann | endpoint can vary | conjugate momentum / force | the endpoint is free |

Same Lagrangian, same Euler–Lagrange equation — but different boundary choices are *different physics*.

## The string forces the issue: two boundary terms

For the nonrelativistic transverse string $y(t,x)$ (displacement $y$ over an interval $x\in[0,a]$), the variation produces **two** surface terms — one in time, one in space. Start from the string action with Lagrangian density $\mathcal{L} = \tfrac12\mu_0\dot y^2 - \tfrac12 T_0 y'^2$ ($\mu_0$ = mass/length, $T_0$ = tension):

$$S[y]=\int_{t_i}^{t_f}dt\int_0^a dx\;\mathcal{L}(\dot y,y'),\qquad \mathcal{P}^t=\frac{\partial\mathcal{L}}{\partial\dot y}=\mu_0\dot y,\quad \mathcal{P}^x=\frac{\partial\mathcal{L}}{\partial y'}=-T_0 y'.$$

Here $\mathcal{P}^t$ is the transverse **momentum density** and $\mathcal{P}^x$ is its **flux** (a transverse component of tension). Varying $y\to y+\delta y$ and keeping first order,

$$\delta S=\int dt\,dx\left(\mathcal{P}^t\,\partial_t\delta y+\mathcal{P}^x\,\partial_x\delta y\right).$$

Integrate by parts once in $t$ and once in $x$ to strip the derivative off $\delta y$:

$$\delta S = \underbrace{\int_0^a \big[\mathcal{P}^t\,\delta y\big]_{t_i}^{t_f}\,dx}_{\text{time boundary}} \;+\; \underbrace{\int_{t_i}^{t_f}\big[\mathcal{P}^x\,\delta y\big]_{x=0}^{x=a}\,dt}_{\text{space boundary}} \;-\; \int\!\!\int \Big(\partial_t\mathcal{P}^t + \partial_x\mathcal{P}^x\Big)\,\delta y\;dt\,dx.$$

Three pieces, three independent questions — so each is handled on its own:

- **Bulk** $\to$ setting the coefficient to zero gives $\partial_t\mathcal{P}^t+\partial_x\mathcal{P}^x=0$, i.e. $\mu_0\ddot y = T_0 y''$: the [[The wave equation on an interval|wave equation]] (the EOM).
- **Time boundary** $\to$ killed by specifying the string's shape at $t_i,t_f$: $\delta y(t_i,x)=\delta y(t_f,x)=0$. Same as the particle's fixed endpoints — nothing new.
- **Space boundary** $\to$ genuinely new. It lives at the *string's ends* $x=0,a$ and is where the interesting physics is.

(The bracket $[\cdots]_{x=0}^{x=a}$ means "value at $a$ minus value at $0$." That signed orientation is why the spatial term measures a *net flux out through the two ends*, not a sum.)

## The space boundary term picks Neumann vs. Dirichlet

To kill $\big[\mathcal{P}^x\,\delta y\big]_{x=0}^{x=a} = \big[-T_0 y'\,\delta y\big]_0^a$ you choose, at each end, one of:

- **Dirichlet** — pin the end: $\delta y = 0$ there. The endpoint position is a fixed number you must specify. (If the pinned value is time-independent, then $\partial y/\partial t = 0$ at that end too — the end doesn't move.)
- **Neumann** — free the end, $\delta y \neq 0$, and instead force the *coefficient* to vanish, $\mathcal{P}^x = -T_0\,\partial_x y = 0$:
$$\frac{\partial y}{\partial x}(t,0) = \frac{\partial y}{\partial x}(t,a) = 0 \qquad\text{(Neumann).}$$
A **free end has zero slope**. Picture the end as a massless ring sliding on a frictionless post: the string's transverse pull on the ring is $-T_0\,\partial_x y$, and nothing pulls back, so any nonzero slope would give the massless ring infinite acceleration. The string meets the boundary flat.

Same action, same wave equation — a **pinned string** and a **free-ended string** are two physically distinct systems, distinguished only by which piece of the boundary term you set to zero.

## Why it is physics, not error: the momentum argument

The string's total transverse momentum is $p_y = \int_0^a \mu_0\,\dot y\,dx$. Differentiate in time and use the wave equation $\mu_0\ddot y = T_0 y''$:

$$\frac{dp_y}{dt} = \int_0^a \mu_0\,\ddot y\,dx = \int_0^a T_0\, y''\,dx,$$

and the last integrand is a total derivative:

$$\boxed{\ \frac{dp_y}{dt} = T_0\Big[\,\partial_x y\,\Big]_{x=0}^{x=a}\ }. \tag{1}$$

The rate of momentum change is the same tension-times-slope combination that sat in the spatial boundary term — equal to $\mathcal{P}^x(0) - \mathcal{P}^x(a)$, the net flux of transverse momentum *in* through the two ends. The two boundary choices now read off directly:

- **Neumann** ends ($y'=0$ at both) $\Rightarrow dp_y/dt = 0$: momentum **conserved**. Nothing leaks.
- **Dirichlet** ends ($y'\neq0$ in general) $\Rightarrow dp_y/dt \neq 0$: momentum **not conserved**. A string nailed to a wall has the wall constantly pushing on it; momentum flows into the wall.

So the coefficient in the spatial boundary term, $\mathcal{P}^x$, is *literally the rate at which transverse momentum flows through an end*. A term you could always cancel by fiat would be inert bookkeeping. This one **measures a force** — discard it carelessly and you have thrown away the ledger of where the momentum went.

## The payoff: D-branes

Dirichlet conditions look suspect at first: the string leaks momentum, and in empty space there is nothing for an open string's endpoint to attach to. The resolution is that the endpoint sits on a **D-brane** — a dynamical extended object in its own right. The momentum the string loses is **absorbed by the brane**, and total momentum is conserved after all. Taking one spatial boundary term seriously is what forces this object into the theory.

The logical chain:

$$\text{boundary term} \;\to\; \text{Neumann/Dirichlet choice} \;\to\; \text{momentum (non)conservation} \;\to\; \text{D-branes}.$$

Cancel the boundary term thoughtlessly and you never discover any of it. (Forward links: [[D-branes (first appearance)|D-branes]], [[Open strings on one brane|open strings]].)

## The relativistic particle echoes it

Varying the relativistic action $S = -mc\int ds$ produces, after integration by parts, a boundary term $\propto [p_\mu\,\delta x^\mu]_{\tau_i}^{\tau_f}$ (here $p_\mu = mc\,dx_\mu/ds$ is the four-momentum). Fix the worldline endpoints and it vanishes — exactly case 1. Free an endpoint and killing it would force $p_\mu = 0$ there — the relativistic version of case 2, except now it is impossible: the mass shell $p_\mu p^\mu = -m^2c^2$ (mostly-plus signature) never permits $p_\mu = 0$ for $m \neq 0$, so a massive particle's endpoints must be pinned. Same structure, now with a spacetime index on the endpoint variation — and the string escapes the impasse because its endpoint condition constrains $\mathcal{P}^x$, which *can* vanish. See [[Part I - Just-in-Time Physics/01 Action Principles/Reparameterization invariance]].

## Open questions

- For the relativistic *string* the spatial boundary term gives the open-string endpoint conditions and the D-brane spectrum directly. Revisit after the Nambu–Goto / Polyakov module.
- **Boundary actions:** sometimes one *adds* a surface term to make a chosen boundary-value problem well-posed. Not needed for the particle/string endpoint variations here, but essential in gravitational actions (the Gibbons–Hawking term).

## Exercise

A transverse string on $x\in[0,a]$ is pinned at $x=0$ (Dirichlet, held at $y=0$) but **free** at $x=a$ (Neumann). Using the boundary result $(1)$,

$$\frac{dp_y}{dt} = T_0\big[\partial_x y\big]_{x=0}^{x=a},$$

decide whether the transverse momentum $p_y$ is conserved, and identify the force on the string in terms of the field. Then say, in one sentence, what physical object the fixed end must be attached to for the *total* momentum (string + object) to be conserved.

> [!success]- Solution
> The Neumann end at $x=a$ contributes $\partial_x y(t,a)=0$. The Dirichlet end at $x=0$ is pinned, so $\delta y(t,0)=0$ kills its piece of the *variational* boundary term, but its slope $\partial_x y(t,0)$ is **not** forced to vanish. So
> $$\frac{dp_y}{dt} = T_0\big[\partial_x y(t,a) - \partial_x y(t,0)\big] = T_0\big[0 - \partial_x y(t,0)\big] = -\,T_0\,\partial_x y(t,0).$$
> This is generically nonzero, so $p_y$ is **not conserved**. The quantity $-T_0\,\partial_x y(t,0) = \mathcal{P}^x|_{x=0}$ is exactly the transverse force the *wall exerts on the string* at the pinned end (momentum flowing in through $x=0$). For total momentum to be conserved, the pinned end must sit on a **D-brane** (or wall) that picks up the third-law reaction: the string pushes on it with force $+T_0\,\partial_x y(t,0)$, the exact opposite of the string's own $dp_y/dt$, so whatever the string loses, the brane gains.
>
> Sanity check: make *both* ends Neumann and both slope terms vanish, recovering $dp_y/dt=0$ — the fully-free string conserves momentum, as it must.
