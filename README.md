Intuji QA Intern Challenge 🚀


Automation testing project for the DemoQA Practice Form, as part of the Intuji QA Internship Challenge.

📂 Project Structure
bash
Copy
Edit
intuji-QA-Intern-challenge/
├── cypress/
│   ├── e2e/
│   │   ├── formPositive.cy.js   # Positive test cases
│   │   ├── formNegative.cy.js   # Negative/bug validation cases
│   ├── fixtures/
│   │   ├── sampleFile.jpeg      # Sample image for upload
│   │   ├── sampleFile.txt       # Non-image file for negative upload test
│   ├── support/
│   │   ├── commands.js          # Custom commands (if any)
│   │   ├── e2e.js               # Cypress support file
├── cypress.config.js             # Cypress configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
Test Cases Covered
✅ Positive Test

Fill all required fields with valid data and submit successfully.

Verify the success modal appears after submission.

❌ Negative Tests / Bug Reports

Upload field accepts non-image files (.txt, .pdf) — Should be restricted to images.

No error shown when required fields (First Name, Last Name, Mobile Number) are missing.

Gender selection is not enforced — no validation message shown if skipped.

How to Run the Project
1)Clone the repository:

git clone https://github.com/Sea-zone/intuji-QA-Intern-challenge.git
cd intuji-QA-Intern-challenge

2)Install dependencies

npm install

3)Run Cypress

  a)Open Cypress Test Runner


npx cypress open
Or
run tests headlessly


Execute Tests

Open formPositive.cy.js to run positive cases

Open formNegative.cy.js to run negative/bug validation cases

Important Notes


Non-image file (sampleFile.txt) and sample image (sampleFile.jpeg) are included inside /fixtures/.

Bugs have been reported based on observed behavior on https://demoqa.com/automation-practice-form.

Tools Used
Cypress — End-to-End Testing Framework

JavaScript (ES6)

Author
👤 Sea-zone
