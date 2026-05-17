import { test, expect } from '@playwright/test';

test('practice test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');

    await page.getByPlaceholder('Enter your username').fill('admin');
    await page.getByPlaceholder('Enter your password').fill('admin123');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');
})

test('practice test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: /Login/ }).click();
    await expect(page).toHaveURL(' https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})