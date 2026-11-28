"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "Lead Product & Systems Designer"],
  ["Company", "Falah Inovasi Teknologi"],
  ["Scope", "Authoring Studio · Runtime Player · 3D Interaction Templates"],
  ["Platform", "Desktop Studio Application · Unity 3D Engine"],
] as const;

const SYSTEM_VIEWS = [
  {
    title: "VTS Workbench (Authoring Studio)",
    status: "blue",
    video: "/videos/vts/vts_workbench_hero.mp4",
    image: "/images/vts/Workspace - normal screen - hierarchy - no script.webp",
    alt: "VTS Workbench interface showing 3D hierarchy, viewport, and visual script configuration",
    description: "Visual 3D staging, asset hierarchy management, and zero-code script template configuration for anyone.",
  },
  {
    title: "Interactive 3D Simulation Player (Runtime)",
    status: "green",
    video: "/videos/vts/vts_training_hero.mp4",
    image:
      "/images/vts/Simulation - fullscreen - outline & label state - outline & label active.webp",
    alt: "Interactive 3D Player interface showing full-screen 3D model inspection and procedural steps",
    description: "Distraction-free runtime with spatial camera controls, emission outlines, and automated step verification for interactive 3D model inspection.",
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

const lines = ["Democratizing Unity 3D", "via visual script", "templates."];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header & Title */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              3D AUTHORING PLATFORM · INTERACTIVE 3D SIMULATION · Q1 2026
            </p>

            <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-1 sm:pb-2">
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

          {/* Description + metadata (repositioned below paragraph) */}
          <div className="flex flex-col gap-6">
            <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              Democratizing interactive 3D model interaction: Turning complex Unity game engine
              engineering into an intuitive visual scenario builder so anyone can test, author,
              and interact with 3D models using script templates without writing code.
            </p>

            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--cs-color-border)] pt-6 sm:grid-cols-4 lg:gap-12">
              {METADATA.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5">
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

        {/* Executive Summary Card */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              EXECUTIVE SUMMARY
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                01 / The Friction
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Domain instructors and non-technical practitioners could not produce interactive 3D procedures without dedicated Unity programmers writing bespoke C# code, creating lengthy production backlogs.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                02 / The Mechanism
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Architected a decoupled dual-system desktop suite: VTS Workbench (zero-code 3D asset staging &amp; visual script templates) and Interactive 3D Player (distraction-free procedural evaluation).
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                03 / The Impact
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Slashed 3D interaction authoring from weeks of game engine programming down to under 4 hours of visual script configuration by everyday practitioners, requiring zero lines of code.
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
          </div>

          {/* System Views */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SYSTEM_VIEWS.map((view) => (
              <figure
                key={view.title}
                className="flex flex-col gap-3 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4 shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[var(--cs-color-bg-secondary)] border border-[var(--cs-color-border)]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={view.image}
                    className="h-full w-full object-cover"
                  >
                    <source src={view.video} type="video/mp4" />
                    <Image
                      src={view.image}
                      alt={view.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </video>
                </div>

                <figcaption className="flex flex-col gap-1 border-t border-[var(--cs-color-border)] pt-3">
                  <div className="flex items-center gap-2">
                    <StatusIndicator variant={view.status} />
                    <span className="font-sans text-xs font-bold text-[var(--cs-color-text-primary)]">
                      {view.title}
                    </span>
                  </div>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {view.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
