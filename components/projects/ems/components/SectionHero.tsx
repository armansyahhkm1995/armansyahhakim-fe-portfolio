"use client";

import { motion } from "motion/react";

const METADATA = [
  ["Role", "Lead Systems & Product Designer"],
  ["Scope", "IoT Telemetry · Grid Control · Scheduling Engine · Spatial Modeling"],
  ["Platform", "Responsive Industrial Web Application"],
] as const;

const lines = [
  "Energy management system:",
  "Translating physical",
  "electrical flows into",
  "operational agency",
];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header & Title */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              Industrial IoT · Decentralized Energy Telemetry · Mission-Critical Operations
            </p>

            <h1 className="font-display text-[2.75rem] leading-[1.04] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
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
          <div className="flex flex-col gap-8">
            <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              In industrial facilities and high-voltage campuses, engineering teams historically
              relied on forensic utility bills and manual switchgear patrols. This case study details
              how we architected a real-time IoT energy management system—translating raw Modbus
              telemetry, asynchronous control handshakes, and spatial circuit modeling into operational
              agency.
            </p>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-8 lg:gap-12">
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

        {/* Hero video */}
        <figure className="mt-8 md:mt-12 lg:mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black">
            <video
              src="/videos/ems/ems_workflow_hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
            EMS Production Interface: Real-time energy telemetry stream, diurnal consumption comparison, and active room load indicators.
          </figcaption>
        </figure>

        {/* Executive Summary Card (At-a-Glance) */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center gap-2">
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
                Facility engineers were blind to intraday power anomalies. Monitoring required manual guard switchgear patrols, leaving high-draw circuits running unmonitored until surprise monthly utility bills.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                02 / The Mechanism
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Architected a full-stack IoT telemetry pipeline (Modbus RS485 meters → Edge Gateways → ThingsBoard MQTT) paired with a room-centric spatial interface and asynchronous stateful control handshakes.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                03 / The Impact
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Transformed facility operations from forensic billing analysis into live incident intervention. Enabled instant remote load shedding and automated off-peak scheduling across high-voltage campuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
