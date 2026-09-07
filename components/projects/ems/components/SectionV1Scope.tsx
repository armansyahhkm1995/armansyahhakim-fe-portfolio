"use client";

import { motion } from "motion/react";

interface ScopeCard {
  label: string;
  items: string[];
  variant: "out-of-scope" | "release-plan";
}

const SCOPE_CARDS: ScopeCard[] = [
  {
    label: "A — DELIBERATE OUT OF SCOPE PARAMETERS",
    variant: "out-of-scope",
    items: [
      "— Utilities other than electricity (Gas, Water, Air metrics excluded)",
      "— Complex ML-driven energy predictive profiling engines",
      "— Automated utility invoice and cost accounting processing",
    ],
  },
  {
    label: "B — TECHNICAL RELEASE PLAN SCHEDULE",
    variant: "release-plan",
    items: [
      "— EMS v1.1: Mobile notifications, multi-role alarm escalation rules",
      "— EMS v1.2: Machine learning anomalies baseline integration, dynamic carbon indices",
    ],
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

export default function SectionV1Scope() {
  return (
    <section
      id="v1 scope"
      aria-labelledby="v1-scope-title"
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

        {/* Section meta */}
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
              13
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
              V1 Scope &amp; Boundaries
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
            ENGINEERING BOUNDARIES
          </span>
        </motion.div>

        {/* Introduction */}
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
            items-start
            gap-6
            lg:flex-row
            lg:gap-20
          "
        >
          <h2
            id="v1-scope-title"
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
              lg:max-w-[520px]
            "
          >
            What V1 deliberately did not solve.
          </h2>

          <p
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
              lg:flex-1
            "
          >
            To hit timeline schedules, we drew strict functional scope
            parameters. We prioritized the core database and UI reliability
            engine over speculative automation layers or broad utility models.
          </p>
        </motion.div>

        {/* Scope cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            lg:grid-cols-2
            lg:gap-10
          "
        >
          {SCOPE_CARDS.map((card) => (
            <article
              key={card.label}
              className="
                flex
                min-h-0
                flex-col
                gap-4
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-6
                sm:p-8
              "
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {card.label}
              </div>

              <ul className="flex w-full flex-col gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className={`
                      font-[var(--cs-font-sans)]
                      text-sm
                      leading-5
                      ${
                        card.variant === "release-plan"
                          ? "font-semibold text-black"
                          : "font-normal text-[var(--cs-color-text-secondary)]"
                      }
                    `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
