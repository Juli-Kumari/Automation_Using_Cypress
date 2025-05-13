/// <reference types="cypress" /> 
import 'cypress-iframe';

describe('IFrame functionality',()=>{
    it('Approach 1: iframe', ()=>{
      cy.visit("https://the-internet.herokuapp.com/iframe") 

      // read only info message coming to website
      cy.xpath("(//*[name()='svg'])[18]").click()

      let iframe =  cy.get('#mce_0_ifr') // get iframe locator
      // since actual element is present inside the '#document
      // one #document is present, so write 0 here
      .its('0.contentDocument.body')  // get the document
        .should('be.visible')  // check document is visible or not
        .then(cy.wrap) // wrap that element
      
        iframe.clear().type('Welcome to iframe textbox {ctrl + a }')

        cy.get("[title='Bold'] svg'").should('be.enabled').click()
       
    })

    it('Approach 2: using custom command', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe") 
  
        cy.getIframe('#mce_0_ifr').clear().type('Welcome to iframe textbox {ctrl + a }')

        cy.get("[title='Bold'] svg'").should('be.enabled').click()
         
      })

    it.only('Approach 3: using cypress-iframe plugin', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe") 

        cy.frameLoaded('#mce_0_ifr')  // load the frame
        cy.iframe('#mce_0_ifr')  // to interact with the frame
          .clear().type('Welcome to text box!')
         
      })
})



