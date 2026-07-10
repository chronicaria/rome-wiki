---
title: Orca inter-agent orchestration
created: 2026-07-09
source: mixed
status: seed
tags: [ai, agents, orchestration, tooling]
---
Orca agents can collaborate through persistent terminal-to-terminal messages, tracked task dispatches, blocking questions, completion messages, and coordinator loops.



## Three levels

Use the lightest level that creates enough structure.

## Level 1: direct messages

Use this when one agent needs to nudge, review, or ask another agent something.

```bash
orca terminal list --json

orca orchestration send \
  --to <codexTerminalHandle> \
  --subject "Please review Claude's API plan" \
  --body "Focus on backwards compatibility and tests. Reply with the top risks." \
  --type status \
  --json

orca orchestration check --terminal <codexTerminalHandle> --unread --json
```

Group addresses also exist, including `@all`, `@idle`, `@codex`, `@claude`, and `@worktree:<id>`. Use groups for broadcasts, not for dispatch completion.

This is a message bus, not magic telepathy. An agent must either be instructed to check its inbox, or the coordinator must inject/deliver the relevant message into the terminal session.

## Level 2: task dispatch

Use this when a worker needs ownership and must report completion.

```bash
orca orchestration task-create \
  --task-title "Claude reviews Codex diff" \
  --display-name "Review Codex diff" \
  --spec "Review the current worktree diff as a skeptical maintainer. Report correctness bugs, missing tests, and behavior risks. Do not edit files." \
  --json

orca terminal create --worktree active --title claude-reviewer --command "claude" --json
orca terminal wait --terminal <claudeHandle> --for tui-idle --timeout-ms 60000 --json

orca orchestration dispatch \
  --task <taskId> \
  --to <claudeHandle> \
  --inject \
  --json

orca orchestration check \
  --wait \
  --types worker_done,escalation,decision_gate \
  --timeout-ms 900000 \
  --json
```

`dispatch --inject` gives the worker a live preamble. That preamble tells the worker how to send `worker_done`, how to ask blocking questions, and which `taskId`/`dispatchId` define completion authority.

## Level 3: coordinator loop

Use this for larger decomposition where Orca should manage dispatching ready work across available terminals.

```bash
orca orchestration run \
  --spec "Split the checkout QA across available Claude and Codex agents, collect worker_done reports, and summarize blockers." \
  --max-concurrent 3 \
  --worktree active \
  --json
```

Then inspect:

```bash
orca orchestration task-list --json
orca orchestration task-list --ready --json
orca orchestration gate-list --status pending --json
```

This is the most powerful form, but it is also the easiest to overuse. Start with manual dispatch until the coordination pattern is obvious.

## Good Claude plus Codex patterns

- Codex implements; Claude reviews the diff.
- Claude proposes an architecture; Codex implements the smallest patch.
- Codex writes tests; Claude searches for missing edge cases.
- Claude summarizes docs and design constraints; Codex makes code changes.
- Both independently investigate a bug; a coordinator compares reports before editing.

Avoid letting both edit the same checkout at once unless the scope is extremely clear. For independent implementations, use separate worktrees. For review-only collaboration, same worktree plus separate terminals is often fine.

## Worker contract

A dispatched worker should:

- Do only the assigned task.
- Use `orca orchestration ask` for blocking questions.
- Send exactly one `worker_done`, even on failure.
- Include what it did, what it found, what remains, and relevant file paths.
- Stop after completion so the coordinator can decide the next move.

Example completion:

```bash
orca orchestration send \
  --to <coordinatorHandle> \
  --type worker_done \
  --subject "Review complete" \
  --body "Reviewed the Codex diff. Found one missing regression test and one edge-case bug in the empty-state path. No files modified." \
  --task-id <taskId> \
  --dispatch-id <dispatchId> \
  --json
```

## Sources

- [Orca docs: Orchestration](https://www.onorca.dev/docs/cli/orchestration)
- [Orca docs: CLI overview](https://www.onorca.dev/docs/cli/overview)
- [Orca docs: Worktree checkpoints](https://www.onorca.dev/docs/cli/worktree-checkpoints)

## Open questions

- Should Andrew's default coordinator be himself, Codex, Claude Code, or an Orca `orchestration run` loop?
- Which local repos are safe for same-worktree reviewer terminals versus separate-worktree implementation races?
- What standard worker prompts should live in reusable snippets or Orca Skills?
