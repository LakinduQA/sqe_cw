/**
 * Register Page Object
 * Handles user registration functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    // Gender radio buttons
    this.maleRadio = page.locator("#gender-male");
    this.femaleRadio = page.locator("#gender-female");

    // Form fields
    this.firstNameInput = page.locator("#FirstName");
    this.lastNameInput = page.locator("#LastName");
    this.emailInput = page.locator("#Email");
    this.passwordInput = page.locator("#Password");
    this.confirmPasswordInput = page.locator("#ConfirmPassword");

    // Submit button
    this.registerButton = page.locator("#register-button");

    // Success message
    this.successMessage = page.locator(".result");
    this.continueButton = page.locator('input[value="Continue"]');

    // Error messages
    this.validationSummary = page.locator(".validation-summary-errors");
    this.fieldValidationErrors = page.locator(".field-validation-error");
    this.firstNameError = page.locator('[data-valmsg-for="FirstName"]');
    this.lastNameError = page.locator('[data-valmsg-for="LastName"]');
    this.emailError = page.locator('[data-valmsg-for="Email"]');
    this.passwordError = page.locator('[data-valmsg-for="Password"]');
    this.confirmPasswordError = page.locator(
      '[data-valmsg-for="ConfirmPassword"]'
    );
  }

  /**
   * Navigate to Register page
   */
  async navigate() {
    await this.page.goto("/register");
  }

  /**
   * Select gender
   * @param {string} gender - 'male' or 'female'
   */
  async selectGender(gender) {
    if (gender.toLowerCase() === "male") {
      await this.maleRadio.check();
    } else {
      await this.femaleRadio.check();
    }
  }

  /**
   * Fill registration form
   * @param {Object} userData - User data object
   */
  async fillRegistrationForm(userData) {
    if (userData.gender) {
      await this.selectGender(userData.gender);
    }
    if (userData.firstName) {
      await this.firstNameInput.fill(userData.firstName);
    }
    if (userData.lastName) {
      await this.lastNameInput.fill(userData.lastName);
    }
    if (userData.email) {
      await this.emailInput.fill(userData.email);
    }
    if (userData.password) {
      await this.passwordInput.fill(userData.password);
    }
    if (userData.confirmPassword) {
      await this.confirmPasswordInput.fill(userData.confirmPassword);
    }
  }

  /**
   * Submit registration form
   */
  async submitRegistration() {
    await this.registerButton.click();
  }

  /**
   * Complete registration process
   * @param {Object} userData - User data object
   */
  async register(userData) {
    await this.fillRegistrationForm(userData);
    await this.submitRegistration();
  }

  /**
   * Check if registration was successful
   * @returns {Promise<boolean>}
   */
  async isRegistrationSuccessful() {
    try {
      await this.successMessage.waitFor({ state: "visible", timeout: 5000 });
      const text = await this.successMessage.textContent();
      return text.includes("Your registration completed");
    } catch {
      return false;
    }
  }

  /**
   * Get validation error message
   * @returns {Promise<string>}
   */
  async getValidationError() {
    try {
      await this.validationSummary.waitFor({ state: "visible", timeout: 3000 });
      return await this.validationSummary.textContent();
    } catch {
      return "";
    }
  }

  /**
   * Get all field validation errors
   * @returns {Promise<string[]>}
   */
  async getFieldErrors() {
    const errors = [];
    const errorElements = await this.fieldValidationErrors.all();
    for (const element of errorElements) {
      const text = await element.textContent();
      if (text.trim()) {
        errors.push(text.trim());
      }
    }
    return errors;
  }

  /**
   * Click continue after successful registration
   */
  async clickContinue() {
    await this.continueButton.click();
  }
}

module.exports = { RegisterPage };
