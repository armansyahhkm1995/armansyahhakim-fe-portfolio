"use client";

import Image from "next/image";
import { motion } from "motion/react";

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const PROJECT_META = [
  {
    label: "Role",
    value: "Product Designer",
  },
  {
    label: "Company",
    value: "Falah Inovasi Teknologi",
  },
  {
    label: "Project",
    value: "VTS Workbench & Maintenance Training",
  },
  {
    label: "Started",
    value: "Q1 2026",
  },
  {
    label: "Status",
    value: "Production Spec v1.0",
  },
  {
    label: "Focus",
    value: "Desktop Application · 3D · Unity",
  },
] as const;

const SYSTEM_VIEWS = [
  {
    title: "VTS Workbench",
    status: "blue",
    image: "/images/vts/Workspace - normal screen - hierarchy - no script.webp",
    alt: "VTS Workbench interface placeholder",
    description: "Integrated 3D staging and logic configuration workspace.",
  },
  {
    title: "Maintenance Training Player",
    status: "green",
    image:
      "/images/vts/Simulation - fullscreen - outline & label state - outline & label active.webp",
    alt: "Maintenance Training Player interface placeholder",
    description: "Operator runtime with automated procedure step validation.",
  },
] as const;

function StatusIndicator({ variant }: { variant: "blue" | "green" }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "size-2 rounded-sm",
        variant === "blue" ? "bg-blue-600" : "bg-emerald-500",
      ].join(" ")}
    />
  );
}

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] pb-16 pt-10 sm:pb-20 md:pb-24"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="flex flex-col gap-4"
        >
          <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
            PRODUCT DESIGN CASE STUDY · FALAH INOVASI TEKNOLOGI · 2026
          </span>

          <h1 className="max-w-[1100px] font-[var(--cs-font-serif)] text-5xl font-normal leading-[0.98] text-[var(--cs-color-text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
            VTS WORKBENCH &<br className="hidden sm:block" /> MAINTENANCE
            TRAINING
          </h1>

          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-lg font-normal leading-8 text-[var(--cs-color-text-secondary)] sm:text-xl">
            Designing a simplified 3D authoring workflow for creating and
            operating interactive training content.
          </p>
        </motion.div>

        {/* Project Metadata */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="grid grid-cols-1 border-t border-[var(--cs-color-border)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {PROJECT_META.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 border-b border-[var(--cs-color-border)] py-4 sm:px-4 sm:first:pl-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-5 lg:px-4"
            >
              <span className="font-[var(--cs-font-mono)] text-[10px] font-normal uppercase text-[var(--cs-color-text-muted)]">
                {item.label}
              </span>

              <span className="font-[var(--cs-font-sans)] text-xs font-medium leading-5 text-[var(--cs-color-text-primary)]">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* System Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="flex flex-col gap-6 rounded-lg border border-[var(--cs-color-border)] bg-stone-50 p-5 sm:p-8 md:p-10"
        >
          {/* Figure Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-secondary)]">
              FIG. 01 — SYSTEM OVERVIEW & INTERFACE COHESION
            </span>

            <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
              AUTHORING + RUNTIME
            </span>
          </div>

          {/* System Views */}
          <div className="flex flex-col gap-6">
            {SYSTEM_VIEWS.map((view) => (
              <figure
                key={view.title}
                className="flex flex-col gap-4 rounded-md border border-[var(--cs-color-border)] bg-white p-4 sm:p-5"
              >
                {/* Product Header */}
                <div className="flex items-center justify-between gap-4">
                  <figcaption className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                    {view.title}
                  </figcaption>

                  <StatusIndicator variant={view.status} />
                </div>

                {/* Product Screenshot */}
                <div className="relative aspect-[1160/766] w-full overflow-hidden rounded-sm bg-stone-100">
                  <Image
                    src={view.image}
                    alt={view.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1160px"
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <p className="font-[var(--cs-font-sans)] text-xs font-normal leading-5 text-[var(--cs-color-text-secondary)]">
                  {view.description}
                </p>
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
