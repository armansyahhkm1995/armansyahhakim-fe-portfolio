const CHALLENGES = [
  {
    number: "01",
    title: "Finding the Right Starting Point",
    finding: "Users face choice paralysis upon release.",
    implication: "Provide immediate guided personalization.",
  },
  {
    number: "02",
    title: "Support is Highly Distributed",
    finding:
      "Services exist across separate entities without shared databases.",
    implication: "Create a single centralized registry.",
  },
  {
    number: "03",
    title: "Relevance is Difficult to Judge",
    finding: "Directories omit critical details (like eligibility criteria).",
    implication: "Surface explicit criteria clearly on detail views.",
  },
  {
    number: "04",
    title: "Info Doesn't Translate to Action",
    finding:
      "Finding an address does not outline the actual sequence of application.",
    implication: "Map out concrete step-by-step instructions.",
  },
  {
    number: "05",
    title: "Immediate Support Has Different Requirements",
    finding:
      "Mental crises or housing emergencies can't wait for form approvals.",
    implication: "Design a dedicated, fast-access helpline route.",
  },
  {
    number: "06",
    title: "Reintegration is Ongoing",
    finding: "Post-release support extends over years, not weeks.",
    implication:
      "Integrate peer mentoring directly into the primary navigation.",
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
          07
        </span>

        <h2
          id="challenge-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Support Exists. The Challenge is Navigating It.
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
        6 SYSTEMIC BARRIERS IDENTIFIED
      </p>
    </header>
  );
}

export default function SectionChallenge() {
  return (
    <section
      id="challenge"
      aria-labelledby="support exist the challenge is navigating it"
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

        {/* SYSTEMIC BARRIERS */}
        <div
          className="
            flex
            w-full
            flex-col
          "
        >
          {CHALLENGES.map((challenge, number) => (
            <article
              key={number}
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                first:rounded-t-sm
                last:rounded-b-sm
                sm:p-6
              "
            >
              {/* TITLE */}
              <div className="flex items-center gap-2">
                <span
                  className="
                    shrink-0
                    font-[var(--cs-font-mono)]
                    text-sm
                    font-bold
                    text-stone-600
                  "
                >
                  {challenge.number}
                </span>

                <h3
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-bold
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {challenge.title}
                </h3>
              </div>

              {/* DIVIDER */}
              <div
                aria-hidden="true"
                className="h-px w-full bg-[var(--cs-color-border)]"
              />

              {/* FINDING */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  FINDING
                </span>

                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-normal
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  {challenge.finding}
                </p>
              </div>

              {/* IMPLICATION */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  IMPLICATION
                </span>

                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-semibold
                    leading-5
                    text-stone-600
                  "
                >
                  {challenge.implication}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
