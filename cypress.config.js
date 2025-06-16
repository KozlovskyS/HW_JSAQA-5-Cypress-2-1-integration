const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2qbhgu',
  e2e: {
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
