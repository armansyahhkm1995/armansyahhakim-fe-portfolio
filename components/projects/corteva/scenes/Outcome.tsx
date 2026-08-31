import { Frame } from "../primitives/Frame";
import { Reveal } from "@/components/primitives/Reveal";

const outcomes = [
  {
    number: "01",
    title: "From presentation to experience",
    body: "The project reframed agricultural learning from a one-way presentation into an experience that encouraged people to observe, interact, and form their own understanding.",
  },
  {
    number: "02",
    title: "From explanation to context",
    body: "Instead of separating innovation from everyday farming, the experience connected the technology to the environment, people, and activities that already shaped farmers' decisions.",
  },
  {
    number: "03",
    title: "From persuasion to trust",
    body: "Trust was no longer treated as something that could be created through better messaging alone. The experience created opportunities for people to build confidence through direct interaction.",
  },
];

export function Outcome() {
  return (
    <section
      id="outcome"
      className="relative bg-corteva-background py-32 md:py-48"
    >
      <Frame>
        <div className="max-w-5xl">
          <Reveal>
            <p className="label text-corteva-gold">08 · Outcome</p>

            <h2 className="display-xl mt-8 max-w-4xl text-corteva-ink">
              The transformation was not the interface.
              <br />
              It was the conversation.
            </h2>

            <p className="lede mt-10 max-w-2xl">
              By changing how innovation was experienced, the project created a
              more human path from curiosity to understanding and, ultimately,
              trust.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-40">
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome.number} delay={index * 0.08}>
              <article
                key={outcome.number}
                className="grid gap-8 border-t border-corteva-hairline py-12 md:grid-cols-[0.2fr_0.8fr] md:gap-16 md:py-16"
              >
                <span aria-hidden="true" className="label text-corteva-gold">
                  {outcome.number}
                </span>

                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <h3 className="display-md text-corteva-ink">
                    {outcome.title}
                  </h3>

                  <p className="body-note max-w-lg">{outcome.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-corteva-hairline pt-12 md:mt-40 md:pt-16">
          <div className="grid gap-8 md:grid-cols-[0.2fr_0.8fr] md:gap-16">
            <Reveal>
              <p className="label text-corteva-gold">Reflection</p>
            </Reveal>

            <Reveal>
              <p className="display-md max-w-4xl text-corteva-ink">
                Good experience design does not always change what people see.
                Sometimes it changes how they understand what they already see.
              </p>
            </Reveal>
          </div>
        </div>
      </Frame>
    </section>
  );
}
