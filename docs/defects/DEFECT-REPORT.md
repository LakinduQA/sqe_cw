# Defect Report

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Senithi Mathangaweera
**Date:** December 16, 2025

---

## Defect Summary

| Severity  | Count | Open  | Closed |
| --------- | ----- | ----- | ------ |
| Critical  | 0     | 0     | 0      |
| High      | 1     | 1     | 0      |
| Medium    | 3     | 3     | 0      |
| Low       | 0     | 0     | 0      |
| **Total** | **4** | **4** | **0**  |

**Note:** 4 defects found - 1 during manual testing, 3 during exploratory testing.

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
- The product should remain in the cart with a valid quantity

**Actual Result:**

- No error message is displayed
- The product completely disappears from the cart
- The system shows "Your Shopping Cart is empty" message instead of validating the input

**Evidence:**

- Video: `evidence/DEF-001_negative_quantity_no_error.mkv`

---

### DEF-002: Search by Category Name "Books" Returns No Products

| Field           | Details                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| **Defect ID**   | DEF-002                                                                     |
| **Related TC**  | ETC01 (Exploratory Testing)                                                 |
| **Summary**     | Searching for keyword "Books" returns no products despite category existing |
| **Severity**    | Medium                                                                      |
| **Priority**    | P3-Medium                                                                   |
| **Status**      | Open                                                                        |
| **Reported By** | Senithi Mathangaweera                                                       |
| **Date Found**  | December 17, 2025                                                           |
| **Module**      | Product Search                                                              |
| **Browser**     | Chrome                                                                      |
| **Environment** | https://demowebshop.tricentis.com/                                          |

**Steps to Reproduce:**

1. Navigate to https://demowebshop.tricentis.com/
2. Enter "Books" in the search box
3. Click the "Search" button
4. Observe the search results

**Expected Result:**

- Search results should display products from the Books category
- Products containing "Books" in name, description, or category should appear
- Users should be able to find book products via search

**Actual Result:**

- "No products were found that matched your criteria" message displayed
- Zero products returned despite Books category having multiple products
- Search does not index category names, only product names/descriptions

**Impact:**

- Users cannot find book products using natural search terms
- Reduces discoverability of products
- Workaround: Navigate directly to Books category from menu

**Evidence:**

- Screenshot: `evidence/DEF-002_books_search_no_results.png`

---

### DEF-003: Electronics Products Missing "Add to Cart" Button on Listing Page

| Field           | Details                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| **Defect ID**   | DEF-003                                                                          |
| **Related TC**  | ETC02 (Exploratory Testing)                                                      |
| **Summary**     | Some electronics products cannot be added to cart directly from category listing |
| **Severity**    | Medium                                                                           |
| **Priority**    | P3-Medium                                                                        |
| **Status**      | Open                                                                             |
| **Reported By** | Senithi Mathangaweera                                                            |
| **Date Found**  | December 17, 2025                                                                |
| **Module**      | Product Browsing                                                                 |
| **Browser**     | Chrome                                                                           |
| **Environment** | https://demowebshop.tricentis.com/                                               |

**Steps to Reproduce:**

1. Navigate to https://demowebshop.tricentis.com/
2. Click on "Electronics" category
3. Browse the Camera/Photo subcategory
4. Observe product listing - some products lack "Add to cart" button

**Expected Result:**

- All products should have an "Add to cart" button on the listing page
- Or, products requiring configuration should show "View details" button
- Users should have a clear call-to-action for each product

**Actual Result:**

- Some products display without any add to cart option
- No button or link visible to purchase the product
- Inconsistent UI compared to other product categories

**Impact:**

- Users cannot quickly add these products to cart
- Reduced conversion rate for affected products
- Confusing user experience

**Evidence:**

- Screenshot: `evidence/DEF-003_missing_add_to_cart_listing.png`

---

### DEF-004: Product Detail Page Missing "Add to Cart" Button for Certain Items

| Field           | Details                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| **Defect ID**   | DEF-004                                                                    |
| **Related TC**  | ETC03 (Exploratory Testing)                                                |
| **Summary**     | Some products have no "Add to Cart" button even on the product detail page |
| **Severity**    | High                                                                       |
| **Priority**    | P2-High                                                                    |
| **Status**      | Open                                                                       |
| **Reported By** | Senithi Mathangaweera                                                      |
| **Date Found**  | December 17, 2025                                                          |
| **Module**      | Product Browsing                                                           |
| **Browser**     | Chrome                                                                     |
| **Environment** | https://demowebshop.tricentis.com/                                         |

**Steps to Reproduce:**

1. Navigate to https://demowebshop.tricentis.com/
2. Go to Electronics > Camera/Photo category
3. Click on an affected product to view details
4. Observe the product detail page

**Expected Result:**

- Product detail page should display "Add to Cart" button
- Users should be able to purchase the product
- All viewable products should be purchasable

**Actual Result:**

- No "Add to Cart" button is displayed on the product detail page
- User has no way to purchase this product
- Product is visible but not purchasable

**Impact:**

- **High Severity** - Product cannot be purchased at all
- Direct revenue loss for affected products
- No workaround available - product is completely unpurchasable
- Poor user experience - product appears available but cannot be bought

**Evidence:**

- Screenshot: `evidence/DEF-004_missing_add_to_cart_detail.png`

---

## Defect Metrics

### Defects by Module

| Module           | Critical | High  | Medium | Low   | Total |
| ---------------- | -------- | ----- | ------ | ----- | ----- |
| User Management  | 0        | 0     | 0      | 0     | 0     |
| Product Search   | 0        | 0     | 1      | 0     | 1     |
| Product Browsing | 0        | 1     | 1      | 0     | 2     |
| Shopping Cart    | 0        | 0     | 1      | 0     | 1     |
| Checkout         | 0        | 0     | 0      | 0     | 0     |
| UI/UX            | 0        | 0     | 0      | 0     | 0     |
| **Total**        | **0**    | **1** | **3**  | **0** | **4** |

---

## Sign-Off

| Role    | Name             | Signature        | Date       |
| ------- | ---------------- | ---------------- | ---------- |
| QA Lead | Lakindu De Silva | \***\*\_\_\*\*** | 12/15/2025 |
