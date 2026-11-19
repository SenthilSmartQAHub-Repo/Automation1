

import { test, expect } from '@playwright/test';

test('csv data ${i}', async ({ page }) => {

await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html');


await page.getByPlaceholder("Enter your username").fill("SenthilSmartQAHub")
await page.getByPlaceholder("Enter your password").fill("demo")
await page.locator("//button[normalize-space()='Login']").click()
await page.waitForTimeout(5000)

await page.context().storageState({path:'logindetails.json'})
})

