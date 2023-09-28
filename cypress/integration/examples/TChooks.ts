interface ExampleData {
    name: string;
    email: string;
    password: string;
    gender: string[];
    productName: string[];
  }
 
 describe('Form Tests Suite #1', () => {     
    let testData:ExampleData; 

    before(() => { 
        cy.visit("/"); 
        cy.fixture("example").then((data:ExampleData) => { 
            testData = data;    
        }); 
    });    
    it('should submit and fill out the form with test data', () => {   
        cy.get("input[name='name']:nth-child(2)").type(testData.name);  
        testData.gender.forEach((value:string) => {
            cy.get("select").select(value);
        }) 
    })  
})