"use client";

import { motion } from "motion/react";

const nodes = [
  "Business",
  "Research",
  "Insight",
  "Decision",
  "Validation",
  "Transformation",
];

export function AnimatedDecisionDiagram() {
  return (
    <div className="relative w-full max-w-sm" aria-hidden="true">
      <ol className="flex flex-col">
        {nodes.map((node, index) => (
          <li key={node} className="relative">
            <motion.div
              className="flex items-center gap-4 py-2"
              initial={{
                opacity: 0,
                x: 12,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5 + index * 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                className="block size-1.75 rounded-full border border-foreground/40"
                animate={{
                  backgroundColor: [
                    "rgba(0,0,0,0)",
                    "var(--moss)",
                    "rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 3.3,
                  delay: 0.9 + index * 0.55,
                  repeat: Infinity,
                  repeatDelay: nodes.length * 0.55,
                  ease: "easeInOut",
                }}
              />

              <span className="font-display text-2xl md:text-[1.75rem]">
                {node}
              </span>
            </motion.div>

            {index < nodes.length - 1 && (
              <motion.span
                className="absolute left-0.75 block w-px origin-top bg-border"
                style={{
                  top: "2.2rem",
                  height: "1.5rem",
                }}
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + index * 0.55,
                  ease: "easeInOut",
                }}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
