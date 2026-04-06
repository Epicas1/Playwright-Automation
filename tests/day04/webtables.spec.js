import { expect, test } from "@playwright/test";

test("Web tables practice", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/web-tables");

    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");// to locate the table element using its id attribute
    
    let rows = await table.locator("//tr").all();// to get all the rows in the table, including the header row

   let columns = await table.locator("//th").all();// to get all the columns in the table, which are represented by the <th> elements

   let cells = await table.locator("//td").all();// to get all the cells in the table, which are represented by the <td> elements
    
   expect(rows.length).toBe(9); // to check the number of rows in the table
    expect(columns.length).toBe(13); // to check the number of columns in the table
    expect(cells.length).toBe(104); // to check the number of cells in the table

    for(let cell of cells){
        console.log(await cell.textContent()); // to print the text content of each cell in the table
    }

});


test("Web table 2", async ({ page }) => {

  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']"); 

    let rows = await table.locator("//tr").all();

    //create a for each loop that can print each cells data of each row  
    for(let row of rows){
        let cells = await row.locator("//td").all(); // to get all the cells in the current row
          for (let i = 1; i < cells.length - 1; i++) {
            console.log(await cells[i].textContent());
          }
          console.log("--------------------------------------");
        }

});

test("Checkbox table data", async ({ page }) => {

let checkboxes = await table.locator("//input[@type= 'checkbox']").all();

for(let checkbox of checkboxes){
    await checkbox.check(); // to check each checkbox in the table
    await expect(checkbox).toBeChecked(); // to verify that each checkbox is checked
}

});