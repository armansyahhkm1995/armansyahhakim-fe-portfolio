interface ScheduleModel {
  number: string;
  label: string;
  title: string;
  description: string;
}

const SCHEDULE_MODELS: ScheduleModel[] = [
  {
    number: "01",
    label: "ONCE-OFF",
    title: "NON-REPEAT SCHEMA",
    description:
      "Date (YYYY-MM-DD) + Target execution time + Specified room device(s) payload",
  },
  {
    number: "02",
    label: "DAILY ROUTINE",
    title: "DAILY RECURRENCE",
    description:
      "Time parameters + Targeted device load + Runtime exceptions (holiday bypass)",
  },
  {
    number: "03",
    label: "WEEKLY PATTERN",
    title: "WEEKLY GROUPING",
    description:
      "Day array (Mon-Fri) + Target execution window + Custom occupancy offsets",
  },
  {
    number: "04",
    label: "MONTHLY CYCLE",
    title: "MONTHLY RULES",
    description:
      "Calendar day target + Peak demand window constraints + Core system profiles",
  },
];

export default function SectionScheduleModel() {
  return (
    <section
      id="scheduling"
      aria-labelledby="scheduling-model-title"
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
              08
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
              Scheduling Model
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
            TEMPORAL OPERATION CONFIG
          </span>
        </div>

        <h2
          id="scheduling-model-title"
          className="
            w-full
            max-w-[1120px]
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
          Scheduling turned manual control into repeatable operations.
        </h2>

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {SCHEDULE_MODELS.map((model) => (
            <div
              key={model.number}
              className="
                flex
                min-h-56
                flex-col
                gap-4
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
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {model.number} — {model.label}
              </div>

              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-bold
                  leading-5
                  text-black
                "
              >
                {model.title}
              </div>

              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-normal
                  leading-4
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {model.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
