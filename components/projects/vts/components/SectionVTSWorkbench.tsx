"use client";

import { motion } from "motion/react";

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const PROJECT_ASSETS = [
  {
    name: "Aircraft_Hull_A.fbx",
    size: "12.4 MB",
  },
  {
    name: "Jet_Engine_Turbine.fbx",
    size: "42.1 MB",
  },
  {
    name: "Hydraulic_System.fbx",
    size: "8.3 MB",
  },
] as const;

const INTERACTION_PATTERNS = [
  {
    name: "ROTATE",
    description: "Rotates individual parts around pivot bounds.",
  },
  {
    name: "DRAG",
    description: "Translates components along a locked axis plane.",
  },
  {
    name: "LABEL",
    description: "Spawns billboard tracking anchor with part nomenclature.",
  },
  {
    name: "OUTLINE",
    description: "Triggers emission outline glow on spatial hover selection.",
  },
  {
    name: "SLICE",
    description: "Applies volumetric clip shader to inspect internal logic.",
  },
] as const;

const STATE_ROWS = [
  {
    label: "SAVE CYCLE",
    states: ["Unsaved", "Saving...", "Saved ✓"],
  },
  {
    label: "DEPLOY CYCLE",
    states: ["Not Synchronized", "Synchronizing...", "Synchronized ✓"],
  },
] as const;

const WORKBENCH_PLACEHOLDERS = [
  "/images/vts/Project hub - fbx management.webp",
  "/images/vts/Project hub - project management.webp",
] as const;

const CANVAS_PLACEHOLDER =
  "/images/vts/Simulation - fullscreen - outline & label state - outline & label active.webp" as const;

const CONFIGURATION_PLACEHOLDERS = [
  "/images/vts/Object properties - default.webp",
  "/images/vts/Object properties - ordinat applied.webp",
  "/images/vts/Object properties - script applied.webp",
] as const;

const STATUS_PLACEHOLDERS = [
  "/images/vts/State=Error, App=Maintenance.webp",
  "/images/vts/State=file saved, App=Workbench.webp",
  "/images/vts/State=file unsaved, App=Workbench.webp",
  "/images/vts/State=Select 0 object, App=Maintenance.webp",
  "/images/vts/State=Select 0 object, App=Workbench.webp",
  "/images/vts/State=Select 1 object, App=Maintenance.webp",
  "/images/vts/State=Select 1 object, App=Workbench.webp",
  "/images/vts/State=Select multiple object, App=Workbench.webp",
] as const;

function SectionHeader({
  number,
  title,
  meta,
}: {
  number: string;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-secondary)]">
          {number}
        </span>

        <span className="font-[var(--cs-font-sans)] text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
          {title}
        </span>
      </div>

      <span className="font-[var(--cs-font-mono)] text-xs font-normal text-[var(--cs-color-text-muted)]">
        {meta}
      </span>
    </div>
  );
}

function RequirementBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-fit rounded-sm border border-stone-600 bg-zinc-100 px-2 py-1 font-[var(--cs-font-mono)] text-[10px] font-semibold text-stone-600">
      {children}
    </span>
  );
}

function AssetList() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-sm border border-stone-300 bg-white p-5">
      <h3 className="font-[var(--cs-font-mono)] text-xs font-bold text-[var(--cs-color-text-muted)]">
        RAW FBX GEOMETRIES (READ-ONLY)
      </h3>

      <div aria-hidden="true" className="h-px w-full bg-stone-300" />

      <ul className="flex flex-col">
        {PROJECT_ASSETS.map((asset) => (
          <li
            key={asset.name}
            className="flex items-center justify-between gap-4 py-2"
          >
            <span className="font-[var(--cs-font-sans)] text-sm text-[var(--cs-color-text-primary)]">
              {asset.name}
            </span>

            <span className="shrink-0 font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
              {asset.size}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkflowImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[1216/811] w-full overflow-hidden rounded-sm border border-stone-300 bg-white">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function InteractionCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <article className="flex flex-col gap-4 border border-stone-300 bg-stone-50 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-[var(--cs-font-mono)] text-sm font-bold text-stone-600">
          {name}
        </h3>

        <span aria-hidden="true" className="relative size-5 shrink-0">
          <span className="absolute inset-[2.5px] rounded-full border-2 border-neutral-500" />
        </span>
      </div>

      <p className="font-[var(--cs-font-sans)] text-xs leading-5 text-[var(--cs-color-text-secondary)]">
        {description}
      </p>
    </article>
  );
}

function StatusArea() {
  return (
    <article className="flex w-full flex-col gap-6 rounded-md border border-stone-300 bg-stone-50 p-6 sm:p-8 lg:max-w-[384px]">
      <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-[var(--cs-color-text-muted)]">
        LIVE STATUS AREA
      </h3>

      <div aria-hidden="true" className="h-px w-full bg-stone-300" />

      <dl className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <dt className="font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
            Selection
          </dt>

          <dd className="font-[var(--cs-font-mono)] text-xs text-blue-600">
            3 Objects Selected
          </dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
            State
          </dt>

          <dd className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-primary)]">
            Saved ✓
          </dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="font-[var(--cs-font-sans)] text-xs font-semibold text-[var(--cs-color-text-primary)]">
            Deployment
          </dt>

          <dd className="font-[var(--cs-font-mono)] text-xs text-stone-600">
            Synchronized ✓
          </dd>
        </div>
      </dl>
    </article>
  );
}

function StateProgressionMatrix() {
  return (
    <article className="flex min-w-0 flex-1 flex-col gap-5 rounded-md border border-stone-300 bg-stone-50 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-[var(--cs-font-mono)] text-xs font-bold text-stone-600">
          STATE PROGRESSION MATRIX
        </h3>

        <RequirementBadge>UX DECISION</RequirementBadge>
      </div>

      <div aria-hidden="true" className="h-px w-full bg-stone-300" />

      <div className="flex flex-col gap-4">
        {STATE_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-3 lg:grid lg:grid-cols-[112px_1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-4"
          >
            <span className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
              {row.label}
            </span>

            <StateBox>{row.states[0]}</StateBox>

            <StateArrow />

            <StateBox active>{row.states[1]}</StateBox>

            <StateArrow />

            <StateBox success={row.label === "DEPLOY CYCLE"}>
              {row.states[2]}
            </StateBox>
          </div>
        ))}

        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[112px_1fr] lg:items-center lg:gap-4">
          <span className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
            EXCEPTION STATE
          </span>

          <div className="rounded-sm border border-red-500 bg-red-100 p-2.5">
            <span className="font-[var(--cs-font-mono)] text-xs text-red-700">
              Error 409: Synchronization failed. Check local target network peer
              logs.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function StateBox({
  children,
  active = false,
  success = false,
}: {
  children: React.ReactNode;
  active?: boolean;
  success?: boolean;
}) {
  return (
    <div
      className={[
        "flex min-h-10 items-center justify-center rounded-sm border px-2.5 py-2 text-center",
        active ? "border-stone-600 bg-zinc-100" : "border-stone-300 bg-white",
      ].join(" ")}
    >
      <span
        className={[
          "font-[var(--cs-font-mono)] text-xs",
          success ? "text-emerald-500" : "text-neutral-600",
          active && "text-stone-600",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>
    </div>
  );
}

function StateArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden size-4 items-center justify-center lg:flex"
    >
      <span className="size-2 rotate-45 border-r-2 border-t-2 border-neutral-500" />
    </span>
  );
}

export default function SectionVTSWorkbench() {
  return (
    <section
      id="vts workbench"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-16">
        {/* =========================================================
            07 — PROJECT HUB
        ========================================================= */}

        <SectionHeader
          number="07"
          title="VTS Workbench - Project Hub"
          meta="INTERACTIVE FLOW ARTIFACT"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            Users needed a clear distinction between source assets and
            configured projects.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base leading-6 text-[var(--cs-color-text-secondary)]">
            To prevent irreversible alteration of raw 3D engineering geometries,
            we built a sandboxed environment where imported FBX assets remain
            immutable, while configuration state lives in projects.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="flex flex-col gap-8 rounded-lg border border-stone-300 bg-stone-50 p-5 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
              VTS PROJECT INGESTION HUB
            </h3>

            <RequirementBadge>UX DECISION</RequirementBadge>
          </div>

          {WORKBENCH_PLACEHOLDERS.map((src, index) => (
            <div key={`${src}-${index}`} className="flex flex-col gap-4">
              <AssetList />

              <WorkflowImage
                src={src}
                alt={`VTS Workbench project hub preview ${index + 1}`}
              />
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            07A — CANVAS
        ========================================================= */}

        <SectionHeader
          number="07A"
          title="VTS Workbench - Canvas"
          meta="HIGH FIDELITY PROTO WORKSPACE"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            The Workbench was structured around a familiar 3D authoring
            workflow.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base leading-6 text-[var(--cs-color-text-secondary)]">
            The primary authoring tool maps spatial structure left, coordinates
            properties right, and places 3D geometric execution in the center.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL_VARIANTS}
          transition={REVEAL_TRANSITION}
          className="relative aspect-[1280/845] w-full overflow-hidden border border-stone-300 bg-stone-50"
        >
          <img
            src={CANVAS_PLACEHOLDER}
            alt="VTS Workbench 3D authoring canvas preview"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <span className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
            WHAT EXISTS? → Hierarchy/Assets
          </span>

          <span aria-hidden="true" className="hidden text-stone-600 sm:inline">
            |
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
            WHAT AM I EDITING? → 3D Canvas
          </span>

          <span aria-hidden="true" className="hidden text-stone-600 sm:inline">
            |
          </span>

          <span className="font-[var(--cs-font-mono)] text-xs text-[var(--cs-color-text-muted)]">
            HOW DOES IT BEHAVE? → Object Inspector
          </span>
        </motion.div>

        {/* =========================================================
            07B — OBJECT CONFIGURATION
        ========================================================= */}

        <SectionHeader
          number="07B"
          title="VTS Workbench - Object Configuration"
          meta="LOGICAL BOUNDARY PROTOCOLS"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            Object behavior became configuration instead of scripting.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base leading-6 text-[var(--cs-color-text-secondary)]">
            Rather than forcing designers to declare C# event listeners, we
            packaged interaction patterns directly into serialized runtime
            attributes that compile inside VTS.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={REVEAL_TRANSITION}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {CONFIGURATION_PLACEHOLDERS.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[400/907] overflow-hidden border border-stone-300 bg-stone-50"
              >
                <img
                  src={src}
                  alt={`VTS object configuration preview ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.1,
            }}
            className="flex flex-col gap-6 rounded-lg border border-stone-300 bg-stone-50 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-[var(--cs-font-mono)] text-xs font-semibold text-stone-600">
                ATTRIBUTES TRANSFORMATION ANALYSIS
              </h3>

              <RequirementBadge>PRD + UX SPEC</RequirementBadge>
            </div>

            <blockquote className="font-[var(--cs-font-serif)] text-2xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-3xl sm:leading-9">
              &quot;Instead of defining behavior through code, the interface
              exposes predefined functions as configurable options.&quot;
            </blockquote>

            <p className="font-[var(--cs-font-sans)] text-sm leading-6 text-[var(--cs-color-text-secondary)]">
              We consolidated hundreds of scattered script coordinates into a
              structured JSON configuration layout. The training runtime maps
              spatial models dynamically against these key/value pairs to
              validate trainee operations.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            07C — SCRIPT IMPLEMENTATION
        ========================================================= */}

        <SectionHeader
          number="07C"
          title="VTS Workbench - Script Implementation"
          meta="LOGICAL BOUNDARY PROTOCOLS"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            The interaction model was intentionally constrained to predefined
            functions.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base leading-6 text-[var(--cs-color-text-secondary)]">
            The system exposes the interaction patterns required by the training
            workflow rather than arbitrary scripting capabilities. By locking
            interactions to standardized mechanical behaviors, we ensure
            reliable, crash-free execution at runtime.
          </p>
        </div>

        <div className="flex flex-col">
          {INTERACTION_PATTERNS.map((interaction) => (
            <InteractionCard
              key={interaction.name}
              name={interaction.name}
              description={interaction.description}
            />
          ))}
        </div>

        {/* =========================================================
            07D — STATUS FEEDBACK
        ========================================================= */}

        <SectionHeader
          number="07D"
          title="VTS Workbench - Status Feedback"
          meta="LOGICAL BOUNDARY PROTOCOLS"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-20">
          <h2 className="font-[var(--cs-font-serif)] text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-5xl sm:leading-[1.1]">
            Editing 3D content also introduced a state-management problem.
          </h2>

          <p className="font-[var(--cs-font-sans)] text-base leading-6 text-[var(--cs-color-text-secondary)]">
            Users need to know whether their current configuration is saved and
            whether the runtime application reflects the latest configuration.
            VTS surfaces synchronization states with zero ambient ambiguity.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="flex flex-col gap-6 lg:flex-row"
        >
          <StatusArea />

          <StateProgressionMatrix />
        </motion.div>

        {/* Status visualization placeholders */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.1,
          }}
          className="flex flex-col gap-2"
        >
          {STATUS_PLACEHOLDERS.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-6 w-full overflow-hidden"
            >
              <img
                src={src}
                alt={`VTS status feedback visualization ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
