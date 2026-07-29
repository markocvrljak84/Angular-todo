"use client";

import { useEffect, useRef, useState } from "react";
import {
  HERO_VIDEO_SRC,
  HERO_VIDEO_SRC_720,
} from "@/config/site-images";

type Props = {
  alt: string;
};

type HeroVideoSrc = typeof HERO_VIDEO_SRC | typeof HERO_VIDEO_SRC_720;

function pickHeroSrc(): HeroVideoSrc {
  if (typeof window === "undefined") return HERO_VIDEO_SRC;
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  const lite =
    window.matchMedia("(max-width: 900px)").matches ||
    connection?.saveData === true ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "slow-2g";
  return lite ? HERO_VIDEO_SRC_720 : HERO_VIDEO_SRC;
}

export function HeroVideo({ alt }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<HeroVideoSrc>(HERO_VIDEO_SRC);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const next = pickHeroSrc();
    setSrc(next);

    // Short delay so the LCP poster can paint first, then start the video.
    const timer = window.setTimeout(() => {
      const video = ref.current;
      if (!video) return;

      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;

      if (video.getAttribute("src") !== next) {
        video.src = next;
      }
      video.load();

      const tryPlay = () => {
        void video.play().then(() => setReady(true)).catch(() => {
          /* Keep poster visible if autoplay is blocked. */
        });
      };

      tryPlay();
      video.addEventListener("canplay", tryPlay);
      video.addEventListener("loadeddata", tryPlay);
      video.addEventListener("playing", () => setReady(true));
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const onVisibility = () => {
      if (!document.hidden && video.paused) {
        void video.play().then(() => setReady(true)).catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <video
      ref={ref}
      className={`hero-fs__video hero-fs__img--native${ready ? " hero-fs__video--ready" : ""}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
      disableRemotePlayback
    />
  );
}
