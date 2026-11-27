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
      "Menerima pasokan daya utama dari jaringan tegangan menengah PLN dan generator cadangan. Berfungsi sebagai gardu induk distribusi tegangan rendah (380V/220V) yang membagi jalur tenaga, menstabilkan arus listrik, serta menyediakan proteksi pemutus beban utama (MCCB).",
    electricalRole:
      "Arus AC 3-fase dari PLN/Genset masuk ke LVMDP, disalurkan ke busbar tembaga utama, dan dikondisikan agar aman masuk ke rangkaian pengukuran Parent Smart kWh dan Child Smart kWh.",
    specifications: [
      "Kapasitas: 400 kW / 500 kVA",
      "Tegangan Operasional: 380V AC 3-Phase / 220V 1-Phase 50Hz",
      "Proteksi: Air Circuit Breaker (ACB) & Molded Case Circuit Breaker (MCCB)",
    ],
  },
  ct: {
    id: "ct",
    name: "Current Transformer (CT)",
    codeName: "3x CT Toroidal Coils",
    category: "power",
    functionSummary:
      "Sensor transformator arus yang dipasang pada tiap fasa kabel daya (R, S, T). Berfungsi menurunkan arus listrik tinggi dari busbar ke rasio aman (misal 400A:5A) sehingga dapat diukur secara presisi oleh Smart KWH 3-Phase tanpa merusak instrumen.",
    electricalRole:
      "Mendeteksi medan magnet induksi arus bolak-balik yang melintas dari LVMDP dan mengirimkan sinyal arus pengukuran sekunder ke Smart KWH 3P.",
    specifications: [
      "Konfigurasi: 3 Unit (Fasa R, S, T)",
      "Rasio Induksi: 400A / 5A Precision Class 0.5S",
      "Tipe Isolasi: Cast Resin 600V Dry-Type",
    ],
  },
  parentKwh: {
    id: "parentKwh",
    name: "Smart KWH 3P (Parent / Master Meter)",
    codeName: "CLOU CL730D22H (3P 400 A)",
    category: "master",
    functionSummary:
      "KWH meter cerdas 3-fase induk yang bertindak sebagai master pengukur seluruh konsumsi energi kampus. Mengagregasi data dari CT, mengukur voltase, arus, faktor daya, serta mendata seluruh Smart KWH Child di tiap ruangan.",
    electricalRole:
      "Menghitung total energi masuk (kWh), lonjakan daya puncak (kW), dan keseimbangan fasa. Terhubung melalui jalur komunikasi serial RS485 Modbus ke Gateway dan software EMS pusat.",
    specifications: [
      "Rating: 3-Phase 4-Wire, 400 A",
      "Akurasi: Active Energy Class 0.5S / Reactive Class 2.0",
      "Komunikasi: RS485 Modbus RTU / DLMS-COSEM Protocol",
    ],
  },
  gateway: {
    id: "gateway",
    name: "IoT Gateway Concentrator",
    codeName: "Kerlink Industrial Gateway",
    category: "gateway",
    functionSummary:
      "Otak telekomunikasi sistem IoT di gardu. Mendata identitas unik hardware (MAC Address) semua Smart KWH meter di jaringan kabel maupun nirkabel, memetakan mana yang berperan sebagai Parent dan mana Child, serta menjadi jembatan dua arah ke Software EMS.",
    electricalRole:
      "Melakukan polling data register Modbus dari Smart KWH, membungkusnya menjadi paket data terenkripsi (MQTT/HTTPS), dan menerima sinyal kontrol relai (Control Line) dari software EMS untuk mematikan/menyalakan sirkuit.",
    specifications: [
      "Antarmuka: RS485 Bus + Dual External 4G/LTE Antennas",
      "Protokol: Modbus-to-MQTT Telemetry Bridge",
      "Fitur: Auto MAC Address Discovery, On-Board Buffer Flash Storage",
    ],
  },
  childKwh1: {
    id: "childKwh1",
    name: "Smart KWH 1P (Child 1 - Ruang Server & AC)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "KWH meter cerdas 1-fase anak yang mengawasi konsumsi listrik di Ruang Server. Dilengkapi relai mekanikal internal berkapasitas tinggi untuk proteksi overload dan kendali jarak jauh.",
    electricalRole:
      "Mencatat pemakaian beban server rack dan sistem pendingin presisi. Meneruskan data telemetri ke Parent Smart kWh dan Gateway, serta dapat diputus langsung melalui perintah software EMS.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Relai Internal: 100A Latching Remote Cut-Off Relay",
      "Beban Terpasang: Inverter Precision AC (1,850 W) & Rack PDU",
    ],
  },
  childKwh2: {
    id: "childKwh2",
    name: "Smart KWH 1P (Child 2 - Ruang Kantor & Workstation)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "KWH meter cerdas 1-fase anak yang mengawasi beban sirkuit stopkontak dan komputer staf kerja. Mencegah pemborosan listrik di luar jam kantor via jadwal otomatis.",
    electricalRole:
      "Mencatat tarikan daya komputer PC, monitor, dan printer. Mendeteksi arus bocor dan standby power saat ruangan kosong.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Beban Terpasang: 12x Workstation PC (Total 1,450 W)",
      "Fitur: Deteksi anomali konsumsi malam hari (Off-hours surge)",
    ],
  },
  childKwh3: {
    id: "childKwh3",
    name: "Smart KWH 1P (Child 3 - Ruang Lab & Workshop)",
    codeName: "CLOU CL710K24 (1P 100 A)",
    category: "child",
    functionSummary:
      "KWH meter cerdas 1-fase anak untuk sirkuit pencahayaan LED dan kipas ventilasi/exhaust gedung.",
    electricalRole:
      "Menghitung konsumsi energi penerangan zonasi. Terhubung ke sistem otomatisasi timer dan sensor manual.",
    specifications: [
      "Rating: 1-Phase 2-Wire, 100 A",
      "Beban Terpasang: Exhaust Blower & LED Bay Lighting (680 W)",
      "Fitur: Sinkronisasi waktu operasional gedung",
    ],
  },
  load1: {
    id: "load1",
    name: "Load Group 1 (Server Room Distribution)",
    codeName: "Modular Distribution Terminal Block 1",
    category: "load",
    functionSummary:
      "Blok terminal distribusi pemutus daya miniatur (MCB) yang membagi pasokan listrik langsung ke stopkontak server dan pendingin ruangan.",
    electricalRole:
      "Menerima listrik 100A yang telah diukur dan diproteksi oleh Child Meter 1, lalu menyalurkannya ke perangkat akhir.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 16A Server + 20A AC Inverter"],
  },
  load2: {
    id: "load2",
    name: "Load Group 2 (Office Workstation Distribution)",
    codeName: "Modular Distribution Terminal Block 2",
    category: "load",
    functionSummary:
      "Blok terminal distribusi pemutus daya untuk deretan meja kerja, stopkontak meja komputer, dan monitor staf.",
    electricalRole:
      "Menerima listrik dari Child Meter 2 untuk menyuplai peralatan komputer di lantai kantor.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 10A Per Desk Cluster"],
  },
  load3: {
    id: "load3",
    name: "Load Group 3 (Lab & Lighting Distribution)",
    codeName: "Modular Distribution Terminal Block 3",
    category: "load",
    functionSummary:
      "Blok terminal distribusi untuk kipas exhaust, penerangan umum, dan peralatan lab.",
    electricalRole:
      "Menerima listrik dari Child Meter 3 dan membaginya ke sirkuit lampu dan motor ventilasi.",
    specifications: ["Terminal: 8-Pole Screw Clamp Bus", "MCB Feed: 10A Lighting + 16A Motor Fans"],
  },
};

const STAGES = [
  {
    stage: 1,
    title: "1. Pasokan Listrik Utama: PLN / Genset ke LVMDP",
    focusDeviceId: "lvmdp",
    description:
      "Tegangan AC dari penyedia listrik PLN masuk ke panel induk LVMDP (Low Voltage Main Distribution Panel 400 kW / 500 kVA). Panel ini menstabilkan daya dan membagi bus listrik utama.",
  },
  {
    stage: 2,
    title: "2. Pengukuran Daya Induk: LVMDP ke CT & Parent Smart KWH 3P",
    focusDeviceId: "parentKwh",
    description:
      "Arus besar melewati Current Transformer (CT) yang menurunkan rasio arus ke level aman agar dapat dibaca oleh Smart KWH 3P CLOU CL730D22H (400A) sebagai meter induk kampus.",
  },
  {
    stage: 3,
    title: "3. Identifikasi Hardware: Gateway Mendata MAC Address",
    focusDeviceId: "gateway",
    description:
      "IoT Gateway (Kerlink) memindai seluruh meter di jaringan kabel RS485. Berdasarkan MAC Address, Gateway menetapkan identitas Parent Smart KWH dan seluruh Child Smart KWH.",
  },
  {
    stage: 4,
    title: "4. Distribusi Daya ke Ruangan: Parent KWH ke Child KWH 1P",
    focusDeviceId: "childKwh1",
    description:
      "Listrik didistribusikan dari bus utama ke 3 Smart KWH 1P (CLOU CL710K24 100A) di masing-masing ruangan. Parent Smart KWH mengindeks data child-child meter ini secara berkala.",
  },
  {
    stage: 5,
    title: "5. Submetering Beban Alat: Child KWH ke Load Group 1, 2, 3",
    focusDeviceId: "load1",
    description:
      "Masing-masing Child Smart KWH mendata pemakaian nyata alat-alat di tiap ruangan (AC, PC komputer, kipas, lampu) melalui Load Group 1, 2, dan 3.",
  },
  {
    stage: 6,
    title: "6. Telemetri Cloud & Kontrol Relay Dua Arah via Software EMS",
    focusDeviceId: "gateway",
    description:
      "Seluruh data telemetri mengalir balik melalui jalur komunikasi ke Gateway, lalu diteruskan ke Software EMS. Operator dapat memantau data secara live dan mematikan/menyalakan relay jarak jauh.",
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
              IF-Rancangan_Skema_EMS_VVT-FIT192-20230710 (1) · Animated Vector Flow
            </span>
          </div>
          <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
            Simulasi visual perjalanan listrik riil &amp; hierarki data perangkat: PLN &rarr; LVMDP &rarr; CT/Parent 3P &rarr; Gateway MAC &rarr; Child 1P &rarr; Load Groups &rarr; EMS Control
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
                  TAHAP 0{s.stage}
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
            <span className="hidden rounded bg-stone-900 px-2 py-0.5 font-mono text-[9px] text-stone-400 sm:inline">
              Vector Precision Layout
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
            </defs>

            {/* ---------------- WIRING & BUS LINES ---------------- */}
            {/* 1. PLN Input into LVMDP */}
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

            {/* 2. Red Solid Lines from LVMDP into CT & Smart KWH 3P */}
            <path d="M 170 335 L 360 335" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 170 345 L 380 345" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 170 355 L 400 355" stroke="#ef4444" strokeWidth="2.5" />

            {/* CT Vertical Feeds into Smart KWH 3P */}
            <path d="M 375 355 L 375 195" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 395 345 L 395 195" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 415 335 L 415 195" stroke="#ef4444" strokeWidth="2.5" />

            {/* 3. Horizontal Main Distribution Bus to the Right */}
            <path d="M 400 355 L 580 355" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 380 345 L 590 345" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M 360 335 L 600 335" stroke="#ef4444" strokeWidth="2.5" />

            {/* Bus feeds branching down to Child 1, Child 2, Child 3 */}
            {/* Feeder to Child 1 */}
            <path d="M 600 335 L 650 335 L 650 280 L 730 280" stroke="#ef4444" strokeWidth="2" />
            {/* Feeder to Child 2 */}
            <path d="M 590 345 L 635 345 L 635 415 L 730 415" stroke="#ef4444" strokeWidth="2" />
            {/* Feeder to Child 3 */}
            <path d="M 580 355 L 580 550 L 730 550" stroke="#ef4444" strokeWidth="2" />

            {/* Power out from Child Meters to Load Groups */}
            <path d="M 770 280 L 890 280" stroke="#ef4444" strokeWidth="2" />
            <path d="M 770 415 L 890 415" stroke="#ef4444" strokeWidth="2" />
            <path d="M 770 550 L 890 550" stroke="#ef4444" strokeWidth="2" />

            {/* 4. Dashed Sky-Blue CONTROL LINES from Gateway to Child Meters */}
            <path
              d="M 690 145 L 690 240 L 730 240"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 675 145 L 675 375 L 730 375"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 660 145 L 660 510 L 730 510"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <text x="680" y="180" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
              CONTROL LINE
            </text>

            {/* 5. Dashed Indigo Communication Lines between Smart KWH 3P and Gateway */}
            <path
              d="M 430 145 L 650 145"
              stroke="#818cf8"
              strokeWidth="1.8"
              strokeDasharray="5 3"
            />
            {/* Comm drops to child meters */}
            <path
              d="M 640 145 L 640 580 L 750 580"
              stroke="#818cf8"
              strokeWidth="1.8"
              strokeDasharray="5 3"
            />

            {/* ---------------- HARDWARE COMPONENTS ---------------- */}

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
                <span className="font-mono text-xs text-[var(--cs-color-text-secondary)]">Simulasi Relay AC:</span>
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
                Fungsi &amp; Kegunaan Perangkat:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {activeDevice.functionSummary}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Perjalanan Arus Listrik &amp; Telemetri:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                {activeDevice.electricalRole}
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="rounded-lg border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
              Spesifikasi Teknis pada Skema:
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
