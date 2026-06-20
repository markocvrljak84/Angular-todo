"use client";

import { useEffect, useRef, useState } from "react";

type Props = { videoId: string };

/**
 * Defers YouTube embed until the section is near the viewport — keeps main-thread
 * and network work off the critical path (LCP / INP).
 */
export function FilmYoutubeSection({ videoId }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [embed, setEmbed] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
  const iframeTitle = "Video — Velebit mountain chalet Stars Peak";

  useEffect(() => {
    const node = frameRef.current;
    if (!node || embed) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setEmbed(true);
            observer.disconnect();
          }
        },
        { rootMargin: "240px 0px" }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }

    setEmbed(true);
  }, [embed]);

  return (
    <section id="film" className="film-yt flat-section" aria-label={iframeTitle}>
      <div className="flat-wrap">
        <div ref={frameRef} className="film-yt__frame">
          {embed ? (
            <iframe
              className="film-yt__iframe"
              src={src}
              title={iframeTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="film-yt__placeholder" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
