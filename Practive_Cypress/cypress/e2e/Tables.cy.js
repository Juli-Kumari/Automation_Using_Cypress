/// <reference types="cypress" />

describe('Handle tables', ()=>{
   
    beforeEach('Login', ()=>{
        cy.visit("https://demo-opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        // close important security notification window - sometime occures
        cy.get('.btn-close').click()
        // Customers ---> customer
        cy.get('#menu-customer > .parent').click()
        cy.get("#collapse-5 a[href*='customer&user']").click()
        cy.wait(3000)
    })

    it('Check number of Rows & Columns', ()=>{
        cy.get("table.table tbody tr").should('have.length', 10)  // no. of rows
        cy.get("table.table thead td").should('have.length', 6)  // no. of columns
    })

    it('Check cell data from specific Rows & Columns', ()=>{
        cy.get("table.table tbody tr:nth-child(4) td:nth-child(3)")
            .contains('qq@gmail.com')

    })

    it('Read all the Rows & Columns data in the first page', ()=>{
        // get all rows
        cy.get('table.table tbody  tr')
        // read each rows
            .each( ($row, index, $rows) =>{
        // get all the rows with index
            cy.wrap($row).within( ()=>{
       // get each column value
                cy.get('td').each( ($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
 
            })
        
    })

    it.only('Pagination', ()=>{
        let noOfPages;
        // 1. find total no. of pages
        cy.get('.col-sm-6.text-end').then( (e)=>{
           const allText = e.text() // Showing 1 to 10 of 1614 (162 Pages)
           noOfPages= allText.substring( allText.indexOf("(")+1, allText.indexOf('Pages') -1)

           cy.log("Total no. of pages========= "+ noOfPages)
        })
        // let total no. of pages = 5
        noOfPages = 5;
        for(let p=1; p<=noOfPages; p++){
            if(noOfPages>1){
                cy.log('Active page: '+p)

                cy.get('.pagination li:nth-child('+p+')').click()

              cy.get('.table tbody tr')
                .each( ( $row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(2)').then( (e)=>{
                            cy.log(e.text())  // get all customer names
                        })
                    })
                })

            }
        }
    })
    
})