import { Frame } from "../primitives/Frame";
import { Reveal } from "@/components/primitives/Reveal";

export function Before() {
  return (
    <section
      id="before"
      className="relative w-full overflow-hidden bg-corteva-background"
    >
      <Frame>
        <div className="grid min-h-[90svh] items-center gap-20 py-32 lg:grid-cols-[0.8fr_1.2fr] lg:py-48">
          <Reveal>
            {/* Chapter introduction */}
            <div>
              <p className="label text-corteva-gold">02 — The World Before</p>

              <h2 className="display-lg mt-8 max-w-[12ch] text-corteva-ink">
                Agriculture was not lacking information.
              </h2>
            </div>
          </Reveal>
          {/* Context */}
          <div className="max-w-2xl">
            <Reveal>
              <p className="lede text-corteva-ink-dim">
                Farmers were surrounded by information, presentations, products,
                and technical explanations. The challenge was not simply
                delivering more knowledge.
              </p>

              <p className="body-note mt-10 max-w-xl">
                Agricultural innovation often asks people to change something
                deeply rooted in their existing practice. Before a new
                technology can be adopted, people need to understand it, trust
                it, and see how it fits into the reality of their work.
              </p>

              <div className="mt-16 border-t border-corteva-hairline pt-8">
                <p className="label">The underlying problem</p>

                <p className="display-md mt-6 max-w-[18ch] text-corteva-ink">
                  Information could explain the innovation. It could not create
                  confidence in it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Frame>
    </section>
  );
}
