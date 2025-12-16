# Presentation Script (10 Minutes)

## SQE Coursework - Demo Web Shop Testing

**Duration:** 10 minutes  
**Presenter:** Lakindu De Silva (with Chamath & Senithi for Q&A)

---

## SLIDE 1: Title Slide (30 seconds)

**[SHOW: Title with team names]**

> "Good morning/afternoon. I'm Lakindu De Silva, and together with my team members Chamath Madurasinghe and Senithi Mathangaweera, we'll be presenting our SQE coursework on testing the Tricentis Demo Web Shop."

---

## SLIDE 2: Project Overview (45 seconds)

**[SHOW: Website screenshot + objectives]**

> "Our project focused on testing this e-commerce demo website - similar to Amazon or any online shopping platform.
>
> Our objectives were to:
>
> - Create comprehensive testing documentation
> - Design and execute 40 test cases
> - Automate critical test scenarios using Playwright
> - Identify defects and make a release recommendation
>
> Let me walk you through how we achieved these."

---

## SLIDE 3: Testing Requirements (1 minute)

**[SHOW: TR-001 to TR-008 list]**

> "We started by analyzing the website and identifying 8 key testing requirements.
>
> These cover:
>
> - **User flows**: Registration, Login, Logout
> - **Core features**: Shopping cart, Checkout, Product search
> - **Quality aspects**: Navigation, Form validation, Product display
>
> Each requirement became the foundation for our test cases. For example, TR-001 User Registration led to test cases for valid registration, duplicate emails, password validation, and more."

---

## SLIDE 4: Test Strategy & Plan (45 seconds)

**[SHOW: Testing approach diagram]**

> "Our test strategy employed a risk-based approach, prioritizing critical user journeys.
>
> We divided testing into 4 categories:
>
> - **Functional Testing**: 20 test cases - Does it work?
> - **Usability Testing**: 6 test cases - Is it user-friendly?
> - **UI/UX Testing**: 6 test cases - Does it look right?
> - **Boundary Testing**: 8 test cases - What about edge cases?
>
> This gave us balanced coverage of 40 test cases total."

---

## SLIDE 5: Test Automation (1.5 minutes)

**[SHOW: Code snippet + architecture diagram]**

> "For automation, we chose Playwright with JavaScript and implemented the Page Object Model pattern.
>
> **Why Playwright?** It's modern, fast, and provides excellent reporting.
>
> **Why Page Object Model?** It separates test logic from page interactions. If the website changes, we only update the page class, not every test.
>
> We created 6 page classes:
>
> - BasePage, RegisterPage, LoginPage, ProductPage, CartPage, CheckoutPage
>
> And 4 test suites with 30 automated tests covering:
>
> - Registration: 7 tests
> - Login: 9 tests
> - Cart: 9 tests
> - Checkout: 5 tests
>
> All 30 automated tests passed with 100% success rate."

**[OPTIONAL: Show quick demo of running tests]**

---

## SLIDE 6: Manual Test Execution (1 minute)

**[SHOW: Test execution summary table]**

> "For manual testing, we divided the work:
>
> - Chamath executed TC001 to TC020 - all Functional tests
> - Senithi executed TC021 to TC040 - Usability, UI/UX, and Boundary tests
>
> Each test case included:
>
> - Pre-conditions
> - Step-by-step instructions
> - Expected results
> - Actual results with screenshots
>
> Out of 40 manual tests:
>
> - 39 passed
> - 1 failed - which led to our defect discovery"

---

## SLIDE 7: Defect Found (1 minute)

**[SHOW: DEF-001 details with screenshot]**

> "During boundary testing, we found a defect in TC034.
>
> **The Issue:** When entering a negative quantity like -5 in the shopping cart and clicking update, the system doesn't show an error. Instead, the product silently disappears.
>
> **Expected Behavior:** An error message saying 'Invalid quantity' or similar.
>
> **Actual Behavior:** Product removed, cart shows empty.
>
> We classified this as **Medium severity** because:
>
> - It doesn't crash the site
> - Users can still shop normally
> - But it's unexpected behavior that should be fixed"

---

## SLIDE 8: Test Results & Metrics (1 minute)

**[SHOW: Results dashboard/charts]**

> "Let me share our key metrics:
>
> **Combined Results:**
>
> - Total Tests: 70 (30 automated + 40 manual)
> - Passed: 69
> - Failed: 1
> - **Pass Rate: 98.6%**
>
> **Coverage Metrics:**
>
> - Requirements Coverage: 100% - All 8 requirements tested
> - Automation Coverage: 75% of critical paths
> - Defect Density: 0.025 - Very low
>
> These numbers indicate high software quality."

---

## SLIDE 9: Release Decision (45 seconds)

**[SHOW: GO decision with conditions]**

> "Based on our testing, our recommendation is: **GO for Release** - with conditions.
>
> **Why GO?**
>
> - No Critical or High severity defects
> - 98.6% pass rate exceeds our 95% threshold
> - All core shopping functionality works
>
> **Conditions:**
>
> - Document DEF-001 as a known issue
> - Schedule fix for next sprint
> - Monitor for user feedback
>
> The website is stable and ready for users."

---

## SLIDE 10: Deliverables & Conclusion (45 seconds)

**[SHOW: Document list + key takeaways]**

> "We delivered a complete set of test artifacts:
>
> - Testing Requirements, Strategy, and Plan
> - 40 Test Cases with execution results
> - Requirements Traceability Matrix
> - Defect Report
> - Coverage and Final Reports
> - Automated test suite with 30 tests
>
> **Key Takeaways:**
>
> - Structured testing finds defects
> - Automation enables fast regression testing
> - Clear documentation supports quality decisions
>
> Thank you. We're happy to answer questions or demonstrate the automation."

---

## Q&A Preparation (See VIVA-QUESTIONS.md)

**[Be ready for questions about:]**

- Why specific tools/approaches were chosen
- How defect severity was determined
- What you would test differently
- How automation helps the testing process

---

## Timing Summary

| Slide     | Topic          | Duration  |
| --------- | -------------- | --------- |
| 1         | Title          | 0:30      |
| 2         | Overview       | 0:45      |
| 3         | Requirements   | 1:00      |
| 4         | Strategy       | 0:45      |
| 5         | Automation     | 1:30      |
| 6         | Manual Testing | 1:00      |
| 7         | Defect         | 1:00      |
| 8         | Metrics        | 1:00      |
| 9         | Decision       | 0:45      |
| 10        | Conclusion     | 0:45      |
| **Total** |                | **10:00** |

---

## Tips for Presenting

1. **Practice timing** - Run through at least twice
2. **Know your numbers** - 70 tests, 98.6%, 1 defect
3. **Be ready to demo** - Have tests ready to run
4. **Speak clearly** - Slow down for technical terms
5. **Eye contact** - Look at audience, not screen
