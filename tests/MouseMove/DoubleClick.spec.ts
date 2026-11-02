
import { test, expect } from '@playwright/test';

test('Double click',async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/software-request-dashboard.html")

    //await page.locator(".status-pending").click({clickCount:2})

    await page.locator(".status-pending").dblclick()
  await page.waitForTimeout(5000)
    
     await page.locator(".edit-input").fill("Approved")
     
       await page.locator(".edit-input").press("Enter")
    await page.waitForTimeout(5000)
})