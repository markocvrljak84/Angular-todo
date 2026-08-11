import type { OffGridMindfulContent } from "@/i18n/off-grid-mindful";

type Props = {
  content: OffGridMindfulContent;
  wide?: boolean;
  /** Nested under a section title — no outer section padding */
  compact?: boolean;
};

export function OffGridMindfulNotice({
  content,
  wide = false,
  compact = false,
}: Props) {
  const panel = (
    <aside className="off-grid-mindful__panel" role="note">
      <p className="off-grid-mindful__label">{content.label}</p>
      <p className="off-grid-mindful__title">{content.title}</p>
      <p className="off-grid-mindful__body">{content.body}</p>
    </aside>
  );

  if (compact) {
    return (
      <div className="off-grid-mindful off-grid-mindful--compact">{panel}</div>
    );
  }

  return (
    <section
      className={`flat-section off-grid-mindful${wide ? " off-grid-mindful--wide" : ""}`}
      aria-labelledby="off-grid-mindful-title"
    >
      <div
        className={`flat-wrap${wide ? " off-grid-mindful__wrap--wide" : " flat-wrap--narrow"}`}
      >
        <aside className="off-grid-mindful__panel" role="note">
          <p className="off-grid-mindful__label">{content.label}</p>
          <h2 id="off-grid-mindful-title" className="off-grid-mindful__title">
            {content.title}
          </h2>
          <p className="off-grid-mindful__body">{content.body}</p>
        </aside>
      </div>
    </section>
  );
}
