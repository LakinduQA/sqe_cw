# Test Coverage Report

## Tricentis Demo Web Shop

**Document Version:** 2.0  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025

---

## Executive Summary

| Metric                        | Value       |
| ----------------------------- | ----------- |
| Total Manual Test Cases       | 40          |
| Automated Test Cases          | 30          |
| Automated Tests Executed      | 30          |
| Automated Tests Passed        | 30          |
| Automated Tests Failed        | 0           |
| **Automation Pass Rate**      | **100%**    |
| **Automation Coverage**       | **75%**     |

---

## Automation Coverage by Testing Type

| Testing Type              | Total TCs | Automated | Manual Only | Auto Pass Rate |
| ------------------------- | --------- | --------- | ----------- | -------------- |
| Functional Testing        | 20        | 16        | 4           | 100%           |
| Usability Testing         | 6         | 1         | 5           | 100%           |
| UI/UX Testing             | 6         | 0         | 6           | N/A            |
| Boundary/Negative Testing | 8         | 5         | 3           | 100%           |
| **Total**                 | **40**    | **22**    | **18**      | **100%**       |

---

## Coverage by Module/Feature

| Module                 | Requirements   | Test Cases   | Automated | Passed | Coverage |
| ---------------------- | -------------- | ------------ | --------- | ------ | -------- |
| User Registration      | TR-001         | 7 tests      | 7         | 7      | 100%     |
| User Login/Logout      | TR-002         | 9 tests      | 9         | 9      | 100%     |
| Shopping Cart          | TR-004         | 9 tests      | 9         | 9      | 100%     |
| Checkout               | TR-006         | 5 tests      | 5         | 5      | 100%     |
| Product Search         | TR-005         | -            | 0         | -      | Manual   |
| Product Browsing       | TR-003, TR-007 | -            | 0         | -      | Manual   |
| Navigation & Usability | TR-003         | -            | 0         | -      | Manual   |
| UI/UX Elements         | -              | -            | 0         | -      | Manual   |

---

## Requirements Traceability Summary

| Requirement ID | Requirement Description                     | Automation Status | Test Result |
| -------------- | ------------------------------------------- | ----------------- | ----------- |
| TR-001         | User Registration Must Work Correctly       | ✅ AT-001 (7)     | ✅ Pass     |
| TR-002         | User Authentication Must Be Secure          | ✅ AT-002 (9)     | ✅ Pass     |
| TR-003         | Navigation Must Work Correctly              | ❌ Manual         | Pending     |
| TR-004         | Shopping Cart Must Function Properly        | ✅ AT-003 (9)     | ✅ Pass     |
| TR-005         | Product Search Must Return Accurate Results | ❌ Manual         | Pending     |
| TR-006         | Checkout Process Must Complete Successfully | ✅ AT-004 (5)     | ✅ Pass     |
| TR-007         | Product Display Must Be Accurate            | ❌ Manual         | Pending     |
| TR-008         | Form Validations Must Prevent Invalid Data  | ✅ Covered        | ✅ Pass     |

---

## Automation Coverage

| Test Suite    | Total Tests | Executed | Passed | Failed | Pass Rate |
| ------------- | ----------- | -------- | ------ | ------ | --------- |
| AT-001        | 7           | 7        | 7      | 0      | 100%      |
| AT-002        | 9           | 9        | 9      | 0      | 100%      |
| AT-003        | 9           | 9        | 9      | 0      | 100%      |
| AT-004        | 5           | 5        | 5      | 0      | 100%      |
| **Total**     | **30**      | **30**   | **30** | **0**  | **100%**  |

### Automated Test Suites - Detailed Results

| Suite ID | Scenario          | Tests | Execution Date     | Duration | Result    |
| -------- | ----------------- | ----- | ------------------ | -------- | --------- |
| AT-001   | User Registration | 7     | Dec 15, 2025 1:41PM | 36.3s    | ✅ Pass   |
| AT-002   | User Login        | 9     | Dec 15, 2025 1:41PM | 48.6s    | ✅ Pass   |
| AT-003   | Shopping Cart     | 9     | Dec 15, 2025 1:41PM | 61.3s    | ✅ Pass   |
| AT-004   | E2E Checkout      | 5     | Dec 15, 2025 1:41PM | 98.7s    | ✅ Pass   |

---

## Test Execution Progress

### Automation Results (Dec 15, 2025)

```
Total Automated Tests: 30
|████████████████████████████████████████| 30 Passed (100%)
|                                        |  0 Failed (0%)
|                                        |  0 Skipped (0%)

Execution Time: 4.1 minutes
Browser: Chromium
```

---

## Defect Density

| Module           | Test Cases | Defects Found | Defect Density |
| ---------------- | ---------- | ------------- | -------------- |
| User Management  | 8          | 0             | 0.00           |
| Product Browsing | 4          | 0             | 0.00           |
| Shopping Cart    | 7          | 0             | 0.00           |
| Checkout         | 2          | 0             | 0.00           |
| UI/UX            | 12         | 0             | 0.00           |
| Forms/Validation | 7          | 0             | 0.00           |
| **Total**        | **40**     | **0**         | **0.00**       |

---

## Risk Assessment Based on Coverage

| Area                | Coverage % | Risk Level  | Notes                              |
| ------------------- | ---------- | ----------- | ---------------------------------- |
| Core Functionality  | 100%       | 🟢 Low      | Fully automated and passing        |
| User Authentication | 100%       | 🟢 Low      | AT-001, AT-002 passing             |
| Shopping Cart       | 100%       | 🟢 Low      | AT-003 fully passing               |
| Checkout Process    | 100%       | 🟢 Low      | AT-004 E2E tests passing           |
| Navigation/UI       | 0%         | 🟡 Medium   | Manual testing recommended         |

---

## Conclusion

All **30 automated tests** have been executed successfully with a **100% pass rate**. The automation suite covers:

- ✅ User Registration (7 tests) - All passing
- ✅ User Login/Logout (9 tests) - All passing  
- ✅ Shopping Cart Operations (9 tests) - All passing
- ✅ End-to-End Checkout (5 tests) - All passing

**Recommendation:** The application meets all tested requirements for the automated critical paths. Manual testing is recommended for navigation, UI/UX, and additional edge cases.

---

## Sign-Off

| Role        | Name             | Signature  | Date       |
| ----------- | ---------------- | ---------- | ---------- |
| QA Engineer | Lakindu De Silva | __________ | 12/15/2025 |

---

## Document History

| Version | Date         | Author           | Changes                              |
| ------- | ------------ | ---------------- | ------------------------------------ |
| 1.0     | Dec 15, 2025 | Lakindu De Silva | Initial template                     |
| 2.0     | Dec 15, 2025 | Lakindu De Silva | Updated with automation test results |
