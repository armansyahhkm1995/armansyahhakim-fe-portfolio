"use client";

import { motion, type MotionProps } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  // Motion's whileInView options
  viewport?: MotionProps["viewport"];
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-10% 0px" },
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.15,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
