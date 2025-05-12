// Auto sugeestions
/// <reference types="cypress" /> 
describe("Radio button & check box test suite", ()=>{
    /*
    it('Radio button test', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        // visibilty of radio button
        cy.get("input[value='male']").should('be.visible')
        cy.get("input[value='female']").should('be.visible')
        // selecting radio button
        cy.get("input[value='female']").check().should('be.checked')
        cy.get("input[value='male']").should('not.be.checked')

        cy.get("input[value='male']").check().should('be.checked')
        cy.get("input[value='female']").should('not.be.checked')
        cy.get("input[value='other']").should('not.be.checked')
    })
*/
    it('Checkbox test', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        // Visibility of element
        cy.get("input[value='Bike']").should('be.visible')
        // Select one checkbox
        cy.get("input[value='Bike']").check().should('be.checked')
        // Unselect one checkbox
        cy.get("input[value='Bike']").uncheck().should('not.be.checked')

        // get all checkboxes locator using -> "input[type='checkbox']"
        // Selecting all the checkboxes
        cy.get("input[type='checkbox']").check().should('be.checked')
        // Unselect all the checkboxes
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        //Select first checkbox
        cy.get("input[type='checkbox']").first().check().should('be.checked')
        // Select last checkbox
        cy.get("input[type='checkbox']").last().check().should('be.checked')
    })
})
