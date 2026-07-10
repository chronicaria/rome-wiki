---
title: Polarizations of massless spin-1 and spin-2
number: "4.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polarizations]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Light-cone gauge strips the photon $A_\mu$ to $D-2$ transverse polarizations and the graviton $h_{\mu\nu}$ to a symmetric traceless transverse tensor with $\tfrac12 D(D-3)$ polarizations; each surviving transverse field quantizes into one oscillator species per polarization.

Prereqs: [[One-particle states]], [[Light-cone gauge]], [[Mass-shell relation]].

## Where the extra components go

A scalar has one component, so it has one particle state per momentum: no bookkeeping needed. The photon field $A_\mu$ has $D$ components and the graviton $h_{\mu\nu}$ has more — yet a photon has only $2$ polarizations and a gravitational wave only $2$ (in our $D=4$ world). Where do the extra components go?

Two places, and neither is a physical particle:

- **Gauge redundancy** — some components are not new physics, just the *same* physical configuration described in more than one way. Shifting $A_\mu$ by a gradient, or $h_{\mu\nu}$ by a coordinate wiggle, changes the components but not a single measurable thing. This is over-description, and we are free to delete it.
- **Constraints** — once we delete the redundancy, the field equation *solves* some of the remaining components in terms of the others. Those are not independent data; they are determined.

A rigid rod in 3D makes the constraint concrete: its two endpoints carry $6$ coordinates, but the fixed length ties one combination down, leaving $5$ genuine degrees of freedom. Light-cone gauge is the coordinate choice that exposes both mechanisms at once: the redundancy is spent deleting the $+$ components, the constraints then determine the $-$ components, and what survives is the **transverse** field. The physical content of a massless field lives entirely in its transverse directions, so counting polarizations is tensor combinatorics on $D-2$ slots. That same $D-2$ transverse count reappears line for line when we quantize the string.

> **Light-cone coordinates.** Split a vector index $\mu \in \{+, -, I\}$, where $I = 2,\dots,D-1$ labels the $D-2$ transverse directions and $x^\pm = (x^0 \pm x^1)/\sqrt2$. The metric is off-diagonal in the $\pm$ block: for any two vectors, $a\cdot b = -a^+ b^- - a^- b^+ + a^I b^I$ (mostly-plus signature). We always assume $p^+ \neq 0$ — this is what makes the gauge-fixing and the constraint-solving possible.

## Photon: the Maxwell field $A_\mu$

**Field equation and gauge symmetry.** From the field strength $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$, the source-free Maxwell equation $\partial_\nu F^{\mu\nu} = 0$ is, in momentum space (Fourier transforming $A_\mu(x) = \int \frac{d^Dp}{(2\pi)^D}e^{ip\cdot x}A_\mu(p)$),

$$ p^2 A^\mu - p^\mu (p\cdot A) = 0. \tag{1}$$

Every term carries two powers of momentum and there is no term proportional to $A^\mu$ alone — no mass term. So any physical wave that survives will satisfy $p^2 = 0$: **the Maxwell field is massless**, not by assumption but because the equation has nowhere to put a mass. $F_{\mu\nu}$ is built to be invariant under

$$ \delta A_\mu(x) = \partial_\mu \epsilon(x) \quad\Longleftrightarrow\quad \delta A_\mu(p) = i p_\mu\, \epsilon(p). \tag{2}$$

This is the gauge redundancy: shifting $A_\mu$ by a gradient leaves $F_{\mu\nu}$, hence all physics, untouched.

**Fix the gauge.** In light-cone components the gauge shift (2) of $A^+$ is $\delta A^+ = i p^+ \epsilon$. Since $p^+ \neq 0$, choose $\epsilon = i A^+/p^+$ to cancel it exactly:

$$ \boxed{\ A^+(p) = 0\ } \qquad \text{(light-cone gauge for Maxwell).} \tag{3}$$

This spends all the gauge freedom — one function's worth of redundancy, one condition; with $p^+ \neq 0$, no further transformation preserves (3).

**Solve the constraints.** Take $\mu = +$ in (1). By the gauge condition (3) the $p^2 A^+$ term drops and we get $p^+(p\cdot A) = 0$, hence (using $p^+\neq0$)

$$ p\cdot A = 0. $$

Expand this with the light-cone metric, $p\cdot A = -p^+ A^- - p^- A^+ + p^I A^I$, and set $A^+ = 0$:

$$ A^- = \frac{1}{p^+}\, p^I A^I. \tag{4}$$

So $A^-$ is **not independent** — the constraint hands it to us in terms of the transverse $A^I$. Now feed $p\cdot A = 0$ back into (1): the second term vanishes and only $p^2 A^\mu = 0$ survives. For $\mu = +$ this is trivial ($A^+=0$), and for $\mu = -$ it follows once we know the transverse case, since (4) makes $A^-$ a multiple of the $A^I$. The only genuine content is

$$ p^2 A^I(p) = 0. \tag{5}$$

Each transverse $A^I$ obeys the **massless-scalar equation** (5). For $p^2 \neq 0$ it forces $A^I = 0$, and then (4) kills $A^-$ too — the entire field vanishes, so an off-shell Maxwell field is pure gauge. On the shell $p^2 = 0$ the $A^I$ are free. **The physical content is the $D-2$ transverse fields $A^I$**, each a massless scalar. Hence $D-2$ degrees of freedom per mass-shell point.

**Photon states.** Quantize each $A^I$ exactly as the scalar in [[One-particle states]]: it gives one oscillator species $a^I_p, a^{I\dagger}_p$ per transverse direction. The one-photon states are

$$ \boxed{\ \text{One photon:}\quad \sum_{I=2}^{D-1}\xi_I\, a^{I\dagger}_{p^+,p_T}\,|\Omega\rangle\ } \tag{6}$$

The **polarization vector** $\xi_I$ names which linear combination of the $D-2$ transverse oscillators is excited. In $D=4$ that is $2$ states — the two familiar transverse polarizations of light. The would-be longitudinal and timelike photons were never lost particles: one was gauge (deleted), one was constraint (determined).

## Graviton: the linearized metric $h_{\mu\nu}$

Gravity's field is the spacetime metric $g_{\mu\nu}$. In a weak field write

$$ g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}, \qquad h_{\mu\nu} = h_{\nu\mu}, $$

with $h_{\mu\nu}$ a small symmetric fluctuation — the spin-2 analog of the photon field. We use only its **free, linearized** equation, not full nonlinear general relativity.

**Field equation and gauge symmetry.** The linearized, source-free Einstein equation in momentum space is

$$ S^{\mu\nu}(p) \equiv p^2 h^{\mu\nu} - p_\rho\big(p^\mu h^{\nu\rho} + p^\nu h^{\mu\rho}\big) + p^\mu p^\nu h = 0, \qquad h \equiv \eta_{\mu\nu}h^{\mu\nu}. \tag{7}$$

Again every term has two derivatives and none is a bare $h^{\mu\nu}$: no mass term, so a surviving excitation is massless. The gauge parameter is now a **vector** $\epsilon^\mu$ — this is linearized coordinate reparameterization invariance, the statement that relabeling spacetime points cannot change physics:

$$ \delta h^{\mu\nu}(p) = i p^\mu \epsilon^\nu + i p^\nu \epsilon^\mu. \tag{8}$$

That (7) is invariant under (8) is the spin-2 version of Maxwell gauge invariance. (Direct check: $\delta h = 2i\,p\cdot\epsilon$, and substituting (8) into (7) every term cancels, so $\delta S^{\mu\nu}=0$.) One vector's worth of redundancy — $D$ functions — is exactly what we will spend gauging away the $+$ components.

**Fix the gauge.** The symmetric $h^{\mu\nu}$ has components $(h^{IJ}, h^{-I}, h^{--}, h^{+I}, h^{+-}, h^{++})$. Under (8), each component carrying a $+$ index shifts by a term proportional to $p^+ \neq 0$, so the $D$ gauge functions are spent in sequence — $\epsilon^+$ cancels $h^{++}$, then $\epsilon^-$ cancels $h^{+-}$, then the $\epsilon^I$ cancel $h^{+I}$:

$$ \boxed{\ h^{++} = h^{+-} = h^{+I} = 0\ } \qquad \text{(light-cone gauge for gravity).} \tag{9}$$

This is the direct analog of $A^+ = 0$: one gauge condition per gauge function.

**Solve the constraints.** Take $\mu = \nu = +$ in (7). With the $+$ components gone by (9), only the last term survives: $(p^+)^2 h = 0$, so the **trace vanishes**, $h = 0$. Now $h = \eta_{\mu\nu}h^{\mu\nu} = -2h^{+-} + h^{II}$, and $h^{+-} = 0$ in our gauge, so

$$ h^{II} = 0 \qquad\Longrightarrow\qquad \text{the transverse block } h^{IJ} \text{ is traceless.} \tag{10}$$

With $h = 0$, equation (7) reduces to $p^2 h^{\mu\nu} - p^\mu(p_\rho h^{\nu\rho}) - p^\nu(p_\rho h^{\mu\rho}) = 0$. Setting $\mu = +$ gives $p^+(p_\rho h^{\nu\rho}) = 0$, hence the constraint

$$ p_\rho h^{\nu\rho} = 0. \tag{11}$$

For $\nu = I$, expand (11): $-p^+ h^{-I} + p_J h^{IJ} = 0$, so $h^{-I} = \frac{1}{p^+}p_J h^{IJ}$. For $\nu = -$ likewise $h^{--} = \frac{1}{p^+}p_I h^{-I}$. Both minus-blocks are **determined** by the transverse $h^{IJ}$ — constraint data, not independent. What is left of the field equation, for transverse indices, is again the massless-scalar equation

$$ p^2 h^{IJ}(p) = 0. \tag{12}$$

For $p^2 \neq 0$, (12) forces $h^{IJ} = 0$ and the constraints kill everything else — pure gauge again. On the shell the transverse block is free. **Physical content: a symmetric, traceless, transverse tensor $h^{IJ}$.**

**Counting.** $h^{IJ}$ is a symmetric traceless $(D-2)\times(D-2)$ matrix. Symmetric gives $\tfrac12(D-2)(D-1)$ entries; tracelessness removes one:

$$ \boxed{\ n(D) = \tfrac12(D-2)(D-1) - 1 = \tfrac12 D(D-3)\ } \tag{13}$$

Values: $n(4) = 2$, $n(5) = 5$, $n(10) = 35$, $n(26) = 299$. In $D=4$ the graviton has exactly $2$ polarizations — the two helicities of a gravitational wave. That this matches the photon's $D-2 = 2$ is a four-dimensional coincidence; (13) separates the two counts in every other dimension.

**Graviton states.** Quantize each independent component of $h^{IJ}$ into oscillators $a^{IJ}_p, a^{IJ\dagger}_p$. One-graviton states are

$$ \boxed{\ \text{One graviton:}\quad \sum_{I,J=2}^{D-1}\xi_{IJ}\, a^{IJ\dagger}_{p^+,p_T}\,|\Omega\rangle,\qquad \xi_{II} = 0\ } \tag{14}$$

The **polarization tensor** $\xi_{IJ}$ is symmetric and traceless with exactly $n(D)$ independent components — the spin-2 analog of $\xi_I$ in (6), carrying two transverse indices because the graviton is spin-2. The classical tracelessness (10) has become the tracelessness condition $\xi_{II}=0$ on the polarization tensor.

## What "spin-2 is gravity" does and does not mean here

This note proves a **free-field dictionary** entry: a massless symmetric tensor with gauge symmetry (8) carries exactly the polarization content of a graviton. That is enough to *identify* the string's massless closed-string tensor state as "the graviton" at the free level. It is **not** a derivation of Einstein's equations.

The interacting statement "massless spin-2 forces general relativity" needs more input: a massless spin-2 field couples consistently only to a conserved symmetric source (the [[Stress-energy tensor as momentum flow]]); it carries energy-momentum so it must couple to its own source; iterating that self-coupling turns the linear gauge symmetry (8) into full nonlinear coordinate invariance, whose unique two-derivative completion is Einstein gravity (up to field redefinitions and a cosmological term). That argument uses locality, Lorentz invariance, and a low-energy two-derivative truncation — it is a signpost, not a theorem provable by polarization counting. We return to it via the closed-string massless spectrum (Module 16) and worldsheet consistency (Module 25).

## Comparison table

| field | spin | mass | gauge transf. | light-cone gauge | physical field | physical dof | $D=4$ | $D=26$ | one-particle state |
|---|---|---|---|---|---|---|---|---|---|
| scalar $\phi$ | 0 | $m$ | none | — | $\phi$ | $1$ | $1$ | $1$ | $a^\dagger_{p^+,p_T}\lvert\Omega\rangle$ |
| photon $A_\mu$ | 1 | $0$ | $\delta A_\mu = \partial_\mu\epsilon$ | $A^+ = 0$ | $A^I$ transverse | $D-2$ | $2$ | $24$ | $\sum_I \xi_I\, a^{I\dagger}\lvert\Omega\rangle$ |
| graviton $h_{\mu\nu}$ | 2 | $0$ | $\delta h_{\mu\nu} = \partial_\mu\epsilon_\nu + \partial_\nu\epsilon_\mu$ | $h^{++}=h^{+-}=h^{+I}=0$ | $h^{IJ}$ sym. traceless transverse | $\tfrac12 D(D-3)$ | $2$ | $299$ | $\sum_{IJ}\xi_{IJ}\, a^{IJ\dagger}\lvert\Omega\rangle,\ \xi_{II}=0$ |

The pattern: **physical states are transverse-tensor oscillators on the vacuum**, with tensor rank equal to spin and the symmetry/trace conditions on $\xi$ doing the counting. When we quantize the closed string, its massless level holds $\alpha^I_{-1}\bar\alpha^J_{-1}|p^+,\vec p_T\rangle$: the symmetric-traceless part is the graviton state (14), the antisymmetric part is a [[Kalb-Ramond field|Kalb–Ramond field]] $B_{\mu\nu}$, the trace is the dilaton. The value $D=26$ is *not* fixed by this counting — it comes later from quantum Lorentz/conformal consistency. This note is only the field-theory half of the dictionary.

## Open questions

- Deriving (7) from the Einstein–Hilbert action is deferred to the low-energy effective-action notes; the polarization count needs only the linearized equation and its gauge invariance.
- The representation-theory meaning of "spin" is the massless little-group story. Light-cone gauge gives the same count without that machinery.
- "Spin-2 implies GR" needs the interaction assumptions above; it is not proved by counting.

## Exercise

A student proposes that a massless **spin-3** field in $D$ dimensions is a symmetric transverse tensor $h^{IJK}$ (three transverse indices), traceless on every pair of indices. Using only the light-cone logic of this note, count its physical polarizations $n_3(D)$, then evaluate at $D=4$ and $D=26$. (Hint: the number of fully symmetric rank-$s$ tensors in $n$ slots is $\binom{n+s-1}{s}$; a single trace condition removes one full lower-rank symmetric tensor.)

> [!success]- Solution
> The physical field lives on the $D-2$ transverse directions, so set $n = D-2$ slots. A symmetric rank-3 tensor in $n$ slots has
> $$ \binom{n+2}{3} = \frac{n(n+1)(n+2)}{6} $$
> independent components. Tracelessness "on every pair" for a symmetric tensor is a single symmetric-tensor condition: contracting any two indices with $\delta_{IJ}$ gives one symmetric **rank-1** tensor (a vector) that must vanish, removing $\binom{n}{1} = n$ components. So
> $$ n_3(D) = \binom{n+2}{3} - n = \frac{n(n+1)(n+2)}{6} - n = \frac{n(n^2 + 3n - 4)}{6} = \frac{n(n-1)(n+4)}{6}, \qquad n = D-2. $$
> **Check the pattern.** For a general symmetric traceless transverse rank-$s$ tensor the count is $\binom{n+s-1}{s} - \binom{n+s-3}{s-2}$. At $s=1$ this is $n = D-2$ (photon, no trace to remove) and at $s=2$ it is $\tfrac12 n(n+1) - 1 = \tfrac12 D(D-3)$ (the graviton, eq. (13)) — both reproduce the note.
> **Evaluate.** With $n = D-2$:
> - $D = 4$: $n = 2$, so $n_3 = \frac{2\cdot 1\cdot 6}{6} = 2$. (A massless field of any spin $s \geq 1$ has exactly $2$ states in $D=4$ — the two helicities $\pm s$ — as this confirms.)
> - $D = 26$: $n = 24$, so $n_3 = \frac{24\cdot 23\cdot 28}{6} = \frac{15456}{6} = 2576$.
