"use client";

import { motion, AnimatePresence } from "motion/react";

export interface TechnicalTerm {
  id: string;
  term: string;
  badge: string;
  icon: string;
  plainDefinition: string;
  analogy: string;
  emsContext: string;
}

export const TECHNICAL_TERMS: Record<string, TechnicalTerm> = {
  lvmdp: {
    id: "lvmdp",
    term: "LVMDP (Low Voltage Main Distribution Panel)",
    badge: "Power Distribution",
    icon: "⚡",
    plainDefinition:
      "The master electrical switchboard of the entire facility. It accepts high-voltage electricity from the utility grid (PLN) and diesel backup generators, stabilizes it, and safely splits it into smaller branch lines across the campus.",
    analogy:
      "Like the 'Main Highway Tollgate' or the 'Heart of the Building'. Just as the heart receives high-pressure blood and pumps it safely into smaller arteries throughout the body, the LVMDP receives massive grid power and divides it safely so local room circuits don't blow up.",
    emsContext:
      "In this EMS project, the LVMDP is the primary physical entry point where all campus electrical power originates before entering the metering array.",
  },
  ct: {
    id: "ct",
    term: "Current Transformer (CT)",
    badge: "Sensors & Measurement",
    icon: "🧲",
    plainDefinition:
      "An induction sensor ring clamped around a heavy power conductor to measure massive electrical current safely from the outside without touching live copper busbars.",
    analogy:
      "Like 'Earmuffs for Deafening Sound' or a 'Telescope'. If you stood directly next to a roaring jet engine without earmuffs, it would deafen you; similarly, running 400 Amps directly into a small electronic meter would instantly melt it. The CT safely scales 400 Amps down to a tiny 5 Amp measurement signal.",
    emsContext:
      "Three CT induction coils step down the primary copper busbar amperage so the 3-Phase master meter can sample campus load without instrument damage.",
  },
  parentKwh: {
    id: "parentKwh",
    term: "Smart kWh 3P (Parent Master Meter)",
    badge: "Master Digital Metering",
    icon: "📊",
    plainDefinition:
      "A high-precision 3-phase master digital energy meter at the main power intake that measures the entire campus's total electricity consumption, active power, and peak demand surges.",
    analogy:
      "Like the 'Chief Financial Officer (CFO) or Master Counter'. While each room has its own junior accountant tracking local expenses, the Parent meter verifies the total incoming utility bill for the entire organization and checks whether numbers add up.",
    emsContext:
      "Acts as the master anchor in our spatial tree, measuring total campus load and indexing all subordinate room submeters.",
  },
  childKwh: {
    id: "childKwh",
    term: "Smart kWh 1P (Child Submeter)",
    badge: "Room-Level Submetering",
    icon: "🏢",
    plainDefinition:
      "A single-phase smart submeter installed inside a specific room (such as the Server Room, Office, or Lab) to track that room's equipment and remotely cut power if needed.",
    analogy:
      "Like a 'Room Manager with an Emergency Brake'. It counts exactly how much electricity is consumed by the room's devices (PCs, AC, lights) and has an internal remote switch to cut power during an overload or emergency.",
    emsContext:
      "Allows facility managers to see granular energy breakdowns per room rather than guessing from one giant monthly utility bill.",
  },
  gateway: {
    id: "gateway",
    term: "IoT Gateway Concentrator",
    badge: "Industrial Edge Hub",
    icon: "📡",
    plainDefinition:
      "A rugged industrial computer with antennas that talks to all meters over wired cables, packages their readings into internet web format, and sends them to the cloud EMS dashboard.",
    analogy:
      "Like an 'Interpreter and Postal Dispatcher'. The physical meters speak an industrial dialect called Modbus; the Gateway translates those raw electrical pulses into modern web data (MQTT/JSON) and broadcasts them over 4G cellular to the engineer's web browser.",
    emsContext:
      "Bridges the physical electrical substation with the cloud software dashboard, enabling real-time telemetry and remote control.",
  },
  modbus: {
    id: "modbus",
    term: "RS485 Modbus RTU",
    badge: "Industrial Communication",
    icon: "🔌",
    plainDefinition:
      "A battle-tested industrial 2-wire serial communication standard used in factories to daisy-chain dozens of meters together reliably over long distances.",
    analogy:
      "Like an 'Industrial Noise-Cancelling Walkie-Talkie'. Standard office Wi-Fi drops out inside concrete electrical rooms with heavy magnetic noise; RS485 wires can run hundreds of meters past humming generators without losing a single bit of data.",
    emsContext:
      "Connects the Parent meter, Child meters, and IoT Gateway into a shared, robust local serial loop.",
  },
  macAddress: {
    id: "macAddress",
    term: "MAC Address (Hardware Identifier)",
    badge: "Device Identity",
    icon: "🆔",
    plainDefinition:
      "A globally unique hardware serial number permanently etched into each smart meter by the manufacturer.",
    analogy:
      "Like a 'Digital Fingerprint or Citizen ID Number'. Even if you install 50 identical smart meters that look exactly the same, the Gateway will never confuse the Server Room meter with the Office meter because their hardware IDs are unique worldwide.",
    emsContext:
      "Used by the IoT Gateway during commissioning to automatically map which physical meter belongs to which building room.",
  },
  telemetry: {
    id: "telemetry",
    term: "Electrical Telemetry",
    badge: "Data Stream",
    icon: "📈",
    plainDefinition:
      "Automated, continuous streaming of live measurements (volts, amps, kilowatt-hours, power factor) from physical devices to the computer screen.",
    analogy:
      "Like an 'ICU Heart Rate Monitor'. Instead of waiting for a monthly paper utility bill after the money has already been spent, telemetry shows live second-by-second electrical vital signs so anomalies can be caught immediately.",
    emsContext:
      "Powers the live dashboard charts, peak demand alarms, and phase-balance visualizations in the EMS web app.",
  },
  relay: {
    id: "relay",
    term: "Latching Relay (Remote Control Switch)",
    badge: "Actuation & Safety",
    icon: "🔘",
    plainDefinition:
      "An internal electromagnetic switch inside the meter that physically connects or disconnects power when commanded by the EMS software.",
    analogy:
      "Like a 'Remote-Controlled Light Switch'. Instead of an electrician putting on rubber boots and walking into a dangerous high-voltage switchgear room to pull a physical lever, an operator can safely click a button on the dashboard to trip or restore power.",
    emsContext:
      "Enables automated off-hours load shedding and instant emergency power cut-off directly from the web interface.",
  },
  loadGroup: {
    id: "loadGroup",
    term: "Load Groups (Power Consumers)",
    badge: "Electrical Loads",
    icon: "🖥️",
    plainDefinition:
      "The actual appliances, computing workstations, air conditioners, and lighting clusters that consume electrical energy at the end of the line.",
    analogy:
      "Like 'The Thirsty Consumers at the End of the Pipeline'. All the panels, transformers, and meters exist to safely feed and monitor these end devices doing real work in the facility.",
    emsContext:
      "Divided into Server Rack PDUs & Precision AC (Load 1), Office Workstations (Load 2), and Lab Equipment & LED Lighting (Load 3).",
  },
};

interface EmsTermModalProps {
  termId: string | null;
  onClose: () => void;
}

export default function EmsTermModal({ termId, onClose }: EmsTermModalProps) {
  if (!termId) return null;
  const term = TECHNICAL_TERMS[termId];
  if (!term) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Accessible Backdrop */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog backdrop"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ems-term-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-lg rounded-2xl border border-stone-700 bg-stone-900 p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-stone-800 pb-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400">
                {term.badge}
              </span>
              <h3 id="ems-term-title" className="font-serif text-lg font-bold text-white">
                {term.term}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-stone-700 bg-stone-800 p-1.5 text-stone-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="mt-4 flex flex-col gap-4">
            {/* Plain English Definition */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-400">
                What it means in plain English:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs sm:text-sm leading-relaxed text-stone-200">
                {term.plainDefinition}
              </p>
            </div>

            {/* Everyday Analogy */}
            <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5 sm:p-4">
              <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                <span>💡 Real-World Analogy:</span>
              </div>
              <p className="font-[var(--cs-font-sans)] text-xs sm:text-sm leading-relaxed text-amber-100">
                {term.analogy}
              </p>
            </div>

            {/* Role in this EMS Project */}
            <div className="flex flex-col gap-1 rounded-lg border border-stone-800 bg-black/40 p-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Role in this IoT Energy System:
              </span>
              <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-300">
                {term.emsContext}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-[var(--cs-color-accent)] px-4 py-1.5 font-mono text-xs font-bold text-white hover:opacity-90 transition-opacity"
            >
              Got it, close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
