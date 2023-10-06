

describe("assert excel file from the order", () => {

    let productName:string = "iphone 13 pro";
    beforeEach( () => {
        cy.visit("https://rahulshettyacademy.com/client/");
    })
    it("should assert correct billing details in excel file when an order is completed from front end", () => {
        cy.get("input[type='email']").type("postmanTestName@postmanTestName.com");
        cy.get("input[type='password']").type("Postman2023+");
        cy.get("#login").click();
        cy.get(".card-body h5 b").each((el) => { 
            if(el.text().toLowerCase().includes(productName)){
                cy.get(":nth-child(3) > .card > .card-body > .w-10").click();
            }
        }) 
        cy.get("button[routerlink='/dashboard/cart']").click();
        cy.get("button[type='button']:nth-child(1)").click();
        cy.get(".text-validated:nth-child(1)").type("Gua")
        cy.wait(1000);
        cy.get(".list-group").each((el, index) => {
            if(el.text().toLowerCase().includes("guatemala")){  
                cy.get(".list-group").click();
            }
        })
        cy.get(".action__submit").click();
        cy.wait(1000);
        cy.contains("Excel").click();
        cy.wait(1000);

        //use:: convert-excel-to-json
        const fileName = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_postmanTestName.xlsx";
        

        //cy.task()      executes code in node engine
        cy.task('excelToJsonConverter',  fileName).then( (result:any) => {
            cy.log(result.data[1].A); 
            expect(productName).to.equal(result.data[1].B);
        }); 

        //cy.readFile()
        cy.readFile(fileName).then( (text) => {
            expect(text).to.include(productName);
        })
    })
})