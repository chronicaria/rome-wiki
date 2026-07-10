---
title: Canonical commutators
number: "13.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, commutators]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Quantize only the variables that survive the classical constraint, and postulate one commutator for each coordinate–momentum pair: $[x^I,p^J]=i\eta^{IJ}$ and $[x_0^-,p^+]=-i$, everything else zero.

Ordinary quantum mechanics runs on one relation — a coordinate and its conjugate momentum fail to commute, $[x,p]=i$ (units with $\hbar=c=1$) — repeated for every independent coordinate. The work here is bookkeeping: identify which variables remain independent after light-cone gauge has done its cutting, then pair each with its momentum. The one surprise is that the partner of $x^-$ is not $p^-$ but $p^+$, dragging a minus sign along. The sign is forced by the light-cone metric, not chosen, and it resurfaces correctly in every commutator built downstream.

## Which variables are independent?

Quantization is mechanical once you know *what* to quantize; deciding that is classical work, already done in [[Light-cone Hamiltonian]]. There, solving the light-cone particle showed the entire motion is fixed by four pieces of data:

- the transverse trajectory $x^I(\tau)=x_0^I+\tfrac{p^I}{m^2}\tau$ — needs the constants $x_0^I$ and the momenta $p^I$;
- the $x^-$ trajectory $x^-(\tau)=x_0^-+\tfrac{p^-}{m^2}\tau$ — needs the constant $x_0^-$ and $p^-$;
- $p^-$ itself, which is **not** free: the mass shell fixes it, $p^-=\tfrac{1}{2p^+}(p^Ip^I+m^2)$;
- $x^+(\tau)=\tfrac{p^+}{m^2}\tau$ — no free constant, because the gauge condition nailed $x^+$ to $\tau$.

Strip out everything determined by the rest, and the independent **dynamical variables** are

$$ \big(\,x^I,\; x_0^-,\; p^I,\; p^+\,\big). \tag{1}$$

Here $x^I$ (no explicit $\tau$) is the constant transverse position — the same object written $x_0^I$ when emphasizing the trajectory. Both $p^-$ and $x^+$ are absent: they are *consequences*, not inputs.

## What pairs with what — and why the minus sign

Independent coordinates come with conjugate momenta. Read them off the natural pairing that sits inside the relativistic scalar product $p\cdot x = p_\mu x^\mu$. In light-cone components (see [[Light-cone coordinates]]),

$$ p_\mu x^\mu = p_I x^I + p_+ x^+ + p_- x^- , \qquad p_+ = -p^-,\quad p_- = -p^+ .$$

The last two identities are the light-cone lowering rule: since $\eta_{+-}=\eta_{-+}=-1$ are the only nonvanishing longitudinal components, lowering an index swaps the labels $+\leftrightarrow-$ and brings a minus sign. So the momentum multiplying the coordinate $x^-$ in $p\cdot x$ is $p_- = -p^+$. The conjugate of $x^-$ is therefore $p^+$ (up to the sign), *not* $p^-$.

That is the entire origin of the surprise: lowering swaps plus and minus, so the momentum conjugate to $x^-$ is $p^+$, and the swap drags a minus sign along. Two conjugate pairs result:

$$ x^I \text{ pairs with } p^I \quad(\text{ordinary}), \qquad x_0^- \text{ pairs with } p^+ \quad(\text{the light-cone twist}).$$

## The postulated commutators

Canonical quantization is one rule: for each conjugate pair, the coordinate and its momentum fail to commute by $i$ times the metric that connects their indices. Applied to (1):

$$ \boxed{\;[\,x^I,\,p^J\,] = i\,\eta^{IJ} = i\,\delta^{IJ},\qquad [\,x_0^-,\,p^+\,] = i\,\eta^{-+} = -\,i\;}\tag{2}$$

with **every other commutator zero**. One index comes from the coordinate, one from the momentum, and $\eta$ ties them together.

1. **Transverse sector.** The transverse metric is Euclidean (mostly-plus signature), $\eta^{IJ}=\delta^{IJ}$, so this is the textbook $[x,p]=i$, one copy per transverse direction. No physics beyond first-year QM.

2. **Longitudinal sector.** The coordinate is $x_0^-$ (upper $-$), the momentum is $p^+$ (upper $+$), so the metric on the right is $\eta^{-+}$. With $\eta^{+-}=\eta^{-+}=-1$ this is $-i$ — the same minus sign that appeared in the pairing above, the light-cone metric showing through.

The "all others zero" clause is not a throwaway. In full it reads
$$ [x^I,x^J]=[p^I,p^J]=[x^I,x_0^-]=[x^I,p^+]=[x_0^-,p^I]=[p^I,p^+]=0 .$$
In particular every momentum commutes with every other momentum — the fact that makes $p^-$ and the Hamiltonian free of ordering ambiguities.

## The commutators hold at every $\tau$

Passing to the Heisenberg picture conjugates each operator by $e^{iH\tau}$ (see [[Schrodinger and Heisenberg pictures]]). A commutator whose right-hand side is a pure number — like $i\delta^{IJ}$ or $-i$ — is unchanged by conjugation, since numbers commute with everything. So the same relations hold for the time-dependent operators:

$$ [\,x^I(\tau),\,p^J(\tau)\,]=i\,\delta^{IJ},\qquad [\,x_0^-(\tau),\,p^+(\tau)\,]=-i. $$

## Derived operators inherit their commutators

The operators $p^-$, $x^-(\tau)$, $x^+(\tau)$ were *not* postulated — they are defined by the quantum versions of the classical relations:

$$ p^-\equiv \tfrac{1}{2p^+}\big(p^Ip^I+m^2\big),\qquad x^-(\tau)\equiv x_0^- + \tfrac{p^-}{m^2}\tau,\qquad x^+(\tau)\equiv \tfrac{p^+}{m^2}\tau. \tag{3}$$

Their commutators are consequences of (2), computed with the product rule $[A,BC]=[A,B]C+B[A,C]$. Two we will need:

$$ [\,x^I,\,p^-\,]=\frac{i\,p^I}{p^+},\qquad [\,x_0^-,\,p^-\,]=i\,\frac{p^-}{p^+}. $$

The first: $[x^I,p^-]=\tfrac{1}{2p^+}[x^I,p^Jp^J]=\tfrac{1}{2p^+}(2ip^I)=ip^I/p^+$, using $[x^I,p^Jp^J]=2i\delta^{IJ}p^J=2ip^I$. The second is nonzero *only* because $p^-$ contains $1/p^+$ and $x_0^-$ fails to commute with $p^+$; it is derived in [[Momentum and Lorentz generators]] and again in the exercise below. Each is one postulate of (2) reaching through the definition of $p^-$ — the transverse pair for the first, the longitudinal minus sign for the second. The first matters downstream: because $[x^I,p^-]\neq0$, the boost generator $M^{-I}$ built from $x^I$ and $p^-$ is not Hermitian as written and must be symmetrized.

The definition of $p^-$ carries **no** ordering ambiguity: $1/p^+$ commutes with the polynomial $p^Ip^I+m^2$ because all momenta commute. This is the gentle feature of the point particle. The string's mass operator is an infinite oscillator sum where the analogous ordering is a genuine calculation — that is where $D=26$ and the normal-ordering constant enter.

## Why not quantize $x^+$ and $p^-$ instead?

A tempting alternative: treat $x^+$ as a coordinate and $p^-$ as its momentum, then write $[x^+,p^-]=i\eta^{+-}=-i$. In *covariant* quantization (where even $x^0$ is an operator) that is exactly right. But in **our** light-cone gauge $x^+=\tfrac{p^+}{m^2}\tau$ is built from a momentum, and all momenta commute, so

$$ [x^+,p^-]=\Big[\tfrac{p^+}{m^2}\tau,\,p^-\Big]=0. $$

Choosing the wrong independent set would have baked in a commutator that our framework does not have. That is the discipline: quantize what is actually independent, and let everything else follow.

## Open questions

- The inverse $1/p^+$ presumes states supported away from $p^+=0$. Standard in light-cone gauge; for strings the $p^+=0$ sector falls outside this coordinate patch and needs covariant methods.
- The index $I$ runs over $D-2$ transverse directions for a particle in $D$ dimensions. Nothing in the point-particle commutators fixes $D$ — the critical dimension only appears once string oscillator ordering feeds into the Lorentz algebra.

## Exercise

Using only the boxed relations (2) and the definitions (3), evaluate the commutator $[\,x^+,\,p^+\,]$ and the commutator $[\,x_0^-,\,p^-\,]$. For the second, you may use $[x_0^-,1/p^+]=i/p^{+2}$. State in one sentence why the first is zero but the second is not.

> [!success]- Solution
> **First.** $x^+=\tfrac{p^+}{m^2}\tau$ is a multiple of the momentum $p^+$, and all momenta commute, so
> $$ [x^+,p^+]=\Big[\tfrac{p^+}{m^2}\tau,\,p^+\Big]=\tfrac{\tau}{m^2}\,[p^+,p^+]=0. $$
>
> **Second.** Since $p^-=\tfrac{1}{2p^+}(p^Ip^I+m^2)$ and $x_0^-$ commutes with every $p^I$, only the $1/p^+$ factor contributes:
> $$ [x_0^-,p^-]=\tfrac12(p^Ip^I+m^2)\,[x_0^-,\tfrac{1}{p^+}]=\tfrac12(p^Ip^I+m^2)\,\frac{i}{p^{+2}}=i\,\frac{1}{p^+}\cdot\frac{p^Ip^I+m^2}{2p^+}=i\,\frac{p^-}{p^+}. $$
> (Provided check: $[x_0^-,1/p^+]=\tfrac{1}{p^+}[p^+,x_0^-]\tfrac{1}{p^+}=\tfrac{1}{p^+}(+i)\tfrac{1}{p^+}=i/p^{+2}$, using $[x_0^-,p^+]=-i\Rightarrow[p^+,x_0^-]=+i$.)
>
> **Why one vanishes and the other doesn't.** $x^+$ is made purely of a momentum, so it commutes with all momenta including $p^+$; but $x_0^-$ is a genuine coordinate conjugate to $p^+$, and $p^-$ secretly depends on $p^+$, so the nonzero pair $[x_0^-,p^+]=-i$ leaks through.
