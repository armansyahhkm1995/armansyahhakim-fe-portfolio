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

const WORKFLOWS = [
  {
    label: "EXISTING WORKFLOW",
    description:
      "Import Asset → C# Script Definition → GameObject Configuration → Complete Project Build → Deploy Target File.",
    variant: "existing",
  },
  {
    label: "INTENDED WORKFLOW",
    description:
      "Direct FBX Import → Predefined Interaction Checkbox → Automatic Asset Sync → Interactive Runtime Operation.",
    variant: "intended",
  },
] as const;

export default function SectionProblem() {
  return (
    <section
      id="problem"
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
          className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
              02
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              The Problem
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            VTS WORKBENCH / BOTTLENECK ANALYSIS
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-20">
          {/* Problem Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
              The bottleneck was not importing a 3D model. It was configuring
              what the model could do.
            </h2>

            <p className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]">
              Traditional 3D authoring requires understanding complex parenting,
              custom scripts, and visual shaders. To empower instructional
              designers and non-programmers, we needed to separate geometry
              ingestion from operational logic definition.
            </p>
          </motion.div>

          {/* Workflow Evolution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.2,
            }}
            className="flex flex-col gap-6"
          >
            {/* Workflow Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
                WORKFLOW EVOLUTION
              </span>

              <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
                PRD REQUIREMENT
              </span>
            </div>

            {/* Workflow Comparison */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {WORKFLOWS.map((workflow) => {
                const isExisting = workflow.variant === "existing";

                return (
                  <article
                    key={workflow.label}
                    className={[
                      "flex flex-col gap-4 rounded-sm p-5 sm:p-6",
                      isExisting
                        ? "border border-stone-300 bg-stone-50 opacity-60"
                        : "border-2 border-stone-600 bg-white",
                    ].join(" ")}
                  >
                    <h3
                      className={[
                        "font-[var(--cs-font-mono)] text-xs font-bold",
                        isExisting
                          ? "text-[var(--cs-color-text-muted)]"
                          : "text-stone-600",
                      ].join(" ")}
                    >
                      {workflow.label}
                    </h3>

                    <p
                      className={[
                        "font-[var(--cs-font-sans)] text-sm leading-5",
                        isExisting
                          ? "text-[var(--cs-color-text-secondary)]"
                          : "text-[var(--cs-color-text-primary)]",
                      ].join(" ")}
                    >
                      {workflow.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
