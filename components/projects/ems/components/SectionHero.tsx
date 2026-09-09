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

type MetricCard = {
  type: "energy" | "gateway" | "device";
  title: string;
  value: string;
  unit: string;
  status?: {
    online: string;
    offline: string;
  };
  change?: string;
};

type TimelinePoint = {
  time: string;
  value: number;
};

type TimelineRange = {
  label: string;
  active?: boolean;
};

const PROJECT_META: ProjectMeta[] = [
  {
    label: "Role",
    value: "UX/UI Designer & Systems Researcher",
  },
  {
    label: "Product Scope",
    value: "Monitoring · Control · Scheduling · Analytics · Reporting",
  },
  {
    label: "Platform",
    value: "Responsive Enterprise Web",
  },
  {
    label: "Location",
    value: "Distributed Deployment Model",
  },
  {
    label: "Timeline",
    value: "Q1 2026 Investigation",
  },
  {
    label: "Status",
    value: "Production Spec v1.0",
  },
];

const DATA_PATHWAY: DataPathwayItem[] = [
  {
    number: "01",
    title: "INFRASTRUCTURE",
    description: "Electrical Grid & Building Circuits",
  },
  {
    number: "02",
    title: "METERS",
    description: "Smart KWh Sensors (RS485/Modbus)",
  },
  {
    number: "03",
    title: "GATEWAY",
    description: "Hardware Edge Concentrator",
  },
  {
    number: "04",
    title: "IoT LAYER",
    description: "ThingsBoard ingestion (MQTT/JSON)",
  },
  {
    number: "05",
    title: "EMS INTERFACE",
    description: "Centralized Monitoring & Rules",
    highlighted: true,
  },
];

const METRICS: MetricCard[] = [
  {
    type: "energy",
    title: "Energy usage",
    value: "1,284.6",
    unit: "kWh",
    change: "+4.2% from yesterday",
  },
  {
    type: "gateway",
    title: "Gateway(s)",
    value: "6",
    unit: "Total",
    status: {
      online: "5 Online",
      offline: "1 Offline",
    },
  },
  {
    type: "device",
    title: "Device(s)",
    value: "48",
    unit: "Total",
    status: {
      online: "46 Online",
      offline: "2 Offline",
    },
  },
];

const DASHBOARD_TABS = [
  "Energy Usage Timeline",
  "Top 5 Risky Rooms",
  "Active Schedules",
] as const;

const TIMELINE_RANGES: TimelineRange[] = [
  {
    label: "Today",
    active: true,
  },
  {
    label: "Last week",
  },
  {
    label: "Last month",
  },
  {
    label: "Last year",
  },
];

const TIMELINE_POINTS: TimelinePoint[] = [
  { time: "00.00", value: 13 },
  { time: "01.00", value: 14 },
  { time: "02.00", value: 15 },
  { time: "03.00", value: 16 },
  { time: "04.00", value: 14 },
  { time: "05.00", value: 12 },
  { time: "06.00", value: 8 },
  { time: "07.00", value: 4 },
  { time: "08.00", value: 5 },
  { time: "09.00", value: 9 },
  { time: "10.00", value: 12 },
  { time: "11.00", value: 13 },
  { time: "12.00", value: 12 },
];

const TIMELINE_SCALE = [25, 20, 15, 10, 5, 1];

const REVEAL_VARIANTS = {
  hidden: {
    y: 32,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
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

export default function SectionContext() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-28">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-12
        "
      >
        {/* =========================================================
            CONTEXT INTRO
        ========================================================= */}

        <header className="flex flex-col gap-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
            Enterprise Industrial IoT · Decentralized Energy Management · 2026
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
            PROJECT METADATA
        ========================================================= */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-x-8
            gap-y-6
            border-y
            border-stone-300
            py-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {PROJECT_META.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span
                className="
                  font-[var(--cs-font-sans)]
                  text-[10px]
                  font-normal
                  uppercase
                  tracking-wide
                  text-neutral-500
                "
              >
                {item.label}
              </span>

              <span
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-medium
                  leading-5
                  text-neutral-900
                "
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================================
            COGNITIVE → DATA PATHWAY
        ========================================================= */}

        <figure
          className="
            flex
            w-full
            flex-col
            gap-6
            rounded-sm
            border
            border-stone-300
            bg-stone-50
            p-5
            sm:p-8
            lg:p-10
          "
        >
          <figcaption
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-stone-600
            "
          >
            Fig 01. — COGNITIVE TO DATA PATHWAY (ELECTRICAL ENDPOINT TO USER
            DECISION)
          </figcaption>

          <div
            className="
              flex
              w-full
              gap-3
              overflow-x-auto
              pb-2
              lg:grid
              lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]
              lg:items-center
              lg:gap-3
              lg:overflow-visible
              lg:pb-0
            "
          >
            {DATA_PATHWAY.map((item, index) => (
              <div
                key={item.number}
                className="flex shrink-0 items-center gap-3 lg:contents"
              >
                <div
                  className={`
                    flex
                    min-h-28
                    w-40
                    flex-col
                    justify-between
                    gap-2
                    rounded-sm
                    border
                    p-4
                    ${
                      item.highlighted
                        ? "border-stone-600 bg-stone-600 text-white"
                        : "border-stone-300 bg-white"
                    }
                  `}
                >
                  <span
                    className={`
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      ${item.highlighted ? "text-white" : "text-stone-600"}
                    `}
                  >
                    {item.number} / {item.title}
                  </span>

                  <span
                    className={`
                      font-[var(--cs-font-sans)]
                      text-xs
                      leading-5
                      ${item.highlighted ? "text-white/80" : "text-neutral-600"}
                    `}
                  >
                    {item.description}
                  </span>
                </div>

                {index < DATA_PATHWAY.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="
                      h-px
                      w-6
                      shrink-0
                      bg-neutral-400
                      lg:w-full
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </figure>
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="mx-auto mt-8 w-full px-6 md:mt-12 lg:mt-16"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/ems/Dashboard - Energy Usage Timeline.webp"
              alt="Corteva team and farmer during the agricultural field experience in Karawang"
              width={1440}
              height={820}
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="h-auto w-full"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
