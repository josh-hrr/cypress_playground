describe("handle separated tabs", () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

    it("should be open in the same window", () => {
        cy.get("#opentab").invoke("removeAttr", "target").click();
        cy.wait(2000);
        cy.origin("https://www.qaclickacademy.com/", () => { 
            cy.get(".nav-item a[href='about.html']").click();
            cy.get(".mt-50 h2").should("contain", "Welcome to QAClick Academy");
        })
    })
})