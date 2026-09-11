const SOURCE_FLOW = ["3D Model", "Unity Package", "Unity Editor"] as const;

const COUPLED_FLOW = [
  "Manual Scripting",
  "Configuration",
  "Application Build",
] as const;

function FlowArrow() {
  return (
    <span
      aria-hidden="true"
      className="flex size-3 shrink-0 items-center justify-center"
    >
      <span className="size-1.5 rotate-45 border-r-[1.5px] border-t-[1.5px] border-neutral-600" />
    </span>
  );
}

function FlowConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full items-center justify-center py-2"
    >
      <span className="relative block size-4">
        <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-stone-600" />
      </span>
    </div>
  );
}

function FlowNode({
  children,
  emphasized = false,
}: {
  children: React.ReactNode;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "flex min-h-10 flex-1 items-center justify-center border border-stone-300 bg-white p-3 text-center font-[var(--cs-font-mono)] text-xs",
        emphasized && "font-semibold text-stone-600",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default function SectionContext() {
  return (
    <section id="context" className="w-full bg-[var(--cs-color-bg)] p-8">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              01
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Context
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            VTS WORKBENCH / ECOSYSTEM FLOW
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-20">
          {/* Context Statement */}
          <div className="flex flex-col gap-6">
            <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
              3D training content was tightly coupled to the Unity development
              workflow.
            </h2>

            <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]">
              The existing workflow relied heavily on Unity Package imports,
              manual C# scripting, physical scene placement, and rebuilding the
              entire application target. This created a massive bottleneck: any
              simple interaction change required developer intervention and a
              complete software packaging cycle.
            </p>
          </div>

          {/* Legacy Deployment Model */}
          <div className="flex flex-col gap-6 rounded-lg border border-[var(--cs-color-border)] bg-stone-50 p-5 sm:p-8">
            {/* Diagram Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
                LEGACY DEPLOYMENT COUPLING MODEL
              </span>

              <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
                SOURCE: PRODUCT REQUIREMENTS
              </span>
            </div>

            {/* Flow */}
            <div className="flex flex-col gap-3">
              {/* Source Flow */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {SOURCE_FLOW.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-w-0 flex-1 items-center gap-2"
                  >
                    <FlowNode>{item}</FlowNode>

                    {index < SOURCE_FLOW.length - 1 && <FlowArrow />}
                  </div>
                ))}
              </div>

              {/* Connector */}
              <FlowConnector />

              {/* Coupled Flow */}
              <div className="flex flex-col gap-2 rounded-sm border border-stone-600 bg-red-100 p-3 sm:flex-row sm:items-center">
                {COUPLED_FLOW.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-w-0 flex-1 items-center gap-2"
                  >
                    <FlowNode emphasized>{item}</FlowNode>

                    {index < COUPLED_FLOW.length - 1 && <FlowArrow />}
                  </div>
                ))}
              </div>

              {/* Connector */}
              <FlowConnector />

              {/* Runtime */}
              <div className="flex min-h-10 items-center justify-center rounded-sm bg-stone-600 px-3 py-3 text-center font-[var(--cs-font-mono)] text-xs font-bold text-stone-100">
                TRAINING APPLICATION RUNTIME (STALE CONFIG)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
