describe('Css selector', ()=>{
    it('Css selector in cypress', ()=>{
        cy.visit("https://www.flipkart.com/")
        cy.get('input.Pke_EE').type('Shoe') // tag id
        cy.get("button[type='submit']> svg").click()
        cy.get('.BUOuZu').contains('Shoe')  // assertion
    })
})