import Image from "next/image";

import { EditorialSection } from "@/components/primitives/EditorialSection";
import { Reveal } from "@/components/primitives/Reveal";

const timeline = [
  "Interior Design",
  "UI/UX",
  "Product Design",
  "Systems Thinking",
  "Design Leadership",
];

const portraitImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80";

export function AboutSection() {
  return (
    <EditorialSection id="about" label="About">
      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <Image
            src={portraitImage}
            alt="Portrait of the designer"
            width={1200}
            height={1500}
            className="w-full max-w-md object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 448px"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display max-w-lg text-2xl leading-snug sm:text-[2rem]">
              I started by designing physical space, and never stopped thinking
              in structure. Today I design products the same way: constraints
              first, evidence second, interface last.
            </p>
          </Reveal>

          <div className="mt-16">
            {timeline.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <span className="mt-2.5 size-1.75 shrink-0 rounded-full border border-foreground/40" />

                    {index < timeline.length - 1 && (
                      <span className="h-10 w-px bg-border" />
                    )}
                  </div>

                  <span className="text-lg">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
