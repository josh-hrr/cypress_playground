 describe('test suite #1', () => {  
    
    before(function () { 
        cy.fixture("example").then((data) => { 
            this.data = data;   
        }); 
    });    
    it.only('testing hooks', function () { 
        cy.visit("https://rahulshettyacademy.com/angularpractice/");    
        cy.get("input[name='name']:nth-child(2)").type(this.data.name);  
        this.data.gender.forEach(value => {
            cy.get("select").select(value);
        }) 
    })  
})