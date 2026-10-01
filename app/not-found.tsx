import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page or case study you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="home flex min-h-svh flex-col justify-between px-6 pt-12 pb-12 md:px-12">
      <div className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
        <span>Armansyah Hakim</span>
        <span>Index / 404</span>
      </div>

      <div className="my-auto max-w-3xl py-16">
        <p className="font-mono text-[0.75rem] tracking-[0.25em] text-muted-foreground uppercase">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
          404 — Page Not Found
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The page or case study you are looking for does not exist, has been
          relocated, or is temporarily unavailable.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-85"
          >
            Return to Homepage
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/#transformations"
            className="border-b border-border pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
        <span>Design Systems & Research</span>
        <span>Index / 2026</span>
      </div>
    </section>
  );
}
