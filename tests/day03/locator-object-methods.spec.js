import { test } from '@playwright/test';

test.describe("Test Group", () => {
  
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet-5chk.onrender.com/');
        
    });

test('Check(): checks the radio button and checks boxes if they havent been checked yet/', async ({ page }) => {
    let checkboxLink = page.getByText('Checkboxes');// to locate the link of the checkboxes page and click on it to navigate to the checkboxes page
    await checkboxLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");

    await checkbox1.check();
});

test("Uncheck(): checks the radio button and checks boxes if they havent been unchecked yet", async ({
  page,
}) => {let checkboxLink = page.getByText("Checkboxes");// to locate the link of the checkboxes page and click on it to navigate to the checkboxes page
await checkboxLink.click();

let checkbox2 = await page.locator("//input[@id='box2']").uncheck();

});

test('SelectOption() used for dropdown boxes with select tagname', async ({ page }) => {

    let dropdownLink = await page.getByText('Dropdown').click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    //await simpleDropdown.selectOption("2"); //select by value
    //await simpleDropdown.selectOption({ label: "Option 2" }); //select by text
    await simpleDropdown.selectOption({ index: 2 }); //select by index





});
});