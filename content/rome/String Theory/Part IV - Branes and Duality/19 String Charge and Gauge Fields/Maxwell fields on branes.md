---
title: Maxwell fields on branes
number: "19.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, brane-gauge-field]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Every D-brane carries its own **photon** — a Maxwell field $A_m$ living only on the brane. When a string ends on the brane, this photon's **electric field lines carry away the string charge** that the string was transporting, and gauge invariance forces $F$ and the background $B$ to appear only in the combination $\mathcal F = F + B$.

Continues [[Endpoint charge]]; the curtain-raiser for [[D-brane charge as a preview]].

## The puzzle from the endpoint

[[Endpoint charge]] left a puzzle: string charge flows down a string like current in a wire, but an open string *ends* on a D-brane, and current cannot just stop. The resolution is that the brane has its own electromagnetism and the endpoint is a point charge in it. The current does not vanish at the endpoint — it converts into brane electric flux and keeps flowing, now spread across the worldvolume. Picture a wire soldered to a metal sheet: the current fans out as a surface current on the sheet rather than disappearing at the joint.

Two facts do the work:

1. The brane carries a photon, which drops out of quantizing the open string.
2. That photon's field strength is not gauge invariant on its own; only $\mathcal F = F + B$ is. The $F\cdot B$ cross term in the brane Lagrangian is what ties electric field lines to string charge.

## Where the brane photon comes from

Quantize an *open* string whose endpoints lie on a D$p$-brane. Its lowest massless state is $\alpha_{-1}^m\,|0;p\rangle$ — a single oscillator acting on the ground state $|0;p\rangle$ (momentum $p$, no oscillators), carrying one spacetime index $m$. Because the endpoints obey Neumann conditions only *along* the brane, that index runs over the $(p{+}1)$ worldvolume directions, and a one-index massless field is a **Maxwell gauge field** $A_m$.

The closed string handed us the *bulk* fields — graviton $g_{\mu\nu}$, Kalb–Ramond $B_{\mu\nu}$, dilaton — that fill all of spacetime. The open string hands us a gauge field *trapped on the brane*: this photon cannot roam, it lives only where the brane is. Every D-brane is a little universe with its own electromagnetism.

## $F$ alone is not gauge invariant on a brane

Two independent gauge redundancies now act on the brane. Keep them separate:

- **Ordinary Maxwell**, $A_m \mapsto A_m + \partial_m\lambda$, with parameter $\lambda$. This leaves $F_{mn}=\partial_m A_n - \partial_n A_m$ untouched, as always.
- **The bulk $B$-field redundancy**, inherited from [[Endpoint charge]], with parameter $\Lambda_m$. Restoring gauge invariance for the string endpoint *forced* $A_m$ to shift when $B$ shifts:

$$\delta B_{mn}=\partial_m\Lambda_n-\partial_n\Lambda_m,\qquad \delta A_m=-\Lambda_m. \tag{1}$$

The second rule is the surprise: the brane photon must transform under the bulk two-form's gauge symmetry. Watch what that does to the ordinary field strength:

$$\delta F_{mn}=\partial_m\delta A_n-\partial_n\delta A_m = -\partial_m\Lambda_n+\partial_n\Lambda_m = -\delta B_{mn}. \tag{2}$$

Under the $B$-symmetry $F$ is *not* invariant — it shifts by exactly $-\delta B$. The familiar slogan "$F$ is gauge invariant" holds only for the ordinary Maxwell parameter $\lambda$, not for this second redundancy. The minus sign in (2) is what makes $F+B$ invariant:

$$\delta(F_{mn}+B_{mn})=0 \quad\Longrightarrow\quad \boxed{\;\mathcal F_{mn}\equiv F_{mn}+B_{mn},\qquad \delta\mathcal F_{mn}=0\;} \tag{3}$$

$\mathcal F$ is the physically meaningful field strength on the brane: every $F$ in the brane's Maxwell theory gets replaced by $F+B$. When the background has $B=0$, $\mathcal F=F$ and ordinary electromagnetism is recovered, so the modification is invisible in most settings even though it carries the whole story. The same $\mathcal F$ reappears nonlinearly in the [[Born-Infeld action]] for brane dynamics.

## Electric field lines carry the string charge

This resolves [[Endpoint charge]]'s puzzle. The gauge-invariant brane Lagrangian density is the Maxwell density built from $\mathcal F$ — its overall constant is fixed later by the string coupling and does not affect the structure. Expand it:

$$-\tfrac14\,\mathcal F^{mn}\mathcal F_{mn} = -\tfrac14 F^{mn}F_{mn} -\tfrac14 B^{mn}B_{mn} -\tfrac12 F^{mn}B_{mn}. \tag{4}$$

The coefficient $-\tfrac12$ on the cross term is not a typo: $(F+B)^2$ produces two equal cross terms $F\!\cdot\!B$ and $B\!\cdot\!F$, each $-\tfrac14$. That cross term carries the physics. Pull out its time–space part:

$$-\tfrac12 F^{mn}B_{mn} = -F^{0k}B_{0k}+\cdots. \tag{5}$$

(The block $m=0,n=k$ and $m=k,n=0$ each give $F^{0k}B_{0k}$ by antisymmetry, so $-\tfrac12 \cdot 2 = -1$; the dots are the purely spatial $F^{ij}B_{ij}$.)

Here is the identification that closes the argument. Recall from [[Fundamental string charge]] that the string-charge density $j^{0k}$ is *defined* as whatever couples to $B_{0k}$ — it is the source on the right of the $B$ field equation. In (5), the object multiplying $B_{0k}$ on the brane is $F^{0k}$. In mostly-plus signature $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,\dots,+1)$,

$$F^{0k}=\eta^{00}\eta^{kk}F_{0k}=-F_{0k}=E_k, \tag{6}$$

the ordinary **electric field**; the sign flip from $\eta^{00}=-1$ cancels the sign in $F_{0k}=-E_k$. So $F^{0k}$ is not a convention — the signature forces it to be the electric field. Chaining these together:

$$E_k = F^{0k}\ \text{couples to}\ B_{0k}\ \text{as string charge does}\quad\Longrightarrow\quad \textbf{brane electric field lines carry string charge}.$$

String-charge current and brane electric flux are the *same thing* at the charged endpoint, converting into each other. At the $\sigma=\pi$ endpoint (charge $+1$) the string current surfaces as electric flux fanning out inside the brane; at the $\sigma=0$ endpoint (charge $-1$) that flux converges and feeds the current back into the string. The oriented string runs from $-$ to $+$, the brane flux runs from $+$ to $-$, and the loop closes. Because the photon lives only on the brane, the field lines cannot escape into the bulk — the continuation of string charge is confined to the worldvolume. That is why current can end on a brane without ever stopping.

## Open questions

- The **absolute normalization** of the brane $F^2$ term — the constant that fixes the physical strength of the endpoint charges — depends on the string coupling and $\alpha'$, and is deferred to the later string-coupling discussion. The structure above is normalization-independent; only the magnitude of the charge is not.
- The **non-abelian generalization**: $N$ coincident branes carry a $U(N)$ gauge field, not a single $A_m$, which is where Standard Model gauge groups could come from. Not developed here — see [[D-branes and the Standard Model]].
- The full low-energy brane action is the [[Born-Infeld action]], in which $\mathcal F$ appears nonlinearly; this note needs only its quadratic Maxwell limit.

## Exercise

The invariant field strength on a brane came out to $\mathcal F = F + B$ with a **plus** sign. Suppose you had instead been careless and written the endpoint transformation rule in (1) as $\delta A_m = +\Lambda_m$. Redo the one-line computation (2) and determine which combination, $F+B$ or $F-B$, is gauge invariant now. Then explain in one sentence why the *actual* sign in (1) is not free to choose — what fixes it?

> [!success]- Solution
> With $\delta A_m = +\Lambda_m$, the field strength varies as
> $$\delta F_{mn}=\partial_m\delta A_n-\partial_n\delta A_m = +\partial_m\Lambda_n-\partial_n\Lambda_m = +\delta B_{mn}.$$
> Now $\delta(F_{mn}-B_{mn}) = \delta F_{mn}-\delta B_{mn}=0$, so the invariant combination would be $\mathcal F = F - B$. The sign of $\delta A_m$ directly flips the relative sign of $B$ in $\mathcal F$.
>
> But the sign is *not* free. It is fixed back in [[Endpoint charge]]: $\delta A_m = -\Lambda_m$ is precisely the choice that makes the endpoint coupling $\pm\int A_m\,\partial_\tau X^m$ *cancel* the leftover boundary term $\pm\int \Lambda_m\,\partial_\tau X^m$ in $\delta S_B$. Choosing $+\Lambda_m$ would double the boundary term instead of cancelling it, breaking gauge invariance of the full string action. So the plus sign in $\mathcal F = F + B$ is inherited from the requirement that string charge be conserved at the endpoint — it is not a convention.
