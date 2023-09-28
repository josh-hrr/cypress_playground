import MyCheckBox from './PageObject/Checkbox';
import MyDropDown from './PageObject/Dropdown';

let reusableCheckBox: MyCheckBox; 
let reusableDropDown: MyDropDown;
interface CheckboxData {
    checkboxName: string[]
}
interface DropdownData {
    dropdownName: string[]
}

describe("Make sure UI web elements behave as per requirement", () => {

    let checkboxData:CheckboxData; 
    let dropdownData:DropdownData;
    beforeEach(()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.fixture("checkbox").then((value:CheckboxData) => { 
            checkboxData = value; 
        })
        cy.fixture("dropdown").then((value:DropdownData) => {
            dropdownData = value;
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


    
    
})