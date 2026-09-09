interface FragmentedWorkflow {
  project: string;
  description: string;
}

const FRAGMENTED_WORKFLOWS: FragmentedWorkflow[] = [
  {
    project: "Project A: Web",
    description: "Local custom CSS + custom button assets",
  },
  {
    project: "Project B: VR Sim",
    description: "Unity specific Canvas buttons & UI scripts",
  },
  {
    project: "Project C: Content",
    description: "Ad-hoc Figma files with unmapped variables",
  },
];

export default function SectionContext() {
  return (
    <section
      id="context"
      aria-labelledby="falah-one-context-title"
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
        {/* Section heading */}
        <div
          className="
            flex
            w-full
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
                font-[var(--cs-font-sans)]
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              01
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
              Context
            </span>
          </div>

          <span
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            FALAH INOVASI TEKNOLOGI / CASE STUDY
          </span>
        </div>

        {/* Context introduction + fragmented workflows */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* Context statement */}
          <div className="flex flex-col gap-6">
            <h2
              id="falah-one-context-title"
              className="
                font-[var(--cs-font-sans)]
                text-4xl
                font-normal
                leading-tight
                tracking-tight
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              Falah&apos;s products were being designed independently
            </h2>

            <p
              className="
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              Before the initialization of Falah One, different development
              branches operated as isolated islands. Our software division,
              high-fidelity VR/AR simulation team, and content creators each
              maintained local design systems. This approach solved short-term
              requirements but made cross-project consistency, shared
              maintenance, and brand unified scaling nearly impossible.
            </p>
          </div>

          {/* Fragmented workflow board */}
          <figure
            className="
              flex
              w-full
              flex-col
              gap-4
              rounded-lg
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
            "
          >
            <figcaption
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-muted)]
              "
            >
              FRAGMENTED WORKFLOWS (BEFORE)
            </figcaption>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-3
              "
            >
              {FRAGMENTED_WORKFLOWS.map((workflow) => (
                <div
                  key={workflow.project}
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-2
                    rounded-sm
                    border
                    border-[var(--cs-color-border)]
                    bg-white
                    p-4
                  "
                >
                  <h3
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {workflow.project}
                  </h3>

                  <p
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      leading-5
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-normal
                leading-5
                text-[var(--cs-color-text-muted)]
              "
            >
              This approach could work at project level, but it made
              consistency, reuse, and cross-project maintenance difficult.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
