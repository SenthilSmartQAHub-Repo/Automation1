
import { test, expect } from '@playwright/test';

test('Right click',async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/user-management.html")



    await page.locator(".user-text").first().click({button:'right'})

    //click on delete option 
    

    await page.waitForTimeout(5000)
})