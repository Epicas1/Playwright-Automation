import { test, describe } from '@playwright/test';

describe('Test Group', () => {
  //create beforeEach to navigate to https://the-internet-5chk.onrender.com/javascript_alerts");
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
  });

  test("Regular Alert", async ({ page }) => {
    //Regualar Alert is handled automatically by Playwright, 
    // so we just need to click the button to trigger the alert and it will 
    // be dismissed automatically.
    page.on("dialog",async (alert)=>{
        console.log(`Alert Message: ${alert.message()}`); // to print the message of the alert
        await alert.accept(); // to accept the alert
    });

    let clickforJsAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickforJsAlertButton.click();

  });

  test("Confirmation Alert", async ({ page }) => {
    //Confirmation Alert is manually handled, use on() method to handle 
    //the alert and dismiss/accept it.

    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`); // to print the message of the alert
      await alert.dismiss(); // to dismiss the alert
    });

    let clickforJsConfirmButton = page.locator(
      "//button[@onclick='jsConfirm()']",
    );
    await clickforJsConfirmButton.click();
  });

  test("Prompt Alert", async ({ page }) => {
//Prompt Alert is manually handled, use on() method to handle the alert and 
// send text to it, then accept it.

page.on("dialog", async (alert) => {

  console.log(`Alert Message: ${alert.message()}`); // to print the message of the alert
  await alert.accept("CYDEO"); // to accept the alert and send text to it
});

let clickforJsPromptButton = page.locator("//button[@onclick='jsPrompt()']");
await clickforJsPromptButton.click();


  });
});