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

const lines = ["The system precedes the", "screen"];

export default function SectionReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-title"
      className="p-8 md:pt-24 lg:pt-28"
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
        <div
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
        </div>

        {/* Epilogue */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-6
          "
        >
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
        </div>

        {/* Learnings */}
        <div className="flex w-full flex-col">
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
        </div>
      </div>
    </section>
  );
}
