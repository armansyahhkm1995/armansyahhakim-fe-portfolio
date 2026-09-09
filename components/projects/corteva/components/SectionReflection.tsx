"use client";

import SectionDivider from "./SectionDivider";

import { motion } from "framer-motion";

const REFLECTIONS = [
  {
    num: "01",
    title: "CONTEXT CHANGES THE SOLUTION",
    body: "A product can be explained almost anywhere. But its value may only become meaningful in the environment where it is used. Real agricultural adoption happens in the dirt, not in PPT slides.",
  },
  {
    num: "02",
    title: "SYSTEMS CREATE STRONGER EXPERIENCES",
    body: "The strongest part of the project was not one single installation, but how the field, plots, community, research and harvest connected into one journey. If one piece broke, the entire proof sequence collapsed.",
  },
  {
    num: "03",
    title: "DESIGN DECISIONS FOLLOW BEHAVIOR",
    body: "Instead of starting with what the event should look like, I learned to start with what people should be able to see, understand and do. Spacing parameters and walkway elevations must solve for human sightlines.",
  },
];

const lines = ["I used to think i was", "designing an event"];

export default function SectionReflection() {
  return (
    <section id="reflection" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <SectionDivider
          number="08"
          title="Reflection & Learning"
          subtitle="CORTEVA AGRISCIENCE / PERSONAL INSIGHT"
        />

        {/* Epilogue */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16">
          <span
            className="
              font-[var(--cs-font-mono)]
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.06em]
              text-[var(--cs-color-text-primary)]
            "
          >
            EPILOGUE
          </span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
            font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]
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
          </motion.h2>

          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-lg font-normal leading-8 text-[var(--cs-color-text-secondary)] sm:text-xl">
            Looking back, I was really designing how people moved through
            information. The most important lesson was that experience design
            does not always begin with a screen. Sometimes the interface is a
            field. Sometimes the interaction is a conversation. Sometimes the
            information architecture is a physical path through a landscape.
          </p>
        </div>

        {/* Reflections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {REFLECTIONS.map((item) => (
            <article
              key={item.num}
              className="
                flex
                flex-col
                gap-3
                border-t
                border-[var(--cs-color-border)]
                pt-6
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-[18px]
                  font-bold
                  text-[var(--cs-color-accent)]
                "
              >
                {item.num}
              </span>

              <h4
                className="
                  font-[var(--cs-font-sans)]
                  text-[16px]
                  font-bold
                  text-[var(--cs-color-text-primary)]
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  font-[var(--cs-font-sans)]
                  text-[14px]
                  leading-[1.65]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
