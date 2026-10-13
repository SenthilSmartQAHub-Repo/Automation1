
import { test, expect } from '@playwright/test';

test('GetByPlaceHolder Locator',async ({ page }) => {
 
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/smart-job-portal.html")
    
    await page.getByPlaceholder("Job title").fill("Automation")

    await page.waitForTimeout(5000)
})