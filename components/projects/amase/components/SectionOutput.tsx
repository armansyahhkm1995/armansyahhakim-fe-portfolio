import Image from "next/image";

const COMPARISON_PAIRS = [
  {
    screen: "01. Home Dashboard",
    beforeLabel: "Legacy: Dense Administrative Portal",
    beforeDesc: "Cold, text-heavy directory with unranked categories and high visual intimidation.",
    beforeImg: "/images/amase/Existing home dashboard.webp",
    afterLabel: "Redesigned: Empathetic Action Feed",
    afterDesc: "Personalized greeting, immediate emergency crisis buttons, and clear next steps.",
    afterImg: "/images/amase/Redesigned home dashboard.webp",
  },
  {
    screen: "02. Explore & Resource Discovery",
    beforeLabel: "Legacy: Unfiltered Agency List",
    beforeDesc: "Alphabetical directory without distance indicators, opening status, or eligibility criteria.",
    beforeImg: "/images/amase/Existing explore portal.webp",
    afterLabel: "Redesigned: High-Clarity Visual Cards",
    afterDesc: "Clear domain badges, opening times, eligibility tags, and walk-in requirements.",
    afterImg: "/images/amase/Redesigned explore portal.webp",
  },
  {
    screen: "03. Guided Intake & Personalization",
    beforeLabel: "Legacy: Basic Settings Screen",
    beforeDesc: "Generic account preferences without contextual assistance matching.",
    beforeImg: "/images/amase/Existing personalization.webp",
    afterLabel: "Redesigned: Dignified Needs Assessment",
    afterDesc: "Simple 3-tap priority questionnaire mapping urgent housing, legal, and job goals.",
    afterImg: "/images/amase/Redesigned personalization.webp",
  },
  {
    screen: "04. Agency & Resource Detail",
    beforeLabel: "Legacy: Static Text & Phone Numbers",
    beforeDesc: "Dry government descriptions requiring vulnerable users to make intimidating cold calls.",
    beforeImg: "/images/amase/Existing resource detail.webp",
    afterLabel: "Redesigned: Transparent Preparation Guide",
    afterDesc: "Explains 'What to expect on your first visit', checklist of required documents, and one-tap mentor share.",
    afterImg: "/images/amase/Redesigned resource detail.webp",
  },
];

export default function SectionOutput() {
  return (
    <section id="interface" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              04
            </span>
            <span className="font-sans text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              The Interface Redesign
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
            AMASE / BEFORE VS AFTER EVIDENCE
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="mb-14 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Before vs. After: Every screen redesigned around clarity and emotional safety.
          </h2>

          <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
            We systematically overhauled the four critical touchpoints of the user journey,
            transforming passive institutional listings into actionable, supportive pathways that
            empower ex-offenders to take confident steps forward.
          </p>
        </div>

        {/* 4 Before vs After Comparison Blocks */}
        <div className="flex flex-col gap-20">
          {COMPARISON_PAIRS.map((pair) => (
            <div
              key={pair.screen}
              className="rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8"
            >
              <div className="mb-6 flex flex-col gap-1 border-b border-[var(--cs-color-border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif text-2xl text-[var(--cs-color-text-primary)]">
                  {pair.screen}
                </h3>
                <span className="font-mono text-xs text-[var(--cs-color-accent)] uppercase">
                  Interface Evolution
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Legacy Screen */}
                <div className="flex flex-col gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-6 opacity-75">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-red-500/80 uppercase font-semibold">
                      Legacy Version
                    </span>
                  </div>
                  <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black/5 shadow-sm">
                    <Image
                      src={pair.beforeImg}
                      alt={pair.beforeLabel}
                      width={360}
                      height={640}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--cs-color-text-primary)]">
                    {pair.beforeLabel}
                  </h4>
                  <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {pair.beforeDesc}
                  </p>
                </div>

                {/* Redesigned Screen */}
                <div className="flex flex-col gap-4 rounded-xl border-2 border-[var(--cs-color-accent)] bg-[var(--cs-color-bg)] p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--cs-color-accent)] uppercase font-semibold">
                      Redesigned Solution
                    </span>
                  </div>
                  <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black/5 shadow-sm">
                    <Image
                      src={pair.afterImg}
                      alt={pair.afterLabel}
                      width={360}
                      height={640}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--cs-color-text-primary)]">
                    {pair.afterLabel}
                  </h4>
                  <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {pair.afterDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
