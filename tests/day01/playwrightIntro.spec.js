//const {test} = require('@playwright/test');
import {test} from "@playwright/test";

test("Simple google test", async ({page}) => {
    // Test code goes here

  await page.goto("https://www.google.com")

  await page.waitForTimeout(2000);

});



