# Presentation Slides Content

## Copy-Paste Ready Slides for PowerPoint/Google Slides

---

# SLIDE 1: TITLE

## SQE Coursework

### Testing the Tricentis Demo Web Shop

**Team Members:**

- Lakindu De Silva (Lead)
- Chamath Madurasinghe
- Senithi Mathangaweera

**Date:** December 2025

---

# SLIDE 2: PROJECT OVERVIEW

## What We Tested

**Application:** Tricentis Demo Web Shop  
**URL:** https://demowebshop.tricentis.com/

**Objectives:**

- ✅ Create testing documentation
- ✅ Design 40 test cases
- ✅ Automate critical scenarios
- ✅ Identify defects
- ✅ Make release recommendation

---

# SLIDE 3: TESTING REQUIREMENTS

## 8 Testing Requirements (TR-001 to TR-008)

| ID     | Requirement         |
| ------ | ------------------- |
| TR-001 | User Registration   |
| TR-002 | User Authentication |
| TR-003 | Navigation          |
| TR-004 | Shopping Cart       |
| TR-005 | Product Search      |
| TR-006 | Checkout Process    |
| TR-007 | Product Display     |
| TR-008 | Form Validation     |

**Coverage: 100%**

---

# SLIDE 4: TEST STRATEGY

## Testing Approach

**4 Categories of Testing:**

| Category          | Tests | Purpose              |
| ----------------- | ----- | -------------------- |
| Functional        | 20    | Does it work?        |
| Usability         | 6     | Is it user-friendly? |
| UI/UX             | 6     | Does it look right?  |
| Boundary/Negative | 8     | Edge cases           |

**Total: 40 Test Cases**

---

# SLIDE 5: TEST AUTOMATION

## Playwright + Page Object Model

**Why Playwright?**

- Modern & Fast
- Cross-browser support
- Auto-wait capability
- Excellent reporting

**Page Objects Created:**

- BasePage, RegisterPage, LoginPage
- ProductPage, CartPage, CheckoutPage

---

# SLIDE 6: AUTOMATED TEST SUITES

## 30 Automated Tests - 100% Pass Rate

| Suite                | Tests | Status  |
| -------------------- | ----- | ------- |
| AT-001: Registration | 7     | ✅ Pass |
| AT-002: Login        | 9     | ✅ Pass |
| AT-003: Cart         | 9     | ✅ Pass |
| AT-004: Checkout     | 5     | ✅ Pass |

**Execution Time:** 4 minutes

---

# SLIDE 7: MANUAL TEST EXECUTION

## Team Distribution

| Tester  | Test Cases  | Result   |
| ------- | ----------- | -------- |
| Chamath | TC001-TC020 | 20/20 ✅ |
| Senithi | TC021-TC040 | 19/20 ⚠️ |

**Manual Test Results:**

- Passed: 39
- Failed: 1
- Pass Rate: 97.5%

---

# SLIDE 8: DEFECTS FOUND

## 4 Defects Identified

| Defect ID | Summary                                      | Severity |
| --------- | -------------------------------------------- | -------- |
| DEF-001   | Negative quantity removes product silently   | Medium   |
| DEF-002   | "Books" search returns no products           | Medium   |
| DEF-003   | Some products missing Add to Cart on listing | Medium   |
| DEF-004   | Product detail page missing Add to Cart      | High     |

**Sources:**

- 1 from Manual Testing (TC034)
- 3 from Exploratory Testing (ETC01-03)

---

# SLIDE 9: TEST RESULTS

## Combined Metrics

| Metric                | Value                |
| --------------------- | -------------------- |
| Total Tests           | 70                   |
| Passed                | 69                   |
| Failed                | 1                    |
| **Pass Rate**         | **98.6%**            |
| Requirements Coverage | 100%                 |
| Defects Found         | 4 (1 High, 3 Medium) |

---

# SLIDE 10: RELEASE DECISION

## ✅ GO (Conditional)

**Why GO:**

- No Critical defects
- 98.6% pass rate (above 95% threshold)
- Core functionality works for most products

**Conditions:**

- Prioritize DEF-004 (High) for next sprint
- Document all 4 defects as known issues
- Monitor user feedback on affected products

---

# SLIDE 11: DELIVERABLES

## Documents Delivered

- Testing Requirements Document
- Test Strategy Document
- Test Plan Document
- 40 Test Cases (Executed)
- Defect Report
- Requirements Traceability Matrix
- Test Coverage Report
- Manual Execution Report
- Automated Test Report
- Final Test Report

---

# SLIDE 12: KEY LEARNINGS

## What We Learned

1. **Planning matters** - Strategy before execution
2. **Automation saves time** - 30 tests in 4 minutes
3. **Boundary testing finds bugs** - DEF-001 discovered
4. **Documentation is crucial** - Clear test artifacts
5. **Teamwork works** - Divided workload effectively

---

# SLIDE 13: CONCLUSION

## Summary

> We tested an e-commerce website with 70 tests (40 manual + 30 automated).
>
> **Result:** 98.6% pass rate
>
> **Found:** 1 Medium severity defect
>
> **Decision:** GO for release (conditional)

---

# SLIDE 14: THANK YOU

## Questions?

**Team Members:**

- Lakindu De Silva
- Chamath Madurasinghe
- Senithi Mathangaweera

**Repository:** [GitHub Link]

**Ready to demonstrate automation!**

---

# ADDITIONAL CONTENT FOR SLIDES

## Diagrams to Include

### Test Process Flow

```
Requirements → Test Cases → Execution → Defects → Report → Decision
```

### Page Object Model Architecture

```
Tests
  ↓
Page Objects (RegisterPage, LoginPage, CartPage...)
  ↓
BasePage (common methods)
  ↓
Playwright (browser automation)
```

### Test Results Pie Chart

- Passed: 69 (98.6%)
- Failed: 1 (1.4%)

### Requirements Coverage Bar Chart

- All 8 requirements at 100%

---

## Color Scheme Suggestions

- **Primary:** Blue (#0066CC)
- **Success:** Green (#28A745)
- **Warning:** Orange (#FFC107)
- **Error:** Red (#DC3545)
- **Background:** White/Light Gray

---

## Font Suggestions

- **Headings:** Arial Bold or Calibri Bold
- **Body:** Arial or Calibri
- **Code:** Consolas or Courier New

---

## Images to Include

1. Website homepage screenshot
2. Playwright test execution screenshot
3. HTML report screenshot
4. DEF-001 bug screenshot
5. Page Object Model diagram
6. Test results chart

---

## Animation Suggestions

- Slide transitions: Simple fade or slide
- Build effects: Reveal bullet points one by one
- Charts: Animate bars/segments appearing
- Keep animations minimal and professional
