describe("produt offering suite", () => {

    beforeEach(()=>{
        cy.visit("https://automationexercise.com/");
    })
    it("should search correct product", () => {
        cy.get(".col-sm-6 h1").should("contain", "Automation");
        cy.get(".navbar-nav a[href='/products']").click();
        cy.get(".title").should("contain", "All Products");
        cy.get("#search_product").type("jeans");
        cy.get("#submit_search").click();
        cy.get(".title").should("contain", "Searched");
        cy.get(".col-sm-4 p").should("contain", "Jeans"); 
    })

    it("should verify Subscription in home page", () => {
        cy.get(".col-sm-6").should("contain", "Automation");
        cy.get("#footer").scrollIntoView();
        cy.get("#footer").should("contain", "Subscription");
        cy.get("#susbscribe_email").type("test@gmail.com");
        cy.get("#subscribe").click();
        cy.get("#footer").should("contain", "You have been successfully subscribed!");
        
    })
})