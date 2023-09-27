 describe('test suite #1', () => {  
    
    before(function () { 
        cy.fixture("example").then((data) => { 
            this.data = data;  
            cy.wrap(this.data).as('stubData');
        }); 
    });    
    it.only('testing hooks', function () { 
        cy.visit("https://rahulshettyacademy.com/angularpractice/");  

        let result = "";   

        cy.get("input[name='name']:nth-child(2)").type(this.stubData.name);
        cy.get("select").select(this.stubData.gender);  
    })  
})