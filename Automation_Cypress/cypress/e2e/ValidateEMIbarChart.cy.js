describe("Validate the EMI bar chart", ()=>{
    it("Validate the EMI bar chart",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
//         1. Launch the above mentioned application URL
cy.visit("https://emicalculator.net/")

// 2. Go to Personal Loan tab
cy.get("#personal-loan").click()
// 3. Move the slider for "Personal Loan Amount", "Interest Rate", "Loan Tenure" text boxes for below mentioned values,
//           Ex: 
//               1. Personal Loan Amount: 10L, Interest Rate: 12%, Tenure: 5 Years
cy.get("#loanamountslider")
      .invoke("val", 1000000)
      .trigger("input")
      .should("have.value", "1000000");

    // Move Interest Rate slider to 12%
    cy.get("#loaninterestslider")
      .invoke("val", 12)
      .trigger("input")
      .should("have.value", "12");

    // Move Loan Tenure slider to 5 years (60 months)
    cy.get("#loantermslider") 
    .invoke("val", 5)
      .trigger("input")
      .should("have.value", "5");
// 4. Change the Month from "Schedule showing EMI payments starting from" calendar widget
cy.get("#startmonthyear").click()
cy.get("body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom > div.datepicker-months > table > tbody > tr > td > span:nth-child(10)").click()

// 5. Check availability of bar chart
cy.get("#emibarchart")
.should("be.visible");
// 6. Count number of bars available
cy.get(".highcharts-series.highcharts-series-1.highcharts-column-series.highcharts-tracker")
.find(".highcharts-point") 
.should("have.length.gt", 0);
// 7. Read the values from any one bar tool tip
cy.get(".highcharts-series.highcharts-series-1.highcharts-column-series.highcharts-tracker")
      .find(".highcharts-point") 
      .first() // Select the first bar 
      .trigger("mouseover"); // Trigger a mouseover event to display the tooltip

    cy.get(".highcharts-point-#highcharts-nwrgn1x-78 > svg > g.highcharts-label.highcharts-tooltip.highcharts-color-undefined > text") // Replace with the actual selector for the tooltip
      .should("be.visible") // Ensure the tooltip is visible
      .invoke("text") // Get the text content of the tooltip
      .then((tooltipText) => {
        const values = tooltipText.split(":");
        const emiYear = values[0].trim(); // year
        const principalAmount = values[1].trim(); // principle
        const totalPayment = values[2].trim(); // total payment

        cy.log("EMI Amount:", emiYear);
        cy.log("Principal Amount:", principalAmount);
        cy.log("Interest Amount:", totalPayment);
      })
})
})