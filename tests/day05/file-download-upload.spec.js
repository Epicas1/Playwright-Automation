import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs";

test("File download practice", async ({ page }) => {
  //created event listener for Downloading.
  let promiseDownloadEvent = page.waitForEvent("download"); // to wait for the download event to occur and store the promise in a variable

  page.goto("https://the-internet-5chk.onrender.com/download");

  await page.click("text=b10 all test cases, code.docx"); //will trigger the event

  let download = await promiseDownloadEvent;

  let downloadPath = path.join(
    __dirname,
    "./downloads",
    download.suggestedFilename(),
  ); // to specify the path where the downloaded file will be saved

  await download.saveAs(downloadPath); // to save the downloaded file to the specified path

  expect(fs.existsSync(downloadPath)).toBeTruthy(); // to verify that the downloaded file exists at the specified path

});

test("File upload", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/upload");

    let filePath = path.join(__dirname, "./uploads", "TestUpload.txt"); // to specify the path of the file to be uploaded

    await page.setInputFiles("//input[@id='file-upload']", filePath); // to set the file to be uploaded in the file input element

    await page.click("//input[@id='file-submit']"); // to click the submit button to upload the file

    await expect(page.getByText("File Uploaded!")).toBeVisible(); // to verify that the file upload was successful by checking for the presence of the "File Uploaded!" message on the page
   
});
