/// <reference types='cypress' />
import Login from "../PageObject/Login"
import Loign2 from "../PageObject/Login2"  // proper way
describe('POM suite', ()=>{

    it('General way', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     // General 
            cy.get("input[name='username']").type('Admin')
            cy.get("input[name='password']").type('admin123')
            cy.get("button[type='submit']").click()
            cy.wait(2000)
            cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard')
    })

    it('Using POM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 const loginPage = new Login()
     // Using POM 
     loginPage.setUsername('Admin')
     loginPage.setPassword('admin123')
     loginPage.submit()
     loginPage.verifyLogin()
    })

    it.only('Using POM - separate elements & action differently', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 const loginPage2 = new Loign2()
     // Using POM 
     loginPage2.setUsername('Admin')
     loginPage2.setPassword('admin123')
     loginPage2.submit()
     loginPage2.verifyLogin()
    })
})