"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface TwoColumnImage {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

interface ThreeColumnImage {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

interface OutputModule {
  number: string;
  system: string;
  title: string;
  description: string;
  uxFeatures: string[];
  primaryImage?: string;
  primaryAlt?: string;
  twoColumnImages?: TwoColumnImage[];
  secondaryImages?: { src: string; alt: string; caption: string }[];
  threeColumnImages?: ThreeColumnImage[];
}

const OUTPUT_MODULES: OutputModule[] = [
  {
    number: "01",
    system: "VTS WORKBENCH",
    title: "Project Hub & Multi-Asset FBX Management",
    description:
      "The front door of VTS. Enables instructors to organize complex training curriculum into discrete scenarios, upload military CAD assemblies, and manage revision versions without touching developer repositories.",
    uxFeatures: [
      "Drag-and-drop batch FBX ingestion with real-time poly-count and vertex health warnings.",
      "Scenario tagging by military qualification levels (e.g., Level 1 Pre-Flight, Level 3 Overhaul).",
      "Instant scenario clone and branch workflows to build alternative procedure branches.",
    ],
    twoColumnImages: [
      {
        src: "/images/vts/Project hub - project management.webp",
        alt: "VTS Project Hub showing project organization and scenario cards",
        label: "Workspace 01 · Project Management Hub",
        caption: "Organizing training curriculum into discrete scenarios with qualification tagging and branch versioning.",
      },
      {
        src: "/images/vts/Project hub - fbx management.webp",
        alt: "VTS FBX asset management interface displaying 3D model files and metadata",
        label: "Workspace 02 · Multi-Asset FBX Hub",
        caption: "Ingesting high-poly aircraft and engine CAD assemblies with batch drag-and-drop and mesh integrity checks.",
      },
    ],
  },
  {
    number: "02",
    system: "VTS WORKBENCH",
    title: "3D Staging Viewport & Object Hierarchy Outliner",
    description:
      "A streamlined spatial workspace giving instructors direct visual manipulation of assemblies. Combines an outliner tree hierarchy with camera orbit, pan, and focus tools calibrated for intuitive mechanical inspection.",
    uxFeatures: [
      "Deep nested assembly selection: Click any bolt in the 3D viewport to highlight its outliner node.",
      "Isolate & Ghost modes: Dim surrounding airframe geometry to focus purely on the target component.",
      "Contextual multi-object selection for grouping related fasteners into batch steps.",
    ],
    primaryImage: "/images/vts/Workspace - normal screen - hierarchy - no script.webp",
    primaryAlt: "VTS Workbench workspace showing 3D jet engine model and part hierarchy",
  },
  {
    number: "03",
    system: "VTS WORKBENCH",
    title: "Parametric Property Inspector & Script Assignment",
    description:
      "Replaces complex coding with progressive disclosure configuration cards. Instructors inspect part coordinates, assign interaction behaviors via dropdowns, and configure rotational limits in seconds.",
    uxFeatures: [
      "Progressive disclosure: Default view shows transform coordinates; applying a script reveals tailored physics parameters.",
      "Visual rotation axis gizmos showing min/max angle limits directly in the 3D viewport.",
      "Real-time validation flags warning if a designated rotation angle causes geometry clipping.",
    ],
    threeColumnImages: [
      {
        src: "/images/vts/Object properties - default.webp",
        alt: "Default object properties inspector showing baseline transform coordinates",
        label: "State 01 · Default Inspector",
        caption: "Baseline spatial coordinates and transform bounds before attaching behavior.",
      },
      {
        src: "/images/vts/Object properties - ordinat applied.webp",
        alt: "Object properties inspector with coordinate lock and pivot ordinat applied",
        label: "State 02 · Coordinate Lock",
        caption: "Spatial pivot ordinat anchored for precise mechanical rotational articulation.",
      },
      {
        src: "/images/vts/Object properties - script applied.webp",
        alt: "Object properties inspector with interaction script and degree parameters applied",
        label: "State 03 · Script Attached",
        caption: "Declarative parameters: Min/max angles, rotation axis detents, and torque limits.",
      },
    ],
  },
  {
    number: "04",
    system: "MAINTENANCE PLAYER",
    title: "Runtime Training Simulation & Procedure Verification",
    description:
      "The student execution environment. Trainees enter a distraction-free, full-screen simulator where interactive parts emit high-visibility outline glows, spatial billboard callouts guide actions, and automated evaluation tracks accuracy.",
    uxFeatures: [
      "Dynamic emission outlines that illuminate candidate components when hovered by virtual tools.",
      "Step-by-step procedure ledger tracking elapsed time, incorrect attempts, and safety violations.",
      "Instant error feedback alerting trainees when attempting out-of-order mechanical operations.",
    ],
    primaryImage:
      "/images/vts/Simulation - fullscreen - outline & label state - outline & label active.webp",
    primaryAlt: "Maintenance Training Player showing 3D aircraft inspection with active outline and label state",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionOutput() {
  return (
    <section id="output" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-10 sm:gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              04
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Production Product Suite
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            VTS Workbench &amp; Maintenance Player
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            From raw CAD geometry to validated military training: Four production interfaces.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Every screen in the VTS suite was engineered for high ergonomic comfort, keyboard shortcut density, and distraction-free procedural operation.
          </p>
        </div>

        {/* 4 Output Modules */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {OUTPUT_MODULES.map((module) => (
            <motion.article
              key={module.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-4 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col gap-2 border-b border-stone-200 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-500">
                    MODULE {module.number} / {module.system}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--cs-color-accent)]">
                    Production v1.0
                  </span>
                </div>
                <h3 className="font-[var(--cs-font-sans)] text-xl font-bold text-stone-900 sm:text-2xl">
                  {module.title}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {module.description}
                </p>
              </div>

              {/* Two-Column Equal Grid (1 Row, 2 Columns) */}
              {module.twoColumnImages ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 w-full">
                  {module.twoColumnImages.map((col, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-3 rounded-sm border border-stone-200 bg-white p-3 sm:p-4 shadow-sm"
                    >
                      <div className="relative aspect-[1440/960] w-full overflow-hidden rounded-sm bg-stone-100 border border-stone-200">
                        <Image
                          src={col.src}
                          alt={col.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                          className="object-cover"
                        />
                      </div>
                      <div className="border-t border-stone-100 pt-2">
                        <span className="font-mono text-[10px] font-bold uppercase text-[var(--cs-color-accent)] block">
                          {col.label}
                        </span>
                        <p className="font-[var(--cs-font-sans)] text-[11px] text-stone-600 mt-1 leading-relaxed">
                          {col.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : module.threeColumnImages ? (
                /* Three-Column Control Sidebar Images */
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 w-full">
                  {module.threeColumnImages.map((col, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-3 rounded-sm border border-stone-200 bg-white p-3 sm:p-4 shadow-sm"
                    >
                      <div className="relative aspect-[380/862] w-full max-w-[260px] sm:max-w-none mx-auto overflow-hidden rounded-sm bg-stone-100 border border-stone-200">
                        <Image
                          src={col.src}
                          alt={col.alt}
                          fill
                          sizes="(max-width: 640px) 260px, (max-width: 1024px) 33vw, 400px"
                          className="object-contain"
                        />
                      </div>
                      <div className="border-t border-stone-100 pt-2 text-center sm:text-left">
                        <span className="font-mono text-[10px] font-bold uppercase text-[var(--cs-color-accent)] block">
                          {col.label}
                        </span>
                        <p className="font-[var(--cs-font-sans)] text-[11px] text-stone-600 mt-1 leading-relaxed">
                          {col.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                module.primaryImage && (
                  <div className="relative w-full overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm">
                    <Image
                      src={module.primaryImage}
                      alt={module.primaryAlt || ""}
                      width={1440}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 1280px"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )
              )}

              {/* Secondary Images if present */}
              {module.secondaryImages && module.secondaryImages.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {module.secondaryImages.map((sec, idx) => (
                    <div key={idx} className="flex flex-col gap-2 rounded-sm border border-stone-200 bg-white p-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-100">
                        <Image
                          src={sec.src}
                          alt={sec.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-[var(--cs-font-sans)] text-[11px] text-stone-600">
                        {sec.caption}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* UX Feature Bulletins */}
              <div className="flex flex-col gap-3 rounded-sm border border-stone-200 bg-white p-4 sm:p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-700">
                  Critical Interaction Design Highlights:
                </span>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  {module.uxFeatures.map((spec, idx) => (
                    <li
                      key={idx}
                      className="rounded-sm bg-stone-50 p-3 font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-700"
                    >
                      <strong className="block font-mono text-[10px] text-stone-500">
                        FEATURE SPEC 0{idx + 1}
                      </strong>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
