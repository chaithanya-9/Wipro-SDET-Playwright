import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.techxincorporation.com/');
    await expect(page).toHaveTitle(/React App/);
});

test('explore link', async ({ page }) => {
    await page.goto('https://www.techxincorporation.com/');
    await page.getByRole('link', { name: /Explore Corporate Training/ }).click();
    expect(page).toHaveURL('https://www.techxincorporation.com/training');
});

