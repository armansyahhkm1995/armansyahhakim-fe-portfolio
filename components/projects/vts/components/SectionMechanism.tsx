"use client";

import { motion } from "motion/react";

interface InteractionPrimitive {
  name: string;
  mechanicalPurpose: string;
  parameters: string;
  exampleUse: string;
}

interface SyncStatePhase {
  phase: string;
  title: string;
  actor: string;
  mechanism: string;
}

const INTERACTION_PRIMITIVES: InteractionPrimitive[] = [
  {
    name: "ROTATE",
    mechanicalPurpose: "Radial displacement around local pivot bounds.",
    parameters: "Axis (X/Y/Z), Min/Max Angles (e.g. 0°–360°), Detent Snap Steps.",
    exampleUse: "Unscrewing hex bolts, opening ball valves, rotating cockpit flight control dials.",
  },
  {
    name: "DRAG / TRANSLATE",
    mechanicalPurpose: "Linear displacement along locked Cartesian plane axes.",
    parameters: "Travel Distance (mm), Axis Constraint, Return-on-Release boolean.",
    exampleUse: "Pulling quick-release pins, extracting oil filter cartridges, sliding avionics trays.",
  },
  {
    name: "OUTLINE & FOCUS",
    mechanicalPurpose: "Emission shader glow triggered on hover or step guidance.",
    parameters: "Color Accent, Glow Thickness (px), Pulsing Frequency.",
    exampleUse: "Guiding trainee focus toward the exact safety wire requiring snips in Step 3.",
  },
  {
    name: "BILLBOARD LABEL",
    mechanicalPurpose: "3D camera-facing spatial metadata anchor.",
    parameters: "Anchor Offset, Part Nomenclature, Torque Specs (Nm), Safety Cautions.",
    exampleUse: "Displaying 'Hydraulic Return Fitting — Max Torque 45 Nm' hovering over assembly.",
  },
  {
    name: "VOLUMETRIC SLICE",
    mechanicalPurpose: "Dynamic shader clip-plane revealing internal mechanisms.",
    parameters: "Slice Normal Vector, Invert Cut boolean, Depth Offset.",
    exampleUse: "Exposing internal turbine blades and oil rings without destroying source CAD.",
  },
];

const SYNC_PHASES: SyncStatePhase[] = [
  {
    phase: "01",
    title: "Visual Configuration in Workbench",
    actor: "Maintenance Instructor",
    mechanism: "Instructor drags 3D models into outliner and toggles checkbox interaction rules in property panel.",
  },
  {
    phase: "02",
    title: "Dirty-State Memory Cache",
    actor: "Workbench State Machine",
    mechanism: "Tracks uncommitted changes locally, enabling instant undo/redo without disk I/O churn.",
  },
  {
    phase: "03",
    title: "Automated Dependency Validation",
    actor: "Validation Engine",
    mechanism: "Verifies procedure sanity: confirms all step targets exist, pivot limits are set, and no orphan dependencies exist.",
  },
  {
    phase: "04",
    title: "Atomic Scenario Sync to Player",
    actor: "Local IPC / File Bridge",
    mechanism: "Packages visual logic into a lean JSON manifest. Maintenance Player reloads simulation instantly with zero compilation.",
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
              Interaction Engine &amp; Synchronization
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Standardized Primitives &amp; Data Pipeline
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Simplification over emulation: Five interaction primitives that drive 80% of procedural training.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Rather than building a full-blown game engine or CAD editor, VTS isolated the exact mathematical behaviors needed for military maintenance and procedural mechanics.
          </p>
        </div>

        {/* 5 Standardized Primitives Grid */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              The 5 Declarative Interaction Primitives
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Assigned via simple UI toggles in Workbench without writing a single line of script.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INTERACTION_PRIMITIVES.map((primitive) => (
              <motion.div
                key={primitive.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={REVEAL_VARIANTS}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
                      PRIMITIVE
                    </span>
                    <span className="font-mono text-[10px] text-stone-400">
                      Standard Spec
                    </span>
                  </div>
                  <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-stone-900">
                    {primitive.name}
                  </h3>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {primitive.mechanicalPurpose}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-stone-500">
                    Example Mechanical Action:
                  </span>
                  <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-stone-800">
                    {primitive.exampleUse}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Synchronization Pipeline */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              The Atomic Synchronization Pipeline
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              How the twin systems synchronize authored scenario data with the runtime simulation engine in under 2 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SYNC_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-stone-50 p-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    PHASE {phase.phase}
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {phase.title}
                  </h4>
                  <p className="font-mono text-[10px] text-[var(--cs-color-accent)]">
                    Actor: {phase.actor}
                  </p>
                  <p className="mt-2 font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {phase.mechanism}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
