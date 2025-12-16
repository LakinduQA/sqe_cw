# Test Cases Document

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025  
**Total Test Cases:** 40  

---

## Test Case Summary

| Category | Test Cases | Coverage |
|----------|------------|----------|
| Functional Testing | TC001 - TC020 | 50% |
| Usability Testing | TC021 - TC026 | 15% |
| UI/UX Testing | TC027 - TC032 | 15% |
| Boundary/Negative Testing | TC033 - TC040 | 20% |
| **Total** | **40** | **100%** |

---

## Legend

| Field | Description |
|-------|-------------|
| **TC ID** | Unique Test Case Identifier |
| **Priority** | High / Medium / Low |
| **Pre-conditions** | Required state before test |
| **Test Steps** | Numbered steps to execute |
| **Expected Result** | What should happen |
| **Actual Result** | What actually happened (fill during execution) |
| **Status** | Pass / Fail / Blocked / Not Executed |
| **Evidence** | Screenshot filename |

---

# FUNCTIONAL TESTING (TC001 - TC020)

---

## TC001: Valid User Registration

| Field | Details |
|-------|---------|
| **TC ID** | TC001 |
| **Module** | User Management |
| **Title** | Verify successful user registration with valid data |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is not logged in, on homepage |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Click on "Register" link in header
3. Select Gender (Male/Female)
4. Enter First Name: "Lakindu"
5. Enter Last Name: "DeSilva"
6. Enter Email: "lakindu.test@email.com"
7. Enter Password: "Test@123"
8. Enter Confirm Password: "Test@123"
9. Click "Register" button

**Expected Result:**
- Registration successful message displayed
- User is redirected to registration complete page
- "Continue" button is available

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC001_registration.png |

---

## TC002: Registration with Existing Email (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC002 |
| **Module** | User Management |
| **Title** | Verify registration fails with already registered email |
| **Priority** | High |
| **Type** | Functional - Negative |
| **Pre-conditions** | Email already registered in system |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Select Gender: Male
3. Enter First Name: "Test"
4. Enter Last Name: "User"
5. Enter Email: "lakindu.test@email.com" (existing email)
6. Enter Password: "Test@123"
7. Enter Confirm Password: "Test@123"
8. Click "Register" button

**Expected Result:**
- Error message displayed: "The specified email already exists"
- User remains on registration page
- Registration is not completed

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☑ Pass ☐ Fail | TC002_duplicate_email.png |

---

## TC003: Registration with Invalid Email Format (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC003 |
| **Module** | User Management |
| **Title** | Verify registration fails with invalid email format |
| **Priority** | High |
| **Type** | Functional - Negative |
| **Pre-conditions** | User is on registration page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Enter First Name: "Test"
3. Enter Last Name: "User"
4. Enter Email: "invalid-email-format"
5. Enter Password: "Test@123"
6. Enter Confirm Password: "Test@123"
7. Click "Register" button

**Expected Result:**
- Error message displayed indicating invalid email format
- User remains on registration page

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC003_invalid_email.png |

---

## TC004: Registration with Mismatched Passwords (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC004 |
| **Module** | User Management |
| **Title** | Verify registration fails when passwords don't match |
| **Priority** | High |
| **Type** | Functional - Negative |
| **Pre-conditions** | User is on registration page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Enter First Name: "Test"
3. Enter Last Name: "User"
4. Enter Email: "test.user@email.com"
5. Enter Password: "Test@123"
6. Enter Confirm Password: "Different@456"
7. Click "Register" button

**Expected Result:**
- Error message: "The password and confirmation password do not match"
- User remains on registration page

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC004_password_mismatch.png |

---

## TC005: Valid User Login

| Field | Details |
|-------|---------|
| **TC ID** | TC005 |
| **Module** | User Management |
| **Title** | Verify successful login with valid credentials |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User account exists |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/login
2. Enter Email: "lakindu.test@email.com"
3. Enter Password: "Test@123"
4. Click "Log in" button

**Expected Result:**
- User successfully logged in
- Header shows user email instead of "Log in" link
- "Log out" link appears in header

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC005_login_success.png |

---

## TC006: Login with Invalid Credentials (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC006 |
| **Module** | User Management |
| **Title** | Verify login fails with incorrect password |
| **Priority** | High |
| **Type** | Functional - Negative |
| **Pre-conditions** | User is on login page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/login
2. Enter Email: "test@email.com"
3. Enter Password: "WrongPassword123"
4. Click "Log in" button

**Expected Result:**
- Error message displayed: "Login was unsuccessful. Please correct the errors and try again."
- "No customer account found" or similar message shown
- User remains on login page

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC006_login_fail.png |

---

## TC007: Login with Empty Fields (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC007 |
| **Module** | User Management |
| **Title** | Verify login validation for empty fields |
| **Priority** | Medium |
| **Type** | Functional - Negative |
| **Pre-conditions** | User is on login page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/login
2. Leave Email field empty
3. Leave Password field empty
4. Click "Log in" button

**Expected Result:**
- Error message displayed for required fields
- User remains on login page

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC007_empty_login.png |

---

## TC008: User Logout

| Field | Details |
|-------|---------|
| **TC ID** | TC008 |
| **Module** | User Management |
| **Title** | Verify successful logout |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is logged in |

**Test Steps:**
1. Ensure user is logged in (email shown in header)
2. Click "Log out" link in header
3. Observe page state

**Expected Result:**
- User is logged out
- Header shows "Log in" link instead of email
- "Register" link reappears

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC008_logout.png |

---

## TC009: Search for Existing Product

| Field | Details |
|-------|---------|
| **TC ID** | TC009 |
| **Module** | Product Search |
| **Title** | Verify search returns relevant products |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is on any page with search box |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Enter "laptop" in search box
3. Click "Search" button

**Expected Result:**
- Search results page displayed
- Products containing "laptop" in name/description shown
- "14.1-inch Laptop" product appears in results

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC009_search_laptop.png |

---

## TC010: Search with No Results (Negative)

| Field | Details |
|-------|---------|
| **TC ID** | TC010 |
| **Module** | Product Search |
| **Title** | Verify appropriate message when no products found |
| **Priority** | Medium |
| **Type** | Functional - Negative |
| **Pre-conditions** | User is on any page with search box |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Enter "xyznonexistent123" in search box
3. Click "Search" button

**Expected Result:**
- Search results page displayed
- Message: "No products were found that matched your criteria"
- No product listings shown

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC010_search_no_results.png |

---

## TC011: Browse Category Products

| Field | Details |
|-------|---------|
| **TC ID** | TC011 |
| **Module** | Product Browsing |
| **Title** | Verify category navigation displays products |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is on homepage |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Click on "Books" category in main menu
3. Observe products displayed

**Expected Result:**
- Books category page loads
- Book products are displayed in grid/list view
- Page title shows "Books"
- Breadcrumb shows: Home / Books

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC011_browse_books.png |

---

## TC012: Filter Products by Price

| Field | Details |
|-------|---------|
| **TC ID** | TC012 |
| **Module** | Product Browsing |
| **Title** | Verify price filter functionality |
| **Priority** | Medium |
| **Type** | Functional |
| **Pre-conditions** | User is on category page with price filter |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/books
2. Click on "Under 25.00" price filter in sidebar
3. Observe filtered results

**Expected Result:**
- Only products priced under $25.00 are displayed
- URL updates with price filter parameter
- Filter can be removed

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC012_price_filter.png |

---

## TC013: Sort Products by Price

| Field | Details |
|-------|---------|
| **TC ID** | TC013 |
| **Module** | Product Browsing |
| **Title** | Verify sort by price functionality |
| **Priority** | Medium |
| **Type** | Functional |
| **Pre-conditions** | User is on category page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/books
2. Select "Price: Low to High" from Sort dropdown
3. Observe product order

**Expected Result:**
- Products re-ordered by price ascending
- Lowest priced product appears first
- Page refreshes with sorted results

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC013_sort_price.png |

---

## TC014: View Product Details

| Field | Details |
|-------|---------|
| **TC ID** | TC014 |
| **Module** | Product Details |
| **Title** | Verify product detail page displays correctly |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is on category page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/books
2. Click on "Computing and Internet" product
3. Observe product detail page

**Expected Result:**
- Product detail page loads
- Product image displayed
- Product title, price, description visible
- "Add to cart" button available
- Reviews link visible

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC014_product_detail.png |

---

## TC015: Add Simple Product to Cart

| Field | Details |
|-------|---------|
| **TC ID** | TC015 |
| **Module** | Shopping Cart |
| **Title** | Verify adding simple product to cart |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is on product detail page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/computing-and-internet
2. Verify quantity is set to 1
3. Click "Add to cart" button
4. Observe notification and cart count

**Expected Result:**
- Success message: "The product has been added to your shopping cart"
- Cart count in header increases
- Product visible in cart dropdown

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC015_add_simple_product.png |

---

## TC016: Add Configurable Product to Cart

| Field | Details |
|-------|---------|
| **TC ID** | TC016 |
| **Module** | Shopping Cart |
| **Title** | Verify adding configurable product with options |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User is on configurable product page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/build-your-own-computer
2. Select Processor: "2.5 GHz Intel Pentium Dual-Core E2200"
3. Select RAM: "4GB"
4. Select HDD: "320 GB"
5. Select OS: "Windows 10"
6. Check Software: "Microsoft Office"
7. Click "Add to cart" button

**Expected Result:**
- Success message displayed
- Cart count increases
- Product in cart shows selected configuration
- Price reflects selected options

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC016_add_configurable.png |

---

## TC017: Update Product Quantity in Cart

| Field | Details |
|-------|---------|
| **TC ID** | TC017 |
| **Module** | Shopping Cart |
| **Title** | Verify quantity update in shopping cart |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Change quantity from 1 to 3
3. Click "Update shopping cart" button
4. Observe totals

**Expected Result:**
- Quantity updated to 3
- Line total recalculated (unit price × 3)
- Cart subtotal updated accordingly

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC017_update_qty.png |

---

## TC018: Remove Product from Cart

| Field | Details |
|-------|---------|
| **TC ID** | TC018 |
| **Module** | Shopping Cart |
| **Title** | Verify product removal from cart |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Check the "Remove" checkbox for a product
3. Click "Update shopping cart" button

**Expected Result:**
- Product removed from cart
- Cart count decreases
- If last product, cart shows empty message

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC018_remove_product.png |

---

## TC019: Apply Discount Code

| Field | Details |
|-------|---------|
| **TC ID** | TC019 |
| **Module** | Shopping Cart |
| **Title** | Verify discount code functionality |
| **Priority** | Medium |
| **Type** | Functional |
| **Pre-conditions** | Cart has products, valid discount code available |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Enter discount code in "Discount Code" field
3. Click "Apply coupon" button
4. Observe cart totals

**Expected Result:**
- If valid: Discount applied and shown in totals
- If invalid: Error message displayed
- Note: Demo site may not have active coupons

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC019_discount_code.png |

---

## TC020: Proceed to Checkout (Logged In)

| Field | Details |
|-------|---------|
| **TC ID** | TC020 |
| **Module** | Checkout |
| **Title** | Verify checkout process initiation |
| **Priority** | High |
| **Type** | Functional |
| **Pre-conditions** | User logged in, cart has products |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Check "I agree with the terms of service"
3. Click "Checkout" button
4. Observe checkout page

**Expected Result:**
- Checkout page loads
- Billing address step displayed
- User can proceed with checkout steps

| Actual Result | Status | Evidence |
|---------------|--------|----------|
| | ☐ Pass ☐ Fail | TC020_checkout.png |

---

# USABILITY TESTING (TC021 - TC026)

---

## TC021: Navigation Menu Accessibility

| Field | Details |
|-------|---------|
| **TC ID** | TC021 |
| **Module** | Navigation |
| **Title** | Verify main navigation is accessible and intuitive |
| **Priority** | Medium |
| **Type** | Usability |
| **Pre-conditions** | User is on homepage |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Observe main navigation menu
3. Hover over each category
4. Click on different categories

**Expected Result:**
- All 7 categories visible in main menu
- Categories are clearly labeled
- Navigation is consistent across pages
- Active/current category is highlighted

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Main navigation menu is accessible and intuitive.<br> All categories are visible, clearly labeled, consistent across pages,<br>and the active category is highlighted as expected. | ☑ Pass ☐ Fail | TC021_navigation.png |

---

## TC022: Breadcrumb Navigation

| Field | Details |
|-------|---------|
| **TC ID** | TC022 |
| **Module** | Navigation |
| **Title** | Verify breadcrumb trail functionality |
| **Priority** | Medium |
| **Type** | Usability |
| **Pre-conditions** | User is on product detail page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/build-your-own-computer
2. Observe breadcrumb trail
3. Click on "Computers" in breadcrumb
4. Click on "Home" in breadcrumb

**Expected Result:**
- Breadcrumb shows: Home / Computers / Desktops / Build your own computer
- Each breadcrumb link is clickable
- Links navigate to correct pages

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|The breadcrumb trail was visible and correctly displayed the path "Home / Computers / Desktops / Build your own computer".<br> All links in the trail were clickable and navigated to the correct pages. |☑ Pass ☐ Fail | TC022_breadcrumb.png |

---

## TC023: Search Box Accessibility

| Field | Details |
|-------|---------|
| **TC ID** | TC023 |
| **Module** | Search |
| **Title** | Verify search box is easily accessible |
| **Priority** | Medium |
| **Type** | Usability |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to homepage
2. Navigate to category page
3. Navigate to product page
4. Navigate to cart page
5. Verify search box presence on each

**Expected Result:**
- Search box visible in header on all pages
- Placeholder text "Search store" is present
- Search button is clearly visible
- Search works from any page

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|The search box is visible in the header on the homepage, category page, product page, and cart page.<br>The placeholder text "Search store" is present, the search button is clearly visible,<br> and the search functionality works successfully from all pages. | ☑ Pass ☐ Fail | TC023_search_access.png |

---

## TC024: Cart Mini-Preview Functionality

| Field | Details |
|-------|---------|
| **TC ID** | TC024 |
| **Module** | Shopping Cart |
| **Title** | Verify cart dropdown preview |
| **Priority** | Medium |
| **Type** | Usability |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Add a product to cart
2. Hover over "Shopping cart" link in header
3. Observe dropdown preview
4. Click "Go to cart" button

**Expected Result:**
- Dropdown shows product thumbnail and name
- Subtotal displayed
- "Go to cart" button present
- Quick view of cart without page navigation

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|The dropdown preview appeared successfully when hovering over the "Shopping cart" link. <br>The preview correctly displayed the product thumbnail, name, and subtotal. The "Go to cart" button was present,<br> allowing for a quick view of the cart without navigating away from the current page.| ☑ Pass ☐ Fail | TC024_cart_preview.png |

---

## TC025: Error Message Clarity

| Field | Details |
|-------|---------|
| **TC ID** | TC025 |
| **Module** | Forms |
| **Title** | Verify error messages are clear and helpful |
| **Priority** | Medium |
| **Type** | Usability |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to registration page
2. Click Register without filling any fields
3. Observe error messages
4. Navigate to login page
5. Enter wrong password and submit
6. Observe error message

**Expected Result:**
- Error messages clearly indicate what's wrong
- Messages are near the relevant field
- Messages use plain language
- Red color or icon indicates error

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Error messages were displayed clearly in plain language near the relevant fields.<br> Red color/icons were present to indicate errors on both the registration and login pages, <br>matching the expected criteria. | ☑ Pass ☐ Fail | TC025_error_messages.png |

---

## TC026: Form Field Labels and Placeholders

| Field | Details |
|-------|---------|
| **TC ID** | TC026 |
| **Module** | Forms |
| **Title** | Verify form fields have proper labels |
| **Priority** | Low |
| **Type** | Usability |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to registration page
2. Observe all form field labels
3. Navigate to contact us page
4. Observe form field labels and placeholders

**Expected Result:**
- All fields have visible labels
- Required fields marked with asterisk (*)
- Placeholders provide guidance where applicable
- Labels are positioned correctly (above/beside fields)

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|All form fields displayed visible labels as expected. Required fields were correctly marked with an asterisk (*).<br> Placeholders provided clear guidance where applicable, and all labels were positioned correctly (above or beside the fields). | ☑ Pass ☐ Fail | TC026_form_labels.png |

---

# UI/UX TESTING (TC027 - TC032)

---

## TC027: Homepage Layout Verification

| Field | Details |
|-------|---------|
| **TC ID** | TC027 |
| **Module** | Homepage |
| **Title** | Verify homepage layout and elements |
| **Priority** | Medium |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/
2. Verify header elements
3. Verify main navigation
4. Verify featured products section
5. Verify sidebar elements
6. Verify footer

**Expected Result:**
- Logo displayed in header
- Navigation menu aligned horizontally
- Featured products displayed in grid
- Sidebar contains Categories, Tags, Newsletter
- Footer contains Information, Customer Service links

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|The logo is clearly displayed in the header. The navigation menu is aligned horizontally as required.<br> Featured products are correctly displayed in a grid layout. The sidebar successfully displays the Categories, Tags, and Newsletter sections.<br> The footer contains all expected Information and Customer Service links. | ☑ Pass ☐ Fail | TC027_homepage_layout.png |

---

## TC028: Product Image Display

| Field | Details |
|-------|---------|
| **TC ID** | TC028 |
| **Module** | Products |
| **Title** | Verify product images display correctly |
| **Priority** | Medium |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to a category page (e.g., Computers)
2. Observe product thumbnails
3. Click on a product
4. Observe product image on detail page
5. Click on thumbnail images (if available)

**Expected Result:**
- Thumbnails load without errors
- Images are properly sized
- Main image is larger on detail page
- Multiple images can be viewed (if available)
- No broken image icons

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Verified that product thumbnails loaded without errors and all images were properly sized.<br> The main image was displayed larger on the detail page, multiple images were viewable where available,<br> and no broken image icons were observed. | ☑ Pass ☐ Fail | TC028_product_images.png |

---

## TC029: Price Display Format

| Field | Details |
|-------|---------|
| **TC ID** | TC029 |
| **Module** | Products |
| **Title** | Verify price formatting and discount display |
| **Priority** | Medium |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/books
2. Observe products with discounts
3. Check old price vs new price display
4. Navigate to cart and check price format

**Expected Result:**
- Prices displayed with consistent format (XX.XX)
- Old price shown with strikethrough
- New/sale price highlighted
- Currency consistent throughout site

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Prices are consistently displayed in the correct format (XX.XX). The old price is clearly shown with a strikethrough,<br> while the new/sale price is highlighted. The currency symbol remains consistent throughout the site. | ☑ Pass ☐ Fail | TC029_price_format.png |

---

## TC030: Button Styling and States

| Field | Details |
|-------|---------|
| **TC ID** | TC030 |
| **Module** | UI Elements |
| **Title** | Verify button visual feedback |
| **Priority** | Low |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to product detail page
2. Observe "Add to cart" button styling
3. Hover over button (note any color change)
4. Click button (note any visual feedback)
5. Check buttons on other pages (Register, Login)

**Expected Result:**
- Buttons have consistent styling
- Hover state provides visual feedback
- Click/active state visible
- Primary actions (Add to cart) are prominent

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Buttons displayed consistent styling across the site. The "Add to cart" button showed a slight hover effect in the same green color<br>, while the "Register" and "Login" buttons displayed more distinct hover effects.<br< Visual feedback was present for all interactive states, and primary actions remained prominent. | ☑ Pass ☐ Fail | TC030_button_states.png |

---

## TC031: Footer Links Verification

| Field | Details |
|-------|---------|
| **TC ID** | TC031 |
| **Module** | Footer |
| **Title** | Verify all footer links work correctly |
| **Priority** | Low |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Scroll to footer on any page
2. Click "Sitemap" link
3. Click "Privacy Notice" link
4. Click "Contact us" link
5. Click "About us" link

**Expected Result:**
- All footer links are clickable
- Links navigate to correct pages
- No broken links (404 errors)
- Pages load with appropriate content

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|All footer links (Sitemap, Privacy Notice, Contact us, About us) were clickable and successfully navigated to their respective correct pages. <br>No broken links or 404 errors were encountered, and every destination page loaded with the appropriate content. | ☑ Pass ☐ Fail | TC031_footer_links.png |

---

## TC032: Header Elements Alignment

| Field | Details |
|-------|---------|
| **TC ID** | TC032 |
| **Module** | Header |
| **Title** | Verify header elements are properly aligned |
| **Priority** | Low |
| **Type** | UI/UX |
| **Pre-conditions** | None |

**Test Steps:**
1. Navigate to homepage
2. Observe logo position
3. Observe top links (Register, Login, Cart, Wishlist)
4. Observe search box position
5. Observe main navigation alignment

**Expected Result:**
- Logo aligned to left
- Top links aligned to right
- Search box in header area
- Navigation centered or left-aligned
- Elements properly spaced

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|The logo was correctly aligned to the left, and the top links (Register, Login, Cart, Wishlist) were aligned to the<br> right side of the header. The search box was positioned within the header area, <br>and the main navigation was properly aligned with adequate spacing between all elements. |☑ Pass ☐ Fail | TC032_header_alignment.png |

---

# BOUNDARY / NEGATIVE TESTING (TC033 - TC040)

---

## TC033: Quantity Field with Zero Value

| Field | Details |
|-------|---------|
| **TC ID** | TC033 |
| **Module** | Shopping Cart |
| **Title** | Verify behavior with quantity set to 0 |
| **Priority** | Medium |
| **Type** | Boundary |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Change quantity to 0
3. Click "Update shopping cart"

**Expected Result:**
- Product is removed from cart OR
- Error message indicating minimum quantity is 1 OR
- Quantity resets to 1

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Upon changing the product quantity to 0 and updating the cart, the product was successfully removed.<br>The system subsequently displayed a message confirming that the shopping cart is empty,<br>which aligns with the expected behavior for removing items. |☑ Pass ☐ Fail | TC033_qty_zero.png |

---

## TC034: Quantity Field with Negative Value

| Field | Details |
|-------|---------|
| **TC ID** | TC034 |
| **Module** | Shopping Cart |
| **Title** | Verify behavior with negative quantity |
| **Priority** | Medium |
| **Type** | Negative |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Change quantity to -5
3. Click "Update shopping cart"

**Expected Result:**
- Error message displayed OR
- Value not accepted (prevented) OR
- Quantity resets to valid value

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|When entering a negative quantity (-5) and clicking "Update shopping cart," the system removed the product<br> and displayed the "Shopping cart is empty" message. The system did not display an error message,<br> prevent the invalid input, or reset the quantity to a valid value as expected. | ☐ Pass ☑ Fail | TC034_qty_negative.png |

---

## TC035: Quantity Field with Maximum Value

| Field | Details |
|-------|---------|
| **TC ID** | TC035 |
| **Module** | Shopping Cart |
| **Title** | Verify behavior with very large quantity |
| **Priority** | Medium |
| **Type** | Boundary |
| **Pre-conditions** | Cart has at least one product |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Change quantity to 99999
3. Click "Update shopping cart"

**Expected Result:**
- System handles large quantity OR
- Maximum quantity limit enforced OR
- Appropriate error message shown

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Upon entering a quantity of 99999 and clicking "Update shopping cart," the system correctly enforced a limit.<br> An error message was displayed stating, "The maximum quantity allowed for purchase is 10000."<br>The quantity field was automatically adjusted to the default value of 1, preventing the invalid large entry. |☑ Pass ☐ Fail | TC035_qty_max.png |

---

## TC036: Password with Minimum Length (Boundary)

| Field | Details |
|-------|---------|
| **TC ID** | TC036 |
| **Module** | Registration |
| **Title** | Verify minimum password length requirement |
| **Priority** | Medium |
| **Type** | Boundary |
| **Pre-conditions** | User on registration page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Fill in all required fields
3. Enter Password: "12345" (5 characters)
4. Enter Confirm Password: "12345"
5. Click Register

**Expected Result:**
- Error message about minimum password length
- Registration not completed
- Message indicates required length (usually 6+ chars)

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|When entering a 5-character password and attempting to register, the system correctly prevented the action.<br> An error message was displayed stating that the minimum password length is 6 characters,<br>which aligns with the expected validation for this boundary test. |☑ Pass ☐ Fail | TC036_password_min.png |

---

## TC037: Registration with Empty Required Fields

| Field | Details |
|-------|---------|
| **TC ID** | TC037 |
| **Module** | Registration |
| **Title** | Verify validation for all required fields |
| **Priority** | High |
| **Type** | Negative |
| **Pre-conditions** | User on registration page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Leave First Name empty
3. Leave Last Name empty
4. Leave Email empty
5. Leave Password empty
6. Click Register button

**Expected Result:**
- Error messages for each required field
- "First name is required"
- "Last name is required"
- "Email is required"
- "Password is required"

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Upon clicking the "Register" button with empty fields, the system correctly displayed error messages for all mandatory inputs.<br> The messages "First name is required", "Last name is required", "Email is required", and "Password is required"<br> were clearly visible next to their respective fields. | ☑ Pass ☐ Fail | TC037_empty_required.png |

---

## TC038: Contact Form with Empty Fields

| Field | Details |
|-------|---------|
| **TC ID** | TC038 |
| **Module** | Contact Us |
| **Title** | Verify contact form validation |
| **Priority** | Medium |
| **Type** | Negative |
| **Pre-conditions** | User on contact page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/contactus
2. Leave all fields empty
3. Click "Submit" button

**Expected Result:**
- Validation errors for required fields
- Form not submitted
- Clear error messages displayed

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|When clicking the "Submit" button with all fields left empty, the system successfully prevented the form from being submitted<br>. Clear validation error messages were displayed for the required fields, ensuring the user is aware of the missing information. |☑ Pass ☐ Fail | TC038_contact_empty.png |

---

## TC039: Checkout Without Agreeing to Terms

| Field | Details |
|-------|---------|
| **TC ID** | TC039 |
| **Module** | Checkout |
| **Title** | Verify terms of service checkbox is required |
| **Priority** | High |
| **Type** | Negative |
| **Pre-conditions** | Cart has products |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart
2. Ensure "I agree with the terms of service" is NOT checked
3. Click "Checkout" button

**Expected Result:**
- Error message displayed
- "Please accept the terms of service" or similar
- Checkout not proceeded

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|When clicking the "Checkout" button without checking the terms of service box, the system correctly prevented the user from proceeding.<br> A clear error message was displayed stating, "Please accept the terms of service before proceeding to the next step,"<br> which fulfills the requirement for mandatory acceptance. |☑ Pass ☐ Fail | TC039_terms_unchecked.png |

---

## TC040: Gift Card Without Required Fields

| Field | Details |
|-------|---------|
| **TC ID** | TC040 |
| **Module** | Gift Cards |
| **Title** | Verify gift card requires recipient info |
| **Priority** | Medium |
| **Type** | Negative |
| **Pre-conditions** | User on gift card product page |

**Test Steps:**
1. Navigate to https://demowebshop.tricentis.com/25-virtual-gift-card
2. Leave Recipient's Name empty
3. Leave Recipient's Email empty
4. Click "Add to cart" button

**Expected Result:**
- Validation errors displayed
- "Recipient's Name is required"
- "Recipient's Email is required"
- Product not added to cart

| Actual Result | Status | Evidence |
|---------------|--------|----------|
|Upon clicking "Add to cart" with empty fields, the system validated the input and displayed the error messages:<br> "Enter valid recipient name" and "Enter valid recipient email".<br>The product was correctly prevented from being added to the cart until the required details were provided. |☑  Pass ☐ Fail | TC040_giftcard_empty.png |

---

# Test Execution Summary

## Execution Log

| Date | Tester | TCs Executed | Passed | Failed | Blocked |
|------|--------|--------------|--------|--------|---------|
| | Lakindu De Silva | | | | |

## Results Summary

| Category | Total | Passed | Failed | Pass Rate |
|----------|-------|--------|--------|-----------|
| Functional | 20 | | | |
| Usability | 6 | | | |
| UI/UX | 6 | | | |
| Boundary/Negative | 8 | | | |
| **Total** | **40** | | | |

---

## Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Executor | Lakindu De Silva | | |
| Reviewer | | | |
