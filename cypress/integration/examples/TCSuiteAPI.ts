describe("API testing", () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
   })

   it("should intercept /getBook endpoint response", () => {

    cy.intercept({
        method: 'GET',
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    },
    {
        statusCode: 200,
        body: [
            {
                "book_name": "RestAssuraed with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }
        ]
    }).as('bookRetrievals')
    
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrievals").then(({request, response}) => {
        cy.get("tr").should("have.length", response?.body.length + 1); 
    });
    cy.get("p").should("have.text", "Oops only 1 Book available")

   })


   it("should intercept /getBook endpoint request", () => {

    cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req) => {
        req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malotra";
        req.continue((res) => {
            expect(res.statusCode).to.equal(404);
        });
    }).as("dummyRequestUrl")

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyRequestUrl")

   })
})