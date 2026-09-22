import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import {
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
  Work_Sans,
} from "next/font/google";

import "./globals.css";
import "@/components/home/styles/home.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://armansyahhakim.com";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
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
        <Script
          id="microsoft-clarity"
          src="/clarity.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
