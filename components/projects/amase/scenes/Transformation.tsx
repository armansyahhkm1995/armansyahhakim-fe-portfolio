import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneTransformation() {
  const { transformation } = amaseProject;

  return (
    <SceneLayout
      id="transformation"
      className="tone-paper min-h-[100svh] overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {transformation.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                10 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Main statement ───────────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="flex min-h-[72vh] flex-col justify-center py-20">
            <Reveal>
              <p className="eyebrow mb-8 text-ember">Shift in framing</p>
            </Reveal>

            <h2 className="display max-w-6xl text-[clamp(2.8rem,6.5vw,6.5rem)]">
              <MaskText
                lines={[
                  "From a single outcome",
                  "to a broader definition",
                  "of reintegration.",
                ]}
              />
            </h2>

            <Reveal delay={0.2} className="mt-10 max-w-3xl">
              <p className="text-[1.05rem] leading-[1.9] text-muted-foreground md:text-[1.2rem]">
                {transformation.body}
              </p>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Before / After ───────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {/* ── Previous framing ─────────────────────────────── */}

            <Reveal>
              <article className="bg-paper p-7 md:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-6">
                  <p className="eyebrow text-muted-foreground">
                    Previous framing
                  </p>

                  <span className="eyebrow text-muted-foreground">01</span>
                </div>

                <div className="mt-10 space-y-6">
                  {transformation.before.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 border-b border-hairline pb-5 last:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                      />

                      <p className="text-base leading-7 text-muted-foreground md:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* ── New framing ──────────────────────────────────── */}

            <Reveal delay={0.15}>
              <article className="bg-ink p-7 text-bone md:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-6">
                  <p className="eyebrow text-ember">New framing</p>

                  <span className="eyebrow text-ember">02</span>
                </div>

                <div className="mt-10 space-y-6">
                  {transformation.after.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 border-b border-hairline pb-5 last:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                      />

                      <p className="text-base leading-7 text-bone md:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>

          {/* ── Evidence note ─────────────────────────────────── */}

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <p className="eyebrow text-muted-foreground">Interpretation</p>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-right">
                This transformation describes a shift in design framing, not a
                measured claim about behavioural or reintegration outcomes.
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}
