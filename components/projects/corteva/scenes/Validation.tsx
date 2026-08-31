import Image from "next/image";
import { Reveal } from "@/components/primitives/Reveal";

import { Frame } from "../primitives/Frame";

const validationImages = [
  {
    image:
      "/projects/corteva/Farmer and locals harvest rice field interaction.webp",
    alt: "Farmers and local community interacting during a rice field harvest",
    caption:
      "The experience moved beyond a controlled presentation and into the social context of farming.",
  },
  {
    image: "/projects/corteva/Farmer harvest rice in the field.webp",
    alt: "Farmer harvesting rice in the field",
    caption:
      "Seeing the experience within real agricultural work made the value of the intervention tangible.",
  },
];

export function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-corteva-background py-32 md:py-48"
    >
      <Frame>
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="label text-corteva-gold">07 · Validation</p>

              <h2 className="display-lg mt-8 max-w-xl text-corteva-ink">
                The field became the final test.
              </h2>

              <p className="lede mt-10 max-w-md">
                A learning experience only matters if it makes sense outside the
                presentation room. Validation therefore happened where the
                decisions actually lived: in the field, among farmers, people,
                and everyday agricultural work.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-20 md:space-y-32">
              {validationImages.map((item, index) => (
                <Reveal key={item.image} delay={index * 0.08}>
                  <figure>
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={1800}
                        height={1200}
                        className="film h-auto w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>

                    <figcaption className="body-note mt-5 max-w-lg">
                      <span
                        aria-hidden="true"
                        className="label mr-3 text-corteva-gold"
                      >
                        0{index + 1}
                      </span>

                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-32 border-t border-corteva-hairline pt-12 md:mt-48 md:pt-16">
          <Reveal>
            <p className="label text-corteva-gold">What changed</p>

            <p className="display-md mt-8 max-w-4xl text-corteva-ink">
              The experience shifted the conversation from explaining why
              innovation matters to creating the conditions for people to
              understand its value themselves.
            </p>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}
