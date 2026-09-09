interface DecisionStage {
  number: string;
  title: string;
  items: string[];
}

const DECISION_STAGES: DecisionStage[] = [
  {
    number: "01",
    title: "RAW DATA",
    items: ["Energy Logs", "Relay states", "Gateway heartbeats"],
  },
  {
    number: "02",
    title: "USEFUL INFORMATION",
    items: ["Cumulative kWh", "Demand spikes", "Offline alerts"],
  },
  {
    number: "03",
    title: "DECISION STAGE",
    items: ["Is room 102 vacant?", "Is AC still active?", "Is device dead?"],
  },
  {
    number: "04",
    title: "TANGIBLE ACTION",
    items: ["Execute kill cmd", "Trigger schedule", "Dispatch repair"],
  },
];

export default function SectionDataDecision() {
  return (
    <section
      id="decision"
      aria-labelledby="data-decision-title"
      className="p-8 md:pt-24 lg:pt-28"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-5
        "
      >
        <div
          aria-hidden="true"
          className="h-px w-full bg-[var(--cs-color-border)]"
        />

        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              05
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Data to Decision
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
            OPERATIONAL SIGNAL PIPELINE
          </span>
        </div>

        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-8
            lg:flex-row
            lg:gap-20
          "
        >
          <h2
            id="data-decision-title"
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
              lg:max-w-[520px]
            "
          >
            Translating raw readings into building decisions.
          </h2>

          <p
            className="
              flex-1
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            The system acts as a signal filter. It takes hundreds of
            asynchronous edge sensor events and groups them sequentially into
            information layers that facilities operators can immediately verify
            and act upon.
          </p>
        </div>

        <div
          className="
            w-full
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-6
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-[repeat(4,minmax(0,1fr))]
              lg:items-center
              lg:gap-4
            "
          >
            {DECISION_STAGES.map((stage, index) => (
              <div
                key={stage.number}
                className="
                  flex
                  min-w-0
                  flex-col
                  gap-3
                  lg:flex-row
                  lg:items-center
                  lg:gap-4
                "
              >
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {stage.number} / {stage.title}
                  </div>

                  <div className="flex flex-col gap-1">
                    {stage.items.map((item) => (
                      <div
                        key={item}
                        className="
                          font-[var(--cs-font-sans)]
                          text-xs
                          font-normal
                          leading-5
                          text-[var(--cs-color-text-secondary)]
                        "
                      >
                        — {item}
                      </div>
                    ))}
                  </div>
                </div>

                {index < DECISION_STAGES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      relative
                      hidden
                      size-4
                      shrink-0
                      lg:block
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        size-2.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border-2
                        border-neutral-500
                      "
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
