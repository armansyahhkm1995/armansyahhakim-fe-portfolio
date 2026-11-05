"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface ReflectionLearning {
  number: string;
  title: string;
  description: string;
}

interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

const REFLECTION_LEARNINGS: ReflectionLearning[] = [
  {
    number: "01",
    title: "System understanding precedes interface design",
    description:
      "Creating modern UI cards is straightforward. Mapping those cards to dynamic Modbus meter topologies, gateway packet constraints, and ThingsBoard entities is where real enterprise value is unlocked.",
  },
  {
    number: "02",
    title: "Role boundaries create interface boundaries",
    description:
      "We discovered early that facility managers, daily security guards, and financial auditors operate in separate mental universes. The interface must adapt contextually to protect high-stakes hardware controls.",
  },
  {
    number: "03",
    title: "Acknowledge and design around hardware latency",
    description:
      "In industrial IoT, requested state ≠ actual physical state. When users toggle high-voltage relays, immediate optimistic UI confirms a lie that breeds operator panic. State machines must transparently reflect physical verification.",
  },
];

const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "100%",
    label: "Elimination of Manual Patrols",
    detail: "Guards and facility crew no longer walk miles across campuses to verify switchboard statuses.",
  },
  {
    value: "< 3s",
    label: "Incident Triage Velocity",
    detail: "Intraday power spikes and breaker trips are surfaced and localized immediately instead of weeks later.",
  },
  {
    value: "0",
    label: "Accidental Trip Incidents",
    detail: "Zero critical circuits inadvertently severed thanks to fail-safe confirmation modals and RBAC controls.",
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
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

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
          <span className="hidden font-mono text-xs text-[var(--cs-color-text-muted)] sm:block">
            Production Outcomes &amp; Systems Engineering
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            The system precedes the screen. Industrial design is disciplined engineering.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Designing enterprise industrial software requires checking pure aesthetic hubris at the door. You cannot build a dependable monitoring cockpit without mapping physical wiring diagrams and respecting the laws of electrical networks.
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

        {/* Systems Learnings */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
            Three Core Systems Learnings
          </span>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REFLECTION_LEARNINGS.map((learning) => (
              <div
                key={learning.number}
                className="flex flex-col gap-2 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5"
              >
                <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
                  {learning.number}
                </span>
                <h3 className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                  {learning.title}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {learning.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--cs-color-border)] pt-8">
          <Link
            href="/projects/amase"
            className="font-mono text-xs uppercase tracking-wider text-[var(--cs-color-text-secondary)] transition-colors hover:text-[var(--cs-color-text-primary)]"
          >
            ← Previous Project: AMASE (Public Sector)
          </Link>

          <Link
            href="/projects/falahOne"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cs-color-accent)] transition-colors hover:opacity-80"
          >
            <span>Next Project: Falah One (Design Architecture)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
