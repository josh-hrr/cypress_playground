describe("TSuite for alerts", () => {

    //gets automatically accepted by cypress
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })

    // 1) Javascript Alert: it will have 'OK'
    it("should see Alert #1", () => {
        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contain('I am a JS Alert');
        })
        cy.get("#result").should('contain', 'success')
    })

    // 2) Javascript Confirmation Alert: it will have 'OK' 'Cancel'
    it("should see Alert #2 - 'Ok' button", () => {
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Confirm');
        })
        cy.get('#result').should('have.text', 'You clicked: Ok');
    })

    it("should see Alert #2 - 'Cancel' button", () => {
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Confirm');
        })
        cy.on('window:confirm', () => false); //closes alert using Cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    })

    // 3) Javascript Input field Alert: it will have 'OK' 'Cancel' and Input field
    it("should see Alert #3", () => {  
        let testData = "Welcome Message!"; 
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(testData);
        })
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('#result').should('contain', testData); 
    })

    // 4) Javascript sign in Alert
    it("should see sign in Alert and authenticate", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { 
                                                                    auth: 
                                                                    {
                                                                        username: "admin",
                                                                        password: "admin"
                                                                    }}); 
        cy.get("#content > div > p").should('contain', 'Congratulations') 
    })


 

})