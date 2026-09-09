interface DashboardLevel {
  level: string;
  title: string;
  description: string;
}

const DASHBOARD_LEVELS: DashboardLevel[] = [
  {
    level: "LEVEL 1 — SYSTEM-WIDE STATE",
    title: "Building overview metrics",
    description:
      "Aggregate kW demand, global communication wellness, outstanding high priority system alarms.",
  },
  {
    level: "LEVEL 2 — DIURNAL DRIFT",
    title: "Historical benchmark indicators",
    description:
      "Current performance compared to yesterday, same day last week, and dynamic baseline projection averages.",
  },
  {
    level: "LEVEL 3 — STRUCTURAL CONTRIBS",
    title: "Room-by-room ranking charts",
    description:
      "Top-draw areas, energy consumption per square meter, schedule efficiency ratings.",
  },
  {
    level: "LEVEL 4 — DEVICE GRANULARITY",
    title: "Telemetry endpoints detail",
    description:
      "Sub-meter calculations, direct active relays status, signal health, and commands log.",
  },
];

export default function SectionDashboardQuestions() {
  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-design-question-title"
      className="pt-16 md:pt-24 lg:pt-28"
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
              06
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
              Dashboard Design Question
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
            INFORMATION STRUCTURE SPEC
          </span>
        </div>

        <h2
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
          The dashboard had to answer more than &quot;how much energy are we
          using?&quot;
        </h2>

        <div
          className="
            flex
            w-full
            flex-col
          "
        >
          {DASHBOARD_LEVELS.map((level, index) => (
            <div
              key={level.level}
              className={`
                flex
                w-full
                flex-col
                gap-3
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-6
                ${index > 0 ? "mt-[-1px] rounded-t-none" : ""}
              `}
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {level.level}
              </div>

              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-base
                  font-bold
                  leading-6
                  text-black
                "
              >
                {level.title}
              </div>

              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-normal
                  leading-5
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {level.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
