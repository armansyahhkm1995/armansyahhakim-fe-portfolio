import Image from "next/image";
import SectionDivider from "./SectionDivider";

export default function SectionFriction() {
  return (
    <section id="friction" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <SectionDivider
          number="02"
          title="The Core Friction"
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
