---
title: Equity breadth and index concentration
created: 2026-07-09
source: llm
status: seed
tags: [markets, equities, united-states, quantitative-research, index-concentration]
---

Equity breadth asks how widely a market move is shared, while index concentration asks how much the benchmark depends on a small set of constituents; the two are related but answer different questions.

Up: [[US Markets and Commodities]]

Related: [[US market regime tracker]] · [[Factor attribution]] · [[Valuation versus expected return]] · [[Point-in-time data and look-ahead bias]]

## The distinction that prevents most mistakes

A capitalization-weighted index can rise even when most of its constituents fall. That is not a paradox. The index return is a weighted average, whereas a breadth statistic usually gives each security one vote. If a few large companies have sufficiently large weights and positive returns, their contribution can exceed the negative contribution of many smaller companies.

Let $r_{i,t}$ be constituent $i$'s return and $w_{i,t-1}$ its index weight immediately before the measurement interval. Ignoring corporate-action and timing details, the index return is approximately

$$
R_t=\sum_{i=1}^{N_t}w_{i,t-1}r_{i,t}.
$$

An elementary breadth statistic is the share advancing:

$$
B_t=\frac{1}{N_t}\sum_{i=1}^{N_t}\mathbf{1}(r_{i,t}>0).
$$

$R_t$ is economically weighted exposure. $B_t$ is a cross-sectional count. Neither dominates the other. They describe different features of the same return distribution.

Concentration is a third object. It concerns the distribution of the weights $w_i$, not the signs of current returns. A market may be highly concentrated yet exhibit broad participation on a particular day. It may be diffusely weighted yet have narrow breadth because most stocks fall together. “Narrow market,” therefore, is incomplete unless the speaker says whether narrowness refers to index weights, the number of winners, sector participation, factor leadership, or contribution to return.

## Why capitalization weighting naturally concentrates

In a float-adjusted capitalization-weighted index, a company's weight is broadly proportional to price times shares available to public investors. Index providers apply eligibility, liquidity, domicile, investability, and corporate-action rules, so the exact calculation is more involved. But the central arithmetic remains:

$$
w_i=\frac{P_iQ_iF_i}{\sum_j P_jQ_jF_j},
$$

where $P_i$ is price, $Q_i$ is shares outstanding, and $F_i$ is a float or inclusion factor. S&P Dow Jones Indices and MSCI both document float-adjusted market-capitalization methods. Float adjustment matters because strategic, controlling, government, or otherwise unavailable holdings may not represent tradable supply.

This design is self-rebalancing in one useful sense: if a security appreciates relative to the rest, its weight increases without the index trading merely to acknowledge the higher market value. It also approximates the investable market portfolio more closely than equal weighting does. Yet the same mechanism makes past winners increasingly important. Concentration can rise because the largest companies earn more, receive higher valuation multiples, issue or retire shares, change float, acquire rivals, or enter the eligible universe.

Concentration is not automatically evidence of a bubble, monopoly, passive-investing distortion, or imminent reversal. It is an accounting fact about weights. Explaining it requires decomposing business fundamentals, valuations, index rules, and market structure rather than attaching a narrative to a top-ten-weight chart.

## Measuring concentration

### Top-$k$ share

The simplest measure is the sum of the largest $k$ weights:

$$
C_k=\sum_{i=1}^{k}w_{(i)},
$$

where weights are sorted from largest to smallest. Top-one, top-five, and top-ten shares are intuitive and easy to communicate. Their weakness is the arbitrary cutoff: a company moving from rank ten to eleven can change membership without materially changing the distribution.

### Herfindahl-Hirschman index

The Herfindahl-Hirschman index uses all weights:

$$
HHI=\sum_{i=1}^{N}w_i^2.
$$

If weights are expressed as fractions, the reciprocal $1/HHI$ is the “effective number” of equally weighted constituents. An index with 500 names may have an effective count far below 500. This is a compact way to distinguish nominal constituent count from economic diversification. HHI is still only a weight measure: it ignores correlations, common factors, and nonlinear exposures.

### Entropy and effective breadth

Weight entropy is

$$
H=-\sum_i w_i\log w_i,
$$

and $e^H$ produces another effective-count measure. Entropy is sensitive across the distribution and does not impose a top-$k$ boundary. Different concentration metrics should generally agree on large movements but can rank portfolios differently.

### Risk concentration is not weight concentration

Two portfolios with identical weights may have different risk concentration because volatilities and correlations differ. A first-order component contribution to portfolio variance depends on $w_i(\Sigma w)_i$, not $w_i$ alone. Sector and factor exposures can also make many legal entities behave like one trade. A benchmark with modest single-name concentration may still be concentrated in duration sensitivity, growth expectations, oil prices, bank funding, or the business cycle.

Accordingly, a useful concentration dashboard separates at least four layers: constituent weights, return contributions, factor or sector exposures, and marginal risk contributions. Collapsing them into one number throws away the mechanism.

## Measuring breadth

### Advance-decline statistics

The advance-decline balance is the number of advancers minus decliners. Its cumulative form adds the daily balance through time. The advance-decline ratio divides advancers by decliners. These measures are easy to calculate, but results depend on the universe, return definition, treatment of unchanged securities, delistings, and missing prices.

NYSE breadth, S&P 500 breadth, and all-US-common-stock breadth are not interchangeable. A universe containing closed-end funds, preferred securities, ETFs, microcaps, or multiple share classes can answer a question the researcher did not intend to ask. A defensible series publishes its eligibility rules and reconstructs historical membership point in time.

### Percent above a moving average

The fraction of constituents above a 50-day or 200-day moving average measures how many securities participate in a medium- or long-horizon trend. It combines sign, path, and horizon. It is not a pure measure of current-day breadth, and overlapping windows create strong serial dependence. Corporate actions and stale prices can contaminate moving-average comparisons unless adjusted consistently.

### New highs and new lows

Counts of securities reaching rolling highs or lows describe the tails of cross-sectional momentum. A rising index with few new highs can indicate concentrated leadership, but the signal also depends on lookback length, universe turnover, volatility, and listing history. Newly listed firms cannot have a 52-week high history comparable with seasoned firms.

### Equal-weight versus cap-weight returns

The return spread between an equal-weighted universe and its capitalization-weighted counterpart is often used as a leadership measure. If cap weight outperforms, large constituents contributed more than the typical constituent. But an equal-weight index is not merely a breadth counter. It embeds periodic rebalancing, greater exposure to smaller companies, sector differences, and turnover. Its return contains a trading strategy as well as a cross-sectional comparison.

A cleaner same-window diagnostic is contribution concentration: sort constituent contributions $w_ir_i$, then report how much of the index move came from the largest positive contributors and how much was offset by negative contributors. This directly explains benchmark arithmetic. It should accompany, not replace, equal-weight and count-based measures.

### Dispersion

Cross-sectional return dispersion asks how far constituent returns spread around their center. Breadth and dispersion interact. If only a few companies rise but their gains are small, narrow breadth may have little index consequence. If a few very large constituents post extreme gains, the same advance count can produce a large benchmark move. Reporting the median return, weighted mean, interquartile range, and selected tails prevents the sign count from hiding magnitude.

## A worked example

Suppose an index has five securities with weights 40%, 25%, 15%, 10%, and 10%. Their returns are 4%, 2%, −1%, −1%, and −1%. Only two of five advance, so advancing breadth is 40%. The approximate index return is

$$
0.40(0.04)+0.25(0.02)-0.15(0.01)-0.10(0.01)-0.10(0.01)=1.75\%.
$$

The index rises strongly despite negative median performance. Its top-two weight is 65%, and its HHI is $0.40^2+0.25^2+0.15^2+0.10^2+0.10^2=0.265$, implying an effective count of about 3.8 rather than five. Each statement is true:

- the benchmark gained 1.75%;
- most constituents declined;
- the weights were concentrated;
- the two largest positive contributors explained more than the net gain because losers offset part of it.

The example also shows why “the market rose” can mean either the investable benchmark's dollar-weighted value rose or the typical listed company rose. A careful market note specifies which claim it makes.

## Interpreting divergence without mythology

When cap-weighted returns outrun equal-weighted returns and advance counts weaken, several hypotheses deserve testing.

First, the largest firms may have delivered superior cash-flow news. Strong earnings, margins, investment opportunities, or balance sheets can rationally raise their relative value. Second, discount-rate exposure may differ: long-duration growth companies can respond more to changes in real yields. Third, sector composition can matter; a benchmark's largest names may cluster in industries exposed to one shock. Fourth, liquidity and index-linked flows may amplify moves, though flows should not be inferred merely from prices. Fifth, smaller companies may face tighter credit, weaker demand, or refinancing risk.

These stories are not mutually exclusive. A diagnostic sequence should begin with observed earnings and revisions, sector-neutral returns, size and quality factors, real yields, credit spreads, and actual fund-flow or trading data when available. It should then ask whether leadership began before or after the proposed catalyst. “Investors crowded into safety” is a hypothesis, not an observation.

Narrow breadth is sometimes presented as a timing signal for reversal. That claim requires a declared rule, point-in-time constituents, realistic availability, a benchmark, transaction costs, and out-of-sample evidence. Thresholds selected after viewing outcomes invite data mining. The economic interpretation can also change by regime: narrow leadership caused by genuine profit concentration differs from narrowness caused by temporary liquidity stress.

## Construction choices that change the answer

Breadth research is unusually vulnerable to quiet data errors.

**Survivorship bias.** Calculating historical breadth using today's constituents deletes failed, acquired, and removed firms. It makes the past universe look healthier and can shift turning points.

**Look-ahead bias.** Index additions and deletions must become known only when the methodology and announcement schedule allowed. Backfilling future members into earlier periods is invalid. This links breadth work directly to [[Point-in-time data and look-ahead bias]].

**Multiple share classes.** Counting securities gives firms with several listed classes several votes. Aggregating to company level changes both breadth and concentration. Neither choice is universally correct; it must match the question.

**Corporate actions.** Splits, spinoffs, special dividends, rights issues, and mergers require consistent adjusted returns. A raw-price high/low series may record mechanical events as market signals.

**Float and eligibility revisions.** Index weights change not only through price. Shares, float factors, constituent reviews, and corporate events matter. Historical index files and provider methodology are preferable to reconstructions from current fundamentals.

**Time and session.** Closing-auction prices, consolidated closes, stale small-cap prints, and timezone boundaries can produce inconsistent cross sections. Use one timestamp convention and document it.

**Missing and halted names.** Treating missing returns as zero can improve breadth artificially; dropping them can hide stress. Report the missing share and establish a rule before testing.

## A practical breadth panel

A robust weekly or event-window panel can remain compact:

1. cap-weighted total return and median constituent total return;
2. percent advancing and advance-decline balance;
3. percent above 50- and 200-day moving averages;
4. new-high minus new-low counts with a declared lookback;
5. cap-weight minus equal-weight return spread;
6. top-five and top-ten weights, HHI, and effective count;
7. share of index return contributed by the largest five positive contributors;
8. cross-sectional dispersion;
9. sector-neutral and size-factor versions of the principal comparisons; and
10. universe coverage, missingness, membership vintage, and as-of timestamp.

No single light should be labeled bullish or bearish. The panel is a description system. Its research value comes from making competing explanations measurable. If concentration rises while breadth remains broad, market-cap leadership may coexist with widespread gains. If breadth collapses, dispersion rises, credit spreads widen, and funding conditions tighten, a stress interpretation has more cross-asset support. If cap weight leads solely because one sector reports exceptional profits, the phenomenon may be fundamental and localized rather than a general liquidity warning.

## Why it matters

For an index investor, concentration determines which companies drive benchmark outcomes. For an active manager, breadth helps separate benchmark-level performance from the opportunity set faced by the typical stock. For a risk manager, weight concentration is only the first step toward factor and covariance concentration. For a quantitative researcher, breadth supplies cross-sectional state variables but also a dense cluster of universe, timestamp, and multiple-testing hazards.

The best use of breadth is explanatory discipline. It forces the analyst to replace “stocks did X” with several testable statements: the weighted index did X, the median constituent did Y, particular sectors or factors supplied the difference, and a known share of the move came from named contribution buckets. That language does not predict the future by itself. It makes the present less ambiguous.

## Sources

- S&P Dow Jones Indices, “Index Mathematics Methodology,” current methodology document, accessed 2026-07-09: https://www.spglobal.com/spdji/en/documents/methodologies/methodology-index-math.pdf
- S&P Dow Jones Indices, “S&P U.S. Indices Methodology,” methodology library, accessed 2026-07-09: https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf
- MSCI, “MSCI Global Investable Market Indexes Methodology,” methodology library, accessed 2026-07-09: https://www.msci.com/indexes/index-resources/index-methodology
- MSCI, “MSCI US Equity Indexes Methodology,” February 2020, accessed 2026-07-09: https://www.msci.com/eqb/methodology/meth_docs/MSCI_USEI_Methodology_Feb2020.pdf
- Center for Research in Security Prices, “CRSP US Stock Databases,” data and methodology overview, accessed 2026-07-09: https://www.crsp.org/research/crsp-us-stock-databases/
- Kenneth R. French Data Library, “Current Research Returns,” factor and portfolio construction documentation, accessed 2026-07-09: https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html

## Open questions

- Which point-in-time constituent source can support a reproducible long history without violating its license?
- How stable are breadth signals after controlling for size, sector, volatility, and the changing number of listed firms?
- Does contribution concentration add predictive information beyond contemporaneous factor returns, or is its main value descriptive?
- Which missing-price and trading-halt convention produces the least misleading real-time breadth estimate during stress?
