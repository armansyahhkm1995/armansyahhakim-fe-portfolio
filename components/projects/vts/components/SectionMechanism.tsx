"use client";

import { motion } from "motion/react";

interface InteractionPrimitive {
  name: string;
  video: string;
  mechanicalPurpose: string;
  parameters: string;
  exampleUse: string;
}

const INTERACTION_PRIMITIVES: InteractionPrimitive[] = [
  {
    name: "ROTATE",
    video: "/videos/vts/vts_script_rotate.mp4",
    mechanicalPurpose: "Radial displacement around local pivot bounds.",
    parameters: "Axis (X/Y/Z), Min/Max Angles (e.g. 0°–360°), Detent Snap Steps.",
    exampleUse: "Unscrewing bolts, opening valves, turning spatial control dials.",
  },
  {
    name: "DRAG / TRANSLATE",
    video: "/videos/vts/vts_script_drag.mp4",
    mechanicalPurpose: "Linear displacement along locked Cartesian plane axes.",
    parameters: "Travel Distance (mm), Axis Constraint, Return-on-Release boolean.",
    exampleUse: "Pulling release pins, extracting modular components, sliding equipment trays.",
  },
  {
    name: "OUTLINE & FOCUS",
    video: "/videos/vts/vts_script_outline.mp4",
    mechanicalPurpose: "Emission shader glow triggered on hover or step guidance.",
    parameters: "Color Accent, Glow Thickness (px), Pulsing Frequency.",
    exampleUse: "Guiding user focus toward the exact target part requiring inspection.",
  },
  {
    name: "BILLBOARD LABEL",
    video: "/videos/vts/vts_script_label.mp4",
    mechanicalPurpose: "3D camera-facing spatial metadata anchor.",
    parameters: "Anchor Offset, Part Nomenclature, Technical Specs, Safety Cautions.",
    exampleUse: "Displaying 'Hydraulic Return Fitting — Max Torque 45 Nm' hovering over assembly.",
  },
  {
    name: "VOLUMETRIC SLICE",
    video: "/videos/vts/vts_script_slice.mp4",
    mechanicalPurpose: "Dynamic shader clip-plane revealing internal mechanisms.",
    parameters: "Slice Normal Vector, Invert Cut boolean, Depth Offset.",
    exampleUse: "Exposing internal motor components and structural rings without destroying source 3D geometry.",
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
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Simplification over emulation: Five script templates that drive 80% of 3D model interactions.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Rather than forcing users to master complex game engines, VTS isolated the exact mathematical behaviors needed for everyday 3D object interaction and procedural inspection.
          </p>
        </div>

        {/* 5 Standardized Primitives Grid */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              The 5 Declarative Script Templates
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
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
                className="flex flex-col justify-between gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
                      TEMPLATE
                    </span>
                    <span className="font-mono text-[10px] text-[var(--cs-color-text-muted)]">
                      Standard Spec
                    </span>
                  </div>
                  <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-[var(--cs-color-text-primary)]">
                    {primitive.name}
                  </h3>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {primitive.mechanicalPurpose}
                  </p>
                </div>

                {/* Micro-interaction Video Clip */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[var(--cs-color-bg-secondary)] border border-[var(--cs-color-border)] my-1">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={primitive.video} type="video/mp4" />
                  </video>
                </div>

                <div className="border-t border-[var(--cs-color-border)] pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-[var(--cs-color-text-muted)]">
                    Example 3D Interaction:
                  </span>
                  <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-primary)]">
                    {primitive.exampleUse}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
