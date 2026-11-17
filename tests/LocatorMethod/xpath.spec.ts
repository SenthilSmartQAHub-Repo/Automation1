
import { test, expect } from '@playwright/test';

test('xpath',async ({ page }) => {

   await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/dynamic-table-example-table-th-td.html")
    
   const scoreValue=await page.locator("xpath=//td[@id='scoreA']").textContent();

   console.log(scoreValue)

   await page.waitForTimeout(5000)

})