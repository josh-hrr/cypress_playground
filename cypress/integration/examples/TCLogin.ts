
    let myName = "JosueHTestOne";
    let myLastName = "HTest";
    let email = `${myName}@test.com`;
    let password = myName.split('').reverse().join('');
    let company = "TestCompany";
    let address = "Guatemala";
    let zipcode = "000111";
    let mobileNumber = "50244441111"; 

describe('Login test', () => {   
    beforeEach(() => {
        cy.intercept("GET", "https://automationexercise.com/static/images/home/short_logo.png",
        {
            statusCode: 200
        }).as("getEndpointImg"); 

        cy.visit("https://automationexercise.com/"); 
        
    })
    it("Success account 'Sign Up' and 'Delete account'", () => {   
        cy.get(".navbar-nav li a[href='/login']").click();
        cy.get(".signup-form").should("contain", "New User Signup!");
        cy.get("input[data-qa='signup-name']").type(myName);
        cy.get("input[data-qa='signup-email']").type(email); 
        cy.get("button[data-qa='signup-button']").click();
        cy.get(".clearfix .radio").should("be.visible");
        cy.get(".clearfix .radio").should("have.length", 2);
        cy.get(".clearfix .radio").find("#id_gender1").check();
        cy.get(".form-group").should("have.length", 15);
        cy.get("#name").should("have.value", myName);
        cy.get("#email").should("have.value", email);
        cy.get("#password").type(password);
        cy.get(".form-group select").should("have.length", 4);
        cy.get("#days").select("9");
        cy.get("#months").select("December");
        cy.get("#years").select("1996");
        cy.get(".checkbox input[type='checkbox']").should("have.length", 2); 
        cy.get(".checkbox input[type='checkbox']").check();
        cy.get(".checkbox input[type='checkbox']").uncheck();
        cy.get(".checkbox input[type='checkbox']").check();
        cy.get("#first_name").type(myName);
        cy.get("#last_name").type(myLastName);
        cy.get("#company").type(company);
        cy.get("#address1").type(address);
        cy.get("#country").select("United States");
        cy.get("#state").type("California");
        cy.get("#city").type("California City");
        cy.get("#zipcode").type(zipcode);
        cy.get("#mobile_number").type(mobileNumber);
        cy.get("button[data-qa='create-account']").click(); 
        cy.get("h2 b").should("contain", "Account Created!");
        cy.get("a[data-qa='continue-button']").click();
        cy.get(".navbar-nav").should("contain", `Logged in as ${myName}`);
        cy.get(".navbar-nav li a[href='/delete_account']").click();
        cy.get("h2[data-qa='account-deleted']").should("contain", "Account Deleted!");
    })

    it("Success account 'Sign Up'", () => {   
        cy.get(".navbar-nav li a[href='/login']").click();
        cy.get(".signup-form").should("contain", "New User Signup!");
        cy.get("input[data-qa='signup-name']").type(myName);
        cy.get("input[data-qa='signup-email']").type(email); 
        cy.get("button[data-qa='signup-button']").click();
        cy.get(".clearfix .radio").should("be.visible");
        cy.get(".clearfix .radio").should("have.length", 2);
        cy.get(".clearfix .radio").find("#id_gender1").check();
        cy.get(".form-group").should("have.length", 15);
        cy.get("#name").should("have.value", myName);
        cy.get("#email").should("have.value", email);
        cy.get("#password").type(password);
        cy.get(".form-group select").should("have.length", 4);
        cy.get("#days").select("9");
        cy.get("#months").select("December");
        cy.get("#years").select("1996");
        cy.get(".checkbox input[type='checkbox']").should("have.length", 2); 
        cy.get(".checkbox input[type='checkbox']").check();
        cy.get(".checkbox input[type='checkbox']").uncheck();
        cy.get(".checkbox input[type='checkbox']").check();
        cy.get("#first_name").type(myName);
        cy.get("#last_name").type(myLastName);
        cy.get("#company").type(company);
        cy.get("#address1").type(address);
        cy.get("#country").select("United States");
        cy.get("#state").type("California");
        cy.get("#city").type("California City");
        cy.get("#zipcode").type(zipcode);
        cy.get("#mobile_number").type(mobileNumber);
        cy.get("button[data-qa='create-account']").click(); 
        cy.get("h2 b").should("contain", "Account Created!");
        cy.get("a[data-qa='continue-button']").click();
        cy.get(".navbar-nav").should("contain", `Logged in as ${myName}`);
        cy.get(".navbar-nav li a[href='/logout']").click(); 
    })

    it("Success 'Log in' using previous credentials", () => {
        cy.get(".navbar-nav li a[href='/login']").click();
        cy.get(".login-form").should("contain", "Login to your account");
        cy.get("input[data-qa='login-email']").type(email);
        cy.get("input[data-qa='login-password']").type(password);
        cy.get("button[data-qa='login-button']").click();
        cy.get(".navbar-nav").should("contain", `Logged in as ${myName}`);
        cy.get(".navbar-nav li a[href='/delete_account']").click();
        cy.get("h2[data-qa='account-deleted']").should("contain", "Account Deleted!");
    })
 })