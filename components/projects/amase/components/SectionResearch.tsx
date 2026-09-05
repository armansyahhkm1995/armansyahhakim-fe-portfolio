"use client";

import { motion } from "motion/react";

const RESEARCH_AREAS = [
  {
    number: "1",
    title: "Ecosystem Dynamics",
    description:
      "What types of support exist? Who provides them? How are services distributed across national and grassroots organisations?",
  },
  {
    number: "2",
    title: "User Navigation Needs",
    description:
      "What types of support might people need? What cognitive and structural barriers make services difficult to locate or trust?",
  },
  {
    number: "3",
    title: "Existing App Limits",
    description:
      "What does ACTS currently help users do? Where does the search and filter structure limit discovery and trial?",
  },
  {
    number: "4",
    title: "Competitive Landscape",
    description:
      "How do adjacent services (directories, job boards, mental health tech) help vulnerable groups discover and act on resources?",
  },
] as const;

const COMPARATIVE_ROWS = [
  {
    sector: "Support Directories",
    discovery: "Flat lists",
    search: "Keyword only",
    pattern: "Surface eligibility transparently up front.",
  },
  {
    sector: "Job Platforms",
    discovery: "Personalised feed",
    search: "Highly segmented",
    pattern: "Ensure non-linear explore mode stays accessible.",
  },
  {
    sector: "Community / Mentoring",
    discovery: "Group listings",
    search: "By interest tags",
    pattern: "Differentiate peer chat from institutional aid.",
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
      variants={{
        hidden: {},
        visible: {},
      }}
      className="
        flex
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
      <motion.div
        variants={REVEAL_VARIANTS}
        transition={REVEAL_TRANSITION}
        className="flex items-center gap-2"
      >
        <span
          className="
            font-[var(--cs-font-mono)]
            text-xs
            font-semibold
            text-stone-600
          "
        >
          05
        </span>

        <h2
          id="research-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Research Scope
        </h2>
      </motion.div>

      <motion.p
        variants={REVEAL_VARIANTS}
        transition={{
          ...REVEAL_TRANSITION,
          delay: 0.1,
        }}
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-normal
          text-[var(--cs-color-text-muted)]
        "
      >
        4 CORE LINES OF ENQUIRY
      </motion.p>
    </motion.header>
  );
}

export default function SectionResearch() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
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
        <SectionHeader />

        {/* INTRO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            flex-col
            items-start
            gap-6
          "
        >
          <motion.h3
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              w-full
              max-w-[1280px]
              font-[var(--cs-font-serif)]
              text-4xl
              font-normal
              leading-[1.05]
              tracking-[-0.02em]
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
            "
          >
            Establishing a comprehensive research matrix before building.
          </motion.h3>

          <motion.p
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              w-full
              max-w-[680px]
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            I mapped my research into four distinct areas to ensure the redesign
            was grounded in real-world systemic complexity rather than purely
            aesthetic intuition.
          </motion.p>
        </motion.div>

        {/* RESEARCH MATRIX */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            flex-col
            overflow-hidden
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
          "
        >
          {RESEARCH_AREAS.map((area, index) => (
            <motion.article
              key={area.number}
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * 0.08,
              }}
              className="
                flex
                flex-col
                gap-3
                border-b
                border-[var(--cs-color-border)]
                p-5
                last:border-b-0
                sm:p-6
              "
            >
              <h4
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-bold
                  uppercase
                  text-stone-600
                "
              >
                {area.number} — {area.title}
              </h4>

              <p
                className="
                  max-w-[1100px]
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-normal
                  leading-5
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {area.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* COMPETITIVE RESEARCH */}
        <div
          className="
            flex
            flex-col
            gap-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
            "
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={REVEAL_VARIANTS}
              transition={REVEAL_TRANSITION}
              className="
                w-full
                max-w-[520px]
                font-[var(--cs-font-serif)]
                text-4xl
                font-normal
                leading-[1.02]
                tracking-[-0.02em]
                text-[var(--cs-color-text-primary)]
                sm:text-5xl
                sm:leading-[1.01]
              "
            >
              How do other products solve adjacent problems?
            </motion.h3>

            <motion.div
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
                max-w-[680px]
                border-l-[3px]
                border-stone-600
                pl-5
                sm:pl-6
              "
            >
              <p
                className="
                  font-[var(--cs-font-serif)]
                  text-2xl
                  font-normal
                  leading-[1.2]
                  text-[var(--cs-color-text-primary)]
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Many platforms optimise either for search or personalisation.
                The opportunity for ACTS was to support both without allowing
                personalisation to restrict exploration.
              </p>
            </motion.div>
          </div>

          {/* COMPARATIVE MATRIX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="
              w-full
              overflow-x-auto
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-white
            "
          >
            <div className="min-w-[760px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[12rem_12rem_12rem_minmax(0,1fr)]
                  gap-0
                  border-b
                  border-[var(--cs-color-border)]
                  bg-stone-50
                  p-4
                "
              >
                {[
                  "SECTOR",
                  "DISCOVERY",
                  "SEARCH / FILTER",
                  "KEY PATTERN FOR AMASE",
                ].map((heading) => (
                  <div
                    key={heading}
                    className="
                      font-[var(--cs-font-mono)]
                      text-xs
                      font-bold
                      text-black
                    "
                  >
                    {heading}
                  </div>
                ))}
              </div>

              {/* TABLE ROWS */}
              {COMPARATIVE_ROWS.map((row, index) => (
                <motion.div
                  key={row.sector}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={REVEAL_VARIANTS}
                  transition={{
                    ...REVEAL_TRANSITION,
                    delay: index * 0.08,
                  }}
                  className="
                    grid
                    grid-cols-[12rem_12rem_12rem_minmax(0,1fr)]
                    gap-0
                    border-b
                    border-[var(--cs-color-border)]
                    p-4
                    last:border-b-0
                  "
                >
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-black
                    "
                  >
                    {row.sector}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.discovery}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.search}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-semibold
                      text-stone-600
                    "
                  >
                    {row.pattern}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* THE SHIFT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="
            flex
            flex-col
            gap-6
          "
        >
          <motion.p
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              text-center
              font-[var(--cs-font-mono)]
              text-sm
              font-bold
              uppercase
              text-stone-600
            "
          >
            THE SHIFT
          </motion.p>

          <div
            className="
              grid
              gap-4
              lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]
              lg:gap-6
            "
          >
            {/* BEFORE */}
            <motion.article
              variants={REVEAL_VARIANTS}
              transition={REVEAL_TRANSITION}
              className="
                flex
                min-h-[260px]
                flex-col
                justify-center
                gap-4
                rounded-xl
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-8
                sm:p-12
                lg:p-20
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-normal
                  text-[var(--cs-color-text-muted)]
                "
              >
                BEFORE
              </span>

              <p
                className="
                  font-[var(--cs-font-serif)]
                  text-3xl
                  font-normal
                  leading-[1.1]
                  text-[var(--cs-color-text-primary)]
                  opacity-50
                  sm:text-4xl
                  sm:leading-10
                "
              >
                &quot;Support discovery was treated primarily as a connection
                problem.&quot;
              </p>
            </motion.article>

            {/* DIVIDER */}
            <div
              aria-hidden="true"
              className="
                hidden
                bg-[var(--cs-color-border)]
                lg:block
              "
            />

            {/* AFTER */}
            <motion.article
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: 0.1,
              }}
              className="
                flex
                min-h-[260px]
                flex-col
                justify-center
                gap-4
                rounded-xl
                border
                border-[var(--cs-color-border)]
                bg-white
                p-8
                sm:p-12
                lg:p-20
              "
            >
              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-normal
                  text-stone-600
                "
              >
                AFTER
              </span>

              <div
                className="
                  border-l-2
                  border-stone-600
                  pl-4
                "
              >
                <p
                  className="
                    font-[var(--cs-font-serif)]
                    text-3xl
                    font-normal
                    leading-[1.1]
                    text-[var(--cs-color-text-primary)]
                    sm:text-4xl
                    sm:leading-10
                  "
                >
                  &quot;The larger challenge was navigation across a distributed
                  support ecosystem.&quot;
                </p>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
