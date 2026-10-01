export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="home flex min-h-svh flex-col justify-between px-6 pt-12 pb-12 md:px-12"
    >
      <div className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
        <span>Armansyah Hakim</span>
        <span>Loading...</span>
      </div>

      <div className="my-auto flex flex-col items-center justify-center gap-6 py-20 text-center">
        <div className="relative h-1 w-24 overflow-hidden rounded-full bg-border">
          <div className="absolute inset-y-0 left-0 w-1/2 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
        <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Loading Experience
        </p>
        <span className="sr-only">Loading content, please wait...</span>
      </div>

      <div className="flex items-center justify-between text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
        <span>Design Systems & Research</span>
        <span>Index / 2026</span>
      </div>
    </div>
  );
}
