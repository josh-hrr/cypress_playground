const { defineConfig } = require("cypress"); 

 

module.exports = defineConfig({
/* 
  e2e stores all properties 
  screenshotfolder, specPatter, test runner window size
*/
  env: {
    qa: "https://qa.rahulshettyacademy.com",
    dev: "https://dev.rahulshettyacademy.com",
    prod: "https://rahulshettyacademy.com/angularpractice/"
  },  
  projectId: "5fubrb", 
  e2e: {  
    /*specPattern: 'cypress/integration/examples/*.ts',  */ 
    specPattern: 'cypress/integration/examples/*.ts',
    baseUrl: 'https://rahulshettyacademy.com/angularpractice/' 
  },
});
