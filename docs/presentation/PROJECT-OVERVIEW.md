# Project Overview - Simple Explanation

## SQE Coursework: Testing the Tricentis Demo Web Shop

---

## 🎯 What We Did

We tested an **e-commerce demo website** (https://demowebshop.tricentis.com/) to find bugs and ensure it works correctly. This is like testing Amazon or any online shopping site.

---

## 📋 Testing Requirements (What We Checked)

We created **8 Testing Requirements** based on the website's main features:

| ID         | Requirement         | What It Means                            |
| ---------- | ------------------- | ---------------------------------------- |
| **TR-001** | User Registration   | Can users create accounts properly?      |
| **TR-002** | User Authentication | Can users login/logout securely?         |
| **TR-003** | Navigation          | Do all links and menus work?             |
| **TR-004** | Shopping Cart       | Can users add/remove products from cart? |
| **TR-005** | Product Search      | Does search find the right products?     |
| **TR-006** | Checkout Process    | Can users complete a purchase?           |
| **TR-007** | Product Display     | Are product details shown correctly?     |
| **TR-008** | Form Validation     | Do forms reject invalid data?            |

**Why 8?** The assignment asked for 5-8 requirements. We chose 8 to cover all critical website functions.

---

## 📝 Test Cases (How We Tested)

We created **40 manual test cases** divided into 4 categories:

| Category              | Count | Purpose               | Examples                     |
| --------------------- | ----- | --------------------- | ---------------------------- |
| **Functional**        | 20    | Test if features work | Login, add to cart, checkout |
| **Usability**         | 6     | Test user experience  | Navigation, error messages   |
| **UI/UX**             | 6     | Test visual elements  | Layout, buttons, images      |
| **Boundary/Negative** | 8     | Test edge cases       | Empty fields, invalid inputs |

**Why 40?** The assignment required 40 test cases. We distributed them to cover different testing types.

---

## 🤖 Test Automation (Playwright)

We automated **30 tests** using **Playwright** with the **Page Object Model (POM)** pattern.

### Why Playwright?

- Modern automation tool
- Fast and reliable
- Easy to write and maintain tests
- Great reporting features

### Why Page Object Model?

- **Reusability**: Page classes can be reused across tests
- **Maintainability**: If UI changes, only update one file
- **Readability**: Tests are clean and easy to understand

### Automated Test Suites

| Suite      | Tests | What It Tests         |
| ---------- | ----- | --------------------- |
| **AT-001** | 7     | User Registration     |
| **AT-002** | 9     | Login/Logout          |
| **AT-003** | 9     | Shopping Cart         |
| **AT-004** | 5     | Checkout (End-to-End) |

**Result: 30/30 tests passed (100%)**

---

## 📊 Test Execution Results

### Combined Results

| Type      | Tests  | Passed | Failed | Pass Rate |
| --------- | ------ | ------ | ------ | --------- |
| Automated | 30     | 30     | 0      | 100%      |
| Manual    | 40     | 39     | 1      | 97.5%     |
| **Total** | **70** | **69** | **1**  | **98.6%** |

### What This Means

- The website works very well overall
- Only 1 test failed out of 70
- The failed test found a real bug (defect)

---

## 🐛 Defects Found

We found **4 defects** during testing:

### DEF-001: Negative Quantity Bug (Medium)

| Field             | Value                                         |
| ----------------- | --------------------------------------------- |
| **Test Case**     | TC034                                         |
| **Severity**      | Medium                                        |
| **What Happened** | Enter -5 quantity in cart, product disappears |
| **Expected**      | Should show error message                     |

### DEF-002: Books Search Returns No Products (Medium)

| Field             | Value                                    |
| ----------------- | ---------------------------------------- |
| **Test Case**     | ETC01 (Exploratory Testing)              |
| **Severity**      | Medium                                   |
| **What Happened** | Searching for "Books" shows no results   |
| **Expected**      | Should show products from Books category |

### DEF-003: Missing Add to Cart on Listing (Medium)

| Field             | Value                                           |
| ----------------- | ----------------------------------------------- |
| **Test Case**     | ETC02 (Exploratory Testing)                     |
| **Severity**      | Medium                                          |
| **What Happened** | Some Electronics products have no "Add to Cart" |
| **Expected**      | All products should have add to cart option     |

### DEF-004: Missing Add to Cart on Product Page (High)

| Field             | Value                                           |
| ----------------- | ----------------------------------------------- |
| **Test Case**     | ETC03 (Exploratory Testing)                     |
| **Severity**      | High                                            |
| **What Happened** | Product detail page has no "Add to Cart" button |
| **Expected**      | Users should be able to purchase the product    |
| **Impact**        | Product completely unpurchasable                |

---

## 📈 Key Metrics

| Metric                  | Value | Meaning                          |
| ----------------------- | ----- | -------------------------------- |
| **Test Coverage**       | 100%  | All 8 requirements tested        |
| **Pass Rate**           | 98.6% | Very high quality                |
| **Defect Density**      | 0.10  | Low (4 defects from testing)     |
| **Automation Coverage** | 75%   | 30 of 40 key scenarios automated |

---

## ✅ Release Decision: GO (Conditional)

### Why GO?

1. No Critical severity bugs
2. 98.6% pass rate (above 95% threshold)
3. Core features work correctly for most products
4. The High severity bug affects limited products only

### Conditions

1. Prioritize DEF-004 (High) for next sprint
2. Log all 4 defects in backlog
3. Document as known issues
4. Monitor for user complaints

---

## 📁 Documents Delivered

| Document             | Purpose                       |
| -------------------- | ----------------------------- |
| Testing Requirements | What we're testing            |
| Test Strategy        | How we approach testing       |
| Test Plan            | Schedule and scope            |
| 40 Test Cases        | Step-by-step tests            |
| Defect Report        | Bugs found                    |
| RTM                  | Requirements-to-tests mapping |
| Coverage Report      | What's covered                |
| Execution Reports    | Test results                  |
| Final Report         | Go/No-Go decision             |

---

## 👥 Team Contributions

| Member                    | Role   | Contribution                             |
| ------------------------- | ------ | ---------------------------------------- |
| **Lakindu De Silva**      | Lead   | Documentation, Automation, Final Reports |
| **Chamath Madurasinghe**  | Tester | Manual testing TC001-TC020               |
| **Senithi Mathangaweera** | Tester | Manual testing TC021-TC040               |

---

## 🎓 Key Learnings

1. **Planning is important** - Test strategy before execution
2. **Automation saves time** - 30 tests run in 4 minutes
3. **Negative testing finds bugs** - The defect was found in boundary testing
4. **Documentation matters** - Clear records of everything tested
5. **Teamwork works** - Dividing 40 test cases among team members

---

## Simple Summary

> We tested an online shopping website by creating 40 test cases and automating 30 of them. We found 4 defects (1 High, 3 Medium) including issues with search functionality and products that cannot be added to cart. The website passed 98.6% of tests and is ready for release with the condition that the High severity bug is prioritized for fix.
