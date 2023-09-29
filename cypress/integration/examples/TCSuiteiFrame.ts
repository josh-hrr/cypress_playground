import 'cypress-iframe';

describe("TCsuite for iframe", () => {
    it("should see iframe", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(2000);
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);
    })
})