# 🤖 Test Automation Overview

**SQE Coursework - Lakindu De Silva**

---

## What We Automated

We automated **4 critical test scenarios** covering the core e-commerce functionality of the Demo Web Shop:

| Test Suite        | Tests  | Description              |
| ----------------- | ------ | ------------------------ |
| **Registration**  | 7      | User account creation    |
| **Login**         | 9      | User authentication      |
| **Shopping Cart** | 9      | Cart management          |
| **Checkout**      | 5      | End-to-end purchase flow |
| **Total**         | **30** | -                        |

---

## Why These Test Cases?

### 1. Registration (AT-001)

**Why automate?**

- ✅ **Critical functionality** - Users can't shop without an account
- ✅ **Repetitive** - Need to test with different data combinations
- ✅ **Regression prone** - Changes to forms often break validation

**What we test:**

- Valid registration
- Empty field validation
- Invalid email format
- Password mismatch
- Weak password rejection

---

### 2. Login (AT-002)

**Why automate?**

- ✅ **Core security feature** - Authentication must always work
- ✅ **Frequent use** - Every user session starts with login
- ✅ **Quick to automate** - Simple form with predictable behavior

**What we test:**

- Valid login after registration
- Invalid email format
- Wrong credentials
- Empty credentials
- Remember me functionality
- Logout functionality

---

### 3. Shopping Cart (AT-003)

**Why automate?**

- ✅ **Revenue critical** - Cart issues = lost sales
- ✅ **Complex interactions** - Add, update, remove items
- ✅ **Calculations** - Totals, quantities must be accurate

**What we test:**

- Add simple product
- Add configurable product (Build Computer)
- Update quantities
- Remove items
- Order total display
- Empty cart message
- Discount code handling
- Terms acceptance

---

### 4. End-to-End Checkout (AT-004)

**Why automate?**

- ✅ **Most critical path** - The entire purchase journey
- ✅ **Multi-step process** - Billing → Shipping → Payment → Confirm
- ✅ **Business value** - Failed checkout = zero revenue

**What we test:**

- Complete purchase flow (register → add product → checkout)
- Checkout with configurable product
- Checkout with multiple products
- Guest checkout behavior
- Order confirmation

---

## Automation Tool: Playwright

**Why Playwright?**
| Reason | Benefit |
|--------|---------|
| Modern framework | Reliable, fast, well-maintained |
| Auto-wait | No flaky tests from timing issues |
| Built-in reporting | HTML reports, screenshots, videos |
| Cross-browser | Works on Chromium, Firefox, WebKit |
| JavaScript | Easy to learn and use |

---

## Page Object Model (POM)

**Why POM?**
| Reason | Benefit |
|--------|---------|
| Maintainability | Changes in one place when UI changes |
| Reusability | Same page objects used across tests |
| Readability | Tests are clean and easy to understand |
| Organization | Clear separation of concerns |

---

## Test Results Summary

```
✅ 30 tests passed
❌ 0 tests failed
📊 100% pass rate
⏱️ ~4 minutes execution time
```

---

## Files Structure

```
automation/
├── pages/          → Page Object classes
│   ├── BasePage.js
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/          → Test specifications
│   ├── registration.spec.js
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
└── test-data/      → Test data
    └── testData.js
```

---

## Running the Tests

```bash
# Run all tests
npx playwright test

# Run with report
npx playwright test --reporter=html

# View report
npx playwright show-report
```

---

**Prepared by:** Lakindu De Silva  
**Date:** December 15, 2025
