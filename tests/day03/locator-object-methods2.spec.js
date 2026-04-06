import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("innerText()", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");

    let actualtext = await headerElement.innerText();

    console.log(actualtext);
  });

  test("inputValue(): only work with <input>, <textarea>, <select>, then retieves the input value ", async ({
    page,
  }) => {
    let inputLink = page.getByText("Input");
    await inputLink.click();

    await page.waitForTimeout(3000);

    const inputbox = await page.locator('//input[@type="number"]');

    await page.waitForTimeout(3000);

    await inputbox.fill("12345");

    await page.waitForTimeout(2000);

    let actualInput = await inputbox.inputValue();

    console.log(actualInput);
  });

  test("getAttribute(): retrives the attribute value", async ({ page }) => {
    let abTestingLink = page.locator("text= 'A/B Testing'");

    let hrefValue = await abTestingLink.getAttribute("href");

    console.log(hrefValue);
  });
});
