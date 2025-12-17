# Viva Voce Questions & Answers

## SQE Coursework - Preparation Guide

---

## Category 1: Testing Fundamentals

### Q1: What is software testing and why is it important?

**Answer:**

> Software testing is the process of evaluating a software application to find defects and ensure it meets requirements. It's important because:
>
> - **Finds bugs early** - Cheaper to fix before release
> - **Ensures quality** - Users get a working product
> - **Reduces risk** - Prevents costly failures in production
> - **Builds confidence** - Stakeholders trust the product

---

### Q2: What types of testing did you perform?

**Answer:**

> We performed 4 types:
>
> 1. **Functional Testing** (20 tests) - Verifies features work as expected
> 2. **Usability Testing** (6 tests) - Checks user experience and navigation
> 3. **UI/UX Testing** (6 tests) - Validates visual elements and layout
> 4. **Boundary/Negative Testing** (8 tests) - Tests edge cases and invalid inputs

---

### Q3: What is the difference between manual and automated testing?

**Answer:**

> | Aspect                       | Manual Testing         | Automated Testing                 |
> | ---------------------------- | ---------------------- | --------------------------------- |
> | **Execution**                | Human runs tests       | Scripts run tests                 |
> | **Speed**                    | Slower                 | Faster                            |
> | **Cost**                     | Higher per run         | Higher upfront, cheaper long-term |
> | **Best for**                 | Exploratory, usability | Regression, repetitive tests      |
> | **Example from our project** | TC021-TC032 (UI/UX)    | Registration, Login, Cart tests   |

---

### Q4: What is a test case?

**Answer:**

> A test case is a documented set of conditions and steps to verify a specific functionality.
>
> **Components:**
>
> - **Test Case ID**: Unique identifier (e.g., TC001)
> - **Title**: What's being tested
> - **Pre-conditions**: Required setup
> - **Test Steps**: Actions to perform
> - **Expected Result**: What should happen
> - **Actual Result**: What actually happened
> - **Status**: Pass/Fail

---

## Category 2: Test Strategy & Planning

### Q5: Why did you choose 8 testing requirements?

**Answer:**

> The assignment specified 5-8 requirements. We chose 8 to ensure comprehensive coverage:
>
> - **4 Core Features**: Registration, Login, Cart, Checkout
> - **2 User Experience**: Navigation, Search
> - **2 Quality Aspects**: Product Display, Form Validation
>
> This covered all critical aspects of the e-commerce website.

---

### Q6: How did you prioritize which tests to automate?

**Answer:**

> We prioritized based on:
>
> 1. **Criticality** - Core business functions (cart, checkout)
> 2. **Frequency** - Tests run often (regression)
> 3. **Stability** - Features unlikely to change
> 4. **ROI** - Time saved vs. effort to automate
>
> That's why we automated registration, login, cart, and checkout - these are critical paths that every user takes.

---

### Q7: What is a test plan?

**Answer:**

> A test plan is a document describing:
>
> - **Scope**: What will/won't be tested
> - **Approach**: How testing will be done
> - **Resources**: Who does what
> - **Schedule**: When testing happens
> - **Risks**: Potential issues
> - **Entry/Exit Criteria**: When to start/stop testing
>
> Our test plan defined testing from Dec 15-18, 2025, with manual and automated testing phases.

---

## Category 3: Test Automation

### Q8: Why did you choose Playwright?

**Answer:**

> We chose Playwright because:
>
> - **Modern tool** - Built by Microsoft, actively maintained
> - **Cross-browser** - Works on Chrome, Firefox, Safari
> - **Fast execution** - Parallel test running
> - **Auto-waits** - Handles dynamic content automatically
> - **Great reporting** - Built-in HTML reports
> - **JavaScript support** - Easy to learn and maintain

---

### Q9: What is Page Object Model (POM)?

**Answer:**

> Page Object Model is a design pattern where:
>
> - Each web page has a corresponding **class**
> - Page elements are defined as **properties**
> - Page actions are defined as **methods**
>
> **Benefits:**
>
> - **Reusability**: Use same page object in multiple tests
> - **Maintainability**: Change UI? Update one file
> - **Readability**: Tests read like English
>
> **Example from our project:**
>
> ```javascript
> // Page Object
> class LoginPage {
>   async login(email, password) {
>     await this.emailInput.fill(email);
>     await this.passwordInput.fill(password);
>     await this.loginButton.click();
>   }
> }
>
> // Test uses it
> await loginPage.login("test@email.com", "password");
> ```

---

### Q10: How many Page Objects did you create and why?

**Answer:**

> We created **6 Page Objects**:
>
> 1. **BasePage** - Common methods (navigation, waits)
> 2. **RegisterPage** - Registration form interactions
> 3. **LoginPage** - Login form interactions
> 4. **ProductPage** - Product details and add to cart
> 5. **CartPage** - Cart management operations
> 6. **CheckoutPage** - Checkout process steps
>
> Each represents a distinct page/feature in the application.

---

### Q11: What are the advantages of automated testing?

**Answer:**

> 1. **Speed** - 30 tests run in 4 minutes (vs. hours manually)
> 2. **Consistency** - Same steps every time
> 3. **Reusability** - Run same tests after any code change
> 4. **Regression** - Quickly verify nothing is broken
> 5. **Coverage** - Run more tests more often
> 6. **CI/CD Integration** - Automatic testing on code commits

---

## Category 4: Defect Management

### Q12: How do you determine defect severity?

**Answer:**

> | Severity     | Definition                              | Example                    |
> | ------------ | --------------------------------------- | -------------------------- |
> | **Critical** | System crash, data loss, no workaround  | Site won't load            |
> | **High**     | Major feature broken, workaround exists | Can't add to cart          |
> | **Medium**   | Feature partially works, minor impact   | No error for invalid input |
> | **Low**      | Cosmetic issue, no functional impact    | Typo in text               |
>
> Our defects ranged from **Medium** to **High**:
>
> - DEF-001 to DEF-003 were **Medium** (cart works, but error handling/search issues)
> - DEF-004 was **High** (some products cannot be purchased at all)

---

### Q13: Explain the defects you found

**Answer:**

> We found **4 defects** (1 from manual testing, 3 from exploratory testing):
>
> **DEF-001: Negative Quantity Bug** (Medium)
>
> - **Test Case**: TC034 - Add negative quantity to cart
> - **Actual**: Product silently removed, cart shows empty
> - **Expected**: Error message "Invalid quantity"
>
> **DEF-002: Books Search Returns No Products** (Medium)
>
> - **Test Case**: ETC01 - Search for "Books" keyword
> - **Actual**: No products found despite Books category existing
>
> **DEF-003: Missing Add to Cart on Listing** (Medium)
>
> - **Test Case**: ETC02 - Browse Electronics category
> - **Actual**: Some products have no "Add to Cart" button
>
> **DEF-004: Missing Add to Cart on Product Page** (High)
>
> - **Test Case**: ETC03 - View product detail page
> - **Actual**: No way to purchase the product
> - **Impact**: Product completely unpurchasable

---

### Q14: What is the defect lifecycle?

**Answer:**

> ```
> New → Open → In Progress → Fixed → Retesting → Closed/Reopened
> ```
>
> 1. **New** - Tester logs defect
> 2. **Open** - Developer acknowledged
> 3. **In Progress** - Developer working on fix
> 4. **Fixed** - Developer completed fix
> 5. **Retesting** - Tester verifies fix
> 6. **Closed** - Fix confirmed / **Reopened** - Still broken

---

## Category 5: Metrics & Reporting

### Q15: What metrics did you track?

**Answer:**

> | Metric                    | Value | Meaning                       |
> | ------------------------- | ----- | ----------------------------- |
> | **Pass Rate**             | 98.6% | High quality                  |
> | **Defect Density**        | 0.10  | 4 defects from all testing    |
> | **Requirements Coverage** | 100%  | All requirements tested       |
> | **Automation Coverage**   | 75%   | 30 of key scenarios automated |

---

### Q16: What does 98.6% pass rate tell you?

**Answer:**

> It tells us:
>
> - The software is **high quality**
> - Most features work as expected
> - Only 1 test failed out of 70
> - The application is **stable** and **reliable**
> - We can recommend **release** with confidence

---

### Q17: What is RTM (Requirements Traceability Matrix)?

**Answer:**

> RTM maps requirements to test cases to ensure:
>
> - Every requirement has tests covering it
> - No requirements are missed
> - We can track what's tested
>
> Example:
> | Requirement | Test Cases |
> |-------------|------------|
> | TR-001 Registration | TC001, TC002, TC003, TC004 |
> | TR-004 Shopping Cart | TC015-TC019, TC033-TC035 |

---

## Category 6: Release Decision

### Q18: Why did you recommend GO for release?

**Answer:**

> We recommended **GO (Conditional)** because:
>
> 1. **No Critical defects** - Nothing crashes the site
> 2. **98.6% pass rate** - Above 95% threshold
> 3. **Core functions work** - Most users can shop successfully
> 4. **High defect affects limited products** - Only some Electronics affected
>
> **Conditions:**
>
> - Prioritize DEF-004 (High) for next sprint
> - Log all 4 defects as known issues
> - Monitor user feedback

---

### Q19: What would make you say NO-GO?

**Answer:**

> We would say **NO-GO** if:
>
> - Critical defects found (site crashes)
> - Pass rate below 90%
> - Core features broken (can't checkout)
> - Security vulnerabilities found
> - Multiple High severity defects
> - Blocked test cases

---

## Category 7: Team & Process

### Q20: How did you divide the work?

**Answer:**

> | Member      | Responsibility                                          |
> | ----------- | ------------------------------------------------------- |
> | **Lakindu** | Lead, Documentation, Automation, Reports                |
> | **Chamath** | Manual Testing TC001-TC020 (Functional)                 |
> | **Senithi** | Manual Testing TC021-TC040 (Usability, UI/UX, Boundary) |
>
> We divided 40 test cases equally - 20 each for manual testers.

---

### Q21: What challenges did you face?

**Answer:**

> 1. **Dynamic content** - Solved with Playwright auto-wait
> 2. **Test data** - Used unique timestamps for emails
> 3. **Flaky tests** - Added proper waits and assertions
> 4. **Time management** - Used 3-phase approach
> 5. **Coordination** - Clear handover document for team

---

### Q22: What would you do differently next time?

**Answer:**

> 1. **API testing** - Test backend directly
> 2. **More boundary tests** - Found the bug there
> 3. **Performance testing** - Check load handling
> 4. **Earlier automation** - Start automation sooner
> 5. **Mobile testing** - Check responsive design

---

## Category 8: Technical Questions

### Q23: What is the difference between verification and validation?

**Answer:**

> | Verification                         | Validation                           |
> | ------------------------------------ | ------------------------------------ |
> | "Are we building the product right?" | "Are we building the right product?" |
> | Process-focused                      | Product-focused                      |
> | Reviews, walkthroughs                | Testing, demos                       |
> | Static testing                       | Dynamic testing                      |

---

### Q24: What is regression testing?

**Answer:**

> Regression testing verifies that existing functionality still works after code changes.
>
> Our 30 automated tests can be run as regression tests whenever the website is updated, taking only 4 minutes to verify nothing is broken.

---

### Q25: What is boundary testing?

**Answer:**

> Boundary testing checks values at the edges of valid ranges:
>
> - **Minimum** - 0, 1, empty
> - **Maximum** - Largest allowed
> - **Just outside** - -1, max+1
>
> Our TC033-TC035 tested quantity: 0, -5, 99999
> This is how we found DEF-001!

---

## Quick Reference Card

**Key Numbers to Remember:**

- 8 Testing Requirements
- 40 Manual Test Cases
- 30 Automated Tests
- 6 Page Objects
- 4 Test Suites
- 1 Defect (DEF-001)
- 98.6% Pass Rate
- 100% Requirements Coverage
- GO (Conditional) Decision
