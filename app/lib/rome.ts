import romeJson from "@/app/data/rome.generated.json";
import { articleContentLoaders } from "@/app/data/rome-content.generated";

export type TocEntry = {
  depth: number;
  id: string;
  text: string;
};

export type Article = {
  id: string;
  sourcePath: string;
  dir: string;
  slug: string;
  title: string;
  topic: string;
  tags: string[];
  source: string;
  status: string;
  created: string | null;
  modifiedAt: string;
  isMoc: boolean;
  deck: string;
  toc: TocEntry[];
  outgoing: string[];
  backlinks: string[];
  related: string[];
  wordCount: number;
  readingMinutes: number;
  previousSlug: string | null;
  nextSlug: string | null;
};

export type ArticleContent = {
  html: string;
};

export type Topic = {
  name: string;
  slug: string;
  description: string;
  articleSlugs: string[];
  mocSlug: string | null;
  count: number;
};

export type WantedArticle = {
  term: string;
  slug: string;
  references: Array<{ slug: string; title: string; topic: string }>;
};

export type RomeData = {
  generatedAt: string;
  vaultName: string;
  stats: {
    articleCount: number;
    topicCount: number;
    resolvedLinkCount: number;
    wantedCount: number;
    wordCount: number;
    latestCreated: string | null;
  };
  topics: Topic[];
  wanted: WantedArticle[];
  articles: Article[];
};

export type ArticleCard = Pick<
  Article,
  "title" | "slug" | "topic" | "deck" | "tags" | "status" | "source" | "created" | "isMoc"
>;

export const rome = romeJson as unknown as RomeData;
export const articles = rome.articles;
export const topics = rome.topics;
export const wantedArticles = rome.wanted;

const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));
const topicsBySlug = new Map(topics.map((topic) => [topic.slug, topic]));
const wantedBySlug = new Map(wantedArticles.map((entry) => [entry.slug, entry]));

export function getArticle(slug: string) {
  return articlesBySlug.get(slug);
}

export async function getArticleContent(slug: string): Promise<ArticleContent | undefined> {
  const loader = articleContentLoaders[slug as keyof typeof articleContentLoaders];
  if (!loader) return undefined;
  const loaded = await loader();
  return loaded.default as ArticleContent;
}

export function getTopic(slug: string) {
  return topicsBySlug.get(slug);
}

export function getWantedArticle(slug: string) {
  return wantedBySlug.get(slug);
}

export function articleCard(article: Article): ArticleCard {
  const { title, slug, topic, deck, tags, status, source, created, isMoc } = article;
  return { title, slug, topic, deck, tags, status, source, created, isMoc };
}

export function articleHref(articleOrSlug: Article | string) {
  const slug = typeof articleOrSlug === "string" ? articleOrSlug : articleOrSlug.slug;
  return `/articles/${slug}/`;
}

export function topicHref(topicOrSlug: Topic | string) {
  const slug = typeof topicOrSlug === "string" ? topicOrSlug : topicOrSlug.slug;
  return `/topics/${slug}/`;
}

export function articleHtml(content: ArticleContent) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "";
  return content.html.replaceAll("__BASE_PATH__", basePath);
}

export function formatDate(value: string | null | undefined, style: "short" | "long" = "long") {
  if (!value) return "Undated";
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: style === "short" ? "short" : "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function sourceLabel(source: string) {
  return (
    {
      me: "Andrew",
      llm: "AI-written",
      mixed: "Mixed provenance",
      book: "From books",
      web: "Web research",
    }[source] || source.replaceAll("-", " ")
  );
}

export function statusLabel(status: string) {
  return (
    {
      seed: "To learn",
      learning: "In study",
      understood: "Understood",
      evergreen: "Reference",
      unclassified: "Unclassified",
    }[status] || status.replaceAll("-", " ")
  );
}

export function latestArticles(limit = 8) {
  return [...articles]
    .filter((article) => article.created)
    .sort(
      (a, b) =>
        (b.created || "").localeCompare(a.created || "") ||
        a.title.localeCompare(b.title, undefined, { numeric: true }),
    )
    .slice(0, limit);
}
