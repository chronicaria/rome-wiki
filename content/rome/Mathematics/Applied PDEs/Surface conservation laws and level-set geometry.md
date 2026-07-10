---
title: Surface conservation laws and level-set geometry
created: 2026-07-10
source: llm
status: seed
tags: [mathematics, applied-pdes, surface-pdes, conservation-laws, level-sets, differential-geometry]
as_of: 2026-07-10
desk: Applied partial differential equations
---

A conservation law on an evolving surface combines ordinary flux balance with an unavoidable area-change term; a level-set description supplies the normal, tangential operators, curvature, and interface velocity needed to write and test that law without fitting a global coordinate chart.

Up: [[Applied PDE research frontier 2026]] · Prerequisites: [[Finite-volume methods for conservation laws]] · [[Level-set geometry for surface conservation laws]] · Related: [[Structure-preserving numerical methods]] · [[BealeSurfaceSolver research (MOC)]]

## Why a flat-space conservation law is not enough

Let $\Gamma(t)\subset\mathbb R^{d+1}$ be a smooth, orientable, evolving hypersurface for $0\le t\le T$. Think of a closed curve in the plane when $d=1$, or a closed two-dimensional surface in three-dimensional space when $d=2$. A scalar surface density $u(x,t)$ is measured per unit surface area, so the amount in a patch $M(t)\subset\Gamma(t)$ is

$$
Q_{M}(t)=\int_{M(t)}u\,dA.
$$

Even if no material enters or leaves $M(t)$, $u$ need not remain pointwise constant: stretching the patch increases $dA$ and dilutes a fixed amount. The Euclidean equation $\partial_tu+\nabla\cdot f=s$ therefore cannot simply be copied onto $\Gamma(t)$. One must specify (i) how the surface moves, (ii) which surface particles define a material patch, and (iii) flux relative to those particles.

Assume a sufficiently smooth velocity field $v:\Gamma(t)\to\mathbb R^{d+1}$ carries material points. Decompose it into

$$
v=v_\tau+V_n n,
\qquad v_\tau=Pv,
\qquad V_n=v\cdot n,
$$

where $n$ is a chosen unit normal and $P=I-n\otimes n$ projects ambient vectors onto the tangent space. The normal speed $V_n$ changes the geometric set $\Gamma(t)$. The tangential velocity $v_\tau$ only relabels points on that set, but it is physically relevant when $u$ is attached to moving material. Thus “the velocity of the surface” is incomplete data for a material conservation law unless its tangential convention is also declared.

Throughout, the derivation is classical: $\Gamma(t)$, $v$, $u$, and the fluxes are smooth enough for differentiation and surface integration by parts. Weak formulations extend the balance beyond this regularity, but existence and uniqueness depend on the particular PDE and are not asserted here.

## Tangential differential operators

For a scalar $u$ on $\Gamma(t)$, choose any smooth ambient extension $\widetilde u$ near the surface and define

$$
\nabla_\Gamma u=P\nabla\widetilde u.
$$

The result is independent of the extension because $P$ removes the normal derivative. For an ambient vector field $w$ restricted to the surface,

$$
\nabla_\Gamma\cdot w=\operatorname{tr}(P\nabla\widetilde w).
$$

When $w$ is tangential this is the intrinsic surface divergence. With the convention

$$
\kappa=\nabla_\Gamma\cdot n,
$$

an outward-oriented sphere of radius $R$ has $\kappa=d/R>0$. This sign convention matters: papers using mean-curvature vector or the opposite scalar convention may display a minus sign where this note has a plus sign.

The material derivative along the specified particle velocity is

$$
\partial^\bullet u
=\frac{d}{dt}u(X(a,t),t)
=\partial_t\widetilde u+v\cdot\nabla\widetilde u,
$$

where $X_t(a,t)=v(X(a,t),t)$. Although the last expression uses an extension, the derivative along the material trajectory is intrinsic once the transport map is fixed.

## The evolving-surface transport theorem

Let a material patch be parametrized by $X(\xi,t)$, with tangent vectors $X_i=\partial_iX$ and metric $g_{ij}=X_i\cdot X_j$. Its area element is $\sqrt{g}\,d\xi$, where $g=\det(g_{ij})$. Differentiate the metric:

$$
\partial_tg_{ij}
=(\partial_i v)\cdot X_j+X_i\cdot(\partial_jv).
$$

Jacobi's determinant identity gives

$$
\partial_t\sqrt g
=\frac12\sqrt g\,g^{ij}\partial_tg_{ij}
=\sqrt g\,\nabla_\Gamma\cdot v.
$$

The last equality is the coordinate expression of the surface divergence. Applying the product rule to $u(X(\xi,t),t)\sqrt g$ yields the surface transport theorem

$$
\boxed{
\frac{d}{dt}\int_{M(t)}u\,dA
=\int_{M(t)}\left(\partial^\bullet u+u\nabla_\Gamma\cdot v\right)dA.}
\tag{1}
$$

Equation (1) is a theorem under the stated smoothness assumptions, not a modeling hypothesis. Its second term is forced by geometry. Setting $u=1$ shows directly that

$$
\frac{d}{dt}|M(t)|=\int_{M(t)}\nabla_\Gamma\cdot v\,dA.
$$

The decomposition of the dilation rate is especially revealing:

$$
\nabla_\Gamma\cdot v
=\nabla_\Gamma\cdot v_\tau+V_n\kappa.
\tag{2}
$$

For a sphere expanding with constant $V_n=\dot R$ and $v_\tau=0$, (2) gives $\nabla_\Gamma\cdot v=d\dot R/R$. Since sphere area scales as $R^d$, this is exactly its logarithmic area-growth rate. That limiting case fixes the sign of the curvature term.

## From integral balance to the local conservation law

Let $j$ be a tangential non-advective flux measured relative to the material motion, and let $s$ be a source per unit area. For every material patch $M(t)$, impose

$$
\frac{d}{dt}\int_{M(t)}u\,dA
=-\int_{\partial M(t)}j\cdot\mu\,ds
+\int_{M(t)}s\,dA,
\tag{3}
$$

where $\mu$ is the outward unit **conormal**: it lies in the tangent plane of $\Gamma(t)$ and is normal to the patch boundary. The surface divergence theorem converts the boundary flux into

$$
\int_{\partial M(t)}j\cdot\mu\,ds
=\int_{M(t)}\nabla_\Gamma\cdot j\,dA.
$$

Combining this identity with (1), then using the arbitrariness of $M(t)$, produces

$$
\boxed{
\partial^\bullet u
+u\nabla_\Gamma\cdot v
+\nabla_\Gamma\cdot j=s.}
\tag{4}
$$

Equation (3) is the physical modeling statement; equation (4) follows from it under classical regularity. This distinction matters when interpreting evidence: a numerical method may approximately satisfy (4) pointwise while failing the integrated balance (3), or may conserve globally while being locally inconsistent.

For Fickian diffusion, $j=-D\nabla_\Gamma u$ with $D>0$, and (4) becomes

$$
\partial^\bullet u+u\nabla_\Gamma\cdot v
-\nabla_\Gamma\cdot(D\nabla_\Gamma u)=s.
\tag{5}
$$

If $D$ is constant, the diffusion operator is $D\Delta_\Gamma u$, where $\Delta_\Gamma=\nabla_\Gamma\cdot\nabla_\Gamma$ is the Laplace–Beltrami operator. The minus sign in (5) is only apparent: moving the flux-divergence term to the right gives $\partial^\bullet u+u\nabla_\Gamma\cdot v=D\Delta_\Gamma u+s$.

On a closed surface with $s=0$, integrating (4) gives exact total conservation,

$$
\frac{d}{dt}\int_{\Gamma(t)}u\,dA=0,
$$

because a closed surface has no patch boundary and the integral of a tangential divergence vanishes. With a physical boundary, the conormal flux must be retained; “closed surface” is not a cosmetic assumption.

One may also expand (4) after choosing an extension constant in the normal direction, $n\cdot\nabla\widetilde u=0$ on $\Gamma(t)$. Then

$$
\partial_t\widetilde u
+\nabla_\Gamma\cdot(u v_\tau)
+uV_n\kappa
+\nabla_\Gamma\cdot j=s
\quad\text{on }\Gamma(t).
\tag{6}
$$

This Eulerian-looking form separates tangential advection from normal geometric dilation. It depends on the stated extension convention; (4) is the cleaner intrinsic statement.

## How a level set supplies the geometry and motion

Suppose the surface is the regular zero set

$$
\Gamma(t)=\{x:\phi(x,t)=0\},
\qquad |\nabla\phi|>0\text{ near }\Gamma(t).
$$

Then

$$
n=\frac{\nabla\phi}{|\nabla\phi|},
\qquad P=I-n\otimes n,
\qquad \kappa=\nabla\cdot n
\quad\text{on }\Gamma(t).
\tag{7}
$$

The last equality holds because $n$ is unit length, so its normal directional contribution to the ambient divergence vanishes for the normalized-gradient extension. More generally, using $\nabla_\Gamma\cdot n$ avoids relying on an extension convention.

Differentiate $\phi(X(a,t),t)=0$ along a moving surface point:

$$
0=\phi_t+v\cdot\nabla\phi
=\phi_t+V_n|\nabla\phi|.
$$

Therefore the level-set kinematic equation is

$$
\boxed{\phi_t+V_n|\nabla\phi|=0.}
\tag{8}
$$

If a full ambient velocity $v$ is prescribed, the equivalent advection form is $\phi_t+v\cdot\nabla\phi=0$; its tangential part drops out because $\nabla\phi$ is normal. This confirms a central separation: the level-set equation determines the geometric normal motion but cannot, by itself, determine the tangential material labeling needed in $\partial^\bullet u$.

The representation is nonunique. Replacing $\phi$ by $h\phi$ with smooth positive $h$ leaves the zero set unchanged but changes $|\nabla\phi|$ away from the interface. Geometric quantities must therefore use invariant combinations such as $n=\nabla\phi/|\nabla\phi|$. Reinitializing $\phi$ toward a signed-distance function may improve conditioning, but a numerical reinitialization that moves the zero set introduces geometric and conservation error. The formula $\kappa=\nabla\cdot(\nabla\phi/|\nabla\phi|)$ also uses second derivatives and becomes sensitive when $|\nabla\phi|$ is small.

For integration, the coarea identity gives the formal distributional relation

$$
\int_{\Gamma(t)}u\,dA
=\int_{\mathbb R^{d+1}}\widetilde u(x,t)\,\delta(\phi(x,t))|\nabla\phi(x,t)|\,dx.
\tag{9}
$$

In computation, $\delta$ is replaced by a regularized delta or the surface is reconstructed in cut cells. Equation (9) is exact with the Dirac distribution under regularity assumptions; a smeared-delta quadrature is an approximation whose mass error depends on bandwidth, extension, grid resolution, and the quality of $\phi$.

## Fixed charts, moving surfaces, and what not to conflate

The neighboring note [[Level-set geometry for surface conservation laws]] derives a fixed graph chart with metric area factor $\sqrt g$ and the stationary identity

$$
\nabla_\Gamma\cdot f=\frac1{\sqrt g}\partial_i(\sqrt g f^i).
$$

That formula explains conservative spatial fluxes on one fixed surface. The present transport identity explains what changes when the chart or surface evolves: $\partial_t\sqrt g=\sqrt g\,\nabla_\Gamma\cdot v$. Together they imply the chart-conservative form

$$
\partial_t(\sqrt g\,u)+\partial_i(\sqrt g\,j^i)=\sqrt g\,s
\tag{10}
$$

for a material parametrization, with advective contributions absorbed into the moving coordinates. If the coordinates do not follow material particles, relative transport terms must be added. Forgetting which velocity moves the mesh, which moves the material, and which moves only the geometric set is a common source of false conservation.

Level-set and fitted-surface methods are representations, not conservation guarantees. A fitted evolving mesh can violate conservation if its discrete area change is inconsistent with its mesh velocity. An unfitted level-set method can conserve if cut-cell measures, interface fluxes, and transfers between active degrees of freedom satisfy a compatible discrete balance. Conversely, accurate normals and curvature do not by themselves enforce (3).

## A verification ladder for computation

The continuum identities suggest tests stronger than visual agreement.

1. **Geometry identities.** Check $|n|=1$, $Pn=0$, and tangency of every declared surface flux. On a sphere of radius $R$, verify $\kappa=d/R$ under the chosen sign convention.
2. **Kinematic residual.** For a manufactured $\phi$, evaluate $r_\phi=\phi_t+V_n|\nabla\phi|$ on the zero set and establish refinement convergence.
3. **Area transport.** With $u=1$, compare numerical area change against $\int_{\Gamma_h}\nabla_{\Gamma_h}\cdot v_h\,dA_h$. An expanding sphere should reproduce $A(t)/A(0)=[R(t)/R(0)]^d$.
4. **Uniform-density dilution.** With $j=s=0$ on a uniformly expanding sphere and spatially uniform initial data, (4) gives $u(t)=u(0)[R(0)/R(t)]^d$. Constant $u$ is the wrong answer unless surface area is constant.
5. **Closed-surface mass.** Track $M_h(t)=\int_{\Gamma_h(t)}u_h\,dA_h$. Report signed drift, absolute drift, and drift relative to the initial mass. A nearly correct final mass can hide oscillatory transfer errors.
6. **Local balance.** Test moving subpatches or cut-cell control volumes, not only the global sum. Equal-and-opposite numerical fluxes should cancel on internal interfaces.
7. **Representation invariance.** Repeat geometry calculations with $\phi$ and $h\phi$ for positive nonconstant $h$. The continuum surface is identical; sensitivity reveals a discretization's dependence on level-set normalization.
8. **Remeshing or active-set transfer.** Separate PDE-step error from the mass change caused when degrees of freedom are created, deleted, or interpolated. This is where a discrete geometric conservation law and conservative transfer become essential.

Passing these tests is numerical evidence for an implementation, not a proof of stability or convergence. A convergence theorem requires a specified scheme, norms, regularity, consistency estimates, and stability arguments. A mass-conserving scheme may still be inaccurate, unstable in another norm, non-positive, or convergent to the wrong weak solution.

## A manufactured expanding-sphere solution

A compact benchmark exercises kinematics, curvature, dilution, diffusion, and sources at once. Let

$$
\Gamma(t)=\{x:|x|=R(t)\},
\qquad \phi(x,t)=|x|-R(t),
$$

with outward normal $n=x/|x|$, normal speed $V_n=\dot R$, zero tangential velocity, and $\kappa=d/R$. Choose a smooth spherical harmonic $Y_\ell$ on the unit sphere and set

$$
u(x,t)=a(t)Y_\ell\!\left(\frac{x}{|x|}\right).
$$

For constant-normal extension, $\partial^\bullet u=a'(t)Y_\ell$. Scaling of the Laplace–Beltrami operator gives

$$
\Delta_{\Gamma(t)}u
=-\frac{\lambda_\ell}{R(t)^2}u,
\qquad \lambda_\ell=\ell(\ell+d-1).
$$

Thus the diffusion equation $\partial^\bullet u+u\nabla_\Gamma\cdot v=D\Delta_\Gamma u+s$ is satisfied by the manufactured source

$$
s=\left[a'(t)+\frac{d\dot R(t)}{R(t)}a(t)
+\frac{D\lambda_\ell}{R(t)^2}a(t)\right]Y_\ell.
$$

The mode $\ell=0$ with $D=s=0$ recovers pure dilution, $a(t)R(t)^d=\text{constant}$. Modes $\ell>0$ additionally test tangential diffusion and metric scaling. Because every term is known analytically, residual and solution errors can be measured separately; choosing $a(t)$ independently and retaining the resulting $s$ avoids accidentally testing only a special invariant solution.

## Connection to BealeSurfaceSolver

[[BealeSurfaceSolver research (MOC)]] uses implicit surfaces, chart-local metric factors, tangent projection, and conservation-form PDEs as an Andrew-specific research spine. The continuum framework above supplies questions against which such a codebase can be examined: Which velocity defines material transport? Is the surface fixed or evolving? Do chart weights and fluxes satisfy a discrete integral balance? Does changing the level-set representation leave geometric outputs invariant? If cut points or active unknowns change, is transfer conservative?

This note does **not** claim that the repository implements evolving-surface transport, satisfies a discrete geometric conservation law, or passes the proposed ladder. Those are repository-specific propositions requiring code inspection and reproducible experiments. The existing fixed-surface geometry note documents formulas from the inspected research materials; extending them to time-dependent surfaces would require explicit evidence about geometry updates, material velocity, and transfer between successive discrete surfaces.

## Why it matters

Surface conservation laws appear in membrane transport, surfactants, thin films, interfacial chemistry, evolving biological tissues, and fluids constrained to curved manifolds. The area-change term is not a small geometric correction: it determines whether a fixed amount dilutes under expansion or concentrates under contraction. Level sets make topology change and implicit geometry accessible on a background grid, but they also separate geometric motion from material motion and introduce representation, quadrature, and transfer errors. Writing the integral balance first keeps the physics visible and gives numerical methods invariant quantities to test.

## Sources

- [Dziuk and Elliott, “Finite element methods for surface PDEs,” *Acta Numerica* 22 (2013)](https://doi.org/10.1017/S0962492913000056) — authoritative review of surface differential operators, transport formulae, evolving-surface equations, and fitted, implicit, and diffuse-interface discretizations.
- [Dziuk and Elliott, “A fully discrete evolving surface finite element method,” *SIAM Journal on Numerical Analysis* 50 (2012)](https://doi.org/10.1137/110828642) — primary analysis of a fully discrete method for a conserved scalar undergoing advection and diffusion on a moving surface.
- [Deckelnick, Dziuk, and Elliott, “Computation of geometric partial differential equations and mean curvature flow,” *Acta Numerica* 14 (2005)](https://doi.org/10.1017/S0962492904000224) — authoritative treatment of geometric PDEs, parametric and level-set representations, and curvature-driven motion.
- [Osher and Sethian, “Fronts propagating with curvature-dependent speed,” *Journal of Computational Physics* 79 (1988)](https://doi.org/10.1016/0021-9991(88)90002-2) — foundational primary paper for Hamilton–Jacobi level-set evolution of moving fronts.
- [Olshanskii, Reusken, and Xu, “An Eulerian space-time finite element method for diffusion problems on evolving surfaces,” *SIAM Journal on Numerical Analysis* 52 (2014)](https://doi.org/10.1137/130918149) — primary unfitted space-time formulation for PDEs on implicitly represented evolving surfaces.

## Open questions

- Which weak-solution framework is most useful when the evolving surface is only Lipschitz in time or undergoes topology change?
- What minimal discrete geometric conservation law couples level-set advection, cut-cell quadrature, and conservative transfer between changing active sets?
- How should entropy stability and positivity be formulated for nonlinear hyperbolic conservation laws on evolving surfaces?
- Can one design high-order curvature and normal reconstruction that is simultaneously representation-invariant and compatible with local conservation?
- Which parts of the proposed verification ladder are already supported by reproducible BealeSurfaceSolver evidence, and which require new experiments?
