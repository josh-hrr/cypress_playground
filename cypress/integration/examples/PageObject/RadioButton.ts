class MyRadioButton {
    getRadioButtonParent(){
        return cy.get("#radio-btn-example");
    }
    getRadioButton() {
        return cy.get('#radio-btn-example input[name="radioButton"]');
    }
}

export default MyRadioButton;