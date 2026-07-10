---
title: Worldsheet fermions
number: "17.2"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, worldsheet-fermions]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

The superstring bolts a set of **anticommuting** fields $\psi^\mu(\tau,\sigma)$ onto the string coordinates $X^\mu(\tau,\sigma)$; that one change kills the tachyon, drops the critical dimension from 26 to 10, and — for the first time — lets the spectrum contain fermions.

## One substance versus two

The bosonic string is made of a single substance: its position $X^\mu(\tau,\sigma)$, a wave sloshing along the string. Everything you can excite is a ripple of that position, and ripples of a position are always bosons. This is why the bosonic spectrum contains no electrons — you cannot shake an electron out of a vibrating rope.

The superstring adds a second substance on the same worldsheet: a field $\psi^\mu$ whose values *anticommute* — swap two of them and you pick up a minus sign. That minus sign is the entire personality of a fermion: Pauli exclusion, antisymmetric wavefunctions, spin-$\tfrac12$ statistics. Exciting these fields produces states that behave as **fermions in spacetime**. Adding the one field whose algebra *is* a minus sign is what makes matter — electrons, quarks — possible.

This note is the setup: what the new field is, why "anticommuting" carries all the weight, and where $D=10$ comes from. The sectors and mass formulas are worked in [[Neveu-Schwarz and Ramond sectors]].

## The one new ingredient

For the bosonic string the only dynamical variable is the embedding $X^\mu(\tau,\sigma)$ — where the string sits in spacetime. The superstring adds, for **each** spacetime index $\mu$, a pair of new fields $\psi^\mu_\alpha$ with $\alpha=1,2$:

$$ X^\mu(\tau,\sigma) \quad\longrightarrow\quad \big(\,X^\mu(\tau,\sigma),\ \psi^\mu_\alpha(\tau,\sigma)\,\big). $$

For fixed $\mu$ the two components $\psi^\mu_1,\psi^\mu_2$ together make a single fermion living on the two-dimensional $(\tau,\sigma)$ worldsheet. It carries a spacetime vector index $\mu$, so from the worldsheet's point of view $\psi^\mu$ is a bundle of fermionic fields, one per spacetime direction.

Guard against one conflation: a **worldsheet fermion is not automatically a spacetime fermion.** The word *fermion* here first describes how the field's modes multiply on the sheet — they anticommute. Whether the resulting *particle states* are spacetime fermions (spin-$\tfrac12$, antisymmetric under exchange) is a separate question, settled only after quantization. The superstring answer is yes: part of the state space genuinely transforms as spacetime fermions. This note establishes the worldsheet side; the spacetime payoff is the Ramond zero-mode count in [[Neveu-Schwarz and Ramond sectors]].

## "Anticommuting" is the whole point

The $\psi^\mu_\alpha$ are not ordinary numbers like $X^\mu$. They are **Grassmann** (anticommuting) variables. Two of them, $b_1,b_2$, satisfy

$$ b_1 b_2 = -\,b_2 b_1, \tag{1}$$

the algebra of "swapping two fermionic factors flips the sign." Set $b_1=b_2=b$ and this forces

$$ b^2 = -b^2 \;\Rightarrow\; b^2 = 0. \tag{2}$$

Equation (2) is the Pauli exclusion principle in one line: a fermionic mode used twice gives zero, so it can be occupied at most once. A bosonic creation operator, by contrast, may be applied as many times as you like — a laser piles up photons, but you cannot pile up electrons. Squares vanish and factors anticommute: this is why the $\psi$ modes obey a *fermionic* oscillator algebra rather than a bosonic one.

After mode expansion, the **commutators** of the bosonic $X$ oscillators are replaced by **anticommutators** for the $\psi$ oscillators:

$$ [\alpha_m^I,\alpha_n^J] = m\,\delta^{IJ}\delta_{m+n,0}
\qquad\leadsto\qquad
\{b_r^I,b_s^J\} = \delta^{IJ}\delta_{r+s,0}. \tag{3}$$

The index bookkeeping is the same ($I,J$ transverse, mode numbers adding to zero), but the bracket has changed from $[\,,\,]$ to $\{\,,\,\}$. The $X^I$ modes have occupation $0,1,2,\dots$; the $\psi^I$ modes have occupation $0$ or $1$, forced by (2).

## Light-cone bookkeeping: $\psi^+_\alpha = 0$

Light-cone gauge for the bosonic string set $X^+\propto\tau$ and solved $X^-$ in terms of the transverse $X^I$, leaving only the $D-2$ physical transverse coordinates. The fermions follow the same logic: the gauge condition additionally sets

$$ \psi^+_\alpha = 0, $$

and then $\psi^-_\alpha$ is solved in terms of the transverse fermions $\psi^I_\alpha$. The genuinely independent fields are the transverse sets $X^I$ and $\psi^I_\alpha$. Once superstring consistency fixes $D=10$ (next section), the transverse index runs $I=2,\dots,9$ — eight values, the number that keeps reappearing as $8$ bosons $=8$ fermions.

## Why the critical dimension drops to 10

Both $X^\mu$ and $\psi^\mu_\alpha$ carry a spacetime vector index, so both contribute to the light-cone Lorentz generator $M^{-I}$. As in the bosonic case, quantum Lorentz invariance survives only if these generators still close,

$$ [\,M^{-I},M^{-J}\,] \overset{!}{=} 0, $$

and normal-ordering can spoil the closure. For the bosonic string the closure condition is the anomaly balance

$$ \frac{D-2}{24}=1 \quad\Longrightarrow\quad D=26, \tag{4}$$

with intercept $-a=1$ (mass-formula shift $-1$); this is the content of [[Critical dimension D=26]]. Adding the fermions puts new terms into $M^{-I}$, shifting the arithmetic: the balance becomes $\tfrac{D-2}{8}=1$, so

$$ \boxed{D = 10.} $$

The fermions change the anomaly by exactly the amount that moves the answer from $26$ to $10$. The full superstring oscillator computation is beyond this preview, so the $\tfrac{D-2}{8}=1$ balance is quoted rather than performed — but its shape is honest: the same closure condition, an extra fermionic contribution, a smaller critical dimension.

The same fermionic contribution shows up in a quantity we *can* compute here — the ground-state energy. Each transverse worldsheet field carries a regularized zero-point energy per direction: a boson contributes $-\tfrac1{24}$, and a (half-integer moded, NS) fermion contributes $-\tfrac1{48}$. With eight transverse directions,

$$ \alpha' M^2_{\text{shift}} = 8\left(-\tfrac1{24}-\tfrac1{48}\right)=8\left(-\tfrac1{16}\right)=-\tfrac12. \tag{5}$$

This is why the NS mass formula is shifted down by $-\tfrac12$ rather than the bosonic open-string $-1$ (used in [[Neveu-Schwarz and Ramond sectors]]). The bosonic piece of (5) is the same $-\tfrac1{24}$ that fed the $D=26$ result; the fermionic $-\tfrac1{48}$ is the new ingredient — the same one that pulls the critical dimension down.

## What survives unchanged

The $X^I$ are still quantized exactly as in the bosonic string, so the bosonic oscillators $\alpha^I_{-n}$ are all still present and still act on the ground state. The superstring is not a replacement of the bosonic string but an enrichment: the old bosonic oscillators $\alpha^I_{-n}$ **plus** the new fermionic oscillators (the $b^I_r$ and $d^I_n$ of [[Neveu-Schwarz and Ramond sectors]]). Everything the bosonic core taught still runs; the fermions sit on top.

## Open questions

- The full $D=10$ Lorentz-anomaly computation is quoted, not derived — this note gives its shape (same closure condition, extra fermionic term) and the derivable NS-shift piece (5), but not the complete superstring oscillator algebra. The CFT version ($c_{\text{matter}}=\tfrac{3D}{2}$, ghosts $-26+11$, total $=0$) is the cleaner route and belongs with [[Total central charge and D = 26]].
- The worldsheet-supersymmetric RNS action and its local superconformal gauge structure are the honest reason the word "super" appears; they need machinery beyond this bosonic-first preview.
- That the Ramond ground states form genuine ten-dimensional spacetime spinors is asserted here and only counted (via a Clifford algebra) in [[Neveu-Schwarz and Ramond sectors]]; the representation-theory step is deferred.

## Exercise

The bosonic zero-point shift for the open bosonic string in $D$ dimensions is $-\tfrac{D-2}{24}$, giving $-1$ at $D=26$. Take the superstring rule from (5): each transverse **worldsheet boson** contributes $-\tfrac1{24}$ and each transverse **NS worldsheet fermion** contributes $-\tfrac1{48}$. Working in general $D$ (so there are $D-2$ transverse directions of each), find the NS ground-state shift as a function of $D$, then confirm that $D=10$ is the dimension where it equals exactly $-\tfrac12$. What would the shift be if you forgot the fermions?

> [!success]- Solution
> With $D-2$ transverse bosons and $D-2$ transverse NS fermions, the total shift is
> $$ \alpha' M^2_{\text{shift}} = (D-2)\left(-\tfrac1{24}-\tfrac1{48}\right) = (D-2)\left(-\tfrac{3}{48}\right) = -\,\frac{D-2}{16}. $$
> Setting this equal to $-\tfrac12$:
> $$ -\frac{D-2}{16} = -\frac12 \;\Longrightarrow\; D-2 = 8 \;\Longrightarrow\; D=10. \checkmark $$
> So the $-\tfrac12$ NS shift and the ten transverse-plus-two dimensions are the *same* statement, read two ways. Forgetting the fermions leaves only the bosonic $-\tfrac{D-2}{24}$, which at $D=10$ would be $-\tfrac{8}{24}=-\tfrac13$ — the wrong shift, because the fermionic $-\tfrac1{48}$ per direction is precisely what turns $-\tfrac13$ into $-\tfrac12$. (Consistency note: the actual anomaly balance $\tfrac{D-2}{8}=1$ that *forces* $D=10$ is quoted, not derived here; this exercise checks that the derivable NS-shift arithmetic lands on the same $D$.)
