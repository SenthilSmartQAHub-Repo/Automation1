
import { test, expect } from '@playwright/test';

test('GetByLabel Locator1',async ({ page }) => {

    await page.goto("https://www.google.com/")

    await page.getByLabel("Search",{exact:true}).fill("Playwright")

    await page.waitForTimeout(5000)
})


test('GetByLabel Locator2',async ({ page }) => {

    await page.goto("https://www.wikipedia.org/")

    await page.getByLabel("Search Wikipedia").fill("Playwright")

    await page.waitForTimeout(5000)
})
