"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface StepInfo {
  number: string;
  title: string;
  badge: string;
  description: string;
  technicalDetails: string[];
}

const FLOW_STEPS: StepInfo[] = [
  {
    number: "01",
    title: "AC Grid Supply to LVMDP Rectification",
    badge: "Power Intake & Conversion",
    description:
      "Arus listrik bolak-balik (AC 220V/380V) dari PLN dan generator darurat masuk ke panel LVMDP (Low Voltage Main Distribution Panel). LVMDP menstabilkan dan mengonversi arus menjadi DC terkontrol untuk mencatu sirkuit pengukuran dan kontrol sistem.",
    technicalDetails: [
      "Input: 3-Phase AC 380V/220V 50Hz (PLN Grid & Genset Backup)",
      "LVMDP: Main busbar breaker with surge protection",
      "Power Conversion: AC to regulated DC bus for meter electronics & actuation relays",
    ],
  },
  {
    number: "02",
    title: "Gateway Discovery & MAC Address Mapping",
    badge: "Hardware Handshake",
    description:
      "IoT Gateway (Kerlink Concentrator) memindai seluruh smart meter yang terpasang di jaringan kabel/nirkabel. Gateway mendata identitas unik hardware (MAC Address) untuk membedakan mana meter induk (Parent) dan meter cabang (Child).",
    technicalDetails: [
      "Hardware: Kerlink Industrial IoT Gateway with RS485 / Modbus RTU",
      "Topology Discovery: Querying device hardware MAC addresses",
      "Role Designation: Master parent node vs. spatial child submeters",
    ],
  },
  {
    number: "03",
    title: "Parent Smart kWh to Room Distribution",
    badge: "Parent-Child Hierarchy",
    description:
      "Smart kWh Induk (Parent) bertindak sebagai pusat agregasi daya utama dan mendata seluruh Smart kWh Anak (Child) yang terpasang di setiap ruangan kampus/fasilitas.",
    technicalDetails: [
      "Parent Smart kWh: Master campus feeder meter with Modbus register table",
      "Spatial Allocation: Assigning submeters to physical zones (Lab, Server, Office)",
      "Phase Balance: Real-time 3-phase load distribution tracking",
    ],
  },
  {
    number: "04",
    title: "Child Smart kWh Per-Device Telemetry",
    badge: "Granular Submetering",
    description:
      "Di tiap ruangan, Smart kWh Anak memantau pemakaian listrik perangkat secara granular (PC kerja, AC, kipas angin, lampu). Setiap tarikan daya, voltase, dan kWh dicatat secara real-time dan diteruskan ke Smart kWh Induk.",
    technicalDetails: [
      "Submetered Devices: Workstations (350W), Inverter AC (1,850W), Ventilation (180W)",
      "Sampling Rate: High-frequency telemetry polling every 3–5 seconds",
      "Packet Aggregation: Child meters forward data packets to Parent kWh master buffer",
    ],
  },
  {
    number: "05",
    title: "EMS Software Cockpit & Direct Remote Actuation",
    badge: "Cloud Telemetry & Control",
    description:
      "Data telemetri lengkap masuk ke Software EMS secara real-time. Operator dapat memantau grafik beban, melihat konsumsi per ruangan, serta mematikan/menyalakan relay perangkat secara instan melalui switch digital.",
    technicalDetails: [
      "Telemetry Flow: Gateway MQTT push to EMS Cloud Time-Series Engine",
      "Operational Visibility: Intraday kilowatt-hour curves & high-consumption alerts",
      "Two-Way Control: Instant kill-switch command payload dispatched back to physical relay",
    ],
  },
];

export default function AnimatedEmsArchitecture() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRelayOn, setIsRelayOn] = useState(true);

  // Auto cycle through steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = FLOW_STEPS[activeStep];

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-5 sm:p-7 lg:p-8">
      {/* Header bar */}
      <div className="flex flex-col gap-4 border-b border-[var(--cs-color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--cs-color-accent)] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              Interactive Topology &amp; Telemetry Simulation
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
            Alur otomatis: Pasokan Listrik PLN/LVMDP → Gateway MAC Mapping → Parent-Child kWh → Telemetri Perangkat → Kontrol EMS
          </p>
        </div>

        {/* Play/Pause & Step Counter */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--cs-color-text-primary)] transition-colors hover:border-[var(--cs-color-accent)]"
            title={isPlaying ? "Jeda animasi" : "Putar otomatis"}
          >
            <span>{isPlaying ? "❚❚ Pause" : "▶ Auto Play"}</span>
          </button>
          <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
            0{activeStep + 1} / 0{FLOW_STEPS.length}
          </span>
        </div>
      </div>

      {/* Step Navigator Pills */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {FLOW_STEPS.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={s.number}
              type="button"
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`flex flex-col gap-1 rounded-xl border p-2.5 text-left transition-all duration-200 ${
                isActive
                  ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg)] ring-1 ring-[var(--cs-color-accent)] shadow-xs"
                  : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)]/50 hover:bg-[var(--cs-color-bg)] text-[var(--cs-color-text-muted)] hover:text-[var(--cs-color-text-primary)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[10px] font-bold ${
                    isActive ? "text-[var(--cs-color-accent)]" : "text-[var(--cs-color-text-muted)]"
                  }`}
                >
                  STEP {s.number}
                </span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--cs-color-accent)] animate-ping" />
                )}
              </div>
              <span className="line-clamp-1 font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
                {s.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Visual Canvas */}
      <div className="relative overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-4 sm:p-6 lg:p-8">
        {/* Subtle grid pattern background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* 5-Node Visual Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-3">
          {/* Node 1: Grid & LVMDP */}
          <div
            className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
              activeStep === 0
                ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] ring-2 ring-[var(--cs-color-accent)]/30 shadow-md"
                : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                01. Power Source
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  activeStep === 0 ? "bg-amber-400 animate-ping" : "bg-stone-500"
                }`}
              />
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                PLN &amp; LVMDP
              </h4>
              <p className="mt-1 text-[11px] text-[var(--cs-color-text-secondary)]">
                AC 380V Grid &rarr; Rectifier DC Bus
              </p>
            </div>
            <div className="rounded-md border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 font-mono text-[10px]">
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Bus Voltage:</span>
                <span className="font-semibold text-amber-500">380.4 V</span>
              </div>
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Conversion:</span>
                <span className="text-emerald-500 font-bold">STABLE</span>
              </div>
            </div>
          </div>

          {/* Node 2: IoT Gateway */}
          <div
            className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
              activeStep === 1
                ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] ring-2 ring-[var(--cs-color-accent)]/30 shadow-md"
                : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                02. Gateway
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  activeStep === 1 ? "bg-cyan-400 animate-ping" : "bg-stone-500"
                }`}
              />
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                Kerlink IoT Gateway
              </h4>
              <p className="mt-1 text-[11px] text-[var(--cs-color-text-secondary)]">
                MAC Address Discovery &amp; Table
              </p>
            </div>
            <div className="rounded-md border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 font-mono text-[10px]">
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Parent MAC:</span>
                <span className="text-cyan-500">79:A4:E2:01</span>
              </div>
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Child Count:</span>
                <span className="text-emerald-500 font-bold">12 Registered</span>
              </div>
            </div>
          </div>

          {/* Node 3: Parent Smart kWh */}
          <div
            className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
              activeStep === 2
                ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] ring-2 ring-[var(--cs-color-accent)]/30 shadow-md"
                : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                03. Master Node
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  activeStep === 2 ? "bg-indigo-400 animate-ping" : "bg-stone-500"
                }`}
              />
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                Parent Smart kWh
              </h4>
              <p className="mt-1 text-[11px] text-[var(--cs-color-text-secondary)]">
                Central Campus Load Master
              </p>
            </div>
            <div className="rounded-md border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 font-mono text-[10px]">
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Total Load:</span>
                <span className="font-bold text-amber-500">
                  {isRelayOn ? "4.28 kW" : "2.43 kW"}
                </span>
              </div>
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Hierarchy:</span>
                <span className="text-emerald-500 font-bold">SYNCED</span>
              </div>
            </div>
          </div>

          {/* Node 4: Child kWh & Rooms */}
          <div
            className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
              activeStep === 3
                ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] ring-2 ring-[var(--cs-color-accent)]/30 shadow-md"
                : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                04. Spatial Rooms
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  activeStep === 3 ? "bg-emerald-400 animate-ping" : "bg-stone-500"
                }`}
              />
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                Child Smart kWh
              </h4>
              <p className="mt-1 text-[11px] text-[var(--cs-color-text-secondary)]">
                Per-Device Submetering in Rooms
              </p>
            </div>
            <div className="rounded-md border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 font-mono text-[10px]">
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Room AC:</span>
                <span className={isRelayOn ? "text-emerald-400 font-bold" : "text-stone-400 font-bold line-through"}>
                  {isRelayOn ? "1,850 W (ON)" : "0 W (OFF)"}
                </span>
              </div>
              <div className="flex justify-between text-[var(--cs-color-text-muted)]">
                <span>Workstation:</span>
                <span className="text-emerald-400 font-bold">350 W (ON)</span>
              </div>
            </div>
          </div>

          {/* Node 5: EMS Software Dashboard */}
          <div
            className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
              activeStep === 4
                ? "border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] ring-2 ring-[var(--cs-color-accent)]/30 shadow-md"
                : "border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                05. Software EMS
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  activeStep === 4 ? "bg-rose-500 animate-ping" : "bg-stone-500"
                }`}
              />
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-[var(--cs-color-text-primary)]">
                Web Cockpit &amp; Control
              </h4>
              <p className="mt-1 text-[11px] text-[var(--cs-color-text-secondary)]">
                Live Monitoring &amp; Actuation
              </p>
            </div>
            {/* Live Interactive Switch demo */}
            <div className="rounded-md border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-2 font-mono text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-[var(--cs-color-text-secondary)]">Room AC Relay:</span>
                <button
                  type="button"
                  onClick={() => setIsRelayOn(!isRelayOn)}
                  className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase transition-colors ${
                    isRelayOn
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  {isRelayOn ? "ON (Kill)" : "OFF (Start)"}
                </button>
              </div>
              <div className="mt-1 text-[9px] text-[var(--cs-color-text-muted)]">
                Click button to test live kill-switch
              </div>
            </div>
          </div>
        </div>

        {/* Animated Directional Wave / Connector Indicator */}
        <div className="mt-6 flex flex-col gap-2 rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)]/50 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] font-semibold text-[var(--cs-color-text-primary)]">
              ACTIVE TELEMETRY STREAM &amp; BUS STATUS
            </span>
            <span className="font-mono text-[10px] text-[var(--cs-color-accent)]">
              {activeStep === 0 && "⚡ Grid AC &rarr; LVMDP DC Conversion in progress"}
              {activeStep === 1 && "📡 Gateway querying MAC Addresses & registering submeters"}
              {activeStep === 2 && "🔄 Parent Smart kWh indexing Child meters across rooms"}
              {activeStep === 3 && "📊 Child Smart kWh measuring real-time appliance loads"}
              {activeStep === 4 && "💻 EMS Cloud receiving telemetry & ready for two-way control"}
            </span>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--cs-color-border)]">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-amber-500 via-cyan-500 to-[var(--cs-color-accent)]"
              animate={{
                width: `${((activeStep + 1) / FLOW_STEPS.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Step Explanation Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.number}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5 sm:p-6"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="rounded bg-[var(--cs-color-accent)] px-2 py-0.5 font-mono text-xs font-bold text-white">
                TAHAP {current.number}
              </span>
              <h4 className="font-[var(--cs-font-sans)] text-base font-bold text-[var(--cs-color-text-primary)]">
                {current.title}
              </h4>
            </div>
            <span className="font-mono text-xs font-medium text-[var(--cs-color-text-muted)]">
              [{current.badge}]
            </span>
          </div>

          <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-sm">
            {current.description}
          </p>

          <div className="rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-3.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
              Rincian Spesifikasi &amp; Arsitektur:
            </span>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 text-xs text-[var(--cs-color-text-secondary)] sm:grid-cols-3">
              {current.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[var(--cs-color-accent)] font-bold">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
