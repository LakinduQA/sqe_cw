# Manual Test Execution Report

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Lakindu De Silva  
**Execution Date:** December 16, 2025  
**Team Members:** Chamath Madurasinghe, Senithi Mathangaweera

---

## Executive Summary

Manual testing of the Tricentis Demo Web Shop has been completed. A total of **40 test cases** were executed across 4 categories. The overall pass rate is **97.5%** with 1 defect identified.

| Metric           | Value     |
| ---------------- | --------- |
| Total Test Cases | 40        |
| Passed           | 39        |
| Failed           | 1         |
| Blocked          | 0         |
| Pass Rate        | **97.5%** |
| Defects Found    | 1         |

---

## Test Execution Summary

### By Category

| Category                                | Total  | Passed | Failed | Pass Rate |
| --------------------------------------- | ------ | ------ | ------ | --------- |
| Functional Testing (TC001-TC020)        | 20     | 20     | 0      | 100%      |
| Usability Testing (TC021-TC026)         | 6      | 6      | 0      | 100%      |
| UI/UX Testing (TC027-TC032)             | 6      | 6      | 0      | 100%      |
| Boundary/Negative Testing (TC033-TC040) | 8      | 7      | 1      | 87.5%     |
| **Total**                               | **40** | **39** | **1**  | **97.5%** |

### By Tester

| Tester                | Test Cases  | Passed | Failed | Pass Rate |
| --------------------- | ----------- | ------ | ------ | --------- |
| Chamath Madurasinghe  | TC001-TC020 | 20     | 0      | 100%      |
| Senithi Mathangaweera | TC021-TC040 | 19     | 1      | 95%       |
| **Total**             | **40**      | **39** | **1**  | **97.5%** |

---

## Test Execution Details

### Functional Testing (TC001-TC020) - Executed by Chamath Madurasinghe

| TC ID | Test Case Title                        | Status  | Notes                                |
| ----- | -------------------------------------- | ------- | ------------------------------------ |
| TC001 | Valid User Registration                | ✅ Pass | Registration completed successfully  |
| TC002 | Registration with Existing Email       | ✅ Pass | Error message displayed correctly    |
| TC003 | Registration with Invalid Email Format | ✅ Pass | Validation working as expected       |
| TC004 | Registration with Mismatched Passwords | ✅ Pass | Password mismatch error shown        |
| TC005 | Valid User Login                       | ✅ Pass | Login successful                     |
| TC006 | Login with Invalid Credentials         | ✅ Pass | Error message displayed              |
| TC007 | Login with Empty Fields                | ✅ Pass | Validation prevents empty submission |
| TC008 | User Logout                            | ✅ Pass | Logout successful                    |
| TC009 | Search for Existing Product            | ✅ Pass | Search results returned correctly    |
| TC010 | Search with No Results                 | ✅ Pass | "No products found" message shown    |
| TC011 | Browse Category Products               | ✅ Pass | Category navigation works            |
| TC012 | Filter Products by Price               | ✅ Pass | Price filter applied correctly       |
| TC013 | Sort Products by Price                 | ✅ Pass | Sorting works as expected            |
| TC014 | View Product Details                   | ✅ Pass | Product page displays correctly      |
| TC015 | Add Simple Product to Cart             | ✅ Pass | Product added successfully           |
| TC016 | Add Configurable Product to Cart       | ✅ Pass | Configuration options work           |
| TC017 | Update Product Quantity in Cart        | ✅ Pass | Quantity updates correctly           |
| TC018 | Remove Product from Cart               | ✅ Pass | Product removed successfully         |
| TC019 | Apply Discount Code                    | ✅ Pass | Invalid code error shown             |
| TC020 | Proceed to Checkout                    | ✅ Pass | Checkout process initiates           |

### Usability Testing (TC021-TC026) - Executed by Senithi Mathangaweera

| TC ID | Test Case Title                    | Status  | Notes                                 |
| ----- | ---------------------------------- | ------- | ------------------------------------- |
| TC021 | Navigation Menu Accessibility      | ✅ Pass | All categories visible and accessible |
| TC022 | Breadcrumb Navigation              | ✅ Pass | Breadcrumbs work correctly            |
| TC023 | Search Box Accessibility           | ✅ Pass | Search visible on all pages           |
| TC024 | Cart Mini-Preview Functionality    | ✅ Pass | Dropdown preview works                |
| TC025 | Error Message Clarity              | ✅ Pass | Error messages are clear              |
| TC026 | Form Field Labels and Placeholders | ✅ Pass | Labels properly displayed             |

### UI/UX Testing (TC027-TC032) - Executed by Senithi Mathangaweera

| TC ID | Test Case Title              | Status  | Notes                         |
| ----- | ---------------------------- | ------- | ----------------------------- |
| TC027 | Homepage Layout Verification | ✅ Pass | Layout displays correctly     |
| TC028 | Product Image Display        | ✅ Pass | Images load without errors    |
| TC029 | Price Display Format         | ✅ Pass | Prices formatted consistently |
| TC030 | Button Styling and States    | ✅ Pass | Buttons have proper feedback  |
| TC031 | Footer Links Verification    | ✅ Pass | All footer links work         |
| TC032 | Header Elements Alignment    | ✅ Pass | Header properly aligned       |

### Boundary/Negative Testing (TC033-TC040) - Executed by Senithi Mathangaweera

| TC ID | Test Case Title                         | Status      | Notes                                |
| ----- | --------------------------------------- | ----------- | ------------------------------------ |
| TC033 | Quantity Field with Zero Value          | ✅ Pass     | Product removed from cart            |
| TC034 | Quantity Field with Negative Value      | ❌ **Fail** | No error message, product disappears |
| TC035 | Quantity Field with Maximum Value       | ✅ Pass     | Maximum limit enforced (10000)       |
| TC036 | Password with Minimum Length            | ✅ Pass     | Minimum 6 characters enforced        |
| TC037 | Registration with Empty Required Fields | ✅ Pass     | All required field errors shown      |
| TC038 | Contact Form with Empty Fields          | ✅ Pass     | Validation errors displayed          |
| TC039 | Checkout Without Agreeing to Terms      | ✅ Pass     | Terms acceptance required            |
| TC040 | Gift Card Without Required Fields       | ✅ Pass     | Recipient validation works           |

---

## Defects Found

| Defect ID | Related TC | Summary                                                                         | Severity | Status |
| --------- | ---------- | ------------------------------------------------------------------------------- | -------- | ------ |
| DEF-001   | TC034      | No error message when entering negative quantity - product disappears from cart | Medium   | Open   |

### DEF-001 Details

**Issue:** When a user enters a negative quantity (e.g., -5) in the shopping cart and clicks "Update shopping cart", the system:

- Does NOT display any error message
- Removes the product from the cart entirely
- Shows "Your Shopping Cart is empty" message

**Expected Behavior:**

- Display validation error for invalid quantity
- Keep product in cart with valid quantity

---

## Test Environment

| Component        | Details                            |
| ---------------- | ---------------------------------- |
| Website URL      | https://demowebshop.tricentis.com/ |
| Browser          | Google Chrome (Latest)             |
| Operating System | Windows 11                         |
| Test Date        | December 16, 2025                  |
| Network          | Stable internet connection         |

---

## Observations & Notes

### Positive Findings

1. **User Registration/Login** - All authentication flows work correctly with proper validation
2. **Product Browsing** - Categories, search, and filtering function as expected
3. **Shopping Cart** - Core cart functionality (add, update, remove) works well
4. **Checkout Process** - Checkout flow is stable and properly validates terms acceptance
5. **Error Handling** - Most validation errors are clear and user-friendly
6. **UI Consistency** - Layout and styling are consistent across the site

### Areas of Concern

1. **Input Validation Gap** - Negative quantity handling in cart lacks proper validation
2. **Silent Failures** - System removes items without user notification when invalid input detected

---

## Recommendations

1. **Fix DEF-001** - Implement proper validation for quantity field to reject negative values
2. **Add Client-Side Validation** - Prevent negative numbers from being entered in quantity fields
3. **Improve Error Feedback** - Always show clear error messages when user input is invalid

---

## Conclusion

The Tricentis Demo Web Shop demonstrates solid functionality across most tested areas. With a **97.5% pass rate**, the application is generally stable and user-friendly. The one identified defect (DEF-001) is of **Medium severity** and does not block core business functionality, though it should be addressed to improve user experience.

---

## Sign-Off

| Role          | Name                  | Signature  | Date       |
| ------------- | --------------------- | ---------- | ---------- |
| Test Lead     | Lakindu De Silva      | **\_\_\_** | 12/16/2025 |
| Test Executor | Chamath Madurasinghe  | **\_\_\_** | 12/16/2025 |
| Test Executor | Senithi Mathangaweera | **\_\_\_** | 12/16/2025 |
