---
title: Chan-Paton factors
number: "18.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, d-branes]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Painting a "which brane?" label on each open-string endpoint turns the single photon on one brane into a whole matrix of gauge fields on a stack — and that matrix is exactly a $U(N)$ gauge field.

## Endpoints as nodes and edges

An open string on a stack of $N$ branes is a directed arrow between two nodes. Its tail (the $\sigma=0$ end) sits on some brane $i$; its head (the $\sigma=\pi$ end) sits on some brane $j$. The pair $(i,j)$ — which brane at each end — is the only new information a stack adds, on top of the oscillators the string already carried on a single brane.

Two consequences follow at once. Give the tail a *row* index and the head a *column* index: a string becomes a matrix entry, and a general state is an $N\times N$ matrix of amplitudes, so the one photon of a single brane becomes $N^2$ of them. And two open strings fuse only by gluing the head of one to the tail of the other, which is allowed just when the two touching ends sit on the *same* brane — the exact rule that makes matrices multiply. The endpoint bookkeeping *is* matrix algebra.

So the gauge group is the geometry of the stack. $N$ separated branes see $U(1)^N$; slide them onto each other and the off-diagonal arrows go massless, fusing the $N$ photons into one $U(N)$ gauge field. Gauge symmetry enhancement is just branes touching.

These labels are the **Chan–Paton factors**, introduced in the 1960s as a formal trick to get gauge symmetry out of open strings, long before anyone knew they meant "which brane."

## Endpoint labels as matrix indices

On a single D-brane an oriented open string carries nothing beyond its oscillator state. On $N$ coincident branes each of the two endpoints can land on any brane, so the ground state gains a discrete label:
$$
|\,\text{oscillators}; i,j\,\rangle,\qquad i,j=1,\dots,N,
$$
with $i$ the brane at $\sigma=0$ and $j$ the brane at $\sigma=\pi$. There are $N^2$ such sectors — $N^2$ copies of the entire single-brane spectrum.

With two labels, each running $1,\dots,N$, the natural object is an $N\times N$ matrix. Model the state $(i,j)$ by the matrix unit $E_{ij}$: a $1$ in row $i$, column $j$, zeros elsewhere. A general open-string state is then a superposition
$$
\sum_{i,j=1}^N \lambda^i{}_j\,|\,\text{oscillators}; i,j\,\rangle,
$$
whose coefficients $\lambda^i{}_j$ form an $N\times N$ matrix — the *Chan–Paton matrix* of the state. The row index comes from the tail, the column index from the head.

## Why joining strings is matrix multiplication

Two open strings interact by gluing an endpoint of one to an endpoint of the other. Concretely, the head ($\sigma=\pi$) of the first joins the tail ($\sigma=0$) of the second; the join point stops being an endpoint, leaving a single longer string. This is only geometrically possible if the two touching ends lie on the **same brane**. Writing the sector-joining rule for strings $[ij]$ (from brane $i$ to $j$) and $[jk]$:
$$
[ij]\ast[jk]=[ik]\qquad(j\ \text{not summed}). \tag{1}
$$
The head-brane of the first must equal the tail-brane of the second, and the survivor runs from $i$ to $k$. In matrix-unit form this is exactly
$$
E_{ij}E_{kl}=\delta_{jk}\,E_{il}. \tag{2}
$$
The Kronecker $\delta_{jk}$ enforces "the end of the first must match the start of the second" — no shared brane, no fusion. That delta is the whole reason endpoint labels obey matrix algebra, and it is not an analogy: the string interaction literally multiplies Chan–Paton matrices.

## From $N^2$ photons to a $U(N)$ gauge field

On a single brane the massless level-1 vector is one photon $A_m$, an abelian $U(1)$ field on the $(p+1)$-dimensional world-volume ($m=0,\dots,p$). On the stack that state acquires the endpoint labels, giving $N^2$ massless vectors
$$
A_m{}^i{}_j,\qquad m=0,\dots,p,\quad i,j=1,\dots,N.
$$
Here $m$ is a genuine world-volume Lorentz index; the pair $(i,j)$ is an internal matrix index. So $A_m$ is now a **matrix-valued gauge field**: one matrix per world-volume direction.

One constraint fixes which matrices appear. Reversing a string's orientation swaps its two ends, sending the sector $[ij]\to[ji]$; demanding a unitary — hence physically sensible — theory ties the $[ij]$ and $[ji]$ amplitudes together as $\lambda^\dagger=\lambda$. The Chan–Paton matrices are therefore Hermitian, which is precisely the Lie algebra $\mathfrak u(N)$. The gauge *group* is $U(N)$, the $N\times N$ unitary matrices, whose group multiplication is matrix multiplication — the same operation as the joining rule (1). The massless vectors assemble into a non-abelian $U(N)$ gauge field on the common world-volume; building the field strength from it is the job of [[Yang-Mills from D-branes]].

## Separated branes: $U(N)\to U(1)^N$

Slide the branes apart. A string from brane $i$ to brane $j$ is now classically stretched over the gap $\Delta x_{ij}=\bar x_j-\bar x_i$, and tension $\times$ length costs energy that shows up as mass:
$$
M^2 \;\supset\; \left(\frac{|\Delta x_{ij}|}{2\pi\alpha'}\right)^2 . \tag{3}
$$
(Here $2\pi\alpha'=1/T_0$, so the term is $(\text{tension}\times\text{length})^2$, derived in [[Strings between parallel branes]].) The off-diagonal vectors $i\neq j$ acquire this mass and drop out of the low-energy theory; only the diagonal strings $i=j$, with $\Delta x_{ii}=0$, stay massless. Those $N$ diagonal entries are $N$ independent $U(1)$ gauge fields:
$$
U(N)\ \longrightarrow\ U(1)^N \qquad(\text{branes separated}).
$$
Bring the branes back together and the stretched-length penalty vanishes: the off-diagonal vectors become massless again and the full $U(N)$ is restored. This is a stringy Higgs mechanism — brane separation is the Higgs vev, and the stretched strings are the massive $W$-bosons it produces.

The geometry–gauge dictionary in one table:

| brane configuration | light endpoint labels | gauge symmetry at low energy |
|---|---|---|
| one brane | one label $[11]$ | $U(1)$ |
| $N$ separated branes | only diagonal $[ii]$ light | $U(1)^N$ |
| $N$ coincident branes | all $[ij]$ light | $U(N)$ |

## Open questions

- This is the spectrum-level origin of the labels. The full non-abelian *interactions* — vertex operators, amplitudes, the trace over Chan–Paton indices that makes amplitudes gauge-invariant — belong to a later open-string-interactions treatment.
- Unoriented strings and orientifold projections reduce $U(N)$ to $SO(N)$ or $Sp(N)$; that requires an orientation-reversal identification beyond this oriented bosonic pass.

## Exercise

A stack of $N$ coincident D-branes gives $U(N)$, whose Lie algebra $\mathfrak u(N)$ has $N^2$ generators — matching the $N^2$ endpoint sectors, one massless vector each. Now **separate the $N$ branes to $N$ generic (all-distinct) positions**. Using only the mass rule (3), count how many vectors stay massless, and identify the unbroken gauge group and the number of massive vectors. Confirm the massless count equals the number of $U(1)$ factors, and check the arithmetic against $\dim U(N)=N^2$.

> [!success]- Solution
> A vector in sector $[ij]$ is massless iff its stretched length vanishes, i.e. $\Delta x_{ij}=\bar x_j-\bar x_i=0$. With all $N$ positions distinct, this holds **only for $i=j$**: the $N$ diagonal sectors $[ii]$ stay massless, and all $N^2-N=N(N-1)$ off-diagonal sectors become massive.
>
> The $N$ surviving diagonal vectors are $N$ mutually commuting $U(1)$ gauge fields (each is a single brane's own photon), so the unbroken group is
> $$U(1)^N,\qquad \dim = N.$$
> The massless count $N$ equals the number of $U(1)$ factors $\checkmark$.
>
> Arithmetic check: the $N^2$ generators of $U(N)$ split as
> $$\underbrace{N}_{\text{Cartan / diagonal, unbroken}}\;+\;\underbrace{N(N-1)}_{\text{off-diagonal, now massive}}\;=\;N^2.$$
> The off-diagonal generators are the root directions of $U(N)$, and breaking down to the diagonal torus $U(1)^N$ is exactly what makes them massive — the stringy Higgs mechanism, with the $N(N-1)$ stretched strings as its massive $W$-bosons. For $N=2$: $4=2+2$, so $U(2)$ breaks to $U(1)^2$ with $2$ massive off-diagonal vectors.
