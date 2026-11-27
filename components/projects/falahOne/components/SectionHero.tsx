"use client";

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

            <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-1 sm:pb-2">
                  <motion.span
                    className="block pb-1"
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
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="max-w-[840px] font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              Investigating how one unified design language could work systematically across
              Falah&apos;s software development, VR/AR simulations, and marketing content teams
              without flattening operational needs.
            </p>

            <dl className="flex flex-wrap items-start gap-8 border-t border-[var(--cs-color-border)] pt-6 sm:gap-12 md:gap-16">
              {METADATA.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5">
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

        {/* Executive Summary Card */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              EXECUTIVE SUMMARY
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                01 / The Friction
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Cross-squad front-end delivery was completely fragmented across 3 core teams: Web developers (web, mobile apps, SaaS), Unity developers (VR/AR &amp; 3D simulations), and Content developers (landing pages, compros, social media).
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
                Unified 3 core technical squads under a single design language, slashed new module UI implementation time by 65%, and enforced 100% WCAG AA contrast compliance across all high-density cockpits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}