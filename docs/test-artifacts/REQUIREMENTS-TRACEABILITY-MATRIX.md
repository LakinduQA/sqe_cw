# Requirements Traceability Matrix (RTM)

## Demo Web Shop - https://demowebshop.tricentis.com/

**Project:** SQE Coursework - Software Testing  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025  
**Version:** 1.0

---

## 1. Document Purpose

This Requirements Traceability Matrix (RTM) establishes a clear link between:

- **Testing Requirements** (TR-001 to TR-008)
- **Manual Test Cases** (TC001 to TC040)
- **Automated Test Cases** (AT-001 to AT-004)

The RTM ensures complete test coverage and provides traceability from requirements to test execution.

---

## 2. Traceability Summary

| Metric                         | Count      |
| ------------------------------ | ---------- |
| Total Requirements             | 8          |
| Total Manual Test Cases        | 40         |
| Total Automated Test Scenarios | 4          |
| Total Automated Test Cases     | 30         |
| Requirements Covered           | 8/8 (100%) |

---

## 3. Requirements to Test Cases Matrix

### TR-001: User Registration Must Work Correctly

| Requirement ID  | TR-001                                                                     |
| --------------- | -------------------------------------------------------------------------- |
| **Priority**    | Critical                                                                   |
| **Description** | The registration form must allow new users to create accounts successfully |

| Test Case ID | Test Case Title                             | Type              | Automation Status |
| ------------ | ------------------------------------------- | ----------------- | ----------------- |
| TC001        | Verify homepage loads successfully          | Functional        | ❌ Manual         |
| TC002        | Verify user registration with valid details | Functional        | ✅ AT-001         |
| TC003        | Verify login with valid credentials         | Functional        | -                 |
| TC027        | Register with empty mandatory fields        | Boundary/Negative | ✅ AT-001         |
| TC028        | Register with invalid email format          | Boundary/Negative | ✅ AT-001         |
| TC029        | Register with mismatched passwords          | Boundary/Negative | ✅ AT-001         |

**Automated Tests (AT-001: Registration):**
| Auto Test ID | Test Name | Status |
|--------------|-----------|--------|
| AT-001-01 | should display registration form correctly | ✅ Pass |
| AT-001-02 | should show validation errors for empty form submission | ✅ Pass |
| AT-001-03 | should show error for invalid email format | ✅ Pass |
| AT-001-04 | should show error for password mismatch | ✅ Pass |
| AT-001-05 | should show error for weak password | ✅ Pass |
| AT-001-06 | should successfully register with valid data | ✅ Pass |
| AT-001-07 | should show error when registering with existing email | ✅ Pass |

---

### TR-002: User Authentication Must Be Secure

| Requirement ID  | TR-002                                            |
| --------------- | ------------------------------------------------- |
| **Priority**    | Critical                                          |
| **Description** | Users must be able to securely log in and log out |

| Test Case ID | Test Case Title                     | Type              | Automation Status |
| ------------ | ----------------------------------- | ----------------- | ----------------- |
| TC003        | Verify login with valid credentials | Functional        | ✅ AT-002         |
| TC004        | Verify logout functionality         | Functional        | ✅ AT-002         |
| TC030        | Login with incorrect password       | Boundary/Negative | ✅ AT-002         |
| TC031        | Login with non-existent email       | Boundary/Negative | ✅ AT-002         |
| TC035        | Verify session timeout behavior     | Boundary/Negative | ❌ Manual         |

**Automated Tests (AT-002: Login):**
| Auto Test ID | Test Name | Status |
|--------------|-----------|--------|
| AT-002-01 | should display login form correctly | ✅ Pass |
| AT-002-02 | should show validation error for empty email | ✅ Pass |
| AT-002-03 | should show error for non-existent account | ✅ Pass |
| AT-002-04 | should show error for incorrect password | ✅ Pass |
| AT-002-05 | should login successfully with valid credentials | ✅ Pass |
| AT-002-06 | should display user email after login | ✅ Pass |
| AT-002-07 | should remember login with Remember Me option | ✅ Pass |
| AT-002-08 | should logout successfully | ✅ Pass |
| AT-002-09 | should redirect to login page after logout | ✅ Pass |

---

### TR-003: Navigation Must Work Correctly

| Requirement ID  | TR-003                                          |
| --------------- | ----------------------------------------------- |
| **Priority**    | High                                            |
| **Description** | All navigation elements must function correctly |

| Test Case ID | Test Case Title                                    | Type       | Automation Status |
| ------------ | -------------------------------------------------- | ---------- | ----------------- |
| TC005        | Verify main navigation menu works                  | Functional | ❌ Manual         |
| TC006        | Verify footer links work correctly                 | Functional | ❌ Manual         |
| TC015        | Verify category filtering works                    | Functional | ❌ Manual         |
| TC016        | Verify product sorting functionality               | Functional | ❌ Manual         |
| TC021        | Verify consistent header across pages              | Usability  | ❌ Manual         |
| TC022        | Verify footer is present on all pages              | Usability  | ❌ Manual         |
| TC025        | Verify navigation elements are styled consistently | UI/UX      | ❌ Manual         |
| TC026        | Verify active menu state indication                | UI/UX      | ❌ Manual         |

---

### TR-004: Shopping Cart Must Function Properly

| Requirement ID  | TR-004                                                             |
| --------------- | ------------------------------------------------------------------ |
| **Priority**    | Critical                                                           |
| **Description** | The shopping cart must accurately manage products and calculations |

| Test Case ID | Test Case Title                          | Type              | Automation Status |
| ------------ | ---------------------------------------- | ----------------- | ----------------- |
| TC007        | Verify adding product to cart            | Functional        | ✅ AT-003         |
| TC008        | Verify cart page displays added items    | Functional        | ✅ AT-003         |
| TC009        | Verify updating product quantity in cart | Functional        | ✅ AT-003         |
| TC010        | Verify removing product from cart        | Functional        | ✅ AT-003         |
| TC032        | Add zero/negative quantity to cart       | Boundary/Negative | ✅ AT-003         |
| TC033        | Update quantity to zero                  | Boundary/Negative | ✅ AT-003         |
| TC036        | Test cart with maximum quantity          | Boundary/Negative | ✅ AT-003         |

**Automated Tests (AT-003: Shopping Cart):**
| Auto Test ID | Test Name | Status |
|--------------|-----------|--------|
| AT-003-01 | should add a simple product to cart | ✅ Pass |
| AT-003-02 | should display added product in cart page | ✅ Pass |
| AT-003-03 | should add configurable product with options | ✅ Pass |
| AT-003-04 | should update product quantity in cart | ✅ Pass |
| AT-003-05 | should show correct total after quantity update | ✅ Pass |
| AT-003-06 | should remove product from cart | ✅ Pass |
| AT-003-07 | should handle empty cart state | ✅ Pass |
| AT-003-08 | should add multiple different products | ✅ Pass |
| AT-003-09 | should calculate correct subtotal for multiple items | ✅ Pass |

---

### TR-005: Product Search Must Return Accurate Results

| Requirement ID  | TR-005                                                 |
| --------------- | ------------------------------------------------------ |
| **Priority**    | High                                                   |
| **Description** | The search functionality must return relevant products |

| Test Case ID | Test Case Title                     | Type              | Automation Status |
| ------------ | ----------------------------------- | ----------------- | ----------------- |
| TC013        | Verify product search functionality | Functional        | ❌ Manual         |
| TC014        | Verify search with no results       | Functional        | ❌ Manual         |
| TC017        | Verify breadcrumb navigation        | Functional        | ❌ Manual         |
| TC034        | Search with special characters      | Boundary/Negative | ❌ Manual         |

---

### TR-006: Checkout Process Must Complete Successfully

| Requirement ID  | TR-006                                                   |
| --------------- | -------------------------------------------------------- |
| **Priority**    | Critical                                                 |
| **Description** | Users must be able to complete the full checkout process |

| Test Case ID | Test Case Title                              | Type              | Automation Status |
| ------------ | -------------------------------------------- | ----------------- | ----------------- |
| TC011        | Verify checkout process initiation           | Functional        | ✅ AT-004         |
| TC012        | Verify complete checkout flow                | Functional        | ✅ AT-004         |
| TC023        | Verify checkout progress indicators          | Usability         | ✅ AT-004         |
| TC037        | Proceed to checkout without terms acceptance | Boundary/Negative | ❌ Manual         |
| TC038        | Checkout with empty required fields          | Boundary/Negative | ❌ Manual         |

**Automated Tests (AT-004: Checkout):**
| Auto Test ID | Test Name | Status |
|--------------|-----------|--------|
| AT-004-01 | should navigate to checkout page | ✅ Pass |
| AT-004-02 | should require terms of service acceptance | ✅ Pass |
| AT-004-03 | should complete billing address step | ✅ Pass |
| AT-004-04 | should complete full checkout process | ✅ Pass |
| AT-004-05 | should display order confirmation | ✅ Pass |

---

### TR-007: Product Display Must Be Accurate

| Requirement ID  | TR-007                                           |
| --------------- | ------------------------------------------------ |
| **Priority**    | Medium                                           |
| **Description** | Product information must be displayed accurately |

| Test Case ID | Test Case Title                               | Type              | Automation Status |
| ------------ | --------------------------------------------- | ----------------- | ----------------- |
| TC018        | Verify product details page displays all info | Functional        | ❌ Manual         |
| TC019        | Verify product comparison feature             | Functional        | ❌ Manual         |
| TC020        | Verify recently viewed products               | Functional        | ❌ Manual         |
| TC039        | Access non-existent product page              | Boundary/Negative | ❌ Manual         |
| TC040        | Test product comparison with maximum items    | Boundary/Negative | ❌ Manual         |

---

### TR-008: Form Validations Must Prevent Invalid Data

| Requirement ID  | TR-008                                                      |
| --------------- | ----------------------------------------------------------- |
| **Priority**    | High                                                        |
| **Description** | All forms must validate user input and prevent invalid data |

| Test Case ID | Test Case Title                       | Type              | Automation Status |
| ------------ | ------------------------------------- | ----------------- | ----------------- |
| TC027        | Register with empty mandatory fields  | Boundary/Negative | ✅ AT-001         |
| TC028        | Register with invalid email format    | Boundary/Negative | ✅ AT-001         |
| TC029        | Register with mismatched passwords    | Boundary/Negative | ✅ AT-001         |
| TC030        | Login with incorrect password         | Boundary/Negative | ✅ AT-002         |
| TC031        | Login with non-existent email         | Boundary/Negative | ✅ AT-002         |
| TC024        | Verify error message display is clear | Usability         | ✅ AT-001, AT-002 |

---

## 4. Complete Traceability Matrix (Summary View)

| Req ID | Requirement Name    | Priority | Test Cases                                             | Automated Tests  | Coverage       |
| ------ | ------------------- | -------- | ------------------------------------------------------ | ---------------- | -------------- |
| TR-001 | User Registration   | Critical | TC001, TC002, TC027, TC028, TC029                      | AT-001 (7 tests) | ✅ Full        |
| TR-002 | User Authentication | Critical | TC003, TC004, TC030, TC031, TC035                      | AT-002 (9 tests) | ✅ Full        |
| TR-003 | Navigation          | High     | TC005, TC006, TC015, TC016, TC021, TC022, TC025, TC026 | -                | ⚠️ Manual Only |
| TR-004 | Shopping Cart       | Critical | TC007, TC008, TC009, TC010, TC032, TC033, TC036        | AT-003 (9 tests) | ✅ Full        |
| TR-005 | Product Search      | High     | TC013, TC014, TC017, TC034                             | -                | ⚠️ Manual Only |
| TR-006 | Checkout Process    | Critical | TC011, TC012, TC023, TC037, TC038                      | AT-004 (5 tests) | ✅ Full        |
| TR-007 | Product Display     | Medium   | TC018, TC019, TC020, TC039, TC040                      | -                | ⚠️ Manual Only |
| TR-008 | Form Validations    | High     | TC024, TC027-TC031                                     | AT-001, AT-002   | ✅ Full        |

---

## 5. Test Case to Requirement Mapping

| Test Case | Title                                | Requirement(s) | Priority | Auto |
| --------- | ------------------------------------ | -------------- | -------- | ---- |
| TC001     | Homepage loads successfully          | TR-001         | High     | ❌   |
| TC002     | User registration with valid details | TR-001         | Critical | ✅   |
| TC003     | Login with valid credentials         | TR-002         | Critical | ✅   |
| TC004     | Logout functionality                 | TR-002         | High     | ✅   |
| TC005     | Main navigation menu works           | TR-003         | High     | ❌   |
| TC006     | Footer links work correctly          | TR-003         | Medium   | ❌   |
| TC007     | Adding product to cart               | TR-004         | Critical | ✅   |
| TC008     | Cart page displays items             | TR-004         | Critical | ✅   |
| TC009     | Updating product quantity            | TR-004         | High     | ✅   |
| TC010     | Removing product from cart           | TR-004         | High     | ✅   |
| TC011     | Checkout process initiation          | TR-006         | Critical | ✅   |
| TC012     | Complete checkout flow               | TR-006         | Critical | ✅   |
| TC013     | Product search functionality         | TR-005         | High     | ❌   |
| TC014     | Search with no results               | TR-005         | Medium   | ❌   |
| TC015     | Category filtering works             | TR-003         | High     | ❌   |
| TC016     | Product sorting functionality        | TR-003         | Medium   | ❌   |
| TC017     | Breadcrumb navigation                | TR-005         | Medium   | ❌   |
| TC018     | Product details page                 | TR-007         | High     | ❌   |
| TC019     | Product comparison feature           | TR-007         | Medium   | ❌   |
| TC020     | Recently viewed products             | TR-007         | Low      | ❌   |
| TC021     | Consistent header across pages       | TR-003         | Medium   | ❌   |
| TC022     | Footer on all pages                  | TR-003         | Low      | ❌   |
| TC023     | Checkout progress indicators         | TR-006         | Medium   | ✅   |
| TC024     | Error message display is clear       | TR-008         | Medium   | ✅   |
| TC025     | Navigation styled consistently       | TR-003         | Low      | ❌   |
| TC026     | Active menu state indication         | TR-003         | Low      | ❌   |
| TC027     | Register with empty fields           | TR-001, TR-008 | High     | ✅   |
| TC028     | Register with invalid email          | TR-001, TR-008 | High     | ✅   |
| TC029     | Register with mismatched passwords   | TR-001, TR-008 | High     | ✅   |
| TC030     | Login with incorrect password        | TR-002, TR-008 | High     | ✅   |
| TC031     | Login with non-existent email        | TR-002, TR-008 | High     | ✅   |
| TC032     | Add zero/negative quantity           | TR-004         | Medium   | ✅   |
| TC033     | Update quantity to zero              | TR-004         | Medium   | ✅   |
| TC034     | Search with special characters       | TR-005         | Medium   | ❌   |
| TC035     | Session timeout behavior             | TR-002         | Medium   | ❌   |
| TC036     | Cart with maximum quantity           | TR-004         | Medium   | ✅   |
| TC037     | Checkout without terms               | TR-006         | High     | ❌   |
| TC038     | Checkout with empty fields           | TR-006         | High     | ❌   |
| TC039     | Non-existent product page            | TR-007         | Medium   | ❌   |
| TC040     | Product comparison max items         | TR-007         | Low      | ❌   |

---

## 6. Coverage Analysis

### 6.1 Requirements Coverage

| Coverage Type                  | Count | Percentage |
| ------------------------------ | ----- | ---------- |
| Requirements with Automation   | 5/8   | 62.5%      |
| Requirements with Manual Tests | 8/8   | 100%       |
| Total Requirements Covered     | 8/8   | 100%       |

### 6.2 Test Case Distribution by Requirement

```
TR-001 (Registration):     ████████ 5 test cases
TR-002 (Authentication):   █████████ 5 test cases
TR-003 (Navigation):       █████████████████ 8 test cases
TR-004 (Shopping Cart):    █████████████ 7 test cases
TR-005 (Search):           ███████ 4 test cases
TR-006 (Checkout):         ████████ 5 test cases
TR-007 (Product Display):  ████████ 5 test cases
TR-008 (Form Validation):  █████████ 6 test cases
```

### 6.3 Automation Coverage

| Category          | Manual Only | Automated | Total  |
| ----------------- | ----------- | --------- | ------ |
| Functional        | 10          | 10        | 20     |
| Usability         | 5           | 1         | 6      |
| UI/UX             | 6           | 0         | 6      |
| Boundary/Negative | 3           | 5         | 8      |
| **Total**         | **24**      | **16**    | **40** |

**Automation Percentage:** 40% (16 out of 40 test cases have automated coverage)

---

## 7. Risk Assessment

### High Priority Requirements (Must be fully tested)

| Requirement            | Risk Level | Mitigation                  |
| ---------------------- | ---------- | --------------------------- |
| TR-001: Registration   | Critical   | ✅ Full automation coverage |
| TR-002: Authentication | Critical   | ✅ Full automation coverage |
| TR-004: Shopping Cart  | Critical   | ✅ Full automation coverage |
| TR-006: Checkout       | Critical   | ✅ Full automation coverage |

### Medium Priority Requirements

| Requirement             | Risk Level | Mitigation                           |
| ----------------------- | ---------- | ------------------------------------ |
| TR-003: Navigation      | Medium     | Manual testing with screenshots      |
| TR-005: Search          | Medium     | Manual testing with screenshots      |
| TR-008: Form Validation | Medium     | ✅ Covered via other automated tests |

### Lower Priority Requirements

| Requirement             | Risk Level | Mitigation                 |
| ----------------------- | ---------- | -------------------------- |
| TR-007: Product Display | Low        | Manual visual verification |

---

## 8. Approval

| Role        | Name             | Signature      | Date           |
| ----------- | ---------------- | -------------- | -------------- |
| QA Engineer | Lakindu De Silva | \***\*\_\*\*** | \***\*\_\*\*** |
| Reviewer    | \***\*\_\*\***   | \***\*\_\*\*** | \***\*\_\*\*** |

---

## Document History

| Version | Date         | Author           | Changes              |
| ------- | ------------ | ---------------- | -------------------- |
| 1.0     | Dec 15, 2024 | Lakindu De Silva | Initial RTM creation |

---

_This RTM ensures complete traceability between requirements and test cases, supporting the SQE coursework objectives of comprehensive test coverage and documentation._
