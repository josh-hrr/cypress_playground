 

interface MyProduct {
    productName: string[]
}

describe('commands usage + fixtures + data-driven development', () => {    
    let product: MyProduct; 
    beforeEach( () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');   
        cy.fixture('product').then((data:MyProduct) => {
            product = data;
        })
    }) 
    it('should complete an order with multiple products, assert billing details and order completion',() => { 
        cy.get(':nth-child(2) > .nav-link').click();  
        product.productName.forEach((value:string) => {
            cy.selectProduct(value);
        }) 
    })
})