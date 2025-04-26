Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});


describe('DemoQA Form Automation', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');
  });

  it('Should submit the form with valid data', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('johndoe@example.com');
    cy.contains('label', 'Male').click(); // Better way for Gender

    cy.get('#userNumber').type('9876543210');

    // Set date of birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__day--015').click();

    // Subject
    cy.get('#subjectsInput').type('Maths{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Upload picture (make sure file exists!)
    cy.get('#uploadPicture').selectFile('cypress/fixtures/sampleFile.jpeg');

    // Current address
    cy.get('#currentAddress').type('123 Main Street, Cityville');

    // State and City (using safer selectors)
    cy.get('#state').click().contains('div', 'NCR').click();
    cy.get('#city').click().contains('div', 'Delhi').click();

    // Submit
    cy.get('#submit').click({ force: true });

    // Assert successful submission
    cy.get('.modal-content').should('contain', 'Thanks for submitting the form');
  });
});
