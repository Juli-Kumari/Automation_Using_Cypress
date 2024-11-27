/// <reference types="cypress" /> 
describe('Alerts functionality', ()=>{
    // 1. Javascript alert: It will have some text and an "OK" butto

    it('Js alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        // validate the prompt message
        cy.on('window:alert', (t)=>{
            expect(t).to.contain('I am a JS Alert')
        })
    
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    
        // alert window automatically closed by cypress
    })
     
    
    // 2. Javascript Confirm alert: It will have some text with 'OK' and 'Cancel' buttons
    it('Js confirm alert - OK', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
// NOTE: Cypress using 'OK' button to cancle the alert pop up - defalut 
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('Js confirm alert - CANCLE', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        //Cypress using 'Cancle' button to cancle the alert pop up 
        cy.on('window:confirm', () => false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    // 3. Javascript Prompt alert: It will have some text box for user input along with 'OK'
    it('Js Prompt alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        // before opening the alert window, need to write the INPUT text
        const input= 'Welcome'
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns(input)
        })

        cy.get("button[onClick='jsPrompt()']").click()
        // validate
        cy.get('#result').should('have.text', 'You entered: '+ input)

    })
    // 4. Authenticated alert
     // Approach 1: pass the username & password along with the URL
    it('Approach 1: Authenticated alert', ()=>{
       
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: 
            {
               username: 'admin',
               password: 'admin' 
            }})
        cy.get('.example').should('have.contain', 'Congratulations')
        
    })
// Approach 2: pass credential inside the URL itself
    it.only('Approach 2: Authenticated alert', ()=>{
       
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('.example').should('have.contain', 'Congratulations')

    })
    
})