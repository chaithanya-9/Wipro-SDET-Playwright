import { test, expect } from '@playwright/test';

test('practice test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');

    await page.getByPlaceholder('Enter your username').fill('admin');
    await page.getByPlaceholder('Enter your password').fill('admin123');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');
})

