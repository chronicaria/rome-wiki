---
title: D-branes (first appearance)
number: "10.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, d-branes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A **D$p$-brane** is the hyperplane an open string's endpoints are glued to — $p$ spatial directions where the ends slide freely (Neumann) plus time, carved out of spacetime by nothing but the pattern of free-versus-fixed boundary conditions.

## A jump rope held at both ends

Picture a jump rope. Both ends are held in someone's fists; the rope in between whips around freely. In string theory the "fists" are a **D-brane**: a rigid surface that the open string's endpoints cannot leave. Along the brane the end is free to slide, like a bead on a wire; perpendicular to the brane it is pinned.

The surprise is that *you never put the brane in by hand*. You only choose, direction by direction, whether each endpoint is **free** or **fixed**. The set of directions where it is fixed automatically defines a hyperplane, and that hyperplane is the brane. Boundary conditions **are** geometry.

## From boundary conditions to a hyperplane

Every open-string endpoint faces a binary choice in each spatial direction (derived in [[Neumann versus Dirichlet conditions]]):

- **Neumann (free):** $\mathcal P^\sigma_\mu=0$ — no momentum leaks off the end, so it moves freely in that direction.
- **Dirichlet (fixed):** $X^\mu(\tau,\text{end})=\bar x^\mu$ constant — the end is nailed to a fixed value for all time.

Time $X^0$ is **always Neumann**: a Dirichlet condition $X^0=\text{const}$ would freeze the endpoint at one instant, and the string must persist through time.

Work in $d$ spatial dimensions ($D=d+1$). Label the free spatial directions $x^1,\dots,x^p$ and the fixed ones $x^{p+1},\dots,x^d$:

$$
\underbrace{\mathcal P^\sigma_i = 0}_{i=1,\dots,p\ (\text{free})},
\qquad
\underbrace{X^a = \bar x^a}_{a=p+1,\dots,d\ (\text{fixed})},
\qquad
\underbrace{\mathcal P^\sigma_0 = 0}_{\text{time, free}}.
\tag{1}
$$

The endpoint may go anywhere in the $p$ free directions, sits at fixed values in the $d-p$ frozen ones, and lives at all times. That allowed locus is a $p$-dimensional spatial hyperplane, swept forward in time:

$$
\boxed{\ \text{D}p\text{-brane} \;=\; \{\,x^{p+1}=\bar x^{p+1},\dots,\,x^d=\bar x^d\,\}\times\text{time} \;=\; (p+1)\text{-dimensional worldvolume}\ }
$$

The name decodes directly: **"D"** is for **Dirichlet** — the brane sits exactly where the Dirichlet conditions pin the ends — and **"$p$"** counts its *spatial* dimensions.

## The dimension dictionary

The single number $p$ (how many spatial directions are free) fixes everything:

| object | free spatial dirs $p$ | fixed spatial dirs $d-p$ | endpoint can… |
|---|---|---|---|
| **D0-brane** | $0$ | $d$ | not move at all — pinned to a point (all Dirichlet in space) |
| **D1-brane** | $1$ | $d-1$ | slide along a line |
| **D2-brane** | $2$ | $d-2$ | glide on a plane |
| $\vdots$ | | | |
| **D$d$-brane** | $d$ | $0$ | go anywhere — ends fully free (all Neumann, *space-filling*) |

The two extremes are the ones to hold in mind. A **space-filling D$d$-brane** is "all Neumann": the ends roam through all of space, and (being fully free) they move transversely at the speed of light — the case worked in [[Endpoint velocity and endpoint force]]. A **D0-brane** is "all Dirichlet": the end is nailed to one spatial point for all time, like a particle the string is tied to.

**Worked instance — the D2-brane.** Take $d=3$. Choose Neumann along $x^1,x^2$ and Dirichlet along $x^3$, pinning $X^3(\tau,\text{end})=0$. The ends glide freely on the $(x^1,x^2)$ plane but can never leave it; the string itself flops through all of space, tethered by its feet. That plane, extended through time, is the D2-brane.

## Why D-branes are *physical*, not a trick

It is tempting to read Dirichlet conditions as "we, the physicists, chose to nail the string down." The classical picture already says otherwise. A pinned endpoint generically has $\mathcal P^\sigma_a\neq0$ in the fixed directions — momentum genuinely *flows off* the end. That momentum cannot vanish into nothing; it has to flow into something. So a Dirichlet condition is only consistent if a physical object sits at the brane to absorb it. The clamp is not external bookkeeping; the equations force a real object to be there.

That intuition is confirmed downstream: the brane turns out to be dynamical, with a definite energy density (tension) and its own excitations, and it need not even be a flat infinite hyperplane. Its properties are calculable, not postulated. A D-brane is a genuine object in the theory, discovered — not decreed — by asking what it takes for Dirichlet conditions to be consistent.

## Worldsheet picture

The same story on the worldsheet strip ($\sigma$ across, $\tau$ up the page). Follow one edge of the strip — an endpoint worldline — one spacetime coordinate at a time:

- In a **Neumann/free** direction the endpoint coordinate wanders: $X^\mu(\tau,\text{end})$ varies as $\tau$ advances.
- In a **Dirichlet/fixed** direction its graph is a straight vertical line: $X^a=\bar x^a$ for all $\tau$, glued to the brane.

The brane is the surface every glued edge lies in. (Sketches: [[Part II - Classical Strings/10 Boundary Conditions and First D-Branes/Boundary conditions as geometry|Boundary conditions as geometry]].)

## Why this matters

This is the payoff of the module: *open-string endpoint conditions define the directions of a D-brane.* D-branes are where gauge theory lives in string theory — the endpoints carry charge and their excitations become gauge fields on the worldvolume — so everything downstream leans on this first appearance. Endpoint *dynamics* on a lower-dimensional brane (when only some directions are free) is worked separately in [[Endpoint motion on a Dp-brane]].

## Open questions
- The brane's numerical tension / energy density is a quantum result, not derivable from this classical boundary-condition analysis.
- A string with one end on brane A and the other on brane B needs mixed ND/DN coordinates; [[Strings stretched between Dp- and Dq-branes]] quantizes them later.

## Exercise

In $d=4$ spatial dimensions you impose the following endpoint conditions, in the notation of $(1)$:

$$
\mathcal P^\sigma_0=0,\quad \mathcal P^\sigma_1=0,\quad X^2=\bar x^2,\quad X^3=\bar x^3,\quad \mathcal P^\sigma_4=0.
$$

(a) Which value of $p$ is this, and what is the dimension of the brane's worldvolume?
(b) Give the equations of the flat hyperplane the endpoints live on.
(c) A classmate claims this same list, but with the *time* condition changed to $X^0=\bar x^0$, describes a "D3-brane frozen in time." What is wrong with that?

> [!success]- Solution
> **(a)** Count the *free spatial* directions. Free (Neumann) spatial directions are $x^1$ and $x^4$, so $p=2$: a **D2-brane**. Its worldvolume is $(p+1)=3$-dimensional: the 2 free spatial directions swept through the 1 time direction.
>
> **(b)** The fixed (Dirichlet) directions are $x^2$ and $x^3$, so the endpoints are confined to
> $$
> x^2=\bar x^2,\qquad x^3=\bar x^3,
> $$
> with $x^1,x^4$ (and time) unconstrained. That is a 2-plane in the 4d space, extended through time — exactly the $(p+1)=3$-dim worldvolume from (a).
>
> **(c)** Time must **always** be Neumann. Setting $X^0=\bar x^0$ would pin the endpoint to a single instant, so the endpoint — and hence the string — would fail to exist at any other time. There is no such thing as a brane frozen in time; every D-brane is extended along $X^0$, which is why its worldvolume dimension is $p+1$, not $p$. (Also, freezing time removes no *spatial* freedom, so it would not even change $p$: the spatial pattern still has two free directions.)
