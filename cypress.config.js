const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    MAILOSAUR_API_KEY:"goG5FYFzucSGUiA2"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
