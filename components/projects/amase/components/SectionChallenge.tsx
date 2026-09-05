"use client";

import { motion } from "motion/react";

const CHALLENGES = [
  {
    number: "01",
    title: "Finding the Right Starting Point",
    finding: "Users face choice paralysis upon release.",
    implication: "Provide immediate guided personalization.",
  },
  {
    number: "02",
    title: "Support is Highly Distributed",
    finding:
      "Services exist across separate entities without shared databases.",
    implication: "Create a single centralized registry.",
  },
  {
    number: "03",
    title: "Relevance is Difficult to Judge",
    finding: "Directories omit critical details (like eligibility criteria).",
    implication: "Surface explicit criteria clearly on detail views.",
  },
  {
    number: "04",
    title: "Info Doesn't Translate to Action",
    finding:
      "Finding an address does not outline the actual sequence of application.",
    implication: "Map out concrete step-by-step instructions.",
  },
  {
    number: "05",
    title: "Immediate Support Has Different Requirements",
    finding:
      "Mental crises or housing emergencies can't wait for form approvals.",
    implication: "Design a dedicated, fast-access helpline route.",
  },
  {
    number: "06",
    title: "Reintegration is Ongoing",
    finding: "Post-release support extends over years, not weeks.",
    implication:
      "Integrate peer mentoring directly into the primary navigation.",
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
          07
        </span>

        <h2
          id="challenge-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Support Exists. The Challenge is Navigating It.
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
        6 SYSTEMIC BARRIERS IDENTIFIED
      </motion.p>
    </motion.header>
  );
}

export default function SectionChallenge() {
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-title"
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

        {/* SYSTEMIC BARRIERS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            w-full
            flex-col
          "
        >
          {CHALLENGES.map((challenge, index) => (
            <motion.article
              key={challenge.number}
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * 0.08,
              }}
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                first:rounded-t-sm
                last:rounded-b-sm
                sm:p-6
              "
            >
              {/* TITLE */}
              <div className="flex items-center gap-2">
                <span
                  className="
                    shrink-0
                    font-[var(--cs-font-mono)]
                    text-sm
                    font-bold
                    text-stone-600
                  "
                >
                  {challenge.number}
                </span>

                <h3
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-bold
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {challenge.title}
                </h3>
              </div>

              {/* DIVIDER */}
              <div
                aria-hidden="true"
                className="h-px w-full bg-[var(--cs-color-border)]"
              />

              {/* FINDING */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  FINDING
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
                  {challenge.finding}
                </p>
              </div>

              {/* IMPLICATION */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  IMPLICATION
                </span>

                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-semibold
                    leading-5
                    text-stone-600
                  "
                >
                  {challenge.implication}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
