//for runnning the test through terminal - command - npx playwright test tests/session2.spec.ts
//for runnning the test through terminal - command - npx playwright test tests/session2.spec.ts --headed
//to the run the specific test case in headed mode - command - npx playwright test tests/session2.spec.ts --grep "print the flipkart title" --headed                                           

import test from "@playwright/test";                //this for importing the test class from the playwright module. and this is used to create the test cases.
import { expect } from "@playwright/test";          //this for importing the expect class from the playwright module. and this is used to compare the actual and expected result.


test("print the flipkart title", async ({ page }) =>                //where test is method or test case (print title is test case) And
                                                                             
 {                                                                 //async is give the permsion to wait for the page to load.
                                                                  // page is the object of the page class which is used to perform the actions on the page.
    await page.goto("https://www.flipkart.com/") ;                //then this is the arrow function which is used to define the function. and below is the code
    let fetchedTitle = await page.title();                        // every time we need to await for the page to load before
    console.log(fetchedTitle);
 }

)

test("fetch the google title and print it", async ({page})=>                 

{
             await page.goto("https://www.google.com/");
             let googleTitle = await page.title();
             console.log(googleTitle);
}    
      
)

test("compare the google title", async({page})=> //command to the test case is - npx playwright test tests/session2.spec.ts --grep "compare the google title" --headed
{
    await page.goto("https://www.google.com/");
    let googleTitle = await page.title();
    expect(googleTitle).toBe("Google");
    
}
)


