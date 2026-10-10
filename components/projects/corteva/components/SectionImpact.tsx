import Image from "next/image";
import Link from "next/link";
import SectionDivider from "./SectionDivider";

const BEHAVIORAL_METRICS = [
  {
    phase: "Prior to Experience",
    state: "Defensive Skepticism",
    behavior:
      "Guarded against corporate sales rhetoric; reliance solely on ancestral inbred seed practices.",
  },
  {
    phase: "During Field Tour",
    state: "Active Investigation",
    behavior:
      "Hands-on comparison of root health, counting filled grains, and verifying dry weight at the threshing station.",
  },
  {
    phase: "Commercial Outcome",
    state: "High-Confidence Adoption",
    behavior:
      "Direct commitments placed with local agricultural kiosks for the forthcoming planting cycle.",
  },
];

const PRINCIPLES = [
  {
    title: "01. Physical Space as an Interface",
    body: "The field was not merely a backdrop—it was a structured information architecture. Sightlines, physical pacing, and tactile stations replaced digital UI elements.",
  },
  {
    title: "02. Evidence-First De-Risking",
    body: "In high-stakes ecosystems (whether farming or enterprise software), users refuse innovation until the risk of failure is demonstrably eliminated.",
  },
  {
    title: "03. Designing for Outcomes, Not Polish",
    body: "Success was not measured by cosmetic event decorations, but by whether farmers willingly altered their seasonal seed choices.",
  },
];

export default function SectionImpact() {
  return (
    <section id="impact" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="05"
          title="Impact & Retrospective"
          subtitle="CORTEVA AGRISCIENCE / BEHAVIORAL TRANSFORMATION"
        />

        {/* Narrative Headline */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            When farmers calculate the yield themselves, conversion is immediate.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              By replacing abstract claims with empirical observation, the field experience achieved
              what months of promotional flyers could not. Farmers witnessed the tangible difference
              in grain density and pest resistance under identical soil conditions.
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              This transformed Corteva from an unfamiliar multinational vendor into a trusted agronomy
              partner in Karawang.
            </p>
          </div>
        </div>

        {/* Behavioral Transformation Funnel */}
        <div className="mb-16 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--cs-color-text-muted)] uppercase">
            The Behavioral Shift: From Skepticism to Adoption
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {BEHAVIORAL_METRICS.map((metric) => (
              <div
                key={metric.phase}
                className="flex flex-col rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-6"
              >
                <span className="font-mono text-[10px] uppercase text-[var(--cs-color-text-muted)]">
                  {metric.phase}
                </span>
                <h4 className="mt-2 font-serif text-xl text-[var(--cs-color-text-primary)]">
                  {metric.state}
                </h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {metric.behavior}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Photo */}
        <figure className="mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
            <Image
              src="/images/corteva/SectionEcosystem - Stakeholder photo session.webp"
              alt="Farmers and Corteva stakeholders gathering together after the field experience"
              width={1440}
              height={810}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] text-[var(--cs-color-text-muted)] uppercase">
            Communal validation: Corteva agronomists, regional kiosk distributors, and local farmer groups celebrating the harvest.
          </figcaption>
        </figure>

        {/* Systems Design Retrospective */}
        <div className="mb-16">
          <h3 className="mb-6 font-serif text-2xl text-[var(--cs-color-text-primary)]">
            Key Systems Takeaways
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--cs-color-border)] p-6"
              >
                <h4 className="font-serif text-lg text-[var(--cs-color-text-primary)]">
                  {item.title}
                </h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--cs-color-border)] pt-8">
          <Link
            href="/#transformations"
            className="font-mono text-xs uppercase tracking-wider text-[var(--cs-color-text-secondary)] transition-colors hover:text-[var(--cs-color-text-primary)]"
          >
            ← Back to Transformations
          </Link>

          <Link
            href="/projects/amase"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cs-color-accent)] transition-colors hover:opacity-80"
          >
            <span>Next Project: AMASE (Public Sector)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
