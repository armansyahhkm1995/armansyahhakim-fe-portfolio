"use client";

import { motion } from "motion/react";

const PROJECT_TITLE = "VTS Workbench & Maintenance Training";
const PROJECT_TYPE = "Product Design · 2026";
const COMPANY = "Falah Inovasi Teknologi";

const lines = [
  "VTS moves 3D training content from developer",
  "configuration toward end-user authoring",
];

export default function SectionFooter() {
  return (
    <footer className="w-full border-t border-stone-300 bg-stone-50 px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Closing statement */}
        <div className="flex w-full flex-col items-start gap-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
                      font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]
                    "
          >
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={{
                    hidden: {
                      y: "110%",
                    },
                    visible: {
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <p className="max-w-[1000px] font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600">
            The product focuses on simplifying the workflow from FBX import to
            interactive training content while preserving the 3D capabilities
            required by the training experience.
          </p>
        </div>

        {/* Project metadata */}
        <div className="grid w-full grid-cols-1 gap-4 border-t border-stone-300 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-900">
            {PROJECT_TITLE}
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500 sm:text-right lg:text-center">
            {PROJECT_TYPE}
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-900 sm:col-span-2 sm:text-right lg:col-span-1">
            {COMPANY}
          </span>
        </div>
      </div>
    </footer>
  );
}
