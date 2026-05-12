"use client";

import { useCallback } from "react";

type Props = {
  className?: string;
  ariaLabel: string;
};

export function ScrollTopArrow({ className, ariaLabel }: Props) {
  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 19V5M12 5l-6 6M12 5l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
