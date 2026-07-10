import Link from "next/link";

import { formatDate, rome, topics, topicHref } from "@/app/lib/rome";

import { SearchTrigger } from "./search";

const primaryTopics = [
  "AI",
  "Basketball",
  "Classical Music",
  "Crypto",
  "History",
  "Investing",
  "Markets",
  "Mathematics",
  "Piano",
  "Politics",
  "Sports",
  "String Theory",
  "Weather",
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-strip">
        <span>Established 2026</span>
        <span className="utility-center">A living external brain</span>
        <span>
          {rome.stats.articleCount} articles · {formatDate(rome.stats.latestCreated, "short")}
        </span>
      </div>
      <div className="navigation-row">
        <Link href="/" className="small-wordmark" aria-label="Rome front page">
          Rome
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/#reading-rooms">Reading rooms</Link>
          <Link href="/#universe-map">Map</Link>
          <Link href="/#updates">Updates</Link>
          <Link href="/about/">About</Link>
        </nav>
        <SearchTrigger />
      </div>
      <nav className="topic-rail" aria-label="Reading rooms">
        {primaryTopics.map((name) => {
          const topic = topics.find((entry) => entry.name === name);
          return topic ? (
            <Link key={name} href={topicHref(topic)}>
              {name}
            </Link>
          ) : null;
        })}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-wordmark">
          Rome
        </Link>
        <p>Andrew Park&apos;s second brain, set in type.</p>
      </div>
      <div>
        <p className="eyebrow">This edition</p>
        <p>
          {rome.stats.articleCount} articles across {rome.stats.topicCount} reading rooms, with{" "}
          {rome.stats.wantedCount} open research threads.
        </p>
      </div>
      <div>
        <p className="eyebrow">Ownership &amp; provenance</p>
        <p>Rome belongs to Andrew Park. Every article also carries its authoring source.</p>
      </div>
      <div className="footer-links">
        <Link href="/about/">About Rome</Link>
        <Link href="/#universe-map">Explore the map</Link>
      </div>
    </footer>
  );
}
