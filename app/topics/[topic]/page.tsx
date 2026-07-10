import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { StringTheoryToc } from "@/app/components/string-theory-toc";
import {
  articleHref,
  formatDate,
  getArticle,
  getTopic,
  topicHref,
  topics,
} from "@/app/lib/rome";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) return { title: "Reading room not found" };
  return { title: topic.name, description: topic.description };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();
  const topicArticles = topic.articleSlugs
    .map(getArticle)
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const feature = topic.mocSlug ? getArticle(topic.mocSlug) : topicArticles[0];
  const recent = [...topicArticles]
    .filter((article) => article.created)
    .sort((a, b) => (b.created || "").localeCompare(a.created || "") || a.title.localeCompare(b.title))
    .slice(0, 5);
  const isStringTheory = topic.name === "String Theory";

  return (
    <main id="main-content" className="topic-page page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Front page</Link>
        <span>Reading rooms</span>
        <span>{topic.name}</span>
      </nav>
      <header className="topic-header">
        <div>
          <p className="eyebrow">Reading room · {topic.count} articles</p>
          <h1>{topic.name}</h1>
        </div>
        <p>{topic.description}</p>
      </header>

      {isStringTheory ? (
        <StringTheoryToc articles={topicArticles} />
      ) : (
        <>
          <section className="topic-lead-grid">
            {feature ? (
              <article className="topic-feature">
                <p className="eyebrow">Begin here</p>
                <Link href={articleHref(feature)}>
                  <h2>{feature.title}</h2>
                  <p>{feature.deck}</p>
                  <span className="read-more">Enter the reading room</span>
                </Link>
              </article>
            ) : null}
            <aside className="topic-latest">
              <p className="rail-heading">Latest at this desk</p>
              <ol>
                {recent.map((article) => (
                  <li key={article.slug}>
                    <Link href={articleHref(article)}>
                      <strong>{article.title}</strong>
                      <span>{formatDate(article.created, "short")}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </aside>
          </section>

          <section className="topic-index section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The whole room</p>
                <h2>All {topic.count} articles</h2>
              </div>
              <p>Sorted alphabetically; full vault paths keep repeated titles distinct.</p>
            </div>
            <ol className="topic-article-list">
              {topicArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={articleHref(article)}>
                    <strong>{article.title}</strong>
                    <span>{article.deck}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}

      <nav className="room-switcher" aria-label="Other reading rooms">
        <span>Continue through Rome</span>
        {topics
          .filter((entry) => entry.slug !== topic.slug)
          .slice(0, 8)
          .map((entry) => (
            <Link key={entry.slug} href={topicHref(entry)}>
              {entry.name}
            </Link>
          ))}
      </nav>
    </main>
  );
}
