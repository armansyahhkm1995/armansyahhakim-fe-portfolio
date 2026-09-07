"use client";

import { motion } from "motion/react";

interface FragmentedWorkflow {
  project: string;
  description: string;
}

const FRAGMENTED_WORKFLOWS: FragmentedWorkflow[] = [
  {
    project: "Project A: Web",
    description: "Local custom CSS + custom button assets",
  },
  {
    project: "Project B: VR Sim",
    description: "Unity specific Canvas buttons & UI scripts",
  },
  {
    project: "Project C: Content",
    description: "Ad-hoc Figma files with unmapped variables",
  },
];

const REVEAL_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

export default function SectionContext() {
  return (
    <section
      id="context"
      aria-labelledby="falah-one-context-title"
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
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
            flex
            w-full
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
          <div className="flex items-center gap-2">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              01
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
              Context
            </span>
          </div>

          <span
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            FALAH INOVASI TEKNOLOGI / CASE STUDY
          </span>
        </motion.div>

        {/* Context introduction + fragmented workflows */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* Context statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.05,
            }}
            className="flex flex-col gap-6"
          >
            <h2
              id="falah-one-context-title"
              className="
                font-[var(--cs-font-sans)]
                text-4xl
                font-normal
                leading-tight
                tracking-tight
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              Falah&apos;s products were being designed independently
            </h2>

            <p
              className="
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              Before the initialization of Falah One, different development
              branches operated as isolated islands. Our software division,
              high-fidelity VR/AR simulation team, and content creators each
              maintained local design systems. This approach solved short-term
              requirements but made cross-project consistency, shared
              maintenance, and brand unified scaling nearly impossible.
            </p>
          </motion.div>

          {/* Fragmented workflow board */}
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              flex
              w-full
              flex-col
              gap-4
              rounded-lg
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
            "
          >
            <figcaption
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-muted)]
              "
            >
              FRAGMENTED WORKFLOWS (BEFORE)
            </figcaption>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-3
              "
            >
              {FRAGMENTED_WORKFLOWS.map((workflow) => (
                <div
                  key={workflow.project}
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-2
                    rounded-sm
                    border
                    border-[var(--cs-color-border)]
                    bg-white
                    p-4
                  "
                >
                  <h3
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {workflow.project}
                  </h3>

                  <p
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      leading-5
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-normal
                leading-5
                text-[var(--cs-color-text-muted)]
              "
            >
              This approach could work at project level, but it made
              consistency, reuse, and cross-project maintenance difficult.
            </p>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
