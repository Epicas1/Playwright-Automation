// to Bypass authentication by embedding credentials in the Url, we can use the following format:
// https://username:password@ url.com
// to Bypass authentication by encoding credentials base64 formate, we can use the following steps:
// 1- encode the credentials in base64 format using Buffer.from("username:password").toString("base64")
// 2- set the Authorization header with the encoded credentials using page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`})
// 3- navigate to the url that requires authentication using page.goto("url")
import { test } from '@playwright/test';

test('Bypass authentication by embedding credentials in the Url', async ({ page }) => {

  //https://username:password@the-internet-5chk.onrender.com
  await page.goto("https://admin:admin@the-internet-5chk.onrender.com");

});

test('bypass authentication by encoding credentials base64 formate', async ({ page }) => {

    let encodedCredentials = Buffer.from("admin:admin").toString("base64"); 
    // to encode the credentials in base64 format
    
    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`}); 
    // to set the Authorization header with the encoded credentials

    await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});

