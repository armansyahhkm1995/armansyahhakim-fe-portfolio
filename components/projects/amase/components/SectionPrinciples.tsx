"use client";

import { motion } from "motion/react";

const DESIGN_PRINCIPLES = [
  {
    number: "01",
    title: "Assist discovery, don't restrict it",
    finding: "Users have varied readiness thresholds.",
    consequence: "Keep personalization optional; never gate the raw directory.",
  },
  {
    number: "02",
    title: "Explain relevance",
    finding: "Vague labels breed skepticism and distrust.",
    consequence:
      "Explicitly display 'why relevant' reasons on generated cards.",
  },
  {
    number: "03",
    title: "Make support actionable",
    finding: "Discovery is dead without direct agency.",
    consequence:
      "Build instant handoffs (sms/phone) directly on resource pages.",
  },
  {
    number: "04",
    title: "Preserve dignity and agency",
    finding: "Institutional language alienates.",
    consequence: "Avoid legal/judicial phrasing; focus purely on target needs.",
  },
  {
    number: "05",
    title: "Reduce cognitive load",
    finding: "Stigma and stress impair decisions.",
    consequence:
      "Use a quiet neutral color story to prioritize calm exploration.",
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
          09
        </span>

        <h2
          id="principles-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Design Principles
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
        GUIDING INTERFACE CONSTRAINTS
      </motion.p>
    </motion.header>
  );
}

export default function SectionPrinciples() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
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

        {/* DESIGN PRINCIPLES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="flex w-full flex-col gap-4"
        >
          {DESIGN_PRINCIPLES.map((principle, index) => (
            <motion.article
              key={principle.number}
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * 0.08,
              }}
              className="
                grid
                w-full
                gap-6
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-6
                lg:grid-cols-[40px_288px_320px_1fr]
                lg:items-center
                lg:gap-10
              "
            >
              {/* NUMBER */}
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-base
                  font-bold
                  text-stone-600
                "
              >
                {principle.number}
              </span>

              {/* PRINCIPLE */}
              <h3
                className="
                  font-[var(--cs-font-sans)]
                  text-lg
                  font-bold
                  leading-6
                  text-[var(--cs-color-text-primary)]
                "
              >
                {principle.title}
              </h3>

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
                  {principle.finding}
                </p>
              </div>

              {/* CONSEQUENCE */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    font-[var(--cs-font-mono)]
                    text-[10px]
                    font-normal
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  CONSEQUENCE
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
                  {principle.consequence}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
