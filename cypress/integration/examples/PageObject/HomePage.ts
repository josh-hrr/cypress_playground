class HomePage {
    getInputName(){
        return cy.get('input[name="name"]:nth-child(2)');
    }
    getInputEmail(){
        return cy.get('input[name="email"]');
    }
    getInputPassword(){
        return cy.get('input[type="password"]');
    }
    getCheckBox(){
        return cy.get('#exampleCheck1');
    }
    getDropDown(){
        return cy.get('#exampleFormControlSelect1');
    }
    getFormCheckButtons(){
        return cy.get('.form-check-input');
    }
    getSubmitButton(){
        return cy.get('input[type="submit"]');
    }
    getSuccessMessage(){
        return cy.get('.alert-success');
    }
} 
export default HomePage;  //make the class available in other files when imported