"use client";

import { motion } from "motion/react";

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const VERSION_HISTORY = [
  {
    version: "V0.1",
    title: "Foundation",
    date: "Jan 2026",
  },
  {
    version: "V0.5",
    title: "Core Primitives",
    date: "Feb 2026",
  },
  {
    version: "V1.0",
    title: "Cross-team Sync",
    date: "Mar 2026",
  },
  {
    version: "V1.2",
    title: "Simulation Pack",
    date: "Ongoing",
  },
] as const;

export default function SectionVersioning() {
  return (
    <section
      id="versioning"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--cs-color-text-secondary)]">
              09
            </span>

            <span className="text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Versioning History
            </span>
          </div>

          <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
            REPLACE WITH ACTUAL VERSION HISTORY
          </span>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="max-w-[700px] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] md:text-5xl md:leading-[1.01]"
          >
            Iteration required versioning
          </motion.h2>

          {/* Version History */}
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.2,
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {VERSION_HISTORY.map((item) => (
              <li
                key={item.version}
                className="flex min-h-[132px] flex-col gap-2 rounded-sm border border-[var(--cs-color-border)] bg-white p-5"
              >
                <span className="text-base font-extrabold text-blue-600">
                  {item.version}
                </span>

                <span className="text-xs font-semibold text-[var(--cs-color-text-primary)]">
                  {item.title}
                </span>

                <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
                  {item.date}
                </span>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
