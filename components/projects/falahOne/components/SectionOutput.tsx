"use client";

import Image from "next/image";

interface BentoComponent {
  name: string;
  category: "Web & SaaS" | "Unity XR" | "Content & Compro" | "Design Tokens";
  src: string;
  width: number;
  height: number;
}

const COLUMN_1: BentoComponent[] = [
  {
    name: "Data Table — Filtering & Pagination",
    category: "Web & SaaS",
    src: "/images/falahOne/data-table.webp",
    width: 960,
    height: 480,
  },
  {
    name: "Alert Dialog — Actions & Status",
    category: "Design Tokens",
    src: "/images/falahOne/shared-alert-dialog.webp",
    width: 536,
    height: 327,
  },
  {
    name: "XR Spatial Touch & World-Space UI",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-touch.webp",
    width: 1200,
    height: 675,
  },
  {
    name: "Pricing Matrix & Plan Card",
    category: "Content & Compro",
    src: "/images/falahOne/content-pricing-card.webp",
    width: 364,
    height: 314,
  },
  {
    name: "Badge System — Soft & Status",
    category: "Design Tokens",
    src: "/images/falahOne/shared-badges.webp",
    width: 424,
    height: 204,
  },
];

const COLUMN_2: BentoComponent[] = [
  {
    name: "Telemetry Interactive Area Chart",
    category: "Web & SaaS",
    src: "/images/falahOne/web-chart.webp",
    width: 1200,
    height: 397,
  },
  {
    name: "Multi-Variant Editorial Cards",
    category: "Content & Compro",
    src: "/images/falahOne/content-cards.webp",
    width: 1600,
    height: 328,
  },
  {
    name: "Meeting Room Collaboration Toolbar",
    category: "Web & SaaS",
    src: "/images/falahOne/web-meeting-control.webp",
    width: 1200,
    height: 785,
  },
  {
    name: "3D Spline & Bezier World Tooltips",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-tooltips.webp",
    width: 1200,
    height: 394,
  },
  {
    name: "Button States & Sizing Scale",
    category: "Design Tokens",
    src: "/images/falahOne/shared-buttons.webp",
    width: 547,
    height: 180,
  },
];

const COLUMN_3: BentoComponent[] = [
  {
    name: "Appointment & Range Calendar",
    category: "Web & SaaS",
    src: "/images/falahOne/web-calendar.webp",
    width: 891,
    height: 470,
  },
  {
    name: "Spatial Hand-Tracking Target Anchor",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-hand-tracking.webp",
    width: 1200,
    height: 675,
  },
  {
    name: "Hero Presentation Content Carousel",
    category: "Content & Compro",
    src: "/images/falahOne/content-carousel.webp",
    width: 568,
    height: 420,
  },
  {
    name: "Real-Time Speaking Voice Pulse",
    category: "Web & SaaS",
    src: "/images/falahOne/shared-talking-indicator.webp",
    width: 1200,
    height: 545,
  },
  {
    name: "Volumetric VR Interaction Card",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-card.webp",
    width: 604,
    height: 557,
  },
];

const MOBILE_COMPONENTS: BentoComponent[] = [
  {
    name: "Data Table — Filtering & Pagination",
    category: "Web & SaaS",
    src: "/images/falahOne/data-table.webp",
    width: 960,
    height: 480,
  },
  {
    name: "Telemetry Interactive Area Chart",
    category: "Web & SaaS",
    src: "/images/falahOne/web-chart.webp",
    width: 1200,
    height: 397,
  },
  {
    name: "XR Spatial Touch & World-Space UI",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-touch.webp",
    width: 1200,
    height: 675,
  },
  {
    name: "Multi-Variant Editorial Cards",
    category: "Content & Compro",
    src: "/images/falahOne/content-cards.webp",
    width: 1600,
    height: 328,
  },
  {
    name: "Appointment & Range Calendar",
    category: "Web & SaaS",
    src: "/images/falahOne/web-calendar.webp",
    width: 891,
    height: 470,
  },
  {
    name: "Spatial Hand-Tracking Target Anchor",
    category: "Unity XR",
    src: "/images/falahOne/unity-xr-hand-tracking.webp",
    width: 1200,
    height: 675,
  },
  {
    name: "Meeting Room Collaboration Toolbar",
    category: "Web & SaaS",
    src: "/images/falahOne/web-meeting-control.webp",
    width: 1200,
    height: 785,
  },
  {
    name: "Hero Presentation Content Carousel",
    category: "Content & Compro",
    src: "/images/falahOne/content-carousel.webp",
    width: 568,
    height: 420,
  },
  {
    name: "Alert Dialog — Actions & Status",
    category: "Design Tokens",
    src: "/images/falahOne/shared-alert-dialog.webp",
    width: 536,
    height: 327,
  },
  {
    name: "Pricing Matrix & Plan Card",
    category: "Content & Compro",
    src: "/images/falahOne/content-pricing-card.webp",
    width: 364,
    height: 314,
  },
  {
    name: "Real-Time Speaking Voice Pulse",
    category: "Web & SaaS",
    src: "/images/falahOne/shared-talking-indicator.webp",
    width: 1200,
    height: 545,
  },
  {
    name: "Button States & Sizing Scale",
    category: "Design Tokens",
    src: "/images/falahOne/shared-buttons.webp",
    width: 547,
    height: 180,
  },
  {
    name: "Badge System — Soft & Status",
    category: "Design Tokens",
    src: "/images/falahOne/shared-badges.webp",
    width: 424,
    height: 204,
  },
];

export default function SectionOutput() {
  return (
    <section id="output" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      {/* Dynamic Keyframes for Seamless Infinite Downward Scroll */}
      <style>{`
        @keyframes bentoScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .bento-track-mobile {
          animation: bentoScrollDown 60s linear infinite;
        }
        .bento-track-col1 {
          animation: bentoScrollDown 52s linear infinite;
        }
        .bento-track-col2 {
          animation: bentoScrollDown 58s linear infinite;
        }
        .bento-track-col3 {
          animation: bentoScrollDown 54s linear infinite;
        }
        .bento-track-mobile:hover,
        .bento-track-col1:hover,
        .bento-track-col2:hover,
        .bento-track-col3:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-10 sm:gap-12">
        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              04
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Cross-Platform Component Library
            </span>
          </div>
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            A unified bento showcase of production design system components.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Curated from the Mostly Used Components in Figma, showing cross-platform UI primitives spanning Next.js web applications, Unity 3D/XR world-space canvases, and marketing content systems.
          </p>
        </div>

        {/* Auto-scrolling Bento Grid Showcase Container */}
        <div className="relative h-[600px] sm:h-[680px] md:h-[760px] lg:h-[840px] w-full overflow-hidden rounded-3xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]/20 p-3 sm:p-5">
          {/* Top and Bottom Gradient Fade Overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 sm:h-32 bg-gradient-to-b from-[var(--cs-color-bg)] via-[var(--cs-color-bg)]/80 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 sm:h-32 bg-gradient-to-t from-[var(--cs-color-bg)] via-[var(--cs-color-bg)]/80 to-transparent"
          />

          {/* Mobile Single-Column View (< md): strictly 1 column with uniform synchronized motion */}
          <div className="relative h-full w-full overflow-hidden md:hidden">
            <div className="flex flex-col gap-4 bento-track-mobile">
              {[...MOBILE_COMPONENTS, ...MOBILE_COMPONENTS].map((item, idx) => (
                <div
                  key={`mobile-${idx}`}
                  className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] shadow-xs transition-all duration-300 hover:border-[var(--cs-color-accent)]"
                >
                  <div className="flex items-center justify-between border-b border-[var(--cs-color-border)]/60 bg-[var(--cs-color-bg)]/60 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)]" />
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[var(--cs-color-text-muted)]">
                      {item.category}
                    </span>
                  </div>
                  <div className="relative flex w-full items-center justify-center bg-[var(--cs-color-bg)] p-3">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                      sizes="100vw"
                      className="h-auto w-full rounded-lg object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet & Desktop Multi-Column View (>= md): 2 or 3 responsive columns */}
          <div className="hidden h-full w-full gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {/* Column 1 */}
            <div className="relative h-full overflow-hidden">
              <div className="flex flex-col gap-4 bento-track-col1">
                {[...COLUMN_1, ...COLUMN_1].map((item, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] shadow-xs transition-all duration-300 hover:border-[var(--cs-color-accent)] hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--cs-color-border)]/60 bg-[var(--cs-color-bg)]/60 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)]" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[var(--cs-color-text-muted)]">
                        {item.category}
                      </span>
                    </div>
                    <div className="relative flex w-full items-center justify-center bg-[var(--cs-color-bg)] p-3 sm:p-4">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative h-full overflow-hidden">
              <div className="flex flex-col gap-4 bento-track-col2">
                {[...COLUMN_2, ...COLUMN_2].map((item, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] shadow-xs transition-all duration-300 hover:border-[var(--cs-color-accent)] hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--cs-color-border)]/60 bg-[var(--cs-color-bg)]/60 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)]" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[var(--cs-color-text-muted)]">
                        {item.category}
                      </span>
                    </div>
                    <div className="relative flex w-full items-center justify-center bg-[var(--cs-color-bg)] p-3 sm:p-4">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 (hidden on md, visible on lg+) */}
            <div className="relative hidden h-full overflow-hidden lg:block">
              <div className="flex flex-col gap-4 bento-track-col3">
                {[...COLUMN_3, ...COLUMN_3].map((item, idx) => (
                  <div
                    key={`col3-${idx}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] shadow-xs transition-all duration-300 hover:border-[var(--cs-color-accent)] hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--cs-color-border)]/60 bg-[var(--cs-color-bg)]/60 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)]" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[var(--cs-color-text-muted)]">
                        {item.category}
                      </span>
                    </div>
                    <div className="relative flex w-full items-center justify-center bg-[var(--cs-color-bg)] p-3 sm:p-4">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        sizes="33vw"
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
