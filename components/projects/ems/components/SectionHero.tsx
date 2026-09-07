"use client";

import { motion } from "motion/react";

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

export default function SectionContext() {
  return (
    <section
      id="ems-context"
      aria-labelledby="ems-context-title"
      className="
        w-full
        bg-[var(--cs-color-bg)]
        px-[var(--cs-content-padding)]
        py-[var(--cs-section-padding)]
      "
    >
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

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="flex flex-col gap-4"
        >
          <p
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-stone-600
            "
          >
            Enterprise Industrial IoT · Decentralized Energy Management · 2026
          </p>

          <h2
            id="ems-context-title"
            className="
              max-w-5xl
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.05]
              tracking-tight
              text-neutral-900
              sm:text-5xl
              lg:text-7xl
            "
          >
            ENERGY MANAGEMENT SYSTEM:
            <br />
            TRANSLATING PHYSICAL ELECTRICAL FLOWS INTO OPERATIONAL AGENCY.
          </h2>

          <p
            className="
              max-w-3xl
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-7
              text-neutral-600
              sm:text-lg
              sm:leading-8
            "
          >
            Investigating how a digital system can turn distributed, chaotic
            electrical readings from smart meters into actionable, centralized
            context for facility operators managing modern buildings.
          </p>
        </motion.header>

        {/* =========================================================
            PROJECT METADATA
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
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
        </motion.div>

        {/* =========================================================
            COGNITIVE → DATA PATHWAY
        ========================================================= */}

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
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
        </motion.figure>

        {/* =========================================================
            EMS DASHBOARD SHOWCASE
        ========================================================= */}

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="
            w-full
            overflow-hidden
            rounded-sm
            border
            border-stone-300
            bg-white
          "
        >
          {/* =======================================================
              DASHBOARD SHELL
          ======================================================= */}

          <div className="flex min-h-[700px] w-full bg-slate-50">
            {/* =====================================================
                SIDEBAR
            ===================================================== */}

            <aside
              className="
                hidden
                w-64
                shrink-0
                flex-col
                justify-between
                border-r
                border-emerald-200
                bg-white
                p-2
                lg:flex
              "
            >
              <div className="flex flex-col gap-2">
                {/* Brand */}

                <div className="p-2">
                  <div className="flex flex-col gap-2 p-2">
                    <div
                      className="
                        flex
                        size-8
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-emerald-500
                      "
                      aria-hidden="true"
                    >
                      <span className="text-sm text-white">⚡</span>
                    </div>

                    <div className="flex flex-col">
                      <span
                        className="
                          font-[var(--cs-font-sans)]
                          text-2xl
                          font-semibold
                          leading-8
                          text-emerald-500
                        "
                      >
                        EMS
                      </span>

                      <span
                        className="
                          font-[var(--cs-font-sans)]
                          text-xs
                          leading-4
                          text-slate-600
                        "
                      >
                        Energy management system
                      </span>
                    </div>
                  </div>
                </div>

                {/* Platform management */}

                <div className="flex flex-col gap-1 p-2">
                  <span
                    className="
                      px-2
                      py-2
                      text-xs
                      text-slate-600
                    "
                  >
                    Platform management
                  </span>

                  <div className="flex flex-col gap-1">
                    <div
                      className="
                        flex
                        h-8
                        items-center
                        gap-2
                        rounded-lg
                        bg-emerald-500
                        px-2
                      "
                    >
                      <span className="text-white">▦</span>

                      <span
                        className="
                          flex-1
                          truncate
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        Dashboard
                      </span>

                      <span className="text-xs text-white">⌄</span>
                    </div>

                    <div
                      className="
                        flex
                        h-8
                        items-center
                        gap-2
                        rounded-lg
                        bg-emerald-100
                        px-2
                      "
                    >
                      <span>＋</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Schedule
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>

                    <div
                      className="
                        flex
                        h-8
                        items-center
                        gap-2
                        rounded-lg
                        px-2
                      "
                    >
                      <span>⌖</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Rooms
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>
                  </div>
                </div>

                {/* Installation management */}

                <div className="flex flex-col gap-1 p-2">
                  <span className="px-2 py-2 text-xs text-slate-600">
                    Installation management
                  </span>

                  <div className="flex flex-col gap-1">
                    <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                      <span>⌁</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Gateway
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>

                    <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                      <span>▣</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Device
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>
                  </div>
                </div>

                {/* User management */}

                <div className="flex flex-col gap-1 p-2">
                  <span className="px-2 py-2 text-xs text-slate-600">
                    User management
                  </span>

                  <div className="flex flex-col gap-1">
                    <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                      <span>♙</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        User
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>

                    <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                      <span>♧</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Role
                      </span>

                      <span className="text-xs text-slate-950">⌄</span>
                    </div>
                  </div>
                </div>

                {/* Report management */}

                <div className="flex flex-col gap-1 p-2">
                  <span className="px-2 py-2 text-xs text-slate-600">
                    Report management
                  </span>

                  <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                    <span>▤</span>

                    <span className="flex-1 truncate text-sm text-slate-950">
                      Report
                    </span>

                    <span className="text-xs text-slate-950">⌄</span>
                  </div>
                </div>
              </div>

              {/* Logout */}

              <div className="p-2">
                <div className="flex h-8 items-center gap-2 rounded-lg px-2">
                  <span className="text-red-700">↪</span>

                  <span className="text-sm text-red-700">Log out</span>
                </div>
              </div>
            </aside>

            {/* =====================================================
                MAIN DASHBOARD
            ===================================================== */}

            <div className="flex min-w-0 flex-1 flex-col">
              {/* Top bar */}

              <header
                className="
                  flex
                  h-16
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-blue-100
                  bg-white
                  px-4
                  sm:px-8
                "
              >
                <div className="flex items-center gap-3">
                  <div className="h-4 w-2 rounded-r-md bg-emerald-500" />

                  <div className="hidden size-4 rounded-[5px] border border-emerald-500 sm:block" />

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-500">EMS</span>

                    <span className="text-slate-950">›</span>

                    <span className="text-xs font-semibold text-emerald-500">
                      Dashboard
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative text-lg">
                    <span aria-hidden="true">♧</span>

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        size-2
                        rounded-full
                        bg-red-500
                      "
                    />
                  </div>

                  <div className="h-8 w-px bg-slate-300" />

                  <div className="hidden items-center gap-2 sm:flex">
                    <div className="size-10 rounded-lg bg-slate-200" />

                    <div className="flex flex-col">
                      <span className="text-sm text-emerald-500">
                        Administrator
                      </span>

                      <span className="text-xs text-slate-600">
                        administrator@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Dashboard content */}

              <main
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  gap-6
                  overflow-hidden
                  p-4
                  sm:p-6
                  lg:p-8
                "
              >
                {/* Dashboard heading */}

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                  "
                >
                  <div className="flex flex-col gap-1">
                    <h3
                      className="
                        font-[var(--cs-font-sans)]
                        text-3xl
                        font-bold
                        leading-10
                        text-emerald-500
                      "
                    >
                      Dashboard
                    </h3>

                    <p className="text-sm text-slate-600">
                      Monitor energy usage and system status across your
                      facility.
                    </p>
                  </div>

                  <div className="flex w-full gap-2 sm:w-auto">
                    <div
                      className="
                        flex
                        h-8
                        min-w-0
                        flex-1
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-400
                        bg-white
                        px-3
                        sm:w-64
                        sm:flex-none
                      "
                    >
                      <span className="text-slate-500">⌕</span>

                      <span className="flex-1 truncate text-sm text-slate-950">
                        Ruang pimpinan
                      </span>

                      <span className="text-red-700">×</span>
                    </div>

                    <button
                      type="button"
                      aria-label="Filter by date"
                      className="
                        flex
                        h-8
                        size-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-400
                        bg-white
                        text-slate-950
                      "
                    >
                      ◫
                    </button>
                  </div>
                </div>

                {/* Metrics */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-3
                  "
                >
                  {METRICS.map((metric) => (
                    <article
                      key={metric.type}
                      className="
                        flex
                        min-h-40
                        flex-col
                        justify-between
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        p-5
                      "
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-lg font-semibold text-emerald-500">
                          {metric.title}
                        </h4>

                        <span
                          aria-hidden="true"
                          className="
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-slate-300
                            bg-slate-50
                            text-sm
                          "
                        >
                          {metric.type === "energy"
                            ? "⚡"
                            : metric.type === "gateway"
                              ? "⌁"
                              : "▣"}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="
                              font-[var(--cs-font-sans)]
                              text-3xl
                              font-semibold
                              text-emerald-500
                            "
                          >
                            {metric.value}
                          </span>

                          <span className="text-lg text-gray-700">
                            {metric.unit}
                          </span>
                        </div>

                        {metric.change && (
                          <span className="text-xs text-red-500">
                            ↓ {metric.change}
                          </span>
                        )}

                        {metric.status && (
                          <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                            <span className="flex items-center gap-1.5">
                              <span className="size-2 rounded-sm bg-emerald-500" />
                              {metric.status.online}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <span className="size-2 rounded-sm bg-red-500" />
                              {metric.status.offline}
                            </span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>

                {/* Dashboard tabs */}

                <div
                  className="
                    flex
                    min-w-max
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    p-1
                  "
                >
                  {DASHBOARD_TABS.map((tab, index) => (
                    <div
                      key={tab}
                      className={`
                        flex
                        min-w-44
                        flex-1
                        items-center
                        justify-center
                        rounded-md
                        px-3
                        py-2
                        text-sm
                        ${
                          index === 0
                            ? "bg-emerald-500 font-medium text-emerald-50"
                            : "text-slate-400"
                        }
                      `}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {/* =================================================
                    ENERGY TIMELINE
                ================================================= */}

                <section
                  aria-labelledby="energy-timeline-title"
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-4
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    p-4
                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                    "
                  >
                    <h4
                      id="energy-timeline-title"
                      className="text-lg font-semibold text-emerald-500"
                    >
                      Energy usage timeline
                    </h4>

                    <div className="flex gap-2 overflow-x-auto">
                      <div
                        className="
                          flex
                          min-w-max
                          rounded-lg
                          border
                          border-slate-300
                          p-1
                        "
                      >
                        {TIMELINE_RANGES.map((range) => (
                          <div
                            key={range.label}
                            className={`
                              rounded-md
                              px-4
                              py-1.5
                              text-sm
                              ${
                                range.active
                                  ? "bg-emerald-500 text-emerald-50"
                                  : "text-slate-400"
                              }
                            `}
                          >
                            {range.label}
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        aria-label="Select timeline date"
                        className="
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-slate-300
                          bg-slate-50
                        "
                      >
                        ◫
                      </button>
                    </div>
                  </div>

                  {/* Timeline summary */}

                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 rounded-md border border-slate-300 px-2 py-1">
                      <span className="text-sm text-slate-950">Current</span>

                      <span className="text-sm text-slate-950">42.5 kWh</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-md border border-slate-300 px-2 py-1">
                      <span className="text-sm text-red-500">Peak</span>

                      <span className="text-sm text-red-500">58.2 kWh</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-md border border-slate-300 px-2 py-1">
                      <span className="text-sm text-slate-950">Avg</span>

                      <span className="text-sm text-slate-950">36.8 kWh</span>
                    </div>
                  </div>

                  {/* Chart */}

                  <div
                    className="
                      overflow-x-auto
                      pb-2
                    "
                  >
                    <div
                      className="
                        grid
                        min-w-[720px]
                        grid-cols-[48px_1fr]
                        gap-3
                      "
                    >
                      {/* Y axis */}

                      <div
                        className="
                          flex
                          flex-col
                          justify-between
                          py-1
                        "
                      >
                        {TIMELINE_SCALE.map((value) => (
                          <span
                            key={value}
                            className="
                              text-right
                              text-xs
                              text-slate-400
                            "
                          >
                            {value} kWh
                          </span>
                        ))}
                      </div>

                      {/* Chart area */}

                      <div className="relative min-h-72">
                        {/* Horizontal grid */}

                        <div
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            flex
                            flex-col
                            justify-between
                          "
                        >
                          {TIMELINE_SCALE.map((value) => (
                            <div
                              key={value}
                              className="h-px w-full bg-slate-200"
                            />
                          ))}
                        </div>

                        {/* Data points */}

                        <div
                          className="
                            relative
                            flex
                            h-72
                            items-end
                            justify-between
                            gap-3
                          "
                        >
                          {TIMELINE_POINTS.map((point) => {
                            const height = `${(point.value / 25) * 100}%`;

                            return (
                              <div
                                key={point.time}
                                className="
                                  flex
                                  h-full
                                  min-w-8
                                  flex-1
                                  flex-col
                                  items-center
                                  justify-end
                                "
                              >
                                <div
                                  className="
                                    flex
                                    w-full
                                    flex-1
                                    flex-col
                                    items-center
                                    justify-end
                                  "
                                >
                                  <span className="mb-1 text-xs text-emerald-500">
                                    {point.value} kWh
                                  </span>

                                  <div
                                    className="
                                      w-px
                                      bg-emerald-300
                                    "
                                    style={{
                                      height,
                                    }}
                                  />

                                  <span
                                    className="
                                      size-2.5
                                      shrink-0
                                      rounded-full
                                      bg-emerald-600
                                    "
                                  />
                                </div>

                                <span
                                  className="
                                    mt-2
                                    text-xs
                                    text-slate-400
                                  "
                                >
                                  {point.time}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>

          <figcaption
            className="
              border-t
              border-stone-300
              px-4
              py-3
              font-[var(--cs-font-sans)]
              text-[10px]
              text-stone-500
              sm:px-6
            "
          >
            EMS monitoring interface — centralized operational view across
            distributed electrical infrastructure.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
