//To handle the iframes in Playwright we have to use the 
// frameLocator() method to switch to the iframe and then we can interact 
// with the elements inside the iframe using the frame locator with either Xpath or CSS or ID.

import { test,expect } from '@playwright/test';

test('Iframes Test', async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/iframe");

    //locate the iframe and get locator to interact with the elements inside the iframe 

    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
    //using the frame locator to switch to the iframe using the locator of the iframe element

    let elementInsideTheIFrame = myFrame.locator("//body[@id='tinymce']");
    //using the frame locator to locate the body element from inside the iframe

    //await elementInsideTheIFrame.clear(); // to clear the text before typing
    await elementInsideTheIFrame.press("Control+A","Backspace"); // to select all the text inside the body element,and backspace to clear it

    await elementInsideTheIFrame.fill("Hello World!"); // to type text inside the body element

    await expect(elementInsideTheIFrame).toHaveText("Hello World!"); // to verify that the text is typed correctly inside the body element
  
});