"use client";

import { motion } from "motion/react";

const IA_SECTIONS = [
  {
    number: "01",
    title: "HOME",
    items: [
      "Recommendations",
      "Nearby Maps",
      "Crisis Helplines",
      "Quick Categories",
      "Upcoming sessions",
    ],
  },
  {
    number: "02",
    title: "EXPLORE",
    items: [
      "Ecosystem Search",
      "Recommended Feed",
      "All Support Directories",
      "Opportunities",
      "NGO Listings",
    ],
  },
  {
    number: "03",
    title: "RESOURCE DETAIL",
    items: [
      "Relevance Explanation",
      "Who It Is For",
      "What To Expect",
      "Availability & Location",
      "Action CTA",
    ],
  },
  {
    number: "04",
    title: "MENTORING",
    items: [
      "My Peer Mentors",
      "Support Groups",
      "Session Scheduler",
      "Helpful Resources",
      "Direct Chat",
    ],
  },
  {
    number: "05",
    title: "PROFILE",
    items: [
      "My Bio & Interests",
      "Job Skills",
      "Work Experience",
      "Saved Resources",
      "Account Settings",
    ],
  },
] as const;

const USER_FLOWS = [
  {
    number: "1",
    label: "GUIDED DISCOVERY",
    quote: '"I don\'t know where to start."',
    steps: [
      "Welcome UI",
      "Optional Diagnostic",
      "Tailored Recommendation",
      "Resource Detail",
      "Act / Dial",
    ],
  },
  {
    number: "2",
    label: "INDEPENDENT EXPLORATION",
    quote: '"I want to explore this myself."',
    steps: [
      "Dashboard Home",
      "Explore Screen",
      "Filters / Categories",
      "Matching Results",
      "Save for Later",
    ],
  },
  {
    number: "3",
    label: "IMMEDIATE SUPPORT",
    quote: '"I need someone to contact right now."',
    steps: [
      "Home Base",
      "Emergency Helplines",
      "Categorized Call Options",
      "Direct Phone Protocol",
    ],
  },
  {
    number: "4",
    label: "ONGOING SUPPORT",
    quote: '"I want to continue receiving support."',
    steps: [
      "Mentoring Nav",
      "Assigned Group Feed",
      "Session Booker",
      "Ecosystem Chat",
    ],
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
          10
        </span>

        <h2
          id="ia-flow-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Information Architecture & Key User Flows
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
        CORE MAP TREE
      </motion.p>
    </motion.header>
  );
}

function InformationArchitecture() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className="
        grid
        w-full
        gap-4
        sm:grid-cols-2
        lg:grid-cols-5
      "
    >
      {IA_SECTIONS.map((section, index) => (
        <motion.article
          key={section.number}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: index * 0.08,
          }}
          className="
            flex
            flex-col
            gap-4
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
          "
        >
          <h3
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-bold
              text-stone-600
            "
          >
            {section.number} {section.title}
          </h3>

          <div
            aria-hidden="true"
            className="h-px w-full bg-[var(--cs-color-border)]"
          />

          <ul className="flex flex-col gap-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-center
                  gap-1.5
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-normal
                  text-[var(--cs-color-text-secondary)]
                "
              >
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-xs bg-stone-600"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </motion.div>
  );
}

function UserFlowCard({
  flow,
  index,
}: {
  flow: (typeof USER_FLOWS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={REVEAL_VARIANTS}
      transition={{
        ...REVEAL_TRANSITION,
        delay: index * 0.08,
      }}
      className="
        flex
        w-full
        flex-col
        gap-4
        border
        border-[var(--cs-color-border)]
        bg-stone-50
        p-5
        sm:p-6
      "
    >
      {/* FLOW HEADER */}
      <div
        className="
          flex
          flex-col
          gap-2
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:gap-6
        "
      >
        <h3
          className="
            font-[var(--cs-font-mono)]
            text-xs
            font-bold
            text-stone-600
          "
        >
          FLOW {flow.number} — {flow.label}
        </h3>

        <p
          className="
            font-[var(--cs-font-serif)]
            text-base
            font-normal
            text-[var(--cs-color-text-secondary)]
            sm:text-lg
          "
        >
          {flow.quote}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="h-px w-full bg-[var(--cs-color-border)]"
      />

      {/* FLOW STEPS */}
      <div
        className="
          -mx-1
          overflow-x-auto
          px-1
          pb-1
        "
      >
        <ol
          className="
            flex
            min-w-max
            items-center
            gap-3
          "
          aria-label={`Flow ${flow.number}: ${flow.label}`}
        >
          {flow.steps.map((step, stepIndex) => (
            <li key={step} className="flex items-center gap-3">
              <div
                className="
                  rounded-sm
                  border
                  border-[var(--cs-color-border)]
                  bg-white
                  px-4
                  py-2
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-normal
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {step}
                </span>
              </div>

              {stepIndex < flow.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.article>
  );
}

function KeyUserFlows() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className="flex w-full flex-col gap-6"
    >
      {USER_FLOWS.map((flow, index) => (
        <UserFlowCard key={flow.number} flow={flow} index={index} />
      ))}
    </motion.div>
  );
}

export default function SectionIaFlow() {
  return (
    <section
      id="ia-flow"
      aria-labelledby="ia-flow-title"
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

        {/* INFORMATION ARCHITECTURE */}
        <InformationArchitecture />

        {/* KEY USER FLOWS */}
        <KeyUserFlows />
      </div>
    </section>
  );
}
