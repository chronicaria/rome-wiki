---
title: Unlock overhang and circulating supply
created: 2026-07-10
source: llm
status: seed
tags: [crypto, tokenomics, supply, vesting, liquidity, risk]
---

A token unlock changes who may transfer units, but its market effect depends on how many units become economically tradable, who receives them, what they do, and how much real liquidity can absorb their flow.

Up: [[Crypto]]


“Ten percent unlock next month” sounds precise while leaving almost every economically important question unanswered. Ten percent of maximum supply is not ten percent of current float. A contractual vesting date is not necessarily an onchain transfer. Transferability is not a sale. A sale is not automatically a permanent price decline. Conversely, an unlock calendar can understate dilution when staking rewards, treasury distributions, market-maker loans, governance-controlled reserves, or already-unlocked insider balances enter the market outside the advertised event.

The useful object is therefore not an unlock headline but a **supply-transition map**. It follows units from authorization and minting through allocation, vesting, release, custody, transfer, exchange deposit, and final absorption. This page explains that mechanism, shows how to measure the overhang without double counting, and separates evidence from the common but unproven claim that every unlock causes an immediate dump. It is an analytical framework, not a trading instruction.

## Five supply concepts that must remain separate

Token supply is a set of inventories and rules, not one number.

**Maximum supply** is the upper bound if the protocol has one. It says little about timing. A maximum may also be changeable by governance, migration, contract upgrade, or social consensus. A token with no enforceable cap is not necessarily diluting rapidly; a capped token can still have enormous scheduled releases.

**Total or minted supply** is the number of units created minus whatever the chosen methodology recognizes as burned. It can include tokens held in vesting contracts, foundation wallets, treasuries, or addresses that cannot yet transfer. Provider definitions differ. CoinGecko, for example, distinguishes maximum, total, outstanding, and circulating supply and removes certain locked or non-market inventories under its methodology.

**Unlocked supply** is the amount no longer subject to a particular transfer restriction. It is specific to the restriction being measured. A token may exit a vesting contract yet remain subject to a legal agreement, staking unbonding period, governance process, multisig policy, or market-maker mandate. “Unlocked” should always answer: unlocked from what, for whom, and at what timestamp?

**Provider circulating supply** is a data provider’s estimate of units circulating in public hands. It is not generally an onchain primitive. CoinMarketCap explicitly describes circulating supply as a best approximation analogous to public float. Providers must classify treasury, foundation, team, escrow, bridge, and market-making balances; reasonable methodologies can disagree.

**Economically tradable float** is the inventory plausibly available to form price over the horizon being studied. It is behavioral and cannot be observed perfectly. An unlocked investor wallet may hold for years, while a formally designated ecosystem wallet may distribute tokens tomorrow. Exchange balances are tradable but may be operational inventory rather than directional supply. Staked tokens can be economically liquid when liquid staking or hedging is available. The analyst should estimate float as a range and show the assumptions.

These concepts explain why market capitalization and fully diluted value answer different questions. Current market capitalization applies a spot price to provider circulating supply. Fully diluted value commonly applies the same price to maximum or total supply. Neither measures cash invested, realizable sale proceeds, or fundamental value. A thin float can establish a marginal price that makes the locked inventory look enormously valuable, even though selling that inventory would move the price.

## The unlock-to-market mechanism

An unlock can affect the market through several stages. Skipping stages turns a calendar observation into an unsupported causal story.

### 1. The rule becomes operative

A smart contract, legal agreement, genesis schedule, governance vote, or discretionary policy determines when units become available. The first verification task is to identify the controlling document and whether the schedule is immutable. Project graphics are summaries, not necessarily the source of truth. Check the token contract, vesting contracts, governance records, foundation disclosures, and amendments.

Schedules can be cliffs, continuous streams, periodic tranches, milestones, or mixtures. A cliff makes a block of units transferable at once. Linear vesting releases smaller increments over time. “Continuous” may mean block-by-block contract availability or merely a reporting convention for monthly claims. Calendar arithmetic must use the actual start time, cliff treatment, leap-year rules, and whether the first tranche is additional to or included in later vesting.

Celestia’s official TIA documentation illustrates why definitions matter. It separately defines circulating supply and “available supply,” permits locked tokens to be staked, and states that staking rewards are unlocked upon receipt and add to circulation. Its contributor and early-backer schedules combine a one-year first release with subsequent continuous vesting. A calendar that tracks only scheduled principal releases but omits unlocked staking rewards understates the changing inventory.

### 2. Units become claimable or transferable

At the event time, tokens may automatically transfer, become claimable, or simply lose a restriction. Those are different flows. Automatic delivery changes address balances immediately. A claim contract can leave units dormant until recipients act. Administrative release may require a multisig transaction. An offchain vesting agreement may permit sale even though no distinctive onchain event occurs.

Verification should reconcile the scheduled quantity to contract events and balances. Questions include whether tokens were already minted; whether claiming mints new units; whether unclaimed balances appear in total supply; whether a migration burns an old representation; and whether a bridge or wrapper creates a second visible token that represents the same underlying units. Without this reconciliation, the same quantity can be counted once when minted and again when released.

### 3. Recipients gain economic discretion

Recipient identity changes the likely but never certain response. Employees may face taxes, diversification needs, or internal trading policies. Venture investors may have fund-life and distribution obligations. A foundation may fund grants or operations. A community allocation may reach thousands of users. A treasury release may remain under governance. A market maker may receive a loan that increases venue liquidity but must later be returned.

Labels such as “ecosystem” are not economic destinations. Trace the controller, mandate, and next transfer. A foundation allocation used to pay vendors can become sell flow; a treasury grant deposited into a long-lived contract may not. An investor distribution in kind moves tokens to limited partners without proving that they sell. An exchange deposit is stronger evidence of sale readiness than an internal wallet transfer, but it still does not prove execution.

Recipient cost basis also shapes incentives but is often uncertain. Early buyers with a low contractual price may be willing to sell below the current market price and still realize a gain. Yet the purchase price omits follow-on obligations, hedges, taxes, lockup extensions, and fund structure. Cost basis is evidence about optionality, not proof of intent.

### 4. Potential supply becomes order flow

Only some newly discretionary inventory becomes net selling. Recipients can hold, stake, delegate, lend, post collateral, hedge derivatives, transfer to custodians, sell over the counter, distribute in kind, or sell on exchanges. Several actions affect price before visible spot selling. A holder can short a perpetual contract before the unlock and later deliver or sell unlocked spot against the hedge. An OTC buyer can acquire the economic exposure subject to lockup constraints. Dealers anticipating client flow can adjust inventory and quotes.

This is why a known unlock can be partly priced before its timestamp. Public schedules allow holders, speculators, and market makers to reposition. Pre-event weakness is consistent with anticipation, but it is not proof that insiders sold early. The same price move may reflect broad crypto beta, risk-off conditions, project news, derivative liquidations, or selective attention to the event.

### 5. Liquidity absorbs or amplifies the flow

Price impact depends on executable depth, not market capitalization. Daily reported volume can contain internal market-making turnover, wash trading, derivative volume, or repeated resale of the same units. A more useful denominator combines credible spot depth near the midprice, venue concentration, average net flow, OTC capacity, derivatives open interest, and the time available for execution.

A $50 million unlock is not “5% sell pressure” merely because circulating market cap is $1 billion. If recipients sell $2 million gradually into deep, growing demand, impact may be small. If $10 million reaches a fragmented market whose genuine bids total only hundreds of thousands within a few percent of price, impact can be severe. Falling price can then weaken collateral, trigger liquidations, increase required token incentives, or reduce treasury runway—a reflexive channel covered by [[Crypto liquidation cascades]].

## Measuring the overhang

Start with a horizon: 30 days, 90 days, one year, or the remaining vesting life. Then build a category-level schedule rather than one aggregate number.

For category $i$ over horizon $H$, define:

$$
U_{i,H}=\text{scheduled units becoming transferable},
$$

and an estimated float-conversion fraction $\alpha_{i,H}$ between zero and one. The expected addition to tradable float is not a fact but a scenario:

$$
\Delta F_H=\sum_i \alpha_{i,H}U_{i,H}+M_H+T_H+R_H-B_H-L_H.
$$

Here $M_H$ is newly minted issuance that reaches tradable holders, $T_H$ is treasury distribution outside vesting, $R_H$ is unlocked rewards, $B_H$ is provable burn or redemption, and $L_H$ is net movement into restrictions that genuinely remove near-term float. Bridge minting and wrapper creation should be excluded when they merely represent locked underlying assets. This equation is a classification tool; the $\alpha$ values should be reported as low, base, and high cases rather than disguised as precision.

Three ratios answer different questions:

$$
\text{unlock / current circulation}=\frac{U_H}{C_0},
$$

$$
\text{estimated float growth}=\frac{\Delta F_H}{F_0},
$$

$$
\text{remaining locked share}=\frac{U_{\text{future}}}{S_{\text{reference}}}.
$$

The first is reproducible if the schedule and provider circulation are timestamped. The second is economically closer to price formation but model-dependent. The third describes long-run overhang but changes materially depending on whether the denominator is maximum, total, or outstanding supply. Always name the denominator.

Dollar-valued unlocks are especially fragile. Multiplying units by spot price marks the tranche at the marginal price; it does not estimate proceeds. Present both token units and a marked value, timestamp the price, and avoid adding future dollar values across dates as if price and liquidity were fixed.

## A practical audit

### Establish identity and authority

Confirm the canonical token, chain, contract, decimals, wrappers, and migrations. Locate the primary allocation and vesting disclosures. Record who can amend the schedule, mint more units, release treasury balances, or upgrade the contracts. The SEC Division of Corporation Finance’s April 2025 staff statement—nonbinding staff views, not a Commission rule—offers a useful disclosure checklist: total supply, caps, minting and generation, burns, treasury reserves, allocations, vesting, lockups, and authority to change the rules.

### Reconstruct the supply bridge

For two timestamped observations, reconcile:

$$
S_1=S_0+\text{mints}-\text{burns}.
$$

Then bridge circulating supply separately:

$$
C_1=C_0+\text{newly classified circulation}-\text{removed circulation}.
$$

The second equation is partly methodological. A provider can revise classifications without an onchain mint. Preserve the raw observations and provider, then explain the revision. Do not overwrite historical circulation with today’s methodology and pretend it was known contemporaneously.

### Map each recipient and route

For every material tranche, record category, original allocation, vesting rule, next release, amount, controller, receiving addresses if verified, claim mechanics, staking eligibility, governance restrictions, and amendment power. After the event, follow transfers to staking, custody, exchanges, market makers, OTC desks where disclosed, and new wallets. Cluster attribution should carry confidence labels; address heuristics are evidence, not identity proof.

### Compare with absorption capacity

Measure the tranche against current circulation, estimated active float, credible net spot volume, and order-book depth. Review venue outages, withdrawal limits, bridge delays, borrow availability, perpetual funding, basis, and open interest. A concentrated cliff during weak liquidity deserves a different stress case from the same quantity released linearly during strong organic demand.

### Separate observation from inference

A clean event ledger might state: “The contract made 20 million units claimable; 12 million were claimed; 4 million moved to labeled exchange deposit addresses; exchange-wide net sales by those beneficial owners cannot be proven.” That is more valuable than “20 million tokens dumped.” Price attribution should control at least for Bitcoin or a broad crypto benchmark, market regime, and overlapping project news. Even then, an event study establishes association more readily than recipient-level causation.

## Evidence and competing interpretations

The economic prior is straightforward: when a previously constrained holder can sell, the supply curve becomes less constrained. If incremental demand is unchanged, greater offered quantity should lower the clearing price. But the observed effect need not occur exactly on unlock day, and its size is not fixed.

Recent empirical work should be treated as developing rather than settled. Yulin Guo’s 2026 working paper studies 404 coins from 2020–2026 and reports that FDV-based dilution measures predict lower cross-sectional returns, with the pattern concentrated in newer tokens. The paper’s interpretation includes limited investor attention to disclosed schedules rather than purely mechanical event-day pressure. Because it is a working paper, its dataset construction, survivorship controls, provider histories, and robustness should be independently replicated before treating the reported spreads as durable.

HoKwang Kim’s 2026 preliminary event study examines 52 unlocks for Binance-listed assets and reports abnormal performance around the events after Bitcoin benchmarking. Its small, selected sample and correlational design limit generalization; exchange listing, token age, category, and contemporaneous news can confound the result. A 6th Man Ventures analysis released with data and code examined thousands of unlocks but concluded its results were not meaningful enough to make unlock design a primary consideration, while still suggesting smaller, smoother releases. That tension is informative: there is a plausible mechanism and some negative associations, but simple universal claims outrun the evidence.

Several alternatives can explain a weak or positive response. The event may already be priced. Recipients may hold or stake. The project may announce growth that raises demand. A treasury release may finance productive development. Market makers may absorb inventory. The token may rally with the broader market. Short positioning can become crowded and unwind after the event. Reported circulation may catch up to an economic float that was already hedgeable. These are not excuses to ignore dilution; they are reasons to test the actual channel.

## Common analytical failures

**Treating FDV as a forecast.** FDV is a same-price multiplication, not a prediction that all future units will trade at today’s price.

**Calling every unlock inflation.** Unlocking existing minted units changes transferability and distribution. Minting creates units. Both can expand float, but they are distinct accounting events.

**Assuming unlocked equals circulating.** Foundation, investor, and contributor balances may be unlocked but inactive; rewards may circulate immediately despite locked principal.

**Using volume as absorption.** Gross turnover is not net buying capacity. Depth and net flow matter.

**Ignoring recipient category.** A governance-controlled ecosystem reserve, employee tranche, investor distribution, and market-maker loan have different mandates and probable routes.

**Double counting representations.** Bridge and wrapper minting can show supply on multiple chains while one underlying inventory backs it.

**Reading exchange deposits as completed sales.** They are evidence of sale readiness, custody change, or market-making activity—not definitive execution or beneficial-owner intent.

**Forgetting schedule changes.** Governance, amendments, accelerated vesting, cancellations, departures, mergers, and migrations can alter the calendar. A cached third-party page is not the final authority.

## Why it matters

Unlock analysis connects tokenomics to instrument-level returns. A protocol can gain users, earn fees, and ship software while its liquid token underperforms because the claim per unit is diluted or because low-cost recipients supply more tokens than organic buyers absorb. Conversely, a large remaining locked allocation does not doom a token if releases are gradual, transparent, productively deployed, and met by durable demand.

For valuation, the framework prevents a low-float price from being applied uncritically to distant inventory. For risk management, it identifies dates when liquidity, derivatives, and collateral conditions may become fragile. For governance, it shows when voting power becomes transferable or delegable, which can matter even without selling. For treasury analysis, it distinguishes planned operating finance from protocol revenue. For yield analysis, it captures staking rewards and incentives that can expand circulation between headline cliffs.

The decision-useful conclusion is rarely “an unlock is bullish” or “an unlock is bearish.” It is a conditional statement: **a specified quantity becomes controllable by specified recipients under specified rules; a plausible fraction may reach a market with specified absorption capacity; here is the evidence that would confirm or falsify that path.** That statement can be updated after the event. A slogan cannot.

## Sources

- [CoinGecko, “Supply Methodology”](https://support.coingecko.com/hc/en-us/articles/32294647667865-CoinGecko-Supply-Methodology) — definitions and treatment of maximum, total, outstanding, and circulating supply.
- [CoinGecko, “How to Add or Update Your Token's Circulating Supply and Market Cap”](https://support.coingecko.com/hc/en-us/articles/4499342867609-How-do-I-add-or-update-the-circulating-supply-market-cap-for-my-token) — verification process and market-cap calculation.
- [CoinMarketCap, “What Is Circulating Supply?”](https://support.coinmarketcap.com/hc/en-us/articles/360043396252-Supply-Circulating-Total-Max) — provider definitions and public-float analogy.
- [Celestia, “TIA: Staking, governance and supply”](https://docs.celestia.org/learn/TIA/staking-governance-supply/) — primary allocation, unlock schedules, staking treatment, and circulating-versus-available definitions.
- [SEC Division of Corporation Finance, “Offerings and Registrations of Securities in the Crypto Asset Markets”](https://www.sec.gov/newsroom/speeches-statements/cf-crypto-securities-041025-offerings-registrations-securities-crypto-asset-markets) — nonbinding staff disclosure observations on supply, minting, treasury, vesting, lockups, and control.
- [Yulin Guo, “Token Dilution and the Cross-Section of Cryptocurrency Returns”](https://ssrn.com/abstract=6636258) — 2026 working paper on FDV, dilution, and cross-sectional returns; not yet treated here as settled evidence.
- [HoKwang Kim, “The 72-Hour Shock? Preliminary Evidence from 52 Token Unlock Events on Binance”](https://ssrn.com/abstract=6632838) — preliminary 2026 event study with explicit correlational limits.
- [6th Man Ventures, “We Analyzed 5,000 Token Unlocks — This Is What We Found”](https://6thman.ventures/writing/token-unlocks) — industry analysis with disclosed caution about the strength of its results and a linked research dataset.

## Open questions

- Which providers preserve reproducible historical circulating-supply classifications rather than only current revised values?
- How much pre-unlock exposure is transferred through OTC agreements, derivatives, or tokenized vesting claims that public wallet analysis cannot observe?
- Which address-labeling methods can distinguish investor distributions, market-maker inventory, custody changes, and final exchange sales with auditable confidence?
- Do independently replicated event studies find that recipient identity and executable depth explain more variation than unlock size alone?
- How should governance-power unlocks be modeled when tokens remain staked or delegated and never enter spot markets?
