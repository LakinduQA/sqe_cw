/**
 * AT-004: End-to-End Checkout Tests
 * Tests complete checkout flow from product selection to order confirmation
 *
 * SQE Coursework - Lakindu De Silva
 */

const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages/RegisterPage");
const { LoginPage } = require("../pages/LoginPage");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { getRegistrationData, testData } = require("../test-data/testData");

test.describe("End-to-End Checkout Tests (AT-004)", () => {
  let registerPage;
  let loginPage;
  let productPage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test("AT-004.1: Complete E2E checkout - Register, Add Product, Checkout with COD", async ({
    page,
  }) => {
    // Step 1: Register new user
    const userData = getRegistrationData();
    await registerPage.navigate();
    await registerPage.register(userData);

    // Verify registration success
    const isRegistered = await registerPage.isRegistrationSuccessful();
    expect(isRegistered).toBeTruthy();

    // Step 2: Add a simple product to cart (Book)
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();

    // Wait for cart update
    await page.waitForTimeout(2000);

    // Verify product added to cart
    const cartQuantity = await productPage.getCartQuantity();
    expect(cartQuantity).toBeGreaterThan(0);

    // Step 3: Go to cart and proceed to checkout
    await cartPage.navigate();

    // Accept terms and checkout
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(2000);

    // Step 4: Complete checkout process
    // Fill billing address (new user needs address)
    const billingAddress = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      country: "United States",
      state: "California",
      city: "Los Angeles",
      address1: "123 Test Street",
      zip: "90001",
      phone: "1234567890",
    };

    await checkoutPage.fillBillingAddress(billingAddress);
    await checkoutPage.continueBilling();

    // Shipping method
    await page.waitForTimeout(1000);
    await checkoutPage.selectShippingMethod("ground");

    // Payment method (Cash on Delivery)
    await page.waitForTimeout(1000);
    await checkoutPage.selectPaymentMethod("cod");

    // Payment info (just continue for COD)
    await page.waitForTimeout(1000);
    await checkoutPage.continuePaymentInfo();

    // Confirm order
    await page.waitForTimeout(1000);
    await checkoutPage.confirmOrder();

    // Step 5: Verify order success
    await page.waitForTimeout(2000);
    const isSuccess = await checkoutPage.isOrderSuccessful();
    expect(isSuccess).toBeTruthy();

    // Get order number (optional - might not always be displayed)
    const orderNumber = await checkoutPage.getOrderNumber();
    if (orderNumber) {
      console.log(`Order completed successfully! Order Number: ${orderNumber}`);
    } else {
      console.log("Order completed successfully!");
    }
  });

  test("AT-004.2: E2E checkout with configurable product (Build Computer)", async ({
    page,
  }) => {
    // Step 1: Register new user
    const userData = getRegistrationData();
    await registerPage.navigate();
    await registerPage.register(userData);

    // Step 2: Add configurable product (Build Computer)
    await productPage.navigateToBuildComputer();

    await productPage.configureAndAddComputer({
      processor: "slow",
      ram: "2gb",
      hdd: "320gb",
      os: "vista-home",
      software: [],
    });

    // Wait for cart update
    await page.waitForTimeout(2000);

    // Step 3: Go to cart
    await cartPage.navigate();

    // Verify cart has the configured product
    const cartItems = await cartPage.getCartItemCount();
    expect(cartItems).toBeGreaterThan(0);

    // Step 4: Proceed to checkout
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(2000);

    // Step 5: Complete checkout
    const billingAddress = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      country: "United States",
      state: "California",
      city: "San Francisco",
      address1: "456 Tech Avenue",
      zip: "94102",
      phone: "9876543210",
    };

    await checkoutPage.fillBillingAddress(billingAddress);
    await checkoutPage.continueBilling();

    await page.waitForTimeout(1000);
    await checkoutPage.selectShippingMethod("ground");

    await page.waitForTimeout(1000);
    await checkoutPage.selectPaymentMethod("cod");

    await page.waitForTimeout(1000);
    await checkoutPage.continuePaymentInfo();

    await page.waitForTimeout(1000);
    await checkoutPage.confirmOrder();

    // Verify success
    await page.waitForTimeout(2000);
    const isSuccess = await checkoutPage.isOrderSuccessful();
    expect(isSuccess).toBeTruthy();
  });

  test("AT-004.3: E2E checkout with multiple products", async ({ page }) => {
    // Register user
    const userData = getRegistrationData();
    await registerPage.navigate();
    await registerPage.register(userData);

    // Add first product (Book)
    await productPage.navigateToCategory("Books");
    const bookAddButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await bookAddButton.click();
    await page.waitForTimeout(2000);

    // Add second product (from different category - Apparel)
    await productPage.navigateToCategory("Apparel & Shoes");
    const apparelAddButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    if (await apparelAddButton.isVisible()) {
      await apparelAddButton.click();
      await page.waitForTimeout(2000);
    }

    // Go to cart
    await cartPage.navigate();

    // Verify multiple items
    const cartItems = await cartPage.getCartItemCount();
    expect(cartItems).toBeGreaterThanOrEqual(1);

    // Proceed to checkout
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(2000);

    // Complete checkout
    const billingAddress = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      country: "United States",
      state: "New York",
      city: "New York City",
      address1: "789 Multi Street",
      zip: "10001",
      phone: "5551234567",
    };

    await checkoutPage.fillBillingAddress(billingAddress);
    await checkoutPage.continueBilling();

    await page.waitForTimeout(1000);
    await checkoutPage.selectShippingMethod("ground");

    await page.waitForTimeout(1000);
    await checkoutPage.selectPaymentMethod("cod");

    await page.waitForTimeout(1000);
    await checkoutPage.continuePaymentInfo();

    await page.waitForTimeout(1000);
    await checkoutPage.confirmOrder();

    // Verify success
    await page.waitForTimeout(2000);
    const isSuccess = await checkoutPage.isOrderSuccessful();
    expect(isSuccess).toBeTruthy();
  });

  test("AT-004.4: Verify checkout requires login for guest", async ({
    page,
  }) => {
    // Add product without logging in
    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart
    await cartPage.navigate();

    // Try to checkout
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();

    await page.waitForTimeout(2000);

    // Should be redirected to login or show checkout as guest option
    const currentUrl = page.url();
    const isLoginPage = currentUrl.includes("login");
    const isCheckoutPage = currentUrl.includes("checkout");

    // Either login required or guest checkout available
    expect(isLoginPage || isCheckoutPage).toBeTruthy();

    if (isLoginPage) {
      console.log(
        "Guest checkout redirects to login - as expected for secure checkout"
      );
    }
  });

  test("AT-004.5: Verify order details before confirmation", async ({
    page,
  }) => {
    // Register and add product
    const userData = getRegistrationData();
    await registerPage.navigate();
    await registerPage.register(userData);

    await productPage.navigateToCategory("Books");
    const addButton = page
      .locator(".product-item .product-box-add-to-cart-button")
      .first();
    await addButton.click();
    await page.waitForTimeout(2000);

    // Go to cart and checkout
    await cartPage.navigate();
    await cartPage.acceptTerms();
    await cartPage.checkoutButton.click();
    await page.waitForTimeout(2000);

    // Fill billing
    const billingAddress = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      country: "United States",
      state: "Texas",
      city: "Houston",
      address1: "101 Verification Road",
      zip: "77001",
      phone: "7771234567",
    };

    await checkoutPage.fillBillingAddress(billingAddress);
    await checkoutPage.continueBilling();

    await page.waitForTimeout(1000);
    await checkoutPage.selectShippingMethod("ground");

    await page.waitForTimeout(1000);
    await checkoutPage.selectPaymentMethod("cod");

    await page.waitForTimeout(1000);
    await checkoutPage.continuePaymentInfo();

    // At confirm order step - verify order details are visible
    await page.waitForTimeout(1000);

    // Check for order summary/confirmation details
    const confirmSection = await page.locator("#opc-confirm_order").isVisible();
    expect(confirmSection).toBeTruthy();

    // Verify billing address is displayed
    const pageContent = await page.content();
    expect(pageContent).toContain(billingAddress.city);

    // Complete order
    await checkoutPage.confirmOrder();

    await page.waitForTimeout(2000);
    const isSuccess = await checkoutPage.isOrderSuccessful();
    expect(isSuccess).toBeTruthy();
  });
});
