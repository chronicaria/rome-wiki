import type { Metadata } from "next";
import Link from "next/link";

import { rome } from "@/app/lib/rome";

export const metadata: Metadata = {
  title: "About",
  description: "How Rome turns an Obsidian vault into a living, expanding encyclopedia.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page page-shell narrow-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Front page</Link>
        <span>About</span>
      </nav>
      <header>
        <p className="eyebrow">About this encyclopedia</p>
        <h1>A second brain, set in type.</h1>
        <p className="article-deck">
          Rome is Andrew Park&apos;s external brain, built from small, linked Markdown notes. This
          front-end turns its publishable knowledge into a browsable encyclopedia without
          flattening the links that make it useful.
        </p>
      </header>
      <div className="about-grid">
        <section>
          <span className="about-number">01</span>
          <h2>One vault, one source</h2>
          <p>
            A synchronizer reads each publishable Markdown note, preserves its metadata, resolves
            Obsidian links, renders math and callouts, and publishes a static snapshot. Private
            instructions and operational reports stay outside the publication boundary.
          </p>
        </section>
        <section>
          <span className="about-number">02</span>
          <h2>Designed to keep growing</h2>
          <p>
            Scheduled research can add or expand notes in Rome; the same sync-and-build step turns
            them into articles. Unwritten wikilinks remain visible as a research frontier rather
            than disappearing into broken links.
          </p>
        </section>
        <section>
          <span className="about-number">03</span>
          <h2>Transparent provenance</h2>
          <p>
            Each article keeps its source and learning state. AI-written material, Andrew&apos;s own
            thinking, mixed research, and durable references are labeled rather than blended into
            one anonymous voice.
          </p>
        </section>
      </div>
      <aside className="about-stats" aria-label="Current edition statistics">
        <p>
          <strong>{rome.stats.articleCount}</strong> articles
        </p>
        <p>
          <strong>{rome.stats.topicCount}</strong> reading rooms
        </p>
        <p>
          <strong>{rome.stats.wantedCount}</strong> open trails
        </p>
        <p>
          <strong>{rome.stats.wordCount.toLocaleString("en-US")}</strong> words
        </p>
      </aside>
    </main>
  );
}
