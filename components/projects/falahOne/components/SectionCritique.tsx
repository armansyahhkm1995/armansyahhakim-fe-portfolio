"use client";

import { motion } from "motion/react";

const ATOMIC_LEVELS = ["Atoms", "Molecules", "Organisms"];

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

export default function SectionCritique() {
  return (
    <section
      id="critique"
      aria-labelledby="methodology-critique-title"
      className="p-8 md:pt-24 lg:pt-28"
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
        {/* Section Header */}
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
            border-t
            border-[var(--cs-color-border)]
            py-4
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
              06
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
              Methodology Critique
            </span>
          </div>

          <span
            className="
              hidden
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
              sm:block
            "
          >
            ATOMIC SYSTEM TESTED VS CONTEXTUAL REALITY
          </span>
        </div>

        {/* Methodology Critique */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-8
            lg:flex-row
            lg:items-start
            lg:gap-20
          "
        >
          {/* Copy */}
          <div
            className="
              flex
              w-full
              max-w-[520px]
              flex-col
              gap-6
            "
          >
            <h2
              id="methodology-critique-title"
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-4xl
                font-normal
                leading-[1.1]
                tracking-tight
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              A familiar methodology did not automatically produce better
              adoption
            </h2>

            <p
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              We initially organized Falah One using the classic Atomic Design
              framework (Atoms, Molecules, Organisms). However, user feedback
              sessions highlighted a problem: cross-team developers found
              looking for components by their natural functional names much
              faster than navigating abstract taxonomies.
            </p>
          </div>

          {/* Atomic Disconnect */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              gap-4
              rounded-lg
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-6
              sm:p-8
            "
          >
            <span
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-semibold
                text-[var(--cs-color-text-muted)]
              "
            >
              THE ATOMIC DISCONNECT
            </span>

            {/* Atomic Flow */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
              aria-label="Atomic Design hierarchy"
            >
              {ATOMIC_LEVELS.map((level, index) => (
                <div key={level} className="flex items-center gap-2">
                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {level}
                  </span>

                  {index < ATOMIC_LEVELS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        text-sm
                        text-[var(--cs-color-text-secondary)]
                      "
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p
              className="
                w-full
                font-[var(--cs-font-sans)]
                text-xs
                font-normal
                leading-5
                text-[var(--cs-color-text-muted)]
              "
            >
              Cross-team users found it more intuitive to identify components by
              their actual names (e.g. Button, Dialog, Card) than by abstract
              categories.
            </p>
          </div>
        </div>

        {/* Core UX Paradigm */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{ ...REVEAL_TRANSITION, delay: 0.15 }}
          className="
            flex
            w-full
            flex-col
            gap-8
            rounded-sm
            border
            border-stone-600
            bg-zinc-100
            p-8
            sm:p-12
            lg:p-16
          "
        >
          <span
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-bold
              text-[var(--cs-color-text-secondary)]
            "
          >
            CORE UX PARADIGM
          </span>

          <blockquote
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
            "
          >
            &quot;The system should optimize for recognition, not theoretical
            purity&quot;
          </blockquote>

          <p
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            A methodology should help the team understand and use the system. If
            the terminology creates unnecessary friction, the system should
            adapt. We migrated from abstract taxonomy to direct naming groups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
