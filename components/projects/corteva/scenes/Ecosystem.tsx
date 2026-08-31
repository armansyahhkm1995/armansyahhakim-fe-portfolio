import { Reveal } from "@/components/primitives/Reveal";
import { Frame } from "../primitives/Frame";

const ecosystemItems = [
  {
    number: "01",
    title: "Farmers",
    description:
      "People who ultimately decide whether an agricultural innovation becomes part of everyday practice.",
  },
  {
    number: "02",
    title: "Knowledge",
    description:
      "Technical information, product knowledge, demonstrations, and evidence that shape understanding.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "The environments and interactions through which complex agricultural ideas become easier to understand.",
  },
  {
    number: "04",
    title: "Trust",
    description:
      "The confidence required to move from understanding an innovation to believing it can work in practice.",
  },
];

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative w-full overflow-hidden bg-corteva-background"
    >
      <Frame>
        <div className="py-32 md:py-48">
          <Reveal>
            <div className="flex items-center gap-6">
              <span className="label text-corteva-gold">
                03 — The Ecosystem
              </span>

              <span className="h-px flex-1 bg-corteva-hairline" />
            </div>
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="label">A system, not a screen</p>

                <h2 className="display-lg mt-8 max-w-[11ch] text-corteva-ink">
                  Trust is shaped by relationships.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="max-w-2xl">
                <p className="lede">
                  The experience was never only about presenting agricultural
                  information. It existed within a larger ecosystem of people,
                  knowledge, experience, and trust.
                </p>

                <p className="body-note mt-8 max-w-xl">
                  Understanding these relationships changed the design question.
                  Instead of asking how to communicate more effectively, we
                  could ask how an experience could help people move through the
                  journey from information to confidence.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-32 border-t border-corteva-hairline">
            {ecosystemItems.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <div className="grid gap-6 border-b border-corteva-hairline py-10 md:grid-cols-[5rem_0.8fr_1.2fr] md:items-baseline md:gap-10">
                  <span className="label text-corteva-gold">{item.number}</span>

                  <h3 className="display-md text-corteva-ink">{item.title}</h3>

                  <p className="body-note max-w-xl">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-24 grid gap-8 border-t border-corteva-hairline pt-8 md:grid-cols-[0.8fr_1.2fr]">
              <span className="label">The design implication</span>

              <p className="display-md max-w-2xl text-corteva-ink">
                The product had to become an environment for understanding, not
                another container for information.
              </p>
            </div>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}
