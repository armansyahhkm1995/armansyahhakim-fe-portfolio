import Image from "next/image";

const LEGACY_FAILURES = [
  {
    title: "Administrative Jargon Overload",
    desc: "18 rigid ministry categories that forced users to already know whether they needed 'Family Service Centres' or 'Intervention Divisions'.",
    src: "/images/amase/Existing home dashboard.webp",
    alt: "Legacy home dashboard showing dense directory categories",
  },
  {
    title: "Cold-Calling Dead Ends",
    desc: "Resource pages merely displayed phone numbers and desk hours, requiring vulnerable ex-offenders to make intimidating cold calls.",
    src: "/images/amase/Existing resource detail.webp",
    alt: "Legacy resource detail with static telephone numbers and dry text",
  },
  {
    title: "Surveillance Anxiety",
    desc: "Users hesitated to search for substance recovery or psychiatric counseling out of fear that search queries would be reported to probation officers.",
    src: "/images/amase/Support Categories - Browse by category (mental, employment, counseling, networking, etc).webp",
    alt: "Legacy category browser showing raw institutional labels",
  },
];

export default function SectionProblem() {
  return (
    <section id="bottleneck" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              02
            </span>
            <span className="font-sans text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              The Bottleneck
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
            AMASE / ECOSYSTEM &amp; LEGACY AUDIT
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="mb-14 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            When people hit rock bottom, a directory of telephone numbers is not a lifeline.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              The first 90 days following prison release represent the highest statistical risk for
              recidivism. Beneficiaries must simultaneously resolve emergency housing, food
              assistance, and employment, all while managing intense social stigma and emotional
              exhaustion.
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              The legacy ACTS app treated users like bureaucratic search engines: offering dozens of
              disjointed categories and expecting users to navigate complex institutional boundaries
              alone.
            </p>
          </div>
        </div>

        {/* Context Photo */}
        <figure className="mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
            <Image
              src="/images/amase/Inmate undergoing the Community Based Programme.webp"
              alt="Inmate undergoing the Community Based Programme during the rehabilitation phase"
              width={1440}
              height={810}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
            High-stakes context: Beneficiaries participating in the Community Based Programme under probationary oversight.
          </figcaption>
        </figure>

        {/* Legacy Failure Modes (3 Cards) */}
        <div>
          <h3 className="mb-8 font-serif text-2xl text-[var(--cs-color-text-primary)]">
            Three Structural Flaws in the Legacy Interface
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {LEGACY_FAILURES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-[var(--cs-color-border)] bg-black/5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={480}
                    height={640}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-lg text-[var(--cs-color-text-primary)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
