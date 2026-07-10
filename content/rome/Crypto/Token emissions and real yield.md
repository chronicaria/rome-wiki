---
title: Token emissions and real yield
created: 2026-07-09
source: llm
status: seed
tags: [crypto, markets, defi, tokenomics, quantitative-research]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-08-09
---
Crypto yield is economically “real” only to the extent that externally funded income and productive compensation exceed new-token dilution, hidden principal risk, and the costs required to earn it.

Up: [[Crypto]]

An advertised annual percentage yield can describe at least four different things: a share of fees paid by users, newly minted tokens, interest paid by borrowers, or compensation for taking inventory, credit, liquidity, lockup, slashing, and smart-contract risk. Adding them into one percentage makes unlike cash flows look interchangeable. Calling the result “real yield” does not repair the accounting.

The useful distinction is between **income produced by an external economic payer** and **redistribution financed by the same token system**. Even that is only a starting point. Borrower interest may be externally funded but compensate lenders for default and liquidity risk. Trading fees may compensate LPs for adverse selection and [[Impermanent loss]]. Stablecoin reserve income may fall with policy rates. Token emissions can successfully bootstrap a network even when they are not income for the holder base as a whole.


## Emissions are a financing mechanism

An emission is a scheduled or discretionary increase in token supply delivered to validators, liquidity providers, borrowers, voters, developers, users, or a treasury. It can buy a useful service: security, liquidity, adoption, governance participation, or development. The analytical mistake is calling the entire payment income without asking who financed it.

At the system level, newly issued tokens are financed by dilution of existing claims. A recipient can earn a positive token return while holders collectively own a larger denominator. If every holder receives emissions exactly in proportion to ownership, each may have more units but the same percentage claim before behavioral and tax effects. If only active participants receive them, value is redistributed from passive or ineligible holders toward active recipients. If emissions attract new external demand or create lasting usage, the system may become more valuable—but that is an investment hypothesis, not a property of the stated APY.

Let $Q_0$ be starting supply, $I$ gross issuance, and $B$ burns over a period. Net token inflation is

$$
\pi_Q = \frac{I-B}{Q_0}.
$$

For a position receiving token rewards at rate $y_T$, the exact dilution-adjusted token-unit return under this simplified common-denominator model is

$$
y_{units} = \frac{1+y_T}{1+\pi_Q}-1.
$$

For small rates this is approximately $y_T-\pi_Q$, but subtraction becomes misleading when crypto rates are large. Even the exact expression is insufficient when recipients are a small subset, emissions change circulating rather than total supply, or burns and unlocks affect different inventories. A more complete analysis tracks minting, burns, vesting releases, treasury distributions, lockups, and circulating float separately.

## A taxonomy of yield

### Fee yield

Fee yield comes from users paying for a service: swaps, block space, borrowing, liquidation, sequencing, issuance, or asset management. It is the strongest candidate for “real” income, but only after following the waterfall. LP fees belong first to LPs, protocol fees may go to a treasury, and only a subset may reach tokenholders. [[From protocol fees to tokenholder value]] supplies the necessary destination test.

Fee yield is also compensation, not a free surplus. An LP exposed to informed flow can earn fees and still underperform simply holding the assets. A validator earns transaction and consensus rewards while operating infrastructure and accepting slashing or delegation risk. Gross yield must be compared with the economic loss distribution of the position.

### Borrower-paid interest

Interest paid by borrowers is externally funded relative to lenders, but it compensates for utilization, liquidity, liquidation, oracle, collateral, smart-contract, and bad-debt risks. Incentive tokens layered on top should be shown separately. If a user deposits and re-borrows the same asset to farm rewards, reported deposits and borrowing can grow without equivalent new credit demand.

Park and Stinner’s account-level study of Aave and Compound describes this as “phantom liquidity”: liquidity mining attracted activity, but some users deposited and borrowed the same token to capture rewards on both sides, and withdrawals followed when incentives stopped. The lesson is not that all incentive-driven liquidity is fake. It is that subsidized balances must be tested for persistence and functional use.

### Consensus issuance

Proof-of-stake rewards pay validators and delegators for securing a network. Some are funded by transaction fees; others are new issuance. The correct comparison is not merely staking APY versus zero. A passive holder is diluted relative to stakers, while a staker accepts lockup, validator, slashing, custody, smart-contract, and liquid-staking-basis risks. A liquid staking token can package the position, but it adds issuer and secondary-market mechanics.

Consensus issuance can be economically necessary. A network may deliberately tax the holder base through inflation to pay for security. Calling it a security budget is more informative than calling all of it real yield.

### Liquidity-mining emissions

Liquidity mining pays participants with newly issued tokens. It can solve a two-sided-market bootstrapping problem: traders want depth before arriving, while LPs want flow before supplying depth. A temporary subsidy may coordinate both sides and create a durable market. The test is what remains when the subsidy falls.

Curve’s DAO design makes the financing explicit. CRV inflation is allocated through gauges; governance weights decide which pools receive emissions, and vote-locking can boost a user’s share. This is not simply revenue distributed to every CRV holder. It is a governance-directed budget for liquidity, with political competition over where inflation goes.

Gauge systems add a second market. Protocols can pay external incentives or “bribes” to voters who direct emissions. Voters may receive fees and incentives, LPs receive newly minted tokens, and the liquid token absorbs dilution unless demand to lock or acquire governance power offsets it. An attractive yield for the active lock can coexist with poor economics for passive liquid ownership.

### Treasury-funded rewards and points

A treasury can distribute previously issued tokens or external assets. The former may not increase total supply, but it can increase circulating float and sell pressure. The latter consumes a finite treasury resource. Points are contingent promises whose conversion terms, dilution, eligibility, and legal status may be unknown. None should be annualized as durable income without an explicit funding runway.

## Measure the source before the rate

The first useful table is denominated in assets, not percentages.

| Flow | Amount | Payer or funding source | Recipient | Supply effect | Main risk |
| --- | ---: | --- | --- | --- | --- |
| User fees | asset units | traders or users | LP, treasury, staker | usually none | activity and competition |
| Borrow interest | asset units | borrowers | lenders, reserve | none | credit and liquidation |
| Token emissions | token units | new issuance | LPs, validators, voters | dilution | price and retention |
| Treasury rewards | token or external assets | treasury | eligible users | float or runway | governance discretion |
| External incentives | assorted assets | third-party protocols | voters or LPs | outside issuer | impermanence and concentration |

Only after building this table should an analyst calculate yield. For a position with externally funded income $E$, token incentives $T$, necessary costs $C$, expected loss $L$, and deployed capital $K$, a simple period return is

$$
y_{net} = \frac{E+T-C-L}{K}.
$$

But $T$ is not equivalent to $E$. Report them as separate components, then apply scenario haircuts to the token’s executable sale price and future emission schedule. The token’s market price can be supported by the very APY being measured, making dollar-valued emission yield reflexive.

For the token system rather than the individual farmer, define a simple net economic balance:

$$
NEB = H - V(I_{incentive}+I_{other}),
$$

where $H$ is externally funded value routed to the relevant holder class and $V(\cdot)$ is a clearly specified valuation of new issuance. Positive $NEB$ does not prove fair value; negative $NEB$ does not prove failure. It reveals whether current holder-directed economics cover token financing at the chosen prices.

## Why dollar-valued emissions are unstable

Dashboards commonly multiply emitted tokens by the spot price. This is convenient and sometimes useful, but it assumes the reported quantity can be sold near that price. Emission recipients selling into finite liquidity create price impact. If token price falls, the dollar cost of future fixed-token emissions falls on the dashboard even though dilution in token units is unchanged. If price rises, reported incentive expense rises without any change in the contracts.

Use at least three views:

- **token-unit dilution**, relative to starting supply and circulating float;
- **spot-valued issuance**, for comparability at a timestamp;
- **executable or scenario-valued issuance**, using liquidity and price-impact assumptions.

The same discipline applies to fee revenue received in volatile tokens. A protocol can show strong dollar revenue because the reward asset appreciated, not because users paid more units. Report quantity and price effects separately.

## Emissions can create circular activity

The central causal question is whether incentives purchase a durable service or merely a temporarily measured balance.

Consider a lending market that rewards deposits and borrows. A user can deposit an asset, borrow the same or correlated asset, redeposit it, and collect rewards on multiple legs. TVL, deposits, borrows, and active addresses can rise while net credit intermediation changes much less. When rewards end, the loop can unwind quickly.

An AMM can attract liquidity with emissions, improving quoted depth. Yet liquidity may cluster narrowly where a gauge measures it, migrate each week toward the highest subsidy, or disappear when emissions move. The venue must test whether subsidized liquidity improves execution for real flow. Independent research on liquidity farming also emphasizes impermanent loss, gas, and price impact: gross rewards are not the LP’s economic return.

A good retention study marks the announcement, activation, reduction, and end of an incentive program, then follows capital, unique providers, volume, spreads, slippage, and fees for several comparable windows. It separates token-price changes from unit changes and uses an untreated market or pool when possible. A single before-and-after TVL chart cannot establish causality.

## The gauge-and-lock case

Vote-escrow systems make the difference between protocol economics and instrument economics especially visible. In Curve’s design, users lock CRV for voting power; gauge votes direct CRV inflation; liquidity providers can earn emissions; and vote-locking can boost rewards. The design aligns long-term governance with allocation of a scarce inflation budget, but it also creates several distinct participants:

- liquid tokenholders exposed to net supply change;
- lockers who surrender liquidity for governance power;
- voters receiving fees or external incentives;
- LPs earning fees and emissions while taking inventory risk;
- protocols purchasing gauge weight to attract liquidity.

No single “CRV yield” describes all five. Aerodrome uses a related vote-escrow/gauge architecture, which is why [[AERO deep memo]] distinguishes liquid AERO from veAERO. Its current research gate compares holder revenue with incentives and tracks the emission rate. That is the right structure: product usage, active-position capture, and passive-token dilution are separate columns.

Gauge allocation can be productive when emissions reach pools that generate genuine demand, fees, and useful depth. It can become extractive when rewards follow governance concentration, bribery budgets, or metrics that can be gamed more cheaply than they create service. Contract-level studies of concentrated-liquidity gauges have proposed “parasitic liquidity” as one such measurement failure; those findings are protocol- and implementation-specific and require independent replication before generalization.

## Burns do not automatically make yield real

A protocol may issue tokens to attract liquidity while using fees to buy and burn tokens. Analysts sometimes count the burn as holder revenue and the emissions as marketing, then present only the former. The correct net supply equation includes both. If $I>B$, supply expands even while a burn dashboard looks impressive.

Ethereum’s EIP-1559 provides a clean protocol-level example: the base fee is burned, but the specification explicitly notes that supply can still be inflationary or deflationary depending on issuance versus burn. The same logic applies to application tokens, with extra layers for vesting and treasury circulation.

Burns and emissions can also affect different groups. A market buyback and burn creates purchase demand in liquid markets; an emission may go to insiders under vesting, LPs likely to sell, or lockers who cannot immediately sell. Net token count is necessary but not sufficient to model float and price pressure.

## A practical real-yield audit

### Step 1: identify the position

Specify the exact contract and economic exposure: liquid token, staked token, vote-escrow lock, LP token, lending receipt, liquid staking token, or wrapper. State lock period, withdrawal queue, chain, bridge, custody, and eligibility constraints.

### Step 2: decompose every reward

For each asset received, label it as user fee, borrower interest, consensus issuance, application-token emission, treasury subsidy, external incentive, liquidation payment, or points. Record whether the reward is claimable, vested, locked, auto-compounded, or merely projected.

### Step 3: measure supply

Reconcile starting total and circulating supply with mints, burns, unlocks, treasury transfers, migrations, and ending balances. Do not use fully diluted value as a substitute for an emission schedule. Do not assume a token sent to a treasury is permanently out of circulation.

### Step 4: estimate necessary risk costs

For LPs, consider impermanent loss, adverse selection, range management, gas, and smart-contract risk. For lenders, consider defaults, oracle failure, liquidation congestion, and withdrawal liquidity. For validators and stakers, consider downtime, slashing, delegation, and liquid-staking basis. These costs are uncertain, so scenario ranges are more honest than one adjusted APY.

### Step 5: test persistence

Compare activity and capital before, during, and after emission changes. Measure fee-generating volume, not just deposits. Ask whether supplier concentration rises, whether the same wallets recycle capital, and whether users remain when rewards fall.

### Step 6: test governance and runway

Identify who can change the emission rate, gauge weights, reward asset, fee split, or eligibility. Compute the treasury runway under several token prices. A three-month campaign should not be annualized as a permanent yield.

### Step 7: report multiple rates

At minimum, publish gross displayed APY, externally funded yield, token-emission yield, dilution-adjusted token-unit yield, and a risk-cost scenario. This makes disagreement legible: readers can challenge the assumptions without losing the underlying flows.

## When emissions are justified

Emissions are not inherently bad. Early networks face coordination problems, and paying participants can accelerate discovery of product-market fit. A justified program has a defined objective, measurable service output, a budget and end condition, resistance to self-dealing or metric gaming, and evidence that useful activity persists as subsidy declines.

The strongest case resembles customer acquisition or a temporary security budget: a finite cost creates recurring externally funded fees, durable liquidity, safer validation, or network effects that later reduce the subsidy need. The weakest case pays mercenary capital indefinitely, measures success by the subsidized balance itself, and relies on a rising token price to finance the next period.

The falsifiable question is: **if emissions fall by half, what economically useful activity remains, and who continues paying for it?**

## Why it matters

Separating emissions from real yield prevents a protocol from counting dilution as earnings and prevents a user from confusing compensation for risk with a free return. It also improves comparisons across Rome’s crypto research. [[PENDLE deep memo]] asks whether buybacks exceed emissions; [[AERO memo]] compares active veAERO capture with ongoing AERO dilution; [[SYRUP deep memo]] distinguishes borrower-funded revenue from governance-discretionary buybacks. These are versions of the same audit.

The result is not a binary “real” or “fake” label. It is a funding map: external income, internally financed rewards, costs, loss risks, governance, and persistence. That map survives changes in token price and marketing vocabulary.

## Sources

- [Curve DAO white paper](https://docs.curve.fi/assets/pdf/whitepaper_curvedao.pdf) — CRV inflation schedule, gauges, gauge weights, and vote-lock boost mechanics.
- [DefiLlama, “Data Definitions”](https://docs.llama.fi/analysts/data-definitions) — definitions of fees, revenue, tokenholder revenue, incentives, and earnings; accessed 2026-07-09.
- [Ethereum Improvement Proposal 1559](https://eips.ethereum.org/EIPS/eip-1559) — fee burn and the net relationship between burn and issuance.
- [Park and Stinner, “Phantom Liquidity in Decentralized Lending”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4489732) — independent account-level research on liquidity mining, recursive participation, and withdrawal after incentives.
- [Li, Naik, Papanicolaou, and Schönleber, “Yield Farming for Liquidity Provision”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4422213) — independent model and evidence incorporating fees, impermanent loss, gas, and price impact.
- [Liu, Chen, and Zhu, “Token Incentives and Platform Competition: A Tale of Two Swaps”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4176638) — independent empirical study of DEX token incentives and liquidity-provider response.
- [Scharnowski and Jahanshahloo, “The economics of liquid staking derivatives”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4180341) — independent analysis of staking yield, concentration, volatility, liquidity, and the liquid-staking basis.
- [Ryan, “Parasitic Liquidity: Emission Extraction via Non-Functional Concentrated Liquidity Positions”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6510118) — implementation-specific 2026 working paper; treated here as a claim needing replication, not a settled general result.

## Open questions

- What minimum post-incentive observation window best distinguishes durable liquidity from temporary farming across lending and AMM protocols?
- How should dollar-valued emission expense be estimated when recipients’ sales materially move the token price?
- Which gauge designs measure useful execution quality rather than capital that merely satisfies the reward formula?
- How should a real-yield audit price rare smart-contract, bridge, oracle, slashing, and bad-debt losses without creating false precision?
