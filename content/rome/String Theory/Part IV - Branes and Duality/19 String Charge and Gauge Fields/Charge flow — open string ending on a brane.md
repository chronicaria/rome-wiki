---
title: Charge flow — open string ending on a brane
number: "19.9"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, work-product]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open string carries a current down its length; where it ends on a D-brane, that current keeps flowing as electric field lines spreading out inside the brane. This is the picture that ties the module together.

Companion to [[Endpoint charge]] and [[Maxwell fields on branes]], which supply the derivations behind the figure.

## The picture, stated

A charged string is a wire, and the D-brane is where the wire's current empties into a sheet. String charge flows along the oriented string exactly like current in a wire, and a current cannot stop. So at the endpoint it flows out into the brane and continues as electric field lines fanning across the worldvolume. The endpoint is an electric point charge, and its $\vec E$-flux is the same string charge, now running through the brane instead of down the string.

## What the figure shows

Draw one endpoint at a time; a single string on a single brane has two, and crowding both into one sketch hides what each is doing.

```
     ambient space (transverse directions)

          o   string body: a wire carrying
           \      current I toward the endpoint,
            \     in the direction of increasing σ.
             \
              |   current I
              v
  ============ ⊕ ============   D-brane worldvolume (the sheet)
       /   /  |  \   \
      /   /   |   \   \    E-field lines fan out RADIALLY
     /   /    |    \   \   within the plane, away from ⊕.
                            They stay on the brane —
   σ=π endpoint, charge +1.  the photon A_m lives only here.

   Current arriving down the string = E-flux leaving the endpoint.
```

Three things must be right:

1. **The string sticks out of the brane.** Its endpoint is pinned to the worldvolume — Neumann along the brane, Dirichlet across it — but the body extends into the ambient transverse directions. Drawn lying flat in the plane, it would hide the entire point.
2. **Current flows down the string, into the brane.** The arrow runs along the string in the direction of increasing $\sigma$. The Kalb–Ramond charge density $\vec j^{\,0}\propto \vec X'$ points along the string ([[Fundamental string charge]]); it is a genuine current, and it heads for the endpoint.
3. **$\vec E$-lines fan out within the plane.** The brane photon $A_m$ lives only on the worldvolume, so its field lines are trapped on the sheet. From a $+$ endpoint they spread radially outward; into a $-$ endpoint they converge radially inward. They never reach into ambient space.

## Why the endpoint is charged, and why the flux *is* the string charge

Both facts are forced by gauge invariance, not chosen:

- **Charged endpoint.** Varying the string's $B$-coupling $S_B$ under a gauge transformation leaves an uncancelled boundary term at each endpoint. String-charge conservation fails there unless the endpoint couples to the brane's Maxwell field as a point charge $q=\pm1$, through exactly the worldline term $q\int A_m\,dX^m$ (derived in [[Endpoint charge]]).
- **Flux carries the charge.** String-charge density $j^{0k}$ is by definition whatever multiplies $B_{0k}$ in the action. On the brane the gauge-invariant field strength is $\mathcal F_{mn}=F_{mn}+B_{mn}$, and expanding $-\tfrac14\mathcal F^{mn}\mathcal F_{mn}$ leaves a cross term whose time–space part is $-F^{0k}B_{0k}$. The object multiplying $B_{0k}$ on the brane is therefore $F^{0k}=E_k$, the electric field (mostly-plus signature) — so the brane's electric flux is the string's charge, continued (derived in [[Maxwell fields on branes]]).

The current never stopped: it ran down the string, converted at the endpoint, and now runs across the brane as $\vec E$-flux.

## Orientation and signs

An oriented open string is a small electric dipole pinned to the brane:

- $\sigma=0$ — the string *begins* here. Endpoint charge $q=-1$ ($\ominus$). $\vec E$-lines converge into it: a sink of brane flux.
- $\sigma=\pi$ — the string *ends* here. Endpoint charge $q=+1$ ($\oplus$). $\vec E$-lines spread out of it: a source of brane flux.

The mnemonic is *begins minus, ends plus*. Brane flux runs from $+$ to $-$, the oriented string current runs from $\sigma=0$ to $\sigma=\pi$, and together they close the circuit. Flip the orientation ($\sigma\to\pi-\sigma$) and both signs flip — the whole dipole reverses, consistent with $S_B$ reversing sign.

A single string on one brane has both endpoints: draw the panel above twice, a $\oplus$ where the current arrives ($\sigma=\pi$) and a $\ominus$ where it departs ($\sigma=0$), joined by the string that arcs out through ambient space.

## Open questions

- For a string stretched between *two different* branes, the endpoints sit on separate worldvolumes: two parallel sheets, one carrying the $+$ endpoint's flux and the other the $-$. This is the setup behind $U(N)$ gauge symmetry on coincident branes.
- The figure suppresses the brane's time direction and the full worldsheet. The derivations behind it — why the endpoint must be charged, why $\mathcal F=F+B$ — live in [[Endpoint charge]] and [[Maxwell fields on branes]].

## Exercise

The figure claims the current arriving down the string at the $\sigma=\pi$ endpoint continues as $\vec E$-flux spreading outward within the brane. Check this against the $q=+1$ sign convention and charge conservation, using only Gauss's law inside the brane. Then say what changes at the $\sigma=0$ endpoint.

> [!success]- Solution
> The brane has $p$ spatial dimensions; apply Gauss's law $\oint \vec E\cdot d\vec a = q_{\text{enc}}$ over a small closed surface enclosing the endpoint. Because the field lines live only on the brane, that surface is a codimension-1 shell *inside* the worldvolume, not a sphere in ambient space.
>
> **At $\sigma=\pi$ ($q=+1$).** Positive enclosed charge gives net outward flux, so the $\vec E$-lines point outward, fanning away from the endpoint — as drawn. For the balance: the string current $\vec j^{\,0}\propto\vec X'$ flows toward this endpoint (increasing $\sigma$), delivering charge at a steady rate. A steady-state point charge cannot accumulate, so charge must leave as outward flux at exactly the rate it arrives. Arrival equals departure, conservation holds, and the endpoint is a source of brane flux — which is why $q=+1$ pairs with current arriving and flux leaving.
>
> **At $\sigma=0$ ($q=-1$).** Everything reverses. Negative enclosed charge gives net inward flux, so the $\vec E$-lines converge into the endpoint, a sink. The current flows toward increasing $\sigma$, hence *away* from $\sigma=0$, so brane flux must feed in to supply the departing current: sink of flux, tail of the current. The two endpoints are the $\ominus$ and $\oplus$ of one dipole, and the charge is conserved all the way around — down the string, then across the brane from $+$ back to $-$.
