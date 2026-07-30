"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_SRC } from "@/config/site-images";

type Props = {
  alt: string;
};

export function HeroVideo({ alt }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("src");
      video.load();
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const markReady = () => setReady(true);

    const tryPlay = () => {
      if (!video.paused) {
        markReady();
        return;
      }
      void video
      .play()
      .then(markReady)
      .catch(() => {
        /* Keep poster visible if autoplay is blocked. */
      });
    };

    // 720p is in the initial HTML with preload="auto", so the browser may
    // already be buffering before this effect runs — play immediately, no delay.
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("playing", markReady);
    tryPlay();

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("playing", markReady);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      {/* Kick off the download as soon as homepage HTML is parsed. */}
      <link
        rel="preload"
        as="video"
        href={HERO_VIDEO_SRC}
        type="video/mp4"
        fetchPriority="low"
      />
      <video
        ref={ref}
        className={`hero-fs__video hero-fs__img--native${
          ready ? " hero-fs__video--ready" : ""
        }`}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={alt}
        disableRemotePlayback
      />
    </>
  );
}
