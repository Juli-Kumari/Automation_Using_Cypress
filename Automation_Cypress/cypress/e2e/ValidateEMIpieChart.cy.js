describe("Validate the EMI Chart", ()=>{
    it("Validate the EMI pie chart",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
//         1. Launch the above mentioned application URL
cy.visit("https://emicalculator.net/")
// 2. Go to Home Loan tab
cy.get("#home-loan").should('have.text', "Home Loan")
// 3. Provide the below mentioned values in application and calculate the EMI in the code and validate output of your code with numbers in application, both should match.
function calculateEMI(principal, annualInterestRate, tenureInMonths) {
    // Convert annual interest rate to monthly rate
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
  
    // Calculate EMI using the formula
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
  
    return emi;
  }
  
  // Example usage:
  const principalAmount = 2500000; // Principal amount in your currency
  const annualInterestRate = 10; // Annual interest rate (in percentage)
  const loanTenureInMonths = 10*12; // Loan tenure in months
  
  const emi = calculateEMI(principalAmount, annualInterestRate, loanTenureInMonths);
  const emiValue = Math.ceil(emi).toLocaleString();
  console.log("Your EMI is: " + emiValue); // Display EMI with integer value
//            Ex: 
//               1. Home Loan Amount: 25L, Interest Rate: 10%, Tenure: 10 Years
cy.get("#loanamount").clear().type("2500000")
cy.get("#loaninterest").clear().type("10")
cy.get("#loanterm").clear().type("10")
cy.get("#emicalculatorinnerform > div.sep.row.form-group.lterm > div > div > div > div > div > label.btn.btn-secondary.active").click()
cy.get("#emiamount > p > span").should('have.text',emiValue)



//               2. Home Loan Amount: 50L, Interest Rate: 7.5%, Tenure: 15 Years

 // Example usage:
 const principalAmount2 = 5000000; // Principal amount in your currency
  const annualInterestRate2 = 7.5; // Annual interest rate (in percentage)
  const loanTenureInMonths2= 15*12; // Loan tenure in months

 const emi2 = calculateEMI(principalAmount2, annualInterestRate2, loanTenureInMonths2);
 const emiValue2 = Math.ceil(emi2).toLocaleString();
 console.log("Your 2nd example EMI is: " + emiValue2); // Display EMI with integer value
//            Ex: 
//               1. Home Loan Amount: 25L, Interest Rate: 10%, Tenure: 10 Years
cy.get("#loanamount").clear().type("5000000")
cy.get("#loaninterest").clear().type("7.5")
cy.get("#loanterm").clear().type("15")
cy.get("#emicalculatorinnerform > div.sep.row.form-group.lterm > div > div > div > div > div > label.btn.btn-secondary.active").click()
cy.get("#emiamount > p > span").should('have.text',emiValue2)
  

// 4. Check availability of pie chart
cy.get('.highcharts-plot-background')
    .should('be.visible')
    .and(chart => {
      // we can assert anything about the chart really
      expect(chart.height()).to.be.lessThan(200)
    })
// 5. Read the numbers from both the sections of the pie chart and Pass the step if its greater than zero, else fail it. 
       cy.get(".highcharts-label.highcharts-data-label.highcharts-data-label-color-0").should('have.length.greaterThan',0)
       cy.get(".highcharts-label.highcharts-data-label.highcharts-data-label-color-1").should('have.length.greaterThan',0)
    })
})