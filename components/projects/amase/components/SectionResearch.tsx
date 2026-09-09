const RESEARCH_AREAS = [
  {
    number: "1",
    title: "Ecosystem Dynamics",
    description:
      "What types of support exist? Who provides them? How are services distributed across national and grassroots organisations?",
  },
  {
    number: "2",
    title: "User Navigation Needs",
    description:
      "What types of support might people need? What cognitive and structural barriers make services difficult to locate or trust?",
  },
  {
    number: "3",
    title: "Existing App Limits",
    description:
      "What does ACTS currently help users do? Where does the search and filter structure limit discovery and trial?",
  },
  {
    number: "4",
    title: "Competitive Landscape",
    description:
      "How do adjacent services (directories, job boards, mental health tech) help vulnerable groups discover and act on resources?",
  },
] as const;

const COMPARATIVE_ROWS = [
  {
    id: "Support Directories",
    discovery: "Flat lists",
    search: "Keyword only",
    pattern: "Surface eligibility transparently up front.",
  },
  {
    id: "Job Platforms",
    discovery: "Personalised feed",
    search: "Highly segmented",
    pattern: "Ensure non-linear explore mode stays accessible.",
  },
  {
    id: "Community / Mentoring",
    discovery: "Group listings",
    search: "By interest tags",
    pattern: "Differentiate peer chat from institutional aid.",
  },
] as const;

function SectionHeader() {
  return (
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
          05
        </span>

        <h2
          id="research-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Research Scope
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
        4 CORE LINES OF ENQUIRY
      </p>
    </header>
  );
}

export default function SectionResearch() {
  return (
    <section
      id="research"
      aria-labelledby="research scope"
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
        <SectionHeader />

        {/* INTRO */}
        <div
          className="
            flex
            flex-col
            items-start
            gap-6
          "
        >
          <h3
            className="
              w-full
              max-w-[1280px]
              font-[var(--cs-font-serif)]
              text-4xl
              font-normal
              leading-[1.05]
              tracking-[-0.02em]
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
            "
          >
            Establishing a comprehensive research matrix before building.
          </h3>

          <p
            className="
              w-full
              max-w-[680px]
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            I mapped my research into four distinct areas to ensure the redesign
            was grounded in real-world systemic complexity rather than purely
            aesthetic intuition.
          </p>
        </div>

        {/* RESEARCH MATRIX */}
        <div
          className="
            flex
            flex-col
            overflow-hidden
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
          "
        >
          {RESEARCH_AREAS.map((area, index) => (
            <article
              key={area.number}
              className="
                flex
                flex-col
                gap-3
                border-b
                border-[var(--cs-color-border)]
                p-5
                last:border-b-0
                sm:p-6
              "
            >
              <h4
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-bold
                  uppercase
                  text-stone-600
                "
              >
                {area.number} — {area.title}
              </h4>

              <p
                className="
                  max-w-[1100px]
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-normal
                  leading-5
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {area.description}
              </p>
            </article>
          ))}
        </div>

        {/* COMPETITIVE RESEARCH */}
        <div
          className="
            flex
            flex-col
            gap-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
            "
          >
            <h3
              className="
                w-full
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
              How do other products solve adjacent problems?
            </h3>

            <div
              className="
                w-full
                max-w-[680px]
                border-l-[3px]
                border-stone-600
                pl-5
                sm:pl-6
              "
            >
              <p
                className="
                  font-[var(--cs-font-serif)]
                  text-2xl
                  font-normal
                  leading-[1.2]
                  text-[var(--cs-color-text-primary)]
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Many platforms optimise either for search or personalisation.
                The opportunity for ACTS was to support both without allowing
                personalisation to restrict exploration.
              </p>
            </div>
          </div>

          {/* COMPARATIVE MATRIX */}
          <div
            className="
              w-full
              overflow-x-auto
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-white
            "
          >
            <div className="min-w-[760px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[12rem_12rem_12rem_minmax(0,1fr)]
                  gap-0
                  border-b
                  border-[var(--cs-color-border)]
                  bg-stone-50
                  p-4
                "
              >
                {[
                  "SECTOR",
                  "DISCOVERY",
                  "SEARCH / FILTER",
                  "KEY PATTERN FOR AMASE",
                ].map((heading) => (
                  <div
                    key={heading}
                    className="
                      font-[var(--cs-font-mono)]
                      text-xs
                      font-bold
                      text-black
                    "
                  >
                    {heading}
                  </div>
                ))}
              </div>

              {/* TABLE ROWS */}
              {COMPARATIVE_ROWS.map((row, id) => (
                <div
                  key={row.id}
                  className="
                    grid
                    grid-cols-[12rem_12rem_12rem_minmax(0,1fr)]
                    gap-0
                    border-b
                    border-[var(--cs-color-border)]
                    p-4
                    last:border-b-0
                  "
                >
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-black
                    "
                  >
                    {row.id}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.discovery}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.search}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-semibold
                      text-stone-600
                    "
                  >
                    {row.pattern}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE SHIFT */}
        <div
          className="
            flex
            flex-col
            gap-6
          "
        >
          <p
            className="
              text-center
              font-[var(--cs-font-mono)]
              text-sm
              font-bold
              uppercase
              text-stone-600
            "
          >
            THE SHIFT
          </p>

          <div
            className="
              grid
              gap-4
              lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]
              lg:gap-6
            "
          >
            {/* BEFORE */}
            <article
              className="
                flex
                min-h-[260px]
                flex-col
                justify-center
                gap-4
                rounded-xl
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-8
                sm:p-12
                lg:p-20
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-normal
                  text-[var(--cs-color-text-muted)]
                "
              >
                BEFORE
              </span>

              <p
                className="
                  font-[var(--cs-font-serif)]
                  text-3xl
                  font-normal
                  leading-[1.1]
                  text-[var(--cs-color-text-primary)]
                  opacity-50
                  sm:text-4xl
                  sm:leading-10
                "
              >
                &quot;Support discovery was treated primarily as a connection
                problem.&quot;
              </p>
            </article>

            {/* DIVIDER */}
            <div
              aria-hidden="true"
              className="
                hidden
                bg-[var(--cs-color-border)]
                lg:block
              "
            />

            {/* AFTER */}
            <article
              className="
                flex
                min-h-[260px]
                flex-col
                justify-center
                gap-4
                rounded-xl
                border
                border-[var(--cs-color-border)]
                bg-white
                p-8
                sm:p-12
                lg:p-20
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-normal
                  text-stone-600
                "
              >
                AFTER
              </span>

              <div
                className="
                  border-l-2
                  border-stone-600
                  pl-4
                "
              >
                <p
                  className="
                    font-[var(--cs-font-serif)]
                    text-3xl
                    font-normal
                    leading-[1.1]
                    text-[var(--cs-color-text-primary)]
                    sm:text-4xl
                    sm:leading-10
                  "
                >
                  &quot;The larger challenge was navigation across a distributed
                  support ecosystem.&quot;
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
