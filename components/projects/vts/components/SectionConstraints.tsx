type ConstraintPriority = "HIGH" | "MEDIUM" | "CRITICAL";

type SystemConstraint = {
  name: string;
  value: string;
  priority: ConstraintPriority;
};

const SYSTEM_CONSTRAINTS: readonly SystemConstraint[] = [
  {
    name: "FBX import duration",
    value: "< 180 sec",
    priority: "HIGH",
  },
  {
    name: "Asset Bundle export duration",
    value: "< 180 sec",
    priority: "HIGH",
  },
  {
    name: "Synchronization payload latency",
    value: "< 60 sec",
    priority: "CRITICAL",
  },
  {
    name: "Project load duration",
    value: "< 30 sec",
    priority: "MEDIUM",
  },
  {
    name: "Hierarchy generation delay",
    value: "< 10 sec",
    priority: "HIGH",
  },
  {
    name: "Player manipulation frame budget",
    value: "≥ 60 FPS",
    priority: "CRITICAL",
  },
  {
    name: "Maximum FBX mesh bounds size",
    value: "≤ 2 GB",
    priority: "MEDIUM",
  },
  {
    name: "Maximum serialized Asset Bundle footprint",
    value: "≤ 3 GB",
    priority: "MEDIUM",
  },
];

function SectionHeader() {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="font-[var(--cs-font-mono)] text-xs font-medium text-stone-600">
          10
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          System Constraints
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        NON-FUNCTIONAL TECHNICAL STANDARDS
      </span>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: ConstraintPriority }) {
  const isCritical = priority === "CRITICAL";

  return (
    <span
      className={[
        "shrink-0 rounded-sm border border-stone-300 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold",
        isCritical ? "bg-red-100 text-red-700" : "bg-white text-neutral-500",
      ].join(" ")}
    >
      {priority}
    </span>
  );
}

function ConstraintRow({
  constraint,
  isLast,
}: {
  constraint: SystemConstraint;
  isLast: boolean;
}) {
  return (
    <li
      className={[
        "flex min-w-[680px] items-center justify-between gap-8 py-4",
        !isLast && "border-b border-stone-300",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="min-w-0 flex-1 font-[var(--cs-font-sans)] text-xs font-semibold text-neutral-900">
        {constraint.name}
      </span>

      <div className="flex shrink-0 items-center gap-6">
        <span className="font-[var(--cs-font-mono)] text-xs font-normal text-blue-600">
          {constraint.value}
        </span>

        <PriorityBadge priority={constraint.priority} />
      </div>
    </li>
  );
}

export default function SectionConstraints() {
  return (
    <section
      id="constraints"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        <SectionHeader />

        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl sm:leading-[1.1]">
            The interface had to respect the limits of a 3D runtime.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600">
            We structured explicit non-functional performance envelopes within
            the PRD, governing texture compression limits and compile cycles to
            prevent target software exhaustion.
          </p>
        </div>

        {/* Specification directives */}
        <div className="rounded-sm border border-stone-300 bg-stone-50 p-5 sm:p-6">
          <div className="pb-4">
            <h3 className="font-[var(--cs-font-mono)] text-xs font-bold text-stone-600">
              SPECIFICATION DIRECTIVES (PRD v1.0)
            </h3>
          </div>

          <div aria-hidden="true" className="h-px w-full bg-stone-300" />

          {/* Horizontal overflow protects long specification names on mobile */}
          <div className="w-full overflow-x-auto">
            <ul className="flex min-w-[680px] flex-col">
              {SYSTEM_CONSTRAINTS.map((constraint, index) => (
                <ConstraintRow
                  key={constraint.name}
                  constraint={constraint}
                  isLast={index === SYSTEM_CONSTRAINTS.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
