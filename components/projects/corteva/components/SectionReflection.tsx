import SectionDivider from "./SectionDivider";

const REFLECTIONS = [
  {
    num: "01",
    title: "CONTEXT CHANGES THE SOLUTION",
    body: "A product can be explained almost anywhere. But its value may only become meaningful in the environment where it is used. Real agricultural adoption happens in the dirt, not in PPT slides.",
  },
  {
    num: "02",
    title: "SYSTEMS CREATE STRONGER EXPERIENCES",
    body: "The strongest part of the project was not one single installation, but how the field, plots, community, research and harvest connected into one journey. If one piece broke, the entire proof sequence collapsed.",
  },
  {
    num: "03",
    title: "DESIGN DECISIONS FOLLOW BEHAVIOR",
    body: "Instead of starting with what the event should look like, I learned to start with what people should be able to see, understand and do. Spacing parameters and walkway elevations must solve for human sightlines.",
  },
];

export default function SectionReflection() {
  return (
    <section id="reflection" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="08"
          title="Reflection & Learning"
          subtitle="CORTEVA AGRISCIENCE / PERSONAL INSIGHT"
        />

        {/* Epilogue */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16">
          <span
            className="
              font-[var(--cs-font-mono)]
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.06em]
              text-[var(--cs-color-text-primary)]
            "
          >
            EPILOGUE
          </span>

          <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            &ldquo;I USED TO THINK I WAS DESIGNING AN EVENT.&rdquo;
          </h2>

          <p
            className="
              max-w-[900px]
              font-[var(--cs-font-serif)]
              text-[clamp(22px,2.6vw,38px)]
              font-normal
              leading-[1.4]
              text-[var(--cs-color-text-primary)]
            "
          >
            Looking back, I was really designing how people moved through
            information. The most important lesson was that experience design
            does not always begin with a screen. Sometimes the interface is a
            field. Sometimes the interaction is a conversation. Sometimes the
            information architecture is a physical path through a landscape.
          </p>
        </div>

        {/* Reflections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {REFLECTIONS.map((item) => (
            <article
              key={item.num}
              className="
                flex
                flex-col
                gap-3
                border-t
                border-[var(--cs-color-border)]
                pt-6
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-[18px]
                  font-bold
                  text-[var(--cs-color-accent)]
                "
              >
                {item.num}
              </span>

              <h4
                className="
                  font-[var(--cs-font-sans)]
                  text-[16px]
                  font-bold
                  text-[var(--cs-color-text-primary)]
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  font-[var(--cs-font-sans)]
                  text-[14px]
                  leading-[1.65]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
