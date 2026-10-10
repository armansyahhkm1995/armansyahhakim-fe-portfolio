"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface DecisionStage {
  number: string;
  title: string;
  items: string[];
  output: string;
}

interface HierarchyEntity {
  level: string;
  title: string;
  description: string;
  attributes: string;
}

const DECISION_STAGES: DecisionStage[] = [
  {
    number: "01",
    title: "RAW TELEMETRY",
    items: ["RS485 Modbus polls", "Raw Voltage / Current", "Relay bitflags", "Gateway heartbeats"],
    output: "Unstructured time-series data packet arriving every 5 seconds.",
  },
  {
    number: "02",
    title: "USEFUL INFORMATION",
    items: ["Aggregated Active Power (kW)", "Phase unbalance %", "Diurnal baselines", "Offline alarms"],
    output: "Contextualized room-level load and cost velocity calculations.",
  },
  {
    number: "03",
    title: "DECISION TRIGGER",
    items: ["Is Room 204 vacant?", "Is HVAC drawing 22kW after hours?", "Is Gateway packet loss > 15%?"],
    output: "Operator visual cues with color-coded severity and recommended actions.",
  },
  {
    number: "04",
    title: "TANGIBLE ACTION",
    items: ["Execute remote kill switch", "Trigger automated schedule", "Throttle AC target setpoint"],
    output: "Stateful MQTT control payload dispatched through Edge Gateway.",
  },
];

const HIERARCHY_ENTITIES: HierarchyEntity[] = [
  {
    level: "L1",
    title: "CAMPUS & BUILDING",
    description: "Top-level structural boundaries grouping multi-tenant facilities.",
    attributes: "Building ID, total contracted kVA capacity, primary transformer feeds.",
  },
  {
    level: "L2",
    title: "ROOM / ZONE CONTEXT",
    description: "Physical spaces where human work occurs (Offices, Labs, Server Rooms).",
    attributes: "Room name, PIC contact, operating hours, active occupancy status.",
  },
  {
    level: "L3",
    title: "SUBMETERED CIRCUIT",
    description: "Physical loads grouped by electrical breakers (HVAC, Lighting, Plugs).",
    attributes: "Meter EUI, active kW, phase assignment, relay control capability.",
  },
  {
    level: "L4",
    title: "EDGE GATEWAY CONCENTRATOR",
    description: "Hardware network hardware bridging local RS485 bus to cloud MQTT.",
    attributes: "IP address, baud rate, buffer health, signal strength, firmware version.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              03
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Architecture & Mechanism
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Data-to-Decision Pipeline & Spatial Hierarchy
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Structuring the invisible: From raw electrical registers to intuitive spatial control.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Raw electrical telemetry is meaningless without structural context. We replaced flat device inventories with a spatial room hierarchy and a deterministic 4-stage decision funnel.
          </p>
        </div>

        {/* Physical System Diagram */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={{ duration: 0.7 }}
          className="flex w-full flex-col gap-4"
        >
          <div className="relative w-full overflow-hidden rounded-sm border border-stone-300 bg-stone-100 p-2 sm:p-4">
            <Image
              src="/images/ems/Rancangan skema EMS.webp"
              alt="Physical sensing ecosystem schematic showing rooms, meters, edge gateways, and cloud EMS"
              width={1280}
              height={654}
              sizes="(max-width: 768px) 100vw, 1280px"
              className="h-auto w-full object-contain"
            />
          </div>
          <figcaption className="font-[var(--cs-font-sans)] text-xs text-stone-500">
            Fig 03. — System Architecture Schematic: Mapping physical circuits and Modbus RS485 loops to Edge Concentrators and the Cloud EMS application layer.
          </figcaption>
        </motion.figure>

        {/* 4-Stage Decision Transformation */}
        <div className="flex flex-col gap-5 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              The 4-Stage Decision Transformation Funnel
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              How EMS converts noisy electrical telemetry into safe, accountable operator actions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DECISION_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="flex flex-col justify-between gap-4 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    STAGE {stage.number}
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {stage.title}
                  </h4>
                  <ul className="flex flex-col gap-1 pt-2">
                    {stage.items.map((item) => (
                      <li key={item} className="font-[var(--cs-font-sans)] text-xs text-stone-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-stone-100 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    System State
                  </span>
                  <p className="mt-1 font-[var(--cs-font-sans)] text-xs font-medium text-stone-800">
                    {stage.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spatial Hierarchy Architecture */}
        <div className="flex flex-col gap-5 rounded-sm border border-stone-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Spatial Information Architecture: Eliminating Mental Translation
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Technicians think in physical rooms (&ldquo;Server Room 2&rdquo;, &ldquo;Executive Boardroom&rdquo;), not Modbus hex IDs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HIERARCHY_ENTITIES.map((entity) => (
              <div
                key={entity.level}
                className="flex flex-col gap-2 rounded-sm border border-stone-200 bg-stone-50 p-4"
              >
                <span className="font-mono text-[11px] font-bold text-[var(--cs-color-accent)]">
                  {entity.level}
                </span>
                <h4 className="font-[var(--cs-font-sans)] text-xs font-bold text-stone-900">
                  {entity.title}
                </h4>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                  {entity.description}
                </p>
                <div className="mt-2 border-t border-stone-200 pt-2">
                  <span className="font-mono text-[9px] uppercase text-stone-400">Key Schema</span>
                  <p className="font-mono text-[10px] text-stone-700">{entity.attributes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
