type SuccessCriterion = {
  value: string;
  title: string;
  description: string;
};

const SUCCESS_CRITERIA: readonly SuccessCriterion[] = [
  {
    value: "0",
    title: "Application rebuilds required",
    description:
      "Interactive attributes are packaged directly as serialization configuration bundles to completely avoid re-compiles.",
  },
  {
    value: "50%",
    title: "Target reduction in development duration",
    description:
      "Expected structural workflow acceleration. Moving from a standard two-month manual coding flow to a one-month pipeline.",
  },
  {
    value: "≤ 3",
    title: "Unity Level Designers required",
    description:
      "Required human resource allocation envelope for the baseline authoring system execution runs.",
  },
  {
    value: "≤ 2 days",
    title: "New user training pipeline budget",
    description:
      "Required duration for non-technical creators to successfully execute a complete import, bind, and sync cycle.",
  },
] as const;

function SectionHeader() {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="font-[var(--cs-font-mono)] text-xs font-medium text-stone-600">
          12
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          Success Criteria
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        TARGET OPERATIONS PERFORMANCE
      </span>
    </div>
  );
}

function TargetBadge() {
  return (
    <span className="rounded-xs border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
      TARGET FROM PRD
    </span>
  );
}

function CriterionCard({
  criterion,
  index,
}: {
  criterion: SuccessCriterion;
  index: number;
}) {
  return (
    <article className="flex w-full flex-col gap-4 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <span className="font-[var(--cs-font-serif)] text-5xl font-normal leading-none text-neutral-900 sm:text-6xl sm:leading-[64px]">
          {criterion.value}
        </span>

        <TargetBadge />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-[var(--cs-font-sans)] text-xs font-bold text-neutral-900">
          {criterion.title}
        </h3>

        <p className="font-[var(--cs-font-sans)] text-sm font-normal leading-5 text-neutral-600">
          {criterion.description}
        </p>
      </div>
    </article>
  );
}

export default function SectionCriteria() {
  return (
    <section
      id="criteria"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        <SectionHeader />

        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl sm:leading-[1.1]">
            The product was designed against measurable operational targets.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600">
            Success was assessed using strict operational baseline bounds
            established in the initial requirements specification phase.
          </p>
        </div>

        {/* Success criteria */}
        <div className="grid w-full grid-cols-1 gap-4">
          {SUCCESS_CRITERIA.map((criterion, index) => (
            <CriterionCard
              key={criterion.title}
              criterion={criterion}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
