"use client";

import { useEffect } from "react";

const PRECONNECT_ORIGINS = [
  "https://www.google.com",
  "https://maps.googleapis.com",
  "https://maps.gstatic.com",
] as const;

/**
 * Optional DNS/TLS warm-up for Google Maps embeds.
 * Do NOT iframe-preload maps — that destroys FCP/LCP on /experiences.
 * Call only when a route panel with a map is about to open.
 */
export function warmHikingMapConnections() {
  if (typeof document === "undefined") return;

  for (const href of PRECONNECT_ORIGINS) {
    if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
      continue;
    }
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    if (href !== "https://www.google.com") {
      link.crossOrigin = "";
    }
    document.head.appendChild(link);
  }
}

/** @deprecated Prefer warmHikingMapConnections(); kept for import compatibility. */
export function HikingRouteMapsPreload() {
  useEffect(() => {
    /* No-op: eager map iframes were removed for CWV. */
  }, []);
  return null;
}
