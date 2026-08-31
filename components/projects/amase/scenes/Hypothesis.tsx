import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneHypothesis() {
  const { hypothesis } = amaseProject;

  return (
    <SceneLayout
      id="hypothesis"
      className="tone-paper min-h-[100svh] overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {hypothesis.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                06 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Hypothesis ───────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[78vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-8 text-ember">{hypothesis.eyebrow}</p>
            </Reveal>

            <h2 className="display max-w-6xl text-[clamp(2.8rem,6.5vw,6.8rem)]">
              <MaskText
                lines={[
                  "What if employment",
                  "was one part of",
                  "reintegration —",
                  "not the starting point?",
                ]}
              />
            </h2>

            <Reveal delay={0.2} className="mt-10 max-w-2xl">
              <p className="text-[1.05rem] leading-[1.85] text-muted-foreground md:text-[1.2rem]">
                {hypothesis.body}
              </p>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Sequence ─────────────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <div className="border-t border-hairline pt-8">
            <Reveal>
              <p className="eyebrow mb-7 text-muted-foreground">
                Design hypothesis
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-5 md:gap-0">
              {hypothesis.sequence.map((step, index) => (
                <Reveal key={step} delay={0.2 + index * 0.1}>
                  <div className="relative md:px-5 first:md:pl-0 last:md:pr-0">
                    {/* Connector */}

                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="absolute -left-2 top-[0.65rem] hidden h-px w-4 bg-hairline-strong md:block"
                      />
                    )}

                    <span className="eyebrow text-ember">0{index + 1}</span>

                    <p className="mt-3 display text-[clamp(1.35rem,2.5vw,2rem)]">
                      {step}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
