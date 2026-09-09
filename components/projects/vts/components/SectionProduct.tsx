const PRODUCT_NODES = [
  {
    title: "VTS WORKBENCH (AUTHORING)",
    items: [
      "Import FBX assets",
      "Create and manage projects",
      "Configure object transforms",
      "Configure predefined interactions",
    ],
    variant: "authoring",
  },
  {
    title: "MAINTENANCE TRAINING (RUNTIME)",
    items: [
      "Load configured content",
      "Rotate and drag objects",
      "View object labels",
      "Slice and inspect 3D objects",
    ],
    variant: "runtime",
  },
] as const;

function ProductNode({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly string[];
  variant: "authoring" | "runtime";
}) {
  const isAuthoring = variant === "authoring";

  return (
    <article
      className={[
        "flex w-full flex-col gap-4 rounded-md border p-5 sm:p-6 lg:max-w-[384px]",
        isAuthoring
          ? "border-stone-300 bg-white"
          : "border-stone-600 bg-zinc-100",
      ].join(" ")}
    >
      <h3
        className={[
          "font-[var(--cs-font-mono)] text-xs font-bold",
          isAuthoring ? "text-blue-600" : "text-stone-600",
        ].join(" ")}
      >
        {title}
      </h3>

      <div aria-hidden="true" className="h-px w-full bg-stone-300" />

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="font-[var(--cs-font-sans)] text-xs font-normal leading-5 text-[var(--cs-color-text-secondary)]"
          >
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SyncConnector() {
  return (
    <div className="flex min-h-28 w-full flex-col items-center justify-center gap-8 lg:min-h-0 lg:flex-1">
      {/* Same Network */}
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-center font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
            Synchronization
          </span>

          <span className="text-center font-[var(--cs-font-sans)] text-[10px] font-normal text-[var(--cs-color-text-muted)]">
            Same network — real-time synchronization
          </span>
        </div>

        <div
          aria-hidden="true"
          className="flex w-32 items-center justify-center gap-1"
        >
          <div className="relative h-3 w-28">
            <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-blue-600" />

            <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-blue-600" />
          </div>
        </div>
      </div>

      {/* Different Network */}
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-center font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
            Export Asset → Import Asset
          </span>

          <span className="text-center font-[var(--cs-font-sans)] text-[10px] font-normal text-[var(--cs-color-text-muted)]">
            Different network — file-based transfer
          </span>
        </div>

        <div
          aria-hidden="true"
          className="flex w-32 items-center justify-center gap-1"
        >
          <div className="relative h-3 w-28">
            <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-stone-600" />

            <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-stone-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionProduct() {
  return (
    <section
      id="product"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              05
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Product Model
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            ARCHITECTURE SPECS
          </span>
        </div>

        {/* =========================================================
            PRODUCT CONTEXT
        ========================================================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            Two applications, two transfer methods.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]">
            The systemic architecture handles content generation in Workbench
            while delivering configured packages to the training runtime. Two
            distinct transfer mechanisms connect the systems based on network
            availability.
          </p>
        </div>

        {/* =========================================================
            PRODUCT TOPOLOGY
        ========================================================= */}
        <div className="flex flex-col gap-8 rounded-lg border border-[var(--cs-color-border)] bg-stone-50 p-5 sm:p-8 lg:p-10">
          {/* Diagram Label */}
          <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
            VTS PRODUCT TOPOLOGY SYSTEM MAP
          </h3>

          {/* Product Architecture */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
            <ProductNode
              title={PRODUCT_NODES[0].title}
              items={PRODUCT_NODES[0].items}
              variant={PRODUCT_NODES[0].variant}
            />

            <SyncConnector />

            <ProductNode
              title={PRODUCT_NODES[1].title}
              items={PRODUCT_NODES[1].items}
              variant={PRODUCT_NODES[1].variant}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
