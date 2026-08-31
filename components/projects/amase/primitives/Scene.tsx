import type { ReactNode } from "react";

import { Reveal } from "./Motion";

/* ── SceneLayout ────────────────────────────────────────────────────────── */

interface SceneLayoutProps {
  id: string;
  tone?: "ink" | "paper";
  className?: string;
  children: ReactNode;
  full?: boolean;
}

export function SceneLayout({
  id,
  tone = "ink",
  className,
  children,
  full = false,
}: SceneLayoutProps) {
  return (
    <section
      id={id}
      className={[
        "relative w-full",
        tone === "paper" ? "tone-paper" : "bg-background text-foreground",
        full ? "" : "py-28 md:py-44",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

/* ── SceneInner ────────────────────────────────────────────────────────── */

interface SceneInnerProps {
  children: ReactNode;
  className?: string;
  width?: "narrow" | "wide" | "full";
}

export function SceneInner({
  children,
  className,
  width = "wide",
}: SceneInnerProps) {
  return (
    <div
      className={[
        "mx-auto px-6 md:px-10",
        width === "narrow" && "max-w-3xl",
        width === "wide" && "max-w-6xl",
        width === "full" && "max-w-[110rem]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* ── SceneTitle ────────────────────────────────────────────────────────── */

interface SceneTitleProps {
  chapter: string;
  label: string;
  title?: string;
  className?: string;
}

export function SceneTitle({
  chapter,
  label,
  title,
  className,
}: SceneTitleProps) {
  return (
    <Reveal
      className={["flex flex-col gap-6", className].filter(Boolean).join(" ")}
    >
      <div className="flex items-baseline gap-5 border-t pt-5">
        <span className="eyebrow text-ember">{chapter}</span>

        <span className="eyebrow text-muted-foreground">{label}</span>
      </div>

      {title ? (
        <h2 className="display max-w-4xl text-[clamp(2.1rem,5.2vw,4.4rem)]">
          {title}
        </h2>
      ) : null}
    </Reveal>
  );
}

/* ── EditorialQuote ────────────────────────────────────────────────────── */

interface EditorialQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function EditorialQuote({
  quote,
  attribution,
  className,
}: EditorialQuoteProps) {
  return (
    <Reveal className={className}>
      <figure className="max-w-3xl">
        <blockquote className="display text-[clamp(1.5rem,3vw,2.5rem)] text-balance">
          <span className="text-ember">“</span>
          {quote}
          <span className="text-ember">”</span>
        </blockquote>

        {attribution ? (
          <figcaption className="mt-7 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-current opacity-30"
            />

            <span className="text-sm text-muted-foreground">{attribution}</span>
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
