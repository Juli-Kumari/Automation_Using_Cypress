class Login2
{
    usernameEle= "input[name='username']"
    passwordEle ="input[name='password']"
    submitBtn = "button[type='submit']"
    dashboardLabel='.oxd-topbar-header-breadcrumb'
    setUsername(username){
        cy.get(this.usernameEle).type(username)
            
    }
    setPassword(password){
        cy.get(this.passwordEle).type(password)
    }
    submit(){
        cy.get(this.submitBtn).click()
    }
    verifyLogin(){
        cy.get(this.dashboardLabel).should('have.text', 'Dashboard')
    }
}

export default Login2;