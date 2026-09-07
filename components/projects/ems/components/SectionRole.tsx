"use client";

import { motion } from "motion/react";

interface UserRole {
  role: string;
  title: string;
  description: string;
}

interface PermissionRow {
  capability: string;
  admin: string;
  operator: string;
  management: string;
}

interface RolePerspective {
  role: string;
  question: string;
  focus: string[];
}

const USER_ROLES: UserRole[] = [
  {
    role: "ADMINISTRATOR",
    title: "System configuration & topology health",
    description:
      "Provisioning Users, Roles, Rooms, Gateways, Devices, Schedules, System Alarms, Dashboard, Audit Reports",
  },
  {
    role: "OPERATOR",
    title: "Daily facility runtime operations",
    description:
      "Interactive Dashboard, Custom Run Schedules, Immediate Room Overrides, Manual Device Kill-commands",
  },
  {
    role: "COMMANDER",
    title: "High-level strategy & compliance audits",
    description:
      "Performance Dashboards, Inter-room Comparison Charts, Historical Trends, Financial Audit Exports",
  },
];

const PERMISSION_ROWS: PermissionRow[] = [
  {
    capability: "Dashboard Read",
    admin: "✓",
    operator: "✓",
    management: "✓",
  },
  {
    capability: "Schedules Write (CRUD)",
    admin: "✓",
    operator: "✓",
    management: "—",
  },
  {
    capability: "Device Control Action",
    admin: "✓",
    operator: "✓",
    management: "—",
  },
  {
    capability: "Register Meter / Gateway",
    admin: "✓",
    operator: "—",
    management: "—",
  },
  {
    capability: "Generate & Export Audit",
    admin: "✓",
    operator: "—",
    management: "✓",
  },
];

const ROLE_PERSPECTIVES: RolePerspective[] = [
  {
    role: "SYSTEM ADMIN",
    question: '"Is the system configured and communicating correctly?"',
    focus: [
      "Gateway Status",
      "Modbus Loops",
      "Broker Latency",
      "Offline Alarms",
    ],
  },
  {
    role: "OPERATOR",
    question:
      '"What is happening in the building right now, and what needs my attention?"',
    focus: [
      "Current kW Draw",
      "Schedule Violations",
      "Active Relays",
      "Alarm Stack",
    ],
  },
  {
    role: "COMMANDER (MANAGEMENT)",
    question:
      '"How is the building performing over time, and where is the waste?"',
    focus: [
      "Peak Demand Time",
      "Inter-room Benchmarks",
      "Cumulative Carbon",
      "Audit Ready",
    ],
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

export default function SectionRole() {
  return (
    <section
      id="role"
      aria-labelledby="user-roles-title"
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
              04
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
              Who Uses the System
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
            USER RESPONSIBILITY SEGMENTATION
          </span>
        </motion.div>

        <motion.h2
          id="user-roles-title"
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
          Three distinct roles, three operational paradigms.
        </motion.h2>

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
            grid
            w-full
            grid-cols-1
            gap-5
            lg:grid-cols-3
          "
        >
          {USER_ROLES.map((role) => (
            <div
              key={role.role}
              className="
                flex
                flex-col
                gap-5
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-8
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
                {role.role}
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="
                    font-[var(--cs-font-sans)]
                    text-base
                    font-bold
                    leading-6
                    text-[var(--cs-color-text-primary)]
                  "
                >
                  {role.title}
                </div>

                <div
                  aria-hidden="true"
                  className="h-px w-full bg-[var(--cs-color-border)]"
                />

                <div
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-normal
                    leading-5
                    text-[var(--cs-color-text-secondary)]
                  "
                >
                  {role.description}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
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
            items-start
            gap-8
            lg:flex-row
            lg:gap-20
          "
        >
          <h3
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
            Different responsibilities required different levels of access.
          </h3>

          <p
            className="
              flex-1
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
            "
          >
            To protect heavy-load mechanical equipment from accidental or
            unauthorized control inputs, we built a robust role-based access
            protocol. Lower tier operators can monitor and request scheduler
            changes, while hardware control is restricted.
          </p>
        </motion.div>

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
            flex
            w-full
            flex-col
            gap-6
            lg:flex-row
            lg:gap-10
          "
        >
          <div
            className="
              w-full
              overflow-x-auto
              rounded-sm
              border
              border-[var(--cs-color-border)]
              lg:flex-1
            "
          >
            <div className="min-w-[680px]">
              <div
                className="
                  grid
                  grid-cols-[224px_repeat(3,112px)]
                  border-b
                  border-[var(--cs-color-border)]
                  bg-stone-50
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
                  CAPABILITY
                </div>

                <div
                  className="
                    text-center
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  ADMIN
                </div>

                <div
                  className="
                    text-center
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  OPERATOR
                </div>

                <div
                  className="
                    text-center
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  MANAGEMENT
                </div>
              </div>

              {PERMISSION_ROWS.map((row, index) => (
                <div
                  key={row.capability}
                  className={`
                    grid
                    grid-cols-[224px_repeat(3,112px)]
                    items-center
                    p-3
                    ${
                      index < PERMISSION_ROWS.length - 1
                        ? "border-b border-[var(--cs-color-border)]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-semibold
                      text-black
                    "
                  >
                    {row.capability}
                  </div>

                  <div
                    className="
                      text-center
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.admin}
                  </div>

                  <div
                    className="
                      text-center
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.operator}
                  </div>

                  <div
                    className="
                      text-center
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {row.management}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              w-full
              rounded-sm
              border
              border-[var(--cs-color-border)]
              bg-stone-50
              p-5
              sm:p-8
              lg:w-96
              lg:shrink-0
            "
          >
            <div className="flex flex-col gap-4">
              <div
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-bold
                  text-[var(--cs-color-text-secondary)]
                "
              >
                SCHEMA ATTRIBUTE SPEC
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className="
                    font-[var(--cs-font-sans)]
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  Role Model structure
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
                  — Role Name: String
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
                  — Role Description: Text
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
                  — Permissions List: Array[Alarm, Schedule, Room, Device,
                  Gateway, User]
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          className="
            font-[var(--cs-font-sans)]
            text-xs
            font-normal
            leading-5
            text-[var(--cs-color-text-muted)]
          "
        >
          Caption: Permission architecture directly influences interface
          architecture and action availability.
        </div>

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
            gap-5
            lg:grid-cols-3
          "
        >
          {ROLE_PERSPECTIVES.map((perspective) => (
            <div
              key={perspective.role}
              className="
                flex
                h-full
                flex-col
                gap-5
                rounded-sm
                border
                border-[var(--cs-color-border)]
                bg-stone-50
                p-5
                sm:p-8
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
                {perspective.role}
              </div>

              <div
                className="
                  flex-1
                  font-[var(--cs-font-sans)]
                  text-2xl
                  font-normal
                  leading-8
                  text-[var(--cs-color-text-primary)]
                  sm:text-3xl
                "
              >
                {perspective.question}
              </div>

              <div className="flex flex-wrap content-start gap-2">
                {perspective.focus.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-[99px]
                      border
                      border-[var(--cs-color-border)]
                      bg-white
                      px-2.5
                      py-1
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
