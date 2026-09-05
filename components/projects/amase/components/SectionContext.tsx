"use client";

import Image from "next/image";
import { motion } from "motion/react";

const EXISTING_SCREENS = [
  {
    number: "01",
    title: "Home",
    description: "Directory of support services and agencies.",
    src: "/images/amase/Existing home dashboard.webp",
    alt: "Existing ACTS home dashboard",
  },
  {
    number: "02",
    title: "Support Categories",
    description:
      "Browse by category (mental, employment, counseling, networking, etc).",
    src: "/images/amase/Support Categories - Browse by category (mental, employment, counseling, networking, etc).webp",
    alt: "Existing ACTS support categories",
  },
  {
    number: "03",
    title: "Agency Listing",
    description: "List view of agencies with basic details.",
    src: "/images/amase/Existing explore portal.webp",
    alt: "Existing ACTS agency listing",
  },
  {
    number: "04",
    title: "Contact Details",
    description: "Agency contact information and location.",
    src: "/images/amase/Existing resource detail.webp",
    alt: "Existing ACTS resource detail",
  },
] as const;

const PROJECT_META = [
  {
    label: "Role",
    value: "UX/UI Designer & Researcher",
  },
  {
    label: "Project Type",
    value: "Independent Case Study Redesign",
  },
  {
    label: "Platform",
    value: "Mobile iOS / Android",
  },
  {
    label: "Location",
    value: "Singapore",
  },
  {
    label: "Timeline",
    value: "2019 Involvement / 2026 Revisit",
  },
  {
    label: "Status",
    value: "Completed Redesign Investigation",
  },
] as const;

const TITLE_LINES = [
  "AMASE —",
  "REDESIGNING AN",
  "EXISTING SOCIAL",
  "SUPPORT PLATFORM",
] as const;

const SUBTITLE =
  "(I designed it in 2019, when I was still a junior UX designer)";

export default function SectionContext() {
  return (
    <section
      id="context"
      aria-labelledby="context-title"
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
          w-full
          max-w-[var(--cs-content-max-width)]
        "
      >
        {/* ─────────────────────────────────────────────
            INTRO
        ────────────────────────────────────────────── */}
        <header className="flex flex-col gap-4">
          <p
            className="
              font-[var(--cs-font-mono)]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-[var(--cs-color-text-secondary)]
            "
          >
            AMASE · REDESIGNING SOCIAL SUPPORT PLATFORMS · 2026 REVISIT
          </p>

          <motion.h1
            id="context-title"
            initial="hidden"
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
            {TITLE_LINES.map((line, index) => (
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

            <span className="mt-3 block overflow-hidden">
              <motion.span
                className="
                block
                max-w-[900px]
                text-[0.48em]
                leading-[1.05]
                tracking-[-0.015em]
            "
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
                  delay: 0.15 + TITLE_LINES.length * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {SUBTITLE}
              </motion.span>
            </span>
          </motion.h1>

          <p
            className="
              mt-2
              max-w-[800px]
              font-[var(--cs-font-sans)]
              text-base
              leading-7
              text-[var(--cs-color-text-secondary)]
              sm:text-lg
              sm:leading-8
            "
          >
            Investigating how people with in-prison experience navigate
            Singapore&apos;s reintegration support ecosystem, and how ACTS could
            help make that support easier to find, understand, and access.
          </p>
        </header>

        {/* ─────────────────────────────────────────────
            PROJECT META
        ────────────────────────────────────────────── */}
        <dl
          className="
            mt-10
            grid
            grid-cols-2
            gap-x-8
            gap-y-6
            border-t
            border-[var(--cs-color-border)]
            pt-6
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-x-6
          "
        >
          {PROJECT_META.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt
                className="
                  font-[var(--cs-font-mono)]
                  text-[10px]
                  font-normal
                  uppercase
                  tracking-[0.04em]
                  text-[var(--cs-color-text-muted)]
                "
              >
                {item.label}
              </dt>

              <dd
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-medium
                  leading-5
                  text-[var(--cs-color-text-primary)]
                "
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* ─────────────────────────────────────────────
            HERO IMAGE
        ────────────────────────────────────────────── */}
        <figure className="mt-12">
          <div
            className="
              relative
              aspect-[3/2]
              w-full
              overflow-hidden
              bg-[var(--cs-color-bg-alt)]
              sm:aspect-[16/10]
            "
          >
            <Image
              src="/images/amase/Assoc Prof Muhammad Faishal Ibrahim chatting with inmates from the Integrated Criminogenic Programme.webp"
              alt="Assoc Prof Muhammad Faishal Ibrahim chatting with inmates from the Integrated Criminogenic Programme"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
              className="
                object-cover
                object-center
              "
            />
          </div>

          <figcaption
            className="
              mt-3
              font-[var(--cs-font-mono)]
              text-[10px]
              font-semibold
              uppercase
              leading-4
              text-[var(--cs-color-text-muted)]
            "
          >
            FIG. 01 — Assoc Prof Muhammad Faishal Ibrahim chatting with inmates
            from the Integrated Criminogenic Programme
          </figcaption>
        </figure>

        {/* ─────────────────────────────────────────────
            EXISTING PRODUCT SNAPSHOT
        ────────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col items-center gap-4">
            <p
              className="
                font-[var(--cs-font-mono)]
                text-xs
                font-semibold
                uppercase
                tracking-[0.04em]
                text-[var(--cs-color-text-muted)]
              "
            >
              The existing product as of 2019
            </p>

            <div
              className="
                flex
                items-center
                gap-5
                font-[var(--cs-font-sans)]
                text-xs
                font-medium
              "
            >
              <a
                href="#"
                className="
                  text-[var(--cs-color-accent)]
                  underline
                  underline-offset-2
                  transition-opacity
                  hover:opacity-60
                "
              >
                Google Play Store
              </a>

              <a
                href="#"
                className="
                  text-[var(--cs-color-accent)]
                  underline
                  underline-offset-2
                  transition-opacity
                  hover:opacity-60
                "
              >
                App Store
              </a>
            </div>
          </div>

          {/* Mobile: horizontal scroll
              Desktop: four-column grid */}
          <div
            className="
              mt-8
              flex
              flex-col
              snap-x
              snap-mandatory
              gap-6
              overflow-x-auto
              pb-4
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:grid
              sm:grid-cols-2
              sm:overflow-visible
              md:grid-cols-4
            "
          >
            {EXISTING_SCREENS.map((screen) => (
              <figure
                key={screen.number}
                className="
                  mx-auto
                  w-[220px]
                  shrink-0
                  snap-start
                  sm:w-full
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-[var(--cs-color-border)]
                    bg-[var(--cs-color-bg-alt)]
                    p-3
                    sm:p-4
                  "
                >
                  <div className="relative aspect-[228/590] overflow-hidden rounded-lg bg-stone-100">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="
                        (max-width: 639px) 220px,
                        (max-width: 1023px) 40vw,
                        228px
                      "
                      className="object-cover"
                    />
                  </div>
                </div>

                <figcaption className="mt-3 flex flex-col gap-1">
                  <p
                    className="
                      font-[var(--cs-font-mono)]
                      text-center
                      text-[10px]
                      uppercase
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {screen.number} {screen.title}
                  </p>

                  <p
                    className="
                      text-center
                      font-[var(--cs-font-sans)]
                      text-xs
                      leading-4
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    {screen.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
