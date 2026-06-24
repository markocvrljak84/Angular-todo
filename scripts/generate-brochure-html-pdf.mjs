import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const root = path.resolve(import.meta.dirname, "..");
const locales = ["en", "hr", "de", "fr", "it"];

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function resolveChrome() {
  const found = chromeCandidates.find((p) => p && existsSync(p));
  if (!found) {
    throw new Error(
      "Chrome/Chromium not found. Set CHROME_PATH or install Google Chrome.",
    );
  }
  return found;
}

/**
 * Render brochure HTML to PDF matching on-screen layout (screen media, backgrounds, web fonts).
 */
async function htmlToPdf(htmlFile, pdfFile) {
  const browser = await puppeteer.launch({
    executablePath: resolveChrome(),
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=medium"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 2 });

    const htmlPath = path.join(root, htmlFile);
    await page.goto(`file://${htmlPath}`, {
      waitUntil: "networkidle0",
      timeout: 120_000,
    });

    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 30_000 }).catch(() => {});

    // Screen styling — not @media print overrides
    await page.emulateMediaType("screen");

    await page.pdf({
      path: pdfFile,
      printBackground: true,
      preferCSSPageSize: false,
      landscape: true,
      format: "A4",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      scale: 1,
    });
  } finally {
    await browser.close();
  }
}

const localeArg = process.argv[2];
const targets = localeArg ? [localeArg] : locales;

await mkdir(path.join(root, "public/brochures"), { recursive: true });

for (const locale of targets) {
  const htmlFile =
    locale === "hr" ? "velebit-brosura.html" : `velebit-brosura-${locale}.html`;
  const htmlPath = path.join(root, htmlFile);

  if (!existsSync(htmlPath)) {
    console.warn(`Skip ${locale}: missing ${htmlFile}`);
    continue;
  }

  const pdfFile = path.join(root, "public/brochures", `velebit-${locale}.pdf`);
  await htmlToPdf(htmlFile, pdfFile);
  console.log(`Wrote public/brochures/velebit-${locale}.pdf`);
}
