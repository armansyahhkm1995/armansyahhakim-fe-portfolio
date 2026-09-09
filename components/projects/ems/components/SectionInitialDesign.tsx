"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface DesignStage {
  stage: string;
  title: string;
  description: string;
}

interface DesignMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const DESIGN_STAGES: DesignStage[] = [
  {
    stage: "STAGE 1 — INITIAL ASSUMPTION",
    title: "Device-centric listings layout",
    description:
      "We initially built a simple, flat hardware dictionary listing all registered meters. This quickly caused user fatigue as staff had to map physical locations in their heads before running actions.",
  },
  {
    stage: "STAGE 2 — THE DISCOVERY",
    title: "Building → Room → Device context",
    description:
      "Field tests showed building managers operate using physical spatial hierarchies, not flat list indices. We restructured the database schema and interface around a room-oriented model.",
  },
  {
    stage: "STAGE 3 — PRODUCTION UI",
    title: "Asynchronous control handshakes",
    description:
      "Early prototypes failed to handle hardware latency, causing double-clicks during commands. We added a transient 'requested status' indicator on buttons to make hardware latency transparent.",
  },
];

const DESIGN_MEDIA: DesignMedia[] = [
  {
    src: "/images/ems/EMS - Dashboard.webp",
    alt: "Initial EMS design concept exploration",
    width: 1280,
    height: 726,
  },
  {
    src: "/images/ems/EMS - Schedule.webp",
    alt: "Interface refinement exploration",
    width: 1280,
    height: 620,
  },
  {
    src: "/images/ems/EMS - Room.webp",
    alt: "Production interface design",
    width: 1280,
    height: 772,
  },
  {
    src: "/images/ems/EMS - gateway_device.webp",
    alt: "Final interface design exploration",
    width: 1280,
    height: 648,
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

export default function SectionInitialDesign() {
  return (
    <section
      id="initial-design"
      aria-labelledby="initial-design-title"
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
              11
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
              Initial Design Concept
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
            HEURISTIC REFINEMENTS
          </span>
        </div>

        {/* Main heading */}
        <h2
          id="initial-design-title"
          className="
            w-full
            max-w-[1120px]
            font-[var(--cs-font-sans)]
            text-4xl
            font-normal
            leading-[1.1]
            tracking-tight
            text-[var(--cs-color-text-primary)]
            sm:text-5xl
            sm:leading-[1.01]
          "
        >
          The system interface evolved as technical constraints clarified.
        </h2>

        {/* Design evolution stages */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            lg:grid-cols-3
          "
        >
          {DESIGN_STAGES.map((stage) => (
            <article
              key={stage.stage}
              className="
                flex
                min-h-72
                flex-col
                gap-4
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-6
              "
            >
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {stage.stage}
              </div>

              <h3
                className="
                  font-[var(--cs-font-sans)]
                  text-base
                  font-bold
                  text-black
                "
              >
                {stage.title}
              </h3>

              <p
                className="
                  w-full
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-normal
                  leading-5
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {stage.description}
              </p>
            </article>
          ))}
        </div>

        {/* Design exploration media */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="
            flex
            w-full
            flex-col
            gap-8
          "
        >
          {DESIGN_MEDIA.map((media) => (
            <figure
              key={media.src}
              className="
                w-full
                overflow-hidden
                rounded-sm
              "
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={media.width}
                height={media.height}
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
