

import { test, expect } from '@playwright/test';

test('Skip login', async ({ page }) => {

await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html');

await page.waitForTimeout(5000)


})

