import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page page-shell narrow-page">
      <p className="eyebrow">404 · End of the footpath</p>
      <h1>This page has not entered Rome yet.</h1>
      <p>
        Open search with <kbd>⌘ K</kbd>, explore the universe map, or return to the front page and
        follow another link.
      </p>
      <Link href="/" className="button-link">
        Return to Rome
      </Link>
    </main>
  );
}
