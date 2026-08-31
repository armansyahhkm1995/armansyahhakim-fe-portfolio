"use client";

import { useEffect, useState } from "react";

import { CHAPTERS } from "./primitives/chapters";

export function ProgressRail() {
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    function updateProgress() {
      if (animationFrame) return;

      animationFrame = requestAnimationFrame(() => {
        animationFrame = 0;

        const documentElement = document.documentElement;

        const scrollableHeight =
          documentElement.scrollHeight - documentElement.clientHeight;

        const currentScroll = documentElement.scrollTop;

        const scrollProgress =
          scrollableHeight > 0 ? currentScroll / scrollableHeight : 0;

        setProgress(scrollProgress);

        const activationPoint = window.innerHeight * 0.42;

        let currentChapter = 0;

        CHAPTERS.forEach((chapter, index) => {
          const element = document.getElementById(chapter.id);

          if (!element) return;

          const { top } = element.getBoundingClientRect();

          if (top <= activationPoint) {
            currentChapter = index;
          }
        });

        setActiveChapter(currentChapter);
      });
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const chapter = CHAPTERS[activeChapter] ?? CHAPTERS[0]!;

  return (
    <>
      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-px bg-white/20"
      >
        <div
          className="h-px origin-left bg-white"
          style={{
            transform: `scaleX(${progress})`,
          }}
        />
      </div>

      {/* Chapter indicator */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-360 items-baseline justify-between px-6 py-6 md:px-14 lg:px-24">
          <span className="label text-white/60">Transformation 01</span>

          <span
            key={chapter.id}
            className="label hidden animate-fade-in text-white/60 md:inline"
          >
            {chapter.n} — {chapter.title}
          </span>
        </div>
      </header>

      {/* Chapter navigation */}
      <nav
        aria-label="Case study chapters"
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ol className="space-y-3">
          {CHAPTERS.map((chapterItem, index) => {
            const isActive = index === activeChapter;

            return (
              <li key={chapterItem.id}>
                <a
                  href={`#${chapterItem.id}`}
                  aria-label={`${chapterItem.n} ${chapterItem.title}`}
                  className="group flex items-center gap-3"
                >
                  {/* Chapter line */}
                  <span
                    aria-hidden="true"
                    className={`block h-px transition-all duration-700 ${
                      isActive
                        ? "w-10 bg-white"
                        : "w-4 bg-white/35 group-hover:w-7 group-hover:bg-white/70"
                    }`}
                  />

                  {/* Chapter number */}
                  <span
                    className={`label transition-all duration-500 ${
                      isActive
                        ? "text-white opacity-100"
                        : "text-white/50 opacity-0 group-hover:opacity-70"
                    }`}
                  >
                    {chapterItem.n}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
