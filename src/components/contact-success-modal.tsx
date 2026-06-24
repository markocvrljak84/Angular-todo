"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  message: string;
  homeHref: string;
  homeLabel: string;
  closeLabel: string;
  onClose: () => void;
};

export function ContactSuccessModal({
  message,
  homeHref,
  homeLabel,
  closeLabel,
  onClose,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="site-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-message"
    >
      <button
        type="button"
        className="site-modal__backdrop"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div className="site-modal__panel">
        <button
          ref={closeRef}
          type="button"
          className="site-modal__close"
          aria-label={closeLabel}
          onClick={onClose}
        >
          ×
        </button>
        <p id="contact-success-message" className="site-modal__message" role="status">
          {message}
        </p>
        <Link href={homeHref} className="site-modal__home-link site-form__submit">
          {homeLabel}
        </Link>
      </div>
    </div>
  );
}
