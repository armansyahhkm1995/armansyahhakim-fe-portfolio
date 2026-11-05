"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "Lead Systems & Product Designer"],
  ["Company", "Falah Inovasi Teknologi"],
  ["Scope", "Multi-Platform Tokens · Web & Unity · Governance"],
] as const;

const lines = ["Falah One: Organizing", "cross-team design", "language"];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header & Title */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              INTERNAL DESIGN SYSTEM · FALAH INOVASI TEKNOLOGI · Q1 2026
            </p>

            <h1 className="font-display text-[2.75rem] leading-[0.95] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </header>

          {/* Description + metadata */}
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:gap-16">
            <p className="max-w-[760px] flex-1 font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              Investigating how one unified design language could work systematically across
              Falah&apos;s software development, VR/AR simulations, and marketing content teams
              without flattening operational needs.
            </p>

            <dl className="grid shrink-0 grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:flex lg:gap-8">
              {METADATA.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5 max-w-[240px]">
                  <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--cs-color-text-muted)]">
                    {label}
                  </dt>
                  <dd className="font-sans text-xs font-medium text-[var(--cs-color-text-primary)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Hero image */}
        <figure className="mt-8 md:mt-12 lg:mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
            <Image
              src="/images/falahOne/falah_hero.webp"
              alt="Falah One Design System multi-platform architecture overview"
              width={1440}
              height={810}
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
            Falah One System Spec: Unified token architecture across Web, Unity 3D, and stereoscopic VR runtimes.
          </figcaption>
        </figure>

        {/* Executive Summary Card (At-a-Glance) */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
                EXECUTIVE SUMMARY
              </span>
              <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">· AT A GLANCE</span>
            </div>
            <span className="font-mono text-[11px] text-[var(--cs-color-text-muted)] hidden sm:inline">
              Cross-Platform Architecture
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                01 / The Friction
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Cross-squad front-end delivery was completely fragmented. Web squads, Unity 3D developers, and VR simulation engineers built disjointed UI components with zero token governance or accessibility standards.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                02 / The Mechanism
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Architected a multi-tier design token pipeline (Primitive → Semantic → Component) compiling to both Tailwind CSS for web apps and Unity C# ScriptableObjects for immersive 3D/VR environments.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                03 / The Impact
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Unified 4 core technical divisions under a single design language, slashed new module UI implementation time by 65%, and enforced 100% WCAG AA contrast compliance across all high-density cockpits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
