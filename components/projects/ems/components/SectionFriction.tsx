"use client";

import { motion } from "motion/react";

interface FrictionPoint {
  index: string;
  condition: string;
  consequence: string;
  mitigation: string;
}

const FRICTION_POINTS: FrictionPoint[] = [
  {
    index: "01",
    condition: "Location-dependent monitoring",
    consequence: "Anomalies, power spikes, and phase imbalances go unnoticed until high utility penalty bills arrive at month-end.",
    mitigation: "Continuous IoT Modbus polling with real-time threshold alarms and push notifications.",
  },
  {
    index: "02",
    condition: "Manual switchgear operations",
    consequence: "Requires security guards or technicians to physically walk factory floors to toggle heavy distribution boards.",
    mitigation: "Centralized remote relay switching backed by strict two-factor acknowledgment.",
  },
  {
    index: "03",
    condition: "Dangerous hardware latency (1–4s)",
    consequence: "Physical relays have mechanical lag. Flat UI switches that instantly flick state cause operator confusion and destructive double-clicking.",
    mitigation: "Stateful 3-stage visual handshakes: Commanded → Acknowledging Gateway → Verified Closed.",
  },
  {
    index: "04",
    condition: "Unstructured historical baselines",
    consequence: "Zero visibility into diurnal consumption curves, equipment degradation trends, or peak tariff overages.",
    mitigation: "Time-series database archiving with automated hourly, daily, and monthly comparative aggregation.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionFriction() {
  return (
    <section id="friction" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        {/* Section divider & label */}
        <div className="mb-12 flex flex-col items-start gap-2 border-b border-[var(--cs-color-border)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              02
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Industrial Friction
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Managing megawatts is not like managing SaaS. Every screen action commands physical high-voltage relays.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
            Before digital intervention, energy operations relied on manual meter logs and physical site walkthroughs. A modern industrial EMS must bridge physical electrical hardware and human cognitive limitations without introducing operational risk.
          </p>
        </div>

        {/* 4 Friction Points Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FRICTION_POINTS.map((item) => (
            <motion.div
              key={item.index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-[var(--cs-color-text-primary)]">
                  {item.condition}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                  {item.consequence}
                </p>
              </div>

              <div className="border-t border-[var(--cs-color-border)] pt-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                  Architectural Response:
                </span>
                <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-primary)] font-medium">
                  {item.mitigation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
