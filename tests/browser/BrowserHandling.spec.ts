
import { test, expect } from '@playwright/test';

test('Handling browsers',async ({ page }) => {

await page.goto("https://senthilsmartqahub.blogspot.com/2026/09/employeehrportal.html")

await page.getByText("HR Support").first().click()

await page.getByText("Raise HR Request").click()

await page.waitForTimeout(5000)
const pages=page.context().pages()
console.log(pages.length)


//EmployeeHRPortal
//HR Support Request
for(const window of pages)
{

   const pagetitle= await window.title()

    console.log(pagetitle)

    if(pagetitle=="HR Support Request")
    {
        await window.locator("#requestDescription").fill("Leave request")
        await page.waitForTimeout(5000)
       // await window.close();// child window closed
    }

}
await page.waitForTimeout(5000)
await page.bringToFront();

await page.getByText("Dashboard").nth(1).click()


await page.waitForTimeout(5000)
await page.context().close()//close all browsers 
})