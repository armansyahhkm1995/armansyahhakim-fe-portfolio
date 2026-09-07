"use client";

import { motion } from "motion/react";

const FEEDBACK_CYCLE = [
  "Team uses component in production",
  "Usability friction or technical constraint identified",
  "Discuss and evaluate change parameters during bi-weekly sync",
  "Component modified & versioned globally",
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

export default function SectionGovernance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-model-title"
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
        {/* Section Header */}
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
            border-t
            border-[var(--cs-color-border)]
            py-4
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              08
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Governance Model
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
            LIVING SYSTEM CYCLIC FEEDBACK LOOP
          </span>
        </motion.div>

        {/* Main Content */}
        <div
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
          {/* Thesis */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{ ...REVEAL_TRANSITION, delay: 0.1 }}
            className="
              flex
              w-full
              max-w-[520px]
              flex-col
              gap-6
            "
          >
            <h2
              id="governance-model-title"
              className="
                w-full
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
              Falah One was designed as a living system
            </h2>

            <p
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              A design system is not a finished, immutable software package. It
              is an iterative ecosystem that continuously evolves from
              implementation evidence, developer discussions, and real-world
              usage data.
            </p>
          </motion.div>

          {/* Feedback Cycle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{ ...REVEAL_TRANSITION, delay: 0.15 }}
            className="
              flex
              w-full
              flex-1
              flex-col
              gap-4
              rounded-md
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-6
              sm:p-8
            "
          >
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              SYSTEM FEEDBACK CYCLE
            </span>

            <ol className="flex w-full flex-col gap-2">
              {FEEDBACK_CYCLE.map((step, index) => (
                <li
                  key={step}
                  className="
                    flex
                    items-start
                    gap-2
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-normal
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  <span aria-hidden="true" className="shrink-0">
                    {index + 1}.
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
