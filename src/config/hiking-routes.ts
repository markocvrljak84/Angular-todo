/** GPX tracks under /public/gpx — one entry per route. */
export const HIKING_GPX = {
  "bacic-kuk": "/gpx/bacic-duliba-bacic-kuk.gpx",
  "budakovo-brdo": "/gpx/budakovo-brdo.gpx",
  "kiza": "/gpx/baske-ostarije-kiza.gpx",
} as const;

export type HikingRouteId = keyof typeof HIKING_GPX;

export type HikingRouteStats = {
  duration: string;
  startElevation: string;
  endElevation: string;
  minElevation: string;
  maxElevation: string;
  ascent: string;
  descent: string;
  length: string;
  avgGrade: string;
  energy: string;
};

export const HIKING_ROUTE_STATS: Record<HikingRouteId, HikingRouteStats> = {
  "bacic-kuk": {
    duration: "01 h 01 min",
    startElevation: "874 m",
    endElevation: "1252 m",
    minElevation: "872 m",
    maxElevation: "1258 m",
    ascent: "423 m",
    descent: "46 m",
    length: "2.1 km",
    avgGrade: "27 %",
    energy: "2171 kJ",
  },
  "budakovo-brdo": {
    duration: "01 h 09 min",
    startElevation: "888 m",
    endElevation: "1313 m",
    minElevation: "886 m",
    maxElevation: "1314 m",
    ascent: "561 m",
    descent: "136 m",
    length: "3.3 km",
    avgGrade: "26 %",
    energy: "2449 kJ",
  },
  kiza: {
    duration: "00 h 47 min",
    startElevation: "1031 m",
    endElevation: "1268 m",
    minElevation: "1030 m",
    maxElevation: "1270 m",
    ascent: "306 m",
    descent: "69 m",
    length: "1.2 km",
    avgGrade: "34 %",
    energy: "1679 kJ",
  },
};

/** Google My Maps embed URLs — optional per route. */
export const HIKING_ROUTE_MAPS: Partial<Record<HikingRouteId, string>> = {
  "bacic-kuk":
    "https://www.google.com/maps/d/embed?mid=1HIUCYU2ioO-qke1YCdc7KR0hLV4",
  "budakovo-brdo":
    "https://www.google.com/maps/d/embed?mid=1Jwo5UCxzKq_OkNvoQDdAeOwdW4s",
  kiza: "https://www.google.com/maps/d/embed?mid=zvlHyPth0aUc.kwkEVEXKDGP0",
};

/** Route photos under /public/img — filenames only; folder defaults to route id. */
export const HIKING_ROUTE_IMAGE_DIRS: Partial<Record<HikingRouteId, string>> =
  {
    "budakovo-brdo": "budakovo",
  };

/** Route photos under /public/img — filenames only, folder per route id. */
export const HIKING_ROUTE_IMAGES: Partial<
  Record<HikingRouteId, readonly string[]>
> = {
  "bacic-kuk": [
    "IMG_20230913_142508.jpg",
    "img1.jpeg",
    "lmg2.jpeg",
    "images.jpeg",
  ],
  "budakovo-brdo": [
    "velebit-planinarenje-izlet-vikend-putovanje-budakovo-brdo-prikinuto-brdo-visibaba-06.jpg",
    "velebit-planinarenje-izlet-vikend-putovanje-budakovo-brdo-prikinuto-brdo-visibaba-11.jpg",
    "velebit-planinarenje-izlet-vikend-putovanje-budakovo-brdo-prikinuto-brdo-visibaba-18.jpg",
  ],
  kiza: [
    "kt6_kiza7.jpg",
    "eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTI2MjY1NDUwL2VjNDRlM2QzMzkwMjQzY2Q5OGJiY2M4ZGNlMTE2YjExLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjEwODAiLCJoZWlnaHQiOiI3MDAiLCJmaXQ.webp",
  ],
};

export function hikingRouteImageSrc(
  routeId: HikingRouteId,
  file: string
): string {
  const dir = HIKING_ROUTE_IMAGE_DIRS[routeId] ?? routeId;
  return `/img/${dir}/${file}`;
}

export const HIKING_ROUTE_IDS = Object.keys(HIKING_GPX) as HikingRouteId[];
