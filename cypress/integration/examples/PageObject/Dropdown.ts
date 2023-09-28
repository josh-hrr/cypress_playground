class MyDropDown {
    getDropDown(){
        return cy.get("#dropdown-class-example");
    } 
    getDropDownTest(){
        return cy.get("#dropdown-class-example option");
    } 
    getDropDownParent(){
        return cy.get(".cen-right-align")
    }
}

export default MyDropDown;