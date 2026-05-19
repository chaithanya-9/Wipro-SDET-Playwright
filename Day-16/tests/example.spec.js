// @ts-check
import { test, expect } from '@playwright/test';

//Describe block grouping test cases 
test.describe('testing index.html', () => {
    // test.beforeAll(async () => {  // executes once before all tests in this block
    //   console.log("Before all test cases this block got executed")
    // });

    //Before Playwright runs any test in the box, it automatically does this starting step first: Go to the website URL.
    test.beforeEach(async ({ page }) => // executes before each test in this block
        await page.goto('http://localhost:5500/Day13/webapp/public/index.html')
    );

    //Test case 1: Testing alert
    test('handle alert', async ({ page }) => {
        const btn = page.locator('#alertbtn');
        await btn.click();

        // handle dialog box (event listner)
        //the second a pop-up appears, check if it says 'Hello', and click the OK button (dialog.accept()) for me."
        page.on('dialog', dialog => {
            expect(dialog.message()).toBe('Hello');
            dialog.accept(); // ok
        })
    });

    test('check home title', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Home' });

        await expect(heading).toBeVisible();
    });

    // test.afterAll(() => console.log("done!"))  Run this once when the entire box of tests is finished (like turning off the classroom lights and going home).

    // test.afterEach(() => console.log("done moew meow")) //Run this after every single test is done (like wiping the whiteboard after a class).
});

//You put all your "Login" tests into a box labeled 'testing login form'.
test.describe('testing login form', () => {
    test.beforeEach(async ({ page }) =>
        await page.goto('http://localhost:3000/login.html')
    );

    const loginData = [
        {
            username: "tom",
            password: "tom",
            expected: "Username length must be greater than 3 & Password 5"
        }, {
            username: "tom123",
            password: "tom",
            expected: "Username length must be greater than 3 & Password 5"
        }, {
            username: "admin123",
            password: "admin123",
            expected: "Login successful"
        }, {
            username: "admin123",
            password: "admin12345",
            expected: "Invalid credentials"
        }
    ]
    loginData.forEach(async data => {
        test(`Checking Login form with ${data.username}, ${data.password}`, async ({ page }) => {
            const username = page.locator("#username");
            const password = page.locator("#password");
            const btn = page.locator("#loginBtn");
            const msg = page.locator("#msg");

            await username.fill(data.username);
            await password.fill(data.password);
            await btn.click();
            await expect(msg).toHaveText(data.expected);
        });
    })
})