---
title: "Transverse coordinates as physical degrees of freedom"
number: "12.4"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, physical-dof]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

After light-cone gauge fixing, a classical open string does only $D-2$ things: it wiggles in the $D-2$ **transverse** directions $X^I$. The other two coordinates carry no independent motion — $X^+$ is a clock, and $X^-$ is fixed by the transverse wiggles up to two constants $p^+, x_0^-$.

Imagine a jump rope. You can whip it up and down and side to side — those motions change its shape. But sliding beads *along* the rope changes nothing about the rope's shape in space; it just relabels which bead sits where. A string is the same. Motion *along* its own length is not real motion — it is a relabeling of the worldsheet coordinate $\sigma$, which is pure gauge. The only motion that changes the string's shape and position is **transverse** to the string. Light-cone gauge is the coordinate system that makes this obvious: the physical fields literally *are* the transverse coordinates $X^I$.

The claim, then: **of the $D$ embedding coordinates, only $D-2$ are physical.** For $D=26$ that is $24$ — a number that reappears everywhere in the spectrum.

## Why "along the string" is not motion

The constraint $\dot X \cdot X' = 0$ says the velocity of each point of the string is perpendicular to the string. Why is longitudinal velocity forbidden as *physical* motion? Because it is not motion at all — it is a change of label.

Make the label change infinitesimal. Shift the spatial worldsheet coordinate by $\sigma \to \tilde\sigma = \sigma - \epsilon(\tau,\sigma)$ while keeping the same geometric string. The embedding at the new label is

$$
X^\mu(\tau,\tilde\sigma) = X^\mu(\tau,\sigma-\epsilon) = X^\mu(\tau,\sigma) - \epsilon\, X^{\mu\prime}(\tau,\sigma) + O(\epsilon^2),
$$

so the induced change is

$$
\delta X^\mu = -\epsilon\, X^{\mu\prime}.
$$

Since $X^{\mu\prime}$ is the tangent to the string, $\delta X^\mu$ points *along* the string. A displacement along the tangent is exactly what relabeling $\sigma$ produces — it is gauge redundancy, not a new configuration. The constraint $\dot X\cdot X' = 0$ then picks the representative whose actual velocity is orthogonal to this gauge direction. Motion orthogonal to the string is physical; motion along it is pure gauge.

## Counting: $D$ fields become $D-2$

Now do the bookkeeping. Start with $D$ coordinate fields $X^\mu(\tau,\sigma)$ and watch two of them get eliminated.

1. **$X^+$ is frozen by the gauge.** The gauge choice ([[Fixing X-plus as worldsheet time]]) sets, in natural units ($\hbar=c=1$),
$$ X^+ = 2\alpha' p^+\tau, \qquad x_0^+ = 0,\quad \alpha_n^+ = 0\ \ (n\neq0). $$
No zero-mode position, no oscillators — just the single number $p^+$. $X^+$ is the clock written as a field, carrying zero dynamical data. *(One field gone.)*

2. **$X^-$ is solved by the constraints.** The constraints ([[Light-cone constraints]]) give
$$ \dot X^- \pm X^{-\prime} = \frac{1}{4\alpha'p^+}\big(\dot X^I \pm X^{I\prime}\big)^2, $$
which fixes *both* worldsheet derivatives of $X^-$ from the $X^I$. A field with both partials known is determined up to one additive constant $x_0^-$. So $X^-$ carries zero dynamical fields, just that one number. *(Second field gone.)*

3. **What survives:** the transverse $X^I$, $I = 2,\dots,D-1$ — that is $D-2$ fields — plus the two constants $p^+, x_0^-$.

$$ \boxed{\;\text{Free data} = \big\{\,X^I(\tau,\sigma),\ p^+,\ x_0^-\,\big\}\;} $$

Two of the $D$ coordinates were gauge or constraint artifacts; the genuine wiggling lives in $D-2$ transverse directions. In mode language you freely choose $x_0^I, p^I, \alpha_n^I$ (which assemble $X^I$) plus $p^+, x_0^-$; then $X^+$ and every non-constant part of $X^-$ are computed, never chosen. In particular **no $\alpha_n^-$ oscillator is ever selected independently** — that absence is the content of the claim.

## How $X^-$ is reconstructed: transverse Virasoro modes

"Physical = transverse" is only honest if $X^-$ really is computable from the $X^I$. Here is the explicit map, mode by mode ([[Mode expansions in light-cone gauge]]):

$$ \sqrt{2\alpha'}\,\alpha_n^- = \frac{1}{2p^+}\sum_{p\in\mathbb Z}\alpha_{n-p}^I\,\alpha_p^I. $$

Every oscillator of $X^-$ is a **quadratic combination of the transverse oscillators** $\alpha^I$. Crucially the spacetime index on the right runs over transverse labels $I$ *only* — that is the precise sense in which $X^-$ is a function of the physical data, not independent of it.

The quadratic combination earns a name, the **transverse Virasoro mode**:

$$ L_n^\perp \equiv \frac12\sum_{p\in\mathbb Z}\alpha_{n-p}^I\,\alpha_p^I, \qquad\Longrightarrow\qquad \sqrt{2\alpha'}\,\alpha_n^- = \frac{1}{p^+}\,L_n^\perp. \tag{1} $$

The "$\perp$" is because the sum is over transverse indices only. These are the classical ancestors of the quantum [[Transverse Virasoro operators|Virasoro modes]] that organize the whole spectrum; here they show up humbly as the oscillation modes of $X^-$. (Contrast the covariant $L_n = \tfrac12\sum_m \alpha_{n-m}\cdot\alpha_m$, which sums over *all* $\mu$ because no gauge has been fixed. Light-cone gauge is exactly what collapses the "$\cdot$" to a sum over "$I$".)

Assembling the modes, the reconstructed field is

$$
X^-(\tau,\sigma) = x_0^- + \frac{1}{p^+}L_0^\perp\,\tau + \frac{i}{p^+}\sum_{n\neq0}\frac{1}{n}\,L_n^\perp\, e^{-in\tau}\cos n\sigma.
$$

Once the transverse oscillators are chosen, every term here is fixed except the constant $x_0^-$.

## Even the energy is transverse

Set $n=0$ in (1) and use $\alpha_0^\mu = \sqrt{2\alpha'}\,p^\mu$:

$$ 2p^+ p^- = \frac{1}{\alpha'}\,L_0^\perp. $$

The light-cone energy $p^-$ is **not** free either — it is dictated by the transverse oscillators through $L_0^\perp$. Feed this into $M^2 = -p^2 = 2p^+p^- - p^I p^I$ (mostly-plus signature); since $L_0^\perp = \alpha' p^I p^I + \sum_{n\geq1}\alpha_{-n}^I\alpha_n^I$, the $p^I p^I$ pieces cancel, leaving the classical [[Mass-shell relation|mass formula]]

$$ M^2 = \frac{1}{\alpha'}\sum_{n\geq1} n\,a_n^{I*}a_n^I, $$

built entirely from transverse modes, with $\alpha_n^I = \sqrt n\,a_n^I$ and $\alpha_{-n}^I = \sqrt n\,a_n^{I*}$ for $n\geq1$ (full derivation in [[Mode expansions in light-cone gauge]]). Even the mass of the string is a function of the transverse data alone. Nothing physical lives outside the $X^I$ — which is why the next module can quantize the string by quantizing only the $\alpha_n^I$.

## Summary

| Coordinate | Status in light-cone gauge | Free data it contributes |
|---|---|---|
| $X^+$ | frozen: $X^+ = 2\alpha'p^+\tau$ | the constant $p^+$ |
| $X^I$ ($D-2$ of them) | **fully dynamical** | $x_0^I,\ p^I,\ \alpha_n^I$ |
| $X^-$ | reconstructed: $\alpha_n^- \propto L_n^\perp$ | the constant $x_0^-$ |

## Open questions

- The count "$D-2$ physical fields" is classical. Quantum mechanically the same transverse count is used, but only in $D=26$ does the non-manifest Lorentz symmetry survive without an anomaly — deferred to the light-cone quantization notes.

## Exercise

The reconstruction relation (1) says $\sqrt{2\alpha'}\,\alpha_n^- = L_n^\perp/p^+$. The physical field $X^-$ is real, so its oscillators must satisfy $\alpha_{-n}^- = (\alpha_n^-)^*$. Verify that the transverse Virasoro modes automatically obey $L_{-n}^\perp = (L_n^\perp)^*$, using only the transverse reality condition $\alpha_{-m}^I = (\alpha_m^I)^*$. Why is this a nontrivial consistency check on the claim that $X^-$ is a genuine real coordinate reconstructed from the $X^I$?

> [!success]- Solution
> Start from the definition and conjugate:
> $$ (L_n^\perp)^* = \left(\frac12\sum_{p}\alpha_{n-p}^I\alpha_p^I\right)^* = \frac12\sum_{p}(\alpha_{n-p}^I)^*(\alpha_p^I)^*. $$
> Apply the transverse reality condition $(\alpha_m^I)^* = \alpha_{-m}^I$ to each factor:
> $$ (L_n^\perp)^* = \frac12\sum_{p}\alpha_{-(n-p)}^I\,\alpha_{-p}^I = \frac12\sum_{p}\alpha_{-n+p}^I\,\alpha_{-p}^I. $$
> Relabel the summation index $p \to -p$ (a bijection of $\mathbb Z$, so the sum is unchanged):
> $$ (L_n^\perp)^* = \frac12\sum_{p}\alpha_{-n-p}^I\,\alpha_{p}^I = L_{-n}^\perp. $$
> So $L_{-n}^\perp = (L_n^\perp)^*$. Then from (1), $\sqrt{2\alpha'}\,\alpha_{-n}^- = L_{-n}^\perp/p^+ = (L_n^\perp)^*/p^+ = (\sqrt{2\alpha'}\,\alpha_n^-)^*$ (using $p^+$ real), i.e. $\alpha_{-n}^- = (\alpha_n^-)^*$ — exactly the reality condition a real field's oscillators must obey.
>
> Why nontrivial: we did not *impose* that $X^-$ is real; we *derived* it. The reconstruction (1) manufactures the $\alpha_n^-$ out of transverse data, and it could in principle have produced complex oscillators inconsistent with a real coordinate. That it doesn't — that reality of the $X^I$ forces reality of the reconstructed $X^-$ — is a check that the constraint solution genuinely yields a legitimate spacetime coordinate, not just a formal expression.
