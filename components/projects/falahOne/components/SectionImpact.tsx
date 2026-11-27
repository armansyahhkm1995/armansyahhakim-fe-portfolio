"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface MetricCard {
  value: string;
  label: string;
  detail: string;
}

interface ReflectionItem {
  number: string;
  title: string;
  description: string;
}

const IMPACT_METRICS: MetricCard[] = [
  {
    value: "65%",
    label: "Faster UI Delivery Velocity",
    detail: "New interface modules across web, Unity, and content ship in days instead of multi-week custom asset sprints.",
  },
  {
    value: "3",
    label: "Squad Ecosystems Unified",
    detail: "Web (web/mobile/SaaS), Unity (VR/AR/simulations), and Content (landing/compro/social) now draw from a single synchronized token architecture.",
  },
  {
    value: "100%",
    label: "WCAG AA Contrast Compliance",
    detail: "Eliminated eye strain in dark industrial telemetry cockpits and Fresnel-lens VR environments.",
  },
];

const REFLECTIONS: ReflectionItem[] = [
  {
    number: "01",
    title: "A design system is a shared contract, not a Figma stamp",
    description:
      "A UI library that lives only in Figma is just a drawing. True systemic leverage occurs when token changes compile deterministically into production Tailwind presets and Unity C# ScriptableObjects.",
  },
  {
    number: "02",
    title: "Embrace platform-native physics instead of forcing uniformity",
    description:
      "Attempting to force DOM flexbox rules into stereoscopic 3D space produces broken VR interactions. Multi-platform systems succeed by sharing mathematical tokens while respecting platform-native interaction ergonomics.",
  },
  {
    number: "03",
    title: "Participatory governance prevents shadow libraries",
    description:
      "When design system teams act like policing gatekeepers, squads create shadow components in secret. A lightweight RFC process encourages squads to contribute specialized primitives back to core.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionImpact() {
  return (
    <section id="impact" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              05
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Impact &amp; Retrospective
            </span>
          </div>
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            A design system succeeds when squads stop debating pixels and start shipping outcomes.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            By shifting from ad-hoc component recreation to an automated multi-platform token pipeline, Falah Inovasi Teknologi transformed cross-team delivery from a source of friction into a competitive velocity multiplier.
          </p>
        </div>

        {/* Quantified Impact Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {IMPACT_METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-2 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8"
            >
              <span className="font-mono text-3xl font-bold text-[var(--cs-color-text-primary)] sm:text-4xl">
                {metric.value}
              </span>
              <span className="font-mono text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
                {metric.label}
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-muted)]">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 Core Systems Reflections */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
            Three Architectural Principles for Multi-Platform Systems
          </span>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REFLECTIONS.map((item) => (
              <div
                key={item.number}
                className="flex flex-col gap-2 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5"
              >
                <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
                  {item.number}
                </span>
                <h3 className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                  {item.title}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--cs-color-border)] pt-8">
          <Link
            href="/projects/ems"
            className="font-mono text-xs uppercase tracking-wider text-[var(--cs-color-text-secondary)] transition-colors hover:text-[var(--cs-color-text-primary)]"
          >
            ← Previous Project: EMS (Industrial IoT)
          </Link>

          <Link
            href="/projects/vts"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cs-color-accent)] transition-colors hover:opacity-80"
          >
            <span>Next Project: VTS (3D Simulation)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}