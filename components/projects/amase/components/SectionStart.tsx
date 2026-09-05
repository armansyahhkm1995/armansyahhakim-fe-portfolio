"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const TIMELINE_ITEMS = [
  {
    year: "2019",
    description: "Initial brief & system involvement",
    active: false,
  },
  {
    year: "Interim Years",
    description: "Ecosystem shifts / Platform changes",
    active: false,
  },
  {
    year: "2026 Revisit",
    description: "Independent Redesign & Deep UX Synthesis",
    active: true,
  },
] as const;

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

function TimelineConnector() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        h-6
        w-7
        items-center
        justify-center
        text-stone-400
      "
    >
      <span className="block rotate-90 text-lg leading-none">⌄</span>
    </div>
  );
}

function TimelineItem({
  year,
  description,
  active,
}: {
  year: string;
  description: string;
  active: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div
        className={[
          "font-[var(--cs-font-mono)] text-sm font-bold",
          active ? "text-blue-600" : "text-stone-600",
        ].join(" ")}
      >
        {year}
      </div>

      <p
        className={[
          "font-[var(--cs-font-sans)] text-xs font-normal",
          active
            ? "text-[var(--cs-color-text-primary)]"
            : "text-[var(--cs-color-text-secondary)]",
        ].join(" ")}
      >
        {description}
      </p>
    </div>
  );
}

export default function SectionStart() {
  return (
    <section
      id="start"
      aria-labelledby="start-title"
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
        {/* SECTION HEADER */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            flex-col
            gap-4
            border-t
            border-[var(--cs-color-border)]
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <motion.div
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="flex items-center gap-2"
          >
            <span
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-stone-600
              "
            >
              03
            </span>

            <h2
              id="start-title"
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-stone-600
              "
            >
              My Starting Point
            </h2>
          </motion.div>

          <motion.p
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            ORIGINAL ENGAGEMENT VS CURRENT CASE STUDY
          </motion.p>
        </motion.header>

        {/* STARTING POINT + TIMELINE */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* INTRODUCTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
              flex
              flex-col
              gap-6
            "
          >
            <motion.h3
              id="start-heading"
              variants={REVEAL_VARIANTS}
              transition={REVEAL_TRANSITION}
              className="
                max-w-[520px]
                font-[var(--cs-font-serif)]
                text-4xl
                font-normal
                leading-[1.02]
                tracking-[-0.02em]
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              Revisiting the work after years of professional distance.
            </motion.h3>

            <motion.p
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: 0.1,
              }}
              className="
                max-w-[520px]
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              My involvement began in 2019 as a junior UI/UX designer. Years
              later, looking at the evolution of social services and mobile
              product design, I returned to this platform independently.
              Professional maturity allowed me to ask the deeper questions that
              short agency timelines often restrict.
            </motion.p>
          </motion.div>

          {/* REVISIT TIMELINE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              gap-6
              rounded-2xl
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-6
            "
          >
            <motion.p
              variants={REVEAL_VARIANTS}
              transition={REVEAL_TRANSITION}
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-primary)]
              "
            >
              REVISIT TIMELINE
            </motion.p>

            <div className="flex w-full flex-col items-center">
              {TIMELINE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={REVEAL_VARIANTS}
                  transition={{
                    ...REVEAL_TRANSITION,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="flex flex-col items-center"
                >
                  <TimelineItem
                    year={item.year}
                    description={item.description}
                    active={item.active}
                  />

                  {index < TIMELINE_ITEMS.length - 1 && <TimelineConnector />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KEY QUESTION */}
        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            flex-col
            justify-center
            rounded-2xl
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-6
          "
        >
          <motion.div
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              border-l-[3px]
              border-stone-600
              pl-5
              sm:pl-6
            "
          >
            <h3
              className="
                font-[var(--cs-font-serif)]
                text-2xl
                font-normal
                leading-[1.15]
                text-[var(--cs-color-text-primary)]
                sm:text-3xl
                sm:leading-9
              "
            >
              The product had changed over time, but the broader question
              remained: how effectively does the product help someone navigate
              the support ecosystem?
            </h3>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
