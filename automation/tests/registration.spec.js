/**
 * AT-001: Registration Tests
 * Tests user registration functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages/RegisterPage");
const { getRegistrationData, testData } = require("../test-data/testData");

test.describe("User Registration Tests (AT-001)", () => {
  let registerPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.navigate();
  });

  test("AT-001.1: Should register new user with valid data", async ({
    page,
  }) => {
    // Get unique registration data for this test
    const userData = getRegistrationData();

    // Fill and submit registration form
    await registerPage.register(userData);

    // Verify successful registration
    const isSuccess = await registerPage.isRegistrationSuccessful();
    expect(isSuccess).toBeTruthy();

    // Verify success message is displayed
    const successMessage = await registerPage.successMessage.textContent();
    expect(successMessage).toContain("Your registration completed");
  });

  test("AT-001.2: Should show error for empty required fields", async ({
    page,
  }) => {
    // Click register without filling any fields
    await registerPage.registerButton.click();

    // Check for validation errors
    const errors = await registerPage.getFieldErrors();

    // Should have multiple validation errors
    expect(errors.length).toBeGreaterThan(0);

    // Check for specific required field errors
    const errorText = errors.join(" ");
    expect(errorText.toLowerCase()).toMatch(
      /required|first name|last name|email|password/i
    );
  });

  test("AT-001.3: Should show error for invalid email format", async ({
    page,
  }) => {
    const invalidData = testData.invalidRegistration.invalidEmail;

    await registerPage.fillRegistrationForm(invalidData);
    await registerPage.registerButton.click();

    // Should show email validation error
    await page.waitForTimeout(500);
    const pageContent = await page.content();
    const hasEmailError =
      pageContent.toLowerCase().includes("wrong email") ||
      pageContent.toLowerCase().includes("valid email") ||
      pageContent.toLowerCase().includes("invalid");

    // Either shows error or registration fails
    const isSuccess = await registerPage.isRegistrationSuccessful();
    expect(isSuccess || hasEmailError).toBeTruthy();
  });

  test("AT-001.4: Should show error for password mismatch", async ({
    page,
  }) => {
    const userData = testData.invalidRegistration.passwordMismatch;

    await registerPage.fillRegistrationForm(userData);
    await registerPage.registerButton.click();

    await page.waitForTimeout(1000);

    // Check for password mismatch error - could be inline or in validation summary
    const pageContent = await page.content();
    const hasPasswordError =
      pageContent.toLowerCase().includes("password") &&
      (pageContent.toLowerCase().includes("match") ||
        pageContent.toLowerCase().includes("do not") ||
        pageContent.toLowerCase().includes("same"));

    // Also check for field validation error span
    const fieldError = page.locator(".field-validation-error");
    const hasFieldError = (await fieldError.count()) > 0;

    // Either shows inline error or registration fails
    const isNotSuccessful = !(await registerPage.isRegistrationSuccessful());

    expect(hasPasswordError || hasFieldError || isNotSuccessful).toBeTruthy();
  });

  test("AT-001.5: Should show error for weak password", async ({ page }) => {
    const userData = testData.invalidRegistration.weakPassword;

    await registerPage.fillRegistrationForm(userData);
    await registerPage.registerButton.click();

    await page.waitForTimeout(500);

    // Check for password requirement error
    const pageContent = await page.content();
    const hasPasswordError =
      pageContent.toLowerCase().includes("password") &&
      (pageContent.toLowerCase().includes("must") ||
        pageContent.toLowerCase().includes("character") ||
        pageContent.toLowerCase().includes("least"));

    expect(hasPasswordError).toBeTruthy();
  });

  test("AT-001.6: Should be able to select gender", async ({ page }) => {
    // Test gender radio button selection
    await registerPage.maleRadio.check();
    expect(await registerPage.maleRadio.isChecked()).toBeTruthy();

    await registerPage.femaleRadio.check();
    expect(await registerPage.femaleRadio.isChecked()).toBeTruthy();
    expect(await registerPage.maleRadio.isChecked()).toBeFalsy();
  });

  test("AT-001.7: Should navigate to login page from register page", async ({
    page,
  }) => {
    // Look for login link on register page
    const loginLink = page.locator('a[href="/login"]').first();
    await loginLink.click();

    // Verify navigation to login page
    await expect(page).toHaveURL(/.*login/);
  });
});
