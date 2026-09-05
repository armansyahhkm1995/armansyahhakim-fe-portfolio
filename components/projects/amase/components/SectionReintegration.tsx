"use client";

import { motion } from "motion/react";

const REINTEGRATION_SERVICES = [
  "Family Support",
  "Employment Assistance",
  "Education Programs",
  "Mental Well-being",
  "Financial Aid",
  "Legal Support",
  "Community Mentoring",
  "24/7 Helplines",
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
          06
        </span>

        <h2
          id="reintegration-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Reintegration Ecosystem
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
        THE MULTI-ORGANISATIONAL MAP
      </motion.p>
    </motion.header>
  );
}

export default function SectionReintegration() {
  return (
    <section
      id="reintegration"
      aria-labelledby="reintegration-title"
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
            items-center
            gap-6
            text-center
          "
        >
          <motion.h3
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              w-full
              text-left
              font-[var(--cs-font-serif)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-[-0.02em]
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
            "
          >
            ACTS does not operate in isolation.
          </motion.h3>

          <motion.p
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              w-full
              text-left
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            The user may need to navigate multiple organisations, service types,
            eligibility conditions, locations, and contact methods. A single
            person is surrounded by family support, employment, education,
            community, activities, mental well-being, financial assistance,
            legal services, mentoring, helplines, NGOs, and government services.
          </motion.p>
        </motion.div>

        {/* ECOSYSTEM MAP */}
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
            items-center
            gap-8
            rounded-xl
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-6
            sm:gap-10
            sm:p-10
            lg:p-16
          "
        >
          <motion.p
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="
              font-[var(--cs-font-mono)]
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-stone-600
              sm:text-sm
            "
          >
            REINTEGRATION ECOSYSTEM MAP
          </motion.p>

          <motion.div
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="
              flex
              w-full
              flex-col
              items-center
              gap-7
              overflow-hidden
              rounded-xl
              border
              border-[var(--cs-color-border)]
              bg-white
              p-6
              sm:p-8
            "
          >
            {/* PERSON */}
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-stone-600
                px-3.5
                py-2.5
              "
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-white"
              />

              <span
                className="
                  font-[var(--cs-font-mono)]
                  text-xs
                  font-bold
                  text-white
                  sm:text-sm
                "
              >
                PERSON (PIE)
              </span>
            </div>

            {/* CONNECTOR */}
            <div
              aria-hidden="true"
              className="
                relative
                h-5
                w-5
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-2.5
                  w-1.5
                  -translate-x-1/2
                  -translate-y-1/2
                  border-b-2
                  border-stone-600
                  rotate-45
                "
              />
            </div>

            {/* SERVICES */}
            <div
              className="
                flex
                w-full
                flex-wrap
                justify-center
                gap-3
              "
            >
              {REINTEGRATION_SERVICES.map((service, index) => (
                <motion.div
                  key={service}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={REVEAL_VARIANTS}
                  transition={{
                    ...REVEAL_TRANSITION,
                    delay: 0.15 + index * 0.05,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-[var(--cs-color-border)]
                    bg-white
                    px-3.5
                    py-2.5
                  "
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-stone-600"
                  />

                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-semibold
                      text-[var(--cs-color-text-secondary)]
                      sm:text-sm
                    "
                  >
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FIGURE */}
        {/* VIDEO */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="
          flex
          w-full
          flex-col
          gap-3
          overflow-hidden
        "
        >
          <div
            className="
            relative
            aspect-video
            w-full
            overflow-hidden
            rounded-sm
          "
          >
            <iframe
              src="https://www.youtube.com/embed/8Uorr-mb8m8"
              title="Community Based Programme"
              className="
              absolute
              inset-0
              h-full
              w-full
            "
              loading="lazy"
              allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "
              allowFullScreen
            />
          </div>

          <figcaption
            className="
            font-[var(--cs-font-mono)]
            text-[10px]
            font-medium
            uppercase
            tracking-wide
            text-[var(--cs-color-text-muted)]
          "
          >
            FIG. 06A — COMMUNITY SUPPORT LANDSCAPE · SINGAPORE REINTEGRATION
            SERVICES
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
