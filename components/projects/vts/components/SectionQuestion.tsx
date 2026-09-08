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

const DESIGN_REQUIREMENTS = [
  {
    number: "01",
    title: "No manual scripting",
    description:
      "Standard interactions (rotate, outline, drag) are toggled via simple attributes.",
    source: "PRD REQUIREMENT",
  },
  {
    number: "02",
    title: "No application rebuilding",
    description:
      "Content changes compile directly to config payloads synced at runtime.",
    source: "PRD REQUIREMENT",
  },
  {
    number: "03",
    title: "Familiar 3D conventions",
    description:
      "Workspace utilizes standard Hierarchy trees, Transform gizmos, and property Inspectors.",
    source: "UX DECISION",
  },
] as const;

export default function SectionQuestion() {
  return (
    <section
      id="question"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12 lg:gap-16">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              03
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Design Question
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            SYSTEM STRATEGY COMPASS
          </span>
        </motion.div>

        {/* Proposition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <span className="font-[var(--cs-font-mono)] text-sm font-semibold uppercase text-stone-600">
            PROPOSITION CONCEPT
          </span>

          <h2 className="max-w-[1100px] font-[var(--cs-font-serif)] text-5xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            How might we move 3D configuration closer to the end user?
          </h2>
        </motion.div>

        {/* Core Proposition */}
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="flex w-full items-center justify-center border border-[var(--cs-color-border)] bg-stone-50 px-6 py-12 sm:px-12 sm:py-16 lg:px-20"
        >
          <p className="max-w-[900px] text-center font-[var(--cs-font-serif)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl sm:leading-[1.4]">
            &quot;Instead of exposing the complexity of Unity, we built a
            zero-code authoring paradigm that compiles behaviors down to pure
            configuration data.&quot;
          </p>
        </motion.blockquote>

        {/* Design Requirements */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="flex w-full flex-col"
        >
          {DESIGN_REQUIREMENTS.map((requirement) => (
            <li
              key={requirement.number}
              className="flex flex-col gap-8 border border-stone-300 bg-stone-50 p-5 sm:p-6"
            >
              {/* Number */}
              <span className="font-[var(--cs-font-mono)] text-lg font-bold text-stone-600">
                {requirement.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-[var(--cs-color-text-primary)]">
                  {requirement.title}
                </h3>

                <p className="font-[var(--cs-font-sans)] text-sm leading-5 text-[var(--cs-color-text-secondary)]">
                  {requirement.description}
                </p>
              </div>

              {/* Source */}
              <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
                {requirement.source}
              </span>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
