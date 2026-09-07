"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface MetrologyStep {
  number: string;
  title: string;
  description: string;
}

interface PhysicalEntity {
  title: string;
  description: string;
}

const METROLOGY_STEPS: MetrologyStep[] = [
  {
    number: "01",
    title: "PHYSICAL GRID",
    description: "Main switchboards, distribution DBs, high-draw HVAC relays.",
  },
  {
    number: "02",
    title: "MODBUS METERS",
    description:
      "Smart meters calculating Active Power (kW), Voltage, Current, and Power Factor.",
  },
  {
    number: "03",
    title: "EDGE GATEWAY",
    description:
      "Polls RS485 loops, buffers telemetry locally, handles offline retries.",
  },
  {
    number: "04",
    title: "CLOUD SYSTEM",
    description:
      "ThingsBoard IoT core, ingestion broker, security rules and state engine.",
  },
];

const ROOM_ENDPOINTS = ["AIR CON", "CEILING FAN", "WORKSTATIONS"] as const;

const PHYSICAL_ENTITIES: PhysicalEntity[] = [
  {
    title: "ROOM ENTITY",
    description: "Fields: room_id, name, PIC, contact, location, description",
  },
  {
    title: "DEVICE ENTITY",
    description:
      "Fields: device_id, name, EUI, interval, installer, room_id, gateway_id",
  },
  {
    title: "GATEWAY ENTITY",
    description:
      "Fields: gateway_id, name, EUI, installation_date, power_source, model/provider, installer",
  },
];

const DEVICE_REGISTRATION_STEPS = [
  "Register physical device telemetry",
  "Identify meter EUI in IoT broker",
  "Assign device to structural Room context",
  "Map path to designated Concentrator Gateway",
  "Instantly available for polling inside EMS",
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

export default function SectionPhysical() {
  return (
    <section
      id="physical"
      aria-labelledby="physical-system-title"
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
        {/* =========================================================
            SECTION LABEL
        ========================================================= */}

        <div
          aria-hidden="true"
          className="h-px w-full bg-[var(--cs-color-border)]"
        />

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
              03
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
              Understanding the Physical System
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
            HARDWARE SENSING ECOSYSTEM
          </span>
        </motion.div>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}

        <motion.h2
          id="physical-system-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
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
          Before designing the interface, I needed to map the physical
          constraints.
        </motion.h2>

        {/* =========================================================
            METROLOGY LANDSCAPE + ENDPOINT MAPPING
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            flex
            w-full
            flex-col
            items-stretch
            gap-6
            lg:flex-row
            lg:gap-10
          "
        >
          {/* Metrology landscape */}

          <div
            className="
              flex-1
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
            "
          >
            <div className="flex flex-col gap-6">
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                A — METROLOGY LANDSCAPE FLOW
              </div>

              <div className="flex flex-col gap-4">
                {METROLOGY_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="
                      flex
                      flex-col
                      gap-3
                      rounded-sm
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      p-3
                      sm:flex-row
                      sm:items-center
                      sm:gap-4
                    "
                  >
                    <div
                      className="
                        w-full
                        shrink-0
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-bold
                        text-[var(--cs-color-text-secondary)]
                        sm:w-36
                      "
                    >
                      {step.number} / {step.title}
                    </div>

                    <div
                      className="
                        flex-1
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-normal
                        leading-5
                        text-[var(--cs-color-text-secondary)]
                      "
                    >
                      {step.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Endpoint mapping */}

          <div
            className="
              w-full
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
              lg:w-[500px]
              lg:shrink-0
            "
          >
            <div className="flex flex-col gap-6">
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                B — ENDPOINT MAPPING (TYPICAL ROOM)
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  rounded-sm
                  border
                  border-[var(--cs-color-border)]
                  bg-white
                  p-4
                  sm:p-5
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
                  ROOM 104 (OFFICE)
                </div>

                <div className="flex items-stretch gap-2">
                  {ROOM_ENDPOINTS.map((endpoint) => (
                    <div
                      key={endpoint}
                      className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        justify-center
                        rounded-sm
                        bg-stone-50
                        p-2
                      "
                    >
                      <span
                        className="
                          text-center
                          font-[var(--cs-font-sans)]
                          text-xs
                          font-normal
                          text-black
                        "
                      >
                        {endpoint}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="h-px w-full bg-[var(--cs-color-border)]"
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    3 × Dedicated Channels
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      size-4
                      shrink-0
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        size-2.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border-2
                        border-stone-600
                      "
                    />
                  </span>
                </div>

                <div
                  className="
                    rounded-sm
                    border
                    border-stone-600
                    bg-zinc-100
                    p-3
                    text-center
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-bold
                    text-stone-600
                  "
                >
                  METERS / GATEWAY
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            PHYSICAL SYSTEM DIAGRAM
        ========================================================= */}

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.2,
          }}
          className="flex w-full flex-col gap-3"
        >
          <div
            className="
              aspect-[1252/654]
              w-full
              overflow-hidden
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-100
            "
          >
            <Image
              src="/images/ems/Rancangan skema EMS.webp"
              alt="Physical sensing ecosystem showing the relationship between rooms, meters, gateways, and the EMS platform."
              width={1280}
              height={654}
              className="h-auto w-full object-cover"
            />
          </div>

          <figcaption
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              leading-5
              text-[var(--cs-color-text-muted)]
            "
          >
            Annotation: Smart KWh meters measure/connect to electrical
            endpoints. Gateway acts as network intermediary. Room represents
            physical location. EMS provides the digital monitoring/control
            layer.
          </figcaption>
        </motion.figure>

        {/* =========================================================
            STRUCTURAL HIERARCHY
        ========================================================= */}

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
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
          We modeled physical structural hierarchy to guide navigation.
        </motion.h2>

        {/* =========================================================
            DATA RELATIONSHIPS + DEVICE REGISTRATION
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.15,
          }}
          className="
            flex
            w-full
            flex-col
            items-stretch
            gap-6
            lg:flex-row
            lg:gap-10
          "
        >
          {/* Data relationships */}

          <div
            className="
              flex-1
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
            "
          >
            <div className="flex flex-col gap-5">
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                DATA RELATIONSHIPS (EMS ENTITIES)
              </div>

              <div className="flex flex-col gap-3">
                {PHYSICAL_ENTITIES.map((entity) => (
                  <div
                    key={entity.title}
                    className="
                      flex
                      flex-col
                      gap-1
                      rounded-sm
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      p-3
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
                      {entity.title}
                    </div>

                    <div
                      className="
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-normal
                        leading-5
                        text-[var(--cs-color-text-secondary)]
                      "
                    >
                      {entity.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Device registration sequence */}

          <div
            className="
              w-full
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
              lg:w-[500px]
              lg:shrink-0
            "
          >
            <div className="flex flex-col gap-5">
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                DEVICE REGISTRATION SEQUENCE
              </div>

              <div className="flex flex-col gap-2">
                {DEVICE_REGISTRATION_STEPS.map((step, index) => (
                  <div
                    key={step}
                    className="
                      rounded-sm
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      p-3
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-medium
                      leading-5
                      text-[var(--cs-color-text-primary)]
                    "
                  >
                    {index + 1}. {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
