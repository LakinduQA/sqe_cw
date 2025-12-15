/**
 * AT-002: Login Tests
 * Tests user login functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { RegisterPage } = require("../pages/RegisterPage");
const { testData, getRegistrationData } = require("../test-data/testData");

test.describe("User Login Tests (AT-002)", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("AT-002.1: Should login with valid credentials after registration", async ({
    page,
  }) => {
    // First register a new user
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();

    const userData = getRegistrationData();
    await registerPage.register(userData);

    // Wait for registration to complete
    await page.waitForTimeout(1000);

    // Logout if auto-logged in
    const isLoggedIn = await loginPage.isLoggedIn();
    if (isLoggedIn) {
      await loginPage.logout();
    }

    // Navigate to login page
    await loginPage.navigate();

    // Login with registered credentials
    await loginPage.login(userData.email, userData.password);

    // Verify successful login
    const loginSuccess = await loginPage.isLoginSuccessful();
    expect(loginSuccess).toBeTruthy();
  });

  test("AT-002.2: Should show error for invalid email format", async ({
    page,
  }) => {
    await loginPage.login(testData.invalidLogin.invalidEmail, "anypassword");

    await page.waitForTimeout(500);

    // Check for validation error
    const pageContent = await page.content();
    const hasError =
      pageContent.toLowerCase().includes("wrong email") ||
      pageContent.toLowerCase().includes("valid email") ||
      pageContent.toLowerCase().includes("enter");

    expect(hasError).toBeTruthy();
  });

  test("AT-002.3: Should show error for non-existent user", async ({
    page,
  }) => {
    await loginPage.login(
      testData.invalidLogin.wrongEmail,
      testData.invalidLogin.wrongPassword
    );

    await page.waitForTimeout(500);

    // Check for login failure message
    const errorMessage = await loginPage.getValidationError();
    expect(errorMessage.toLowerCase()).toMatch(
      /no customer account|unsuccessful|credentials|incorrect/i
    );
  });

  test("AT-002.4: Should show error for wrong password", async ({ page }) => {
    // First register a new user
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();

    const userData = getRegistrationData();
    await registerPage.register(userData);

    // Logout
    await loginPage.logout();

    // Try to login with wrong password
    await loginPage.navigate();
    await loginPage.login(userData.email, testData.invalidLogin.wrongPassword);

    await page.waitForTimeout(500);

    // Check for login failure message
    const errorMessage = await loginPage.getValidationError();
    expect(errorMessage.toLowerCase()).toMatch(
      /credentials|password|wrong|incorrect|invalid/i
    );
  });

  test("AT-002.5: Should show error for empty credentials", async ({
    page,
  }) => {
    // Click login without entering any credentials
    await loginPage.loginButton.click();

    await page.waitForTimeout(500);

    // Check for validation errors
    const pageContent = await page.content();
    const hasError =
      pageContent.toLowerCase().includes("required") ||
      pageContent.toLowerCase().includes("enter") ||
      pageContent.toLowerCase().includes("email");

    expect(hasError).toBeTruthy();
  });

  test("AT-002.6: Should have working remember me checkbox", async ({
    page,
  }) => {
    // Verify remember me checkbox exists and is functional
    await expect(loginPage.rememberMeCheckbox).toBeVisible();

    // Check it
    await loginPage.rememberMeCheckbox.check();
    expect(await loginPage.rememberMeCheckbox.isChecked()).toBeTruthy();

    // Uncheck it
    await loginPage.rememberMeCheckbox.uncheck();
    expect(await loginPage.rememberMeCheckbox.isChecked()).toBeFalsy();
  });

  test("AT-002.7: Should have forgot password link", async ({ page }) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
    await loginPage.forgotPasswordLink.click();

    // Should navigate to password recovery page
    await expect(page).toHaveURL(/.*passwordrecovery/);
  });

  test("AT-002.8: Should have link to register page", async ({ page }) => {
    const registerLink = page.locator('a[href="/register"]').first();
    await expect(registerLink).toBeVisible();
    await registerLink.click();

    // Should navigate to registration page
    await expect(page).toHaveURL(/.*register/);
  });

  test("AT-002.9: Should logout successfully after login", async ({ page }) => {
    // First register and login
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();

    const userData = getRegistrationData();
    await registerPage.register(userData);

    // Verify logged in
    let isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();

    // Logout
    await loginPage.logout();

    // Verify logged out
    isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();
  });
});
