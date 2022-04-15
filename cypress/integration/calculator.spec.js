describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  //Do the number buttons update the display of the running total?
  it('should have correctly working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  //Do the arithmetical operations update the display with the result of the operation?
  it('arithmetical operations should update the display of the running total', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  //Can multiple operators be chained together?
  it('should chain together multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  //handle negative numbers
  it('should be able to handle negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  //handle decimal numbers
  it('should be able to handle decimal numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.5')
  })

  //handle large numbers
  it('should be able to handle large numbers', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '40087663')
  })

  //divisible by zero
  it('should be able to divide by zero', ()=>{
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Cannot divide by 0')
  })
})