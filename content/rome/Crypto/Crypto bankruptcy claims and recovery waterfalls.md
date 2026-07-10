---
title: Crypto bankruptcy claims and recovery waterfalls
created: 2026-07-10
source: llm
status: seed
tags: [crypto, markets, bankruptcy, custody, regulation, risk]
as_of: 2026-07-10
desk: crypto-markets
review_after: 2027-01-10
---
In a crypto insolvency, the account balance on a screen is not the recovery: ownership, debtor identity, collateral, priority, claim valuation, estate costs, and the plan's distribution currency determine which waterfall the customer enters and what eventually comes out.

Up: [[Crypto]]

Related: [[Custody rehypothecation and counterparty risk]] · [[Stablecoin reserve and redemption risk]] · [[Stablecoin yield is a balance-sheet claim]] · [[Token holder rights are not equity rights]]

> [!warning]
> This is a comparative research framework, not legal advice. The detailed rules below describe U.S. federal bankruptcy law and selected U.S. cases. Insolvency, trust, custody, setoff, property, and client-asset rules differ by jurisdiction, entity, product, governing agreement, and fact pattern. A claim deadline or distribution notice requires advice on the actual case.

## The waterfall begins before priority

People often imagine bankruptcy as a single queue: secured lenders first, customers next, shareholders last. That skips the most consequential question. A claimant must first establish **what the customer owns and what the debtor owns**. Property that the debtor holds only in a legally effective custodial or trust capacity may be returned or excluded from the distributable estate; it is not necessarily a recovery *from* the estate. By contrast, if the customer transferred title and received a contractual promise to be repaid, the customer generally owns a claim while the debtor owns the deposited asset. The customer then shares in a bankruptcy waterfall.

Section 541 of the U.S. Bankruptcy Code defines the estate broadly to include the debtor's legal or equitable interests when the case begins, while preserving the distinction between legal title and an equitable interest the debtor does not own. That statutory boundary does not decide by itself whether a token in an omnibus wallet belongs beneficially to customers. Courts look to applicable non-bankruptcy property law, the contract, the relevant entity, the product, the records, control, and the facts. Onchain location is evidence of control and tracing, not a self-executing legal classification.

The January 2023 Celsius Earn opinion demonstrates the stakes without establishing a universal crypto rule. The Bankruptcy Court for the Southern District of New York held that Celsius's then-operative terms unambiguously transferred title to assets deposited in Earn accounts; the assets remaining there on the petition date were estate property, and Earn account holders had unsecured claims subject to reserved defenses. The court emphasized the contract and record before it. It did **not** hold that every exchange balance, hosted wallet, staking arrangement, or customer asset everywhere belongs to the intermediary.

This creates two analytically separate lanes:

1. **Property or return claim.** The claimant argues that identified assets, or an equitable interest in them, never became distributable property of the debtor. Success can put the assets outside the ordinary creditor waterfall, although tracing, commingling, shortfalls, administrative procedure, and competing rights can complicate return.
2. **Payment claim.** The claimant accepts or is held to have a right against the debtor rather than ownership of particular assets. Allowance, amount, collateral, priority, subordination, setoff, and plan treatment then control recovery.

Words such as “custody,” “wallet,” “deposit,” and “your crypto” are not enough. A useful pre-failure review asks whether title remains with the customer; whether the company may lend, pledge, stake, rehypothecate, or use assets for its own account; whether records identify each customer's entitlement; whether assets sit with the contracting debtor or an affiliate; and whether governing law recognizes the intended trust or custody form. [[Custody rehypothecation and counterparty risk]] develops that classification problem. This note focuses on what happens after classification.

## Build the claim before estimating the recovery

A bankruptcy claim is not simply the number an application displayed at failure. At least six dimensions matter.

### The obligated entity

Crypto groups commonly contain an exchange operator, lending entity, international affiliate, U.S. affiliate, foundation, token issuer, custodian, and service company. Joint administration lets related cases share procedure; it does not automatically collapse their balance sheets or make every entity liable for every account. A strong claim against an asset-poor entity can recover less than a weaker claim against an asset-rich one. Guarantees, intercompany claims, substantive-consolidation disputes, and settlements may change the map, but brand identity is not debtor identity.

The claimant should therefore map the click-through agreement, statements, transfers, wallet records, and representations to a named legal entity. The estate should likewise map each recoverable asset and cause of action to its owner. A consolidated dashboard that nets the whole group can conceal the legal waterfall that actually matters.

### Allowed amount and denomination

Section 502 governs allowance of claims and generally directs the court, when an objection is made, to determine the amount as of the petition date, subject to statutory exceptions. Section 502(c) permits estimation of contingent or unliquidated claims when liquidation would unduly delay administration. Crypto makes this unusually visible because the claimant may think in units of BTC, ETH, or another token while the estate must compare claims, solicit votes, reserve distributions, and administer a plan.

The FTX court's June 2024 digital-asset estimation opinion is a concrete case-specific example. The court approved petition-date estimation under section 502(c) for certain digital-asset claims after considering competing valuation methods. That did not create a general law that every crypto bankruptcy must pay petition-date dollars, nor did it promise in-kind return. It shows why **claim percentage** and **economic recovery** can diverge. A distribution described as 118 cents per allowed dollar can still be worth far less than the current market value of the token quantity originally shown in an account; conversely, a cash recovery above 100% of petition-date principal may include plan-defined interest while remaining a cash claim, not restored token exposure.

Four numbers should never be collapsed:

- token units shown before failure;
- allowed claim value and its valuation date;
- plan distribution value and currency when paid; and
- present economic value after delay, taxes, fees, price changes, and lost optionality.

### Secured, priority, general unsecured, or subordinated

Section 506 generally divides an allowed claim backed by estate property into a secured claim up to the value of the creditor's collateral and an unsecured claim for the deficiency. Perfection and priority come from applicable law, not from calling a loan “secured” in marketing. A customer who granted the platform rights in tokens does not thereby receive collateral from the platform. The direction of the lien matters.

Section 507 lists priority unsecured claims, including specified administrative, wage, employee-benefit, deposit, and tax categories under detailed limits and conditions. Ordinary crypto customer claims do not receive a bespoke federal priority merely because they are retail claims or were described commercially as deposits. Whether a particular claim fits any statutory category requires the actual facts and current law.

General unsecured claims usually share pro rata within their class after senior claims and required reserves. Section 510 preserves enforceable subordination agreements and authorizes equitable subordination under specified principles. Contractually junior debt, penalty-like components, insider claims, or claims affected by misconduct litigation can therefore sit below ordinary unsecured claims. Equity is the residual layer and usually receives value only after creditor entitlements are satisfied or a consensual plan provides otherwise.

### Setoff, netting, and defenses

Gross assets and gross liabilities can overstate distributable value. Section 553 largely preserves qualifying setoff rights rather than creating them, subject to bankruptcy limits. A creditor that owes the debtor on one transaction while holding a claim against the debtor may face netting, but mutuality, entity identity, timing, and the contract matter. Derivatives safe harbors and close-out provisions add another product-specific layer.

Claims can also be disputed, reduced, recharacterized, subordinated, or temporarily disallowed. A scheduled balance may not be “allowed” if it is contingent, unliquidated, disputed, filed late, unsupported, subject to an objection, or vulnerable under section 502(d) because the claimant has not returned an avoidable transfer. Filing and reconciliation procedure therefore affect timing even when the estate expects ultimately to pay the class.

## A practical recovery waterfall

No single diagram fits every Chapter 11 plan, but the following sequence prevents the most common analytical errors.

### Layer 0 — assets that are not distributable estate property

Identify customer-owned, trust, bailed, or other excluded property first. Determine whether assets are specifically identifiable, fungible but adequately recorded, commingled, missing, or subject to competing liens. If the pool is short, governing law and case orders determine whether customers share the shortfall, trace particular property, or fall back to claims. Calling this layer “100% recovery” can be misleading when return is delayed, assets are missing, or administrative costs attach.

### Layer 1 — collateral and ownership-specific remedies

Valid secured creditors look to their collateral, subject to valuation, perfection, surcharge, adequate-protection, and avoidance issues. The secured portion does not automatically share with general unsecured creditors; any deficiency ordinarily joins the unsecured layer. Reclamation, constructive-trust, or equitable-lien theories may be asserted in some cases, but they are fact- and state-law-dependent and can conflict with bankruptcy's policy of equal treatment. An allegation of fraud does not automatically let one victim leapfrog similarly situated creditors.

### Layer 2 — estate administration and priority claims

The estate must fund the process that preserves, realizes, and distributes value. Section 503 defines categories of administrative expense, and section 507 gives allowed administrative expenses high priority. Professional fees, post-petition operations, wind-down costs, litigation, data reconstruction, cybersecurity, asset custody, tax, and distribution infrastructure can consume value before general unsecured distributions. Debtor-in-possession financing or court-approved sale financing may add liens or priority under separate orders.

Other section 507 priorities then enter according to the statute and the plan. A headline asset figure that ignores these costs and reserves is not a recovery estimate. Nor should all professional spending be treated as pure leakage: investigation, litigation, asset tracing, and orderly sales can enlarge the estate. The correct question is marginal value recovered versus marginal cost and delay.

### Layer 3 — general unsecured claims

Allowed general unsecured claims share the distributable pool according to the confirmed plan. A simplified class recovery is:

$$
R_{GU}=\frac{V_{estate}-V_{excluded}-V_{secured\ distributions}-C_{admin}-C_{priority}-Reserves}{Allowed\ general\ unsecured\ claims},
$$

bounded by the plan's treatment and claim caps. This is a framework, not an accounting identity: excluded property should not have entered distributable estate value in the first place; secured collateral can generate deficiency claims; reserves can later be released; litigation recoveries arrive over time; convenience classes may receive different treatment; and intercompany settlements can move both numerator and denominator.

Within a class, Chapter 11 generally requires the same treatment for each claim unless a holder agrees to less, under section 1123(a)(4). Classification can nevertheless create several unsecured classes with different legal rights or settlements. Section 1129 supplies confirmation requirements, including the best-interests test for impaired dissenting holders and, when applicable, the cramdown rules. “Absolute priority” is therefore a confirmation constraint, not a guarantee that every unsecured creditor receives cash before any operational stakeholder obtains anything under every consensual structure.

### Layer 4 — subordinated claims and equity

Contractually or equitably subordinated claims receive value only as their governing agreement, judgment, or plan permits. Equity interests take the residual. A native token held by a claimant is not automatically equity in the bankrupt operating company, but a claim based on that token can face valuation, classification, securities, subordination, or estate-owned-token conflicts. The label “community” supplies no statutory priority.

## Recoveries are path-dependent

The numerator is a moving portfolio, not a pile of cash waiting at filing. Estates may hold volatile tokens, venture investments, locked allocations, litigation claims, tax attributes, intellectual property, fiat, and claims against other failed firms. They may sell early, hedge where authorized, distribute assets in kind, or retain exposure. Each choice changes price risk, liquidity, custody cost, and time.

Avoidance actions also alter both fairness and timing. Sections 547 and 548 permit recovery of specified preferential or fraudulent transfers subject to defenses and limitations. A customer who withdrew shortly before filing may therefore be both a creditor and a defendant or settlement counterparty. Preference law is not a general punishment for withdrawing; it applies statutory elements, lookback periods, defenses, and case-specific settlements. Recoveries can enlarge the pool, but litigation expenses and reserves postpone distributions.

Time is an economic haircut. If a claimant expects $80 in three years on a $100 allowed claim, the present value at discount rate $d$ is $80/(1+d)^3$, before tax and case risk. Claims markets make that discount visible but add counterparty, documentation, transfer-restriction, information, and adverse-selection risks. A quoted claims price is not an official recovery forecast: it embeds probability, timing, liquidity, buyer costs, and bargaining power.

Distribution mechanics can create a final loss layer. Identity verification, sanctions screening, tax forms, supported jurisdictions, distribution agents, wallet compatibility, minimum thresholds, and unclaimed-property rules can determine whether an allowed claimant receives value on schedule. Claimants should use only authenticated case channels; bankruptcy-themed phishing is especially dangerous because real distributions often require updated account information. No legitimate analysis requires a seed phrase or wallet signature.

## Chapter 7, Chapter 11, and non-U.S. proceedings

Chapter 7 is liquidation under a trustee, with section 726 providing the distribution order for property of the estate after secured and estate-property questions. Chapter 11 can sell assets, reorganize a business, create a recovery trust, or liquidate through a plan. The plan defines classes, consideration, reserves, governance, and distribution mechanics subject to confirmation law. A “Chapter 11 recovery” is therefore not necessarily continued ownership in a revived exchange.

Outside the United States, do not transplant this sequence mechanically. The United Kingdom's special administration and client-asset concepts, European Union member-state insolvency laws, Singapore schemes and judicial management, Bahamas liquidation proceedings, and other regimes use different property, priority, setoff, recognition, and officeholder rules. Cross-border cases may involve Chapter 15 recognition, parallel proceedings, elections, protocols, or settlements. The same brand can produce different outcomes by customer entity and location.

## A due-diligence checklist before failure

The best waterfall analysis happens while withdrawal still works. For each product, record:

1. the contracting legal entity and governing law;
2. whether the customer retains title or lends/transfers the asset;
3. whether the intermediary can rehypothecate, stake, pledge, or commingle it;
4. the custodian, wallet structure, books-and-records method, and reconciliation frequency;
5. any customer lien, guarantee, insurance, trust, or statutory client-asset protection—and its exclusions;
6. direct redemption rights versus dependence on a secondary market;
7. affiliate exposures, related-party loans, and concentration in another crypto intermediary;
8. claim denomination, valuation, setoff, dispute, arbitration, and insolvency clauses;
9. evidence the customer can retain independently: agreements, statements, transaction hashes, and entity notices; and
10. whether the promised yield compensates for becoming an unsecured lender.

None of these replaces current counsel or guarantees that drafting will survive a factual challenge. They do reveal when a product marketed as a wallet is economically a loan, when a reserve is not bankruptcy-remote, and when an attractive yield is compensation for entering the weakest part of the waterfall.

## Why it matters

Crypto failures turn three different losses into one misleading percentage: missing assets, legal subordination, and market movement during delay. Separating them improves both risk control and post-failure analysis. A customer may “recover 100%” of an allowed petition-date dollar claim while receiving fewer economic resources than the token position would now represent. Another customer may receive the original asset because it was never estate property, making the creditor percentage irrelevant. A secured lender may be paid from collateral while an identically sized unsecured account receives a fraction.

The central lesson is not that terms of service always win or that customers always stand last. It is that the waterfall is built from enforceable rights, entity-specific assets, statutory priority, and a court-approved process—not interface labels. Before taking yield or custody risk, ask what legal claim exists after the platform stops honoring withdrawals. After failure, ask which estate, which valuation date, which class, which currency, and which distribution conditions define the advertised recovery.

## Sources

- [11 U.S.C. § 541 — Property of the estate](https://www.law.cornell.edu/uscode/text/11/541) — statutory starting point for estate property and limited-title interests; accessed 2026-07-10.
- [11 U.S.C. § 502 — Allowance of claims or interests](https://www.law.cornell.edu/uscode/text/11/502) — claim allowance, petition-date determination, estimation, and section 502(d); accessed 2026-07-10.
- [11 U.S.C. § 506 — Determination of secured status](https://www.law.cornell.edu/uscode/text/11/506) — secured and deficiency claim framework; accessed 2026-07-10.
- [11 U.S.C. § 507 — Priorities](https://www.law.cornell.edu/uscode/text/11/507) and [11 U.S.C. § 503 — Allowance of administrative expenses](https://www.law.cornell.edu/uscode/text/11/503) — statutory priority and administrative-expense categories; accessed 2026-07-10.
- [11 U.S.C. § 510 — Subordination](https://www.law.cornell.edu/uscode/text/11/510), [§ 553 — Setoff](https://www.law.cornell.edu/uscode/text/11/553), and [§ 726 — Distribution of property of the estate](https://www.law.cornell.edu/uscode/text/11/726) — subordination, preserved setoff, and Chapter 7 distribution; accessed 2026-07-10.
- [11 U.S.C. § 1123 — Contents of plan](https://www.law.cornell.edu/uscode/text/11/1123) and [§ 1129 — Confirmation of plan](https://www.law.cornell.edu/uscode/text/11/1129) — equal-treatment and confirmation constraints; accessed 2026-07-10.
- [11 U.S.C. § 547 — Preferences](https://www.law.cornell.edu/uscode/text/11/547) and [§ 548 — Fraudulent transfers and obligations](https://www.law.cornell.edu/uscode/text/11/548) — avoidance-action elements and defenses; accessed 2026-07-10.
- [U.S. Bankruptcy Court, S.D.N.Y., *In re Celsius Network LLC*, Memorandum Opinion and Order Regarding Ownership of Earn Account Assets (Jan. 4, 2023)](https://www.nysb.uscourts.gov/sites/default/files/opinions/312902_1822_opinion.pdf) — primary, product- and contract-specific ownership ruling; accessed 2026-07-10.
- [U.S. Bankruptcy Court, D. Del., *In re FTX Trading Ltd.*, Memorandum Opinion and Order Regarding Estimation of Digital Asset Claims (June 26, 2024)](https://www.deb.uscourts.gov/sites/deb/files/opinions/FTX%20Opinion%20and%20Order%20Digital%20Asset%20Estimation.pdf) — primary decision on section 502(c) petition-date estimation in that case; accessed 2026-07-10.
- [U.S. Bankruptcy Court, D.N.J., BlockFi case information, No. 22-19361](https://www.njb.uscourts.gov/BlockFi) — official docket and case locator illustrating product- and entity-specific administration; accessed 2026-07-10.
- [SEC, BlockFi lending-product settlement (Feb. 14, 2022)](https://www.sec.gov/newsroom/press-releases/2022-26) — primary description that BlockFi Interest Account investors lent crypto in exchange for promised interest; accessed 2026-07-10.
- [Reuters, “U.S. judge says Celsius Network owns most customer crypto deposits” (Jan. 4, 2023)](https://www.reuters.com/legal/us-judge-says-celsius-network-owns-most-customer-crypto-deposits-2023-01-05/) — independent contemporary context on the Celsius ruling; accessed 2026-07-10.
- [Associated Press, “Crypto firms acted like banks, then collapsed like dominoes” (Jan. 23, 2023)](https://apnews.com/article/f7d97ff9cc12afc1fd845648b5f13ea7) — independent context on the interconnected lender failures and absence of bank-like backstops; accessed 2026-07-10.

## Open questions

- When customer assets are fungible, commingled, and partly missing, which tracing or pro-rata rules will U.S. appellate courts ultimately adopt for non-security crypto assets?
- How will state commercial-law reforms for controllable electronic records interact with custody characterization, perfection, and federal bankruptcy in a major intermediary failure?
- Which jurisdictions provide genuinely operational client-asset segregation for spot crypto, rather than disclosure language without tested insolvency machinery?
- How should a recovery dashboard report petition-date claim percentage, current-token-equivalent value, time discount, and taxes without presenting a false single number?
- When is in-kind distribution value-maximizing after custody, liquidity, sanctions, and operational costs are included?
