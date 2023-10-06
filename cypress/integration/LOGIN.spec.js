//SKIP

///<reference types="cypress"/>

describe('Test the login functionality for pathology lab app', function ()
 {
    before('Run before it block', function ()
     {
        cy.visit('https://gor-pathology.web.app/')
     })
    it.only('Login with valid credential', function ()
     {
        cy.wait(1000)
        //Apply static loader for load website.
        cy.get('input[name="email"]').type('test@kennect.io')
        cy.get('input[name="password"]').type('Qwerty@1234')
        cy.get('button[type="submit"] span[class="MuiButton-label"]').click()
        
    })
    it('Verify Test cost calculator and TODOS on Home page', function()
    {
      cy.wait(1000) 
      //Apply static loader for load all web element after login successfully.
      cy.get('.jss72').should('be.visible')

    })
})