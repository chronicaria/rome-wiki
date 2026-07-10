---
title: Entropy-area relation
number: "26.3"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, black-hole-entropy]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

A black hole's entropy is **one quarter of its horizon area, measured in Planck-area tiles**: $S_B/k = A/(4\ell_P^2)$. Given only the Hawking temperature and one line of calculus, this drops out. The shock is that entropy scales with *area*, not volume — and that a string of the right mass carries the same entropy.

## What a black hole must be counting

Entropy counts microstates. Throw a bucket of hot gas into a black hole and it vanishes behind the horizon, carrying its entropy with it. The second law forbids entropy from just disappearing, so the black hole must have swallowed that entropy — it has entropy of its own. But a classical black hole is bald: it is fully specified by mass, charge, and spin, a handful of numbers. So what is it counting? That is the mystery this module chases. Here we compute the number; the string picture at the end says what the microstates might be.

## Just-in-time GR: the Schwarzschild radius

A black hole is matter collapsed inside an **event horizon** — a sphere of radius $R$ from which nothing, not even light, escapes. Estimate $R$ with pure Newtonian bookkeeping: a particle of mass $m$ sitting at the horizon has rest energy $mc^2$ and gravitational potential energy $-GMm/R$. The horizon is the edge where a particle can *just barely* not escape, i.e. its total energy is zero:

$$mc^2 - \frac{GMm}{R} = 0 \;\Longrightarrow\; R \simeq \frac{GM}{c^2}.$$

Full general relativity fixes a missing factor of 2 the Newtonian argument can't see:

$$R = \frac{2GM}{c^2}. \tag{1}$$

$R \propto M$: double the mass, double the radius. (The Sun's would be ~3 km; Earth's ~1 cm.) We take the factor of 2 from GR — the Newtonian estimate only nails the scale, not the coefficient.

## Hawking temperature → Bekenstein entropy

Black holes are not truly black: they glow with thermal radiation at the **Hawking temperature** $T_{\rm Haw}$ (the subscript keeps it distinct from the Hagedorn temperature $T_H$ met earlier in this module), set by the strength of gravity at the horizon (the "surface gravity"), which falls off as $1/M$. So heavier black holes are *colder*. Restoring $\hbar, c, G$:

$$kT_{\rm Haw} = \frac{\hbar c^3}{8\pi GM}. \tag{2}$$

We quote this — deriving it needs quantum field theory in curved spacetime, beyond this course. But once we have a temperature and an energy, thermodynamics does the rest. The energy is just the rest energy $E = Mc^2$, and the first law $dE = T_{\rm Haw}\,dS_B$ relates a change in energy to a change in entropy:

$$c^2\,dM = T_{\rm Haw}\,dS_B = \frac{\hbar c^3}{8\pi GM}\,\frac{dS_B}{k}.$$

Solve for $dS_B$ and use $2M\,dM = d(M^2)$:

$$\frac{dS_B}{k} = \frac{8\pi GM}{\hbar c}\,dM = \frac{4\pi G}{\hbar c}\,d(M^2).$$

The factor of 2 in $d(M^2) = 2M\,dM$ is what turns $8\pi$ into $4\pi$. Integrate, taking a massless black hole to have zero entropy:

$$\boxed{\;\frac{S_B}{k} = \frac{4\pi G}{\hbar c}\,M^2\;} \tag{3}$$

**Entropy goes as mass-squared.** Remember this — a free string will give $S \propto M$ instead, and the mismatch is the whole point of the last section.

## Rewriting as area: the $A/4$ law

Now trade $M^2$ for the horizon area. With $A = 4\pi R^2$ and $R = 2GM/c^2$,

$$A = 4\pi\left(\frac{2GM}{c^2}\right)^2 = \frac{16\pi G^2 M^2}{c^4} \;\Longrightarrow\; M^2 = \frac{A c^4}{16\pi G^2}.$$

Substitute into (3):

$$\frac{S_B}{k} = \frac{4\pi G}{\hbar c}\cdot\frac{A c^4}{16\pi G^2} = \frac{c^3}{4\hbar G}\,A = \frac{A}{4\ell_P^2},$$

where the **Planck length** is $\ell_P^2 = \hbar G/c^3$ (the only length you can build from $\hbar, c, G$). The $16\pi$ against the $4\pi$ leaves the clean $1/4$:

$$\boxed{\;\frac{S_B}{k} = \frac{A}{4\ell_P^2}\;} \tag{4}$$

This is the **Bekenstein–Hawking entropy**. Given (1) and (2), the area law is one-variable calculus — nothing more. Two features make it profound:

- **It scales with area, not volume.** Every ordinary system you know has extensive entropy: pack twice the volume with gas, get twice the entropy. A black hole breaks this — its information content lives on the *surface*. Picture the horizon tiled by squares of side $\ell_P$; the entropy is one bit's worth of freedom per tile, give or take. This is the first hint of **holography** (see [[Bulk versus boundary observables]], [[Gauge-gravity duality|AdS-CFT correspondence]]).
- **It is astronomically large.** $\ell_P^2 \approx 10^{-70}\,\mathrm{m}^2$, so a horizon of any macroscopic size has an unthinkable number of tiles — hence microstates. A solar-mass black hole has $S_B/k \sim 10^{77}$.

The chain is short: entropy thrown in cannot vanish, so the black hole keeps it; the Hawking temperature turns that stored entropy into $A/4$ in Planck units; and — against every ordinary system — the total scales with the horizon's area, not its volume.

## The string–black-hole entropy comparison

Now the string-theory payoff. A free string of mass $M$ has entropy **linear** in $M$ (from [[Hagedorn temperature]], in $\hbar=c=1$ units):

$$\frac{S_{\rm str}}{k} = 4\pi\sqrt{\alpha'}\,M, \qquad\text{versus}\qquad \frac{S_B}{k} = 4\pi GM^2. \tag{5}$$

$M$ versus $M^2$ — they look incompatible. But they *should* differ, because each is computed in a regime where the other is nonsense:

- $S_{\rm str} \propto M$ is a **free-string** ($g_s=0$) result. A string's mass is proportional to its length ($M \sim L/\alpha'$, since the tension is $\sim 1/\alpha'$), and entropy is extensive in length — count the ways to fold a random walk of $L/\ell_s$ "string bits," each pointing any direction, and you get $S_{\rm str}/k \sim M\sqrt{\alpha'} = M\ell_s$. No gravity anywhere.
- $S_B \propto M^2$ **needs gravity** ($g_s \neq 0$). Newton's constant itself is set by the coupling: $G \sim g_s^2\alpha' = g_s^2\ell_s^2$. At $g_s=0$ gravity switches off, $R = 2GM/c^2 \to 0$, and there is no black hole to speak of.

So they live at opposite ends of a dial. The reconciliation is to slide the coupling $g_s$ down while holding the entropy fixed, and watch the black hole shrink into a string.

Fix a big black hole ($S_0$, mass $M_0$, radius $R_0 \gg \ell_s$) at some coupling $g_{s,0}$, with

$$\frac{S_0}{k} \sim g_{s,0}^2\ell_s^2 M_0^2, \qquad R_0 \sim GM_0 \sim g_{s,0}^2\ell_s^2 M_0.$$

Turn $g_s$ down slowly. Holding $S/k \sim g_s^2\ell_s^2 M^2$ fixed forces $M \sim 1/g_s$ (the mass grows), while the radius $R \sim g_s^2\ell_s^2 M \sim g_s$ *shrinks*. Keep going until the horizon reaches the string length, $R_* \sim \ell_s$ — below that a black hole is smaller than a string and the geometric description is meaningless. From $R_* \sim g_{s,*}^2\ell_s^2 M_* = \ell_s$:

$$M_* \sim \frac{1}{g_{s,*}^2\,\ell_s}.$$

At this **correspondence point** both entropies land on the same value. Black-hole side:

$$\frac{S_B}{k} \sim g_{s,*}^2\ell_s^2 M_*^2 \sim g_{s,*}^2\ell_s^2\cdot\frac{1}{g_{s,*}^4\ell_s^2} = \frac{1}{g_{s,*}^2}.$$

String side, using the same $M_*$:

$$\frac{S_{\rm str}}{k} \sim M_*\ell_s \sim \frac{1}{g_{s,*}^2\ell_s}\cdot\ell_s = \frac{1}{g_{s,*}^2}. \tag{6}$$

**They agree** — parametrically, $S_B \sim S_{\rm str} \sim 1/g_{s,*}^2$. The $M$-vs-$M^2$ conflict dissolves because it compared the two objects at different couplings; matched at the crossover, they are the same entropy. This is **evidence, not proof**, that a Schwarzschild black hole is what a hugely excited string looks like once gravity is turned on — the black hole is the string, at strong coupling.

## Open questions

- **Only powers, not coefficients.** The matching in (6) fixes how $S$ scales with $g_{s,*}$ but drops every numerical factor — it cannot reproduce the exact $1/4$ in $S_B = A/(4\ell_P^2)$. To match a coefficient you need a black hole protected by supersymmetry, where the zero-coupling count survives to nonzero $g_s$ — see [[Supersymmetric black-hole counting]].
- **Hawking's temperature is an input, not a result.** Equation (2) is quoted; the entropy then follows by pure thermodynamics. Deriving $T_{\rm Haw}$ needs quantum fields in curved spacetime.
- **Why area, not volume?** The string-bits picture explains $S \propto M \propto L$ for a *string*, but says nothing about the *horizon* area law. Area-vs-volume is a separate, deeper fact whose explanation is holographic — see [[Gauge-gravity duality|AdS-CFT correspondence]].

## Exercise

The horizon of a Schwarzschild black hole feels a gravitational field $|\vec g| = c^4/(4GM)$ at its surface (Newtonian, $|\vec g| = GM/R^2$ with $R = 2GM/c^2$). Show that the Hawking temperature (2) can be written **without reference to $M$**, purely in terms of the surface gravity — i.e. find the constant $\kappa$ such that $kT_{\rm Haw} = \kappa\,\hbar |\vec g|/c$, and confirm it is dimensionless. Then use $\kappa$ to state in words what physical quantity fixes the temperature of *any* black hole, big or small.

> [!success]- Solution
> Start from $|\vec g| = c^4/(4GM)$ and solve for the mass: $M = c^4/(4G|\vec g|)$. Substitute into the Hawking temperature (2):
> $$kT_{\rm Haw} = \frac{\hbar c^3}{8\pi GM} = \frac{\hbar c^3}{8\pi G}\cdot\frac{4G|\vec g|}{c^4} = \frac{\hbar |\vec g|}{2\pi c}.$$
> So $\kappa = \tfrac{1}{2\pi}$. The $G$ and $M$ have both cancelled — the temperature depends *only* on the surface gravity $|\vec g|$.
>
> Dimension check ($\hbar = $ energy·time, $|\vec g| = $ length/time$^2$, $c = $ length/time):
> $$\frac{\hbar|\vec g|}{c} = \frac{(\text{E}\cdot\text{t})(\text{L}/\text{t}^2)}{\text{L}/\text{t}} = \text{E}\cdot\frac{\text{t}}{\text{t}^2}\cdot\text{t} = \text{E}. \;\checkmark$$
> An energy, as $kT_{\rm Haw}$ must be, so $\kappa$ is dimensionless.
>
> In words: **the temperature of a black hole is set entirely by the strength of gravity at its horizon.** This is why heavier holes are colder — more mass means a bigger, gentler horizon ($|\vec g| \propto 1/M$), hence a lower temperature. The relation $kT_{\rm Haw} = \hbar|\vec g|/(2\pi c)$ is the seed of the exact result $T_{\rm Haw} = \hbar\kappa_{\rm surf}/(2\pi kc)$ that Hawking derived, with $\kappa_{\rm surf}$ the properly defined GR surface gravity.
