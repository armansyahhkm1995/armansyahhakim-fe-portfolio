"use client";

import Image from "next/image";
import SectionDivider from "./SectionDivider";
import { motion } from "motion/react";

const BEFORE_STEPS = [
  { num: "01", title: "Information" },
  { num: "02", title: "Presentation" },
  { num: "03", title: "Audience" },
];

const AFTER_STEPS = [
  {
    num: "01",
    title: "Information",
    desc: "Context and product framing",
  },
  {
    num: "02",
    title: "Observation",
    desc: "Direct comparison in the field",
  },
  {
    num: "03",
    title: "Comparison",
    desc: "Side-by-side yield and health",
  },
  {
    num: "04",
    title: "Discussion",
    desc: "Agronomist-led interpretation",
  },
  {
    num: "05",
    title: "Demonstration",
    desc: "Applied practice and technique",
  },
  {
    num: "06",
    title: "Harvest",
    desc: "Economic proof and adoption",
  },
];

const ARTIFACTS = [
  {
    label: "Early concept",
    src: "/images/corteva/SectionHypothesis - Early concept.webp",
    alt: "Early flow concept showing the proposed fixed experience flow",
  },
  {
    label: "Fixed flow",
    src: "/images/corteva/SectionHypothesis - Fixed flow.webp",
    alt: "Fixed flow concept showing the proposed fixed experience flow",
  },
  {
    label: "Prototype design A",
    src: "/images/corteva/SectionHypothesis - Prototype design A.webp",
    alt: "Early prototype design A for the field experience",
  },
  {
    label: "Prototype design B",
    src: "/images/corteva/SectionHypothesis - Prototype design B.webp",
    alt: "Early prototype design B for the field experience",
  },
  {
    label: "Tent placement",
    src: "/images/corteva/SectionHypothesis - Tent placement.webp",
    alt: "Early concept showing tent placement within the field experience",
  },
  {
    label: "Walkpath overview",
    src: "/images/corteva/SectionHypothesis - Walkpath overview.webp",
    alt: "Overview of the proposed visitor walkpath through the field",
  },
  {
    label: "Demo signage placement",
    src: "/images/corteva/SectionHypothesis - Demo signage placement.webp",
    alt: "Early concept showing demonstration signage placement",
  },
  {
    label: "Photo stage overview",
    src: "/images/corteva/SectionHypothesis - Photo stage overview.webp",
    alt: "Early concept showing the photo stage within the experience",
  },
];

const lines = ["What if the field", "became the medium?"];

export default function SectionHypothesis() {
  return (
    <section id="hypothesis" className="py-[var(--cs-section-padding)]">
      <div
        className="
          mx-auto
          max-w-[var(--cs-content-max-width)]
          px-[var(--cs-content-padding)]
        "
      >
        <SectionDivider
          number="04"
          title="The Hypothesis"
          subtitle="CORTEVA AGRISCIENCE / FIELD STUDY"
        />

        {/* Proposition */}

        {/* Proposition */}

        <div className="mb-12 flex flex-col gap-4">
          <span
            className="
      font-[var(--cs-font-sans)]
      text-sm
      font-semibold
      uppercase
      tracking-[0.04em]
      text-[var(--cs-color-text-primary)]
    "
          >
            PROPOSITION CONCEPT
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
        </div>

        {/* Core hypothesis */}

        <div
          className="
            mb-16
            border
            border-[var(--cs-color-border)]
            bg-[var(--cs-color-bg-alt)]
            p-[clamp(1.5rem,3vw,2.5rem)]
          "
        >
          <p
            className="
              max-w-[1100px]
              font-serif
              text-[clamp(1.5rem,3vw,2.5rem)]
              font-normal
              leading-[1.35]
              text-[var(--cs-color-text-primary)]
            "
          >
            &ldquo;Instead of asking people to imagine how the products perform,
            put them close enough to see the difference themselves.&rdquo;
          </p>
        </div>

        {/* Transformation diagram */}

        <div
          className="
            mb-16
            grid
            grid-cols-1
            gap-10
            border-y
            border-[var(--cs-color-border)]
            py-12
            md:grid-cols-[1fr_1px_1.4fr]
            md:gap-12
            lg:gap-16
          "
        >
          {/* Before */}

          <div className="opacity-55">
            <div className="mb-8 flex flex-col gap-2">
              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.04em]
                  text-[var(--cs-color-text-muted)]
                "
              >
                BEFORE
              </span>

              <h3
                className="
                  font-serif
                  text-[clamp(1.375rem,2vw,1.75rem)]
                  font-normal
                  leading-[1.3]
                  text-[var(--cs-color-text-primary)]
                "
              >
                The old way
              </h3>

              <p
                className="
                  font-mono
                  text-[11px]
                  font-semibold
                  leading-[1.5]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                A conventional, passive event model that keeps the field at a
                distance.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {BEFORE_STEPS.map((step) => (
                <li key={step.num} className="flex items-center gap-3">
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-xs
                      text-[var(--cs-color-accent)]
                    "
                  >
                    {step.num}
                  </span>

                  <span
                    className="
                      font-mono
                      text-xs
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {step.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Divider */}

          <div
            className="
              h-px
              w-full
              bg-[var(--cs-color-border)]
              md:h-full
              md:w-px
            "
          />

          {/* After */}

          <div>
            <div className="mb-8 flex flex-col gap-2">
              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.04em]
                  text-[var(--cs-color-accent)]
                "
              >
                AFTER [PROPOSED]
              </span>

              <h3
                className="
                  font-serif
                  text-[clamp(1.375rem,2vw,1.75rem)]
                  font-normal
                  leading-[1.3]
                  text-[var(--cs-color-text-primary)]
                "
              >
                The field-based experience
              </h3>

              <p
                className="
                  font-mono
                  text-[11px]
                  font-semibold
                  leading-[1.5]
                  text-[var(--cs-color-text-secondary)]
                "
              >
                A layered, experiential model that turns observation into proof.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {AFTER_STEPS.map((step) => (
                <li
                  key={step.num}
                  className="
                    flex
                    items-start
                    gap-3
                    border-b
                    border-[var(--cs-color-border)]
                    py-2
                  "
                >
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-xs
                      text-[var(--cs-color-accent)]
                    "
                  >
                    {step.num}
                  </span>

                  <div className="flex flex-col">
                    <span
                      className="
                        font-mono
                        text-xs
                        leading-[1.4]
                        text-[var(--cs-color-text-primary)]
                      "
                    >
                      {step.title}
                    </span>

                    <span
                      className="
                        mt-0.5
                        font-sans
                        text-xs
                        leading-[1.5]
                        text-[var(--cs-color-text-secondary)]
                      "
                    >
                      {step.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Early concepts */}

        <div className="mt-12">
          <span
            className="
              mb-6
              block
              font-mono
              text-[11px]
              uppercase
              tracking-[0.04em]
              text-[var(--cs-color-text-muted)]
            "
          >
            CONCEPTS
          </span>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {ARTIFACTS.map((artifact) => (
              <figure key={artifact.label} className="flex flex-col gap-2">
                <div
                  className="
                    relative
                    aspect-[4/3]
                    w-full
                    overflow-hidden
                    bg-[var(--cs-color-bg-alt)]
                  "
                >
                  <Image
                    src={artifact.src}
                    alt={artifact.alt}
                    width={1200}
                    height={900}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-[1.02]
                    "
                  />
                </div>

                <figcaption
                  className="
                    font-mono
                    text-[11px]
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  {artifact.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
