import Link from "next/link";

const RETROSPECTIVE_INSIGHTS = [
  {
    title: "01. Dignity as a Usability Metric",
    desc: "When software treats users with respect—by eliminating interrogation screens and offering transparent privacy toggles—engagement transforms from coerced compliance to genuine self-advocacy.",
  },
  {
    title: "02. Cognitive De-Escalation is Harm Reduction",
    desc: "For users under acute psychological stress, reducing cognitive choices from 18 to 3 is not an aesthetic minimalism choice; it directly prevents panic, decision paralysis, and drop-out.",
  },
  {
    title: "03. Bridging Institutional & Community Support",
    desc: "The interface succeeded because it bridged two worlds: satisfying government accountability needs while remaining a confidential, approachable personal companion for ex-offenders.",
  },
];

export default function SectionImpact() {
  return (
    <section id="impact" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              05
            </span>
            <span className="font-sans text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Impact &amp; Reflection
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
            AMASE / OUTCOMES &amp; SYSTEMS RETROSPECTIVE
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="mb-14 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Designing for vulnerability is the ultimate test of product design rigor.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              The AMASE redesign demonstrated that user experience in social support systems cannot
              rely on standard commercial patterns. It requires deep empathy with trauma, rigorous
              simplification of complex state machinery, and unwavering respect for user autonomy.
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              By structuring clear, stigma-free pathways, the redesigned platform provides
              ex-offenders with a reliable compass during their most precarious life transition.
            </p>
          </div>
        </div>

        {/* 3 Core Systems Retrospective Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {RETROSPECTIVE_INSIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-8"
            >
              <h3 className="font-serif text-xl text-[var(--cs-color-text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--cs-color-border)] pt-8">
          <Link
            href="/projects/corteva"
            className="font-mono text-xs uppercase tracking-wider text-[var(--cs-color-text-secondary)] transition-colors hover:text-[var(--cs-color-text-primary)]"
          >
            ← Previous Project: Corteva Agriscience
          </Link>

          <Link
            href="/projects/ems"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cs-color-accent)] transition-colors hover:opacity-80"
          >
            <span>Next Project: EMS (Industrial IoT)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
