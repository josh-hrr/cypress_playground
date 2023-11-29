describe("TCFindBrokenLinks", () => {
    it("should find broken links", () => {
        cy.visit("http://www.deadlinkcity.com/");
        cy.get("a").each(link => {  
            const href = link.attr("href"); 
            if(href) { 
                cy.request(
                    {
                        url: href,
                        failOnStatusCode: false
                    } 
                ).then((response) => { 
                        if(response.status > 400){
                            cy.log(`${link.text()} BROKEN LINK`);
                        }else{
                            cy.log(`${link.text()} NOT BROKEN LINK`)
                        }   
                    })
            }
        });
    })
})