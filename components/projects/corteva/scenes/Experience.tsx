import Image from "next/image";
import { Reveal } from "@/components/primitives/Reveal";

import { Frame } from "../primitives/Frame";

const experienceSteps = [
  {
    number: "01",
    title: "Start with the people",
    body: "The experience began with conversation. Instead of immediately presenting technology, the team created space to understand farmers, their context, and the questions they already had.",
    image: "/projects/corteva/Corteva team introduction.webp",
    alt: "Corteva team introducing the agricultural innovation experience",
  },
  {
    number: "02",
    title: "Make the technology tangible",
    body: "Complex agricultural innovation became easier to understand when it was connected to something familiar. The experience moved the conversation from abstract explanation toward something farmers could see and discuss.",
    image: "/projects/corteva/Corteva rice field medicine introduction.webp",
    alt: "Corteva team introducing agricultural technology to farmers",
  },
  {
    number: "03",
    title: "Let experience do the explaining",
    body: "The final step brought the conversation into the field. Demonstration gave farmers an opportunity to observe the technology in a real agricultural context and form their own understanding.",
    image: "/projects/corteva/Corteva harvest rice field demo.webp",
    alt: "Corteva agricultural field demonstration during rice harvest",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-corteva-background py-32 md:py-48"
    >
      <Frame>
        <div className="max-w-4xl">
          <Reveal>
            <p className="label text-corteva-gold">06 · Experience</p>

            <h2 className="display-lg mt-8 max-w-3xl text-corteva-ink">
              From explaining innovation to letting people experience it.
            </h2>

            <p className="lede mt-10 max-w-xl">
              The hypothesis changed the role of the presentation. Instead of
              treating farmers as an audience, the experience invited them into
              the story.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-40">
          {experienceSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article
                className={`grid gap-10 border-t border-corteva-hairline py-16 md:grid-cols-[0.25fr_0.75fr] md:gap-16 md:py-24 ${
                  index === experienceSteps.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <span className="label text-corteva-gold">{step.number}</span>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
                  <div>
                    <h3 className="display-md max-w-md text-corteva-ink">
                      {step.title}
                    </h3>

                    <p className="body-note mt-6 max-w-md">{step.body}</p>
                  </div>

                  <figure>
                    <div className="overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        width={1600}
                        height={1067}
                        className="film h-auto w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                  </figure>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Frame>
    </section>
  );
}
