const SYNCHRONIZATION_PATH = [
  {
    step: "STEP 01",
    title: "WORKBENCH CONFIG",
    description: "Object properties changed in editor",
    highlighted: false,
  },
  {
    step: "STEP 02",
    title: "COMPILE PAYLOAD",
    description: "Configuration packaged as JSON delta",
    highlighted: false,
  },
  {
    step: "STEP 03",
    title: "RUNTIME HOT-RELOAD",
    description: "No application restart required",
    highlighted: true,
  },
] as const;

const EXPORT_IMPORT_PATH = [
  {
    step: "STEP 01",
    title: "WORKBENCH EXPORT",
    description: "Export Asset Bundle from Workbench",
    highlighted: false,
  },
  {
    step: "STEP 02",
    title: "FILE TRANSFER",
    description: "Asset bundle transferred manually",
    highlighted: false,
  },
  {
    step: "STEP 03",
    title: "TRAINING IMPORT",
    description: "Import Asset into Maintenance Training",
    highlighted: false,
  },
] as const;

const SYNCHRONIZATION_METRICS = [
  {
    value: "< 60 seconds",
    description:
      "Target synchronization payload propagation delay (same network)",
  },
  {
    value: "> 99%",
    description: "Required deployment synchronization success rate",
  },
] as const;

function SectionHeader() {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="font-[var(--cs-font-mono)] text-xs font-medium text-stone-600">
          08
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          Synchronization
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        VTS WORKBENCH / DUAL-PATH DELIVERY
      </span>
    </div>
  );
}

function FlowConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex size-6 shrink-0 items-center justify-center"
    >
      <span className="size-3.5 rotate-45 border-r-2 border-t-2 border-neutral-500" />
    </div>
  );
}

function PathStep({
  step,
  title,
  description,
  highlighted,
}: {
  step: string;
  title: string;
  description: string;
  highlighted: boolean;
}) {
  return (
    <article
      className={[
        "flex min-w-0 flex-1 flex-col gap-1 rounded-sm border p-4",
        highlighted
          ? "border-stone-600 bg-zinc-100"
          : "border-stone-300 bg-white",
      ].join(" ")}
    >
      <span
        className={[
          "font-[var(--cs-font-mono)] text-[10px] font-normal",
          highlighted ? "text-stone-600" : "text-neutral-500",
        ].join(" ")}
      >
        {step}
      </span>

      <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-neutral-900">
        {title}
      </h4>

      <p className="font-[var(--cs-font-mono)] text-[10px] font-normal leading-4 text-neutral-600">
        {description}
      </p>
    </article>
  );
}

function DeliveryPath({
  title,
  badge,
  badgeVariant,
  steps,
}: {
  title: string;
  badge: string;
  badgeVariant: "realtime" | "file";
  steps: readonly {
    step: string;
    title: string;
    description: string;
    highlighted: boolean;
  }[];
}) {
  const isRealtime = badgeVariant === "realtime";

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-5">
      {/* Path Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-[var(--cs-font-sans)] text-xs font-bold text-neutral-900">
          {title}
        </h3>

        <span
          className={[
            "w-fit rounded-xs border px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold",
            isRealtime
              ? "border-stone-600 bg-zinc-100 text-stone-600"
              : "border-neutral-500 bg-stone-50 text-neutral-500",
          ].join(" ")}
        >
          {badge}
        </span>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {steps.map((item, index) => (
          <div key={item.step} className="flex flex-col items-center gap-3">
            <PathStep
              step={item.step}
              title={item.title}
              description={item.description}
              highlighted={item.highlighted}
            />

            {index < steps.length - 1 && <FlowConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SectionSynchronization() {
  return (
    <section
      id="synchronization"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <SectionHeader />

        {/* =========================================================
            INTRO
        ========================================================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl sm:leading-[1.1]">
            Two paths connect authoring to training.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600">
            Content delivery adapts to infrastructure conditions. When VTS
            Workbench and Maintenance Training share the same local network,
            synchronization enables runtime updates. When the applications
            operate on separate networks, configured content is transferred
            through an exported asset bundle.
          </p>
        </div>

        {/* =========================================================
            CONTENT DELIVERY PROTOCOL MAP
        ========================================================= */}
        <div className="flex flex-col gap-7 rounded-lg border border-stone-300 bg-stone-50 p-5 sm:p-8">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
              CONTENT DELIVERY PROTOCOL MAP
            </h3>
          </div>

          {/* =====================================================
              TWO DELIVERY PATHS
          ===================================================== */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
            {/* PATH A */}
            <DeliveryPath
              title="PATH A — SYNCHRONIZATION"
              badge="SAME NETWORK · REAL-TIME"
              badgeVariant="realtime"
              steps={SYNCHRONIZATION_PATH}
            />

            {/* Vertical Divider */}
            <div
              aria-hidden="true"
              className="hidden h-auto w-px self-stretch bg-stone-300 lg:block"
            />

            {/* PATH B */}
            <DeliveryPath
              title="PATH B — EXPORT / IMPORT ASSET"
              badge="DIFFERENT NETWORK · FILE-BASED"
              badgeVariant="file"
              steps={EXPORT_IMPORT_PATH}
            />
          </div>

          {/* Divider */}
          <div aria-hidden="true" className="h-px w-full bg-stone-300" />

          {/* =====================================================
              METRICS
          ========================================================= */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {SYNCHRONIZATION_METRICS.map((metric) => (
              <div key={metric.value} className="flex flex-col gap-1.5">
                <span className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900">
                  {metric.value}
                </span>

                <p className="font-[var(--cs-font-sans)] text-xs font-normal leading-5 text-neutral-600">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* PRD TARGET LABEL */}
          <div className="flex justify-end">
            <span className="font-[var(--cs-font-mono)] text-[10px] font-normal text-neutral-400">
              TARGETS FROM PRODUCT REQUIREMENTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
