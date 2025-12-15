/**
 * Product Page Object
 * Handles product browsing and details
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");

class ProductPage extends BasePage {
  constructor(page) {
    super(page);

    // Product listing
    this.productItems = page.locator(".product-item");
    this.productTitle = page.locator(".product-title");
    this.productPrice = page.locator(".actual-price");

    // Product detail page
    this.productName = page.locator(".product-name h1");
    this.productDescription = page.locator(".full-description");
    this.addToCartButton = page.locator(
      "#add-to-cart-button-16, #add-to-cart-button-72, .add-to-cart-button"
    );
    this.addToWishlistButton = page.locator(".add-to-wishlist-button");
    this.addToCompareButton = page.locator(".add-to-compare-list-button");
    this.quantityInput = page.locator(".qty-input");

    // Configurable product options (Build your own computer)
    this.processorSelect = page.locator("#product_attribute_16_5_4");
    this.ramSelect = page.locator("#product_attribute_16_6_5");
    this.hddRadio320 = page.locator("#product_attribute_16_3_6_18");
    this.hddRadio400 = page.locator("#product_attribute_16_3_6_19");
    this.osUbuntu = page.locator("#product_attribute_16_4_7_44");
    this.osWindows7 = page.locator("#product_attribute_16_4_7_20");
    this.osWindows10 = page.locator("#product_attribute_16_4_7_21");
    this.softwareMsOffice = page.locator("#product_attribute_16_8_8_22");
    this.softwareAcrobat = page.locator("#product_attribute_16_8_8_23");
    this.softwareTotalCommander = page.locator("#product_attribute_16_8_8_24");

    // Category page elements
    this.sortBySelect = page.locator("#products-orderby");
    this.displaySelect = page.locator("#products-pagesize");
    this.viewModeSelect = page.locator("#products-viewmode");
    this.priceFilters = page.locator(".price-range-filter");

    // Breadcrumb
    this.breadcrumb = page.locator(".breadcrumb");

    // Reviews
    this.reviewsLink = page.locator(".product-reviews-overview a");
  }

  /**
   * Navigate to a category
   * @param {string} category - Category URL path
   */
  async navigateToCategory(category) {
    await this.page.goto(`/${category}`);
  }

  /**
   * Navigate to a specific product
   * @param {string} productSlug - Product URL slug
   */
  async navigateToProduct(productSlug) {
    await this.page.goto(`/${productSlug}`);
  }

  /**
   * Navigate to Build Your Own Computer page
   */
  async navigateToBuildComputer() {
    await this.page.goto("/build-your-own-computer");
  }

  /**
   * Navigate to a simple product (Computing and Internet book)
   */
  async navigateToSimpleProduct() {
    await this.page.goto("/computing-and-internet");
  }

  /**
   * Add current product to cart (simple product)
   */
  async addToCart() {
    await this.addToCartButton.first().click();
  }

  /**
   * Add product to cart with quantity
   * @param {number} quantity - Number of items to add
   */
  async addToCartWithQuantity(quantity) {
    await this.quantityInput.fill(quantity.toString());
    await this.addToCart();
  }

  /**
   * Configure and add computer to cart
   * @param {Object} config - Configuration options
   * processor: 'slow' (2.2 GHz) or 'fast' (2.5 GHz)
   * ram: '2gb', '4gb', or '8gb'
   * hdd: '320' or '400'
   * os: 'ubuntu', 'windows7', or 'windows10'
   * software: array of ['office', 'acrobat', 'commander']
   */
  async configureAndAddComputer(config = {}) {
    // Processor values: 13 = 2.2 GHz, 14 = 2.5 GHz
    const processorMap = {
      slow: "13",
      fast: "14",
      2.2: "13",
      2.5: "14",
    };

    // RAM values: 15 = 2GB, 16 = 4GB, 17 = 8GB
    const ramMap = {
      "2gb": "15",
      "4gb": "16",
      "8gb": "17",
    };

    // Select processor
    if (config.processor) {
      const processorValue = processorMap[config.processor] || "14";
      await this.processorSelect.selectOption(processorValue);
    }

    // Select RAM
    if (config.ram) {
      const ramValue = ramMap[config.ram] || "15";
      await this.ramSelect.selectOption(ramValue);
    }

    // Select HDD (required - must select one)
    if (config.hdd === "400" || config.hdd === "400gb") {
      await this.hddRadio400.check();
    } else {
      await this.hddRadio320.check(); // Default to 320 GB
    }

    // OS is already defaulted to Ubuntu on the page, only change if needed
    if (config.os === "windows7") {
      await this.osWindows7.check();
    } else if (config.os === "windows10") {
      await this.osWindows10.check();
    }
    // Ubuntu is default, no action needed

    // Software options (Microsoft Office is checked by default, uncheck if not wanted)
    // Note: By default MS Office is checked on the page
    if (config.software && !config.software.includes("office")) {
      // Uncheck MS Office if it's checked and not wanted
      if (await this.softwareMsOffice.isChecked()) {
        await this.softwareMsOffice.uncheck();
      }
    }
    if (config.software) {
      if (config.software.includes("acrobat")) {
        await this.softwareAcrobat.check();
      }
      if (config.software.includes("commander")) {
        await this.softwareTotalCommander.check();
      }
    }

    // Wait a moment for price to update
    await this.page.waitForTimeout(500);

    // Add to cart
    await this.addToCartButton.first().click();
  }

  /**
   * Add product to wishlist
   */
  async addToWishlist() {
    await this.addToWishlistButton.click();
  }

  /**
   * Add product to compare list
   */
  async addToCompare() {
    await this.addToCompareButton.click();
  }

  /**
   * Get product name from detail page
   * @returns {Promise<string>}
   */
  async getProductName() {
    return await this.productName.textContent();
  }

  /**
   * Sort products
   * @param {string} sortBy - Sort option value
   */
  async sortProducts(sortBy) {
    await this.sortBySelect.selectOption(sortBy);
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Set products per page
   * @param {string} count - Number of products per page
   */
  async setProductsPerPage(count) {
    await this.displaySelect.selectOption(count);
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Get all product titles on page
   * @returns {Promise<string[]>}
   */
  async getProductTitles() {
    const titles = [];
    const elements = await this.productTitle.all();
    for (const element of elements) {
      titles.push(await element.textContent());
    }
    return titles;
  }

  /**
   * Click on first product in listing
   */
  async clickFirstProduct() {
    await this.productTitle.first().click();
  }

  /**
   * Click on a specific product by name
   * @param {string} productName - Name of the product to click
   */
  async clickProductByName(productName) {
    await this.page
      .locator(`.product-title a:has-text("${productName}")`)
      .click();
  }

  /**
   * Get notification message (for add to cart confirmation)
   * @returns {Promise<string>}
   */
  async getNotificationMessage() {
    try {
      const notification = this.page.locator(
        "#bar-notification, .bar-notification"
      );
      await notification.waitFor({ state: "visible", timeout: 5000 });
      const content = await notification.locator(".content").textContent();
      return content || "";
    } catch {
      return "";
    }
  }
}

module.exports = { ProductPage };
