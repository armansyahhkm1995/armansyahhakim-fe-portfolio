import Image from "next/image";
import SectionDivider from "./SectionDivider";

const EVIDENCE = [
  {
    label: "STAKEHOLDER ENGAGEMENT — Corteva management field visit",
    src: "/images/corteva/SectionValidation - Corteva team introduction.webp",
    alt: "Corteva team and stakeholders during the field visit",
  },
  {
    label: "YIELD CALCULATION — Traditional post-harvest rice threshing",
    src: "/images/corteva/SectionValidation - Corteva harvest riece field demo.webp",
    alt: "Rice harvest field demonstration with participants",
  },
  {
    label: "STAKEHOLDER ENGAGEMENT — Harvested rice at a Corteva event",
    src: "/images/corteva/SectionValidation - Farmer and locals harvest rice field interaction.webp",
    alt: "Farmers and local participants interacting during the rice harvest",
  },
  {
    label: "STAKEHOLDER ENGAGEMENT — Educational session on rice seed quality",
    src: "/images/corteva/SectionValidation - Corteva rice field medicine introduction.webp",
    alt: "Educational session introducing agricultural products in the rice field",
  },
  {
    label: "STAKEHOLDER ENGAGEMENT — Little farmer and Ibu hebat group photo",
    src: "/images/corteva/SectionEcosystem - Stakeholder photo session.webp",
    alt: "Stakeholders participating in a group photo session at the field experience",
  },
  {
    label: "STAKEHOLDER ENGAGEMENT — An aerial photoshoot between stakeholders",
    src: "/images/corteva/SectionValidation - Aerial photo session all stakeholders.webp",
    alt: "Aerial view of stakeholders participating in the Corteva field experience",
  },
];

export default function SectionValidation() {
  return (
    <section id="validation" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="07"
          title="Validation & Evidence"
          subtitle="CORTEVA AGRISCIENCE / EVIDENCE ANALYSIS"
        />

        {/* Introduction */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            THE FIELD GAVE THE EXPERIENCE SOMETHING A PRESENTATION COULD NOT.
          </h2>

          <p
            className="
              pt-0
              font-[var(--cs-font-sans)]
              text-[clamp(16px,1.4vw,20px)]
              leading-[1.65]
              text-[var(--cs-color-text-secondary)]
              md:pt-3
            "
          >
            The strongest evidence was not a survey score. It was the behavior
            the environment enabled: people could see the plots, compare Corteva
            programs with farmer practices, discuss the differences in context,
            and experience the harvest on site.
          </p>
        </div>

        {/* Evidence gallery */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
          {EVIDENCE.map((evidence) => (
            <figure key={evidence.label} className="m-0 flex flex-col gap-3">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={evidence.src}
                  alt={evidence.alt}
                  width={1200}
                  height={800}
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    hover:scale-[1.02]
                  "
                />
              </div>

              <figcaption
                className="
                  font-[var(--cs-font-mono)]
                  text-[10px]
                  uppercase
                  leading-[1.5]
                  text-[var(--cs-color-text-muted)]
                "
              >
                {evidence.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
