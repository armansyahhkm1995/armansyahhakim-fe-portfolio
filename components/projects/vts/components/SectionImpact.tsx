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
    value: "90%",
    label: "Authoring Cycle Reduction",
    detail: "From 6 weeks of dedicated Unity developer sprints to under 4 hours of visual script templating by everyday practitioners.",
  },
  {
    value: "0",
    label: "Lines of Code Required",
    detail: "Domain practitioners author complex multi-step 3D interactions with zero C# programming knowledge.",
  },
  {
    value: "100%",
    label: "3D Model Precision",
    detail: "High-density mechanical and equipment assemblies ingested without loss of geometric accuracy.",
  },
];

const REFLECTIONS: ReflectionItem[] = [
  {
    number: "01",
    title: "Simplification over emulation",
    description:
      "VTS does not attempt to reproduce the entire Unity or Blender game engine. By focusing strictly on practical 3D interaction workflows using script templates, we eliminated 80% of tool complexity and cognitive fatigue.",
  },
  {
    number: "02",
    title: "Familiarity as a design strategy",
    description:
      "Borrowing established 3D outliner and spatial gizmo conventions reduced the conceptual leap for practitioners, cutting initial onboarding from days to under 30 minutes.",
  },
  {
    number: "03",
    title: "Partitioning authoring from runtime evaluation",
    description:
      "Workbench provides focused visual script templating; the Interactive Player delivers distraction-free operation. Strictly partitioning these two environments preserved system stability and user focus.",
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
              Impact &amp; Systems Retrospective
            </span>
          </div>
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            VTS moved 3D simulation from complex engineering tickets into the hands of everyday users.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            By shifting from manual C# game development to an intuitive declarative authoring desktop suite, Falah Inovasi Teknologi democratized interactive 3D modeling for practitioners and non-technical teams.
          </p>
        </div>

        {/* Quantified Outcomes */}
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

        {/* Core Systems Reflections */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
            Three Core Systems Learnings
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
            href="/projects/falahOne"
            className="font-mono text-xs uppercase tracking-wider text-[var(--cs-color-text-secondary)] transition-colors hover:text-[var(--cs-color-text-primary)]"
          >
            ← Previous Project: Falah One (Design Architecture)
          </Link>

          <Link
            href="/projects/corteva"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cs-color-accent)] transition-colors hover:opacity-80"
          >
            <span>Next Project: Corteva (Enterprise AgTech)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
