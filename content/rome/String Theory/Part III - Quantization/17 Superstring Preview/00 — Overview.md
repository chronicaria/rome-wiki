---
title: 00 — Overview
number: "17.0"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, superstring-overview]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Map of Module 17. The bosonic string is a broken practice model; adding one new ingredient, the worldsheet fermion $\psi^\mu$, cures all three of its defects at once and turns it into the superstring.

## Three diseases of the bosonic string

You reached the end of Part III with a fully quantized **bosonic** string and its spectrum from the [[Mass-shell relation]]. It is beautiful and unphysical, for three independently fatal reasons:

1. **Only bosons.** Every state in the bosonic spectrum is a boson, but matter is made of fermions — electrons, quarks, neutrinos. A theory with no fermions cannot describe our world.
2. **A tachyon.** The ground state has $M^2 < 0$. A negative mass-squared is not a fast particle; it is an *instability*. The vacuum you expanded around is a hilltop, not a valley, and the theory wants to roll off it — like a pencil balanced on its tip, where $M^2<0$ says the wobble grows instead of oscillating.
3. **Twenty-six dimensions.** Consistency forced $D=26$, far more than the world seems to want and a great deal to hide.

## The one repair: worldsheet fermions

The fix is a single new ingredient. Alongside each coordinate $X^\mu(\tau,\sigma)$ — the string's position — put an **anticommuting** partner field $\psi^\mu(\tau,\sigma)$ living on the same $(\tau,\sigma)$ worldsheet:

$$ X^\mu(\tau,\sigma) \;\longrightarrow\; \big(\,X^\mu(\tau,\sigma),\ \psi^\mu(\tau,\sigma)\,\big). $$

"Anticommuting" is the entire point: any two Grassmann values $\theta_1,\theta_2$ satisfy $\theta_1\theta_2 = -\,\theta_2\theta_1$, so a single value used twice vanishes ($\theta^2=0$). That is the Pauli exclusion principle written into the algebra, and it is what makes some of the resulting states behave as **fermions**. Quantizing this enriched string — bosonic oscillators from $X$ **plus** fermionic oscillators from $\psi$ — is what the rest of the module does. Three payoffs cure the three diseases:

1. **$D=10$, not 26.** The fermions add their own term to the same Lorentz-anomaly balance that fixed $D=26$ before; the new arithmetic lands on 10.
2. **The tachyon is projected out.** The 17.1 [[GSO projection]] — a clean truncation of the spectrum — deletes exactly the would-be tachyonic state, so the spectrum now starts at $M^2=0$.
3. **Fermions appear, and boson count = fermion count.** The periodic (Ramond) sector supplies spacetime fermions; after GSO the surviving spectrum has equal numbers of bosons and fermions at every mass level. That balance is **spacetime supersymmetry**.

## Honest scope: what this preview does and does not prove

The module makes two grades of claim, and keeps them apart.

- **Derived from the bosonic core**, re-checkable with what you already have: the sector split from boundary conditions, the mode expansions, the Clifford-algebra count of Ramond ground states, the massless spectra, and the $8=8$ boson/fermion match at the massless level.
- **Quoted as a superstring fact**, with its limits marked, not rebuilt from scratch: the critical value $D=10$, the full consistency of the GSO projection, and that Ramond states are genuine ten-dimensional spacetime spinors. These need the RNS/superconformal machinery, which lives beyond this bosonic-first vault.

The goal is usable intuition, not a finished RNS course. Read $D=10$ and GSO below as signposts, not theorems.

## Sublesson notes

- 17.2 [[Worldsheet fermions]] — the new anticommuting field $\psi^\mu$, why "anticommuting" is the whole story, the light-cone bookkeeping $\psi^+=0$, and why the critical dimension slides to 10.
- 17.3 [[Neveu-Schwarz and Ramond sectors]] — one fermion field, two boundary conditions: antiperiodic (NS, half-integer modes, a bosonic tower with $\alpha'M^2=-\tfrac12+N^\perp$) versus periodic (R, integer modes, zero modes forming a Clifford algebra and $2^4$ spinor ground states, $\alpha'M^2=N^\perp$).
- 17.1 [[GSO projection]] — the truncation $P_\pm=\tfrac12(1\pm(-1)^F)$ that keeps one fermion-parity, kills the NS tachyon, and balances bosons against fermions.
- 17.4 [[Type II closed-string orientation]] — gluing left and right movers into NS-NS, NS-R, R-NS, R-R; how NS-NS reproduces the graviton/$B$-field/dilaton; the $128=128$ match; and how relative Ramond chirality splits type IIA from IIB.

## Open questions

- The $D=10$ superstring critical dimension is recorded here, not derived. The bosonic analogue is [[Critical dimension D=26]]; the CFT/anomaly restatement is [[Total central charge and D = 26]]. The honest gap: the superstring Lorentz-anomaly computation with the extra $\psi$ modes is not done in this vault.
- The GSO projection is used as a rule. Its full justification — worldsheet-fermion parity, mutual consistency of sectors, modular invariance — belongs to the RNS treatment, beyond a bosonic-first course.
- That Ramond zero modes build genuine ten-dimensional spacetime spinors is sketched only through the light-cone Clifford-algebra count in 17.3 [[Neveu-Schwarz and Ramond sectors]]; the full Lorentz representation theory is deferred.

## Exercise

Answer with no notes, then check yourself: **Why does a physically realistic string theory need more than the bosonic string — and what single ingredient does the superstring add to fix it?** State the three diseases (and *why each is fatal*), name the one new field, and list the three symptoms it relieves. Then mark which of those three relief claims this module actually *derives* versus *quotes*.

> [!success]- Solution
> **Three fatal diseases of the bosonic string:**
> 1. *Only bosons.* Its entire spectrum is bosonic, so no electrons, quarks, or neutrinos can emerge. Fatal because real matter is fermionic — the theory simply lacks the particles the world is built from.
> 2. *A tachyon.* The ground state has $M^2<0$. Fatal not because anything moves faster than light but because it signals an **unstable vacuum**: the theory is perched on a hilltop and rolls off. (The pencil-on-its-tip picture: $M^2<0$ means the small wobble grows.)
> 3. *Twenty-six dimensions.* Consistency forces $D=26$. Fatal as physics: far from the observed dimensionality and a great deal to hide.
>
> **The one new ingredient:** an anticommuting **worldsheet fermion** $\psi^\mu(\tau,\sigma)$ paired with each coordinate $X^\mu$. Anticommuting means any two Grassmann values satisfy $\theta_1\theta_2=-\theta_2\theta_1$, hence $\theta^2=0$ — Pauli exclusion in the algebra — which is what lets the quantized string carry fermionic states.
>
> **Three symptoms relieved:**
> 1. The critical dimension becomes $D=10$ (the $\psi$ modes shift the Lorentz-anomaly balance).
> 2. The **GSO projection** deletes the would-be tachyon; the lightest surviving NS state is massless, so the spectrum starts at $M^2=0$.
> 3. The Ramond sector supplies spacetime **fermions**, and after GSO the boson and fermion counts match at every mass level — spacetime **supersymmetry**.
>
> **Derived vs. quoted:** All three relief *statements* are quoted at preview level — $D=10$, the GSO consistency, and full spacetime supersymmetry are asserted, not proved here. What the module genuinely *derives* is the supporting scaffolding: the NS/R boundary-condition split, the two mass formulas ($\alpha'M^2=-\tfrac12+N^\perp$ and $\alpha'M^2=N^\perp$), the $16=2^4$ Ramond ground-state count, and the concrete $8=8$ (open) / $128=128$ (closed) boson–fermion match at the massless level, which is the visible face of that supersymmetry.
