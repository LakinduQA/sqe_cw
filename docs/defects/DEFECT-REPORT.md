# Defect Report

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025

---

## Defect Summary

| Severity  | Count | Open  | Closed |
| --------- | ----- | ----- | ------ |
| Critical  | 0     | 0     | 0      |
| High      | 0     | 0     | 0      |
| Medium    | 1     | 1     | 0      |
| Low       | 0     | 0     | 0      |
| **Total** | **1** | **1** | **0**  |

**Note:** 1 defect found during manual testing.

---

## Severity Definitions

| Severity     | Description                                                      | Example                              |
| ------------ | ---------------------------------------------------------------- | ------------------------------------ |
| **Critical** | System crash, data loss, complete feature failure, no workaround | Checkout fails completely, site down |
| **High**     | Major feature broken, significant impact, workaround exists      | Cannot add products to cart          |
| **Medium**   | Feature partially working, minor workaround needed               | Sort by price not working correctly  |
| **Low**      | Minor/cosmetic issue, no functional impact                       | Typo, minor UI misalignment          |

---

## Defect Log

### DEF-001: No Error Message When Adding Negative Quantity to Cart

| Field           | Details                                                               |
| --------------- | --------------------------------------------------------------------- |
| **Defect ID**   | DEF-001                                                               |
| **Related TC**  | TC034                                                                 |
| **Summary**     | No validation error displayed when entering negative quantity in cart |
| **Severity**    | Medium                                                                |
| **Priority**    | P3-Medium                                                             |
| **Status**      | Open                                                                  |
| **Reported By** | Lakindu De Silva                                                      |
| **Date Found**  | December 16, 2025                                                     |
| **Module**      | Shopping Cart                                                         |
| **Browser**     | Chrome                                                                |
| **Environment** | https://demowebshop.tricentis.com/                                    |

**Steps to Reproduce:**

1. Navigate to https://demowebshop.tricentis.com/
2. Add any product to cart
3. Go to Shopping Cart page
4. Change quantity to a negative number (e.g., -1)
5. Click "Update shopping cart" button

**Expected Result:**

- An error message should be displayed indicating that negative quantity is not allowed
- The quantity should not be updated to a negative value

**Actual Result:**

- No error message is displayed
- The system silently accepts the invalid input or behaves unexpectedly

**Evidence:**

- Screenshot: `DEF-001_negative_quantity_no_error.png`

---

## Defect Metrics

### Defects by Module

| Module           | Critical | High  | Medium | Low   | Total |
| ---------------- | -------- | ----- | ------ | ----- | ----- |
| User Management  | 0        | 0     | 0      | 0     | 0     |
| Product Browsing | 0        | 0     | 0      | 0     | 0     |
| Shopping Cart    | 0        | 0     | 1      | 0     | 1     |
| Checkout         | 0        | 0     | 0      | 0     | 0     |
| UI/UX            | 0        | 0     | 0      | 0     | 0     |
| **Total**        | **0**    | **0** | **1**  | **0** | **1** |

---

## Sign-Off

| Role        | Name             | Signature        | Date       |
| ----------- | ---------------- | ---------------- | ---------- |
| QA Engineer | Lakindu De Silva | \***\*\_\_\*\*** | 12/15/2025 |
