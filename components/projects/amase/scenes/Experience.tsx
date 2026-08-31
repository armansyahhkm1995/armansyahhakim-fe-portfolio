import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneExperience() {
  const { experience } = amaseProject;

  return (
    <SceneLayout id="experience" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {experience.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                07 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Introduction ─────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="grid min-h-[78vh] items-center gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-ember">{experience.eyebrow}</p>
              </Reveal>

              <h2 className="display max-w-3xl text-[clamp(2.8rem,6vw,6rem)]">
                <MaskText
                  lines={[
                    "Design around",
                    "the whole person,",
                    "not a single",
                    "outcome.",
                  ]}
                />
              </h2>
            </div>

            {/* ── Domain map ───────────────────────────────────── */}

            <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {experience.experiences.map((item, index) => (
                <Reveal key={item.title} delay={0.15 + index * 0.08}>
                  <article className="group min-h-44 bg-background p-6 transition-colors duration-500 hover:bg-ink-soft md:min-h-52 md:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <span className="eyebrow text-ember">0{index + 1}</span>

                      <span
                        aria-hidden="true"
                        className="text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-12 display text-[clamp(1.4rem,2.5vw,2rem)]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}

              {/* Empty sixth cell creates breathing room on larger layouts */}

              <div
                aria-hidden="true"
                className="hidden bg-background sm:block"
              />
            </div>
          </div>
        </SceneInner>

        {/* ── Closing statement ────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <Reveal>
            <div className="flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
              <p className="eyebrow text-muted-foreground">
                Experience principle
              </p>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-right">
                The experience connects multiple dimensions of support rather
                than treating reintegration as a single destination.
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
