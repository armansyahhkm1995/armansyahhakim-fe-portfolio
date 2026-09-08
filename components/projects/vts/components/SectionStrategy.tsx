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

const STRATEGIES = [
  {
    title: "FAMILIAR 3D CONVENTIONS",
    description:
      "Hierarchical outliner, standard coordinate systems, local/global transform gizmos, viewport camera controls, and spatial selection feedback.",
    variant: "familiar",
  },
  {
    title: "SIMPLIFIED WORKFLOW",
    description:
      "One-click interaction bindings, modular step sequencer interface, hot-reload instant synchronizations, and code-free logical operations.",
    variant: "simplified",
  },
] as const;

function StrategyCard({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "familiar" | "simplified";
}) {
  const isSimplified = variant === "simplified";

  return (
    <article
      className={[
        "flex flex-1 flex-col gap-4 rounded-md border p-6 sm:p-8",
        isSimplified
          ? "border-stone-600 bg-zinc-100"
          : "border-stone-300 bg-stone-50",
      ].join(" ")}
    >
      <h3
        className={[
          "font-[var(--cs-font-mono)] text-xs font-bold",
          isSimplified ? "text-stone-600" : "text-[var(--cs-color-text-muted)]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p className="font-[var(--cs-font-sans)] text-sm leading-6 text-[var(--cs-color-text-secondary)]">
        {description}
      </p>
    </article>
  );
}

export default function SectionStrategy() {
  return (
    <section
      id="strategy"
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
              06
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Design Strategy
            </span>
          </div>

          <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
            HEURISTIC STRATEGY VALUE
          </span>
        </motion.div>

        {/* Strategy Statement */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]"
          >
            I kept the mental model familiar and removed unnecessary complexity.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.2,
            }}
            className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-[var(--cs-color-text-secondary)]"
          >
            By anchoring the user experience in standard 3D application
            paradigms, we drastically shortened the learning curve for CAD
            engineers and instructional designers while introducing extreme
            efficiency gains.
          </motion.p>
        </div>

        {/* Strategy Principles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="flex flex-col gap-4 md:flex-row md:gap-6"
        >
          {STRATEGIES.map((strategy) => (
            <StrategyCard
              key={strategy.title}
              title={strategy.title}
              description={strategy.description}
              variant={strategy.variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
