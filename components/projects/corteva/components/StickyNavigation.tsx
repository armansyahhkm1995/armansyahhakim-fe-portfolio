"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "context", label: "01 Context" },
  { id: "stakeholder", label: "02 Stakeholder" },
  { id: "goal", label: "03 Project Goal" },
  { id: "hypothesis", label: "04 Hypothesis" },
  { id: "behavior", label: "05 Behavior" },
  { id: "experience", label: "06 Experience" },
  { id: "validation", label: "07 Validation" },
  { id: "reflection", label: "08 Reflection" },
] as const;

type NavSectionId = (typeof NAV_ITEMS)[number]["id"];

const NAV_HEIGHT = 58;

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState<NavSectionId>(
    NAV_ITEMS[0].id,
  );

  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
   * --------------------------------------------------
   * Detect active section
   * --------------------------------------------------
   */

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const currentSection = visibleSections[0];

        if (currentSection) {
          setActiveSection(currentSection.target.id as NavSectionId);
        }
      },
      {
        root: null,

        /*
         * Leave space for the fixed navigation.
         * The bottom margin makes the upper part of
         * the viewport the "active section zone".
         */
        rootMargin: `-${NAV_HEIGHT}px 0px -55% 0px`,

        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /*
   * --------------------------------------------------
   * Scroll progress
   * --------------------------------------------------
   */

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, currentProgress)));

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  /*
   * --------------------------------------------------
   * Navigate to section
   * --------------------------------------------------
   */

  const scrollToSection = (id: NavSectionId) => {
    const section = document.getElementById(id);

    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  /*
   * --------------------------------------------------
   * Render
   * --------------------------------------------------
   */

  return (
    <nav
      aria-label="Case study navigation"
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        bg-[var(--cs-color-bg)]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[58px]
          items-center
          max-w-[1440px]
          justify-between
          px-12
        "
      >
        {/* Logo */}

        <a
          href="/"
          aria-label="Back to home"
          className="
          group
          flex
          shrink-0
          items-center
          gap-2
          no-underline
          text-[var(--cs-color-text-primary)]
        "
        >
          <span
            aria-hidden="true"
            className="
      font-mono
      text-sm
      leading-none
      transition-transform
      duration-200
      group-hover:-translate-x-1
    "
          >
            ←
          </span>

          <span
            className="
      font-sans
      text-sm
      font-extrabold
      tracking-[0.02em]
    "
          >
            CORTEVA
          </span>
        </a>

        {/* Desktop navigation */}

        <ul
          className="
            hidden
            items-center
            gap-5
            lg:flex
            xl:gap-6
          "
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "whitespace-nowrap",
                    "bg-transparent",
                    "py-1",
                    "font-mono",
                    "text-[10px]",
                    "uppercase",
                    "transition-colors",
                    "duration-200",
                    "focus-visible:outline-none",
                    "focus-visible:ring-1",
                    "focus-visible:ring-[var(--cs-color-accent)]",

                    isActive
                      ? ["font-semibold", "text-[var(--cs-color-accent)]"].join(
                          " ",
                        )
                      : [
                          "font-normal",
                          "text-[var(--cs-color-text-muted)]",
                          "hover:text-[var(--cs-color-text-secondary)]",
                        ].join(" "),
                  ].join(" ")}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="case-study-mobile-navigation"
          className="
            flex
            h-6
            w-6
            flex-col
            items-center
            justify-center
            gap-[5px]
            lg:hidden
          "
        >
          <span
            className="
              h-px
              w-[18px]
              bg-[var(--cs-color-text-primary)]
            "
          />

          <span
            className="
              h-px
              w-[18px]
              bg-[var(--cs-color-text-primary)]
            "
          />

          <span
            className="
              h-px
              w-[18px]
              bg-[var(--cs-color-text-primary)]
            "
          />
        </button>
      </div>

      {/* Mobile navigation */}

      {menuOpen && (
        <div
          id="case-study-mobile-navigation"
          className="
            border-b
            border-[var(--cs-color-border)]
            bg-[var(--cs-color-bg)]
            lg:hidden
          "
        >
          <ul
            className="
              mx-auto
              flex
              max-w-[var(--cs-content-max-width)]
              flex-col
              gap-3
              px-[var(--cs-content-padding)]
              py-4
            "
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "w-full",
                      "py-1",
                      "text-left",
                      "font-mono",
                      "text-xs",
                      "uppercase",
                      "transition-colors",
                      "duration-200",

                      isActive
                        ? [
                            "font-semibold",
                            "text-[var(--cs-color-accent)]",
                          ].join(" ")
                        : [
                            "text-[var(--cs-color-text-muted)]",
                            "hover:text-[var(--cs-color-text-secondary)]",
                          ].join(" "),
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Reading progress */}

      <div
        aria-hidden="true"
        className="
          h-[2px]
          w-full
          bg-[var(--cs-color-border)]
        "
      >
        <div
          className="
            h-full
            bg-[var(--cs-color-accent)]
            transition-[width]
            duration-100
            ease-linear
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </nav>
  );
}
