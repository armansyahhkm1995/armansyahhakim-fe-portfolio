import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
  Work_Sans,
} from "next/font/google";

import "./globals.css";
import "@/components/home/styles/home.css";

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
        {children}
      </body>
    </html>
  );
}
