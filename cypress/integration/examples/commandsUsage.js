describe('commands usage + fixtures + data-driven development', () => { 
    before(function() {
        cy.fixture('example').then(data => {
            this.data = data;
        })
    }) 
    it.only(' ', function () { 
        cy.visit('https://rahulshettyacademy.com/angularpractice/');  
        cy.get(':nth-child(2) > .nav-link').click(); 
        this.data.productName.forEach(value => {
            cy.selectProductByName(value);
        }) 
    })
})