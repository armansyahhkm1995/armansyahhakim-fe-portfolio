import Image from "next/image";
import SectionDivider from "./SectionDivider";

const STAKEHOLDERS = [
  {
    name: "SAHABAT FARMERS",
    desc: "Understanding grower unmet needs & expectations from Corteva solutions directly.",
  },
  {
    name: "IBU HEBAT",
    desc: "Empowering women in agriculture through active micro-economic development modules.",
  },
  {
    name: "LITTLE FARMERS",
    desc: "Introducing younger generations to modern ecological agriculture and soil safety.",
  },
  {
    name: "PRISMA",
    desc: "Targeted press and relationship building context demonstrating true science integration.",
  },
];

export default function SectionEcosystem() {
  return (
    <section id="stakeholder" className="py-[var(--cs-section-padding)]">
      <div
        className="
          mx-auto
          max-w-[var(--cs-content-max-width)]
          px-[var(--cs-content-padding)]
        "
      >
        <SectionDivider
          number="02"
          title="The stakeholder"
          subtitle="CORTEVA AGRISCIENCE / FIELD STUDY"
        />

        {/* Introduction */}

        <div
          className="
            mb-12
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-16
            lg:gap-20
          "
        >
          <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            I thought the farmer was the only one involved, but apparently not.
          </h2>

          <p
            className="
              max-w-[680px]
              pt-0
              font-sans
              text-[clamp(0.875rem,1.1vw,1rem)]
              leading-[1.7]
              text-[var(--cs-color-text-secondary)]
              md:pt-2
            "
          >
            The deeper I looked at the project materials, the more people and
            stakeholders appeared around the experience. Farmers, Agronomists,
            Corteva teams, Local communities, Students, Women in agriculture,
            Research teams, and Partners. Each group entered the experience with
            a different reason for being there.
          </p>
        </div>

        {/* Stakeholder system */}

        <div
          className="
            mb-12
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {STAKEHOLDERS.map((stakeholder) => (
            <article
              key={stakeholder.name}
              className="
                border-t
                border-[var(--cs-color-border)]
                pt-4
              "
            >
              <h3
                className="
                  mb-2
                  font-mono
                  text-[11px]
                  font-semibold
                  leading-[1.4]
                  text-[var(--cs-color-text-primary)]
                "
              >
                {stakeholder.name}
              </h3>

              <p
                className="
                  font-sans
                  text-[13px]
                  leading-[1.55]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {stakeholder.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Stakeholder evidence */}

        <figure>
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src="/images/corteva/SectionEcosystem - Stakeholder photo session.webp"
              alt="Corteva stakeholder photo session with farmers and project participants"
              width={1440}
              height={960}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1440px"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          <figcaption
            className="
              mt-3
              font-mono
              text-[10px]
              uppercase
              leading-[1.5]
              text-[var(--cs-color-text-secondary)]
            "
          >
            STAKEHOLDER SESSION — UNDERSTANDING THE PEOPLE AROUND THE EXPERIENCE
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
