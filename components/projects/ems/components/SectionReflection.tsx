"use client";

import { motion } from "motion/react";

interface ReflectionLearning {
  number: string;
  title: string;
  description: string;
}

const REFLECTION_LEARNINGS: ReflectionLearning[] = [
  {
    number: "01",
    title: "System understanding precedes interface design",
    description:
      "Building UI cards is easy. Mapping those cards to dynamic Modbus meter topologies, gateway packet constraints, and ThingsBoard entities is where real enterprise value is won.",
  },
  {
    number: "02",
    title: "Role boundaries create interface boundaries",
    description:
      "We discovered early that administrators, daily floor managers, and financial executives operate in separate mental universes. The interface must adapt contextually to protect high-stakes hardware controls.",
  },
  {
    number: "03",
    title: "Acknowledge and design around hardware latency",
    description:
      "In IoT design, requested state ≠ actual state. When users toggle critical relays, showing instantaneous confirmation is a lie that breeds confusion. Let the hardware confirm the state in its own time.",
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

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-title"
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
              14
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
              Reflection &amp; Learnings
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
            SYSTEM DESIGN INSIGHTS
          </span>
        </motion.div>

        {/* Epilogue */}
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
          "
        >
          <div
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-semibold
              text-[var(--cs-color-text-secondary)]
            "
          >
            EPILOGUE
          </div>

          <blockquote
            id="reflection-title"
            className="
              m-0
              w-full
              max-w-[1000px]
              font-[var(--cs-font-sans)]
              text-5xl
              font-normal
              leading-[1.05]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-6xl
              sm:leading-[1.05]
              lg:text-7xl
              lg:leading-[76px]
            "
          >
            &quot;THE SYSTEM PRECEDES THE SCREEN.&quot;
          </blockquote>

          <p
            className="
              w-full
              max-w-[1080px]
              font-[var(--cs-font-sans)]
              text-2xl
              font-normal
              leading-[1.35]
              text-[var(--cs-color-text-secondary)]
              sm:text-3xl
              lg:text-4xl
              lg:leading-[1.235]
            "
          >
            Designing a software utility for complex physical systems requires
            checking your pure aesthetic hubris at the door. You cannot create a
            useful dashboard until you map the electrical lines and understand
            how hardware networks communicate.
          </p>
        </motion.div>

        {/* Learnings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="flex w-full flex-col"
        >
          {REFLECTION_LEARNINGS.map((learning) => (
            <article
              key={learning.number}
              className="
                flex
                w-full
                flex-col
                gap-4
                border-t
                border-[var(--cs-color-border)]
                py-6
                first:pt-0
                last:border-b
              "
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-lg
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {learning.number}
              </div>

              <h3
                className="
                  font-[var(--cs-font-sans)]
                  text-base
                  font-bold
                  text-black
                "
              >
                {learning.title}
              </h3>

              <p
                className="
                  w-full
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-normal
                  leading-6
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {learning.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
