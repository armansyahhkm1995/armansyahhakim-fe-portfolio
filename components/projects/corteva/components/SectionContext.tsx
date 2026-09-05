import Image from "next/image";
import SectionDivider from "./SectionDivider";

const VALUE_CHAIN = [
  {
    num: "01",
    title: "AGRICULTURAL TECHNOLOGY",
    desc: "Introducing hybrid rice variants with resilience traits.",
  },
  {
    num: "02",
    title: "BETTER FARMING PRACTICE",
    desc: "Direct technical observation routes over standard spacing.",
  },
  {
    num: "03",
    title: "CROP PERFORMANCE",
    desc: "Visual proof of seed and crop protection pairing.",
  },
  {
    num: "04",
    title: "FARMER VALUE",
    desc: "Higher yield ratios proving real economic transformation.",
  },
];

const STATS = [
  { value: "13.7M ha", label: "Rice harvested area" },
  { value: "<1%", label: "Hybrid rice area" },
  {
    value: "$52M",
    label: "Est. opportunity at 5% hybridization",
  },
];

export default function SectionContext() {
  return (
    <section id="context" className="py-[var(--cs-section-padding)]">
      <div
        className="
          mx-auto
          max-w-[var(--cs-content-max-width)]
          px-[var(--cs-content-padding)]
        "
      >
        <SectionDivider
          number="01"
          title="Context"
          subtitle="CORTEVA AGRISCIENCE / FIELD STUDY"
        />

        {/* Context + Statistics */}

        <div
          className="
            mb-12
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-16
            lg:gap-20
          "
        >
          {/* Text */}

          <div className="flex flex-col gap-6">
            <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
              The event sat inside a much larger agricultural opportunity.
            </h2>

            <p
              className="
                max-w-[680px]
                font-sans
                text-[clamp(0.875rem,1.1vw,1rem)]
                leading-[1.7]
                text-[var(--cs-color-text-secondary)]
              "
            >
              Corteva was developing its presence in Indonesia&rsquo;s rice
              ecosystem, where hybrid rice represented a relatively small share
              of the market despite the scale of rice cultivation. Its strategy
              connected rice seed development with crop protection — creating an
              opportunity not only to introduce products, but to demonstrate how
              agricultural technology could translate into better farming
              practices.
            </p>
          </div>

          {/* Statistics */}

          <div
            className="
              flex
              flex-col
              gap-6
              pt-2
            "
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="
                    font-serif
                    text-[clamp(2.25rem,4.5vw,4rem)]
                    font-normal
                    leading-none
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {stat.value}
                </span>

                <span
                  className="
                    font-sans
                    text-xs
                    font-semibold
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  {stat.label}
                </span>
              </div>
            ))}

            <p
              className="
                mt-2
                font-mono
                text-[10px]
                leading-[1.5]
                text-[var(--cs-color-text-muted)]
              "
            >
              Source: Corteva project materials / 2018 field visit
              documentation.
            </p>
          </div>
        </div>

        {/* Media + Field Artifact */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.2fr_1fr]
            lg:gap-12
          "
        >
          {/* Main media */}

          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src="/images/corteva/SectionContext - Seed archive.webp"
                alt="Seed archive collected during the initial Corteva field inspection in Karawang"
                width={1440}
                height={960}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover"
              />
            </div>

            <figcaption
              className="
                font-mono
                text-[10px]
                uppercase
                leading-[1.5]
                text-[var(--cs-color-text-secondary)]
              "
            >
              Archival material collected during initial field inspection in
              Karawang Regency.
            </figcaption>
          </figure>

          {/* Supporting content */}

          <div className="flex flex-col gap-8">
            {/* Artifact */}

            <div className="flex flex-col gap-2">
              <span
                className="
                  font-mono
                  text-[11px]
                  font-semibold
                  text-[var(--cs-color-accent)]
                "
              >
                FIELD ARTIFACT [01]
              </span>

              <p
                className="
                  font-serif
                  text-[22px]
                  italic
                  leading-[1.3]
                  text-[var(--cs-color-text-primary)]
                "
              >
                &ldquo;Sistem Budidaya Tanaman Padi&rdquo;
              </p>

              <p
                className="
                  font-sans
                  text-xs
                  leading-[1.6]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                Local documentation outlining standard Indonesian wetland
                cultivation standards. Conventional manual transplanting models
                required massive labor investments but produced low yields due
                to uneven spacing and micro-nutrient deficits.
              </p>
            </div>

            {/* Value chain */}

            <div
              className="
                border-t
                border-[var(--cs-color-border)]
                pt-6
              "
            >
              <h3
                className="
                  mb-5
                  font-mono
                  text-[11px]
                  font-semibold
                  text-[var(--cs-color-text-primary)]
                "
              >
                INTENDED VALUE CHAIN
              </h3>

              <ol className="m-0 flex list-none flex-col gap-4 p-0">
                {VALUE_CHAIN.map((item) => (
                  <li key={item.num} className="flex items-start gap-3">
                    <span
                      className="
                        shrink-0
                        pt-0.5
                        font-mono
                        text-xs
                        text-[var(--cs-color-accent)]
                      "
                    >
                      {item.num}
                    </span>

                    <div className="flex flex-col">
                      <span
                        className="
                          font-sans
                          text-sm
                          font-semibold
                          leading-[1.4]
                          text-[var(--cs-color-text-primary)]
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          mt-0.5
                          font-sans
                          text-xs
                          leading-[1.5]
                          text-[var(--cs-color-text-secondary)]
                        "
                      >
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Supporting field image */}

        <figure className="mt-8 md:mt-12">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/images/corteva/SectionContext - Rice field.webp"
              alt="Rice field landscape in Karawang used to understand the agricultural context"
              width={1440}
              height={630}
              sizes="(max-width: 1024px) 100vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <figcaption
            className="
              mt-3
              font-mono
              text-[10px]
              uppercase
              text-[var(--cs-color-text-secondary)]
            "
          >
            FIELD CONTEXT — KARAWANG RICE ECOSYSTEM
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
