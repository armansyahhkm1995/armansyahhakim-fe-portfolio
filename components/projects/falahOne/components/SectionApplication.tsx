"use client";

import { motion } from "motion/react";

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const APPLICATIONS = [
  {
    src: "/images/falahOne/Energy management system dashboard - Next.webp",
    alt: "Energy management system dashboard",
    caption: "Energy management system dashboard - Next",
    aspectRatio: "1280 / 911",
  },
  {
    src: "/images/falahOne/Virtual training suite - Fighter jet maintenance training showcase - Unity.webp",
    alt: "Virtual training suite for fighter jet maintenance",
    caption:
      "Virtual training suite - Fighter jet maintenance training showcase - Unity",
    aspectRatio: "1280 / 960",
  },
  {
    src: "/images/falahOne/Virtual reality - Internet protocol training - Unity.webp",
    alt: "Virtual reality internet protocol training",
    caption: "Virtual reality - Internet protocol training - Unity",
    aspectRatio: "1280 / 1080",
  },
  {
    src: "/images/falahOne/Virtual reality - Language training - Unity.webp",
    alt: "Virtual reality language training",
    caption: "Virtual reality - Language training - Unity",
    aspectRatio: "1280 / 1080",
  },
] as const;

export default function SectionApplication() {
  return (
    <section
      id="application"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--cs-color-text-secondary)]">
              12
            </span>

            <span className="text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Cross-Team Application
            </span>
          </div>

          <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
            HOW SHAPE AND WEIGHT INFLUENCE ECOSYSTEM PLATFORMS
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[760px] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] md:text-5xl md:leading-[1.01]">
          From components to real products
        </h2>

        {/* Applications */}
        <div className="flex flex-col gap-16 md:gap-20">
          {APPLICATIONS.map((application, index) => (
            <motion.figure
              key={application.caption}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={REVEAL_VARIANTS}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * 0.05,
              }}
              className="flex w-full flex-col gap-6"
            >
              <div
                className="w-full overflow-hidden rounded-sm"
                style={{ aspectRatio: application.aspectRatio }}
              >
                <img
                  src={application.src}
                  alt={application.alt}
                  className="block h-full w-full object-cover"
                />
              </div>

              <figcaption className="text-center text-xs font-normal text-[var(--cs-color-text-muted)]">
                {application.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="text-2xl font-normal leading-10 text-[var(--cs-color-text-secondary)] md:text-3xl"
        >
          AND MANY OTHER MORE
        </motion.p>
      </div>
    </section>
  );
}
