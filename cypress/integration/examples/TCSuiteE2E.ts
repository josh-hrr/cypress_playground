describe("E2E Test", () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');  
    })
    it("should make sure the product price is correct in shop page and checkout page", () => {
        cy.get(":nth-child(2) > .nav-link").click(); 
        cy.get(".card").find(".card-title").each((el, index) => {
            let elText = el.text(); 
            
            if(elText.includes("Samsung")){  
                cy.get(".btn").eq(index+1).click();
                cy.get(":nth-child(2) > .card > .card-body > h5").as("currentPrice"); 
            }  
        })  
        cy.contains("Checkout").click();     
        cy.get(":nth-child(3) > strong").should("contain", "@currentPrice");    
        })

    it("should make sure the order can be completed", () => {
        cy.get(":nth-child(2) > .nav-link").click(); 
        cy.get(".card").find(".card-title").each((el, index) => {
            let elText = el.text(); 
            if(elText.includes("Samsung")){ 
                cy.get(".btn").eq(index+1).click();
                cy.get(":nth-child(2) > .card > .card-body > h5").as("currentPrice"); 
            }  
        })  
        cy.contains("Checkout").click(); 
        cy.get(".btn-success").click();
        cy.get("#country").type("Ind"); 
        cy.wait(10000);
        cy.get(".suggestions > :nth-child(1) > li > a").click();
        cy.get("#checkbox2").should("not.be.checked");
        cy.get("#checkbox2").check({force:true});
        cy.get("#checkbox2").should("be.checked");  
        cy.get(".btn-lg").click(); 
        cy.get(".alert").should("be.visible").and("contain", "Success! Thank you!");
        })
        
    it.only("should make sure the order amount is correct when more than one product is added", () => {
        cy.get(".nav-link[href='/angularpractice/shop']").click();
        cy.get(".h-100 .card-title").each((el, index) => {
            if(el.text().includes("iphone") || el.text().includes("Samsung")){
                cy.get(".h-100 .btn-info").eq(index).click();
            }
        })

        cy.get(".nav-item .btn-primary").click();
        
        let pricePerItem:string[] = [];
        let totalPrice:string[] = [];
        let sum: number = 0;
        cy.get("tr td:nth-child(4) strong").each(el => {
            let priceWithSign = el.text();
            let items = priceWithSign.split(""); 
            let priceOnly:number[] = [];

            items.forEach(value => { 
                if(!isNaN(Number(value))){
                    priceOnly.push(Number(value))
                }
            })
            
            if(priceOnly[0] === 0){
                pricePerItem.push(priceOnly.join(""));    
                pricePerItem.forEach(value => {  
                    if(pricePerItem.length !== 1){ 
                        sum = sum + Number(value);
                    }
                })  
                cy.get(".text-right strong").each(el => {  
                    let totalItem = el.text().split("");
                    let totalPriceOnly:number[] = []; 
                    totalItem.forEach(value => {
                        if(!isNaN(Number(value))){
                            totalPriceOnly.push(Number(value));
                        }  
                    })  
                    if(totalPriceOnly[0] === 0){
                        totalPrice.push(totalPriceOnly.join(""));   
                        expect(sum).to.eq(Number(totalPrice[0]));

                    }
                })  

            }    
        }) 
        
    })    
    
        
    }) 