"use client";

import { motion } from "motion/react";

interface RequirementRow {
  requirement: string;
  need: string;
}

const REQUIREMENT_ROWS: RequirementRow[] = [
  {
    requirement: "Real-time monitoring",
    need: "Know what is happening across heavy consumers (HVAC, server banks) without parsing raw JSON logs.",
  },
  {
    requirement: "Remote control",
    need: "Act without being physically present. Guarantee command delivery with visual processing feedback.",
  },
  {
    requirement: "Scheduling engine",
    need: "Automate repetitive operations. Establish persistent rules for holidays and off-peak shifts.",
  },
  {
    requirement: "Historical data warehousing",
    need: "Understand usage over time. Benchmark room behaviors against structural variables.",
  },
  {
    requirement: "Standardized reporting",
    need: "Support capital operational decisions. Convert raw kwh counts into audit-ready exports.",
  },
  {
    requirement: "Device connection status",
    need: "Know whether the system is available. Distinguish communication dropouts from device failures.",
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

export default function SectionRequirement() {
  return (
    <section
      id="requirement"
      aria-labelledby="system-requirement-title"
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

        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
            flex
            w-full
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
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
              02
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
              From Requirement to System Question
            </span>
          </div>

          <span
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            COGNITIVE TRANSFORMATION
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.05,
          }}
          className="
            flex
            w-full
            flex-col
            gap-8
            lg:flex-row
            lg:items-start
            lg:gap-20
          "
        >
          <h2
            id="system-requirement-title"
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-tight
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
              lg:max-w-[520px]
              lg:shrink-0
            "
          >
            But monitoring was only part of the problem.
          </h2>

          <p
            className="
              flex-1
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            Simply dumping hundreds of thousands of raw sensor logs on an
            administrator&apos;s screen does not improve building performance.
            Rather, it increases cognitive fatigue. The design challenge
            evolved: we needed to frame data so it immediately points to an
            operational action.
          </p>
        </motion.div>

        {/* Requirement table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="
            w-full
            overflow-hidden
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-white
          "
        >
          {/* Table header */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              border-b
              border-[var(--cs-color-border)]
              bg-stone-50
              p-4
              sm:grid-cols-[minmax(220px,384px)_1fr]
              sm:gap-6
            "
          >
            <div
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-bold
                text-[var(--cs-color-text-primary)]
              "
            >
              ENGINEERING REQUIREMENT
            </div>

            <div
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-bold
                text-[var(--cs-color-text-primary)]
              "
            >
              COGNITIVE &amp; OPERATIONAL NEED
            </div>
          </div>

          {/* Table rows */}
          <div className="divide-y divide-[var(--cs-color-border)]">
            {REQUIREMENT_ROWS.map((row) => (
              <div
                key={row.requirement}
                className="
                  grid
                  grid-cols-1
                  gap-2
                  p-4
                  sm:grid-cols-[minmax(220px,384px)_1fr]
                  sm:gap-6
                "
              >
                <div
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-semibold
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {row.requirement}
                </div>

                <div
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-normal
                    leading-6
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  {row.need}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System question */}
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            w-full
            border-l-4
            border-[var(--cs-color-text-secondary)]
            py-6
            pl-6
            sm:pl-8
          "
        >
          <p
            className="
              font-[var(--cs-font-sans)]
              text-2xl
              font-normal
              leading-9
              text-[var(--cs-color-text-secondary)]
              sm:text-3xl
              sm:leading-10
            "
          >
            &quot;What information and controls do building operators actually
            need to manage electricity effectively?&quot;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
