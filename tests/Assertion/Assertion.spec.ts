
import { test, expect } from '@playwright/test';

test('Assertion',async ({ page }) => {

await page.goto("https://senthilsmartqahub.blogspot.com/2026/03/jobapplicationform.html")


const maleradiobutton= page.locator("#male")

await maleradiobutton.check()

//const radioboolvalue=await maleradiobutton.isChecked()

//Non-retrying assertions
// expect(radioboolvalue).toBe(true)
// expect(10).toBe(10)


//Auto-retrying assertions
//await expect(maleradiobutton).toBeChecked() //Hard Assertion

await expect.soft(maleradiobutton).not.toBeChecked() // Soft Assertion

//await page.locator("#position").fill("Testing") 

await page.waitForTimeout(5000)


})
