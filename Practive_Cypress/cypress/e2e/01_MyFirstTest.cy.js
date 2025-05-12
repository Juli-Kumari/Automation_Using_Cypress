describe('Orange HRM website UI testing using cypress',()=>{
    it('Verify the title : Positive_01', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
    })
    it('Verify the title : Negative_01', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'Orange123')
    })
})
