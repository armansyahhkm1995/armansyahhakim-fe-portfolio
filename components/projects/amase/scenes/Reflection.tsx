import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneReflection() {
  const { reflection } = amaseProject;

  return (
    <SceneLayout id="reflection" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {reflection.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                11 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Reflection statement ─────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[72vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-8 text-ember">{reflection.eyebrow}</p>
            </Reveal>

            <h2 className="display max-w-6xl text-[clamp(2.8rem,6.5vw,6.5rem)]">
              <MaskText
                lines={[
                  "Good social-impact design",
                  "begins by understanding",
                  "the system around",
                  "the person.",
                ]}
              />
            </h2>
          </div>
        </SceneInner>

        {/* ── Reflection cards ─────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <div className="border-t border-hairline pt-8">
            <Reveal>
              <p className="eyebrow mb-8 text-muted-foreground">Looking back</p>
            </Reveal>

            <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
              {reflection.sections.map((section, index) => (
                <Reveal key={section.heading} delay={0.15 + index * 0.1}>
                  <article className="min-h-72 bg-background p-7 md:p-9 lg:min-h-80 lg:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <span className="eyebrow text-ember">0{index + 1}</span>

                      <span
                        aria-hidden="true"
                        className="text-muted-foreground"
                      >
                        /
                      </span>
                    </div>

                    <h3 className="mt-12 display text-[clamp(1.6rem,2.8vw,2.25rem)]">
                      {section.heading}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {section.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
