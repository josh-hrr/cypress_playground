describe("Register User Suite", () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
    })

    it("should register a new user", () => { 
        let username = "UAT Test4"
        let email = "uat@test.com4"
        let reversedEmail = email.split('').reverse().join('');  

        cy.url().should("contain", "https://automationexercise.com/");
        cy.get(".navbar-nav").should("be.visible");  
        cy.get(".navbar-nav li a[href='/login']").click();
        cy.get(".signup-form h2").should("have.text", "New User Signup!");
        cy.get("input[name='name']").type(username);
        cy.get("input[name='email']:nth-child(3)").type(email);
        cy.get("button[data-qa='signup-button']").click();
        cy.get(".login-form h2").should("contain", "Enter Account Information");
        cy.get("input[data-qa='name']").should("have.value", username);
        cy.get("input[data-qa='email']").should("have.value", email);
        cy.get("input[data-qa='password']").type(reversedEmail);   
        cy.get("#days").select("3"); 
        cy.get("#months").select("July"); 
        cy.get("#years").select("1980"); 
        cy.get("#newsletter").click();
        cy.get("#optin").click();
        cy.get("input[data-qa='first_name']").type("UATFirstName");
        cy.get("input[data-qa='last_name']").type("UATLastName");
        cy.get("input[data-qa='company']").type("example company");
        cy.get("input[data-qa='address']").type("123 Main Street Suite 456 P.O. Box 789 ABC company");
        cy.get("#country").select("United States"); 
        cy.get("input[data-qa='state']").type("California");
        cy.get("input[data-qa='city']").type("Los Angeles");
        cy.get("input[data-qa='zipcode']").type("2F2F2F2F");
        cy.get("input[data-qa='mobile_number']").type("5005-5004");     
        cy.get("button[data-qa='create-account']").click();
        cy.get("h2 b").should("contain", "Account Created!");
        cy.get("a[data-qa='continue-button']").click();
        cy.get(".navbar-nav").should("contain", `Logged in as ${username}`);
        cy.get(".navbar-nav li a[href='/delete_account']").click();
        cy.get("h2[data-qa='account-deleted']").should("contain", "Account Deleted!");
    })
})