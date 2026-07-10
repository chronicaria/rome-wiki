---
title: Yang-Mills from D-branes
number: "18.7"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, d-branes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

$N$ coincident D-branes carry $U(N)$ Yang–Mills: the massless open-string vector picks up two endpoint labels, becomes an $N\times N$ matrix-valued gauge field, and string joining supplies exactly the matrix multiplication that makes the field strength non-abelian.

## Two facts and their product

Two results from earlier notes combine here. One brane carries one photon — a $U(1)$ Maxwell field $A_m(x)$ on its world-volume ([[Open strings on one brane]]). And endpoints carry labels — on a stack of $N$ branes each string end can land on any brane, so a state acquires a pair of Chan–Paton indices $[ij]$ ([[Chan-Paton factors]]).

Multiply them and the photon becomes a matrix of photons $A_m{}^i{}_j$. The genuinely new ingredient is interaction: when two open strings join end-to-end, the touching endpoint labels must match and are summed over, and that sum is matrix multiplication. It is what turns $N^2$ free photons into a single interacting non-abelian gauge theory. Yang–Mills is what open strings look like at low energy, and its non-abelian structure is nothing but endpoints tracking which brane they sit on.

The rest of the note makes "matrix of photons plus string joining equals Yang–Mills" precise.

## From one photon to a matrix of photons

A single D$p$-brane has one massless open-string vector, which at low energy is a $U(1)$ gauge potential $A_m(x)$, $m=0,\dots,p$, with abelian field strength
$$
F_{mn}=\partial_m A_n-\partial_n A_m. \tag{1}
$$

For $N$ coincident branes, the vector comes in $N^2$ copies — one per label pair $[ij]$ (this is exactly the $N^2$-fold spectrum from [[Chan-Paton factors]]). Collect them into a single matrix-valued potential
$$
A_m{}^i{}_j(x),\qquad i,j=1,\dots,N,\quad m=0,\dots,p, \tag{2}
$$
where $m$ is the world-volume vector index and $(i,j)$ is the matrix index. Swapping the two endpoints conjugates the state labels, so the physical fields sit in Hermitian $N\times N$ matrices — the Lie algebra $\mathfrak{u}(N)$.

## Where the commutator comes from

The abelian curvature (1) is not gauge-covariant once $A_m$ is a matrix. The correct field strength is
$$
\boxed{\,F_{mn}=\partial_m A_n-\partial_n A_m+i[A_m,A_n]\,}. \tag{3}
$$
The commutator term $i[A_m,A_n]$ is the non-abelian piece. It vanishes for a single brane and whenever the matrices commute (all diagonal, say), and is nonzero exactly when the gauge fields fail to commute — the hallmark of Yang–Mills.

The commutator is string joining made local. A three-string interaction glues the $\sigma=\pi$ end of one string to the $\sigma=0$ end of the next; the shared endpoint must sit on the same brane, so the labels contract like matrix units,
$$
E_{ij}E_{kl}=\delta_{jk}\,E_{il}, \tag{4}
$$
and the Kronecker $\delta_{jk}$ is a matrix product ([[Chan-Paton factors]]). Two orderings of the same joining differ by which string is glued first; their difference is the antisymmetric combination $A_mA_n-A_nA_m=[A_m,A_n]$. So the commutator in (3) is the low-energy shadow of "endpoints must match, and order matters" — the reason branes give non-abelian gauge theory rather than $N^2$ unrelated Maxwell fields.

## Gauge invariance (get the sign right)

A gauge transformation is a spacetime-dependent unitary rotation $U(x)\in U(N)$ of the endpoint labels. It acts on the fundamental representation by $\psi\mapsto U\psi$, which fixes the covariant derivative to be $D_m=\partial_m+iA_m$. Demanding $D_m\psi\mapsto U(D_m\psi)$ forces
$$
A_m\mapsto U A_m U^{-1}+i(\partial_m U)U^{-1}. \tag{5}
$$

The inhomogeneous term is $+i(\partial_m U)U^{-1}$, not $-i$: its sign is locked to the convention $F=\partial A+i[A,A]$ in (3). Flip the sign in (3) and the sign in (5) flips with it; they are not independent choices. With (5), the field strength rotates homogeneously,
$$
F_{mn}\mapsto U F_{mn}U^{-1}, \tag{6}
$$
because its two inhomogeneous pieces — one from $\partial_m(UA_nU^{-1})$, one from the commutator — cancel (checked in the exercise). Homogeneity is the payoff: any trace of a product of $F$'s is then gauge-invariant, since $\mathrm{Tr}(UXU^{-1})=\mathrm{Tr}\,X$, which is what lets us build a gauge-invariant action.

Two special cases sanity-check the picture: for $N=1$, $U=e^{i\lambda}$ is a phase, the commutator dies, and (5) collapses to ordinary Maxwell gauge invariance $A_m\mapsto A_m+\partial_m\lambda$. For constant $U$, the inhomogeneous term drops and it is a plain global rotation of the branes among themselves.

## The low-energy action

Keep only the lightest open-string modes and expand in powers of $\alpha'$. The leading local action for the matrix gauge field is Yang–Mills:
$$
\boxed{\,S_{\mathrm{YM}}=-\frac{1}{4g_{\mathrm{YM}}^2}\int d^{p+1}x\;\mathrm{Tr}\,F_{mn}F^{mn}\,}, \tag{7}
$$
in mostly-plus signature, with $F_{mn}$ from (3) and the trace over the $N\times N$ matrix indices. The trace makes it gauge-invariant by (6) and sews the $N^2$ components into one action with a single coupling.

The coupling is fixed, not free. Expanding the abelian Born–Infeld action $-T_p\sqrt{-\det(\eta+2\pi\alpha' F)}$ to quadratic order gives the Maxwell term with prefactor $T_p(2\pi\alpha')^2$ ([[Born-Infeld action]]), so
$$
\frac{1}{g_{\mathrm{YM}}^2}=(2\pi\alpha')^2\,T_p
\quad\Longrightarrow\quad
g_{\mathrm{YM}}^2\sim g_s\,\ell_s^{\,p-3}, \tag{8}
$$
using the D$p$-brane tension $T_p\sim 1/(g_s\,\ell_s^{\,p+1})$ with $\ell_s=\sqrt{\alpha'}$. The gauge coupling is set by the string coupling and the brane dimension. A D3-brane ($p=3$) is special: $g_{\mathrm{YM}}^2\sim g_s$ is dimensionless, the mark of a classically scale-invariant four-dimensional gauge theory.

## What lives in the "$\cdots$": the transverse scalars

The full low-energy action is not just (7). The same stack carries $(d-p)$ adjoint scalars $\phi^a{}_{ij}$, $a=p+1,\dots,d$ — the matrix versions of the transverse-position scalars from [[Open strings on one brane]]:
$$
S=-(2\pi\alpha')^2 T_p\int d^{p+1}x\;\mathrm{Tr}\!\left(\tfrac14 F_{mn}F^{mn}+\tfrac12 D_m\phi^a D^m\phi^a-\tfrac14\sum_{a\neq b}[\phi^a,\phi^b]^2\right)+\cdots, \tag{9}
$$
with $D_m\phi^a=\partial_m\phi^a+i[A_m,\phi^a]$. The remaining $\cdots$ are fermions (in the superstring), higher-derivative terms, and stringy corrections.

The scalar potential $-\tfrac14\sum_{a\neq b}\mathrm{Tr}[\phi^a,\phi^b]^2$ makes the geometry–gauge dictionary dynamical. It is positive (the commutator of two Hermitian matrices is anti-Hermitian, so $\mathrm{Tr}[\phi^a,\phi^b]^2\le0$) and vanishes exactly when all the $\phi^a$ commute — when they are simultaneously diagonalizable. The $N$ common eigenvalues of $\phi^a$ are then the $N$ brane positions in the $a$-th transverse direction, $x^a_i=2\pi\alpha'\,\phi^a_{ii}$. So the flat directions of the potential are the moduli space of where the $N$ branes sit. Turning on a diagonal $\phi$ separates the branes and Higgses $U(N)\to U(1)^N$: the off-diagonal $[ij]$ fields eat the extra scalar and become massive with exactly the stretched-string mass $\big(|\Delta x_{ij}|/(2\pi\alpha')\big)^2$ ([[Strings between parallel branes]]). Brane geometry and gauge-symmetry breaking are one fact seen from two sides.

## Relation to Born–Infeld

For a single brane, the exact-in-$F$ (constant, abelian) action is Born–Infeld, and (7) is its small-field limit ([[Born-Infeld action]]). For a stack there is a real subtlety: since $F$ is now a matrix, the "$\det$" inside the square root needs a prescription for ordering non-commuting factors, and no fully consistent non-abelian Born–Infeld action is known — it may not exist in closed form. The symmetrized-trace proposal reproduces low orders but is not the last word. The reliable statement is the modest one: at low energy (small $\alpha' F$) the matrix gauge field obeys $U(N)$ Yang–Mills, equation (7). That is the load-bearing result of this note.

## Open questions

- **Non-abelian Born–Infeld beyond leading order.** Simply symmetrizing the trace inside the determinant is not a unique or complete prescription; the correct all-orders matrix action, if it exists, is unsettled.
- **Precise numerical coupling.** Equation (8) fixes the $\alpha'$, $g_s$, and $p$ scaling of $g_{\mathrm{YM}}^2$; the exact numerical constant (conventions, $\pi$'s) rides on the precise D$p$-brane tension normalization, tracked with the brane effective action.

## Exercise

Verify the sign in the gauge-transformation law (5) is forced by the field-strength convention (3), and confirm one direction of the homogeneous transformation (6). Take the *abelian-order* part: expand $F'_{mn}$ under $A_m\mapsto UA_mU^{-1}+i(\partial_m U)U^{-1}$ and check that the $\partial\partial U$ terms cancel — then argue what would go wrong if the inhomogeneous term carried a $-i$ instead.

> [!success]- Solution
> Write $A'_m=UA_mU^{-1}+i(\partial_m U)U^{-1}$ and compute the linear-derivative part of $F'_{mn}=\partial_m A'_n-\partial_n A'_m+i[A'_m,A'_n]$.
>
> The clean route is $D_m=\partial_m+iA_m$ and $F_{mn}=-i[D_m,D_n]$. Under (5), $D_m\mapsto UD_mU^{-1}$: acting on $\psi\mapsto U\psi$,
> $$D'_m(U\psi)=(\partial_m+iA'_m)(U\psi)=(\partial_m U)\psi+U\partial_m\psi+iA'_m U\psi,$$
> and $iA'_m U=iUA_m-(\partial_m U)$ from (5) cancels the $(\partial_m U)\psi$, leaving $D'_m(U\psi)=U(D_m\psi)$. Hence $F'_{mn}=-i[D'_m,D'_n]=U(-i[D_m,D_n])U^{-1}=UF_{mn}U^{-1}$, which is (6). The $\partial_m\partial_n U$ pieces cancel because they enter only through the symmetric part of $D'_mD'_n$, which the commutator drops.
>
> **Direct check of the cancellation.** If you insist on expanding $F'$ by hand, the two purely-inhomogeneous contributions are:
> $$\partial_m A'_n-\partial_n A'_m\ \supset\ i(\partial_m U)U^{-1}(\partial_n U)U^{-1}-i(\partial_n U)U^{-1}(\partial_m U)U^{-1}$$
> (using $\partial_m U^{-1}=-U^{-1}(\partial_m U)U^{-1}$; the symmetric $\partial_m\partial_n U$ drops on antisymmetrizing), and
> $$i[A'_m,A'_n]\ \supset\ i\big[i(\partial_m U)U^{-1},i(\partial_n U)U^{-1}\big]=-i(\partial_m U)U^{-1}(\partial_n U)U^{-1}+i(\partial_n U)U^{-1}(\partial_m U)U^{-1}.$$
> These are equal and opposite, so they cancel term by term. The cross terms reassemble into $U(i[A_m,A_n])U^{-1}$, and the abelian curvature rotates to $U(\partial_m A_n-\partial_n A_m)U^{-1}$, giving (6).
>
> **Why the sign is forced.** The $+i$ in (5) is not a choice: $D_m=\partial_m+iA_m$ transforms covariantly ($D_m\mapsto UD_mU^{-1}$) *only* with $A_m\mapsto UA_mU^{-1}+i(\partial_m U)U^{-1}$. If instead one used $A_m\mapsto UA_mU^{-1}-i(\partial_m U)U^{-1}$ while keeping $F=\partial A+i[A,A]$, the two inhomogeneous contributions above would *add* rather than cancel, leaving a leftover $\sim(\partial U)U^{-1}(\partial U)U^{-1}$ in $F'$ — so $F$ would not transform homogeneously and $\mathrm{Tr}\,F^2$ would not be gauge-invariant. The $-i$ inhomogeneous term is self-consistent only if paired with the opposite bracket sign $F=\partial A-i[A,A]$. The pair used here — $F=+i[A,A]$ with gauge term $+i(\partial U)U^{-1}$, matching $D_m\phi=\partial_m\phi+i[A_m,\phi]$ — is the standard one; mixing the two conventions (as an earlier draft did) is the error this exercise guards against.
