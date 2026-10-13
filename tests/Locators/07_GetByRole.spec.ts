


import { test, expect } from '@playwright/test';
test('GetByRole Locator',async ({ page }) => {
await page.goto("https://www.google.com")
// Role- Attribute
//await page.getByRole("value").click()

await page.getByRole('link',{name:'Gmail'}).click()

await page.waitForTimeout(5000)
})