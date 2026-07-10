---
title: Interest-rate differentials and dollar exchange rates
created: 2026-07-09
source: llm
status: seed
tags: [investing, markets, united-states, macro, rates, fx, dollar]
as_of: 2026-07-09
desk: US markets and commodities
review_after: 2027-01-09
---
Interest-rate differentials help organize dollar movements, but only after matching horizons, separating expected policy from surprises, and allowing for risk premia, funding conditions, and the economic news that moved rates.

Up: [[Markets]] · Related: [[Reading the Treasury curve as scenarios]] · [[US market regime tracker]] · [[Dollar funding outside the United States]] · [[FX carry and crash risk]]

## The useful claim is narrower than “higher rates mean a stronger currency”

A common foreign-exchange story says that a currency appreciates when its interest rate rises relative to foreign rates because investors can earn a higher return by holding assets in that currency. The story contains a real mechanism, but it is incomplete. It confuses a yield observed today with an expected total return, ignores the exchange-rate change required to compare returns in one currency, and often compares rates with different maturities or risks. It also neglects why the interest differential moved. A higher yield caused by better growth prospects need not have the same currency implication as a higher yield caused by inflation risk, fiscal stress, or a loss of confidence.

The disciplined version is conditional: an unexpected rise in the expected path of U.S. short rates relative to comparable foreign rates will often support the dollar on impact, all else equal. “Unexpected,” “relative,” “comparable,” and “on impact” do nearly all the work. The exchange rate is a forward-looking asset price, so an anticipated Federal Reserve decision may already be embedded in both yields and the dollar. Foreign policy expectations can change at the same time. A two-year Treasury yield and an overnight foreign policy rate do not describe the same horizon. And the impact response need not persist if the rate advantage is compensation for a risk investors dislike.

This framework is therefore better used to construct and test scenarios than to produce a one-variable forecast. It complements [[Reading the Treasury curve as scenarios]]: the first task is to identify what changed in the U.S. and foreign yield curves; the second is to ask whether that relative change plausibly altered the expected currency return.

## Start from comparable returns

Let $s_t$ denote the log dollar price of one unit of foreign currency. An increase in $s_t$ is then a dollar depreciation. A U.S. investor choosing between a one-period dollar deposit paying $i_t$ and a foreign deposit paying $i_t^*$ compares the dollar return with the foreign interest return plus the eventual exchange-rate change. Ignoring compounding and transaction costs, uncovered interest parity, or UIP, can be written approximately as

$$
i_t-i_t^* \approx E_t(s_{t+1}-s_t).
$$

Under this sign convention, a positive U.S. interest differential is paired with an expected dollar depreciation: foreign currency is expected to become more expensive in dollars. This result surprises readers who began with “high rates attract capital.” The resolution is that an asset cannot offer a predictable riskless excess return merely because it is denominated in a different currency. If dollar assets pay more, an expected dollar decline can offset the interest advantage. UIP is an equilibrium benchmark about expected returns, not the claim that the high-yield currency must appreciate forever.

The spot exchange rate may nevertheless jump upward in favor of the dollar when U.S. rate expectations unexpectedly rise. In the classic overshooting logic, prices of goods adjust slowly while financial prices adjust immediately. A sufficiently large immediate dollar appreciation creates room for the dollar subsequently to depreciate at the rate implied by the new interest gap. The impact appreciation and the expected depreciation are not contradictory; they refer to different points along the adjustment path.

Covered interest parity, or CIP, is a different relationship. If the future exchange rate is locked in with a forward contract, comparable currency-hedged returns should align after accounting for the forward rate:

$$
i_t-i_t^* \approx f_t-s_t,
$$

where $f_t$ is the log forward dollar price of foreign currency. The forward premium is mechanically tied to the interest differential when markets function and funding, credit, balance-sheet, and transaction costs are small. A material deviation is called a cross-currency basis. It is evidence about the price and availability of balance sheets and currency funding, not a free arbitrage available without constraints. UIP is about an uncertain future spot rate and can fail empirically even when CIP holds closely.

These equations require matched objects. The domestic and foreign rates should cover the same dates, maturity, credit quality, collateral convention, and liquidity conditions. Comparing a U.S. Treasury yield with an unsecured foreign bank rate can manufacture a “policy differential” that actually contains sovereign, credit, or funding premia. For an event study, changes in overnight-indexed swap rates or short-rate futures around the announcement may isolate expected policy more cleanly than changes in benchmark government bonds, though derivatives still have their own conventions and risk premia.

## Why the level of the differential is not a forecast

Exchange rates respond to news relative to the state already priced. Suppose markets expect the Federal Reserve to hold its policy rate while another central bank is expected to cut. The dollar can appreciate before either meeting as those expectations enter prices. When the decisions occur exactly as expected, neither the yield differential nor the exchange rate must move. A subsequent dollar decline would not disprove the earlier mechanism; new information, positioning, or profit-taking may have arrived.

This makes changes in expected paths more informative than the raw policy-rate gap. The relevant question is not merely whether the federal funds rate exceeds a foreign policy rate. It is whether the expected U.S. path was revised relative to the expected foreign path over the horizon that matters to the assets being compared. A surprise at the next meeting may affect the front end while leaving distant rates nearly unchanged. News about the long-run inflation regime or fiscal risk may move ten-year yields without implying the same near-term carry advantage.

Federal Reserve research summarized by Stephanie Curcuru illustrates another necessary comparison: a U.S. policy surprise may coincide with a similar revision abroad, producing little change in the bilateral differential. Looking at the U.S. rate alone can therefore attribute a currency move to policy divergence that did not occur. The same problem affects broad-dollar stories. The euro, yen, renminbi, Canadian dollar, and peso face different policy paths, market structures, and risk sensitivities; one bilateral differential cannot explain a trade-weighted index.

The maturity also changes the economic meaning. A two-year yield differential combines expected short rates and term premia over two years. A ten-year differential contains much more duration and inflation risk. A three-month carry measure is closer to the near-term financing return but can be distorted by money-market stress. An analyst should show several matched points or justify one horizon rather than selecting whichever spread best fits the dollar chart.

## Four mechanisms that can break the simple story

### Currency risk premia

UIP is a useful null model, but realized exchange-rate changes are noisy and the empirical “forward-premium puzzle” has often shown that high-interest-rate currencies do not depreciate enough to erase their yield advantage. This pattern motivates currency carry strategies: borrow a low-yield currency and hold a high-yield currency. Historical average profits do not establish a free lunch. Returns can be compensation for bearing rare, correlated losses, exposure to global risk appetite, liquidity risk, intermediary constraints, or model and sample dependence.

A richer decomposition adds a time-varying currency risk premium $rp_t$:

$$
i_t-i_t^* = E_t(s_{t+1}-s_t)+rp_t.
$$

The premium is latent. It is the residual needed to reconcile the rate gap with the expected exchange-rate change under the model, not an independently observed series. When risk appetite deteriorates, investors may unwind leveraged carry positions and demand currencies used for funding or perceived as liquid havens. A high-yield currency can then fall precisely when its apparent carry looks attractive. The dollar occupies several roles at once—domestic currency of the United States, a major reserve and invoicing currency, and a core global funding currency—so its response can differ across advanced and emerging-market counterparts.

### The cause of higher yields

An interest differential is an outcome, not a structural shock. Stronger U.S. activity can lift expected policy rates and attract capital, supporting the dollar. Higher U.S. inflation can lift nominal yields, but the currency implication depends on whether investors expect credible policy tightening, a loss of purchasing power, or a larger inflation-risk premium. Greater Treasury duration supply can raise long yields through term compensation without materially increasing the expected short-rate path. Fiscal news can affect growth, inflation, debt supply, safe-asset availability, and confidence simultaneously.

This is why nominal-yield comparisons should be decomposed where possible. If the U.S. nominal differential rises because U.S. inflation compensation increases while real differentials do not, calling the move a more attractive “real return” is incorrect. Even real government yields are not pure expected real short rates; they contain real term premia and market-specific liquidity effects. The observed dollar response can help discriminate among scenarios, but it cannot by itself identify the original shock.

### Global risk and dollar funding

The dollar can strengthen during episodes in which the Federal Reserve is expected to ease, apparently reversing the rates story. One reason is that a severe global shock can create demand for liquid dollar assets and dollar funding at the same time that markets price U.S. rate cuts. Foreign borrowers with dollar liabilities may need dollars as revenues fall or hedges are adjusted. Banks and dealers may conserve balance sheet. Investors may reduce leverage and sell risk assets. In such a state, safe-asset, liquidity, and funding demand can dominate the prospective reduction in the U.S. interest advantage.

Cross-currency basis, swap-line usage, short-term funding spreads, and market-functioning indicators can reveal this mechanism better than policy rates alone. A widening basis does not have one universal interpretation because quote conventions differ and individual currency markets face distinct supply and demand. It should prompt a funding analysis, not be appended mechanically to a “dollar shortage” narrative.

### Intermediaries, hedging, and portfolio composition

Capital does not move costlessly toward the highest yield. Banks, insurers, pension funds, reserve managers, exporters, and asset managers face mandates, capital requirements, benchmark constraints, hedging policies, and transaction costs. A foreign investor buying Treasuries may hedge the dollar exposure, in which case the relevant return incorporates the forward points and basis rather than the unhedged Treasury yield. When hedging costs rise, the purchase can become unattractive even while the headline U.S. yield increases.

Portfolio rebalancing can also produce exchange-rate movements not captured by short-rate gaps. Changes in relative equity performance, bond supply, foreign direct investment, reserve allocation, or home bias affect desired currency exposures. Recent Federal Reserve staff research on exchange-rate disconnect emphasizes that financial and trade shocks can operate at different frequencies; a rates-only model is unlikely to explain every horizon. At high frequency, asset-market and intermediary shocks can dominate. At lower frequency, trade, productivity, price levels, and external balances matter more. These papers are preliminary research by their authors, not official conclusions of the Board of Governors.

## Measuring “the dollar” without changing the question midstream

A bilateral exchange rate answers how the dollar moved against one currency. A dollar index answers how it moved against a basket under a weighting scheme. Those are not interchangeable. If the research question concerns U.S. trade exposure, a trade-weighted effective exchange rate is usually more relevant than a narrow market index. If the question concerns a policy divergence between the Federal Reserve and the European Central Bank, EUR/USD and matched U.S.–euro-area rates may be the cleaner pair.

The Federal Reserve publishes nominal broad, advanced-foreign-economy, and emerging-market-economy dollar indexes. Its broad index is designed around important U.S. trading partners, and weights are updated annually using trade data. The official documentation warns that weight revisions can change past index values. The daily nominal index is appropriate for tracking a trade-weighted dollar at daily frequency, but it does not have the intraday timestamps needed to attribute a move within a policy-announcement window.

The BIS also publishes nominal and real effective exchange-rate indexes. Its broad measure uses geometric trade-weighted averages and incorporates both direct bilateral trade and competition in third markets. The real effective exchange rate adjusts the nominal measure for relative consumer prices. An increase in the BIS index denotes appreciation. Other data providers sometimes quote currency pairs or indexes in the opposite direction, so the sign convention must be recorded before calculating a return.

Real and nominal effective rates answer different questions. A nominal appreciation is the immediate market-price move. A real appreciation additionally reflects cumulative relative inflation and is more closely related to price competitiveness, though consumer-price adjustment is not a complete measure of firms’ costs or export competitiveness. Using a monthly real index to explain a one-hour market reaction is a frequency mismatch. Using a daily nominal move to claim a durable competitiveness change is another.

## A reproducible event-study workflow

### Define the pair, horizon, and sign

State whether the exchange rate is dollars per foreign currency or foreign currency per dollar. Name the bilateral pair or exact effective index, its provider, weight scheme, frequency, and vintage. Define appreciation in words. Pick a window appropriate to the claim: minutes for a monetary-policy surprise, days for digestion and spillovers, or months for a policy-cycle comparison. Do not use an end-of-day series to decide whether the currency moved before or after a 2 p.m. announcement.

### Build matched rate curves

Use comparable instruments at common maturities in both currencies. For expected policy, calculate changes in overnight-indexed swaps or futures at several horizons if reliable data are available. For government bonds, separate expected short rates from term premia conceptually and recognize credit and liquidity differences. Record quote time, timezone, day-count and settlement conventions, data status, and whether prices are live, delayed, final, or revised.

### Measure the surprise, not only the announcement

The policy action is not necessarily the shock. Estimate the revision in the expected policy path over a narrow window and compare it with the foreign revision. A statement, press conference, macro release, or simultaneous foreign news can move multiple horizons. If the announcement has several dimensions—current-rate action, forward guidance, balance-sheet policy, and risk assessment—a single “hawkish/dovish” label may destroy useful information.

### Check competing channels

Compare nominal and real rate differentials, inflation compensation, broad and bilateral dollar measures, equity and credit risk, volatility, commodity prices, cross-currency basis, and relevant funding indicators. Ask whether the move began before the event and whether it reversed when liquidity normalized. A dollar rise accompanied by higher U.S. expected short rates and stable risk indicators fits policy divergence more cleanly than a dollar rise accompanied by collapsing equities, widening credit spreads, and stressed funding.

### Preserve uncertainty

Report the observation first, then the interpretation and its rivals. A defensible conclusion might say: “The dollar appreciation followed an upward revision to the relative U.S. two-year expected-rate path, while risk indicators were stable; this is consistent with policy divergence, although the window also contained a U.S. activity surprise.” It should not say that the differential “caused” the move unless the research design isolates the shock. Test other windows, currencies, and maturity points, and do not promote one successful episode into a universal trading rule.

## What the framework can and cannot tell us

Rate differentials are valuable because they translate monetary-policy news into a relative asset-pricing question. They are especially informative around well-timestamped events, when comparable market instruments show a clear differential surprise and other risk channels are quiet. They become less decisive over long horizons, during funding stress, when yield changes reflect different underlying shocks, or when portfolio and trade forces dominate.

The durable lesson is not to discard the rates channel. It is to specify it. Identify the expected path that changed, the foreign comparator, the maturity and instrument, the exchange-rate definition, and the alternative premium or funding explanation. This turns “rates up, dollar up” from a slogan into a falsifiable scenario. It also makes disagreement productive: if the dollar moves without the predicted relative-rate revision, the residual is a prompt to investigate risk premia, global funding, hedging demand, or a mismeasured event—not permission to invent a narrative.

## Sources

- Stephanie E. Curcuru, [The Sensitivity of the U.S. Dollar Exchange Rate to Changes in Monetary Policy Expectations](https://www.federalreserve.gov/econres/notes/ifdp-notes/the-sensitivity-of-the-us-dollar-exchange-rate-to-changes-in-monetary-policy-expectations-20170922.htm), Federal Reserve Board IFDP Note, September 22, 2017 — official staff synthesis on relative policy-expectation surprises and dollar sensitivity.
- Jon Faust and John H. Rogers, [Monetary Policy's Role in Exchange Rate Behavior](https://www.federalreserve.gov/pubs/ifdp/1999/652/), Federal Reserve Board IFDP 652, November 1999 — identification uncertainty, rapid exchange-rate responses, and UIP deviations after monetary shocks.
- Bastian von Beschwitz, Christopher G. Collins, and Deepa D. Datta, [Revisions to the Federal Reserve Dollar Indexes](https://www.federalreserve.gov/econres/notes/feds-notes/revisions-to-the-federal-reserve-dollar-indexes-20190115.html), FEDS Notes, January 15, 2019 — construction, country coverage, and trade weighting of the Fed dollar indexes.
- Federal Reserve Board, [Foreign Exchange Rates—H.10: Nominal/Real Indexes](https://www.federalreserve.gov/releases/h10/summary/) — official index definitions, frequency, downloadable data, and weight-revision notice; accessed July 9, 2026.
- Bank for International Settlements, [Effective exchange rates](https://data.bis.org/topics/EER) — official definitions, coverage, weighting, frequency, and methodology links; accessed July 9, 2026.
- Marcos Mac Mullen and Soo Kyung Woo, [Real Exchange Rate and Net Trade Dynamics: Financial and Trade Shocks](https://doi.org/10.17016/IFDP.2025.1419), Federal Reserve Board IFDP 1419, August 2025 — model and empirical evidence on financial versus trade shocks across frequencies.
- Marcos Mac Mullen, [Fiscal Policy, Portfolio Frictions, and International Transmission](https://doi.org/10.17016/IFDP.2026.1439), Federal Reserve Board IFDP 1439, June 2026 — portfolio frictions, UIP deviations, fiscal transmission, and the real exchange rate.

## Uncertainties

- UIP evidence is sensitive to currency universe, sample period, horizon, estimation method, and the distinction between conditional expectations and realized returns.
- Official effective-exchange-rate indexes are reproducible at daily or monthly frequency, but public, license-clean intraday FX and comparable derivatives data may be insufficient for precise event attribution.
- “Safe haven,” “funding demand,” and “policy divergence” can operate together; observed comovement rarely identifies their separate causal shares without a stronger design.

## Open questions

- Which public, point-in-time data can support a reproducible intraday study of Federal Reserve surprises and the broad dollar without licensing conflicts?
- How stable is dollar sensitivity when the relative expected-rate revision is measured at three-month, two-year, and five-year horizons?
- When do cross-currency basis and hedging costs overturn the ranking implied by unhedged government-bond yields?
- How should a dollar event study separate a U.S. monetary-policy shock from simultaneous information about growth, inflation, and financial stability?
