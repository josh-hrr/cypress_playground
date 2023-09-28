class MyCheckBox {
    getCheckboxParent(){
        return cy.get("#checkbox-example");
    }

    getAllCheckbox(){
        return cy.get('#checkbox-example input[type="checkbox"]');
    }
}

export default MyCheckBox;