describe('Assertions demo', ()=>{
    it('Implicit assertion: ', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        /*
        //should
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('contains', 'orangehrm')
        */

        /*
        cy.url().should('include', 'orangehrmlive.com')
        .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contains', 'orangehrm')
        */

        // and
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contains', 'orangehrm')
        // negative assertion
        .and('not.contain', '1234')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo visible
        .and('exist') // logo exist

        cy.xpath('//a').should('have.length', 5) // no. of link present

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='username']").should('have.value', 'Admin') // verify text
    })

    it('Explicit assertion: ', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expectedText='user123'

        cy.get(".oxd-userdropdown-name").then( (result)=> {
            let actualText = result.text()
            // BDD Style
            expect(actualText).to.equal(expectedText)
            expect(actualText).to.not.equal(expectedText)

            // TDD Style
            assert.equal(actualText, expectedText)
            assert.notEqual(actualText, expectedText)
        })
       
    })

})
