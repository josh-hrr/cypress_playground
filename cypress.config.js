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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
    specPattern: 'cypress/integration/examples/*.ts', 
    baseUrl: 'https://rahulshettyacademy.com/angularpractice/' 
  },
});
