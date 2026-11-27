"use client";

import { motion } from "motion/react";
import Image from "next/image";
import AnimatedEmsArchitecture from "./AnimatedEmsArchitecture";

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="py-[var(--cs-section-padding)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        {/* Section divider & label */}
        <div className="mb-12 flex flex-col items-start gap-2 border-b border-[var(--cs-color-border)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              03
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Architecture &amp; Mechanism
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Structuring the invisible: From raw electrical registers to intuitive spatial control.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7] text-[var(--cs-color-text-secondary)]">
            Every electrical asset is organized into a clear parent-child hierarchy. High-voltage electricity from the grid (PLN) and backup generators passes through the main distribution panel (LVMDP) into a master Smart kWh meter. From there, power branches out to child Smart kWh meters in each room, where they continuously track individual devices—such as workstations, AC units, fans, and lighting. An IoT Gateway automatically logs each meter&apos;s unique hardware address (MAC address) per room and securely relays real-time power consumption to the central EMS dashboard.
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
          <div className="relative w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-2 sm:p-4">
            <Image
              src="/images/ems/Rancangan skema EMS.webp"
              alt="Physical sensing ecosystem schematic showing rooms, meters, edge gateways, and cloud EMS"
              width={1280}
              height={654}
              sizes="(max-width: 768px) 100vw, 1280px"
              className="h-auto w-full object-contain"
            />
          </div>
          <figcaption className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-muted)]">
            Fig 03. — System Architecture Schematic: Mapping physical circuits and Modbus RS485 loops to Edge Concentrators and the Cloud EMS application layer.
          </figcaption>
        </motion.figure>

        {/* Animated Interactive Architecture Flow */}
        <AnimatedEmsArchitecture />
      </div>
    </section>
  );
}
