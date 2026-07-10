---
title: How an endpoint becomes a source
number: "19.8"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, work-product]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

An open-string endpoint on a D-brane must be an electric point charge, because string charge flows like a current in a wire and a current cannot simply stop. This note is the single-page synthesis of that argument; the derivations behind it live in [[Endpoint charge]] and [[Maxwell fields on branes]].

---

## How an endpoint becomes a source

A fundamental string is a wire carrying a current, and its charge is that current. Currents obey a hard rule: they cannot have loose ends — they loop back or run off to infinity. So what happens when you cut the wire and glue the loose end onto a D-brane? The current arrives at the endpoint with nowhere left to go. The fix that string theory forces: the endpoint becomes an electric charge, and the current pours out of it as electric field lines that spread across the brane. The brane is the rest of the circuit. Below, each of those words is forced by one equation.

A fundamental string is electrically charged under the closed-string Kalb–Ramond field $B_{\mu\nu}$, through the coupling
$$S_B=-\tfrac12\int d\tau\,d\sigma\;\epsilon^{\alpha\beta}\,\partial_\alpha X^\mu\,\partial_\beta X^\nu\,B_{\mu\nu}(X).\tag{1}$$
This is the string's analogue of a particle's $q\int A_\mu\,dx^\mu$: a worldline drags a tangent vector to feed the one-index $A_\mu$, while a worldsheet drags an oriented area element to feed the two-index $B_{\mu\nu}$. The resulting charge density $\vec j^{\,0}$ points along the string and is divergenceless, $\nabla\cdot\vec j^{\,0}=0$ (derived in [[Fundamental string charge]]). That is the magnetostatic statement $\nabla\cdot\vec j=0$: current lines have no ends. Strings must close into loops or run to infinity — until one ends on a D-brane, and its endpoint stops dead in the middle of the brane.

**Gauge invariance fails at the endpoint.** The clean way to see the trouble rests on one principle: conservation of a current is the same statement as gauge invariance of the term that couples to it. For a Maxwell current, integrating by parts gives $\delta\!\int A_\mu j^\mu = -\int\epsilon\,\partial_\mu j^\mu$, which vanishes for every gauge parameter $\epsilon$ exactly when $\partial_\mu j^\mu=0$. Gauge invariance is not an extra force; it is the bookkeeping that forbids an unbalanced source. So test $S_B$ directly. Under $\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu$, the variation collapses to two total worldsheet derivatives, $\partial_\tau(\cdots)-\partial_\sigma(\cdots)$. The $\tau$-piece dies, since $\Lambda$ vanishes in the far past and future. The $\sigma$-piece is a boundary term — and an open string has $\sigma$-boundaries: its two endpoints. Splitting the coordinates into along-brane ($X^m$, Neumann) and normal ($X^a$, Dirichlet, so $\partial_\tau X^a=0$ at the ends), only the along-brane part survives:
$$\delta S_B=\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=0}\ \neq 0.\tag{2}$$
Gauge invariance fails exactly at the endpoints. Through the principle above, that is precisely the statement that the standalone string current is not conserved there: the current reaches the end and has nowhere to go inside the string alone. The vague "current can't stop" has become a concrete, signed leftover we are obliged to cancel.

**Each endpoint becomes a point charge.** Add to the action a coupling of each endpoint to the Maxwell field $A_m$ living on the brane — it is the photon you get from quantizing open strings (see [[Maxwell fields on branes]]):
$$S=S_B+\int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-\int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=0}.\tag{3}$$
Each added piece is exactly the point-particle coupling $q\int A_\mu\,dx^\mu$ with $q=\pm1$: the endpoints are electric point charges, $-1$ where the string begins ($\sigma=0$) and $+1$ where it ends ($\sigma=\pi$). An oriented open string is a little electric dipole pinned to the brane. Now demand that the full action be gauge invariant. This forces the bulk and brane fields to transform together,
$$\delta B_{\mu\nu}=\partial_\mu\Lambda_\nu-\partial_\nu\Lambda_\mu,\qquad \delta A_m=-\Lambda_m,\tag{4}$$
so the added terms vary by $-\int\Lambda_m\partial_\tau X^m$ at each end, canceling the leftover (2) term by term. Gauge invariance is restored, and the endpoint charge was never a choice — consistency manufactured it.

**Electric flux carries the string charge.** The same joint rule makes the ordinary field strength non-invariant, $\delta F_{mn}=-\delta B_{mn}$, so only the combination $\mathcal F_{mn}=F_{mn}+B_{mn}$ is physical on the brane. Expanding its Lagrangian $-\tfrac14\mathcal F^{mn}\mathcal F_{mn}$ produces a cross term $-\tfrac12 F^{mn}B_{mn}=-F^{0k}B_{0k}+\cdots$. String-charge density $j^{0k}$ is by definition whatever couples to $B_{0k}$ as a source, and the thing multiplying $B_{0k}$ on the brane is $F^{0k}$ — the brane's electric field (in mostly-plus signature $F^{0k}=E_k$). So the electric field lines on the brane carry the string charge. The current never stopped: at the $+$ endpoint it emerges as electric flux spreading through the brane, and at the $-$ endpoint brane flux converges and feeds the oriented string current back. The flux cannot leave the brane, since the Maxwell field lives only there, so the D-brane is the wire that completes the circuit.

The whole argument reduces to one sentence: string charge is a current, currents cannot have loose ends, and gauge invariance forces a stranded endpoint to become an electric charge whose field lines carry the current onward across the brane. Endpoint equals source, conservation intact.

---

## Open questions

- The endpoint charge is written $q=\pm1$ by convention. Its absolute magnitude is set by the normalization of the brane's $F^2$ term (a constant fixed only later, once the string coupling and $\alpha'$ enter); until then only the *relative* $\pm$ is physical.
- The natural extension is coincident branes, where $N$ overlapping branes upgrade the single $A_m$ to a $U(N)$ gauge field and strings stretched between stacks become charged matter. That non-abelian story deserves its own note, not a paragraph here — see [[D-branes and the Standard Model]].

## Exercise

An open string ends on a D-brane. Take the leftover boundary term $\delta S_B$ in (2) as given, and take the endpoint action to be (3) *but with an unknown coefficient $c$ on each Maxwell coupling* (same $c$ at both ends, opposite overall signs as written). Assuming the joint transformation rule $\delta A_m=-\Lambda_m$ from (4), find the value of $c$ that makes the full action gauge invariant. What would go wrong if the two endpoints were assigned the *same* sign of charge instead of opposite?

> [!success]- Solution
> Write the trial action as
> $$S=S_B+c\int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-c\int d\tau\,A_m\,\partial_\tau X^m\Big|_{\sigma=0}.$$
> Under (4) the bulk piece gives the fixed leftover (2),
> $$\delta S_B=\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=\pi}-\int d\tau\,\Lambda_m\,\partial_\tau X^m\Big|_{\sigma=0}.$$
> The added pieces vary through $\delta A_m=-\Lambda_m$:
> $$\delta\!\left(c\!\int\! A_m\partial_\tau X^m\Big|_{\pi}-c\!\int\! A_m\partial_\tau X^m\Big|_{0}\right)=-c\int d\tau\,\Lambda_m\partial_\tau X^m\Big|_{\pi}+c\int d\tau\,\Lambda_m\partial_\tau X^m\Big|_{0}.$$
> Adding, each endpoint contributes $(1-c)\int d\tau\,\Lambda_m\partial_\tau X^m$ (with a $+$ at $\sigma=\pi$, a $-$ at $\sigma=0$). Both vanish for arbitrary $\Lambda_m$ iff
> $$\boxed{c=1,}$$
> recovering $q=\pm1$: the endpoint charge is fixed, not adjustable.
>
> Same-sign endpoints: then both added terms would carry, say, a $+$ sign, $+c\int A_m\partial_\tau X^m$ at *both* ends. Their variation is $-c\int\Lambda_m\partial_\tau X^m$ at both ends (both $+$), whereas the leftover $\delta S_B$ has *opposite* signs at the two ends ($+$ at $\pi$, $-$ at $0$). One end would cancel; the other would double. No single $c$ kills both — gauge invariance can't be restored. The relative minus sign is forced: the string is an oriented dipole, $-$ where it starts and $+$ where it ends.
