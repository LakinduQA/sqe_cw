# Test Plan Document

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025  
**Project:** Tricentis DemoWebShop QA Suite

---

## 1. Document Information

| Field             | Value                              |
| ----------------- | ---------------------------------- |
| Project Name      | Tricentis Demo Web Shop Testing    |
| Application URL   | https://demowebshop.tricentis.com/ |
| Test Plan Version | 1.0                                |
| Created By        | Lakindu De Silva                   |
| Creation Date     | December 15, 2025                  |
| Last Updated      | December 15, 2025                  |

---

## 2. Introduction

### 2.1 Purpose

This Test Plan document describes the testing approach, objectives, scope, and schedule for testing the Tricentis Demo Web Shop e-commerce application. It identifies the items to be tested, features to be tested, testing tasks, personnel responsible, and associated risks.

### 2.2 Background

The Tricentis Demo Web Shop is an e-commerce demonstration website built on the nopCommerce platform. It provides full e-commerce functionality including product browsing, shopping cart, user accounts, and checkout processes.

### 2.3 Objectives

1. Verify all core e-commerce functionalities work correctly
2. Validate user interface and user experience
3. Test form validations and error handling
4. Identify and document any defects
5. Automate critical test scenarios
6. Provide quality assessment and release recommendation

---

## 3. Scope

### 3.1 Features to be Tested

| Module                 | Features                                       | Test Cases |
| ---------------------- | ---------------------------------------------- | ---------- |
| **User Management**    | Registration, Login, Logout, Password Recovery | 8          |
| **Product Browsing**   | Categories, Search, Filters, Sorting           | 6          |
| **Product Details**    | Images, Price, Description, Reviews, Options   | 5          |
| **Shopping Cart**      | Add, Update, Remove, Calculations              | 6          |
| **Wishlist**           | Add, View, Remove, Move to Cart                | 3          |
| **Checkout**           | Billing, Shipping, Payment, Confirmation       | 4          |
| **Forms & Validation** | Contact, Newsletter, Error Messages            | 4          |
| **UI/UX**              | Layout, Navigation, Responsiveness             | 4          |
| **Total**              |                                                | **40**     |

### 3.2 Features NOT to be Tested

| Feature            | Reason                                  |
| ------------------ | --------------------------------------- |
| Payment Processing | Demo environment (no real transactions) |
| Email Delivery     | External service                        |
| Admin Panel        | Out of scope                            |
| Mobile App         | Not applicable                          |
| API Endpoints      | Out of scope                            |
| Performance        | Not in requirements                     |

---

## 4. Test Scenarios Overview

### 4.1 Functional Test Scenarios (20 Test Cases)

#### User Management (8 TCs)

- TC001: Valid user registration
- TC002: Registration with existing email (negative)
- TC003: Registration with invalid email format (negative)
- TC004: Registration with mismatched passwords (negative)
- TC005: Valid user login
- TC006: Login with invalid credentials (negative)
- TC007: Login with empty fields (negative)
- TC008: Logout functionality

#### Product & Cart (12 TCs)

- TC009: Search for existing product
- TC010: Search with no results (negative)
- TC011: Browse category products
- TC012: Filter products by price
- TC013: Sort products by name/price
- TC014: View product details
- TC015: Add simple product to cart
- TC016: Add configurable product to cart
- TC017: Update product quantity in cart
- TC018: Remove product from cart
- TC019: Apply discount code
- TC020: Proceed to checkout

### 4.2 Usability Test Scenarios (6 Test Cases)

- TC021: Navigation menu accessibility
- TC022: Breadcrumb navigation
- TC023: Search box accessibility
- TC024: Cart mini-preview functionality
- TC025: Error message clarity
- TC026: Form field labels and placeholders

### 4.3 UI/UX Test Scenarios (6 Test Cases)

- TC027: Homepage layout verification
- TC028: Product image display
- TC029: Price display format
- TC030: Button styling and states
- TC031: Footer links verification
- TC032: Header elements alignment

### 4.4 Boundary/Negative Test Scenarios (8 Test Cases)

- TC033: Quantity field with zero value
- TC034: Quantity field with negative value
- TC035: Quantity field with max value
- TC036: Password with minimum length (boundary)
- TC037: Password with special characters only
- TC038: Email with maximum length
- TC039: Empty cart checkout attempt
- TC040: Gift card without required fields

---

## 5. Test Automation Plan

### 5.1 Automated Test Cases

| TC ID  | Scenario                      | Priority | Reason for Automation    |
| ------ | ----------------------------- | -------- | ------------------------ |
| AT-001 | User Registration             | Critical | Regression, Data-driven  |
| AT-002 | User Login                    | Critical | High frequency use       |
| AT-003 | Add to Cart                   | Critical | Core e-commerce function |
| AT-004 | E2E: Browse → Cart → Checkout | Critical | Business critical path   |

### 5.2 Automation Tool

**Playwright** - Modern end-to-end testing framework

### 5.3 Automation Deliverables

- Automated test scripts in `/automation` folder
- HTML test report
- Screenshots on failure
- Test execution logs

---

## 6. Test Environment

### 6.1 Environment Details

| Component             | Specification                      |
| --------------------- | ---------------------------------- |
| **URL**               | https://demowebshop.tricentis.com/ |
| **Environment Type**  | Demo/Test                          |
| **Browser**           | Google Chrome (Latest)             |
| **Operating System**  | Windows 10/11                      |
| **Screen Resolution** | 1920x1080                          |

### 6.2 Test Tools

| Tool                  | Purpose            |
| --------------------- | ------------------ |
| Playwright            | Test automation    |
| VS Code               | Script development |
| Chrome DevTools       | Debugging          |
| Windows Snipping Tool | Screenshots        |
| Git                   | Version control    |

---

## 7. Test Data

### 7.1 User Registration Data

| Scenario      | First Name | Last Name | Email                  | Password |
| ------------- | ---------- | --------- | ---------------------- | -------- |
| Valid         | Lakindu    | DeSilva   | lakindu.test@email.com | Test@123 |
| Invalid Email | Test       | User      | invalid-email          | Test@123 |
| Weak Password | Test       | User      | test@email.com         | 123      |
| Duplicate     | Lakindu    | DeSilva   | lakindu.test@email.com | Test@123 |

### 7.2 Product Test Data

| Product Type | Product Name                  | Expected Behavior         |
| ------------ | ----------------------------- | ------------------------- |
| Simple       | Computing and Internet (Book) | Direct add to cart        |
| Configurable | Build your own computer       | Requires option selection |
| Gift Card    | $25 Virtual Gift Card         | Requires recipient info   |

---

## 8. Entry and Exit Criteria

### 8.1 Entry Criteria

| Criteria                    | Status |
| --------------------------- | ------ |
| Test environment accessible | ☐      |
| Test plan approved          | ☐      |
| Test cases documented       | ☐      |
| Test data prepared          | ☐      |
| Automation scripts ready    | ☐      |

### 8.2 Exit Criteria

| Criteria             | Target |
| -------------------- | ------ |
| Test case execution  | 100%   |
| Pass rate            | ≥90%   |
| Critical defects     | 0 open |
| High defects         | 0 open |
| Automation pass rate | 100%   |

---

## 9. Test Execution Schedule

### Phase 1: Documentation (30 minutes)

- [x] Create Testing Requirements
- [x] Create Test Strategy
- [x] Create Test Plan
- [ ] Create Test Cases (40)
- [ ] Create Templates

### Phase 2: Automation (45 minutes)

- [ ] Setup Playwright project
- [ ] Write registration test
- [ ] Write login test
- [ ] Write add-to-cart test
- [ ] Write E2E checkout test
- [ ] Execute and verify

### Phase 3: Manual Testing & Reporting (2-3 hours)

- [ ] Execute manual test cases
- [ ] Capture screenshots
- [ ] Log defects
- [ ] Generate reports
- [ ] Create final documentation

---

## 10. Defect Management

### 10.1 Defect Tracking

All defects will be logged in the Defect Report document with:

- Unique Defect ID
- Summary
- Steps to reproduce
- Expected vs Actual result
- Severity and Priority
- Screenshot evidence
- Linked Test Case ID

### 10.2 Severity Definitions

| Severity | Definition                                        |
| -------- | ------------------------------------------------- |
| Critical | System crash, data loss, complete feature failure |
| High     | Major feature not working, significant impact     |
| Medium   | Feature partially working, workaround exists      |
| Low      | Minor/cosmetic issue                              |

---

## 11. Risks and Mitigations

| Risk                  | Impact | Probability | Mitigation                             |
| --------------------- | ------ | ----------- | -------------------------------------- |
| Website downtime      | High   | Low         | Take screenshots early, use recordings |
| Time constraints      | High   | Medium      | Prioritize critical test cases         |
| Test data conflicts   | Medium | Medium      | Use unique identifiers (timestamps)    |
| Flaky automation      | Medium | Medium      | Add proper waits, retry logic          |
| Browser compatibility | Low    | Low         | Focus on primary browser               |

---

## 12. Deliverables Checklist

| Deliverable                   | Status |
| ----------------------------- | ------ |
| Testing Requirements Document | ✅     |
| Test Strategy Document        | ✅     |
| Test Plan Document            | ✅     |
| Test Cases Document (40 TCs)  | ⬜     |
| Playwright Automation Scripts | ⬜     |
| Defect Report                 | ⬜     |
| Test Coverage Report          | ⬜     |
| Final Report                  | ⬜     |
| Presentation Slides           | ⬜     |

---

## 13. Approval

| Role         | Name               | Signature          | Date               |
| ------------ | ------------------ | ------------------ | ------------------ |
| QA Engineer  | Lakindu De Silva   | **\*\***\_**\*\*** | **\*\***\_**\*\*** |
| Project Lead | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\*\***\_**\*\*** |

---

## 14. Document History

| Version | Date         | Author           | Changes         |
| ------- | ------------ | ---------------- | --------------- |
| 1.0     | Dec 15, 2025 | Lakindu De Silva | Initial version |
