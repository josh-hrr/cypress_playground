describe('using assertions in form', () => {

    before(function() {
        cy.fixture('example').then(data => {
            this.data = data;
        })
    })

    it('should validate attr props', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');  
        cy.get(':nth-child(1) > .form-control').type(this.data.name); 
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
    })
})