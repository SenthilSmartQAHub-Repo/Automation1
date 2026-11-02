
import { test, expect } from '@playwright/test';

test('DropDown Handling',async ({ page }) => {

await page.goto("https://senthilsmartqahub.blogspot.com/2026/09/employeemanagementportal.html")


    // value?: string;
    // label?: string;
    // index?: number;

//await page.locator("#departmentFilter").selectOption({index:1})

await page.locator("#departmentFilter").selectOption({label:"Development"})



await page.waitForTimeout(5000)


})
