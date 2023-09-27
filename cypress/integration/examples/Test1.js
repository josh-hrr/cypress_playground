 
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

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


    it('should accept the alert', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
        cy.get('#alertbtn').click(); 
        cy.on('window:alert', (value) => {  
            expect(value).to.be.eq('Hello , share this practice page and share your knowledge'); 
        })

    })

    it('should understand tabs functionality', () => { 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
        cy.get('#opentab').invoke('removeAttr', 'target').click();  
        cy.origin('https://www.qaclickacademy.com/', () => { 
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy');
        });  
    })


    it.only('should Web Tables', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
        cy.get('tr td:nth-child(2)').each( (el, index) => {  
            let textFound = el.text(); 
            console.log(index)
            if(textFound.includes('Bugzilla')){ 
                cy.get("tr td:nth-child(2)").eq(index).next().then( (price) => {
                    let priceText = price.text(); 
                    expect(priceText).to.equal('25');
                }) 
            } 
        })  
    })

    it.only('should hover and click', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', '/#top')    
    })





    it.only("should navigate into iframes", () => {  
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 

        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click(); 
    })



})
