# 📊 SQE Coursework - Progress Report

**Student:** Lakindu De Silva  
**Date:** December 15, 2025  
**Deadline:** December 18, 2025  
**Website:** https://demowebshop.tricentis.com/

---

## Overall Progress: 70% Complete ✅

---

## ✅ COMPLETED TASKS

### 1. Documentation (Phase 1) - 100% Complete

| Requirement                         | Document Created                                                                 | Status  |
| ----------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Introduction (Name, purpose, scope) | [01-TESTING-REQUIREMENTS.md](docs/01-TESTING-REQUIREMENTS.md)                    | ✅ Done |
| QA & Testing Processes              | [02-TEST-STRATEGY.md](docs/02-TEST-STRATEGY.md)                                  | ✅ Done |
| 5-8 Testing Requirements            | [01-TESTING-REQUIREMENTS.md](docs/01-TESTING-REQUIREMENTS.md) - 8 requirements   | ✅ Done |
| Test Plan                           | [03-TEST-PLAN.md](docs/03-TEST-PLAN.md)                                          | ✅ Done |
| Test Case Document                  | [TEST-CASES-DOCUMENT.md](docs/test-cases/TEST-CASES-DOCUMENT.md) - 40 test cases | ✅ Done |
| Defect Report Template              | [DEFECT-REPORT.md](docs/defects/DEFECT-REPORT.md)                                | ✅ Done |
| Test Coverage Report Template       | [TEST-COVERAGE-REPORT.md](docs/reports/TEST-COVERAGE-REPORT.md)                  | ✅ Done |

### 2. Test Automation (Phase 2) - 100% Complete

| Requirement                      | Deliverable                                                         | Status  |
| -------------------------------- | ------------------------------------------------------------------- | ------- |
| Choose 3-5 critical test cases   | 4 test suites (30 automated tests)                                  | ✅ Done |
| Use automation tool (Playwright) | Playwright with Page Object Model                                   | ✅ Done |
| Implement automation scripts     | 4 spec files created                                                | ✅ Done |
| Execute automated tests          | 30/30 tests passing (100%)                                          | ✅ Done |
| Capture execution results        | HTML report generated                                               | ✅ Done |
| Automation report                | [AUTOMATION-TEST-REPORT.md](docs/overviews/PROGRESS-REPORT.md) | ✅ Done |

### 3. Test Cases Created - 40 Test Cases ✅

| Category                  | Count  | Test IDs    |
| ------------------------- | ------ | ----------- |
| Functional Testing        | 20     | TC001-TC020 |
| Usability Testing         | 6      | TC021-TC026 |
| UI/UX Testing             | 6      | TC027-TC032 |
| Boundary/Negative Testing | 8      | TC033-TC040 |
| **Total**                 | **40** | -           |

---

## ⏳ PENDING TASKS (Phase 3)

### 1. Manual Test Execution - 0% Complete

| Task                  | Description                       | Status     |
| --------------------- | --------------------------------- | ---------- |
| Execute 40 test cases | Run each test case on the website | ⬜ Pending |
| Record actual results | Document what actually happened   | ⬜ Pending |
| Take screenshots      | Capture evidence for each test    | ⬜ Pending |
| Mark Pass/Fail status | Update test case document         | ⬜ Pending |

### 2. Defect Logging - 0% Complete

| Task                         | Description                  | Status     |
| ---------------------------- | ---------------------------- | ---------- |
| Log defects for failed tests | Create defect entries        | ⬜ Pending |
| Include all required fields  | ID, Summary, Steps, Severity | ⬜ Pending |
| Link to test cases           | Reference TC IDs             | ⬜ Pending |
| Add screenshots as evidence  | Attach supporting evidence   | ⬜ Pending |

### 3. Final Report & Decision Making - 0% Complete

| Task                       | Description                   | Status     |
| -------------------------- | ----------------------------- | ---------- |
| Analyze test results       | Review all pass/fail outcomes | ⬜ Pending |
| Release readiness decision | Go/No-Go recommendation       | ⬜ Pending |
| Identify key risks         | Document potential issues     | ⬜ Pending |
| Provide recommendations    | Improvement suggestions       | ⬜ Pending |
| Create final PDF report    | Combine all documents         | ⬜ Pending |

### 4. Presentation - 0% Complete

| Task                       | Description             | Status     |
| -------------------------- | ----------------------- | ---------- |
| Create presentation slides | 10-minute presentation  | ⬜ Pending |
| Prepare demonstration      | Show automation working | ⬜ Pending |
| Prepare for viva voce      | Individual Q&A prep     | ⬜ Pending |

---

## 📁 Files Created So Far

```
Sqe_cw/
├── docs/
│   ├── 01-TESTING-REQUIREMENTS.md     ✅
│   ├── 02-TEST-STRATEGY.md            ✅
│   ├── 03-TEST-PLAN.md                ✅
│   ├── plan/
│   │   ├── 3-PHASE-PLAN.md            ✅
│   │   └── YOUR-TASKS-CHECKLIST.md    ✅
│   ├── test-cases/
│   │   └── TEST-CASES-DOCUMENT.md     ✅ (40 test cases)
│   ├── defects/
│   │   └── DEFECT-REPORT.md           ✅ (template ready)
│   └── reports/
│       ├── TEST-COVERAGE-REPORT.md    ✅ (template ready)
│       └── AUTOMATION-TEST-REPORT.md  ✅
├── automation/
│   ├── pages/
│   │   ├── BasePage.js                ✅
│   │   ├── RegisterPage.js            ✅
│   │   ├── LoginPage.js               ✅
│   │   ├── ProductPage.js             ✅
│   │   ├── CartPage.js                ✅
│   │   ├── CheckoutPage.js            ✅
│   │   └── index.js                   ✅
│   ├── tests/
│   │   ├── registration.spec.js       ✅ (7 tests)
│   │   ├── login.spec.js              ✅ (9 tests)
│   │   ├── cart.spec.js               ✅ (9 tests)
│   │   └── checkout.spec.js           ✅ (5 tests)
│   └── test-data/
│       └── testData.js                ✅
└── playwright.config.js               ✅ (configured)
```

---

## ⏱️ Estimated Time Remaining

| Phase                    | Tasks                               | Time Needed   |
| ------------------------ | ----------------------------------- | ------------- |
| Phase 3 - Manual Testing | Execute 40 test cases + screenshots | 2-3 hours     |
| Defect Logging           | Log any failed tests                | 30 mins       |
| Final Report             | Compile PDF with all evidence       | 1 hour        |
| Presentation             | Create slides + prepare demo        | 1-2 hours     |
| **Total**                | -                                   | **5-6 hours** |

---

## 🎯 Next Steps

1. **Execute Manual Tests** - Open the website and run through all 40 test cases
2. **Capture Screenshots** - Save evidence to `screenshots/` folder
3. **Log Defects** - Document any failed tests
4. **Update Coverage Report** - Fill in actual pass/fail counts
5. **Create Final Report** - Compile everything into a PDF
6. **Create Presentation** - Prepare slides for the 10-minute presentation

---

**Say "Start Phase 3" when ready to continue!**
