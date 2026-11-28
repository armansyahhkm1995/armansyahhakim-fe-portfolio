"use client";

import { motion } from "motion/react";

import { MEDIUM_PROFILE_URL, type MediumArticle } from "@/content/medium";

interface MediumArticlesSectionProps {
  articles: MediumArticle[];
}

export function MediumArticlesSection({ articles }: MediumArticlesSectionProps) {
  if (!articles || articles.length === 0) return null;

  const isSingleFeatured = articles.length === 1;

  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto w-full max-w-350">
        {/* Eyebrow rule matching EditorialSection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex items-center gap-6"
        >
          <span className="text-[0.7rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            Writing &amp; Essays
          </span>
          <span className="h-px flex-1 bg-border" />
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
          >
            <span>Medium</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <h2
              id="articles-heading"
              className="font-display max-w-2xl text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Articles &amp; Reflections
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Thoughts and long-form essays published on Medium exploring human
              psychology, emotional development, and thoughtful design.
            </p>
          </div>

          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
          >
            <span>All articles on Medium</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </motion.div>

        {/* Adaptive Article Layout: Single Split Showcase vs Multi-Article Grid */}
        {isSingleFeatured ? (
          <FeaturedArticleCard article={articles[0]} index={0} />
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <GridArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedArticleCard({
  article,
  index,
}: {
  article: MediumArticle;
  index: number;
}) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-colors duration-300 hover:bg-secondary/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] md:grid-cols-12"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary md:col-span-5 md:aspect-auto md:min-h-[320px]">
        {article.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Medium Essay
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10 md:col-span-7">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.isoDate}>{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h3 className="font-display mt-4 text-3xl leading-[1.08] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {article.excerpt}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-[var(--home-paper)] px-3 py-1 font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground">
            <span>Read article</span>
            <span
              className="inline-flex size-8 items-center justify-center rounded-full border border-border transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function GridArticleCard({
  article,
  index,
}: {
  article: MediumArticle;
  index: number;
}) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-colors duration-300 hover:bg-secondary/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
    >
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary">
          {article.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.thumbnail}
              alt={article.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Medium Essay
            </div>
          )}
        </div>

        {/* Text body */}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.isoDate}>{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h3 className="font-display mt-3 text-2xl leading-[1.12] text-foreground transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[1.75rem]">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/60 px-6 py-4">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-[var(--home-paper)] px-2.5 py-0.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-xs text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </motion.a>
  );
}
