/**
 * Checkout Page Object
 * Handles checkout process
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    // Checkout steps navigation
    this.billingAddressStep = page.locator("#opc-billing");
    this.shippingAddressStep = page.locator("#opc-shipping");
    this.shippingMethodStep = page.locator("#opc-shipping_method");
    this.paymentMethodStep = page.locator("#opc-payment_method");
    this.paymentInfoStep = page.locator("#opc-payment_info");
    this.confirmOrderStep = page.locator("#opc-confirm_order");

    // Billing Address fields
    this.billingFirstName = page.locator("#BillingNewAddress_FirstName");
    this.billingLastName = page.locator("#BillingNewAddress_LastName");
    this.billingEmail = page.locator("#BillingNewAddress_Email");
    this.billingCountry = page.locator("#BillingNewAddress_CountryId");
    this.billingState = page.locator("#BillingNewAddress_StateProvinceId");
    this.billingCity = page.locator("#BillingNewAddress_City");
    this.billingAddress1 = page.locator("#BillingNewAddress_Address1");
    this.billingZip = page.locator("#BillingNewAddress_ZipPostalCode");
    this.billingPhone = page.locator("#BillingNewAddress_PhoneNumber");

    // Billing address dropdown (for existing addresses)
    this.billingAddressSelect = page.locator("#billing-address-select");

    // Continue buttons for each step
    this.billingContinueButton = page.locator(
      '#billing-buttons-container input[value="Continue"]'
    );
    this.shippingContinueButton = page.locator(
      '#shipping-buttons-container input[value="Continue"]'
    );
    this.shippingMethodContinueButton = page.locator(
      '#shipping-method-buttons-container input[value="Continue"]'
    );
    this.paymentMethodContinueButton = page.locator(
      '#payment-method-buttons-container input[value="Continue"]'
    );
    this.paymentInfoContinueButton = page.locator(
      '#payment-info-buttons-container input[value="Continue"]'
    );
    this.confirmOrderButton = page.locator(
      '#confirm-order-buttons-container input[value="Confirm"]'
    );

    // Shipping method options - use more flexible selectors
    this.groundShipping = page
      .locator('input[type="radio"][name="shippingoption"]')
      .first();
    this.shippingMethodOptions = page.locator(
      'input[type="radio"][name="shippingoption"]'
    );

    // Payment method options
    this.cashOnDelivery = page.locator(
      'input[value="Payments.CashOnDelivery"]'
    );
    this.checkMoneyOrder = page.locator(
      'input[value="Payments.CheckMoneyOrder"]'
    );
    this.creditCard = page.locator('input[value="Payments.Manual"]');
    this.purchaseOrder = page.locator('input[value="Payments.PurchaseOrder"]');
    this.paymentMethodOptions = page.locator(
      'input[type="radio"][name="paymentmethod"]'
    );

    // Credit card fields
    this.cardType = page.locator("#CreditCardType");
    this.cardholderName = page.locator("#CardholderName");
    this.cardNumber = page.locator("#CardNumber");
    this.cardExpireMonth = page.locator("#ExpireMonth");
    this.cardExpireYear = page.locator("#ExpireYear");
    this.cardCode = page.locator("#CardCode");

    // Purchase order field
    this.purchaseOrderNumber = page.locator("#PurchaseOrderNumber");

    // Order confirmation
    this.orderConfirmedTitle = page.locator(".order-completed .title");
    this.orderNumber = page.locator(".order-number strong");
    this.orderDetailsLink = page.locator(".order-completed .details-link");
    this.completedContinueButton = page.locator(
      ".order-completed-continue-button"
    );

    // Loading indicators
    this.loadingIndicator = page.locator(".loading-image, .please-wait");
  }

  /**
   * Navigate to checkout page
   */
  async navigate() {
    await this.page.goto("/onepagecheckout");
  }

  /**
   * Wait for loading to complete
   */
  async waitForLoading() {
    try {
      await this.loadingIndicator.waitFor({ state: "hidden", timeout: 10000 });
    } catch {
      // Loading might have already completed
    }
  }

  /**
   * Fill billing address for new address
   * @param {Object} address - Address details
   */
  async fillBillingAddress(address) {
    // Check if new address form is needed
    const selectExists = await this.billingAddressSelect.isVisible();
    if (selectExists) {
      await this.billingAddressSelect.selectOption({ label: "New Address" });
      await this.page.waitForTimeout(500);
    }

    await this.billingFirstName.fill(address.firstName);
    await this.billingLastName.fill(address.lastName);
    await this.billingEmail.fill(address.email);
    await this.billingCountry.selectOption({ label: address.country });
    await this.page.waitForTimeout(500); // Wait for state dropdown

    if (address.state) {
      await this.billingState.selectOption({ label: address.state });
    }

    await this.billingCity.fill(address.city);
    await this.billingAddress1.fill(address.address1);
    await this.billingZip.fill(address.zip);
    await this.billingPhone.fill(address.phone);
  }

  /**
   * Continue from billing step
   */
  async continueBilling() {
    await this.billingContinueButton.click();
    await this.waitForLoading();

    // After billing, check if shipping address step appears
    // Often there's a checkbox to use same address for shipping
    await this.page.waitForTimeout(1000);
    await this.handleShippingAddressStep();
  }

  /**
   * Handle shipping address step (auto-continue if same as billing)
   */
  async handleShippingAddressStep() {
    try {
      const shippingStepVisible = await this.shippingAddressStep.isVisible();
      if (shippingStepVisible) {
        // The shipping step might have a "Same as billing" option already selected
        // Just click continue
        const continueBtn = this.shippingContinueButton;
        if (await continueBtn.isVisible()) {
          await continueBtn.click();
          await this.waitForLoading();
        }
      }
    } catch (error) {
      console.log("Shipping address step handling:", error.message);
    }
  }

  /**
   * Continue from shipping address step
   */
  async continueShipping() {
    try {
      const isVisible = await this.shippingAddressStep.isVisible();
      if (isVisible) {
        await this.shippingContinueButton.click();
        await this.waitForLoading();
      }
    } catch (error) {
      console.log("Shipping address continue skipped");
    }
  }

  /**
   * Select shipping method and continue
   * @param {string} method - 'ground', 'nextday', or 'secondday' (or index 0, 1, 2)
   */
  async selectShippingMethod(method = "ground") {
    // Check if shipping method step exists and is visible
    try {
      const isVisible = await this.shippingMethodStep.isVisible();
      if (!isVisible) {
        // Shipping method step might be skipped (e.g., for digital products)
        console.log("Shipping method step not visible, skipping...");
        return;
      }

      // Wait for shipping method step to be visible
      await this.shippingMethodStep.waitFor({
        state: "visible",
        timeout: 5000,
      });
      await this.page.waitForTimeout(500);

      // Try to select by radio button (just click the first available option if exists)
      const optionCount = await this.shippingMethodOptions.count();
      if (optionCount > 0) {
        // Select the first shipping option (usually Ground)
        await this.shippingMethodOptions.first().check();
      }

      await this.shippingMethodContinueButton.click();
      await this.waitForLoading();
    } catch (error) {
      console.log(
        "Shipping method selection failed or skipped:",
        error.message
      );
    }
  }

  /**
   * Select payment method and continue
   * @param {string} method - 'cod', 'check', 'card', or 'po'
   */
  async selectPaymentMethod(method = "cod") {
    // Wait for payment method step to be visible
    await this.paymentMethodStep.waitFor({ state: "visible", timeout: 10000 });
    await this.page.waitForTimeout(500);

    // Try specific payment methods, fall back to first available
    const optionCount = await this.paymentMethodOptions.count();
    if (optionCount > 0) {
      if (method === "check" && (await this.checkMoneyOrder.isVisible())) {
        await this.checkMoneyOrder.check();
      } else if (method === "card" && (await this.creditCard.isVisible())) {
        await this.creditCard.check();
      } else if (method === "po" && (await this.purchaseOrder.isVisible())) {
        await this.purchaseOrder.check();
      } else if (await this.cashOnDelivery.isVisible()) {
        await this.cashOnDelivery.check();
      } else {
        // Fall back to first available option
        await this.paymentMethodOptions.first().check();
      }
    }

    await this.paymentMethodContinueButton.click();
    await this.waitForLoading();
  }

  /**
   * Continue from payment info step (for COD/Check - no additional info needed)
   */
  async continuePaymentInfo() {
    await this.paymentInfoContinueButton.click();
    await this.waitForLoading();
  }

  /**
   * Fill credit card details
   * @param {Object} cardDetails - Card information
   */
  async fillCreditCardDetails(cardDetails) {
    await this.cardType.selectOption(cardDetails.type);
    await this.cardholderName.fill(cardDetails.name);
    await this.cardNumber.fill(cardDetails.number);
    await this.cardExpireMonth.selectOption(cardDetails.expireMonth);
    await this.cardExpireYear.selectOption(cardDetails.expireYear);
    await this.cardCode.fill(cardDetails.cvv);
  }

  /**
   * Confirm order
   */
  async confirmOrder() {
    await this.confirmOrderButton.click();
    await this.waitForLoading();
  }

  /**
   * Check if order was successful
   * @returns {Promise<boolean>}
   */
  async isOrderSuccessful() {
    try {
      await this.orderConfirmedTitle.waitFor({
        state: "visible",
        timeout: 10000,
      });
      const text = await this.orderConfirmedTitle.textContent();
      return text.includes("Your order has been successfully processed");
    } catch {
      return false;
    }
  }

  /**
   * Get order number
   * @returns {Promise<string>}
   */
  async getOrderNumber() {
    try {
      await this.orderNumber.waitFor({ state: "visible", timeout: 5000 });
      const text = await this.orderNumber.textContent();
      return text.trim();
    } catch {
      return "";
    }
  }

  /**
   * Complete full checkout process (for logged in user with COD)
   * @param {Object} billingAddress - Billing address (optional if already saved)
   */
  async completeCheckout(billingAddress = null) {
    // Step 1: Billing Address
    if (billingAddress) {
      await this.fillBillingAddress(billingAddress);
    }
    await this.continueBilling();

    // Step 2: Shipping Method (skip shipping address if same as billing)
    await this.page.waitForTimeout(1000);
    await this.selectShippingMethod("ground");

    // Step 3: Payment Method
    await this.page.waitForTimeout(1000);
    await this.selectPaymentMethod("cod");

    // Step 4: Payment Information
    await this.page.waitForTimeout(1000);
    await this.continuePaymentInfo();

    // Step 5: Confirm Order
    await this.page.waitForTimeout(1000);
    await this.confirmOrder();
  }

  /**
   * Click continue on order completed page
   */
  async clickCompletedContinue() {
    await this.completedContinueButton.click();
  }
}

module.exports = { CheckoutPage };
