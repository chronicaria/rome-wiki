---
title: Agentic trading evaluation pitfalls
created: 2026-07-08
source: llm
status: seed
tags: [investing, ai, agents, trading, evaluation]
---
Most agentic-trading results are hard to trust unless they specify timing, costs, universe construction, and reproducible closed-loop evaluation.

The 2026 survey [[Agentic Trading]] is useful because it is skeptical. It reviews 77 studies and finds that the field is rich in architectures but weak in comparable evidence. The practical lesson for an AI trading pet project is: make the dashboard an evaluation instrument, not just a P&L display.

## Common traps

- **Look-ahead bias**: using information that was not available at decision time.
- **Training-cutoff leakage**: evaluating LLMs on events inside their pretraining memory.
- **Survivorship bias**: testing only assets that survived or remained liquid.
- **Unspecified execution timing**: pretending a signal at bar close could trade at the same close.
- **Ignored transaction costs**: fees, spread, slippage, and minimum order sizes.
- **Overfit agent prompts**: repeatedly tuning prompts against the same backtest.
- **No benchmark**: reporting returns without BTC, ETH, equal-weight, cash, and no-trade baselines.
- **No uncertainty accounting**: acting on point forecasts with no calibration history.
- **Feedback loops**: letting agents trade on signals that include their own published forecasts or prior trades.

## Dashboard-friendly fixes

- Log every input with timestamp and source.
- Store immutable forecast objects before deliberation.
- Store final forecasts after deliberation.
- Store blocked trades and the guardrail that blocked them.
- Mark every decision as paper, simulated fill, or real fill.
- Use latency-aware execution: decision at time $t$, executable at $t + \Delta$.
- Score forecasts separately from trades.
- Report P&L net of fees and slippage.
- Show benchmark-relative returns and drawdowns.
- Freeze prompts by version and annotate changes.

## Sources

- [Agentic Trading](https://arxiv.org/abs/2605.19337)
- [TradingAgents](https://arxiv.org/abs/2412.20138)
- [PolySwarm](https://arxiv.org/html/2604.03888v1)
- [ForecastBench](https://arxiv.org/abs/2409.19839)

## Open questions

- What is the smallest evaluation period that makes a live crypto-agent dashboard intellectually meaningful?
- Should agent prompts be versioned like trading strategies, with frozen deployment windows?
- How should a toy project report uncertainty when the number of resolved trades is tiny?
