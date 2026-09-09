const PROBLEM_PATHWAY = [
  {
    number: "01",
    label: "ORIGINAL FRAMING",
    description: "Connect PIEs with support agencies and groups.",
    highlighted: false,
  },
  {
    number: "02",
    label: "THE SYSTEM QUESTION",
    description:
      "How might ACTS help people navigate an existing support ecosystem more effectively?",
    highlighted: false,
  },
  {
    number: "03",
    label: "REFRAMED REDESIGN PROBLEM",
    description:
      "People need a clearer way to discover, understand, and navigate relevant support across a fragmented ecosystem.",
    highlighted: true,
  },
] as const;

export default function SectionReframe() {
  return (
    <section
      id="reframe"
      aria-labelledby="reframing the problem"
      className="p-8 md:pt-24 lg:pt-28"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-12
        "
      >
        {/* SECTION HEADER */}
        <header
          className="
            flex
            flex-col
            gap-4
            border-t
            border-[var(--cs-color-border)]
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-stone-600
              "
            >
              04
            </span>

            <h2
              id="reframe-title"
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-stone-600
              "
            >
              Reframing the Problem
            </h2>
          </div>

          <p
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            ECOSYSTEM INVESTIGATION OVER DIRECT TRANSCRIPTION
          </p>
        </header>

        {/* REFRAMING INTRO */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-10
            sm:gap-12
          "
        >
          {/* MAIN STATEMENT */}
          <h3
            className="
              w-full
              font-[var(--cs-font-serif)]
              text-4xl
              font-normal
              leading-[1.02]
              tracking-[-0.025em]
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              lg:text-6xl
              lg:leading-[1.03]
            "
          >
            The brief was the starting point, not the whole problem.
          </h3>

          {/* SUPPORTING STATEMENT */}
          <div
            className="
              w-full
              border-l-[3px]
              border-stone-300
              pl-5
              sm:pl-6
            "
          >
            <p
              className="
                font-[var(--cs-font-serif)]
                text-2xl
                font-normal
                leading-[1.2]
                text-[var(--cs-color-text-primary)]
                sm:text-3xl
                sm:leading-9
              "
            >
              I didn&apos;t treat the product brief as the complete problem
              definition. I used the brief as a starting point, then
              investigated the surrounding reintegration ecosystem to understand
              what the product needed to support.
            </p>
          </div>

          {/* PROBLEM EVOLUTION PATHWAY */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
            "
          >
            <p
              className="
                mb-6
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-stone-600
              "
            >
              PROBLEM EVOLUTION PATHWAY
            </p>

            <div
              className="
                grid
                gap-4
                lg:grid-cols-3
                lg:gap-6
              "
            >
              {PROBLEM_PATHWAY.map((item, index) => (
                <article
                  key={item.number}
                  className={[
                    "flex min-h-[190px] flex-col gap-3 rounded-xl p-5 sm:p-6",
                    item.highlighted
                      ? "bg-stone-600 text-white"
                      : "border border-[var(--cs-color-border)] bg-white",
                  ].join(" ")}
                >
                  {/* NUMBER */}
                  <span
                    className={[
                      "font-[var(--cs-font-mono)] text-sm font-bold",
                      item.highlighted
                        ? "text-white"
                        : item.number === "01"
                          ? "text-[var(--cs-color-text-muted)]"
                          : "text-stone-600",
                    ].join(" ")}
                  >
                    {item.number}
                  </span>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-1.5">
                    <h4
                      className={[
                        "font-[var(--cs-font-sans)] text-xs font-bold",
                        item.highlighted
                          ? "text-white"
                          : item.number === "01"
                            ? "text-[var(--cs-color-text-muted)]"
                            : "text-stone-600",
                      ].join(" ")}
                    >
                      {item.label}
                    </h4>

                    <p
                      className={[
                        "font-[var(--cs-font-sans)] text-sm leading-5",
                        item.highlighted
                          ? "font-semibold text-white"
                          : "font-normal text-[var(--cs-color-text-secondary)]",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
