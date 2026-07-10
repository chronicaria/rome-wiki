"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SearchEntry = {
  title: string;
  slug: string;
  topic: string;
  deck: string;
  tags: string[];
  source: string;
  status: string;
  created: string | null;
  headings: string[];
  text: string;
};

function normalize(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[—–]/g, "-")
    .toLocaleLowerCase("en-US")
    .replace(/\s+/g, " ")
    .trim();
}

function rank(entry: SearchEntry, query: string) {
  const title = normalize(entry.title);
  const deck = normalize(entry.deck);
  const topic = normalize(entry.topic);
  const tags = normalize(entry.tags.join(" "));
  const headings = normalize(entry.headings.join(" "));
  const text = normalize(entry.text);
  const haystack = `${title} ${topic} ${tags} ${headings} ${deck} ${text}`;
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (!tokens.every((token) => haystack.includes(token))) return -1;

  let score = 0;
  const normalizedQuery = tokens.join(" ");
  if (title === normalizedQuery) score += 5000;
  if (title.startsWith(normalizedQuery)) score += 1800;
  if (title.includes(normalizedQuery)) score += 900;
  if (headings.includes(normalizedQuery)) score += 280;
  if (deck.includes(normalizedQuery)) score += 180;
  if (topic.includes(normalizedQuery) || tags.includes(normalizedQuery)) score += 140;
  score += tokens.reduce((sum, token) => sum + (title.includes(token) ? 90 : 0), 0);
  return score;
}

export function SearchTrigger({
  label = "Search",
  prominent = false,
}: {
  label?: string;
  prominent?: boolean;
}) {
  return (
    <button
      type="button"
      className={prominent ? "search-trigger search-trigger-prominent" : "search-trigger"}
      onClick={() => window.dispatchEvent(new CustomEvent("rome:search"))}
      aria-keyshortcuts="Control+K Meta+K"
    >
      <span>{label}</span>
      <kbd>⌘ K</kbd>
    </button>
  );
}

export function SearchExperience() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");

  const loadEntries = useCallback(async () => {
    if (entries.length || loading) return;
    setLoading(true);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    try {
      const response = await fetch(`${basePath}/search-index.json`);
      if (!response.ok) throw new Error("Search index unavailable");
      setEntries((await response.json()) as SearchEntry[]);
    } finally {
      setLoading(false);
    }
  }, [entries.length, loading]);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    void loadEntries();
    dialog.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [loadEntries]);

  useEffect(() => {
    const onOpen = () => open();
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches("input, textarea, select, [contenteditable='true']");
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        open();
      } else if (event.key === "/" && !isTyping) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener("rome:search", onOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("rome:search", onOpen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const topicOptions = useMemo(
    () => ["All", ...Array.from(new Set(entries.map((entry) => entry.topic))).sort()],
    [entries],
  );

  const results = useMemo(() => {
    const scoped = topic === "All" ? entries : entries.filter((entry) => entry.topic === topic);
    if (!query.trim()) {
      return scoped
        .filter((entry) => entry.status === "evergreen" || entry.tags.includes("moc"))
        .slice(0, 12);
    }
    return scoped
      .map((entry) => ({ entry, score: rank(entry, query) }))
      .filter(({ score }) => score >= 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 18)
      .map(({ entry }) => entry);
  }, [entries, query, topic]);

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      onClose={() => {
        setQuery("");
        setTopic("All");
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className="search-sheet">
        <div className="search-sheet-heading">
          <div>
            <p className="eyebrow">Search the archive</p>
            <h2>Search Rome</h2>
          </div>
          <form method="dialog">
            <button type="submit" className="text-button" aria-label="Close search">
              Close <kbd>Esc</kbd>
            </button>
          </form>
        </div>
        <div className="search-fields">
          <label className="search-input-label">
            <span className="visually-hidden">Search every article</span>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search ideas, titles, tags, or passages…"
              autoComplete="off"
            />
          </label>
          <label className="search-topic-label">
            <span>Reading room</span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              {topicOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="search-result-meta" aria-live="polite">
          {loading
            ? "Opening the card catalogue…"
            : query
              ? `${results.length} strongest matches`
              : "Start typing, or browse a few useful entrances."}
        </div>
        <ol className="search-results">
          {results.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/articles/${entry.slug}/`}
                onClick={() => dialogRef.current?.close()}
              >
                <span className="search-result-topic">{entry.topic}</span>
                <strong>{entry.title}</strong>
                <span>{entry.deck}</span>
              </Link>
            </li>
          ))}
        </ol>
        {!loading && entries.length > 0 && results.length === 0 ? (
          <p className="search-empty">
            No article matches that trail yet. In Rome, an empty result is often the beginning of
            the next note.
          </p>
        ) : null}
      </div>
    </dialog>
  );
}
