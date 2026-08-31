import { Reveal } from "@/components/primitives/Reveal";
import { Frame } from "../primitives/Frame";

export function TurningPoint() {
  return (
    <section
      id="turning-point"
      className="relative flex min-h-svh w-full items-center overflow-hidden bg-corteva-surface"
    >
      <Frame>
        <div className="py-32 md:py-48">
          <Reveal>
            <div className="flex items-center gap-6">
              <span className="label text-corteva-gold">
                04 — The Turning Point
              </span>

              <span className="h-px flex-1 bg-corteva-hairline" />
            </div>
          </Reveal>

          <div className="mt-24 grid gap-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="label">The realization</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="display-xl max-w-[12ch] text-corteva-ink">
                  The problem was not information.
                </h2>

                <p className="display-md mt-12 max-w-2xl text-corteva-ink-dim">
                  It was the distance between knowing something and believing
                  it.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-32 grid gap-12 border-t border-corteva-hairline pt-10 md:grid-cols-2 md:gap-20">
            <Reveal delay={0.1}>
              <div>
                <p className="label">Before</p>

                <p className="body-note mt-6 max-w-md">
                  Information was presented as something to consume. People
                  could receive the message without necessarily experiencing the
                  value behind it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div>
                <p className="label text-corteva-gold">What changed</p>

                <p className="body-note mt-6 max-w-md text-corteva-ink-dim">
                  We began thinking about the experience as a journey—one that
                  could move people from curiosity, to understanding, to
                  confidence.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="mt-28 border-t border-corteva-hairline pt-8">
              <p className="label">The new design question</p>

              <p className="display-md mt-8 max-w-3xl text-corteva-ink">
                How might an experience make agricultural innovation easier to
                understand, experience, and trust?
              </p>
            </div>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}
