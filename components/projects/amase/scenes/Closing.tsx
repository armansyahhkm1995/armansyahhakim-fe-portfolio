import Link from "next/link";

import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneClosing() {
  const { closing } = amaseProject;

  return (
    <SceneLayout id="closing" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{closing.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                12 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Closing statement ────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[78vh] flex-col justify-center py-24">
            <Reveal>
              <p className="eyebrow mb-10 text-ember">{closing.eyebrow}</p>
            </Reveal>

            <h2 className="display max-w-6xl text-[clamp(3rem,7vw,7rem)]">
              <MaskText
                lines={["Technology cannot", "rebuild a life", "by itself."]}
              />
            </h2>

            <Reveal delay={0.2} className="mt-10 max-w-3xl">
              <p className="display text-[clamp(1.5rem,3vw,2.6rem)] text-ember-soft">
                But it can help make the path back to community easier to
                navigate.
              </p>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Final CTA ─────────────────────────────────────────── */}

        <SceneInner width="wide" className="pb-10 md:pb-14">
          <Reveal delay={0.35}>
            <div className="flex flex-col gap-8 border-t border-hairline pt-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-muted-foreground">
                  End of case study
                </p>

                <p className="mt-3 text-sm text-muted-foreground">
                  Designing A Second Chance
                </p>
              </div>

              <Link
                href={closing.cta.href}
                className="group inline-flex items-center gap-5 self-start md:self-auto"
              >
                <span className="eyebrow text-foreground transition-colors duration-300 group-hover:text-ember">
                  {closing.cta.label}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
