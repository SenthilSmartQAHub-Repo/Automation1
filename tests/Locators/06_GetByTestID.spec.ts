
import { test, expect } from '@playwright/test';

test('getByTestId Locator',async ({ page }) => {
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html")
//data-testid="username"
await page.getByTestId("username").fill("William")
await page.waitForTimeout(5000)
})