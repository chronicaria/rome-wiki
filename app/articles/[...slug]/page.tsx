import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  articleHref,
  articleHtml,
  articles,
  formatDate,
  getArticle,
  getArticleContent,
  getTopic,
  sourceLabel,
  statusLabel,
  topicHref,
} from "@/app/lib/rome";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug.join("/"));
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.deck,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.deck,
    },
  };
}

function ArticleLinks({ slugs, empty }: { slugs: string[]; empty: string }) {
  const linked = slugs.map(getArticle).filter((article): article is NonNullable<typeof article> => Boolean(article));
  if (linked.length === 0) return <p className="rail-empty">{empty}</p>;
  return (
    <ul className="rail-links">
      {linked.map((article) => (
        <li key={article.slug}>
          <Link href={articleHref(article)}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug.join("/"));
  if (!article) notFound();
  const content = await getArticleContent(article.slug);
  if (!content) notFound();
  const topic = getTopic(
    article.topic
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase(),
  );
  const pathSegments = article.sourcePath.replace(/\.md$/i, "").split("/");
  const previous = article.previousSlug ? getArticle(article.previousSlug) : null;
  const next = article.nextSlug ? getArticle(article.nextSlug) : null;

  return (
    <main id="main-content" className="article-page page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Front page</Link>
        {topic ? <Link href={topicHref(topic)}>{article.topic}</Link> : <span>{article.topic}</span>}
        {pathSegments.slice(1, -1).map((segment) => (
          <span key={segment}>{segment}</span>
        ))}
      </nav>

      <header className="article-header">
        <p className="eyebrow">
          {article.isMoc ? "Reader's guide" : "Encyclopedia article"} · {article.topic}
        </p>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.deck}</p>
        <dl className="article-byline">
          <div>
            <dt>Source</dt>
            <dd>{sourceLabel(article.source)}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{statusLabel(article.status)}</dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>{formatDate(article.created, "short")}</dd>
          </div>
          <div>
            <dt>Reading time</dt>
            <dd>
              {article.readingMinutes} min · {article.wordCount.toLocaleString("en-US")} words
            </dd>
          </div>
        </dl>
      </header>

      {article.toc.length > 0 ? (
        <details className="mobile-toc">
          <summary>On this page</summary>
          <ol>
            {article.toc.map((entry) => (
              <li key={entry.id} className={`toc-depth-${entry.depth}`}>
                <a href={`#${entry.id}`}>{entry.text}</a>
              </li>
            ))}
          </ol>
        </details>
      ) : null}

      <div className="article-layout">
        <aside className="article-toc" aria-label="On this page">
          <p className="rail-heading">On this page</p>
          {article.toc.length > 0 ? (
            <ol>
              {article.toc.map((entry) => (
                <li key={entry.id} className={`toc-depth-${entry.depth}`}>
                  <a href={`#${entry.id}`}>{entry.text}</a>
                </li>
              ))}
            </ol>
          ) : (
            <p className="rail-empty">A short note, best read straight through.</p>
          )}
        </aside>

        <article className="wiki-article" data-pagefind-body>
          <div dangerouslySetInnerHTML={{ __html: articleHtml(content) }} />
          <nav className="article-pagination" aria-label="Adjacent articles">
            {previous ? (
              <Link href={articleHref(previous)} rel="prev">
                <span>Previous in this section</span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={articleHref(next)} rel="next">
                <span>Next in this section</span>
                <strong>{next.title}</strong>
              </Link>
            ) : null}
          </nav>
        </article>

        <aside className="article-rail" data-pagefind-ignore>
          <section>
            <p className="rail-heading">Backlinks</p>
            <ArticleLinks slugs={article.backlinks} empty="Nothing points here yet." />
          </section>
          <section>
            <p className="rail-heading">Related reading</p>
            <ArticleLinks slugs={article.related} empty="This note is still finding its neighborhood." />
          </section>
          {article.tags.length > 0 ? (
            <section>
              <p className="rail-heading">Filed under</p>
              <ul className="tag-list">
                {article.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
