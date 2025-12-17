# SQE Coursework - Demo Web Shop Testing

## Project Overview

**Student:** Lakindu De Silva  
**Module:** Software Quality Engineering (SQE)  
**Application Under Test:** https://demowebshop.tricentis.com/

---

## 📁 Project Structure

```
SQE_CW/
├── 📄 README.md                    # This file
├── 📄 package.json                 # Node.js dependencies
├── 📄 playwright.config.js         # Playwright configuration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 automation/                  # Automated test suite
│   ├── 📁 pages/                   # Page Object Model classes
│   │   ├── BasePage.js
│   │   ├── RegisterPage.js
│   │   ├── LoginPage.js
│   │   ├── ProductPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── index.js
│   ├── 📁 tests/                   # Test specifications
│   │   ├── registration.spec.js    # AT-001: Registration tests (7)
│   │   ├── login.spec.js           # AT-002: Login tests (9)
│   │   ├── cart.spec.js            # AT-003: Cart tests (9)
│   │   └── checkout.spec.js        # AT-004: Checkout tests (5)
│   ├── 📁 test-data/               # Test data generators
│   │   └── testData.js
│   ├── 📁 reports/                 # HTML test reports
│   └── 📁 test-results/            # Test execution artifacts
│
├── 📁 docs/                        # All documentation
│   ├── 📁 assignment/              # Original assignment files
│   │   ├── assignment.md
│   │   ├── HNDIS25.1F - SQE -Course work (Group).pdf
│   │   └── TEAM-HANDOVER-INSTRUCTIONS.md
│   │
│   ├── 📁 overviews/               # Project planning & overviews
│   │   ├── 3-PHASE-PLAN.md
│   │   ├── AUTOMATION-OVERVIEW.md
│   │   └── PROGRESS-REPORT.md
│   │
│   ├── 📁 test-artifacts/          # Core testing documents
│   │   ├── 01-TESTING-REQUIREMENTS.md   # TR-001 to TR-008
│   │   ├── 02-TEST-STRATEGY.md          # Testing approach
│   │   ├── 03-TEST-PLAN.md              # Test schedule & scope
│   │   └── REQUIREMENTS-TRACEABILITY-MATRIX.md
│   │
│   ├── 📁 test-cases/              # Manual test cases
│   │   └── TEST-CASES-DOCUMENT.md  # 40 test cases (TC001-TC040)
│   │
│   ├── 📁 defects/                 # Defect tracking
│   │   ├── DEFECT-REPORT.md        # DEF-001 to DEF-004
│   │   └── 📁 evidence/            # Defect screenshots & videos
│   │
│   ├── 📁 exploratory-testing/     # Exploratory testing session
│   │   └── EXPLORATORY-TEST-CHARTER.md
│   │
│   ├── 📁 screenshots/             # Test execution screenshots
│   │   ├── 📁 functional/          # TC001-TC020
│   │   ├── 📁 usability/           # TC021-TC026
│   │   ├── 📁 ui-ux/               # TC027-TC032
│   │   └── 📁 boundary-negative/   # TC033-TC040
│   │
│   ├── 📁 presentation/            # Viva preparation materials
│   │   ├── PROJECT-OVERVIEW.md
│   │   ├── SLIDES-CONTENT.md
│   │   ├── PRESENTATION-SCRIPT.md
│   │   └── VIVA-QUESTIONS.md
│   │
│   └── 📁 reports/                 # Test reports
│       ├── FINAL-TEST-REPORT.md    # Go/No-Go decision
│       ├── AUTOMATED-TEST-EXECUTION-REPORT.md
│       ├── MANUAL-TEST-EXECUTION-REPORT.md
│       ├── TEST-COVERAGE-REPORT.md
│       └── playwright-html-report/
│
├── 📁 .github/workflows/           # CI/CD pipeline
│   └── playwright.yml
│
└── 📁 node_modules/                # Dependencies (auto-generated)
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```powershell
npm install
```

### Run All Automated Tests

```powershell
npx playwright test
```

### View Test Report

```powershell
npx playwright show-report
```

### Run Specific Test Suite

```powershell
# Registration tests
npx playwright test automation/tests/registration.spec.js

# Login tests
npx playwright test automation/tests/login.spec.js

# Cart tests
npx playwright test automation/tests/cart.spec.js

# Checkout tests
npx playwright test automation/tests/checkout.spec.js
```

---

## 📊 Test Summary

| Category                 | Count | Status                     |
| ------------------------ | ----- | -------------------------- |
| **Manual Test Cases**    | 40    | ✅ 39 Pass, 1 Fail (97.5%) |
| **Automated Tests**      | 30    | ✅ 100% Pass               |
| **Combined Pass Rate**   | 70    | ✅ **98.6%**               |
| **Requirements Covered** | 8/8   | ✅ 100%                    |
| **Defects Found**        | 4     | ⚠️ 1 High, 3 Medium        |
| **Release Decision**     | -     | ✅ **GO (Conditional)**    |

### Automated Test Breakdown

| Suite                 | Tests | Status  |
| --------------------- | ----- | ------- |
| AT-001: Registration  | 7     | ✅ Pass |
| AT-002: Login         | 9     | ✅ Pass |
| AT-003: Shopping Cart | 9     | ✅ Pass |
| AT-004: Checkout      | 5     | ✅ Pass |

### Manual Test Breakdown

| Category                        | Tests | Status                     |
| ------------------------------- | ----- | -------------------------- |
| Functional (TC001-TC020)        | 20    | ✅ 20/20 Pass              |
| Usability (TC021-TC026)         | 6     | ✅ 6/6 Pass                |
| UI/UX (TC027-TC032)             | 6     | ✅ 6/6 Pass                |
| Boundary/Negative (TC033-TC040) | 8     | ⚠️ 7/8 Pass (TC034 failed) |

---

## 📋 Key Documents

| Document                                                                         | Description                               |
| -------------------------------------------------------------------------------- | ----------------------------------------- |
| [Testing Requirements](docs/test-artifacts/01-TESTING-REQUIREMENTS.md)           | 8 testing requirements (TR-001 to TR-008) |
| [Test Strategy](docs/test-artifacts/02-TEST-STRATEGY.md)                         | Testing approach and methodology          |
| [Test Plan](docs/test-artifacts/03-TEST-PLAN.md)                                 | Scope, schedule, and resources            |
| [Test Cases](docs/test-cases/TEST-CASES-DOCUMENT.md)                             | 40 manual test cases (executed)           |
| [RTM](docs/test-artifacts/REQUIREMENTS-TRACEABILITY-MATRIX.md)                   | Requirements traceability matrix          |
| [Coverage Report](docs/reports/TEST-COVERAGE-REPORT.md)                          | Test coverage analysis                    |
| [Manual Execution Report](docs/reports/MANUAL-TEST-EXECUTION-REPORT.md)          | Manual test execution results             |
| [Automation Report](docs/reports/AUTOMATED-TEST-EXECUTION-REPORT.md)             | Automated test results                    |
| [Defect Report](docs/defects/DEFECT-REPORT.md)                                   | Defects logged (DEF-001 to DEF-004)       |
| [Exploratory Test Charter](docs/exploratory-testing/EXPLORATORY-TEST-CHARTER.md) | Exploratory testing session documentation |
| [**Final Report**](docs/reports/FINAL-TEST-REPORT.md)                            | **Go/No-Go decision & recommendations**   |
| [Team Handover](docs/assignment/TEAM-HANDOVER-INSTRUCTIONS.md)                   | Task assignment for team members          |

---

## 🛠️ Technology Stack

- **Test Framework:** Playwright v1.57.0
- **Language:** JavaScript
- **Pattern:** Page Object Model (POM)
- **Browser:** Chromium
- **Reporter:** HTML

---

## 👤 Team

**Lakindu De Silva** - Lead / Automation  
**Chamath Madurasinghe** - Manual Testing (TC001-TC020)  
**Senithi Mathangaweera** - Manual Testing (TC021-TC040)

SQE Coursework - December 2025
