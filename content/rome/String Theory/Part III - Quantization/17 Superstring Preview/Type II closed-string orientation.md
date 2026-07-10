---
title: Type II closed-string orientation
number: "17.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, type-ii]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A type II superstring is an **oriented closed** superstring: left-movers and right-movers each independently pick NS or R, giving four sectors, and IIA versus IIB is set by whether the two Ramond ground states have opposite or equal chirality.

## Two sectors per mover, four sectors per string

A closed string carries a **left-moving** copy and a **right-moving** copy of every field on one loop. The superstring puts worldsheet fermions on each copy, and each copy independently chooses a boundary condition: **NS** (antiperiodic fermion) or **R** (periodic). Two independent choices, four combinations — that is the entire architecture below.

$$ \mathcal H_{\text{closed}} \subset \mathcal H_L \otimes \mathcal H_R, $$

each factor a GSO-projected open superstring in a fixed sector (NS or R). The two are tied together by **level matching** — the closed-string constraint $L_0^\perp = \bar L_0^\perp$ that forces left and right to carry the same excitation level. Everything else here is bookkeeping over the four combinations.

## The four sectors and their spacetime statistics

Label a sector by (left choice, right choice). Each sector is built on a left ground state tensored with a right one — an NS vacuum $|\mathrm{NS}\rangle$ or a Ramond spinor $|R\rangle$ on each side:

$$
\begin{aligned}
&\text{NS-NS:} && |\mathrm{NS}\rangle_L \otimes |\mathrm{NS}\rangle_R && \to \text{spacetime \textbf{boson}}\\
&\text{NS-R:}  && |\mathrm{NS}\rangle_L \otimes |R\rangle_R && \to \text{spacetime \textbf{fermion}}\\
&\text{R-NS:}  && |R\rangle_L \otimes |\mathrm{NS}\rangle_R && \to \text{spacetime \textbf{fermion}}\\
&\text{R-R:}   && |R\rangle_L \otimes |R\rangle_R && \to \text{spacetime \textbf{boson}}
\end{aligned}
$$

One rule fixes every statistic. A Ramond ground state is "once fermionic" — its zero modes build a spacetime spinor (see [[Neveu-Schwarz and Ramond sectors]]) — while the NS ground state is bosonic. Statistics multiply like signs, so count the R factors:

- zero R factors (NS-NS) → boson,
- one R factor (NS-R, R-NS) → fermion,
- two R factors (R-R) → fermion $\times$ fermion = **boson** again.

The "doubly fermionic" R-R sector swings back to bosonic — the same $(-1)\times(-1)=+1$ that lets two spinors combine into a tensor.

The labels above name the *sector*, not the lightest kept physical state. GSO discards the even-fermion-number NS states, $|\mathrm{NS}\rangle$ itself among them, so the massless NS-NS states below carry one $\bar b_{-1/2}$ on the left and one $b_{-1/2}$ on the right (barred = left-mover throughout).

## NS-NS: the bosonic string's gravity fields reappear

The massless NS-NS states are

$$ \bar b^I_{-1/2}\,b^J_{-1/2}\,|\mathrm{NS}\rangle_L\otimes|\mathrm{NS}\rangle_R, \qquad I,J = 2,\dots,9, $$

one transverse index from each side. In $D=10$ that is $8\times 8 = \mathbf{64}$ states. A transverse rank-2 tensor $t_{IJ}$ splits into its symmetric-traceless, antisymmetric, and trace parts — exactly the decomposition worked out for the [[Graviton antisymmetric tensor and dilaton|bosonic closed string]]:

$$ g_{\mu\nu}\ (\text{graviton}),\qquad B_{\mu\nu}\ (\text{Kalb–Ramond}),\qquad \phi\ (\text{dilaton}). $$

The superstring's gravity sector is exactly the good part of the bosonic closed string, kept verbatim — but with no tachyon riding along, because GSO already deleted it.

Count check: symmetric traceless $\tfrac{8\cdot 9}{2}-1 = 35$; antisymmetric $\tfrac{8\cdot 7}{2}=28$; trace $1$. Sum $35+28+1 = 64$, matching the $8\times 8$ oscillator count.

## Supersymmetry made visible: 128 = 128

Add up the massless states by statistics:

| | states | statistics |
|---|---|---|
| NS-NS | $8\times 8 = 64$ | boson |
| R-R | $8\times 8 = 64$ | boson |
| NS-R | $8\times 8 = 64$ | fermion |
| R-NS | $8\times 8 = 64$ | fermion |

$$ \underbrace{64+64}_{\text{NS-NS}\,+\,\text{R-R}} = 128 \text{ bosons} \;=\; \underbrace{64+64}_{\text{NS-R}\,+\,\text{R-NS}} = 128 \text{ fermions}. $$

Equal boson and fermion counts at the massless level: this is supersymmetry, read off by counting the four boxes rather than by any spinor algebra. Type II in $D=10$ carries $\mathcal N = 2$ supersymmetry, hence **32 supercharges** — two sets of 16, one per mover.

## IIA vs IIB: the left–right handshake

The Ramond ground state comes in **two chirality families**, $|R_1\rangle$ (even) and $|R_2\rangle$ (odd), from the zero-mode parity split in [[Neveu-Schwarz and Ramond sectors]]. For the closed string GSO projects each mover separately, so a chirality is chosen on the left *and* on the right. The one physical, discrete choice is whether the two match:

- **Type IIA** — opposite chirality on the two sides. The fermion content is left–right symmetric, so the theory is **non-chiral**.
- **Type IIB** — same chirality on both sides. The theory is **chiral**.

That single bit — matched or opposite — is the entire IIA/IIB distinction. It leaves the NS-NS bosons ($g_{\mu\nu}, B_{\mu\nu}, \phi$) untouched, so both theories share them, but it *reshuffles the R-R sector*: the R-R fields are built from a left spinor $\otimes$ right spinor, and matched versus opposite chiralities project onto different antisymmetric-tensor ($p$-form) fields:

$$
\text{IIA R-R: } A_\mu,\ A_{\mu\nu\rho} \qquad\text{(odd-rank forms)},
$$
$$
\text{IIB R-R: } A,\ A_{\mu\nu},\ A_{\mu\nu\rho\sigma} \qquad\text{(even-rank forms)}.
$$

These R-R gauge fields are exactly what stable, *charged* **D-branes** couple to, the way a Maxwell field couples to an electron. That is the sharp break from the bosonic string, whose D-branes are always unstable and carry no such charge. (The IIB 4-form is further constrained by a self-dual field strength $F_5 = {}^\star F_5$; see [[D-brane charge as a preview]] for where this thread continues.)

## Why "oriented"

Separate from the Ramond chirality above, a closed loop has an ordinary **orientation** — a chosen direction of increasing $\sigma$ around the string. A theory is **unoriented** when invariance is demanded under the orientation-reversing twist

$$ \Omega:\ X^I(\tau,\sigma)\to X^I(\tau,2\pi-\sigma), $$

keeping only $\Omega$-symmetric states. The type II theories are **oriented**: both loop directions survive as distinct states, and no $\Omega$-projection is imposed.

"Oriented" alone does not single out type II — the heterotic strings are oriented too. What makes type II *type II* is the defining feature of this note: **both** movers carry worldsheet fermions, giving $\mathcal N = 2$ in ten dimensions. The supersymmetric theory with **unoriented** open plus closed strings is **type I**, built instead by adding open strings and imposing the $\Omega$ projection.

The complete list of consistent ten-dimensional superstring theories: **IIA, IIB, $E_8\times E_8$ heterotic, $SO(32)$ heterotic, type I** — five theories, later recognized as limits of a single **M-theory**.

## Open questions

- That R-R fields couple to D-brane charge is asserted here, not derived. The vault picks it up in [[D-brane charge as a preview]]; the full R-R / Wess–Zumino coupling belongs to a proper superstring treatment.
- The IIB 4-form's self-dual field strength $F_5 = {}^\star F_5$ is a genuine constraint with subtleties; this preview records the field content and defers it.
- Type I as an orientifold ($\Omega$-projected, unoriented) theory is named only for contrast; constructing it needs open strings and the projection, beyond this module.

## Exercise

The massless spectrum of type II has $128$ bosonic and $128$ fermionic states. Consider instead a hybrid in which the **left mover has no worldsheet fermions** (only $X^I$ oscillators, like a bosonic string) while the right mover is a full NS/R superstring. Only two sectors exist: (bosonic-left)-NS and (bosonic-left)-R.

(a) Which sector is spacetime-bosonic and which fermionic? Use the "count the R factors" rule.
(b) Does the massless boson count equal the massless fermion count — is this hybrid supersymmetric at the massless level in the crude counting sense? What real theory has this left-bosonic / right-super structure?

> [!success]- Solution
> **(a)** Statistics is set by how many **Ramond** factors the state carries. The left mover has no fermions, so it contributes no R factor and is spacetime-bosonic on its own.
> - (bosonic-left)-NS: zero R factors $\to$ **spacetime boson**.
> - (bosonic-left)-R: one R factor, from the right $\to$ **spacetime fermion**.
>
> **(b)** The counting still balances. The right-moving superstring is GSO-projected, so at the massless level its NS side gives $8$ states and its R side gives $8$. Tensoring each with the left mover's $8$ transverse massless oscillators $\bar\alpha^I_{-1}|0\rangle_L$ gives $8\times 8 = 64$ bosons (NS side) and $8\times 8 = 64$ fermions (R side): equal, so it passes the crude $64 = 64$ supersymmetry check.
>
> This is the **heterotic** construction — a left-moving *bosonic* string glued to a right-moving *superstring*. It is consistent, oriented, and carries $\mathcal N = 1$ (16 supercharges) rather than the $\mathcal N = 2$ of type II, precisely because only one side carries fermions. (The genuine heterotic string handles the left mover's extra $26-10=16$ bosonic dimensions as an internal gauge structure, giving the $E_8\times E_8$ and $SO(32)$ theories.)
