---
title: Neveu-Schwarz and Ramond sectors
number: "17.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ns-r-sectors]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A worldsheet fermion can come back to itself with a **minus sign** (Neveu–Schwarz) or a **plus sign** (Ramond) when you carry it once around the string. That one sign is a fork in the road: the minus branch has half-integer modes and builds spacetime **bosons** (the string's force-carriers), the plus branch has integer modes with special **zero modes** that build spacetime **fermions** (matter). Everything the superstring needs — a photon *and* an electron-like state — comes from these two sectors.

## Why a fermion may flip sign

A bosonic field like $X^\mu$ must return to itself after one trip around the string: it is a genuine position, and a position is single-valued. A **fermion** field has no such obligation. Fermions live in a world where "rotate by $2\pi$" can multiply a state by $-1$ (this is what "spin-$\tfrac12$" means), so a worldsheet fermion is allowed to come back either as $+\Psi$ or as $-\Psi$. Both are consistent theories. The superstring keeps **both** and calls them sectors.

Think of a ribbon glued into a loop. Glue the ends straight and a marked arrow returns pointing the same way (**Ramond**, $+$). Glue with a half-twist, Möbius-style, and the arrow returns reversed (**Neveu–Schwarz**, $-$). The physics of the string on that loop depends entirely on which gluing you chose — and the choice is invisible locally, only detectable by going all the way around.

Here **sector** means a direct summand of the state space labelled by a boundary condition. It is not a region of the string; it is a choice of *which Fourier modes are allowed* before you ever build the oscillator Hilbert space. Antiperiodic $\Rightarrow$ half-integer modes; periodic $\Rightarrow$ integer modes. That mode difference is the whole story.

## Where the fork comes from

Set up the open superstring in light-cone gauge. The transverse fermion has two components; the equations of motion make $\psi^I_1$ right-moving and $\psi^I_2$ left-moving,

$$ \psi_1^I(\tau,\sigma)=\psi_1^I(\tau-\sigma),\qquad \psi_2^I(\tau,\sigma)=\psi_2^I(\tau+\sigma), $$

exactly as for the bosonic left/right movers: each piece depends on only one of the light-cone coordinates $\tau\mp\sigma$. Varying the fermionic action leaves a boundary term at each open endpoint; killing it forces the two components to be proportional there,

$$ \psi^I_1(\tau,\sigma_*) = \pm\,\psi^I_2(\tau,\sigma_*),\qquad \sigma_*=0,\pi. $$

The sign at one endpoint is pure convention (an overall relative sign of the two fields carries no physics), so fix $\psi^I_1(\tau,0)=\psi^I_2(\tau,0)$. **The sign at the other endpoint, $\sigma=\pi$, is physical** — and it is the fork.

To read that fork cleanly, fold the two half-fields into a single field $\Psi^I$ on the doubled interval $\sigma\in[-\pi,\pi]$ (the same doubling trick that turns an open string into half of a closed one):

$$ \Psi^I(\tau,\sigma) \equiv \begin{cases} \psi^I_1(\tau,\sigma), & \sigma\in[0,\pi],\\[2pt] \psi^I_2(\tau,-\sigma), & \sigma\in[-\pi,0]. \end{cases} $$

The $\sigma=0$ condition makes $\Psi^I$ continuous there, and by construction it depends only on $\tau-\sigma$. The endpoint sign at $\sigma=\pi$ now reads as a rule for going once around the doubled circle, $\sigma\to\sigma+2\pi$:

$$ \Psi^I(\tau,\pi) = +\,\Psi^I(\tau,-\pi) \quad\text{(Ramond, \textbf{periodic})}, $$
$$ \Psi^I(\tau,\pi) = -\,\Psi^I(\tau,-\pi) \quad\text{(Neveu–Schwarz, \textbf{antiperiodic})}. $$

The *same* worldsheet fermion gives two inequivalent theories depending on whether one full trip returns $+\Psi$ (R) or $-\Psi$ (NS). This is the ribbon, made precise.

## NS sector: half-integer modes, a bosonic tower

A minus sign after one loop is exactly what **half-integer** frequencies deliver. Under $\sigma\to\sigma+2\pi$ a mode $e^{-ir(\tau-\sigma)}$ picks up

$$ e^{-ir(\tau-(\sigma+2\pi))}=e^{2\pi i r}\,e^{-ir(\tau-\sigma)}=-\,e^{-ir(\tau-\sigma)}
\qquad\text{when } r\in\mathbb Z+\tfrac12, $$

since $e^{2\pi i r}=e^{i\pi(2r)}=(-1)^{2r}=-1$ for odd $2r$. So antiperiodicity forces the mode expansion to run over half-integers:

$$ \Psi^I(\tau,\sigma) = \sum_{r\in\,\mathbb{Z}+\frac12} b^I_r\, e^{-ir(\tau-\sigma)}. \tag{1}$$

The negatively-moded $b^I_{-1/2}, b^I_{-3/2}, \dots$ are **creation operators** on the NS vacuum $|\mathrm{NS}\rangle$. Being fermionic they anticommute, so any one of them used twice gives zero — Pauli exclusion built straight into the algebra:

$$ b^I_{-r}\,b^I_{-r} = -\,b^I_{-r}\,b^I_{-r} = 0 \qquad (I,\,r \text{ fixed, not summed}). $$

A general NS state stacks bosonic oscillators $\alpha^I_{-n}$ (any number of times) and fermionic oscillators $b^I_{-r}$ (each at most once) on $|\mathrm{NS}\rangle\otimes|p^+,\vec p_T\rangle$. Crucially, **the NS ground state carries no spacetime index** — nothing distinguishes it in the transverse directions — so it is a spacetime scalar and the whole NS tower is **spacetime bosonic**.

## R sector: integer modes, a degenerate fermionic ground state

A plus sign after one loop is what **integer** frequencies give ($e^{2\pi i n}=+1$), so periodicity forces integer modes:

$$ \Psi^I(\tau,\sigma) = \sum_{n\in\mathbb{Z}} d^I_n\, e^{-in(\tau-\sigma)}. \tag{2}$$

The new ingredient is the **zero mode** $d^I_0$: an oscillator with $n=0$, so it costs no energy. There are eight of them, $I=2,\dots,9$. They commute with $M^2$, so acting with them never changes the mass — they only reshuffle the ground state into a multiplet.

What is that multiplet? Canonically quantizing the fermion gives the zero modes a **Clifford algebra**. With the standard mode normalization,

$$ \{d_0^I,\,d_0^J\}=\delta^{IJ}, $$

so the eight $d_0^I$ behave (up to a $\sqrt2$) like eight gamma matrices for the transverse rotation group $SO(8)$. A set of gamma matrices has no one-dimensional representation; the smallest thing it can act on is a **spinor**. Concretely, relabel the eight transverse directions $1,\dots,8$ and pair them into four fermionic raising/lowering operators,

$$ \xi_k=\tfrac{1}{\sqrt2}\big(d_0^{2k-1}+i\,d_0^{2k}\big),\qquad \xi_k^\dagger=\tfrac{1}{\sqrt2}\big(d_0^{2k-1}-i\,d_0^{2k}\big),\qquad k=1,\dots,4, $$

which obey $\{\xi_k,\xi_l^\dagger\}=\delta_{kl}$ and $\{\xi_k,\xi_l\}=0$. Each $\xi_k^\dagger$ is either absent or present, so from one vacuum $|0\rangle$ the ground space has

$$ 2^4 = 16 \quad\text{degenerate Ramond ground states }|R^A\rangle,\quad A=1,\dots,16. $$

This $16=2^4$ is the light-cone fingerprint of a **spacetime spinor**: the ground state is not a scalar but a many-component object, the seed of an electron-like particle. Sorting by the parity of the number of $\xi^\dagger$'s applied splits the 16 into two families of eight,

$$ \binom40+\binom42+\binom44=8 \ \text{(even)},\qquad
\binom41+\binom43=8 \ \text{(odd)}, $$

the two $SO(8)$ spinors of opposite chirality, written $|R_1^a\rangle$ (even) and $|R_2^a\rangle$ (odd), $a=1,\dots,8$. After the [[GSO projection]], one family of eight survives as the physical polarizations of a massless ten-dimensional fermion.

## The two mass formulas

The two sectors carry different zero-point energies, so their mass formulas differ, and that difference is where the tachyon problem shows itself. Let $N^\perp$ be the transverse number operator, counting $\alpha^I_{-n}$ with weight $n$, $b^I_{-r}$ with weight $r$, and $d^I_{-n}$ with weight $n$ — each mode's frequency:

$$ \text{NS sector:}\qquad \alpha' M^2 = -\tfrac12 + N^\perp, \tag{3}$$
$$ \text{R sector:}\qquad \alpha' M^2 = \phantom{-\tfrac12 +\,} N^\perp. \tag{4}$$

Three states to pick out:

- **NS: the intercept is $-\tfrac12$, not the bosonic $-1$.** The would-be tachyon is the bare vacuum $|\mathrm{NS}\rangle$ with $N^\perp=0$, giving $\alpha'M^2=-\tfrac12<0$. Still a tachyon *before* projection — but milder than the bosonic $-1$, and the [[GSO projection]] deletes exactly this state.
- **NS first excited: eight massless photons.** The states $b^I_{-1/2}|\mathrm{NS}\rangle$ have $N^\perp=\tfrac12$, so $\alpha'M^2=0$. Eight of them ($I=2,\dots,9$): the transverse polarizations of a Maxwell gauge field.
- **R: no intercept at all.** $\alpha'M^2=N^\perp\ge0$, so the R sector has **no tachyon**, and its massless states are the spinor ground states — eight after GSO.

So at the massless level the open superstring produces eight bosonic states (the NS photon) *and* eight fermionic states (the R spinor). Equal counts of bosons and fermions — the first quantitative footprint of spacetime supersymmetry, and it fell straight out of one sign choice on a ribbon.

The two intercepts differ for a countable reason. A transverse boson (integer-moded) contributes zero-point energy $-\tfrac1{24}$ per direction; a fermion contributes with the opposite sign, $-\tfrac1{48}$ when half-integer-moded (NS) but $+\tfrac1{24}$ when integer-moded (R). Summing over the eight transverse directions,

$$ a_{\rm NS}=8\!\left(-\tfrac1{24}\right)+8\!\left(-\tfrac1{48}\right)=-\tfrac12,\qquad
a_{\rm R}=8\!\left(-\tfrac1{24}\right)+8\!\left(+\tfrac1{24}\right)=0. $$

In R the integer-moded fermions exactly cancel the bosons, so the intercept vanishes — that is *why* R has no tachyon. Each divergent mode sum is the regularized value of $\sum n$ or $\sum r$ (via $\zeta(-1)=-\tfrac1{12}$, obtained with a cutoff, never by naive summation), the same footing as the bosonic $-1$.

## Open questions

- The intercepts $-\tfrac12$ (NS) and $0$ (R) are pinned down above by the regularized zero-point sums; the *fully rigorous* version identifies these with the ordering constant in the RNS super-Virasoro algebra, which this preview does not build.
- The Clifford count gives $16=2^4$ and the even/odd split, but the embedding of these eight states into a genuine ten-dimensional Lorentz spinor (not just the transverse $SO(8)$ one) is deferred to a full RNS treatment.
- Closed-string NS/R sectors need independent left and right copies plus the level-matching constraint; that assembly, and the resulting IIA/IIB choice, is in [[Type II closed-string orientation]].

## Exercise

The mass formulas (3) and (4) claim the R sector has no tachyon while the NS sector has a mild one at $\alpha'M^2=-\tfrac12$. Suppose a careless friend, reasoning that "fermions and bosons should be symmetric," guesses that the R sector *also* has intercept $-\tfrac12$. Using only the mode content of each sector, show why that guess is wrong — i.e. reproduce $a_{\rm R}=0$ from the zero-point sums, and identify the single fact about R modes that flips the fermionic contribution's sign relative to NS.

> [!success]- Solution
> Zero-point energy is a sum of $\pm\tfrac12\,\omega$ over the modes of each field: $+$ for a boson, $-$ for a fermion, summed over the mode frequencies with $\zeta$-regularization.
>
> **Bosons (both sectors).** The transverse $X^I$ are integer-moded in every sector, frequencies $n=1,2,\dots$. Per direction,
> $$ +\tfrac12\sum_{n\ge1} n = \tfrac12\,\zeta(-1) = \tfrac12\!\left(-\tfrac1{12}\right)=-\tfrac1{24}. $$
>
> **Fermions, R sector (integer modes).** The $d^I_n$ have the *same* integer frequencies $n=1,2,\dots$, but the fermionic sign flips the contribution:
> $$ -\tfrac12\sum_{n\ge1} n = -\tfrac12\,\zeta(-1)=+\tfrac1{24}. $$
> Per transverse direction, boson $+$ fermion $=-\tfrac1{24}+\tfrac1{24}=0$, and over eight directions $a_{\rm R}=0$. No shift, no tachyon. $\blacksquare$
>
> **Contrast with NS.** The one fact that changes is the **mode frequencies**: NS fermions are *half*-integer-moded ($r=\tfrac12,\tfrac32,\dots$), so their sum is $\sum_{r} r=(2^{-1}-1)\zeta(-1)=\tfrac1{24}$ instead of $\zeta(-1)=-\tfrac1{12}$, giving $-\tfrac12\cdot\tfrac1{24}=-\tfrac1{48}$ per direction. Then $a_{\rm NS}=8(-\tfrac1{24})+8(-\tfrac1{48})=-\tfrac12$.
>
> So the friend's symmetry intuition fails precisely because periodicity (R) forces *integer* fermion modes, which cancel the bosons, whereas antiperiodicity (NS) forces *half-integer* modes, which do not. The sign on the ribbon controls the mode numbers, and the mode numbers control the intercept.
