import { test } from '@playwright/test';

test('getting the title of the page', async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com");

    let actualTitle = await page.title();


   console.log(actualTitle);

});
test("Getting the current url of the page", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com");

    let actualUrl = page.url();

    console.log(actualUrl);
});

test("Set the window size", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com");

    await page.waitForTimeout(2000);

    //await page.setViewportSize({ width: 400, height: 400 });

    //await page.waitForTimeout(2000);


});