---
title: The number operator
number: "3.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, oscillator-algebra]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The number operator $N=a^\dagger a$ has eigenvalues exactly $0,1,2,\dots$: it counts how many quanta of energy $\hbar\omega$ a state holds. Two facts do all the work — $N$ is non-negative because it is a squared length, and $a$ steps it down one unit at a time — and a quantity that is non-negative and drops in whole steps can only be a non-negative integer.

Think of a stack of identical coins. $a^\dagger$ drops one coin on top, $a$ removes the top coin, and $N$ reports how many coins are in the stack. You cannot have $-1$ coins (that's positivity), and you can only add or remove whole coins (that's the ladder), so the stack height is $0,1,2,\dots$ — nothing in between. The oscillator's energy levels are exactly this coin stack, each coin worth $\hbar\omega$, resting on a fixed $\tfrac12\hbar\omega$ "table." This note is the module's exit check, worked end to end.

> Everything below is pure algebra from the two outputs of [[Ladder operators]]: $[a,a^\dagger]=1$ and $H=\hbar\omega(a^\dagger a+\tfrac12)$. Only the very last step (completeness) invokes the wavefunction.

## Setup: the spectrum of $H$ is the spectrum of $N$

$$ N \equiv a^\dagger a, \qquad\text{so}\qquad H = \hbar\omega\left(N+\tfrac12\right). $$

$N$ is Hermitian, $N^\dagger=(a^\dagger a)^\dagger=a^\dagger a=N$, so it is an observable with real eigenvalues, and $H$ is just $N$ affinely rescaled. Find the eigenvalues of $N$ and the entire energy spectrum follows, with no differential equation.

$N$ has one more feature we lean on immediately: it can never be negative. For any state its expectation value is a squared length,

$$ \langle\psi|N|\psi\rangle = \langle\psi|a^\dagger a|\psi\rangle = \langle a\psi|a\psi\rangle = \big\|\,a|\psi\rangle\,\big\|^2 \ge 0, \tag{1}$$

where the middle step moves $a^\dagger$ across the inner product as the adjoint of $a$. Any operator of the form "dagger times itself" is positive semidefinite, exactly as $|z|^2\ge0$ for a complex number. Keep (1) in hand; it is the floor the whole ladder rests on.

## Step 1 — $a^\dagger$ and $a$ shift $N$ by one

The Leibniz rule from [[Canonical commutation relations]], combined with antisymmetry, gives $[\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B$. Apply it with $[a,a^\dagger]=1$:

$$ [N,a^\dagger] = [a^\dagger a,\, a^\dagger] = a^\dagger[a,a^\dagger] + [a^\dagger,a^\dagger]a = a^\dagger, $$
$$ [N,a] = [a^\dagger a,\, a] = a^\dagger[a,a] + [a^\dagger,a]a = -a. $$

So $[N,a^\dagger]=+a^\dagger$ and $[N,a]=-a$: acting with $a^\dagger$ or $a$ carries exactly $\pm1$ unit of $N$, which is what makes them ladder rungs. Multiplying by $\hbar\omega$ restates them for the energy (the constant $\tfrac12$ in $H$ drops out of any commutator):

$$ [H,a^\dagger]=+\hbar\omega\,a^\dagger, \qquad [H,a]=-\hbar\omega\,a. $$

## Step 2 — the ladder

Let $|\nu\rangle$ satisfy $N|\nu\rangle=\nu|\nu\rangle$. Push $N$ through $a^\dagger$ using Step 1:

$$ N\,a^\dagger|\nu\rangle = \big(a^\dagger N + [N,a^\dagger]\big)|\nu\rangle = a^\dagger(\nu+1)|\nu\rangle = (\nu+1)\,a^\dagger|\nu\rangle. $$

So $a^\dagger|\nu\rangle$ is again an eigenstate, with eigenvalue raised to $\nu+1$ (energy up by $\hbar\omega$). It is genuinely nonzero: the same norm identity used in Step 4 gives $\|a^\dagger|\nu\rangle\|^2=\langle\nu|(N+1)|\nu\rangle=\nu+1\ge1$ for any $\nu\ge0$. The identical computation with $[N,a]=-a$ gives

$$ N\,a|\nu\rangle = (\nu-1)\,a|\nu\rangle, $$

so $a$ **lowers** $\nu$ by one, unless it kills the state outright — that loophole is about to matter. Hence the names: $a^\dagger$ creates a quantum, $a$ annihilates one.

## Step 3 — positivity + ladder $\Rightarrow$ spectrum is $\{0,1,2,\dots\}$

This is the coin argument made rigorous.

Start from any eigenvalue $\nu\ge0$ (it's $\ge0$ by (1)) and apply $a$ repeatedly. Each application lowers $\nu$ by one, producing eigenvalues $\nu,\nu-1,\nu-2,\dots$. If this chain never stopped it would eventually produce a nonzero eigenstate with eigenvalue below $0$, contradicting positivity. The only escape is that at some point $a$ annihilates the state: there is a lowest eigenstate $|\nu_0\rangle$ (take it normalized) with

$$ a|\nu_0\rangle = 0. $$

Now read $\nu_0$ off positivity, which pins it to exactly zero rather than to some small non-negative number:

$$ \nu_0=\langle\nu_0|N|\nu_0\rangle=\big\|a|\nu_0\rangle\big\|^2=0. $$

So the bottom rung sits at $0$. Name its normalized state $|0\rangle$: it satisfies $a|0\rangle=0$ and $N|0\rangle=0$ (the vacuum — no quanta).

Finally, why must the original $\nu$ have been an integer? If it took $r$ lowerings to reach the bottom, then $\nu-r=0$, so $\nu=r\in\mathbb Z_{\ge0}$. Every eigenvalue sits an integer distance above a bottom that is itself $0$, which is what forbids a fractional ladder like $\{\tfrac12,\tfrac32,\dots\}$. Building back up with $a^\dagger$ fills in $0,1,2,\dots$ and nothing else:

$$ \boxed{\;N|n\rangle = n|n\rangle,\quad n=0,1,2,\dots,\qquad E_n=\hbar\omega\left(n+\tfrac12\right)\;} \tag{2}$$

The spectrum is an evenly spaced ladder with rung spacing $\hbar\omega$ — Planck's $E=\hbar\omega$, one quantum per rung — sitting on the zero-point floor $E_0=\tfrac12\hbar\omega$ derived in [[Ladder operators]]. The word "quantum" means nothing more than one indivisible step of this ladder.

| state | how it's built | $N$ | energy |
|---|---|---:|---:|
| $\lvert0\rangle$ | vacuum | $0$ | $\tfrac12\hbar\omega$ |
| $\lvert1\rangle$ | $a^\dagger\lvert0\rangle$ | $1$ | $\tfrac32\hbar\omega$ |
| $\lvert2\rangle$ | $\tfrac{(a^\dagger)^2}{\sqrt{2!}}\lvert0\rangle$ | $2$ | $\tfrac52\hbar\omega$ |

## Step 4 — normalized rungs, and the sense in which $N$ "counts"

To use the ladder we need the constants in $a^\dagger|n\rangle=c_n|n+1\rangle$. Get them from a norm, using $aa^\dagger=a^\dagger a+[a,a^\dagger]=N+1$:

$$ \big\|a^\dagger|n\rangle\big\|^2 = \langle n|aa^\dagger|n\rangle = \langle n|(N+1)|n\rangle = n+1, $$
$$ \big\|a|n\rangle\big\|^2=\langle n|a^\dagger a|n\rangle = \langle n|N|n\rangle = n. $$

Fixing the phase of each $|n\rangle$ so the coefficients are positive,

$$ a^\dagger|n\rangle = \sqrt{n+1}\,|n+1\rangle, \qquad a|n\rangle = \sqrt{n}\,|n-1\rangle. $$

The $\sqrt n$ in $a|n\rangle$ is self-policing: at $n=0$ it gives $\sqrt0\,|{-1}\rangle=0$, so the algebra kills the would-be negative state on its own. Iterating $a^\dagger$ builds the whole tower from the vacuum:

$$ |n\rangle = \frac{(a^\dagger)^n}{\sqrt{n!}}\,|0\rangle. $$

The $\sqrt{n!}$ is precisely the normalizer. To verify, commute $a$ through $(a^\dagger)^n$ — one gets $[a,(a^\dagger)^n]=n(a^\dagger)^{n-1}$ by induction from the Leibniz rule — so that, since $a|0\rangle=0$,

$$ \big\|(a^\dagger)^n|0\rangle\big\|^2 =\langle0|a^n(a^\dagger)^n|0\rangle =n\,\langle0|a^{n-1}(a^\dagger)^{n-1}|0\rangle =n!. $$

Dividing by $\sqrt{n!}$ gives $\langle n|n\rangle=1$.

The verb "count" is exact. Read $|n\rangle$ as "the vacuum with $n$ identical quanta added": each $a^\dagger$ deposits one quantum worth $\hbar\omega$, $N=a^\dagger a$ hands back the integer $n$ — how many are present — and $H$ bills $\hbar\omega$ per quantum plus the fixed $\tfrac12\hbar\omega$ floor. The quanta are **indistinguishable bosons**: there is a single $a^\dagger$, and $(a^\dagger)^n$ is automatically symmetric, so the state depends only on *how many*, never on *which*. This is the hinge of the whole course — in [[A string is many oscillators]] each vibration mode gets its own $a^\dagger$, "$n$ quanta in mode $k$" becomes "the string rings in its $k$-th harmonic $n$ quanta deep," and those excitation numbers get reread as particles.

## Step 5 — no states hide off the ladder

The algebra shows every eigenstate lies on a ladder anchored at $0$, but could there be a *second* normalizable bottom state, starting a parallel ladder? In the concrete Schrödinger representation, no. With $\hat p=-i\hbar\,d/dx$ the vacuum condition $a\psi_0=0$ reads

$$ \sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{\hbar}{m\omega}\frac{d}{dx}\right)\psi_0(x)=0 \;\Longrightarrow\; \psi_0'(x)=-\frac{m\omega}{\hbar}\,x\,\psi_0(x). $$

This first-order ODE has a *one-dimensional* solution space,

$$ \psi_0(x)=C\exp\!\left(-\frac{m\omega x^2}{2\hbar}\right),\qquad C=\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}, $$

with $C$ fixed by $\int_{-\infty}^\infty e^{-\beta x^2}dx=\sqrt{\pi/\beta}$, $\beta=m\omega/\hbar$. So the bottom is unique. Acting with $(a^\dagger)^n/\sqrt{n!}$ dresses this Gaussian with a degree-$n$ polynomial — the Hermite functions — and as eigenfunctions of the confining self-adjoint Hamiltonian $-\tfrac{\hbar^2}{2m}\partial_x^2+\tfrac12 m\omega^2x^2$ they form a complete orthonormal basis. No normalizable state hides off the single ladder.

## Open questions

- Completeness in Step 5 leans on the Sturm–Liouville theorem for a confining self-adjoint operator; that is mathematical background, not string-specific physics.
- With several independent oscillators, different occupation lists can share the same total $N$ — a degeneracy that is exactly the state-counting problem of [[Density of states|Partition Functions and State Counting]].

## Exercise

The number operator "counts," but does it count linearly in energy? Compute the expectation and spread of energy in the state $a^\dagger|0\rangle=|1\rangle$ directly, *without* using (2) — use only $[a,a^\dagger]=1$, $a|0\rangle=0$, and $H=\hbar\omega(a^\dagger a+\tfrac12)$. Then sanity-check against (2). Is $|1\rangle$ an energy eigenstate (spread zero) or a superposition (spread nonzero)?

> [!success]- Solution
> Write $|1\rangle=a^\dagger|0\rangle$ (already normalized, since $\|a^\dagger|0\rangle\|^2=\langle0|aa^\dagger|0\rangle=\langle0|(a^\dagger a+1)|0\rangle=1$).
>
> **Mean energy.** $H|1\rangle=\hbar\omega(a^\dagger a+\tfrac12)a^\dagger|0\rangle$. Move $a^\dagger a$ onto $a^\dagger|0\rangle$: since $a^\dagger a\,a^\dagger|0\rangle=a^\dagger(a a^\dagger)|0\rangle=a^\dagger(a^\dagger a+1)|0\rangle=a^\dagger|0\rangle$ (using $a|0\rangle=0$), we get
> $$ H|1\rangle=\hbar\omega\left(1+\tfrac12\right)|1\rangle=\tfrac32\hbar\omega\,|1\rangle. $$
> So $\langle H\rangle=\tfrac32\hbar\omega$.
>
> **Spread.** The line above shows $|1\rangle$ is an *exact* eigenstate of $H$ with eigenvalue $\tfrac32\hbar\omega$, so $\langle H^2\rangle=(\tfrac32\hbar\omega)^2$ and
> $$ \Delta E=\sqrt{\langle H^2\rangle-\langle H\rangle^2}=0. $$
> $|1\rangle$ is a sharp energy eigenstate, not a superposition — the spread vanishes.
>
> **Check.** Formula (2) gives $E_1=\hbar\omega(1+\tfrac12)=\tfrac32\hbar\omega$: exactly one quantum $\hbar\omega$ above the vacuum's $\tfrac12\hbar\omega$. The direct algebra reproduces the counting result, confirming $N$ counts *linearly* — each rung adds exactly $\hbar\omega$, no more, no less.
