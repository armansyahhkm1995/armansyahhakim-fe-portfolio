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
        <SmoothScroll>{children}</SmoothScroll>
      </body>

      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yffsfx3ncz");
        `}
      </Script>
    </html>
  );
}
