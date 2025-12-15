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
│   └── 📁 test-results/            # Test execution artifacts
│
├── 📁 docs/                        # All documentation
│   ├── 📁 assignment/              # Original assignment files
│   │   ├── assignment.md
│   │   ├── HNDIS25.1F - SQE -Course work (Group).pdf
│   │   └── TEAM-HANDOVER-INSTRUCTIONS.md  # Task assignment for team
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
│   │   └── REQUIREMENTS-TRACEABILITY-MATRIX.md  # RTM
│   │
│   ├── 📁 test-cases/              # Manual test cases
│   │   └── TEST-CASES-DOCUMENT.md  # 40 test cases (TC001-TC040)
│   │
│   ├── 📁 defects/                 # Defect tracking
│   │   └── DEFECT-REPORT.md
│   │
│   ├── 📁 screenshots/             # Test execution screenshots
│   │
│   └── 📁 reports/                 # Test reports & evidence
│       ├── AUTOMATED-TEST-EXECUTION-REPORT.md
│       ├── Automated-Test-Execution-Report.pdf
│       ├── TEST-COVERAGE-REPORT.md
│       ├── playwright-html-report/  # Interactive HTML report
│       └── playwright-html-report.png
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

| Category                 | Count | Status        |
| ------------------------ | ----- | ------------- |
| **Manual Test Cases**    | 40    | ✅ Documented |
| **Automated Tests**      | 30    | ✅ 100% Pass  |
| **Requirements Covered** | 8/8   | ✅ 100%       |

### Automated Test Breakdown

| Suite                 | Tests | Status  |
| --------------------- | ----- | ------- |
| AT-001: Registration  | 7     | ✅ Pass |
| AT-002: Login         | 9     | ✅ Pass |
| AT-003: Shopping Cart | 9     | ✅ Pass |
| AT-004: Checkout      | 5     | ✅ Pass |

---

## 📋 Key Documents

| Document                                                                 | Description                               |
| ------------------------------------------------------------------------ | ----------------------------------------- |
| [Testing Requirements](docs/test-artifacts/01-TESTING-REQUIREMENTS.md)   | 8 testing requirements (TR-001 to TR-008) |
| [Test Strategy](docs/test-artifacts/02-TEST-STRATEGY.md)                 | Testing approach and methodology          |
| [Test Plan](docs/test-artifacts/03-TEST-PLAN.md)                         | Scope, schedule, and resources            |
| [Test Cases](docs/test-cases/TEST-CASES-DOCUMENT.md)                     | 40 manual test cases                      |
| [RTM](docs/test-artifacts/REQUIREMENTS-TRACEABILITY-MATRIX.md)           | Requirements traceability matrix          |
| [Coverage Report](docs/reports/TEST-COVERAGE-REPORT.md)                  | Test coverage analysis                    |
| [Execution Report](docs/reports/AUTOMATED-TEST-EXECUTION-REPORT.md)      | Automated test results                    |
| [Execution Report PDF](docs/reports/Automated-Test-Execution-Report.pdf) | PDF version of test results               |
| [Team Handover](docs/assignment/TEAM-HANDOVER-INSTRUCTIONS.md)           | Task assignment for team members          |

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
