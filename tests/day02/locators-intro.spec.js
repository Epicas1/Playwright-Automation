import {test} from "@playwright/test";

test("Simple google test @wip", async ({page}) => {

  await page.goto("https://www.google.com")

  await page.waitForTimeout(2000);

  let searchBox = page.locator("textarea[name='q']");

  await page.waitForTimeout(2000);

  await searchBox.fill("Cydeo");

 await page.waitForTimeout(2000);

 await searchBox.press("Enter");


 await page.waitForTimeout(2000);
    
});


/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search"
 value="" aria-label="Search" placeholder="" 
 aria-autocomplete="both" aria-expanded="false" 
 aria-haspopup="false" autocapitalize="off"
  autocomplete="off" autocorrect="off" id="APjFqb"
   maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" 
   data-ved="0ahUKEwjtrb-E_6eTAxUOD1kFHcyzD20Q39UDCCg"></textarea>

*/

//textarea[@class = 'gLFyf']