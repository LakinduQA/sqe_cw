/**
 * Login Page Object
 * Handles user login functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Form fields
    this.emailInput = page.locator("#Email");
    this.passwordInput = page.locator("#Password");
    this.rememberMeCheckbox = page.locator("#RememberMe");

    // Buttons
    this.loginButton = page.locator('input[value="Log in"]');
    this.forgotPasswordLink = page.locator('a:has-text("Forgot password?")');

    // Error messages
    this.validationSummary = page.locator(".validation-summary-errors");
    this.emailError = page.locator('[data-valmsg-for="Email"]');

    // New customer section
    this.registerButton = page.locator('input[value="Register"]');
  }

  /**
   * Navigate to Login page
   */
  async navigate() {
    await this.page.goto("/login");
  }

  /**
   * Fill login form
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {boolean} rememberMe - Remember me option
   */
  async fillLoginForm(email, password, rememberMe = false) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    if (rememberMe) {
      await this.rememberMeCheckbox.check();
    }
  }

  /**
   * Submit login form
   */
  async submitLogin() {
    await this.loginButton.click();
  }

  /**
   * Complete login process
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {boolean} rememberMe - Remember me option
   */
  async login(email, password, rememberMe = false) {
    await this.fillLoginForm(email, password, rememberMe);
    await this.submitLogin();
  }

  /**
   * Check if login was successful
   * @returns {Promise<boolean>}
   */
  async isLoginSuccessful() {
    try {
      // Wait for logout link to appear (indicates successful login)
      await this.logoutLink.waitFor({ state: "visible", timeout: 5000 });
      return true;
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
   * Check if validation error is displayed
   * @returns {Promise<boolean>}
   */
  async hasValidationError() {
    return await this.validationSummary.isVisible();
  }

  /**
   * Get logged in user email
   * @returns {Promise<string>}
   */
  async getLoggedInUserEmail() {
    try {
      await this.accountLink.waitFor({ state: "visible", timeout: 5000 });
      return await this.accountLink.textContent();
    } catch {
      return "";
    }
  }

  /**
   * Click forgot password link
   */
  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  /**
   * Click register button
   */
  async clickRegister() {
    await this.registerButton.click();
  }
}

module.exports = { LoginPage };
