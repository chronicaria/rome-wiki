---
title: Protocol treasury management and runway
created: 2026-07-10
source: llm
status: seed
tags: [crypto, treasury, governance, risk-management]
---

**Direct summary:** A protocol treasury is not its headline token balance: credible runway is the time that liquid, unrestricted, spend-denominated assets can fund approved obligations after haircuts, while native-token inventory and governance authority are separately disclosed rather than treated as cash.

**Up:** [[Crypto]]

## The treasury is three different things

Crypto dashboards often multiply every token in a governance-controlled address by its latest market price and call the result a treasury. That number can be directionally useful, but it collapses economically different objects.

First, a protocol may have **liquid, unrestricted assets**: bank deposits, readily redeemable stablecoins, short-duration government-security products, ETH, or other assets that the relevant authority can legally and operationally spend. These are the closest thing to financial reserves, although each still needs a liquidity, custody, credit, and depeg haircut.

Second, it may hold a large quantity of its **own native token**. This is strategic inventory, not an external asset. A quoted price marks the marginal circulating unit; it does not prove that the treasury could sell its entire position at that price. Selling enlarges float, may move the market, may weaken governance alignment, and can damage the same ecosystem whose spending the sale is meant to finance. Native-token inventory can fund grants, incentives, contributor vesting, delegation, liquidity programs, or negotiated sales, but it should not enter base-case runway at an unhaircuted spot mark.

Third, governance may possess **authority rather than an asset**: the ability to mint tokens, activate a protocol fee, redirect future revenue, change monetary policy, recover assets from program wallets, or instruct a timelock. Those powers may be economically valuable, but they are contingent claims subject to voting thresholds, implementation delay, legal constraints, security risk, and political opposition. Governance authority belongs in a control-rights schedule, not in liquid reserves.

This distinction is the foundation of treasury analysis. It prevents a protocol with billions of dollars of thinly realizable native tokens and only months of stablecoin funding from appearing safer than a smaller protocol with several years of external assets.

## A usable balance-sheet map

A treasury review should begin with an address-and-entity inventory, not a portfolio chart. Map the governor, timelock, foundation or company, multisigs, grant programs, endowments, liquidity positions, bridge accounts, vesting contracts, and operating bank accounts. For each location, record the asset, chain, controller, signer threshold, spending restriction, encumbrance, withdrawal delay, and reporting date. Assets held by a legally separate foundation may support the ecosystem without being freely available to token governance; assets in a DAO timelock may require a full proposal before use.

Then sort every position into five buckets:

| Bucket | Examples | Runway treatment |
|---|---|---|
| Liquid and unrestricted | cash, redeemable stablecoins, short-duration instruments | include after risk and access haircuts |
| Liquid but restricted or committed | approved grants, payroll reserve, earmarked program funds | exclude from general runway; match to the obligation |
| Invested external assets | lending positions, staked ETH, LP shares, tokenized securities | include only after exit-time, market, smart-contract, and legal haircuts |
| Native-token inventory | treasury-held governance token, locked or unissued allocation | report separately; include only a conservative executable sale schedule |
| Authority and contingent resources | mint power, fee switch, future revenue, clawback rights | scenario disclosure, not present liquidity |

The classification is about economic availability, not wallet labels. A USDC balance is not unrestricted if governance has already committed it to grants. A tokenized Treasury product is not cash if redemption depends on an eligible legal entity, weekday settlement, a custodian, and issuer approval. An LP position containing the native token is not diversified merely because its dashboard displays two assets: withdrawing and selling the external leg can leave the treasury with still more native-token exposure and price impact.

The same discipline applies to liabilities. Record accounts payable, contributor compensation, committed grants, token awards, audit and legal costs, liquidity guarantees, service contracts, and program obligations. A grant “commitment” may not yet have left the wallet, but it is not free capital. Unvested token compensation is both a future obligation and a future float event. Treasury health therefore cannot be read from assets alone.

## Runway is a cash-flow stress test

The simplest runway formula is

$$
\text{runway months}=\frac{\text{usable liquid reserves}}{\text{stressed monthly net burn}}.
$$

But both terms require construction. Usable liquid reserves equal unrestricted assets after position-specific haircuts, less near-term committed outflows and minimum operating buffers. Net burn equals cash operating and program spending minus recurring, realizable external revenue. Token issuance is financing, not revenue. Unrealized appreciation is not an inflow. A fee stream counts only to the extent it already reaches the relevant treasury, survives operating costs, and can be converted into the currencies actually spent.

Calculate at least three views:

1. **No native-token sale:** only cash and external assets fund operations. This reveals immediate resilience without market access.
2. **Conservative monetization:** add a native-token sale program capped by historical genuine liquidity, governance authorization, lockups, and a price-impact budget. Use stressed prices and execution discounts.
3. **Management or governance plan:** incorporate proposed fee changes, fundraising, cost cuts, or token sales, but identify every dependency and lead time.

Runway should also be currency-matched. If payroll, taxes, and vendors are paid in dollars, an ETH or governance-token reserve creates a conversion dependency. If validators, security bonds, or onchain grants require ETH, holding only dollars creates the opposite dependency. A twelve-month nominal runway can vanish sooner when the spending asset rallies against the reserve asset.

Monthly burn should be forward-looking rather than a naive average. Separate recurring operations from discretionary grants and one-time programs. Include already approved hiring, seasonal events, audits, litigation or compliance reserves, infrastructure scaling, and token-award settlements. Show gross spending as well as net burn, because a fragile yield or fee stream can cease during the same crisis that increases expenses.

A practical stress table might apply scenarios such as: native token down 70%; ETH down 50%; one stablecoin impaired; lending withdrawals delayed; revenue down 50%; expenses up 20%; and no governance proposal executable for several weeks. Correlations matter. In a crypto bear market, native-token price, protocol usage, fee income, collateral quality, and fundraising capacity may all fall together. Treating these as independent produces false comfort.

## Why the headline native-token mark misleads

Suppose a DAO controls 500 million of its tokens. The token trades at $2, implying a $1 billion treasury mark, while the DAO has $12 million of stablecoins and spends $2 million per month. The headline suggests abundant capital; the no-sale runway is only six months before commitments and haircuts.

Could the DAO count the $1 billion? Only by specifying an executable path. If genuine daily volume is $10 million, much of it may be churn, market making, derivatives hedging, or activity on venues unavailable to the treasury. Selling even a modest fraction can exceed natural demand. Price falls reduce the value of the unsold inventory, encourage other holders to front-run expected supply, and may impair token-denominated collateral or incentives. The mark is reflexive: the action required to realize it can destroy it.

Native-token inventory also differs from ordinary investment holdings because the DAO is effectively the issuer or monetary authority. Distribution changes circulating supply and may transfer voting power. Calling treasury tokens “assets” without simultaneously recording dilution and governance consequences presents only one side of the transaction. [[Crypto float market cap and fully diluted value]] and [[Unlock overhang and circulating supply]] explain why supply availability and market depth matter more than fully diluted arithmetic.

A better disclosure reports native units, percentage of total and circulating supply, vesting or issuance status, voting eligibility, custody, historical and stressed prices, realistic sale capacity, and intended uses. The base runway can assign zero to unscheduled native-token sales. A supplementary financing runway can add only the amount supported by a dated execution plan.

## Governance authority is not spendable capital

Control determines whether assets can move. A complete treasury report therefore includes a permissions map:

- Which body owns each wallet or contract?
- What proposal, quorum, delay, signer threshold, or legal approval is required?
- Can a manager trade only whitelisted assets and venues, or transfer anywhere?
- Who can pause, revoke, upgrade, or replace the manager?
- Can governance mint, redirect fees, or change reserve destinations?
- Are emergency powers narrower or broader than ordinary powers?

ENS provides a useful primary-source example. Its documentation states plainly that the ENS DAO governs both protocol and treasury. A 2026 executable proposal automated revenue withdrawal to the endowment and granted a manager a tightly scoped permission to return ETH and USDC to the DAO timelock, while prohibiting other destinations or tokens. That design distinguishes beneficial operational discretion from ownership: a manager can execute allowed actions, while governance retains configuration and revocation power. The same proposal discussed maintaining an operating USDC buffer and reducing the governance cycles needed for routine flows.

This structure also exposes a central tradeoff. Requiring a full token vote for every transfer maximizes direct control but can leave capital idle and make emergency response too slow. Delegating broad discretion improves speed but creates principal-agent, custody, and strategy risks. Scoped modules, whitelists, position limits, reporting requirements, independent monitoring, and revocable mandates can narrow the gap. [[Governance capture and admin-key risk]] remains relevant because a perfectly diversified treasury can still be lost through compromised control.

Authority to activate fees deserves similar caution. Until a fee is authorized, implemented, collected, and routed, it is an option held by governance rather than recurring revenue. Even after activation, volume may migrate, liquidity providers may respond, and legal or political constraints may change. [[From protocol fees to tokenholder value]] traces the steps between protocol activity and a usable treasury inflow.

## Evidence from real treasury policies

The Ethereum Foundation’s 2024 report illustrates explicit liability matching. It reported approximately $970.2 million of treasury assets as of October 31, 2024: $788.7 million in crypto and $181.5 million in non-crypto assets. Because 99.45% of the crypto portion was ETH, the Foundation did not pretend concentration had disappeared. It described periodically selling ETH and increasing fiat savings in bull markets so spending could continue through a multi-year downturn. The relevant principle is not that every protocol should copy its allocation; it is that mission alignment with the native asset can coexist with a separate survival buffer.

Uniswap shows why entity and restriction boundaries matter. When the Uniswap Foundation sought initial funding, it proposed converting its initial UNI disbursement to stablecoins and fiat for runway. A later funding proposal described keeping six months of operational cash in an insured bank account, retaining some UNI for employee compensation, and placing remaining funds in lower-risk yield-bearing assets. These are separate functional pools: immediate obligations, longer-horizon reserves, and alignment compensation.

The 2024 Uniswap Treasury Working Group report went further by recommending an aggregated reporting function, an accounting framework that discounts unissued or treasury-held UNI, a stability fund for operating needs, an investment policy statement, and carefully scoped treasury-manager permissions. These recommendations matter because “DAO treasury” spans governance inventory, operating entities, strategic programs, and managers. Without consolidation and eliminations, observers can double count transfers between them or overlook commitments.

ENS’s endowment model demonstrates another separation. A passed 2023 proposal transferred 16,000 ETH to an endowment after a governance process designed around long-term self-funding. Later permissions proposals explicitly constrained which protocols, pools, and actions a manager could use. This is not merely yield optimization. It turns governance intent into an investable mandate and creates a boundary between operating liquidity and long-duration capital.

Arbitrum’s public updates show why risk management continues after allocation. Its Foundation reported redeeming a USDM position when the product wound down and reallocating proceeds under DAO approval. Treasury-manager updates describe Safe multisigs combined with scoped Zodiac permissions and disclose asset, protocol, strategy, utilization, yield, and mark-to-market changes. One 2026 update also described closing indirect exposures after a market disruption before losses materialized. The lesson is that a “stablecoin strategy” is still a portfolio of issuer, protocol, oracle, bridge, smart-contract, liquidity, and manager risks.

These examples are evidence of mechanisms, not proof that any named treasury is safe. Governance posts may be unaudited, valuations can become stale, and policy can change. Verification requires reconciling reports to onchain balances, legal-entity statements, proposal execution, and subsequent transactions.

## A treasury policy that can be audited

A strong investment policy statement translates goals into constraints. It should specify:

1. **Objective hierarchy:** survival and obligation matching first; strategic growth and yield second.
2. **Liquidity tiers:** immediate operating cash, twelve-to-twenty-four-month reserve, and long-duration endowment or strategic capital.
3. **Eligible assets and venues:** including issuer, chain, bridge, custodian, protocol, duration, collateral, and jurisdiction limits.
4. **Concentration limits:** measured by common failure domain, not token ticker alone. USDC deposited into three protocols still shares USDC issuer risk.
5. **Authority:** proposal thresholds, manager permissions, transfer destinations, emergency powers, revocation, and key rotation.
6. **Execution rules:** price-impact limits, minimum liquidity, approved counterparties, time-weighted sales, and conflict disclosures.
7. **Risk limits:** maximum loss, drawdown, depeg, duration, leverage, maturity mismatch, and counterparty exposure.
8. **Reporting:** wallet-level holdings, cost basis, market value, realized results, commitments, cash flows, benchmark, incidents, and runway scenarios.

Yield should never be reported without its risk source. Lending yield is borrower and liquidation risk; staking yield combines protocol issuance, fees, validator performance, and asset-price exposure; tokenized government-security yield adds issuer, custody, legal, and redemption dependencies; LP fees compensate for inventory and smart-contract risks. A treasury spending $20 million annually should not risk its survival buffer to earn an incremental percentage point without quantifying loss and access scenarios.

Performance measurement must separate investment return from financing and token-price beta. If a DAO transfers more native tokens into a manager’s wallet, assets under management rose but the manager did not earn a return. If the native token rallies, a concentrated treasury may outperform in dollars while becoming no better able to survive the next drawdown. Report time-weighted performance for managers, money-weighted results for the treasury, realized and unrealized gains, benchmark-relative return, maximum drawdown, and the change in stressed runway.

## A diligence workflow

For an investor, delegate, or contributor, the following sequence is more reliable than reading a dashboard total:

1. Enumerate controlling entities and addresses from official governance and documentation.
2. Reconcile token balances, DeFi positions, bank or custodian statements, and inter-entity transfers at one timestamp.
3. Classify assets by liquidity, restriction, encumbrance, and currency; classify native-token inventory separately.
4. Reconstruct twelve months of gross expenses, commitments, and realized external revenue.
5. Calculate no-sale, conservative-sale, and plan-dependent runway.
6. Stress prices, revenue, expenses, depegs, withdrawals, counterparties, bridges, and governance delay together.
7. Inspect every permission from governor to manager, including upgrade and emergency paths.
8. Compare current holdings with the approved investment policy and investigate exceptions.
9. Read subsequent proposals and transactions for policy changes after the reporting date.
10. State what cannot be verified.

The resulting conclusion should be narrow and dated: for example, “At the reporting date, unrestricted stable and cash-like assets covered approximately N months of stressed obligations without native-token sales; additional runway depends on governance approving and executing sales within stated liquidity limits.” That sentence is far more useful than “the DAO has a billion-dollar treasury.”

## Why it matters

Treasury runway connects market structure to protocol survival. A protocol can have excellent software and large nominal token reserves yet be forced to cut security work, grants, or contributors during a drawdown. Emergency sales then add supply precisely when liquidity is weakest. Conversely, excessive defensive diversification can sell too much native-token upside, centralize assets with custodians, or turn a public-goods treasury into a leveraged asset manager.

The objective is not maximum yield or minimum volatility. It is reliable mission funding under explicit governance constraints. Separating unrestricted liquidity, native-token marks, committed funds, invested reserves, and authority makes those tradeoffs visible. It also lets tokenholders judge whether spending is sustainable, whether managers are operating within mandate, and whether governance can respond before a shortfall becomes a crisis.

## Sources

- [Ethereum Foundation, *2024 Report*](https://ethereum.foundation/report-2024.pdf) — primary treasury composition and policy rationale for building fiat savings against multi-year downturns.
- [ENS Docs, “Welcome to ENS DAO”](https://docs.ens.domains/dao/) — primary statement of DAO control over the protocol and treasury.
- [ENS Docs, EP 3.4, “Fund the Endowment”](https://docs.ens.domains/dao/proposals/3.4/) — passed proposal and first endowment tranche.
- [ENS Docs, EP 5.14, “Endowment permissions to karpatkey — Update #4”](https://docs.ens.domains/dao/proposals/5.14/) — passed permissions update and independent-audit requirement.
- [ENS Docs, EP 6.39, “Treasury Flow Automation”](https://docs.ens.domains/dao/proposals/6.39/) — passed proposal describing permissionless revenue routing, scoped manager authority, and operating-runway policy.
- [Uniswap Governance, “Create the Uniswap Foundation”](https://gov.uniswap.org/t/consensus-check-create-the-uniswap-foundation/17457) — primary proposal describing initial UNI conversion and entity custody.
- [Uniswap Governance, “Complete initial funding of the Uniswap Foundation”](https://gov.uniswap.org/t/governance-proposal-complete-initial-funding-of-the-uniswap-foundation/22020/1) — primary operating/grants diversification and cash-buffer policy.
- [Uniswap Governance, “Uniswap Treasury Report”](https://gov.uniswap.org/t/uniswap-treasury-report/24978) — commissioned working-group recommendations on accounting, stability funds, mandates, and permissions.
- [Arbitrum Foundation, *Bi-annual Progress Update, H1 2025*](https://docs.arbitrum.foundation/assets/files/ArbitrumFoundationBiannualReport2025H1-a212b78c3f14904307067a78e7a17065.pdf) — primary report on asset redemption, reallocation, and treasury council structure.
- [Arbitrum Governance Forum, “KPK Treasury Management Updates”](https://forum.arbitrum.foundation/t/kpk-treasury-management-updates/30667) — manager reporting on positions, permissions, yield, valuation, and incident response; useful evidence but not an audit.

## Open questions

- What standardized accounting treatment best captures treasury-held or unissued native tokens without either ignoring strategic value or presenting an unrealizable spot-price asset?
- How should a DAO set a native-token sale-capacity limit when reported venue volume includes market making, derivatives, and potentially inorganic activity?
- Which legal entity, if any, owns assets governed by token votes, and how would insolvency, sanctions, taxation, or litigation alter their availability?
- What minimum stable-asset runway is appropriate for protocols whose expenses, fee revenue, and security needs have very different cyclicality?
- How should governance value the option to activate fees or mint tokens when exercising that option changes user, liquidity-provider, and tokenholder behavior?
- Which treasury reports have been independently reconciled to onchain positions, bank statements, commitments, and manager permissions rather than compiled from self-reported balances?
