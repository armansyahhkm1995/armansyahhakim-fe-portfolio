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

export default function SectionProgress() {
  return (
    <section
      id="progress"
      className="w-full border-t border-[var(--cs-color-border)] bg-white px-[var(--cs-content-padding)] py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col items-center gap-6">
        {/* Closing Statement */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="max-w-[1000px] text-center text-5xl font-normal leading-[0.95] tracking-[-0.03em] text-[var(--cs-color-text-primary)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          FROM SHARED COMPONENTS TO SHARED LANGUAGE
        </motion.h2>

        {/* Closing Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.08,
          }}
          className="max-w-[680px] text-center text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]"
        >
          Falah One is still evolving. Its direction is not to make every Falah
          product identical, but to make different products, technologies, and
          communication channels feel like they belong to the same organization.
        </motion.p>

        {/* Case Study Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.16,
          }}
          className="mt-6 flex w-full max-w-[1140px] justify-center border-t border-[var(--cs-color-border)] pt-12"
        >
          <p className="text-center text-xs font-normal text-[var(--cs-color-text-muted)]">
            FALAH ONE | DESIGN SYSTEM CASE STUDY | 2026 — ONGOING
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
