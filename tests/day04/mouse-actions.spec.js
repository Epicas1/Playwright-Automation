import { test, describe } from '@playwright/test';

test.describe('Mouse tests', () => {

    //create a beforeEach to navigate to https://the-internet-5chk.onrender.com before each test
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com/");
    });

  test('Left Click', async ({ page }) => {
    // to perform a left click on an element in Playwright we can use the click() method.

    await page.click("text='A/B Testing'"); // to click on the link with text 'A/B Testing'
  });

  test('Right Click', async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });// to right click on the link with text 'A/B Testing'
  });

  test('Hovering', async ({ page }) => {
    // to hover over an element in Playwright we can use the hover() method.
   
    page.click("text='Hovers'"); // to click on the link with text 'Hovers'
    
    await page.hover("//img[@alt='User Avatar']"); // to hover over the first image with alt text
    //  'User Avatar'

    let elements = await page.locator("//img[@alt='User Avatar").all(); // to get all the images with alt text 'User Avatar'

    for(let each of elements){
        await each.hover(); // to hover over each image
    }
  });

  test("Mouse wheel scrolling", async ({ page }) => {
    // to scroll down the page by 1000 pixels using the mouse wheel

    page.mouse.wheel(0, 1000); // to scroll down the page by 1000 pixels
  });

  test('Scrolling to specific coordinates', async ({ page }) => {

    let inputLink =page.getByText("Inputs");
    inputLink.scrollIntoViewIfNeeded(); // to scroll to the link with text 'Inputs'

    await inputLink.click(); // to click on the link with text 'Inputs'
  }); 

  test('Drag and Drop', async ({ page }) => {
    // to perform drag and drop action in Playwright we can use the dragAndDrop() method 
    // or we can use the dragTo() method.

    page.click("text='Drag and Drop'"); // to click on the link with text 'Drag and Drop'

    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']"); 
    // to drag the element with id 'column-a' and drop it on the element with id 'column-b'
    
    let squareA = page.locator("//div[@id='column-a']");
    let squareB = page.locator("//div[@id='column-b']");

    await squareA.dragTo(squareB); // to drag the element with id 'column-a' and drop it on the element with id 'column-b'

  });  


});