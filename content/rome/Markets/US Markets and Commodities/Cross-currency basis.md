---
title: Cross-currency basis
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, quantitative-research, fx, dollar, rates, derivatives, funding-liquidity]
---

The cross-currency basis is the price gap between direct borrowing in a currency and synthetically borrowing it through foreign-exchange derivatives; it is best read as the market-clearing cost of imbalanced hedging demand under constrained intermediary balance sheets, not as a one-number gauge of panic.

Up: [[US Markets and Commodities]]

Related: [[Interest-rate differentials and dollar exchange rates]] · [[Funding liquidity versus market liquidity]] · [[Real rates inflation compensation and term premium]]

## The no-arbitrage benchmark

Covered interest parity, or CIP, starts from two ways to place money for the same horizon without retaining exchange-rate risk. An investor with dollars can invest directly at the dollar interest rate. Alternatively, the investor can exchange dollars for euros in the spot market, invest at the euro rate, and contract today to exchange the future euro proceeds back into dollars at a forward rate. If the instruments have identical maturity, credit quality, collateral, liquidity, settlement, and tax treatment, the terminal dollar payoffs should be equal.

Let $S_t$ be dollars per unit of foreign currency, $F_{t,T}$ the forward rate with the same quote convention, $r_{USD}$ the dollar rate, and $r_f$ the foreign-currency rate. With simple compounding over horizon $\tau$, the textbook condition is

$$
1+r_{USD}\tau = \frac{F_{t,T}}{S_t}(1+r_f\tau).
$$

In log or continuously compounded form, the forward premium is approximately the interest-rate differential:

$$
\frac{1}{\tau}\ln\left(\frac{F_{t,T}}{S_t}\right) \approx r_{USD}-r_f.
$$

The cross-currency basis is the extra spread required to make the two routes equivalent once observed market prices are inserted. A nonzero value is therefore a CIP deviation. But the sign is not self-explanatory. Market screens quote different legs, currencies, and conventions. A “negative euro-dollar basis,” for example, is commonly described as dollars being expensive to obtain by swapping euros, but a terminal may attach the spread to the opposite leg and show the opposite sign. Any empirical use must record the pair order, which leg receives or pays the spread, the collateral convention, tenor, rate indexes, day counts, and whether the measure comes from FX forwards or a cross-currency swap.

This definition also explains why the basis is not the expected direction of the exchange rate. The future conversion price is locked. That is the “covered” in covered interest parity. A forecast that the dollar will rise belongs to uncovered parity or an FX-risk model; it is not what the basis directly measures.

## Three related instruments

An FX forward exchanges currencies only at maturity. An FX swap combines a spot exchange with an offsetting forward exchange: one party receives a currency now and promises to return it later at the contracted forward rate. Most short-tenor synthetic funding is expressed through forwards or FX swaps.

A cross-currency basis swap is longer-dated. Parties typically exchange notionals in two currencies near inception, make floating or fixed payments in the respective currencies, and reverse the notionals at maturity. A spread on one leg clears the market. Modern contracts may reference overnight rates such as SOFR and €STR rather than the pre-reform interbank offered rates found in older research. Resettable or mark-to-market structures can periodically adjust notionals and change counterparty exposure. These details mean a basis-swap quote cannot be compared mechanically with a three-month FX-forward CIP calculation.

The economic family resemblance is synthetic borrowing. An institution with abundant yen funding and a dollar asset can lend yen and receive dollars through a swap, eliminating the open FX position but creating a future dollar repayment obligation. A US issuer can sell a euro bond and swap the proceeds and coupons into dollars. A European pension fund can buy a dollar bond and sell dollars forward to hedge its currency exposure. The transactions can face opposite directions, maturities, and credit exposures even though all touch the same basis market.

## Why the basis can persist

In a frictionless model, an arbitrageur borrows through the cheap route, lends through the expensive route, and closes the discrepancy. Real institutions cannot expand this trade without limit. The gross positions consume funding, credit lines, collateral, liquidity reserves, risk limits, and regulatory balance-sheet capacity. Bid-ask spreads and margin matter. The two cash instruments may not share credit quality. A derivatives counterparty can default. Funding can disappear before the trade matures. A trade that is currency-risk-free at maturity can still produce mark-to-market variation and margin calls along the way.

Two forces therefore determine the observed basis.

First, customers generate net hedging demand. Banks with dollar loans but sticky home-currency deposits may repeatedly swap home currency into dollars. Insurers and pension funds may hedge foreign bond portfolios according to slow-moving policy ratios rather than small changes in hedge cost. Firms may issue debt in the currency with the cheaper credit spread, then swap proceeds into the currency they actually need. Asset managers may rebalance hedges after exchange rates or portfolio values move. These flows push the forward or basis-swap price away from the simple interest differential.

Second, intermediaries decide how much offsetting balance sheet they will supply and at what price. Dealers and relative-value investors take the other side only if the spread compensates them for capital, leverage exposure, funding, liquidity, counterparty, and operational costs. The BIS framework describes the basis as the interaction of hedging demand with per-dollar balance-sheet costs. Demand explains why pressure opens; constrained arbitrage explains why it remains.

The persistence of CIP deviations after the global financial crisis was important precisely because it broke the old habit of treating a visible basis only as a transient data error or crisis alarm. Tighter risk management and balance-sheet constraints can make a modest nonzero basis an equilibrium price in calm markets. Conversely, a sudden extreme move can still signal acute funding stress. Regime and corroborating indicators decide which interpretation is defensible.

## Structural pressure versus stress

A structural basis can arise without failing markets. Japanese insurers hedging dollar bonds, banks funding foreign-currency assets, or corporations swapping opportunistic issuance can create durable one-way flow. Long-tenor basis swaps are particularly exposed to portfolio and issuance patterns. The level can change when relative bond-market credit spreads, monetary policy, hedge ratios, or asset allocations change.

Stress adds different mechanisms. An institution may need dollars immediately while unsecured dollar lenders retreat. Dealers may conserve balance sheet, raise prices, shorten maturities, or reduce limits. Counterparty concerns, margin calls, and poor market liquidity can amplify the move. Short-dated FX swap bases may then widen together with money-market spreads and year-end effects. The distinction is not perfect: the same structural demand becomes harder to intermediate during stress.

Quarter- and year-end moves deserve special caution. Reporting dates can increase the shadow cost of gross exposures, making dealers shrink balance sheets temporarily. A basis that widens into a reporting date and reverses afterward is evidence consistent with intermediary constraints, but it does not by itself identify the exact regulation or institution responsible. Calendar effects, thin liquidity, corporate flows, and collateral demand can overlap.

Central-bank facilities provide a useful stress cross-check. The Federal Reserve's standing arrangements with the Bank of Canada, Bank of England, Bank of Japan, European Central Bank, and Swiss National Bank permit those central banks to obtain dollars and lend them within their jurisdictions. The foreign central bank bears the credit exposure to its borrowers, while the currencies are exchanged back at the original exchange rate. During severe disruptions, use or repricing of these facilities can reduce the scarcity premium in private synthetic dollar funding. Yet low facility use does not prove that private funding is easy: stigma, pricing, collateral eligibility, institutional access, and precautionary value all affect take-up.

## Reading a basis quote responsibly

A usable observation begins with instrument identity rather than a chart label.

1. Record the currency pair and quote direction. State which currency is synthetically borrowed and which leg bears the quoted spread.
2. Match maturity and value dates. A one-week turn, three-month forward, and five-year basis swap answer different questions.
3. Name the interest-rate benchmarks. Secured and unsecured rates, term rates and overnight-indexed swaps, and government bills can embed different credit and liquidity premia.
4. Record collateral and clearing terms where available. Collateral currency and discounting can change valuation.
5. Use executable bid and ask prices when testing arbitrage. A mid-market basis can exceed zero while remaining inside transaction costs.
6. Align timestamps and market sessions. Spot, forward, and rate inputs taken at different moments manufacture apparent deviations.
7. Check conventions: day count, holiday calendars, settlement lag, compounding, forward-points scale, and sign.

The choice of “risk-free” curve is not innocent. A Treasury bill, overnight-indexed swap, repo rate, bank deposit, and commercial-paper yield compensate different risks and serve different participants. A basis calculated from one pair of curves may differ from a dealer's actual marginal funding opportunity. Research should report several defensible benchmarks or explain why one curve fits the institution being modeled.

Cross-sectional comparison also requires care. A wider yen-dollar than euro-dollar basis may reflect different banking-system funding gaps, investor hedge demand, market depth, regulations, credit risks, or quote construction. It is not automatically a ranking of national solvency. The basis measures a market price at a particular interface; it does not reveal every gross exposure behind it.

## What it can reveal

When definitions are controlled, the basis is a valuable price of global intermediation. It can reveal that synthetic funding costs differ from cash-market rates, that hedging demand is one-sided, or that balance-sheet supply has become expensive. Changes across tenor can help separate immediate rollover pressure from persistent investment and issuance flows. Joint movement with FX-swap volumes, dealer balance-sheet dates, money-market spreads, central-bank operations, bond issuance, and institutional hedge activity can sharpen the story.

It also links apparently separate markets. A foreign investor's decision to hedge a Treasury purchase changes the all-in yield after conversion. A multinational's cheapest issuance currency depends on the credit spread and the swap back to its functional currency. A bank's foreign-currency loan growth can require rolling swaps. Thus the basis influences demand for bonds and loans even though it is quoted in a derivatives market.

The BIS emphasizes that FX swaps, forwards, and currency swaps create future payment obligations that standard on-balance-sheet debt statistics may not display transparently. This does not make every derivative obligation a hidden loss: a swap normally has an offsetting receivable and is used precisely to hedge currency risk. It does create rollover and liquidity needs. A short-dated institution must obtain the promised currency at maturity or renew the contract, and gross payment demands can matter during disruption even if net market value was small beforehand.

## What it cannot reveal alone

The basis is not a complete dollar-shortage index. A move can reflect customer hedging demand, regulatory dates, issuance, relative credit spreads, benchmark composition, or dealer inventory rather than a generalized inability to borrow dollars. It does not locate the ultimate borrower, measure its liquidity buffer, or show whether an exposure is hedged elsewhere. Aggregate data can obscure offsetting sector positions.

It is not an arbitrage return available to every investor. The trade may require access to wholesale cash funding, repo, derivatives documentation, collateral transformation, and large credit lines. Published mids omit spreads and price impact. Capital and leverage charges are institution-specific. Settlement, margin, and rollover risks remain even if terminal currency risk is covered.

It is not a causal explanation for asset prices. A wider basis can reduce the currency-hedged return on foreign assets, but Treasury yields or exchange rates may move simultaneously for macroeconomic reasons. Establishing transmission requires event timing, expected baselines, flow evidence, and alternative hypotheses under the standards in [[Event studies for financial markets]].

Finally, one historical series is not automatically comparable through benchmark reform. The transition from LIBOR to overnight reference rates changed contract conventions, curve construction, fallback language, liquidity, and the credit component embedded in the rate leg. A long sample may contain a structural break even when the vendor preserves one ticker.

## A practical analytical workflow

For a point-in-time funding note, begin with the all-in synthetic borrowing equation using same-time spot, forward, and rate observations. Compute the implied rate and basis under a declared convention. Repeat with bid-ask bounds. Compare adjacent tenors and the same tenor across closely related currencies. Then assemble potential drivers: cross-currency issuance, portfolio hedge demand, bank foreign-currency balance sheets, reporting dates, secured and unsecured funding spreads, dealer-risk proxies, market depth, and central-bank operations.

Separate three claims. The observable is that the measured basis moved. The interpretation is that particular flows or constraints are consistent with that move. The implication is how the all-in hedged return or funding cost changes for a specified institution. Only the first follows mechanically from prices; the other two require evidence.

For historical research, archive the exact market-data fields, timestamps, curve versions, calendars, and vendor methodology. Use point-in-time constituents and effective-dated benchmark conventions. A daily closing series is inadequate for claims about intraday central-bank announcements, and a revised end-of-day curve cannot recreate an executable trade. Test whether conclusions survive alternative rate benchmarks, transaction costs, turn dates, and removal of crisis observations.

## Why it matters

The cross-currency basis turns global demand for dollars and other funding currencies into an observable price. It is a bridge between bond allocation, corporate issuance, bank balance sheets, derivatives plumbing, and central-bank backstops. Read carefully, it reveals the marginal cost of transferring funding across currency systems. Read carelessly, it becomes a vague “stress” story detached from instrument conventions and actual users.

For quantitative research, the key lesson is broader than FX. A textbook arbitrage condition can fail persistently when implementing it consumes scarce balance sheet. The residual is not necessarily free money or irrationality; it may be the market price of intermediation. A credible model therefore needs participant-specific funding curves, transaction costs, collateral, limits, and effective-dated contract definitions—not just a clean parity equation.

## Sources

- [Bank for International Settlements — Covered interest parity lost: understanding the cross-currency basis](https://www.bis.org/publ/qtrpdf/r_qt1609e.htm) — framework linking hedging demand and limits to arbitrage; instrument mechanics and cross-currency evidence.
- [Bank for International Settlements — The failure of covered interest parity: FX hedging demand and costly balance sheets](https://www.bis.org/publ/work590.htm) — empirical working paper on hedging pressure and balance-sheet costs.
- [Bank for International Settlements — The basic mechanics of FX swaps and cross-currency basis swaps](https://www.bis.org/publ/qtrpdf/r_qt0803z.htm) — transaction cash flows and synthetic funding mechanics.
- [Federal Reserve Board — Central bank liquidity swaps](https://www.federalreserve.gov/monetarypolicy/central-bank-liquidity-swaps.htm) — standing arrangements, purpose, counterparties, and operating mechanics.
- [Federal Reserve Board — Central bank liquidity swaps balance-sheet explanation](https://www.federalreserve.gov/monetarypolicy/bst_liquidityswaps.htm) — history, accounting, maturities, and allocation of credit risk.
- [Federal Reserve Bank of New York — Capital Constraints, Counterparty Risk, and Deviations from Covered Interest Rate Parity](https://www.newyorkfed.org/research/staff_reports/sr393.html) — crisis-era evidence on capital, margin, counterparty risk, and swap-line effects.
- [Bank for International Settlements — Dollar debt in FX swaps and forwards: huge, missing and growing](https://www.bis.org/publ/qtrpdf/r_qt2212h.htm) — off-balance-sheet payment obligations and rollover risk.
- [Committee on the Global Financial System — Foreign currency funding risk and cross-border liquidity](https://www.bis.org/publ/cgfs71.htm) — 2026 assessment of foreign-currency funding vulnerabilities, internal capital markets, and liquidity backstops.

Sources accessed 2026-07-10. This article explains instruments and research design; it is not investment advice or a live funding-market call.

## Open questions

- Which freely accessible, timestamped bid-ask datasets can support reproducible CIP calculations after benchmark reform?
- How should a regime tracker separate structural hedging pressure from acute funding stress without pretending that sector flow data arrive in real time?
- Which collateral and discounting conventions cause the largest economically meaningful differences between vendor basis series?
- How much of reporting-date widening is predictable compensation for balance-sheet use versus a market-liquidity artifact?
