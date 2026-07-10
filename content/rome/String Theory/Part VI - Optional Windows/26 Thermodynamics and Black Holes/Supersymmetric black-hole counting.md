---
title: Supersymmetric black-hole counting
number: "26.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, susy-microstates]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

For one special black hole — extremal, 5D, supersymmetric — you can literally count its quantum microstates as a gas of open strings and get $S_{bh}/k = 2\pi\sqrt{N Q_1 Q_5}$, coefficient and all, matching the answer gravity gives.

## What are we counting?

A black hole has entropy $S = k\ln(\text{number of microstates})$, but classically it has no visible microstates — just a mass and a few charges. So the question is sharp: what are we counting? For this black hole the answer is concrete. Replace it with a pile of D-branes carrying a fixed momentum, and let open strings share that momentum among themselves. The number of ways to divide the momentum is a **partition count**, and we already know partition counts grow like $e^{c\sqrt{N}}$ ([[Partitions and oscillator counting]]). Take the log, and out comes exactly the Bekenstein–Hawking entropy. The black hole *is* the pile of strings; the entropy is the number of ways they can be excited.

The catch — and the reason this works where the Schwarzschild case only worked parametrically ([[Entropy-area relation]]) — is that we count the strings at **zero coupling** (no gravity, so it is just combinatorics) and then claim the count is unchanged at the coupling where the black hole actually exists. That leap is legal only because **supersymmetry** protects the count. This is the Strominger–Vafa calculation (1996), string theory's one quantitative, coefficient-level statement about black holes.

## Why Schwarzschild wasn't enough

The correspondence-point argument of [[Entropy-area relation]] matched string and black-hole entropy only in *scaling*: the powers of the coupling agree, the numerical coefficient does not. The obstruction is sharp. The free-string count is valid at coupling $g_s=0$; a black hole needs $g_s\neq 0$ (gravity, since $G^{(10)}\sim g_s^2(\alpha')^4$); and turning on $g_s$ generically reshuffles which states exist and how many. So the $g_s=0$ count and the $g_s\neq 0$ count are different numbers, and there is no reason for their leading coefficients to line up.

Supersymmetry breaks this deadlock. For a black hole that preserves some SUSY, one can build a **protected index** — a specific weighted count of states that is guaranteed invariant as $g_s$ is dialed. Compute it at $g_s=0$ (easy), trust it at $g_s\neq 0$ (guaranteed). That is the BPS idea, and it is what makes the coefficient survive the trip from weak to physical coupling.

## The black hole and its exact entropy

Start with type IIB superstring theory in 10D and compactify five dimensions ($x^5,\dots,x^9$) on circles, leaving a 5D effective spacetime $M^5$ (coordinates $x^0,\dots,x^4$). The black hole carries **three integer charges** $Q_1, Q_5, N$ and is **extremal**: minimal mass for its charges, so zero temperature, no radiation, and a large fraction of the SUSY preserved. Its horizon is a 3-sphere of finite volume $A_H$, and the 5D analog of the area law gives

$$\frac{S_{bh}}{k} = \frac{A_H}{4G^{(5)}} = 2\pi\sqrt{N Q_1 Q_5}. \tag{1}$$

The striking feature: the entropy depends **only on the charges** — not on the string coupling $g_s$, not on the sizes of the compactification circles. That charge-only rigidity is the macroscopic fingerprint of a protected quantity, and it is the clue that a coupling-independent microscopic count exists to reproduce it. (The supergravity solution that gives $A_H$ is quoted, not derived here — see the deferrals below.)

## The brane construction at zero coupling

At $g_s=0$ assemble the configuration from D-branes ([[Definition of a Dp-brane|D-branes]], [[D-brane charge as a preview]], [[T-duality]]):

- $Q_1$ **D1-branes** wrapping the circle $x^5$.
- $Q_5$ **D5-branes** wrapping all five compact circles.
- All branes coincident, so from $M^5$ they look like a **single point** — the future black-hole center.

That fixes the charges $Q_1$ and $Q_5$. The third charge $N$ is **momentum** around $x^5$,

$$p^5 = \frac{N}{R}, \tag{2}$$

quantized in units of $1/R$ on a circle of radius $R$. The D-branes cannot carry this momentum: they sit at fixed positions and are translationally invariant along $x^5$, so they have no way to move along it. The momentum must live on the **open strings** stretched between the branes. Here is the source of the microstates: $N$ units of momentum can be split among many open strings in many ways, and each way is a distinct state. Counting those ways is the entire computation.

SUSY imposes one constraint that we take on faith: **all the open strings must carry their momentum in the same direction** along $x^5$. (Physically, only the co-directional configurations saturate the BPS bound and preserve SUSY; the derivation is deferred.)

## The count is a partition

Three facts about the coincident D1/D5 system, quoted from superstring quantization:

1. Strings with both ends on D1-branes — type $(1,1)$ — and both ends on D5-branes — type $(5,5)$ — become **massive** in this bound state. Massive strings don't get excited at the energies that matter, so drop them.
2. A string stretching from a D1 to a D5 — type $(1,5)$ — together with its orientation-reverse $(5,1)$, has **8 ground states: 4 bosonic and 4 fermionic**. (This is the $4{+}4$ split that will matter below.)
3. The $Q_1$ D1-branes can join into a single D1 wound $Q_1$ times around $x^5$; likewise the $Q_5$ D5-branes into one D5 wound $Q_5$ times. The charges are unchanged.

**Preliminary count (valid only when $N\gg Q_1Q_5$).** Partition $N$ among the open strings. For each part we choose which of the $Q_1$ D1-branes and which of the $Q_5$ D5-branes the string stretches between — that's $Q_1Q_5$ choices — and then whether the excitation is one of the 4 bosonic or one of the 4 fermionic ground states. So the excitation carries $b = 4Q_1Q_5$ bosonic labels and $f = 4Q_1Q_5$ fermionic labels. Feed these into the mixed-statistics partition asymptotic from [[Partitions and oscillator counting]],

$$\ln P(N;b,f) \simeq 2\pi\sqrt{\frac{N}{6}\left(b + \frac{f}{2}\right)}, \tag{3}$$

whose one nontrivial ingredient is that **a fermionic label counts half as much as a bosonic one** (each contributes to the density of states, but the fermionic exclusion halves its weight). Then

$$\frac{S_{\rm str}}{k} = \ln P(N;\,4Q_1Q_5,\,4Q_1Q_5) \simeq 2\pi\sqrt{\frac{N}{6}\left(4Q_1Q_5 + \tfrac12\cdot 4Q_1Q_5\right)} = 2\pi\sqrt{\frac{N}{6}\cdot 6Q_1Q_5} = 2\pi\sqrt{N Q_1 Q_5}. \tag{4}$$

The effective label count is $b + f/2 = 4Q_1Q_5 + 2Q_1Q_5 = 6Q_1Q_5$, and the $6$ inside the square root cancels it exactly. This is agreement with the gravity answer (1) down to the coefficient. That the $4{+}4$ SUSY split produces precisely the effective $6$ that cancels the $1/6$ is the small miracle of the calculation — and, as the exercise shows, it fails if the split is anything else.

## Removing the restriction

Count (4) assumed $N\gg Q_1Q_5$, needed so that $N$ dominates both label counts in the asymptotic formula. To get the general result, use fact 3: join the branes into **one** long D1 (wound $Q_1$ times) and **one** long D5 (wound $Q_5$ times).

Now a $(1,5)$ string must wind further before it closes up on itself. Its D1 endpoint returns to its starting point after $Q_1$ trips around $x^5$; its D5 endpoint after $Q_5$ trips; both endpoints return together only after $Q_1Q_5$ trips. The effective circle it lives on is $Q_1Q_5$ times longer, so its momentum is quantized in the **finer unit** $1/(Q_1Q_5\,R)$. Writing the same total momentum (2) with this finer unit exposed,

$$p^5 = \frac{N Q_1 Q_5}{Q_1 Q_5\, R}, \tag{5}$$

says: the integer to be partitioned is now $N Q_1 Q_5$, in units of $1/(Q_1Q_5 R)$. (Equation (5) is of course still $N/R$; its point is purely to display the partitioned integer as $NQ_1Q_5$.) And because there is now only **one** long D1 and one long D5, there is only one kind of inter-brane string, so no $Q_1Q_5$ factor of "which brane" choices — just the 8 ground states, $b=f=4$:

$$\frac{S_{\rm str}}{k} = \ln P(NQ_1Q_5;\,4,\,4) \simeq 2\pi\sqrt{\frac{NQ_1Q_5}{6}\left(4 + \tfrac12\cdot 4\right)} = 2\pi\sqrt{\frac{NQ_1Q_5}{6}\cdot 6} = 2\pi\sqrt{N Q_1 Q_5}. \tag{6}$$

Same answer, now **without** the $N\gg Q_1Q_5$ restriction (in the large-charge regime where the asymptotic (3) holds). The bookkeeping traded a bigger label count $6Q_1Q_5$ for a bigger integer $NQ_1Q_5$; the product $NQ_1Q_5$ is invariant, so the entropy is too. That invariance is why the two counts agree — and why the answer is genuinely the black hole's, not an artifact of the coprime trick.

## What supersymmetry buys, and what it costs

The load-bearing move is: **count at $g_s=0$, claim the answer at $g_s\neq 0$.** That is legitimate only because the relevant states are BPS and the count is a protected index, invariant under changing $g_s$. Everything upstream — the partition arithmetic — is honest, weak-coupling combinatorics you could in principle do by hand. The single deferred physics input is that this weak-coupling degeneracy is the *same number* that counts the black hole's microstates at physical coupling. Grant that, and the combinatorics delivers the exact leading coefficient. Without SUSY (the Schwarzschild case), the count is not protected and you get only parametric agreement.

Honestly flagged, the claims this note **asserts but the course cannot derive**:

- **The black-hole solution and its horizon area $A_H$** in (1) — a type IIB supergravity result.
- **BPS protection** — that the $g_s=0$ degeneracy equals the physical-coupling count. This is *the* SUSY-dependent step, resting on the BPS bound and a Witten-index argument beyond this course.
- **The $4{+}4$ ground states** of the $(1,5)$ string — a superstring quantization fact (NS/R sectors, GSO projection); superstrings are beyond this bosonic-focused course.
- **The co-directional momentum constraint** — a consequence of preserving SUSY, asserted not derived.

## Open questions

- Why does extremality force the open strings to be co-directional? Trace it to the BPS bound $M=|Z_{\rm central}|$ and which states saturate it — anti-aligned momenta would add energy without adding charge, breaking extremality.
- The match is for *leading* entropy. Subleading (logarithmic) corrections to $S$ are a modern topic; do they match too? (Beyond scope.)
- Pinpoint the exact step in [[Entropy-area relation]] that fails without SUSY: it is "the $g_s=0$ count survives to $g_s\neq 0$." SUSY is precisely what repairs it.
- The near-horizon geometry is $\mathrm{AdS}_3\times S^3$, and this whole count is secretly a 2D CFT (Cardy formula) calculation. That reframing is the deep modern view and the bridge to [[Gauge-gravity duality|AdS–CFT correspondence]] — note and move on.

## Exercise

The $(1,5)$ string's $4$ bosonic $+$ $4$ fermionic ground states were the crucial input. Suppose instead — hypothetically, in a non-supersymmetric caricature — that the inter-brane string had **8 bosonic and 0 fermionic** ground states, keeping everything else the same. Redo the general count (6) and show it **overshoots** the black-hole entropy. By what factor? What does this tell you about the role of the $4{+}4$ split?

> [!success]- Solution
> In the long-string count the string carries $b$ bosonic and $f$ fermionic labels with $b+f$ equal to the number of ground states. Supersymmetry gives $b=f=4$, so the effective label count is
> $$b + \frac{f}{2} = 4 + 2 = 6,$$
> and the $6$ cancels the $1/6$ in (3), leaving $2\pi\sqrt{NQ_1Q_5}$ exactly.
>
> With $8$ bosonic and $0$ fermionic ground states instead, $b=8$, $f=0$, so the effective label count is
> $$b + \frac{f}{2} = 8 + 0 = 8,$$
> and
> $$\frac{S_{\rm str}}{k} \simeq 2\pi\sqrt{\frac{NQ_1Q_5}{6}\cdot 8} = 2\pi\sqrt{\frac{4}{3}\,NQ_1Q_5} = \frac{2}{\sqrt{3}}\,\cdot 2\pi\sqrt{NQ_1Q_5}.$$
> This **overshoots** the black-hole entropy (1) by the factor $2/\sqrt{3} \approx 1.15$.
>
> The lesson: the coefficient match is not automatic — it is fixed by the *precise* ground-state content. Only the supersymmetric $4$ bosonic $+$ $4$ fermionic split gives effective count $4 + \tfrac{1}{2}\cdot 4 = 6$, the exact value that cancels the $1/6$. Because a fermion counts **half** a boson in (3), the total $8$ isn't what matters — the weighted combination $b+f/2$ is, and SUSY tunes it to $6$. Merely having $8$ ground states, split any other way, gives the wrong number.
