
import { test, expect } from '@playwright/test';

test('GetByText Locator1',async ({ page }) => {
    await page.goto("https://www.google.com/")
    // <a......>Gmail</a>
   // await page.getByText("Gmail").click()

    const Gmail_link=page.getByText("Gmail")
     await Gmail_link.click()

    await page.waitForTimeout(5000)
})

test('GetByText Locator2',async ({ page }) => {
    await page.goto("https://playwright.dev/")

    //await page.getByText("API",{exact:true}).click()

   //  await page.getByText("documentation").nth(1).click()
    // await page.getByText("documentation").first().click()
       await page.getByText("documentation").last().click()

    await page.waitForTimeout(5000)
})


