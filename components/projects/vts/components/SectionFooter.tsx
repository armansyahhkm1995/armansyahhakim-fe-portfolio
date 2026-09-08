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

const PROJECT_TITLE = "VTS Workbench & Maintenance Training";
const PROJECT_TYPE = "Product Design · 2026";
const COMPANY = "Falah Inovasi Teknologi";

export default function SectionFooter() {
  return (
    <footer className="w-full border-t border-stone-300 bg-stone-50 px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Closing statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="flex w-full flex-col items-start gap-4"
        >
          <h2 className="max-w-[1080px] font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl sm:leading-[1.1]">
            VTS moves 3D training content from developer configuration toward
            end-user authoring.
          </h2>

          <p className="max-w-[1000px] font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600">
            The product focuses on simplifying the workflow from FBX import to
            interactive training content while preserving the 3D capabilities
            required by the training experience.
          </p>
        </motion.div>

        {/* Project metadata */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="grid w-full grid-cols-1 gap-4 border-t border-stone-300 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-center"
        >
          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-900">
            {PROJECT_TITLE}
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500 sm:text-right lg:text-center">
            {PROJECT_TYPE}
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-900 sm:col-span-2 sm:text-right lg:col-span-1">
            {COMPANY}
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
