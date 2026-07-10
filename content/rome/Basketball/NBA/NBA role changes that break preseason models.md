---
title: NBA role changes that break preseason models
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, forecasting, player-development, analytics]
desk: NBA and Dallas Mavericks
as_of: 2026-07-10
---

An NBA player forecast can estimate talent reasonably well and still miss badly when minutes, offensive responsibility, defensive assignment, or lineup context changes faster than the player's underlying ability.

Up: [[NBA and Dallas Mavericks]]

Related: [[NBA player forward projection model]] · [[NBA team season projection model]] · [[RAPM evaluation and uncertainty]] · [[Lineup fit is not the sum of player value]] · [[Availability risk in NBA projections]]

## The hidden preseason forecast

A preseason player projection is often described as a forecast of “how good the player will be.” In practice it is at least two forecasts joined together:

1. a **conditional talent forecast**—the player's expected impact if used in some defined basketball role; and
2. a **deployment forecast**—how many minutes he will play, which jobs he will perform, and which teammates and opponents will shape those minutes.

The second forecast is frequently implicit. A model may age and regress a player's box statistics, tracking features, or adjusted plus-minus estimate while leaving last year's usage, starting status, position, or minute load largely intact. That shortcut works for stable veterans. It becomes dangerous around trades, injuries, coaching changes, depth-chart openings, and young players whose demonstrated secondary role is not their actual ceiling.

Write a player's observed production as

$$
Y_{i,t}=f(\theta_{i,t},r_{i,t},m_{i,t},c_{i,t})+\epsilon_{i,t},
$$

where $\theta$ is latent ability, $r$ is the task or role, $m$ is playing time, $c$ is lineup and scheme context, and $\epsilon$ is short-run noise. A conventional forward model tries to infer $\theta_{i,t+1}$ from prior $Y$. But the season outcome is generated after $r$, $m$, and $c$ also move. If the model treats those inputs as fixed, their error is falsely attributed to “unexpected development” or “regression.”

Role is not a vague narrative label. It can be represented by observable work: on-ball initiation, usage, touches, time of possession, pick-and-roll ballhandling, isolation frequency, assisted-shot share, shot location, screening, matchup difficulty, rim-protection responsibility, and the share of minutes played with other creators. Minutes and starts matter, but a player can keep the same minute total while his task changes radically.

The cases below are not offered as proof that role causes every statistical jump. They show a narrower point: the roster event and subsequent deployment changed before a slow-moving talent estimator could fully learn the new environment. Each case distinguishes the official event from the modeling inference.

## James Harden, October 2012: a sixth man becomes the system

**Fact.** Houston acquired James Harden from Oklahoma City on October 27, 2012, only days before the regular season. The Rockets' announcement described a 23-year-old reigning Sixth Man of the Year. Harden had averaged 16.8 points, 4.1 rebounds, and 3.7 assists in 31.4 minutes in 2011–12. In his first Houston season he averaged 25.9 points, 5.8 assists, and 38.3 minutes, starting all 78 games he played. NBA.com's later historical summary records that he scored 37 and 45 points in his first two Rockets games.

The transaction happened after most of the league's roster construction and almost all prior statistical evidence had placed Harden beside Kevin Durant and Russell Westbrook. Oklahoma City could stagger him into bench units, but its highest-leverage possessions still distributed creation among three elite perimeter players. Houston did not merely add minutes. It made Harden the primary source of advantage creation.

**Inference.** A model built from per-minute scoring efficiency should have liked Harden before the trade; his 2011–12 efficiency and playmaking were already strong evidence. But a model that regressed volume toward his Oklahoma City workload or treated a sixth-man label as persistent would miss the discontinuity. Conversely, multiplying his previous per-minute box score by 38 minutes would also be inadequate. Primary initiation brings more difficult shots, more turnovers, more assists, more free throws, different defensive attention, and greater fatigue. The conditional question was not “What does Oklahoma City's Harden do in seven more minutes?” It was “How much of his efficient secondary creation survives when the entire offense asks him to bend the first defender?”

Harden illustrates a late-offseason **task shock**. The trade was public before opening night, so the model did not lack information; it lacked a mechanism for converting roster information into a new role distribution. A robust system should reopen its minute and task priors after every material transaction rather than treating the statistical model's earlier output as final.

## Jalen Brunson, July 2022: demonstrated creation was hidden by shared control

**Fact.** New York officially signed Jalen Brunson on July 12, 2022. The Knicks' release documented his final Dallas season: 16.3 points, 4.8 assists, 3.9 rebounds, and 31.9 minutes over 79 games, including 61 starts. It also recorded a stronger playoff workload—21.6 points in 34.9 minutes across 18 starts—and a 41-point first-round game while Luka Dončić was unavailable. In Brunson's first Knicks season, NBA records list 24.0 points and 6.2 assists per game; by 2023–24 he averaged 28.7 points and finished fifth in MVP voting.

The move did not reveal an unknown ability from nothing. Dallas had already supplied high-leverage evidence that Brunson could run an offense, especially during Dončić's absences and the 2022 playoffs. What changed was the probability of receiving the task every night. In Dallas, Dončić's extraordinary on-ball responsibility necessarily limited Brunson's touches when both played. In New York, Brunson was signed as the lead point guard.

**Inference.** This is a case where a season-level average can obscure a conditional split. The right preseason feature set should ask how the player performs with and without the incumbent creator, while shrinking small samples and accounting for opponent and teammate changes. The playoff sample raised the plausible upper tail; it did not guarantee that four months of primary creation would reproduce one series.

Brunson also shows why “usage will rise” is not a complete forecast. Lead-guard value includes organizing teammates, protecting the ball, forcing rotations, and maintaining efficiency as scouting attention increases. A model should project a distribution over roles—secondary creator, co-primary, clear primary—not insert one exact usage number. New York's roster decision moved substantial probability toward the last state.

For Dallas forecasting, the reciprocal effect mattered too. Removing Brunson did not simply subtract his estimated impact. It reassigned his initiation minutes to specific players and made the team's non-Dončić possessions a different problem. [[NBA team season projection model]] therefore needs a feasible minute-and-task matrix, not only a sum of player ratings.

## Lauri Markkanen, September 2022: position and shot ecology change together

**Fact.** Utah acquired Lauri Markkanen from Cleveland in the Donovan Mitchell trade officially announced September 8, 2022. Markkanen had averaged 14.8 points in 30.8 minutes for Cleveland in 2021–22 while playing in a large frontcourt with Evan Mobley and Jarrett Allen. In Utah he averaged 25.6 points and 8.6 rebounds in 34.4 minutes, made his first All-Star team, and won the 2022–23 Most Improved Player award. The NBA's award release noted that he increased his scoring by 10.8 points per game and became the first player to make at least 200 three-pointers and 100 dunks in a season.

Utah's change was not simply “more shots because somebody had to score.” Markkanen moved from a context in which Cleveland often used him as the nominal small forward beside two bigs to a frontcourt and offense designed to exploit his movement shooting, size, and finishing. His shot ecology expanded: more actions could use him as a moving target or mismatch rather than a stationary floor spacer. The minutes increase explains only a fraction of a 10.8-point scoring jump.

**Inference.** A position label can be a poor model input because it compresses the jobs that generated the statistics. “Small forward” in a huge Cleveland lineup does not mean the same offensive or defensive task as a featured scoring forward in Utah. A model that sees only age, minutes, and prior box score may interpret Cleveland production as a tight estimate of ability. A role-aware model instead records that Markkanen had already demonstrated efficient shooting and finishing, that his new team lacked an established primary scorer, and that a different lineup geometry could release more of those skills.

The caution runs both ways. Opportunity can raise volume while lowering efficiency, and team need is not proof that a player can solve the need. Markkanen's leap was larger and more efficient than a prudent median forecast should have assumed. The defensible preseason response was to widen the distribution and raise the high-role scenario—not to backfit a rule that every displaced scorer will become an All-Star.

## Mikal Bridges, February 2023: the same season contains two roles

**Fact.** Brooklyn acquired Mikal Bridges from Phoenix in the Kevin Durant trade on February 9, 2023. The Nets' release described Bridges through 56 Phoenix games that season: 17.2 points, 3.6 assists, and 36.4 minutes. NBA.com's statistical review later recorded a 29.5% usage rate and 26.1 points per game across his 27 post-trade Brooklyn games. In 2023–24, still in Brooklyn, those figures fell to a 23.8% usage rate and 19.6 points.

This within-season break is unusually useful because age and offseason training cannot explain the timing. Phoenix used Bridges as an elite defensive wing and increasingly capable secondary scorer around established creators. Brooklyn, having traded Durant and Kyrie Irving, immediately needed a focal scorer. The task changed at the transaction boundary.

**Inference.** Bridges demonstrates both the importance and instability of a role shock. If a model updated his latent offensive talent directly to “26-point scorer” after 27 games, it would confuse assigned volume and a hot segment with a permanent player state. If it ignored the segment, it would miss genuine evidence that he could handle more self-creation than Phoenix had demanded. His following season supplied the expected partial reversal: the role remained larger than in Phoenix but the initial scoring peak did not persist.

The right update has two components. First, raise the estimate of Bridges's creation capacity because he completed harder work with some success. Second, retain separate uncertainty about how often a team should ask him to perform that work and how efficient it will remain over a full season. This is the difference between learning about talent and copying a role-conditioned outcome into next year's baseline.

## A role-aware preseason architecture

These examples imply a layered forecasting process.

### 1. Forecast talent conditionally

The player model should estimate portable skill components rather than one undifferentiated number: rim pressure, shooting, passing, turnover avoidance, offensive rebounding, point-of-attack defense, rim deterrence, and so on. [[Six-factor RAPM decomposition]] and box or tracking priors can help, but historical impact remains conditional on old teammates and schemes. [[RAPM]] is not a context-free substance that follows a player unchanged.

The output can be written as $p(\theta_{t+1}\mid D_t)$: a distribution over ability given data through season $t$. Aging, injury history, regression, and development uncertainty belong here.

### 2. Forecast discrete role states

Next estimate $p(r_{t+1}\mid R)$ from the actual roster and coaching environment. Useful states might include primary creator, secondary creator, finisher, movement shooter, screener, defensive stopper, drop big, or switching big. These states may overlap, but they should correspond to measurable tasks.

Contracts and public team decisions are evidence, not destiny. Brunson's signing and Harden's trade strongly implied primary creation. Markkanen's new roster merely made a larger role plausible; coaches still had to choose it and the player had to sustain it. The model should preserve that distinction.

### 3. Solve minutes and tasks jointly

Minute projections should satisfy roster constraints: 240 team minutes per game, positional feasibility, availability, starting and closing combinations, and replacement order. Task allocation must also be feasible. Five players cannot all retain primary-creator usage in the same minutes. A player's projection should respond when a teammate absorbs or vacates possessions.

A team forecast is then a mixture:

$$
p(W)=\sum_{r,m,c}p(W\mid \theta,r,m,c)\,p(\theta)\,p(r,m,c),
$$

where $W$ is the season outcome. The equation is conceptual: it says that wins must average over plausible deployment states rather than rely on one frozen depth chart.

### 4. Translate volume nonlinearly

Do not scale per-minute production mechanically. Higher usage changes shot difficulty and turnover exposure. More minutes introduce fatigue and more time against starters. A defensive specialist asked to create may sacrifice energy or assignment quality. A creator moving off the ball may lose volume but gain efficiency. Empirical usage-efficiency curves, role-conditioned comparables, and skill-specific models are better than one universal penalty.

### 5. Update at event boundaries

A transaction, major injury, coaching change, or declared lineup should trigger a structural update even before new games arrive. The evidence changes $p(r,m,c)$ immediately. Early games then update both whether the role actually materialized and how the player performs inside it.

This prevents two opposite mistakes: waiting twenty games for a talent model to notice an obvious depth-chart change, and overreacting to twenty games by declaring a new permanent talent level.

## How to evaluate the model honestly

A preseason system should be scored on more than final player points per game. Separate at least four errors:

- **availability/minutes error:** the player was healthier, less healthy, promoted, or benched;
- **role error:** the model assigned the wrong task distribution;
- **conditional performance error:** production differed even after the role was approximately right;
- **team translation error:** player estimates did not combine correctly in lineups and wins.

This decomposition matters for learning. Calling Markkanen a generic “player miss” hides whether the system failed to recognize Utah's opportunity, underestimated his skill portability, or both. Calling Bridges's 2023–24 decline “regression” can hide that the 27-game post-trade role was an unstable baseline.

Backtests must use information available at the forecast date. A model cannot use a player's eventual usage to claim it predicted his breakout. One useful evaluation runs two tracks: a true preseason forecast with projected deployment and a conditional forecast scored using realized minutes and role features. The gap between them estimates deployment error. The conditional track is not a deployable preseason forecast; it is a diagnostic for the talent model, much as [[RAPM evaluation and uncertainty]] separates estimation quality from downstream season uncertainty.

Calibration by role-transition class is also essential. Among players projected to move from secondary to primary creation, did 50% intervals contain roughly half the outcomes? Did efficiency penalties systematically overshoot? Were young players' high-role tails too narrow? Rare success stories should not be the only examples. Every Harden has many players whose larger opportunity exposed limits. The model improves by scoring the full declared cohort, not by narrating memorable breakouts after the fact.

## Why it matters

Role change is one of the fastest channels through which public information can outrun a statistical prior. Talent usually evolves gradually; a trade can reallocate 35 minutes and a quarter of a team's possessions overnight. The correct response is not to abandon player models for depth-chart storytelling. It is to make deployment an explicit stochastic layer and to treat task changes as measurable inputs.

Harden, Brunson, Markkanen, and Bridges represent different failures. Harden received an abrupt primary-creator task days before the season. Brunson carried demonstrated lead-guard evidence that shared minutes had muted. Markkanen entered a new positional and shot environment. Bridges showed, within one season, both the information and the danger in a high-usage role sample. Together they establish a general rule: forecast what the player can do, forecast what the team will ask him to do, and never pretend those are the same question.

## Sources

All web sources accessed 2026-07-10.

- Houston Rockets, “Blockbuster Deal Brings James Harden To Houston,” October 27, 2012: https://www.nba.com/rockets/news/blockbuster-deal-brings-james-harden-houston
- New York Knicks, “Knicks Sign Jalen Brunson,” July 12, 2022: https://www.nba.com/knicks/news/knicks-sign-jalen-brunson
- NBA.com, “Knicks sign All-Star guard Jalen Brunson to 4-year extension,” July 12, 2024: https://www.nba.com/news/jalen-brunson-knicks-extension
- Utah Jazz, “Utah Jazz Acquire Agbaji, Markkanen, Sexton, and Future Draft Assets,” September 8, 2022: https://www.nba.com/jazz/news/utah-jazz-acquire-agbaji-markkanen-sexton-and-future-draft-assets
- NBA.com, “Lauri Markkanen named 2022-23 Kia NBA Most Improved Player,” April 24, 2023: https://www.nba.com/news/2022-23-kia-nba-most-improved-player
- Brooklyn Nets, “Brooklyn Nets Acquire Mikal Bridges, Cam Johnson and Draft Compensation in Four-team Trade,” February 9, 2023: https://www.nba.com/nets/news/brooklyn-nets-acquire-mikal-bridges-cam-johnson-and-draft-compensation-in-four-team-trade
- NBA.com, “Mikal Bridges' 15 key numbers after trade to Knicks,” June 27, 2024: https://www.nba.com/news/mikal-bridges-stats-after-knicks-trade
- Local methodology: [[NBA player forward projection model]], [[NBA team season projection model]], [[RAPM evaluation and uncertainty]], and [[Lineup fit is not the sum of player value]].

## Open questions

- Which public role variables remain stable enough across tracking-data vendors and seasons to support a reproducible role taxonomy?
- How much out-of-sample accuracy does a discrete role-state layer add beyond age, box statistics, roster continuity, and projected minutes?
- Can transaction-boundary designs separate the effect of role from contemporaneous changes in teammates, coaching, health, and schedule?
- How should a model price a demonstrated high-role playoff sample without treating opponent-specific postseason possessions as a full-season baseline?
- Which failed promotions should form a matched comparison set for the successful cases here?
