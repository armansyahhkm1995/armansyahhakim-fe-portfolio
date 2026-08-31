import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneEcosystem() {
  const { ecosystem } = amaseProject;

  return (
    <SceneLayout
      id="ecosystem"
      className="tone-paper min-h-[100svh] overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {ecosystem.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                04 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Main content ──────────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="grid min-h-[78vh] items-center gap-16 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* ── Narrative ────────────────────────────────────── */}

            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-ember">{ecosystem.eyebrow}</p>
              </Reveal>

              <h2 className="display max-w-3xl text-[clamp(2.7rem,5.8vw,5.3rem)]">
                <MaskText
                  lines={[
                    "Reintegration",
                    "happens across",
                    "a network of",
                    "relationships.",
                  ]}
                />
              </h2>

              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-[1.05rem] leading-[1.85] text-muted-foreground md:text-[1.15rem]">
                  {ecosystem.body}
                </p>
              </Reveal>
            </div>

            {/* ── Ecosystem visualization ───────────────────────── */}

            <div className="relative mx-auto aspect-square w-full max-w-[680px]">
              {/* Connection lines */}

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[0deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[45deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[90deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[135deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[180deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[225deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[270deg] bg-hairline-strong"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left -translate-y-1/2 rotate-[315deg] bg-hairline-strong"
              />

              {/* Orbit */}

              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-full border border-hairline"
              />

              {/* Center */}

              <Reveal className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex aspect-square w-32 items-center justify-center rounded-full border border-ember bg-background p-5 text-center md:w-40 md:p-7">
                  <span className="display text-[1.35rem] md:text-[1.6rem]">
                    Individual
                  </span>
                </div>
              </Reveal>

              {/* Ecosystem actors */}

              {ecosystem.actors
                .filter((actor) => actor !== "Individual")
                .map((actor, index) => {
                  const positions = [
                    "left-1/2 top-[2%] -translate-x-1/2",
                    "right-[7%] top-[18%]",
                    "right-[3%] top-1/2 -translate-y-1/2",
                    "right-[12%] bottom-[14%]",
                    "left-1/2 bottom-[2%] -translate-x-1/2",
                    "left-[5%] bottom-[16%]",
                    "left-[3%] top-[31%]",
                  ];

                  return (
                    <Reveal
                      key={actor}
                      delay={0.25 + index * 0.08}
                      className={`absolute ${positions[index]}`}
                    >
                      <div className="max-w-[150px] border border-hairline-strong bg-paper px-4 py-3 text-center transition-transform duration-500 hover:-translate-y-1 md:max-w-[180px] md:px-5 md:py-4">
                        <span className="eyebrow text-[0.6rem] leading-5 md:text-[0.65rem]">
                          {actor}
                        </span>
                      </div>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        </SceneInner>

        {/* ── Transition ────────────────────────────────────────── */}

        <SceneInner width="wide" className="pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-col gap-5 border-t border-hairline pt-6 md:flex-row md:items-end md:justify-between">
              <p className="display max-w-2xl text-[clamp(1.35rem,2.5vw,2rem)] text-ember-soft">
                AMASE sits within this wider support ecosystem.
              </p>

              <p className="eyebrow text-muted-foreground md:text-right">
                04 / 12
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
