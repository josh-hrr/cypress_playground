const { defineConfig } = require("cypress"); 
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on:any, config:any) { 
  require('cypress-mochawesome-reporter/plugin')(on);
  on('task', { 
    excelToJsonConverter(filePath:any){ 
        const result = excelToJson({
        source: fs.readFileSync(filePath)
      });
      return result;
    }
  }) 
  return config;
}   

module.exports = defineConfig({
/* 
  e2e stores all properties 
  screenshotfolder, specPatter, test runner window size
*/
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false, 
  env: {
    qa: "https://qa.rahulshettyacademy.com",
    dev: "https://dev.rahulshettyacademy.com",
    prod: "https://rahulshettyacademy.com/angularpractice/"
  },   
  projectId: "5fubrb", 
  e2e: {  
    /*specPattern: 'cypress/integration/examples/*.ts',  */ 
    setupNodeEvents,
    specPattern: '**/*.ts',
    baseUrl: 'https://www.saucedemo.com/' 
  }, 
});
