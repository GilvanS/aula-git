const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f6fw6s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
