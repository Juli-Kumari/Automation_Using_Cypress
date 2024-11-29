// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* Intelligence automatic sugeestions*/
// Used all the cypress methods suggestions
/// <reference types="cypress" />  
// Used all the cypress-xpath methods suggestions
/// <reference types="cypress-xpath" />

// custom command -> to get iframe  -----> getIframe(iframe)
Cypress.Commands.add('getIframe', (iframe)=>{
   return cy.get(iframe)
    .its('0.contentDocument.body') 
      .should('be.visible')  
      .then(cy.wrap) 
})

// Part 17: 
// 1. custom command for clicking on link by using label
Cypress.Commands.add('clickLink', (label)=>{
  cy.contains('a', label).click() // here contains() is case sensitive
   cy.wait(3000)
})

/*
// 2. overwrite the contains() methods ---> make this method without case sensitive
Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {
  // Handle cases where 'filter' is not provided
  if (typeof text === 'object') {
    options = text;
    text = filter;
    filter = undefined;
  }

  // Ensure the options object is updated for case insensitivity
  options.matchCase = false;

  // Call the original "contains" query with updated arguments
  return originalFn(subject, filter, text, options);
});
  
*/

// 3. custom commands for LOGIN
Cypress.Commands.add('loginapp', (username, password)=>{
  cy.get("input[name='username']").type(username)
  cy.get("input[name='password']").type(password)
              cy.get("button[type='submit']").click()
                cy.wait(2000)
})

