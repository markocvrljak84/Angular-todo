"use client";

import { useEffect } from "react";
import { HIKING_ROUTE_MAPS, type HikingRouteId } from "@/config/hiking-routes";

const PRECONNECT_ORIGINS = [
  "https://www.google.com",
  "https://maps.googleapis.com",
  "https://maps.gstatic.com",
] as const;

const MAP_ENTRIES = Object.entries(HIKING_ROUTE_MAPS).filter(
  (entry): entry is [HikingRouteId, string] => entry[1] != null
);

export function HikingRouteMapsPreload() {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

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
      links.push(link);
    }

    return () => {
      for (const link of links) {
        link.remove();
      }
    };
  }, []);

  if (MAP_ENTRIES.length === 0) {
    return null;
  }

  return (
    <div className="hiking-maps-preload" aria-hidden="true">
      {MAP_ENTRIES.map(([routeId, url]) => (
        <iframe
          key={routeId}
          src={url}
          title=""
          tabIndex={-1}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ))}
    </div>
  );
}
