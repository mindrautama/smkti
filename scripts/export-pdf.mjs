import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, "../APMS_Framework_2026.pdf");
const BASE_URL = "http://localhost:3020";
const TOTAL_SLIDES = 17; // 0-indexed: 0 to 16

async function exportPDF() {
  console.log("🚀 Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log(`📄 Navigating to ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 30000 });

  // Wait for first slide to render
  await page.waitForSelector(".slide", { timeout: 10000 });
  await new Promise((r) => setTimeout(r, 2000));

  const screenshots = [];

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`📸 Capturing slide ${i + 1}/${TOTAL_SLIDES}...`);

    // Navigate to slide via clicking indicator dots
    if (i > 0) {
      // Click the i-th indicator dot
      const dots = await page.$$(".indicator-dot");
      if (dots[i]) {
        await dots[i].click();
      } else {
        // Fallback: press right arrow
        await page.keyboard.press("ArrowRight");
      }
      // Wait for animation
      await new Promise((r) => setTimeout(r, 800));
    }

    // Capture screenshot as buffer
    const screenshot = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });
    screenshots.push(screenshot);
  }

  console.log("📝 Generating PDF from captured slides...");

  // Create a new page for PDF generation
  const pdfPage = await browser.newPage();

  // Build an HTML page with all screenshots as images
  const imageDataUrls = screenshots.map(
    (buf) => `data:image/png;base64,${buf.toString("base64")}`
  );

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; }
    body { background: white; }
    .slide-page {
      width: 1920px;
      height: 1080px;
      page-break-after: always;
      overflow: hidden;
    }
    .slide-page:last-child {
      page-break-after: auto;
    }
    .slide-page img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  </style>
</head>
<body>
  ${imageDataUrls
      .map(
        (url) => `
    <div class="slide-page">
      <img src="${url}" />
    </div>
  `
      )
      .join("")}
</body>
</html>`;

  await pdfPage.setContent(html, { waitUntil: "load" });

  await pdfPage.pdf({
    path: OUTPUT_PATH,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log(`✅ PDF saved to: ${OUTPUT_PATH}`);

  await browser.close();
}

exportPDF().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
