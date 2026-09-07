"use client";

import { motion } from "motion/react";

interface AvailabilityState {
  status: string;
  description: string;
  indicatorClassName: string;
  statusClassName: string;
}

const AVAILABILITY_STATES: AvailabilityState[] = [
  {
    status: "STATE: ONLINE / REPORTING",
    description:
      "Device actively checks in and returns telemetry within the standard polling window. Remote control is fully available.",
    indicatorClassName: "bg-stone-600",
    statusClassName: "text-[var(--cs-color-text-secondary)]",
  },
  {
    status: "STATE: OFFLINE / ALERTED",
    description:
      "Telemetry missed for > 120s. An alarm is generated, staff are notified, and control requests are locked out.",
    indicatorClassName: "bg-red-500",
    statusClassName: "text-red-500",
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

export default function SectionDeviceAvailability() {
  return (
    <section
      id="device availability"
      aria-labelledby="device-availability-title"
      className="
        w-full
        bg-[var(--cs-color-bg)]
        px-[var(--cs-content-padding)]
        pt-[var(--cs-section-padding)]
        pb-6
      "
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
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
              09
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
              Device Availability
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
            OPERATIONAL ALERT SYSTEM
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="
            flex
            w-full
            flex-col
            items-start
            gap-6
            lg:flex-row
            lg:gap-20
          "
        >
          <h2
            id="device-availability-title"
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
              lg:max-w-[520px]
            "
          >
            Control is only useful when the device is reachable.
          </h2>

          <p
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
              lg:flex-1
            "
          >
            The system tracks connection pulses continuously. If a smart meter
            fails to check in within its expected telemetry interval window, it
            is flagged. This changes the interface to block control interactions
            until connection is restored.
          </p>
        </motion.div>

        {/* Availability states */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >
          {AVAILABILITY_STATES.map((state) => (
            <div
              key={state.status}
              className="
                flex
                flex-col
                gap-3
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-6
              "
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className={`
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    ${state.indicatorClassName}
                  `}
                />

                <span
                  className={`
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-bold
                    ${state.statusClassName}
                  `}
                >
                  {state.status}
                </span>
              </div>

              <p
                className="
                  w-full
                  font-[var(--cs-font-sans)]
                  text-sm
                  font-normal
                  text-[var(--cs-color-text-secondary)]
                "
              >
                {state.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
