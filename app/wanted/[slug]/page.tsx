import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articleHref, getArticle, getWantedArticle, wantedArticles } from "@/app/lib/rome";

export const dynamicParams = false;

export function generateStaticParams() {
  return wantedArticles.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWantedArticle(slug);
  return {
    title: entry ? `${entry.term} — Unwritten article` : "Unwritten article",
    robots: { index: false, follow: true },
  };
}

export default async function WantedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getWantedArticle(slug);
  if (!entry) notFound();

  return (
    <main id="main-content" className="wanted-page page-shell narrow-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Front page</Link>
        <span>Research frontier</span>
      </nav>
      <header>
        <p className="eyebrow">Unwritten article</p>
        <h1>{entry.term}</h1>
        <p className="article-deck">
          This idea already has a place in Rome&apos;s link graph, but its article has not been written
          yet. Red links are not errors here; they are invitations.
        </p>
      </header>
      <section className="wanted-references">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Where the trail begins</p>
            <h2>
              Mentioned by {entry.references.length}{" "}
              {entry.references.length === 1 ? "article" : "articles"}
            </h2>
          </div>
        </div>
        <ol>
          {entry.references.map((reference) => {
            const article = getArticle(reference.slug);
            return article ? (
              <li key={reference.slug}>
                <Link href={articleHref(article)}>
                  <span>{reference.topic}</span>
                  <strong>{reference.title}</strong>
                </Link>
              </li>
            ) : null;
          })}
        </ol>
      </section>
    </main>
  );
}
