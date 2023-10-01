describe("E2E Test", () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');  
    })
    it("should make sure the product price is correct in shop page and checkout page", () => {
        cy.get(":nth-child(2) > .nav-link").click(); 
        cy.get(".card").find(".card-title").each((el, index) => {
            let elText = el.text(); 
            
            if(elText.includes("Samsung")){  
                cy.get(".btn").eq(index+1).click();
                cy.get(":nth-child(2) > .card > .card-body > h5").as("currentPrice"); 
            }  
        })  
        cy.contains("Checkout").click();     
        cy.get(":nth-child(3) > strong").should("contain", "@currentPrice");    
        })

    it("should make sure the order can be completed", () => {
        cy.get(":nth-child(2) > .nav-link").click(); 
        cy.get(".card").find(".card-title").each((el, index) => {
            let elText = el.text(); 
            if(elText.includes("Samsung")){ 
                cy.get(".btn").eq(index+1).click();
                cy.get(":nth-child(2) > .card > .card-body > h5").as("currentPrice"); 
            }  
        })  
        cy.contains("Checkout").click(); 
        cy.get(".btn-success").click()       
        })    
    }) 