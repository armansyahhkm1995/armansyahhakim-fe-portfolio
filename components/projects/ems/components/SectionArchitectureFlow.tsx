"use client";

import { motion } from "motion/react";

interface ArchitectureRoute {
  content: string;
  level: "root" | "child";
}

interface OperationalLoop {
  number: string;
  label: string;
  description: string;
}

const ARCHITECTURE_ROUTES: ArchitectureRoute[] = [
  {
    content:
      "[1] DASHBOARD — Overview, alerts stack, diurnal kW comparison charts",
    level: "root",
  },
  {
    content:
      "├── [1.1] ENERGY ANALYTICS — Core metrics, room rank tables, period exports",
    level: "child",
  },
  {
    content:
      "├── [1.2] ROOM LISTING — Room status cards, climate, power state indicators",
    level: "child",
  },
  {
    content:
      "│   └── [1.2.1] ROOM DETAIL — Sub-meters data, device control list, active schedules",
    level: "child",
  },
  {
    content:
      "├── [1.3] SCHEDULER ENGINE — Rules listings, calendar matrices, create wizard",
    level: "child",
  },
  {
    content:
      "├── [1.4] DEVICE MANAGEMENT — Physical meters register, Gateway topology parameters",
    level: "child",
  },
  {
    content:
      "└── [1.5] SETTINGS ENGINE — System user profiles, custom RBAC permissions matrix",
    level: "child",
  },
];

const OPERATIONAL_LOOPS: OperationalLoop[] = [
  {
    number: "01",
    label: "MONITOR",
    description:
      "Dashboard → Energy overview page → Select Target Room → Select submeter Device → Historical comparison curves",
  },
  {
    number: "02",
    label: "CONTROL",
    description:
      "Dashboard → Room Listing → Targeted room context → Identify relay device → Toggle OFF state → Acknowledge confirmation modal",
  },
  {
    number: "03",
    label: "SCHEDULE",
    description:
      "Schedule matrix list → Trigger Create action → Select Room → Select Device → Configure Recurrence → Set execution window → Commit",
  },
  {
    number: "04",
    label: "REPORT",
    description:
      "Reports center → Select targeted metrics → Set calendar time window → Run preview analytics → Export PDF document",
  },
];

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

export default function SectionArchitectureFlow() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-flow-title"
      className="
        w-full
        bg-[var(--cs-color-bg)]
        px-[var(--cs-content-padding)]
        pt-[var(--cs-section-padding)]
        pb-6
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-5
        "
      >
        {/* Section divider */}
        <div
          aria-hidden="true"
          className="h-px w-full bg-[var(--cs-color-border)]"
        />

        {/* Section meta */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              10
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Information Architecture &amp; User Flows
            </span>
          </div>

          <span
            className="
              hidden
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
              sm:block
            "
          >
            NAVIGATION STRUCTURE
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          id="architecture-flow-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="
            w-full
            max-w-[1120px]
            font-[var(--cs-font-sans)]
            text-4xl
            font-normal
            leading-[1.1]
            tracking-tight
            text-[var(--cs-color-text-primary)]
            sm:text-5xl
            sm:leading-[1.01]
          "
        >
          The system architecture follows the building&apos;s operating model.
        </motion.h2>

        {/* Routing profile tree */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            flex
            w-full
            flex-col
            gap-3
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-8
          "
        >
          <div
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-bold
              text-[var(--cs-color-text-secondary)]
            "
          >
            EMS CORE ROUTING PROFILE TREE
          </div>

          <div
            className="
              flex
              w-full
              flex-col
              gap-1.5
              pl-2
              font-[var(--cs-font-sans)]
              sm:pl-4
            "
          >
            {ARCHITECTURE_ROUTES.map((route, index) => (
              <div
                key={index}
                className={`
                  break-words
                  text-xs
                  leading-5
                  ${
                    route.level === "root"
                      ? "font-semibold text-black sm:text-sm"
                      : "font-normal text-[var(--cs-color-text-secondary)]"
                  }
                  ${route.level === "child" ? "pl-2 sm:pl-6" : ""}
                `}
              >
                {route.content}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operational loops heading */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="
            w-full
            max-w-[1120px]
            font-[var(--cs-font-sans)]
            text-4xl
            font-normal
            leading-[1.1]
            tracking-tight
            text-[var(--cs-color-text-primary)]
            sm:text-5xl
            sm:leading-[1.01]
          "
        >
          Four loops cover the core operational activities.
        </motion.h3>

        {/* Operational loops */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="flex w-full flex-col"
        >
          {OPERATIONAL_LOOPS.map((loop) => (
            <div
              key={loop.number}
              className="
                flex
                w-full
                flex-col
                gap-3
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-6
                [&+&]:mt-[-1px]
              "
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {loop.number} — {loop.label}
              </div>

              <p
                className="
                  w-full
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-normal
                  leading-5
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {loop.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
