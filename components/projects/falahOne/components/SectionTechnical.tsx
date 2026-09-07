"use client";

import { motion } from "motion/react";

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

const CONFIG_CODE = `// falah-one.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#3B82F6",
        tertiary: "#0EA5E9",
        danger: "#EF4444",
        success: "#22C55E",
        warning: "#EAB308",
      }
    }
  }
}`;

export default function SectionTechnical() {
  return (
    <section
      id="technical"
      aria-labelledby="technical-foundation-title"
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
              04
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
              Technical Foundation
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
            WHY SHADCN + TAILWIND SHAPED THE WORK
          </span>
        </motion.div>

        {/* Content */}
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
          {/* Copy */}
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
              id="technical-foundation-title"
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
              The existing technical ecosystem shaped the starting point
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
              Most of our software developers were already using shadcn +
              Tailwind CSS. Instead of introducing a brand new custom library
              which would create friction, I chose to adopt this combination as
              Falah One&apos;s initial layout foundation.
            </p>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{ ...REVEAL_TRANSITION, delay: 0.15 }}
            className="
              w-full
              flex-1
              overflow-hidden
              rounded-lg
              bg-stone-900
              p-6
            "
          >
            {/* Window Controls */}
            <div aria-hidden="true" className="mb-3 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-400" />
              <span className="size-2 rounded-full bg-amber-400" />
              <span className="size-2 rounded-full bg-green-500" />
            </div>

            {/* Code */}
            <pre
              className="
                overflow-x-auto
                whitespace-pre
                font-mono
                text-xs
                font-normal
                leading-5
                text-emerald-600
              "
            >
              <code>{CONFIG_CODE}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
