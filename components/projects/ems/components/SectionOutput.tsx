"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface InterfaceView {
  id: string;
  name: string;
  badge: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

interface InterfaceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  uxHighlights: string[];
  views: InterfaceView[];
}

const PRODUCTION_INTERFACES: InterfaceCard[] = [
  {
    number: "01",
    title: "Centralized Energy & Peak Demand Dashboard",
    subtitle: "High-Density Intraday Monitoring",
    description:
      "Synthesizes campus-wide kilowatt-hour consumption, peak demand surges, power factors, and phase balance into a high-density, low-clutter operational cockpit. Engineers can toggle between building aggregate curves and individual feeder lines in real-time.",
    uxHighlights: [
      "Diurnal comparative curves contrasting today's load against historical weekly baselines.",
      "Instant peak-load warning banners triggering before utility threshold penalty rates apply.",
      "Instant status badges identifying disconnected RS485 loop segments without page refreshing.",
    ],
    views: [
      {
        id: "timeline",
        name: "Energy Usage Timeline",
        badge: "Intraday Load Curve",
        src: "/images/ems/Dashboard - Energy Usage Timeline.webp",
        alt: "EMS Centralized Dashboard showing energy usage timeline, peak load indicators, and consumption metrics",
        width: 1280,
        height: 921,
        caption: "Diurnal kilowatt-hour load curve with historical baseline overlays and real-time peak threshold warnings.",
      },
      {
        id: "top-usage",
        name: "Top Energy Consumers",
        badge: "Spatial Ranking",
        src: "/images/ems/Dashboard - Top Usage.webp",
        alt: "EMS Dashboard top usage view ranking campus spaces by energy consumption",
        width: 1280,
        height: 890,
        caption: "Granular room-level load ranking identifying high-consumption circuits and anomalous off-hour surges.",
      },
      {
        id: "active-schedules",
        name: "Active Automation Schedules",
        badge: "Rules Status",
        src: "/images/ems/Dashboard - Active Schedules.webp",
        alt: "EMS Dashboard active schedules view showing automated routine statuses",
        width: 1280,
        height: 884,
        caption: "Operational overview of automated schedules actively running and upcoming off-peak relay triggers.",
      },
    ],
  },
  {
    number: "02",
    title: "Spatial Room Management & Fail-Safe Device Control",
    subtitle: "Physical Space Mapping",
    description:
      "Replaces abstract hardware lists with physical room entities. Operators can inspect individual rooms (e.g., 'Ruang 101'), view active HVAC and lighting loads, and execute safe remote relay switching with explicit asynchronous feedback.",
    uxHighlights: [
      "Asynchronous stateful controls: Buttons show 'Switching Requested...' with spinners until the physical Modbus relay acknowledges state.",
      "Destructive confirmation modals requiring explicit acknowledgement for critical circuits.",
      "Aggregated room power consumption allowing immediate identification of energy leaks in vacant spaces.",
    ],
    views: [
      {
        id: "device-matrix",
        name: "Room Device & Relay Matrix",
        badge: "Direct Actuation",
        src: "/images/ems/Rooms - Device List.webp",
        alt: "EMS Room device list interface showing individual device relays, active wattage, and remote control toggles",
        width: 2667,
        height: 1684,
        caption: "Granular device control matrix for Ruang 101 featuring async handshake toggles, power metrics, and relay indicators.",
      },
      {
        id: "rooms-directory",
        name: "Campus Spatial Rooms Directory",
        badge: "Campus Overview",
        src: "/images/ems/Rooms.webp",
        alt: "EMS Rooms directory interface showing physical space cards, gateway links, and aggregate status",
        width: 1280,
        height: 810,
        caption: "Campus-wide physical space mapping displaying device counts, online gateways, and master room controls.",
      },
    ],
  },
  {
    number: "03",
    title: "Automated Load Scheduling Matrix",
    subtitle: "Rules Engine & Off-Peak Automation",
    description:
      "A flexible scheduling matrix allowing facilities staff to program recurring device states (e.g., auto-shutdown HVAC at 7:00 PM, power on air extractors at 6:30 AM). Prevents human forgetfulness and automates energy compliance during weekends and holidays.",
    uxHighlights: [
      "Calendar-based recurrence builder supporting daily, weekly, and custom holiday schedules.",
      "Conflict detection warning operators if overlapping schedules attempt contradictory relay states.",
      "Emergency manual override allowing security guards to suspend automation with a single logged button click.",
    ],
    views: [
      {
        id: "master-matrix",
        name: "Master Scheduling Matrix",
        badge: "Rule Repository",
        src: "/images/ems/Schedule.webp",
        alt: "EMS Scheduling engine interface showing automated recurring relay rules and calendar timelines",
        width: 1280,
        height: 810,
        caption: "Master automation schedule directory displaying recurrence frequency, active status toggles, and execution windows.",
      },
      {
        id: "rule-builder",
        name: "Recurrence Rule Builder Modal",
        badge: "Rule Configuration",
        src: "/images/ems/Schedule - Edit Modal.webp",
        alt: "EMS Schedule edit modal interface for configuring recurring device rules",
        width: 1280,
        height: 810,
        caption: "Detailed modal configuration for daily and weekly scheduled device power automation.",
      },
      {
        id: "execution-logs",
        name: "Execution Log & Audit Trail",
        badge: "Compliance Trail",
        src: "/images/ems/Schedule - Detail Log.webp",
        alt: "EMS Schedule detail log interface showing historical rule execution records",
        width: 1280,
        height: 810,
        caption: "Historical audit log tracking scheduled relay executions, failed handshakes, and manual overrides.",
      },
    ],
  },
  {
    number: "04",
    title: "Hardware Commissioning & Network Topology",
    subtitle: "Infrastructure Administration",
    description:
      "A specialized configuration workspace for field engineers deploying physical Modbus sensors and edge gateways. Features visual baud rate matching, EUI registration, and loop diagnostics to catch hardware wiring errors before commissioning.",
    uxHighlights: [
      "Step-by-step device onboarding wizard verifying electrical phase wiring before adding to production monitoring.",
      "Live packet telemetry counters exposing dropped frames or electrical noise on physical RS485 twisted-pair runs.",
      "Single-click gateway firmware update controls with progress bar and automated reconnection fallback.",
    ],
    views: [
      {
        id: "gateway-config",
        name: "Edge Gateway Concentrator Setup",
        badge: "Hardware Configuration",
        src: "/images/ems/Installation - Gateway.webp",
        alt: "EMS Gateway installation interface showing IP network parameters and RS485 bus telemetry",
        width: 1280,
        height: 810,
        caption: "Edge gateway network configuration screen with Modbus port assignments, IP mapping, and signal quality metrics.",
      },
      {
        id: "device-pairing",
        name: "Meter & Relay Hardware Pairing",
        badge: "Device Onboarding",
        src: "/images/ems/Installation - Device.webp",
        alt: "EMS Device installation interface for registering physical power sensors and actuators",
        width: 1280,
        height: 810,
        caption: "Field sensor registration wizard matching physical Modbus register maps to software room entities.",
      },
    ],
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

function InterfaceModuleCard({ ui }: { ui: InterfaceCard }) {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const activeView = ui.views[activeViewIndex] ?? ui.views[0];

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
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-[var(--cs-color-text-muted)]">
            MODULE {ui.number} / {ui.subtitle.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] text-[var(--cs-color-accent)]">
            Production v1.0
          </span>
        </div>
        <h3 className="font-[var(--cs-font-sans)] text-xl font-bold text-[var(--cs-color-text-primary)] sm:text-2xl">
          {ui.title}
        </h3>
        <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-sm">
          {ui.description}
        </p>
      </div>

      {/* View Switcher Tabs (if multiple views) */}
      {ui.views.length > 1 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)] mr-1">
            Views ({ui.views.length}):
          </span>
          {ui.views.map((v, idx) => {
            const isActive = idx === activeViewIndex;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveViewIndex(idx)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-[var(--cs-font-sans)] text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-accent)] text-white shadow-xs"
                    : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] text-[var(--cs-color-text-secondary)] hover:border-[var(--cs-color-text-muted)] hover:bg-[var(--cs-color-bg-secondary)]"
                }`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-white" : "bg-[var(--cs-color-text-muted)]"
                  }`}
                  aria-hidden="true"
                />
                <span>{v.name}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-white/80" : "text-[var(--cs-color-text-muted)]"
                  }`}
                >
                  [{v.badge}]
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Active Screenshot Display */}
      <div className="flex flex-col gap-2">
        <div className="relative w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] shadow-sm">
          <Image
            key={activeView.src}
            src={activeView.src}
            alt={activeView.alt}
            width={activeView.width}
            height={activeView.height}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="h-auto w-full object-contain"
            priority={ui.number === "01"}
          />
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between px-1 text-xs text-[var(--cs-color-text-secondary)]">
          <span className="font-[var(--cs-font-sans)] italic">
            {activeView.caption}
          </span>
          <span className="shrink-0 font-mono text-[11px] text-[var(--cs-color-text-muted)]">
            {activeView.width} × {activeView.height}px
          </span>
        </div>
      </div>

      {/* Secondary thumbnail gallery preview if multiple views */}
      {ui.views.length > 1 && (
        <div
          className={`grid grid-cols-1 gap-3 ${
            ui.views.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
          }`}
        >
          {ui.views.map((v, idx) => {
            const isActive = idx === activeViewIndex;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveViewIndex(idx)}
                className={`flex flex-col text-left gap-2 rounded-xl border p-2.5 transition-all duration-150 ${
                  isActive
                    ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg)] shadow-xs ring-1 ring-[var(--cs-color-accent)]"
                    : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)]/60 hover:border-[var(--cs-color-text-muted)] hover:bg-[var(--cs-color-bg)]"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]">
                  <Image
                    src={v.src}
                    alt={v.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  {isActive && (
                    <span className="absolute top-1.5 left-1.5 rounded-sm bg-[var(--cs-color-accent)] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white uppercase tracking-wider">
                      Active View
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
                      {v.name}
                    </span>
                    <span className="font-mono text-[9px] text-[var(--cs-color-text-muted)] uppercase">
                      {v.badge}
                    </span>
                  </div>
                  <p className="line-clamp-2 font-[var(--cs-font-sans)] text-[11px] text-[var(--cs-color-text-secondary)] leading-snug">
                    {v.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* UX Decision Annotations */}
      <div className="flex flex-col gap-3 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4 sm:p-5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
          Critical Interaction Design Decisions:
        </span>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {ui.uxHighlights.map((highlight, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-3 font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]"
            >
              <strong className="block font-mono text-[10px] text-[var(--cs-color-text-muted)]">
                CRITICAL SPEC 0{idx + 1}
              </strong>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function SectionOutput() {
  return (
    <section id="output" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-10 sm:gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              04
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Production Interface Suite
            </span>
          </div>
          <span className="hidden font-mono text-xs text-[var(--cs-color-text-muted)] sm:block">
            Engineered for Precision &amp; Operational Safety
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            From industrial telemetry to operational clarity: Four purpose-built interfaces.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Every interface in the EMS was engineered with rigorous consideration for physical hardware realities, high information density, and fail-safe interaction design.
          </p>
        </div>

        {/* 4 Interface Showcase Cards */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {PRODUCTION_INTERFACES.map((ui) => (
            <InterfaceModuleCard key={ui.number} ui={ui} />
          ))}
        </div>
      </div>
    </section>
  );
}
