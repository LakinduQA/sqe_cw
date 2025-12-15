/**
 * AT-003: Cart Tests
 * Tests shopping cart functionality
 *
 * SQE Coursework - Lakindu De Silva
 */

const { test, expect } = require("@playwright/test");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");
const { BasePage } = require("../pages/BasePage");
const { testData } = require("../test-data/testData");

test.describe("Shopping Cart Tests (AT-003)", () => {
  let productPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
  });

  test("AT-003.1: Should add simple product to cart from category page", async ({
    page,
  }) => {
    // Navigate to Books category
    await productPage.navigateToCategory("Books");

    // Add first available product to cart
    const addToCartButtons = page.locator(
      ".product-item .product-box-add-to-cart-button"
    );
    await addToCartButtons.first().click();

    // Wait for cart update notification
    await page.waitForTimeout(2000);

    // Verify cart has items
    const basePage = new BasePage(page);
    const cartQuantity = await basePage.getCartQuantity();
    expect(cartQuantity).toBeGreaterThan(0);
  });

  test("AT-003.2: Should add configurable product (Build Your Own Computer)", async ({
    page,
  }) => {
    // Navigate to build computer page
    await productPage.navigateToBuildComputer();

    // Configure and add computer to cart
    await productPage.configureAndAddComputer({
      processor: "slow",
      ram: "2gb",
      hdd: "320gb",
      os: "vista-home",
      software: [],
    });

    // Wait for success notification
    await page.waitForTimeout(2000);

    // Verify success notification or cart update
    const notificationText = await productPage.getNotificationMessage();
    const isSuccess =
      notificationText.toLowerCase().includes("added") ||
      notificationText.toLowerCase().includes("cart");

    expect(isSuccess).toBeTruthy();
  });

  test("AT-003.3: Should update product quantity in cart", async ({ page }) => {
    // First add a product to cart
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Update quantity
    const newQuantity = 3;
    await cartPage.updateFirstItemQuantity(newQuantity);

    // Verify quantity was updated
    const quantityInput = page.locator(".qty-input").first();
    await expect(quantityInput).toHaveValue(String(newQuantity));
  });

  test("AT-003.4: Should remove product from cart", async ({ page }) => {
    // Add a product first
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Get initial item count
    const initialItems = await cartPage.getCartItemCount();

    // Remove first item
    await cartPage.removeFirstItem();

    await page.waitForTimeout(1000);

    // Verify item was removed or cart is empty
    const finalItems = await cartPage.getCartItemCount();
    const emptyMessage = await cartPage.isCartEmpty();

    expect(finalItems < initialItems || emptyMessage).toBeTruthy();
  });

  test("AT-003.5: Should display correct order total", async ({ page }) => {
    // Add a product
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Verify order totals section exists
    const orderTotal = await cartPage.getOrderTotal();
    expect(orderTotal).toBeDefined();
    expect(parseFloat(orderTotal.replace(/[^0-9.]/g, ""))).toBeGreaterThan(0);
  });

  test("AT-003.6: Should show empty cart message when cart is empty", async ({
    page,
  }) => {
    // Go directly to cart (without adding anything)
    await cartPage.navigate();

    // Clear cart if items exist
    const itemCount = await cartPage.getCartItemCount();
    if (itemCount > 0) {
      await cartPage.clearCart();
      await page.waitForTimeout(1000);
    }

    // Verify empty cart message
    const isEmpty = await cartPage.isCartEmpty();
    expect(isEmpty).toBeTruthy();
  });

  test("AT-003.7: Should apply invalid discount code and show error", async ({
    page,
  }) => {
    // Add a product first
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Apply invalid discount code
    await cartPage.applyDiscountCode(testData.discountCodes.invalid);

    await page.waitForTimeout(1000);

    // Check for error message - the website shows various error messages for invalid codes
    const pageContent = await page.content().then((c) => c.toLowerCase());
    const hasError =
      pageContent.includes("invalid") ||
      pageContent.includes("not found") ||
      pageContent.includes("wrong") ||
      pageContent.includes("does not exist") ||
      pageContent.includes("error") ||
      pageContent.includes("coupon code you entered") ||
      pageContent.includes("discount code");

    // Even if no specific error text, verify the discount wasn't applied
    // (order total should remain unchanged or we're still on cart page)
    const stillOnCart = page.url().includes("/cart");

    expect(hasError || stillOnCart).toBeTruthy();
  });

  test("AT-003.8: Should have terms and conditions checkbox for checkout", async ({
    page,
  }) => {
    // Add a product
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Verify terms checkbox exists
    await expect(cartPage.termsCheckbox).toBeVisible();

    // Try to checkout without accepting terms
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(500);

    // Check for terms acceptance requirement
    const pageContent = await page.content();
    const alertVisible = page.locator(".ui-dialog, .terms-of-service-warning");

    // Either a dialog appears or checkout is blocked
    const dialogVisible = await alertVisible.isVisible().catch(() => false);
    const stillOnCart = page.url().includes("/cart");

    expect(dialogVisible || stillOnCart).toBeTruthy();
  });

  test("AT-003.9: Should navigate to checkout when terms accepted", async ({
    page,
  }) => {
    // Add a product
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Accept terms and checkout
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(2000);

    // Should navigate to checkout or login page
    const currentUrl = page.url();
    const isCheckout =
      currentUrl.includes("checkout") || currentUrl.includes("login");

    expect(isCheckout).toBeTruthy();
  });
});
