 
 import { SuccessfullLoginCreator, UnsuccessfullLoginCreator } from "../FactoryMethod/Creator";

describe("TCLoginSuite", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    });
    it("should login successfully", () => { 
        const loginCreator = new SuccessfullLoginCreator();
        loginCreator.performLogin("standard_user", "secret_sauce");
        cy.get(".title").should("contain", "Products");
    })

    it("should login unsuccessfully", () => {
        const loginCreator = new UnsuccessfullLoginCreator();
        loginCreator.performLogin("locked_out_user", "wrongPass");
        cy.get(".login-box div:nth-child(3)").should("have.class", "error").and("contain", "Username and password do not match"); 
    })
    
     

})