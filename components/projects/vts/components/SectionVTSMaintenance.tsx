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

const COMPLEXITY_COMPARISON = [
  {
    label: "AUTHORING COMPLEXITY (WORKBENCH)",
    description:
      "Hierarchy outliner, raw FBX ingestion sandbox, spatial transformation gizmos, attribute configuration panels, and sync compile triggers.",
    highlighted: false,
  },
  {
    label: "OPERATIONAL SIMPLICITY (TRAINING ENGINE)",
    description:
      "Isolated 3D viewport, standard walkthrough camera controls, reset commands, and verified procedural checklist tracking panels.",
    highlighted: true,
  },
] as const;

const TRAINING_SHOWCASE_IMAGE = "https://placehold.co/1280x845";

function SectionHeader() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={REVEAL_VARIANTS}
      transition={REVEAL_TRANSITION}
      className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-2">
        <span className="font-[var(--cs-font-mono)] text-xs font-medium text-stone-600">
          09
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          VTS Maintenance Training - Showcase
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        MAINTENANCE PLAYER SYSTEM
      </span>
    </motion.div>
  );
}

function ComplexityCard({
  label,
  description,
  highlighted,
}: {
  label: string;
  description: string;
  highlighted: boolean;
}) {
  return (
    <article
      className={[
        "flex min-w-0 flex-1 flex-col gap-3 rounded-sm border p-6",
        highlighted
          ? "border-stone-600 bg-zinc-100"
          : "border-stone-300 bg-stone-50",
      ].join(" ")}
    >
      <h3
        className={[
          "font-[var(--cs-font-mono)] text-xs font-bold",
          highlighted ? "text-stone-600" : "text-neutral-500",
        ].join(" ")}
      >
        {label}
      </h3>

      <p
        className={[
          "font-[var(--cs-font-sans)] text-sm leading-6",
          highlighted ? "text-neutral-900" : "text-neutral-600",
        ].join(" ")}
      >
        {description}
      </p>
    </article>
  );
}

export default function SectionVTSMaintenance() {
  return (
    <section
      id="vts maintenance"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        <SectionHeader />

        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl sm:leading-[1.1]"
          >
            The complexity disappears once the content reaches the training
            application.
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
            className="font-[var(--cs-font-sans)] text-base font-normal leading-6 text-neutral-600"
          >
            By isolating authoring tasks from operational learning tasks, we
            ensure the trainees interact with a focused, low-cognitive-load
            simulator.
          </motion.p>
        </div>

        {/* Complexity comparison */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {COMPLEXITY_COMPARISON.map((item) => (
            <ComplexityCard
              key={item.label}
              label={item.label}
              description={item.description}
              highlighted={item.highlighted}
            />
          ))}
        </motion.div>

        {/* Training showcase */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.4,
          }}
          className="flex w-full flex-col"
        >
          <div className="relative aspect-[1280/845] w-full overflow-hidden border border-stone-300 bg-stone-50">
            <img
              src={TRAINING_SHOWCASE_IMAGE}
              alt="VTS Maintenance Training application showcase"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
