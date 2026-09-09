"use client";

import { motion } from "motion/react";

const REFLECTIONS = [
  {
    number: "01",
    title: "REFRAMING WORKS",
    description:
      "A client brief outlines an administrative goal. Redesign requires investigating the surrounding human reality. Experience design must target the ecosystem, not just build database forms.",
  },
  {
    number: "02",
    title: "VALIDATION PROTOCOLS",
    description:
      "The next critical step must involve live user tests on our guided personalization flow, checking if stress levels drop and comparing actual success rates of service contact against directory baselines.",
  },
  {
    number: "03",
    title: "ESSENTIAL QUESTION",
    description:
      "How does our interface perform under extreme stress, when a user is in crisis and the screen needs to become a minimal utility? That is our guiding validation compass going forward.",
  },
] as const;

const lines = ["Experience design is not", "always an app"];

function SectionHeader() {
  return (
    <header className="flex items-center gap-2 border-t border-[var(--cs-color-border)] py-4">
      <span
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-semibold
          text-stone-600
        "
      >
        13
      </span>

      <h2
        id="reflection-title"
        className="
          font-[var(--cs-font-sans)]
          text-sm
          font-semibold
          uppercase
          text-stone-600
        "
      >
        Reflection &amp; Learning
      </h2>
    </header>
  );
}

function ReflectionCard({
  number,
  title,
  description,
}: (typeof REFLECTIONS)[number]) {
  return (
    <article className="flex flex-col gap-4">
      <h3
        className="
          font-[var(--cs-font-mono)]
          text-sm
          font-bold
          text-stone-600
        "
      >
        {number} {title}
      </h3>

      <p
        className="
          font-[var(--cs-font-sans)]
          text-sm
          font-normal
          leading-6
          text-neutral-600
        "
      >
        {description}
      </p>
    </article>
  );
}

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection & learning"
      className="p-16 md:pt-24 lg:pt-28"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-12
          sm:gap-16
        "
      >
        <SectionHeader />

        <div className="flex flex-col gap-6">
          <span
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-bold
              text-stone-600
            "
          >
            EPILOGUE
          </span>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            animate="visible"
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
            font-display
            text-[3rem]
            leading-[0.95]
            sm:text-[4.5rem]
            lg:text-[6rem]
            xl:text-[7rem]
            "
          >
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={{
                    hidden: {
                      y: "110%",
                    },
                    visible: {
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h3>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            grid
            w-full
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-4
          "
        >
          {REFLECTIONS.map((reflection) => (
            <ReflectionCard key={reflection.number} {...reflection} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
