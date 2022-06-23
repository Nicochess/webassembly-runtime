/// <reference types="Cypress" />

describe('Runs a loop', () => {
  it('user should could run a loop', () => {
    cy.visit('http://localhost:8080/');

    // Type 1 in Start Number
    cy.get('.MuiGrid-root:nth-child(1) #outlined-basic').type('1');
    cy.get('.Mui-focused > #outlined-basic').click();

    // Type 1000 in End Number
    cy.get('.MuiGrid-root:nth-child(2) > .MuiFormControl-root #outlined-basic').type('1000');

    //Run the loop
    cy.get('.MuiButton-root').click();

    // Expect the loop to return the values correctly
    let loopResult;
    cy.get(".result").then($prime => {
      loopResult = $prime.text()
      expect(loopResult).to.equal("Total Primes: 168")
    })
  })
})