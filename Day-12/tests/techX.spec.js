import { test, expect } from '@playwright/test';
// imports test which defines a test case
// expect which checks the given thing is true or not 

test('has title', async ({ page }) => {
    // 'has title' is name of this test case
    await page.goto('https://www.techxincorporation.com/');
    // goes to that url
    await expect(page).toHaveTitle(/React App/);
    // checks if that url title is React App and /.../ this is regex
});

test('explore link', async ({ page }) => {
    await page.goto('https://www.techxincorporation.com/');
    await page.getByRole('link', { name: /Explore Corporate Training/ }).click();
    // gets link element having name Explore Corporate Training and clicks that link
    await expect(page).toHaveURL('https://www.techxincorporation.com/training');
    // after clicked checks if the url is that we given
});

