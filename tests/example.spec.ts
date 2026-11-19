import { test, expect } from '@playwright/test';

import {parse} from "csv-parse/sync"
import fs from "fs"

const csvdata:any[]=parse(fs.readFileSync("Testdata/testdata.csv"),
{
columns:true,
skip_empty_lines:true,
skip_records_with_empty_values:true
})

for(let i=0;i<csvdata.length;i++){

test('csv data ${i}', async ({ page }) => {

await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/doctor-appointment-body-font-family.html');

await page.getByPlaceholder('Enter your full name').fill(csvdata[i].FullName)

await page.getByPlaceholder('Enter your last name').fill(csvdata[i].LastName)

await page.waitForTimeout(5000)


})

}
