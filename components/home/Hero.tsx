"use client";

import { motion } from "motion/react";
import { AnimatedDecisionDiagram } from "./AnimateDecisionDiagram";

const lines = [
  "Designing clarity",
  "for complex, data-heavy,",
  "and mission-critical",
  "products.",
];

const cvUrl =
  "https://drive.google.com/file/d/1ta5En5luBRhmiVAf0zeGCIJxGY9VGrSr/view?usp=sharing";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-between px-6 pt-8 pb-12 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase"
      >
        <span>Product Design — Complex Systems &amp; B2B Enterprise</span>
        <span className="hidden md:block">Index / 2026</span>
      </motion.div>

      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.35fr_1fr] lg:py-20">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-[2.75rem] leading-[0.98] sm:text-[4.25rem] lg:text-[5.5rem] xl:text-[6.5rem]"
          >
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              I help enterprise organizations transform convoluted datasets, industrial telemetry,
              and high-stakes operational workflows into intuitive, high-adoption software systems.
            </p>
            <p className="mt-3 text-foreground/90 font-medium text-sm sm:text-base">
              Evidence-driven research, systems thinking, and measurable product decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#transformations"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Explore Case Studies
              <span
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                ↓
              </span>
            </a>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-muted/30"
            >
              View Resume (CV)
              <span
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.95 }}
            className="mt-8 font-mono text-xs tracking-wide text-muted-foreground"
          >
            Specializing in AgTech, Industrial IoT, Regulated Systems &amp; 3D Training Suites.
          </motion.p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <AnimatedDecisionDiagram />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.1,
        }}
        className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase"
      >
        <span>Scroll to Explore</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}
