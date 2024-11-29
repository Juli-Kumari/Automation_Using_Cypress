const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // video: true, // capturing videos for every spec
  reporter: 'cypress-mochawesome-reporter', // for HTML report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);// for HTML report
    },
  },
},
);
