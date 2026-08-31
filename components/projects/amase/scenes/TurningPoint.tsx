import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneTurningPoint() {
  const { turningPoint } = amaseProject;

  return (
    <SceneLayout id="turning-point" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {turningPoint.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                05 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Turning point ────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[78vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-10 text-ember">{turningPoint.eyebrow}</p>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-24">
              {/* ── Main statement ─────────────────────────────── */}

              <div>
                <h2 className="display max-w-5xl text-[clamp(3.2rem,8vw,8rem)]">
                  <MaskText
                    lines={[
                      "The problem",
                      "was bigger",
                      "than finding",
                      "a job.",
                    ]}
                  />
                </h2>
              </div>

              {/* ── Supporting narrative ───────────────────────── */}

              <Reveal delay={0.25}>
                <div className="max-w-md border-l border-ember pl-6 md:pl-8">
                  <p className="text-[1.05rem] leading-[1.9] text-muted-foreground md:text-[1.15rem]">
                    {turningPoint.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </SceneInner>

        {/* ── Visual transition ───────────────────────────────── */}

        <SceneInner width="wide" className="pb-10 md:pb-14">
          <Reveal delay={0.35}>
            <div className="grid gap-6 border-t border-hairline pt-6 md:grid-cols-2 md:gap-10">
              <div>
                <p className="eyebrow text-muted-foreground">Narrow framing</p>

                <p className="mt-3 display text-[clamp(1.4rem,2.8vw,2.2rem)]">
                  Employment
                </p>
              </div>

              <div>
                <p className="eyebrow text-ember">Broader framing</p>

                <p className="mt-3 display text-[clamp(1.4rem,2.8vw,2.2rem)]">
                  Reintegration
                </p>
              </div>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
