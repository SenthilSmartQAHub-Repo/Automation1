import { test, expect } from '@playwright/test';
import dotenv from "dotenv"

//npm install dotenv

dotenv.config({path:'./configURL/.env.prod'});//path of the .env


test('Data read from env',async ({ page }) => {

    const url=process.env.ApplicationURL as string
    
    await page.goto(url);

    await page.waitForTimeout(5000)
});