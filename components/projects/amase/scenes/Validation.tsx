import { SceneInner, SceneLayout } from "../primitives/Scene";
import { Reveal, MaskText } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneValidation() {
  const { validation } = amaseProject;

  return (
    <SceneLayout
      id="validation"
      className="tone-paper min-h-[100svh] overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {validation.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                08 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Main statement ───────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[78vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-8 text-ember">Evidence boundary</p>
            </Reveal>

            <h2 className="display max-w-5xl text-[clamp(2.7rem,6vw,6rem)]">
              <MaskText
                lines={[
                  "The product is evidence",
                  "of the design direction.",
                  "The impact requires",
                  "longer-term proof.",
                ]}
              />
            </h2>

            <Reveal delay={0.2} className="mt-10 max-w-3xl">
              <p className="text-[1.05rem] leading-[1.9] text-muted-foreground md:text-[1.2rem]">
                {validation.body}
              </p>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Evidence ─────────────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <div className="border-t border-hairline pt-8">
            <Reveal>
              <p className="eyebrow mb-7 text-muted-foreground">
                What can be established
              </p>
            </Reveal>

            <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-3">
              {validation.evidence.map((item, index) => (
                <Reveal key={item.label} delay={0.15 + index * 0.1}>
                  <article className="min-h-36 bg-paper p-6 md:p-8">
                    <p className="eyebrow text-ember">0{index + 1}</p>

                    <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-3 display text-[clamp(1.25rem,2.4vw,1.8rem)]">
                      {item.value}
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
