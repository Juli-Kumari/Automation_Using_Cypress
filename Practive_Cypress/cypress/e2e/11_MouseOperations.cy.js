/// <reference types='cypress'/>
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
describe('Mouse operation handling', ()=>{
    it('Mouse hover', ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.wait(3000)
        cy.get("a[href*='/desktops/mac']").should('not.be.visible')
        cy.get("a[href*='/desktops'].dropdown-toggle").trigger('mouseover').click()
        cy.get("a[href*='/desktops/mac']").should('be.visible')
    })

    it('Right click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        // Approach 1
        /*
        cy.get('.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-icon-copy').should('be.visible')
        */

        // Approach 2
        cy.get('.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy').should('be.visible')

    })

    it('Double click', ()=>{
        cy.visit('https://www.w3schools.com/Jsref/tryit.asp?filename=tryjsref_ondblclick')
        cy.wait(3000)
        cy.frameLoaded('#iframeResult')
           //Approach 1 : trigger() method
           /*
        cy.iframe('#iframeResult')
        .find("[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find('#demo').should('have.text', 'Hello World ')
*/
         //Approach 2 : trigger() method
         cy.iframe('#iframeResult')
         .find("[ondblclick='myFunction()']").dblclick()
         cy.iframe('#iframeResult').find('#demo').should('have.text', 'Hello World ')

    })


    it('Drag & drop using plugin', ()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(3000)
        // Forces Cypress to interact with the element, bypassing visibility checks. ->  { force: true } ---> since the elements are hidden
        cy.get('#DHTMLgoodies_dragableElement3',{ force: true }).drag('#box101', { force: true })
    })

    
    it.only('Scrolling page', ()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html', { failOnStatusCode: false })
        cy.wait(3000)
        // cy.get("img[src*='India']").scrollIntoView() // scroll faster
        cy.get("img[src*='India']").scrollIntoView({duration:2000}) // scroll within 2 sec

    })
})
