describe("TCSuite for api testing", () => { 

    it("should make a request to /login endpoint", () => { 

        cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                "userEmail": "postmanTestName@postmanTestName.com", 
                "userPassword": "Postman2023+"
            }).then( (response) => {
                expect(response.body).to.have.property("token")
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eql("Login Successfully");

                Cypress.env("value", response.body.token);
            })  
        })

    it("should make a request to /login endpoint and use the token", () => {
        cy.loginAPI().then( () => {
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad(win) {
                    win.localStorage.setItem("token", Cypress.env("token"));   
                },
            })
        })
    }) 

    })  