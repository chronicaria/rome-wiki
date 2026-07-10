---
title: Two roads to D = 26
number: "23.6"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, ghosts-d26]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---
Two independent derivations force the bosonic string into exactly 26 spacetime dimensions — one by fixing a spacetime gauge and demanding Lorentz symmetry survive, one by fixing a worldsheet gauge and demanding the Weyl anomaly cancel — and the same number falls out of both because they are two symptoms of one quantum defect.

Underneath both roads is a single quantum defect: a would-be symmetry of the classical string that fails to close once we quantize. We can push the defect into the spacetime Lorentz algebra or into the worldsheet Weyl symmetry, but we cannot make it vanish except at $D=26$.

This note ties together [[Faddeev-Popov ghosts]], [[The bc ghost CFT]], [[Total central charge and D = 26]], the [[Light-cone gauge]] quantization of Modules 14–16, and the [[Light-cone Lorentz anomaly]] calculation whose result we quote below.

---

## Road 1 — Light-cone: fix a spacetime gauge, then demand Lorentz invariance back

A string worldsheet has more gauge freedom than we need. Light-cone gauge spends all of it at once: set $X^+\propto\tau$ and use the constraints to solve for $X^-$ entirely in terms of the $D-2$ transverse oscillators $\alpha^I_n$. Nothing unphysical is left — no ghosts, no negative-norm states, a clean positive Fock space. The bill comes due elsewhere. Singling out the two null directions $X^\pm$ hides manifest Lorentz invariance: rotating a transverse direction into $X^-$ now acts on a complicated nonlinear function of the oscillators, so it is no longer obvious that boosts still close into the Lorentz algebra. Road 1 is the demand that they do.

**Step 1 — the zero-point energy.** Quantizing reorders the transverse Hamiltonian $L_0^\perp$ into normal-ordered form, and the reordering leaves a c-number: the sum of ground-state energies of all the transverse oscillators,
$$a_{\text{lc}}=\frac{1}{2}(D-2)\sum_{n=1}^{\infty}n\ \longrightarrow\ -\frac{1}{24}(D-2).\tag{1}$$
The factor $\tfrac12(D-2)$ counts $\tfrac12$ per oscillator times the $D-2$ transverse directions. The sum $\sum n$ is divergent and must be regulated *honestly*: with a cutoff,
$$\sum_{n\ge1}n\,e^{-\epsilon n}=\frac{1}{\epsilon^2}-\frac{1}{12}+O(\epsilon^2),$$
and the $1/\epsilon^2$ piece is a local (length-dependent) divergence removed by a counterterm, leaving the finite $-\tfrac{1}{12}$. This is what "$\zeta(-1)=-\tfrac{1}{12}$" means physically — never the naive claim that $1+2+3+\dots$ equals a negative number. So $a_{\text{lc}}=\tfrac12(D-2)(-\tfrac{1}{12})=-\tfrac{1}{24}(D-2)$, and the open-string mass formula is $\alpha'M^2=N^\perp+a_{\text{lc}}$. This constant knows only about transverse modes — the fingerprint of a gauge that solved the constraints away rather than imposing them.

**Step 2 — the Lorentz anomaly.** Build the quantum boost generators $M^{-I}$ out of the oscillators (every hidden $\alpha_n^-$ replaced by the transverse Virasoro operator $L_n^\perp/p^+$, with the zero-mode term symmetrized so $M^{-I}$ is Hermitian). Classically $[M^{-I},M^{-J}]=0$. Quantum-mechanically, normal ordering can leave a remainder — and it does. The full bookkeeping (done in [[Light-cone Lorentz anomaly]]) collapses to a single independent operator per mode, the transverse rotation $R_m^{IJ}=\alpha^I_{-m}\alpha^J_m-\alpha^J_{-m}\alpha^I_m$, with coefficient
$$C_m=m\Big[1-\tfrac{1}{24}(D-2)\Big]+\frac1m\Big[\tfrac{1}{24}(D-2)+a_{\text{lc}}\Big],\tag{2}$$
so that
$$[M^{-I},M^{-J}]=\frac{1}{\alpha' p^{+2}}\sum_{m\ge1}C_m\,R_m^{IJ}.$$
Here $a_{\text{lc}}$ is left as an undetermined ordering constant, not yet fixed to its Step 1 value — the anomaly will fix it independently. The two brackets in $C_m$ come from different sources: the $m$ term is the Virasoro central charge of the $D-2$ transverse bosons leaking into the boost algebra; the $1/m$ term measures the mismatch between that ordering constant and the transverse zero-point value $\tfrac{1}{24}(D-2)$. The functions $m$ and $1/m$ are linearly independent over $m=1,2,3,\dots$, and each $R_m^{IJ}$ is an independent operator (mode $m$ acts on a different oscillator tower than mode $k$). So the anomaly cannot cancel by conspiracy between modes; both brackets must vanish separately:
$$1-\frac{1}{24}(D-2)=0,\qquad \frac{1}{24}(D-2)+a_{\text{lc}}=0.\tag{3}$$

**Step 3 — the answer.** The first equation fixes the dimension; the second then fixes the mass shift:
$$\boxed{D=26},\qquad a_{\text{lc}}=-\frac{1}{24}(D-2)=-\frac{24}{24}=-1.$$
Requiring the quantum theory to be Lorentz invariant fixes the spacetime dimension and the intercept in one stroke. With $a_{\text{lc}}=-1$, the open-string formula $\alpha'M^2=N^\perp-1$ puts a massless vector (the photon) at $N^\perp=1$; the closed string's first level gives the massless graviton/$B$-field/dilaton. String theory does not accept $D$ as input — it *predicts* $D=26$.

---

## Road 2 — Covariant: keep Lorentz manifest, pay with ghosts

Now do the opposite. Keep all $D$ coordinates $X^\mu$ so Lorentz invariance stays manifest, and spend the gauge freedom on the worldsheet symmetries instead — the diffeomorphisms and Weyl rescalings of the Polyakov metric. Gauge-fixing the metric integral is not free: the Faddeev–Popov change of variables produces a Jacobian, and that Jacobian is itself a path integral over anticommuting **ghost fields** $b,c$. Now the defect has nowhere to hide in the Lorentz algebra (which is manifest) — it resurfaces as a quantum anomaly in the Weyl symmetry.

**Step 1 — ghosts from gauge-fixing.** The FP procedure ([[Faddeev-Popov ghosts]]) replaces the metric Jacobian with a free action for a symmetric-traceless anticommuting field $b_{\alpha\beta}$ (from the gauge-fixing multiplier) and a vector $c^\alpha$ (from the diffeomorphism parameter). In conformal gauge it factorizes into holomorphic and antiholomorphic copies of
$$S_{\text{ghost}}=\frac{1}{2\pi}\int d^2z\;b\,\partial_{\bar z}c\ +\ \text{(antihol.)}.$$

**Step 2 — the ghost central charge.** The $bc$ system ([[The bc ghost CFT]]) is a CFT with weights $(h_b,h_c)=(2,-1)$ — forced by the index structure $b_{zz},c^z$ — and its $TT$ OPE has a quartic pole $-13/(z-w)^4$, i.e.
$$c_{\text{gh}}=-26.$$
It is *negative*: anticommuting integer-weight fields are exactly the objects that violate the unitarity bound $c>0$, so there is no contradiction. This $-26$ is not "minus two coordinates worth of central charge." It is the anomaly coefficient of a specific first-order Grassmann system whose weights were dictated by what it replaced (a rank-2 symmetric-traceless tensor and a vector). "Ghosts remove two gauge directions" is a slogan, not this number.

**Step 3 — cancel the Weyl anomaly.** On a curved worldsheet the trace of the stress tensor picks up a quantum piece
$$\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}R,\qquad c=c_{\text{matter}}+c_{\text{gh}}.$$
Weyl symmetry is a *gauge* redundancy of the Polyakov string, and a gauge anomaly is fatal — it means the degrees of freedom you divided out do not actually decouple. So we need $c=0$. The matter sector is $D$ free scalars, one per coordinate, so $c_{\text{matter}}=D$, and ([[Total central charge and D = 26]])
$$c_{\text{total}}=D-26\overset{!}{=}0\quad\Longrightarrow\quad\boxed{D=26}.$$
The dimension is the value that makes the conformal anomaly cancel between matter and ghosts. More precisely, $26$ is a critical central charge, and "dimension" is merely the name it takes when the $c=26$ CFT happens to be $26$ free scalars — any $c=26$ CFT is an equally valid string background.

---

## Why the two roads agree

The agreement is not luck. Both roads are computing the *same* number in different disguises.

**Same constraints underneath.** In both pictures the physics is the Virasoro constraints. Light-cone gauge *solves* them (for $X^-$, keeping $D-2$ transverse towers). Covariant gauge *imposes* them as operator conditions on states, $L_{n>0}|\Psi\rangle=0$ and $(L_0-1)|\Psi\rangle=0$. The single intercept appears in two costumes:
- light-cone: $\alpha'M^2=N^\perp+a_{\text{lc}}$ with $a_{\text{lc}}=-1$;
- covariant: $(L_0-1)|\Psi\rangle=0$, so a physical matter operator must have weight $+1$ (and $(1,1)$ for closed strings; see [[Vertex operators and physical-state conditions]]).

**The counting matches — carefully.** In the covariant Hilbert space the matter sector has $D$ oscillator towers, of which two ($X^+$ and $X^-$, or equivalently a timelike and a longitudinal combination) are unphysical. The $bc$ ghosts are precisely engineered so that their contribution to the anomaly, together with these two unphysical matter directions, cancels; what carries physical states is the same transverse count as light-cone gauge. At the level of central charge this reads
$$c_{\text{matter}}+c_{\text{gh}}=D-26,$$
and $D-26=0$ is the same statement as
$$a_{\text{lc}}=-\frac{1}{24}(D-2)=-\frac{1}{24}\cdot 24=-1.$$
Both say "$24$ transverse oscillators." One caveat keeps this honest: turning "two unphysical matter directions" into "$c_{\text{gh}}=-26$" is not a naive subtraction ($-26\neq -2$); it goes through the weights $(2,-1)$ of the specific ghost system, and the clean statement of the cancellation is the BRST cohomology theorem, deferred below.

**Lorentz anomaly $\Leftrightarrow$ Weyl anomaly.** This is the core equivalence: there is one obstruction to consistently quantizing the string, and the gauge choice only decides where it surfaces. Light-cone gauge fixes the Weyl symmetry away by hand, so the obstruction cannot appear there — it is forced to resurface as a Lorentz anomaly in the boost algebra. Covariant gauge keeps Lorentz manifest, so the obstruction has nowhere to go but the Weyl (conformal) anomaly. Same defect, two gauges, two names. Both are healed at, and only at, $D=26$.

Fixing all the gauge freedom the cheap way breaks a spacetime symmetry; fixing it the honest way breaks a worldsheet symmetry. Exactly one dimension — twenty-six — breaks neither, and that is where the bosonic string has to live.

## Open questions

- The boost-commutator coefficient (2) is quoted, not expanded term-by-term; the full oscillator bookkeeping lives in [[Light-cone Lorentz anomaly]].
- "Ghosts cancel two unphysical matter directions" is stated here as arithmetic. The *rigorous* version — that physical states are the BRST cohomology, and that this is gauge-independent — is deeper than the central-charge match and belongs with BRST (revisit in Module 24 / old covariant vs. BRST quantization).

## Exercise

Both roads secretly agree that $D=26$ leaves $D-2=24$ physical transverse oscillators. **Superstring warm-up:** repeat *both* consistency conditions for the superstring, where each coordinate $X^\mu$ is accompanied by a worldsheet fermion $\psi^\mu$, and predict $D$.

Use two facts: a single free worldsheet fermion has $c=\tfrac12$, and the superstring's diffeomorphism+superconformal gauge-fixing produces a ghost system with total central charge $c_{\text{gh}}=-15$ (the $bc$ ghosts at $-26$ plus a commuting $\beta\gamma$ superghost system at $+11$). Find $D$ from the anomaly-cancellation condition $c_{\text{matter}}+c_{\text{gh}}=0$, and state the superstring analogue of "$D-2=24$."

> [!success]- Solution
> **Central-charge road.** Each coordinate contributes one free boson ($c=1$) and one free fermion ($c=\tfrac12$), so the matter central charge per dimension is $1+\tfrac12=\tfrac32$, giving
> $$c_{\text{matter}}=\frac{3}{2}D.$$
> Weyl (now super-Weyl) invariance demands $c_{\text{matter}}+c_{\text{gh}}=0$ with $c_{\text{gh}}=-15$:
> $$\frac{3}{2}D-15=0\quad\Longrightarrow\quad \boxed{D=10}.$$
> **The analogue of "$D-2=24$."** In light-cone gauge the transverse count is $D-2=8$, and each transverse direction carries a boson *and* a fermion. The critical central charge $15$ splits as $\tfrac32\cdot 10$, mirroring the bosonic $26=1\cdot 26$; the "twenty-four transverse bosons" of the bosonic string become "eight transverse bosons plus eight transverse fermions" for the superstring. Both roads again agree — the superstring lives in $D=10$. (Sanity check on the ghost number: bosonic $bc$ gives $-26$; adding the commuting superghost $\beta\gamma$ system with $c=+11$ gives $-15$, so the superstring needs *less* matter, $\tfrac32 D=15$ vs $D=26$, and lands lower.)
