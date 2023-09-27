import HomePage from '../examples/PageObject/HomePage';


describe('Form validation', () => {   
    beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.fixture('example').then(value => {
            this.value = value;
        })
    }) 
    it('should submit form successfully',function() {
        let tc1 = new HomePage();
        tc1.getInputName().type(this.value.name); 
        tc1.getInputEmail().type(this.value.email);
        tc1.getInputPassword().type(this.value.password); 

        this.value.gender.forEach(value => {
            tc1.getDropDown().select(value);
        })  
 
            tc1.getFormCheckButtons().check({force:true}); 

        


    })
})