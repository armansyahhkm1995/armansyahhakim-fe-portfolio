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

const WORKFLOW_STEPS = [
  "FBX INGEST",
  "PROJECT HUB",
  "WORKBENCH",
  "ATTRIBUTE CONFIG",
  "EXPORT / SYNC",
  "TRAINING ENGINE",
  "INTERACTION",
] as const;

type Stage =
  | {
      number: string;
      title: string;
      description: string;
      images: readonly [string];
    }
  | {
      number: string;
      title: string;
      description: string;
      images: readonly [string, string, string];
    };

const WORKFLOW_STAGES: readonly Stage[] = [
  {
    number: "01",
    title: "Project Hub",
    description:
      "Centralized environment sandbox. Immutable raw FBX assets are partitioned from serialized configurations.",
    images: ["https://placehold.co/580x387"],
  },
  {
    number: "02",
    title: "Workbench Canvas",
    description:
      "Primary 3D coordinate Workspace. Coordinates hierarchy tree left, transform parameters right, interactive model center.",
    images: ["https://placehold.co/580x383"],
  },
  {
    number: "03",
    title: "Object Configuration",
    description:
      "Behavior inspector configuration. Eliminates manual C# event handler creation using standard parameter inputs.",
    images: [
      "https://placehold.co/167x378",
      "https://placehold.co/167x378",
      "https://placehold.co/167x378",
    ],
  },
  {
    number: "04",
    title: "Maintenance Training Player",
    description:
      "Runtime evaluation container. Isolated operations viewport focusing purely on step-by-step checklist validation runtimes.",
    images: ["https://placehold.co/580x383"],
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
          11
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-stone-600">
          Final Experience
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-neutral-500">
        END-TO-END WORKFLOW JOURNEY
      </span>
    </motion.div>
  );
}

function WorkflowNavigation() {
  return (
    <motion.nav
      aria-label="VTS end-to-end workflow"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={REVEAL_VARIANTS}
      transition={{
        ...REVEAL_TRANSITION,
        delay: 0.3,
      }}
      className="rounded-md border border-stone-300 bg-stone-50 p-4 sm:p-5"
    >
      <ol className="flex flex-wrap items-center gap-x-4 gap-y-3">
        {WORKFLOW_STEPS.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="font-[var(--cs-font-mono)] text-xs font-bold text-neutral-900">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-[var(--cs-font-sans)] text-xs font-semibold text-neutral-600">
              {step}
            </span>

            {index < WORKFLOW_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="font-[var(--cs-font-mono)] text-xs text-neutral-500"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}

function StageMedia({
  images,
  stageTitle,
}: {
  images: readonly string[];
  stageTitle: string;
}) {
  if (images.length === 3) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-[167/378] overflow-hidden border border-stone-300 bg-white"
          >
            <img
              src={src}
              alt={`${stageTitle} preview ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative aspect-[580/387] w-full overflow-hidden border border-stone-300 bg-white">
      <img
        src={images[0]}
        alt={`${stageTitle} preview`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <article className="flex w-full flex-col gap-4 rounded-sm border border-stone-300 bg-stone-50 p-5 sm:p-6">
      <StageMedia images={stage.images} stageTitle={stage.title} />

      <div className="flex flex-col gap-1.5">
        <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
          STAGE {stage.number} — {stage.title}
        </h3>

        <p className="font-[var(--cs-font-sans)] text-xs leading-5 text-neutral-600">
          {stage.description}
        </p>
      </div>
    </article>
  );
}

export default function SectionOutput() {
  return (
    <section
      id="output"
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
            From raw FBX to interactive training content.
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
            The finalized pipeline collapses traditional multi-day developer
            packaging routines down to a rapid, single-path sequence.
          </motion.p>
        </div>

        {/* Workflow navigation */}
        <WorkflowNavigation />

        {/* Final workflow stages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="flex flex-col gap-6"
        >
          {WORKFLOW_STAGES.map((stage) => (
            <StageCard key={stage.number} stage={stage} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
