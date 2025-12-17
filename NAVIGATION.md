# 📂 Project Navigation Guide

Quick links to find all project files for the final report.

---

## 📋 Core Testing Documents

| Document                                | Location                                                                                       |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Testing Requirements (TR-001 to TR-008) | [01-TESTING-REQUIREMENTS.md](docs/test-artifacts/01-TESTING-REQUIREMENTS.md)                   |
| Test Strategy                           | [02-TEST-STRATEGY.md](docs/test-artifacts/02-TEST-STRATEGY.md)                                 |
| Test Plan                               | [03-TEST-PLAN.md](docs/test-artifacts/03-TEST-PLAN.md)                                         |
| Requirements Traceability Matrix (RTM)  | [REQUIREMENTS-TRACEABILITY-MATRIX.md](docs/test-artifacts/REQUIREMENTS-TRACEABILITY-MATRIX.md) |
| Test Cases (40 TCs)                     | [TEST-CASES-DOCUMENT.md](docs/test-cases/TEST-CASES-DOCUMENT.md)                               |

---

## 📊 Test Reports

| Document                         | Location                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| **Final Test Report (Go/No-Go)** | [FINAL-TEST-REPORT.md](docs/reports/FINAL-TEST-REPORT.md)                             |
| Manual Test Execution Report     | [MANUAL-TEST-EXECUTION-REPORT.md](docs/reports/MANUAL-TEST-EXECUTION-REPORT.md)       |
| Automated Test Execution Report  | [AUTOMATED-TEST-EXECUTION-REPORT.md](docs/reports/AUTOMATED-TEST-EXECUTION-REPORT.md) |
| Test Coverage Report             | [TEST-COVERAGE-REPORT.md](docs/reports/TEST-COVERAGE-REPORT.md)                       |
| Playwright HTML Report           | [playwright-html-report/](docs/reports/playwright-html-report/)                       |

---

## 🐛 Defects

| Document                             | Location                                          |
| ------------------------------------ | ------------------------------------------------- |
| Defect Report (DEF-001 to DEF-004)   | [DEFECT-REPORT.md](docs/defects/DEFECT-REPORT.md) |
| Defect Evidence (Screenshots/Videos) | [evidence/](docs/defects/evidence/)               |

---

## 🔍 Exploratory Testing

| Document                 | Location                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------- |
| Exploratory Test Charter | [EXPLORATORY-TEST-CHARTER.md](docs/exploratory-testing/EXPLORATORY-TEST-CHARTER.md) |
| Exploratory Screenshots  | [docs/exploratory-testing/](docs/exploratory-testing/)                              |

---

## 📸 Screenshots (Manual Test Evidence)

| Category                        | Location                                                              |
| ------------------------------- | --------------------------------------------------------------------- |
| Functional (TC001-TC020)        | [screenshots/functional/](docs/screenshots/functional/)               |
| Usability (TC021-TC026)         | [screenshots/usability/](docs/screenshots/usability/)                 |
| UI/UX (TC027-TC032)             | [screenshots/ui-ux/](docs/screenshots/ui-ux/)                         |
| Boundary/Negative (TC033-TC040) | [screenshots/boundary-negative/](docs/screenshots/boundary-negative/) |

---

## 🤖 Automation Code

| Component                | Location                                                             |
| ------------------------ | -------------------------------------------------------------------- |
| Page Objects (6 classes) | [automation/pages/](automation/pages/)                               |
| Test Suites (4 specs)    | [automation/tests/](automation/tests/)                               |
| Test Data                | [automation/test-data/testData.js](automation/test-data/testData.js) |
| Playwright Config        | [playwright.config.js](playwright.config.js)                         |

### Test Suites:

| Suite                          | File                                                          |
| ------------------------------ | ------------------------------------------------------------- |
| AT-001: Registration (7 tests) | [registration.spec.js](automation/tests/registration.spec.js) |
| AT-002: Login (9 tests)        | [login.spec.js](automation/tests/login.spec.js)               |
| AT-003: Cart (9 tests)         | [cart.spec.js](automation/tests/cart.spec.js)                 |
| AT-004: Checkout (5 tests)     | [checkout.spec.js](automation/tests/checkout.spec.js)         |

---

## 🎤 Presentation Materials

| Document            | Location                                                           |
| ------------------- | ------------------------------------------------------------------ |
| Project Overview    | [PROJECT-OVERVIEW.md](docs/presentation/PROJECT-OVERVIEW.md)       |
| Slides Content      | [SLIDES-CONTENT.md](docs/presentation/SLIDES-CONTENT.md)           |
| Presentation Script | [PRESENTATION-SCRIPT.md](docs/presentation/PRESENTATION-SCRIPT.md) |
| Viva Q&A Prep       | [VIVA-QUESTIONS.md](docs/presentation/VIVA-QUESTIONS.md)           |

---

## 📁 Other Documents

| Document                   | Location                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Original Assignment        | [HNDIS25.1F - SQE -Course work (Group).pdf](<docs/assignment/HNDIS25.1F%20-%20SQE%20-Course%20work%20(Group).pdf>) |
| Team Handover Instructions | [TEAM-HANDOVER-INSTRUCTIONS.md](docs/assignment/TEAM-HANDOVER-INSTRUCTIONS.md)                                     |
| Progress Report            | [PROGRESS-REPORT.md](docs/overviews/PROGRESS-REPORT.md)                                                            |
| 3-Phase Plan               | [3-PHASE-PLAN.md](docs/overviews/3-PHASE-PLAN.md)                                                                  |
| Automation Overview        | [AUTOMATION-OVERVIEW.md](docs/overviews/AUTOMATION-OVERVIEW.md)                                                    |

---

## 🚀 Quick Commands

```powershell
# Run all automated tests
npx playwright test

# View HTML report
npx playwright show-report automation/reports

# Run specific test suite
npx playwright test automation/tests/registration.spec.js
```

---

**Team:** Lakindu De Silva, Chamath Madurasinghe, Senithi Mathangaweera
