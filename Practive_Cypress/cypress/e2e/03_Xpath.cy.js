describe('Xpath loactor', ()=>{
    it('Find no of products', ()=>{
        cy.visit("https://www.flipkart.com/search?q=Shoe&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
        cy.xpath("//a[@class='WKTcLC']").should('have.length', 35)
    })
//Chained xpath
   
})
