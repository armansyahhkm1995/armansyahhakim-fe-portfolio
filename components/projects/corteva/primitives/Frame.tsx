import type { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  className?: string;
};

export function Frame({ children, className = "" }: FrameProps) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-6 md:px-14 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
