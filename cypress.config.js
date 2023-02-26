const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bevum8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/**/*.{js,feature,cy}",
    baseUrl:"http://www.webdriveruniversity.com",
    chromeWebSecurity:false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
  },
});
