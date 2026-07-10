---
title: Custody rehypothecation and counterparty risk
created: 2026-07-10
source: llm
status: seed
tags: [crypto, markets, custody, counterparty-risk, market-structure]
as_of: 2026-07-10
desk: crypto-markets
review_after: 2027-01-10
---

Holding a crypto balance through an intermediary creates a chain of legal, operational, and credit claims whose strength cannot be inferred from an app balance or an onchain wallet balance alone.

Up: [[Crypto]]


## The asset and the claim are different objects

“I own one bitcoin on an exchange” can describe several different arrangements. The customer may have a contractual entitlement to an equivalent quantity while the platform controls pooled keys. The platform may state that title remains with the customer and that assets are not available to its creditors. A lending product may instead transfer title or authorize reuse, leaving the customer with a repayment claim. A prime broker may pass collateral to an affiliate, subcustodian, venue, or borrower. A fund share may give exposure through a regulated vehicle whose custodian holds the underlying asset. These structures can display the same unit balance while producing very different recovery rights.

Onchain control answers a narrow technical question: which key can authorize the next state transition? It does not, by itself, answer who owns the controlled property, whether the controller acts as trustee or debtor, whether another party has a security interest, or what happens after insolvency. Conversely, a strong legal entitlement is not enough if keys are lost, a signer is compromised, records do not reconcile, or the custodian cannot identify the customer’s share of a pooled address.

A useful custody analysis therefore keeps four layers separate:

1. **Technical control:** who can sign, upgrade, freeze, recover, or redirect the asset?
2. **Books and records:** can the intermediary map liabilities to assets accurately and continuously?
3. **Legal characterization:** is the customer a beneficial owner, securities-entitlement holder, secured creditor, or unsecured creditor?
4. **Economic reuse:** may the intermediary lend, pledge, stake, rehypothecate, or otherwise expose the asset to another obligor?

Failure at any layer can turn an apparently liquid balance into a delayed, disputed, or impaired claim.

## Custody is a balance-sheet architecture

The simplest custodial promise is safekeeping: the intermediary controls keys for the customer, does not use the asset for itself, maintains records, and returns the same kind and quantity on instruction. But even this promise requires a supporting balance-sheet architecture. The customer agreement must characterize title and creditor treatment. The custodian needs assets sufficient to meet liabilities. Operational systems must prevent unauthorized transfers and preserve an auditable link between omnibus wallets and customer subledgers. Affiliates and subcustodians must not introduce undisclosed claims.

Segregation is often used loosely. It can mean separate onchain addresses, separate internal ledgers, separate legal accounts, or merely accounting labels. Address segregation improves traceability but does not automatically create bankruptcy remoteness. Omnibus custody can still support customer ownership if the legal and recordkeeping structure is sound, while a labeled “customer wallet” can be weak if the agreement authorizes broad use or local law treats the asset as the intermediary’s property. The relevant question is not whether one sees a dedicated address; it is whether legal rights, records, and operational control agree.

The United States Bankruptcy Code begins broadly: an estate generally includes the debtor’s legal or equitable interests in property when the case starts. That makes characterization consequential. If assets are truly held for customers and the debtor lacks a beneficial interest, there is a stronger argument that they are not estate property. If customers merely have contractual repayment claims, they may compete with other creditors. This note is a research framework, not a conclusion about any platform or individualized legal advice; governing agreements, entity, jurisdiction, product, and facts control.

The SEC staff’s 2025 crypto-asset FAQ illustrates the distinction. It says SIPC generally does not protect customer claims for non-security crypto assets merely because a SIPC-member broker-dealer holds them. It also describes Article 8 treatment—carrying non-security crypto assets as financial assets in a securities account—as one possible way to improve the insolvency position, while warning that such assets may lack a specific insolvency regime. The careful reading is not “Article 8 guarantees recovery.” It is that legal architecture can materially change the claim, and the protection attached to traditional securities accounts should not be assumed for every crypto balance.

## Rehypothecation adds a second debtor

Rehypothecation is the reuse of collateral or customer assets by an intermediary, commonly through a pledge, loan, transfer, or other encumbrance. It is economically important because the same asset can support several linked obligations. Customer A transfers collateral to intermediary B; B pledges or lends it to C; C may deploy it elsewhere. A’s recovery then depends not only on B’s custody but also on the enforceability, liquidity, and default behavior of the downstream chain.

Reuse can finance credit and reduce funding costs. It also converts a custody question into counterparty-risk analysis. The intermediary may owe the customer an equivalent asset rather than preserve the original units. A maturity mismatch appears if customers can withdraw on demand while reused assets are locked, lent, staked, or posted against positions. A liquidity shock can force the intermediary to borrow or sell. A downstream default can create a balance-sheet hole even when the original keys were never hacked.

The risk is easy to hide in vocabulary. “Earn,” “rewards,” “margin,” “prime,” and “collateral optimization” may all imply that assets leave pure safekeeping. Yield is not produced by the custody label. It must come from a borrower, trading strategy, staking mechanism, issuer reserve portfolio, incentive program, or maturity/liquidity transformation. Each source adds a different obligor and failure mode. [[Stablecoin yield is a balance-sheet claim]] applies the same principle to stable-value products.

Restrictions on reuse are therefore substantive, not cosmetic. CFTC advisory material on distributed-ledger collateral notes that regulated collateral arrangements can be subject to segregation and limits on rehypothecation, repledge, reuse, investment, or transfer. It also emphasizes custody chains, freedom from third-party creditor claims, enforceability, and intermediary credit risk. These are useful general tests even when a retail crypto product falls outside that specific derivatives framework.

## Proof of reserves is necessary but incomplete

An address demonstration can establish that an entity controlled certain assets at a time. A liability tree can allow a customer to verify inclusion in a committed liability set. Neither alone proves solvency.

A reserve assessment needs at least:

- asset identity and quantity, including whether assets are native, wrapped, bridged, staked, borrowed, or internally issued;
- customer and non-customer liabilities, not merely balances selected for an attestation;
- encumbrances, liens, pledges, and negative balances;
- entity boundaries, so assets of one affiliate are not casually matched against liabilities of another;
- valuation and haircut policy for volatile or illiquid collateral;
- timing discipline, because assets can be borrowed briefly around a snapshot;
- control evidence, rather than an unverified address label;
- reconciliation between the onchain set and the internal ledger; and
- assurance scope, methodology, exceptions, and the professional responsibility of the examiner.

An overcollateralized snapshot may coexist with a dangerous maturity mismatch. A perfectly matched token count may still conceal a legal defect. A liability commitment may omit off-balance-sheet guarantees or litigation claims. An auditor’s financial-statement opinion, an agreed-upon-procedures report, an attestation, and a platform-created dashboard are not interchangeable. The question is exactly what was tested and what conclusion the practitioner is authorized to express.

Proof of reserves is strongest as a component of continuous controls: frequent reconciliation, independently validated liabilities, clear ownership, restricted reuse, governance over wallet changes, and credible wind-down procedures. It should narrow uncertainty, not erase the need for legal and credit analysis.

## Counterparty chains create correlated failure

Crypto intermediaries rarely operate in isolation. A platform may rely on a bank for cash, a stablecoin issuer for settlement assets, a cloud provider, an MPC or hardware-security vendor, an affiliated market maker, several exchanges, and external custodians. A fund or tokenized product may add administrator, trustee, transfer agent, broker, authorized participant, and oracle dependencies. Mapping only the visible platform misses the chain.

The central analytical unit is the **claim graph**. For each balance, identify the asset, controller, legal owner, recordkeeper, obligor, collateral, permitted reuse, withdrawal condition, governing entity, and insolvency venue. Then ask which nodes are shared across products. Two apparently diversified venue balances may depend on the same custodian. Several stablecoins may hold reserves at the same banks. A custodian and trading venue may be affiliates whose exposures are not truly independent.

Correlation rises during stress. Falling collateral values trigger margin calls; lenders shorten terms; customers request withdrawals; market depth deteriorates; stablecoin settlement becomes more expensive; and asset sales depress the collateral still further. Rehypothecation can transmit the shock because one default removes collateral expected elsewhere. Operational pauses intended to protect a platform can simultaneously prevent customers from reducing exposure.

This is why market capitalization, total value locked, or an onchain reserve address cannot measure intermediary resilience. Those metrics do not reveal seniority, maturity, enforceability, or contingent liabilities.

## A practical custody diligence stack

### 1. Identify the exact product and entity

Record the contracting legal entity, jurisdiction, regulator or license claimed, and product type. Spot custody, margin, lending, staking, derivatives collateral, and fund shares can have different terms on the same platform. Marketing pages are not substitutes for the governing agreement.

### 2. Read title and reuse clauses together

Find explicit language on title, beneficial ownership, security interests, setoff, liens, lending, staking, pledging, and transfers to affiliates or subcustodians. A title statement can be weakened by broad contrary permissions elsewhere. Coinbase’s current U.S. agreement provides a useful example of unusually explicit drafting for its Digital Asset Wallet: it states that supported assets are held for customers, title remains with them, the assets are not Coinbase property, and Coinbase will not loan or hypothecate them except as described or instructed. That language is product- and agreement-specific; it should not be generalized to every Coinbase service or treated as a judicial bankruptcy ruling.

### 3. Map withdrawal as a conditional promise

Document settlement times, minimums, fees, whitelists, cooling periods, network conditions, compliance holds, and the platform’s suspension rights. Test whether a withdrawal transfers a native asset, wrapper, or claim. “Available balance” is not the same as unconditional immediate delivery.

### 4. Inspect control and reconciliation

Ask how keys are generated, distributed, backed up, rotated, and recovered; who can change policies; how hot-wallet limits work; and whether transfers require independent approval. Examine the frequency of asset-liability reconciliation and treatment of forks, airdrops, staking rewards, slashing, and chain halts. The SEC staff’s December 2025 broker-dealer custody statement is nonbinding staff guidance, but its operational questions are instructive: policies for blockchain malfunctions, attacks, forks, lawful freezes, and transfer during wind-down are part of custody readiness.

### 5. Evaluate assurance without upgrading it

Record the reporting period, included entities, asset perimeter, liability definition, procedures, exceptions, and whether the work is an audit or narrower engagement. Verify that published addresses still map to the claimed entity and look for material changes after the report date.

### 6. Stress the claim graph

Apply simultaneous shocks: a 40% collateral decline, stablecoin impairment, major borrower default, chain halt, withdrawal surge, or subcustodian freeze. Estimate which obligations mature first, which collateral is liquid, what can be rehypothecated, and where contractual termination or setoff rights change recovery. The objective is not a precise loss forecast; it is to reveal hidden dependence and circular collateral.

## Why it matters

Self-custody removes some intermediary credit risk but adds key-management, inheritance, transaction, smart-contract, and personal-security risks. Regulated or well-designed custody can reduce operational burden and support institutional controls. The useful comparison is therefore not “custody bad, self-custody good.” It is which risk is being accepted, who can control the asset, which legal claim survives failure, and whether the user can verify the intermediary’s promises.

For market analysis, custody structure affects more than individual recovery. Restrictions on withdrawals alter effective float. Reused collateral supports leverage. Concentrated custodians create common failure points. Stablecoin and exchange settlement links can transmit stress across venues. A custody claim is part of crypto market structure, not merely a wallet choice.

The conservative rule is to treat every yield-bearing or margin-enabled balance as a credit product until the contrary is established, and every custody promise as a combination of technical control, records, contract, and insolvency law. None of those layers should be inferred from brand reputation, an onchain address, or a reserve ratio alone.

## Sources

- [U.S. Bankruptcy Code, 11 U.S.C. § 541, property of the estate](https://www.law.cornell.edu/uscode/text/11/541) — statutory starting point for estate property; accessed 2026-07-10.
- [SEC Division of Trading and Markets, Frequently Asked Questions Relating to Crypto Asset Activities and Distributed Ledger Technology](https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology) — nonbinding staff views on SIPA, non-security crypto assets, Article 8, and records; accessed 2026-07-10.
- [SEC Division of Trading and Markets, Statement on the Custody of Crypto Asset Securities by Broker-Dealers](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers) — nonbinding staff statement on possession, controls, disruption, and wind-down; December 17, 2025; accessed 2026-07-10.
- [CFTC Global Markets Advisory Committee, Use of Non-Cash Collateral Through the Use of Distributed Ledger Technology](https://www.cftc.gov/media/11581/GMAC_DAM_UseofDLTasDerivativesCollateral_112124/download) — segregation, reuse restrictions, custody chains, enforceability, and intermediary credit risk; November 21, 2024.
- [Coinbase U.S. User Agreement](https://www.coinbase.com/legal/user_agreement/united_states) — current product-specific title, Article 8, and hypothecation terms used as a drafting example; accessed 2026-07-10.
- [SEC Commissioner Caroline Crenshaw, Key Considerations for Crypto Custody](https://www.sec.gov/newsroom/speeches-statements/crenshaw-remarks-crypto-roundtable-042525) — commissioner remarks framing insolvency, hacking, control, and disclosure questions; April 25, 2025.

## Open questions

- How will courts across major jurisdictions characterize omnibus crypto custody when agreements, ledgers, and onchain control point in different directions?
- Which assurance standard can verify both complete liabilities and asset encumbrances without exposing customer information or security-sensitive wallet operations?
- How should a public claim graph represent affiliates, subcustodians, and contingent guarantees while remaining maintainable as terms change?
- Which Article 8 and bankruptcy-remoteness protections will prove durable for non-security crypto assets in actual insolvency litigation?
