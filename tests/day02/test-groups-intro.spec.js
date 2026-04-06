import {test} from "@playwright/test";

test.describe("User Stories", () => {

    test.beforeAll(async () => {
        console.log("Before All test cases");
    });

    test.afterAll(async () => {
        console.log("After All test cases");
    });

    test.beforeEach(async () => {
        console.log("Before Each test case");
    });

    test.afterEach(async () => {
        console.log("After Each test case");
    });

    test ("Test Group 1",async () => {
        console.log("Test Case 1 is excuted");
    });

    test ("Test Group 2",async () => {
        console.log("Test Case 2 is excuted");
    }); 

    test ("Test Group 3",async () => {
        console.log("Test Case 3 is excuted");
    });
    
    test ("Test Group 4",async () => {      
        console.log("Test Case 4 is excuted");
    });

});

