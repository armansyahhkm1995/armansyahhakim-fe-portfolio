"use client";

import { motion } from "motion/react";

import { EditorialSection } from "@/components/primitives/EditorialSection";
import { Reveal } from "@/components/primitives/Reveal";

const steps = [
  "Business Context",
  "Research",
  "Insight",
  "Hypothesis",
  "Decision",
  "Prototype",
  "Validation",
  "Reflection",
];

export function ThinkingFramework() {
  return (
    <EditorialSection
      id="thinking"
      label="How I Think"
      className="bg-secondary/40"
    >
      {/* Desktop */}
      <div className="hidden items-start justify-between gap-4 lg:flex">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            className="relative flex-1"
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-15% 0px",
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-center">
              <span className="size-[1.75 shrink-0 rounded-full bg-accent" />

              {index < steps.length - 1 && (
                <motion.span
                  className="ml-2 h-px flex-1 origin-left bg-border"
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.09,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>

            <p className="mt-5 pr-4 text-sm leading-snug">{step}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile / Tablet */}
      <div className="flex flex-col lg:hidden">
        {steps.map((step, index) => (
          <Reveal key={step} delay={index * 0.04}>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <span className="mt-2 size-1.75 shrink-0 rounded-full bg-accent" />

                {index < steps.length - 1 && (
                  <span className="h-12 w-px bg-border" />
                )}
              </div>

              <p className="text-lg">{step}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-display mt-24 max-w-2xl text-2xl leading-snug sm:text-4xl">
          Every transformation follows this decision framework.
        </p>
      </Reveal>
    </EditorialSection>
  );
}
