const SUPPORT_DOMAINS = [
  "Employment",
  "Housing",
  "Family",
  "Counseling",
  "Financial",
] as const;

function FlowNode({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      className={[
        "inline-flex items-center rounded-full border px-3.5 py-2.5",
        "font-[var(--cs-font-mono)] text-xs font-bold",
        "shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]",
        muted
          ? "border-[var(--cs-color-border)] bg-stone-200 text-stone-600"
          : "border-[var(--cs-color-border)] bg-white text-stone-600",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function FlowConnector() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        h-5
        w-7
        items-center
        justify-center
        text-stone-400
        rotate-270
      "
    >
      <span className="block rotate-90 text-lg leading-none">⌄</span>
    </div>
  );
}

export default function SectionExist() {
  return (
    <section
      id="exist"
      aria-labelledby="the existing-product"
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
        {/* SECTION HEADER */}
        <header
          className="
            flex
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
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-stone-600
              "
            >
              02
            </span>

            <h2
              id="exist-title"
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-stone-600
              "
            >
              The Existing Product
            </h2>
          </div>

          <p
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            ACTS PLATFORM SCHEMATIC & ARCHIVE
          </p>
        </header>

        {/* PRODUCT OVERVIEW */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* COPY */}
          <div className="flex flex-col gap-6">
            <h3
              className="
                max-w-[520px]
                font-[var(--cs-font-serif)]
                text-4xl
                font-normal
                leading-[1.02]
                tracking-[-0.02em]
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              ACTS was originally built to manage five primary support domains.
            </h3>

            <p
              className="
                max-w-[520px]
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              The legacy ACTS platform was developed as a social support
              mechanism for Persons with In-prison Experience (PIEs), connecting
              users with various agencies and community groups across five key
              support domains. However, the product was primarily framed around
              connecting users with support agencies rather than facilitating
              true navigation or personal ownership of their journey.
            </p>
          </div>

          {/* LEGACY ECOSYSTEM MODEL */}
          <div className="flex min-w-0 flex-col gap-6">
            <p
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-stone-600
              "
            >
              LEGACY ECOSYSTEM CONNECTION MODEL
            </p>

            <div
              className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-6
              "
            >
              <FlowNode>PIE USER</FlowNode>

              <FlowConnector />

              <FlowNode muted>ACTS APP</FlowNode>

              <FlowConnector />

              <div
                className="
                  flex
                  max-w-[360px]
                  flex-wrap
                  justify-center
                  gap-2
                "
              >
                {SUPPORT_DOMAINS.map((domain) => (
                  <div
                    key={domain}
                    className="
                      rounded-full
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      px-2.5
                      py-1.5
                      font-[var(--cs-font-sans)]
                      text-[10px]
                      font-semibold
                      text-stone-600
                    "
                  >
                    {domain}
                  </div>
                ))}
              </div>

              <FlowConnector />

              <FlowNode muted>AGENCIES & GROUPS</FlowNode>
            </div>

            <p
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-normal
                leading-5
                text-[var(--cs-color-text-muted)]
              "
            >
              The legacy architecture treated support primarily as a directory
              connection task.
            </p>
          </div>
        </div>

        {/* LEGACY SYSTEM ARTIFACT */}
        <aside
          className="
            flex
            flex-col
            gap-2
            rounded-2xl
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-6
          "
        >
          <p
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-normal
              text-stone-600
            "
          >
            LEGACY SYSTEM ARTIFACT [01]
          </p>

          <div
            aria-hidden="true"
            className="h-px w-full bg-[var(--cs-color-border)]"
          />

          <h3
            className="
              font-[var(--cs-font-serif)]
              text-xl
              font-normal
              text-[var(--cs-color-text-primary)]
            "
          >
            Connecting was not navigating
          </h3>

          <p
            className="
              max-w-[1000px]
              font-[var(--cs-font-sans)]
              text-sm
              font-normal
              leading-5
              text-[var(--cs-color-text-secondary)]
            "
          >
            Legacy screenshots from 2019 revealed a listing-heavy layout.
            Searching for mental or counselling presented users with
            institutional descriptions and rigid forms. The system assumed users
            already knew exactly what they qualified for and how to request it.
          </p>
        </aside>
      </div>
    </section>
  );
}
