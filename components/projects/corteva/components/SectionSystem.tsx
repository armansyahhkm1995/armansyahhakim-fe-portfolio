import Image from "next/image";
import SectionDivider from "./SectionDivider";

const ARTIFACTS = [
  {
    label: "Product signage on the field",
    src: "/images/corteva/SectionSystem - Product signage on the field.webp",
    alt: "Product signage placed throughout the rice field",
  },
  {
    label: "Archipelago signage on the photo spot",
    src: "/images/corteva/SectionSystem - Archipelago signage on the photo spot.webp",
    alt: "Archipelago signage placed at the photo spot",
  },
  {
    label: "Vertical banners on the field",
    src: "/images/corteva/SectionSystem - Vertical banners on the field.webp",
    alt: "Vertical banners positioned across the rice field",
  },
  {
    label: "Tent for the demonstration among stakeholders",
    src: "/images/corteva/SectionSystem - Tent for the demonstration among stakeholders.webp",
    alt: "Demonstration tent used for stakeholder activities in the field",
  },
  {
    label: "Flag chain on the field",
    src: "/images/corteva/SectionSystem - Flag chain on the field.webp",
    alt: "Flag chain used to define and guide the field experience",
  },
  {
    label: "Photo stage",
    src: "/images/corteva/SectionSystem - photo stage on the field.webp",
    alt: "Photo stage positioned within the rice field experience",
  },
  {
    label: "Plot demo sign for each product on the field",
    src: "/images/corteva/SectionSystem - Plot demo sign for each product on the field.webp",
    alt: "Demonstration sign identifying individual product plots",
  },
  {
    label: "Billboard",
    src: "/images/corteva/SectionSystem - Billboard on the field.webp",
    alt: "Billboard positioned within the rice field experience",
  },
];

export default function SectionSystem() {
  return (
    <section id="experience" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="06"
          title="Experience Thinking"
          subtitle="CORTEVA AGRISCIENCE / FIELD STAGE SYSTEM"
        />

        {/* Introduction */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <h2 className="max-w-[680px] whitespace-pre-line font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            THE EXPERIENCE WAS NOT ONE EVENT. IT WAS A CONNECTED SYSTEM.
          </h2>

          <div className="flex flex-col gap-4 pt-0 md:pt-3">
            <p
              className="
                font-[var(--cs-font-sans)]
                text-[clamp(16px,1.4vw,20px)]
                leading-[1.65]
                text-[var(--cs-color-text-secondary)]
              "
            >
              Each touchpoint had a different job. The field introduced the
              products. The plots made differences observable. Community
              activities widened the conversation. The research farm connected
              the experience back to agricultural development. Harvest gave the
              journey a tangible culmination.
            </p>
            <a
              href="https://drive.google.com/file/d/1CPHsUnPiL2g0lJv1WsEXDjAyd2udpE3l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-60 underline"
            >
              Corteva Booklet Design Link
            </a>
          </div>
        </div>

        {/* System overview */}
        <div className="mb-12">
          <figure className="m-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/corteva/SectionSystem - Aerial shot photo stage.webp"
                alt="Aerial overview of the Corteva field experience and its physical touchpoints"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="h-full w-full object-cover"
              />
            </div>

            <figcaption
              className="
                mt-3
                font-[var(--cs-font-mono)]
                text-[11px]
                text-[var(--cs-color-text-muted)]
              "
            >
              FIELD EXPERIENCE / SPATIAL SYSTEM OVERVIEW
            </figcaption>
          </figure>
        </div>

        {/* Physical touchpoints */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {ARTIFACTS.map((artifact) => (
            <figure key={artifact.label} className="m-0 flex flex-col gap-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={artifact.src}
                  alt={artifact.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    hover:scale-[1.02]
                  "
                />
              </div>

              <figcaption
                className="
                  font-[var(--cs-font-mono)]
                  text-[11px]
                  leading-[1.5]
                  text-[var(--cs-color-text-muted)]
                "
              >
                {artifact.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
