/// <reference types='cypress'/>

describe('tesing test suite', () => {
    it('first test case', ()=>{
        cy.visit('https://www.todostuslibros.com/mas_vendidos')
        cy.contains('Aceptar cookies').click()
        cy.get('#main-search-input').type('El señor presidente{enter}')
        cy.get('#book_978-84-206-7663-0 > .book-content > .row > .book-details > .author > a').click()
        cy.get('#book_978-84-9181-029-2 > .book-action > .d-flex > .bookstores > .availability-bookshops > a').click()
        cy.get('.btn-close').click()
        cy.get('#book_978-84-9181-029-2 > .book-action > .d-flex > .book-location > #addToCart > .btn').click()
        cy.get('.btn-outline-primary').click()
        cy.get('.ml-1').click()
        cy.get('.ml-1').click()
        cy.contains('Continuar comprando').click()
        cy.get('#navbarVoucherDropdown').click()
        cy.contains('CHEQUES REGALO').click()
    })
     })