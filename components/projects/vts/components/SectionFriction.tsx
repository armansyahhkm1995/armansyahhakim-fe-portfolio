"use client";

import { motion } from "motion/react";

interface WorkflowStage {
  step: string;
  action: string;
  detail: string;
}

interface ConstraintItem {
  index: string;
  title: string;
  challenge: string;
  architecturalSolution: string;
}

const LEGACY_WORKFLOW: WorkflowStage[] = [
  { step: "01", action: "Import FBX Mesh", detail: "CAD technician exports FBX asset from CATIA/SolidWorks into Unity project directory." },
  { step: "02", action: "Write Bespoke C#", detail: "Software engineer writes custom MonoBehaviour scripts to define part clicks and movement pivots." },
  { step: "03", action: "Collider & Physics Setup", detail: "Manually add MeshColliders, Rigidbody constraints, and layer collision matrices in Inspector." },
  { step: "04", action: "Re-bake & Compile Build", detail: "Full executable build compiled to test a single procedure step. Any revision takes days." },
];

const VTS_WORKFLOW: WorkflowStage[] = [
  { step: "01", action: "Direct FBX Ingestion", detail: "Drag FBX directly into VTS Project Hub. Hierarchy trees are extracted automatically." },
  { step: "02", action: "Select Part in Outliner", detail: "Click any component (e.g., 'Turbine_Lock_Pin_04') directly in the 3D viewport or tree outliner." },
  { step: "03", action: "Toggle Interaction Rules", detail: "Enable checkbox behaviors: ROTATE around pivot, DRAG on axis, or EMIT outline glow." },
  { step: "04", action: "1-Click Runtime Sync", detail: "Instant synchronization to Training Player. Instructors test procedures in real time." },
];

const CONSTRAINTS: ConstraintItem[] = [
  {
    index: "01",
    title: "High-Poly Defense CAD Ingestion",
    challenge: "Military aircraft models often exceed 150,000 polygons with hundreds of nested sub-assemblies, bogging down consumer GPUs.",
    architecturalSolution: "Built automated LOD generation and lazy-rendered outliner trees that keep the 3D viewport smooth at 60 FPS.",
  },
  {
    index: "02",
    title: "Zero-Code Mechanical Logic",
    challenge: "Maintenance procedures require specific physical behaviors: unscrewing bolts, flipping breaker switches, and extracting filters.",
    architecturalSolution: "Standardized 5 parametric interaction behaviors with configurable degree limits, axis locks, and torque tolerances.",
  },
  {
    index: "03",
    title: "Sequential Procedure Dependencies",
    challenge: "Trainees must follow strict aerospace protocols: 'Do not remove turbine shroud before safety grounding wire is severed'.",
    architecturalSolution: "Implemented a visual sequence prerequisite matrix in Workbench preventing out-of-order component manipulation.",
  },
  {
    index: "04",
    title: "Non-Destructive CAD Revisions",
    challenge: "When engineering teams release a revised 3D model, re-importing in traditional tools wiped out all previously attached scripts.",
    architecturalSolution: "Decoupled mesh geometry from interaction metadata using persistent part-naming GUID anchors.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionFriction() {
  return (
    <section id="friction" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              02
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Engineering Bottleneck
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Workflow Transformation & Technical Constraints
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            The bottleneck was never importing a 3D model. It was configuring what the model could do.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Traditional 3D authoring trapped domain instructors in an engineering dependency loop. To empower instructors to build interactive simulations themselves, we decoupled 3D geometry ingestion from runtime procedural logic.
          </p>
        </div>

        {/* Side-by-Side Workflow Evolution */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Legacy Workflow */}
          <div className="flex flex-col gap-4 rounded-sm border border-stone-300 bg-stone-100 p-6 opacity-75">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <span className="font-mono text-xs font-bold uppercase text-stone-500">
                Legacy Unity Pipeline (6+ Weeks)
              </span>
              <span className="font-mono text-[10px] text-red-600 uppercase font-semibold">
                High Engineering Cost
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {LEGACY_WORKFLOW.map((item) => (
                <div key={item.step} className="flex items-start gap-3 rounded-sm bg-white p-3 border border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-400">{item.step}</span>
                  <div>
                    <h4 className="font-[var(--cs-font-sans)] text-xs font-bold text-stone-800">{item.action}</h4>
                    <p className="font-[var(--cs-font-sans)] text-xs text-stone-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VTS Workflow */}
          <div className="flex flex-col gap-4 rounded-sm border-2 border-stone-800 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <span className="font-mono text-xs font-bold uppercase text-stone-900">
                VTS Authoring Pipeline (&lt; 4 Hours)
              </span>
              <span className="font-mono text-[10px] text-emerald-600 uppercase font-bold">
                Zero Code · 10x Velocity
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {VTS_WORKFLOW.map((item) => (
                <div key={item.step} className="flex items-start gap-3 rounded-sm bg-stone-50 p-3 border border-stone-200">
                  <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">{item.step}</span>
                  <div>
                    <h4 className="font-[var(--cs-font-sans)] text-xs font-bold text-stone-900">{item.action}</h4>
                    <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Architectural Constraints */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Four Core Architectural Challenges in Desktop 3D Authoring
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Designing desktop tools for high-precision military maintenance simulations required solving deep graphics and procedural constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {CONSTRAINTS.map((item) => (
              <motion.div
                key={item.index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={REVEAL_VARIANTS}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {item.index} / ARCHITECTURAL CONSTRAINT
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {item.title}
                  </h4>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {item.challenge}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                    VTS Solution:
                  </span>
                  <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-stone-800">
                    {item.architecturalSolution}
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
