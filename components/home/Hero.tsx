"use client";

import { motion } from "motion/react";
import { AnimatedDecisionDiagram } from "./AnimateDecisionDiagram";

const lines = [
  "I design experiences",
  "that change",
  "how people think,",
  "feel,",
  "and behave.",
];

export function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col justify-between px-6 pt-10 pb-12 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase"
      >
        <span>Product Design — Systems & Research</span>

        <span className="hidden md:block">Index / 2026</span>
      </motion.div>

      <div className="grid flex-1 items-center gap-16 py-20 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <h1 className="font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]">
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Not through interfaces.
            <br />
            Through research, systems thinking, and meaningful product
            decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <a
              href="#transformations"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-85"
            >
              Explore Transformations
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#philosophy"
              className="border-b border-border pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              My Design Philosophy
            </a>
          </motion.div>
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
          delay: 1.4,
        }}
        className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase"
      >
        Scroll
      </motion.div>
    </header>
  );
}
