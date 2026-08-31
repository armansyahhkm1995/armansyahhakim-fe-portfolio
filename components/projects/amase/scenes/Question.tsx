import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneQuestion() {
  const { question } = amaseProject;

  return (
    <SceneLayout id="question" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col justify-between">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <p className="eyebrow text-muted-foreground">Transformation 02</p>

            <p className="eyebrow text-muted-foreground text-right">
              ACTS Singapore · AMASE
            </p>
          </header>
        </SceneInner>

        {/* ── Hero ───────────────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[70vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-8 text-ember">{question.eyebrow}</p>
            </Reveal>

            <h1 className="display max-w-5xl text-[clamp(2.8rem,7vw,6.5rem)]">
              <MaskText
                lines={[
                  "What does it take",
                  "to rebuild a life",
                  "after incarceration?",
                ]}
              />
            </h1>

            <Reveal delay={0.2} className="mt-12 max-w-2xl">
              <p className="text-[1.05rem] leading-[1.85] text-muted-foreground md:text-[1.2rem]">
                {question.body}
              </p>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Design question ───────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <div className="grid gap-8 border-t border-hairline pt-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
            <Reveal delay={0.3}>
              <p className="display max-w-3xl text-[clamp(1.5rem,3vw,2.5rem)] text-ember-soft">
                {question.question}
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="eyebrow text-muted-foreground">Scroll to explore</p>
            </Reveal>
          </div>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
