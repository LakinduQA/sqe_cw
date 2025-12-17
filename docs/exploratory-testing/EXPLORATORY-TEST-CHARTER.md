# Exploratory Test Charter

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Senithi Mathangaweera  
**Date:** December 17, 2025  
**Session Duration:** 60 minutes

---

## Charter Information

| Field             | Details                            |
| ----------------- | ---------------------------------- |
| **Charter ID**    | ETC-001                            |
| **Session Type**  | Exploratory Testing                |
| **Tester**        | Senithi Mathangaweera              |
| **Date Executed** | December 17, 2025                  |
| **Time Box**      | 60 minutes                         |
| **Application**   | Tricentis Demo Web Shop            |
| **URL**           | https://demowebshop.tricentis.com/ |
| **Browser**       | Google Chrome (Latest)             |

---

## 1. Charter Mission

**Explore** the product search, browsing, and shopping cart functionality  
**With** various user scenarios and edge cases  
**To discover** potential issues not covered by scripted test cases

---

## 2. Areas to Explore

### 2.1 Product Search Functionality

| Focus Area         | What to Test                                  |
| ------------------ | --------------------------------------------- |
| Keyword Search     | Search by product names, categories, keywords |
| Partial Search     | Search with partial product names             |
| Special Characters | Search with symbols, numbers, special chars   |
| Empty Search       | Submit empty search query                     |
| Case Sensitivity   | Search with different case combinations       |

### 2.2 Product Browsing

| Focus Area          | What to Test                             |
| ------------------- | ---------------------------------------- |
| Category Navigation | Browse all product categories            |
| Product Display     | Verify product information is complete   |
| Add to Cart Buttons | Check all products have purchase options |
| Product Images      | Verify images load correctly             |
| Price Display       | Verify prices are shown correctly        |

### 2.3 Shopping Cart Operations

| Focus Area        | What to Test                            |
| ----------------- | --------------------------------------- |
| Add Products      | Add various products to cart            |
| Quantity Changes  | Test quantity field with various values |
| Remove Products   | Remove products from cart               |
| Cart Persistence  | Verify cart persists across pages       |
| Multiple Products | Add multiple different products         |

---

## 3. Test Ideas / Heuristics Used

### 3.1 Heuristics Applied

| Heuristic          | Description                                      |
| ------------------ | ------------------------------------------------ |
| **CRUD**           | Create, Read, Update, Delete operations          |
| **Boundaries**     | Min/max values, empty inputs, special characters |
| **User Scenarios** | Common user workflows and edge cases             |
| **Consistency**    | Same feature behaves same across categories      |
| **Error Handling** | How system handles unexpected inputs             |

### 3.2 Test Ideas Explored

1. Search by category name (e.g., "Books", "Electronics")
2. Add products from different categories to cart
3. Navigate through all subcategories
4. Check all product detail pages have required elements
5. Test products with special configurations
6. Verify consistent UI across all product types

---

## 4. Session Notes

### 4.1 Observations

| Time  | Area             | Observation                                            |
| ----- | ---------------- | ------------------------------------------------------ |
| 00:05 | Product Search   | Started exploring search functionality                 |
| 00:12 | Search Results   | Noticed search by "Books" keyword returns no results   |
| 00:20 | Electronics      | Some products in Electronics lack "Add to Cart" button |
| 00:35 | Product Details  | Clicked on product - no "Add to Cart" on detail page   |
| 00:45 | Other Categories | Books, Jewelry, Apparel categories work correctly      |
| 00:55 | Documentation    | Captured screenshots for all issues found              |

### 4.2 Risks Identified

| Risk Level | Description                                       |
| ---------- | ------------------------------------------------- |
| High       | Some products cannot be purchased at all          |
| Medium     | Search functionality doesn't index category names |
| Medium     | Inconsistent product display across categories    |

---

## 5. Defects Found

### Summary

| Defect ID | Test ID | Summary                                       | Severity |
| --------- | ------- | --------------------------------------------- | -------- |
| DEF-002   | ETC01   | Search "Books" returns no products            | Medium   |
| DEF-003   | ETC02   | Some Electronics products missing Add to Cart | Medium   |
| DEF-004   | ETC03   | Product detail page missing Add to Cart       | High     |

### Detailed Findings

#### ETC01: Search by Category Name Issue

- **Steps:** Enter "Books" in search box → Click Search
- **Expected:** Products from Books category displayed
- **Actual:** "No products were found" message
- **Evidence:** `ETC01_BookKeyword_Search.png`
- **Defect Logged:** DEF-002

#### ETC02: Missing Add to Cart on Product Listing

- **Steps:** Navigate to Electronics → Camera/Photo
- **Expected:** All products show "Add to Cart" button
- **Actual:** Some products have no purchase option
- **Evidence:** `ETC02_NoAddtoCart.png`
- **Defect Logged:** DEF-003

#### ETC03: Missing Add to Cart on Product Detail Page

- **Steps:** Click on affected product → View detail page
- **Expected:** "Add to Cart" button available
- **Actual:** No way to add product to cart
- **Evidence:** `ETC03_ItemDisplayNo_Addtocart.png`
- **Defect Logged:** DEF-004

---

## 6. Test Coverage

### Areas Covered

| Area                    | Coverage | Notes                          |
| ----------------------- | -------- | ------------------------------ |
| Product Search          | ✅       | Tested various keywords        |
| Category Navigation     | ✅       | All categories explored        |
| Product Display         | ✅       | Multiple products checked      |
| Add to Cart - Listing   | ✅       | Issues found in Electronics    |
| Add to Cart - Details   | ✅       | Issues found for some products |
| Shopping Cart Functions | ✅       | Covered in manual testing      |

### Areas NOT Covered (Defer to Next Session)

| Area                   | Reason                    |
| ---------------------- | ------------------------- |
| Wishlist Functionality | Time constraint           |
| Compare Products       | Lower priority            |
| Email a Friend         | Lower priority            |
| Gift Card Purchase     | Covered in manual testing |

---

## 7. Session Metrics

| Metric                       | Value      |
| ---------------------------- | ---------- |
| **Session Duration**         | 60 minutes |
| **Test Ideas Explored**      | 12         |
| **Defects Found**            | 3          |
| **Defect Severity - High**   | 1          |
| **Defect Severity - Medium** | 2          |
| **Defect Severity - Low**    | 0          |
| **Screenshots Captured**     | 3          |
| **Areas Explored**           | 6          |

---

## 8. Recommendations

### Immediate Actions

1. **Investigate DEF-004** - High priority as products cannot be purchased
2. **Fix search indexing** - Include category names in search results
3. **Verify all product pages** - Audit all products for missing Add to Cart

### Future Exploratory Testing

1. Conduct additional session for wishlist and compare features
2. Test with different user roles (guest vs. registered)
3. Explore checkout flow edge cases
4. Performance testing on product search

---

## 9. Session Debrief

### What Went Well

- Discovered 3 significant defects not found in scripted testing
- All issues properly documented with screenshots
- Good coverage of core shopping functionality

### What Could Be Improved

- More time needed for comprehensive coverage
- Should test with multiple browsers
- Include mobile responsive testing

### Lessons Learned

- Exploratory testing complements scripted tests effectively
- Category-specific issues require targeted exploration
- Product search functionality needs more thorough testing

---

## 10. Sign-Off

| Role        | Name                  | Signature  | Date       |
| ----------- | --------------------- | ---------- | ---------- |
| Tester      | Senithi Mathangaweera | **\_\_\_** | 12/17/2025 |
| Reviewed By | Lakindu De Silva      | **\_\_\_** | 12/17/2025 |

---

## Appendix: Screenshots

| File Name                         | Description                         |
| --------------------------------- | ----------------------------------- |
| ETC01_BookKeyword_Search.png      | Search results for "Books" keyword  |
| ETC02_NoAddtoCart.png             | Product listing missing Add to Cart |
| ETC03_ItemDisplayNo_Addtocart.png | Product detail page without button  |

---

**Document End**
