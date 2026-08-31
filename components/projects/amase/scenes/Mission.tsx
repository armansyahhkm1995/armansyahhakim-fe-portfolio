import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneMission() {
  const { mission } = amaseProject;

  return (
    <SceneLayout
      id="mission"
      className="tone-paper min-h-[100svh] overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{mission.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                ACTS Singapore · AMASE
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Introduction ──────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="grid min-h-[75vh] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            {/* ── Copy ──────────────────────────────────────────── */}

            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-ember">{mission.eyebrow}</p>
              </Reveal>

              <h2 className="display max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)]">
                <MaskText
                  lines={[
                    "Supporting",
                    "reintegration",
                    "through stronger",
                    "social support.",
                  ]}
                />
              </h2>

              <Reveal delay={0.2} className="mt-10 max-w-2xl">
                <p className="text-[1.05rem] leading-[1.85] text-muted-foreground md:text-[1.2rem]">
                  {mission.body}
                </p>
              </Reveal>
            </div>

            {/* ── Support domains ──────────────────────────────── */}

            <div className="lg:justify-self-end lg:w-full lg:max-w-xl">
              <div className="border-t border-hairline-strong">
                {mission.domains.map((domain, index) => (
                  <Reveal key={domain} delay={0.25 + index * 0.08}>
                    <div className="group flex items-center justify-between gap-6 border-b border-hairline py-5 md:py-6">
                      <div className="flex items-baseline gap-5">
                        <span className="eyebrow text-muted-foreground">
                          0{index + 1}
                        </span>

                        <span className="text-base font-medium md:text-lg">
                          {domain}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl text-ember opacity-50 transition-transform duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </SceneInner>

        {/* ── Transition ────────────────────────────────────────── */}

        <SceneInner width="wide" className="pb-10 md:pb-14">
          <Reveal>
            <div className="flex items-center justify-between gap-8 border-t border-hairline pt-6">
              <p className="eyebrow text-muted-foreground">
                The support system is bigger than one intervention.
              </p>

              <p className="eyebrow hidden text-muted-foreground md:block">
                02 / 12
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
