"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to error reporting service or console
    console.error("Application error:", error);
  }, [error]);

  return (
    <section
      role="alert"
      aria-live="assertive"
      className="home flex min-h-svh flex-col justify-between px-6 pt-12 pb-12 md:px-12"
    >
      <div className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
        <span>Armansyah Hakim</span>
        <span>Index / Error</span>
      </div>

      <div className="my-auto max-w-3xl py-16">
        <p className="font-mono text-[0.75rem] tracking-[0.25em] text-muted-foreground uppercase">
          System Alert
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Something unexpected occurred.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          An unexpected error interrupted this experience. You can attempt to
          recover this view or return safely to the homepage.
        </p>

        {error.digest && (
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Reference code: {error.digest}
          </p>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => reset()}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-85"
          >
            Try Again
            <span className="transition-transform duration-300 group-hover:rotate-45">
              ↻
            </span>
          </button>

          <Link
            href="/"
            className="border-b border-border pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Return to Homepage
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
