import Image from "next/image";
import { Reveal } from "@/components/primitives/Reveal";

import { Frame } from "../primitives/Frame";

const HYPOTHESIS_IMAGE =
  "/projects/corteva/Corteva and farmer photo session.webp";

export function Hypothesis() {
  return (
    <section
      id="hypothesis"
      className="relative overflow-hidden bg-corteva-background py-32 md:py-48"
    >
      <Frame>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <Reveal>
            <div>
              <p className="label text-corteva-gold">05 — The Hypothesis</p>

              <h2 className="display-lg mt-8 max-w-xl text-corteva-ink">
                What if farmers could experience innovation before being asked
                to trust it?
              </h2>

              <p className="lede mt-10 max-w-md">
                Instead of explaining agricultural technology through
                presentations, we explored what would happen if farmers could
                encounter it in a context that felt familiar, tangible, and
                relevant to their own work.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <figure>
              <div className="overflow-hidden">
                <Image
                  src={HYPOTHESIS_IMAGE}
                  alt="Corteva team engaging with farmers during a field session"
                  width={1600}
                  height={1067}
                  className="film h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <figcaption className="body-note mt-4 max-w-lg">
                Moving the conversation from presentation to experience created
                a more human way to introduce agricultural innovation.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-32 border-t border-corteva-hairline pt-12 md:mt-48 md:pt-16">
          <div className="grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
            <Reveal>
              <p className="label text-corteva-gold">The hypothesis</p>
            </Reveal>
            <Reveal>
              <p className="display-md max-w-4xl text-corteva-ink">
                If farmers could see, discuss, and experience the value of
                agricultural innovation in their own context, trust would become
                something they could build through experience—not something they
                had to be persuaded into.
              </p>
            </Reveal>
          </div>
        </div>
      </Frame>
    </section>
  );
}
