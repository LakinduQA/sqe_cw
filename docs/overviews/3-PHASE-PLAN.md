# 🎯 SQE Coursework - 3 Phase Execution Plan

**Website:** https://demowebshop.tricentis.com/  
**Deadline:** December 18, 2025  
**Execution Date:** December 15, 2025  
**Prepared By:** Lakindu De Silva

---

## 📁 Folder Structure

```
Sqe_cw/
├── docs/
│   ├── 01-TESTING-REQUIREMENTS.md    ✅ Complete
│   ├── 02-TEST-STRATEGY.md           ✅ Complete
│   ├── 03-TEST-PLAN.md               ✅ Complete
│   ├── plan/           → This plan + instructions
│   ├── test-cases/     → Test case documents
│   ├── defects/        → Defect reports
│   └── reports/        → Coverage & final reports
├── automation/         → Playwright test scripts
├── screenshots/        → Evidence for manual tests
└── tests/              → Existing Playwright setup
```

---

## 🚦 PHASE 1: Documentation & Test Design (Copilot Does)

**Estimated Time: ~30 mins** ✅ COMPLETE

| Task                                     | Who     | Status  |
| ---------------------------------------- | ------- | ------- |
| 1.0 Explore website with Playwright      | Copilot | ✅ Done |
| 1.1 Create Testing Requirements Document | Copilot | ✅ Done |
| 1.2 Create Test Strategy Document        | Copilot | ✅ Done |
| 1.3 Create Test Plan Document            | Copilot | ✅ Done |
| 1.4 Create 40 Test Cases Document        | Copilot | ✅ Done |
| 1.5 Create Defect Report Template        | Copilot | ✅ Done |
| 1.6 Create Test Coverage Report Template | Copilot | ✅ Done |

**YOUR ACTION:** Review documents, then say "Start Phase 2" ✅

---

## 🚦 PHASE 2: Test Automation (Copilot Does)

**Estimated Time: ~45 mins** ✅ COMPLETE

| Task                                   | Who     | Status  |
| -------------------------------------- | ------- | ------- |
| 2.1 Write Registration automation test | Copilot | ✅ Done |
| 2.2 Write Login automation test        | Copilot | ✅ Done |
| 2.3 Write Add to Cart test             | Copilot | ✅ Done |
| 2.4 Write Checkout/E2E test            | Copilot | ✅ Done |
| 2.5 Execute all automation tests       | Copilot | ✅ Done |
| 2.6 Generate automation report         | Copilot | ✅ Done |

**Results:** 30 tests passed (100% pass rate)

- Registration: 7 tests ✅
- Login: 9 tests ✅
- Cart: 9 tests ✅
- Checkout E2E: 5 tests ✅

**YOUR ACTION:** Review automation report, then say "Start Phase 3" ✅

---

## 🚦 PHASE 3: Manual Testing & Finalization (YOU DO + Copilot Helps)

**Estimated Time: ~2-3 hours** ✅ COMPLETE

| Task                             | Who           | Status               |
| -------------------------------- | ------------- | -------------------- |
| 3.1 Execute Manual Test Cases    | **Team**      | ✅ Done (39/40 Pass) |
| 3.2 Take screenshots as evidence | **Team**      | ✅ Done              |
| 3.3 Log defects for failed tests | Copilot helps | ✅ Done (DEF-001)    |
| 3.4 Create Final Report          | Copilot       | ✅ Done              |
| 3.5 Create Presentation Slides   | Copilot       | ✅ Done              |

**Results:**

- Manual Tests: 39/40 passed (97.5%)
- Defects Found: 1 (DEF-001 - Medium severity)
- Release Decision: **GO (Conditional)**

---

## 📋 What YOU Need To Do (Summary)

### During Phase 3:

1. **Open** https://demowebshop.tricentis.com/ in your browser
2. **Execute** each test case from the test case document
3. **Take screenshots** using Windows (Win + Shift + S) and save to `screenshots/` folder
4. **Record** Pass/Fail status and actual results
5. **Report back** any failed tests so I can log defects

### Naming Convention for Screenshots:

```
TC001_registration_pass.png
TC002_login_fail.png
TC015_checkout_pass.png
```

---

## ⏱️ Time Estimate

| Phase   | Duration | Cumulative    |
| ------- | -------- | ------------- |
| Phase 1 | 30 min   | 30 min        |
| Phase 2 | 45 min   | 1 hr 15 min   |
| Phase 3 | 2-3 hrs  | 3-4 hrs total |

---

## 🚀 Ready?

**Say "Start Phase 1" when you're ready to begin!**

I will complete each phase task-by-task and check in with you before moving to the next phase.
