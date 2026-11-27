"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DeviceNode {
  id: string;
  name: string;
  codeName: string;
  category: "power" | "master" | "gateway" | "child" | "load";
  functionSummary: string;
  electricalRole: string;
  specifications: string[];
}

const DEVICES: Record<string, DeviceNode> = {
  lvmdp: {
    id: "lvmdp",
    name: "LVMDP (Low Voltage Main Distribution Panel)",
    codeName: "LVMDP 400 KW / 500 KVA",
    category: "power",
    functionSummary:
      "Receives primary medium-voltage power feed from the utility grid (PLN) and backup diesel generators. Operates as the central low-voltage distribution hub (380V/220V), stabilizing current, routing electrical busbars, and providing master circuit protection via Air Circuit Breakers (ACB) and MCCB.",
    electricalRole:
      "3-Phase AC power from grid/generator enters the LVMDP busbar assembly, where it is conditioned and channeled safely into the metering arrays of the Parent Smart kWh and downstream Child Smart kWh units.",
    specifications: [
      "Capacity: 400 kW / 500 kVA",
      "Operating Voltage: 380V AC 3-Phase / 220V 1-Phase 50Hz",
      "Protection: Air Circuit Breaker (ACB) & Molded Case Circuit Breaker (MCCB)",
    ],
  },
  ct: {
    id: "ct",
    name: "Current Transformer (CT)",
    codeName: "3x CT Toroidal Coils",
    category: "power",
    functionSummary:
      "Current transformer induction sensors installed on each active phase conductor (R, S, T). Steps down high busbar amperage to a precise secondary measurement ratio (e.g., 400A:5A), enabling the 3-Phase Smart kWh meter to safely and accurately sample heavy loads without instrument damage.",
    electricalRole:
      "Detects alternating electromagnetic fields across LVMDP feeder conductors and delivers secondary proportional current signals directly to the 3-Phase Parent Smart kWh meter.",
    specifications: [
      "Configuration: 3 Units (Phases R, S, T)",
      "Induction Ratio: 400A / 5A (Accuracy Class 0.5S)",
      "Insulation: Cast Resin 600V Dry-Type",
    ],
  },
  parentKwh: {
    id: "parentKwh",
    name: "Smart kWh 3P (Parent / Master Meter)",
    codeName: "CLOU CL730D22H (3P 400 A)",
    category: "master",
    functionSummary:
      "High-precision 3-phase master digital energy meter monitoring the entire campus intake. Aggregates primary CT current feeds, computes voltage, current, active/reactive power factor, and indexes telemetry from all subordinate Child Smart kWh submeters across all building zones.",
    electricalRole:
      "Measures total incoming active energy (kWh), peak demand (kW), and phase balance. Interfaces through serial RS485 Modbus RTU loops to the IoT Gateway and cloud EMS server.",
    specifications: [
      "Rating: 3-Phase 4-Wire, 400 A",
      "Accuracy: Active Energy Class 0.5S / Reactive Class 2.0",
      "Communication: RS485 Modbus RTU / DLMS-COSEM Protocol",
    ],
  },
  gateway: {
    id: "gateway",
    name: "IoT Gateway Concentrator",
    codeName: "Kerlink Industrial Gateway",
    category: "gateway",
    functionSummary:
      "The field communications hub of the substation. Automatically discovers hardware MAC addresses of all meters on the RS485 bus, maps Parent vs. Child roles, securely packages telemetry into MQTT payloads over cellular 4G/LTE, and routes remote relay control commands from the EMS software.",
    electricalRole:
      "Polls Modbus register maps from both Parent and Child meters, buffers data during network outages, and dispatches remote actuation signals to trip or close individual room submeter relays.",
    specifications: [
      "Interfaces: RS485 Bus + Dual 4G/LTE External Antennas",
      "Protocol: Modbus-to-MQTT Telemetry Bridge",
      "Features: Auto Hardware MAC Discovery, Non-volatile Flash Buffer",
    ],
  },
  childKwh1: {
    id: "childKwh1",
    name: "Smart kWh 1P (Child 1 - Server Room & Precision AC)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "Single-phase smart submeter monitoring critical server rack power and precision cooling. Equipped with a heavy-duty internal latching relay for remote cut-off and automated overload tripping.",
    electricalRole:
      "Samples high-density IT loads and precision inverter AC circuits. Streams energy telemetry to the Parent meter and Gateway, supporting instant remote emergency shutdown via the EMS dashboard.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Internal Relay: 100A Latching Remote Cut-Off Relay",
      "Connected Load: Inverter Precision AC (1,850 W) & Server Rack PDU",
    ],
  },
  childKwh2: {
    id: "childKwh2",
    name: "Smart kWh 1P (Child 2 - Office & Workstations)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "Single-phase smart submeter tracking office desk outlets and workstation computers. Prevents off-hours energy waste through scheduled automated cut-offs.",
    electricalRole:
      "Measures continuous draw from desktop PCs, displays, and peripheral clusters. Detects phantom loads and off-hours energy spikes when rooms are unoccupied.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Connected Load: 12x Workstation PCs (Total 1,450 W)",
      "Feature: Anomaly Detection (Off-hours surge monitoring)",
    ],
  },
  childKwh3: {
    id: "childKwh3",
    name: "Smart kWh 1P (Child 3 - Lab & Lighting)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "Single-phase smart submeter dedicated to building lighting loops and high-flow ventilation blower fans.",
    electricalRole:
      "Monitors zonal illumination and exhaust air circulation. Syncs with facility schedule timers to enforce building operating hours.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Connected Load: Exhaust Blower & LED Bay Lighting (680 W)",
      "Feature: Facility Operating Schedule Synchronization",
    ],
  },
  load1: {
    id: "load1",
    name: "Load Group 1 (Server Room Distribution)",
    codeName: "Modular Distribution Terminal Block 1",
    category: "load",
    functionSummary:
      "Sub-distribution circuit breaker block (MCBs) routing dedicated feeds to server racks and precision cooling.",
    electricalRole:
      "Receives 100A metered and relay-protected power from Child Meter 1, channeling it to critical server infrastructure.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 16A Server + 20A AC Inverter"],
  },
  load2: {
    id: "load2",
    name: "Load Group 2 (Office Workstation Distribution)",
    codeName: "Modular Distribution Terminal Block 2",
    category: "load",
    functionSummary:
      "Branch distribution block supplying power across office desk clusters, computing terminals, and monitors.",
    electricalRole:
      "Receives metered power from Child Meter 2 to energize workstation outlets and desktop equipment.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 10A Per Desk Cluster"],
  },
  load3: {
    id: "load3",
    name: "Load Group 3 (Lab & Lighting Distribution)",
    codeName: "Modular Distribution Terminal Block 3",
    category: "load",
    functionSummary:
      "Distribution terminal block routing power to laboratory test benches, ventilation blowers, and overhead LED arrays.",
    electricalRole:
      "Receives metered power from Child Meter 3, feeding high-efficiency lighting arrays and motor blowers.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 10A Lighting + 16A Motor Fans"],
  },
};

const STAGES = [
  {
    stage: 1,
    title: "1. Main Power Supply: Utility Grid (PLN) / Genset to LVMDP",
    focusDeviceId: "lvmdp",
    description:
      "3-Phase AC voltage from the utility grid enters the LVMDP (Low Voltage Main Distribution Panel 400 kW / 500 kVA), where it is stabilized and routed through the main busbar assembly.",
  },
  {
    stage: 2,
    title: "2. Master Energy Metering: LVMDP via CT into Parent Smart kWh 3P",
    focusDeviceId: "parentKwh",
    description:
      "Heavy current passes through Current Transformers (CT), stepping down current to safe levels for the master CLOU CL730D22H 3-Phase Smart kWh meter to measure total facility intake.",
  },
  {
    stage: 3,
    title: "3. Hardware Discovery: IoT Gateway Maps MAC Addresses",
    focusDeviceId: "gateway",
    description:
      "The Kerlink IoT Gateway scans all meters along the serial RS485 communication bus. By reading hardware MAC addresses, it establishes the Parent master meter and registers all Child submeters.",
  },
  {
    stage: 4,
    title: "4. Sub-distribution to Rooms: Parent kWh to Child kWh 1P Units",
    focusDeviceId: "childKwh1",
    description:
      "Power branches from the main busbar to individual 1-Phase Smart kWh meters (CLOU CL710K24 100A) in each room, while telemetry loops continuously sync with the master Parent meter.",
  },
  {
    stage: 5,
    title: "5. Granular End-Device Submetering: Child kWh to Load Groups",
    focusDeviceId: "load1",
    description:
      "Each Child Smart kWh meter monitors real-time equipment consumption (precision AC, workstations, lighting, exhaust fans) routed through Load Groups 1, 2, and 3.",
  },
  {
    stage: 6,
    title: "6. Cloud Telemetry & Bidirectional Relay Control via EMS Software",
    focusDeviceId: "gateway",
    description:
      "Telemetry flows through the IoT Gateway to the cloud EMS dashboard. Facility managers monitor real-time curves and can dispatch remote relay shutoff commands instantly.",
  },
];

export default function AnimatedEmsArchitecture() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("lvmdp");
  const [isRelay1Active, setIsRelay1Active] = useState(true);

  // Auto progression
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentStageIndex((prev) => {
        const next = (prev + 1) % STAGES.length;
        setSelectedDeviceId(STAGES[next].focusDeviceId);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeStage = STAGES[currentStageIndex];
  const activeDevice = DEVICES[selectedDeviceId] || DEVICES.lvmdp;

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-4 sm:p-6 lg:p-8">
      {/* Title & Controller Bar */}
      <div className="flex flex-col gap-4 border-b border-[var(--cs-color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--cs-color-accent)] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              IF-Rancangan_Skema_EMS_VVT-FIT192-20230710 (1) · System Architecture Flow
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
            Visual simulation of real electrical distribution &amp; data hierarchy: Grid (PLN) &rarr; LVMDP &rarr; CT/Parent 3P &rarr; Gateway MAC &rarr; Child 1P &rarr; Load Groups &rarr; EMS Control
          </p>
        </div>

        {/* Play/Pause & Stage Selector */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--cs-color-text-primary)] transition-colors hover:border-[var(--cs-color-accent)]"
          >
            <span>{isAutoPlaying ? "❚❚ Pause Flow" : "▶ Resume Auto Flow"}</span>
          </button>
          <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
            Stage 0{activeStage.stage} / 0{STAGES.length}
          </span>
        </div>
      </div>

      {/* Stage Flow Indicator Pills */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {STAGES.map((s, idx) => {
          const isActive = idx === currentStageIndex;
          return (
            <button
              key={s.stage}
              type="button"
              onClick={() => {
                setCurrentStageIndex(idx);
                setSelectedDeviceId(s.focusDeviceId);
                setIsAutoPlaying(false);
              }}
              className={`flex flex-col gap-1 rounded-xl border p-2 text-left transition-all ${
                isActive
                  ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg)] ring-1 ring-[var(--cs-color-accent)] shadow-xs"
                  : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)]/40 hover:bg-[var(--cs-color-bg)] text-[var(--cs-color-text-muted)] hover:text-[var(--cs-color-text-primary)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[9px] font-bold ${isActive ? "text-[var(--cs-color-accent)]" : "text-[var(--cs-color-text-muted)]"}`}>
                  STAGE 0{s.stage}
                </span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)] animate-pulse" />}
              </div>
              <span className="line-clamp-1 font-mono text-[10px] font-semibold text-[var(--cs-color-text-primary)]">
                {s.title.split(":")[1]?.trim() || s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main SVG Vector Schematic Canvas */}
      <div className="relative overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black/95 p-2 sm:p-4 shadow-inner">
        {/* Schematic Canvas Header */}
        <div className="flex items-center justify-between border-b border-stone-800 px-2 pb-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold tracking-wider text-stone-300">
              ELECTRICAL TOPOLOGY &amp; MODBUS BUS SCHEMATIC
            </span>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <span className="text-stone-300">Power (380V/220V)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-sky-400 border border-dashed border-sky-400" />
              <span className="text-stone-300">Control Line</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-indigo-400" />
              <span className="text-stone-300">RS485 Modbus</span>
            </div>
          </div>
        </div>

        {/* Responsive Vector Diagram */}
        <div className="relative w-full overflow-x-auto py-4">
          <svg
            viewBox="0 0 1160 620"
            className="w-full min-w-[900px] h-auto select-none"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
          >
            <defs>
              {/* Electric Pulse Glow */}
              <filter id="electric-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ================= 1. RS485 MODBUS COMMUNICATION BUS (DRAWN UNDER POWER) ================= */}
            {/* Trunk from Parent Smart KWH (x=430, y=145) to Gateway (x=665, y=145) */}
            <path
              d="M 430 145 L 665 145"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            {/* Connection Port Dot on Parent KWH */}
            <circle cx="430" cy="145" r="3.5" fill="#818cf8" />
            {/* Connection Port Dot on Gateway */}
            <circle cx="665" cy="145" r="3.5" fill="#818cf8" />

            {/* Vertical RS485 Trunk Dropping Down to Child Meters */}
            <path
              d="M 640 145 L 640 575"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <circle cx="640" cy="145" r="3" fill="#818cf8" />

            {/* RS485 Branches into Child Meters */}
            {/* Branch to Child 1 (Server Room) */}
            <path
              d="M 640 310 L 725 310"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <circle cx="640" cy="310" r="2.5" fill="#818cf8" />
            <circle cx="725" cy="310" r="3" fill="#818cf8" />

            {/* Branch to Child 2 (Office) */}
            <path
              d="M 640 445 L 725 445"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <circle cx="640" cy="445" r="2.5" fill="#818cf8" />
            <circle cx="725" cy="445" r="3" fill="#818cf8" />

            {/* Branch to Child 3 (Lab) */}
            <path
              d="M 640 575 L 725 575"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <circle cx="640" cy="575" r="2.5" fill="#818cf8" />
            <circle cx="725" cy="575" r="3" fill="#818cf8" />

            <text x="510" y="137" fill="#818cf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
              RS485 MODBUS RTU
            </text>

            {/* ================= 2. DASHED SKY-BLUE CONTROL LINES (GATEWAY TO CHILD METERS) ================= */}
            {/* Direct seamless connection starting from bottom port of Gateway at (695, 137) */}
            <circle cx="695" cy="137" r="3.5" fill="#38bdf8" />
            
            {/* Vertical Control Trunk */}
            <path
              d="M 695 137 L 695 510"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Horizontal Branch to Child 1 */}
            <path
              d="M 695 240 L 725 240"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="695" cy="240" r="2.5" fill="#38bdf8" />
            <circle cx="725" cy="240" r="3" fill="#38bdf8" />

            {/* Horizontal Branch to Child 2 */}
            <path
              d="M 695 375 L 725 375"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="695" cy="375" r="2.5" fill="#38bdf8" />
            <circle cx="725" cy="375" r="3" fill="#38bdf8" />

            {/* Horizontal Branch to Child 3 */}
            <path
              d="M 695 510 L 725 510"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="695" cy="510" r="2.5" fill="#38bdf8" />
            <circle cx="725" cy="510" r="3" fill="#38bdf8" />

            <text x="702" y="180" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
              CONTROL LINE
            </text>

            {/* ================= 3. RED SOLID POWER BUS (DRAWN OVER COMM LINES TO PREVENT SEVERING) ================= */}
            {/* PLN Input into LVMDP */}
            <path
              d="M 10 350 L 90 350"
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeDasharray={currentStageIndex >= 0 ? "8 4" : "none"}
              className={currentStageIndex >= 0 ? "animate-pulse" : ""}
            />
            <text x="18" y="340" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">
              PLN 380V AC &rarr;
            </text>

            {/* 3-Phase Bus from LVMDP into Current Transformer (CT) */}
            <path d="M 170 335 L 355 335" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 170 345 L 355 345" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 170 355 L 355 355" stroke="#ef4444" strokeWidth="2.5" />

            {/* CT Secondary Measurement Feeds UP into Parent Smart KWH 3P */}
            <path d="M 375 315 L 375 190" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M 395 315 L 395 190" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M 415 315 L 415 190" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
            {/* CT to Parent Terminal Dots */}
            <circle cx="375" cy="190" r="2.5" fill="#ef4444" />
            <circle cx="395" cy="190" r="2.5" fill="#ef4444" />
            <circle cx="415" cy="190" r="2.5" fill="#ef4444" />

            {/* Unbroken Main Distribution Bus Exiting CT towards Child Meters */}
            <path d="M 435 335 L 610 335" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 435 345 L 610 345" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 435 355 L 610 355" stroke="#ef4444" strokeWidth="2.5" />

            {/* Continuous, Uncut Red Feeder Lines to Child Smart kWh Meters */}
            {/* Feeder to Child 1: Overpasses comm lines cleanly with terminal connection */}
            <path
              d="M 610 335 L 650 335 L 650 280 L 725 280"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="610" cy="335" r="3" fill="#ef4444" />
            <circle cx="725" cy="280" r="3.5" fill="#ef4444" />

            {/* Feeder to Child 2 */}
            <path
              d="M 610 345 L 635 345 L 635 415 L 725 415"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="610" cy="345" r="3" fill="#ef4444" />
            <circle cx="725" cy="415" r="3.5" fill="#ef4444" />

            {/* Feeder to Child 3 */}
            <path
              d="M 610 355 L 580 355 L 580 550 L 725 550"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="610" cy="355" r="3" fill="#ef4444" />
            <circle cx="725" cy="550" r="3.5" fill="#ef4444" />

            {/* Power Out from Child Meters to Load Groups */}
            <path d="M 773 280 L 890 280" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="280" r="3" fill="#ef4444" />
            <circle cx="890" cy="280" r="3" fill="#ef4444" />

            <path d="M 773 415 L 890 415" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="415" r="3" fill="#ef4444" />
            <circle cx="890" cy="415" r="3" fill="#ef4444" />

            <path d="M 773 550 L 890 550" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="550" r="3" fill="#ef4444" />
            <circle cx="890" cy="550" r="3" fill="#ef4444" />

            {/* ================= 4. ANIMATED TELEMETRY PACKET DOTS (CONNECTING PARENT & CHILD METERS) ================= */}
            {/* Packet 1: Telemetry flowing from Child 1 up through RS485 bus into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 310 L 640 310 L 640 145 L 430 145"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 2: Telemetry flowing from Child 2 into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 445 L 640 445 L 640 145 L 430 145"
                dur="3.4s"
                begin="0.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 3: Telemetry flowing from Child 3 into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 575 L 640 575 L 640 145 L 430 145"
                dur="4.0s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 4: Telemetry Aggregation flowing from Parent Smart KWH to Gateway */}
            <circle r="3.8" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 430 145 L 665 145"
                dur="2.0s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 5: Gateway Remote Control Command Pulse flowing down to Child 1 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 695 137 L 695 240 L 725 240"
                dur="2.2s"
                begin="0.3s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 6: Gateway Remote Control Command Pulse flowing down to Child 2 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 695 137 L 695 375 L 725 375"
                dur="2.6s"
                begin="0.9s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 7: Gateway Remote Control Command Pulse flowing down to Child 3 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 695 137 L 695 510 L 725 510"
                dur="3.0s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ================= 5. HARDWARE PHYSICAL COMPONENTS ================= */}

            {/* 1. LVMDP Cabinet (Left) */}
            <g
              onClick={() => {
                setSelectedDeviceId("lvmdp");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <rect
                x="90"
                y="210"
                width="80"
                height="270"
                fill="#1c1917"
                stroke={selectedDeviceId === "lvmdp" ? "#f59e0b" : "#57534e"}
                strokeWidth={selectedDeviceId === "lvmdp" ? 3 : 1.5}
                rx="4"
              />
              {/* Cabinet legs */}
              <line x1="100" y1="480" x2="100" y2="495" stroke="#78716c" strokeWidth="3" />
              <line x1="160" y1="480" x2="160" y2="495" stroke="#78716c" strokeWidth="3" />
              {/* Internal MCCB Breaker Box */}
              <rect x="105" y="320" width="50" height="50" fill="#292524" stroke="#78716c" strokeWidth="1" />
              <rect x="115" y="335" width="30" height="20" fill="#44403c" rx="2" />
              <circle cx="130" cy="345" r="4" fill="#22c55e" />
              {/* Terminals */}
              <circle cx="165" cy="335" r="3" fill="#ef4444" />
              <circle cx="165" cy="345" r="3" fill="#ef4444" />
              <circle cx="165" cy="355" r="3" fill="#ef4444" />
              {/* Labels & Leader Lines */}
              <text x="85" y="185" fill="#e7e5e4" fontSize="10" fontFamily="monospace" fontWeight="bold">
                LVMDP 400 KW
              </text>
              <text x="85" y="198" fill="#a8a29e" fontSize="9" fontFamily="monospace">
                LVMDP 500 KVA
              </text>
              <line x1="130" y1="202" x2="130" y2="210" stroke="#a8a29e" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 2. CURRENT TRANSFORMER (CT) (Center) */}
            <g
              onClick={() => {
                setSelectedDeviceId("ct");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Outer pill frame */}
              <rect
                x="355"
                y="315"
                width="80"
                height="48"
                fill="#1c1917"
                stroke={selectedDeviceId === "ct" ? "#f59e0b" : "#57534e"}
                strokeWidth={selectedDeviceId === "ct" ? 2.5 : 1.2}
                rx="6"
                strokeDasharray="4 2"
              />
              {/* 3 Coils */}
              <rect x="365" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              <rect x="387" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              <rect x="409" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              {/* Label */}
              <text x="330" y="380" fill="#e7e5e4" fontSize="9" fontFamily="monospace" fontWeight="bold">
                CURRENT TRANSFORMER
              </text>
            </g>

            {/* 3. SMART KWH 3P (Parent / Master Meter) */}
            <g
              onClick={() => {
                setSelectedDeviceId("parentKwh");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <rect
                x="360"
                y="55"
                width="70"
                height="135"
                fill="#1c1917"
                stroke={selectedDeviceId === "parentKwh" ? "#f59e0b" : "#a8a29e"}
                strokeWidth={selectedDeviceId === "parentKwh" ? 3 : 1.5}
                rx="5"
              />
              {/* Meter LCD display */}
              <rect x="368" y="70" width="54" height="35" fill="#292524" stroke="#57534e" strokeWidth="1" rx="2" />
              <text x="372" y="86" fill="#22c55e" fontSize="8" fontFamily="monospace">
                4.28 kW
              </text>
              <text x="372" y="98" fill="#a8a29e" fontSize="7" fontFamily="monospace">
                3P 400A
              </text>
              {/* Optical port & button */}
              <circle cx="376" cy="120" r="5" fill="#44403c" stroke="#78716c" />
              <rect x="404" y="115" width="12" height="10" fill="#f59e0b" rx="2" />
              {/* Bottom terminal screws */}
              <circle cx="375" cy="180" r="2.5" fill="#ef4444" />
              <circle cx="388" cy="180" r="2.5" fill="#ef4444" />
              <circle cx="402" cy="180" r="2.5" fill="#ef4444" />
              <circle cx="415" cy="180" r="2.5" fill="#38bdf8" />
              {/* Labels */}
              <text x="290" y="40" fill="#e7e5e4" fontSize="10" fontFamily="monospace" fontWeight="bold">
                SMART KWH 3P
              </text>
              <text x="290" y="52" fill="#a8a29e" fontSize="8" fontFamily="monospace">
                CLOU CL730D22H · 3P 400 A
              </text>
            </g>

            {/* 4. GATEWAY (Top Right) */}
            <g
              onClick={() => {
                setSelectedDeviceId("gateway");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Antennas */}
              <line x1="675" y1="70" x2="675" y2="105" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="675" cy="70" r="2.5" fill="#38bdf8" />
              <line x1="715" y1="70" x2="715" y2="105" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="715" cy="70" r="2.5" fill="#38bdf8" />
              {/* Router Body */}
              <rect
                x="665"
                y="105"
                width="60"
                height="32"
                fill="#1c1917"
                stroke={selectedDeviceId === "gateway" ? "#38bdf8" : "#78716c"}
                strokeWidth={selectedDeviceId === "gateway" ? 2.5 : 1.2}
                rx="4"
              />
              {/* Status LEDs */}
              <circle cx="678" cy="120" r="2" fill="#22c55e" className="animate-ping" />
              <circle cx="686" cy="120" r="2" fill="#22c55e" />
              <circle cx="694" cy="120" r="2" fill="#38bdf8" />
              <circle cx="702" cy="120" r="2" fill="#f59e0b" />
              {/* Label */}
              <text x="735" y="110" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                GATEWAY
              </text>
              <text x="735" y="122" fill="#a8a29e" fontSize="8" fontFamily="monospace">
                Kerlink IoT Concentrator
              </text>
            </g>

            {/* 5. CHILD SMART KWH 1P - METER 1 & LOAD GROUP 1 */}
            <g
              onClick={() => {
                setSelectedDeviceId("childKwh1");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Meter 1 */}
              <rect
                x="725"
                y="225"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={selectedDeviceId === "childKwh1" ? "#f59e0b" : "#78716c"}
                strokeWidth={selectedDeviceId === "childKwh1" ? 2.5 : 1.2}
                rx="4"
              />
              <rect x="731" y="235" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="735" y="249" fill={isRelay1Active ? "#22c55e" : "#ef4444"} fontSize="7" fontFamily="monospace">
                {isRelay1Active ? "1.85 kW" : "0.0 kW"}
              </text>
              <circle cx="738" cy="270" r="3.5" fill="#44403c" />
              <circle cx="740" cy="310" r="2" fill="#ef4444" />
              <circle cx="755" cy="310" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="215" fill="#e7e5e4" fontSize="8" fontFamily="monospace" fontWeight="bold">
                SMART KWH 1P · 100A
              </text>
            </g>

            {/* LOAD GROUP 1 */}
            <g
              onClick={() => {
                setSelectedDeviceId("load1");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <rect
                x="890"
                y="245"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={selectedDeviceId === "load1" ? "#f59e0b" : "#57534e"}
                strokeWidth={selectedDeviceId === "load1" ? 2.5 : 1}
                rx="3"
              />
              {/* Terminal screw rows */}
              <circle cx="905" cy="260" r="3" fill="#a8a29e" />
              <circle cx="925" cy="260" r="3" fill="#a8a29e" />
              <circle cx="945" cy="260" r="3" fill="#a8a29e" />
              <circle cx="905" cy="285" r="3" fill="#ef4444" />
              <circle cx="925" cy="285" r="3" fill="#ef4444" />
              <circle cx="945" cy="285" r="3" fill="#ef4444" />
              <text x="970" y="280" fill="#e7e5e4" fontSize="9" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 1
              </text>
              <text x="970" y="292" fill="#a8a29e" fontSize="7" fontFamily="monospace">
                Server &amp; Inverter AC
              </text>
            </g>

            {/* 6. CHILD SMART KWH 1P - METER 2 & LOAD GROUP 2 */}
            <g
              onClick={() => {
                setSelectedDeviceId("childKwh2");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Meter 2 */}
              <rect
                x="725"
                y="360"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={selectedDeviceId === "childKwh2" ? "#f59e0b" : "#78716c"}
                strokeWidth={selectedDeviceId === "childKwh2" ? 2.5 : 1.2}
                rx="4"
              />
              <rect x="731" y="370" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="735" y="384" fill="#22c55e" fontSize="7" fontFamily="monospace">
                1.45 kW
              </text>
              <circle cx="738" cy="405" r="3.5" fill="#44403c" />
              <circle cx="740" cy="445" r="2" fill="#ef4444" />
              <circle cx="755" cy="445" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="350" fill="#e7e5e4" fontSize="8" fontFamily="monospace" fontWeight="bold">
                SMART KWH 1P · 100A
              </text>
            </g>

            {/* LOAD GROUP 2 */}
            <g
              onClick={() => {
                setSelectedDeviceId("load2");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <rect
                x="890"
                y="380"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={selectedDeviceId === "load2" ? "#f59e0b" : "#57534e"}
                strokeWidth={selectedDeviceId === "load2" ? 2.5 : 1}
                rx="3"
              />
              <circle cx="905" cy="395" r="3" fill="#a8a29e" />
              <circle cx="925" cy="395" r="3" fill="#a8a29e" />
              <circle cx="945" cy="395" r="3" fill="#a8a29e" />
              <circle cx="905" cy="420" r="3" fill="#ef4444" />
              <circle cx="925" cy="420" r="3" fill="#ef4444" />
              <circle cx="945" cy="420" r="3" fill="#ef4444" />
              <text x="970" y="415" fill="#e7e5e4" fontSize="9" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 2
              </text>
              <text x="970" y="427" fill="#a8a29e" fontSize="7" fontFamily="monospace">
                Office Workstations
              </text>
            </g>

            {/* 7. CHILD SMART KWH 1P - METER 3 & LOAD GROUP 3 */}
            <g
              onClick={() => {
                setSelectedDeviceId("childKwh3");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Meter 3 */}
              <rect
                x="725"
                y="495"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={selectedDeviceId === "childKwh3" ? "#f59e0b" : "#78716c"}
                strokeWidth={selectedDeviceId === "childKwh3" ? 2.5 : 1.2}
                rx="4"
              />
              <rect x="731" y="505" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="735" y="519" fill="#22c55e" fontSize="7" fontFamily="monospace">
                0.68 kW
              </text>
              <circle cx="738" cy="540" r="3.5" fill="#44403c" />
              <circle cx="740" cy="580" r="2" fill="#ef4444" />
              <circle cx="755" cy="580" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="485" fill="#e7e5e4" fontSize="8" fontFamily="monospace" fontWeight="bold">
                SMART KWH 1P · 100A
              </text>
            </g>

            {/* LOAD GROUP 3 */}
            <g
              onClick={() => {
                setSelectedDeviceId("load3");
                setIsAutoPlaying(false);
              }}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <rect
                x="890"
                y="515"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={selectedDeviceId === "load3" ? "#f59e0b" : "#57534e"}
                strokeWidth={selectedDeviceId === "load3" ? 2.5 : 1}
                rx="3"
              />
              <circle cx="905" cy="530" r="3" fill="#a8a29e" />
              <circle cx="925" cy="530" r="3" fill="#a8a29e" />
              <circle cx="945" cy="530" r="3" fill="#a8a29e" />
              <circle cx="905" cy="555" r="3" fill="#ef4444" />
              <circle cx="925" cy="555" r="3" fill="#ef4444" />
              <circle cx="945" cy="555" r="3" fill="#ef4444" />
              <text x="970" y="550" fill="#e7e5e4" fontSize="9" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 3
              </text>
              <text x="970" y="562" fill="#a8a29e" fontSize="7" fontFamily="monospace">
                Lab &amp; LED Lighting
              </text>
            </g>
          </svg>
        </div>

        {/* Real-time Flow Phase Banner */}
        <div className="flex flex-col gap-1.5 rounded-lg border border-stone-800 bg-stone-900/80 p-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-amber-400">
              {activeStage.title}
            </span>
            <span className="font-mono text-[10px] text-stone-400">
              Target Device: <strong className="text-stone-200">{DEVICES[activeStage.focusDeviceId]?.codeName}</strong>
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-stone-300">
            {activeStage.description}
          </p>
        </div>
      </div>

      {/* Device Inspector & Function Explanation Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDevice.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5 sm:p-6"
        >
          {/* Header */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--cs-color-border)] pb-3">
            <div className="flex items-center gap-3">
              <span className="rounded bg-[var(--cs-color-accent)] px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase">
                {activeDevice.category.toUpperCase()} COMPONENT
              </span>
              <div>
                <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                  {activeDevice.name}
                </h4>
                <span className="font-mono text-[11px] text-[var(--cs-color-text-muted)]">
                  Model / Hardware Tag: {activeDevice.codeName}
                </span>
              </div>
            </div>

            {/* If Child 1 is selected, provide live toggle control demo */}
            {activeDevice.id === "childKwh1" && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--cs-color-text-secondary)]">AC Relay Simulation:</span>
                <button
                  type="button"
                  onClick={() => setIsRelay1Active(!isRelay1Active)}
                  className={`rounded px-3 py-1 font-mono text-xs font-bold uppercase transition-all ${
                    isRelay1Active
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
                      : "bg-red-600 text-white hover:bg-red-700 shadow-xs"
                  }`}
                >
                  {isRelay1Active ? "Relay Closed (ON)" : "Relay Tripped (OFF)"}
                </button>
              </div>
            )}
          </div>

          {/* Description & Function */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Device Function &amp; Purpose:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {activeDevice.functionSummary}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Electrical Flow &amp; Telemetry:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {activeDevice.electricalRole}
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
              Technical Specifications in Schematic:
            </span>
            <ul className="mt-1.5 grid grid-cols-1 gap-2 text-xs text-[var(--cs-color-text-secondary)] sm:grid-cols-3">
              {activeDevice.specifications.map((spec, i) => (
                <li key={i} className="flex items-start gap-1.5 font-mono text-[11px]">
                  <span className="text-[var(--cs-color-accent)] font-bold">&bull;</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
