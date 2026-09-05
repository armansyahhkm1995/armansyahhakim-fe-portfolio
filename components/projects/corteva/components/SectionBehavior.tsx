import SectionDivider from "./SectionDivider";

const BEFORE = [
  {
    num: "01",
    title: "LISTEN",
    desc: "— Passive audio processing inside standard event tent",
  },
  {
    num: "02",
    title: "UNDERSTAND",
    desc: "— Cognitive modeling based on technical chart graphics",
  },
  {
    num: "03",
    title: "REMEMBER",
    desc: "— Memorization of seed codes and spray intervals",
  },
];

const AFTER = [
  {
    num: "01",
    title: "WALK",
    desc: "— Dynamic navigation on raised bamboo platforms",
  },
  {
    num: "02",
    title: "OBSERVE",
    desc: "— Eyeline physical contact with mature rice plants",
  },
  {
    num: "03",
    title: "COMPARE",
    desc: "— Immediate side-by-side performance comparison",
  },
  {
    num: "04",
    title: "DISCUSS",
    desc: "— Spontaneous community evaluation in-situ",
  },
  {
    num: "05",
    title: "DECIDE",
    desc: "— High-fidelity adoption based on tangible proof",
  },
];

export default function SectionBehavior() {
  return (
    <section id="behavior" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="05"
          title="Behavior Transformation"
          subtitle="CORTEVA AGRISCIENCE / FIELD JOURNAL"
        />

        {/* Introduction */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            FROM LISTENING TO LOOKING.
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
            The goal was not simply to give farmers more information. It was to
            change how the information was encountered. Instead of sitting
            through a product explanation, participants could move through the
            field, observe the crop, compare practices and discuss what they
            were seeing.
          </p>
        </div>

        {/* Behavioral comparison */}
        <div className="grid grid-cols-1 gap-10 border-t border-[var(--cs-color-border)] pt-8 md:grid-cols-2 md:gap-12">
          {/* BEFORE */}
          <div className="opacity-55">
            <h4
              className="
                mb-6
                font-[var(--cs-font-mono)]
                text-[12px]
                font-semibold
                text-[var(--cs-color-text-primary)]
              "
            >
              CONVENTIONAL CLASSROOM PARADIGM (BEFORE)
            </h4>

            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {BEFORE.map((step) => (
                <li
                  key={step.num}
                  className="
                    flex
                    items-baseline
                    gap-2
                    border-b
                    border-black/5
                    py-2
                  "
                >
                  <span
                    className="
                      min-w-6
                      shrink-0
                      font-[var(--cs-font-mono)]
                      text-[14px]
                      font-semibold
                      text-[var(--cs-color-accent)]
                    "
                  >
                    {step.num}
                  </span>

                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-[14px]
                      font-bold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {step.title}
                  </span>

                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-[clamp(12px,0.9vw,13px)]
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {step.desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* AFTER */}
          <div>
            <h4
              className="
                mb-6
                font-[var(--cs-font-mono)]
                text-[12px]
                font-semibold
                text-[var(--cs-color-accent)]
              "
            >
              ELEVATED OBSERVATION ROUTE (PROPOSED)
            </h4>

            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {AFTER.map((step) => (
                <li
                  key={step.num}
                  className="
                    flex
                    flex-wrap
                    items-baseline
                    gap-x-2
                    gap-y-1
                    border-b
                    border-black/5
                    py-2
                  "
                >
                  <span
                    className="
                      min-w-0
                      shrink-0
                      font-[var(--cs-font-mono)]
                      text-[13px]
                      font-bold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {step.num} {step.title}
                  </span>

                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-[clamp(12px,0.9vw,13px)]
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {step.desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
