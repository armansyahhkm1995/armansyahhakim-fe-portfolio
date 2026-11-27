"use client";

import { motion } from "motion/react";

interface InterfaceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  caption: string;
}

const PRODUCTION_INTERFACES: InterfaceCard[] = [
  {
    number: "01",
    title: "Centralized Energy & Peak Demand Dashboard",
    subtitle: "High-Density Intraday Monitoring",
    description:
      "Designed to monitor real-time electricity consumption across campus rooms, identify peak-usage anomalies at a glance, and track active automated schedules.",
    videoSrc: "/videos/ems/ems_dashboard.mp4",
    caption:
      "Operational Dashboard: Campus-wide energy monitoring, diurnal load curves, peak-usage room rankings, and active schedule status.",
  },
  {
    number: "02",
    title: "Spatial Room Management & Fail-Safe Device Control",
    subtitle: "Physical Space Mapping",
    description:
      "Replaces abstract hardware lists with physical room entities. Operators can inspect individual rooms, view active HVAC and lighting loads, and execute safe remote relay switching with explicit asynchronous feedback.",
    videoSrc: "/videos/ems/ems_rooms.mp4",
    caption:
      "Room Management Interface: Physical facility zones, connected load status, and master room power control toggles.",
  },
  {
    number: "03",
    title: "Automated Load Scheduling Matrix",
    subtitle: "Rules Engine & Off-Peak Automation",
    description:
      "A flexible scheduling matrix allowing facilities staff to program recurring device states (e.g., auto-shutdown HVAC at 7:00 PM, power on air extractors at 6:30 AM), automating energy compliance during off-peak hours and weekends.",
    videoSrc: "/videos/ems/ems_schedule.mp4",
    caption:
      "Automated Load Scheduling: Recurring operational rules, timing triggers, and calendar-based energy automation.",
  },
  {
    number: "04",
    title: "Hardware Commissioning & Network Topology",
    subtitle: "Infrastructure Administration",
    description:
      "A specialized configuration workspace for field engineers deploying physical Modbus sensors and edge gateways. Features IP parameter mapping, SIM card status, and hardware heartbeat telemetry.",
    videoSrc: "/videos/ems/ems_gateway.mp4",
    caption:
      "IoT Gateway Administration: Concentrator unit statuses, SIM card connectivity, and field communication channels.",
  },
  {
    number: "05",
    title: "Granular Device Inventory & Remote Control",
    subtitle: "Meter & Switch Control",
    description:
      "A comprehensive device catalog displaying all submetered electrical appliances (kWh meters, lighting, sockets) paired with their respective rooms and gateways, polling intervals, and direct On/Off relay controls.",
    videoSrc: "/videos/ems/ems_device.mp4",
    caption:
      "Device Management Matrix: Submetered appliance list, parent gateway and room assignments, telemetry intervals, and live actuation.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

function InterfaceModuleCard({ ui }: { ui: InterfaceCard }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={REVEAL_VARIANTS}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-4 sm:p-6 lg:p-8"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-[var(--cs-color-border)] pb-4">
        <span className="font-mono text-xs font-bold text-[var(--cs-color-text-muted)]">
          MODULE {ui.number} / {ui.subtitle.toUpperCase()}
        </span>
        <h3 className="font-[var(--cs-font-sans)] text-xl font-bold text-[var(--cs-color-text-primary)] sm:text-2xl">
          {ui.title}
        </h3>
        <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-sm">
          {ui.description}
        </p>
      </div>

      {/* Video Display */}
      <div className="flex flex-col gap-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black shadow-sm">
          <video
            src={ui.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-1 text-xs text-[var(--cs-color-text-secondary)]">
          <span className="font-[var(--cs-font-sans)] italic">
            {ui.caption}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function SectionOutput() {
  return (
    <section id="output" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        {/* Section divider & label */}
        <div className="mb-12 flex flex-col items-start gap-2 border-b border-[var(--cs-color-border)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              04
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Production Interface Suite
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            From industrial telemetry to operational clarity: Five purpose-built interfaces.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
            Every interface in the EMS was engineered with rigorous consideration for physical hardware realities, high information density, and fail-safe interaction design.
          </p>
        </div>

        {/* 5 Interface Showcase Cards */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {PRODUCTION_INTERFACES.map((ui) => (
            <InterfaceModuleCard key={ui.number} ui={ui} />
          ))}
        </div>
      </div>
    </section>
  );
}
