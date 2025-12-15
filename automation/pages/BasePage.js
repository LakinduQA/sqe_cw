/**
 * Base Page Object
 * Contains common methods and elements shared across all pages
 *
 * SQE Coursework - Lakindu De Silva
 */

class BasePage {
  constructor(page) {
    this.page = page;

    // Header elements
    this.logo = page.locator("a.header-logo");
    this.registerLink = page.locator("a.ico-register");
    this.loginLink = page.locator("a.ico-login");
    this.logoutLink = page.locator("a.ico-logout");
    this.accountLink = page.locator("a.account");
    this.shoppingCartLink = page.locator("a.ico-cart");
    this.wishlistLink = page.locator("a.ico-wishlist");
    this.cartQuantity = page.locator(".cart-qty");

    // Search elements
    this.searchBox = page.locator("#small-searchterms");
    this.searchButton = page.locator('input[value="Search"]');

    // Notification
    this.notification = page.locator("#bar-notification");
    this.notificationClose = page.locator(".close");

    // Categories menu
    this.menuBooks = page.locator(".top-menu >> text=Books");
    this.menuComputers = page.locator(".top-menu >> text=Computers");
    this.menuElectronics = page.locator(".top-menu >> text=Electronics");
    this.menuApparel = page.locator(".top-menu >> text=Apparel & Shoes");
    this.menuDigitalDownloads = page.locator(
      ".top-menu >> text=Digital downloads"
    );
    this.menuJewelry = page.locator(".top-menu >> text=Jewelry");
    this.menuGiftCards = page.locator(".top-menu >> text=Gift Cards");
  }

  /**
   * Navigate to homepage
   */
  async goToHomepage() {
    await this.page.goto("/");
  }

  /**
   * Search for a product
   * @param {string} searchTerm - The search term
   */
  async search(searchTerm) {
    await this.searchBox.fill(searchTerm);
    await this.searchButton.click();
  }

  /**
   * Navigate to Register page
   */
  async goToRegister() {
    await this.registerLink.click();
  }

  /**
   * Navigate to Login page
   */
  async goToLogin() {
    await this.loginLink.click();
  }

  /**
   * Logout from the application
   */
  async logout() {
    await this.logoutLink.click();
  }

  /**
   * Navigate to Shopping Cart
   */
  async goToCart() {
    await this.shoppingCartLink.click();
  }

  /**
   * Check if user is logged in
   * @returns {Promise<boolean>}
   */
  async isLoggedIn() {
    return await this.logoutLink.isVisible();
  }

  /**
   * Get cart quantity
   * @returns {Promise<number>}
   */
  async getCartQuantity() {
    const text = await this.cartQuantity.textContent();
    const numericText = text.replace(/[()]/g, "").trim();
    return parseInt(numericText, 10) || 0;
  }

  /**
   * Wait for notification and close it
   */
  async closeNotification() {
    await this.notification.waitFor({ state: "visible", timeout: 5000 });
    await this.notificationClose.click();
  }

  /**
   * Get notification message
   * @returns {Promise<string>}
   */
  async getNotificationMessage() {
    await this.notification.waitFor({ state: "visible", timeout: 5000 });
    return await this.notification.textContent();
  }
}

module.exports = { BasePage };
