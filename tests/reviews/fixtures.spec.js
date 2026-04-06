import { test,firefox } from '@playwright/test';

test('Context Fixture test', async ({ context }) => {
    //context fixture will create a new instance of the browser window with multiple pages parallel  
    // with each other and can run in parallel without issues.
    
    let page1 = await context.newPage();
    await page1.goto("https://the-internet-5chk.onrender.com/");

    
    let page2 = await context.newPage();
     const encoded_credential = Buffer.from(`${process.env.SEP_QA_USERNAME}:${process.env.SEP_QA_PASSWORD}`,).toString("base64");
     await page2.setExtraHTTPHeaders({ Authorization: `Basic ${encoded_credential}`,});
     await page2.goto(`${process.env.SEP_QA_URL}`);

     let page3 = await context.newPage();
     await page3.goto ('https://cydeo.com');

    page1.bringToFront(); //will bring the page1 to the front and make it active

    page2.bringToFront();
    //playwright will automatically switch to the page that is being interacted with, so we don't need to manually switch to the page2 to interact with it.
});


 test('Browser fixture Example', async ({ browser }) => {
    //browser fixture will create a new instance of the browser for each test and will not share the same browser instance with other tests. 
    //new instance will be opened for each test and will not share the same browser instance with other tests.
    let context1 = await browser.newContext();

    let page1 = await context1.newPage();
    await page1.goto("https://the-internet-5chk.onrender.com/");

    let page2 = await context1.newPage();
    const encoded_credential = Buffer.from(`${process.env.SEP_QA_USERNAME}:${process.env.SEP_QA_PASSWORD}`,).toString("base64");
    await page2.setExtraHTTPHeaders({Authorization: `Basic ${encoded_credential}`,});
    await page2.goto(`${process.env.SEP_QA_URL}`);

    let context2 = await browser.newContext();

    let page3 = await context2.newPage();
    await page3.goto ('https://cydeo.com');


    
});

test("Custom Configurations", async ({}) => {
    // leave fixture empty for custom configurations. if we put a fixture it will
    // overide the global configuration and will not use the global configuration for that test. so we can leave the fixture empty for custom configurations and it will use the global configuration for that test.   

    let browser = await firefox.launch();

    let context = await browser.newContext();

    let page = await context.newPage();
    
    await page.goto("https://the-internet-5chk.onrender.com/");

});




