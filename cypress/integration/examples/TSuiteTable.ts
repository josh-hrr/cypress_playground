describe("Find table element and sibling", () => {
    it("should retrieve the correct values from two columns of a table", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("tr td:nth-child(2)").each((el, index) => {
            if(el.text().includes("Python")){
                 cy.get("tr td:nth-child(2)").eq(index).next().then(price => {
                    expect(price.text()).to.equal("25");
                 })
            }
        })
    })
})