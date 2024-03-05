const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f6fw6s',
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
