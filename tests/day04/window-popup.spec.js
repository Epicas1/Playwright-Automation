import { expect, test } from "@playwright/test";

test("Window popup practice", async ({ page }) => {

    //creating event listner for monitoring window pop-up, use waitForEvent() method 
    // to wait for the popup event to occur and store the promise in a variable
    //no await is needed here because we want to start waiting for the popup event
    //  before it happens, so that we don't miss it when it occurs. 
    // We will await this promise later after we trigger the popup event.
    let promiseNewPageEvent = page.waitForEvent("popup")

    await page.goto("https://the-internet-5chk.onrender.com/windows");

    await page.click("text=Click Here"); // to click the link that triggers the popup Event

    let newPage = await promiseNewPageEvent; // to wait for the popup event to occur and get the new page object

    await expect(newPage).toHaveTitle("New Window"); // to verify that the title of the new page is "New Window"
    await expect(page).toHaveTitle("Windows"); // to verify that the title of the original page is "Windows"

    let firstWindowElement = page.getByText("opening a new window"); // to click the link that triggers the popup Event
    await expect(firstWindowElement).toBeVisible(); // to verify that the text content of the element is "Click Here"

    
    let secondWindowElement = newPage.getByText("New Window"); // to click the link that triggers the popup Event
    await expect(secondWindowElement).toBeVisible(); // to verify that the text content of the element is "New Window"




});
