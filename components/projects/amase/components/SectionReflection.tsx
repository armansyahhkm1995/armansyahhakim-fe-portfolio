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
      variants={REVEAL_VARIANTS}
      transition={REVEAL_TRANSITION}
      className="flex items-center gap-2 border-t border-[var(--cs-color-border)] py-4"
    >
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
    </motion.header>
  );
}

function ReflectionCard({
  number,
  title,
  description,
}: (typeof REFLECTIONS)[number]) {
  return (
    <motion.article
      variants={REVEAL_VARIANTS}
      transition={REVEAL_TRANSITION}
      className="flex flex-col gap-4"
    >
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
    </motion.article>
  );
}

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-title"
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
          sm:gap-16
        "
      >
        <SectionHeader />

        <div className="flex flex-col gap-6">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-bold
              text-stone-600
            "
          >
            EPILOGUE
          </motion.span>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              w-full
              max-w-[1000px]
              font-[var(--cs-font-serif)]
              text-5xl
              font-normal
              leading-[1.05]
              text-neutral-900
              sm:text-6xl
              lg:text-7xl
              lg:leading-[76px]
            "
          >
            &quot;EXPERIENCE DESIGN IS NOT ALWAYS AN APP.&quot;
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
