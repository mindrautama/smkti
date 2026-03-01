import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, "../APMS_Framework_2026.pdf");
const BASE_URL = "http://localhost:3000";
const TOTAL_SLIDES = 53;

async function exportPDF() {
  console.log("🚀 Launching browser...");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  console.log(`📄 Navigating to ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 60000 });

  // Hide the floating navigation buttons and slide nav bar to keep PDF clean
  await page.evaluate(() => {
    const navButtons = document.querySelectorAll('button');
    navButtons.forEach(btn => btn.style.display = 'none');

    // Attempt to hide sidebar/navbars in case it is open
    const elementsToHide = document.querySelectorAll('.slide-footer, .sidebar'); // Or specific classes used for nav
    elementsToHide.forEach(el => el.style.opacity = '0');
  });

  await new Promise((r) => setTimeout(r, 2000));

  console.log("📝 Generating PDF from DOM...");

  // First we need to get everything scrolled and loaded before printing
  // Since it might be a single page app rendering on keydown, we will programmatically export
  const screenshots = [];

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`📸 Capturing slide ${i + 1}/${TOTAL_SLIDES}...`);

    if (i > 0) {
      await page.keyboard.press("ArrowRight");
      await new Promise((r) => setTimeout(r, 1000));
    }

    const screenshot = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    screenshots.push(screenshot);
  }

  console.log("📝 Assembling PDF...");
  const pdfPage = await browser.newPage();

  const imageDataUrls = screenshots.map(
    (buf) => `data:image/png;base64,${buf.toString("base64")}`
  );

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: white; margin: 0; }
    @page { margin: 0; size: 1920px 1080px; }
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
      width: 1920px;
      height: 1080px;
      object-fit: contain;
    }
  </style>
</head>
<body>
  ${imageDataUrls.map(url => `<div class="slide-page"><img src="${url}" /></div>`).join("")}
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
