import { test,expect } from '@playwright/test';

test.describe("Test Group Expect ", () => {
// when verifying elements on the page,
//we can use expect assertion or we can use regular assertion with if statement and boolean conditions.

//expect assertion is more readable and provides better error messages when the assertion fails.
// regular assertion with if statement is less readable and does not provide good error messages when the assertion fails.

// we can use expect assertion to verify the title of the page, the state of the checkboxes and the visible text of the element.

  //create beforeEach to navigate to https://the-internet-5chk.onrender.com");
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com");

        await expect(page).toHaveTitle("Practice");

        expect( await page.title()).toBe("Practice");

    });

  test("Verify checkbox is checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("//input[@id='box1']");
    let secondCheckbox = page.locator("//input[@id='box2']");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    //--------------------------------------------------------

    await firstCheckbox.isChecked();
    expect(await firstCheckbox.isChecked() ).toBeTruthy();
    expect(await secondCheckbox.isChecked() ).toBeTruthy();

  });

  test("Verify checkbox is unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("//input[@id='box1']");
    let secondCheckbox = page.locator("//input[@id='box2']");

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect (firstCheckbox).not.toBeChecked();
    await expect (secondCheckbox).not.toBeChecked();

    //--------------------------------------------------------

    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();


  });

  test("Verify visible text of the element", async ({ page }) => {
    let headerElemnt = page.locator("//span[@class='h1y']");

    await expect(headerElemnt).toHaveText("Test Automation Practice");

    let actualText = await headerElemnt.innerText();
    
    expect(actualText).toEqual("Test Automation Practice");

  });
});