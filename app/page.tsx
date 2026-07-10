import type { Metadata } from "next";
import Link from "next/link";

import { SearchTrigger } from "@/app/components/search";
import { UniverseMap } from "@/app/components/universe-map";
import {
  articleHref,
  articles,
  formatDate,
  rome,
  topicHref,
  topics,
} from "@/app/lib/rome";
import researchUpdates from "@/content/research-updates.json";

export const metadata: Metadata = {
  title: { absolute: "Rome — A Living Encyclopedia" },
  description:
    "A continually expanding external brain, rendered as an interconnected editorial encyclopedia.",
};

export default function Home() {
  const lead =
    articles.find((article) => article.title === "Orca workflow patterns") ||
    articles.find((article) => article.title === "Large-scale LLM agent systems") ||
    articles[0];
  const courseTopic = topics.find((topic) => topic.name === "String Theory");
  const curatedDispatches = [
    "Temperature forecast confidence intervals",
    "Inevitability of Korea's 1910 annexation",
    "NBA multi-agent forecasting company",
    "Speculative sleeve",
    "What is String Theory",
  ]
    .map((title) => articles.find((article) => article.title === title))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const primaryRoomNames = [
    "String Theory",
    "AI",
    "Crypto",
    "Basketball",
    "Investing",
    "Weather",
    "History",
    "Piano",
  ];
  const primaryRooms = primaryRoomNames
    .map((name) => topics.find((topic) => topic.name === name))
    .filter((topic): topic is NonNullable<typeof topic> => Boolean(topic));
  const latest = [...articles]
    .filter((article) => article.created && !["Agent", "Code", "Front Page"].includes(article.topic))
    .sort(
      (a, b) =>
        (b.created || "").localeCompare(a.created || "") || a.title.localeCompare(b.title),
    )
    .slice(0, 6);

  return (
    <main id="main-content">
      <section className="masthead page-shell" aria-labelledby="rome-title">
        <div className="masthead-rule">
          <span>Vol. I</span>
          <span>A continually expanding encyclopedia</span>
          <span>{rome.stats.wordCount.toLocaleString("en-US")} words</span>
        </div>
        <h1 id="rome-title">Rome</h1>
        <p className="masthead-deck">
          Andrew Park&apos;s second brain, set in type. Follow one idea into the next—and watch the
          map grow.
        </p>
        <SearchTrigger label={`Search all ${rome.stats.articleCount} articles`} prominent />
      </section>

      <section id="universe-map" className="universe-section page-shell" aria-label="Map of Rome">
        <UniverseMap
          nodes={articles.map(({ slug, title, topic, tags, outgoing }) => ({
            slug,
            title,
            topic,
            tags,
            outgoing,
          }))}
        />
      </section>

      <section className="front-grid page-shell" aria-label="Front page">
        <article className="lead-story">
          <div className="section-label-row">
            <p className="eyebrow">Today&apos;s lead</p>
            <span>{lead.readingMinutes} min read</span>
          </div>
          <Link href={articleHref(lead)} className="feature-link">
            <h2>{lead.title}</h2>
            <p>{lead.deck}</p>
            <span className="read-more">Continue reading</span>
          </Link>
        </article>

        {courseTopic ? (
          <article className="course-feature">
            <p className="eyebrow">The long read</p>
            <Link href={topicHref(courseTopic)}>
              <p className="course-number">27</p>
              <h2>Modules of String Theory</h2>
              <p>
                {courseTopic.count} interconnected articles, from action principles to branes,
                duality, and quantum gravity.
              </p>
            </Link>
          </article>
        ) : null}

        <aside className="dispatches" aria-labelledby="dispatches-title">
          <div className="section-label-row">
            <h2 id="dispatches-title">Useful entrances</h2>
            <span>Editor&apos;s index</span>
          </div>
          <ol>
            {curatedDispatches.map((article, index) => (
              <li key={article.slug}>
                <Link href={articleHref(article)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{article.title}</strong>
                  <small>{article.topic}</small>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section id="reading-rooms" className="reading-rooms page-shell section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore by subject</p>
            <h2>Reading rooms</h2>
          </div>
          <p>
            Curated maps lead each room; every published article remains available through search.
          </p>
        </div>
        <div className="room-grid">
          {primaryRooms.map((topic, index) => {
            const feature = topic.mocSlug
              ? articles.find((article) => article.slug === topic.mocSlug)
              : articles.find((article) => article.slug === topic.articleSlugs[0]);
            return (
              <article className="room-card" key={topic.slug}>
                <div className="room-card-number">{String(index + 1).padStart(2, "0")}</div>
                <Link href={topicHref(topic)}>
                  <div className="room-card-topline">
                    <h3>{topic.name}</h3>
                    <span>{topic.count}</span>
                  </div>
                  <p>{topic.description}</p>
                  {feature ? <small>Start with {feature.title}</small> : null}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="secondary-rooms">
          <span>Also in this edition</span>
          {topics
            .filter((topic) => !primaryRoomNames.includes(topic.name))
            .map((topic) => (
              <Link key={topic.slug} href={topicHref(topic)}>
                {topic.name} <sup>{topic.count}</sup>
              </Link>
            ))}
        </div>
      </section>

      <section id="latest" className="latest-section page-shell section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The expanding edge</p>
            <h2>Recently added</h2>
          </div>
          <p>New notes become entrances, and unwritten links become tomorrow&apos;s assignments.</p>
        </div>
        <ol className="latest-list">
          {latest.map((article) => (
            <li key={article.slug}>
              <Link href={articleHref(article)}>
                <span className="latest-date">{formatDate(article.created, "short")}</span>
                <strong>{article.title}</strong>
                <span className="latest-topic">{article.topic}</span>
                <span className="latest-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="growth-strip">
          <p>
            <strong>{rome.stats.wantedCount}</strong>
            <span>unwritten articles are already linked from the archive</span>
          </p>
          <p>
            <strong>{rome.stats.resolvedLinkCount.toLocaleString("en-US")}</strong>
            <span>resolved paths join one idea to another</span>
          </p>
          <p>
            <strong>{rome.stats.topicCount}</strong>
            <span>reading rooms keep the knowledge garden navigable</span>
          </p>
        </div>
      </section>

      <section id="updates" className="updates-section page-shell section-block">
        <div className="section-heading updates-heading">
          <div>
            <p className="eyebrow">The research ledger</p>
            <h2>What changed in Rome</h2>
          </div>
          <p>
            Research committees expand the edge; revision committees return to strengthen what is
            already here. Each verified pass leaves a public record.
          </p>
        </div>
        <ol className="update-ledger">
          {researchUpdates.entries.map((entry) => (
            <li key={entry.id}>
              <article className="update-entry">
                <div className="update-entry-meta">
                  <span>{formatDate(entry.publishedAt.slice(0, 10), "short")}</span>
                  <strong>{entry.kind === "revision" ? "Revision & polish" : "Research expansion"}</strong>
                </div>
                <div className="update-entry-copy">
                  <p className="eyebrow">{entry.label}</p>
                  <h3>{entry.summary}</h3>
                  <ul className="update-counts" aria-label="Article changes">
                    <li>
                      <strong>{entry.articlesAdded}</strong> added
                    </li>
                    <li>
                      <strong>{entry.articlesRevised}</strong> revised
                    </li>
                    <li>
                      <strong>{entry.articlesRetired}</strong> retired
                    </li>
                    {entry.articlesRelocated > 0 ? (
                      <li>
                        <strong>{entry.articlesRelocated}</strong> relocated
                      </li>
                    ) : null}
                  </ul>
                </div>
                <dl className="update-entry-details">
                  <div>
                    <dt>Topics</dt>
                    <dd>{entry.topics.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>Agents</dt>
                    <dd>{entry.agents.join(" · ")}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ol>
        <p className="update-contract">
          Each scheduled committee appends one structured entry after synchronization and
          editorial review—whether it publishes new research or quietly improves an existing page.
        </p>
      </section>
    </main>
  );
}
