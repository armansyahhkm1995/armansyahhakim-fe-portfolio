"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ComponentCard {
  number: string;
  squad: string;
  title: string;
  runtime: string;
  description: string;
  designTokenIntegration: string[];
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SharedPrimitive {
  src: string;
  alt: string;
  label: string;
  description: string;
}

const SQUAD_COMPONENTS: ComponentCard[] = [
  {
    number: "01",
    squad: "WEB DEVELOPER SQUAD",
    title: "Enterprise Data Table & Telemetry Cockpit Suite",
    runtime: "Next.js · React · Tailwind CSS · Enterprise Web & SaaS",
    description:
      "A high-density operational telemetry and tabular management suite deployed across Falah's web applications and IoT cockpits. Features 10 standardized states (Sorting, Filtering, Selection, Pagination, Loading, Dense) adhering to strict spatial constraints.",
    designTokenIntegration: [
      "Strict 8px spatial grid enforcing vertical rhythm and consistent cell height across massive telemetry data tables.",
      "Semantic status color tokens (active, warning, critical) meeting WCAG AA 4.5:1 contrast across dark and light themes.",
      "Deterministic Tailwind CSS utility classes compiled directly from central design tokens for rapid web development velocity.",
    ],
    src: "/images/falahOne/data-table.webp",
    alt: "Falah One Data Table component in Figma with sorting and pagination",
    width: 960,
    height: 480,
  },
  {
    number: "02",
    squad: "UNITY DEVELOPER SQUAD",
    title: "XR Spatial Interaction & Volumetric Component Suite",
    runtime: "Unity 3D Engine · C# ScriptableObjects · OpenXR Stereoscopic UI",
    description:
      "Volumetric user interface primitives built for stereoscopic VR headsets, defense simulation cockpits, and 3D equipment maintenance suites. Directly standardizes 32x32mm/48x48mm spatial buttons, world-space spline tooltips, and proximity touch interactions.",
    designTokenIntegration: [
      "Physical 32mm and 48mm touch targets mapped to laser-pointer raycasts and hand-tracking depth sensors.",
      "Minimum 28 dmm angular typography sizing and high-contrast HUD palettes preventing pixel shimmer in VR Fresnel lenses.",
      "Spatial depth elevation tokens defining layer separation in world-space volume without texture degradation.",
    ],
    src: "/images/falahOne/unity-xr-touch.webp",
    alt: "Falah One XR Spatial Interaction Touch and Hand Tracking Component in Figma",
    width: 1200,
    height: 675,
  },
  {
    number: "03",
    squad: "CONTENT DEVELOPER SQUAD",
    title: "Multi-Variant Content Cards & Dynamic Presentation Suite",
    runtime: "Next.js SSR · Marketing CMS · Social Graphic Templates",
    description:
      "High-conversion editorial and brand components engineered for Falah corporate landing pages, company profiles (compro), and social media publication templates. Standardizes 5 content card variants (image headers, review cards, horizontal promo cards) and interactive carousels.",
    designTokenIntegration: [
      "Responsive aspect ratio tokens (16:9, 4:3, 1:1) maintaining visual balance across desktop landing pages and mobile social feeds.",
      "Centralized brand color palettes and typography scales preventing rogue shadow styles in marketing collateral.",
      "Reusable card and carousel abstractions enabling rapid deployment of new company profiles and campaign pages.",
    ],
    src: "/images/falahOne/content-cards.webp",
    alt: "Falah One Content Cards component library in Figma",
    width: 1600,
    height: 328,
  },
];

const SHARED_PRIMITIVES: SharedPrimitive[] = [
  {
    src: "/images/falahOne/web-meeting-control.webp",
    alt: "Falah One Meeting Room Control component toolbar in Figma",
    label: "Meeting Room Control Toolbar",
    description: "Multi-state collaboration toolbar (mic, camera, screen share, raise hand) built on shadcn and Tailwind metrics.",
  },
  {
    src: "/images/falahOne/shared-talking-indicator.webp",
    alt: "Falah One Talking Indicator voice pulse component in Figma",
    label: "Real-Time Voice Talking Indicator",
    description: "Active speaking pulse and idle states synchronized across web dashboards and VR multiplayer sessions.",
  },
  {
    src: "/images/falahOne/web-chart.webp",
    alt: "Falah One Interactive Area Chart component in Figma",
    label: "Interactive Telemetry Area Chart",
    description: "Diurnal curve data visualization with responsive tooltips and Lucide icon telemetry tokens.",
  },
  {
    src: "/images/falahOne/unity-xr-hand-tracking.webp",
    alt: "Falah One XR Hand Tracking Target with Hands component in Figma",
    label: "Spatial Hand-Tracking Target Anchor",
    description: "Ergonomic target anchor and collision bounds designed for world-space XR hand tracking.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionOutput() {
  return (
    <section id="output" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-10 sm:gap-12">
        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              04
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Cross-Platform Application Showcase
            </span>
          </div>
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            One design language powering Web SaaS cockpits, Unity 3D/XR simulations, and marketing content.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Falah One was validated by deploying its compiled tokens and component architecture directly from the 2026-FIT-Design-System library across three specialized engineering squads operating on completely distinct runtime environments.
          </p>
        </div>

        {/* 3 Squads Component Showcase */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {SQUAD_COMPONENTS.map((comp) => (
            <motion.article
              key={comp.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-4 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col gap-2 border-b border-[var(--cs-color-border)] pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--cs-color-text-muted)]">
                    {comp.squad} · COMPONENT {comp.number}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--cs-color-accent)]">
                    Figma Validated
                  </span>
                </div>
                <h3 className="font-[var(--cs-font-sans)] text-xl font-bold text-[var(--cs-color-text-primary)] sm:text-2xl">
                  {comp.title}
                </h3>
                <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">
                  {comp.runtime}
                </span>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-sm">
                  {comp.description}
                </p>
              </div>

              {/* Component Screenshot from Figma */}
              <div className="relative w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 shadow-sm sm:p-4">
                <Image
                  src={comp.src}
                  alt={comp.alt}
                  width={comp.width}
                  height={comp.height}
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>

              {/* Design Token Integration Highlights */}
              <div className="flex flex-col gap-3 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4 sm:p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                  Falah One Token Integration in Production:
                </span>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  {comp.designTokenIntegration.map((spec, idx) => (
                    <li
                      key={idx}
                      className="rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-3 font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]"
                    >
                      <strong className="block font-mono text-[10px] text-[var(--cs-color-text-muted)]">
                        INTEGRATION PRINCIPLE 0{idx + 1}
                      </strong>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Cross-Squad Shared Primitives */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              Cross-Squad Shared Primitives: Collaboration &amp; Telemetry
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
              Multi-platform component primitives synchronized between Figma, Tailwind React web portals, and Unity 3D world-space canvases.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHARED_PRIMITIVES.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-between gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4"
              >
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-[var(--cs-color-bg-secondary)] p-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="h-auto max-h-full w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1 border-t border-[var(--cs-color-border)] pt-2">
                  <p className="font-mono text-[11px] font-medium text-[var(--cs-color-text-primary)]">
                    {item.label}
                  </p>
                  <p className="font-[var(--cs-font-sans)] text-[11px] leading-relaxed text-[var(--cs-color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
