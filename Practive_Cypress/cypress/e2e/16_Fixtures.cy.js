/// <reference types='cypress' />
describe('Json file read form FIxtures', ()=>{
    // 1. Direct access
    it('Fixtures- direct access', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // read fixture file data
        cy.fixture('orangehrm').then( (data)=>{

            cy.get("input[name='username']").type(data.username)
            cy.get("input[name='password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.wait(2000)
            cy.get('.oxd-topbar-header-breadcrumb').should('have.text', data.expected)
        })

        
    })

    // 2. Access thorugh HOOKs for multiple it() blocks
    let orangehrmDataJson;
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            orangehrmDataJson=data
        })
    })

    it.only('Fixtures using hooks', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            cy.get("input[name='username']").type(orangehrmDataJson.username)
            cy.get("input[name='password']").type(orangehrmDataJson.password)
            cy.get("button[type='submit']").click()
            cy.wait(2000)
            cy.get('.oxd-topbar-header-breadcrumb').should('have.text', orangehrmDataJson.expected)
        })
})