"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#transformations", label: "Case Studies" },
  { href: "#specializations", label: "Specializations" },
  { href: "#thinking", label: "Framework" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const cvUrl =
  "https://drive.google.com/file/d/1ta5En5luBRhmiVAf0zeGCIJxGY9VGrSr/view?usp=sharing";

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[var(--home-paper)]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-350 items-center justify-between px-6 md:px-12">
        {/* Identity */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Armansyah Hakim Portfolio Homepage"
        >
          <span className="font-display text-xl tracking-tight sm:text-2xl">
            Armansyah Hakim
          </span>
          <span className="hidden font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase lg:inline">
            / Systems &amp; Product
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-85"
            aria-label="View Resume / Curriculum Vitae in new tab"
          >
            <span>Resume / CV</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="font-mono text-xs">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-b border-border bg-[var(--home-paper)] px-6 py-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
