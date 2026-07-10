---
title: NBA multi-agent forecasting company
created: 2026-07-08
source: llm
status: seed
tags: [project, basketball, nba, ai, agents, forecasting, betting]
---
A project to build a multi-agent NBA forecasting company: either a full 408-agent theater or a lean RAPM-centered company where 30 team agents feed prediction, aggregation, markets, and backtesting.


## Core idea

The full version gives each NBA team an expert subcommittee inside the Research Department. The lean version uses Andrew's proprietary daily [[RAPM]] decomp model as the quant core, then assigns one research agent to each NBA team. Those 30 team agents maintain time-stamped context about roster quality, rotations, injuries, G League depth, schedule context, and possible model-staleness flags.

The Prediction Department consumes that research to produce probabilistic forecasts for season outcomes and individual games. Aggregation turns many forecasts into calibrated house lines. Finance compares house lines to sportsbooks, Kalshi, Polymarket, and other markets. Backtesting walks the company through the completed 2025-26 season as if it were live.

## Project links

- [[RAPM]]
- [[NBA player forward projection model]]
- [[NBA team season projection model]]
- [[RAPM evaluation and uncertainty]]
- [[Daily RAPM public site]]
- [[NBA agent company structure plan]]
- [[Lean NBA agent company structure plan]]
- [[2026-27 NBA team briefing corrected-prior run]]
- [[Basketball/NBA team briefings 2026-27/00_INDEX|2026-27 NBA team briefing index]]
- [[Basketball/NBA team briefings 2026-27/00_CROSS_TEAM_FINDINGS|2026-27 NBA cross-team findings]]
- [[2026-27 projection roster audit]]
- [[2026-27 roster audit projection rerun]]
- [[Current RAPM decomp CSV export]]
- [[Cheap model strategy for NBA agents]]
- [[Multi-agent forecasting frameworks]]
- [[Designed information asymmetry for LLM forecasts]]
- [[Forecast skill]]

## Open questions

- Which public and paid data sources are feasible for leakage-clean historical snapshots?
- How small can the first prototype be while still preserving the 30-team research-company feel?
- How much agent "theater" can be virtualized before the system stops feeling like a company?
- Should the first dashboard emphasize team war rooms, daily slate predictions, or backtest performance?
