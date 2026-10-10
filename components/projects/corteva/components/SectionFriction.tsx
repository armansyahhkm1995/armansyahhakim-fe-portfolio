import Image from "next/image";
import SectionDivider from "./SectionDivider";

const CONVENTIONAL_VS_FIELD = [
  {
    stage: "01. Environment",
    conventional: "Hotel banquet hall or community center with passive seating.",
    field: "Active rice paddy dikes under direct sunlight.",
  },
  {
    stage: "02. Evidence Delivery",
    conventional: "Slide decks, glossy brochures, and abstract yield percentages.",
    field: "Side-by-side live crop plots showing height, panicle density, and root health.",
  },
  {
    stage: "03. Stakeholder Trust",
    conventional: "Speculative Q&A filtered through sales representatives.",
    field: "Hands-on grain counting, disease inspection, and open agronomist clinics.",
  },
  {
    stage: "04. Decision Trigger",
    conventional: "Hesitant compliance followed by immediate post-event skepticism.",
    field: "Direct yield threshing calculation proving economic profit on the spot.",
  },
];

const STAKEHOLDERS = [
  {
    role: "Local Rice Farmers",
    friction: "Sole livelihood at stake; skeptical of seed promises from corporate outsiders.",
    need: "Tangible proof of grain count and pest resilience.",
  },
  {
    role: "Agricultural Seed Kiosks",
    friction: "Risk of unsold inventory if new seed varieties fail in the field.",
    need: "Confidence in organic farmer demand before placing wholesale orders.",
  },
  {
    role: "Corteva Agronomists",
    friction: "Struggled to convey complex crop chemistry through verbal presentations.",
    need: "A living laboratory to demonstrate soil and pest defense pairings.",
  },
  {
    role: "Agricultural Extension Officers (PPL)",
    friction: "Must uphold public responsibility; cannot endorse unverified products.",
    need: "Objective comparative data between traditional and hybrid yields.",
  },
];

export default function SectionFriction() {
  return (
    <section id="friction" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="02"
          title="The Core Friction"
          subtitle="CORTEVA AGRISCIENCE / PROBLEM & ECOSYSTEM"
        />

        {/* Narrative Headline */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Farmers do not risk their livelihoods on PowerPoint presentations.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              In Karawang, rice farming is not a corporate hobby—it is an economic survival system.
              A single crop failure causes irreversible family debt. When agricultural corporations
              pitch seed innovation inside hotel banquet rooms, farmers perceive it as sales
              propaganda.
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              To drive adoption of high-performing hybrid seeds, we needed to deconstruct the
              conventional seminar model and bring the validation process directly into the mud.
            </p>
          </div>
        </div>

        {/* Conventional vs Field Model Comparison */}
        <div className="mb-16 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--cs-color-text-muted)] uppercase">
            Model Comparison: Abstract Sales Pitch vs. Grounded Verification
          </h3>

          <div className="mt-6 divide-y divide-[var(--cs-color-border)]">
            {CONVENTIONAL_VS_FIELD.map((item) => (
              <div
                key={item.stage}
                className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[180px_1fr_1fr] md:gap-8"
              >
                <span className="font-mono text-xs font-semibold text-[var(--cs-color-text-primary)]">
                  {item.stage}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-red-500/80 uppercase">
                    Conventional Seminar
                  </span>
                  <p className="font-sans text-xs text-[var(--cs-color-text-secondary)]">
                    {item.conventional}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[var(--cs-color-accent)] uppercase">
                    The Field Experience
                  </span>
                  <p className="font-sans text-xs font-medium text-[var(--cs-color-text-primary)]">
                    {item.field}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Ecosystem */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[var(--cs-color-text-primary)]">
              Multi-Stakeholder Dependencies
            </h3>
            <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
              4 Critical Roles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STAKEHOLDERS.map((s) => (
              <div
                key={s.role}
                className="flex flex-col justify-between rounded-xl border border-[var(--cs-color-border)] p-6"
              >
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--cs-color-text-primary)]">
                    {s.role}
                  </h4>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    <strong className="text-[var(--cs-color-text-muted)] font-mono text-[10px] uppercase block mb-1">
                      Friction:
                    </strong>
                    {s.friction}
                  </p>
                </div>
                <div className="mt-4 border-t border-[var(--cs-color-border)] pt-3">
                  <span className="font-mono text-[10px] text-[var(--cs-color-accent)] uppercase block mb-0.5">
                    Required Validation:
                  </span>
                  <p className="font-sans text-xs font-medium text-[var(--cs-color-text-primary)]">
                    {s.need}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Context Archival Visuals */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
              <Image
                src="/images/corteva/SectionContext - Seed archive.webp"
                alt="Seed archive collected during the initial field inspection in Karawang"
                width={720}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="font-mono text-[10px] text-[var(--cs-color-text-muted)] uppercase">
              Archival seed materials gathered during initial field reconnaissance in Karawang.
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
              <Image
                src="/images/corteva/SectionContext - Rice field.webp"
                alt="Karawang wetland rice fields representing the real operational terrain"
                width={720}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="font-mono text-[10px] text-[var(--cs-color-text-muted)] uppercase">
              Karawang wetland rice fields: The physical terrain and cultivation baseline.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
