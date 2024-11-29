/// <reference types='cypress' />
describe('Capture screenshorts & videos', ()=>{
    
    it('Capture screenshorts & videos', ()=>{
        // 1. screenshot(fileName) method
        cy.visit('https://the-internet.herokuapp.com/')
        /*
        cy.screenshot('homePage')
        cy.wait(3000)
        // get particular elements screenshort
        cy.get("a[href='/key_presses']").screenshot('keyPressWord_sc')
*/
        // automatically capture screensots & videos on failures --->  Only when you execute from CLI
        cy.get("a[href='/key_presses']").should('have.text', 'Text Failed') // Failed step
    
        //  run from command line:- npx cypress run --spec cypress/e2e/19_How\ To\ CaptureScreenshots\&Videos.cy.js
    })
})