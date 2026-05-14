import { test, expect } from '@playwright/test';

test('positive login test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page.getByRole('strong', 'Congratulations student. You successfully logged in!')).toBeVisible();
    await expect(page.getByRole('link', { name: /Log out/ })).toBeVisible();
});

test('negative username test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('incorrectUser');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();

    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});

test('Negative password test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('incorrectPass');
    await page.locator('#submit').click();

    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
})