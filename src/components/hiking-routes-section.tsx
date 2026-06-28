"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import {
  HIKING_GPX,
  HIKING_ROUTE_IMAGES,
  HIKING_ROUTE_MAPS,
  HIKING_ROUTE_STATS,
  hikingRouteImageSrc,
} from "@/config/hiking-routes";
import type { HikingRouteId } from "@/config/hiking-routes";
import type { HikingRoutesContent } from "@/i18n/hiking-routes";
import { PageHeader } from "@/components/page-header";

type Props = {
  content: HikingRoutesContent;
  showPageHeader?: boolean;
  /** When true, render only the route list (page banner supplies h1). */
  compact?: boolean;
  /** Route expanded on first render; null keeps all closed. */
  initialOpenId?: HikingRouteId | null;
  /** Eager-load map embeds (use with HikingRouteMapsPreload on the page). */
  preloadMaps?: boolean;
};

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="hiking-route__stat">
      <dt className="hiking-route__stat-label">{label}</dt>
      <dd className="hiking-route__stat-value">{value}</dd>
    </div>
  );
}

function GpxDownload({
  href,
  fileName,
  label,
  hint,
}: {
  href: string;
  fileName: string;
  label: string;
  hint: string;
}) {
  return (
    <div className="hiking-route__gpx-wrap">
      <a
        href={href}
        download={fileName}
        className="hiking-route__gpx"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path
            d="M12 3v12M7 10l5 5 5-5M5 21h14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label}
      </a>
      <p className="hiking-route__gpx-hint">{hint}</p>
    </div>
  );
}

function HikingRouteItem({
  route,
  content,
  isOpen,
  onToggle,
  panelId,
  triggerId,
  articleRef,
  preloadMaps,
}: {
  route: HikingRoutesContent["routes"][number];
  content: HikingRoutesContent;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  triggerId: string;
  articleRef: (element: HTMLElement | null) => void;
  preloadMaps?: boolean;
}) {
  const stats = HIKING_ROUTE_STATS[route.id];
  const gpxHref = HIKING_GPX[route.id];
  const gpxFileName = gpxHref.split("/").pop() ?? "route.gpx";
  const { statLabels } = content;
  const imageFiles = HIKING_ROUTE_IMAGES[route.id] ?? [];
  const mapEmbedUrl = HIKING_ROUTE_MAPS[route.id];
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
              <span className="hiking-route__pill">{stats.duration}</span>
              <span className="hiking-route__pill">{stats.length}</span>
              <span className="hiking-route__pill">{route.difficulty}</span>
            </span>
          </span>
          <span className="hiking-route__toggle-label">{toggleLabel}</span>
        </button>
        <GpxDownload
          href={gpxHref}
          fileName={gpxFileName}
          label={content.gpxDownloadLabel}
          hint={content.gpxHint}
        />
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="hiking-route__panel"
        hidden={!isOpen}
      >
        <div className="hiking-route__panel-inner">
          <div className="hiking-route__block">
            <h4 className="hiking-route__block-title">
              {content.destinationHeading}
            </h4>
            {route.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="hiking-route__text">
                {paragraph}
              </p>
            ))}
            {imageFiles.length > 0 ? (
              <ul className="hiking-route__photos">
                {imageFiles.map((file, index) => (
                  <li key={file} className="hiking-route__photo">
                    <Image
                      src={hikingRouteImageSrc(route.id, file)}
                      alt={route.imageAlts[index] ?? route.title}
                      width={1200}
                      height={800}
                      className="hiking-route__photo-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="hiking-route__block">
            <h4 className="hiking-route__block-title">
              {content.trailHeading}
            </h4>
            {route.paragraphs.map((paragraph) => (
              <p key={paragraph} className="hiking-route__text">
                {paragraph}
              </p>
            ))}
          </div>

          {mapEmbedUrl ? (
            <div className="hiking-route__block">
              <h4 className="hiking-route__block-title">{content.mapHeading}</h4>
              <div className="hiking-route__map">
                <iframe
                  src={mapEmbedUrl}
                  title={`${route.title} — ${content.mapHeading}`}
                  loading={preloadMaps ? "eager" : "lazy"}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          <div className="hiking-route__stats-wrap">
            <h4 className="hiking-route__stats-title">{content.statsHeading}</h4>
            <dl className="hiking-route__stats">
              <StatItem label={statLabels.duration} value={stats.duration} />
              <StatItem
                label={statLabels.startElevation}
                value={stats.startElevation}
              />
              <StatItem
                label={statLabels.endElevation}
                value={stats.endElevation}
              />
              <StatItem
                label={statLabels.minElevation}
                value={stats.minElevation}
              />
              <StatItem
                label={statLabels.maxElevation}
                value={stats.maxElevation}
              />
              <StatItem label={statLabels.ascent} value={stats.ascent} />
              <StatItem label={statLabels.descent} value={stats.descent} />
              <StatItem label={statLabels.length} value={stats.length} />
              <StatItem label={statLabels.avgGrade} value={stats.avgGrade} />
              <StatItem label={statLabels.energy} value={stats.energy} />
              <StatItem
                label={statLabels.difficulty}
                value={route.difficulty}
              />
              <StatItem label={statLabels.marking} value={route.marking} />
              <StatItem
                label={statLabels.activityType}
                value={route.activityType}
              />
            </dl>

            <div className="hiking-route__seasons">
              <span className="hiking-route__seasons-label">
                {statLabels.seasons}
              </span>
              <ul className="hiking-route__seasons-list">
                {route.seasons.map((season) => (
                  <li key={season} className="hiking-route__season">
                    {season}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function HikingRoutesSection({
  content,
  showPageHeader,
  compact,
  initialOpenId,
  preloadMaps,
}: Props) {
  const baseId = useId();
  const [openId, setOpenId] = useState<HikingRouteId | null>(
    initialOpenId === undefined
      ? (content.routes[0]?.id ?? null)
      : initialOpenId
  );
  const routeRefs = useRef<Partial<Record<HikingRouteId, HTMLElement>>>({});

  const scrollRouteIntoView = (routeId: HikingRouteId) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        routeRefs.current[routeId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  const handleToggle = (routeId: HikingRouteId) => {
    const willOpen = openId !== routeId;
    setOpenId((current) => (current === routeId ? null : routeId));
    if (willOpen) {
      scrollRouteIntoView(routeId);
    }
  };

  return (
    <section
      className={`hiking flat-section flat-section--tint${showPageHeader ? " flat-section--page" : ""}`}
      aria-label={content.title}
    >
      <div className="flat-wrap">
        {compact ? null : showPageHeader ? (
          <PageHeader title={content.title} intro={content.intro} id="hiking-title" />
        ) : (
          <>
            <h2 id="hiking-title" className="flat-section__title">
              {content.title}
            </h2>
            <p className="flat-section__intro">{content.intro}</p>
          </>
        )}

        <div className="hiking__routes">
          {content.routes.map((route) => {
            const isOpen = openId === route.id;
            const panelId = `${baseId}-panel-${route.id}`;
            const triggerId = `${baseId}-trigger-${route.id}`;

            return (
              <HikingRouteItem
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
                preloadMaps={preloadMaps}
                onToggle={() => handleToggle(route.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
