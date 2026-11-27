"use client";

import { useState, useEffect } from "react";

interface DeviceFunctionInfo {
  id: string;
  title: string;
  functionSummary: string;
  tooltipPos: { x: number; y: number; width: number; height?: number };
}

const DEVICE_FUNCTIONS: Record<string, DeviceFunctionInfo> = {
  lvmdp: {
    id: "lvmdp",
    title: "LVMDP 400KW / 500KVA",
    functionSummary:
      "Stabilizes 380V/220V grid/genset feeds and routes master busbar power via ACB & MCCB.",
    tooltipPos: { x: 180, y: 210, width: 250, height: 140 },
  },
  ct: {
    id: "ct",
    title: "Current Transformer (CT)",
    functionSummary:
      "Steps down busbar current (400A:5A) so the 3-Phase master meter samples campus load safely.",
    tooltipPos: { x: 270, y: 375, width: 250, height: 140 },
  },
  parentKwh: {
    id: "parentKwh",
    title: "Smart kWh 3P (Parent)",
    functionSummary:
      "Master 3-Phase digital meter measuring campus load (kW/kWh) and indexing room submeters.",
    tooltipPos: { x: 440, y: 55, width: 250, height: 140 },
  },
  gateway: {
    id: "gateway",
    title: "IoT Gateway",
    functionSummary:
      "Maps meter MAC addresses, bridges MQTT telemetry to cloud, and relays remote trip commands.",
    tooltipPos: { x: 735, y: 125, width: 250, height: 140 },
  },
  childKwh1: {
    id: "childKwh1",
    title: "Child 1 (Server Room)",
    functionSummary:
      "Monitors server rack & precision AC loads with an internal relay for instant emergency cut-off.",
    tooltipPos: { x: 450, y: 215, width: 255, height: 140 },
  },
  load1: {
    id: "load1",
    title: "Load Group 1",
    functionSummary:
      "Feeds mission-critical server rack PDUs and inverter precision air conditioning.",
    tooltipPos: { x: 955, y: 215, width: 200, height: 140 },
  },
  childKwh2: {
    id: "childKwh2",
    title: "Child 2 (Office)",
    functionSummary:
      "Tracks office workstation PC consumption and cuts phantom energy during off-hours.",
    tooltipPos: { x: 450, y: 340, width: 255, height: 140 },
  },
  load2: {
    id: "load2",
    title: "Load Group 2",
    functionSummary:
      "Distributes metered power across desktop computer terminals and office monitors.",
    tooltipPos: { x: 955, y: 350, width: 200, height: 140 },
  },
  childKwh3: {
    id: "childKwh3",
    title: "Child 3 (Lab)",
    functionSummary:
      "Monitors high-efficiency laboratory bay lighting arrays and exhaust ventilation fans.",
    tooltipPos: { x: 450, y: 445, width: 255, height: 140 },
  },
  load3: {
    id: "load3",
    title: "Load Group 3",
    functionSummary:
      "Powers laboratory test benches, exhaust ventilation blowers, and bay lighting.",
    tooltipPos: { x: 955, y: 445, width: 200, height: 140 },
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

interface AnimatedEmsArchitectureProps {
  onOpenTerm?: (termId: string) => void;
}

export default function AnimatedEmsArchitecture({ onOpenTerm }: AnimatedEmsArchitectureProps = {}) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredDeviceId, setHoveredDeviceId] = useState<string | null>(null);
  const [pinnedDeviceId, setPinnedDeviceId] = useState<string | null>(null);

  // Auto progression across stages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeStage = STAGES[currentStageIndex];

  // Which device tooltip to show beside the device: hovered takes precedence, then pinned device
  const activeTooltipId = hoveredDeviceId || pinnedDeviceId;
  const activeTooltipDevice = activeTooltipId ? DEVICE_FUNCTIONS[activeTooltipId] : null;

  // Active highlighted device in schematic: hovered, or pinned, or the current stage focus
  const activeHighlightedId = hoveredDeviceId || pinnedDeviceId || activeStage.focusDeviceId;

  const handleDeviceClick = (deviceId: string) => {
    if (pinnedDeviceId === deviceId) {
      setPinnedDeviceId(null);
    } else {
      setPinnedDeviceId(deviceId);
      setIsAutoPlaying(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-4 sm:p-6 lg:p-8">
      {/* Title & Controller Bar */}
      <div className="flex flex-col gap-4 border-b border-[var(--cs-color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--cs-color-accent)] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              System Architecture &amp; Hardware Topology Flow
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
            Hover or click any device to see its primary function right beside it. Watch the automated electrical and telemetry flow below.
          </p>
        </div>

        {/* Play/Pause & Stage Selector */}
        <div className="flex flex-wrap items-center gap-2.5">
          {onOpenTerm && (
            <button
              type="button"
              onClick={() => onOpenTerm("lvmdp")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1.5 font-mono text-xs font-semibold text-amber-300 transition-colors hover:bg-amber-500/20"
            >
              <span>💡 Terms &amp; Analogies</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying);
              if (isAutoPlaying) setPinnedDeviceId(null);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--cs-color-text-primary)] transition-colors hover:border-[var(--cs-color-accent)]"
          >
            <span>{isAutoPlaying ? "❚❚ Pause Auto Flow" : "▶ Resume Auto Flow"}</span>
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
                setPinnedDeviceId(null);
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

      {/* Main SVG Vector Schematic Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-black/95 p-2 sm:p-4 shadow-inner">
        {/* Schematic Canvas Header with Legend */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 px-2 pb-2.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-wider text-stone-200">
              ELECTRICAL TOPOLOGY &amp; MODBUS BUS SCHEMATIC
            </span>
          </div>
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => onOpenTerm?.("lvmdp")}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="Click to view analogy for Power Flow"
            >
              <span className="h-2 w-4 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
              <span className="text-stone-300">Power Flow (380V / 220V AC) ⚡</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenTerm?.("modbus")}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="Click to view analogy for RS485 Modbus"
            >
              <span className="h-2 w-4 rounded-full bg-indigo-400 border border-dashed border-indigo-300" />
              <span className="text-stone-300">RS485 Modbus RTU Bus</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenTerm?.("relay")}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="Click to view analogy for Relay Control"
            >
              <span className="h-2 w-4 rounded-full bg-sky-400 border border-dashed border-sky-400" />
              <span className="text-stone-300">Relay Control Line</span>
            </button>
          </div>
        </div>

        {/* Responsive Vector Diagram */}
        <div className="relative w-full overflow-x-auto py-3">
          <svg
            viewBox="0 0 1160 620"
            className="w-full min-w-[900px] h-auto select-none"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
          >
            <defs>
              {/* Electric Pulse Glow */}
              <filter id="electric-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Electricity Lightning Bolt Icon Symbol */}
              <g id="electric-bolt">
                <path
                  d="M 0 -8 L 5 -1 L 1 0 L 4 8 L -4 1 L 0 0 Z"
                  fill="#facc15"
                  stroke="#ca8a04"
                  strokeWidth="0.8"
                  filter="url(#electric-glow)"
                />
              </g>
            </defs>

            {/* ================= 1. RS485 MODBUS COMMUNICATION BUS (CLEAN & NON-OVERLAPPING) ================= */}
            {/* Direct RS485 communication link between Parent Smart KWH (x=430, y=115) and Gateway (x=665, y=115) */}
            <path
              d="M 430 115 L 665 115"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            {/* Connection Port Dot on Parent KWH */}
            <circle cx="430" cy="115" r="4" fill="#818cf8" />
            {/* Connection Port Dot on Gateway */}
            <circle cx="665" cy="115" r="4" fill="#818cf8" />

            {/* Vertical RS485 Trunk Dropping Down at x=630 */}
            <path
              d="M 630 115 L 630 575"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <circle cx="630" cy="115" r="3.5" fill="#818cf8" />

            {/* Fully connected branches from RS485 trunk directly into each Child Meter */}
            {/* Branch into Child 1 (Server Room) */}
            <path
              d="M 630 305 L 725 305"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <circle cx="630" cy="305" r="3" fill="#818cf8" />
            <circle cx="725" cy="305" r="3.5" fill="#818cf8" />

            {/* Branch into Child 2 (Office) */}
            <path
              d="M 630 440 L 725 440"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <circle cx="630" cy="440" r="3" fill="#818cf8" />
            <circle cx="725" cy="440" r="3.5" fill="#818cf8" />

            {/* Branch into Child 3 (Lab) */}
            <path
              d="M 630 575 L 725 575"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <circle cx="630" cy="575" r="3" fill="#818cf8" />
            <circle cx="725" cy="575" r="3.5" fill="#818cf8" />

            <text x="475" y="103" fill="#818cf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              RS485 MODBUS RTU
            </text>

            {/* ================= 2. DASHED SKY-BLUE CONTROL LINES (DIRECT DAISY-CHAIN FROM GATEWAY) ================= */}
            {/* Control line drops cleanly from bottom of Gateway at (700, 137) straight down the meter array */}
            <circle cx="700" cy="137" r="3.5" fill="#38bdf8" />
            
            {/* Control Feeder from Gateway directly into top of Child 1 */}
            <path
              d="M 700 137 L 700 200 L 745 200 L 745 225"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="745" cy="225" r="3" fill="#38bdf8" />

            {/* Control Feeder from bottom of Child 1 into top of Child 2 */}
            <path
              d="M 745 320 L 745 360"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="745" cy="320" r="2.5" fill="#38bdf8" />
            <circle cx="745" cy="360" r="3" fill="#38bdf8" />

            {/* Control Feeder from bottom of Child 2 into top of Child 3 */}
            <path
              d="M 745 455 L 745 495"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="745" cy="455" r="2.5" fill="#38bdf8" />
            <circle cx="745" cy="495" r="3" fill="#38bdf8" />

            <text x="708" y="180" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              CONTROL LINE
            </text>

            {/* ================= 3. RED SOLID POWER BUS (UNBROKEN FROM LVMDP TO METERS & LOADS) ================= */}
            {/* PLN Input into LVMDP */}
            <path
              d="M 10 350 L 90 350"
              stroke="#ef4444"
              strokeWidth="3.5"
              className="animate-pulse"
            />
            <text x="12" y="338" fill="#f87171" fontSize="12" fontFamily="monospace" fontWeight="bold">
              PLN 380V AC ⚡ &rarr;
            </text>

            {/* 3-Phase Bus from LVMDP passing directly into Current Transformer (CT) */}
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

            {/* Unbroken Main Distribution Bus Exiting CT going straight horizontally to x=680 */}
            <path d="M 435 335 L 680 335" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 435 345 L 680 345" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 435 355 L 680 355" stroke="#ef4444" strokeWidth="2.5" />

            {/* Seamless, Continuous Red Power Feeder Lines reaching each Child Smart kWh Meter */}
            {/* Feeder into Child 1: curves up to terminal at (725, 275) */}
            <path
              d="M 680 335 L 680 275 L 725 275"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="680" cy="335" r="3" fill="#ef4444" />
            <circle cx="725" cy="275" r="3.5" fill="#ef4444" />

            {/* Feeder into Child 2: continues to terminal at (725, 410) */}
            <path
              d="M 680 345 L 680 410 L 725 410"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="680" cy="345" r="3" fill="#ef4444" />
            <circle cx="725" cy="410" r="3.5" fill="#ef4444" />

            {/* Feeder into Child 3: curves down to terminal at (725, 545) */}
            <path
              d="M 680 355 L 680 545 L 725 545"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="680" cy="355" r="3" fill="#ef4444" />
            <circle cx="725" cy="545" r="3.5" fill="#ef4444" />

            {/* Power Out from Child Meters directly into Load Groups */}
            <path d="M 773 275 L 890 275" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="275" r="3" fill="#ef4444" />
            <circle cx="890" cy="275" r="3" fill="#ef4444" />

            <path d="M 773 410 L 890 410" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="410" r="3" fill="#ef4444" />
            <circle cx="890" cy="410" r="3" fill="#ef4444" />

            <path d="M 773 545 L 890 545" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="773" cy="545" r="3" fill="#ef4444" />
            <circle cx="890" cy="545" r="3" fill="#ef4444" />

            {/* ================= 4. ANIMATED ELECTRICITY LIGHTNING ICONS TRAVELING ALONG POWER LINES ================= */}
            {/* Bolt 1 & 2: PLN Grid feed flowing into LVMDP */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 10 350 L 90 350"
                dur="1.2s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>
            <use href="#electric-bolt">
              <animateMotion
                path="M 10 350 L 90 350"
                dur="1.2s"
                begin="0.6s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 3 & 4: LVMDP to Current Transformer (CT) */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 170 345 L 355 345"
                dur="1.5s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>
            <use href="#electric-bolt">
              <animateMotion
                path="M 170 345 L 355 345"
                dur="1.5s"
                begin="0.75s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 5: CT secondary feed up into Parent Smart KWH */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 395 315 L 395 190"
                dur="1.4s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 6: Main Bus entering Child 1 (Server Room) */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 335 L 680 335 L 680 275 L 725 275"
                dur="2.4s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 335 L 680 335 L 680 275 L 725 275"
                dur="2.4s"
                begin="1.2s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 7: Out of Child 1 into Load Group 1 */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 773 275 L 890 275"
                dur="1.3s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 8: Main Bus entering Child 2 (Office) */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 345 L 680 345 L 680 410 L 725 410"
                dur="2.5s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 345 L 680 345 L 680 410 L 725 410"
                dur="2.5s"
                begin="1.25s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 9: Out of Child 2 into Load Group 2 */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 773 410 L 890 410"
                dur="1.3s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 10: Main Bus entering Child 3 (Lab) */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 355 L 680 355 L 680 545 L 725 545"
                dur="2.6s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>
            <use href="#electric-bolt">
              <animateMotion
                path="M 435 355 L 680 355 L 680 545 L 725 545"
                dur="2.6s"
                begin="1.3s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* Bolt 11: Out of Child 3 into Load Group 3 */}
            <use href="#electric-bolt">
              <animateMotion
                path="M 773 545 L 890 545"
                dur="1.3s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </use>

            {/* ================= 5. ANIMATED TELEMETRY PACKET DOTS (RS485 BUS) ================= */}
            {/* Packet 1: Telemetry flowing from Child 1 directly into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 305 L 630 305 L 630 115 L 430 115"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Reverse Sync Packet from Parent KWH to Child 1 */}
            <circle r="3" fill="#818cf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 430 115 L 630 115 L 630 305 L 725 305"
                dur="2.5s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 2: Telemetry flowing from Child 2 into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 440 L 630 440 L 630 115 L 430 115"
                dur="3.0s"
                begin="0.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 3: Telemetry flowing from Child 3 into Parent Smart KWH */}
            <circle r="3.5" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 725 575 L 630 575 L 630 115 L 430 115"
                dur="3.5s"
                begin="0.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 4: Gateway MAC Discovery query between Gateway and Parent Smart KWH */}
            <circle r="3.8" fill="#818cf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 665 115 L 430 115"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3.8" fill="#a5b4fc" filter="url(#packet-glow)">
              <animateMotion
                path="M 430 115 L 665 115"
                dur="1.8s"
                begin="0.9s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 5: Gateway Remote Control Command Pulse flowing down directly to Child 1 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 700 137 L 700 200 L 745 200 L 745 225"
                dur="1.8s"
                begin="0.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 6: Gateway Remote Control Command Pulse flowing down through Child 2 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 745 320 L 745 360"
                dur="1.5s"
                begin="0.7s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 7: Gateway Remote Control Command Pulse flowing down through Child 3 */}
            <circle r="3" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion
                path="M 745 455 L 745 495"
                dur="1.5s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ================= 6. HARDWARE PHYSICAL COMPONENTS WITH ENLARGED LABELS ================= */}

            {/* 1. LVMDP Cabinet (Left) */}
            <g
              onClick={() => handleDeviceClick("lvmdp")}
              onMouseEnter={() => setHoveredDeviceId("lvmdp")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect
                x="90"
                y="210"
                width="80"
                height="270"
                fill="#1c1917"
                stroke={activeHighlightedId === "lvmdp" ? "#f59e0b" : "#57534e"}
                strokeWidth={activeHighlightedId === "lvmdp" ? 3.5 : 1.5}
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
              {/* Labels with larger font */}
              <text x="80" y="180" fill="#f59e0b" fontSize="13" fontFamily="monospace" fontWeight="bold">
                LVMDP 400 KW
              </text>
              <text x="80" y="196" fill="#e7e5e4" fontSize="11" fontFamily="monospace">
                500 KVA Main Panel
              </text>
              <line x1="130" y1="202" x2="130" y2="210" stroke="#a8a29e" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 2. CURRENT TRANSFORMER (CT) (Center) */}
            <g
              onClick={() => handleDeviceClick("ct")}
              onMouseEnter={() => setHoveredDeviceId("ct")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              {/* Outer pill frame */}
              <rect
                x="355"
                y="315"
                width="80"
                height="48"
                fill="#1c1917"
                stroke={activeHighlightedId === "ct" ? "#f59e0b" : "#57534e"}
                strokeWidth={activeHighlightedId === "ct" ? 3 : 1.5}
                rx="6"
                strokeDasharray="4 2"
              />
              {/* 3 Coils */}
              <rect x="365" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              <rect x="387" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              <rect x="409" y="325" width="16" height="26" fill="#292524" stroke="#ef4444" strokeWidth="1.5" rx="2" />
              {/* Label */}
              <text x="325" y="382" fill="#e7e5e4" fontSize="12" fontFamily="monospace" fontWeight="bold">
                CURRENT TRANSFORMER (CT)
              </text>
            </g>

            {/* 3. SMART KWH 3P (Parent / Master Meter) */}
            <g
              onClick={() => handleDeviceClick("parentKwh")}
              onMouseEnter={() => setHoveredDeviceId("parentKwh")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect
                x="360"
                y="55"
                width="70"
                height="135"
                fill="#1c1917"
                stroke={activeHighlightedId === "parentKwh" ? "#f59e0b" : "#a8a29e"}
                strokeWidth={activeHighlightedId === "parentKwh" ? 3.5 : 1.5}
                rx="5"
              />
              {/* Meter LCD display */}
              <rect x="368" y="70" width="54" height="35" fill="#292524" stroke="#57534e" strokeWidth="1" rx="2" />
              <text x="372" y="87" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">
                4.28 kW
              </text>
              <text x="372" y="100" fill="#a8a29e" fontSize="8" fontFamily="monospace">
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
              <text x="270" y="38" fill="#f59e0b" fontSize="13" fontFamily="monospace" fontWeight="bold">
                SMART KWH 3P (PARENT)
              </text>
              <text x="270" y="52" fill="#a8a29e" fontSize="11" fontFamily="monospace">
                CLOU CL730D22H · 3P 400 A
              </text>
            </g>

            {/* 4. GATEWAY (Top Right) */}
            <g
              onClick={() => handleDeviceClick("gateway")}
              onMouseEnter={() => setHoveredDeviceId("gateway")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
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
                stroke={activeHighlightedId === "gateway" ? "#38bdf8" : "#78716c"}
                strokeWidth={activeHighlightedId === "gateway" ? 3 : 1.5}
                rx="4"
              />
              {/* Static Status LEDs */}
              <circle cx="678" cy="120" r="2.5" fill="#22c55e" />
              <circle cx="686" cy="120" r="2.5" fill="#22c55e" />
              <circle cx="694" cy="120" r="2.5" fill="#38bdf8" />
              <circle cx="702" cy="120" r="2.5" fill="#f59e0b" />
              {/* Label */}
              <text x="735" y="112" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold">
                IOT GATEWAY
              </text>
              <text x="735" y="126" fill="#a8a29e" fontSize="11" fontFamily="monospace">
                Kerlink IoT Concentrator
              </text>
            </g>

            {/* 5. CHILD SMART KWH 1P - METER 1 & LOAD GROUP 1 */}
            <g
              onClick={() => handleDeviceClick("childKwh1")}
              onMouseEnter={() => setHoveredDeviceId("childKwh1")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              {/* Meter 1 */}
              <rect
                x="725"
                y="225"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={activeHighlightedId === "childKwh1" ? "#f59e0b" : "#78716c"}
                strokeWidth={activeHighlightedId === "childKwh1" ? 3 : 1.5}
                rx="4"
              />
              <rect x="731" y="235" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="734" y="250" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
                1.85kW
              </text>
              <circle cx="738" cy="270" r="3.5" fill="#44403c" />
              <circle cx="740" cy="310" r="2" fill="#ef4444" />
              <circle cx="755" cy="310" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="215" fill="#e7e5e4" fontSize="11" fontFamily="monospace" fontWeight="bold">
                CHILD 1 (1P · 100A)
              </text>
            </g>

            {/* LOAD GROUP 1 */}
            <g
              onClick={() => handleDeviceClick("load1")}
              onMouseEnter={() => setHoveredDeviceId("load1")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect
                x="890"
                y="245"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={activeHighlightedId === "load1" ? "#f59e0b" : "#57534e"}
                strokeWidth={activeHighlightedId === "load1" ? 3 : 1.2}
                rx="3"
              />
              {/* Terminal screw rows */}
              <circle cx="905" cy="260" r="3" fill="#a8a29e" />
              <circle cx="925" cy="260" r="3" fill="#a8a29e" />
              <circle cx="945" cy="260" r="3" fill="#a8a29e" />
              <circle cx="905" cy="285" r="3" fill="#ef4444" />
              <circle cx="925" cy="285" r="3" fill="#ef4444" />
              <circle cx="945" cy="285" r="3" fill="#ef4444" />
              <text x="970" y="278" fill="#e7e5e4" fontSize="12" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 1
              </text>
              <text x="970" y="294" fill="#a8a29e" fontSize="10" fontFamily="monospace">
                Server &amp; Inverter AC
              </text>
            </g>

            {/* 6. CHILD SMART KWH 1P - METER 2 & LOAD GROUP 2 */}
            <g
              onClick={() => handleDeviceClick("childKwh2")}
              onMouseEnter={() => setHoveredDeviceId("childKwh2")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              {/* Meter 2 */}
              <rect
                x="725"
                y="360"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={activeHighlightedId === "childKwh2" ? "#f59e0b" : "#78716c"}
                strokeWidth={activeHighlightedId === "childKwh2" ? 3 : 1.5}
                rx="4"
              />
              <rect x="731" y="370" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="734" y="385" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
                1.45kW
              </text>
              <circle cx="738" cy="405" r="3.5" fill="#44403c" />
              <circle cx="740" cy="445" r="2" fill="#ef4444" />
              <circle cx="755" cy="445" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="350" fill="#e7e5e4" fontSize="11" fontFamily="monospace" fontWeight="bold">
                CHILD 2 (1P · 100A)
              </text>
            </g>

            {/* LOAD GROUP 2 */}
            <g
              onClick={() => handleDeviceClick("load2")}
              onMouseEnter={() => setHoveredDeviceId("load2")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect
                x="890"
                y="380"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={activeHighlightedId === "load2" ? "#f59e0b" : "#57534e"}
                strokeWidth={activeHighlightedId === "load2" ? 3 : 1.2}
                rx="3"
              />
              <circle cx="905" cy="395" r="3" fill="#a8a29e" />
              <circle cx="925" cy="395" r="3" fill="#a8a29e" />
              <circle cx="945" cy="395" r="3" fill="#a8a29e" />
              <circle cx="905" cy="420" r="3" fill="#ef4444" />
              <circle cx="925" cy="420" r="3" fill="#ef4444" />
              <circle cx="945" cy="420" r="3" fill="#ef4444" />
              <text x="970" y="413" fill="#e7e5e4" fontSize="12" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 2
              </text>
              <text x="970" y="429" fill="#a8a29e" fontSize="10" fontFamily="monospace">
                Office Workstations
              </text>
            </g>

            {/* 7. CHILD SMART KWH 1P - METER 3 & LOAD GROUP 3 */}
            <g
              onClick={() => handleDeviceClick("childKwh3")}
              onMouseEnter={() => setHoveredDeviceId("childKwh3")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              {/* Meter 3 */}
              <rect
                x="725"
                y="495"
                width="48"
                height="95"
                fill="#1c1917"
                stroke={activeHighlightedId === "childKwh3" ? "#f59e0b" : "#78716c"}
                strokeWidth={activeHighlightedId === "childKwh3" ? 3 : 1.5}
                rx="4"
              />
              <rect x="731" y="505" width="36" height="22" fill="#292524" stroke="#57534e" strokeWidth="0.8" rx="2" />
              <text x="734" y="520" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
                0.68kW
              </text>
              <circle cx="738" cy="540" r="3.5" fill="#44403c" />
              <circle cx="740" cy="580" r="2" fill="#ef4444" />
              <circle cx="755" cy="580" r="2" fill="#ef4444" />
              {/* Label */}
              <text x="725" y="485" fill="#e7e5e4" fontSize="11" fontFamily="monospace" fontWeight="bold">
                CHILD 3 (1P · 100A)
              </text>
            </g>

            {/* LOAD GROUP 3 */}
            <g
              onClick={() => handleDeviceClick("load3")}
              onMouseEnter={() => setHoveredDeviceId("load3")}
              onMouseLeave={() => setHoveredDeviceId(null)}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect
                x="890"
                y="515"
                width="70"
                height="65"
                fill="#1c1917"
                stroke={activeHighlightedId === "load3" ? "#f59e0b" : "#57534e"}
                strokeWidth={activeHighlightedId === "load3" ? 3 : 1.2}
                rx="3"
              />
              <circle cx="905" cy="530" r="3" fill="#a8a29e" />
              <circle cx="925" cy="530" r="3" fill="#a8a29e" />
              <circle cx="945" cy="530" r="3" fill="#a8a29e" />
              <circle cx="905" cy="555" r="3" fill="#ef4444" />
              <circle cx="925" cy="555" r="3" fill="#ef4444" />
              <circle cx="945" cy="555" r="3" fill="#ef4444" />
              <text x="970" y="548" fill="#e7e5e4" fontSize="12" fontFamily="monospace" fontWeight="bold">
                LOAD GROUP 3
              </text>
              <text x="970" y="564" fill="#a8a29e" fontSize="10" fontFamily="monospace">
                Lab &amp; LED Lighting
              </text>
            </g>

            {/* ================= 7. CONCISE FUNCTION TOOLTIP RIGHT BESIDE EACH DEVICE ================= */}
            {activeTooltipDevice && (
              <foreignObject
                x={activeTooltipDevice.tooltipPos.x}
                y={activeTooltipDevice.tooltipPos.y}
                width={activeTooltipDevice.tooltipPos.width}
                height={activeTooltipDevice.tooltipPos.height || 140}
                style={{ overflow: "visible" }}
                className="transition-all duration-150"
              >
                <div className="h-auto w-full rounded-lg border border-amber-500/90 bg-stone-900/95 p-2.5 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>{activeTooltipDevice.title} · Function</span>
                  </div>
                  <p className="mt-1 font-[var(--cs-font-sans)] text-[11px] leading-[1.4] text-stone-200">
                    {activeTooltipDevice.functionSummary}
                  </p>
                  {onOpenTerm && (
                    <button
                      type="button"
                      onClick={() => onOpenTerm(activeTooltipDevice.id === "childKwh1" || activeTooltipDevice.id === "childKwh2" || activeTooltipDevice.id === "childKwh3" ? "childKwh" : activeTooltipDevice.id.startsWith("load") ? "loadGroup" : activeTooltipDevice.id)}
                      className="mt-1.5 inline-flex items-center gap-1 font-mono text-[10px] text-amber-300 hover:text-white underline underline-offset-2 cursor-pointer transition-colors"
                    >
                      <span>💡 View Real-World Analogy &rarr;</span>
                    </button>
                  )}
                </div>
              </foreignObject>
            )}
          </svg>
        </div>

        {/* ================= REAL-TIME AUTOMATIC MAIN FLOW EXPLANATION BANNER ================= */}
        <div className="flex flex-col gap-1.5 rounded-lg border border-stone-800 bg-stone-900/80 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-amber-400">
              {activeStage.title}
            </span>
            <span className="font-mono text-[10px] text-stone-400">
              Active Flow Stage · {currentStageIndex + 1} of {STAGES.length}
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-stone-300 leading-relaxed">
            {activeStage.description}
          </p>
        </div>
      </div>
    </div>
  );
}
