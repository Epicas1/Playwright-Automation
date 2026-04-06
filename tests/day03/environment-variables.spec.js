// to access environment variables in Playwright, we can use process.env.VARIABLE_NAME
// to set environment variables, we can use the command line or we can use a .env file in the root of the project
// to set environment variables using the command line, we can use the following command:
// PRACTICE_USERNAME=your_username PRACTICE_PASSWORD=your_password npx playwright test

//to set environment variable we go to user settings in VS code and add the following lines to the settings.json file:
/*
  "terminal.integrated.env.osx": {
    "PRACTICE_USERNAME": "your_username",
    "PRACTICE_PASSWORD": "your_password"
  }
  */
import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {
  //console.log(process.env.PRACTICE_USERNAME);
  //console.log(process.env.PRACTICE_PASSWORD);

  console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
});

test("bypass authentication by encoding credentials base64 formate", async ({
  page,
}) => {
  let encodedCredentials = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
  ).toString("base64");
  // to encode the credentials in base64 format

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  // to set the Authorization header with the encoded credentials

  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});
