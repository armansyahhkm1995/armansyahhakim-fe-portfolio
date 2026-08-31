import { motion, useScroll, useSpring } from "framer-motion";

import { AMASE_CHAPTERS } from "./primitives/chapters";

export function ProgressRail() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <>
      {/* Mobile progress */}
      <div className="pointer-events-none fixed top-0 left-0 z-50 h-px w-full bg-hairline md:hidden">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "0% 50%",
          }}
          className="h-full w-full bg-ember"
        />
      </div>

      {/* Desktop chapter rail */}
      <nav
        aria-label="AMASE case study chapters"
        className="fixed top-1/2 left-6 z-50 hidden -translate-y-1/2 xl:block"
      >
        <div className="relative flex gap-4">
          <div className="relative w-px bg-hairline">
            <motion.div
              style={{
                scaleY,
                transformOrigin: "50% 0%",
              }}
              className="absolute inset-0 w-px bg-ember"
            />
          </div>

          <ol className="flex flex-col gap-3.5">
            {AMASE_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  className="group flex items-center gap-3 text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  <span className="tabular-nums opacity-50">
                    {chapter.number}
                  </span>

                  <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-[12rem] group-hover:opacity-100">
                    {chapter.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
