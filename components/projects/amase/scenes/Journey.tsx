import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneJourney() {
  const { journey } = amaseProject;

  return (
    <SceneLayout id="journey" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{journey.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                03 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Introduction ──────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="grid min-h-[78vh] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* ── Copy ──────────────────────────────────────────── */}

            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-ember">{journey.eyebrow}</p>
              </Reveal>

              <h2 className="display max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)]">
                <MaskText
                  lines={[
                    "Release is a",
                    "moment.",
                    "Reintegration",
                    "is a process.",
                  ]}
                />
              </h2>

              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-[1.05rem] leading-[1.85] text-muted-foreground md:text-[1.15rem]">
                  {journey.body}
                </p>
              </Reveal>
            </div>

            {/* ── Journey timeline ─────────────────────────────── */}

            <div className="relative">
              {/* Vertical journey line */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[0.45rem] top-0 w-px bg-hairline md:left-[0.55rem]"
              />

              <div className="space-y-0">
                {journey.steps.map((step, index) => (
                  <Reveal key={step.label} delay={0.25 + index * 0.1}>
                    <article className="group relative grid grid-cols-[1.25rem_1fr] gap-6 py-6 md:grid-cols-[1.5rem_1fr] md:gap-8 md:py-7">
                      {/* Timeline node */}

                      <div className="relative z-10 flex justify-center">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2.5 w-2.5 rounded-full border border-ember bg-background transition-transform duration-500 group-hover:scale-125 md:h-3 md:w-3"
                        />
                      </div>

                      {/* Step content */}

                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="eyebrow text-muted-foreground">
                            0{index + 1}
                          </span>

                          <h3 className="display text-[clamp(1.45rem,3vw,2.15rem)]">
                            {step.label}
                          </h3>
                        </div>

                        <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
                          {step.note}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </SceneInner>

        {/* ── Closing statement ────────────────────────────────── */}

        <SceneInner width="wide" className="pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-col gap-5 border-t border-hairline pt-6 md:flex-row md:items-end md:justify-between">
              <p className="display max-w-2xl text-[clamp(1.35rem,2.5vw,2rem)] text-ember-soft">
                Reintegration unfolds across multiple parts of everyday life.
              </p>

              <p className="eyebrow text-muted-foreground md:text-right">
                The invisible journey
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
