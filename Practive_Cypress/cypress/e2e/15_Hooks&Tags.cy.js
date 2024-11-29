/// <reference types='cypress'/>
describe('Hooks & Tags', ()=>{
    before(()=>{
        cy.log('*******Launch application**********')
    })

    after(()=>{
        cy.log('*******Closed application**********')
    })

    beforeEach(()=>{
        cy.log('*******open website**********')
    })

    afterEach(()=>{
        cy.log('*******close website**********')
    })

    it.skip('search', ()=>{
        cy.log('*******search**********')                                                                          
    })

    it('advance search', ()=>{
        cy.log('*******advance search**********')  
    })

    it.only('listing product', ()=>{
        cy.log('*******listing product**********')  
    })
})