"use client";

import { motion } from "motion/react";

interface AdoptionPhase {
  phase: string;
  title: string;
  description: string;
  status?: string;
  isActive?: boolean;
}

const ADOPTION_PHASES: AdoptionPhase[] = [
  {
    phase: "PHASE 01",
    title: "Software Front-End",
    description:
      "Standardizing web applications, dashboards, and control surfaces with Shadcn & Tailwind primitives.",
    status: "ACTIVE",
    isActive: true,
  },
  {
    phase: "PHASE 02",
    title: "Simulation UI",
    description:
      "Mapping physical spacing, typography, and color tokens into Unity Canvas & VR head-mounted layouts.",
  },
  {
    phase: "PHASE 03",
    title: "Content & Brand",
    description:
      "Exporting tokens to marketing channels, pitch decks, and digital content templates for organizational synergy.",
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

export default function SectionAdoption() {
  return (
    <section
      id="adoption"
      aria-labelledby="adoption-title"
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
        {/* Section header */}
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
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              03
            </span>

            <h2
              id="adoption-title"
              className="
                text-xs
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Adoption Strategy
            </h2>
          </div>

          <span
            className="
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            STAGED DEPLOYMENT TIMELINE
          </span>
        </motion.div>

        {/* Strategy */}
        <div className="flex w-full flex-col gap-6">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              max-w-4xl
              text-4xl
              font-normal
              leading-tight
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
            "
          >
            I started where adoption was most likely
          </motion.h3>

          {/* Adoption timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              grid
              w-full
              gap-4
              rounded-md
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-4
              sm:p-6
              lg:grid-cols-3
            "
          >
            {ADOPTION_PHASES.map((phase) => (
              <article
                key={phase.phase}
                className={`
                  flex
                  flex-col
                  gap-2
                  rounded-sm
                  border
                  bg-white
                  p-4
                  ${
                    phase.isActive
                      ? "border-2 border-blue-600"
                      : "border-[var(--cs-color-border)]"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`
                      text-xs
                      font-semibold
                      ${
                        phase.isActive
                          ? "text-blue-600"
                          : "text-[var(--cs-color-text-muted)]"
                      }
                    `}
                  >
                    {phase.phase}
                  </span>

                  {phase.status && (
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        text-blue-600
                      "
                    >
                      {phase.status}
                    </span>
                  )}
                </div>

                <h4
                  className="
                    text-sm
                    font-bold
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {phase.title}
                </h4>

                <p
                  className="
                    text-xs
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  {phase.description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
