"use client";

import { motion } from "motion/react";

interface ContextRow {
  condition: string;
  consequence: string;
}

const CONTEXT_ROWS: ContextRow[] = [
  {
    condition: "Location-dependent monitoring",
    consequence:
      "Cannot check usage remotely; anomalies go unnoticed until monthly billing cycles.",
  },
  {
    condition: "Manual device operation",
    consequence:
      "Requires physical presence of guards or facilities staff for device ON/OFF tasks.",
  },
  {
    condition: "No remote control",
    consequence:
      "Delayed response to energy waste or equipment overload. Overheating devices remain active.",
  },
  {
    condition: "Manual scheduling",
    consequence:
      "Repetitive daily tasks; lighting and AC systems rely on staff memory during holidays.",
  },
  {
    condition: "No structured historical data",
    consequence:
      "Cannot analyze trends, benchmark room performance, or run preventative diagnostics.",
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

export default function SectionContext() {
  return (
    <section
      id="context"
      aria-labelledby="project-context-title"
      className="
        w-full
        bg-[var(--cs-color-bg)]
        px-[var(--cs-content-padding)]
        pt-[var(--cs-section-padding)]
        pb-6
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-5
        "
      >
        {/* Section divider */}

        <div
          aria-hidden="true"
          className="h-px w-full bg-[var(--cs-color-border)]"
        />

        {/* Section label */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              01
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Project Context
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
            OPERATIONAL FRAGMENTATION
          </span>
        </motion.div>

        {/* Intro */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
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
          <h2
            id="project-context-title"
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              lg:max-w-[520px]
              lg:text-5xl
              lg:leading-[1.01]
            "
          >
            The system started with a simple operational problem.
          </h2>

          <p
            className="
              flex-1
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            Before the introduction of EMS, building managers had no central
            eyes. Each wing, HVAC unit, and server room operated as isolated
            electrical islands. Recognizing optimization opportunities was
            impossible without physical, log-book monitoring of meters—a
            labor-intensive task that yielded stale, retrospective statistics
            instead of runtime operational agency.
          </p>
        </motion.div>

        {/* Existing condition table */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="flex w-full flex-col gap-12"
        >
          <div
            className="
              w-full
              overflow-hidden
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-2
                bg-stone-300/40
                p-4
                sm:grid-cols-[minmax(220px,384px)_1fr]
                sm:gap-6
              "
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-primary)]
                "
              >
                EXISTING CONDITION
              </div>

              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-primary)]
                "
              >
                OPERATIONAL CONSEQUENCE
              </div>
            </div>

            <div
              className="
                divide-y
                divide-[var(--cs-color-border)]
              "
            >
              {CONTEXT_ROWS.map((row) => (
                <div
                  key={row.condition}
                  className="
                    grid
                    grid-cols-1
                    gap-2
                    p-4
                    sm:grid-cols-[minmax(220px,384px)_1fr]
                    sm:gap-6
                  "
                >
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-sm
                      font-semibold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {row.condition}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-sm
                      font-normal
                      leading-6
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.consequence}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirement statement */}

          <p
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              leading-5
              text-[var(--cs-color-text-muted)]
            "
          >
            The initial requirement was clear: make electricity monitoring and
            control available through a centralized platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
