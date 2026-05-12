"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  videoSrc: string;
  posterSrc: string;
  title: string;
  hint: string;
  unmuteLabel: string;
  /** Fraction of section visible before play (0–1) */
  playThreshold?: number;
};

/**
 * Full-viewport video: plays when scrolled into view, pauses when leaving.
 * Autoplay with sound is often blocked by the browser until the user taps “Enable sound”.
 */
export function VideoViewportSection({
  videoSrc,
  posterSrc,
  title,
  hint,
  unmuteLabel,
  playThreshold = 0.42,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [needsUnmute, setNeedsUnmute] = useState(false);

  const tryPlayWithSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    try {
      await v.play();
      setNeedsUnmute(false);
    } catch {
      v.muted = true;
      try {
        await v.play();
        setNeedsUnmute(true);
      } catch {
        /* ignore */
      }
    }
  }, []);

  const pauseVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    const v = videoRef.current;
    if (!root || !v) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= playThreshold;
        setInView(entry.isIntersecting);
        if (visible) {
          void tryPlayWithSound();
        } else {
          pauseVideo();
        }
      },
      { threshold: [0, 0.15, playThreshold, 0.55, 0.75, 1], rootMargin: "0px" },
    );

    io.observe(root);
    return () => io.disconnect();
  }, [pauseVideo, playThreshold, tryPlayWithSound]);

  const onUnmuteClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    void v.play().then(() => {
      setNeedsUnmute(false);
    });
  }, []);

  return (
    <section id="film" ref={sectionRef} className="video-fullbleed" aria-label={title}>
      <video
        ref={videoRef}
        className="video-fullbleed__video"
        src={videoSrc}
        poster={posterSrc}
        playsInline
        loop
        preload="metadata"
        controls={inView}
      />

      <div className="video-fullbleed__chrome">
        <div className="video-fullbleed__text">
          <h2 className="video-fullbleed__title">{title}</h2>
          <p className="video-fullbleed__hint">{hint}</p>
        </div>

        {needsUnmute ? (
          <button type="button" className="video-fullbleed__unmute" onClick={onUnmuteClick}>
            {unmuteLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
