/// <reference types='cypress' />
describe('Browser Navigation', ()=>{
    
    it('Go backward & forward', ()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(".heading").should('have.text', 'Welcome to the-internet')
        const labelText ='Checkboxes'
        // use custom command clickLink(label)
        cy.clickLink(labelText)
        cy.get('.example h3').should('have.text', 'Checkboxes')

        cy.go('back') // back to the home page
        cy.get(".heading").should('have.text', 'Welcome to the-internet')

        cy.go('forward') // forward to the page
        cy.get('.example h3').should('have.text', 'Checkboxes')

        cy.go(-1) // back to the home page
        cy.get(".heading").should('have.text', 'Welcome to the-internet')

        cy.go(1)  // forward to the page
        cy.get('.example h3').should('have.text', 'Checkboxes')

        cy.reload() // reload the page
        cy.get('.example h3').should('have.text', 'Checkboxes')
        
    })
})