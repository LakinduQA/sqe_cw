# 📋 Team Handover & Task Assignment

## SQE Coursework - Demo Web Shop Testing

**Project:** https://demowebshop.tricentis.com/  
**Deadline:** December 18, 2025  
**Created By:** Lakindu De Silva  
**Date:** December 15, 2025

---

## 👥 Team Members

| Member                    | Role              | Test Cases Assigned                       |
| ------------------------- | ----------------- | ----------------------------------------- |
| **Lakindu De Silva**      | Lead / Automation | ✅ Completed (Documentation + Automation) |
| **Chamath Madurasinghe**  | Manual Tester 1   | TC001 - TC020 (20 test cases)             |
| **Senithi Mathangaweera** | Manual Tester 2   | TC021 - TC040 (20 test cases)             |

---

## ✅ WHAT LAKINDU HAS COMPLETED

### 1. All Documentation (100% Done)

- ✅ Testing Requirements Document (8 requirements)
- ✅ Test Strategy Document
- ✅ Test Plan Document
- ✅ 40 Test Cases Document
- ✅ Requirements Traceability Matrix (RTM)
- ✅ Defect Report Template
- ✅ Test Coverage Report

### 2. Test Automation (100% Done)

- ✅ 30 automated tests created and executed
- ✅ **ALL 30 TESTS PASSED (100% pass rate)**
- ✅ HTML report generated
- ✅ PDF report saved

### 3. Automation Test Suites

| Suite  | Description       | Tests | Status      |
| ------ | ----------------- | ----- | ----------- |
| AT-001 | User Registration | 7     | ✅ All Pass |
| AT-002 | User Login/Logout | 9     | ✅ All Pass |
| AT-003 | Shopping Cart     | 9     | ✅ All Pass |
| AT-004 | E2E Checkout      | 5     | ✅ All Pass |

---

## 📝 WHAT YOU NEED TO DO

### Phase 1: Manual Test Execution (REQUIRED)

Execute your assigned test cases and record results.

### Phase 2: Defect Logging (IF ANY TEST FAILS)

Log defects using the template provided.

### Phase 3: Evidence Collection (REQUIRED)

Take screenshots for each test case.

---

# 👤 CHAMATH MADURASINGHE - Your Tasks

## Your Test Cases: TC001 - TC020 (Functional Testing)

| TC ID | Test Case Title                        | Priority |
| ----- | -------------------------------------- | -------- |
| TC001 | Valid User Registration                | High     |
| TC002 | Registration with Existing Email       | High     |
| TC003 | Registration with Invalid Email Format | High     |
| TC004 | Registration with Password Mismatch    | High     |
| TC005 | Valid User Login                       | High     |
| TC006 | Login with Invalid Credentials         | High     |
| TC007 | Login with Empty Fields                | Medium   |
| TC008 | Logout Functionality                   | High     |
| TC009 | Search for Existing Product            | High     |
| TC010 | Search with No Results                 | Medium   |
| TC011 | Browse Products by Category            | High     |
| TC012 | Filter Products by Price               | Medium   |
| TC013 | Sort Products by Name/Price            | Medium   |
| TC014 | View Product Details                   | High     |
| TC015 | Add Simple Product to Cart             | High     |
| TC016 | Add Configurable Product to Cart       | High     |
| TC017 | Update Product Quantity in Cart        | High     |
| TC018 | Remove Product from Cart               | High     |
| TC019 | Apply Discount Code                    | Medium   |
| TC020 | Complete Checkout Process              | High     |

### ⏱️ Estimated Time: 2-3 hours

---

# 👤 SENITHI MATHANGAWEERA - Your Tasks

## Your Test Cases: TC021 - TC040 (Usability + UI/UX + Boundary/Negative)

| TC ID | Test Case Title                      | Priority | Type      |
| ----- | ------------------------------------ | -------- | --------- |
| TC021 | Verify Consistent Header Navigation  | Medium   | Usability |
| TC022 | Verify Footer Links Work             | Low      | Usability |
| TC023 | Verify Search Box Accessibility      | Medium   | Usability |
| TC024 | Verify Error Messages are Clear      | Medium   | Usability |
| TC025 | Verify Loading Indicators            | Low      | Usability |
| TC026 | Verify Breadcrumb Navigation         | Low      | Usability |
| TC027 | Verify Product Images Display        | Medium   | UI/UX     |
| TC028 | Verify Price Display Format          | Medium   | UI/UX     |
| TC029 | Verify Button Hover States           | Low      | UI/UX     |
| TC030 | Verify Form Field Styling            | Low      | UI/UX     |
| TC031 | Verify Responsive Navigation         | Medium   | UI/UX     |
| TC032 | Verify Modal/Popup Display           | Low      | UI/UX     |
| TC033 | Add Zero Quantity to Cart            | Medium   | Boundary  |
| TC034 | Add Negative Quantity to Cart        | Medium   | Boundary  |
| TC035 | Update Cart with Very Large Quantity | Medium   | Boundary  |
| TC036 | Register with Very Long Name         | Low      | Boundary  |
| TC037 | Register with Empty All Fields       | High     | Negative  |
| TC038 | Login with SQL Injection Attempt     | Medium   | Negative  |
| TC039 | Access Checkout Without Login        | Medium   | Negative  |
| TC040 | Access Admin Pages (Unauthorized)    | Medium   | Negative  |

### ⏱️ Estimated Time: 2-3 hours

---

# 📖 HOW TO EXECUTE TEST CASES

## Step 1: Open the Test Cases Document

**Location:** `docs/test-cases/TEST-CASES-DOCUMENT.md`

## Step 2: Open the Demo Web Shop

**URL:** https://demowebshop.tricentis.com/

## Step 3: For Each Test Case:

### A. Read the test case carefully

- Check the **Pre-conditions**
- Note the **Expected Result**

### B. Execute the test steps

1. Follow each numbered step exactly
2. Observe what happens

### C. Record the result

In the test case document, fill in:

```
| Actual Result | Status | Evidence |
|---------------|--------|----------|
| [What actually happened] | ☒ Pass ☐ Fail | TC001_screenshot.png |
```

### D. Take a screenshot

- Press **Win + Shift + S** (Windows Snipping Tool)
- Save as: `TCXXX_description.png`
- Save to: `docs/screenshots/` folder

### E. If test FAILS - Log a defect

See defect logging instructions below.

---

# 🐛 HOW TO LOG DEFECTS

**Defect Report Location:** `docs/defects/DEFECT-REPORT.md`

## When to Log a Defect:

- Test case result is **FAIL**
- Actual result differs from expected result
- Application crashes or shows unexpected error

## Defect Template:

Copy this template and fill in:

```markdown
### DEF-XXX: [Brief Title]

| Field           | Details                                  |
| --------------- | ---------------------------------------- |
| **Defect ID**   | DEF-001 (increment number)               |
| **Related TC**  | TC0XX (your test case ID)                |
| **Summary**     | One-line description                     |
| **Severity**    | Critical / High / Medium / Low           |
| **Priority**    | P1-Urgent / P2-High / P3-Medium / P4-Low |
| **Status**      | New                                      |
| **Reported By** | Your Name                                |
| **Date Found**  | December XX, 2025                        |
| **Module**      | User Management / Cart / Checkout / etc  |
| **Browser**     | Chrome / Edge (version)                  |
| **Environment** | https://demowebshop.tricentis.com/       |

**Steps to Reproduce:**

1. Step 1
2. Step 2
3. Step 3

**Expected Result:**

- What should happen

**Actual Result:**

- What actually happened

**Evidence:**

- Screenshot: `DEF-XXX_screenshot.png`
```

## Severity Guide:

| Severity     | When to Use                                       |
| ------------ | ------------------------------------------------- |
| **Critical** | Site crashes, cannot complete purchase, data loss |
| **High**     | Major feature broken (login, cart, checkout)      |
| **Medium**   | Feature works but not correctly                   |
| **Low**      | Cosmetic issue, typo, minor misalignment          |

---

# 📸 SCREENSHOT NAMING CONVENTION

Use this format: `TCXXX_brief_description.png`

**Examples:**

- `TC001_registration_success.png`
- `TC005_login_form.png`
- `TC015_add_to_cart.png`
- `DEF-001_cart_error.png`

**Save all screenshots to:** `docs/screenshots/`

---

# 📁 PROJECT FOLDER STRUCTURE

```
d:\Sqe_cw\
├── README.md                    # Project overview
├── docs/
│   ├── assignment/              # Original assignment
│   ├── test-artifacts/          # Requirements, Strategy, Plan, RTM
│   ├── test-cases/              # TEST-CASES-DOCUMENT.md (your main file)
│   ├── defects/                 # DEFECT-REPORT.md (log defects here)
│   ├── reports/                 # Test execution reports
│   ├── overviews/               # Planning documents
│   └── screenshots/             # Save your screenshots here (CREATE THIS)
└── automation/                  # Automated tests (already done)
```

---

# ✅ CHECKLIST FOR EACH TEAM MEMBER

## Chamath Madurasinghe - Checklist

```
□ Read this document completely
□ Create folder: docs/screenshots/
□ Open TEST-CASES-DOCUMENT.md
□ Open https://demowebshop.tricentis.com/
□ Execute TC001 and record result
□ Take screenshot for TC001
□ Execute TC002 - TC020 (repeat process)
□ Log any defects found
□ Update TEST-CASES-DOCUMENT.md with all results
□ Notify Lakindu when complete
```

## Senithi Mathangaweera - Checklist

```
□ Read this document completely
□ Create folder: docs/screenshots/ (if not exists)
□ Open TEST-CASES-DOCUMENT.md
□ Open https://demowebshop.tricentis.com/
□ Execute TC021 and record result
□ Take screenshot for TC021
□ Execute TC022 - TC040 (repeat process)
□ Log any defects found
□ Update TEST-CASES-DOCUMENT.md with all results
□ Notify Lakindu when complete
```

---

# 📞 COMMUNICATION

## When to Contact Lakindu:

- ❓ If you don't understand a test case
- 🐛 If you find a CRITICAL or HIGH severity defect
- 🔧 If the website is down or not working
- ✅ When you finish all your test cases

## Deadline Reminder:

- **Final Deadline:** December 18, 2025
- **Complete your tests by:** December 16, 2025 (to allow time for review)

---

# 🎯 FINAL DELIVERABLES NEEDED

After manual testing is complete, we need:

| Deliverable                  | Responsible       | Status     |
| ---------------------------- | ----------------- | ---------- |
| 40 Test Cases Executed       | Chamath + Senithi | ⬜ Pending |
| Screenshots for all TCs      | Chamath + Senithi | ⬜ Pending |
| Defect Report (if any)       | Chamath + Senithi | ⬜ Pending |
| Test Coverage Report Updated | Lakindu           | ⬜ Pending |
| Final PDF Report             | Lakindu           | ⬜ Pending |
| Presentation Slides          | Team              | ⬜ Pending |

---

# 💡 TIPS FOR SUCCESS

1. **Follow steps exactly** - Don't skip or assume
2. **Take screenshots BEFORE clicking** - Capture the state
3. **Be detailed in actual results** - Don't just write "worked" or "didn't work"
4. **Use fresh browser** - Clear cache or use incognito mode
5. **Test one thing at a time** - Don't mix test cases
6. **Save work frequently** - Don't lose your progress

---

## Good luck! 🚀

**Remember:** Quality over speed. Take your time to do it right.

---

_Document prepared by Lakindu De Silva - December 15, 2025_
