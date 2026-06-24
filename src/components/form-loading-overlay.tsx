"use client";

import { useEffect } from "react";

type Props = {
  label: string;
};

export function FormLoadingOverlay({ label }: Props) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="form-overlay" role="status" aria-live="polite" aria-busy="true">
      <div className="form-overlay__panel">
        <span className="form-spinner" aria-hidden="true" />
        <span className="form-overlay__label">{label}</span>
      </div>
    </div>
  );
}
