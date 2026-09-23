import type { CSSProperties, ReactNode } from "react";

type CaseStudyCSSVariables = CSSProperties & {
  "--cs-color-bg": string;
  "--cs-color-bg-alt": string;
  "--cs-color-text-primary": string;
  "--cs-color-text-secondary": string;
  "--cs-color-text-muted": string;
  "--cs-color-accent": string;
  "--cs-color-border": string;
  "--cs-color-border-light": string;

  "--cs-font-serif": string;
  "--cs-font-sans": string;
  "--cs-font-mono": string;

  "--cs-section-padding": string;
  "--cs-content-max-width": string;
  "--cs-content-padding": string;
};

type CaseStudyLayoutProps = {
  variables: CaseStudyCSSVariables;
  navigation?: ReactNode;
  children: ReactNode;
};

export function CaseStudyLayout({
  variables,
  navigation,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main
      className="
        w-full
        overflow-x-hidden
        bg-[var(--cs-color-bg)]
        font-[var(--cs-font-sans)]
        text-[var(--cs-color-text-primary)]
        antialiased
      "
      style={variables}
    >
      {navigation}
      {children}
    </main>
  );
}

// Default theme used by all current case studies
export const DEFAULT_CASE_STUDY_VARIABLES: CaseStudyCSSVariables = {
  "--cs-color-bg": "#f6f3eb",
  "--cs-color-bg-alt": "#faf8f5",
  "--cs-color-text-primary": "#141414",
  "--cs-color-text-secondary": "#4a4a4a",
  "--cs-color-text-muted": "#8e8a82",
  "--cs-color-accent": "#4b5945",
  "--cs-color-border": "#e2ddd5",
  "--cs-color-border-light": "#d5d0c8",

  "--cs-font-serif": '"Instrument Serif", "Georgia", serif',
  "--cs-font-sans": '"Geist", "Inter", -apple-system, sans-serif',
  "--cs-font-mono": '"Geist Mono", "SF Mono", "Consolas", monospace',

  "--cs-section-padding": "clamp(48px, 7.5vw, 120px)",
  "--cs-content-max-width": "1280px",
  "--cs-content-padding": "clamp(20px, 6.25vw, 80px)",
};