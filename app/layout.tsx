import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "katex/dist/katex.min.css";

import { ReadingProgress } from "./components/reading-progress";
import { SearchExperience } from "./components/search";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rome — A Living Encyclopedia",
    template: "%s · Rome",
  },
  description:
    "Andrew Park's continually expanding external brain: interconnected notes on intelligence, physics, markets, history, weather, and the craft of learning.",
  applicationName: "Rome",
  authors: [{ name: "Andrew Park" }],
  creator: "Andrew Park",
  publisher: "Andrew Park",
  keywords: ["Rome", "wiki", "second brain", "knowledge garden", "research"],
  openGraph: {
    type: "website",
    title: "Rome — A Living Encyclopedia",
    description: "Andrew Park's second brain, set in type.",
    siteName: "Rome",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Rome — A Living Encyclopedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rome — A Living Encyclopedia",
    description: "Andrew Park's second brain, set in type.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to the article
        </a>
        <ReadingProgress />
        <SiteHeader />
        <SearchExperience />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
