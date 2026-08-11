import type { ReactNode } from "react";
import Image from "next/image";
import type { PageHeaderContent } from "@/lib/inner-page-content";

type Motif = {
  src: string;
  alt: string;
  className?: string;
};

type Props = PageHeaderContent & {
  motif?: Motif;
  className?: string;
  /** Rendered directly under the page title (e.g. important note) */
  afterTitle?: ReactNode;
};

export function InnerPageHeader({
  title,
  intro,
  motif,
  className,
  afterTitle,
}: Props) {
  if (motif) {
    const sectionClass = ["home-welcome", "home-welcome--page", className]
      .filter(Boolean)
      .join(" ");
    const artClass = ["home-welcome__art", motif.className].filter(Boolean).join(" ");

    return (
      <section className={sectionClass} aria-label={title}>
        <div className="home-welcome__inner">
          <div className="home-welcome__copy home-welcome__copy--page">
            <h1 className="home-welcome__title">{title}</h1>
            {afterTitle}
            {intro ? <p className="home-welcome__intro">{intro}</p> : null}
          </div>
          <div className="home-welcome__rule" aria-hidden="true" />
          <div className="home-welcome__visual">
            <Image
              className={artClass}
              src={motif.src}
              alt={motif.alt}
              width={800}
              height={800}
              sizes="(min-width: 768px) 18rem, 15.5rem"
              priority
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      className={`flat-section flat-section--under-header${afterTitle ? " flat-section--under-header-note" : ""}`}
    >
      <div className={`flat-wrap${afterTitle ? " flat-wrap--narrow" : ""}`}>
        <h1 className="flat-section__title">{title}</h1>
        {afterTitle}
        {intro ? (
          <p className="flat-section__intro flat-section__intro--lead">{intro}</p>
        ) : null}
      </div>
    </div>
  );
}
