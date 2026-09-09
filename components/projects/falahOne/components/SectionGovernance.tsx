const FEEDBACK_CYCLE = [
  "Team uses component in production",
  "Usability friction or technical constraint identified",
  "Discuss and evaluate change parameters during bi-weekly sync",
  "Component modified & versioned globally",
];

export default function SectionGovernance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-model-title"
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
        {/* Section Header */}
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
            border-t
            border-[var(--cs-color-border)]
            py-4
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              08
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Governance Model
            </span>
          </div>

          <span
            className="
              hidden
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
              sm:block
            "
          >
            LIVING SYSTEM CYCLIC FEEDBACK LOOP
          </span>
        </div>

        {/* Main Content */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-8
            lg:flex-row
            lg:items-start
            lg:gap-20
          "
        >
          {/* Thesis */}
          <div
            className="
              flex
              w-full
              max-w-[520px]
              flex-col
              gap-6
            "
          >
            <h2
              id="governance-model-title"
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-4xl
                font-normal
                leading-[1.1]
                tracking-tight
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              Falah One was designed as a living system
            </h2>

            <p
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              A design system is not a finished, immutable software package. It
              is an iterative ecosystem that continuously evolves from
              implementation evidence, developer discussions, and real-world
              usage data.
            </p>
          </div>

          {/* Feedback Cycle */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              gap-4
              rounded-md
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-6
              sm:p-8
            "
          >
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              SYSTEM FEEDBACK CYCLE
            </span>

            <ol className="flex w-full flex-col gap-2">
              {FEEDBACK_CYCLE.map((step, index) => (
                <li
                  key={step}
                  className="
                    flex
                    items-start
                    gap-2
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-normal
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  <span aria-hidden="true" className="shrink-0">
                    {index + 1}.
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
