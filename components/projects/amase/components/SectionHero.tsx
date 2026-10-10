"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "UX/UI Lead & Product Strategist"],
  ["Context", "Yellow Ribbon / Community Reintegration"],
  ["Location", "Singapore"],
  ["Platform", "Mobile (iOS & Android)"],
] as const;

const lines = ["Reintegrating with dignity:", "Designing for high-vulnerability users."];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              AMASE / ACTS · Singapore Public Sector · Social Reintegration Case Study
            </p>

            <h1 className="font-display text-[2.75rem] leading-[0.95] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
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
              In Singapore, ex-offenders navigating post-release reintegration face a fragmented web
              of government ministries, social services, and grassroots charities. The legacy ACTS
              platform functioned as a sterile agency telephone directory. This case study details
              how we redesigned the experience into a guided, empathetic support ecosystem.
            </p>

            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-6 lg:flex lg:gap-8">
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

        {/* Hero image */}
        <figure className="mt-8 md:mt-12 lg:mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
            <Image
              src="/images/amase/Assoc Prof Muhammad Faishal Ibrahim chatting with inmates from the Integrated Criminogenic Programme.webp"
              alt="Engagement with inmates undergoing the Integrated Criminogenic Programme in Singapore"
              width={1440}
              height={810}
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
            Ground reality: Inmates and community caseworkers during the rehabilitation transition in Singapore.
          </figcaption>
        </figure>

        {/* Executive Summary Card (At-a-Glance) */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              EXECUTIVE SUMMARY
            </span>
            <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">/ AT A GLANCE</span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                The User Barrier
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Vulnerable ex-offenders overwhelmed by stigma, technical literacy hurdles, and complex
                social service bureaucracy.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                The Legacy Problem
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                A dense directory listing that forced desperate users to guess agency names and
                eligibility criteria without guidance.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                The Strategic Solution
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Guided personalized intake questionnaire, simplified categorization, and caseworker
                coordination touchpoints.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Measurable Impact
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Transformed high-anxiety search into a 3-step action pathway, radically reducing
                drop-off during the critical 90-day post-release window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
