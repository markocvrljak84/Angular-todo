/**
 * Basic YouTube embed with native player controls (no autoplay tricks).
 */
export function FilmYoutubeSection({
  videoId,
  title,
  caption,
}: {
  videoId: string;
  title: string;
  caption: string;
}) {
  const src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0`;

  return (
    <section id="film" className="film-yt flat-section" aria-labelledby="film-yt-heading">
      <div className="flat-wrap">
        <h2 id="film-yt-heading" className="film-yt__title">
          {title}
        </h2>
        <p className="film-yt__caption">{caption}</p>
        <div className="film-yt__frame">
          <iframe
            className="film-yt__iframe"
            src={src}
            title={title}
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
