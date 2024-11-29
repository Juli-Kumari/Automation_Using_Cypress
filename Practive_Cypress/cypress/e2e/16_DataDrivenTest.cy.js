///<reference types='cypress' />
describe("DDT tesing",()=>{
    it('DDT ',()=>{

        cy.fixture('orangehrm_ddt').then((data)=>{ // all orangehrm_ddt.json file data store in 'data'
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


            data.forEach( (userdata)=>{  // get one by one data inside 'userdata'
                cy.get("input[name='username']").type(userdata.username)
                cy.get("input[name='password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                cy.wait(2000)
                if(userdata.username =='Admin' && userdata.password =='admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb')
                    .should('have.text', userdata.expected)

                    cy.get('.oxd-userdropdown-name').click()
                    cy.get("a[href*='logout']").click()
                    cy.wait(3000)
                }
                else{
                    cy.get('.oxd-alert-content-text')
                    .should('have.text', userdata.expected)
                }
            })
        })
    })
})