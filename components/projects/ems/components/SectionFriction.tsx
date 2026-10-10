"use client";

import { motion } from "motion/react";

interface FrictionPoint {
  index: string;
  condition: string;
  consequence: string;
  mitigation: string;
}

interface StakeholderRole {
  role: string;
  context: string;
  priority: string;
  failureRisk: string;
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

const STAKEHOLDER_ROLES: StakeholderRole[] = [
  {
    role: "Facility Lead Engineer",
    context: "Manages overall power stability, phase loads, and transformer health across campuses.",
    priority: "Granular telemetry: Voltage, Current, Active Power (kW), Power Factor, and anomaly triggers.",
    failureRisk: "Catastrophic transformer overload or costly peak-demand utility surcharges.",
  },
  {
    role: "On-Duty Facility Guard",
    context: "Conducts evening lock-downs and off-hour inspections across multi-building campuses.",
    priority: "Simple, foolproof zone controls: 'Turn off Level 2 Lighting' without wading through electrical jargon.",
    failureRisk: "Accidentally cutting power to critical servers or emergency life-safety systems.",
  },
  {
    role: "Energy & Finance Auditor",
    context: "Evaluates ESG compliance, monthly tariff costs, and department energy allocation.",
    priority: "Comparative charts, diurnal benchmarks, and clean PDF exports for regulatory reporting.",
    failureRisk: "Budget overruns without audit-trail accountability for departmental waste.",
  },
  {
    role: "IoT Infrastructure Admin",
    context: "Maintains hardware telemetry pipes, Modbus RS485 loops, and gateway concentrators.",
    priority: "Gateway heartbeat telemetry, dropped packet counters, and EUI device registration tools.",
    failureRisk: "Silent sensor disconnections causing undetected data blackouts.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionFriction() {
  return (
    <section id="friction" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              02
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Industrial Friction
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Physical Constraints & Operational Risk
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Managing megawatts is not like managing SaaS. Every screen action commands physical high-voltage relays.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
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
              className="flex flex-col justify-between gap-4 rounded-sm border border-stone-300 bg-white p-6"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold text-stone-400">
                  {item.index} / SYSTEM FRICTION
                </span>
                <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-stone-900">
                  {item.condition}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                  {item.consequence}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                  Architectural Response:
                </span>
                <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-stone-800">
                  {item.mitigation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Stakeholder Contexts Table */}
        <div className="flex flex-col gap-5 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Operational Mental Models Across the Grid
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Designing a single interface for four distinct operational roles required strict permission tiering and tailored density views.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {STAKEHOLDER_ROLES.map((role) => (
              <div
                key={role.role}
                className="flex flex-col justify-between gap-4 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {role.role}
                  </h4>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {role.context}
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-stone-100 pt-3">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase text-stone-500">
                      Primary Need
                    </span>
                    <p className="font-[var(--cs-font-sans)] text-xs text-stone-800">
                      {role.priority}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase text-red-600">
                      Operational Risk
                    </span>
                    <p className="font-[var(--cs-font-sans)] text-xs text-red-950">
                      {role.failureRisk}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
