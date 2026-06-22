# SauceDemo Automation Framework

## Overview

This project is an end-to-end test automation framework built for the SauceDemo web application using Playwright and JavaScript. The framework is designed with scalability, maintainability, and reusability in mind by implementing the Page Object Model (POM) design pattern.

The automation suite covers critical business workflows such as Login, Product Selection, Cart Management, Checkout, and Order Completion.

---

## Tech Stack

* JavaScript
* Playwright
* Page Object Model (POM)
* Data-Driven Testing
* Allure Reports
* GitHub

---

## Project Structure

```bash
SauseDemo/
│── tests/                 # Test cases
│── pages/                 # Page Object Model classes
│── locators/              # Element locators
│── utils/                 # Utility functions
│── testData/              # Test data files (JSON/Excel)
│── playwright.config.js   # Playwright configuration
│── package.json           # Project dependencies
│── README.md              # Project documentation
```

---

## Features

* End-to-end UI automation
* Page Object Model (POM) implementation
* Reusable locators and methods
* Cross-browser testing support
* Data-driven testing support
* Negative test case coverage
* Allure reporting integration
* Environment-based execution

---

## Test Scenarios Covered

### Login Module

* Valid login
* Invalid login
* Blank username/password validation
* Locked-out user validation

### Product Module

* Add products to cart
* Remove products from cart
* Product sorting validation

### Cart Module

* Verify selected products
* Validate product price

### Checkout Module

* Checkout with valid details
* Blank field validation
* Order summary validation

### Order Completion

* Successful order placement
* Confirmation message validation

---

## Installation

Clone the repository:

```bash
git clone https://github.com/arnukrm-PW/SauseDemo.git
```

Navigate to project folder:

```bash
cd SauseDemo
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/login.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests on specific browser:

```bash
npx playwright test --project=chromium
```

---

## Generate Allure Report

Run tests with Allure:

```bash
npx playwright test
```

Generate report:

```bash
allure generate ./allure-results --clean
```

Open report:

```bash
allure open ./allure-report
```

---

## Future Enhancements

* Jenkins CI/CD integration
* API automation integration
* Cucumber BDD implementation
* Database validation
* Parallel execution optimization

---

## Author

Arun Singh
QA Automation Engineer
GitHub: https://github.com/arnukrm-PW
