import Image from "next/image";
import SectionDivider from "./SectionDivider";

const FIELD_EVIDENCE = [
  {
    tag: "LIVE THRESHING & YIELD AUDIT",
    title: "On-site Yield Calculation via Traditional Threshing",
    desc: "Farmers threshed harvested rice from standard sample plots directly in the field, validating tangible grain weight and lower empty panicle ratios compared to control plots.",
    src: "/images/corteva/SectionValidation - Corteva harvest riece field demo.webp",
    alt: "Live rice harvest threshing demonstration with farmers in Karawang",
  },
  {
    tag: "STAKEHOLDER ENGAGEMENT",
    title: "Farmer & Community Direct Interaction",
    desc: "Local farmers examining panicle thickness, grain fullness, and soil retention with regional peers without sales intermediary pressure.",
    src: "/images/corteva/SectionValidation - Farmer and locals harvest rice field interaction.webp",
    alt: "Farmers and local community interacting during the rice harvest",
  },
  {
    tag: "AGRONOMY CLINIC",
    title: "Applied Field Crop Protection Session",
    desc: "Corteva agronomists diagnosing active pest symptoms side-by-side on affected stems, explaining preventive chemical defense timing.",
    src: "/images/corteva/SectionValidation - Corteva rice field medicine introduction.webp",
    alt: "Educational session demonstrating agricultural crop protection products",
  },
  {
    tag: "AERIAL SPATIAL FOOTPRINT",
    title: "Aerial View of the Active Field Verification Route",
    desc: "The entire field layout showing designated observation pathways, demonstration tents, and side-by-side varietal plots spanning several hectares.",
    src: "/images/corteva/SectionValidation - Aerial photo session all stakeholders.webp",
    alt: "Aerial view of the Corteva field demonstration in Karawang",
  },
];

const SIGNAGE_SYSTEM = [
  {
    label: "Plot Demo Markers",
    desc: "Clear visual labels identifying each seed variety and treatment protocol.",
    src: "/images/corteva/SectionSystem - Plot demo sign for each product on the field.webp",
    alt: "Demonstration signage identifying individual seed and treatment plots",
  },
  {
    label: "Wayfinding & Flags",
    desc: "Guiding farmer cohorts along the structured observation sequence.",
    src: "/images/corteva/SectionSystem - Flag chain on the field.webp",
    alt: "Flag chains and directional indicators across the rice field",
  },
  {
    label: "Field Demonstration Tent",
    desc: "Sheltered resting and discussion points at strategic plot intersections.",
    src: "/images/corteva/SectionSystem - Tent for the demonstration among stakeholders.webp",
    alt: "Demonstration tent used for stakeholder discussions in the field",
  },
  {
    label: "Product & Partner Signage",
    desc: "Connecting seed traits with local distribution partner kiosks.",
    src: "/images/corteva/SectionSystem - Product signage on the field.webp",
    alt: "Product signage positioned throughout the rice field",
  },
];

export default function SectionValidation() {
  return (
    <section id="evidence" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="04"
          title="Visual Proof & Field Artifacts"
          subtitle="CORTEVA AGRISCIENCE / EVIDENCE & ARTIFACTS"
        />

        {/* Narrative Headline */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            The strongest proof was not a survey score. It was the behavior the environment enabled.
          </h2>

          <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
            Instead of passively absorbing marketing claims, farmers actively scrutinized the crops:
            comparing vegetative density, discussing localized fertilizer schedules, and witnessing
            the harvest threshing with their own eyes.
          </p>
        </div>

        {/* Primary Field Evidence (2x2 Rich Cards) */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {FIELD_EVIDENCE.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <span className="font-mono text-[10px] font-semibold text-[var(--cs-color-accent)] uppercase">
                  {item.tag}
                </span>
                <h3 className="mt-2 font-serif text-xl text-[var(--cs-color-text-primary)] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Wayfinding & Signage Artifacts */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[var(--cs-color-text-primary)]">
              Field System Artifacts &amp; Wayfinding
            </h3>
            <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
              Physical Touchpoints
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNAGE_SYSTEM.map((sign) => (
              <figure key={sign.label} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]">
                  <Image
                    src={sign.src}
                    alt={sign.alt}
                    width={480}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption>
                  <span className="block font-sans text-xs font-semibold text-[var(--cs-color-text-primary)]">
                    {sign.label}
                  </span>
                  <span className="mt-1 block font-sans text-xs text-[var(--cs-color-text-secondary)]">
                    {sign.desc}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
