import { test, expect } from '@playwright/test';


//  test.use({
//     viewport: { width: 1528, height: 732 }
//   })

test('has title',{tag:['@Smoke',"@Regression"]},async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/09/employeemanagementportal.html');
 // await page.setViewportSize({width:1528,height:732})
  await page.waitForTimeout(5000)
});
test('open google ',{tag:"@Regression"}, async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(5000)
});
test('open facebook @Smoke', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await page.waitForTimeout(5000)
});

// Run command: 
// npx playwright test --grep "@Smoke"
//npx playwright test --grep "@Smoke|@Regression"