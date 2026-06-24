"use client";

import { useId, useRef, useState } from "react";
import type {
  ClimbingRouteId,
  ClimbingRoutesContent,
} from "@/i18n/climbing-routes";

type Props = {
  content: ClimbingRoutesContent;
};

function ClimbingRouteItem({
  route,
  content,
  isOpen,
  onToggle,
  panelId,
  triggerId,
  articleRef,
}: {
  route: ClimbingRoutesContent["routes"][number];
  content: ClimbingRoutesContent;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  triggerId: string;
  articleRef: (element: HTMLElement | null) => void;
}) {
  const toggleLabel = isOpen
    ? content.collapseRouteLabel
    : content.expandRouteLabel;

  return (
    <article
      ref={articleRef}
      className={`hiking-route${isOpen ? " hiking-route--open" : ""}`}
    >
      <div className="hiking-route__bar">
        <button
          type="button"
          id={triggerId}
          className="hiking-route__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="hiking-route__chevron" aria-hidden />
          <span className="hiking-route__trigger-main">
            <span className="hiking-route__title">{route.title}</span>
            <span className="hiking-route__summary">
              <span className="hiking-route__pill">{route.subtitle}</span>
              {route.pills.map((pill) => (
                <span key={pill} className="hiking-route__pill">
                  {pill}
                </span>
              ))}
            </span>
          </span>
          <span className="hiking-route__toggle-label">{toggleLabel}</span>
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="hiking-route__panel"
        hidden={!isOpen}
      >
        <div className="hiking-route__panel-inner">
          <div className="hiking-route__stats-wrap">
            <h4 className="hiking-route__stats-title">{content.statsHeading}</h4>
            <dl className="hiking-route__stats">
              {route.stats.map((stat) => (
                <div key={stat.label} className="hiking-route__stat">
                  <dt className="hiking-route__stat-label">{stat.label}</dt>
                  <dd className="hiking-route__stat-value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ClimbingRoutesSection({ content }: Props) {
  const baseId = useId();
  const [openId, setOpenId] = useState<ClimbingRouteId | null>(null);
  const routeRefs = useRef<Partial<Record<ClimbingRouteId, HTMLElement>>>({});

  const scrollRouteIntoView = (routeId: ClimbingRouteId) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        routeRefs.current[routeId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  const handleToggle = (routeId: ClimbingRouteId) => {
    const willOpen = openId !== routeId;
    setOpenId((current) => (current === routeId ? null : routeId));
    if (willOpen) {
      scrollRouteIntoView(routeId);
    }
  };

  return (
    <div className="climbing-routes" aria-label={content.title}>
      <div className="flat-wrap">
        <h3 className="climbing-routes__title">{content.title}</h3>
        <p className="climbing-routes__intro">{content.intro}</p>

        <div className="hiking__routes">
          {content.routes.map((route) => {
            const isOpen = openId === route.id;
            const panelId = `${baseId}-panel-${route.id}`;
            const triggerId = `${baseId}-trigger-${route.id}`;

            return (
              <ClimbingRouteItem
                key={route.id}
                route={route}
                content={content}
                isOpen={isOpen}
                panelId={panelId}
                triggerId={triggerId}
                articleRef={(element) => {
                  if (element) {
                    routeRefs.current[route.id] = element;
                  } else {
                    delete routeRefs.current[route.id];
                  }
                }}
                onToggle={() => handleToggle(route.id)}
              />
            );
          })}
        </div>

        <p className="climbing-routes__source">
          <a
            href={content.sourceHref}
            className="climbing-routes__source-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.sourceLabel}
          </a>
        </p>
      </div>
    </div>
  );
}
