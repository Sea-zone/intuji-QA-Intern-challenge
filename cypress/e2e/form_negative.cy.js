Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('DemoQA Form Negative Tests', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#fixedban').invoke('remove');
      cy.get('footer').invoke('remove');
    });
  
    it('BUG: Should accept non-image files in Picture Upload', () => {
      cy.get('#uploadPicture').selectFile('cypress/fixtures/sampleFile.txt'); // Make sure sampleFile.txt exists
      cy.get('#uploadPicture').then(input => {
        expect(input[0].files[0].name).to.include('.txt'); // Assert file uploaded is a .txt
      });
    });
  
    it('BUG: Should not show proper validation error for missing required fields', () => {
      // Directly submit without filling anything
      cy.get('#submit').click({ force: true });
  
      // Check if the required fields show red border (not ideal error message, but it's how DemoQA works)
      cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  
      // No specific error message appears (that's the bug)
    });
  
    it('BUG: Should allow submission attempt without selecting Gender and no error shown', () => {
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('johndoe@example.com');
      // Skipping Gender
      cy.get('#userNumber').type('9876543210');
  
      cy.get('#submit').click({ force: true });
  
      // Form should NOT submit
      cy.get('.modal-content').should('not.exist');
  
      // And no specific error shown for gender (buggy behavior)
    });
  });
  