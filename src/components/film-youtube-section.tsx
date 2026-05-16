/**
 * Basic YouTube embed with native player controls (no autoplay tricks).
 */
export function FilmYoutubeSection({ videoId }: { videoId: string }) {
  const src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0`;
  const iframeTitle = "Video — Velebit mountain chalet stars peak";

  return (
    <section id="film" className="film-yt flat-section" aria-label={iframeTitle}>
      <div className="flat-wrap">
        <div className="film-yt__frame">
          <iframe
            className="film-yt__iframe"
            src={src}
            title={iframeTitle}
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
