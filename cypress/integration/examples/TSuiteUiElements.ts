import MyCheckBox from './PageObject/Checkbox';
import MyDropDown from './PageObject/Dropdown';
import MyRadioButton from './PageObject/RadioButton';

let reusableCheckBox: MyCheckBox; 
let reusableDropDown: MyDropDown;
let reusableRadioButton: MyRadioButton;
interface CheckboxData {
    checkboxName: string[]
}
interface DropdownData {
    dropdownName: string[]
}
interface RadioButtonData {
    radioName: string[]
}

describe("Make sure UI web elements behave as per requirement", () => {

    let checkboxData:CheckboxData; 
    let dropdownData:DropdownData;
    let radioButtonData:RadioButtonData;
    beforeEach(()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.fixture("checkbox").then((value:CheckboxData) => { 
            checkboxData = value; 
        })
        cy.fixture("dropdown").then((value:DropdownData) => {
            dropdownData = value;
        })
        cy.fixture("radiobutton").then((value:RadioButtonData) => {
            radioButtonData = value; 
        })
    })

    it("verify checkbox text and length is correct and can be selected one by one or all at once", () => { 

        reusableCheckBox = new MyCheckBox(); 
        // Make sure checkbox elements are visible
        reusableCheckBox.getCheckboxParent().should('be.visible').and('contain.text', 'Checkbox Example');
        // Make sure checkbox elements are not checked when page is loaded  and length is correct
        reusableCheckBox.getAllCheckbox().should('not.be.checked').and('have.length', 3);  
        reusableCheckBox.getAllCheckbox().check();
        // Make sure the checkbox are checked
        reusableCheckBox.getAllCheckbox().should('be.checked');    

        // Iterate over each checkbox and assert its name
        reusableCheckBox.getAllCheckbox().each((el, index) => {
            cy.wrap(el)
                .parent()
                .invoke('text')
                .then(label => {
                    let actualText = label.trim();
                    let expectedText = checkboxData.checkboxName[index]; 
                    cy.wrap(actualText).should('eq', expectedText); 
                })
            })
        }) 
        
    it("verify the dropdown menu can be open and items can be selected and have correct name", () => {   
        reusableDropDown = new MyDropDown();
        reusableDropDown.getDropDownParent().should('be.visible'); 
        dropdownData.dropdownName.forEach(value => {
            reusableDropDown.getDropDown().select(value);
            reusableDropDown.getDropDown().should('contain', value);
            cy.wait(2000); 
        });
    })   

    it("verify dynamic dropdown works as expected and shows correct suggestion", () => {
        cy.get("#autocomplete").type("ind"); 
        cy.get(".ui-menu-item div").each(el => {  
            cy.wrap(el)
                .invoke('text')
                .then(label => {
                    if(label === "India"){
                        cy.wrap(el).click();
                    }
                })
        }) 
        cy.get("#autocomplete").should('have.value', 'India') 
    }) 

    it("should handle visible and invisible elements using assertions", () => {
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");
    })

    it("verify the radio buttons can be selected one by one, and text is correct", () => {
        
        reusableRadioButton = new MyRadioButton();
        reusableRadioButton.getRadioButtonParent().should("be.visible");
        reusableRadioButton.getRadioButton().should('not.be.checked');
        reusableRadioButton.getRadioButton().check();
        cy.get('input[value="radio3"]').should('be.checked');
        
        reusableRadioButton.getRadioButtonParent().each((el, index) => {  
            cy.wrap(el) 
                .parent()
                .invoke('text')
                .then((label) => { 
                    console.log("this is a label:" + label)
                    let actualName = label; 
                    let expectedName = radioButtonData.radioName[index]; 
                    cy.wrap(actualName).should('contain', expectedName) 
                })
        })
    }) 

})  