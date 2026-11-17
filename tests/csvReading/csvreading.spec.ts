
import { test, expect } from '@playwright/test';
import {parse} from "csv-parse/sync"
import fs from "fs"
//npm install csv-parse

const csvdata:any[]=parse(fs.readFileSync("testdata/testdata.csv"),
{
  columns:true,
  skip_empty_lines:true,
  skip_records_with_empty_values:true
})
test('csv data',async ({ page }) => {
  await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/jobapplicationform.html');
  await page.getByPlaceholder("Enter your full name").fill(csvdata[0].firstname)
  await page.getByPlaceholder("Enter your email").fill(csvdata[0].emailid)
  await page.getByPlaceholder("Enter your phone number").fill(csvdata[0].phonenumber)
  await page.getByPlaceholder("Enter your address").fill(csvdata[0].address)
  await page.waitForTimeout(5000)
});
