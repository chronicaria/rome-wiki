---
title: Stablecoin reserve and redemption risk
created: 2026-07-09
source: llm
status: seed
tags: [crypto, markets, quantitative-research, stablecoins, market-structure, regulation, security]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-08-09
---
Stablecoin safety depends not merely on whether assets equal liabilities on a reporting date, but on whether eligible holders can turn tokens into par cash quickly through a legally robust, operationally available redemption channel during stress.

Up: [[Crypto]]

The word *stable* compresses several different promises. A token may target one dollar in secondary-market trading, offer direct redemption for one dollar, hold assets whose reported value matches its issued supply, or use incentives and collateral to pull its price toward a dollar. Those properties are related, but none guarantees the others. A reserve report is therefore the beginning of a risk analysis rather than its conclusion.

The useful question is not simply, “Is this stablecoin backed?” It is: **who owes what to whom, against which assets, on what timetable, through which operational path, and with what happens when many holders ask at once?** Answering that question separates money-like liabilities from investment products that merely aim for a stable market price. It also explains why two tokens trading at $1.00 in normal conditions can carry radically different credit, liquidity, legal, and access risks.

## The liability and the peg are different objects

A stablecoin holder sees a token on a blockchain. The assets supporting it normally sit elsewhere: a bank account, custody account, money-market fund, Treasury portfolio, lending protocol, overcollateralized smart contract, or some combination. The token is the liability side of this arrangement. “Reserves” describes the asset side. “Redemption” is the mechanism that joins them.

For a centralized fiat-backed issuer, the stylized balance sheet is:

$$
\text{cash and reserve securities} = \text{stablecoins outstanding} + \text{issuer equity cushion}.
$$

Even if the equality holds at reported fair value, four gaps can remain.

First, **credit risk** asks whether the assets and custodians will pay. A bank deposit is a claim on a bank; a Treasury bill is a claim on the U.S. government; a repurchase agreement adds transaction and counterparty structure. Second, **market risk** asks whether an asset must be sold below its carrying value. Even high-quality securities can fluctuate before maturity. Third, **liquidity risk** asks whether enough cash can be raised on the redemption timetable without a damaging sale. Fourth, **legal and operational risk** asks whether holders can actually reach the issuer, establish eligibility, deliver tokens, and receive fiat while banks, blockchains, compliance systems, and custodians continue functioning.

Those gaps mean that a 100% reserve ratio is not equivalent to a 100% probability of immediate par payment. A balance-sheet snapshot says little about intraday cash needs, settlement cutoffs, transfer freezes, concentration at one bank, or bankruptcy treatment. Conversely, a brief secondary-market discount does not prove reserve insolvency. It can reflect exchange order books, weekend banking closure, chain congestion, arbitrage limits, or uncertainty about the redemption route.

## A practical hierarchy of reserve assets

Reserve quality has at least five dimensions: credit quality, duration, market liquidity, currency match, and custody or encumbrance. Analysts should inspect all five rather than assign a single label such as “cash equivalents.”

Central-bank money is closest to the settlement asset, but most nonbank issuers do not have direct central-bank accounts. Insured and uninsured bank deposits provide immediate payment capacity during normal banking hours, yet concentrate exposure to the banks holding them. The March 2023 interruption involving Silicon Valley Bank and USDC illustrated the distinction: a stablecoin can have high-quality aggregate backing and still face uncertainty because some cash is temporarily unavailable at a failed bank. The market price can react before the legal recovery value is known.

Short-dated Treasury bills generally have low credit and duration risk and deep markets, but bills are securities rather than dollars in a payment account. They must mature, be sold, or finance a repo before they settle redemptions. Overnight reverse repos and government money-market funds can improve daily liquidity while adding custodial, fund, settlement, and counterparty dependencies. Longer-duration government debt introduces more price sensitivity. Commercial paper, corporate credit, secured loans, commodities, other stablecoins, and cryptoassets progressively add credit, valuation, liquidity, correlation, or circular-backing risk.

The proper comparison is therefore not “Treasuries good, deposits bad.” Deposits can meet immediate payments while bills diversify bank exposure; bills can be liquidated while a banking rail is open, but not necessarily settle token redemptions continuously over a weekend. A resilient pool matches assets to plausible cash outflows across several horizons. An analyst can build a simple maturity ladder:

| Horizon | Redemption need | Evidence to inspect |
| --- | --- | --- |
| Intraday | Prefunded payment cash and active banking rails | Cash balances, settlement banks, hours, historical processing |
| One to five business days | Bills, repo, money-market liquidity | Maturity buckets, eligible collateral, counterparties, sale capacity |
| Extended stress | Full liquidation value and loss absorption | Duration, concentration, credit quality, capital, recovery rights |

The currency must also match the promise. A dollar token backed by non-dollar assets carries foreign-exchange risk unless hedged. A crypto-collateralized dollar token can be overcollateralized at inception yet become undercollateralized after a rapid price move, oracle failure, or liquidation congestion. Nominal overcollateralization is not free capital; it is a buffer whose effectiveness depends on volatility, correlation, liquidation execution, and who absorbs shortfalls.

## Redemption is a gated production process

The existence of an issuer redemption promise does not imply that every wallet can redeem directly. Circle's non-EEA USDC terms, for example, condition direct redemption on an eligible registered Circle Mint account, compliance with the terms, and the absence of legal restrictions. Circle separately states that, under its MiCAR framework, it will redeem USDC presented in the EEA even when the holder is not a Circle Mint customer. A secondary holder outside such a jurisdictional right who cannot onboard must normally sell to another market participant rather than present directly to the issuer. The distinction between *holder*, *eligible customer*, *authorized redeemer*, and jurisdiction is central.

Redemption can be modeled as a chain:

$$
\text{wallet} \rightarrow \text{approved account} \rightarrow \text{token burn} \rightarrow \text{issuer instruction} \rightarrow \text{reserve cash} \rightarrow \text{bank settlement}.
$$

Every arrow can impose minimum sizes, fees, identity checks, sanctions screening, jurisdiction restrictions, business-hour limits, blockchain confirmations, bank cutoffs, or discretionary review. During calm markets, professional arbitrageurs bridge the gap: they buy a token below par, redeem it, and earn the spread. Retail holders receive the benefit indirectly through the market price. During stress, arbitrage capacity is finite. Balance sheets fill, exchange withdrawals pause, gas costs rise, and market makers demand compensation for uncertainty.

This produces a two-tier liquidity structure. Primary liquidity is the issuer's redemption facility. Secondary liquidity is the ability to sell on exchanges or decentralized pools. The secondary price remains near par when traders believe primary redemption is accessible, solvent, and fast. If that belief weakens, the secondary market becomes an estimate of recovery value and delay rather than a mechanical dollar.

New York's Department of Financial Services illustrates what a strong baseline tries to establish for supervised dollar-backed stablecoins: full backing at the end of each business day, segregated permissible reserves, clear redemption policies, and par redemption for lawful holders subject to reasonable conditions. Its default meaning of “timely” is no more than two full business days after the business day on which a compliant redemption order is received, with extraordinary exceptions subject to DFS approval. Yet the scope matters. The guidance applies to DFS-supervised issuers, not to every token bearing a dollar label. Regulatory language should never be transferred from one issuer or jurisdiction to another by analogy.

## Reserve reports answer only the questions they measure

Disclosure comes in several forms. A real-time dashboard can show issued supply and selected wallet or account balances. An attestation reports whether specified information conforms to criteria at a particular date. An audit provides broader assurance over financial statements and controls, but it too has a defined scope and materiality threshold. “Proof of reserves” may demonstrate control of assets without proving the completeness of liabilities, legal ownership, lack of encumbrances, or priority in insolvency.

A good reading protocol asks:

1. Who prepared the schedule, and who independently examined it?
2. What date and time did it cover—one instant, an average, or a period?
3. Are all tokens and chains included in liabilities?
4. Are assets valued at face value, amortized cost, or market value?
5. Are assets segregated for holders and bankruptcy remote?
6. Can they be pledged, rehypothecated, lent, or used by affiliates?
7. Which banks, custodians, funds, and counterparties hold them?
8. What subsequent events occurred after the reporting instant?

Circle's transparency page, for example, describes cash at regulated financial institutions and says the majority of reserves sit in the Circle Reserve Fund, whose eligible holdings include short-dated U.S. Treasuries, overnight U.S. Treasury repurchase agreements, and cash. That is more informative than a single “100% backed” number. It still leaves the analyst to connect portfolio composition to redemption terms, operational concentration, and legal structure.

Disclosure can also have an ambiguous effect on runs. BIS research models how bad news about reserve quality can coordinate redemptions, while credible disclosure about strong assets can stabilize beliefs. Transparency does not create fragility; it reveals information that market participants use. The policy objective is therefore credible assets *and* credible disclosure, not opacity as a substitute for solvency.

## How runs propagate

A stablecoin run begins when the expected value of waiting falls below the value of exiting. The trigger might be an actual reserve loss, a banking failure, a legal action, an operational outage, a rumor that cannot be resolved quickly, or a fall in crypto collateral. The mechanism then feeds on itself.

Early redeemers receive cash or sell near par. Secondary prices fall as sellers exceed risk-bearing capacity. The discount signals doubt to other holders. Issuers raise cash, possibly selling securities or drawing bank deposits. If sales generate losses or payments are delayed, backing per remaining token can deteriorate. DeFi protocols may liquidate positions that use the token as collateral; automated market makers rebalance into the weaker asset; exchanges change margin treatment; bridges can carry the discount to other chains. What began as issuer-specific uncertainty becomes market-wide dollar-liquidity stress.

The run is not identical to a bank run. Stablecoin holders generally do not fund illiquid loans in the same way insured retail deposits fund bank assets, and many reserve models hold shorter-duration instruments. But the family resemblance is useful: demandable liabilities, first-mover incentives, imperfect information, asset liquidation, and reliance on payment infrastructure. Unlike insured bank deposits, stablecoins may lack deposit insurance, direct central-bank liquidity, or a resolution regime designed to preserve par payment.

Fire-sale spillovers depend on scale and reserve composition. A large issuer selling Treasury bills or unwinding repo could affect money markets; withdrawing concentrated bank deposits could transmit pressure to banks. BIS and CPMI work therefore treats reserve custody, liquidity, redemption rights, and loss allocation as financial-stability questions, not merely token design preferences.

Crypto-collateralized designs add reflexivity. Falling collateral prices reduce backing, which prompts redemptions or liquidations, which can force collateral sales and depress prices further. Algorithmic designs that rely primarily on mint-and-burn incentives with a volatile related token face an even sharper circularity: confidence in the stable liability depends on the value of the instrument issued to absorb exits. A mechanism can maintain a peg through ordinary volatility and still fail discontinuously after a sufficiently large shock.

## Depeg diagnostics without false certainty

When a token trades below par, a disciplined analyst separates five hypotheses.

- **Market plumbing:** the issuer remains sound, but exchange, chain, bridge, or banking access is temporarily impaired.
- **Liquidity mismatch:** reserves may cover liabilities eventually, but immediate cash is insufficient or costly.
- **Asset impairment:** reserve market value has fallen below token liabilities.
- **Legal or access impairment:** assets exist, but holders cannot enforce or operationalize redemption as expected.
- **Model failure:** the stabilization mechanism itself cannot create sufficient demand or collateral under stress.

Evidence should be timestamped because these hypotheses can change within hours. Useful observations include issuer issuance and redemption volumes, onchain burns, reserve-asset prices, bank status, order-book depth, decentralized-pool imbalance, cross-chain price differences, and the exact status of redemption portals. Price alone cannot distinguish temporary friction from permanent loss.

Par recovery also does not prove that risk was absent. Government intervention, a bank acquisition, emergency liquidity, an affiliate capital injection, or favorable collateral recovery may rescue holders after a period in which the contractual structure was genuinely vulnerable. Event studies should record the path and the external support, not merely the ending price.

## An issuer-comparison template

The following template avoids misleading rankings based solely on reserve ratios:

| Layer | Core question |
| --- | --- |
| Liability | What precisely does the tokenholder own or claim? |
| Eligibility | Who may redeem directly, in which jurisdictions, at what minimum? |
| Timing | What is the contractual and observed settlement time? |
| Reserves | What assets, maturities, currencies, and concentrations support it? |
| Custody | Where are assets held, and are they segregated and unencumbered? |
| Assurance | Audit, attestation, dashboard, onchain proof, or issuer assertion? |
| Governance | Who can mint, freeze, blacklist, pause, or change terms? |
| Stress capacity | What volume can be paid without forced sales or external support? |
| Failure waterfall | Who takes losses, and what resolution or insolvency law applies? |

This framework should be applied separately to native issuance on each chain and to bridged or wrapped versions. A holder of a bridge-issued representation may face both stablecoin issuer risk and bridge risk. The reserve behind the underlying USDC or USDT does not automatically back a third-party wrapper directly; the wrapper is a claim on a claim. This connects stablecoin analysis to [[Wrapped assets and duplicate crypto exposure]].

## Why it matters

Stablecoins are settlement assets, trading collateral, savings substitutes, and DeFi building blocks. A mistaken assumption that “one token equals one risk-free dollar” propagates through leverage, collateral parameters, treasury policy, and market-cap rankings. Stablecoin market capitalization is a liability measure, not an independent productive asset valuation. Counting it alongside the market capitalization of assets it helps finance can also create false impressions about diversified crypto wealth.


The central lesson is simple but demanding: stability is a process, not a label. The process must survive credit losses, liquidity needs, legal constraints, operational outages, and coordinated withdrawal. Only a full path from token to final settlement can show whether the promise is money-like under stress.

## Sources

- [Circle, Transparency and stability](https://www.circle.com/transparency) — current reserve categories, issuance, and redemption reporting (accessed 2026-07-09).
- [Circle, USDC Terms](https://www.circle.com/legal/usdc-terms) — holder eligibility, direct redemption conditions, and issuer terms (accessed 2026-07-09).
- [New York State Department of Financial Services, Guidance on the Issuance of U.S. Dollar-Backed Stablecoins](https://www.dfs.ny.gov/industry_guidance/industry_letters/il20220608_issuance_stablecoins) — reserve, segregation, attestation, and timely-redemption baseline.
- [Basel Committee, SCO60: Cryptoasset exposures](https://www.bis.org/basel_framework/chapter/SCO/60.htm?inforce=20260101&published=20241127&tldate=20381124) — reserve risk, bankruptcy remoteness, and prudential classification criteria.
- [CPMI-IOSCO, Application of the Principles for Financial Market Infrastructures to stablecoin arrangements](https://www.bis.org/cpmi/publ/d206.pdf) — settlement, governance, liquidity, and run-risk analysis.
- [Crisanto, Ehrentraud, and Garcia Ocampo, “Stablecoins: regulatory responses to their promise of stability”](https://www.bis.org/fsi/publ/insights57.htm) — comparative study of regulatory frameworks.
- [Ahmed, Aldasoro, and Duley, “Public information and stablecoin runs”](https://www.bis.org/publ/work1164.htm) — model and case evidence on reserve information and run incentives.
- [BIS Annual Economic Report 2026, “Anchoring trust in money”](https://www.bis.org/publ/arpdf/ar2026e3.htm) — current systemic analysis of reserve choices and redemption design.

## Open questions

- How should a recurring tracker measure executable intraday redemption capacity rather than reported end-of-day backing?
- Which issuer legal structures give tokenholders a direct, bankruptcy-remote claim, and which leave them as general creditors?
- How concentrated are the largest issuers' operational bank, custodian, repo, and money-market-fund dependencies after looking through affiliates?
- What common stress scenario should Rome use to compare fiat-backed, crypto-collateralized, and algorithmic designs without implying false precision?
- How should wrapped and bridged stablecoin supply be reconciled so the same underlying liability is not counted twice?
