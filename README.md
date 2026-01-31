# Tricentis DemoWebShop QA Suite

<p>
  <img src="https://img.shields.io/badge/Playwright-1.57-45ba4b?logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tests-30 Passing-success" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-100%25-brightgreen" alt="Coverage">
</p>

A comprehensive QA automation suite for [Tricentis DemoWebShop](https://demowebshop.tricentis.com/) featuring end-to-end test automation, manual test documentation, and complete test artifacts following industry-standard QA practices.

---

## Highlights

- **30 automated tests** using Playwright with Page Object Model
- **40 manual test cases** with full execution documentation
- **100% requirements coverage** across 8 testing requirements
- **4 defects identified** with detailed evidence and severity classification
- Complete test artifacts: Strategy, Plan, RTM, and Final Report

---

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# View HTML report
npx playwright show-report
```

### Run Individual Suites

```bash
npx playwright test automation/tests/registration.spec.js
npx playwright test automation/tests/login.spec.js
npx playwright test automation/tests/cart.spec.js
npx playwright test automation/tests/checkout.spec.js
```

---

## Test Results

| Metric               | Result               |
| -------------------- | -------------------- |
| Automated Tests      | 30/30 Pass (100%)    |
| Manual Tests         | 39/40 Pass (97.5%)   |
| Requirements Covered | 8/8 (100%)           |
| Defects Found        | 4 (1 High, 3 Medium) |
| **Release Decision** | **GO (Conditional)** |

<details>
<summary><strong>Automated Test Breakdown</strong></summary>

| Suite         | Tests | Status  |
| ------------- | ----- | ------- |
| Registration  | 7     | ✅ Pass |
| Login         | 9     | ✅ Pass |
| Shopping Cart | 9     | ✅ Pass |
| Checkout      | 5     | ✅ Pass |

</details>

---

## Project Structure

```
├── automation/
│   ├── pages/           # Page Object Model classes
│   ├── tests/           # Playwright test specs
│   ├── test-data/       # Test data generators
│   └── reports/         # HTML test reports
│
├── docs/
│   ├── test-planning/  # Strategy, Plan, RTM
│   ├── test-cases/      # 40 manual test cases
│   ├── defects/         # Defect reports with evidence
│   ├── reports/         # Execution reports
│   └── screenshots/     # Test execution evidence
```

---

## Documentation

| Document                                                      | Description                      |
| ------------------------------------------------------------- | -------------------------------- |
| [Test Strategy](docs/test-planning/02-TEST-STRATEGY.md)       | Testing approach and methodology |
| [Test Plan](docs/test-planning/03-TEST-PLAN.md)               | Scope, schedule, and resources   |
| [Test Cases](docs/test-cases/TEST-CASES-DOCUMENT.md)          | 40 manual test cases             |
| [RTM](docs/test-planning/REQUIREMENTS-TRACEABILITY-MATRIX.md) | Requirements traceability        |
| [Defect Report](docs/defects/DEFECT-REPORT.md)                | Identified defects with evidence |
| [Final Report](docs/reports/FINAL-TEST-REPORT.md)             | Go/No-Go decision                |

---

## Tech Stack

| Component | Technology               |
| --------- | ------------------------ |
| Framework | Playwright               |
| Language  | JavaScript (ES6+)        |
| Pattern   | Page Object Model        |
| Browser   | Chromium                 |
| Reporting | Playwright HTML Reporter |

---

## Author

**Lakindu De Silva** — Test architecture, automation framework, test design, and documentation.

### Contributors

- [Chamath Madurasinghe](https://github.com/ChamathMadurasinghe) — Manual test execution
- [Senithi Mathangaweera](https://github.com/senithi-spec) — Manual test execution, exploratory testing
