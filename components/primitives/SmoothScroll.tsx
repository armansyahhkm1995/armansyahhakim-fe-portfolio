"use client";

import { useEffect, type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

// PERF-004: Native smooth scroll (no Lenis dependency)
// Motion handles scroll animations natively
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return <>{children}</>;
}
