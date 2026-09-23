import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import localFont from "next/font/local";

import "./globals.css";
import "@/components/home/styles/home.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://armansyahhakim.com";

// PERF-002: Self-hosted fonts via next/font/local
// Font files in fonts/ at project root (copied from @fontsource packages)
const instrumentSerif = localFont({
  src: [{ path: "../fonts/instrument-serif-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

const interTight = localFont({
  src: [
    { path: "../fonts/inter-tight-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-tight-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-tight-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter-tight-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
  preload: true,
});

const jetBrainsMono = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jetbrains-mono-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/jetbrains-mono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

const workSans = localFont({
  src: [
    { path: "../fonts/work-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/work-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/work-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/work-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Armansyah Hakim — Product Designer",
  description: "Product Designer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${interTight.variable} ${jetBrainsMono.variable} ${workSans.variable}`}
      >
        {/* A11Y-002: Skip to main content link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Skip to main content
        </a>

        <main id="main">
          <SmoothScroll>{children}</SmoothScroll>
        </main>

        {/* SEC-001: Load Microsoft Clarity via external file (no inline script) */}
        {/* strategy="lazyOnload" - loads after page load, avoids preload warning */}
        <Script
          id="microsoft-clarity"
          src="/clarity.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
