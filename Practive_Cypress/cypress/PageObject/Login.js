class Login
{
    setUsername(username){
        cy.get("input[name='username']").type(username)
            
    }
    setPassword(password){
        cy.get("input[name='password']").type(password)
    }
    submit(){
        cy.get("button[type='submit']").click()
    }
    verifyLogin(){
        cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard')
    }
}

export default Login;