"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ApplicationCard {
  number: string;
  title: string;
  runtime: string;
  description: string;
  designTokenIntegration: string[];
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ControllerMedia {
  src: string;
  alt: string;
  label: string;
}

const APPLICATIONS: ApplicationCard[] = [
  {
    number: "01",
    title: "Industrial Energy Management Dashboard",
    runtime: "Next.js · React · Tailwind CSS · Enterprise Web",
    description:
      "A high-density operational telemetry dashboard deployed across multi-campus facilities. Uses Falah One table tokens, diurnal curve color palettes, and real-time status badges.",
    designTokenIntegration: [
      "Consistent 8px spatial grid enforcing strict vertical rhythm across telemetry charts.",
      "Semantic status tokens (warning, danger, active) sharing exact hexes with physical field hardware.",
      "Accessible dark/light surface tokens meeting WCAG AA 4.5:1 contrast across all data tables.",
    ],
    src: "/images/falahOne/Energy management system dashboard - Next.webp",
    alt: "Energy management system dashboard built with Falah One web tokens",
    width: 1280,
    height: 911,
  },
  {
    number: "02",
    title: "Virtual Training Suite — Fighter Jet Maintenance",
    runtime: "Unity 3D Engine · World Space Canvas · C#",
    description:
      "A high-fidelity military maintenance simulator. Diagnostic HUDs, maintenance checklists, and interactive cockpit disassembly menus inherit typography and button primitives directly from compiled C# ScriptableObjects.",
    designTokenIntegration: [
      "World-space canvas panels rendered at 1080p equivalent without texture blur.",
      "High-contrast HUD palettes designed to remain legible against complex 3D aircraft geometry.",
      "Standardized hover and focus states mapped to 3D laser-pointer raycasts.",
    ],
    src: "/images/falahOne/Virtual training suite - Fighter jet maintenance training showcase - Unity.webp",
    alt: "Virtual training suite fighter jet maintenance interface in Unity",
    width: 1280,
    height: 960,
  },
  {
    number: "03",
    title: "Virtual Reality — Network Protocol Training",
    runtime: "OpenXR · Unity 3D · Stereoscopic VR",
    description:
      "Immersive simulation teaching network infrastructure routing. Node inspection cards, data-packet visualization, and network topology tools use shared token scales for optimal readability inside VR headsets.",
    designTokenIntegration: [
      "Minimum 28 dmm angular typography sizing preventing pixel shimmer in VR lenses.",
      "Consistent color-coded network layers (OSI model) harmonized with enterprise web docs.",
      "Spatial depth elevation tokens defining layer separation in 3D volume.",
    ],
    src: "/images/falahOne/Virtual reality - Internet protocol training - Unity.webp",
    alt: "Virtual reality internet protocol training interface in Unity",
    width: 1280,
    height: 1080,
  },
  {
    number: "04",
    title: "Virtual Reality — Immersive Language Lab",
    runtime: "OpenXR · Unity 3D · Interactive Dialog",
    description:
      "Conversational VR simulation environment. Real-time dialog transcripts, audio waveform indicators, and interactive vocabulary cards built using tokenized typography and elevation models.",
    designTokenIntegration: [
      "Curved floating UI surfaces minimizing peripheral optical distortion.",
      "Accessible subtitle styling optimized for rapid reading without causing motion sickness.",
      "Standardized audio state badges sharing semantic feedback tokens with web audio players.",
    ],
    src: "/images/falahOne/Virtual reality - Language training - Unity.webp",
    alt: "Virtual reality language training interface in Unity",
    width: 1280,
    height: 1080,
  },
];

const VR_CONTROLLERS: ControllerMedia[] = [
  {
    src: "/images/falahOne/Controller — Type 1 Left.webp",
    alt: "Falah One VR Controller Type 1 Left mapping",
    label: "Type 1 Controller — Primary Hand (Left)",
  },
  {
    src: "/images/falahOne/Controller — Type 1 Right.webp",
    alt: "Falah One VR Controller Type 1 Right mapping",
    label: "Type 1 Controller — Primary Hand (Right)",
  },
  {
    src: "/images/falahOne/Controller — Type 2 Left.webp",
    alt: "Falah One VR Controller Type 2 Left mapping",
    label: "Type 2 Controller — Secondary Tool (Left)",
  },
  {
    src: "/images/falahOne/Controller — Type 2 Right.webp",
    alt: "Falah One VR Controller Type 2 Right mapping",
    label: "Type 2 Controller — Secondary Tool (Right)",
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
              Cross-Platform Application Showcase
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Production Implementations in the Wild
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            One design language powering mission-critical web cockpits, VR simulators, and 3D defense suites.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Falah One was validated by deploying its compiled tokens and component architecture across four flagship products operating on completely distinct runtime environments.
          </p>
        </div>

        {/* 4 Flagship Applications Showcase */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {APPLICATIONS.map((app) => (
            <motion.article
              key={app.number}
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
                    APPLICATION {app.number} / {app.runtime.toUpperCase()}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--cs-color-accent)]">
                    Shipped Production
                  </span>
                </div>
                <h3 className="font-[var(--cs-font-sans)] text-xl font-bold text-stone-900 sm:text-2xl">
                  {app.title}
                </h3>
                <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {app.description}
                </p>
              </div>

              {/* Application Screenshot */}
              <div className="relative w-full overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm">
                <Image
                  src={app.src}
                  alt={app.alt}
                  width={app.width}
                  height={app.height}
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Design Token Integration Highlights */}
              <div className="flex flex-col gap-3 rounded-sm border border-stone-200 bg-white p-4 sm:p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-700">
                  Falah One Token Integration in Production:
                </span>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  {app.designTokenIntegration.map((spec, idx) => (
                    <li
                      key={idx}
                      className="rounded-sm bg-stone-50 p-3 font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-700"
                    >
                      <strong className="block font-mono text-[10px] text-stone-500">
                        INTEGRATION PRINCIPLE 0{idx + 1}
                      </strong>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* VR Spatial Controller Standardization */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Hardware Peripheral Standardization: Spatial VR Controllers
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Mapping button triggers, raycast laser anchors, and grip thresholds across varying VR hardware headsets into consistent interaction tokens.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VR_CONTROLLERS.map((ctrl) => (
              <div
                key={ctrl.label}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-stone-50 p-4"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-sm bg-stone-100 p-2">
                  <Image
                    src={ctrl.src}
                    alt={ctrl.alt}
                    width={400}
                    height={400}
                    className="h-auto max-h-full w-auto object-contain"
                  />
                </div>
                <div className="border-t border-stone-200 pt-2">
                  <p className="font-mono text-[11px] font-medium text-stone-800">
                    {ctrl.label}
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
