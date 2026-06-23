"use client";

import { useEffect, useRef, useState } from "react";
import { turnstileConfigured } from "@/lib/turnstile";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  onToken: (token: string) => void;
  onExpire: () => void;
  humanLabel: string;
  humanConfirmed: boolean;
  onHumanConfirmedChange: (value: boolean) => void;
};

export function FormHumanCheck({
  onToken,
  onExpire,
  humanLabel,
  humanConfirmed,
  onHumanConfirmedChange,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  const useTurnstile = turnstileConfigured() && Boolean(siteKey);

  useEffect(() => {
    if (!useTurnstile || !containerRef.current) return;

    let cancelled = false;

    function renderWidget() {
      if (cancelled || !containerRef.current || !window.turnstile || !siteKey) return;

      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onToken(token),
        "expired-callback": () => onExpire(),
        "error-callback": () => onExpire(),
      });
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () => renderWidget();
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [onExpire, onToken, siteKey, useTurnstile]);

  if (useTurnstile) {
    return <div ref={containerRef} className="site-form__turnstile" />;
  }

  return (
    <label className="site-form__checkbox site-form__checkbox--human">
      <input
        type="checkbox"
        checked={humanConfirmed}
        onChange={(event) => onHumanConfirmedChange(event.target.checked)}
        required
      />
      <span>{humanLabel}</span>
    </label>
  );
}
