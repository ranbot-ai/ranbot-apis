export const generateScreenshot = async (
  page: any,
  pageUrl: string,
  waitForSelector?: string,
  waitForTimeout?: number
) => {
  await page.goto(pageUrl, {
    waitUntil: "networkidle2",
    timeout: 20000,
  });

  let clientHeight = 1024;
  clientHeight = await page.evaluate(() =>
    document.body ? document.body.clientHeight + 80 : 1024
  );

  let viewPort = { width: 1280, height: clientHeight, deviceScaleFactor: 2 };
  if (viewPort.height > 2000) {
    viewPort.height = 2000;
  }
  await page.setViewport(viewPort);
  page.setDefaultNavigationTimeout(20000);

  // Set up dialog handler before navigation
  page.on("dialog", async (dialog: any) => {
    await dialog.dismiss();
  });

  if (waitForSelector) {
    await page.waitForSelector(waitForSelector, { timeout: 10000 });
  }
  if (waitForTimeout) {
    // Use a simple delay for waitForTimeout
    await new Promise((resolve) => {
      setTimeout(resolve, waitForTimeout);
    });
  }

  await page.emulateMediaType("screen");
  const buffer = await page.screenshot({
    type: "png",
    fullPage: true,
    quality: 100,
  });

  return buffer as Buffer;
};
