"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "Lead Product & Systems Designer"],
  ["Company", "Falah Inovasi Teknologi"],
  ["Scope", "Authoring Studio · Runtime Player · CAD Ingestion"],
  ["Platform", "Desktop Studio Application · Unity 3D Engine"],
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
        "size-2 rounded-full",
        variant === "blue" ? "bg-blue-500" : "bg-emerald-500",
      ].join(" ")}
    />
  );
}

const lines = ["VTS Workbench &", "maintenance", "training"];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header & Title */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              3D AUTHORING PLATFORM · SIMULATION &amp; DEFENSE TRAINING · Q1 2026
            </p>

            <h1 className="font-display text-[2.75rem] leading-[0.95] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
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
          </header>

          {/* Description + metadata */}
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:gap-16">
            <p className="max-w-[760px] flex-1 font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              Democratizing interactive 3D training authoring: Turning steep Unity game engine
              engineering into an approachable scenario builder for aerospace and military
              maintenance instructors without writing a single line of code.
            </p>

            <dl className="grid shrink-0 grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:flex lg:gap-8">
              {METADATA.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5 max-w-[240px]">
                  <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--cs-color-text-muted)]">
                    {label}
                  </dt>
                  <dd className="font-sans text-xs font-medium text-[var(--cs-color-text-primary)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Executive Summary Card (At a Glance) */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
                EXECUTIVE SUMMARY
              </span>
              <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">· AT A GLANCE</span>
            </div>
            <span className="font-mono text-[11px] text-[var(--cs-color-text-muted)] hidden sm:inline">
              3D Authoring Architecture
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                01 / The Friction
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Aviation and defense maintenance instructors could not produce interactive 3D procedures without dedicated Unity programmers writing bespoke C# code, creating multi-month training backlogs.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                02 / The Mechanism
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Architected a decoupled dual-system desktop suite: VTS Workbench (zero-code FBX asset staging &amp; interaction checkboxes) and Maintenance Training Player (distraction-free procedural trainee evaluation).
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                03 / The Impact
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Slashed 3D scenario authoring time from 6 weeks of game engine programming down to under 4 hours of visual configuration by domain instructors, requiring zero lines of code.
              </p>
            </div>
          </div>
        </div>

        {/* System Overview: Twin System Views */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          {/* Figure Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--cs-color-border)] pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              Fig 01. — Dual-System Architecture: Authoring Workbench vs Runtime Simulation
            </span>

            <span className="w-fit rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] px-2.5 py-1 font-mono text-[10px] font-semibold text-[var(--cs-color-text-secondary)]">
              Desktop Suite v1.0
            </span>
          </div>

          {/* System Views */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SYSTEM_VIEWS.map((view) => (
              <figure
                key={view.title}
                className="flex flex-col justify-between gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4 sm:p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[var(--cs-color-border)] pb-3">
                  <figcaption className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                    {view.title}
                  </figcaption>

                  <div className="flex items-center gap-2">
                    <StatusIndicator variant={view.status} />
                    <span className="font-mono text-[10px] text-[var(--cs-color-text-muted)] uppercase">
                      {view.status === "blue" ? "Authoring Mode" : "Trainee Mode"}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[var(--cs-color-bg-secondary)] border border-[var(--cs-color-border)]">
                  <Image
                    src={view.image}
                    alt={view.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>

                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {view.description}
                </p>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}