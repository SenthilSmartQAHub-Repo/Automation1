
import { test, expect } from '@playwright/test';

test('DropDown Handling',async ({ page }) => {

await page.goto("https://senthilsmartqahub.blogspot.com/2026/09/employeemanagementportal.html")


await page.locator("css=#departmentFilter").selectOption({label:"Development"})

await page.waitForTimeout(5000)

})