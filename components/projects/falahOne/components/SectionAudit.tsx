interface ComponentInventory {
  name: string;
  description: string;
}

interface AuditRow {
  component: string;
  before: string;
  after: string;
}

const COMPONENT_INVENTORY: ComponentInventory[] = [
  {
    name: "Buttons",
    description: "Primary, Secondary, Icon, Grouped",
  },
  {
    name: "Inputs",
    description: "Text, Search, Date, Select",
  },
  {
    name: "Forms",
    description: "Fieldset, Validation, Layouts",
  },
  {
    name: "Cards",
    description: "Product, Analytic, User Profile",
  },
  {
    name: "Dialogs",
    description: "Modal, Sheet, Drawer",
  },
  {
    name: "Tables",
    description: "Data Rows, Columns, Header Cells",
  },
  {
    name: "Tabs",
    description: "Horizontal List, Trigger States",
  },
  {
    name: "Navigation",
    description: "Sidebar, Top Navbar, Footers",
  },
];

const AUDIT_ROWS: AuditRow[] = [
  {
    component: "Buttons",
    before:
      "14 disparate styles, varying corner radii, inconsistent focus borders.",
    after: "Normalized to 5 core variants with strict Tailwind tokens.",
  },
  {
    component: "Inputs",
    before: "Mixed borders, random helper text layout, raw input text.",
    after: "Unified ComponentInputSearch with label, prefix, helper options.",
  },
  {
    component: "Cards",
    before: "Varying shadow depths, inconsistent inner padding.",
    after: "Standardized padding (24px) & shadow properties.",
  },
];

export default function SectionAudit() {
  return (
    <section
      id="audit"
      aria-labelledby="component-audit-title"
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
        {/* Section Header */}
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
            border-t
            border-[var(--cs-color-border)]
            py-4
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
              05
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
              Component Audit
            </span>
          </div>

          <span
            className="
              hidden
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
              sm:block
            "
          >
            INVENTORY OF EXISTING ASSETS
          </span>
        </div>

        {/* Existing Component Inventory */}
        <div className="flex w-full flex-col gap-6">
          <h2
            id="component-audit-title"
            className="
              w-full
              max-w-[1120px]
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
            "
          >
            I started by looking at what teams were already using
          </h2>

          <div className="flex w-full flex-col">
            {COMPONENT_INVENTORY.map((item, index) => (
              <article
                key={item.name}
                className="
                  flex
                  w-full
                  flex-col
                  gap-2
                  border
                  border-[var(--cs-color-border)]
                  bg-stone-50
                  p-5
                  first:rounded-t-sm
                  last:rounded-b-sm
                  sm:p-5
                "
                style={{
                  marginTop: index === 0 ? undefined : "-1px",
                }}
              >
                <h3
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-bold
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {item.name}
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
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Audit Comparison */}
        <div className="flex w-full flex-col gap-8">
          <h2
            className="
              w-full
              max-w-[1200px]
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
            "
          >
            The first task was not creating new components. It was reducing
            unnecessary variation.
          </h2>

          <div
            className="
              w-full
              overflow-hidden
              rounded-md
              border
              border-[var(--cs-color-border)]
              bg-white
            "
          >
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--cs-color-border)] bg-stone-50">
                    <th
                      scope="col"
                      className="
                        w-36
                        px-4
                        py-4
                        text-left
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-bold
                        text-black
                      "
                    >
                      COMPONENT
                    </th>

                    <th
                      scope="col"
                      className="
                        w-96
                        px-4
                        py-4
                        text-left
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-bold
                        text-black
                      "
                    >
                      BEFORE (FRAGMENTED)
                    </th>

                    <th
                      scope="col"
                      className="
                        px-4
                        py-4
                        text-left
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-bold
                        text-black
                      "
                    >
                      AFTER (FALAH ONE SPEC)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {AUDIT_ROWS.map((row, index) => (
                    <tr
                      key={row.component}
                      className={
                        index !== AUDIT_ROWS.length - 1
                          ? "border-b border-[var(--cs-color-border)]"
                          : undefined
                      }
                    >
                      <th
                        scope="row"
                        className="
                          px-4
                          py-4
                          text-left
                          align-middle
                          font-[var(--cs-font-sans)]
                          text-sm
                          font-semibold
                          text-black
                        "
                      >
                        {row.component}
                      </th>

                      <td
                        className="
                          px-4
                          py-4
                          align-middle
                          font-[var(--cs-font-sans)]
                          text-xs
                          font-normal
                          leading-5
                          text-[var(--cs-color-text-muted)]
                        "
                      >
                        {row.before}
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          align-middle
                          font-[var(--cs-font-sans)]
                          text-xs
                          font-medium
                          leading-5
                          text-emerald-500
                        "
                      >
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
