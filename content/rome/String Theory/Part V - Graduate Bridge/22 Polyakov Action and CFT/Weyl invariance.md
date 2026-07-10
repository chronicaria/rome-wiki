---
title: Weyl invariance
number: "22.5"
created: 2026-06-30
source: llm
status: seed
tags: [physics, string-theory, polyakov-cft]
passes: [draft-claude, review-gpt-5.5-pro, final-claude-opus-4.8, publish-fable-5]
finalized: 2026-06-30
published_pass: fable-5
---

Weyl invariance is the local rescaling symmetry $h_{\alpha\beta}\to\Omega^2(\xi)\,h_{\alpha\beta}$ of the Polyakov action: on the worldsheet, lengths carry no physical meaning — only angles do. This is the extra symmetry that lets the worldsheet metric be gauged away completely, and demanding it survive quantization is exactly what fixes the critical dimension $D=26$.

## The no-ruler symmetry

Think of the worldsheet metric as a map with a protractor but no ruler. You can read off angles between directions and the light-cone (what's causally before/after what), but every notion of "how long" is meaningless — you're free to stretch the map by any amount $\Omega^2(\xi)$ at every point and nothing physical changes.

Why should a *string's* worldsheet be like that? Because the string has no internal ruler of its own: the coordinates $(\tau,\sigma)$ are labels we painted on, not physical distances. Only the embedding $X^\mu(\tau,\sigma)$ into spacetime carries real geometry. So the auxiliary worldsheet metric $h_{\alpha\beta}$ had better not smuggle in a length scale — and Weyl invariance is the precise statement that it doesn't.

Two consequences of this "no ruler" symmetry organize everything below. It is why the metric is pure gauge and the gauge-fixed theory is a free CFT, and it is the thing quantization can secretly break — and if it breaks, the string is inconsistent unless $D=26$.

## The symmetry

The [[Polyakov vs Nambu-Goto|Polyakov action]] is invariant under a position-dependent rescaling of the *worldsheet metric alone*, with $X^\mu$ untouched:
$$\boxed{\,h_{\alpha\beta}(\xi)\;\longrightarrow\;\Omega^2(\xi)\,h_{\alpha\beta}(\xi),\qquad X^\mu\;\longrightarrow\;X^\mu\,}$$
Here $\Omega^2(\xi)>0$ is an arbitrary function; infinitesimally, writing $\Omega^2=1+\epsilon$, this is $\delta h_{\alpha\beta}=\epsilon(\xi)\,h_{\alpha\beta}$. This is a **Weyl transformation** (a local rescaling of the metric). It is *not* a coordinate change — the points stay put, only the metric's overall scale at each point changes.

**Why the action is invariant.** Everything hinges on the combination $\sqrt{-h}\,h^{\alpha\beta}$, which is the *only* way the metric enters $S_P$ (cf. [[Independent worldsheet metric]]). In two dimensions:
$$\sqrt{-h}\;\to\;\sqrt{-\Omega^4 h}=\Omega^2\sqrt{-h},\qquad h^{\alpha\beta}\;\to\;\Omega^{-2}h^{\alpha\beta}.$$
The first holds because $h=\det h_{\alpha\beta}\to\Omega^4 h$ — one factor of $\Omega^2$ from each row of a $2\times2$ matrix — and the inverse metric scales with the opposite power. Therefore
$$\sqrt{-h}\,h^{\alpha\beta}\;\to\;\Omega^{2}\,\Omega^{-2}\,\sqrt{-h}\,h^{\alpha\beta}=\sqrt{-h}\,h^{\alpha\beta}.$$
*The two powers of $\Omega$ cancel exactly*, so $S_P$ is unchanged. **This cancellation is special to two dimensions:** in $d$ dimensions $\sqrt{-h}\to\Omega^{d}\sqrt{-h}$ while $h^{\alpha\beta}\to\Omega^{-2}h^{\alpha\beta}$, so the product carries a leftover $\Omega^{d-2}$ — it cancels only at $d=2$. This is the same fact that made the arbitrary factor $f^2(\xi)$ drop out when [[Polyakov vs Nambu-Goto|Polyakov reduced to Nambu–Goto]].

## Scale vs. Weyl vs. conformal

Three nearby words that this module needs kept sharp:

- **Scale transformation** — multiply all coordinates by a constant, e.g. $z\to\lambda z$ on a fixed flat plane. A global rescaling of *coordinates*.
- **Weyl transformation** — keep the coordinate point fixed and rescale the *metric field*, $h_{\alpha\beta}(\xi)\to\Omega^2(\xi)h_{\alpha\beta}(\xi)$. A local rescaling of *lengths*.
- **Conformal transformation** — a coordinate change that rescales the metric; you then use Weyl symmetry to treat that rescaling as gauge. In 2D these coordinate changes are the holomorphic maps $z\to f(z)$.

The slogan **"conformal = diffeo + Weyl"** means exactly the third bullet: a conformal map is a diffeomorphism whose metric-rescaling side effect is undone by a compensating Weyl transformation. It does *not* say every Weyl rescaling is a coordinate change.

## What Weyl invariance buys: the metric is pure gauge

Weyl invariance is the *third* local symmetry of the Polyakov action, and it is the one that supplies the third gauge function needed to erase the metric entirely. A symmetric $2\times2$ metric has 3 independent components; the local symmetries are 2 reparametrizations $+$ 1 Weyl $=3$ functions — an exact match, so $h_{\alpha\beta}$ carries no physical degrees of freedom (see [[Independent worldsheet metric]] for the counting). Concretely:

- the **2 reparametrizations** bring $h_{\alpha\beta}$ to conformal gauge $\rho^2(\xi)\,\eta_{\alpha\beta}$;
- **Weyl** then removes the leftover conformal factor $\rho^2$, leaving $\sqrt{-h}\,h^{\alpha\beta}=\eta^{\alpha\beta}$.

Without the Weyl step, that residual $\rho^2$ would be a genuine dynamical scalar and the worldsheet theory would *not* be free. Weyl invariance is precisely what makes the gauge-fixed theory the free CFT of [[Free boson OPEs]]. Because the map has no ruler, we may flatten it completely.

## Weyl invariance = tracelessness of the stress tensor

There is a clean, local restatement. The worldsheet [[Worldsheet stress tensor|stress tensor]] is the response of the action to a metric variation,
$$T_{\alpha\beta}=-\frac{4\pi}{\sqrt{-h}}\,\frac{\partial S}{\partial h^{\alpha\beta}}\qquad\Longleftrightarrow\qquad \frac{\partial S}{\partial h^{\alpha\beta}}=-\frac{\sqrt{-h}}{4\pi}\,T_{\alpha\beta}.$$
Under a Weyl variation $\delta h_{\alpha\beta}=\epsilon\,h_{\alpha\beta}$, the inverse metric varies oppositely, $\delta h^{\alpha\beta}=-\epsilon\,h^{\alpha\beta}$, so the action changes by
$$\delta S=\int d^2\xi\,\frac{\partial S}{\partial h^{\alpha\beta}}\,\delta h^{\alpha\beta}
=\frac{1}{4\pi}\int d^2\xi\,\sqrt{-h}\,\epsilon(\xi)\,T_{\alpha\beta}h^{\alpha\beta}
=\frac{1}{4\pi}\int d^2\xi\,\sqrt{-h}\,\epsilon(\xi)\,T^\alpha{}_\alpha.$$
Weyl invariance demands $\delta S=0$ for **every** function $\epsilon(\xi)$, which forces the integrand to vanish pointwise:
$$\boxed{\,T^\alpha{}_\alpha=0\,}$$
*A traceless stress tensor is the local hallmark of a scale-invariant theory* — and on the worldsheet the trace vanishes precisely because of Weyl symmetry. (Consistency check: because $T_{\alpha\beta}\propto\partial_\alpha X\cdot\partial_\beta X-\tfrac12 h_{\alpha\beta}\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X$, its trace is $h^{\alpha\beta}T_{\alpha\beta}\propto h^{\alpha\beta}\partial_\alpha X\cdot\partial_\beta X-\tfrac12(h^{\alpha\beta}h_{\alpha\beta})\,h^{\gamma\delta}\partial_\gamma X\cdot\partial_\delta X$, and $h^{\alpha\beta}h_{\alpha\beta}=2$ in 2D makes it vanish identically — see [[Worldsheet stress tensor]].) In complex coordinates the trace is $T_{z\bar z}$, so $T^\alpha{}_\alpha=0$ reads $T_{z\bar z}=0$ — exactly the statement that makes $T(z)$ holomorphic and $\bar T(\bar z)$ antiholomorphic; see [[Complex coordinates on the worldsheet]].

## Weyl ⇒ the worldsheet is a CFT

Here is the bridge from geometry to CFT. A theory with **both diffeomorphism and Weyl invariance**, once its background metric is fixed to be flat, is left invariant under exactly the conformal transformations — it is a **conformal field theory**. The logic is the "conformal = diffeo + Weyl" slogan cashed out: a conformal map rescales the metric, $g_{\alpha\beta}\to\Omega^2 g_{\alpha\beta}$, and in Polyakov that rescaling is undone for free by a compensating Weyl transformation, so the map is a *residual gauge symmetry* of the flat-gauge theory rather than a genuine change of physics.

So Weyl invariance is *why* the gauge-fixed worldsheet is a CFT, and hence why its symmetry algebra is the [[Virasoro algebra and central charge|Virasoro algebra]].

## The quantum catch: the Weyl anomaly

Classically Weyl invariance is exact. Quantum mechanically it can be **anomalous**: regulating the short-distance divergences of the path integral secretly introduces a length scale, and the "no ruler" symmetry can break. The signature is that the trace no longer vanishes on a *curved* worldsheet:
$$\langle T^\alpha{}_\alpha\rangle=-\frac{c}{12}\,R,$$
with $R$ the worldsheet Ricci scalar and $c$ the [[Virasoro algebra and central charge|central charge]]. **Weyl invariance survives quantization iff $c=0$.** For the bosonic string the pieces are:

- the $D$ embedding coordinates $X^\mu$ are $D$ free bosons, contributing $c_{\text{matter}}=D$;
- the Faddeev–Popov $bc$ ghosts (from gauge-fixing the diffeomorphisms) contribute $c_{\text{gh}}=-26$.

Demanding the total vanish,
$$c_{\text{matter}}+c_{\text{gh}}=D-26=0\;\Longrightarrow\;D=26.$$
*The critical dimension is the demand that Weyl invariance — the very symmetry we used to gauge the metric away — is not destroyed by quantization.* If it were, the gauge-fixing that produced our free CFT would be illegitimate and the theory inconsistent. The ghost value $c_{\text{gh}}=-26$ is **not derived here** — it needs Faddeev–Popov quantization, beyond this module (see [[The bc ghost CFT]], [[Total central charge and D = 26]]); this note only records where it enters.

**Where the $R$ comes from (local sketch).** Write a nearly-flat Euclidean metric as
$$g_{\alpha\beta}=e^{2\omega(\sigma)}\delta_{\alpha\beta},\qquad R=-2e^{-2\omega}\partial^2\omega\;\xrightarrow{\ \omega\text{ small}\ }\;-2\partial^2\omega,$$
so a Weyl transformation is just a shift of $\omega$. The anomaly is forced by a **contact term** hiding in the stress-tensor self-product. Conservation of energy-momentum turns the familiar $T(z)T(w)$ singularity into a short-distance singularity of the trace with itself; in Cartesian coordinates it reads
$$T^\alpha{}_\alpha(\sigma)\,T^\beta{}_\beta(\sigma')=-\frac{c\pi}{3}\,\partial^2\delta(\sigma-\sigma')+(\text{less singular}).$$
Now compute $\langle T^\alpha{}_\alpha\rangle$ near flat space. A Weyl shift changes the metric by $\delta g_{\alpha\beta}=2\omega\,\delta_{\alpha\beta}$, so the inverse metric scales oppositely, $\delta g^{\alpha\beta}=-2\omega\,\delta^{\alpha\beta}$ (the same fact used above for the classical trace); the definition of $T_{\alpha\beta}$ then inserts $-\tfrac{1}{2\pi}\!\int\omega\,T^\beta{}_\beta$ into the correlator. Contracting that insertion against the contact term above and integrating by parts moves both derivatives onto $\omega$:
$$\delta\langle T^\alpha{}_\alpha\rangle=\frac{c}{6}\,\partial^2\omega=-\frac{c}{12}R.$$
*The central charge is not just an abstract algebra constant: it is the coefficient of the short-distance contact term that makes the trace reappear the moment the worldsheet curves.* Equivalently, $c$ measures how badly the "no ruler" symmetry fails once you regulate the quantum theory — which is why "no anomaly" and "$c=0$" are the same demand.

## Open questions

- **Ghost central charge.** $c_{\text{gh}}=-26$ is asserted here, not derived. The honest computation gauge-fixes the path integral and evaluates the $bc$ ghost CFT's central charge in [[The bc ghost CFT]] and [[Total central charge and D = 26]].
- **Scale vs. conformal invariance.** In a general QFT, scale, Weyl, and conformal invariance are genuinely distinct notions. This module leans on the special 2D worldsheet relation "conformal = diffeo + Weyl" after gauge fixing; the broader QFT distinctions are out of scope.

## Exercise

The invariance of $\sqrt{-h}\,h^{\alpha\beta}$ under $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$ is what makes the Polyakov string special to two dimensions. Test that claim quantitatively.

**(a)** In $d$ spacetime worldvolume dimensions (a $p$-brane with $d=p+1$), the analogous action is $S=-T\!\int d^d\xi\,\sqrt{-h}\,h^{\alpha\beta}\,\partial_\alpha X\cdot\partial_\beta X$. Compute how $\sqrt{-h}\,h^{\alpha\beta}$ scales under $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$, and read off the single value of $d$ for which it is invariant.

**(b)** For $d\ne 2$, propose the minimal fix that restores Weyl invariance, and state the price you pay.

> [!success]- Solution
> **(a)** Under $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$: the determinant of a $d\times d$ matrix picks up one factor of $\Omega^2$ per row, so $h=\det h_{\alpha\beta}\to\Omega^{2d}h$ and
> $$\sqrt{-h}\to\Omega^{d}\sqrt{-h},\qquad h^{\alpha\beta}\to\Omega^{-2}h^{\alpha\beta}.$$
> Hence
> $$\sqrt{-h}\,h^{\alpha\beta}\;\to\;\Omega^{\,d-2}\,\sqrt{-h}\,h^{\alpha\beta}.$$
> This equals its original value for every $\Omega$ iff the exponent vanishes, i.e. $d-2=0$, so **$d=2$** — the string worldsheet is the unique case. (The $X$-kinetic term has no other $h$-dependence, so this single factor decides the whole action. For $d\ne2$ the action rescales by $\Omega^{d-2}$ and is not Weyl invariant.)
>
> **(b)** The kinetic term carries a leftover $\Omega^{d-2}$, so to restore Weyl invariance we need a factor that cancels it. A bare cosmological-constant term $\sqrt{-h}$ does *not* do this: under $h_{\alpha\beta}\to\Omega^2 h_{\alpha\beta}$ it scales as $\Omega^{d}$, which neither cancels the $\Omega^{d-2}$ nor is invariant on its own — it just adds a second non-invariant piece. The genuine minimal fix is a **Weyl-compensating scalar**: introduce a field $\phi(\xi)$ that itself transforms under Weyl, say $\phi\to\Omega^{-1}\phi$, and multiply the Lagrangian by $\phi^{\,d-2}$. That factor then contributes $\Omega^{-(d-2)}$, exactly cancelling the kinetic term's $\Omega^{d-2}$ so the total is invariant. (Such a field is the higher-dimensional cousin of the Liouville mode / dilaton; assigning it the right Weyl weight is exactly what "soaks up" the extra factor.) The price: unlike the $d=2$ string, the action now carries this extra dynamical scalar, so it is **no longer just the quadratic $\int\sqrt{-h}\,h^{\alpha\beta}\partial_\alpha X\!\cdot\!\partial_\beta X$** and the metric is no longer pure gauge — the gauge counting "3 components = 3 symmetries" that flattened the worldsheet is a 2D miracle with no clean analogue.
>
> The standard alternative is to *give up* Weyl invariance instead of restoring it: the textbook Polyakov $p$-brane simply adds a bare cosmological term $-\Lambda\!\int d^d\xi\,\sqrt{-h}$ alongside the kinetic piece. Weyl symmetry is then gone, but the $h_{\alpha\beta}$ equation of motion forces $h_{\alpha\beta}$ to equal the induced metric $\partial_\alpha X\!\cdot\!\partial_\beta X$, recovering the Nambu–Goto brane. Either way, branes lack the tractable free-CFT description that makes the string quantizable.
