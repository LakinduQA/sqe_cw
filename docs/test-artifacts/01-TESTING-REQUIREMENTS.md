# Testing Requirements Document

## Tricentis Demo Web Shop

**Document Version:** 1.0  
**Prepared By:** Lakindu De Silva  
**Date:** December 15, 2025  
**Website URL:** https://demowebshop.tricentis.com/

---

## 1. Application Overview

### 1.1 Application Name

Tricentis Demo Web Shop

### 1.2 Purpose

An e-commerce demonstration website that allows users to browse products, manage shopping carts, create accounts, and simulate the complete online shopping experience.

### 1.3 Core Features Identified

| Feature ID | Feature Name            | Description                                            |
| ---------- | ----------------------- | ------------------------------------------------------ |
| F001       | User Registration       | New user account creation with personal details        |
| F002       | User Login/Logout       | Authentication and session management                  |
| F003       | Password Recovery       | Reset password via email                               |
| F004       | Product Browsing        | Browse products by categories                          |
| F005       | Product Search          | Search products by keyword (basic + advanced)          |
| F006       | Product Details         | View product information, images, reviews              |
| F007       | Product Configuration   | Configure products with options (Processor, RAM, etc.) |
| F008       | Shopping Cart           | Add, update, remove items from cart                    |
| F009       | Wishlist                | Save products for later                                |
| F010       | Product Comparison      | Compare multiple products                              |
| F011       | Checkout Process        | Complete purchase with shipping/payment                |
| F012       | Gift Cards              | Virtual and physical gift card purchase                |
| F013       | Coupon/Discount Codes   | Apply promotional codes                                |
| F014       | Newsletter Subscription | Subscribe to email newsletter                          |
| F015       | Contact Form            | Customer inquiry submission                            |
| F016       | Product Reviews         | View and add product reviews                           |
| F017       | Community Poll          | Vote in website polls                                  |

---

## 2. Testing Requirements (TR)

### TR-001: User Registration Must Work Correctly

**Priority:** High  
**Description:** The system must allow new users to register with valid information and prevent registration with invalid data.

**Acceptance Criteria:**

- Users can register with valid first name, last name, email, and password
- System validates all mandatory fields
- System prevents duplicate email registration
- Password confirmation must match
- Gender selection is optional
- Success message displayed after registration
- User redirected to appropriate page after registration

---

### TR-002: User Authentication Must Be Secure

**Priority:** High  
**Description:** The login system must properly authenticate users and handle invalid credentials appropriately.

**Acceptance Criteria:**

- Registered users can log in with valid credentials
- Invalid credentials show appropriate error message
- "Remember me" functionality works correctly
- Password recovery link is accessible
- Session persists across page navigation
- Logout clears user session completely

---

### TR-003: Navigation Must Work Correctly

**Priority:** High  
**Description:** All navigation elements must function correctly and lead to appropriate destinations.

**Acceptance Criteria:**

- Main menu categories (Books, Computers, Electronics, etc.) are clickable
- Breadcrumb navigation works correctly
- Footer links navigate to correct pages
- Logo link returns to homepage
- Header links (Register, Login, Cart, Wishlist) work correctly
- All internal links are not broken

---

### TR-004: Shopping Cart Must Function Properly

**Priority:** Critical  
**Description:** The shopping cart must accurately manage products and calculations.

**Acceptance Criteria:**

- Products can be added to cart from product listing
- Products can be added to cart from product detail page
- Quantity can be updated in cart
- Products can be removed from cart
- Cart total calculates correctly
- Cart persists during session
- Configurable products show selected options
- Mini cart dropdown displays correctly

---

### TR-005: Product Search Must Return Accurate Results

**Priority:** High  
**Description:** The search functionality must return relevant products based on user queries.

**Acceptance Criteria:**

- Search box is accessible from all pages
- Basic search returns relevant products
- Advanced search filters work correctly
- Empty search shows appropriate message
- Search with no results shows appropriate message
- Search is case-insensitive

---

### TR-006: Checkout Process Must Complete Successfully

**Priority:** Critical  
**Description:** Users must be able to complete the full checkout process without errors.

**Acceptance Criteria:**

- Cart checkout button initiates checkout
- Terms of service checkbox is required
- Billing address can be entered
- Shipping options are displayed
- Payment methods are available
- Order confirmation is displayed
- Guest checkout is available (if applicable)

---

### TR-007: Product Display Must Be Accurate

**Priority:** Medium  
**Description:** Product information must be displayed accurately and consistently.

**Acceptance Criteria:**

- Product images display correctly
- Product prices are shown accurately
- Discounted prices show old and new price
- Product descriptions are visible
- Product availability status is shown
- Product reviews and ratings display correctly
- "Add to cart" buttons are functional

---

### TR-008: Form Validations Must Prevent Invalid Data

**Priority:** High  
**Description:** All forms must validate user input and prevent submission of invalid data.

**Acceptance Criteria:**

- Required fields are marked and enforced
- Email fields validate email format
- Password fields enforce minimum requirements
- Error messages are clear and helpful
- Form validation happens before submission
- Invalid fields are highlighted appropriately

---

## 3. Scope of Testing

### 3.1 In Scope

- Functional Testing
- Usability Testing
- UI/UX Testing
- Boundary Testing
- Negative Testing
- Cross-browser testing (primary browser only)

### 3.2 Out of Scope

- Performance/Load Testing
- Security Penetration Testing
- API Testing
- Mobile App Testing
- Payment Gateway Integration (demo environment)
- Database Testing

---

## 4. Test Environment

| Component       | Details                            |
| --------------- | ---------------------------------- |
| URL             | https://demowebshop.tricentis.com/ |
| Browser         | Chrome/Edge (Latest)               |
| OS              | Windows 10/11                      |
| Test Data       | Will use generated test data       |
| Automation Tool | Playwright                         |

---

## 5. Identified Page Inventory

| Page              | URL Path                | Key Functions                         |
| ----------------- | ----------------------- | ------------------------------------- |
| Homepage          | /                       | Featured products, Categories, Search |
| Register          | /register               | User registration form                |
| Login             | /login                  | User authentication                   |
| Password Recovery | /passwordrecovery       | Password reset                        |
| Books             | /books                  | Category listing                      |
| Computers         | /computers              | Category with subcategories           |
| Electronics       | /electronics            | Category listing                      |
| Apparel & Shoes   | /apparel-shoes          | Category listing                      |
| Digital Downloads | /digital-downloads      | Category listing                      |
| Jewelry           | /jewelry                | Category listing                      |
| Gift Cards        | /gift-cards             | Gift card products                    |
| Product Detail    | /[product-slug]         | Product info, Add to cart             |
| Shopping Cart     | /cart                   | Cart management                       |
| Wishlist          | /wishlist               | Saved products                        |
| Search            | /search                 | Product search                        |
| Contact Us        | /contactus              | Contact form                          |
| Compare Products  | /compareproducts        | Product comparison                    |
| Recently Viewed   | /recentlyviewedproducts | Browsing history                      |

---

## 6. Sign-Off

| Role         | Name             | Signature      | Date           |
| ------------ | ---------------- | -------------- | -------------- |
| QA Engineer  | Lakindu De Silva | ******\_****** | ******\_****** |
| Project Lead | ******\_******   | ******\_****** | ******\_****** |
