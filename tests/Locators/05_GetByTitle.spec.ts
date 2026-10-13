
import { test, expect } from '@playwright/test';
test('getByTitle Locator',async ({ page }) => {
await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/online-mobile-store.html")
//alt="Online Mobile Store"
await page.getByTitle("Online Mobile Store").nth(1).click()
await page.waitForTimeout(5000)
})