# 📊 SQE Coursework - Progress Report

**Student:** Lakindu De Silva  
**Date:** December 16, 2025  
**Deadline:** December 18, 2025  
**Website:** https://demowebshop.tricentis.com/

---

## Overall Progress: 100% Complete ✅

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

| Requirement                      | Deliverable                                                                           | Status  |
| -------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Choose 3-5 critical test cases   | 4 test suites (30 automated tests)                                                    | ✅ Done |
| Use automation tool (Playwright) | Playwright with Page Object Model                                                     | ✅ Done |
| Implement automation scripts     | 4 spec files created                                                                  | ✅ Done |
| Execute automated tests          | 30/30 tests passing (100%)                                                            | ✅ Done |
| Capture execution results        | HTML report generated                                                                 | ✅ Done |
| Automation report                | [AUTOMATED-TEST-EXECUTION-REPORT.md](docs/reports/AUTOMATED-TEST-EXECUTION-REPORT.md) | ✅ Done |

### 3. Test Cases Created - 40 Test Cases ✅

| Category                  | Count  | Test IDs    |
| ------------------------- | ------ | ----------- |
| Functional Testing        | 20     | TC001-TC020 |
| Usability Testing         | 6      | TC021-TC026 |
| UI/UX Testing             | 6      | TC027-TC032 |
| Boundary/Negative Testing | 8      | TC033-TC040 |
| **Total**                 | **40** | -           |

---

## ✅ COMPLETED TASKS (Phase 3)

### 1. Manual Test Execution - 100% Complete ✅

| Task                  | Description                       | Status                    |
| --------------------- | --------------------------------- | ------------------------- |
| Execute 40 test cases | Run each test case on the website | ✅ Done                   |
| Record actual results | Document what actually happened   | ✅ Done                   |
| Take screenshots      | Capture evidence for each test    | ✅ Done                   |
| Mark Pass/Fail status | Update test case document         | ✅ Done (39 Pass, 1 Fail) |

### 2. Defect Logging - 100% Complete ✅

| Task                         | Description                  | Status                               |
| ---------------------------- | ---------------------------- | ------------------------------------ |
| Log defects for failed tests | Create defect entries        | ✅ Done (DEF-001 to DEF-004)         |
| Include all required fields  | ID, Summary, Steps, Severity | ✅ Done                              |
| Link to test cases           | Reference TC IDs             | ✅ Done (TC034, ETC01, ETC02, ETC03) |
| Add screenshots as evidence  | Attach supporting evidence   | ✅ Done                              |

### 3. Final Report & Decision Making - 100% Complete ✅

| Task                       | Description                   | Status                     |
| -------------------------- | ----------------------------- | -------------------------- |
| Analyze test results       | Review all pass/fail outcomes | ✅ Done                    |
| Release readiness decision | Go/No-Go recommendation       | ✅ Done (GO - Conditional) |
| Identify key risks         | Document potential issues     | ✅ Done                    |
| Provide recommendations    | Improvement suggestions       | ✅ Done                    |
| Create final PDF report    | Combine all documents         | ⬜ Pending                 |

### 4. Presentation - 100% Complete ✅

| Task                       | Description             | Status   |
| -------------------------- | ----------------------- | -------- |
| Create presentation slides | 10-minute presentation  | ✅ Done  |
| Prepare demonstration      | Show automation working | ✅ Ready |
| Prepare for viva voce      | Individual Q&A prep     | ✅ Done  |

---

## 📁 Files Created

```
Sqe_cw/
├── docs/
│   ├── test-artifacts/
│   │   ├── 01-TESTING-REQUIREMENTS.md     ✅
│   │   ├── 02-TEST-STRATEGY.md            ✅
│   │   ├── 03-TEST-PLAN.md                ✅
│   │   └── REQUIREMENTS-TRACEABILITY-MATRIX.md ✅
│   ├── test-cases/
│   │   └── TEST-CASES-DOCUMENT.md         ✅ (40 test cases - EXECUTED)
│   ├── defects/
│   │   └── DEFECT-REPORT.md               ✅ (4 defects logged - DEF-001 to DEF-004)
│   ├── reports/
│   │   ├── TEST-COVERAGE-REPORT.md        ✅
│   │   ├── AUTOMATION-TEST-REPORT.md      ✅
│   │   ├── MANUAL-TEST-EXECUTION-REPORT.md ✅ (NEW)
│   │   └── FINAL-TEST-REPORT.md           ✅ (NEW)
│   ├── overviews/
│   │   └── PROGRESS-REPORT.md             ✅
│   └── assignment/
│       └── TEAM-HANDOVER-INSTRUCTIONS.md  ✅
├── automation/
│   ├── pages/
│   │   ├── BasePage.js                    ✅
│   │   ├── RegisterPage.js                ✅
│   │   ├── LoginPage.js                   ✅
│   │   ├── ProductPage.js                 ✅
│   │   ├── CartPage.js                    ✅
│   │   ├── CheckoutPage.js                ✅
│   │   └── index.js                       ✅
│   ├── tests/
│   │   ├── registration.spec.js           ✅ (7 tests - PASSED)
│   │   ├── login.spec.js                  ✅ (9 tests - PASSED)
│   │   ├── cart.spec.js                   ✅ (9 tests - PASSED)
│   │   └── checkout.spec.js               ✅ (5 tests - PASSED)
│   └── test-data/
│       └── testData.js                    ✅
└── playwright.config.js                   ✅
```

---

## ⏱️ Remaining Tasks

| Task                  | Time Needed | Status     |
| --------------------- | ----------- | ---------- |
| Create presentation   | 1-2 hours   | ✅ Done    |
| Compile final PDF     | 30 mins     | ⬜ Pending |
| Prepare for viva voce | 1 hour      | ✅ Done    |
| **Total**             | **30 mins** | -          |

---

## 🎯 Next Steps

1. ✅ ~~Execute Manual Tests~~ - **DONE** (39/40 passed)
2. ✅ ~~Capture Screenshots~~ - **DONE**
3. ✅ ~~Log Defects~~ - **DONE** (DEF-001 logged)
4. ✅ ~~Update Coverage Report~~ - **DONE**
5. ✅ ~~Create Final Report~~ - **DONE**
6. ✅ ~~Create Presentation~~ - **DONE** (Slides, Script, Viva Q&A)
7. ⬜ **Compile PDF** - Combine all documents into final submission PDF
8. ✅ ~~Prepare for Viva~~ - **DONE** (25 Q&A prepared)

---

## 📊 Final Results Summary

| Metric                | Value                         |
| --------------------- | ----------------------------- |
| Total Test Cases      | 70 (40 manual + 30 automated) |
| Passed                | 69                            |
| Failed                | 1                             |
| **Overall Pass Rate** | **98.6%**                     |
| Defects Found         | 4 (1 High, 3 Medium)          |
| **Release Decision**  | **GO (Conditional)**          |

---

**🎉 Testing Phase Complete! Ready for presentation preparation.**
