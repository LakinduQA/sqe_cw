# Software Quality Engineering Coursework

## Final Test Report - Tricentis Demo Web Shop

---

**Module:** Software Quality Engineering (SQE)  
**Application Under Test:** https://demowebshop.tricentis.com/  
**Submission Date:** December 18, 2025

### Team Members

| Name                  | Role          | Responsibilities                             |
| --------------------- | ------------- | -------------------------------------------- |
| Lakindu De Silva      | Team Lead     | Documentation, Automation, Coordination      |
| Chamath Madurasinghe  | Test Executor | Manual Testing (TC001-TC020)                 |
| Senithi Mathangaweera | Test Executor | Manual Testing (TC021-TC040), Defect Logging |

---

## 1. Executive Summary

This report presents the testing conducted on the Tricentis Demo Web Shop e-commerce platform. Testing included functional, usability, UI/UX, and boundary testing through both manual and automated approaches.

### Key Results

| Metric                | Value                         |
| --------------------- | ----------------------------- |
| Total Test Cases      | 70 (40 Manual + 30 Automated) |
| Overall Pass Rate     | **98.6%**                     |
| Manual Tests          | 39/40 Pass (97.5%)            |
| Automated Tests       | 30/30 Pass (100%)             |
| Defects Found         | 4 (1 High, 3 Medium)          |
| Requirements Coverage | 100% (8/8)                    |
| **Release Decision**  | **GO (Conditional)**          |

---

## 2. Testing Requirements

Eight testing requirements were identified for the Demo Web Shop:

| ID     | Requirement                                 | Priority | Status       |
| ------ | ------------------------------------------- | -------- | ------------ |
| TR-001 | User Registration Must Work Correctly       | Critical | ✅ Verified  |
| TR-002 | User Authentication Must Be Secure          | Critical | ✅ Verified  |
| TR-003 | Navigation Must Work Correctly              | High     | ✅ Verified  |
| TR-004 | Shopping Cart Must Function Properly        | Critical | ⚠️ 1 Defect  |
| TR-005 | Product Search Must Return Accurate Results | High     | ⚠️ 1 Defect  |
| TR-006 | Checkout Process Must Complete Successfully | Critical | ✅ Verified  |
| TR-007 | Product Display Must Be Accurate            | Medium   | ⚠️ 2 Defects |
| TR-008 | Form Validations Must Prevent Invalid Data  | High     | ✅ Verified  |

---

## 3. Test Strategy & Plan

### 3.1 Testing Approach

- **Manual Testing:** 40 test cases covering all functional areas
- **Automated Testing:** 30 tests using Playwright with Page Object Model
- **Exploratory Testing:** Session-based testing for edge cases

### 3.2 Testing Types

| Type              | Test Cases  | Purpose                    |
| ----------------- | ----------- | -------------------------- |
| Functional        | TC001-TC020 | Core feature verification  |
| Usability         | TC021-TC026 | User experience validation |
| UI/UX             | TC027-TC032 | Visual consistency checks  |
| Boundary/Negative | TC033-TC040 | Edge case & error handling |

### 3.3 Tools & Environment

| Component            | Technology              |
| -------------------- | ----------------------- |
| Automation Framework | Playwright v1.57.0      |
| Language             | JavaScript              |
| Design Pattern       | Page Object Model (POM) |
| Browser              | Chromium                |
| CI/CD                | GitHub Actions          |

---

## 4. Test Cases Summary

### 4.1 Test Case Distribution

| Category          | IDs         | Count  | Pass   | Fail  | Pass Rate |
| ----------------- | ----------- | ------ | ------ | ----- | --------- |
| Functional        | TC001-TC020 | 20     | 20     | 0     | 100%      |
| Usability         | TC021-TC026 | 6      | 6      | 0     | 100%      |
| UI/UX             | TC027-TC032 | 6      | 6      | 0     | 100%      |
| Boundary/Negative | TC033-TC040 | 8      | 7      | 1     | 87.5%     |
| **Total**         |             | **40** | **39** | **1** | **97.5%** |

### 4.2 Test Cases List

| TC ID | Title                            | Type       | Status  |
| ----- | -------------------------------- | ---------- | ------- |
| TC001 | Valid User Registration          | Functional | ✅ Pass |
| TC002 | Registration with Existing Email | Functional | ✅ Pass |
| TC003 | Valid User Login                 | Functional | ✅ Pass |
| TC004 | User Logout                      | Functional | ✅ Pass |
| TC005 | Main Navigation Menu             | Functional | ✅ Pass |
| TC006 | Footer Links                     | Functional | ✅ Pass |
| TC007 | Add Product to Cart              | Functional | ✅ Pass |
| TC008 | View Shopping Cart               | Functional | ✅ Pass |
| TC009 | Update Cart Quantity             | Functional | ✅ Pass |
| TC010 | Remove Product from Cart         | Functional | ✅ Pass |
| TC011 | Initiate Checkout                | Functional | ✅ Pass |
| TC012 | Complete Checkout Flow           | Functional | ✅ Pass |
| TC013 | Product Search                   | Functional | ✅ Pass |
| TC014 | Search No Results                | Functional | ✅ Pass |
| TC015 | Category Filtering               | Functional | ✅ Pass |
| TC016 | Product Sorting                  | Functional | ✅ Pass |
| TC017 | Breadcrumb Navigation            | Functional | ✅ Pass |
| TC018 | Product Details Page             | Functional | ✅ Pass |
| TC019 | Product Comparison               | Functional | ✅ Pass |
| TC020 | Recently Viewed Products         | Functional | ✅ Pass |
| TC021 | Consistent Header                | Usability  | ✅ Pass |
| TC022 | Footer Presence                  | Usability  | ✅ Pass |
| TC023 | Checkout Progress Indicators     | Usability  | ✅ Pass |
| TC024 | Error Message Clarity            | Usability  | ✅ Pass |
| TC025 | Navigation Styling               | Usability  | ✅ Pass |
| TC026 | Active Menu State                | Usability  | ✅ Pass |
| TC027 | Responsive Layout                | UI/UX      | ✅ Pass |
| TC028 | Font Consistency                 | UI/UX      | ✅ Pass |
| TC029 | Color Scheme                     | UI/UX      | ✅ Pass |
| TC030 | Button Styling                   | UI/UX      | ✅ Pass |
| TC031 | Form Field Alignment             | UI/UX      | ✅ Pass |
| TC032 | Image Quality                    | UI/UX      | ✅ Pass |
| TC033 | Empty Cart Checkout              | Boundary   | ✅ Pass |
| TC034 | Negative Quantity in Cart        | Boundary   | ❌ Fail |
| TC035 | Session Timeout                  | Boundary   | ✅ Pass |
| TC036 | Maximum Quantity                 | Boundary   | ✅ Pass |
| TC037 | Checkout Without Terms           | Boundary   | ✅ Pass |
| TC038 | Empty Required Fields            | Boundary   | ✅ Pass |
| TC039 | Non-existent Product URL         | Boundary   | ✅ Pass |
| TC040 | Max Items Comparison             | Boundary   | ✅ Pass |

---

## 5. Test Automation

### 5.1 Automation Architecture

```
automation/
├── pages/           # Page Object Model Classes
│   ├── BasePage.js
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
└── tests/           # Test Specifications
    ├── registration.spec.js
    ├── login.spec.js
    ├── cart.spec.js
    └── checkout.spec.js
```

### 5.2 Automated Test Results

| Suite ID  | Description       | Tests  | Passed | Failed | Duration  |
| --------- | ----------------- | ------ | ------ | ------ | --------- |
| AT-001    | User Registration | 7      | 7      | 0      | 36.3s     |
| AT-002    | User Login/Logout | 9      | 9      | 0      | 48.6s     |
| AT-003    | Shopping Cart     | 9      | 9      | 0      | 61.3s     |
| AT-004    | Checkout Process  | 5      | 5      | 0      | 98.7s     |
| **Total** |                   | **30** | **30** | **0**  | **4m 5s** |

**Automation Pass Rate: 100%**

---

## 6. Defect Report

### 6.1 Defect Summary

| Severity  | Count | Open  | Closed |
| --------- | ----- | ----- | ------ |
| Critical  | 0     | 0     | 0      |
| High      | 1     | 1     | 0      |
| Medium    | 3     | 3     | 0      |
| Low       | 0     | 0     | 0      |
| **Total** | **4** | **4** | **0**  |

### 6.2 Defect Details

| ID      | Summary                                                                         | Severity | Module           | Related TC  |
| ------- | ------------------------------------------------------------------------------- | -------- | ---------------- | ----------- |
| DEF-001 | No error message when entering negative quantity - product disappears from cart | Medium   | Shopping Cart    | TC034       |
| DEF-002 | Search by category name "Books" returns no products                             | Medium   | Product Search   | Exploratory |
| DEF-003 | Electronics products missing "Add to Cart" button on listing page               | Medium   | Product Browsing | Exploratory |
| DEF-004 | Product detail page missing "Add to Cart" button for certain items              | **High** | Product Browsing | Exploratory |

### 6.3 DEF-001 Details (Failed Test Case)

**Steps to Reproduce:**

1. Add any product to cart
2. Go to Shopping Cart page
3. Change quantity to -1
4. Click "Update shopping cart"

**Expected:** Error message displayed, quantity rejected  
**Actual:** Product silently removed from cart, no error shown

---

## 7. Requirements Traceability Matrix

| Requirement             | Test Cases                                          | Automated      | Manual | Coverage |
| ----------------------- | --------------------------------------------------- | -------------- | ------ | -------- |
| TR-001: Registration    | TC001, TC002, TC027-TC029                           | AT-001 (7)     | 5      | ✅ 100%  |
| TR-002: Authentication  | TC003, TC004, TC030-TC031, TC035                    | AT-002 (9)     | 5      | ✅ 100%  |
| TR-003: Navigation      | TC005, TC006, TC015-TC016, TC021-TC022, TC025-TC026 | -              | 8      | ✅ 100%  |
| TR-004: Shopping Cart   | TC007-TC010, TC032-TC033, TC036                     | AT-003 (9)     | 7      | ✅ 100%  |
| TR-005: Product Search  | TC013-TC014, TC017, TC034                           | -              | 4      | ✅ 100%  |
| TR-006: Checkout        | TC011-TC012, TC023, TC037-TC038                     | AT-004 (5)     | 5      | ✅ 100%  |
| TR-007: Product Display | TC018-TC020, TC039-TC040                            | -              | 5      | ✅ 100%  |
| TR-008: Form Validation | TC024, TC027-TC031                                  | AT-001, AT-002 | 6      | ✅ 100%  |

**Requirements Coverage: 8/8 (100%)**

---

## 8. Test Coverage & Metrics

### 8.1 Coverage Summary

| Metric                | Value                        |
| --------------------- | ---------------------------- |
| Requirements Covered  | 8/8 (100%)                   |
| Test Cases Executed   | 40/40 (100%)                 |
| Automation Coverage   | 30 tests (75% of manual TCs) |
| Defect Detection Rate | 0.10 defects/test case       |

### 8.2 Results by Testing Type

| Type              | Tests | Pass | Fail | Rate  |
| ----------------- | ----- | ---- | ---- | ----- |
| Functional        | 20    | 20   | 0    | 100%  |
| Usability         | 6     | 6    | 0    | 100%  |
| UI/UX             | 6     | 6    | 0    | 100%  |
| Boundary/Negative | 8     | 7    | 1    | 87.5% |

### 8.3 Defect Density by Module

| Module           | Test Cases | Defects | Density |
| ---------------- | ---------- | ------- | ------- |
| User Management  | 8          | 0       | 0.00    |
| Product Search   | 2          | 1       | 0.50    |
| Product Browsing | 4          | 2       | 0.50    |
| Shopping Cart    | 7          | 1       | 0.14    |
| Checkout         | 2          | 0       | 0.00    |

---

## 9. Risk Assessment

| Risk                                 | Likelihood | Impact | Mitigation                                  |
| ------------------------------------ | ---------- | ------ | ------------------------------------------- |
| Negative quantity removes cart items | Low        | Medium | Document as known issue; fix in next sprint |
| Search by category name fails        | Medium     | Low    | Users can navigate via menu                 |
| Some products cannot be purchased    | Low        | High   | Affects limited Electronics products only   |

**Overall Risk Level: LOW-MEDIUM**

---

## 10. Conclusion & Recommendations

### 10.1 Release Decision: ✅ GO (Conditional)

**Rationale:**

- 98.6% combined pass rate exceeds 95% threshold
- No Critical severity defects
- All 8 requirements have been verified
- Core business flows (registration, login, cart, checkout) working correctly

**Conditions:**

1. All 4 defects logged in backlog
2. DEF-004 (High) prioritized for next sprint
3. Known issues documented for support team

### 10.2 Recommendations

**Immediate:**

- Add input validation for cart quantity field
- Fix "Add to Cart" button for affected products

**Short-term:**

- Expand automated test coverage to 50+ tests
- Add API-level testing
- Implement performance testing

### 10.3 Key Achievements

- ✅ 100% requirements coverage
- ✅ 100% automated test pass rate
- ✅ 97.5% manual test pass rate
- ✅ 4 defects identified and documented
- ✅ Comprehensive test documentation delivered

---

## Appendix

**Note:** Full test case details, screenshots, and automation code are available in the GitHub repository.

### Repository Structure

- `/docs/test-cases/` - Full test case documentation
- `/docs/defects/evidence/` - Defect screenshots and videos
- `/docs/screenshots/` - Manual test execution evidence
- `/automation/` - Playwright test automation code

---

## Sign-Off

| Role          | Name                  | Date         |
| ------------- | --------------------- | ------------ |
| Team Lead     | Lakindu De Silva      | Dec 18, 2025 |
| Test Executor | Chamath Madurasinghe  | Dec 18, 2025 |
| Test Executor | Senithi Mathangaweera | Dec 18, 2025 |

---

_SQE Coursework - December 2025_
