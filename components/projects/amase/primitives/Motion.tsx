import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* ── Reveal ─────────────────────────────────────────────────────────────── */

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduced ? 0 : y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        margin: "-12% 0px -12% 0px",
      }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── MaskText ───────────────────────────────────────────────────────────── */

interface MaskTextProps {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}

export function MaskText({
  lines,
  className,
  delay = 0,
  stagger = 0.12,
}: MaskTextProps) {
  const reduced = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="block overflow-hidden pb-[0.12em]"
        >
          <motion.span
            className="block"
            initial={{
              y: reduced ? 0 : "108%",
              opacity: reduced ? 0 : 1,
            }}
            whileInView={{
              y: "0%",
              opacity: 1,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px -10% 0px",
            }}
            transition={{
              duration: 1.15,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
