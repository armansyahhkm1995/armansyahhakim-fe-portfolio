import SectionDivider from "./SectionDivider";

const CONVENTIONAL_MODEL = [
  {
    num: "01",
    title: "ROOM",
    desc: "Passive indoor seating",
  },
  {
    num: "02",
    title: "PRESENTATION",
    desc: "Abstract numbers & slides",
  },
  {
    num: "03",
    title: "DISCUSSION",
    desc: "Speculative farmer feedback",
  },
];

export default function SectionBefore() {
  return (
    <section id="goal" className="py-[var(--cs-section-padding)]">
      <div
        className="
          mx-auto
          max-w-[var(--cs-content-max-width)]
          px-[var(--cs-content-padding)]
        "
      >
        <SectionDivider
          number="03"
          title="The project goal"
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
            The project goal was simple: bring everyone together.
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
            The initial brief appeared straightforward: bring farmers together,
            introduce Corteva&rsquo;s seeds and crop protection solutions, and
            create a space for discussion. But treating the project as a
            conventional gathering created a limitation. Agricultural products
            are not experienced in a conference room. Their value becomes
            visible in the field.
          </p>
        </div>

        {/* Conventional model vs question */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-16
            lg:gap-20
          "
        >
          {/* Conventional model */}

          <div
            className="
              border-t
              border-[var(--cs-color-border)]
              pt-6
            "
          >
            <h3
              className="
                mb-6
                font-mono
                text-[11px]
                font-semibold
                tracking-[0.04em]
                text-[var(--cs-color-text-primary)]
              "
            >
              THE CONVENTIONAL MODEL
            </h3>

            <ol
              className="
                m-0
                flex
                list-none
                flex-col
                gap-4
                p-0
              "
            >
              {CONVENTIONAL_MODEL.map((step) => (
                <li key={step.num} className="flex items-start gap-3">
                  <span
                    className="
                      shrink-0
                      pt-0.5
                      font-mono
                      text-xs
                      text-[var(--cs-color-accent)]
                    "
                  >
                    {step.num}
                  </span>

                  <div className="flex flex-col">
                    <span
                      className="
                        font-mono
                        text-xs
                        leading-[1.4]
                        text-[var(--cs-color-text-primary)]
                      "
                    >
                      {step.title}
                    </span>

                    <span
                      className="
                        mt-0.5
                        font-sans
                        text-[11px]
                        leading-[1.5]
                        text-[var(--cs-color-text-muted)]
                      "
                    >
                      {step.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Question */}

          <div
            className="
              border-t
              border-[var(--cs-color-border)]
              pt-6
            "
          >
            <h3
              className="
                mb-6
                font-mono
                text-[11px]
                font-semibold
                tracking-[0.04em]
                text-[var(--cs-color-text-primary)]
              "
            >
              THE QUESTION
            </h3>

            <p
              className="
                max-w-[600px]
                font-serif
                text-[clamp(1.5rem,2.5vw,2rem)]
                italic
                leading-[1.35]
                text-[var(--cs-color-text-primary)]
              "
            >
              &ldquo;What if the environment itself became part of the
              explanation?&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
