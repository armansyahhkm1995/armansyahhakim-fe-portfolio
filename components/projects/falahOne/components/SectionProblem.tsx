"use client";

import { motion } from "motion/react";

interface ProblemStep {
  step: string;
  title: string;
}

interface SystemDivision {
  title: string;
  technologies: string;
}

const PROBLEM_STEPS: ProblemStep[] = [
  {
    step: "STEP 01",
    title: "Different Projects",
  },
  {
    step: "STEP 02",
    title: "Isolated Decisions",
  },
  {
    step: "STEP 03",
    title: "Repeated Design",
  },
  {
    step: "STEP 04",
    title: "Fragmented UX",
  },
];

const SYSTEM_DIVISIONS: SystemDivision[] = [
  {
    title: "SOFTWARE DIVISION",
    technologies:
      "React · Tailwind · Web Dashboard · Control Panels · Unity UI · VR/AR Overlays · VBS Scripting",
  },
  {
    title: "CONTENT DIVISION",
    technologies: "2D · 3D · Social media branding",
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

export default function SectionProblem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
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
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
            flex
            w-full
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
          <div className="flex items-center gap-2">
            <span
              className="
                text-xs
                font-medium
                text-[var(--cs-color-text-secondary)]
              "
            >
              02
            </span>

            <h2
              id="problem-title"
              className="
                text-xs
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Organizational Problem
            </h2>
          </div>

          <span
            className="
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
            "
          >
            CROSS-TEAM LANGUAGE ANALYSIS
          </span>
        </motion.div>

        {/* Problem statement */}
        <div className="flex w-full flex-col gap-8">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              max-w-5xl
              text-4xl
              font-normal
              leading-tight
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
            "
          >
            The problem was not a lack of components. It was a lack of shared
            language.
          </motion.h3>

          {/* Problem chain */}
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              w-full
              rounded-md
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-4
              sm:p-6
            "
          >
            <figcaption className="sr-only">
              Sequence showing how fragmented projects led to fragmented user
              experiences.
            </figcaption>

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]
                sm:items-center
              "
            >
              {PROBLEM_STEPS.map((item, index) => (
                <div key={item.step} className="contents">
                  <div
                    className="
                      flex
                      min-h-20
                      flex-col
                      justify-center
                      rounded-sm
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      p-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-semibold
                        text-[var(--cs-color-text-muted)]
                      "
                    >
                      {item.step}
                    </span>

                    <span
                      className="
                        text-xs
                        font-bold
                        text-[var(--cs-color-text-primary)]
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  {index < PROBLEM_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        text-xl
                        text-[var(--cs-color-text-secondary)]
                        sm:block
                      "
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.figure>

          {/* Core question */}
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.15,
            }}
            className="
              border-l-4
              border-stone-600
              py-4
              pl-6
              sm:py-6
              sm:pl-8
            "
          >
            <p
              className="
                max-w-6xl
                text-2xl
                font-normal
                leading-relaxed
                text-[var(--cs-color-text-secondary)]
                sm:text-3xl
                sm:leading-10
              "
            >
              &quot;How could Falah establish a shared visual language without
              forcing every team and technology into exactly the same
              implementation?&quot;
            </p>
          </motion.blockquote>
        </div>

        {/* Multiple technologies */}
        <div
          className="
            grid
            w-full
            gap-10
            lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* Explanation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="flex flex-col gap-6"
          >
            <h3
              className="
                text-4xl
                font-normal
                leading-tight
                tracking-tight
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              One company. Multiple technologies.
            </h3>

            <p
              className="
                text-base
                font-normal
                leading-6
                text-[var(--cs-color-text-secondary)]
              "
            >
              A design system built only for web interfaces would solve only
              part of the organizational problem. Our platform connects software
              interfaces (React/shadcn), 3D VR simulation environments
              (Unity/VBS), and external marketing materials. We needed an
              adaptable core.
            </p>
          </motion.div>

          {/* System dynamics map */}
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              flex
              w-full
              flex-col
              gap-6
              rounded-lg
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-6
              sm:p-8
            "
          >
            <figcaption
              className="
                text-xs
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              FALAH ONE SYSTEM DYNAMICS MAP
            </figcaption>

            <div className="flex flex-col gap-4">
              {/* Falah One */}
              <div
                className="
                  flex
                  w-36
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  px-5
                  py-4
                "
              >
                <span
                  className="
                    text-xs
                    font-extrabold
                    text-white
                  "
                >
                  FALAH ONE
                </span>
              </div>

              {/* Divisions */}
              {SYSTEM_DIVISIONS.map((division) => (
                <div
                  key={division.title}
                  className="
                    flex
                    flex-col
                    gap-2
                    rounded-sm
                    border
                    border-[var(--cs-color-border)]
                    bg-white
                    p-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {division.title}
                  </span>

                  <p
                    className="
                      text-xs
                      font-normal
                      leading-5
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {division.technologies}
                  </p>
                </div>
              ))}
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
