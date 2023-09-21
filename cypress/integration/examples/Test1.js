//cypresss test = spec

describe('test suite #1', () => {


    it('test one', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();

        cy.get('.products').find('.product').each((el) => {  
            const textVegetable = el.find('.product-name').text();  
            if(textVegetable.includes('Carrot')){
                el.find('button').click();
            } 
        }) 
    }) 

    //checkboxes
    it('test two', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked'); 

        cy.get('#autocomplete').type('Gua');
        cy.get('.ui-menu-item div').each(el => {
            if(el.text() === "Guatemala"){
                el.click();
            }
        })
    })

    it('test visible or not', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();    
        cy.get('#displayed-text').should('not.be.visible');


    })
})
