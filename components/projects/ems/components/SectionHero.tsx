"use client";

import { motion } from "motion/react";
import Image from "next/image";

type ProjectMeta = {
  label: string;
  value: string;
};

type DataPathwayItem = {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

const PROJECT_META: ProjectMeta[] = [
  {
    label: "Role",
    value: "Lead Systems & Product Designer",
  },
  {
    label: "Scope",
    value: "IoT Telemetry · Grid Control · Scheduling Engine · Spatial Modeling",
  },
  {
    label: "Platform",
    value: "Responsive Industrial Web Application",
  },
  {
    label: "Infrastructure",
    value: "Modbus RS485 → Edge Gateway → ThingsBoard MQTT Broker",
  },
  {
    label: "Timeline",
    value: "6-Month Core Engagement",
  },
  {
    label: "Status",
    value: "Shipped Production Spec v1.0",
  },
];

const DATA_PATHWAY: DataPathwayItem[] = [
  {
    number: "01",
    title: "INFRASTRUCTURE",
    description: "Electrical Grid, 380V Switchboards & Relays",
  },
  {
    number: "02",
    title: "METERS",
    description: "Smart Modbus RS485 Power Sensors",
  },
  {
    number: "03",
    title: "GATEWAY",
    description: "Hardware Edge Concentrators",
  },
  {
    number: "04",
    title: "IoT BROKER",
    description: "ThingsBoard ingestion (MQTT / JSON)",
  },
  {
    number: "05",
    title: "EMS SUITE",
    description: "Real-Time Telemetry & Fail-Safe Control",
    highlighted: true,
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const lines = [
  "Energy management system:",
  "Translating physical",
  "electrical flows into",
  "operational agency",
];

export default function SectionHero() {
  return (
    <section id="overview" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* =========================================================
            HEADER TITLE & CATEGORY
        ========================================================= */}
        <header className="flex flex-col gap-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
            Industrial IoT · Decentralized Energy Telemetry · Mission-Critical Operations
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
        </header>

        {/* =========================================================
            EXECUTIVE SUMMARY CARD (AT A GLANCE)
        ========================================================= */}
        <div className="rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between border-b border-stone-200 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Executive Summary · At a Glance
            </span>
            <span className="font-mono text-[11px] text-stone-500">
              Mission-Critical Grid UI
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                01 / The Friction
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Facility engineers were blind to intraday power anomalies. Monitoring required manual guard switchgear patrols, leaving high-draw circuits running unmonitored until surprise monthly utility bills.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                02 / The Mechanism
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Architected a full-stack IoT telemetry pipeline (Modbus RS485 meters → Edge Gateways → ThingsBoard MQTT) paired with a room-centric spatial interface and asynchronous stateful control handshakes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-stone-500">
                03 / The Impact
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-800">
                Transformed facility operations from forensic billing analysis into live incident intervention. Enabled instant remote load shedding and automated off-peak scheduling across high-voltage campuses.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            PROJECT METADATA
        ========================================================= */}
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 border-y border-stone-300 py-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_META.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="font-[var(--cs-font-sans)] text-[10px] font-normal uppercase tracking-wide text-neutral-500">
                {item.label}
              </span>
              <span className="font-[var(--cs-font-sans)] text-xs font-medium leading-5 text-neutral-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================================
            COGNITIVE → DATA PATHWAY
        ========================================================= */}
        <figure className="flex w-full flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-5 sm:p-8 lg:p-10">
          <figcaption className="font-[var(--cs-font-sans)] text-xs font-normal text-stone-600">
            Fig 01. — END-TO-END TELEMETRY TO CONTROL PATHWAY (PHYSICAL ENDPOINT TO OPERATIONAL AGILITY)
          </figcaption>

          <div className="flex w-full gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-3 lg:overflow-visible lg:pb-0">
            {DATA_PATHWAY.map((item, index) => (
              <div key={item.number} className="flex shrink-0 items-center gap-3 lg:contents">
                <div
                  className={`flex min-h-28 w-40 flex-col justify-between gap-2 rounded-sm border p-4 ${
                    item.highlighted
                      ? "border-stone-800 bg-stone-900 text-white"
                      : "border-stone-300 bg-white"
                  }`}
                >
                  <span
                    className={`font-[var(--cs-font-sans)] text-xs font-bold ${
                      item.highlighted ? "text-white" : "text-stone-700"
                    }`}
                  >
                    {item.number} / {item.title}
                  </span>

                  <span
                    className={`font-[var(--cs-font-sans)] text-xs leading-5 ${
                      item.highlighted ? "text-white/80" : "text-neutral-600"
                    }`}
                  >
                    {item.description}
                  </span>
                </div>

                {index < DATA_PATHWAY.length - 1 && (
                  <div aria-hidden="true" className="h-px w-6 shrink-0 bg-neutral-400 lg:w-full" />
                )}
              </div>
            ))}
          </div>
        </figure>

        {/* =========================================================
            HERO VISUAL (ENERGY TIMELINE DASHBOARD)
        ========================================================= */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{ ...REVEAL_TRANSITION, delay: 0.2 }}
          className="mx-auto mt-4 w-full"
        >
          <div className="relative w-full overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm">
            <Image
              src="/images/ems/Dashboard - Energy Usage Timeline.webp"
              alt="EMS production dashboard showing real-time energy usage timeline, peak power metrics, and room consumption analytics"
              width={1440}
              height={820}
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-[var(--cs-font-sans)] text-xs text-stone-500">
            Fig 02. — EMS Production Interface: Real-time energy telemetry stream, diurnal consumption comparison, and active room load indicators.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
