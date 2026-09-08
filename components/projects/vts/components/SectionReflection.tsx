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

type Reflection = {
  number: string;
  title: string;
  description: string;
};

const REFLECTIONS: readonly Reflection[] = [
  {
    number: "01",
    title: "SIMPLIFICATION OVER EMULATION",
    description:
      "VTS does not attempt to reproduce the entire Unity authoring environment. It keeps the capabilities required for the training workflow, reducing clutter and cognitive load.",
  },
  {
    number: "02",
    title: "FAMILIARITY AS DESIGN STRATEGY",
    description:
      "Existing 3D authoring conventions can reduce the conceptual distance between VTS and more advanced tools, minimizing training friction for CAD designers.",
  },
  {
    number: "03",
    title: "COMPLEXITY PARTITIONING BOUNDS",
    description:
      "Workbench needs configuration controls; Maintenance Training needs operational simplicity. Splitting these contexts preserves system stability and user focus.",
  },
] as const;

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
          13
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          Reflection &amp; Learning
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        PERSONAL EXPERIENCE REFLECTIONS
      </span>
    </motion.div>
  );
}

function ReflectionItem({
  reflection,
  index,
}: {
  reflection: Reflection;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={REVEAL_VARIANTS}
      transition={{
        ...REVEAL_TRANSITION,
        delay: index * 0.1,
      }}
      className="flex w-full flex-col gap-4"
    >
      <span className="font-[var(--cs-font-mono)] text-lg font-bold text-stone-600">
        {reflection.number}
      </span>

      <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-neutral-900">
        {reflection.title}
      </h3>

      <p className="font-[var(--cs-font-sans)] text-sm font-normal leading-6 text-neutral-600">
        {reflection.description}
      </p>
    </motion.article>
  );
}

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-16">
        <SectionHeader />

        {/* Epilogue */}
        <div className="flex w-full flex-col items-start gap-6">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600"
          >
            EPILOGUE
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.15,
            }}
            className="max-w-[1000px] font-[var(--cs-font-serif)] text-5xl font-normal leading-tight text-neutral-900 sm:text-6xl lg:text-7xl lg:leading-[1.1]"
          >
            &quot;WHAT CHANGED IN MY UNDERSTANDING.&quot;
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
            className="max-w-[1080px] font-[var(--cs-font-serif)] text-2xl font-normal leading-tight text-neutral-600 sm:text-3xl lg:text-4xl lg:leading-[1.3]"
          >
            Experience design for 3D platforms is not about giving users
            unlimited power. It is about understanding the boundaries of their
            task and building the simplest logical path to let them complete it.
          </motion.p>
        </div>

        {/* Key learnings */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {REFLECTIONS.map((reflection, index) => (
            <ReflectionItem
              key={reflection.number}
              reflection={reflection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
