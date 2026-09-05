"use client";

import { motion } from "motion/react";

const DESIGN_DECISIONS = [
  {
    number: "01",
    title: "Decision 1: Personalisation should not become a filter",
    description:
      "Gating directories isolates users. Redesign separates home recommendation pathways from full-bleed raw explore indices.",
    response: "Keep Home personalized, keep Explore open.",
  },
  {
    number: "02",
    title: "Decision 2: Resource detail as a convergence point",
    description:
      "Listing addresses does not resolve qualification anxiety. Detail view must prioritize 'expectations' and 'eligibility'.",
    response: "Shared Resource Detail structure.",
  },
  {
    number: "03",
    title: "Decision 3: Helplines require a separate portal",
    description:
      "Immediate trauma support cannot compete with job listings or event cards on a standard list feed.",
    response: "Dedicated, rapid helpline connection pathway.",
  },
  {
    number: "04",
    title: "Decision 4: Mentoring as an ongoing anchor",
    description:
      "Social reintegration takes years. Support structures require organic peers, not just organizational forms.",
    response: "Peer-to-peer mentoring placed in primary navigation.",
  },
] as const;

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

function SectionHeader() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className="
        flex
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
      <motion.div
        variants={REVEAL_VARIANTS}
        transition={REVEAL_TRANSITION}
        className="flex items-center gap-2"
      >
        <span
          className="
            font-[var(--cs-font-mono)]
            text-xs
            font-semibold
            text-stone-600
          "
        >
          08
        </span>

        <h2
          id="decisions-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Key Design Decisions
        </h2>
      </motion.div>

      <motion.p
        variants={REVEAL_VARIANTS}
        transition={{
          ...REVEAL_TRANSITION,
          delay: 0.1,
        }}
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-normal
          text-[var(--cs-color-text-muted)]
        "
      >
        EVIDENCE-BASED STRUCTURAL SHIFTS
      </motion.p>
    </motion.header>
  );
}

export default function SectionDecisions() {
  return (
    <section
      id="decisions"
      aria-labelledby="decisions-title"
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
        <SectionHeader />

        {/* DESIGN DECISIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="flex w-full flex-col"
        >
          {DESIGN_DECISIONS.map((decision, index) => (
            <motion.article
              key={decision.number}
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * 0.08,
              }}
              className="
                flex
                flex-col
                gap-8
                border-b
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                first:rounded-t-sm
                last:rounded-b-sm
                sm:p-6
                lg:grid
                lg:grid-cols-[80px_1fr_1fr]
                lg:gap-8
              "
            >
              {/* NUMBER */}
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-sm
                  font-bold
                  text-stone-600
                "
              >
                {decision.number}
              </span>

              {/* DECISION */}
              <div className="flex flex-col gap-1">
                <h3
                  className="
                    font-[var(--cs-font-sans)]
                    text-base
                    font-bold
                    leading-6
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {decision.title}
                </h3>

                <p
                  className="
                    text-xs
                    font-normal
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                    font-[var(--cs-font-sans)]
                  "
                >
                  {decision.description}
                </p>
              </div>

              {/* INTERACTION RESPONSE */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  INTERACT RESPONSE
                </span>

                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-semibold
                    leading-5
                    text-blue-600
                  "
                >
                  {decision.response}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
