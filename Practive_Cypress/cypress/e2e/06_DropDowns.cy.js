/// <reference types="cypress" /> 
describe('DropDowns functionality', ()=>{
    // 1. simple select dropdown
    it.skip('DropDowns with select', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")

        cy.get(".et_pb_blurb_description select")
          .select('audi')
          .should('have.value', 'audi')
    })

     // 2. bootstrap dropdown
     it.skip('DropDowns without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Iceland').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', 'Iceland')
    })

    // 3. auto suggest dropdown
    it.skip('Auto suggest DropDowns', ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('input#searchInput').type('Patna')
        // find total no. of suggestion & click on 'Patna Metro'
        cy.get('.suggestion-title').contains('Patna Metro').click()
    })

    // 4. dynamic auto suggest dropdown
    it('Dynamic DropDowns', ()=>{
        cy.visit("https://www.google.com/")
        cy.get("[name='q']").type('cypress automation')
        cy.wait(3000)
        // Jquery function
        cy.get("div.wM6W7d>span").should('have.length', 13)

        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        cy.get("[name='q']").should('have.value', 'cypress automation tool')   
    })
})
