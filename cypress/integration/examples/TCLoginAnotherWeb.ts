describe("Login test suite", () => {  
    it("should login with a valid username and password", () => { 
        cy.visit("/"); 
            cy.get(".form_group input[name='user-name']").type("standard_user");
            cy.get(".form_group input[name='password']").type("secret_sauce");
            cy.get("#login-button").click(); 
            cy.get(".inventory_list .inventory_item:nth-child(1) .btn_inventory").click();
            cy.get(".shopping_cart_link").click();
            cy.get(".cart_button").click();
            cy.get("#react-burger-menu-btn").click();
            cy.get("#logout_sidebar_link").click(); 
    })
})