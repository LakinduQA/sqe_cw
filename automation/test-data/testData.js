/**
 * Test Data for Automation Tests
 *
 * SQE Coursework - Lakindu De Silva
 */

const timestamp = Date.now();

const testData = {
  // Valid registration data (unique email per run)
  validRegistration: {
    gender: "male",
    firstName: "Test",
    lastName: "User",
    email: `testuser${timestamp}@test.com`,
    password: "Test@12345",
    confirmPassword: "Test@12345",
  },

  // Valid login credentials (use after registration)
  validLogin: {
    email: `testuser${timestamp}@test.com`,
    password: "Test@12345",
  },

  // Existing test account (if available - may need to register first)
  existingUser: {
    email: "testuser@test.com",
    password: "Test@12345",
  },

  // Invalid login data for negative tests
  invalidLogin: {
    invalidEmail: "invalid.email.com",
    wrongEmail: "nonexistent@test.com",
    wrongPassword: "WrongPassword123",
  },

  // Registration with validation errors
  invalidRegistration: {
    emptyFields: {
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    invalidEmail: {
      gender: "male",
      firstName: "Test",
      lastName: "User",
      email: "invalidemail",
      password: "Test@12345",
      confirmPassword: "Test@12345",
    },
    passwordMismatch: {
      gender: "male",
      firstName: "Test",
      lastName: "User",
      email: `mismatch${timestamp}@test.com`,
      password: "Test@12345",
      confirmPassword: "Different123",
    },
    weakPassword: {
      gender: "male",
      firstName: "Test",
      lastName: "User",
      email: `weak${timestamp}@test.com`,
      password: "123",
      confirmPassword: "123",
    },
  },

  // Products for cart testing
  products: {
    // Simple product (from Books category)
    book: {
      category: "Books",
      name: "Computing and Internet",
      price: 10.0,
    },
    // Product from Electronics
    phone: {
      category: "Electronics",
      subcategory: "Cell phones",
      name: "Smartphone",
    },
    // Build your own computer (configurable product)
    customComputer: {
      processor: "slow", // 'slow' (2.2 GHz) or 'fast' (2.5 GHz +$15)
      ram: "2gb", // '2gb', '4gb' (+$20), or '8gb' (+$60)
      hdd: "320gb", // '320gb' or '400gb' (+$100)
      os: "vista-home", // 'vista-home', 'vista-premium' (+$60)
      software: ["ms-office", "acrobat-reader"], // optional software
    },
  },

  // Billing address for checkout
  billingAddress: {
    firstName: "Test",
    lastName: "User",
    email: `testuser${timestamp}@test.com`,
    country: "United States",
    state: "California",
    city: "Los Angeles",
    address1: "123 Test Street",
    zip: "90001",
    phone: "1234567890",
  },

  // Credit card test data (dummy)
  creditCard: {
    type: "Visa",
    name: "Test User",
    number: "4111111111111111",
    expireMonth: "12",
    expireYear: "2030",
    cvv: "123",
  },

  // Search terms
  searchTerms: {
    valid: "computer",
    noResults: "xyz123nonexistent",
    partial: "comp",
  },

  // Gift card data
  giftCard: {
    recipientName: "Recipient Name",
    recipientEmail: "recipient@test.com",
    senderName: "Sender Name",
    senderEmail: "sender@test.com",
    message: "Happy Birthday!",
  },

  // Contact form data
  contactForm: {
    name: "Test User",
    email: `testuser${timestamp}@test.com`,
    enquiry: "This is a test enquiry message for testing purposes.",
  },

  // Discount codes (for testing - may not be valid)
  discountCodes: {
    invalid: "INVALIDCODE123",
    expired: "EXPIRED2023",
  },

  // URLs for navigation tests
  urls: {
    home: "/",
    register: "/register",
    login: "/login",
    cart: "/cart",
    checkout: "/onepagecheckout",
    wishlist: "/wishlist",
    books: "/books",
    computers: "/computers",
    buildComputer: "/build-your-own-computer",
  },
};

// Generate unique email for each test run
function generateUniqueEmail(prefix = "test") {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}@test.com`;
}

// Get fresh registration data with unique email
function getRegistrationData() {
  const email = generateUniqueEmail("register");
  return {
    gender: "male",
    firstName: "Test",
    lastName: "User",
    email: email,
    password: "Test@12345",
    confirmPassword: "Test@12345",
  };
}

module.exports = {
  testData,
  generateUniqueEmail,
  getRegistrationData,
};
