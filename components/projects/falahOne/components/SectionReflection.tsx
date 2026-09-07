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

const REFLECTIONS = [
  {
    number: "01",
    title: "Adoption is a design problem",
    description:
      "A technically sound system can still create friction if users cannot easily understand or navigate its terms. Naming components naturally rather than using abstract categories proved critical.",
  },
  {
    number: "02",
    title: "Consistency does not mean identical implementation",
    description:
      "Different technologies can share spatial and typographic principles without sharing the same code. Falah One targets visual alignment first.",
  },
  {
    number: "03",
    title: "Methodologies should serve the team",
    description:
      "Atomic Design helped structure initial thinking, but direct component naming (Buttons, Inputs, Cards) proved much more intuitive for team adoption than abstract taxonomy.",
  },
  {
    number: "04",
    title: "A design system can become a brand system",
    description:
      "Once the same visual language extends from product interfaces into content, the system begins to influence how the company communicates publicly, establishing organizational unity.",
  },
] as const;

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12 md:gap-16">
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
              13
            </span>

            <span className="text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Reflection &amp; Learning
            </span>
          </div>

          <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
            PERSONAL SYSTEM DESIGN PERSPECTIVES
          </span>
        </motion.div>

        {/* Epilogue */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.05,
          }}
          className="flex flex-col items-start gap-6"
        >
          <span className="text-sm font-bold text-[var(--cs-color-text-secondary)]">
            EPILOGUE
          </span>

          <h2 className="max-w-[1000px] text-5xl font-normal leading-[0.95] tracking-[-0.03em] text-[var(--cs-color-text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
            &quot;A DESIGN SYSTEM IS AN ADOPTION JOURNEY.&quot;
          </h2>
        </motion.div>

        {/* Reflection List */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="flex w-full flex-col"
        >
          {REFLECTIONS.map((reflection) => (
            <li
              key={reflection.number}
              className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-8 first:border-t-0 first:pt-0 md:py-10"
            >
              <span className="text-lg font-bold text-blue-600">
                {reflection.number}
              </span>

              <h3 className="text-base font-bold text-[var(--cs-color-text-primary)]">
                {reflection.title}
              </h3>

              <p className="max-w-[900px] text-sm font-normal leading-6 text-[var(--cs-color-text-secondary)]">
                {reflection.description}
              </p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
