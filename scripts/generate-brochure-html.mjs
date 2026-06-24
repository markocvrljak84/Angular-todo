import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { brochureContent, locales } from "./brochure-html-translations.mjs";

const root = join(import.meta.dirname, "..");
const cssSource = readFileSync(join(root, "velebit-brosura.html"), "utf8");
const cssMatch = cssSource.match(/<style>([\s\S]*?)<\/style>/);
if (!cssMatch) throw new Error("Could not extract CSS from velebit-brosura.html");
let css = cssMatch[1].replace(
  ".cover__title {\n      font-size: clamp(3.5rem, 10vw, 7rem);",
  ".cover__title {\n      font-size: clamp(2rem, 7vw, 4.5rem);",
);

function section(num, { category, title, texts, details, meta, imageAlt, image, bodyClass = "", reverse = false, imgStyle = "" }) {
  const img = image || "velebit-brosura-assets/placeholder.jpg";
  const styleAttr = imgStyle ? ` style="${imgStyle}"` : "";
  const reverseClass = reverse ? " attraction--reverse" : "";
  const bodyExtra = bodyClass ? ` ${bodyClass}` : "";
  const detailsHtml = details?.length
    ? `<ul class="attraction__details">\n${details.map((d) => `        <li>${d}</li>`).join("\n")}\n      </ul>`
    : "";
  const metaHtml = meta?.length
    ? `<div class="attraction__meta">\n${meta.map((m) => `        <span>${m}</span>`).join("\n")}\n      </div>`
    : "";

  return `  <article class="attraction${reverseClass}">
    <div class="attraction__image">
      <img src="${image}" alt="${imageAlt}"${styleAttr} />
    </div>
    <div class="attraction__body${bodyExtra}">
      <div class="attraction__number">${num}</div>
      <p class="attraction__category">${category}</p>
      <h2 class="attraction__title">${title}</h2>
${texts.map((t) => `      <p class="attraction__text">${t}</p>`).join("\n")}
${detailsHtml}
${metaHtml}
    </div>
  </article>`;
}

function heroBand({ category, title, texts, imageAlt, image, id = "" }) {
  const idAttr = id ? ` id="${id}"` : "";
  return `  <section class="hero-band"${idAttr}>
    <div class="hero-band__bg">
      <img src="${image}" alt="${imageAlt}" />
    </div>
    <div class="hero-band__content">
      <p class="attraction__category">${category}</p>
      <h2 class="hero-band__title">${title}</h2>
${texts.map((t, i) => `      <p class="hero-band__text"${i > 0 ? ' style="margin-top: 1rem;"' : ""}>${t}</p>`).join("\n")}
    </div>
  </section>`;
}

function buildHtml(locale) {
  const c = brochureContent[locale];
  const { cover, intro, highlights, footer } = c;

  return `<!DOCTYPE html>
<html lang="${c.lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${c.pageTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>${css}
  </style>
</head>
<body>

  <header class="cover" id="top">
    <div class="cover__bg">
      <img src="velebit-brosura-assets/cover.jpg" alt="${cover.coverAlt}" />
    </div>
    <div class="cover__content">
      <p class="cover__eyebrow">${cover.eyebrow}</p>
      <h1 class="cover__title">${cover.headline}</h1>
      <p class="cover__subtitle">${cover.subline}</p>
      <div class="cover__host">
        <p class="cover__host-name">Stars Peak</p>
        <p class="cover__host-desc">${cover.hostDesc}</p>
      </div>
      <p class="cover__tagline">${cover.tagline}</p>
    </div>
    <a class="cover__scroll" href="#uvod">${cover.scroll}</a>
  </header>

  <section class="intro" id="uvod">
    <div class="intro__inner">
      <p class="intro__label">${intro.label}</p>
      <h2 class="intro__title">${intro.title}</h2>
      <p class="intro__text">${intro.text}</p>
      <div class="intro__stats">
${intro.stats.map((s) => `        <div class="intro__stat">
          <div class="intro__stat-value">${s.value}</div>
          <div class="intro__stat-label">${s.label}</div>
        </div>`).join("\n")}
      </div>
    </div>
  </section>

${section("01", { ...c.paklenica, image: "velebit-brosura-assets/paklenica.jpg" })}

${section("02", { ...c.zavratnica, image: "velebit-brosura-assets/zavratnica.jpg", bodyClass: "attraction--sand", reverse: true })}

${section("03", {
  ...c.premuzic,
  image: "velebit-brosura-assets/premuzic.jpg",
  bodyClass: "attraction--sand",
  imgStyle: "object-position: center 30%;",
})}

${section("04", { ...c.dabarski, image: "velebit-brosura-assets/dabarski-kukovi.jpg", reverse: true })}

${heroBand({ ...c.sjeverni, image: "velebit-brosura-assets/sjeverni-velebit.jpg" })}

${section("05", { ...c.zavizan, image: "velebit-brosura-assets/zavizan.jpg", bodyClass: "attraction--sand" })}

${section("06", { ...c.tulove, image: "velebit-brosura-assets/tulove-grede.jpg", reverse: true })}

${heroBand({ ...c.speleoHero, image: "velebit-brosura-assets/cerovacke-spilje.jpg", id: "speleologija" })}

${section("07", { ...c.cerovacke, image: "velebit-brosura-assets/cerovacke-spilje.jpg" })}

${section("08", { ...c.pag, image: "velebit-brosura-assets/pag.jpg", bodyClass: "attraction--sand", reverse: true })}

${section("09", { ...c.karlobag, image: "velebit-brosura-assets/karlobag.jpg" })}

  <section class="highlights">
    <div class="highlights__inner">
      <header class="highlights__header">
        <h2 class="highlights__title">${highlights.title}</h2>
        <p class="highlights__lead">${highlights.lead}</p>
      </header>
      <div class="highlights__grid">
${highlights.cards.map((card) => `        <div class="highlight-card">
          <div class="highlight-card__icon">${card.icon}</div>
          <h3 class="highlight-card__title">${card.title}</h3>
          <p class="highlight-card__text">${card.text}</p>
        </div>`).join("\n")}
      </div>
    </div>
  </section>

  <footer class="footer">
    <p class="footer__brand">Velebit mountain chalet Stars Peak</p>
    <p class="footer__tagline">${footer.tagline}</p>
    <p class="footer__credits">${footer.credits}</p>
  </footer>

</body>
</html>
`;
}

for (const locale of locales) {
  const suffix = locale === "hr" ? "" : `-${locale}`;
  const filename = `velebit-brosura${suffix}.html`;
  const outPath = join(root, filename);
  writeFileSync(outPath, buildHtml(locale), "utf8");
  console.log(`Wrote ${filename}`);
}
