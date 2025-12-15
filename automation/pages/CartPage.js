/**
 * Cart Page Object
 * Handles shopping cart functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");

class CartPage extends BasePage {
  constructor(page) {
    super(page);

    // Cart table
    this.cartTable = page.locator(".cart");
    this.cartItems = page.locator(".cart-item-row");
    this.emptyCartMessage = page.locator(".order-summary-content");

    // Cart item elements
    this.removeCheckboxes = page.locator('input[name="removefromcart"]');
    this.quantityInputs = page.locator(".qty-input");
    this.productNames = page.locator(".cart .product a");
    this.unitPrices = page.locator(".cart .product-unit-price");
    this.subTotals = page.locator(".cart .product-subtotal");

    // Cart actions
    this.updateCartButton = page.locator('input[name="updatecart"]');
    this.continueShoppingButton = page.locator(
      'input[name="continueshopping"]'
    );

    // Discount and Gift Card
    this.discountCodeInput = page.locator('input[name="discountcouponcode"]');
    this.applyCouponButton = page.locator(
      'input[name="applydiscountcouponcode"]'
    );
    this.giftCardCodeInput = page.locator('input[name="giftcardcouponcode"]');
    this.addGiftCardButton = page.locator(
      'input[name="applygiftcardcouponcode"]'
    );
    this.couponMessage = page.locator(".message-error, .message-success");

    // Shipping estimate
    this.countrySelect = page.locator("#CountryId");
    this.stateSelect = page.locator("#StateProvinceId");
    this.zipCodeInput = page.locator("#ZipPostalCode");
    this.estimateShippingButton = page.locator("#estimate-shipping-button");

    // Order totals
    this.orderSubtotal = page.locator(
      ".cart-total .order-subtotal .value-summary"
    );
    this.orderShipping = page.locator(
      ".cart-total .shipping-cost .value-summary"
    );
    this.orderTax = page.locator(".cart-total .tax-value .value-summary");
    this.orderTotal = page.locator(".cart-total .order-total strong");

    // Terms and Checkout
    this.termsCheckbox = page.locator("#termsofservice");
    this.checkoutButton = page.locator("#checkout");
    this.termsWarning = page.locator("#terms-of-service-warning-box");
  }

  /**
   * Navigate to cart page
   */
  async navigate() {
    await this.page.goto("/cart");
  }

  /**
   * Check if cart is empty
   * @returns {Promise<boolean>}
   */
  async isCartEmpty() {
    const text = await this.emptyCartMessage.textContent();
    return text.includes("Your Shopping Cart is empty!");
  }

  /**
   * Get number of items in cart
   * @returns {Promise<number>}
   */
  async getCartItemCount() {
    return await this.cartItems.count();
  }

  /**
   * Update quantity for a specific item
   * @param {number} itemIndex - Index of item (0-based)
   * @param {number} quantity - New quantity
   */
  async updateItemQuantity(itemIndex, quantity) {
    await this.quantityInputs.nth(itemIndex).fill(quantity.toString());
    await this.updateCartButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Remove item from cart by index
   * @param {number} itemIndex - Index of item to remove (0-based)
   */
  async removeItem(itemIndex) {
    await this.removeCheckboxes.nth(itemIndex).check();
    await this.updateCartButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Remove all items from cart
   */
  async clearCart() {
    const checkboxes = await this.removeCheckboxes.all();
    for (const checkbox of checkboxes) {
      await checkbox.check();
    }
    if (checkboxes.length > 0) {
      await this.updateCartButton.click();
      await this.page.waitForLoadState("networkidle");
    }
  }

  /**
   * Apply discount code
   * @param {string} code - Discount code
   */
  async applyDiscountCode(code) {
    await this.discountCodeInput.fill(code);
    await this.applyCouponButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Apply gift card code
   * @param {string} code - Gift card code
   */
  async applyGiftCard(code) {
    await this.giftCardCodeInput.fill(code);
    await this.addGiftCardButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Get order subtotal
   * @returns {Promise<string>}
   */
  async getOrderSubtotal() {
    return await this.orderSubtotal.textContent();
  }

  /**
   * Get order total
   * @returns {Promise<string>}
   */
  async getOrderTotal() {
    return await this.orderTotal.textContent();
  }

  /**
   * Accept terms of service
   */
  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  /**
   * Proceed to checkout
   */
  async proceedToCheckout() {
    await this.acceptTerms();
    await this.checkoutButton.click();
  }

  /**
   * Proceed to checkout without accepting terms
   */
  async proceedToCheckoutWithoutTerms() {
    await this.checkoutButton.click();
  }

  /**
   * Check if terms warning is displayed
   * @returns {Promise<boolean>}
   */
  async isTermsWarningDisplayed() {
    try {
      await this.termsWarning.waitFor({ state: "visible", timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get all product names in cart
   * @returns {Promise<string[]>}
   */
  async getCartProductNames() {
    const names = [];
    const elements = await this.productNames.all();
    for (const element of elements) {
      names.push(await element.textContent());
    }
    return names;
  }

  /**
   * Continue shopping
   */
  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  /**
   * Estimate shipping
   * @param {string} country - Country name
   * @param {string} zip - Zip code
   */
  async estimateShipping(country, zip) {
    await this.countrySelect.selectOption({ label: country });
    await this.page.waitForTimeout(500); // Wait for state dropdown to update
    await this.zipCodeInput.fill(zip);
    await this.estimateShippingButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Update quantity for the first item in cart
   * @param {number} quantity - New quantity
   */
  async updateFirstItemQuantity(quantity) {
    await this.updateItemQuantity(0, quantity);
  }

  /**
   * Remove the first item from cart
   */
  async removeFirstItem() {
    await this.removeItem(0);
  }
}

module.exports = { CartPage };
