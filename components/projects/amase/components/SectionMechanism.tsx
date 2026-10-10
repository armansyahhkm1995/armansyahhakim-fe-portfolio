const PRINCIPLES = [
  {
    num: "01",
    title: "Progressive Disclosure over Administrative Dumping",
    desc: "Rather than displaying 18 parallel categories on the homepage, the app initiates a gentle 3-step intake: 'What is your most urgent priority today?' (Shelter, Job, Legal, Mental Wellbeing).",
  },
  {
    num: "02",
    title: "Stigma-Free Human Taxonomy",
    desc: "Replaced formal institutional jargon ('Correctional Aftercare Directorate') with empathetic, outcome-oriented descriptions ('Immediate Food Vouchers', 'Fair-Chance Employer Network').",
  },
  {
    num: "03",
    title: "Absolute Privacy Transparency",
    desc: "Embedded clear privacy guardrails guaranteeing that exploring sensitive topics like substance recovery or family trauma is strictly confidential and decoupled from parole monitoring.",
  },
];

const IA_TRACKS = [
  {
    track: "Track A: The Guided Compass (Crisis & New Releasees)",
    flow: "Gentle 3-Question Intake → Algorithmic Need Matching → Curated 3 Immediate Actions → Direct Booking Assistance",
    context: "Designed for beneficiaries in high cognitive distress during their first 14 days of release.",
  },
  {
    track: "Track B: Open Exploration (Caseworkers & Stable Users)",
    flow: "Topic Filters (Employment, Housing, Mental Health) → Verified Badge & Distance Filter → Actionable Agency Card → In-App Caseworker Sharing",
    context: "Designed for caseworkers and mentors assisting multiple beneficiaries in one session.",
  },
];

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              03
            </span>
            <span className="font-sans text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              The Strategic Mechanism
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
            AMASE / IA REFRAME &amp; DESIGN SYSTEM
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="mb-14 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Reframing from an institutional directory to an empathetic personal compass.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              Our redesign fundamental was simple: <em>You cannot expect vulnerable citizens under
              immense emotional stress to decipher government bureaucracy.</em> The software must do
              the heavy cognitive lifting of filtering, matching, and explaining eligibility.
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              We structured a dual-track Information Architecture (IA) pairing a guided intake with an
              open, transparent exploration suite.
            </p>
          </div>
        </div>

        {/* 3 Core Design Principles */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.num}
              className="flex flex-col rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-8"
            >
              <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
                {p.num}
              </span>
              <h3 className="mt-4 font-serif text-xl text-[var(--cs-color-text-primary)]">
                {p.title}
              </h3>
              <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dual-Track Flow Architecture */}
        <div className="rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-6 md:p-8">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--cs-color-text-muted)] uppercase">
            Dual-Track Information Architecture
          </h3>

          <div className="mt-6 flex flex-col gap-6">
            {IA_TRACKS.map((t) => (
              <div
                key={t.track}
                className="rounded-xl border border-[var(--cs-color-border)] p-6 transition-colors hover:border-[var(--cs-color-accent)]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-serif text-lg text-[var(--cs-color-text-primary)]">
                    {t.track}
                  </h4>
                  <span className="font-mono text-[10px] text-[var(--cs-color-text-muted)] uppercase">
                    Architecture Pathway
                  </span>
                </div>
                <div className="mt-4 rounded-lg bg-[var(--cs-color-bg-secondary)] p-4 font-mono text-xs text-[var(--cs-color-text-primary)]">
                  {t.flow}
                </div>
                <p className="mt-3 font-sans text-xs text-[var(--cs-color-text-secondary)]">
                  {t.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
