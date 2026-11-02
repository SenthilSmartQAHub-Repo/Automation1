
import { test, expect } from '@playwright/test';

test('Mouse move',async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/product-filter.html")

//<button class="menubtn"> Category ▼ </button>

    await page.getByText("Category").hover()

    //<a href="?category=accessories"> Accessories</a>

        await page.getByText("Accessories").first().click()
    await page.waitForTimeout(5000)
})