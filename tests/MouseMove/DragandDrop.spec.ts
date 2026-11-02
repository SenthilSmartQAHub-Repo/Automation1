
import { test, expect } from '@playwright/test';

test('drag and drop',async ({ page }) => {
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/drag-and-drop-operation.html")
    
    // const src=page.locator("")


    // const tg=page.getByAltText("House")

   // await src.dragTo(tg)

    await page.dragAndDrop("#source","#target")

    await page.waitForTimeout(5000)
})