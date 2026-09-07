"use client";

import { motion } from "motion/react";

interface TechnologyLayer {
  label: string;
  implementation: string;
}

interface SystemExpansion {
  title: string;
  description: string;
}

const TECHNOLOGY_LAYERS: TechnologyLayer[] = [
  {
    label: "Web/Front-end",
    implementation: "React + shadcn + Tailwind",
  },
  {
    label: "VR/AR Space",
    implementation: "Physical Layouts & Canvas Adapters",
  },
  {
    label: "Unity Engine",
    implementation: "Pre-built Prefab Bundles",
  },
];

const SYSTEM_EXPANSIONS: SystemExpansion[] = [
  {
    title: "PRODUCT INTERFACES",
    description: "User-flows, buttons, control screens, charts layout.",
  },
  {
    title: "VISUAL BRAND",
    description: "Consistent spacing metrics, Oxanium typeface weights.",
  },
  {
    title: "CONTENT DELIVERY",
    description: "Marketing materials, social visual assets, pitch templates.",
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

export default function SectionAdaptation() {
  return (
    <section
      id="adaptation"
      aria-labelledby="cross-technology-adaptation-title"
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
              07
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
              Cross-Technology Adaptation
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
            ADAPTABLE PATTERNS ACROSS ENGINE RUNTIMES
          </span>
        </motion.div>

        {/* Technology Adaptation */}
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
              id="cross-technology-adaptation-title"
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
              The same language did not require identical implementations
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
              Shared language does not equal identical code implementation.
              While web platforms leverage standard HTML DOM elements &amp;
              styles, VR/AR engines utilize nested canvas components with
              physically configured scaling.
            </p>
          </motion.div>

          {/* Infrastructure Tree */}
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
              gap-5
              rounded-lg
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
                font-bold
                text-[var(--cs-color-text-secondary)]
              "
            >
              CROSS TECH INFRASTRUCTURE TREE
            </span>

            <div className="flex w-full flex-col gap-3">
              <span
                className="
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-semibold
                  text-[var(--cs-color-text-primary)]
                "
              >
                [1] FALAH ONE CORE DESIGN TOKENS
              </span>

              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-2
                  pl-4
                  sm:pl-6
                "
              >
                {TECHNOLOGY_LAYERS.map((technology, index) => (
                  <div
                    key={technology.label}
                    className="
                      flex
                      items-start
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      leading-5
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="mr-1 shrink-0 font-mono"
                    >
                      {index === TECHNOLOGY_LAYERS.length - 1 ? "└─" : "├─"}
                    </span>

                    <span>
                      {technology.label} ({technology.implementation})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* System Expansion */}
        <div className="flex w-full flex-col gap-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{ ...REVEAL_TRANSITION, delay: 0.1 }}
            className="
              w-full
              max-w-[1120px]
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
            The system eventually moved beyond product interfaces
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{ ...REVEAL_TRANSITION, delay: 0.15 }}
            className="
              grid
              w-full
              grid-cols-1
              gap-0
              overflow-hidden
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              md:grid-cols-3
            "
          >
            {SYSTEM_EXPANSIONS.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  w-full
                  items-start
                  gap-6
                  p-6
                  sm:p-8
                  md:items-center
                  ${
                    index !== SYSTEM_EXPANSIONS.length - 1
                      ? "border-b border-[var(--cs-color-border)] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <div className="flex flex-1 flex-col gap-2">
                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-semibold
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {item.title}
                  </span>

                  <p
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      leading-5
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {index !== SYSTEM_EXPANSIONS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      hidden
                      shrink-0
                      text-sm
                      text-[var(--cs-color-text-secondary)]
                      md:block
                    "
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
