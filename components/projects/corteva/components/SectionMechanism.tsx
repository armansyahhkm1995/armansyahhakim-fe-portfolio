import Image from "next/image";
import SectionDivider from "./SectionDivider";

const JOURNEY_STEPS = [
  {
    num: "01",
    title: "Information & Framing",
    desc: "Baseline agronomy briefing under open shade, aligning objectives without commercial pressure.",
  },
  {
    num: "02",
    title: "Tactile Observation",
    desc: "Direct field walk along the paddy dikes to inspect root anchorage, stem thickness, and panicle count.",
  },
  {
    num: "03",
    title: "Side-by-Side Comparison",
    desc: "Live comparison between Corteva hybrid plots and traditional regional control varieties planted concurrently.",
  },
  {
    num: "04",
    title: "Agronomist Discussion",
    desc: "Open clinic addressing specific regional pest pressures (brown planthopper, blast disease).",
  },
  {
    num: "05",
    title: "Applied Demonstration",
    desc: "Proper spacing and dosage calibration demonstrated directly with local equipment.",
  },
  {
    num: "06",
    title: "Live Yield Threshing",
    desc: "Farmers harvest standard 2.5m x 2.5m test plots (ubinan) and calculate dry grain weight on-site.",
  },
];

const SKETCHES = [
  {
    label: "Spatial Flow Planning",
    src: "/images/corteva/SectionHypothesis - Early concept.webp",
    alt: "Early concept sketch mapping visitor navigation across the agricultural field",
  },
  {
    label: "Fixed Route Sequence",
    src: "/images/corteva/SectionHypothesis - Fixed flow.webp",
    alt: "Sequential route diagram guiding farmers from plot inspection to yield threshing",
  },
  {
    label: "Demo Stage Prototype",
    src: "/images/corteva/SectionHypothesis - Prototype design A.webp",
    alt: "Prototype design A for the central demonstration area",
  },
  {
    label: "Field Tent Positioning",
    src: "/images/corteva/SectionHypothesis - Tent placement.webp",
    alt: "Spatial layout plan positioning demonstration tents within the active paddy field",
  },
];

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="03"
          title="The Strategic Mechanism"
          subtitle="CORTEVA AGRISCIENCE / SPATIAL HYPOTHESIS & ROUTE ARCHITECTURE"
        />

        {/* Narrative Headline */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-20">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Designing a spatial sequence where evidence speaks louder than marketing.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              Our core hypothesis was structural: <em>If farmers can physically walk through side-by-side
              plots, examine crop vigor with their own hands, and perform on-site yield calculations,
              skepticism transforms into voluntary adoption.</em>
            </p>
            <p className="font-sans text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
              We mapped an immutable six-station experiential route across the paddy fields, turning
              every footstep into an escalating chain of verification.
            </p>
          </div>
        </div>

        {/* 6-Station Experiential Sequence */}
        <div className="mb-16 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--cs-color-text-muted)] uppercase">
            The 6-Beat Verification Journey
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY_STEPS.map((step) => (
              <div
                key={step.num}
                className="flex flex-col rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-6"
              >
                <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
                  {step.num}
                </span>
                <h4 className="mt-3 font-serif text-lg text-[var(--cs-color-text-primary)]">
                  {step.title}
                </h4>
                <p className="mt-2 font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Early Design Sketches & Route Planning */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[var(--cs-color-text-primary)]">
              Spatial Route &amp; Prototype Sketches
            </h3>
            <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
              Iterative Ideation
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKETCHES.map((item) => (
              <figure key={item.label} className="flex flex-col gap-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={480}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <figcaption className="font-mono text-[10px] uppercase text-[var(--cs-color-text-muted)]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
