import test from "@playwright/test";

test("facebook test case", async({page})=>
{
     
     await page.goto("https://www.facebook.com/");

     //identify the email address & phone number field and enter the some text
     //below are the playwright locators using

     //await page.getByLabel("Email address or mobile number").fill("chaitanya@123");
     //or
     
     await page.getByText("Email address or mobile numberq").fill("chaitanya@1244");
     await page.waitForTimeout(2000); //in the last added for video recording we can see - video availbel and trace also give more info about fail in use in config.ts
}
)// command for run this show trace : npx playwright show-trace test-results\session3-facebook-test-case-chromium\trace.zip