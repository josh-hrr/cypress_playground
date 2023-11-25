describe("Footer test suite", () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com"); 
        cy.get(".col-sm-6 h1").should("contain", "AutomationExercise");
    })
    it("Verify Subscription in home page", () => { 
        cy.get("footer").scrollIntoView();
        cy.get(".single-widget h2").should("contain", "Subscription");
        cy.get("input[type='email']").should("have.attr", "placeholder", "Your email address");
        cy.get("input[type='email']").type("test@test.com");
        cy.get("button[type='submit']").click(); 
        cy.get(".alert-success").should("contain", "You have been successfully subscribed!"); 
    })

    it("Verify Subscription in Cart page", () => {
        cy.get("li a[href='/view_cart']").click();
        cy.get(".single-widget h2").should("contain", "Subscription");
        cy.get("input[type='email']").should("have.attr", "placeholder", "Your email address");
        cy.get("input[type='email']").type("test@test.com");
        cy.get("button[type='submit']").click(); 
        cy.get(".alert-success").should("contain", "You have been successfully subscribed!"); 
    })



})

//testing git and github connection
//testing git and github connection