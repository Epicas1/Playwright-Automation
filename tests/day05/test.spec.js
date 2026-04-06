import { test, expect } from "@playwright/test";

test("Verify all links under ul are displayed and enabled", async ({
  page,
}) => {
  // step 1 & 2: Open browser and navigate
  await page.goto("https://the-internet-5chk.onrender.com/");

  // step 3: The url should contain "the-internet"
  await expect(page).toHaveURL(/.*the-internet.*/);

  // step 4: The title should be "Practice"
  await expect(page).toHaveTitle("Practice");

  // step 5: All the links under the ul HTML tag are visible and clickable.
  const links = page.locator("//ul[@class='list-group']//a");
  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);

    // Check link is visible
    await expect(link).toBeVisible();

    // Check link is enabled (clickable)
    await expect(link).toBeEnabled();

  }
});


test('Search CYDEO on Google', async ({ page }) => {
  // Step 1 & 2: Navigate to Google
  await page.goto('https://google.com');
  
  // Step 3: Verify title is "Google"
  await expect(page).toHaveTitle('Google');
  
  // Step 4: Enter "Cydeo" in searchbox and press Enter
  await page.locator('//textarea[@class=\'gLFyf\']').fill('Cydeo');
  await page.locator('//textarea[@class=\'gLFyf\']').press('Enter');
  
  // Step 5: Verify page title contains "CYDEO"
  await expect(page).toHaveTitle(/CYDEO/);
});
