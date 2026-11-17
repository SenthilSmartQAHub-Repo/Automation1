
import { test, expect } from '@playwright/test';
import {faker,fakerEN_IN} from '@faker-js/faker'
// npm install @faker-js/faker

test('FakerJS',async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/jobapplicationform.html');
  await page.getByPlaceholder("Enter your full name").fill(fakerEN_IN.person.fullName())
  await page.getByPlaceholder("Enter your email").fill(fakerEN_IN.internet.email())
  await page.getByPlaceholder("Enter your phone number").fill(fakerEN_IN.phone.number())
  await page.getByPlaceholder("Enter your address").fill(fakerEN_IN.location.postalAddress())
  await page.waitForTimeout(5000)
});
