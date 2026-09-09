const CURRENT_STATES = [
  {
    label: "ESTABLISHED",
    items: [
      "Core design variables (color, typography, borders)",
      "Main web navigation structure",
      "Basic input and button components",
    ],
    variant: "established",
  },
  {
    label: "ONGOING ITERATION",
    items: [
      "Unity canvas adaptation parameters",
      "Cross-runtime design tokens mapping",
      "Interactive search dropdown components",
    ],
    variant: "ongoing",
  },
  {
    label: "FUTURE DIRECTION",
    items: [
      "Dynamic simulation HUD overlay templates",
      "Broad organizational asset library automated deployment",
    ],
    variant: "future",
  },
] as const;

export default function SectionCurrent() {
  return (
    <section
      id="current"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--cs-color-text-secondary)]">
              10
            </span>

            <span className="text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Current State
            </span>
          </div>

          <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
            REALISTIC RECOGNITION OF PROGRESS
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h2 className="max-w-[700px] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] md:text-5xl md:leading-[1.01]">
            Where Falah One is today
          </h2>

          {/* Current State Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CURRENT_STATES.map((state) => {
              const isEstablished = state.variant === "established";
              const isFuture = state.variant === "future";

              return (
                <article
                  key={state.label}
                  className={[
                    "flex min-h-[200px] flex-col gap-4 rounded-md border border-[var(--cs-color-border)] p-6",
                    isEstablished && "bg-zinc-100",
                    !isEstablished && !isFuture && "bg-white",
                    isFuture && "bg-stone-50 opacity-70",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3
                    className={[
                      "text-xs font-bold",
                      isEstablished
                        ? "text-[var(--cs-color-text-secondary)]"
                        : isFuture
                          ? "text-[var(--cs-color-text-muted)]"
                          : "text-[var(--cs-color-text-primary)]",
                    ].join(" ")}
                  >
                    {state.label}
                  </h3>

                  <ul className="flex flex-col gap-2">
                    {state.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs font-normal text-[var(--cs-color-text-secondary)]"
                      >
                        · {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
