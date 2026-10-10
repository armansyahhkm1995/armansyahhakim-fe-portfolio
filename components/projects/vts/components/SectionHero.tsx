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
    value: "Lead Product & Systems Designer",
  },
  {
    label: "Company",
    value: "Falah Inovasi Teknologi",
  },
  {
    label: "Product Suite",
    value: "VTS Workbench (Authoring) · Maintenance Player (Runtime)",
  },
  {
    label: "Timeline",
    value: "Q1 2026 Core Release",
  },
  {
    label: "Status",
    value: "Shipped Production Spec v1.0",
  },
  {
    label: "Platform",
    value: "Desktop Studio Application · Unity 3D Engine",
  },
] as const;

const SYSTEM_VIEWS = [
  {
    title: "VTS Workbench (Authoring Studio)",
    status: "blue",
    image: "/images/vts/Workspace - normal screen - hierarchy - no script.webp",
    alt: "VTS Workbench interface showing 3D hierarchy, viewport, and visual script configuration",
    description: "Visual 3D staging, asset hierarchy management, and zero-code interaction logic configuration.",
  },
  {
    title: "Maintenance Training Player (Runtime Simulation)",
    status: "green",
    image:
      "/images/vts/Simulation - fullscreen - outline & label state - outline & label active.webp",
    alt: "Maintenance Training Player interface showing full-screen 3D aircraft inspection and procedural steps",
    description: "Distraction-free trainee runtime with spatial camera controls, emission outlines, and automated step verification.",
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

const lines = ["VTS Workbench &", "maintenance", "training"];

export default function SectionHero() {
  return (
    <section id="overview" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Intro */}
        <header className="flex flex-col gap-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
            3D AUTHORING PLATFORM · SIMULATION &amp; DEFENSE TRAINING · Q1 2026
          </p>

          <h1 className="font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]">
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-lg font-normal leading-8 text-[var(--cs-color-text-secondary)] sm:text-xl">
            Democratizing interactive 3D training authoring: Turning steep Unity game engine engineering into an approachable scenario builder for maintenance instructors.
          </p>
        </header>

        {/* Executive Summary Card (At A Glance) */}
        <div className="rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between border-b border-stone-200 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Executive Summary · At a Glance
            </span>
            <span className="font-mono text-[11px] text-stone-500">
              3D Authoring Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                01 / The Friction
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Aviation and defense maintenance instructors could not produce interactive 3D procedures without dedicated Unity programmers writing bespoke C# code, creating multi-month training backlogs.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                02 / The Mechanism
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Architected a decoupled dual-system desktop suite: VTS Workbench (zero-code FBX asset staging &amp; interaction checkboxes) and Maintenance Training Player (distraction-free procedural trainee evaluation).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                03 / The Impact
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Slashed 3D scenario authoring time from 6 weeks of game engine programming down to under 4 hours of visual configuration by domain instructors, requiring zero lines of code.
              </p>
            </div>
          </div>
        </div>

        {/* Project Metadata */}
        <div className="grid grid-cols-1 border-t border-[var(--cs-color-border)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
        </div>

        {/* System Overview: Twin System Views */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-5 sm:p-8 md:p-10"
        >
          {/* Figure Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-[var(--cs-font-mono)] text-xs font-bold text-stone-900">
              FIG. 01 — DUAL-SYSTEM ARCHITECTURE: AUTHORING WORKBENCH VS RUNTIME SIMULATION
            </span>

            <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-700">
              DESKTOP SUITE v1.0
            </span>
          </div>

          {/* System Views */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SYSTEM_VIEWS.map((view) => (
              <figure
                key={view.title}
                className="flex flex-col justify-between gap-4 rounded-sm border border-stone-300 bg-white p-4 sm:p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-3">
                  <figcaption className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {view.title}
                  </figcaption>

                  <div className="flex items-center gap-2">
                    <StatusIndicator variant={view.status} />
                    <span className="font-mono text-[10px] text-stone-500 uppercase">
                      {view.status === "blue" ? "Authoring Mode" : "Trainee Mode"}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-100 border border-stone-200">
                  <Image
                    src={view.image}
                    alt={view.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>

                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
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
