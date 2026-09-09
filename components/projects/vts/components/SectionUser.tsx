const USER_PROFILES = [
  {
    category: "AUTHORING",
    name: "Unity Level Designer",
    description:
      "Responsible for direct ingestion of FBX mechanical files, scene assembly, structure verification, and defining interactive boundaries.",
    emphasized: true,
  },
  {
    category: "TRAINING",
    name: "Trainer / Supervisor",
    description:
      "Builds step-by-step instruction lists, manages training paths, reviews trainee run metrics, and oversees safety compliance protocols.",
    emphasized: false,
  },
  {
    category: "TRAINING",
    name: "Trainee / Technician",
    description:
      "Executes procedures in real-time, interacts with 3D parts, completes checklist validation, and learns optimal physical path workflows.",
    emphasized: false,
  },
] as const;

export default function SectionUser() {
  return (
    <section
      id="user"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              04
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              The Users
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            VTS SYSTEM PROFILE SEGMENTATION
          </span>
        </div>

        {/* User Context */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            The system serves two distinct moments of the training workflow.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]">
            Rather than designing standard user personas, we mapped out explicit
            workflow boundaries. The workspace translates structured decisions
            by the Level Designer into digestible step validation runs operated
            by Trainers and trainees.
          </p>
        </div>

        {/* User Profiles */}
        <ol className="flex w-full flex-col">
          {USER_PROFILES.map((user) => (
            <li
              key={user.name}
              className={[
                "flex flex-col gap-4 rounded-sm border p-5 sm:p-6",
                user.emphasized
                  ? "border-stone-600 bg-zinc-100"
                  : "border-stone-300 bg-stone-50",
              ].join(" ")}
            >
              <span
                className={[
                  "font-[var(--cs-font-mono)] text-xs font-semibold",
                  user.emphasized
                    ? "text-stone-600"
                    : "text-[var(--cs-color-text-muted)]",
                ].join(" ")}
              >
                {user.category}
              </span>

              <h3 className="font-[var(--cs-font-sans)] text-lg font-bold text-[var(--cs-color-text-primary)]">
                {user.name}
              </h3>

              <p className="max-w-4xl font-[var(--cs-font-sans)] text-sm leading-5 text-[var(--cs-color-text-secondary)]">
                {user.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
