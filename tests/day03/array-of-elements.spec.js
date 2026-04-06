//To locate Mulitple Elemnts we use a locator that locates ALL the elements
// and then we can use the all() method to get an array of locators for all 
// the elements that match the locator.
// to get the number of elements that match the locator, we can use the length property of the array of locators.
// to verify that each element in the array of locators is visible, we can use a loop to iterate through the array and use the toBeVisible() assertion for each element.
// to verify that each element in the array of locators is clickable, we can use a loop to iterate through the array and use the toBeEnabled() assertion for each element.
// to verify that each element in the array of locators has a href attribute, we can use a loop to iterate through the array and use the toHaveAttribute() assertion for each element.


import { expect, test } from '@playwright/test';
import { expectFailure } from 'node:test';

test.describe("Test Group", () => {

  let elements;

  //create beforeEach to navigate to https://the-internet-5chk.onrender.com");
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com");
        elements = await page.locator("//ul[@class='list-group']//a").all();

    });
     
  test(" Verify that there are excatly 50 link elements within the <ul> tag.", async ({page,}) => {

   expect(elements.length).toBe(50);

   //expect(elements.length).toBeGreaterThan(20);

  });

  test("Verify that each of the 50 link elements within the <ul> is visible & clickable. ", async ({page,}) => {

    for(let e of elements){
      await expect(e).toBeVisible(); // to check if the element is visible
      expect(await e.isVisible()).toBeTruthy();
      //--------------------------------------
      await expect(e).toBeEnabled(); // to check if the element is enabled
      expect(await e.isEnabled()).toBeTruthy();
    }
  
  });

  test(" Verify that each of the 50 link elements within the <ul> has a href attribute.", async ({page, }) => {

    for(let e of elements){
      await expect(e).toHaveAttribute("href");// to check if the element has the href attribute

      console.log(await e.getAttribute("href"));// to print the value of the href attribute for each element
   
    }
  });
});

/* 
1. Verify that there are excatly 50 link elements within the <ul> tag.

2. Verify athat each of the 50 link elements within the <ul> is visible & clickable.

3. Verify that each of the 50 link elements within the <ul> has a href attribute.
*/