describe('Handling Tabs', ()=>{
    //Approach 1: removing target attribute to handles the tabs elements
    it('Approach 1: removing attribute to handles the tabs elements', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        // click on link - remove target attribute using "invoke()"
        cy.get('.example a').invoke('removeAttr', 'target').click()
        // validate the url
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.get('.example').should('contain', 'New Window')
        // go back to main tab
        cy.go('back')
    })
// Approach 2: get the href attribute, the simply use visit() method
// Limitation: the main domain should be same for Approah 2.
    it.only('Approach 2: get the href attribute', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab

        cy.get('.example a').then((e)=>{
           let hrefUrl= e.prop('href')
           cy.visit(hrefUrl)
        })
        // validate the url
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.get('.example').should('contain', 'New Window')
        // go back to main tab
        cy.go('back')
    })
})