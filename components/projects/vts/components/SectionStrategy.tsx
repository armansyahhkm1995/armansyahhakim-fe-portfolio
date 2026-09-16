const STRATEGIES = [
  {
    title: "FAMILIAR 3D CONVENTIONS",
    description:
      "Hierarchical outliner, standard coordinate systems, local/global transform gizmos, viewport camera controls, and spatial selection feedback.",
    variant: "familiar",
  },
  {
    title: "SIMPLIFIED WORKFLOW",
    description:
      "One-click interaction bindings, modular step sequencer interface, hot-reload instant synchronizations, and code-free logical operations.",
    variant: "simplified",
  },
] as const;

function StrategyCard({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "familiar" | "simplified";
}) {
  const isSimplified = variant === "simplified";

  return (
    <article
      className={[
        "flex flex-1 flex-col gap-4 rounded-md border p-6 sm:p-8",
        isSimplified
          ? "border-stone-600 bg-zinc-100"
          : "border-stone-300 bg-stone-50",
      ].join(" ")}
    >
      <h3
        className={[
          "font-[var(--cs-font-mono)] text-xs font-bold",
          isSimplified ? "text-stone-600" : "text-[var(--cs-color-text-muted)]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p className="font-[var(--cs-font-sans)] text-sm leading-6 text-[var(--cs-color-text-secondary)]">
        {description}
      </p>
    </article>
  );
}

export default function SectionStrategy() {
  return (
    <section
      id="strategy"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              06
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Design Strategy
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            HEURISTIC STRATEGY VALUE
          </span>
        </div>

        {/* Strategy Statement */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            I kept the mental model familiar and removed unnecessary complexity.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]">
            By anchoring the user experience in standard 3D application
            paradigms, we drastically shortened the learning curve for CAD
            engineers and instructional designers while introducing extreme
            efficiency gains.
          </p>
        </div>

        {/* Strategy Principles */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {STRATEGIES.map((strategy) => (
            <StrategyCard
              key={strategy.title}
              title={strategy.title}
              description={strategy.description}
              variant={strategy.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
