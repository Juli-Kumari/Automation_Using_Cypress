/// <reference types='cypress' />
describe('Custom commands', ()=>{
    // 1. create custom command to click on product links, , by only provide the product name
    it('Handling links', ()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        const labelText ='Checkboxes'
        // use custom command clickLink(label)
        cy.clickLink(labelText)
        cy.get('.example h3').should('have.text', labelText)
    })

    // 2. overwrite the contains() methods ---> make this method without case sensitive
    it('overwrite existing commands ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        const labelText ='cHECkboxes'
        // use custom command clickLink(label)
        cy.clickLink(labelText)
        cy.get('.example h3').should('have.text', 'Checkboxes')
    })

    // 3. loginapp(user, pass) -> custom commands
    it.only('Login Commands', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.loginapp('Admin', 'admin123')  // custom commands
        cy.get('.oxd-topbar-header-breadcrumb')
            .should('have.text', 'Dashboard')
    })
})
