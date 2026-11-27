"use client";

import { useState } from "react";
import AnimatedEmsArchitecture from "./AnimatedEmsArchitecture";
import EmsTermModal from "./EmsTermModal";

export default function SectionMechanism() {
  const [activeTermId, setActiveTermId] = useState<string | null>(null);

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

        {/* Section Headline & Description */}
        <div className="mb-10 flex flex-col gap-4">
          <h2 className="max-w-[680px] font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--cs-color-text-primary)]">
            Structuring the invisible: From raw electrical registers to intuitive spatial control.
          </h2>
          <p className="max-w-[860px] font-[var(--cs-font-sans)] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.8] text-[var(--cs-color-text-secondary)]">
            Every electrical asset is organized into a clear parent-child hierarchy. High-voltage electricity from the grid (PLN) and backup generators enters through the main distribution panel (
            <button
              type="button"
              onClick={() => setActiveTermId("lvmdp")}
              className="inline-flex items-center font-semibold text-[var(--cs-color-text-primary)] underline decoration-amber-500/70 decoration-dashed underline-offset-4 transition-colors hover:text-amber-400 cursor-pointer"
            >
              LVMDP
            </button>
            ) into a master{" "}
            <button
              type="button"
              onClick={() => setActiveTermId("parentKwh")}
              className="inline-flex items-center font-semibold text-[var(--cs-color-text-primary)] underline decoration-amber-500/70 decoration-dashed underline-offset-4 transition-colors hover:text-amber-400 cursor-pointer"
            >
              Smart kWh meter
            </button>
            . From there, power branches out to subordinate{" "}
            <button
              type="button"
              onClick={() => setActiveTermId("childKwh")}
              className="inline-flex items-center font-semibold text-[var(--cs-color-text-primary)] underline decoration-amber-500/70 decoration-dashed underline-offset-4 transition-colors hover:text-amber-400 cursor-pointer"
            >
              child Smart kWh submeters
            </button>{" "}
            in each room, continuously tracking individual equipment—such as server racks, workstation clusters, and lighting loops. An{" "}
            <button
              type="button"
              onClick={() => setActiveTermId("gateway")}
              className="inline-flex items-center font-semibold text-[var(--cs-color-text-primary)] underline decoration-amber-500/70 decoration-dashed underline-offset-4 transition-colors hover:text-amber-400 cursor-pointer"
            >
              IoT Gateway
            </button>{" "}
            automatically indexes each meter&apos;s unique hardware identifier (
            <button
              type="button"
              onClick={() => setActiveTermId("macAddress")}
              className="inline-flex items-center font-semibold text-[var(--cs-color-text-primary)] underline decoration-amber-500/70 decoration-dashed underline-offset-4 transition-colors hover:text-amber-400 cursor-pointer"
            >
              MAC address
            </button>
            ) per room and securely relays live telemetry to the central EMS dashboard.
          </p>
        </div>

        {/* Animated Interactive Architecture Flow */}
        <AnimatedEmsArchitecture onOpenTerm={(termId) => setActiveTermId(termId)} />

        {/* Global Term Popover Modal */}
        <EmsTermModal termId={activeTermId} onClose={() => setActiveTermId(null)} />
      </div>
    </section>
  );
}
